import React, { useState } from 'react';
import { Sparkles, Phone, MessageSquare, Mail, Check, RefreshCw, ShoppingBag } from 'lucide-react';
import { SoapProduct } from '../types';

interface CustomSoapBuilderProps {
  onAddCustomSoapToCart: (customProduct: SoapProduct, notes: string) => void;
}

export const CustomSoapBuilder: React.FC<CustomSoapBuilderProps> = ({
  onAddCustomSoapToCart
}) => {
  const [soapName, setSoapName] = useState('My Celestial Ritual Bar');
  const [base, setBase] = useState('Goat Milk & Raw Honey');
  const [scent, setScent] = useState('Smoked Damask Rose & Oud');
  const [botanical, setBotanical] = useState('Dried Crimson Rosebuds');
  const [stamp, setStamp] = useState('Pentacle Crescent Moon');
  const [intention, setIntention] = useState<'Cleanse' | 'Recharge' | 'Beautify' | 'Protection'>('Beautify');
  const [notes, setNotes] = useState('');
  const [added, setAdded] = useState(false);

  const bases = [
    { name: 'Raw Texas Goat Milk', desc: 'Ultra-gentle lactic acid, rich in vitamins A & E for sensitive skin', color: '#2a1a15' },
    { name: 'Activated Hardwood Charcoal', desc: 'Deep pore detox, draws out impurities with volcanic black lather', color: '#120d14' },
    { name: 'Organic Shea & Kokum Butter', desc: 'Maximum cellular hydration, locks in moisture against dry climates', color: '#241a28' },
    { name: 'French Purple Clay', desc: 'Rich in magnesium and trace minerals, restores natural glow', color: '#240d2d' },
    { name: 'Rose Kaolin & Jojoba', desc: 'Velvety smooth finish for delicate facial and neck skin', color: '#2f1220' }
  ];

  const scents = [
    { name: 'Smoked Damask Rose & Oud', mood: 'Brooding, sensual, intoxicating dark floral' },
    { name: 'Midnight Lavender & Frankincense', mood: 'Deep peace, spiritual purification, ancient sanctuary' },
    { name: 'Wild Blackberry & Mountain Sage', mood: 'Crisp, mysterious, celestial forest canopy' },
    { name: 'Bourbon Vanilla & Dark Amber', mood: 'Warm, comforting, decadent and grounded' },
    { name: 'Dead Sea Eucalyptus & Peppermint', mood: 'Crisp herbal awakening, invigorating sinuses & skin' }
  ];

  const botanicals = [
    { name: 'Dried Crimson Rosebuds', desc: 'Hand-picked botanical roses decorating the bar crown' },
    { name: 'Crushed Amethyst Quartz Shimmer', desc: 'Ethical cosmetic mica dust with mineral violet glimmer' },
    { name: 'Hawaiian Black Lava Salt', desc: 'Exfoliating mineral crunch for rough elbows and feet' },
    { name: 'Whole Texas Wild Lavender', desc: 'Calming dried buds infused on top' },
    { name: 'Colloidal Golden Oats & Calendula', desc: 'Immediate anti-itch soothing comfort' }
  ];

  const stamps = [
    { name: 'Pentacle Crescent Moon', symbol: '☾⛧☽' },
    { name: 'Triple Goddess Moon', symbol: '☾◯☽' },
    { name: 'Celestial Radiant Star', symbol: '✦' },
    { name: 'Witch’s Knot of Protection', symbol: '❖' },
    { name: 'Sacred Triquetra', symbol: '☥' }
  ];

  const intentions: Array<'Cleanse' | 'Recharge' | 'Beautify' | 'Protection'> = [
    'Cleanse', 'Recharge', 'Beautify', 'Protection'
  ];

  const smsBody = encodeURIComponent(
    `Hi Hex & Lather! I want to order a custom handcrafted soap:\n` +
    `Name: ${soapName}\n` +
    `Base: ${base}\n` +
    `Scent: ${scent}\n` +
    `Topping: ${botanical}\n` +
    `Sigil: ${stamp}\n` +
    `Intention: ${intention}\n` +
    (notes ? `Notes: ${notes}\n` : '') +
    `Please let me know invoice & pickup/delivery details!`
  );

  const emailBody = encodeURIComponent(
    `Hello Hex & Lather Team,\n\n` +
    `I would like to order a bespoke custom ritual soap bar:\n\n` +
    `Custom Bar Title: ${soapName}\n` +
    `Selected Base: ${base}\n` +
    `Scent Profile: ${scent}\n` +
    `Botanical / Mineral Topping: ${botanical}\n` +
    `Intention Stamp: ${stamp}\n` +
    `Ritual Focus: ${intention}\n` +
    (notes ? `Special Customization Notes: ${notes}\n` : '') +
    `\nPlease contact me back with confirmation and payment instructions.\n\nThank you!`
  );

  const handleAddToCart = () => {
    const customProduct: SoapProduct = {
      id: `custom-${Date.now()}`,
      name: soapName || 'Bespoke Ritual Soap',
      subtitle: `${base} with ${scent}`,
      tagline: `Custom bar topped with ${botanical} and stamped with ${stamp}`,
      price: 16.0,
      weight: '5.5 oz / 156g',
      category: 'ritual',
      rating: 5.0,
      reviewsCount: 1,
      scentProfile: {
        top: scent.split('&')[0]?.trim() || scent,
        heart: 'Custom Botanical Blend',
        base: scent.split('&')[1]?.trim() || 'Rich Amber Resin'
      },
      ritualIntention: intention,
      description: `A one-of-a-kind bespoke cold-process soap formulated with ${base}, scented with ${scent}, topped with ${botanical}, and blessed with the ${intention} ritual intention.`,
      ritualSteps: [
        'Awaken the custom botanical botanicals with warm shower steam.',
        'Lather gently while focusing on your personal intention of ' + intention + '.',
        'Rinse clean, enjoying your bespoke scent aura all day long.'
      ],
      ingredients: [
        'Saponified Organic Olive Oil & Coconut Oil',
        base,
        'Cold-Pressed Seed Oils',
        scent + ' Natural Essences',
        botanical,
        'Vitamin E'
      ],
      skinBenefits: [
        'Customized specifically to your skin sensitivity needs',
        'Small-batch cured for optimal conditioning lather'
      ],
      colorHex: '#1e0c22',
      accentGlow: 'rgba(255, 42, 133, 0.4)',
      symbol: '☾',
      inStock: true
    };

    onAddCustomSoapToCart(customProduct, notes);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section id="custom-soap" className="py-20 bg-[#080309] relative border-t border-[#311027]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#ff80bf] font-semibold mb-2">
            <Sparkles className="w-4 h-4 text-[#ff2a85]" />
            <span>As Featured On Our Sales Slick</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Customize Your Special Soap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#d8c2d3] leading-relaxed">
            "Call or text to customize your special soap: <strong className="text-white">830-865-6697</strong>." 
            Design your bespoke bar below—choose your nourishing base, aroma, botanical crown, and celestial intention.
          </p>
        </div>

        {/* 2-Column Split: Customizer Controls (Left) & Real-time Live Bar Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 bg-[#120515]/90 p-6 sm:p-8 rounded-2xl border border-[#3b122f]">
            
            {/* Custom Soap Title */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-2">
                Name Your Custom Bar
              </label>
              <input
                type="text"
                value={soapName}
                onChange={(e) => setSoapName(e.target.value)}
                placeholder="e.g. Midnight Solstice Bar"
                className="w-full px-4 py-3 bg-[#1b081e] border border-[#3b122f] rounded-xl text-white placeholder-[#7e6074] focus:outline-none focus:border-[#ff2a85] font-cinzel text-base"
              />
            </div>

            {/* Step 1: Base Selection */}
            <div>
              <div className="text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-3 flex items-center justify-between">
                <span>1. Select Skin-Loving Soap Base</span>
                <span className="text-[#ff80bf] lowercase font-normal">{base}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {bases.map((b) => (
                  <button
                    key={b.name}
                    type="button"
                    onClick={() => setBase(b.name)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      base === b.name
                        ? 'bg-[#290d2e] border-[#ff2a85] shadow-[0_0_15px_rgba(255,42,133,0.3)]'
                        : 'bg-[#18071b] border-[#311127] hover:border-[#ff2a85]/40 text-[#c7a9bc]'
                    }`}
                  >
                    <div className="font-cinzel text-xs font-bold text-white mb-1">
                      {b.name}
                    </div>
                    <div className="text-[11px] text-[#a98a9d] leading-tight">
                      {b.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scent Profile */}
            <div>
              <div className="text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-3 flex items-center justify-between">
                <span>2. Select Bespoke Scent Profile</span>
                <span className="text-[#ff80bf] lowercase font-normal">{scent}</span>
              </div>
              <div className="space-y-2">
                {scents.map((s) => (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => setScent(s.name)}
                    className={`w-full p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      scent === s.name
                        ? 'bg-[#290d2e] border-[#ff2a85] shadow-[0_0_15px_rgba(255,42,133,0.3)]'
                        : 'bg-[#18071b] border-[#311127] hover:border-[#ff2a85]/40 text-[#c7a9bc]'
                    }`}
                  >
                    <div>
                      <div className="font-cinzel text-xs font-bold text-white">
                        {s.name}
                      </div>
                      <div className="text-[11px] text-[#a98a9d]">
                        {s.mood}
                      </div>
                    </div>
                    {scent === s.name && <Check className="w-4 h-4 text-[#ff2a85] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Botanical & Mineral Crown */}
            <div>
              <div className="text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-3 flex items-center justify-between">
                <span>3. Botanical &amp; Crystal Crown</span>
                <span className="text-[#ff80bf] lowercase font-normal">{botanical}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {botanicals.map((bot) => (
                  <button
                    key={bot.name}
                    type="button"
                    onClick={() => setBotanical(bot.name)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      botanical === bot.name
                        ? 'bg-[#290d2e] border-[#ff2a85] shadow-[0_0_15px_rgba(255,42,133,0.3)]'
                        : 'bg-[#18071b] border-[#311127] hover:border-[#ff2a85]/40 text-[#c7a9bc]'
                    }`}
                  >
                    <div className="font-cinzel text-xs font-bold text-white mb-0.5">
                      {bot.name}
                    </div>
                    <div className="text-[11px] text-[#a98a9d]">
                      {bot.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Intention Focus */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-3">
                4. Select Ritual Intention Focus
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {intentions.map((int) => (
                  <button
                    key={int}
                    type="button"
                    onClick={() => setIntention(int)}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all cursor-pointer text-center ${
                      intention === int
                        ? 'bg-[#e01a69] border-[#ff2a85] text-white shadow-[0_0_15px_rgba(255,42,133,0.35)]'
                        : 'bg-[#18071b] border-[#311127] text-[#c7a9bc] hover:border-[#ff2a85]/40'
                    }`}
                  >
                    {int}
                  </button>
                ))}
              </div>
            </div>

            {/* Special Requests or Allergy notes */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#debcd2] font-semibold mb-2">
                Special Requests or Skin Allergies (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Extra moisturizing for Texas winter dry skin, or exclude nut oils..."
                rows={2}
                className="w-full px-4 py-2.5 bg-[#1b081e] border border-[#3b122f] rounded-xl text-white placeholder-[#7e6074] focus:outline-none focus:border-[#ff2a85] text-xs leading-relaxed"
              />
            </div>

          </div>

          {/* Real-Time Live Preview & Instant Dispatch (Right Column) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className="bg-[#140618] border border-[#ff2a85]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(255,42,133,0.25)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff2a85]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between text-xs text-[#f4bedb] uppercase tracking-wider mb-4">
                <span>Handmade Batch Preview</span>
                <span className="font-mono tabular-nums text-white">$16.00 / Bar</span>
              </div>

              {/* Graphical Simulation of the Custom Bar */}
              <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-[#2a0e2f] via-[#1a081c] to-[#0c030d] border border-[#ff2a85]/40 p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.8)] relative overflow-hidden mb-6">
                
                {/* Visual botanical sprinkles */}
                <div className="absolute top-2 left-4 right-4 flex justify-between text-[11px] text-[#ff80bf]/60 pointer-events-none">
                  <span>✦ ✦ ✦</span>
                  <span className="text-[10px] uppercase font-cinzel">Hex &amp; Lather Bespoke</span>
                  <span>✦ ✦ ✦</span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto text-center px-4">
                  <div className="w-14 h-14 rounded-full border border-[#ff2a85] flex items-center justify-center bg-[#150617] shadow-[0_0_20px_rgba(255,42,133,0.4)] mb-2">
                    <span className="text-[#ffd3ea] text-xl font-cinzel">☾</span>
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-white tracking-wide text-balance">
                    {soapName || 'Bespoke Bar'}
                  </h4>
                  <div className="text-xs font-script text-[#ff80bf] text-xl mt-0.5">
                    {intention} Ritual
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#d6b7ce] uppercase tracking-wider pt-2 border-t border-[#ff2a85]/20">
                  <span>Base: {base.split(' ')[0]}</span>
                  <span>Crown: {botanical.split(' ')[0]}</span>
                </div>
              </div>

              {/* Recipe Breakdown */}
              <div className="space-y-2 text-xs text-[#cfb6c8] pb-6 border-b border-[#3b122f]">
                <div className="flex justify-between">
                  <span className="text-[#9e7d94]">Nourishing Base:</span>
                  <span className="text-white font-medium text-right">{base}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9e7d94]">Bespoke Aroma:</span>
                  <span className="text-white font-medium text-right">{scent}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9e7d94]">Botanical Crown:</span>
                  <span className="text-white font-medium text-right">{botanical}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9e7d94]">Intention Sigil:</span>
                  <span className="text-white font-medium text-right">{stamp}</span>
                </div>
              </div>

              {/* 3 Direct Fulfillment Options */}
              <div className="mt-6 space-y-3">
                
                {/* 1. Add to Cart for online order */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 px-4 rounded-xl font-cinzel text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-gradient-to-r from-[#ff2a85] to-[#c2185b] hover:from-[#ff4d9d] text-white shadow-[0_0_20px_rgba(255,42,133,0.4)]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Custom Bar Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add Custom Bar to Bag ($16.00)</span>
                    </>
                  )}
                </button>

                {/* 2. Direct Text to 830-865-6697 */}
                <a
                  href={`sms:830-865-6697?&body=${smsBody}`}
                  className="w-full py-3 px-4 bg-[#1e0a21] hover:bg-[#2b0f2f] text-[#ffd6ec] border border-[#ff2a85]/50 hover:border-[#ff2a85] rounded-xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#ff2a85]" />
                  <span>Text Formula to 830-865-6697</span>
                </a>

                {/* 3. Direct Email Request */}
                <a
                  href={`mailto:hexnlather33@gmail.com?subject=Custom%20Soap%20Order:%20${encodeURIComponent(soapName)}&body=${emailBody}`}
                  className="w-full py-2.5 px-4 bg-transparent hover:bg-white/5 text-[#be9fad] hover:text-white border border-[#3b122f] rounded-xl text-xs font-medium uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#ff69b4]" />
                  <span>Email to hexnlather33@gmail.com</span>
                </a>

              </div>

              <div className="mt-4 text-center text-[11px] text-[#9c7e92]">
                Custom batches cure for 4–6 weeks for maximum lather firmness.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
