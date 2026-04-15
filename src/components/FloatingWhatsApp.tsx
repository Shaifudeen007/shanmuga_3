import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Auto-expand after 3 seconds, then collapse after 8 seconds
  React.useEffect(() => {
    const expandTimer = setTimeout(() => setIsExpanded(true), 3000);
    const collapseTimer = setTimeout(() => setIsExpanded(false), 8000);
    return () => {
      clearTimeout(expandTimer);
      clearTimeout(collapseTimer);
    };
  }, []);

  return (
    <motion.a
      href="https://wa.me/919489686435?text=Hi, I am interested in bulk and customized orders at Shanmuga Clip Arts."
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-20 right-4 md:bottom-10 md:right-10 z-[100] flex items-center bg-[#25D366] text-white rounded-full shadow-2xl overflow-hidden cursor-pointer group"
      style={{ height: '56px' }}
    >
      <div className="flex items-center px-4 h-full">
        <div className="relative">
          <MessageCircle size={28} className="flex-shrink-0" />
          <motion.span 
            animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -inset-1 bg-white rounded-full"
          />
        </div>
        
        <motion.div
          initial={false}
          animate={{ 
            width: isExpanded ? 'auto' : 0, 
            opacity: isExpanded ? 1 : 0,
            marginLeft: isExpanded ? 12 : 0
          }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="whitespace-nowrap overflow-hidden"
        >
          <div className="flex flex-col pr-4">
            <span className="font-black text-[10px] tracking-widest uppercase opacity-80 leading-none mb-0.5">Contact Us</span>
            <span className="font-bold text-sm leading-none">Bulk & Custom Orders</span>
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
