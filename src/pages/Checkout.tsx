import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { CheckoutForm, CheckoutFormData } from '@/components/checkout/CheckoutForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const shipping = totalPrice >= 999 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  const handleCheckout = async (data: CheckoutFormData) => {
    setIsLoading(true);
    
    // Store customer data for Razorpay (when integrated)
    const orderData = {
      customer: data,
      items: items,
      subtotal: totalPrice,
      shipping: shipping,
      total: grandTotal,
      createdAt: new Date().toISOString(),
    };

    console.log('Order data:', orderData);

    // For now, show pending message since Razorpay is in approval
    toast({
      title: 'Order Received!',
      description: 'Razorpay payment gateway is in approval stage. We will contact you on WhatsApp to complete payment.',
    });

    // Create WhatsApp message with order details
    const itemsList = items.map(item => `${item.name} x${item.quantity}`).join(', ');
    const message = encodeURIComponent(
      `New Order Request:\n\n` +
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email}\n` +
      `Address: ${data.address}, ${data.city}, ${data.state} - ${data.pincode}\n\n` +
      `Items: ${itemsList}\n` +
      `Total: ₹${grandTotal}\n\n` +
      `Notes: ${data.notes || 'None'}`
    );

    // Open WhatsApp with order details
    window.open(`https://api.whatsapp.com/send?phone=919714293282&text=${message}`, '_blank');

    setIsLoading(false);
    clearCart();
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-background">
          <div className="text-center space-y-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted mx-auto">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-foreground">Your cart is empty</h1>
            <p className="text-muted-foreground">Add some products before checkout!</p>
            <Button asChild>
              <Link to="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/cart">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Link>
          </Button>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-xl font-bold mb-6">Shipping Details</h2>
                  <CheckoutForm onSubmit={handleCheckout} isLoading={isLoading} />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-serif text-xl font-bold">Order Summary</h2>
                  <Separator />

                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          {item.name} × {item.quantity}
                        </span>
                        <span>₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>₹{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{grandTotal}</span>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    By proceeding, you agree to our{' '}
                    <Link to="/terms" className="text-primary hover:underline">Terms</Link> and{' '}
                    <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
