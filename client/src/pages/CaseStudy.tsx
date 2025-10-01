import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Check, Target, Lightbulb, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface CaseStudyData {
  client: {
    name: string;
    logo: string;
    logoSize?: string;
  };
  title: string;
  subtitle: string;
  hero: {
    image: string;
  };
  challenge: string;
  solution: string;
  implementation?: string;
  techStack: Array<{
    name: string;
    icon: string;
  }>;
  results: string[];
  images?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    photo?: string;
  };
  press?: {
    title: string;
    description: string;
    image: string;
    link: string;
    linkText: string;
  };
}

interface CaseStudyProps {
  data: CaseStudyData;
}

const CaseStudy = ({ data }: CaseStudyProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Scroll to top when case study page loads
    window.scrollTo(0, 0);
  }, []);

  const nextImage = () => {
    if (data.images) {
      setCurrentImageIndex((prev) => (prev + 1) % data.images!.length);
    }
  };

  const prevImage = () => {
    if (data.images) {
      setCurrentImageIndex((prev) => (prev - 1 + data.images!.length) % data.images!.length);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-primary/20 via-primary/15 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
              {/* Left: Client Info */}
              <div>
                <img 
                  src={data.client.logo} 
                  alt={`${data.client.name} logo`}
                  className={`${data.client.logoSize || 'h-20'} mb-8`}
                  data-testid="client-logo"
                />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" data-testid="case-study-title">
                  {data.title}
                </h1>
                <p className="text-xl text-muted-foreground" data-testid="case-study-subtitle">
                  {data.subtitle}
                </p>
              </div>

              {/* Right: Hero Image */}
              <div className="lg:w-[450px]">
                <img 
                  src={data.hero.image} 
                  alt={data.title}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="challenge-heading">
                  THE CHALLENGE
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="challenge-text">
                  {data.challenge}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="text-primary" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="solution-heading">
                  THE SOLUTION
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="solution-text">
                  {data.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section (Conditional) */}
        {data.implementation && (
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Settings className="text-primary" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground" data-testid="implementation-heading">
                    IMPLEMENTATION
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed" data-testid="implementation-text">
                    {data.implementation}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground" data-testid="tech-stack-heading">
              TECH STACK USED
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {data.techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="hover-elevate rounded-lg p-4 bg-background/50 border border-primary/10"
                  data-testid={`tech-${index}`}
                >
                  <img src={tech.icon} alt={tech.name} className="h-12 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Impact Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground" data-testid="results-heading">
              RESULTS & IMPACT
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {data.results.map((result, index) => (
                <div 
                  key={index}
                  className="flex gap-4 items-start"
                  data-testid={`result-${index}`}
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Carousel (Conditional) */}
        {data.images && data.images.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-6">
              <div className="relative" data-testid="image-carousel">
                <img 
                  src={data.images[currentImageIndex]} 
                  alt={`Case study image ${currentImageIndex + 1}`}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  data-testid="carousel-image"
                />
                
                {data.images.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      onClick={prevImage}
                      data-testid="carousel-prev"
                    >
                      <ChevronLeft size={24} />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
                      onClick={nextImage}
                      data-testid="carousel-next"
                    >
                      <ChevronRight size={24} />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial (Conditional) */}
        {data.testimonial && (
          <section className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-6">
              <Card className="p-8 md:p-12 bg-muted/50" data-testid="testimonial">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {data.testimonial.photo && (
                    <img 
                      src={data.testimonial.photo} 
                      alt={data.testimonial.author}
                      className="w-20 h-20 rounded-full object-cover"
                      data-testid="testimonial-photo"
                    />
                  )}
                  <div className="flex-1">
                    <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed" data-testid="testimonial-quote">
                      "{data.testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground" data-testid="testimonial-author">
                        {data.testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground" data-testid="testimonial-position">
                        {data.testimonial.position}, {data.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Press/Publication Section (Conditional) */}
        {data.press && (
          <section className="py-16 bg-muted/30">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8 text-foreground text-center" data-testid="press-heading">
                {data.press.title}
              </h2>
              <Card className="overflow-hidden" data-testid="press-card">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={data.press.image} 
                      alt={data.press.title}
                      className="w-full h-full object-cover"
                      data-testid="press-image"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="press-description">
                      {data.press.description}
                    </p>
                    <a 
                      href={data.press.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-testid="press-link"
                    >
                      <Button variant="default" className="hover-elevate active-elevate-2">
                        {data.press.linkText}
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve similar results
            </p>
            <a href="/#contact">
              <Button 
                size="lg"
                className="text-lg font-semibold"
                data-testid="cta-button"
              >
                Get In Touch
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
