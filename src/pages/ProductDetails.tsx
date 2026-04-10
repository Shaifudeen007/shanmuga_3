import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ChevronLeft, Star } from 'lucide-react';
import Button from '../components/Button';
import type { Product } from '../components/ProductCard';

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Saffron Silk Deity Robe',
    price: 4500,
    category: 'God Clothing',
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800',
    description: 'A master-crafted robe made from premium saffron silk, adorned with intricate gold zari borders. Perfect for grand temple festivals or daily deity adornment. The fabric is hand-woven by master weavers in Kanchipuram, ensuring the highest purity and elegance for the divine.',
  },
  {
    id: '2',
    name: 'Antique Gold Kavacham',
    price: 12500,
    category: 'Ornaments',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=800',
    description: 'An exquisitely detailed Kavacham (armor) crafted from high-quality alloy with a 24k gold plating finish. Inspired by ancient temple sculptures, this piece features traditional motifs of the peacock and lotus, symbolizing purity and eternal grace.',
  },
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pt-28 md:pt-32 pb-24 px-5 md:px-6 max-w-7xl mx-auto">
      <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-8 md:mb-12 hover:underline">
        <ChevronLeft size={16} /> Back to Collection
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        {/* Gallery */}
        <div className="space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden border border-outline-variant/10 shadow-xl md:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all hover:scale-105"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-2 md:gap-4 overflow-x-auto">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-outline-variant/10 cursor-pointer opacity-60 hover:opacity-100 transition-all shrink-0">
                <img src={product.image} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6 md:space-y-8">
          <div className="text-center lg:text-left">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">{product.category}</span>
            <h1 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-4">{product.name}</h1>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="flex text-amber-500">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs md:text-sm text-on-surface-variant">(48 Reviews)</span>
            </div>
          </div>

          <div className="text-2xl md:text-3xl font-headline font-bold text-primary text-center lg:text-left">₹{product.price.toLocaleString()}</div>

          <p className="text-on-surface-variant leading-relaxed text-sm md:text-lg text-center lg:text-left">
            {product.description}
          </p>

          <div className="space-y-4 pt-4">
            <h4 className="font-bold text-xs md:text-sm uppercase tracking-widest text-center lg:text-left">Dimensions & Material</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-on-surface-variant">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Material: Pure Silk & Gold Threads</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Size: Suitable for 1ft - 2ft Deities</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Care: Dry Clean Only</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> Item Type: Hand-crafted</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-6 md:pt-8 px-4 sm:px-0">
            <div className="flex items-center justify-between border border-outline-variant/30 rounded-2xl p-1 bg-surface-container-low min-h-[44px]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container transition-all"
              >
                -
              </button>
              <span className="w-12 text-center font-bold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container transition-all"
              >
                +
              </button>
            </div>
            <Button className="flex-1 w-full" size="lg">Add to Sanctuary</Button>
          </div>

          <div className="pt-2 px-4 sm:px-0">
            <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#25D366]/40 transition-all min-h-[56px] text-sm uppercase tracking-widest">
              <MessageCircle size={20} />
              WhatsApp to Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
