import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { categories } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-12">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Categories
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect educational materials for your clinic, hospital, or educational institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/shop?category=${category.slug}`}>
                <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-6">{category.icon}</div>
                    <h2 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-center text-primary font-medium">
                      <span>Shop Now</span>
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
