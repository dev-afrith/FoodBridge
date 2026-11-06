import React, { useState } from 'react';
import { Truck, CheckCircle2, ArrowRight, ShieldCheck, Heart, Info, AlertTriangle } from 'lucide-react';
import { BRAND_INFO, DIETARY_SUGGESTIONS } from '../data/mockData';

export const DonationSection: React.FC = () => {
  const [donorType, setDonorType] = useState('restaurant');
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  
  // Dietary & Food Safety additions
  const [dietaryType, setDietaryType] = useState<'pure_veg' | 'non_veg' | 'contains_egg' | 'vegan'>('pure_veg');
  const [foodCategory, setFoodCategory] = useState('');
  const [quantityKg, setQuantityKg] = useState<number>(25);
  const [prepDateTime, setPrepDateTime] = useState('Today (Within last 2 hours)');
  const [safeConsumptionUntil, setSafeConsumptionUntil] = useState('Within 4–6 hours (Before 10:00 PM)');
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  
  const [storageCondition, setStorageCondition] = useState('hot');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [notes, setNotes] = useState('');
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState<string | null>(null);

  // Impact calculations (1 kg of prepared food ≈ 2.5 balanced meals; ₹45 standard nutritious meal benchmark; 2.5 kg CO₂e saved per kg)
  const estMeals = Math.round(quantityKg * 2.5);
  const estCO2 = Math.round(quantityKg * 2.5);
  const estValueINR = Math.round(estMeals * 45);

  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen) ? prev.filter((a) => a !== allergen) : [...prev, allergen]
    );
  };

  const handleAddFoodSuggestion = (suggestion: string) => {
    if (!foodCategory.trim()) {
      setFoodCategory(suggestion);
    } else {
      const items = foodCategory.split(',').map((s) => s.trim()).filter(Boolean);
      if (!items.includes(suggestion)) {
        setFoodCategory(`${foodCategory.trim()}, ${suggestion}`);
      }
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!orgName.trim()) errs.orgName = 'Business or kitchen name is required';
    if (!contactName.trim()) errs.contactName = 'Contact person name is required';
    
    // Indian mobile number validation (10 digits, optionally with +91)
    const cleanPhone = phone.replace(/[\s\-+]/g, '');
    const mobileDigits = cleanPhone.startsWith('91') && cleanPhone.length === 12 ? cleanPhone.slice(2) : cleanPhone;
    if (!/^[6-9]\d{9}$/.test(mobileDigits)) {
      errs.phone = 'Enter a valid 10-digit Indian mobile number (e.g. 9876543210)';
    }

    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email address required';
    if (!foodCategory.trim()) errs.foodCategory = 'Please enter food items (e.g. Chicken Biryani, Dal)';
    if (!city.trim()) errs.city = 'Please enter your city or town';
    if (!address.trim()) errs.address = 'Street pickup location and landmark required';
    if (pincode && !/^\d{6}$/.test(pincode.trim())) {
      errs.pincode = 'PIN code must be 6 digits';
    }
    if (!quantityKg || quantityKg < 2) errs.quantityKg = 'Minimum donation estimate is 2 kg';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedCode = `FB-SIM-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmationCode(generatedCode);
    }, 800);
  };

  const handleReset = () => {
    setConfirmationCode(null);
    setOrgName('');
    setContactName('');
    setEmail('');
    setPhone('');
    setFoodCategory('');
    setQuantityKg(25);
    setPrepDateTime('Today (Within last 2 hours)');
    setSafeConsumptionUntil('Within 4–6 hours (Before 10:00 PM)');
    setStorageCondition('hot');
    setCity('');
    setAddress('');
    setPincode('');
    setNotes('');
    setSelectedAllergens([]);
    setErrors({});
  };

  const availableAllergens = ['Dairy / Milk', 'Peanuts / Tree Nuts', 'Wheat / Gluten', 'Soy', 'Mustard / Sesame'];

  return (
    <section id="donate" className="py-20 lg:py-28 bg-[#F2EFE5] border-t border-[#123D2A]/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clearly distinguishing 90s form from 45-60 min pickup */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F28C45]/15 text-[#DC7630] text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5 text-[#F28C45]" />
            Surplus Food Rescue Prototype Portal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight">
            Complete the 90-Second Online Form. <br />
            <span className="text-[#4F8A5B] font-['Playfair_Display'] italic font-normal">
              Target 45–60 Min Volunteer Pickup.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B685B] leading-relaxed">
            Fill the 90-second digital handover notification below. Once submitted, our volunteer coordinator network targets a 45–60 minute pickup window to ensure fresh same-day community distribution.
          </p>
        </div>

        {/* Portal Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Live Calculation Impact Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#123D2A] text-[#F8F5EC] rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#F28C45] bg-[#F28C45]/20 px-2.5 py-0.5 rounded-full mb-1">
                    Illustrative Impact Calculator
                  </span>
                  <h3 className="text-2xl font-bold font-['Montserrat'] mt-1 text-white">
                    Estimated Rescue Value
                  </h3>
                  <p className="text-xs text-[#F8F5EC]/80 mt-1">
                    Dynamic values are illustrative estimates generated based on quantity in kilograms.
                  </p>
                </div>

                {/* 4 Live Metric Boxes - All clearly marked as illustrative estimates */}
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#F8F5EC]/70 uppercase font-medium">Wholesome Meals Supported</span>
                      <span className="text-[10px] text-[#F28C45] font-semibold bg-[#F28C45]/15 px-1.5 py-0.5 rounded">Illustrative Estimate</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-['Montserrat'] text-white mt-1">
                      ~{estMeals.toLocaleString('en-IN')} <span className="text-base font-normal text-[#F28C45]">thalis / meals</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#F8F5EC]/70 uppercase font-medium">Food Waste Diverted from Landfills</span>
                      <span className="text-[10px] text-[#6BA878] font-semibold bg-[#4F8A5B]/20 px-1.5 py-0.5 rounded">Calculated Weight</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-['Montserrat'] text-[#6BA878] mt-1">
                      {quantityKg.toLocaleString('en-IN')} <span className="text-base font-normal text-[#F8F5EC]/80">kg</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#F8F5EC]/70 uppercase font-medium">Estimated Environmental Impact</span>
                      <span className="text-[10px] text-[#6BA878] font-semibold bg-[#4F8A5B]/20 px-1.5 py-0.5 rounded">Illustrative Estimate</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-['Montserrat'] text-[#6BA878] mt-1">
                      ~{estCO2.toLocaleString('en-IN')} <span className="text-base font-normal text-[#F8F5EC]/80">kg CO₂e mitigated</span>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#F8F5EC]/70 uppercase font-medium">Nutritious Food Value Benchmark</span>
                      <span className="text-[10px] text-[#F28C45] font-semibold bg-[#F28C45]/15 px-1.5 py-0.5 rounded">Illustrative (₹45/meal)</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-['Montserrat'] text-[#F28C45] mt-1">
                      ₹{estValueINR.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-[#F8F5EC]/80 block sm:inline">
                        (at standard meal replacement cost)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footnote on Calculations */}
                <div className="bg-white/5 rounded-xl p-3 border border-white/10 text-[11px] text-[#F8F5EC]/75 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[#F28C45] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Illustrative Disclaimer:</strong> Calculations model community nutritional and carbon diversion outcomes based on standard ReFED and MoEFCC benchmark parameters.
                  </span>
                </div>

                {/* Framework compliance notes */}
                <div className="pt-2 border-t border-white/15 space-y-2 text-xs text-[#F8F5EC]/85">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#6BA878] flex-shrink-0" />
                    <span>Follows FSSAI Surplus Food Recovery Regulations (2019)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#F28C45] flex-shrink-0" />
                    <span>Distribution through registered community kitchens & shelters</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Helpline Demonstration Disclaimer Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#123D2A]/10 text-xs space-y-2">
              <strong className="block text-sm font-bold text-[#123D2A]">
                Prototype Demonstration Notice
              </strong>
              <p className="text-[#5B685B] leading-relaxed">
                FoodBridge is currently showcased as an interactive conceptual social-impact prototype. The demo helpline{' '}
                <a
                  href={`tel:${BRAND_INFO.hotline.replace(/[^0-9+]/g, '')}`}
                  className="font-bold text-[#123D2A] underline hover:text-[#4F8A5B] transition-colors"
                >
                  {BRAND_INFO.hotline}
                </a>{' '}
                and email{' '}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="font-bold text-[#123D2A] underline hover:text-[#4F8A5B] transition-colors"
                >
                  {BRAND_INFO.email}
                </a>{' '}
                are dedicated for testing and partnership queries.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Interactive Donation Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#123D2A]/10 shadow-lg">
            {confirmationCode ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-[#4F8A5B]/20 text-[#4F8A5B] rounded-full mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                {/* PROMINENT SIMULATION NOTICE */}
                <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 max-w-lg mx-auto text-left flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900">
                    <strong className="block font-bold text-sm text-amber-950 mb-1">
                      Demonstration Simulation Notice
                    </strong>
                    <span>
                      This is a demonstration submission. No actual food pickup has been scheduled.
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-['Montserrat'] text-[#123D2A]">
                  Simulated Pickup Registered
                </h3>
                <div className="inline-block bg-[#123D2A] text-white px-6 py-3 rounded-2xl font-mono text-xl font-bold tracking-widest shadow-inner">
                  {confirmationCode}
                </div>

                <div className="bg-[#F8F5EC] border border-[#4F8A5B]/20 rounded-2xl p-4 max-w-lg mx-auto text-xs space-y-1.5 text-left">
                  <div className="flex justify-between">
                    <span className="text-[#5B685B]">Donor Organisation:</span>
                    <strong className="text-[#123D2A]">{orgName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B685B]">Dietary Type:</span>
                    <strong className="text-[#123D2A] capitalize">{dietaryType.replace('_', ' ')}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B685B]">Quantity:</span>
                    <strong className="text-[#123D2A]">{quantityKg} kg (~{estMeals} meals)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B685B]">Food Items:</span>
                    <strong className="text-[#123D2A]">{foodCategory}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B685B]">Safe Consumption Until:</span>
                    <strong className="text-[#123D2A]">{safeConsumptionUntil}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B685B]">Pickup City:</span>
                    <strong className="text-[#123D2A]">{city}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5B685B]">Simulation Status:</span>
                    <span className="text-[#4F8A5B] font-bold">Prototype Verification Completed</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-[#123D2A] hover:bg-[#1D583E] text-white font-bold text-sm px-8 py-3 rounded-full transition-all cursor-pointer shadow-md hover:shadow-lg"
                  >
                    Submit Another Donation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
                
                {/* 1. Donor Category */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-2">
                    1. Select Donor Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'restaurant', label: 'Restaurant / Dhaba' },
                      { id: 'marriage_hall', label: 'Banquet / Marriage Hall' },
                      { id: 'bakery_sweet', label: 'Bakery / Sweet Shop' },
                      { id: 'cloud_kitchen', label: 'Cloud Kitchen / Caterer' },
                      { id: 'corporate', label: 'Corporate Cafeteria' },
                      { id: 'mandi_wholesaler', label: 'Mandi / Wholesaler' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setDonorType(type.id)}
                        className={`text-xs font-semibold py-2.5 px-2 rounded-xl border text-center transition-all ${
                          donorType === type.id
                            ? 'bg-[#123D2A] text-white border-[#123D2A] shadow-sm'
                            : 'bg-[#F8F5EC] text-[#202820] border-[#123D2A]/10 hover:border-[#4F8A5B]'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Organisation & Contact Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-org" className="block text-xs font-semibold text-[#202820] mb-1">
                      Organisation / Business Name *
                    </label>
                    <input
                      id="form-org"
                      type="text"
                      value={orgName}
                      onChange={(e) => setOrgName(e.target.value)}
                      placeholder="e.g. Saffron Grand Banquets"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                      aria-invalid={!!errors.orgName}
                    />
                    {errors.orgName && <p className="text-xs text-red-600 mt-1">{errors.orgName}</p>}
                  </div>
                  <div>
                    <label htmlFor="form-contact" className="block text-xs font-semibold text-[#202820] mb-1">
                      Contact Person Name *
                    </label>
                    <input
                      id="form-contact"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="e.g. Ramesh Sharma"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                      aria-invalid={!!errors.contactName}
                    />
                    {errors.contactName && <p className="text-xs text-red-600 mt-1">{errors.contactName}</p>}
                  </div>
                </div>

                {/* 3. Phone (+91) & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-phone" className="block text-xs font-semibold text-[#202820] mb-1">
                      Contact Mobile (+91) *
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-[#123D2A]/20 bg-[#F8F5EC] focus-within:border-[#4F8A5B] focus-within:ring-1 focus-within:ring-[#4F8A5B]">
                      <span className="px-3 py-2.5 text-xs font-bold text-[#123D2A] bg-[#123D2A]/10 border-r border-[#123D2A]/20 flex items-center">
                        +91
                      </span>
                      <input
                        id="form-phone"
                        type="tel"
                        maxLength={10}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        placeholder="9876543210"
                        className="w-full px-3 py-2.5 text-sm bg-transparent outline-none"
                        aria-invalid={!!errors.phone}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="form-email" className="block text-xs font-semibold text-[#202820] mb-1">
                      Email Address (for simulated handover confirmation) *
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ramesh@saffrongrand.com"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* 4. Vegetarian / Non-Vegetarian Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-2">
                    2. Dietary Classification *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'pure_veg', label: '🟢 Pure Vegetarian', sub: 'No meat, seafood, or egg' },
                      { id: 'vegan', label: '🌱 100% Vegan', sub: 'Plant-based, dairy-free' },
                      { id: 'contains_egg', label: '🟡 Contains Egg', sub: 'Bakery / egg mains' },
                      { id: 'non_veg', label: '🔴 Non-Vegetarian', sub: 'Poultry, mutton, fish' },
                    ].map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setDietaryType(d.id as any)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          dietaryType === d.id
                            ? 'bg-[#123D2A] text-white border-[#123D2A] shadow-sm'
                            : 'bg-[#F8F5EC] text-[#202820] border-[#123D2A]/10 hover:border-[#4F8A5B]'
                        }`}
                      >
                        <div className="text-xs font-bold">{d.label}</div>
                        <div className={`text-[10px] mt-0.5 ${dietaryType === d.id ? 'text-[#F8F5EC]/80' : 'text-[#5B685B]'}`}>
                          {d.sub}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Food Items & Preparation Date/Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label htmlFor="form-category" className="block text-xs font-semibold text-[#202820]">
                        Food Items / Description *
                      </label>
                      <span className="text-[10px] text-[#5B685B]">Multiple items allowed</span>
                    </div>
                    <input
                      id="form-category"
                      type="text"
                      value={foodCategory}
                      onChange={(e) => setFoodCategory(e.target.value)}
                      placeholder="Enter food items (e.g., Chicken Biryani, Dal, Paneer Curry...)"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                      aria-invalid={!!errors.foodCategory}
                    />
                    {errors.foodCategory && <p className="text-xs text-red-600 mt-1">{errors.foodCategory}</p>}

                    {/* Optional Dietary Suggestions */}
                    <div className="mt-2">
                      <div className="text-[10px] text-[#5B685B] mb-1 font-semibold flex items-center justify-between">
                        <span>Suggested {dietaryType === 'pure_veg' ? 'Pure Veg' : dietaryType === 'vegan' ? 'Vegan' : dietaryType === 'contains_egg' ? 'Egg' : 'Non-Veg'} items:</span>
                        <span className="text-[10px] text-[#4F8A5B]">Click to add</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {(DIETARY_SUGGESTIONS[dietaryType] || []).map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => handleAddFoodSuggestion(item)}
                            className="text-[10px] bg-[#F8F5EC] hover:bg-[#4F8A5B] hover:text-white text-[#123D2A] px-2 py-0.5 rounded-md border border-[#123D2A]/15 transition-colors cursor-pointer"
                          >
                            + {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form-preptime" className="block text-xs font-semibold text-[#202820] mb-1">
                      Preparation Date / Time *
                    </label>
                    <input
                      id="form-preptime"
                      type="text"
                      value={prepDateTime}
                      onChange={(e) => setPrepDateTime(e.target.value)}
                      placeholder="e.g. Today, 2:30 PM (Freshly prepared)"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                    />
                  </div>
                </div>

                {/* 6. Last Safe Consumption Time & Quantity */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="form-safeuntil" className="block text-xs font-semibold text-[#202820] mb-1">
                      Last Safe Consumption Window *
                    </label>
                    <input
                      id="form-safeuntil"
                      type="text"
                      value={safeConsumptionUntil}
                      onChange={(e) => setSafeConsumptionUntil(e.target.value)}
                      placeholder="e.g. Consume before 10:00 PM today"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202820] mb-1">
                      Surplus Quantity: <span className="text-[#F28C45] font-bold font-mono">{quantityKg} kg</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="500"
                      step="5"
                      value={quantityKg}
                      onChange={(e) => setQuantityKg(Number(e.target.value))}
                      className="w-full h-2 bg-[#123D2A]/20 rounded-lg appearance-none cursor-pointer accent-[#F28C45] mt-3"
                      aria-label="Surplus food quantity in kilograms"
                    />
                    <div className="flex justify-between text-[10px] text-[#5B685B] mt-1">
                      <span>5 kg</span>
                      <span>150 kg</span>
                      <span>300 kg</span>
                      <span>500+ kg</span>
                    </div>
                  </div>
                </div>

                {/* 7. Allergen Information */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-2">
                    Allergen & Ingredient Disclosures
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableAllergens.map((allergen) => (
                      <button
                        key={allergen}
                        type="button"
                        onClick={() => toggleAllergen(allergen)}
                        className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                          selectedAllergens.includes(allergen)
                            ? 'bg-[#F28C45] text-white border-[#F28C45] font-semibold'
                            : 'bg-[#F8F5EC] text-[#202820] border-[#123D2A]/15 hover:border-[#4F8A5B]'
                        }`}
                      >
                        {selectedAllergens.includes(allergen) ? '✓ ' : '+ '}
                        {allergen}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 8. Storage Condition in Celsius */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-2">
                    Storage Temperature (Celsius)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'hot', label: 'Hot Holding (> 65°C)' },
                      { id: 'chilled', label: 'Chilled (< 4°C)' },
                      { id: 'ambient', label: 'Ambient (20–25°C)' },
                      { id: 'frozen', label: 'Frozen (< -18°C)' },
                    ].map((temp) => (
                      <button
                        key={temp.id}
                        type="button"
                        onClick={() => setStorageCondition(temp.id)}
                        className={`text-xs py-2 px-2 rounded-xl border text-center transition-all ${
                          storageCondition === temp.id
                            ? 'bg-[#4F8A5B] text-white border-[#4F8A5B] font-semibold'
                            : 'bg-[#F8F5EC] text-[#5B685B] border-[#123D2A]/10 hover:border-[#4F8A5B]'
                        }`}
                      >
                        {temp.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 9. City, Address & PIN Code */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="form-city" className="block text-xs font-semibold text-[#202820] mb-1">
                      City / Town *
                    </label>
                    <input
                      id="form-city"
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Enter your city or town"
                      className="w-full px-3 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none font-medium text-[#202820]"
                      aria-invalid={!!errors.city}
                    />
                    {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="form-address" className="block text-xs font-semibold text-[#202820] mb-1">
                      Pickup Address & Landmark *
                    </label>
                    <input
                      id="form-address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="e.g. 14 MG Road, Near Metro Pillar 124, Service Gate"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                      aria-invalid={!!errors.address}
                    />
                    {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
                  </div>
                </div>

                {/* Additional Instructions */}
                <div>
                  <label htmlFor="form-notes" className="block text-xs font-semibold text-[#202820] mb-1">
                    Special Packaging or Loading Dock Notes (Optional)
                  </label>
                  <input
                    id="form-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Stored in 3 large stainless steel containers, ring back bell"
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#F8F5EC] border border-[#123D2A]/20 focus:border-[#4F8A5B] focus:ring-1 focus:ring-[#4F8A5B] outline-none"
                  />
                </div>

                {/* Simulation Notice Disclaimer before button */}
                <p className="text-[11px] text-[#5B685B] leading-relaxed italic">
                  * Note: FoodBridge is currently operating in demonstration mode. This form simulates the volunteer coordination booking flow without dispatching actual physical couriers.
                </p>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-[#F28C45] hover:bg-[#DC7630] disabled:opacity-50 text-white font-bold text-base py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting Donation...</span>
                    ) : (
                      <>
                        <span>Submit Donation</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
