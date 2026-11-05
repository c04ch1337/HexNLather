export interface SoapProduct {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  price: number;
  weight: string;
  category: 'celestial' | 'botanical' | 'cleanse' | 'ritual';
  rating: number;
  reviewsCount: number;
  scentProfile: {
    top: string;
    heart: string;
    base: string;
  };
  ritualIntention: 'Cleanse' | 'Recharge' | 'Beautify' | 'Grounding' | 'Protection';
  description: string;
  ritualSteps: string[];
  ingredients: string[];
  skinBenefits: string[];
  colorHex: string;
  accentGlow: string;
  symbol: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  product: SoapProduct;
  quantity: number;
  customNotes?: string;
}

export interface CustomSoapConfig {
  base: string;
  scent: string;
  crystal: string;
  botanical: string;
  intention: 'Cleanse' | 'Recharge' | 'Beautify' | 'Protection';
  stamp: string;
  customName: string;
}
