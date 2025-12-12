import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Dental Posters',
    slug: 'dental',
    description: 'Educational posters for dental clinics',
    icon: '🦷',
  },
  {
    id: '2',
    name: 'Skin Posters',
    slug: 'skin',
    description: 'Dermatology and skin anatomy posters',
    icon: '🧴',
  },
  {
    id: '3',
    name: 'Dental Artwork',
    slug: 'artworks',
    description: 'Artistic dental and medical illustrations',
    icon: '🎨',
  },
  {
    id: '4',
    name: '3D Printed Items',
    slug: '3d-printed',
    description: 'Educational 3D printed models',
    icon: '🖨️',
  },
  {
    id: '5',
    name: 'Books',
    slug: 'books',
    description: 'Comprehensive patient education materials',
    icon: '📚',
  },
];

// Helper function to convert Google Drive links to direct image URLs
const convertDriveLink = (url: string): string => {
  if (url.includes('drive.google.com/file/d/')) {
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      return `https://drive.google.com/uc?export=view&id=${match[1]}`;
    }
  }
  return url;
};

export const products: Product[] = [
  {
    id: 'P001',
    name: 'Dental Implant Plan Black',
    description: 'Comprehensive dental implant planning poster',
    price: 999,
    image: 'https://images.unsplash.com/photo-1585110481263-7ce88becdc20?w=400',
    category: 'dental',
    type: 'physical',
    size: '12x18 inch',
    inStock: true,
    featured: true,
    sku: 'DP-001',
    stock: 50,
  },
  {
    id: 'P002',
    name: 'Dental Caries Stages Consequences',
    description: 'Dental caries progression chart',
    price: 799,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
    category: 'dental',
    type: 'physical',
    size: '12x18 inch',
    inStock: true,
    featured: true,
    sku: 'DP-002',
    stock: 40,
  },
  {
    id: 'P003',
    name: 'Skin Health Poster',
    description: 'Comprehensive skin care education',
    price: 599,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f3?w=400',
    category: 'skin',
    type: 'physical',
    size: '12x18 inch',
    inStock: true,
    featured: true,
    sku: 'SP-001',
    stock: 30,
  },
  {
    id: 'P004',
    name: 'Dental Patient Education E-Book',
    description: 'Complete patient education guide',
    price: 299,
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400',
    category: 'books',
    type: 'digital',
    size: 'Digital PDF',
    inStock: true,
    sku: 'EB-001',
    stock: 100,
  },
  {
    id: 'P005',
    name: 'Dental Artwork - Teeth Anatomy',
    description: 'Detailed teeth anatomy illustration',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400',
    category: 'artworks',
    type: 'physical',
    size: '12x18 inch',
    inStock: true,
    featured: true,
    sku: 'DA-001',
    stock: 20,
  },
  {
    id: 'P006',
    name: 'Dental Implant Plan Black (Premium)',
    description: 'Detailed teeth anatomy illustration',
    price: 1299,
    image: convertDriveLink('https://drive.google.com/file/d/12IwuQlq9iv3px2kYdsKojACRLHP3m9ZM/view?usp=drivesdk'),
    category: 'dental',
    type: 'physical',
    size: '12x18 inch',
    inStock: true,
    sku: 'DA-002',
    stock: 20,
  },
  {
    id: 'P007',
    name: 'Dental Caries Stages Consequences BK Dental Clinic Poster',
    description: 'Detailed teeth anatomy illustration without frame',
    price: 1299,
    image: convertDriveLink('https://drive.google.com/file/d/18M5O2koeQ7eTMTC8Heuilg91isD051Bu/view?usp=drivesdk'),
    category: 'dental',
    type: 'physical',
    size: '12x18 inch',
    inStock: true,
    sku: 'DA-003',
    stock: 20,
  },
];
