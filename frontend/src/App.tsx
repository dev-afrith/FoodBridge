import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ProblemSection } from './sections/ProblemSection';
import { SolutionSection } from './sections/SolutionSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { ImpactDashboardSection } from './sections/ImpactDashboardSection';
import { StoriesSection } from './sections/StoriesSection';
import { DonationSection } from './sections/DonationSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { Footer } from './components/common/Footer';
import { DonationModal } from './components/common/DonationModal';

export const App: React.FC = () => {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsDonationModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDonationModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EC] text-[#202820] font-['Plus_Jakarta_Sans'] selection:bg-[#4F8A5B] selection:text-white">
      {/* Accessible Navigation Bar */}
      <Navbar onOpenDonationModal={handleOpenModal} />

      {/* Main Page Landmark */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {/* 1. Hero Section */}
        <HeroSection onOpenDonationModal={handleOpenModal} />

        {/* 2. Food Waste Problem Section */}
        <ProblemSection />

        {/* 3. Our Solution Section */}
        <SolutionSection onOpenDonationModal={handleOpenModal} />

        {/* 4. How It Works Section */}
        <HowItWorksSection />

        {/* 5. Key Features Section */}
        <FeaturesSection />

        {/* 6. Live Impact Dashboard Section */}
        <ImpactDashboardSection />

        {/* 7. Community Stories Section */}
        <StoriesSection />

        {/* 8. Interactive Donation Portal Section */}
        <DonationSection />

        {/* 9. Final Call To Action Section */}
        <FinalCtaSection onOpenDonationModal={handleOpenModal} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Interactive Global Donation Modal */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
