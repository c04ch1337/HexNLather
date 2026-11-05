import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { SoapProduct } from '../types';

interface RitualQuizProps {
  onSelectProduct: (product: SoapProduct) => void;
  onAddToCart: (product: SoapProduct) => void;
}

export const RitualQuiz: React.FC<RitualQuizProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    intention: '',
    aroma: '',
    skin: ''
  });
  const [added, setAdded] = useState(false);

  const questions = [
    {
      title: 'What does your energy need most right now?',
      subtitle: 'Select the sacred ritual focus that resonates with your current state.',
      field: 'intention',
      options: [
        { label: 'Deep Cleanse & Banishing Stagnation', value: 'Cleanse', icon: '☾' },
        { label: 'Recharge & Cellular Vitality', value: 'Recharge', icon: '✧' },
        { label: 'Sensual Beautification & Self-Love', value: 'Beautify', icon: '❦' },
        { label: 'Earth Grounding & Spiritual Shield', value: 'Protection', icon: '❖' }
      ]
    },
    {
      title: 'Which nocturnal aroma summons your soul?',
      subtitle: 'Our small-batch botanical fragrances are cured into every bar.',
      field: 'aroma',
      options: [
        { label: 'Smoked Frankincense, Lavender & Velvet Musk', value: 'lavender', icon: '☾' },
        { label: 'Crimson Damask Rose, Pomegranate & Dark Oud', value: 'rose', icon: '❦' },
        { label: 'Wild Blackberry, Sage Leaf & Sacred Woods', value: 'blackberry', icon: '✧' },
        { label: 'Wildflower Honeycomb, Warm Amber & Tonka', value: 'honey', icon: '✦' }
      ]
    },
    {
      title: 'How does your skin feel in the Texas elements?',
      subtitle: 'We formulate with raw plant butters to restore your natural cutaneous barrier.',
      field: 'skin',
      options: [
        { label: 'Congested or oily, needs deep clarifying pore reset', value: 'charcoal', icon: '◈' },
        { label: 'Very sensitive, delicate, or easily irritated', value: 'sensitive', icon: '✦' },
        { label: 'Dry, tight, or depleted from sun and weather', value: 'dry', icon: '✧' },
        { label: 'Balanced, but craving deep silky romantic luxury', value: 'luxury', icon: '❦' }
      ]
    }
  ];

  const handleSelectOption = (value: string) => {
    const currentQ = questions[step];
    const newAnswers = { ...answers, [currentQ.field]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // complete
    }
  };

  // Determine matched product based on user selections
  const getMatch = (): SoapProduct => {
    if (answers.intention === 'Cleanse' || answers.skin === 'charcoal') {
      return PRODUCTS[0]; // The Midnight Ritual
    }
    if (answers.intention === 'Beautify' || answers.aroma === 'rose') {
      return PRODUCTS[2]; // Blood Rose & Thorns
    }
    if (answers.skin === 'sensitive' || answers.aroma === 'honey') {
      return PRODUCTS[3]; // Hecate's Crescent
    }
    return PRODUCTS[1]; // Celestial Amethyst
  };

  const matchedProduct = getMatch();

  const handleReset = () => {
    setStep(0);
    setAnswers({ intention: '', aroma: '', skin: '' });
  };

  const handleAddMatched = () => {
    onAddToCart(matchedProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="quiz" className="py-20 bg-[#060207] relative border-t border-[#311027]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#ff80bf] font-semibold mb-2">
            <Sparkles className="w-4 h-4 text-[#ff2a85]" />
            <span>Interactive Bathing Divination</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Find Your Soap Ritual
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#ceb0c3]">
            More than soap... it's a ritual. Answer 3 quick inquiries to uncover your ideal celestial lather.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-[#120515] border border-[#ff2a85]/40 rounded-2xl p-6 sm:p-10 shadow-[0_0_40px_rgba(255,42,133,0.2)]">
          
          {step < questions.length ? (
            <div>
              {/* Progress bar */}
              <div className="flex items-center justify-between text-xs text-[#debcd2] uppercase tracking-wider mb-3">
                <span>Inquiry {step + 1} of {questions.length}</span>
                <span className="text-[#ff80bf] font-mono tabular-nums">{Math.round(((step + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-1 bg-[#230b27] rounded-full overflow-hidden mb-8">
                <div 
                  className="h-full bg-gradient-to-r from-[#ff2a85] to-[#f472b6] transition-all duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-2">
                {questions[step].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#bca0b1] mb-8">
                {questions[step].subtitle}
              </p>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {questions[step].options.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectOption(opt.value)}
                    className="p-4 sm:p-5 rounded-xl bg-[#1b081e] hover:bg-[#280c2d] border border-[#3b122f] hover:border-[#ff2a85] text-left transition-all flex items-start gap-3.5 group cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
                  >
                    <div className="w-8 h-8 rounded-full border border-[#ff2a85]/50 flex items-center justify-center bg-[#130516] text-[#ff80bf] shrink-0 group-hover:scale-110 transition-transform font-cinzel">
                      {opt.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#ffd6ec] transition-colors leading-snug">
                        {opt.label}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff2a85]/15 border border-[#ff2a85]/40 text-xs uppercase tracking-widest text-[#ffd3ea] font-semibold">
                <span>Your Divined Soap Match</span>
              </div>

              <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-b from-[#1f0923] to-[#120515] border border-[#ff2a85]/60 shadow-[0_0_30px_rgba(255,42,133,0.3)]">
                <div className="w-16 h-16 rounded-full border-2 border-[#ff2a85] flex items-center justify-center bg-[#150718] mx-auto mb-4 shadow-[0_0_20px_rgba(255,42,133,0.4)]">
                  <span className="text-[#ffd3ea] text-2xl font-cinzel">{matchedProduct.symbol}</span>
                </div>

                <div className="text-xs uppercase tracking-widest text-[#ff80bf] font-semibold">
                  {matchedProduct.ritualIntention} Ritual
                </div>
                <h4 className="font-cinzel text-2xl font-bold text-white mt-1">
                  {matchedProduct.name}
                </h4>
                <p className="text-xs text-[#e6bad3] mt-1 font-medium">
                  {matchedProduct.subtitle}
                </p>

                <p className="text-xs text-[#cfb7c6] mt-4 leading-relaxed">
                  {matchedProduct.description}
                </p>

                <div className="mt-4 pt-4 border-t border-[#3b122f] text-xs text-[#debcd2]">
                  <span className="font-semibold text-white">Scent Notes:</span> {matchedProduct.scentProfile.top}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleAddMatched}
                    className={`w-full sm:w-auto px-6 py-2.5 rounded-xl font-cinzel text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      added
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#e01a69] hover:bg-[#ff2a85] text-white shadow-[0_0_20px_rgba(255,42,133,0.4)]'
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
                        <span>Add to Bag (${matchedProduct.price.toFixed(2)})</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectProduct(matchedProduct)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-transparent hover:bg-white/5 border border-[#3b122f] hover:border-[#ff2a85]/50 text-xs text-[#e6b4d3] hover:text-white rounded-xl transition-colors cursor-pointer"
                  >
                    View Ceremony
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-xs text-[#9e7d94] hover:text-[#ff80bf] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Ritual Divination Quiz</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
