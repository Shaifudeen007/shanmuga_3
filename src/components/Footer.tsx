import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  FacebookIcon as Facebook, 
  Share2 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#faf9f6] dark:bg-[#fffdf5] border-t-2 border-[#8f0f07]/10 pt-12 pb-24 md:pb-8 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Identity */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-[#8f0f07] flex items-center justify-center rounded-2xl shadow-xl shadow-black/10 rotate-3 group-hover:rotate-0 transition-all duration-500">
                <span className="text-white font-serif-title font-black text-3xl">S</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-[#8f0f07] font-headline text-3xl font-bold tracking-tight leading-none">Shanmuga</h2>
                <span className="text-[#8f0f07] text-[11px] uppercase tracking-[0.3em] font-bold mt-2">Clip Arts</span>
              </div>
            </Link>
            <p className="text-[#8f0f07] text-sm leading-relaxed max-w-xs font-light italic text-center lg:text-left">
              "Weaving divinity into every thread, crafting legends in every ornament. Preserving Bharat's sacred traditions with timeless elegance."
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { Icon: Instagram, link: "https://www.instagram.com/reel/DWrHc_Rkh0z/?igsh=YnN1ajBtM25ramdj", type: 'social' },
                { Icon: Facebook, link: "https://www.facebook.com/share/18GERuQyQv/", type: 'social' },
                { Icon: Share2, link: "https://shanmugacliparts.com", type: 'share' }
              ].map((social, i) => {
                if (social.type === 'social') {
                  return (
                    <a 
                      key={i} 
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#8f0f07]/5 border border-[#8f0f07] flex items-center justify-center text-[#8f0f07] hover:bg-[#8f0f07] hover:text-white hover:border-[#8f0f07] hover:-translate-y-1 transition-all duration-300"
                    >
                      <social.Icon size={18} />
                    </a>
                  );
                } else {
                  return (
                    <button 
                      key={i} 
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: 'Shanmuga Clip Arts',
                            text: 'Discover divine craftsmanship and traditional deity attire at Shanmuga Clip Arts.',
                            url: window.location.href,
                          }).catch(() => {});
                        } else {
                          window.open(social.link, '_blank');
                        }
                      }}
                      className="w-10 h-10 rounded-full bg-[#8f0f07]/5 border border-[#8f0f07] flex items-center justify-center text-[#8f0f07] hover:bg-[#8f0f07] hover:text-white hover:border-[#8f0f07] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    >
                      <social.Icon size={18} />
                    </button>
                  );
                }
              })}
            </div>
          </div>

          <div className="lg:pl-8 text-center lg:text-left">
            <h4 className="text-[#8f0f07] font-headline text-2xl font-bold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-8 h-1 bg-[#8f0f07] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-[#8f0f07] hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group text-sm font-medium">
                    <span className="w-1 h-1 rounded-full bg-[#8f0f07] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-[#8f0f07] font-headline text-2xl font-bold mb-4 relative inline-block">
              Categories
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-8 h-1 bg-[#8f0f07] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {['God Clothing', 'Divine Ornaments', 'Custom Designs', 'Sacred Relics'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="text-[#8f0f07] hover:translate-x-2 transition-all duration-300 flex items-center justify-center lg:justify-start gap-2 group text-sm font-medium">
                    <span className="w-1 h-1 rounded-full bg-[#8f0f07] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <h4 className="text-[#8f0f07] font-headline text-2xl font-bold mb-4 relative inline-block">
              Connect With Us
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-8 h-1 bg-[#8f0f07] rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start group">
                <div className="w-10 h-10 rounded-xl bg-[#8f0f07]/5 border border-[#8f0f07] flex items-center justify-center shrink-0 group-hover:bg-[#8f0f07] group-hover:text-white transition-colors text-[#8f0f07]">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col gap-1 items-center lg:items-start">
                  <span className="text-[10px] uppercase tracking-wider text-[#8f0f07] font-bold">Location</span>
                  <p className="text-[#8f0f07] text-sm leading-relaxed font-bold text-center lg:text-left">
                    40, Sattiyapper West Street,<br />
                    Nagapattinam, Tamil Nadu - 611001
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-[#8f0f07]/5 border border-[#8f0f07] flex items-center justify-center shrink-0 group-hover:bg-[#8f0f07] group-hover:text-white transition-colors text-[#8f0f07]">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col gap-1 items-center lg:items-start">
                  <span className="text-[10px] uppercase tracking-wider text-[#8f0f07] font-bold">Call Us</span>
                  <a href="tel:9489686435" className="text-[#8f0f07] text-sm hover:text-[#8f0f07] transition-colors font-medium">+91 94896 86435</a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-4 items-center group">
                <div className="w-10 h-10 rounded-xl bg-[#8f0f07]/5 border border-[#8f0f07] flex items-center justify-center shrink-0 group-hover:bg-[#8f0f07] group-hover:text-white transition-colors text-[#8f0f07]">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-1 items-center lg:items-start">
                  <span className="text-[10px] uppercase tracking-wider text-[#8f0f07] font-bold">Email</span>
                  <a href="mailto:shanmugacliparts@gmail.com" className="text-[#8f0f07] text-sm hover:text-[#8f0f07] transition-colors font-medium">shanmugacliparts@gmail.com</a>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-[#8f0f07]/20 shadow-lg h-32 w-full">
                <iframe 
                  src="https://maps.google.com/maps?q=40,%20Sattiyapper%20West%20Street,%20Nagapattinam,%20Tamil%20Nadu%20611001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-6 border-t border-[#8f0f07]/20 flex justify-center items-center text-center">
          <p className="text-[#8f0f07] text-[10px] uppercase tracking-[0.2em] font-medium font-bold">
            © 2026 Shanmuga Clip Arts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
