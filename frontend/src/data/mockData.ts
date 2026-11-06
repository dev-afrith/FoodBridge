import type { ImpactStat, Story, StepItem, FeatureItem } from '../types';

export const BRAND_INFO = {
  name: 'FoodBridge',
  tagline: 'Turning Surplus Into Smiles.',
  mission: 'To reduce food waste across Indian cities by connecting surplus meals from restaurants, banquet halls, and food businesses with verified community feeding initiatives.',
  hotline: '+91 7397463508',
  hotlineLabel: '+91 7397463508',
  email: 'afrithafrith1507@gmail.com',
  cityPresence: ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'],
  demoNotice: 'Demonstration Prototype: FoodBridge is an interactive social-impact platform model. Submissions are simulated for prototype review and do not dispatch actual pickup vehicles.',
};

export const DIETARY_SUGGESTIONS: Record<string, string[]> = {
  pure_veg: ['Dal Makhani', 'Paneer Butter Masala', 'Roti & Mix Sabzi', 'Vegetable Biryani', 'Moong Dal Khichdi', 'Fresh Vegetables'],
  vegan: ['Chana Masala', 'Steamed Rice & Sambar', 'Aloo Gobi', 'Millet Khichdi', 'Fresh Seasonal Fruits', 'Sprouted Moong'],
  contains_egg: ['Egg Curry', 'Egg Biryani', 'Egg Fried Rice', 'Egg Bhurji & Pav', 'Fresh Bakery Cakes'],
  non_veg: ['Chicken Biryani', 'Mutton Curry', 'Butter Chicken', 'Chicken Curry & Rotis', 'Fish Curry & Rice'],
};

// Curated authentic photography depicting wholesome fresh meals, fresh vegetables, and community distribution
export const IMAGES = {
  heroMain: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80', // Community volunteers serving nutritious food
  heroSecondary: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80', // Fresh vibrant vegetables crate
  bakeryRescue: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', // Freshly baked breads
  chefKitchen: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80', // Dedicated chef preparing food
  produceCrate: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80', // Fresh local produce and greens
  distributionMeal: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', // Hopeful warm family / child smiling
  volunteerVan: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80', // Logistics & volunteer team
  shelterKitchen: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=800&q=80', // Clean community meal preparation
};

export const IMPACT_METRICS: ImpactStat[] = [
  {
    id: 'meals',
    label: 'Nutritious Meals Supported',
    value: 142500,
    suffix: '+',
    description: 'Illustrative model: Wholesome thalis, fresh khichdi, and nutritious staples distributed.',
    icon: 'Utensils',
  },
  {
    id: 'surplus',
    label: 'Kilograms of Food Diverted',
    value: 71250,
    suffix: ' kg',
    description: 'Illustrative model: Cooked meals, mandi vegetables, and bakery items saved from landfills.',
    icon: 'Apple',
  },
  {
    id: 'co2',
    label: 'Tonnes CO₂e Mitigated',
    value: 178,
    suffix: ' MT',
    description: 'Illustrative estimate: Calculated using standard MoEFCC organic decomposition factors.',
    icon: 'Leaf',
  },
  {
    id: 'partners',
    label: 'Community Feeding Hubs',
    value: 85,
    suffix: '+',
    description: 'Illustrative network: Partner shelters, rain baseras, community kitchens, and youth homes.',
    icon: 'HeartHandshake',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: '01',
    title: '90-Second Online Form Submission',
    description: 'Complete our simple digital form in under 90 seconds. Specify kilograms, vegetarian status, preparation date/time, and last safe consumption window.',
    detail: 'Clear dietary classification (Pure Veg, Non-Veg) and FSSAI sensory freshness checklists.',
    iconName: 'Smartphone',
  },
  {
    step: '02',
    title: '45–60 Min Target Pickup Coordination',
    description: 'The dispatch network pairs your donation with the nearest registered shelter, ashram, or community kitchen within a 5–8 km transit radius.',
    detail: 'Target 45–60 minute volunteer arrival window minimizes transit lag in urban traffic.',
    iconName: 'Cpu',
  },
  {
    step: '03',
    title: 'Hygienic Handover & Thermal Transit',
    description: 'Volunteers and coordinators arrive with clean food-grade insulated thermal carriers, adhering to FSSAI surplus recovery guidelines.',
    detail: 'Sensory inspection (sight and smell check) and temperature logging conducted at kitchen handover.',
    iconName: 'Truck',
  },
  {
    step: '04',
    title: 'Dignified Distribution & Digital Receipt',
    description: 'Fresh meals are served directly to community members. Donors receive an instant digital acknowledgement certificate for their records.',
    detail: 'Includes timestamp, food weight verified in kilograms, and estimated environmental diversion score.',
    iconName: 'Receipt',
  },
];

