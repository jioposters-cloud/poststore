import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Download, Truck, Shield, Package } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-8">
          {/* Breadcrumb */}
          <Link
            to="/shop"
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {discount > 0 && (
                <Badge className="absolute left-4 top-4 bg-destructive text-destructive-foreground text-lg px-3 py-1">
                  -{discount}% OFF
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{product.category}</Badge>
                  {product.type === 'digital' && (
                    <Badge variant="secondary">
                      <Download className="h-3 w-3 mr-1" />
                      Digital
                    </Badge>
                  )}
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-muted-foreground text-lg">{product.description}</p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-muted-foreground" />
                  <span>Size: <strong>{product.size}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  {product.type === 'physical' ? (
                    <>
                      <Truck className="h-5 w-5 text-muted-foreground" />
                      <span>Physical product - Ships within 2-3 business days</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5 text-muted-foreground" />
                      <span>Digital download - Instant access after purchase</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span>Premium quality, satisfaction guaranteed</span>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  size="lg"
                  className="w-full md:w-auto"
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center p-4 bg-card rounded-lg">
                  <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Free Shipping</p>
                  <p className="text-xs text-muted-foreground">On orders above ₹999</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="text-sm font-medium">Secure Payment</p>
                  <p className="text-xs text-muted-foreground">100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
