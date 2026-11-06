import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { IMAGES } from '../data/mockData';

interface HeroSectionProps {
  onOpenDonationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDonationModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#F8F5EC]">
      {/* Subtle organic background decoration */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#4F8A5B]/10 blur-3xl pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#F28C45]/10 blur-3xl pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123D2A]/10 border border-[#123D2A]/15 text-[#123D2A] text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#4F8A5B]"></span>
              <span>Urban Surplus Food Recovery Model</span>
              <span className="text-[#F28C45] font-bold">★ FSSAI Guidelines Aligned</span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight leading-[1.12]">
                Turning Surplus <br className="hidden sm:inline" />
                <span className="text-[#4F8A5B] italic font-['Playfair_Display'] font-normal">Into Daily</span>{' '}
                <span className="relative inline-block text-[#F28C45]">
                  Smiles.
                  <svg
                    aria-hidden="true"
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#F28C45]/40"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" />
                  </svg>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#5B685B] font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl pt-2">
                Log surplus banquet meals, rotis, and fresh produce in a <strong>90-second online form</strong>. Our logistics network targets <strong>45–60 minute volunteer pickup coordination</strong> to redirect wholesome nourishment to community shelters.
              </p>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenDonationModal}
                className="inline-flex items-center justify-center gap-3 bg-[#F28C45] hover:bg-[#DC7630] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#F28C45] focus:ring-offset-2"
              >
                <span>Donate Food Surplus</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#impact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#123D2A]/5 text-[#123D2A] font-bold text-base px-7 py-4 rounded-full border border-[#123D2A]/20 shadow-sm transition-all duration-200"
              >
                <span>Explore Live Impact</span>
              </a>
            </div>

            {/* Trust & Compliance Micro-Badges */}
            <div className="pt-4 border-t border-[#123D2A]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#5B685B]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                <span>FSSAI Recovery Protocols</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                <span>Thermal Insulated Handover</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 text-[#F28C45] flex-shrink-0" />
                <span>Target 45–60 Min Coordination</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Editorial Visual Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Curated Photography Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-[#123D2A]/10 group">
                <img
                  src={IMAGES.heroMain}
                  alt="FoodBridge volunteers carefully packaging fresh wholesome vegetables for neighborhood meal distribution"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A]/85 via-transparent to-transparent"></div>
                
                {/* Overlay Text Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#F28C45] px-2.5 py-0.5 rounded-full mb-2">
                    Community Dignity
                  </span>
                  <h3 className="text-xl font-bold font-['Montserrat'] leading-snug">
                    Over 1,42,000+ meals shared with dignity.
                  </h3>
                  <p className="text-xs text-[#F8F5EC]/80 mt-1">
                    Direct handoffs from restaurant kitchens to shelter dining tables.
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Top Right Rescue Metric */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#123D2A]/10 flex items-center gap-3 animate-bounce-slight max-w-[210px] text-left">
                <div className="w-10 h-10 rounded-xl bg-[#4F8A5B]/20 text-[#4F8A5B] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-[#5B685B] font-medium">Daily Active Rescue</span>
                  <strong className="block text-sm font-bold text-[#123D2A]">100% Edible Surplus</strong>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left Impact */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#123D2A] text-white rounded-2xl p-4 shadow-xl border border-white/20 flex items-center gap-3 max-w-[240px] text-left">
                <div className="w-10 h-10 rounded-xl bg-[#F28C45] text-white flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <span className="block text-[11px] text-[#F8F5EC]/70 uppercase font-semibold">Verified Safe Handover</span>
                  <strong className="block text-sm font-bold text-[#F8F5EC]">Safe Food Guarantee</strong>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
