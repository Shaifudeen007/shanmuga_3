import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Typewriter from '../components/Typewriter';
import CountingNumber from '../components/CountingNumber';
import { Globe, Trophy, ShieldCheck, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-10 md:pt-16 pb-20">
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="px-5 md:px-6 max-w-7xl mx-auto mb-4 md:mb-0 text-center"
      >
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-1 block">Our Identity</span>
        <h1 className="text-3xl md:text-6xl font-headline font-bold text-primary mb-4">About Us</h1>
        <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-tertiary to-primary mx-auto rounded-full shadow-[0_0_20px_rgba(233,196,0,0.3)]" />
      </motion.section>

      {/* Origin Section */}
 
      {/* Founder Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="px-5 md:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-20"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-1 max-w-sm mx-auto"
        >
          <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] rotate-3" />
          <div className="glare-card relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-outline-variant/10">
            <img
              src="/assets/owner.png"
              alt="Owner of Shanmuga Clip Arts"
              className="w-full aspect-[3/4] object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6 md:space-y-8 order-2 lg:order-2"
        >
          <div className="space-y-4">

            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary">
              <Typewriter text="Ln. T. Manoj Kumar" delay={30} waitBeforeStart={200} />
            </h2>
            <p className="text-primary/80 font-bold text-sm tracking-widest uppercase">BCA., MBA. — Founder & Visionary</p>
          </div>
          
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-sm md:text-base italic">
            <p>
              "Art is not just my profession; it is my devotion. Every clip art we design, every garment we craft, is an offering to the divine — a reflection of our faith, culture, and timeless tradition."
            </p>
            <div className="not-italic space-y-4 font-normal">
              <p>
                At Shanmuga Clip Arts, our vision is rooted in the sacred heritage of Tamil Nadu while embracing the possibilities of the digital era. What we create is not merely design — it is a bridge between tradition and modern expression, reaching devotees across the world.
              </p>
              <p>
                Every piece is carefully guided and personally overseen, ensuring that the elegance of Antique Gold Kunthan work and every intricate detail reflects authenticity, purity, and devotion.
              </p>
              <p className="font-bold text-primary italic">
                For us, this is more than craftsmanship — it is a continuous spiritual journey, where tradition lives, evolves, and inspires.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-20 bg-surface-container-low relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-y-12 gap-x-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center space-y-3"
            >
              <div className="text-4xl md:text-6xl font-headline font-bold text-primary flex items-center justify-center gap-1">
                <CountingNumber value={5} />
                <span className="text-tertiary">+</span>
              </div>
              <div className="h-0.5 w-8 bg-tertiary/30 mx-auto rounded-full" />
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant/80">Years of Experience</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center space-y-3"
            >
              <div className="text-4xl md:text-6xl font-headline font-bold text-primary flex items-center justify-center gap-1">
                <CountingNumber value={1000} />
                <span className="text-tertiary">+</span>
              </div>
              <div className="h-0.5 w-8 bg-tertiary/30 mx-auto rounded-full" />
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant/80">Happy Customers</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center space-y-4"
            >
               <div className="flex justify-center">
                 <div className="p-3 bg-primary/5 rounded-2xl relative group">
                   <Trophy className="text-primary w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
                   <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </div>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant/80 leading-relaxed max-w-[120px] mx-auto">Tamil Nadu Best Craftsman</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-center space-y-4"
            >
               <div className="flex justify-center">
                 <div className="p-3 bg-primary/5 rounded-2xl relative group">
                   <Award className="text-primary w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
                   <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </div>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant/80 leading-relaxed max-w-[120px] mx-auto">Tamil Nadu Business Iconic Award</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center space-y-4"
            >
               <div className="flex justify-center">
                 <div className="p-3 bg-primary/5 rounded-2xl relative group">
                   <Globe className="text-primary w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
                   <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </div>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant/80 leading-relaxed max-w-[120px] mx-auto">Export Specialist</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center space-y-4 col-span-2 lg:col-span-1"
            >
               <div className="flex justify-center">
                 <div className="p-3 bg-primary/5 rounded-2xl relative group">
                   <ShieldCheck className="text-primary w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
                   <div className="absolute -inset-1 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </div>
              <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant/80 leading-relaxed max-w-[120px] mx-auto">Certified Person</p>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="px-5 md:px-6 max-w-4xl mx-auto mt-16 md:mt-24 text-center"
      >
        <h2 className="text-2xl md:text-5xl font-headline font-bold text-primary mb-6 md:mb-8 italic">"Art is the breath of the soul."</h2>
        <p className="text-on-surface-variant text-sm md:text-base mb-10 md:mb-12">Experience the divinity for yourself. Explore our curated products or request a custom design.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">Shop Now</Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto hover:bg-primary/5">Contact Us</Button>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
