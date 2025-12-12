import { Link } from 'react-router-dom';
import { ShoppingCart, Download } from 'lucide-react';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {discount > 0 && (
            <Badge className="absolute left-2 top-2 bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          {product.type === 'digital' && (
            <Badge variant="secondary" className="absolute right-2 top-2">
              <Download className="h-3 w-3 mr-1" />
              Digital
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-1">{product.size}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-primary">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
};
