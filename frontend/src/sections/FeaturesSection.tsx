import React, { useState } from 'react';
import { Thermometer, FileCheck, MapPin, Sparkles, ShieldCheck, Activity } from 'lucide-react';
import { KEY_FEATURES } from '../data/mockData';

export const FeaturesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Food Safety', 'Documentation', 'Logistics', 'Sustainability', 'Cultural Care', 'Transparency'];

  const filteredFeatures = selectedCategory === 'All'
    ? KEY_FEATURES
    : KEY_FEATURES.filter((f) => f.category === selectedCategory);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'Thermometer':
        return <Thermometer className="w-6 h-6 text-[#F28C45]" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-[#4F8A5B]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#F28C45]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#4F8A5B]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#123D2A]" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-[#F28C45]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#4F8A5B]" />;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#F8F5EC] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4F8A5B]">
              Engineered for Speed & Trust
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight">
              Enterprise-grade tools for <br />
              <span className="text-[#F28C45] font-['Playfair_Display'] italic font-normal">social good.</span>
            </h2>
          </div>
          <p className="text-sm text-[#5B685B] max-w-sm leading-relaxed">
            Every feature is designed to protect kitchen staff time, guarantee public health standards, and reward food generosity.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Feature categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#123D2A] text-white border-[#123D2A] shadow-sm'
                  : 'bg-white text-[#202820] border-[#123D2A]/15 hover:border-[#4F8A5B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-7 border border-[#123D2A]/10 shadow-sm hover:shadow-lg hover:border-[#4F8A5B]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8F5EC] border border-[#123D2A]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getFeatureIcon(feature.iconName)}
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F8A5B] bg-[#4F8A5B]/10 px-2.5 py-0.5 rounded-full inline-block">
                    {feature.category}
                  </span>
                  <h3 className="text-xl font-bold font-['Montserrat'] text-[#123D2A] group-hover:text-[#4F8A5B] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#5B685B] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#123D2A]/5 flex items-center justify-between text-xs font-semibold text-[#123D2A]">
                <span>Operational Standard</span>
                <span className="text-[#4F8A5B] font-mono">FSSAI Aligned</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

