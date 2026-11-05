import React from 'react';
import { Phone, MessageSquare, Sparkles, ArrowRight, Eye, ShieldCheck, Heart } from 'lucide-react';

interface HeroProps {
  onOpenCustomizer: () => void;
  onOpenFlyer: () => void;
  onExploreCollection: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCustomizer,
  onOpenFlyer,
  onExploreCollection
}) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#2d1226]/80">
      {/* Background ambient lighting and smoke glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-[#ff2a85]/15 via-[#a855f7]/10 to-transparent blur-3xl opacity-75" />
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-[#ff1493]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#db2777]/12 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Kicker Bar: Clean unboxed metadata with typographic separators */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs uppercase tracking-widest text-[#f5bfdc] font-medium mb-8 text-center">
          <span>Natural Ingredients</span>
          <span className="text-[#ff2a85]" aria-hidden="true">✦</span>
          <span>Handmade</span>
          <span className="text-[#ff2a85]" aria-hidden="true">✦</span>
          <span>Small Batch</span>
          <span className="text-[#ff2a85]" aria-hidden="true">✦</span>
          <span>Self Care With A Darker Touch</span>
        </div>

        {/* Central Gothic Celestial Emblem & Moon Phase */}
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Triple Moon with Pentagram Sigil from sales slick */}
          <div className="relative mb-5 flex items-center justify-center">
            {/* Ambient candle on left */}
            <div className="hidden sm:flex flex-col items-center absolute -left-28 -top-4 opacity-85">
              <div className="w-2.5 h-6 rounded-full bg-gradient-to-t from-[#ff1493] via-[#ff69b4] to-[#ffffff] animate-candle-flame shadow-[0_0_16px_#ff2a85]" />
              <div className="w-4 h-12 bg-gradient-to-b from-[#180816] to-[#0d040c] rounded-t-sm border-t border-[#ff2a85]/40" />
            </div>

            {/* Glowing Pentagram Crescent Moon Sigil */}
            <div className="relative flex items-center gap-3">
              <span className="text-[#f472b6] text-xl opacity-75">☾</span>
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#ff2a85] flex items-center justify-center bg-[#150718] shadow-[0_0_35px_rgba(255,42,133,0.5)] relative">
                {/* SVG Pentacle */}
                <svg viewBox="0 0 100 100" className="w-10 h-10 sm:w-12 sm:h-12 text-[#ff69b4] stroke-current fill-none stroke-[2.5]">
                  <circle cx="50" cy="50" r="45" className="stroke-[#ff2a85]/50 stroke-[1.5]" />
                  <polygon points="50,5 64,88 5,36 95,36 36,88" className="stroke-[#ffd3ea] stroke-[2]" />
                </svg>
                {/* Small orbiting star sparkle */}
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#ffd3ea] rounded-full shadow-[0_0_8px_#ffffff]" />
              </div>
              <span className="text-[#f472b6] text-xl opacity-75">☽</span>
            </div>

            {/* Ambient candle on right */}
            <div className="hidden sm:flex flex-col items-center absolute -right-28 -top-4 opacity-85">
              <div className="w-2.5 h-6 rounded-full bg-gradient-to-t from-[#ff1493] via-[#ff69b4] to-[#ffffff] animate-candle-flame shadow-[0_0_16px_#ff2a85]" />
              <div className="w-4 h-12 bg-gradient-to-b from-[#180816] to-[#0d040c] rounded-t-sm border-t border-[#ff2a85]/40" />
            </div>
          </div>

          {/* Main Brand Title with Rose Gold Metallic Sheen */}
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-white glow-pink-text leading-none select-none max-w-4xl text-balance">
            <span className="text-metallic-pink">HEX &amp; LATHER</span>
          </h1>

          {/* Sub-headline directly from flyer */}
          <p className="mt-4 font-cinzel text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#f4bfdc] uppercase font-semibold">
            Luxury Handcrafted Soap
          </p>

          {/* Cursive Signature Tagline */}
          <p className="mt-3 font-script text-3xl sm:text-4xl md:text-5xl text-[#ff80bf] tracking-wide transform -rotate-1 drop-shadow-[0_2px_12px_rgba(255,42,133,0.4)]">
            More than soap... it's a ritual
          </p>

          {/* Triad Intention: Cleanse · Recharge · Beautify */}
          <div className="mt-5 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#1c0a1a]/80 border border-[#ff2a85]/30 text-xs sm:text-sm tracking-wider uppercase text-[#fbebf4]">
            <span className="text-[#ff69b4] font-medium">Cleanse</span>
            <span className="text-[#ff2a85]" aria-hidden="true">✦</span>
            <span className="text-[#ff69b4] font-medium">Recharge</span>
            <span className="text-[#ff2a85]" aria-hidden="true">✦</span>
            <span className="text-[#ff69b4] font-medium">Beautify</span>
          </div>

          {/* Action CTAs & Phone Customizer */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
            
            {/* Primary Action Button: Explore Collection */}
            <button
              type="button"
              onClick={onExploreCollection}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#ff2a85] to-[#c2185b] hover:from-[#ff4d9d] hover:to-[#d81b60] text-white font-cinzel tracking-wider text-xs sm:text-sm uppercase font-bold rounded-xl shadow-[0_0_25px_rgba(255,42,133,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore The Rituals</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action Button: Build Custom Soap */}
            <button
              type="button"
              onClick={onOpenCustomizer}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#170919] hover:bg-[#250d28] text-[#ffd6ec] border border-[#ff2a85]/50 hover:border-[#ff2a85] font-cinzel tracking-wider text-xs sm:text-sm uppercase font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,42,133,0.15)]"
            >
              <Sparkles className="w-4 h-4 text-[#ff2a85]" />
              <span>Customize Your Special Bar</span>
            </button>

            {/* Quick Flyer Lightbox trigger */}
            <button
              type="button"
              onClick={onOpenFlyer}
              className="w-full sm:w-auto px-5 py-3.5 bg-transparent hover:bg-white/5 text-[#d9bed2] hover:text-white border border-[#3b122f] hover:border-[#ff2a85]/40 text-xs tracking-wider uppercase font-medium rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#f472b6]" />
              <span>View Brand Sales Slick</span>
            </button>
          </div>

          {/* Direct Call / Text Callout Box directly from sales slick */}
          <div className="mt-10 w-full max-w-2xl bg-gradient-to-r from-[#170818]/90 via-[#230c23]/95 to-[#170818]/90 p-5 sm:p-6 rounded-2xl border border-[#ff2a85]/40 shadow-[0_0_30px_rgba(255,42,133,0.2)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff2a85]/15 border border-[#ff2a85]/60 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,42,133,0.3)]">
                  <Phone className="w-6 h-6 text-[#ff2a85]" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-[#f5b8db] font-semibold">
                    Call or Text to Customize
                  </div>
                  <a 
                    href="tel:830-865-6697" 
                    className="font-cinzel text-2xl sm:text-3xl font-bold tracking-wider text-white hover:text-[#ff69b4] transition-colors block leading-tight tabular-nums"
                  >
                    830-865-6697
                  </a>
                  <div className="text-xs text-[#d1b2c8] mt-0.5">
                    Your Special Soap · Texas Hill Country Crafted
                  </div>
                </div>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:830-865-6697"
                  className="px-4 py-2 bg-[#ff2a85]/20 hover:bg-[#ff2a85]/30 text-[#ffd5eb] border border-[#ff2a85]/50 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff2a85]" />
                  <span>Call Now</span>
                </a>
                <a
                  href="sms:830-865-6697?&body=Hi%20Hex%20%26%20Lather!%20I%20would%20love%20to%20customize%20a%20handcrafted%20soap%20ritual%20bar."
                  className="px-4 py-2 bg-[#e01a69] hover:bg-[#ff2a85] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,42,133,0.3)]"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Text Us</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
