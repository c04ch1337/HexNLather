import React, { useState } from 'react';
import { ShoppingBag, Sparkles, Volume2, VolumeX, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenFlyer: () => void;
  isAudioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenFlyer,
  isAudioPlaying,
  onToggleAudio
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#070308]/90 backdrop-blur-md border-b border-[#3b122f]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-decoration-none"
        >
          {/* Subtle celestial sigil mark */}
          <div className="w-10 h-10 rounded-full border border-[#ff2a85]/50 flex items-center justify-center bg-[#170a1a] shadow-[0_0_15px_rgba(255,42,133,0.3)] group-hover:border-[#ff2a85] transition-all">
            <span className="text-[#ff2a85] text-lg font-cinzel leading-none select-none">☾</span>
          </div>
          <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-[#ffd3ea] transition-colors">
            HEX &amp; LATHER
          </span>
        </a>

        {/* Zone 2: 4–5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#d9c4d4]">
          <a 
            href="#collection" 
            className="hover:text-[#ff2a85] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#ff2a85]/60"
          >
            Soap Rituals
          </a>
          <a 
            href="#custom-soap" 
            className="hover:text-[#ff2a85] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#ff2a85]/60"
          >
            Customizer
          </a>
          <a 
            href="#quiz" 
            className="hover:text-[#ff2a85] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#ff2a85]/60"
          >
            Ritual Quiz
          </a>
          <button 
            type="button"
            onClick={onOpenFlyer}
            className="hover:text-[#ff2a85] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#ff2a85]/60 cursor-pointer text-left"
          >
            Brand Slick
          </button>
          <a 
            href="#contact" 
            className="hover:text-[#ff2a85] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 decoration-[#ff2a85]/60"
          >
            Contact &amp; Custom
          </a>
        </nav>

        {/* Zone 3: 1 primary action (plus quick utilities) */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Ambient Candle Crackle Toggle */}
          <button
            type="button"
            onClick={onToggleAudio}
            title={isAudioPlaying ? "Mute Candle Ambience" : "Play Candle & Rain Ambience"}
            aria-label={isAudioPlaying ? "Mute Candle Ambience" : "Play Candle & Rain Ambience"}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-[#180c1d] border border-[#ff2a85]/30 text-[#e6b4d3] hover:text-[#ff2a85] hover:border-[#ff2a85] transition-all cursor-pointer"
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4 text-[#ff2a85]" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Quick Call link for urgent mobile orders */}
          <a
            href="tel:830-865-6697"
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#f7c2e0] border border-[#ff2a85]/40 rounded-md hover:bg-[#ff2a85]/10 transition-colors"
            title="Call to customize your special soap"
          >
            <Phone className="w-3.5 h-3.5 text-[#ff2a85]" />
            <span className="font-mono">830-865-6697</span>
          </a>

          {/* Primary Action: Shopping Bag */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e01a69] to-[#b31252] hover:from-[#ff2a85] hover:to-[#c71761] text-white rounded-lg text-xs uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(255,42,133,0.35)] transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">Ritual Bag</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-bold bg-white text-[#990a42] rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md bg-[#180c1d] border border-[#3b122f] text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a050d] border-b border-[#3b122f] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm">
            <a 
              href="#collection" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f1d7e8] hover:text-[#ff2a85] py-1"
            >
              Soap Rituals
            </a>
            <a 
              href="#custom-soap" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f1d7e8] hover:text-[#ff2a85] py-1"
            >
              Customize Your Bar
            </a>
            <a 
              href="#quiz" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f1d7e8] hover:text-[#ff2a85] py-1"
            >
              Ritual Quiz
            </a>
            <button 
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFlyer();
              }}
              className="text-left text-[#f1d7e8] hover:text-[#ff2a85] py-1"
            >
              Original Brand Slick
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#f1d7e8] hover:text-[#ff2a85] py-1"
            >
              Contact &amp; Custom Orders
            </a>
          </nav>
          <div className="pt-3 border-t border-[#3b122f] flex items-center justify-between text-xs text-[#e6b4d3]">
            <a href="tel:830-865-6697" className="flex items-center gap-1.5 text-[#ff2a85]">
              <Phone className="w-3.5 h-3.5" />
              <span>Call / Text: (830) 865-6697</span>
            </a>
            <button 
              type="button"
              onClick={onToggleAudio}
              className="flex items-center gap-1 text-[#d9c4d4]"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4 text-[#ff2a85]" /> : <VolumeX className="w-4 h-4" />}
              <span>{isAudioPlaying ? 'Mute Sound' : 'Play Ambience'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
