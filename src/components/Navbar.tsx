import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Desktop Navbar - Hidden on Mobile */}
      <div className="hidden md:flex fixed top-8 left-0 right-0 z-50 justify-center px-4">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 md:gap-4 px-4 md:px-5 py-1.5 rounded-full bg-[#2b0604]/90 backdrop-blur-3xl border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] h-12 md:h-16"
        >
          {/* Logo */}
          <Link to="/" className="hidden md:flex items-center pr-4 border-r border-white/10 h-6 mr-1 group">
            <span className="glare-text font-black tracking-tighter text-2xl leading-none transition-transform group-hover:scale-110" style={{ fontFamily: "'Noto Serif', serif" }}>S</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center h-full relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-3 md:px-5 h-full flex flex-col items-center justify-center group"
                >
                  {/* Active Indicator (Pill Above) */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute -top-0.5 w-6 h-1 bg-tertiary rounded-full shadow-[0_0_15px_rgba(233,196,0,0.6)] z-20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <span className={`text-xs md:text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-tertiary' : 'text-white/70 group-hover:text-tertiary'}`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}
            
          </div>

          {/* Action Button & Theme Toggle */}
          <div className="flex items-center gap-2 md:gap-3 pl-3 border-l border-white/10 h-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1 rounded-full hover:bg-white/5 transition-colors text-white/70"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            
            <a 
              href="https://wa.me/919489686435"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block px-5 py-2 rounded-full bg-tertiary/10 hover:bg-tertiary/20 text-tertiary font-bold text-[11px] tracking-wider uppercase transition-all border border-tertiary/20"
            >
              Book a Call
            </a>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Header - Visible only on Mobile */}
      <div className={`md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 ${
        scrolled 
          ? 'bg-background/80 dark:bg-stone-900/80 backdrop-blur-lg border-b border-outline-variant/5 shadow-lg' 
          : 'bg-transparent backdrop-blur-none'
      }`}>
        <Link to="/" className="flex items-center">
          <span 
            className="flex items-center text-primary-container dark:text-white text-2xl font-bold tracking-tight"
            style={{ fontFamily: "'Noto Serif', serif" }}
          >
            <svg 
              viewBox="0 0 24 24" 
              width="28" 
              height="28" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2 text-primary dark:text-tertiary"
            >
              <path d="M12 2L8 6h8l-4-4z" />
              <path d="M6 6h12v4H6z" />
              <path d="M4 10h16v4H4z" />
              <path d="M2 14h20v6H2z" />
              <path d="M10 20v2h4v-2" />
            </svg>
            Shanmuga Clip Arts
          </span>
        </Link>
        
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-surface-container dark:bg-white/5 text-on-surface dark:text-white transition-colors border border-outline-variant/10"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
