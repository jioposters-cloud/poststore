import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By using our website or placing an order with STATUS RING Posters, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Product Description & Accuracy</h2>
              <p className="text-muted-foreground">
                While we strive for accuracy in all product descriptions, images, and specifications, please note that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Colors may vary slightly from website images due to monitor settings and printing processes</li>
                <li>Dimensions for 3D printed items and custom posters may have slight variations (typically within ±5%)</li>
                <li>Product images are for illustration purposes and the actual product may differ slightly</li>
                <li>We reserve the right to modify product specifications without prior notice</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Orders & Payments</h2>
              <p className="text-muted-foreground">
                All orders are subject to availability and confirmation of the order price. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing, or suspected fraudulent activity.
              </p>
              <p className="text-muted-foreground">
                Payment must be made in full at the time of order. We accept payments through Razorpay and other payment methods as displayed on our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on this website, including but not limited to text, graphics, logos, images, and designs, is the property of STATUS RING Posters and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                STATUS RING Posters provides educational and informational products. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Any dental, medical, or health-related outcomes based on information in our posters or educational materials</li>
                <li>Any indirect, incidental, special, or consequential damages arising from the use or inability to use our products</li>
                <li>Any errors or omissions in the content of our products</li>
                <li>Any damages resulting from the misuse or misinterpretation of our products</li>
              </ul>
              <p className="text-muted-foreground">
                Our products are intended for educational purposes only and should not be used as a substitute for professional medical or dental advice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms and Conditions at any time without prior notice. Your continued use of the website after any changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms and Conditions, please{' '}
                <a href="/contact" className="text-primary hover:underline">contact us</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
