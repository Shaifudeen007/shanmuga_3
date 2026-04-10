import React from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="px-5 md:px-6 max-w-7xl mx-auto mb-16 md:mb-24 text-center">
        <h1 className="text-3xl md:text-6xl font-headline font-bold text-primary mb-6 md:mb-8">Connect With Us</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-sm md:text-lg px-4">
          Have a vision for a custom divine ornament or need assistance with your selection? Our artisans are here to help.
        </p>
      </section>

      <div className="px-5 md:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Info Cards */}
        <div className="lg:col-span-4 space-y-4 md:space-y-6">
          {[
            { icon: <Phone className="text-primary" size={24} />, title: "Voice of Devotion", detail: "+91 98450 12345" },
            { icon: <Mail className="text-primary" size={24} />, title: "Email Correspondence", detail: "info@shanmughacliparts.com" },
            { icon: <MapPin className="text-primary" size={24} />, title: "Our Workshop", detail: "108 Divine Street, Tamil Nadu" },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container p-6 md:p-8 rounded-2xl flex items-center gap-5 md:gap-6 border border-outline-variant/10 shadow-sm">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-[10px] md:text-xs uppercase tracking-widest text-primary/60 mb-1">{item.title}</h3>
                <p className="text-sm md:text-lg font-headline font-bold">{item.detail}</p>
              </div>
            </div>
          ))}

          <div className="bg-primary text-on-primary p-6 md:p-10 rounded-3xl space-y-4 md:space-y-6 shadow-xl">
            <h3 className="text-xl md:text-2xl font-headline font-bold italic">Express Inquiry</h3>
            <p className="text-on-primary/70 text-xs md:text-sm leading-relaxed">
              Prefer a quick chat? Message us directly on WhatsApp for instant assistance with orders and custom designs.
            </p>
            <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-[#25D366]/40 transition-all min-h-[56px] text-sm uppercase tracking-widest">
              <MessageCircle size={20} />
              WhatsApp Us
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8 bg-surface-container-low border border-outline-variant/30 p-6 md:p-12 rounded-[2.5rem] shadow-sm">
          <h2 className="text-2xl md:text-4xl font-headline font-bold text-primary mb-8 md:mb-12 text-center lg:text-left">Send a Message</h2>
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2 md:space-y-3">
                <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-on-surface/50 ml-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Arun Kumar"
                  className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
              <div className="space-y-2 md:space-y-3">
                <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-on-surface/50 ml-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
            </div>
            
            <div className="space-y-2 md:space-y-3">
              <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-on-surface/50 ml-2">Inquiry Type</label>
              <select className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm appearance-none">
                <option>Custom Divine Wear</option>
                <option>Bulk Order for Temple</option>
                <option>Sizing Assistance</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2 md:space-y-3">
              <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-on-surface/50 ml-2">Your Vision</label>
              <textarea
                placeholder="Describe your sacred requirement..."
                rows={5}
                className="w-full bg-white dark:bg-stone-900 border border-outline-variant/20 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <Button className="w-full min-h-[56px] flex items-center justify-center gap-3" size="lg">
              Deliver Message <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
