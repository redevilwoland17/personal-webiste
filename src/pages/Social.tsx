import { ExternalLink, Linkedin, Twitter, Github, BookOpen, Users, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Social = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="h-8 w-8" />,
      platform: "LinkedIn",
      handle: "@marcel-mordarski",
      description: "Professional updates, research publications, and industry insights",
      followers: "1,497 followers",
      link: "https://www.linkedin.com/in/marcel-mordarski/",
      primary: true
    },
    {
      icon: <Twitter className="h-8 w-8" />,
      platform: "Twitter",
      handle: "@marcel_quantum",
      description: "Quantum computing thoughts, conference updates, and scientific discussions",
      followers: "2.3K followers",
      link: "#",
      primary: false
    },
    {
      icon: <Github className="h-8 w-8" />,
      platform: "GitHub",
      handle: "@mmordarski",
      description: "Open source quantum computing projects and research code",
      followers: "156 repositories",
      link: "#",
      primary: false
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      platform: "ResearchGate",
      handle: "Marcel Mordarski",
      description: "Academic publications, preprints, and research collaboration",
      followers: "45 citations",
      link: "#",
      primary: false
    }
  ];

  const recentActivity = [
    {
      platform: "LinkedIn",
      type: "Post",
      content: "Excited to announce my participation in the Quantum Computing Wicked Lunch panel discussion...",
      time: "2 days ago",
      engagement: "127 reactions"
    },
    {
      platform: "Twitter",
      type: "Thread",
      content: "New developments in post-quantum cryptography standards and their implications for...",
      time: "1 week ago",
      engagement: "89 retweets"
    },
    {
      platform: "GitHub",
      type: "Repository",
      content: "Published new quantum cryptography implementation with improved error correction...",
      time: "2 weeks ago",
      engagement: "23 stars"
    }
  ];

  const upcomingEvents = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Quantum Computing Wicked Lunch",
      type: "Panel Discussion",
      date: "March 15, 2024",
      location: "Virtual Event"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "IEEE Quantum Conference 2024",
      type: "Speaker",
      date: "April 22-24, 2024",
      location: "San Francisco, CA"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Polish Quantum Technologies Summit",
      type: "Policy Advisor",
      date: "May 10, 2024",
      location: "Warsaw, Poland"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-surreal">
              Social & Professional
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with me across various platforms for quantum computing insights, 
              research updates, and professional discussions.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {socialLinks.map((social, index) => (
              <Card 
                key={index} 
                className={`card-float melt-effect ${
                  social.primary ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`text-primary ${social.primary ? 'float-gentle' : ''}`}>
                        {social.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-medium text-foreground">
                          {social.platform}
                        </h3>
                        <p className="text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    {social.primary && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        Primary
                      </span>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {social.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-medium">
                      {social.followers}
                    </span>
                    <Button 
                      variant={social.primary ? "default" : "outline"}
                      className={social.primary ? "bg-surreal hover:bg-primary/90 text-primary-foreground" : ""}
                      asChild
                    >
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Connect
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Recent Activity */}
            <div>
              <h2 className="text-3xl font-serif font-light mb-8 text-surreal">
                Recent Activity
              </h2>
              <div className="space-y-6">
                {recentActivity.map((activity, index) => (
                  <Card key={index} className="card-float melt-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-primary font-medium">
                          {activity.platform} • {activity.type}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {activity.time}
                        </span>
                      </div>
                      <p className="text-foreground mb-3 leading-relaxed">
                        {activity.content}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-accent">
                          {activity.engagement}
                        </span>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h2 className="text-3xl font-serif font-light mb-8 text-surreal">
                Upcoming Events
              </h2>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="card-float melt-effect">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-primary mt-1 float-gentle">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-foreground mb-2">
                            {event.title}
                          </h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Role: {event.type}</p>
                            <p>Date: {event.date}</p>
                            <p>Location: {event.location}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  View Full Calendar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;