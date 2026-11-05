/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SoapProduct, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CorePillars } from './components/CorePillars';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductModal } from './components/ProductModal';
import { CustomSoapBuilder } from './components/CustomSoapBuilder';
import { RitualQuiz } from './components/RitualQuiz';
import { SalesSlickSpotlight } from './components/SalesSlickSpotlight';
import { Reviews } from './components/Reviews';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OriginalFlyerModal } from './components/OriginalFlyerModal';
import { AmbiencePlayer } from './components/AmbiencePlayer';
import { X, Sparkles, Phone } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('hex_lather_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<SoapProduct | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hex_lather_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('Could not save cart:', e);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: SoapProduct, quantity = 1, customNotes?: string) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, customNotes }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070308] text-[#f4e8f1] font-sans selection:bg-[#ff2a85] selection:text-white">
      
      {/* Synthesized candle crackle ambience player */}
      <AmbiencePlayer
        isPlaying={isAudioPlaying}
        onToggle={() => setIsAudioPlaying(!isAudioPlaying)}
      />

      {/* Slim Promotional Announcement Bar (§2 & §1.C) */}
      {!bannerDismissed && (
        <aside 
          aria-label="Promotional banner"
          className="bg-gradient-to-r from-[#1f0621] via-[#350b39] to-[#1f0621] border-b border-[#ff2a85]/40 py-2 px-4 text-center text-xs text-[#ffd6ec] flex items-center justify-between gap-4 sticky top-0 z-50 shadow-md"
        >
          <div className="flex-1 flex items-center justify-center gap-2 truncate">
            <Sparkles className="w-3.5 h-3.5 text-[#ff2a85] shrink-0" />
            <span className="truncate">
              Complimentary Texas Hill Country delivery on orders $45+ · Call or text{' '}
              <a href="tel:830-865-6697" className="underline font-bold text-white hover:text-[#ff80bf]">
                830-865-6697
              </a>{' '}
              to customize your special soap
            </span>
          </div>
          <button
            type="button"
            onClick={() => setBannerDismissed(true)}
            className="text-[#cfb6c8] hover:text-white shrink-0 p-1 cursor-pointer"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* 3-Zone Compliant Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFlyer={() => setIsFlyerOpen(true)}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
      />

      <main>
        {/* Dynamic Gothic Hero */}
        <Hero
          onOpenCustomizer={() => scrollToSection('custom-soap')}
          onOpenFlyer={() => setIsFlyerOpen(true)}
          onExploreCollection={() => scrollToSection('collection')}
        />

        {/* 4 Pillars from Sales Slick */}
        <CorePillars />

        {/* Handcrafted Soap Collection */}
        <ProductCatalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
        />

        {/* Interactive Custom Soap Builder ("Call or Text to customize") */}
        <CustomSoapBuilder
          onAddCustomSoapToCart={(customProd, notes) => handleAddToCart(customProd, 1, notes)}
        />

        {/* Interactive Ritual Divination Quiz */}
        <RitualQuiz
          onSelectProduct={(product) => setSelectedProduct(product)}
          onAddToCart={(product) => handleAddToCart(product, 1)}
        />

        {/* Sales Slick Spotlight Section */}
        <SalesSlickSpotlight
          onOpenFlyerModal={() => setIsFlyerOpen(true)}
        />

        {/* Customer Ritual Testimonials */}
        <Reviews />

        {/* Contact & Custom Orders (Phone, Email, Socials) */}
        <ContactSection />
      </main>

      {/* Brand Footer */}
      <Footer onOpenFlyer={() => setIsFlyerOpen(true)} />

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Sales Slick Lightbox Modal */}
      <OriginalFlyerModal
        isOpen={isFlyerOpen}
        onClose={() => setIsFlyerOpen(false)}
      />

    </div>
  );
}
