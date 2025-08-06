import { Calendar, Clock, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Quantum Advantage in Cryptography",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["Quantum Computing", "Cryptography", "Security"],
      excerpt: "Exploring how quantum computers will revolutionize cryptographic systems and what this means for digital security in the coming decade.",
      slug: "quantum-advantage-cryptography"
    },
    {
      title: "Space-Based Quantum Networks: A New Frontier",
      date: "February 28, 2024", 
      readTime: "12 min read",
      tags: ["Space Technology", "Quantum Networks", "NASA"],
      excerpt: "My experience working on quantum communication systems for space missions and the unique challenges of quantum entanglement in zero gravity.",
      slug: "space-quantum-networks"
    },
    {
      title: "Policy Frameworks for Quantum Technologies",
      date: "February 10, 2024",
      readTime: "6 min read", 
      tags: ["Policy", "Quantum Tech", "Regulation"],
      excerpt: "Analyzing the current regulatory landscape for quantum technologies and proposing frameworks for responsible quantum development.",
      slug: "quantum-policy-frameworks"
    },
    {
      title: "From Classical to Quantum: My Journey",
      date: "January 22, 2024",
      readTime: "10 min read",
      tags: ["Personal", "Career", "Quantum Computing"],
      excerpt: "Reflecting on my transition from classical computing to quantum research and the pivotal moments that shaped my career path.",
      slug: "classical-to-quantum-journey"
    }
  ];

  return (
    <div className="min-h-screen bg-dreamy">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-surreal">
              Quantum Thoughts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights on quantum computing, cryptography, space technology, 
              and the intersection of science and policy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="card-float melt-effect">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <h2 className="text-2xl md:text-3xl font-serif font-light mb-3 text-foreground hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h2>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Load More Posts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;