export const KEY_FEATURES: FeatureItem[] = [
  {
    id: 'f1',
    title: 'FSSAI Surplus Food Guidelines Aligned',
    description: 'Operational procedures structured around FSSAI Surplus Food Recovery Regulations (2019) for safe handling and timely distribution.',
    category: 'Food Safety',
    iconName: 'ShieldCheck',
  },
  {
    id: 'f2',
    title: 'Digital Handover Acknowledgements',
    description: 'Receive verified digital receipts detailing exact kilograms rescued for your organization CSR and ESG sustainability disclosures.',
    category: 'Documentation',
    iconName: 'FileCheck',
  },
  {
    id: 'f3',
    title: '45–60 Min Target Pickup Window',
    description: 'Targeted volunteer coordination within 45–60 minutes across participating metro clusters to ensure same-day food integrity.',
    category: 'Logistics',
    iconName: 'MapPin',
  },
  {
    id: 'f4',
    title: 'Organic Waste Composting Route',
    description: 'Any non-edible kitchen trimmings or peelings are diverted to registered city bio-methanation and community compost pits.',
    category: 'Sustainability',
    iconName: 'Sparkles',
  },
  {
    id: 'f5',
    title: 'Vegetarian & Allergen Segregation',
    description: 'Strict segregation ensuring Pure Vegetarian, Jain-compliant, and allergen-flagged batches reach appropriate community kitchens.',
    category: 'Cultural Care',
    iconName: 'Thermometer',
  },
  {
    id: 'f6',
    title: 'Transparent Rescue Telemetry',
    description: 'Track the journey of surplus meals from kitchen packing to community serving with verified volunteer check-ins.',
    category: 'Transparency',
    iconName: 'Activity',
  },
];

export const STORIES: Story[] = [
  {
    id: 's1',
    quote: 'Indian weddings and large receptions often prepare extra food as hospitality tradition. Partnering with FoodBridge ensures our unserved dal makhani, paneer, and rotis reach night shelters nearby while hot and fresh.',
    author: 'Chef Rajesh Mehra',
    role: 'Executive Banquet Chef',
    organization: 'Grand Orchid Banquets & Conventions, New Delhi',
    avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=300&q=80',
    tag: 'Banquet Partner',
    highlight: 'Over 6,500 kg banquet surplus diverted in pilot phase',
    isIllustrative: true,
  },
  {
    id: 's2',
    quote: 'Our shelter hosts 180 migrant workers and children daily. Receiving fresh, hygienic rice and sabzi from reputable commercial kitchens brings nourishment, comfort, and real dignity to our dining hall.',
    author: 'Ananya Deshmukh',
    role: 'Managing Trustee',
    organization: 'Sneha Sadan Community Kitchen & Shelter, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    tag: 'Community Shelter',
    highlight: 'Supports 180+ daily nutritious meals with dignity',
    isIllustrative: true,
  },
  {
    id: 's3',
    quote: 'As an artisanal bakery and sweet house, daily fresh batches mean yesterday’s bread and snacks cannot be displayed. FoodBridge picks up surplus within an hour, redirecting it to evening youth centers.',
    author: 'Gurpreet Singh',
    role: 'Founder & Head Baker',
    organization: 'Golden Crust Artisan Bakery, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    tag: 'Bakery & Sweets Partner',
    highlight: 'Diverted 4,200 kg of fresh loaves and baked goods',
    isIllustrative: true,
  },
];

export const PROBLEM_STATS = [
  {
    figure: '68.7M',
    unit: 'Tonnes of food wasted annually',
    context: 'In Indian households, retail food businesses, and hospitality sectors combined.',
    source: 'UN Environment Programme (UNEP) Food Waste Index Report',
  },
  {
    figure: '1 in 6',
    unit: 'Urban community members',
    context: 'Face inconsistent access to balanced, nutrient-dense daily meals.',
    source: 'Indian Urban Food Security & Nutrition Working Group Study',
  },
  {
    figure: '2.5 kg',
    unit: 'CO₂e greenhouse emissions',
    context: 'Generated by every single kilogram of decomposing organic waste dumped in open city landfills.',
    source: 'Ministry of Environment, Forest and Climate Change (MoEFCC) benchmark',
  },
];
