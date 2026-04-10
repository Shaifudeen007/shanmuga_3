import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import type { Product } from '../components/ProductCard';
import { ArrowRight, ArrowDown, ArrowLeft, Sparkles, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Saffron Silk Deity Robe',
    price: 4500,
    category: 'God Clothing',
    image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Antique Gold Kavacham',
    price: 12500,
    category: 'Ornaments',
    image: 'https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Emerald Studded Crown',
    price: 8900,
    category: 'Ornaments',
    image: 'https://images.unsplash.com/photo-1599481238332-b21a93fb12d7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Velvet Peetham Cover',
    price: 2800,
    category: 'Custom Designs',
    image: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800',
  },
];

const slides = [
  {
    tag: "Artisanal Excellence",
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/hero-1.jpg",
    type: "image",
    primaryBtn: "Customize",
    secondaryBtn: "Our Portfolio"
  },
  {
    tag: "Sacred Relics",
    title: "Consectetur Adipiscing",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/assets/hero-2.jpg",
    type: "image",
    primaryBtn: "Explore",
    secondaryBtn: "About Us"
  },
  {
    tag: "Traditional Wear",
    title: "Tempor Incididunt",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/assets/hero-3.jpg",
    type: "image",
    primaryBtn: "Shop Now",
    secondaryBtn: "Collections"
  },
  {
    tag: "Premium Quality",
    title: "Magna Aliqua Ut",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/assets/hero-4.jpg",
    type: "image",
    primaryBtn: "Order Custom",
    secondaryBtn: "Process"
  }
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById('featured-products');
    if (nextSection) {
      const navbarHeight = 84;
      const targetPosition = nextSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={containerRef} className="carousel-wrapper group overflow-hidden relative min-h-[600px] md:h-screen bg-background pt-0 flex flex-col md:flex-row">
        {/* Custom Notch SVG Shape */}
        <div className="absolute bottom-0 left-1/4 -translate-x-1/2 z-40 w-32 h-10 hidden md:block pointer-events-none">
          <svg viewBox="0 0 120 40" className="w-full h-full fill-background transition-colors">
            <path d="M0 40 C10 40 20 0 60 0 C100 0 110 40 120 40 Z" />
          </svg>
        </div>

        {/* Carousel Content */}
        <div className="relative w-full md:w-1/2 h-screen md:h-full overflow-hidden z-0">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / slides.length)}%)`
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative overflow-hidden h-full flex-shrink-0"
                style={{ width: `${100 / slides.length}%` }}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:hidden"></div>
                <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
                  <img
                    alt={slide.title}
                    className="w-full h-full object-cover scale-110"
                    src={slide.image}
                  />
                </motion.div>
                
                {/* Mobile Text Overlay - Inside Slide to change with it */}
                <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-center px-6 pt-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="space-y-4"
                    >
                      <span className="inline-block px-2 py-1 bg-primary text-[8px] font-black tracking-widest text-white uppercase rounded-xs">
                        {slide.tag}
                      </span>
                      <h2 className="text-4xl font-headline font-bold text-white leading-tight drop-shadow-lg">
                        {slide.title}
                      </h2>
                      <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                        {slide.description}
                      </p>
                      <button className="bg-primary text-white font-black px-8 py-3.5 rounded-lg text-[10px] tracking-widest uppercase">
                        Explore Now
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows (Carousel Only) */}
          <div className="absolute inset-0 flex items-center justify-between px-6 z-30 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/5 hover:bg-white/20 backdrop-blur-xl text-white rounded-full transition-all border border-white/10 pointer-events-auto active:scale-95"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white/5 hover:bg-white/20 backdrop-blur-xl text-white rounded-full transition-all border border-white/10 pointer-events-auto active:scale-95"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side: Text & Actions (Desktop Only) */}
        <div className="hidden md:flex w-full md:w-1/2 md:h-full bg-background items-center px-6 md:px-16 lg:px-24 py-12 md:py-0 relative z-10 border-l border-outline-variant/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl w-full"
            >
              <div className="inline-block px-3 py-1.5 bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] mb-6 rounded-sm text-primary">
                {slides[currentIndex].tag}
              </div>
              <h2 className="text-4xl lg:text-7xl font-headline font-bold leading-[0.95] tracking-tighter text-on-surface uppercase mb-8">
                {slides[currentIndex].title.split(' ')[0]} <br />
                <span className="text-primary italic font-devotional normal-case tracking-normal block mt-2 text-5xl lg:text-6xl">
                  {slides[currentIndex].title.split(' ').slice(1).join(' ')}
                </span>
              </h2>
              <p className="text-base lg:text-lg text-on-surface-variant max-w-md font-medium mb-10 leading-relaxed italic border-l-2 border-primary/30 pl-6">
                {slides[currentIndex].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products" className="w-full sm:w-auto">
                  <button className="w-full bg-primary text-white font-black px-12 py-4.5 uppercase tracking-widest text-[10px] hover:bg-white hover:text-primary rounded-xl transition-all duration-500 shadow-2xl active:scale-95 flex items-center justify-center gap-3">
                    {slides[currentIndex].primaryBtn} <ArrowRight size={18} />
                  </button>
                </Link>
                <Link to="/about" className="w-full sm:w-auto">
                  <button className="w-full border-2 border-outline-variant/20 text-on-surface font-black px-12 py-4.5 uppercase tracking-widest text-[10px] hover:bg-surface-variant transition-all rounded-xl active:scale-95">
                    {slides[currentIndex].secondaryBtn}
                  </button>
                </Link>
              </div>

              {/* Progress Indicators */}
              <div className="hidden md:flex gap-3 mt-16">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-12 bg-primary' : 'w-4 bg-outline-variant/30 hover:bg-outline-variant'}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Progress Bar */}
        <div className="md:hidden absolute bottom-0 left-0 right-0 z-40 flex justify-center gap-1.5 px-3 py-4 bg-black/5">
          {slides.map((_, index) => (
            <div key={index} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
              {currentIndex === index && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="h-full bg-primary"
                />
              )}
            </div>
          ))}
        </div>

        {/* Scroll Down Button */}
        <div className="absolute bottom-6 left-1/4 -translate-x-1/2 z-50 hidden md:block">
          <button
            onClick={scrollToContent}
            className="w-10 h-10 bg-background text-on-surface rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-xl border border-outline-variant/10 group/arrow"
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Featured Collections */}
      <section id="featured-products" className="py-16 md:py-24 px-5 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-3">Sacred Relics</h2>
            <p className="text-on-surface-variant max-w-md text-sm md:text-base leading-relaxed">Curated highlights from our luminous archives, designed with devotion.</p>
          </div>
          <Link to="/products" className="group flex items-center gap-2 text-primary font-bold text-xs md:text-sm tracking-widest uppercase">
            View All <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-container py-16 md:py-24 px-5 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-primary/10 blur-[60px] md:blur-[100px] rounded-full scale-125" />
            <img
              src="https://images.unsplash.com/photo-1590059393333-8994819779df?auto=format&fit=crop&q=80&w=800"
              alt="Temple Carving"
              className="rounded-2xl relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Our Philosophy</span>
            <h3 className="text-3xl md:text-5xl font-headline font-bold leading-tight">The Luminous Craft</h3>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed">
              Every stroke is weighted with history, every curve calculated to reflect the sacred geometry of the temples. We believe digital art and divine creations should breathe with an inner radiance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm md:text-base">Purity of Design</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">Uncompromising commitment to cultural accuracy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-sm md:text-base">Sacred Quality</h4>
                  <p className="text-xs md:text-sm text-on-surface-variant">Premium materials and high-fidelity artifacts.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="inline-block pt-4 w-full sm:w-auto">
              <Button variant="outline" className="w-full">Learn More About Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 px-5 md:px-6 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Heart className="text-secondary mx-auto mb-6 md:mb-8 animate-pulse w-10 h-10 md:w-12 md:h-12" />
          <h2 className="text-3xl md:text-6xl font-headline font-bold text-on-primary mb-6 md:mb-8 leading-tight">
            Ready to enhance <br className="sm:hidden"/>
            your divine sanctuary?
          </h2>
          <p className="text-on-primary/70 text-base md:text-lg mb-10 md:mb-12">
            Whether you need custom ornaments or traditional deity wear, our artisans are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">Contact to Order</Button>
            <Button variant="outline" className="border-on-primary text-on-primary hover:bg-white/10 w-full sm:w-auto" size="lg">View Catalog</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
