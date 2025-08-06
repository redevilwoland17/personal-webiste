import { ArrowDown, Atom, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-quantum-surreal.jpg';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-dreamy">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float-gentle opacity-30">
        <Atom className="h-16 w-16 text-primary" />
      </div>
      <div className="absolute top-40 right-20 float-dreamy opacity-20">
        <Brain className="h-20 w-20 text-accent" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-serif font-light mb-6 text-surreal leading-tight">
              Marcel Mordarski
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Quantum Cryptographer & Researcher
              </p>
              <p className="text-lg text-secondary">
                USRA Scholar at RIACS/NASA Ames
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Exploring the intersection of quantum computing, cryptography, and policy. 
                Former researcher at Quantinuum, policy advisor on Quantum Technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-surreal hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium shadow-glow"
                onClick={scrollToNext}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
              >
                View Research
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce cursor-pointer" onClick={scrollToNext}>
              <ArrowDown className="h-6 w-6 mx-auto text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Melting Effect Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;