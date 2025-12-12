import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Medical education posters"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight">
            Premium Medical & Dental{' '}
            <span className="text-primary">Education Posters</span>
          </h1>
          <p className="text-lg text-card/80 max-w-lg">
            Elevate your clinic with our professional-grade educational posters. 
            Available in physical (12×18") and digital formats.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-card/10 border-card/30 text-card hover:bg-card/20">
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="relative z-10 bg-card/95 backdrop-blur">
        <div className="container py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders above ₹999</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Digital Downloads</h3>
                <p className="text-sm text-muted-foreground">Instant access available</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Premium Quality</h3>
                <p className="text-sm text-muted-foreground">Professional grade prints</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
