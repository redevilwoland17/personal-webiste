import { BookOpen, Video, Mic, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Publications = () => {
  const publications = [
    {
      type: "article",
      title: "Quantum Cryptographic Protocols for Space Communications",
      journal: "Journal of Quantum Information Science",
      year: "2024",
      description: "Novel approaches to secure quantum communication in space environments.",
      link: "#"
    },
    {
      type: "article", 
      title: "Post-Quantum Cryptography: Policy Implications",
      journal: "Nature Quantum Information",
      year: "2023",
      description: "Analysis of policy frameworks needed for quantum-safe cryptography adoption.",
      link: "#"
    }
  ];

  const videos = [
    {
      title: "Quantum Computing Fundamentals",
      platform: "YouTube",
      views: "125K",
      description: "Introduction to quantum computing principles and applications.",
      link: "#"
    },
    {
      title: "The Future of Quantum Cryptography",
      platform: "TED Talk",
      views: "89K", 
      description: "Exploring the implications of quantum cryptography for digital security.",
      link: "#"
    }
  ];

  const media = [
    {
      title: "Quantum Technologies Podcast",
      outlet: "Science Today",
      date: "March 2024",
      description: "Discussion on the current state and future of quantum computing.",
      link: "#"
    },
    {
      title: "NASA Quantum Research Interview",
      outlet: "Space Technology Weekly",
      date: "February 2024",
      description: "Insights into quantum computing applications for space missions.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-dreamy">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-surreal">
              Publications & Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Research articles, educational content, and media appearances 
              exploring quantum computing and cryptography.
            </p>
          </div>

          {/* Articles */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-light mb-8 text-foreground flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-primary" />
              Research Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <Card key={index} className="card-float melt-effect">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-foreground">
                      {pub.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {pub.journal} ({pub.year})
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {pub.description}
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Videos */}
          <section className="mb-16">
            <h2 className="text-3xl font-serif font-light mb-8 text-foreground flex items-center">
              <Video className="h-8 w-8 mr-3 text-primary" />
              Video Content
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="card-float melt-effect">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-foreground">
                      {video.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {video.platform} • {video.views} views
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {video.description}
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Media Appearances */}
          <section>
            <h2 className="text-3xl font-serif font-light mb-8 text-foreground flex items-center">
              <Mic className="h-8 w-8 mr-3 text-primary" />
              Media Appearances
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {media.map((appearance, index) => (
                <Card key={index} className="card-float melt-effect">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium mb-2 text-foreground">
                      {appearance.title}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {appearance.outlet} • {appearance.date}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {appearance.description}
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Listen/Watch
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Publications;