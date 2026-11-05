import React, { useState } from 'react';
import { SoapProduct } from '../types';
import { PRODUCTS } from '../data/products';
import { Eye, Plus, ShoppingBag, Sparkles } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (product: SoapProduct) => void;
  onAddToCart: (product: SoapProduct) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Ritual Bars' },
    { id: 'celestial', label: 'Celestial & Moon' },
    { id: 'ritual', label: 'Purifying Rituals' },
    { id: 'botanical', label: 'Dark Botanicals' },
    { id: 'cleanse', label: 'Deep Cleanse' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collection" className="py-20 bg-[#070308] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#ff80bf] font-semibold mb-2">
              <span>Handmade with Intention</span>
              <span aria-hidden="true">·</span>
              <span>Texas Small Batch</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white">
              The Ritual Soap Collection
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#d1b3c7] max-w-xl">
              Cured for 6 weeks. Rich botanical cold-process soaps designed to cleanse your skin, 
              recharge your spirit, and elevate daily bathing into a transformative sacred ritual.
            </p>
          </div>

          {/* Interactive filter tabs / segmented controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#17081a] border border-[#3b122f] rounded-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#e01a69] text-white shadow-[0_0_15px_rgba(255,42,133,0.4)]'
                    : 'text-[#d6bed0] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#130616] rounded-2xl border border-[#3b122f] hover:border-[#ff2a85]/60 transition-all duration-300 flex flex-col overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(255,42,133,0.22)]"
            >
              {/* Product Visual Container */}
              <div 
                className="relative h-64 sm:h-72 w-full flex items-center justify-center p-6 overflow-hidden cursor-pointer"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${product.colorHex} 0%, #09030a 100%)`
                }}
                onClick={() => onSelectProduct(product)}
              >
                {/* Visual Ambient Aura */}
                <div 
                  className="absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: product.accentGlow }}
                />

                {/* Handcrafted Gothic Bar Stylized Graphic Representation */}
                <div className="relative z-10 w-44 h-44 rounded-2xl bg-gradient-to-br from-[#260f29] via-[#160619] to-[#0c040d] border border-[#ff2a85]/40 shadow-[0_15px_35px_rgba(0,0,0,0.8)] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 flex flex-col justify-between p-4">
                  {/* Top Bar Engraving */}
                  <div className="flex items-center justify-between text-[#ff80bf]/70 text-[10px] uppercase font-cinzel tracking-widest">
                    <span>Hex &amp; Lather</span>
                    <span className="text-base leading-none text-[#ff2a85]">{product.symbol}</span>
                  </div>

                  {/* Center Sigil */}
                  <div className="flex flex-col items-center justify-center my-auto">
                    <div className="w-12 h-12 rounded-full border border-[#ff2a85]/40 flex items-center justify-center bg-[#0d040e]/90 shadow-[inset_0_0_12px_rgba(255,42,133,0.3)]">
                      <span className="text-[#ffd3ea] text-xl font-cinzel select-none">{product.symbol}</span>
                    </div>
                    <span className="font-cinzel text-[11px] font-bold tracking-wider text-white mt-2 text-center uppercase">
                      {product.name}
                    </span>
                  </div>

                  {/* Bottom Ritual Tag */}
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-[#d1adc4]">
                    <span>{product.weight}</span>
                    <span className="text-[#ff69b4] font-medium">{product.ritualIntention}</span>
                  </div>
                </div>

                {/* Quick inspect overlay button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(product);
                  }}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-[#180a1c]/80 hover:bg-[#ff2a85] text-white border border-[#ff2a85]/40 transition-colors shadow-lg cursor-pointer"
                  title="View Ritual Details"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center justify-between text-xs text-[#debcd2] mb-1.5 font-medium">
                    <span className="text-[#ff80bf] uppercase tracking-wider text-[11px]">
                      {product.ritualIntention} Ritual
                    </span>
                    <div className="flex items-center gap-1 text-[#ffd3ea]">
                      <span>★</span>
                      <span className="font-mono tabular-nums text-white text-xs">{product.rating}</span>
                      <span className="text-[#a88d9f]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-cinzel text-xl font-bold text-white hover:text-[#ff80bf] transition-colors cursor-pointer tracking-wide"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#deb0cb] mt-1 font-medium">
                    {product.subtitle}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-[#b89baa] line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>

                {/* Scent notes summary */}
                <div className="mt-4 pt-4 border-t border-[#311127] text-xs text-[#c9a7be]">
                  <span className="text-[#debcd2] font-semibold">Notes:</span>{' '}
                  <span className="italic">{product.scentProfile.top}</span>
                </div>

                {/* Footer with Price and Quick Add */}
                <div className="mt-5 pt-4 border-t border-[#311127] flex items-center justify-between gap-4">
                  <div>
                    <div className="font-cinzel text-xl font-bold text-white tabular-nums tracking-wide">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="text-[11px] text-[#9c8092]">{product.weight}</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="px-3 py-2 text-xs text-[#f1d7e8] hover:text-white border border-[#3b122f] hover:border-[#ff2a85]/50 rounded-lg transition-colors cursor-pointer"
                    >
                      Ritual
                    </button>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="px-4 py-2 bg-[#e01a69] hover:bg-[#ff2a85] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,42,133,0.3)] cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
