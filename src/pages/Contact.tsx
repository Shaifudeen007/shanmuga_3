import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-28 pb-20">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-5 md:px-6 max-w-7xl mx-auto mb-12 md:mb-16 text-center"
      >
        <h1 className="text-3xl md:text-6xl font-headline font-bold text-primary mb-6 md:mb-8">Connect With Us</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-sm md:text-lg px-4">
          Have a vision for a custom divine ornament or need assistance with your selection? Our artisans are here to help.
        </p>
      </motion.section>

      <div className="px-5 md:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Info Cards */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6">
          {[
            { icon: <Phone className="text-primary" size={24} />, title: "Voice of Devotion", detail: "+91 94896 86435" },
            { icon: <Mail className="text-primary" size={24} />, title: "Email Correspondence", detail: "shanmugacliparts@gmail.com" },
            { icon: <MapPin className="text-primary" size={24} />, title: "Our Workshop", detail: "40, Sattiyapper West Street, Nagapattinam, Tamil Nadu" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
              whileHover={{ x: 10 }}
              className="bg-surface-container p-4 md:p-5 rounded-2xl flex items-center gap-4 md:gap-5 border border-outline-variant/10 shadow-sm"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-[9px] md:text-[10px] uppercase tracking-widest text-primary/60 mb-0.5">{item.title}</h3>
                <p className="text-xs md:text-base font-sans font-bold leading-tight">{item.detail}</p>
              </div>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-primary text-on-primary p-6 md:p-10 rounded-3xl space-y-4 md:space-y-6 shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-headline font-bold italic">Express Inquiry</h3>
            <p className="text-on-primary/70 text-xs md:text-sm leading-relaxed">
              Prefer a quick chat? Message us directly on WhatsApp for instant assistance with orders and custom designs.
            </p>
            <a 
              href="https://wa.me/919489686435"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#25D366]/40 transition-all min-h-[56px] text-xs uppercase tracking-widest cursor-pointer"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-8 bg-surface-container-low border border-outline-variant/30 p-6 md:p-10 rounded-[2.5rem] shadow-sm"
        >
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-6 md:mb-8 text-center lg:text-left">Send a Message</h2>
          <form className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface/50 ml-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Arun Kumar"
                  className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface/50 ml-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface/50 ml-2">Inquiry Type</label>
              <select className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm appearance-none">
                <option>Custom Divine Wear</option>
                <option>Bulk Order for Temple</option>
                <option>Sizing Assistance</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface/50 ml-2">Your Vision</label>
              <textarea
                placeholder="Describe your sacred requirement..."
                rows={4}
                className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-3 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <Button className="w-full min-h-[50px] flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98]" size="lg">
              Deliver Message <Send size={18} />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
