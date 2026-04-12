import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Landmark, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/assets/hero-deity-1.jpg',
  '/assets/hero-deity-2.jpg',
  '/assets/hero-deity-3.jpg',
  '/assets/hero-deity-4.jpg',
];

const Home: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative h-[calc(100dvh-40px)] md:h-auto md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-0 md:pt-24 pb-12 mt-0 md:mt-0">
        <div className="absolute inset-0 radial-sanctuary opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
        <div className="container mx-auto px-10 md:px-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10 h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex md:block flex-col space-y-4 md:space-y-5 max-w-2xl absolute md:relative z-30 bottom-32 left-6 right-6 md:inset-auto p-0 md:pl-12 text-left md:text-left shadow-none"
          >
            <div className="inline-block px-4 py-1 rounded-full border border-outline-variant/30 text-tertiary text-sm tracking-[0.2em] uppercase font-bold">
              Sacred Digital Artisans
            </div>
            <h1 className="text-4xl md:text-[5rem] font-headline font-bold leading-tight tracking-tighter text-on-surface">
              Where <span className="italic text-primary">Tradition</span> Meets <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">Digital Light</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Discover a sanctuary of curated clip arts, where ancient aesthetics are reimagined for the luminous age. Each relic is a testament to digital craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4 justify-start md:justify-start">
              <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-tertiary text-on-tertiary font-bold text-lg hover:scale-[1.05] transition-all active:scale-95 shadow-[0_0_30px_rgba(255,180,168,0.15)]">
                Explore Sanctuary
              </button>
              <button className="px-8 py-3.5 rounded-full border border-outline-variant/50 text-on-surface font-semibold text-lg hover:bg-surface-bright/40 transition-all">
                Our Manifesto
              </button>
            </div>
          </motion.div>
          <div className="flex md:flex justify-end absolute md:relative inset-0 md:inset-auto h-full md:h-[480px] w-full md:max-w-md overflow-hidden md:rounded-[1rem] md:border md:border-outline-variant/20 md:shadow-2xl md:translate-x-20 z-0 md:z-20">
            <div className="absolute -inset-10 bg-primary-container/20 blur-[100px] rounded-full z-0"></div>
            
            <motion.div 
              className="flex h-full w-full relative z-20"
              animate={{ x: `-${currentHeroIndex * 100}%` }}
              transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
            >
              {heroImages.map((src, i) => (
                <div key={i} className="min-w-full h-full">
                  <img 
                    src={src} 
                    alt={`Sacred Deity Artwork ${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-1/2 z-30 flex gap-3">
              {heroImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentHeroIndex(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${currentHeroIndex === i ? 'w-8 bg-tertiary' : 'w-2 bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-tertiary font-bold tracking-[0.3em] uppercase text-xs"
            >
              Curated Collections
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-headline font-bold text-on-surface"
            >
              Featured Relics
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-surface-container-low rounded-2xl overflow-hidden border border-primary/40 shadow-[0_0_25px_rgba(105,0,0,0.35)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(105,0,0,0.45)] dark:border-tertiary/20 dark:shadow-[0_0_20px_rgba(233,196,0,0.1)] dark:hover:shadow-[0_0_40px_rgba(233,196,0,0.2)]"
              >
                {/* Image Placeholder */}
                <div className="aspect-square bg-surface-container relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 radial-sanctuary opacity-40 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-10"></div>
                  <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center">
                    <Landmark size={48} className="text-primary/20 group-hover:scale-125 transition-transform duration-500 group-hover:text-primary/40" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-background/90 to-transparent backdrop-blur-sm">
                    <button className="w-full bg-primary text-on-primary py-2.5 rounded-lg font-bold text-xs tracking-widest uppercase hover:bg-tertiary hover:text-on-tertiary transition-colors">
                      View Relic
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-tertiary">Limited Edition</span>
                    <span className="text-on-surface-variant text-[10px]">Artifact {i}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">
                    Sacred Ornament
                  </h3>
                  <p className="text-on-surface-variant/70 text-xs font-light line-clamp-1">
                    Hand-crafted digital essence.
                  </p>
                  <div className="pt-3 flex items-center justify-between border-t border-outline-variant/10">
                    <span className="text-primary font-bold text-sm">Coming Soon</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-tertiary animate-pulse" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Luminous Craft Manifesto */}
      <section className="py-32 bg-surface-container-low relative">
        <div className="container mx-auto px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-outline-variant/10 shadow-2xl"
            >
              <img 
                alt="Manifesto visual representation" 
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWFXnv-3JqHsVaxbqgXpwLouLy-1EQPshB3VP9rm1BTccdONBBAxhQHlcvtYqjYlIOZXr_4S2dNccgC1enYgJH73tDEu2m8V1d10nudDiKMFxRdZ8i7PRLI1Q5UMqS1t2A3Tdp-xwGLxQnyfmXq46Kzn1zpteROvMw78zXwiRdFR6lU5uKtGlToBgi_L3taHBHeW_FjWuFGkQlrJsnjmEGtrVvyc6EcV2wV2-47_nHGDMvmCo8_CA-gQ6fcKtABgDUnW71WRp3PMQ"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-10"
            >
              <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">The Luminous Craft</h2>
              <div className="space-y-6 text-lg text-on-surface-variant font-light leading-relaxed">
                <p>We believe that digital art should not feel sterile. In the Sanctuary, every pixel is infused with the warmth of the artisan's hand. Our clip arts are not mere icons; they are fragments of a larger story, designed to bring a sense of sacred presence to your projects.</p>
                <p>Our process honors the asymmetry of nature and the precision of the loom. By layering light like gold leaf, we create artifacts that breathe on the screen.</p>
              </div>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/20">
                <div>
                  <div className="text-tertiary text-4xl font-bold mb-2">108+</div>
                  <div className="text-xs uppercase tracking-widest text-outline">Unique Relics</div>
                </div>
                <div>
                  <div className="text-primary text-4xl font-bold mb-2">Artisan</div>
                  <div className="text-xs uppercase tracking-widest text-outline">Digital Pedigree</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-primary border-t border-primary-container">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 px-8">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
          >
            <Heart className="text-tertiary mx-auto mb-10 animate-pulse w-16 h-16" />
            <h2 className="text-5xl md:text-7xl font-headline font-bold text-on-primary mb-8 leading-tight">
              Ready to enhance <br />
              your digital sanctuary?
            </h2>
            <p className="text-on-primary/80 text-xl mb-12 max-w-2xl mx-auto">
              Whether you need custom ornaments or traditional deity clip arts, our artisans are ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 rounded-full bg-white text-primary font-bold text-xl hover:scale-105 transition-all shadow-2xl">
                Contact to Order
              </button>
              <button className="px-12 py-5 rounded-full border-2 border-white text-white font-bold text-xl hover:bg-white/10 transition-all">
                View Catalog
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
