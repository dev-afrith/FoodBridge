import React from 'react';
import { Heart, ArrowRight, Truck, Users, Building } from 'lucide-react';
import { BRAND_INFO, IMAGES } from '../data/mockData';

interface FinalCtaSectionProps {
  onOpenDonationModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenDonationModal }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#123D2A] text-white text-left relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F8A5B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F28C45]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-gradient-to-br from-[#123D2A] to-[#1D583E] rounded-3xl p-8 sm:p-14 border border-white/15 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F28C45]/20 text-[#F28C45] text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-[#F28C45]" />
                Join The Movement
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-white tracking-tight leading-tight">
                Turning Surplus Into Smiles <br />
                <span className="text-[#F28C45] font-['Playfair_Display'] italic font-normal">
                  takes a single decision today.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#F8F5EC]/85 font-['Plus_Jakarta_Sans'] leading-relaxed max-w-2xl">
                Tonight, hundreds of families in our metro neighborhoods will gather at shelter dining tables. Together, we can ensure every plate is filled with fresh, dignified, and delicious nutrition.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  type="button"
                  onClick={onOpenDonationModal}
                  className="inline-flex items-center justify-center gap-3 bg-[#F28C45] hover:bg-[#DC7630] text-white font-bold text-base px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 group cursor-pointer"
                >
                  <span>Submit 90-Sec Handover Notice</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${BRAND_INFO.hotline.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold text-base px-7 py-4 rounded-full border border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <span>Helpline: {BRAND_INFO.hotline}</span>
                </a>
              </div>

              {/* Three Partner Tracks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
                <div className="flex items-center gap-2.5 text-[#F8F5EC]/90">
                  <Building className="w-4 h-4 text-[#F28C45]" />
                  <span>Restaurants, Caterers & Banquets</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#F8F5EC]/90">
                  <Truck className="w-4 h-4 text-[#6BA878]" />
                  <span>Volunteer Logistics Network</span>
                </div>
                <div className="flex items-center gap-2.5 text-[#F8F5EC]/90">
                  <Users className="w-4 h-4 text-[#F28C45]" />
                  <span>Shelters & Community Langars</span>
                </div>
              </div>

            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[3/4]">
                <img
                  src={IMAGES.distributionMeal}
                  alt="A community meal recipient smiling with a warm nutritious plate"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123D2A] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white">
                  <strong className="block font-bold">FSSAI Recovery Protocols Aligned</strong>
                  <span className="text-[#F8F5EC]/80">Zero food wasted. Every neighbor nourished.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
