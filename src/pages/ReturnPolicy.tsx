import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { RotateCcw, Clock, CheckCircle, XCircle } from 'lucide-react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12 max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Cancellation & Refunds Policy
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <RotateCcw className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Return Window</h3>
              <p className="text-sm text-muted-foreground">30 days for standard items | 7 days for sale items</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Refund Processing</h3>
              <p className="text-sm text-muted-foreground">5-7 working days after receiving return</p>
            </div>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Physical Products (Posters & Books)</h2>
              <div className="bg-accent/50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-4">Returns & Refunds</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Return Window:</strong> 30 days from delivery (7 days for EOSS/sale items)</li>
                  <li><strong>Condition:</strong> Product must be unused, in original packaging with all tags intact</li>
                  <li><strong>Defects/Damage:</strong> Full refund or replacement for products damaged during shipping or defective on arrival</li>
                  <li><strong>Process:</strong> Email us with photos of the product and your order ID</li>
                  <li><strong>Refund Timeline:</strong> 5-7 working days after we receive the return</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Custom Products (3D Printing, Custom Posters, Animations)</h2>
              <div className="bg-accent/50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-foreground mb-4">Cancellation & Refunds</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Before Production:</strong> Full refund if cancelled within 24 hours of order confirmation (before production begins)</li>
                  <li><strong>After Production Begins:</strong> Cancellation may incur a 50% fee to cover labor and materials</li>
                  <li><strong>Refund Policy:</strong> Refunds for custom work are only provided if the final product is materially different from agreed specifications</li>
                  <li><strong>Approval:</strong> Once you approve a design/proof, changes may not be possible</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Items That Cannot Be Returned</h2>
              <div className="flex items-start gap-2 text-muted-foreground">
                <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <ul className="list-disc list-inside space-y-1">
                  <li>Digital downloads/e-books (once downloaded)</li>
                  <li>Used, tampered with, or damaged products</li>
                  <li>Products purchased as part of a set (cannot return individual items)</li>
                  <li>Items marked as "Final Sale"</li>
                  <li>Custom/personalized items (unless defective)</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">How to Initiate a Return</h2>
              <div className="flex items-start gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <ol className="list-decimal list-inside space-y-2">
                  <li>Email us at <a href="mailto:statusring.in@gmail.com" className="text-primary hover:underline">statusring.in@gmail.com</a> with your order ID</li>
                  <li>Attach clear photos of the product showing the issue (if applicable)</li>
                  <li>Our team will review and respond within 24-48 hours</li>
                  <li>If approved, we'll provide return shipping instructions</li>
                  <li>Ship the item back in original packaging</li>
                  <li>Refund will be processed within 5-7 working days of receiving the return</li>
                </ol>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Refund Methods</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Original Payment Method:</strong> Refund to the same payment method used for purchase</li>
                <li><strong>Store Credit:</strong> Option to receive store credit for faster processing</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Quality Check</h2>
              <p className="text-muted-foreground">
                All returned items are inspected upon receipt. We reserve the right to refuse returns that don't meet our return conditions or appear to have been used/damaged by the customer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about returns or refunds, please{' '}
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

export default ReturnPolicy;
