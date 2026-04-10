import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, User } from 'lucide-react';

const BottomBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/', icon: <Home size={22} /> },
    { name: 'SHOP', path: '/products', icon: <ShoppingBag size={22} /> },
    { name: 'ACCOUNT', path: '/account', icon: <User size={22} /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50">
      <div className="bg-white dark:bg-[#360e09] border-t border-outline-variant/10 flex justify-around items-center pt-3 pb-6 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
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
