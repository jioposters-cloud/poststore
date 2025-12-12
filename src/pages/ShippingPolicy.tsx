import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Shipping Policy
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <Truck className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Shipping Partners</h3>
              <p className="text-sm text-muted-foreground">Blue Dart, Delhivery, India Post, Shiprocket, Amazon</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
              <p className="text-sm text-muted-foreground">Standard: 1-2 days | Custom/3D: 5-7 days</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Delivery Time</h3>
              <p className="text-sm text-muted-foreground">Metro: 3-5 days | Other: 5-7 days (estimates)</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <Package className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On orders above ₹999</p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Shipping Methods & Partners</h2>
              <p className="text-muted-foreground">
                We partner with trusted shipping carriers to ensure your orders reach you safely and on time:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Blue Dart</li>
                <li>Delhivery</li>
                <li>India Post</li>
                <li>Shiprocket</li>
                <li>Amazon Logistics</li>
              </ul>
              <p className="text-muted-foreground">
                The shipping partner is selected based on your location and product type to ensure the best delivery experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Order Processing Time</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Standard Posters & Books:</strong> 1-2 business days</li>
                <li><strong>3D Printed Items:</strong> 5-7 business days</li>
                <li><strong>Custom Work & Animations:</strong> 5-7 business days (or as communicated)</li>
              </ul>
              <p className="text-muted-foreground">
                Processing time begins after order confirmation and payment verification.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Estimated Delivery Time</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Metro Cities:</strong> 3-5 business days after shipping</li>
                <li><strong>Tier 2 Cities:</strong> 5-7 business days after shipping</li>
                <li><strong>Remote Areas:</strong> 7-10 business days after shipping</li>
              </ul>
              <p className="text-muted-foreground text-sm italic">
                Please note: These are estimated delivery times and may vary due to factors beyond our control such as weather, holidays, or logistics delays.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Shipping Costs</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Orders above ₹999:</strong> FREE shipping</li>
                <li><strong>Orders below ₹999:</strong> Flat rate of ₹99</li>
              </ul>
              <p className="text-muted-foreground">
                Shipping costs are calculated at checkout based on your order value.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Order Tracking</h2>
              <p className="text-muted-foreground">
                Once your order is shipped, you will receive:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>A confirmation email/SMS with tracking number</li>
                <li>A link to track your shipment in real-time</li>
                <li>Updates at key delivery milestones</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">International Shipping</h2>
              <p className="text-muted-foreground">
                We currently ship within India only. For international orders, please{' '}
                <a href="/contact" className="text-primary hover:underline">contact us</a> for custom quotes.
              </p>
              <p className="text-muted-foreground">
                <strong>Note:</strong> For international shipments, all duties, taxes, and customs fees are the customer's responsibility.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about shipping, please{' '}
                <a href="/contact" className="text-primary hover:underline">contact us</a> or reach out via WhatsApp.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
