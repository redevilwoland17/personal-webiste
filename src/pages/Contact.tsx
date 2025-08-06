import { Mail, MapPin, Phone, Send, QrCode } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "marcel.mordarski@email.com",
      link: "mailto:marcel.mordarski@email.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco Bay Area, CA",
      link: null
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Professional Inquiries",
      value: "Available upon request",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-dreamy">
      <div className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-surreal">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interested in quantum computing research, collaboration opportunities, 
              or policy discussions? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-light mb-6 text-foreground">
                  Let's Connect
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you're interested in quantum cryptography research, 
                  collaboration opportunities, or discussing policy implications 
                  of quantum technologies, I'm always open to meaningful conversations.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="card-float melt-effect">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors text-quantum"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

                <div className="space-y-4">
                  <Card className="card-float bg-melting/10 border-primary/20">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
                        Research Collaboration
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Open to collaborating on quantum computing and cryptography research projects.
                      </p>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        View Research Interests
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="card-float border-primary/20">
                    <CardContent className="p-6 text-center">
                      <QrCode className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h3 className="font-serif text-xl font-medium mb-3 text-foreground">
                        Quick Contact
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Scan QR code for instant contact details
                      </p>
                      <div className="w-32 h-32 mx-auto bg-muted/20 border border-border rounded-lg flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">QR Code</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="card-float">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-light mb-6 text-foreground">
                    Send a Message
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-foreground">
                          First Name
                        </Label>
                        <Input 
                          id="firstName"
                          placeholder="Your first name"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-foreground">
                          Last Name
                        </Label>
                        <Input 
                          id="lastName"
                          placeholder="Your last name"
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email Address
                      </Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground">
                        Subject
                      </Label>
                      <Input 
                        id="subject"
                        placeholder="What's this about?"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground">
                        Message
                      </Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell me more about your inquiry..."
                        rows={6}
                        className="mt-2 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-surreal hover:bg-primary/90 text-primary-foreground shadow-glow"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;