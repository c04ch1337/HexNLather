import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, Check, Tag, ShieldCheck, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [deliveryType, setDeliveryType] = useState<'shipping' | 'pickup'>('shipping');

  // Customer form for checkout simulation
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discountAmount = rawSubtotal * discountPercent;
  const subtotal = rawSubtotal - discountAmount;
  const shippingFee = deliveryType === 'pickup' || subtotal >= 45 ? 0 : 5.0;
  const total = subtotal + (items.length > 0 ? shippingFee : 0);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'RITUAL10') {
      setDiscountPercent(0.10);
      setPromoMessage('10% Ritual discount applied!');
    } else {
      setPromoMessage('Invalid talisman code. Try "RITUAL10"');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone) return;
    setOrderComplete(true);
  };

  const resetAll = () => {
    setOrderComplete(false);
    setIsCheckingOut(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#100413] border-l border-[#3b122f] shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 bg-[#17061b] border-b border-[#3b122f] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#ff2a85]" />
              <h2 className="font-cinzel text-lg font-bold text-white tracking-wider">
                Your Ritual Bag
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#debcd2] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {orderComplete ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Ritual Order Placed!
                </h3>
                <p className="text-xs text-[#cfb6c8] leading-relaxed">
                  Thank you, <strong className="text-white">{customerName}</strong>. Your handcrafted soap order is confirmed. 
                  We will text you at <strong className="text-white">{customerPhone}</strong> with your curing &amp; tracking status.
                </p>
                <div className="p-4 rounded-xl bg-[#19061c] border border-[#3b122f] text-left text-xs space-y-1.5 text-[#debcd2]">
                  <div className="flex justify-between font-bold text-white">
                    <span>Total Charged:</span>
                    <span className="font-mono tabular-nums">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fulfillment:</span>
                    <span className="capitalize">{deliveryType === 'pickup' ? 'Texas Hill Country Pickup' : 'Standard Delivery'}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={resetAll}
                  className="w-full py-3 bg-[#e01a69] hover:bg-[#ff2a85] text-white font-cinzel text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Return to Sanctuary
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#18071c] border border-[#3b122f] flex items-center justify-center mx-auto text-[#7e6074]">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  Your Bag is Empty
                </h3>
                <p className="text-xs text-[#a88d9f] max-w-xs mx-auto">
                  Select from our small-batch ritual bars or customize a bespoke creation.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#e01a69] hover:bg-[#ff2a85] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                >
                  Explore Soaps
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form onSubmit={handleCompleteOrder} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#3b122f]">
                  <span className="font-cinzel text-sm font-bold text-white">
                    Ritual Delivery Details
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs text-[#ff80bf] hover:underline cursor-pointer"
                  >
                    Back to Items
                  </button>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Morgan Vance"
                    className="w-full px-3.5 py-2 bg-[#1b081e] border border-[#3b122f] rounded-lg text-white text-xs focus:outline-none focus:border-[#ff2a85]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-1">
                    Phone Number (for SMS Tracking &amp; Custom Confirmation)
                  </label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 830-865-6697"
                    className="w-full px-3.5 py-2 bg-[#1b081e] border border-[#3b122f] rounded-lg text-white text-xs focus:outline-none focus:border-[#ff2a85]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-1">
                    Delivery Option
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('shipping')}
                      className={`p-2.5 rounded-lg border text-center transition-colors cursor-pointer ${
                        deliveryType === 'shipping'
                          ? 'bg-[#e01a69] border-[#ff2a85] text-white'
                          : 'bg-[#18071b] border-[#311127] text-[#c7a9bc]'
                      }`}
                    >
                      Ship to Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('pickup')}
                      className={`p-2.5 rounded-lg border text-center transition-colors cursor-pointer ${
                        deliveryType === 'pickup'
                          ? 'bg-[#e01a69] border-[#ff2a85] text-white'
                          : 'bg-[#18071b] border-[#311127] text-[#c7a9bc]'
                      }`}
                    >
                      Texas Hill Country Pickup (Free)
                    </button>
                  </div>
                </div>

                {deliveryType === 'shipping' && (
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-1">
                      Shipping Address
                    </label>
                    <input
                      type="text"
                      required
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      placeholder="Street address, City, State, ZIP"
                      className="w-full px-3.5 py-2 bg-[#1b081e] border border-[#3b122f] rounded-lg text-white text-xs focus:outline-none focus:border-[#ff2a85]"
                    />
                  </div>
                )}

                <div className="p-3 rounded-lg bg-[#18071c] border border-[#3b122f] text-xs text-[#cfb6c8] space-y-1">
                  <div className="flex justify-between">
                    <span>Payment Method:</span>
                    <span className="text-white font-medium">Card / Apple Pay / Texas Cash on Delivery</span>
                  </div>
                  <div className="flex justify-between font-bold text-white pt-1 border-t border-[#3b122f]">
                    <span>Total:</span>
                    <span className="font-mono tabular-nums">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#ff2a85] to-[#c2185b] hover:from-[#ff4d9d] text-white font-cinzel text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,42,133,0.4)] transition-all cursor-pointer"
                >
                  Place Ritual Order
                </button>
              </form>
            ) : (
              /* Itemized Product List */
              <>
                {/* Free shipping threshold meter */}
                <div className="p-3 rounded-xl bg-[#17061b] border border-[#3b122f] text-xs">
                  {subtotal >= 45 ? (
                    <div className="text-emerald-400 flex items-center gap-1.5 font-medium">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Complimentary Texas Ritual Shipping Unlocked!</span>
                    </div>
                  ) : (
                    <div className="text-[#debcd2]">
                      Add <strong className="text-[#ff80bf] font-mono tabular-nums">${(45 - subtotal).toFixed(2)}</strong> more for free shipping.
                    </div>
                  )}
                  <div className="w-full h-1 bg-[#280c2e] rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-[#ff2a85] to-emerald-400 transition-all duration-300"
                      style={{ width: `${Math.min(100, (subtotal / 45) * 100)}%` }}
                    />
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-start justify-between gap-4 p-3.5 rounded-xl bg-[#150617] border border-[#3b122f]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#240b27] border border-[#ff2a85]/30 flex items-center justify-center shrink-0 text-[#ff80bf] font-cinzel text-lg">
                          {item.product.symbol}
                        </div>
                        <div>
                          <h4 className="font-cinzel text-sm font-bold text-white leading-tight">
                            {item.product.name}
                          </h4>
                          <div className="text-[11px] text-[#ff80bf] font-medium">
                            {item.product.ritualIntention} Ritual
                          </div>
                          <div className="font-mono text-xs text-white tabular-nums mt-1">
                            ${item.product.price.toFixed(2)}
                          </div>
                          {item.customNotes && (
                            <div className="text-[10px] text-[#a88d9f] italic mt-0.5 line-clamp-1">
                              Note: {item.customNotes}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#9c7e92] hover:text-[#ff2a85] transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center border border-[#3b122f] rounded-md overflow-hidden bg-[#1c081e]">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-[#cfb6c8] hover:text-white"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-mono text-white tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-[#cfb6c8] hover:text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Promo Code Form */}
                <form onSubmit={applyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter Talisman Code (e.g. RITUAL10)"
                    className="flex-1 px-3 py-2 bg-[#1b081e] border border-[#3b122f] rounded-lg text-white text-xs uppercase focus:outline-none focus:border-[#ff2a85]"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-2 bg-[#250d29] hover:bg-[#34113a] text-[#ffd6ec] border border-[#3b122f] rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
                {promoMessage && (
                  <div className={`text-xs ${discountPercent > 0 ? 'text-emerald-400' : 'text-[#ff69b4]'}`}>
                    {promoMessage}
                  </div>
                )}
              </>
            )}

          </div>

          {/* Drawer Footer (Financial Subtotal & Checkout Trigger) */}
          {items.length > 0 && !orderComplete && !isCheckingOut && (
            <div className="p-6 bg-[#0d030e] border-t border-[#3b122f] space-y-3">
              <div className="space-y-1.5 text-xs text-[#cfb6c8]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono tabular-nums text-white">${rawSubtotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%):</span>
                    <span className="font-mono tabular-nums">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Shipping:</span>
                  <span className="font-mono tabular-nums text-white">
                    {shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-cinzel text-base font-bold text-white pt-2 border-t border-[#3b122f]">
                  <span>Total:</span>
                  <span className="font-mono tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 bg-gradient-to-r from-[#ff2a85] to-[#c2185b] hover:from-[#ff4d9d] text-white font-cinzel text-xs font-bold uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(255,42,133,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[10px] text-[#9c7e92] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ff2a85]" />
                <span>Secure Ritual Checkout · Local Texas Support</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
