import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PioneersSection from '../components/home/PioneersSection';
import CommercializingSection from '../components/home/CommercializingSection';
import PatentMapSection from '../components/home/PatentMapSection';
import SolutionsCardsSection from '../components/home/SolutionsCardsSection';
import MarketSection from '../components/home/MarketSection';
import ProjectsSection from '../components/home/ProjectsSection';
import GalleryPreview from '../components/home/GalleryPreview';
import CreditsSection from '../components/home/CreditsSection';
import JoinSection from '../components/home/JoinSection';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <PioneersSection />
      <CommercializingSection />
      <PatentMapSection />
      <SolutionsCardsSection />
      <MarketSection />
      <ProjectsSection />
      <GalleryPreview />
      <CreditsSection />
      <JoinSection />
    </div>
  );
}
