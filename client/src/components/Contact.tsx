import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'db800c0e-da86-4fcb-a5c4-c7b57d61b742');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('redirect', 'https://web3forms.com/success');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        const responseData = await response.json();
        console.error('Web3Forms error:', responseData);
        
        let errorTitle = "Unable to Send Message";
        let errorMessage = "Something went wrong. Please try again.";
        
        if (responseData?.message?.includes('domain TLD is blocked')) {
          errorTitle = "Domain Not Authorized";
          errorMessage = "This domain needs to be authorized for form submissions. Please contact us directly at felipe@theunlock.com.au";
        } else if (responseData?.message) {
          errorMessage = responseData.message;
        }
        
        toast({
          title: errorTitle,
          description: errorMessage,
          variant: "destructive"
        });
        return;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'felipe@theunlock.com.au',
      description: '24/7 support response'
    },
    {
      icon: MapPin,
      title: 'Location',
      detail: 'Australia',
      description: 'Global remote team'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-foreground via-foreground to-primary/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary-foreground border-primary-foreground/20 bg-primary-foreground/10">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Transform
            </span>{' '}
            Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Let's discuss how AI can unlock your organisation's potential. 
            Schedule a consultation with our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/95 backdrop-blur-sm border-card-border shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-card-foreground">
                Start Your AI Journey
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about your challenges and we'll show you what's possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-card-foreground font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-card-foreground font-medium">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    data-testid="input-company"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-card-foreground font-medium">
                    Tell us about your AI needs
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1 resize-none"
                    placeholder="Describe your current challenges, goals, and what you'd like to achieve with AI..."
                    data-testid="textarea-message"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 text-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover-elevate">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-primary-foreground mb-1">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/company/theunlockai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium mb-1 hover:underline"
                  >
                    @theunlockai
                  </a>
                  <p className="text-sm text-primary-foreground/70">Connect with us</p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover-elevate"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-4">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <h4 className="font-semibold text-primary-foreground mb-1">{info.title}</h4>
                      <p className="text-primary font-medium mb-1">{info.detail}</p>
                      <p className="text-sm text-primary-foreground/70">{info.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <Card className="bg-primary/10 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4 text-primary-foreground/90">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Initial Consultation</p>
                      <p className="text-sm opacity-80">We'll schedule a 30-minute discovery call to understand your needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Strategic Assessment</p>
                      <p className="text-sm opacity-80">We'll analyse your specific opportunities and challenges.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Custom Proposal</p>
                      <p className="text-sm opacity-80">You'll receive a tailored roadmap with measurable outcomes.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;