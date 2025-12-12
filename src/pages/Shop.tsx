import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category');
  const activeType = searchParams.get('type');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory) {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (activeType) {
      filtered = filtered.filter((p) => p.type === activeType);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }, [activeCategory, activeType, sortBy]);

  const handleCategoryChange = (slug: string | null) => {
    if (slug) {
      searchParams.set('category', slug);
    } else {
      searchParams.delete('category');
    }
    setSearchParams(searchParams);
  };

  const handleTypeChange = (type: string | null) => {
    if (type) {
      searchParams.set('type', type);
    } else {
      searchParams.delete('type');
    }
    setSearchParams(searchParams);
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="all-categories"
              checked={!activeCategory}
              onCheckedChange={() => handleCategoryChange(null)}
            />
            <Label htmlFor="all-categories" className="cursor-pointer">
              All Categories
            </Label>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={category.slug}
                checked={activeCategory === category.slug}
                onCheckedChange={() =>
                  handleCategoryChange(activeCategory === category.slug ? null : category.slug)
                }
              />
              <Label htmlFor={category.slug} className="cursor-pointer">
                {category.icon} {category.name}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Type</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="all-types"
              checked={!activeType}
              onCheckedChange={() => handleTypeChange(null)}
            />
            <Label htmlFor="all-types" className="cursor-pointer">
              All Types
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="physical"
              checked={activeType === 'physical'}
              onCheckedChange={() => handleTypeChange(activeType === 'physical' ? null : 'physical')}
            />
            <Label htmlFor="physical" className="cursor-pointer">
              Physical (12×18")
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="digital"
              checked={activeType === 'digital'}
              onCheckedChange={() => handleTypeChange(activeType === 'digital' ? null : 'digital')}
            />
            <Label htmlFor="digital" className="cursor-pointer">
              Digital Download
            </Label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
              Shop All Products
            </h1>
            <p className="text-muted-foreground">
              {filteredProducts.length} products available
            </p>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <FilterSidebar />
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 gap-4">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild className="lg:hidden">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar />
                    </div>
                  </SheetContent>
                </Sheet>

                <div className="flex items-center gap-4 ml-auto">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="name">Name</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View Toggle */}
                  <div className="hidden sm:flex border border-border rounded-md">
                    <Button
                      variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                      size="icon"
                      className="rounded-r-none"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                      size="icon"
                      className="rounded-l-none"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div
                  className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No products found matching your filters.</p>
                  <Button
                    variant="link"
                    onClick={() => {
                      searchParams.delete('category');
                      searchParams.delete('type');
                      setSearchParams(searchParams);
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
