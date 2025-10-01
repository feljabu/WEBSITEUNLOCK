import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Close menus
    setIsMobileMenuOpen(false);
    setIsCaseStudiesOpen(false);
    
    // If we're not on home page, navigate there with hash
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const caseStudies = [
    { 
      name: 'Xero - SHAX Agent', 
      path: '/case-studies/xero-behavioural-change'
    },
    { 
      name: 'ELMO - NALAH Agent', 
      path: '/case-studies/nalah-sdr-empowerment'
    },
    { 
      name: 'ELMO – Agent Identification', 
      path: '/case-studies/elmo-agent-identification'
    }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-foreground/95 backdrop-blur-md shadow-lg' : 'bg-foreground'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div 
              className="cursor-pointer hover-elevate" 
              data-testid="logo-link"
            >
              <img 
                src="/logo.png" 
                alt="The Unlock - Unleashing Potential" 
                className="h-16"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/"
              className="text-primary-foreground hover:text-primary transition-colors duration-300 font-medium hover-elevate px-3 py-2 rounded-md"
              data-testid="nav-home"
            >
              Home
            </Link>

            <button
              onClick={() => scrollToSection('process')}
              className="text-primary-foreground hover:text-primary transition-colors duration-300 font-medium hover-elevate px-3 py-2 rounded-md"
              data-testid="nav-how-we-work"
            >
              How we Work
            </button>

            <button
              onClick={() => scrollToSection('team')}
              className="text-primary-foreground hover:text-primary transition-colors duration-300 font-medium hover-elevate px-3 py-2 rounded-md"
              data-testid="nav-our-team"
            >
              Our Team
            </button>

            {/* Case Studies Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsCaseStudiesOpen(true)}
              onMouseLeave={() => setIsCaseStudiesOpen(false)}
            >
              <button
                className="text-primary-foreground hover:text-primary transition-colors duration-300 font-medium hover-elevate px-3 py-2 rounded-md flex items-center gap-1"
                data-testid="nav-case-studies"
              >
                Case Studies
                <ChevronDown size={16} className={`transition-transform duration-200 ${isCaseStudiesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 pt-2 transition-opacity duration-200 ${isCaseStudiesOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
              >
                <div className="bg-card border border-card-border rounded-md shadow-lg min-w-[200px] py-2 z-50">
                  {caseStudies.map((study) => (
                    <Link 
                      key={study.path} 
                      href={study.path}
                      className="block w-full text-left px-4 py-2 text-card-foreground hover:bg-muted transition-colors duration-200"
                      data-testid={`dropdown-${study.path}`}
                      onClick={() => setIsCaseStudiesOpen(false)}
                    >
                      {study.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="hover-elevate active-elevate-2"
              data-testid="nav-contact"
            >
              Get In Touch
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                href="/"
                className="w-full text-primary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2 px-4 rounded-md hover-elevate block"
                data-testid="mobile-nav-home"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <button
                onClick={() => scrollToSection('process')}
                className="w-full text-primary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2 px-4 rounded-md hover-elevate"
                data-testid="mobile-nav-how-we-work"
              >
                How we Work
              </button>

              <button
                onClick={() => scrollToSection('team')}
                className="w-full text-primary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2 px-4 rounded-md hover-elevate"
                data-testid="mobile-nav-our-team"
              >
                Our Team
              </button>

              {/* Mobile Case Studies Section */}
              <div>
                <button
                  onClick={() => setIsCaseStudiesOpen(!isCaseStudiesOpen)}
                  className="w-full text-primary-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2 px-4 rounded-md hover-elevate flex items-center justify-between"
                  data-testid="mobile-nav-case-studies"
                >
                  Case Studies
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isCaseStudiesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`ml-4 mt-2 space-y-2 transition-all duration-200 ${isCaseStudiesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  {caseStudies.map((study) => (
                    <Link 
                      key={study.path} 
                      href={study.path}
                      className="block w-full text-primary-foreground/80 hover:text-primary transition-colors duration-300 text-left py-2 px-4 rounded-md hover-elevate text-sm"
                      data-testid={`mobile-dropdown-${study.path}`}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsCaseStudiesOpen(false);
                      }}
                    >
                      {study.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('contact')}
                className="hover-elevate active-elevate-2 w-full"
                data-testid="mobile-nav-contact"
              >
                Get In Touch
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;