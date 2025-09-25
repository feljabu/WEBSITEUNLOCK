import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Target, Zap } from 'lucide-react';

const PartnershipSection = () => {
  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Strategic Partnership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Complete AI Transformation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Through Partnership
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            While The Unlock builds custom agents that transform specific workflows in 8 weeks, true organisational 
            AI transformation requires both intelligent automation AND workforce enablement. That's why we partner 
            with <strong className="text-primary">
              <a href="https://www.humanova.com.au/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary/80">
                Humanova
              </a>
            </strong> - Australia's leading AI workforce transformation specialists.
          </p>
        </div>

        {/* Partnership Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* The Unlock Side */}
          <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Zap className="mr-3" size={28} />
                The Unlock Delivers
              </h3>
              <ul className="space-y-4">
                {[
                  'Custom AI agents for immediate efficiency gains',
                  'Team empowerment to architect their own workflows',
                  '8-week deployment cycles, not months of analysis',
                  'Governance frameworks for sustainable scaling'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-card-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Humanova Side */}
          <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Users className="mr-3" size={28} />
                Humanova Delivers
              </h3>
              <ul className="space-y-4">
                {[
                  'Workforce AI enablement across all team members',
                  'Evidence-based frameworks shaped for your business',
                  'Leadership alignment and change management',
                  'Daily AI adoption and capability building'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-card-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Partnership Value */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Target className="w-12 h-12 text-primary mr-4" />
              <h3 className="text-3xl font-bold text-foreground">
                Why This Partnership is Essential
              </h3>
            </div>
            
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Organisations need both <strong className="text-primary">intelligent agents</strong> (The Unlock) and{' '}
                <strong className="text-primary">empowered teams</strong> (Humanova). Custom agents deliver immediate workflow 
                transformation, while workforce enablement ensures your entire team can collaborate effectively with AI and 
                continue innovating beyond our engagement.
              </p>
              
              
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnershipSection;