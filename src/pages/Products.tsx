import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../components/ProductCard';
import { Search, SearchX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allProducts: Product[] = [
  {
    id: 'MRK001',
    name: 'STRAIGHT ALVAR KIRIDAM',
    price: 15500,
    category: 'Ornaments',
    image: '/assets/products/mrk001.png',
  },
  {
    id: 'MRK002',
    name: 'STRAIGHT NORMAL KIRIDAM',
    price: 12500,
    category: 'Ornaments',
    image: '/assets/products/mrk002.png',
  },
  {
    id: 'MRK003',
    name: 'STRAIGHT CLASSIC KIRIDAM',
    price: 18500,
    category: 'Ornaments',
    image: '/assets/products/mrk003.png',
  },
  {
    id: 'MRK004',
    name: 'ANNAMALIYAR',
    price: 22000,
    category: 'Ornaments',
    image: '/assets/products/mrk004.png',
  },
  {
    id: 'MRK005',
    name: 'ALAGIYAR',
    price: 19500,
    category: 'Ornaments',
    image: '/assets/products/mrk005.png',
  },
  {
    id: '1',
    name: 'Saffron Silk Deity Robe',
    price: 4500,
    category: 'God Clothing',
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Antique Gold Kavacham',
    price: 12500,
    category: 'Ornaments',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Emerald Studded Crown',
    price: 8900,
    category: 'Ornaments',
    image: 'https://images.unsplash.com/photo-1599481238332-b21a93fb12d7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Velvet Peetham Cover',
    price: 2800,
    category: 'Custom Designs',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Royal Blue Pattu Vasthram',
    price: 5200,
    category: 'God Clothing',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Silver Lotus Padukai',
    price: 7500,
    category: 'Ornaments',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '7',
    name: 'Pearl Harams Set',
    price: 6800,
    category: 'Ornaments',
    image: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '8',
    name: 'Custom Mural Backdrop',
    price: 15000,
    category: 'Custom Designs',
    image: 'https://images.unsplash.com/photo-1578321272176-b7bbc067985c?auto=format&fit=crop&q=80&w=800',
  },
];

const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter(p => {
    return p.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="pt-24 md:pt-28 pb-16 px-5 md:px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center gap-6 mb-12"
      >
        <div className="space-y-4 max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Sacred Collection
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">Our Products</h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"
          />
          <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mx-auto">
            Browse our treasury of sacred products and divine ornaments, crafted with timeless devotion for Hindu deities.
          </p>
        </div>
        
        <div className="w-full flex justify-center mt-4">
          <div className="relative group w-full sm:w-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface-container-low border border-outline-variant/30 rounded-2xl py-3.5 pl-12 pr-6 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredProducts.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-24 md:py-32 text-center flex flex-col items-center space-y-4 opacity-40"
          >
            <SearchX size={80} strokeWidth={1} />
            <p className="text-lg md:text-xl font-headline italic">No products found matching your search.</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Products;
