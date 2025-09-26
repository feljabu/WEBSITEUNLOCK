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

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/20 via-primary/60 to-primary/20"></div>
          
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`relative flex items-center mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                data-testid={`process-step-${index + 1}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <div className="group hover-elevate p-6 rounded-xl bg-card border border-card-border transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-card border-4 border-primary rounded-full items-center justify-center shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-lg text-primary">{step.number}</span>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="font-bold text-sm text-primary-foreground">{step.number}</span>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent size={20} className="text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
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