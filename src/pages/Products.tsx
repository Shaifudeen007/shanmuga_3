import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Search, SearchX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { allProducts } from '../data/products';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];

  const filteredProducts = allProducts.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-10 md:pt-28 pb-16 px-5 md:px-6 max-w-7xl mx-auto overflow-hidden">
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
        
        <div className="w-full flex flex-col items-center gap-8 mt-4">
          {/* Search bar */}
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

          {/* Category Chips */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchParams({ category: cat });
                }}
                className={`px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'bg-white/50 text-on-surface-variant border-outline-variant/30 hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
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
