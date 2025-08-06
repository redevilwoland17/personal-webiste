import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResearchSection from '@/components/ResearchSection';
import Contact from './Contact';
import Social from './Social';

const Index = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.3; // Show nav after scrolling 30% of viewport
      setShowNavigation(scrollPosition > triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {showNavigation && <Navigation />}
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <Contact />
      <Social />
    </div>
  );
};

export default Index;
