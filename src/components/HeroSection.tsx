import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-abstract.jpg';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background flex items-center justify-center">
      {/* Main Content - Minimal Initial View */}
      <div className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          {/* Profile Image */}
          <div className="mb-12">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden shadow-dreamy float-gentle">
              <img 
                src={profileImage} 
                alt="Marcel Mordarski" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Titles Only */}
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-surreal leading-tight">
            Marcel Mordarski
          </h1>
          
          <div className="space-y-3 mb-16">
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Quantum Cryptographer & Researcher
            </p>
            <p className="text-xl text-secondary font-light">
              USRA Scholar at RIACS/NASA Ames
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity" onClick={scrollToNext}>
            <ArrowDown className="h-8 w-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;