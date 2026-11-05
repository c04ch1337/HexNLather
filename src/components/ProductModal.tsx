import React, { useState } from 'react';
import { SoapProduct } from '../types';
import { X, Sparkles, Check, ShoppingBag, Droplets, Feather, Shield, Heart } from 'lucide-react';

interface ProductModalProps {
  product: SoapProduct | null;
  onClose: () => void;
  onAddToCart: (product: SoapProduct, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'ritual' | 'ingredients' | 'scent'>('ritual');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#110514] border border-[#ff2a85]/40 rounded-2xl shadow-[0_0_50px_rgba(255,42,133,0.3)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-r from-[#1c081e] via-[#2a0e2d] to-[#1c081e] border-b border-[#3b122f]">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#18081a] border border-[#ff2a85]/40 hover:bg-[#ff2a85] text-[#d6b7ce] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ff80bf] font-semibold mb-2">
            <span>{product.ritualIntention} Ritual</span>
            <span aria-hidden="true">·</span>
            <span>Handmade with Intention</span>
            <span aria-hidden="true">·</span>
            <span>{product.weight}</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-wide">
            {product.name}
          </h2>
          <p className="text-sm text-[#f5bedc] mt-1 font-medium">
            {product.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* Main Description */}
          <p className="text-sm sm:text-base text-[#d8c0d2] leading-relaxed">
            {product.description}
          </p>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#3b122f] gap-6 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setActiveTab('ritual')}
              className={`pb-3 font-medium transition-colors cursor-pointer ${
                activeTab === 'ritual'
                  ? 'text-[#ff80bf] border-b-2 border-[#ff2a85]'
                  : 'text-[#9c7e92] hover:text-[#e0cad8]'
              }`}
            >
              The Bathing Ritual
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('scent')}
              className={`pb-3 font-medium transition-colors cursor-pointer ${
                activeTab === 'scent'
                  ? 'text-[#ff80bf] border-b-2 border-[#ff2a85]'
                  : 'text-[#9c7e92] hover:text-[#e0cad8]'
              }`}
            >
              Scent Notes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ingredients')}
              className={`pb-3 font-medium transition-colors cursor-pointer ${
                activeTab === 'ingredients'
                  ? 'text-[#ff80bf] border-b-2 border-[#ff2a85]'
                  : 'text-[#9c7e92] hover:text-[#e0cad8]'
              }`}
            >
              Natural Ingredients
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'ritual' && (
            <div className="space-y-4">
              <div className="font-cinzel text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#ff2a85]" />
                <span>Ceremonial Usage Instructions</span>
              </div>
              <div className="space-y-3">
                {product.ritualSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#cfb6c8]">
                    <div className="w-6 h-6 rounded-full bg-[#270b29] border border-[#ff2a85]/50 flex items-center justify-center shrink-0 font-cinzel text-[#ffd3ea] text-xs font-bold">
                      {idx + 1}
                    </div>
                    <p className="mt-0.5 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              {/* Skin Benefits */}
              <div className="mt-6 pt-4 border-t border-[#3b122f]/60">
                <div className="font-cinzel text-xs font-bold text-[#f5bfdc] uppercase tracking-wider mb-2">
                  Skin-Loving Benefits
                </div>
                <div className="space-y-1.5">
                  {product.skinBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#be9fad]">
                      <span className="text-[#ff2a85]">✧</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scent' && (
            <div className="space-y-4">
              <div className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
                Aromatic Scent Architecture
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#1a081d] border border-[#3b122f]">
                  <div className="text-[11px] uppercase tracking-wider text-[#ff80bf] font-semibold mb-1">
                    Top Notes
                  </div>
                  <div className="text-xs text-[#f1d7e8] leading-relaxed">
                    {product.scentProfile.top}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#1a081d] border border-[#3b122f]">
                  <div className="text-[11px] uppercase tracking-wider text-[#ff80bf] font-semibold mb-1">
                    Heart Notes
                  </div>
                  <div className="text-xs text-[#f1d7e8] leading-relaxed">
                    {product.scentProfile.heart}
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#1a081d] border border-[#3b122f]">
                  <div className="text-[11px] uppercase tracking-wider text-[#ff80bf] font-semibold mb-1">
                    Base Notes
                  </div>
                  <div className="text-xs text-[#f1d7e8] leading-relaxed">
                    {product.scentProfile.base}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-4">
              <div className="font-cinzel text-sm font-bold text-white uppercase tracking-wider">
                100% Pure &amp; Natural Formulation
              </div>
              <p className="text-xs text-[#b89baa]">
                Clean, organic, ethically sourced. Free of palm oil, sulfates, parabens, and synthetic preservatives.
              </p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs text-[#debcd2] bg-[#1a081d] border border-[#3b122f] px-3 py-1.5 rounded-lg"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Purchase Module Footer */}
        <div className="p-6 bg-[#0c040d] border-t border-[#3b122f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <div className="font-cinzel text-2xl font-bold text-white tabular-nums">
                ${(product.price * quantity).toFixed(2)}
              </div>
              <div className="text-[11px] text-[#9c8092]">
                ${product.price.toFixed(2)} each · Handcrafted
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center border border-[#3b122f] rounded-lg overflow-hidden bg-[#160619]">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 text-[#d8bfcf] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-3 py-1.5 text-xs font-mono text-white tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 text-[#d8bfcf] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`w-full sm:w-auto px-7 py-3 rounded-xl font-cinzel text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
              added
                ? 'bg-emerald-600 text-white'
                : 'bg-gradient-to-r from-[#ff2a85] to-[#c2185b] hover:from-[#ff4d9d] text-white shadow-[0_0_20px_rgba(255,42,133,0.4)]'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Ritual Bag</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
