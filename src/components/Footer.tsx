import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">temple_hindu</span>
            <h2 className="text-2xl font-headline font-bold text-primary">Shanmugha</h2>
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Enhancing Divinity with Design. We create designer clothing and ornaments for Hindu Gods, preserving tradition with contemporary elegance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full border border-outline-variant hover:bg-primary hover:text-white transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">facebook</span>
            </a>
            <a href="#" className="p-2 rounded-full border border-outline-variant hover:bg-primary hover:text-white transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </a>
            <a href="#" className="p-2 rounded-full border border-outline-variant hover:bg-primary hover:text-white transition-all flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-headline font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-primary transition-colors">Collections</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-headline font-bold mb-6">Categories</h3>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li><Link to="/products?category=clothing" className="hover:text-primary transition-colors">God Clothing</Link></li>
            <li><Link to="/products?category=ornaments" className="hover:text-primary transition-colors">Divine Ornaments</Link></li>
            <li><Link to="/products?category=custom" className="hover:text-primary transition-colors">Custom Designs</Link></li>
            <li><Link to="/products?category=relics" className="hover:text-primary transition-colors">Sacred Relics</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-headline font-bold mb-6">Connect With Us</h3>
          <ul className="space-y-4 text-sm text-on-surface-variant">
            <li className="flex gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>108 Divine Street, Spiritual Hub, Tamil Nadu, India</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>info@shanmughacliparts.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant opacity-60">
        <p>© 2024 Shanmugha Clip Arts. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Shipping Info</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
