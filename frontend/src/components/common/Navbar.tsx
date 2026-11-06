import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../../data/mockData';

interface NavbarProps {
  onOpenDonationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonationModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Impact', href: '#impact' },
    { label: 'Stories', href: '#stories' },
  ];

  return (
    <>
      {/* Skip to Content for Screen Readers & Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#123D2A] focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Notification Announcement Bar */}
      <div className="bg-[#123D2A] text-[#F8F5EC] text-xs sm:text-sm py-2 px-4 border-b border-[#1D583E]/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C45] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F28C45]"></span>
            </span>
            <span className="font-medium tracking-wide">
              Demonstration Pilot: Simulating surplus food recovery workflows across major Indian cities.
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-[#F8F5EC]/80">
            <a
              href={`tel:${BRAND_INFO.hotline.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#F28C45]" />
              Demo Helpline: {BRAND_INFO.hotline}
            </a>
            <span>•</span>
            <span className="text-[#6BA878] font-semibold">Indian Social-Impact Prototype • FSSAI Framework</span>
          </div>
        </div>
      </div>

      {/* Sticky Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5EC]/95 backdrop-blur-md shadow-sm border-b border-[#123D2A]/10 py-3'
            : 'bg-[#F8F5EC] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Editorial Typography */}
            <a
              href="#"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C45] rounded-lg p-1"
              aria-label="FoodBridge homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-[#123D2A] flex items-center justify-center text-[#F8F5EC] shadow-md group-hover:bg-[#1D583E] transition-colors relative overflow-hidden">
                <Heart className="w-5 h-5 text-[#F28C45] fill-[#F28C45] transform -rotate-6 transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#4F8A5B] rounded-full flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold font-['Montserrat'] tracking-tight text-[#123D2A]">
                  Food<span className="text-[#4F8A5B]">Bridge</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#5B685B] font-semibold">
                  Turning Surplus Into Smiles
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-[#202820] hover:text-[#4F8A5B] transition-colors tracking-wide relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F28C45] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#donate"
                className="hidden md:inline-flex items-center text-xs font-bold text-[#123D2A] hover:text-[#4F8A5B] px-3 py-2 rounded-lg transition-colors"
              >
                Estimate Impact
              </a>
              <button
                type="button"
                onClick={onOpenDonationModal}
                className="inline-flex items-center gap-2 bg-[#F28C45] hover:bg-[#DC7630] active:scale-[0.98] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F28C45] focus:ring-offset-2 cursor-pointer"
              >
                <span>Donate Food Surplus</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenDonationModal}
                className="sm:hidden text-xs bg-[#F28C45] text-white font-bold px-3 py-1.5 rounded-full cursor-pointer"
              >
                Donate
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#123D2A] hover:bg-[#123D2A]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C45] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-[#F8F5EC] border-b border-[#123D2A]/10 shadow-2xl px-6 py-6 transition-all duration-300 z-50">
            <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-[#123D2A] hover:text-[#4F8A5B] py-2 border-b border-[#123D2A]/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonationModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#F28C45] hover:bg-[#DC7630] text-white font-bold py-3 px-5 rounded-full shadow-md text-base"
                >
                  <span>Donate Food Surplus</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${BRAND_INFO.hotline.replace(/[^0-9+]/g, '')}`}
                  className="text-center text-xs text-[#5B685B] hover:text-[#123D2A] transition-colors block"
                >
                  Food Rescue Helpline: {BRAND_INFO.hotline}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

