import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../components/ProductCard';
import { Search, SlidersHorizontal, SearchX } from 'lucide-react';
import { motion } from 'framer-motion';

const allProducts: Product[] = [
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

const categories = ['All', 'God Clothing', 'Ornaments', 'Custom Designs'];

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 md:pt-32 pb-24 px-5 md:px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary">Our Collections</h1>
          <p className="text-on-surface-variant max-w-md text-sm md:text-base leading-relaxed">Browse our treasury of sacred relics and divine ornaments.</p>
        </div>
        
        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <div className="relative group w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface/40 group-focus-within:text-primary transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search relics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-surface-container-low border border-outline-variant/30 rounded-2xl py-3.5 pl-12 pr-6 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-surface-container border border-outline-variant/30 px-6 py-3.5 rounded-2xl text-on-surface hover:bg-surface-container-high transition-all shrink-0">
            <SlidersHorizontal size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Filter</span>
          </button>
        </div>
      </div>

      {/* Categories - Scrollable on mobile */}
      <div className="flex overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar -mx-5 px-5 md:mx-0 md:px-0 md:flex-wrap md:overflow-visible">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all whitespace-nowrap border ${
              activeCategory === cat
                ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/20'
                : 'bg-surface-container-low text-on-surface/50 border-outline-variant/30 hover:border-primary/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full py-24 md:py-32 text-center flex flex-col items-center space-y-4 opacity-40">
            <SearchX size={80} strokeWidth={1} />
            <p className="text-lg md:text-xl font-headline italic">No relics found matching your search.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Products;
