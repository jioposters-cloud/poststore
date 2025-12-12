import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast({
      title: 'Razorpay Integration Pending',
      description: 'Payment gateway is in approval stage. Please contact us via WhatsApp to complete your order.',
    });
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
            <p className="text-muted-foreground">Start adding some amazing posters!</p>
            <Button asChild>
              <Link to="/shop">
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const shipping = totalPrice >= 999 ? 0 : 99;
  const grandTotal = totalPrice + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <Link to={`/product/${item.id}`} className="shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-24 rounded-md object-cover"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <Link
                          to={`/product/${item.id}`}
                          className="font-semibold text-foreground hover:text-primary line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">{item.size}</p>
                        <p className="text-lg font-bold text-primary mt-2">₹{item.price}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center border border-border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex justify-between items-center pt-4">
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/shop">Continue Shopping</Link>
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h2 className="font-serif text-xl font-bold">Order Summary</h2>
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
                    {shipping > 0 && (
                      <p className="text-xs text-muted-foreground">
                        Add ₹{999 - totalPrice} more for free shipping
                      </p>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">₹{grandTotal}</span>
                  </div>

                  <Button className="w-full" size="lg" onClick={handleCheckout}>
                    Proceed to Checkout
                  </Button>

                  <div className="text-center">
                    <a
                      href="https://api.whatsapp.com/send?phone=919714293282"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      Or order via WhatsApp
                    </a>
                  </div>
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

export default Cart;
