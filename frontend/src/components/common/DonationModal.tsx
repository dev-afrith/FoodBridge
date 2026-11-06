import React, { useState } from 'react';
import { X, CheckCircle2, Truck, ArrowRight, AlertTriangle } from 'lucide-react';
import { DIETARY_SUGGESTIONS } from '../../data/mockData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [donorType, setDonorType] = useState('restaurant');
  const [orgName, setOrgName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dietaryType, setDietaryType] = useState<'pure_veg' | 'non_veg' | 'contains_egg' | 'vegan'>('pure_veg');
  const [foodCategory, setFoodCategory] = useState('');
  const [quantityKg, setQuantityKg] = useState<number>(25);
  const [prepDateTime, setPrepDateTime] = useState('Today (Within last 2 hours)');
  const [safeConsumptionUntil, setSafeConsumptionUntil] = useState('Within 4–6 hours (Before 10:00 PM)');
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [tempType, setTempType] = useState('hot');
  const [city, setCity] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<string | null>(null);

  if (!isOpen) return null;

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
    const newErrors: Record<string, string> = {};
    if (!orgName.trim()) newErrors.orgName = 'Organisation / business name is required';
    if (!contactName.trim()) newErrors.contactName = 'Contact person name is required';

    const cleanPhone = phone.replace(/[\s\-+]/g, '');
    const mobileDigits = cleanPhone.startsWith('91') && cleanPhone.length === 12 ? cleanPhone.slice(2) : cleanPhone;
    if (!/^[6-9]\d{9}$/.test(mobileDigits)) {
      newErrors.phone = 'Enter valid 10-digit Indian mobile number';
    }

    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email address required';
    if (!foodCategory.trim()) newErrors.foodCategory = 'Enter food items (e.g. Chicken Biryani, Dal)';
    if (!city.trim()) newErrors.city = 'Enter your city or town';
    if (!pickupAddress.trim()) newErrors.pickupAddress = 'Street pickup location required';
    if (!quantityKg || quantityKg < 2) newErrors.quantityKg = 'Minimum donation estimate is 2 kg';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = `FB-SIM-${Math.floor(10000 + Math.random() * 90000)}`;
      setSubmittedReceipt(code);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedReceipt(null);
    setOrgName('');
    setContactName('');
    setPhone('');
    setEmail('');
    setFoodCategory('');
    setQuantityKg(25);
    setPrepDateTime('Today (Within last 2 hours)');
    setSafeConsumptionUntil('Within 4–6 hours (Before 10:00 PM)');
    setTempType('hot');
    setCity('');
    setPickupAddress('');
    setSelectedAllergens([]);
    setErrors({});
  };

  const estimatedMeals = Math.round(quantityKg * 2.5);
  const estimatedCO2 = Math.round(quantityKg * 2.5);
  const estimatedValueINR = Math.round(estimatedMeals * 45);

  const availableAllergens = ['Dairy / Milk', 'Peanuts / Tree Nuts', 'Wheat / Gluten', 'Soy'];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FCFAF6] rounded-2xl shadow-2xl border border-[#123D2A]/15 overflow-hidden my-8">
        {/* Header Bar */}
        <div className="bg-[#123D2A] text-[#F8F5EC] p-5 sm:p-6 flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#4F8A5B]/30 text-xs font-semibold text-[#6BA878] mb-2">
              <Truck className="w-3.5 h-3.5 text-[#F28C45]" />
              90-Sec Form • Target 45–60 Min Pickup Window
            </div>
            <h2 id="donation-modal-title" className="text-xl sm:text-2xl font-bold font-['Montserrat']">
              Schedule Surplus Food Handover
            </h2>
            <p className="text-xs sm:text-sm text-[#F8F5EC]/80 mt-1">
              FSSAI-aligned protocol. Submit in 90 seconds to trigger volunteer dispatch routing.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#F8F5EC]/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {submittedReceipt ? (
            <div className="text-center py-6 px-2 space-y-4">
              <div className="w-16 h-16 bg-[#4F8A5B]/15 text-[#4F8A5B] rounded-full mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              {/* DEMO SIMULATION NOTICE */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-3.5 text-left flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-amber-950">
                  <strong className="block font-bold mb-0.5">Demonstration Simulation Notice</strong>
                  <span>
                    This is a demonstration submission. No actual food pickup has been scheduled.
                  </span>
                </div>
              </div>

              <h3 className="text-2xl font-bold font-['Montserrat'] text-[#123D2A]">
                Simulated Handover Notice Queued!
              </h3>
              <p className="text-xs text-[#5B685B] max-w-md mx-auto">
                Thank you, <strong className="text-[#202820]">{contactName || 'Partner'}</strong>! Reference code:
              </p>
              <div className="inline-block bg-[#123D2A] text-white px-5 py-2.5 rounded-xl font-mono text-lg font-bold tracking-widest shadow-inner">
                {submittedReceipt}
              </div>

              {/* Dynamic Impact Summary Box */}
              <div className="bg-[#F8F5EC] rounded-xl p-4 border border-[#4F8A5B]/20 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#123D2A]/10">
                  <div>
                    <span className="text-[#5B685B] block">Food Items:</span>
                    <strong className="text-[#123D2A] font-semibold">{foodCategory}</strong>
                  </div>
                  <div>
                    <span className="text-[#5B685B] block">City:</span>
                    <strong className="text-[#123D2A] font-semibold">{city}</strong>
                  </div>
                  <div>
                    <span className="text-[#5B685B] block">Dietary Type:</span>
                    <strong className="text-[#123D2A] font-semibold capitalize">{dietaryType.replace('_', ' ')}</strong>
                  </div>
                  <div>
                    <span className="text-[#5B685B] block">Quantity:</span>
                    <strong className="text-[#123D2A] font-semibold">{quantityKg} kg (~{estimatedMeals} meals)</strong>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div>
                    <span className="text-[#5B685B] block">Estimated CO₂e Mitigated:</span>
                    <strong className="text-[#4F8A5B] font-bold">~{estimatedCO2} kg</strong>
                  </div>
                  <div>
                    <span className="text-[#5B685B] block">Illustrative Benchmark:</span>
                    <strong className="text-[#F28C45] font-bold">₹{estimatedValueINR.toLocaleString('en-IN')}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-[#123D2A] hover:bg-[#1D583E] text-white px-6 py-2.5 rounded-full font-bold text-xs shadow transition-all cursor-pointer"
                >
                  Submit Another Donation
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-transparent hover:bg-black/5 text-[#5B685B] px-4 py-2 rounded-full font-semibold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Donor Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-1.5">
                  1. Donor Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'restaurant', label: 'Restaurant / Dhaba' },
                    { id: 'marriage_hall', label: 'Banquet / Hall' },
                    { id: 'bakery_sweet', label: 'Bakery / Mithai' },
                    { id: 'cloud_kitchen', label: 'Cloud Kitchen' },
                    { id: 'corporate', label: 'Corporate' },
                    { id: 'mandi_wholesaler', label: 'Mandi / Farm' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setDonorType(cat.id)}
                      className={`text-xs font-semibold py-2 px-1 rounded-lg border text-center transition-all ${
                        donorType === cat.id
                          ? 'bg-[#123D2A] text-white border-[#123D2A] shadow-sm'
                          : 'bg-white text-[#202820] border-[#123D2A]/15 hover:border-[#4F8A5B]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Organization & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-org" className="block text-xs font-semibold text-[#202820] mb-1">
                    Organisation / Business Name *
                  </label>
                  <input
                    id="modal-org"
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g. Royal Punjab Haveli"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                    aria-invalid={!!errors.orgName}
                  />
                  {errors.orgName && <p className="text-[11px] text-red-600 mt-0.5">{errors.orgName}</p>}
                </div>
                <div>
                  <label htmlFor="modal-contact" className="block text-xs font-semibold text-[#202820] mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    id="modal-contact"
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Harpreet Singh"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                    aria-invalid={!!errors.contactName}
                  />
                  {errors.contactName && <p className="text-[11px] text-red-600 mt-0.5">{errors.contactName}</p>}
                </div>
              </div>

              {/* Phone (+91) & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#202820] mb-1">
                    Mobile Phone (+91) *
                  </label>
                  <div className="flex rounded-lg overflow-hidden border border-[#123D2A]/20 bg-white focus-within:border-[#4F8A5B]">
                    <span className="px-2.5 py-1.5 text-xs font-bold text-[#123D2A] bg-[#123D2A]/10 border-r border-[#123D2A]/20 flex items-center">
                      +91
                    </span>
                    <input
                      id="modal-phone"
                      type="tel"
                      maxLength={10}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                      placeholder="9876543210"
                      className="w-full px-2.5 py-1.5 text-xs outline-none"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-0.5">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-[#202820] mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@royalhaveli.com"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
                </div>
              </div>

              {/* Dietary Classification Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-1.5">
                  2. Dietary Classification *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'pure_veg', label: '🟢 Pure Veg' },
                    { id: 'vegan', label: '🌱 100% Vegan' },
                    { id: 'contains_egg', label: '🟡 Contains Egg' },
                    { id: 'non_veg', label: '🔴 Non-Veg' },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDietaryType(d.id as any)}
                      className={`text-xs py-2 px-2 rounded-lg border text-center transition-all ${
                        dietaryType === d.id
                          ? 'bg-[#123D2A] text-white border-[#123D2A] font-bold'
                          : 'bg-white text-[#202820] border-[#123D2A]/15 hover:border-[#4F8A5B]'
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Food Category, Prep Time & Quantity */}
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="modal-food" className="block text-xs font-semibold text-[#202820]">
                      Food Items / Description *
                    </label>
                    <span className="text-[10px] text-[#5B685B]">Multiple items allowed</span>
                  </div>
                  <input
                    id="modal-food"
                    type="text"
                    value={foodCategory}
                    onChange={(e) => setFoodCategory(e.target.value)}
                    placeholder="Enter food items (e.g., Chicken Biryani, Dal, Paneer Curry...)"
                    className="w-full px-2.5 py-2 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                    aria-invalid={!!errors.foodCategory}
                  />
                  {errors.foodCategory && <p className="text-[11px] text-red-600 mt-0.5">{errors.foodCategory}</p>}

                  {/* Optional Dietary Suggestions */}
                  <div className="mt-1.5">
                    <div className="text-[10px] text-[#5B685B] mb-1 font-semibold flex items-center justify-between">
                      <span>Suggested {dietaryType === 'pure_veg' ? 'Pure Veg' : dietaryType === 'vegan' ? 'Vegan' : dietaryType === 'contains_egg' ? 'Egg' : 'Non-Veg'} items:</span>
                      <span className="text-[10px] text-[#4F8A5B]">Click to add</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {(DIETARY_SUGGESTIONS[dietaryType] || []).map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleAddFoodSuggestion(item)}
                          className="text-[10px] bg-[#F8F5EC] hover:bg-[#4F8A5B] hover:text-white text-[#123D2A] px-2 py-0.5 rounded border border-[#123D2A]/15 transition-colors cursor-pointer"
                        >
                          + {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="modal-prep" className="block text-xs font-semibold text-[#202820] mb-1">
                      Prep Date/Time *
                    </label>
                    <input
                      id="modal-prep"
                      type="text"
                      value={prepDateTime}
                      onChange={(e) => setPrepDateTime(e.target.value)}
                      placeholder="e.g. Today, 2:30 PM"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-weight" className="block text-xs font-semibold text-[#202820] mb-1">
                      Quantity (kg) *
                    </label>
                    <input
                      id="modal-weight"
                      type="number"
                      min="2"
                      max="2000"
                      value={quantityKg}
                      onChange={(e) => setQuantityKg(Number(e.target.value))}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none font-bold text-[#123D2A]"
                      aria-invalid={!!errors.quantityKg}
                    />
                    {errors.quantityKg && <p className="text-[11px] text-red-600 mt-0.5">{errors.quantityKg}</p>}
                  </div>
                </div>
              </div>

              {/* Safe Consumption Time & Allergens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-safeuntil" className="block text-xs font-semibold text-[#202820] mb-1">
                    Safe Consumption Until *
                  </label>
                  <input
                    id="modal-safeuntil"
                    type="text"
                    value={safeConsumptionUntil}
                    onChange={(e) => setSafeConsumptionUntil(e.target.value)}
                    placeholder="e.g. Before 10:00 PM today"
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#202820] mb-1">
                    Allergen Disclosures
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {availableAllergens.map((allergen) => (
                      <button
                        key={allergen}
                        type="button"
                        onClick={() => toggleAllergen(allergen)}
                        className={`text-[10px] px-2 py-1 rounded-full border transition-all ${
                          selectedAllergens.includes(allergen)
                            ? 'bg-[#F28C45] text-white border-[#F28C45] font-semibold'
                            : 'bg-white text-[#202820] border-[#123D2A]/15 hover:border-[#4F8A5B]'
                        }`}
                      >
                        {selectedAllergens.includes(allergen) ? '✓ ' : '+ '}
                        {allergen}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Impact Calculator Preview */}
              <div className="bg-[#123D2A]/5 border border-[#4F8A5B]/20 rounded-xl p-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-1.5">
                <div className="flex items-center gap-1.5 font-semibold text-[#123D2A]">
                  <Truck className="w-3.5 h-3.5 text-[#F28C45]" />
                  <span>Illustrative Impact Preview:</span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="bg-white px-2 py-0.5 rounded font-bold text-[#123D2A] border border-[#123D2A]/10 text-[11px]">
                    🍽️ ~{estimatedMeals} meals (est.)
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded font-bold text-[#4F8A5B] border border-[#123D2A]/10 text-[11px]">
                    🌱 ~{estimatedCO2} kg CO₂e (est.)
                  </span>
                  <span className="bg-white px-2 py-0.5 rounded font-bold text-[#F28C45] border border-[#123D2A]/10 text-[11px]">
                    ₹{estimatedValueINR.toLocaleString('en-IN')} value (est.)
                  </span>
                </div>
              </div>

              {/* Storage Condition in Celsius */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-1.5">
                  Holding Temperature (Celsius)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'hot', label: 'Hot (> 65°C)' },
                    { id: 'chilled', label: 'Chilled (< 4°C)' },
                    { id: 'ambient', label: 'Ambient (20–25°C)' },
                    { id: 'frozen', label: 'Frozen (< -18°C)' },
                  ].map((temp) => (
                    <button
                      key={temp.id}
                      type="button"
                      onClick={() => setTempType(temp.id)}
                      className={`text-[11px] py-1.5 px-1.5 rounded-lg border text-center transition-all cursor-pointer ${
                        tempType === temp.id
                          ? 'bg-[#4F8A5B] text-white border-[#4F8A5B] font-semibold'
                          : 'bg-white text-[#5B685B] border-[#123D2A]/15 hover:border-[#4F8A5B]'
                      }`}
                    >
                      {temp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* City & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="modal-city" className="block text-xs font-semibold text-[#202820] mb-1">
                    City / Town *
                  </label>
                  <input
                    id="modal-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your city or town"
                    className="w-full px-2.5 py-1.5 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                    aria-invalid={!!errors.city}
                  />
                  {errors.city && <p className="text-[11px] text-red-600 mt-0.5">{errors.city}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="modal-address" className="block text-xs font-semibold text-[#202820] mb-1">
                    Pickup Street Address & Landmark *
                  </label>
                  <input
                    id="modal-address"
                    type="text"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    placeholder="e.g. 12 Brigade Road, Rear Loading Gate"
                    className="w-full px-3 py-1.5 text-xs rounded-lg bg-white border border-[#123D2A]/20 focus:border-[#4F8A5B] outline-none"
                    aria-invalid={!!errors.pickupAddress}
                  />
                  {errors.pickupAddress && <p className="text-[11px] text-red-600 mt-0.5">{errors.pickupAddress}</p>}
                </div>
              </div>

              {/* Demonstration Notice before button */}
              <p className="text-[10px] text-[#5B685B] leading-tight italic">
                * Note: Prototype demo mode. This form simulates the intake flow without dispatching actual physical couriers.
              </p>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3 border-t border-[#123D2A]/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-[#5B685B] hover:text-[#123D2A] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#F28C45] hover:bg-[#DC7630] disabled:opacity-50 text-white font-bold px-6 py-2.5 rounded-full shadow hover:shadow-md transition-all text-xs cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Donation...</span>
                  ) : (
                    <>
                      <span>Submit Donation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
