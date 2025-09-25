import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground border-t border-primary/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-primary text-2xl font-bold">
              The Unlock
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Transforming enterprises through intelligent AI automation. 
              Unlock your organisation's potential with our proven methodologies.
            </p>
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/10">
              Enterprise AI Solutions
            </Badge>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>felipe@theunlock.com.au</p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex justify-center items-center text-sm text-primary-foreground/60">
          <div>
            © {currentYear} The Unlock. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;