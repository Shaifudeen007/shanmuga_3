import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Product {
  id: string;
  name: string;
  price: number;
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
      className="group bg-surface-container-low rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] md:aspect-square overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Buttons - Hidden on small mobile, visible on hover/focus */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4 md:translate-y-16 md:group-hover:translate-y-0 transition-transform duration-500 z-10 w-full px-4 md:w-auto md:px-0">
          <Link
            to={`/product/${product.id}`}
            className="w-full md:w-auto p-3.5 md:p-4 bg-white/95 backdrop-blur-md text-primary rounded-xl md:rounded-full shadow-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all min-h-[44px]"
          >
            <Eye size={20} />
            <span className="text-xs font-bold uppercase tracking-widest">View Details</span>
          </Link>
        </div>
      </div>
      
      <div className="p-5 md:p-8 text-center flex-grow flex flex-col justify-center">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-2 md:mb-3 block">
          {product.category}
        </span>
        <h3 className="font-headline text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 group-hover:text-secondary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-primary/70 font-headline font-bold text-base md:text-lg">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
