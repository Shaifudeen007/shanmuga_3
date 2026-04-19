import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-surface-container-low/60 backdrop-blur-xl rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-primary/20 dark:border-outline-variant/10 flex flex-col h-full glow-maroon-pulse dark:[animation:none] dark:shadow-none"
    >
      {/* Background Pulse Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full pointer-events-none z-0 dark:hidden"
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="relative aspect-square overflow-hidden bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          {/* Buttons - Hidden on small mobile, visible on hover/focus */}
          <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-4 md:translate-y-16 md:group-hover:translate-y-0 transition-all duration-500 z-10 w-full px-3 md:w-auto md:px-0">
            <Link
              to={`/product/${product.id}`}
              className="w-full md:w-auto p-2 md:p-3 bg-white/95 backdrop-blur-md text-primary rounded-lg md:rounded-full shadow-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all min-h-[36px] md:min-h-[40px]"
            >
              <Eye size={16} className="md:w-4 md:h-4" />
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest whitespace-nowrap">View Details</span>
            </Link>
          </div>
        </div>
        
        <div className="p-3 md:p-5 text-center flex-grow flex flex-col justify-center">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-secondary font-bold mb-1 md:mb-2 block">
            {product.category}
          </span>
          <h3 className="font-headline text-xs md:text-base font-bold text-primary dark:text-white mb-1 md:mb-2 group-hover:text-secondary transition-colors line-clamp-2">
            {product.name}
          </h3>

        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
