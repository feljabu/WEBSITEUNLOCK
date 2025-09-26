import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Lightbulb, Cog, Rocket } from 'lucide-react';

const Process = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Process Discovery',
      description: 'We help you discover which processes are prime candidates for AI transformation through proven prioritization frameworks. Move beyond generic "AI enablement" to identify specific, high-value workflows.',
      icon: Search,
      color: 'text-primary'
    },
    {
      number: '02',
      title: 'Team Empowerment',
      description: 'Transform your team into architects of their own agentic workflows. We provide governance frameworks, technical training, and ongoing coaching so your people can build agents independently.',
      icon: Lightbulb,
      color: 'text-primary'
    },
    {
      number: '03',
      title: 'Rapid Deployment',
      description: 'Deploy custom AI agents that handle knowledge-intensive work in 8 weeks. Achieve 30% efficiency gains through proven delivery cycles, not months of analysis and planning.',
      icon: Cog,
      color: 'text-primary'
    },
    {
      number: '04',
      title: 'Flexible Engagement',
      description: 'Choose your engagement model: we build agents for you, teach your team to build them, or start by building to prove value then transition to capability transfer. You control the level of independence.',
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
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Solution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We build working solutions while others are still analysing. Transform your workflows with 
            custom AI agents that deliver immediate, measurable impact.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            
            return (
              <Card 
                key={index} 
                className="relative hover-elevate active-elevate-2 transition-all duration-300 group border-card-border bg-card"
                data-testid={`process-step-${index + 1}`}
              >
                <CardContent className="p-6">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent size={20} className={step.color} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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