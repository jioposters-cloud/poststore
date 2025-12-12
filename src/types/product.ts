export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'dental' | 'skin' | '3d-printed' | 'books' | 'artworks';
  type: 'physical' | 'digital';
  size: string;
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = {
  id: string;
  name: string;
  slug: Product['category'];
  description: string;
  icon: string;
};
