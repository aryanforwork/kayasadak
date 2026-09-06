export interface PricingTier {
  id: 'platinum' | 'gold' | 'silver';
  name: string;
  badgeBg: string;
  badgeTextColor: string;
  perSessionPrice: number;
  qualifications: string;
  experience: string;
  bestFor: string;
  packages: {
    sessions: number;
    daysPerWeek: number;
    totalMonthlyPrice: number;
  }[];
}

export interface PricingPackage {
  id: number;
  sessionsPerMonth: number;
  frequencyLabel: string;
  platinumMonthly: number;
  goldMonthly: number;
  silverMonthly: number;
}

// Single Source of Truth for Pricing Matrix
// Display Order: Silver (Entry Tier, ₹500) -> Gold (Mid Tier, ₹750) -> Platinum (Top Tier, ₹1,000)
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'silver',
    name: 'Silver Tier',
    badgeBg: '#B8BCC2',
    badgeTextColor: '#1F4A3C',
    perSessionPrice: 500,
    qualifications: 'Graduation + Diploma in Yoga',
    experience: '5+ Years Experience',
    bestFor: 'Daily general fitness, foundational Hatha postures & routine stress relief',
    packages: [
      { sessions: 12, daysPerWeek: 3, totalMonthlyPrice: 6000 },
      { sessions: 16, daysPerWeek: 4, totalMonthlyPrice: 8000 },
      { sessions: 20, daysPerWeek: 5, totalMonthlyPrice: 10000 },
    ],
  },
  {
    id: 'gold',
    name: 'Gold Tier',
    badgeBg: '#A87C2E',
    badgeTextColor: '#FFFFFF',
    perSessionPrice: 750,
    qualifications: 'Graduation in Yoga + Advanced Teacher Training Course',
    experience: '7+ Years Experience',
    bestFor: 'Progressive strength, weight loss, PCOD/thyroid regulation & family wellness',
    packages: [
      { sessions: 12, daysPerWeek: 3, totalMonthlyPrice: 9000 },
      { sessions: 16, daysPerWeek: 4, totalMonthlyPrice: 12000 },
      { sessions: 20, daysPerWeek: 5, totalMonthlyPrice: 15000 },
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Tier',
    badgeBg: '#D9D9E3',
    badgeTextColor: '#1F4A3C',
    perSessionPrice: 1000,
    qualifications: 'Complete Masters + Graduation + Advanced Teacher Training Course',
    experience: '10+ Years Experience',
    bestFor: 'Complex chronic condition management, spinal rehab & executive high-performance care',
    packages: [
      { sessions: 12, daysPerWeek: 3, totalMonthlyPrice: 12000 },
      { sessions: 16, daysPerWeek: 4, totalMonthlyPrice: 16000 },
      { sessions: 20, daysPerWeek: 5, totalMonthlyPrice: 20000 },
    ],
  },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  { id: 12, sessionsPerMonth: 12, frequencyLabel: '3 Days / Week', silverMonthly: 6000, goldMonthly: 9000, platinumMonthly: 12000 },
  { id: 16, sessionsPerMonth: 16, frequencyLabel: '4 Days / Week', silverMonthly: 8000, goldMonthly: 12000, platinumMonthly: 16000 },
  { id: 20, sessionsPerMonth: 20, frequencyLabel: '5 Days / Week', silverMonthly: 10000, goldMonthly: 15000, platinumMonthly: 20000 },
];

export interface FitnessPricingTier {
  id: 'silver' | 'gold' | 'platinum';
  name: string;
  badgeBg: string;
  badgeTextColor: string;
  perSessionPrice: number;
  qualifications: string;
  experience: string;
  bestFor: string;
  packages: {
    sessions: number;
    daysPerWeek: number;
    totalMonthlyPrice: number;
  }[];
}

