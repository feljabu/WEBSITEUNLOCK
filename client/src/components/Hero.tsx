import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(17, 17, 17, 0.8) 0%, rgba(0, 121, 130, 0.6) 100%), url(/hero-bg.png)`
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10 pt-28 md:pt-20">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 hover-elevate">
          <Sparkles size={16} className="text-primary" />
          <span className="text-sm font-medium text-primary-foreground">AI-Powered Transformation</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transform Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
            Workflows
          </span>{' '}
          with AI Agents
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Unlock game-changing efficiency and innovation in your business processes. 
          Our enterprise AI solutions deliver measurable results through intelligent automation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="px-8 py-4 text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-get-started"
          >
            Get Started Today
            <ArrowRight size={20} className="ml-2" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover-elevate active-elevate-2"
            data-testid="button-learn-more"
          >
            Learn Our Process
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-center opacity-80">
          <p className="text-sm font-medium mb-2">Moving beyond consulting theatre</p>
          <div className="flex items-center justify-center gap-8 text-xs">
            <span>Working Agents in 8 Weeks</span>
            <span className="text-primary">•</span>
            <span>Team Empowerment</span>
            <span className="text-primary">•</span>
            <span>Partnership Approach</span>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;