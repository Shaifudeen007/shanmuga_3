import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Flower2, Diamond } from 'lucide-react';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-32">
      {/* Hero Section */}
      <section className="px-5 md:px-6 max-w-7xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary mb-6 md:mb-8">Our Sacred Story</h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed px-4">
            Shanmugha Clip Arts was born from a deep devotion to the artisanal heritage of Tamil Nadu, seeking to bring the beauty of divine adornment to the modern world.
          </p>
        </motion.div>
      </section>

      {/* Origin Section */}
      <section className="px-5 md:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center mb-24 md:mb-32 overflow-hidden">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary text-center lg:text-left">The Vision</h2>
          <div className="space-y-5 md:space-y-6 text-on-surface-variant leading-relaxed text-sm md:text-base">
            <p>
              In the dim stillness of traditional workshops, we witnessed the meticulous hands of artisans crafting clothes for the divine. We realized that this devotion deserved a broader canvas.
            </p>
            <p>
              Our mission is to preserve the soul of tradition through the sharpness of digital artistry and the touch of premium fabrics. We don't just sell products; we facilitate a connection with the divine through aesthetic perfection.
            </p>
            <p>
              Every design is inspired by Chola-era bronzework, temple architecture, and sacred geometry. We bridge the gap between ancient rituals and contemporary lifestyles.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-2 md:-inset-4 bg-primary/5 rounded-3xl -rotate-2" />
          <img
            src="https://images.unsplash.com/photo-1590059393333-8994819779df?auto=format&fit=crop&q=80&w=800"
            alt="Artisan at work"
            className="rounded-2xl shadow-xl relative z-10 aspect-square object-cover w-full"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-surface-container py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">The Pillars of Our Craft</h2>
            <div className="w-16 md:w-24 h-1 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Authenticity",
                description: "We strictly adhere to traditional iconography and symbolic meanings in every design.",
                icon: <CheckCircle size={48} className="text-primary mx-auto mb-4" />
              },
              {
                title: "Purity",
                description: "Using only the finest silks, gold threads, and natural materials for our physical products.",
                icon: <Flower2 size={48} className="text-primary mx-auto mb-4" />
              },
              {
                title: "Excellence",
                description: "High-resolution digital assets and master-crafted physical items that stand the test of time.",
                icon: <Diamond size={48} className="text-primary mx-auto mb-4" />
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-stone-900 p-8 md:p-10 rounded-2xl shadow-sm text-center space-y-4"
              >
                {value.icon}
                <h3 className="text-lg md:text-xl font-headline font-bold text-primary">{value.title}</h3>
                <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 md:px-6 max-w-4xl mx-auto mt-24 md:mt-32 text-center">
        <h2 className="text-2xl md:text-5xl font-headline font-bold text-primary mb-6 md:mb-8 italic">"Art is the breath of the sanctuary."</h2>
        <p className="text-on-surface-variant text-sm md:text-base mb-10 md:mb-12">Experience the divinity for yourself. Explore our curated collections or request a custom design.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto">Shop Now</Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Us</Button>
        </div>
      </section>
    </div>
  );
};

export default About;
