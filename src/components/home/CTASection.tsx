import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Need Custom Posters?
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          We offer custom designs for clinics, hospitals, and educational institutions. 
          Contact us for bulk orders and personalized solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-card text-foreground hover:bg-card/90"
          >
            <a
              href="https://api.whatsapp.com/send?phone=919714293282"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link to="/contact">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
