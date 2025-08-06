import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/profile-abstract.jpg';

const AboutSection = () => {
  const experiences = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "USRA Scholar",
      organization: "RIACS/NASA Ames",
      period: "Current",
      description: "Research in quantum computing applications for space missions"
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Researcher",
      organization: "Quantinuum",
      period: "Former",
      description: "Advanced quantum cryptography and algorithm development"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Policy Advisor",
      organization: "Polish Chamber of Commerce",
      period: "Ongoing",
      description: "Quantum Technologies Committee strategic guidance"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden shadow-dreamy float-gentle">
              <img 
                src={profileImage} 
                alt="Marcel Mordarski" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-melting rounded-full opacity-20 float-dreamy" />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-surreal">
                About Marcel
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am a quantum cryptographer and researcher passionate about pushing the boundaries 
                of quantum computing and its applications in cryptography. My work spans from 
                theoretical research to policy development, bridging the gap between cutting-edge 
                science and practical implementation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently serving as a USRA Scholar at RIACS/NASA Ames, I focus on quantum 
                computing applications for space missions while contributing to policy frameworks 
                for quantum technologies in Poland.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card key={index} className="card-float melt-effect">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-medium text-foreground">
                            {exp.title}
                          </h3>
                          <span className="text-sm text-primary font-medium">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-base text-secondary font-medium mb-2">
                          {exp.organization}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;