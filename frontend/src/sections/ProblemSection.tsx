import React from 'react';
import { AlertTriangle, TrendingDown, Trash2, CloudRain } from 'lucide-react';
import { PROBLEM_STATS } from '../data/mockData';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-[#F2EFE5] border-y border-[#123D2A]/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F28C45]/15 text-[#F28C45] text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            The Real Food Paradox
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight leading-tight">
            Hunger is not a shortage of food. <br />
            <span className="text-[#F28C45] font-['Playfair_Display'] italic font-normal">
              It is a tragic failure of logistics.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5B685B] font-['Plus_Jakarta_Sans'] leading-relaxed">
            While tonnes of perfectly edible, freshly prepared meals, banquet curries, and farm harvests are lost each day, nearby community shelters and daily-wage families face pressing nutritional gaps.
          </p>
        </div>

        {/* 3 Core Data Stat Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PROBLEM_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#123D2A]/10 hover:shadow-md hover:border-[#4F8A5B]/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#123D2A] group-hover:bg-[#F28C45] transition-colors" />
              <div className="space-y-3">
                <span className="text-5xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight block">
                  {stat.figure}
                </span>
                <span className="text-sm font-bold text-[#4F8A5B] uppercase tracking-wide block">
                  {stat.unit}
                </span>
                <p className="text-sm text-[#202820] leading-relaxed pt-1">
                  {stat.context}
                </p>
                <div className="pt-3 border-t border-[#123D2A]/5 text-[11px] text-[#5B685B] italic">
                  Source: {stat.source}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Where Food Waste Originates - Editorial Analysis */}
        <div className="bg-[#123D2A] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F28C45]">
                Behind The Kitchen Backdoors
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Montserrat'] leading-snug">
                Why does delicious commercial food get thrown away?
              </h3>
              <p className="text-sm text-[#F8F5EC]/80 leading-relaxed">
                Hospitality operators and kitchens care deeply, but often lack same-day volunteer pickup coordination, food-grade thermal containers, and verified community destination networks. FoodBridge solves this through organized urban dispatch.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#F28C45]/20 text-[#F28C45] flex items-center justify-center font-bold">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#F8F5EC]">Banquets & Weddings</h4>
                <p className="text-xs text-[#F8F5EC]/75 leading-relaxed">
                  Indian wedding receptions and corporate events prepare surplus thalis and mains that remain completely unserved.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#4F8A5B]/30 text-[#6BA878] flex items-center justify-center font-bold">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#F8F5EC]">Bakeries & Mithai</h4>
                <p className="text-xs text-[#F8F5EC]/75 leading-relaxed">
                  Freshly baked pav, loaves, and day-fresh snacks that cannot be displayed for retail the following day.
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10 space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#F8F5EC]/20 text-white flex items-center justify-center font-bold">
                  <CloudRain className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-[#F8F5EC]">Mandis & Grocers</h4>
                <p className="text-xs text-[#F8F5EC]/75 leading-relaxed">
                  Fresh vegetables and fruit crates with minor cosmetic variations possessing rich nutritional goodness.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
