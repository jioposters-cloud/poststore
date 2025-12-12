import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-20">
          <div className="container text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About STATUS RING Posters
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Best products for your presentation - Premium quality educational materials for healthcare professionals
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground mb-4">
                  At STATUS RING Posters, we believe in making patient education accessible, engaging, and effective. 
                  Our mission is to provide healthcare professionals with high-quality educational materials that help 
                  them communicate complex medical information in a simple, visual way.
                </p>
                <p className="text-muted-foreground">
                  We specialize in dental, dermatology, and general health education posters available in multiple 
                  languages including Hindi and English. Our products are designed by medical professionals and 
                  artists to ensure accuracy and visual appeal.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground mt-2">High-resolution prints on durable materials</p>
                </div>
                <div className="bg-card p-6 rounded-lg text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">1000+ Customers</h3>
                  <p className="text-sm text-muted-foreground mt-2">Trusted by clinics across India</p>
                </div>
                <div className="bg-card p-6 rounded-lg text-center">
                  <Target className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">Expert Design</h3>
                  <p className="text-sm text-muted-foreground mt-2">Created by medical professionals</p>
                </div>
                <div className="bg-card p-6 rounded-lg text-center">
                  <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">Patient Focus</h3>
                  <p className="text-sm text-muted-foreground mt-2">Easy to understand illustrations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Physical Posters</h3>
                <p className="text-muted-foreground">
                  Premium 12×18 inch posters printed on high-quality materials. Perfect for clinic walls, 
                  waiting rooms, and consultation areas.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Digital Downloads</h3>
                <p className="text-muted-foreground">
                  Instant access to high-resolution digital files. Print at your convenience or display 
                  on digital screens in your practice.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h3 className="font-semibold text-xl mb-4">Custom Orders</h3>
                <p className="text-muted-foreground">
                  Need something specific? We offer custom designs for clinics, hospitals, and educational 
                  institutions with bulk order discounts.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
