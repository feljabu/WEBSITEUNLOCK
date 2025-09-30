import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <Card className="overflow-hidden hover-elevate active-elevate-2 shadow-2xl max-w-lg mx-auto">
              <div className="relative">
                <img 
                  src="/about-image.png" 
                  alt="AI transformation and business innovation" 
                  className="w-full h-[32rem] object-cover"
                  data-testid="img-about"
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
                Why We Do{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  This Work
                </span>
              </h2>
            </div>

            <div className="prose max-w-none">
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Your board wants AI results. Your competitors are moving faster. Every vendor promises transformation 
                  but delivers strategy documents or out-of-the-box solutions that don't realise the ROI.
                </p>
                
                <p>
                  Here's what we learned after years in enterprise consulting: even large companies with massive budgets 
                  were struggling to keep up with AI's pace. Traditional methodologies of comprehensive analysis weren't 
                  moving as fast as the technology itself. While teams were still analysing, AI capabilities were evolving, 
                  competitors were deploying, and opportunities were disappearing.
                </p>
                
                <p>
                  Real transformation happens when AI becomes embedded in your business processes, with your users designing 
                  the new AI-enabled workflows. Instead of over-analysing, you need quick pilots and agile scaling.
                </p>
                
                <p>
                  That insight drove us to focus on building actual solutions. Businesses deserve working agents that deliver 
                  measurable efficiency gains, not more analysis paralysis.
                </p>
                
                <p>
                  We exist to give you enterprise-level AI capabilities without enterprise-level complexity or cost. 
                  Just working agents transforming your highest-value workflows in 8 weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;