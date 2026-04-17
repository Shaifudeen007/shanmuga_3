import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Info, Briefcase } from 'lucide-react';

const BottomBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/', icon: <Home size={20} /> },
    { name: 'PRODUCTS', path: '/products', icon: <ShoppingBag size={20} /> },
    { name: 'ABOUT', path: '/about', icon: <Info size={20} /> },
    { name: 'PROJECTS', path: '/projects', icon: <Briefcase size={20} /> },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-50">
      <div className="bg-background dark:bg-[#2b0604]/80 backdrop-blur-none dark:backdrop-blur-2xl border-t border-outline-variant/10 flex justify-around items-center py-2 px-4 shadow-[0_-2px_15px_rgba(0,0,0,0.1)]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1.5 transition-all ${
                isActive ? 'text-primary' : 'text-on-surface/40 dark:text-white/40'
              }`}
            >
              <div className="flex items-center justify-center">
                {item.icon}
              </div>
              <span className="text-[9px] font-black tracking-widest leading-none">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
