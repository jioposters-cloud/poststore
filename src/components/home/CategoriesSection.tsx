import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';

export const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of professional medical and dental education materials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/shop?category=${category.slug}`}>
              <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">View All</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
