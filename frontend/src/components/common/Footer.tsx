import React, { useState } from 'react';
import { Heart, Send, PhoneCall, Mail, MapPin, CheckCircle } from 'lucide-react';
import { BRAND_INFO } from '../../data/mockData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      setNewsletterError('Please provide a valid email address');
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
    setNewsletterEmail('');
    setTimeout(() => setNewsletterSuccess(false), 5000);
  };

  return (
    <footer className="bg-[#0B2519] text-[#F8F5EC] border-t border-[#123D2A] text-left pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Brand Info & Mission (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#123D2A] flex items-center justify-center text-[#F8F5EC] border border-white/10 shadow-sm">
                <Heart className="w-5 h-5 text-[#F28C45] fill-[#F28C45]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-['Montserrat'] tracking-tight text-white">
                  Food<span className="text-[#4F8A5B]">Bridge</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#6BA878] font-semibold">
                  {BRAND_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F8F5EC]/75 leading-relaxed">
              FoodBridge is an Indian social-impact food recovery initiative connecting restaurants, banquet halls, caterers, and food businesses with registered community kitchens and shelters in real-time.
            </p>

            <div className="space-y-2.5 text-xs text-[#F8F5EC]/80 pt-2">
              <div>
                <a
                  href={`tel:${BRAND_INFO.hotline.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <PhoneCall className="w-4 h-4 text-[#F28C45] group-hover:scale-110 transition-transform" />
                  <span>Helpline: <strong className="text-white">{BRAND_INFO.hotline}</strong></span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#4F8A5B] group-hover:scale-110 transition-transform" />
                  <span>Inquiries: <strong className="text-white">{BRAND_INFO.email}</strong></span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F28C45]" />
                <span>Pan-India Pilot: Bengaluru, Mumbai, Delhi NCR, Hyderabad, Chennai, Pune &amp; Kolkata</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#F28C45]">
              Initiative
            </h3>
            <ul className="space-y-2 text-xs text-[#F8F5EC]/80">
              <li>
                <a href="#problem" className="hover:text-white transition-colors">The Food Paradox</a>
              </li>
              <li>
                <a href="#solution" className="hover:text-white transition-colors">Our Ecosystem</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">Safety &amp; Tech</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">Live Impact Dashboard</a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">Community Voices</a>
              </li>
            </ul>
          </div>

          {/* Partner & Legal Links (Col 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#6BA878]">
              Compliance &amp; Safety
            </h3>
            <ul className="space-y-2 text-xs text-[#F8F5EC]/80">
              <li>
                <a href="#donate" className="hover:text-white transition-colors">Schedule Food Pickup</a>
              </li>
              <li>
                <span className="text-[#F8F5EC]/60">FSSAI Surplus Food Regulations (2019)</span>
              </li>
              <li>
                <span className="text-[#F8F5EC]/60">Digital ESG &amp; Handover Acknowledgements</span>
              </li>
              <li>
                <span className="text-[#F8F5EC]/60">Food-Grade Thermal Transport Protocols</span>
              </li>
              <li>
                <span className="text-[#F8F5EC]/60">Volunteer Hygiene Checklist</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Stay Connected (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              The Rescue Dispatch Bulletin
            </h3>
            <p className="text-xs text-[#F8F5EC]/75 leading-relaxed">
              Receive monthly impact reports, seasonal farm surplus updates, and community shelter spotlights.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2" noValidate>
              <div className="flex items-center gap-2">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#F28C45] focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#F28C45] hover:bg-[#DC7630] text-white p-2.5 rounded-xl flex-shrink-0 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {newsletterError && (
                <p className="text-xs text-[#F28C45]">{newsletterError}</p>
              )}
              {newsletterSuccess && (
                <p className="text-xs text-[#6BA878] flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Subscribed! Thank you for standing with our neighbors.
                </p>
              )}
            </form>

            <div className="pt-2 text-[11px] text-[#F8F5EC]/50 leading-normal">
              FoodBridge is an Indian non-profit social-impact project prototype committed to zero food waste and community nourishment. Handover workflows simulate FSSAI surplus food recovery protocols.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accessibility Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F5EC]/60 gap-4">
          <div>
            © {new Date().getFullYear()} FoodBridge Project. All rights reserved. Built with passion for zero waste and community nourishment.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Donor Rights</span>
            <span className="hover:text-white cursor-pointer">WCAG 2.1 AA Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
