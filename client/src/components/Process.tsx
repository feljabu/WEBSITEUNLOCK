import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Lightbulb, Cog, Rocket } from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Analysis',
      description: 'We dive deep into your current workflows, identifying bottlenecks and opportunities for AI integration.',
      icon: Search,
      color: 'text-primary'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Our experts craft a tailored AI strategy aligned with your business objectives and technical requirements.',
      icon: Lightbulb,
      color: 'text-primary'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We deploy cutting-edge AI agents and automation systems with minimal disruption to your operations.',
      icon: Cog,
      color: 'text-primary'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and refinement ensure maximum ROI and performance from your AI investments.',
      icon: Rocket,
      color: 'text-primary'
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Methodology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proven Process for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              AI Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our systematic approach ensures seamless AI integration that delivers measurable results 
            and sustainable competitive advantage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <Card 
                key={index} 
                className="relative hover-elevate active-elevate-2 transition-all duration-300 group border-card-border bg-card"
                data-testid={`process-step-${index + 1}`}
              >
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent size={32} className={step.color} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Flow Connector */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with our proven methodology?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;