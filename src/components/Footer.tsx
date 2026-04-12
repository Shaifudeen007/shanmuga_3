import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#240301] border-t border-[#5a413d]/15 w-full">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-12 gap-8 md:gap-6">
        <div className="font-headline text-primary dark:text-[#ffb4a8] text-xl font-bold tracking-tight">
          Shanmuga Clip Arts
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-body text-[10px] md:text-sm uppercase tracking-[0.2em]">
          <Link to="/about" className="text-on-surface-variant/60 hover:text-tertiary transition-colors">Privacy</Link>
          <Link to="/about" className="text-on-surface-variant/60 hover:text-tertiary transition-colors">Terms</Link>
          <Link to="/about" className="text-on-surface-variant/60 hover:text-tertiary transition-colors">Artisan License</Link>
          <Link to="/contact" className="text-on-surface-variant/60 hover:text-tertiary transition-colors">Contact</Link>
        </div>

        <div className="text-on-surface-variant/40 text-[10px] md:text-sm uppercase tracking-widest text-center md:text-right">
          © 2024 Shanmuga Clip Arts. <br className="md:hidden" /> Crafted in the Radiant Relic.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
