import React from 'react';
import { Sparkles, ArrowRight, Check, HeartHandshake, ShieldCheck, Zap } from 'lucide-react';
import { IMAGES } from '../data/mockData';

interface SolutionSectionProps {
  onOpenDonationModal: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenDonationModal }) => {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-[#F8F5EC] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8A5B]/15 text-[#123D2A] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F28C45]" />
            The FoodBridge Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight">
            A frictionless bridge between <br />
            <span className="text-[#4F8A5B] font-['Playfair_Display'] italic font-normal">kitchen surplus</span> and{' '}
            <span className="text-[#F28C45]">nourished neighbors.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B685B] leading-relaxed">
            We coordinate rapid surplus meal recovery using food-grade insulated carriers, FSSAI hygiene guidelines, and localized community shelter networks.
          </p>
        </div>

        {/* 3-Pillar Ecosystem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Food Donors */}
          <div className="bg-white rounded-3xl p-8 border border-[#123D2A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#123D2A] text-white flex items-center justify-center font-bold text-lg shadow-md">
                01
              </div>
              <h3 className="text-2xl font-bold font-['Montserrat'] text-[#123D2A]">
                Commercial Food Donors
              </h3>
              <p className="text-sm text-[#5B685B] leading-relaxed">
                Restaurants, banquet halls, dhabas, cloud kitchens, and bakeries log surplus in seconds. No complex repackaging required.
              </p>
              <ul className="space-y-2.5 text-xs text-[#202820] pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                  <span>Digital handover receipts for CSR & ESG documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                  <span>Structured under FSSAI Surplus Food Recovery protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                  <span>Zero landfill disposal; positive community impact</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-[#123D2A]/10">
              <span className="text-[11px] font-bold text-[#F28C45] uppercase tracking-wide">
                Target Network: Urban Restaurants, Caterers & Banquets
              </span>
            </div>
          </div>

          {/* Pillar 2: The FoodBridge Hub */}
          <div className="bg-[#123D2A] text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4F8A5B]/20 rounded-full blur-2xl pointer-events-none"></div>
            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#F28C45] text-white flex items-center justify-center font-bold text-lg shadow-md">
                02
              </div>
              <h3 className="text-2xl font-bold font-['Montserrat'] text-[#F8F5EC]">
                Smart Dispatch Routing
              </h3>
              <p className="text-sm text-[#F8F5EC]/80 leading-relaxed">
                Our logistics matching pairs meal category, storage temperature, and destination capacity within minutes.
              </p>
              <ul className="space-y-2.5 text-xs text-[#F8F5EC]/90 pt-2">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F28C45] flex-shrink-0" />
                  <span>Target 45–60 min coordination window across city clusters</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#6BA878] flex-shrink-0" />
                  <span>Food-grade insulated thermal carriers for hot & cold transit</span>
                </li>
                <li className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#F28C45] flex-shrink-0" />
                  <span>Trained volunteer coordinators following safety checklists</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
              <span className="text-[11px] font-bold text-[#6BA878] uppercase tracking-wide">
                Active Coordination: Participating Indian Metro Regions
              </span>
            </div>
          </div>

          {/* Pillar 3: Community Kitchens */}
          <div className="bg-white rounded-3xl p-8 border border-[#123D2A]/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#4F8A5B] text-white flex items-center justify-center font-bold text-lg shadow-md">
                03
              </div>
              <h3 className="text-2xl font-bold font-['Montserrat'] text-[#123D2A]">
                Community Tables
              </h3>
              <p className="text-sm text-[#5B685B] leading-relaxed">
                Partner shelters, rain baseras, community kitchens, and after-school centers receive hygienic, freshly prepared meals.
              </p>
              <ul className="space-y-2.5 text-xs text-[#202820] pt-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                  <span>Meals served fresh and warm on the same day</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                  <span>Dignified, respectful community distribution</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                  <span>Clear Pure Vegetarian & dietary segregation</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t border-[#123D2A]/10">
              <span className="text-[11px] font-bold text-[#123D2A] uppercase tracking-wide">
                Target Beneficiaries: Partner Shelters & Community Feeding Hubs
              </span>
            </div>
          </div>

        </div>

        {/* Highlight Feature Row: Photography + Impact Statement */}
        <div className="bg-white rounded-3xl border border-[#123D2A]/10 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 shadow-inner">
            <img
              src={IMAGES.produceCrate}
              alt="Crisp organic greens and fresh produce rescued by FoodBridge partners"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A5B]">
              The Core Difference
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Montserrat'] text-[#123D2A]">
              We don't collect canned leftovers. <br />
              <span className="font-['Playfair_Display'] italic text-[#F28C45] font-normal">
                We rescue fresh, vibrant, nourishing food.
              </span>
            </h3>
            <p className="text-sm text-[#5B685B] leading-relaxed">
              Every person deserves whole grains, crisp salads, clean proteins, and wholesome meals prepared with care. By intercepting food before it degrades, we elevate food security from survival rations to genuine nourishment.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDonationModal}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#123D2A] hover:text-[#F28C45] transition-colors group cursor-pointer"
              >
                <span>Join our commercial rescue partner network</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

