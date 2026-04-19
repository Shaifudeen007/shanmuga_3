import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ChevronLeft, Star } from 'lucide-react';

import { allProducts } from '../data/products';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  const images = [product.image, product.backImage].filter(Boolean) as string[];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="pt-14 md:pt-32 pb-16 px-5 md:px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-1 md:mb-6 hover:underline">
          <ChevronLeft size={16} /> Back to Collection
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        {/* Gallery */}
        <div className="space-y-4 md:space-y-6 max-w-lg mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-outline-variant/10 shadow-xl md:shadow-2xl bg-surface-container flex items-center justify-center p-4"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-2 md:gap-4 overflow-x-auto pb-2"
          >
            {images.map((img, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedImage(img)}
                className={`w-20 md:w-24 aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                  selectedImage === img ? 'border-primary shadow-lg scale-105' : 'border-outline-variant/10 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} className="w-full h-full object-contain" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Info */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="text-center lg:text-left">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">{product.category}</span>
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary dark:text-white mb-4">{product.name}</h1>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs md:text-sm text-on-surface-variant">(48 Reviews)</span>
            </div>
          </div>



          <p className="text-on-surface-variant leading-relaxed text-sm md:text-lg text-center lg:text-left">
            {product.description}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4 pt-4"
          >
            <h4 className="font-bold text-xs md:text-sm uppercase tracking-widest text-center lg:text-left">Dimensions & Material</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-on-surface-variant">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Material: {product.material || "Premium Quality Material"}</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Size: {product.size || "Standard Deity Size"}</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Water Resistance: {product.waterResistance || "Yes"}</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Item Type: Hand-crafted</li>
            </ul>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-2 px-4 sm:px-0"
          >
            <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#25D366]/40 transition-all min-h-[56px] text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
              <MessageCircle size={20} />
              WhatsApp to Order
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;
