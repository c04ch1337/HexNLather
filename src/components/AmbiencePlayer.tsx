import React, { useEffect, useRef } from 'react';

interface AmbiencePlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const AmbiencePlayer: React.FC<AmbiencePlayerProps> = ({
  isPlaying
}) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    if (isPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Create pink/crackling noise buffer (3 seconds looped)
        const bufferSize = ctx.sampleRate * 3;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          // Pink noise filter algorithm
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          b6 = white * 0.115926;

          // Add occasional candle fire crackle pops
          const crackle = Math.random() < 0.003 ? (Math.random() - 0.5) * 1.5 : 0;
          output[i] = (pink * 0.06 + crackle * 0.15);
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;
        noiseSourceRef.current = whiteNoise;

        // Low-pass filter for cozy warm room fireplace vibe
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.01, ctx.currentTime);
        // Gentle fade in
        gainNode.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
        gainNodeRef.current = gainNode;

        whiteNoise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        whiteNoise.start(0);
      } catch (err) {
        console.warn('Web Audio ambience failed to initialize:', err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        try {
          gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, audioCtxRef.current.currentTime);
          gainNodeRef.current.gain.linearRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.5);
          setTimeout(() => {
            if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
              audioCtxRef.current.close();
            }
          }, 600);
        } catch {
          // ignore cleanup errors
        }
      }
    }

    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {
          // cleanup
        }
      }
    };
  }, [isPlaying]);

  return null;
};
