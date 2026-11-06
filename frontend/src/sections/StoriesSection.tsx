import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';
import { STORIES } from '../data/mockData';

export const StoriesSection: React.FC = () => {
  return (
    <section id="stories" className="py-20 lg:py-28 bg-[#F8F5EC] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D2A]/10 text-[#123D2A] text-xs font-bold uppercase tracking-wider">
            Voices of the Bridge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight">
            Real impact behind <br />
            <span className="text-[#4F8A5B] font-['Playfair_Display'] italic font-normal">every rescued meal.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5B685B] leading-relaxed">
            Listen to how chefs, shelter operators, and local bakeries transformed their relationship with excess food.
          </p>
        </div>

        {/* Stories Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-8 border border-[#123D2A]/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Illustrative Notice Pill (QC Requirement) */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F28C45]/15 text-[#DC7630] px-2.5 py-1 rounded-full">
                  {story.tag}
                </span>
                <span className="text-[10px] text-[#5B685B] bg-[#123D2A]/5 px-2 py-0.5 rounded italic">
                  Illustrative Partner Profile
                </span>
              </div>

              {/* Quote Body */}
              <div className="space-y-4 mb-8">
                <Quote className="w-8 h-8 text-[#4F8A5B]/30 group-hover:text-[#4F8A5B] transition-colors" />
                <p className="text-sm sm:text-base text-[#202820] leading-relaxed font-['Plus_Jakarta_Sans'] italic">
                  "{story.quote}"
                </p>
              </div>

              {/* Author & Organization Details */}
              <div className="pt-6 border-t border-[#123D2A]/10 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={story.avatar}
                    alt={story.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#4F8A5B]"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-bold font-['Montserrat'] text-[#123D2A]">
                      {story.author}
                    </h3>
                    <p className="text-xs text-[#5B685B]">
                      {story.role}, {story.organization}
                    </p>
                  </div>
                </div>

                <div className="bg-[#F8F5EC] rounded-xl p-3 text-xs text-[#123D2A] font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F8A5B] flex-shrink-0" />
                  <span>{story.highlight}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
