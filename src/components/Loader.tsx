import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Main Logo with Pulse and Float effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.05, 1],
            opacity: 1,
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="w-64 h-64 md:w-72 md:h-72 flex items-center justify-center mb-8"
        >
          <img 
            src="/logo-loader.png" 
            alt="Shanmuga Logo" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Loading Progress Line */}
        <div className="w-48 h-1 bg-primary/10 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        {/* Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-primary/60"
        >
          Weaving Tradition
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
