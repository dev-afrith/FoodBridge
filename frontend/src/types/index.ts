export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface ImpactStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  icon: string;
}

export interface Story {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
  tag: string;
  highlight: string;
  isIllustrative: boolean;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  detail: string;
  iconName: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  category: string;
  iconName: string;
}

export interface DonationFormData {
  donorType: 'restaurant' | 'marriage_hall' | 'bakery_sweet' | 'cloud_kitchen' | 'corporate' | 'mandi_wholesaler';
  organizationName: string;
  contactName: string;
  phone: string;
  email: string;
  dietaryType: 'pure_veg' | 'non_veg' | 'contains_egg' | 'vegan';
  foodCategory: string;
  quantityKg: number;
  prepDateTime: string;
  safeConsumptionUntil: string;
  allergens: string[];
  storageCondition: 'chilled' | 'hot' | 'ambient' | 'frozen';
  pickupAddress: string;
  city: string;
  pincode: string;
  specialInstructions?: string;
}
