import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white dark:bg-[#2b0604]/70 dark:backdrop-blur-xl py-3 md:py-4 transition-all duration-300 border-b border-outline-variant/10"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">
            temple_hindu
          </span>
          <h1 className="text-2xl md:text-3xl font-devotional text-primary transition-colors group-hover:text-secondary whitespace-nowrap">
            Shanmugha Clip Arts
          </h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-on-surface/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-surface-container transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Utility Actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-surface-container transition-colors"
          >
            {darkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-on-surface" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