export const FITNESS_PRICING_TIERS: FitnessPricingTier[] = [
  {
    id: 'silver',
    name: 'Silver Fitness Tier',
    badgeBg: '#B8BCC2',
    badgeTextColor: '#1F4A3C',
    perSessionPrice: 1000,
    qualifications: 'Certified Personal Trainer (K11/ACE/equivalent recognized certification) [CLIENT TO CONFIRM]',
    experience: '3+ Years Experience',
    bestFor: 'Foundational strength, weight loss, mobility & functional home workout routines',
    packages: [
      { sessions: 12, daysPerWeek: 3, totalMonthlyPrice: 12000 },
      { sessions: 16, daysPerWeek: 4, totalMonthlyPrice: 16000 },
      { sessions: 20, daysPerWeek: 5, totalMonthlyPrice: 20000 },
    ],
  },
  {
    id: 'gold',
    name: 'Gold Fitness Tier',
    badgeBg: '#A87C2E',
    badgeTextColor: '#FFFFFF',
    perSessionPrice: 1500,
    qualifications: 'Certified Personal Trainer + specialized certification (strength & conditioning, sports nutrition) [CLIENT TO CONFIRM]',
    experience: '5+ Years Experience',
    bestFor: 'Hypertrophy, body recomposition, sports conditioning & athletic performance',
    packages: [
      { sessions: 12, daysPerWeek: 3, totalMonthlyPrice: 18000 },
      { sessions: 16, daysPerWeek: 4, totalMonthlyPrice: 24000 },
      { sessions: 20, daysPerWeek: 5, totalMonthlyPrice: 30000 },
    ],
  },
  {
    id: 'platinum',
    name: 'Platinum Fitness Tier',
    badgeBg: '#D9D9E3',
    badgeTextColor: '#1F4A3C',
    perSessionPrice: 2000,
    qualifications: 'Advanced-level certification (NASM-CPT or equivalent master credential) + rehab/sports-specific training [CLIENT TO CONFIRM]',
    experience: '8+ Years Experience',
    bestFor: 'Injury rehabilitation, posture re-education, executive body transformations & elite coaching',
    packages: [
      { sessions: 12, daysPerWeek: 3, totalMonthlyPrice: 24000 },
      { sessions: 16, daysPerWeek: 4, totalMonthlyPrice: 32000 },
      { sessions: 20, daysPerWeek: 5, totalMonthlyPrice: 40000 },
    ],
  },
];

export const FITNESS_PRICING_PACKAGES = [
  { id: 12, sessionsPerMonth: 12, frequencyLabel: '3 Days / Week', silverMonthly: 12000, goldMonthly: 18000, platinumMonthly: 24000 },
  { id: 16, sessionsPerMonth: 16, frequencyLabel: '4 Days / Week', silverMonthly: 16000, goldMonthly: 24000, platinumMonthly: 32000 },
  { id: 20, sessionsPerMonth: 20, frequencyLabel: '5 Days / Week', silverMonthly: 20000, goldMonthly: 30000, platinumMonthly: 40000 },
];

export const SERVICE_LINES = [
  { id: 'yoga-at-home', name: 'Personal Yoga at Home', isTiered: true, path: '/services/yoga-at-home' },
  { id: 'personal-fitness-trainer', name: 'Personal Fitness Trainer at Home', isTiered: true, path: '/services/personal-fitness-trainer' },
  { id: 'corporate-yoga', name: 'Corporate Wellness Program', isTiered: true, path: '/services/corporate-yoga' },
  { id: 'senior-citizen-yoga', name: 'Senior Citizen Therapeutic Yoga', isTiered: true, path: '/services/senior-citizen-yoga' },
  { id: 'kids-yoga', name: 'Kids Fitness & Posture Yoga', isTiered: true, path: '/services/kids-yoga' },
  { id: 'prenatal-postnatal-yoga', name: 'Prenatal & Postnatal Yoga', isTiered: true, path: '/services/prenatal-postnatal-yoga' },
  { id: 'yoga-for-studio', name: 'Yoga for Studio (B2B Staffing)', isTiered: false, path: '/services/yoga-for-studio' },
  { id: 'yoga-for-hospital', name: 'Clinical Yoga for Hospitals', isTiered: false, path: '/services/yoga-for-hospital' },
  { id: 'panchkarma', name: 'Authentic Home Panchkarma', isTiered: false, path: '/services/panchkarma' },
];

export const CONTACT_INFO = {
  phone: '+91-8273264561',
  phoneClean: '918273264561',
  emailPrimary: 'contact@kayasadhak.com',
  emailSecondary: 'kayasadhak@gmail.com',
  whatsappUrl: 'https://wa.me/918273264561',
  founderName: 'Nivil Chaudhary',
  founderTitle: 'Founder & Lead Sadhak (12+ Years Experience)',
};
