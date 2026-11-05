import React from 'react';
import { Droplet, Sparkles, Moon, Star, Feather, Shield } from 'lucide-react';

export const CorePillars: React.FC = () => {
  const pillars = [
    {
      title: 'Natural Ingredients',
      description: 'Organic unrefined plant butters, cold-pressed seed oils, and mineral-rich natural clays. Zero sulfates, phthalates, synthetic detergents, or harsh foaming chemicals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff69b4]">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" opacity="0.3" />
          <path d="M12 2c5 4 6 10 2 14s-8 2-9-2c3-1 6-4 7-12z" />
          <path d="M12 12c-2 2-3 5-3 7" />
        </svg>
      ),
      highlight: 'Plant-Based Alchemy'
    },
    {
      title: 'Skin Loving',
      description: 'Formulated to pamper and protect your cutaneous barrier. Rich Texas goat milk, creamy raw kokum butter, and organic jojoba deliver deep, lasting cellular hydration.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff69b4]">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <line x1="12" y1="22" x2="12" y2="15.5" />
          <polyline points="22 8.5 12 15.5 2 8.5" />
        </svg>
      ),
      highlight: 'Ultra-Hydrating Foam'
    },
    {
      title: 'Unique Scents',
      description: 'Enchanting bespoke aromatic accords you won’t find in mainstream stores: smoked French lavender, dark damask rose, midnight frankincense, velvet oud, and blackberry sage.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff69b4]">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ),
      highlight: 'Intoxicating Aromas'
    },
    {
      title: 'Gothic & Celestial Themes',
      description: 'Handcrafted with intention under astrological moon phases. Adorned with natural crystal quartz dust, botanical rosebuds, and sacred geometry sigils.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-8 h-8 text-[#ff69b4]">
          <circle cx="12" cy="12" r="9" opacity="0.3" />
          <polygon points="12 4 14.5 9 20 9.8 16 13.7 17 19.2 12 16.5 7 19.2 8 13.7 4 9.8 9.5 9" />
        </svg>
      ),
      highlight: 'Handmade with Intention'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#09040a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[#ff80bf] font-semibold mb-2">
            The Hex &amp; Lather Philosophy
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Four Pillars of Celestial Self-Care
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d8c2d3] font-light leading-relaxed">
            Every bar is slowly cold-processed in small micro-batches with pure botanical extracts, 
            ritual intention, and nourishing fats that leave skin silky, calm, and deeply rejuvenated.
          </p>
        </div>

        {/* 4 Medallion Pillars from Sales Slick */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative bg-[#130716]/80 hover:bg-[#1a0a1f] p-6 rounded-2xl border border-[#3b122f] hover:border-[#ff2a85]/60 transition-all duration-300 flex flex-col items-center text-center shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,42,133,0.2)]"
            >
              {/* Circular Emblem Container */}
              <div className="w-20 h-20 rounded-full border-2 border-[#ff2a85]/40 group-hover:border-[#ff2a85] bg-[#1d0922] flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(255,42,133,0.25)] group-hover:scale-105 transition-transform duration-300">
                {pillar.icon}
              </div>

              {/* Clean inline kicker - no pill */}
              <div className="text-xs font-medium text-[#f472b6] tracking-wider uppercase mb-1">
                {pillar.highlight}
              </div>

              <h3 className="font-cinzel text-lg font-bold text-white tracking-wide mb-2.5">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#caaaba] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting proof banner */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-[#170719] via-[#240b25] to-[#170719] border border-[#ff2a85]/30 flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <div className="font-cinzel text-2xl font-bold text-white tabular-nums">100%</div>
            <div className="text-xs text-[#debcd2] uppercase tracking-wider">Natural Plant Bases</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#ff2a85]/30" />
          <div>
            <div className="font-cinzel text-2xl font-bold text-white tabular-nums">4 to 6</div>
            <div className="text-xs text-[#debcd2] uppercase tracking-wider">Weeks Cure Time</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#ff2a85]/30" />
          <div>
            <div className="font-cinzel text-2xl font-bold text-white tabular-nums">Small Batch</div>
            <div className="text-xs text-[#debcd2] uppercase tracking-wider">Texas Handcrafted</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#ff2a85]/30" />
          <div>
            <div className="font-cinzel text-2xl font-bold text-white">Zero Waste</div>
            <div className="text-xs text-[#debcd2] uppercase tracking-wider">Biodegradable Formula</div>
          </div>
        </div>

      </div>
    </section>
  );
};
