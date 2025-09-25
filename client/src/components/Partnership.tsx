import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, DollarSign, Users, Shield, Zap } from 'lucide-react';

const Partnership = () => {
  const partnershipBenefits = {
    client: [
      'Strategic AI roadmap development',
      'Custom agent architecture design', 
      'Priority support and maintenance',
      'Quarterly performance reviews',
      'Access to latest AI innovations'
    ],
    unlock: [
      'Deep industry expertise integration',
      'Scalable solution development',
      'Long-term strategic partnership',
      'Continuous optimization opportunities',
      'Innovation pipeline acceleration'
    ]
  };

  const resultStats = [
    {
      icon: TrendingUp,
      number: '300%',
      label: 'Productivity Increase',
      detail: 'Average improvement in workflow efficiency'
    },
    {
      icon: Clock,
      number: '75%',
      label: 'Time Savings',
      detail: 'Reduction in manual process time'
    },
    {
      icon: DollarSign,
      number: '$2.5M',
      label: 'Cost Savings',
      detail: 'Average annual savings per client'
    }
  ];

  const valueProps = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with SOC 2, GDPR, and industry standards.'
    },
    {
      icon: Zap,
      title: 'Rapid Implementation',
      description: 'Go-live in 30-90 days with our proven deployment methodology and dedicated team.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 technical support from AI specialists who understand your unique business needs.'
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Strategic Partnership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Beyond Implementation—
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              True Partnership
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just deliver solutions; we forge lasting partnerships that drive continuous innovation 
            and sustainable competitive advantage for your enterprise.
          </p>
        </div>

        {/* Partnership Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* What You Get */}
          <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Users className="mr-3" size={28} />
                What You Get
              </h3>
              <ul className="space-y-4">
                {partnershipBenefits.client.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-card-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What We Gain */}
          <Card className="bg-card/50 backdrop-blur-sm border-card-border hover-elevate">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                <Zap className="mr-3" size={28} />
                What We Gain
              </h3>
              <ul className="space-y-4">
                {partnershipBenefits.unlock.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-card-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Partnership Results That Matter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resultStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover-elevate active-elevate-2"
                  data-testid={`stat-${index + 1}`}
                >
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                      <IconComponent size={32} className="text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-card-foreground mb-2">{stat.label}</div>
                    <p className="text-sm text-muted-foreground">{stat.detail}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Value Propositions */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-center mb-4 text-foreground">
              Why Choose The Unlock Partnership?
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
              Our partnership model ensures alignment of interests, shared success metrics, 
              and continuous value creation that evolves with your business needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => {
                const IconComponent = prop.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                      <IconComponent size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-card-foreground">{prop.title}</h4>
                    <p className="text-muted-foreground">{prop.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Partnership;