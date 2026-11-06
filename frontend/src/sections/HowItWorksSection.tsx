import React, { useState } from 'react';
import { Smartphone, Cpu, Truck, Receipt, CheckCircle2, ChevronRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Truck':
        return <Truck className="w-6 h-6" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F2EFE5] border-t border-[#123D2A]/10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D2A]/10 text-[#123D2A] text-xs font-bold uppercase tracking-wider">
            Operational Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Montserrat'] text-[#123D2A] tracking-tight">
            From kitchen backdoor to <br />
            <span className="text-[#4F8A5B] font-['Playfair_Display'] italic font-normal">community table</span> in 4 clear steps.
          </h2>
          <p className="text-base sm:text-lg text-[#5B685B] leading-relaxed">
            Takes 90 seconds to submit your notice online. Once submitted, our volunteer dispatch network targets a 45–60 minute pickup coordination window.
          </p>
        </div>

        {/* Step Navigation Bar for Desktop / Interactive Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#123D2A] text-white border-[#123D2A] shadow-lg -translate-y-1'
                  : 'bg-white text-[#202820] border-[#123D2A]/10 hover:border-[#4F8A5B]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    activeStep === idx ? 'bg-[#F28C45] text-white' : 'bg-[#123D2A]/10 text-[#123D2A]'
                  }`}
                >
                  Step {step.step}
                </span>
                <div className={activeStep === idx ? 'text-[#F28C45]' : 'text-[#4F8A5B]'}>
                  {getIcon(step.iconName)}
                </div>
              </div>
              <h3 className="font-bold text-sm sm:text-base leading-snug">
                {step.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Showcase Panel */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#123D2A]/10 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28C45]">
                <span>Phase {HOW_IT_WORKS_STEPS[activeStep].step} Breakdown</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Montserrat'] text-[#123D2A] leading-tight">
                {HOW_IT_WORKS_STEPS[activeStep].title}
              </h3>

              <p className="text-base text-[#202820] leading-relaxed">
                {HOW_IT_WORKS_STEPS[activeStep].description}
              </p>

              <div className="bg-[#F8F5EC] border-l-4 border-[#4F8A5B] p-4 rounded-r-xl">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#123D2A] mb-1">
                  Quality & Safety Checkpoint
                </span>
                <p className="text-xs text-[#5B685B] leading-relaxed">
                  {HOW_IT_WORKS_STEPS[activeStep].detail}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveStep((prev) => (prev + 1) % HOW_IT_WORKS_STEPS.length)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#123D2A] hover:text-[#F28C45] transition-colors"
                >
                  <span>Next Step: {HOW_IT_WORKS_STEPS[(activeStep + 1) % HOW_IT_WORKS_STEPS.length].title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#123D2A] text-[#F8F5EC] rounded-2xl p-6 sm:p-8 space-y-4 shadow-inner">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#F28C45] text-white flex items-center justify-center font-bold">
                  {activeStep + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#F8F5EC]">Operational Recovery Benchmarks</h4>
                  <span className="text-xs text-[#6BA878]">FSSAI Surplus Hygiene Protocol</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#F8F5EC]/70">Target Pickup Window</span>
                  <span className="font-bold text-[#F8F5EC]">45–60 Minutes</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#F8F5EC]/70">Transit Equipment</span>
                  <span className="font-bold text-[#6BA878]">Insulated Food-Grade Containers</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#F8F5EC]/70">Handover Record</span>
                  <span className="font-bold text-[#F8F5EC]">Digital ESG / CSR Receipt</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#F8F5EC]/70">Temperature Check</span>
                  <span className="font-bold text-[#F28C45]">&gt; 65°C Hot / &lt; 4°C Chilled</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

