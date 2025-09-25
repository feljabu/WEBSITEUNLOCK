import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import executiveImage from '@assets/generated_images/Professional_executive_headshot_7d8e21c4.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <Card className="overflow-hidden hover-elevate active-elevate-2 shadow-2xl">
              <div className="relative">
                <img 
                  src={executiveImage} 
                  alt="CEO of The Unlock" 
                  className="w-full h-auto max-w-md object-cover"
                  data-testid="img-ceo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
              </div>
            </Card>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                Our Story
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Why We Built{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  The Unlock
                </span>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  After witnessing countless organizations struggle with outdated workflows and manual processes, 
                  I founded The Unlock with a singular mission: to democratize access to enterprise-grade AI solutions 
                  that deliver immediate, measurable impact.
                </p>
                
                <p>
                  Having spent over 15 years in enterprise technology consulting, I've seen firsthand how the right 
                  AI implementation can transform not just efficiency metrics, but entire business cultures. The problem 
                  wasn't lack of technology—it was the gap between cutting-edge AI capabilities and practical business application.
                </p>
                
                <p>
                  The Unlock bridges that gap. We don't just implement AI; we architect intelligent ecosystems that grow 
                  with your business, adapt to your challenges, and unlock potential you didn't know existed. Our approach 
                  combines deep technical expertise with strategic business acumen to deliver solutions that work in the real world.
                </p>
                
                <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mt-8">
                  <p className="text-card-foreground font-medium italic">
                    "Every business deserves access to AI that doesn't just automate tasks, 
                    but fundamentally transforms how work gets done. That's the unlock we provide."
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-primary">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO, The Unlock</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Enterprise Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;