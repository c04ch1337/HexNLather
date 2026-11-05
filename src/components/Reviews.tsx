import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, CheckCircle } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-[#070208] relative border-t border-[#311027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.25em] text-[#ff80bf] font-semibold mb-2">
            Ritual Experiences
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tested &amp; Adored By The Coven
          </h2>
          <p className="mt-2 text-sm text-[#caaaba]">
            Real feedback from customers throughout Texas and across the country who made Hex &amp; Lather part of their daily sacred bathing routine.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-[#120515] p-6 rounded-2xl border border-[#3b122f] flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Star Rating & Product Title */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#ffd3ea]">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-[#ff2a85] text-sm">★</span>
                    ))}
                  </div>
                  <span className="text-[11px] uppercase tracking-wider text-[#a88d9f]">
                    {test.product}
                  </span>
                </div>

                <p className="text-sm text-[#e6cedd] leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Attributable Author Info */}
              <div className="pt-4 border-t border-[#311127] flex items-center justify-between">
                <div>
                  <div className="font-cinzel text-sm font-bold text-white">
                    {test.name}
                  </div>
                  <div className="text-xs text-[#9c7e92]">
                    {test.location}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#ff80bf]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#ff2a85]" />
                  <span>Verified Ritual</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
