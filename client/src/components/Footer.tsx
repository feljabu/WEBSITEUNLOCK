import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-primary text-2xl font-bold">
              The Unlock
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming enterprises through intelligent AI automation. 
              Unlock your organization's potential with our proven methodologies.
            </p>
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
              Enterprise AI Solutions
            </Badge>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-primary transition-colors cursor-pointer">AI Strategy Consulting</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Workflow Automation</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Intelligent Agents</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Enterprise Integration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>hello@theunlock.ai</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <div>
            © {currentYear} The Unlock. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;