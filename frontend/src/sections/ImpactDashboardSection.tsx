import React from 'react';
import { Utensils, Apple, Leaf, HeartHandshake, Info, ShieldCheck } from 'lucide-react';
import { IMPACT_METRICS } from '../data/mockData';
import { useCountUp } from '../hooks/useCountUp';

export const ImpactDashboardSection: React.FC = () => {
  // Animated counters
  const mealsCount = useCountUp(142500, 2200, true);
  const surplusCount = useCountUp(71250, 2400, true);
  const co2Count = useCountUp(178, 1800, true);
  const partnersCount = useCountUp(85, 1500, true);

  const getAnimatedValue = (id: string, original: number) => {
    switch (id) {
      case 'meals':
        return mealsCount.toLocaleString();
      case 'surplus':
        return surplusCount.toLocaleString();
      case 'co2':
        return co2Count.toLocaleString();
      case 'partners':
        return partnersCount.toLocaleString();
      default:
        return original.toLocaleString();
    }
  };

  const getMetricIcon = (icon: string) => {
    switch (icon) {
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#F28C45]" />;
      case 'Apple':
        return <Apple className="w-6 h-6 text-[#4F8A5B]" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#123D2A]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#F28C45]" />;
      default:
        return <Utensils className="w-6 h-6 text-[#F28C45]" />;
    }
  };

  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#123D2A] text-white text-left relative overflow-hidden">
      {/* Background organic light glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4F8A5B]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F28C45]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Disclaimer */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F8A5B]/20 text-[#6BA878] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F28C45]" />
              Real-Time Community Telemetry
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-[#F8F5EC] tracking-tight">
              Measuring every meal, kilogram, <br />
              <span className="text-[#F28C45] font-['Playfair_Display'] italic font-normal">
                and restored smile.
              </span>
            </h2>
          </div>

          {/* Labelled Illustrative Banner (Per Quality Control Rules) */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 max-w-md text-xs text-[#F8F5EC]/85 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#F28C45] flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-white font-semibold mb-0.5">Illustrative Regional Simulation:</strong>
              <span>Figures model urban food rescue potential across Indian metro clusters using UNEP and MoEFCC organic waste conversion benchmarks.</span>
            </div>
          </div>
        </div>

        {/* 4 Animated Metric Display Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/15 hover:border-[#F28C45]/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getMetricIcon(metric.icon)}
              </div>
              <div className="space-y-2">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#F28C45] bg-[#F28C45]/20 px-2 py-0.5 rounded-full mb-1">
                  Illustrative Estimate
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold font-['Montserrat'] text-white tracking-tight">
                  <span>{getAnimatedValue(metric.id, metric.value)}</span>
                  <span className="text-[#F28C45] text-3xl font-bold">{metric.suffix}</span>
                </div>
                <h3 className="text-sm font-bold text-[#6BA878] uppercase tracking-wide">
                  {metric.label}
                </h3>
                <p className="text-xs text-[#F8F5EC]/75 leading-relaxed pt-1">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Category Breakdown & Live Flow Progress */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F28C45]">
              Dietary Composition of Recovered Meals
            </span>
            <h3 className="text-2xl font-bold font-['Montserrat'] text-white">
              Prioritizing dense nutritional diversity.
            </h3>
            <p className="text-sm text-[#F8F5EC]/80 leading-relaxed">
              Surplus is strictly categorized into 4 core pantry needs so emergency food centers receive balanced, ready-to-serve nutritional building blocks rather than empty carbs.
            </p>
            <div className="flex items-center gap-3 text-xs text-[#6BA878] font-bold">
              <span>● Zero ultra-processed items accepted</span>
              <span>● Chef-inspected temperature standards</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            {[
              { label: 'Farm & Mandi Fresh Vegetables', pct: 40, color: 'bg-[#4F8A5B]' },
              { label: 'Rotis, Whole Grain Breads & Pav', pct: 28, color: 'bg-[#F28C45]' },
              { label: 'Prepared Rice, Dal & Sabzi Mains', pct: 22, color: 'bg-emerald-400' },
              { label: 'Dairy & Chilled Staples', pct: 10, color: 'bg-amber-300' },
            ].map((cat) => (
              <div key={cat.label} className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#F8F5EC]">
                  <span className="font-medium">{cat.label}</span>
                  <span className="font-mono font-bold">{cat.pct}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${cat.color} transition-all duration-1000`}
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
