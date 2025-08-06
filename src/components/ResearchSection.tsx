import { ExternalLink, BookOpen, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResearchSection = () => {
  const research = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Quantum Cryptography",
      description: "Development of quantum-resistant cryptographic protocols and post-quantum security frameworks for future computing environments.",
      tags: ["Cryptography", "Post-Quantum", "Security"],
      status: "Ongoing"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Quantum Computing Applications",
      description: "Research on practical applications of quantum computing in space missions and terrestrial quantum networks.",
      tags: ["Space Tech", "Quantum Networks", "NASA"],
      status: "Active"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Policy & Standards",
      description: "Contributing to quantum technology policy development and standardization efforts in commercial quantum computing.",
      tags: ["Policy", "Standards", "Commercial"],
      status: "Advisory"
    }
  ];

  const publications = [
    {
      title: "Quantum Cryptographic Protocols for Space Communications",
      venue: "IEEE Quantum Computing Conference 2024",
      type: "Conference Paper"
    },
    {
      title: "Post-Quantum Security in Distributed Systems",
      venue: "Journal of Quantum Information Science",
      type: "Journal Article"
    },
    {
      title: "Policy Framework for Commercial Quantum Technologies",
      venue: "Polish Chamber of Commerce Report",
      type: "Policy Document"
    }
  ];

  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-surreal">
            Research & Publications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the frontiers of quantum computing, cryptography, and policy development
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {research.map((item, index) => (
            <Card key={index} className="card-float melt-effect h-full">
              <CardContent className="p-8 text-center">
                <div className="text-primary mb-4 flex justify-center float-gentle">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-medium mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {item.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-accent font-medium">
                  Status: {item.status}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-light mb-8 text-center text-surreal">
            Selected Publications
          </h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="card-float melt-effect">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-foreground mb-2">
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground mb-1">
                        {pub.venue}
                      </p>
                      <span className="text-sm text-primary font-medium">
                        {pub.type}
                      </span>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-4">
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-surreal hover:bg-primary/90 text-primary-foreground px-8 py-3"
          >
            View Full Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;