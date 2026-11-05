import { SoapProduct } from '../types';

export const PRODUCTS: SoapProduct[] = [
  {
    id: 'midnight-ritual',
    name: 'The Midnight Ritual',
    subtitle: 'Activated Charcoal & Midnight Lavender',
    tagline: 'Deep detoxifying lather topped with black sea salt and obsidian essence',
    price: 14.0,
    weight: '5.2 oz / 147g',
    category: 'ritual',
    rating: 4.9,
    reviewsCount: 48,
    scentProfile: {
      top: 'Wild French Lavender, Bergamot mist',
      heart: 'Smoked Frankincense, Dark Myrrh',
      base: 'Aged Amber, Vetiver root, Velvet Musk'
    },
    ritualIntention: 'Cleanse',
    description: 'Forged under the waning crescent moon to draw out heavy impurities and ground restless energy. This dense, silky black bar produces an unexpectedly creamy lavender lather with deeply purifying activated coconut charcoal and mineral-rich Hawaiian black volcanic salt.',
    ritualSteps: [
      'Hold the bar beneath steaming water to awaken the smoked frankincense and lavender oils.',
      'Work into a velvet obsidian lather between your palms, setting an intention of release.',
      'Massage across the skin in slow, upward circular motions to purge daily toxicity.',
      'Rinse clean with lukewarm water, feeling the weight lift from your aura and body.'
    ],
    ingredients: [
      'Saponified Organic Extra Virgin Olive Oil',
      'Unrefined Shea Butter',
      'Organic Virgin Coconut Oil',
      'Activated Hardwood Charcoal',
      'Hawaiian Black Lava Salt',
      'French Lavender Essential Oil',
      'Somatic Frankincense Resin Oil',
      'Vitamin E (Tocopherol)'
    ],
    skinBenefits: [
      'Pore-purifying activated charcoal draws out deep surface pollutants',
      'Rich unrefined shea butter prevents stripping or dryness',
      'Lavender calm restores balance to irritated, inflamed skin'
    ],
    colorHex: '#120b17',
    accentGlow: 'rgba(255, 42, 133, 0.4)',
    symbol: '☾',
    inStock: true,
    featured: true
  },
  {
    id: 'celestial-amethyst',
    name: 'Celestial Amethyst',
    subtitle: 'Crushed Quartz & Wild Blackberry Sage',
    tagline: 'A luminous swirled bar formulated for spiritual elevation and deep cell hydration',
    price: 15.0,
    weight: '5.5 oz / 156g',
    category: 'celestial',
    rating: 5.0,
    reviewsCount: 62,
    scentProfile: {
      top: 'Ripe Mountain Blackberry, Crisp Sage leaf',
      heart: 'Midnight Violet, Sweet Plum blossom',
      base: 'Vanilla Bean, Cedarwood, Sacred Palo Santo'
    },
    ritualIntention: 'Recharge',
    description: 'Swirled with French purple clay, natural biodegradable mica, and imbued with the gentle restorative vibration of amethyst. Kokum butter and sweet almond oil envelop dry or exhausted skin in a protective cloak of moisture while tart berries and mystical sage awaken your senses.',
    ritualSteps: [
      'Breathe in the tart blackberry and earthen sage notes while warming the bar in your hands.',
      'Form a luscious purple-tinged lather that glides effortlessly across arms and collarbone.',
      'Visualize celestial violet light restoring your inner calm and vitality.',
      'Pat dry gently and admire the silky, luminous finish on your skin.'
    ],
    ingredients: [
      'Saponified Sweet Almond Oil',
      'Raw Kokum Seed Butter',
      'Organic Castor Oil',
      'French Purple Brazilian Clay',
      'Ethically Sourced Pearlescent Mica',
      'Blackberry Essential Extract',
      'White Sage Essential Oil',
      'Pure Aloe Vera Leaf Juice'
    ],
    skinBenefits: [
      'High oleic acid profile from sweet almond oil locks in all-day moisture',
      'Kokum butter promotes skin elasticity and cellular regeneration',
      'Purple clay softens texture without clogging delicate pores'
    ],
    colorHex: '#250f2f',
    accentGlow: 'rgba(217, 70, 239, 0.4)',
    symbol: '✧',
    inStock: true,
    featured: true
  },
  {
    id: 'blood-rose-thorns',
    name: 'Blood Rose & Thorns',
    subtitle: 'Damask Rose, Pomegranate & Smoked Oud',
    tagline: 'Sensual crimson soap adorned with whole botanical rosebuds and pomegranate oil',
    price: 14.5,
    weight: '5.3 oz / 150g',
    category: 'botanical',
    rating: 4.8,
    reviewsCount: 39,
    scentProfile: {
      top: 'Crimson Damask Rose, Pomegranate seeds',
      heart: 'Spiced Clove, Black Currant',
      base: 'Smoked Oud, Dark Sandalwood, Patchouli'
    },
    ritualIntention: 'Beautify',
    description: 'An unapologetically seductive bar celebrating self-love with a darker, brooding romance. Infused with cold-pressed pomegranate seed oil—famed since antiquity for its antioxidant youth elixirs—and topped with hand-harvested organic crimson rosebuds from Texas gardens.',
    ritualSteps: [
      'Allow warm water to soften the botanical rosebuds on the crown of the bar.',
      'Build a decadent, fragrant lather filled with decadent rose and mysterious oud smoke.',
      'Gently wash face and body, repeating the affirmation: "I honor my dark and light."',
      'Rinse away to reveal soft, velvety, petal-smooth radiance.'
    ],
    ingredients: [
      'Saponified Golden Jojoba Oil',
      'Cold-Pressed Pomegranate Seed Oil',
      'Organic Cocoa Butter',
      'French Pink Kaolin Clay',
      'Wild Moroccan Damask Rose Extract',
      'Smoked Agarwood (Oud) Essence',
      'Texas Grown Dried Rosebuds',
      'Rosehip Seed Oil'
    ],
    skinBenefits: [
      'Pomegranate punicic acid promotes collagen integrity and elasticity',
      'Kaolin clay gently polishes dull skin cells without abrasive irritation',
      'Rosehip seed oil diminishes the look of dry patches and uneven tone'
    ],
    colorHex: '#300818',
    accentGlow: 'rgba(255, 42, 133, 0.5)',
    symbol: '❦',
    inStock: true,
    featured: true
  },
  {
    id: 'hecates-crescent',
    name: "Hecate's Crescent",
    subtitle: 'Rich Goat Milk, Golden Honey & Dark Amber',
    tagline: 'An ultra-soothing, comforting talisman formulated for the most sensitive skin',
    price: 14.0,
    weight: '5.4 oz / 153g',
    category: 'celestial',
    rating: 4.9,
    reviewsCount: 51,
    scentProfile: {
      top: 'Wildflower Honeycomb, Warm Cream',
      heart: 'Golden Benzoin Resin, Night-blooming Jasmine',
      base: 'Dark Amber, Sandalwood, Tonka Bean'
    },
    ritualIntention: 'Protection',
    description: 'Dedicated to the goddess of crossroads and lunar enchantments. Crafted with farm-fresh goat milk rich in natural lactic acid that delicately dissolves dead epidermal layers while drowning irritated skin in creamy, restorative nourishment. Hand-stamped with the triple moon sigil.',
    ritualSteps: [
      'Create a rich, custard-like foam in your hands with warm water.',
      'Coat sensitive or stressed areas in the soothing milk lather.',
      'Take 3 slow, deep diaphragmatic breaths while feeling enveloped in warmth.',
      'Rinse with cool water to seal hydration into the cutaneous barrier.'
    ],
    ingredients: [
      'Raw Texas Goat Milk',
      'Saponified Organic Olive Oil',
      'Unrefined Shea Butter',
      'Local Raw Hill Country Honey',
      'Colloidal Oat Flour',
      'Natural Amber Resin Essential Oil',
      'Golden Cosmetic-Grade Mica Sigil',
      'Chamomile Botanical Extract'
    ],
    skinBenefits: [
      'Natural alpha-hydroxy acids (lactic acid) gently renew sensitive skin',
      'Colloidal oats deliver immediate anti-itch and anti-redness comfort',
      'Raw honey acts as a natural humectant, drawing moisture into skin cells'
    ],
    colorHex: '#2b1c11',
    accentGlow: 'rgba(251, 191, 36, 0.35)',
    symbol: '⛧',
    inStock: true,
    featured: false
  },
  {
    id: 'obsidian-cleanse',
    name: 'Obsidian Cleanse & Shield',
    subtitle: 'Dead Sea Mud, Eucalyptus & Peppermint',
    tagline: 'Invigorating clarifying soap bar designed to strip mental fatigue and congestion',
    price: 13.5,
    weight: '5.1 oz / 145g',
    category: 'cleanse',
    rating: 4.7,
    reviewsCount: 34,
    scentProfile: {
      top: 'Crisp Blue Eucalyptus, Wild Peppermint',
      heart: 'Tea Tree, Crushed Rosemary',
      base: 'Dark Earth, Cedar Bark, Black Pine'
    },
    ritualIntention: 'Cleanse',
    description: 'The ultimate physical and energetic reset bar. Blended with authentic Dead Sea mineral mud containing 21 essential minerals and bracing herbal extracts that produce an icy-tingling lather. Ideal for morning awakenings, post-workout clarity, or cutting stagnant vibes.',
    ritualSteps: [
      'Lather under a brisk warm shower, letting the herbal vapors open your sinuses.',
      'Apply with moderate pressure across shoulders, chest, and back.',
      'Feel the cooling peppermint tingle activate your nervous system and alertness.',
      'Rinse thoroughly and step forth refreshed, invigorated, and clear.'
    ],
    ingredients: [
      'Authentic Dead Sea Mineral Mud',
      'Saponified Coconut Oil & Castor Oil',
      'Australian Eucalyptus Leaf Oil',
      'Crisp Mentha Piperita (Peppermint) Oil',
      'Melaleuca (Tea Tree) Oil',
      'Spirulina Mineral Extract',
      'Bamboo Activated Carbon',
      'Cold-Pressed Grapeseed Oil'
    ],
    skinBenefits: [
      'Dead Sea minerals remineralize depleted skin barriers',
      'Peppermint and eucalyptus stimulate microcirculation for vibrant tone',
      'Balancing astringent properties clear back and chest blemish concerns'
    ],
    colorHex: '#0f1715',
    accentGlow: 'rgba(52, 211, 153, 0.35)',
    symbol: '◈',
    inStock: true,
    featured: false
  },
  {
    id: 'witches-harvest',
    name: 'Witches’ Brew & Spiced Fig',
    subtitle: 'Black Mission Fig, Bourbon Vanilla & Clove',
    tagline: 'Warm, intoxicating autumnal magic wrapped in decadent cocoa and goat milk lather',
    price: 14.5,
    weight: '5.3 oz / 150g',
    category: 'botanical',
    rating: 4.9,
    reviewsCount: 41,
    scentProfile: {
      top: 'Black Mission Fig, Spiced Plum',
      heart: 'Ceylon Cinnamon, Clove bud, Nutmeg',
      base: 'Bourbon Madagascar Vanilla, Dark Cedar'
    },
    ritualIntention: 'Grounding',
    description: 'Inspired by ancient hedge witch foraging baskets at twilight. Ripe sticky figs, spiced dark clove, and warm intoxicating bourbon vanilla combine into an earthy, luscious lather that leaves behind a hypnotic, comforting trace on the skin for hours.',
    ritualSteps: [
      'Warm the bar beneath running water to release the autumnal spices.',
      'Work into a velvety, aromatic lather that smells like an alchemist’s study.',
      'Soak in the grounding warmth through every pore.',
      'Rinse clean, wrapping yourself in a warm towel with lingering spiced notes.'
    ],
    ingredients: [
      'Saponified Avocado Oil & Olive Oil',
      'Organic Raw Cocoa Butter',
      'Black Fig Infused Glycerin',
      'Ground Ceylon Cinnamon',
      'Pure Bourbon Vanilla Extract',
      'Madagascar Clove Bud Oil',
      'Dark Molasses Swirl',
      'Rosemary Leaf Extract'
    ],
    skinBenefits: [
      'Avocado oil is rich in vitamins A, D, and E for deep moisture repair',
      'Cocoa butter forms a protective lipid shield in colder weather',
      'Gentle warming spices stimulate healthy natural cutaneous flush'
    ],
    colorHex: '#231215',
    accentGlow: 'rgba(244, 63, 94, 0.4)',
    symbol: '❖',
    inStock: true,
    featured: false
  }
];

export const TESTIMONIALS = [
  {
    id: 'rev-1',
    name: 'Morgan V.',
    location: 'Boerne, TX',
    quote: 'The Midnight Ritual bar changed my entire evening routine. The creamy black lather smells phenomenal—like smoked frankincense in an ancient stone cathedral. My skin has never felt softer.',
    rating: 5,
    verifiedPurchase: true,
    product: 'The Midnight Ritual'
  },
  {
    id: 'rev-2',
    name: 'Seraphina K.',
    location: 'San Antonio, TX',
    quote: 'Hex & Lather is pure witchcraft for your skin. The sales flyer caught my eye at a boutique market, and once I texted to customize a gift box, the owner took exceptional care of me. 10/10.',
    rating: 5,
    verifiedPurchase: true,
    product: 'Celestial Amethyst'
  },
  {
    id: 'rev-3',
    name: 'Elena D.',
    location: 'Austin, TX',
    quote: 'Blood Rose & Thorns smells intoxicating. Real rosebuds on top, no synthetic chemical perfume smell—just rich damask rose and warm oud wood. Cleanse, recharge, beautify is real.',
    rating: 5,
    verifiedPurchase: true,
    product: 'Blood Rose & Thorns'
  }
];
