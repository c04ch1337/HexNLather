import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Phone, Mail, Instagram, Sparkles, MessageSquare } from 'lucide-react';

interface OriginalFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OriginalFlyerModal: React.FC<OriginalFlyerModalProps> = ({
  isOpen,
  onClose
}) => {
  const [zoomed, setZoomed] = useState(false);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#100513] border border-[#ff2a85]/50 rounded-2xl shadow-[0_0_60px_rgba(255,42,133,0.35)] overflow-hidden my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#19061c] via-[#2a0c2d] to-[#19061c] border-b border-[#3b122f] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#ff2a85] text-lg font-cinzel">☾</span>
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white tracking-wider">
                Hex &amp; Lather Sales Slick
              </h3>
              <p className="text-[11px] text-[#e6b4d3]">
                Official Brand Artwork &amp; Sales Sheet
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomed(!zoomed)}
              className="p-2 rounded-lg bg-[#19061b] border border-[#3b122f] text-[#cfb6c8] hover:text-white transition-colors cursor-pointer"
              title={zoomed ? "Zoom out" : "Zoom in"}
            >
              {zoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#19061b] border border-[#3b122f] text-[#cfb6c8] hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Display Area */}
        <div className="p-4 sm:p-6 bg-[#070208] flex justify-center max-h-[75vh] overflow-auto">
          <div className={`transition-all duration-300 ${zoomed ? 'scale-125 origin-top' : 'max-w-md w-full'}`}>
            <img
              src="/assets/aistudio/Hex_and_Lather_4337822a.jpg"
              alt="Hex & Lather Luxury Handcrafted Soap Sales Slick"
              className="w-full h-auto rounded-xl shadow-2xl border border-[#ff2a85]/30 object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Footer with exact contact information from the flyer */}
        <div className="p-4 sm:p-5 bg-[#0f0412] border-t border-[#3b122f] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[#d8bfcf]">
            <a href="tel:830-865-6697" className="flex items-center gap-1.5 text-white hover:text-[#ff2a85]">
              <Phone className="w-3.5 h-3.5 text-[#ff2a85]" />
              <span className="font-mono tabular-nums">830-865-6697</span>
            </a>
            <a href="mailto:hexnlather33@gmail.com" className="flex items-center gap-1.5 text-white hover:text-[#ff2a85]">
              <Mail className="w-3.5 h-3.5 text-[#ff2a85]" />
              <span>hexnlather33@gmail.com</span>
            </a>
            <span className="flex items-center gap-1.5 text-[#debcd2]">
              <Instagram className="w-3.5 h-3.5 text-[#ff2a85]" />
              <span>@HEXNLATHER</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="sms:830-865-6697?&body=Hello%20Hex%20%26%20Lather!%20I%20am%20viewing%20your%20sales%20slick%20and%20would%20love%20to%20customize%20a%20soap."
              className="px-4 py-2 bg-[#e01a69] hover:bg-[#ff2a85] text-white rounded-lg font-semibold tracking-wider uppercase text-[11px] transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Text To Order</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
