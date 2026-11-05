import React from 'react';
import { Phone, Mail, Instagram, Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onOpenFlyer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFlyer }) => {
  return (
    <footer className="bg-[#050106] border-t border-[#311027] pt-16 pb-12 text-[#bfa1b5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Col 1: Brand & Cursive Mottos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#ff2a85]/50 flex items-center justify-center bg-[#17091a]">
                <span className="text-[#ff2a85] text-base font-cinzel">☾</span>
              </div>
              <span className="font-cinzel text-xl font-bold tracking-wider text-white">
                HEX &amp; LATHER
              </span>
            </div>
            
            <p className="font-script text-2xl text-[#ff80bf]">
              More than soap... it's a ritual
            </p>

            <p className="text-xs text-[#a88d9f] leading-relaxed">
              Luxury handcrafted cold-process soaps formulated with natural plant butters, 
              mineral-rich clays, and gothic celestial reverence in the heart of Texas.
            </p>

            <div className="text-[11px] uppercase tracking-wider text-[#debcd2] flex items-center gap-2">
              <span className="text-[#ff2a85]">✦</span>
              <span>Cleanse · Recharge · Beautify</span>
            </div>
          </div>

          {/* Col 2: Navigation & Rituals */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              The Sanctuary
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collection" className="hover:text-[#ff80bf] transition-colors">
                  All Ritual Soap Bars
                </a>
              </li>
              <li>
                <a href="#custom-soap" className="hover:text-[#ff80bf] transition-colors">
                  Customize Your Special Soap
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-[#ff80bf] transition-colors">
                  Soap Ritual Quiz
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenFlyer}
                  className="hover:text-[#ff80bf] transition-colors cursor-pointer text-left"
                >
                  Original Brand Sales Slick
                </button>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ff80bf] transition-colors">
                  Wholesale &amp; Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact Information */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              Call / Text Orders
            </h4>
            <p className="text-xs text-[#a88d9f]">
              Direct communication with the maker for bespoke orders:
            </p>
            <div className="space-y-2 text-xs">
              <a 
                href="tel:830-865-6697" 
                className="flex items-center gap-2 text-white hover:text-[#ff80bf] font-mono tabular-nums transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff2a85]" />
                <span>830-865-6697</span>
              </a>
              <a 
                href="mailto:hexnlather33@gmail.com" 
                className="flex items-center gap-2 text-white hover:text-[#ff80bf] transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#ff2a85]" />
                <span>hexnlather33@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-white">
                <Instagram className="w-3.5 h-3.5 text-[#ff2a85]" />
                <span>@HEXNLATHER</span>
              </div>
            </div>
          </div>

          {/* Col 4: Handcrafted With Intention Seal */}
          <div className="space-y-4">
            <h4 className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
              The Artisan Guarantee
            </h4>
            <div className="p-4 rounded-xl bg-[#120515] border border-[#3b122f] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#ff2a85]" />
                <span>Small Batch Handcrafted</span>
              </div>
              <p className="text-[11px] text-[#a88d9f] leading-relaxed">
                Handmade with intention. Zero palm oil, sulfates, or artificial hardening agents. 
                Natural botanicals &amp; cruelty-free.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 border-t border-[#23091c] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c6e83]">
          <div>
            &copy; {new Date().getFullYear()} Hex &amp; Lather. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Natural Ingredients</span>
            <span>·</span>
            <span>Skin Loving</span>
            <span>·</span>
            <span>Gothic &amp; Celestial Themes</span>
          </div>

          <div className="flex items-center gap-1.5 text-white">
            <span className="text-[#ff2a85]">☾</span>
            <span className="font-script text-xl text-[#ff80bf]">Handmade with Intention</span>
            <span className="text-[#ff2a85]">☽</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
