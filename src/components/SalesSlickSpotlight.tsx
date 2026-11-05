import React from 'react';
import { Eye, Sparkles, Phone, Mail, Instagram, ExternalLink, Check } from 'lucide-react';

interface SalesSlickSpotlightProps {
  onOpenFlyerModal: () => void;
}

export const SalesSlickSpotlight: React.FC<SalesSlickSpotlightProps> = ({
  onOpenFlyerModal
}) => {
  return (
    <section className="py-20 bg-[#08020a] relative border-t border-[#311027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Story & Authentic Sales Slick Vision */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#ff80bf] font-semibold">
              <Sparkles className="w-4 h-4 text-[#ff2a85]" />
              <span>Official Sales Slick &amp; Origin</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Self Care With A <span className="text-metallic-pink">Darker Touch</span>
            </h2>

            <p className="font-script text-3xl text-[#ff80bf]">
              More than soap... it's a ritual
            </p>

            <p className="text-sm sm:text-base text-[#cfb6c8] leading-relaxed">
              Welcome to the digital sanctuary of Hex &amp; Lather. Founded with a fierce devotion to small-batch 
              alchemy, our luxury handcrafted soaps are designed to turn routine bathing into a transformative 
              ceremony that cleanses the skin, recharges depleted spirit, and beautifies the body.
            </p>

            {/* Exact flyer highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#140618] border border-[#3b122f]">
                <div className="font-cinzel text-sm font-bold text-white mb-1">
                  100% Intention
                </div>
                <div className="text-xs text-[#a88d9f]">
                  Handmade in micro-batches with slow herbal infusions and natural minerals.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#140618] border border-[#3b122f]">
                <div className="font-cinzel text-sm font-bold text-white mb-1">
                  Custom Orders
                </div>
                <div className="text-xs text-[#a88d9f]">
                  Call or text directly to formulate your bespoke seasonal batch.
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenFlyerModal}
                className="px-6 py-3 bg-[#e01a69] hover:bg-[#ff2a85] text-white font-cinzel text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,42,133,0.35)] transition-all flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Full-Res Sales Slick</span>
              </button>

              <a
                href="tel:830-865-6697"
                className="px-5 py-3 bg-[#18071c] hover:bg-[#280c2e] text-[#ffd6ec] border border-[#ff2a85]/40 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#ff2a85]" />
                <span>Call (830) 865-6697</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Presentation of the Sales Slick Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div 
              className="group relative max-w-sm sm:max-w-md w-full rounded-2xl p-2.5 bg-gradient-to-b from-[#ff2a85]/40 via-[#3b122f]/80 to-[#ff2a85]/30 shadow-[0_0_50px_rgba(255,42,133,0.3)] transition-all duration-500 hover:shadow-[0_0_70px_rgba(255,42,133,0.5)] cursor-pointer"
              onClick={onOpenFlyerModal}
            >
              <div className="relative rounded-xl overflow-hidden bg-[#09030a]">
                <img
                  src="/assets/aistudio/Hex_and_Lather_4337822a.jpg"
                  alt="Hex & Lather Luxury Handcrafted Soap Sales Slick"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="px-5 py-2.5 bg-[#e01a69] text-white rounded-xl text-xs font-cinzel uppercase tracking-wider font-bold shadow-xl flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>Click to Zoom &amp; Inspect Flyer</span>
                  </div>
                </div>
              </div>

              {/* Caption banner beneath image */}
              <div className="mt-3 text-center text-xs text-[#debcd2] flex items-center justify-center gap-2">
                <span className="text-[#ff2a85]">☾</span>
                <span className="font-cinzel uppercase tracking-wider text-[11px]">The Original Hex &amp; Lather Sales Slick</span>
                <span className="text-[#ff2a85]">☽</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
