import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Award, ShieldCheck, Sparkles, IndianRupee, Clock, Factory, Globe, ThumbsUp, Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import CountingNumber from '../components/CountingNumber';
import { allProducts } from '../data/products';

const heroImages = [
  '/assets/hero-new-1.jpg',
  '/assets/hero-new-2.jpg',
  '/assets/hero-new-3.jpg',
  '/assets/hero-new-4.jpg',
];

const productCategories = [
  { name: 'Traditional Muthangi work', image: '/assets/cat-1.jpg' },
  { name: 'Crown', image: '/assets/cat-2.jpg' },
  { name: 'Rathana Kavasam', image: '/assets/cat-3.jpg' },
  { name: 'Rajaalangaram', image: '/assets/cat-4.jpg' },
  { name: 'Velvet Stone work', image: '/assets/cat-5.png' },
];

const featuredImages = [
  '/Featured/WhatsApp Image 2026-04-18 at 11.47.27 PM.jpeg',
  '/Featured/WhatsApp Image 2026-04-18 at 11.47.28 PM.jpeg',
  '/Featured/WhatsApp Image 2026-04-18 at 11.47.30 PM.jpeg',
  '/Featured/WhatsApp Image 2026-04-18 at 11.47.31 PM.jpeg',
];

const featuredProducts = [
  { id: 'f1', name: 'Masterpiece Alankaram', image: featuredImages[0] },
  { id: 'f2', name: 'Divine Ornaments Set', image: featuredImages[1] },
  { id: 'f3', name: 'Sacred Deity Throne', image: featuredImages[2] },
  { id: 'f4', name: 'Traditional Muthangi', image: featuredImages[3] },
];


const Home: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [modalData, setModalData] = useState<{ images: string[], index: number } | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);


  const openModal = (images: string[], index: number) => {
    setModalData({ images, index });
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalData) {
      setModalData({
        ...modalData,
        index: (modalData.index + 1) % modalData.images.length
      });
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalData) {
      setModalData({
        ...modalData,
        index: (modalData.index - 1 + modalData.images.length) % modalData.images.length
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalData) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setModalData(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalData]);

  const testimonials = [
    {
      name: "Vinay Narayana Pandit",
      location: "Verified Devotee",
      content: "The quality of the God dresses is truly divine. The Antique Gold Kunthan work gives a rich and traditional look. I am very satisfied with the timely delivery and overall service."
    },
    {
      name: "A.S. Kannan",
      location: "Verified Devotee",
      content: "Affordable pricing with excellent quality materials. The finishing of the costumes is outstanding. Highly recommended for temple needs."
    },
    {
      name: "Magudeshwaran",
      location: "Verified Devotee",
      content: "I have been purchasing regularly, and every time the products arrive on time. The durability and craftsmanship are impressive."
    },
    {
      name: "Prabanjan",
      location: "Temple Essentialist",
      content: "Perfect place for temple essentials. Everything is available with great quality and at a reasonable price."
    },
    {
      name: "Sudharson",
      location: "Professional Buyer",
      content: "Very professional service. The team ensures proper packaging and timely delivery. The products look even better than expected."
    },
    {
      name: "Mithun Chakravarthy (USA)",
      location: "International Devotee",
      content: "I ordered from the US, and the export quality is excellent. The products reached safely and on time. Truly authentic craftsmanship from Tamil Nadu."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const whyChooseUsItems = [
    {
      title: "Authentic Craftsmanship",
      desc: "Inspired by traditional Hindu aesthetics with Antique Gold Kunthan work.",
      icon: <Award className="w-6 h-6 text-primary" />
    },
    {
      title: "Premium Materials",
      desc: "High-quality synthetic fabrics designed to retain color and shine.",
      icon: <ShieldCheck className="w-6 h-6 text-secondary" />
    },
    {
      title: "Temple Solutions",
      desc: "Everything needed for temples and ceremonies in one sacred place.",
      icon: <Sparkles className="w-6 h-6 text-tertiary" />
    },
    {
      title: "Affordable Pricing",
      desc: "Budget-friendly transparency. Devotion should be accessible to all.",
      icon: <IndianRupee className="w-6 h-6 text-primary" />
    },
    {
      title: "On-Time Delivery",
      desc: "Timely processing and safe packaging for all your religious needs.",
      icon: <Clock className="w-6 h-6 text-secondary" />
    },
    {
      title: "Tamil Nadu Heritage",
      desc: "Proudly manufactured in the hub of temple artistry and tradition.",
      icon: <Factory className="w-6 h-6 text-tertiary" />
    },
    {
      title: "Export Quality",
      desc: "Meeting global standards, bringing craftsmanship to devotees worldwide.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Customer First",
      desc: "Quality assurance and responsive support for long-term global trust.",
      icon: <ThumbsUp className="w-6 h-6 text-secondary" />
    }
  ];

  return (
    <div className="overflow-hidden bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100dvh-40px)] md:h-auto md:min-h-[80vh] flex items-center justify-center overflow-x-hidden pt-6 md:pt-24 pb-8 md:pb-16 mt-0 md:mt-0">
        <div className="absolute inset-0 radial-sanctuary dark:hero-dark-bg opacity-30 dark:opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background dark:via-transparent dark:to-background/80"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20 items-center relative z-10 h-full">
          {/* Image carousel first on mobile */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center relative h-[440px] md:h-[620px] w-full max-w-3xl perspective-1000 z-10 mx-auto md:ml-auto md:mr-0 order-1 md:order-2 -mt-4 md:mt-0"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {heroImages.map((src, i) => {
                const diff = (i - currentHeroIndex + heroImages.length) % heroImages.length;
                let position: 'center' | 'left' | 'right' | 'hidden' = 'hidden';
                
                if (diff === 0) position = 'center';
                else if (diff === 1) position = 'right';
                else if (diff === heroImages.length - 1) position = 'left';

                const variants = {
                  center: { 
                    x: 0, 
                    scale: 1, 
                    zIndex: 30, 
                    opacity: 1, 
                    rotateY: 0,
                    filter: 'blur(0px) brightness(1)'
                  },
                  left: { 
                    x: '-25%', 
                    scale: 0.85, 
                    zIndex: 20, 
                    opacity: 0.4, 
                    rotateY: 20,
                    filter: 'blur(2px) brightness(0.7)'
                  },
                  right: { 
                    x: '25%', 
                    scale: 0.85, 
                    zIndex: 20, 
                    opacity: 0.4, 
                    rotateY: -20,
                    filter: 'blur(2px) brightness(0.7)'
                  },
                  hidden: { 
                    x: 0, 
                    scale: 0.5, 
                    zIndex: 10, 
                    opacity: 0, 
                    rotateY: 0,
                    filter: 'blur(10px) brightness(0)'
                  }
                };

                return (
                  <motion.div
                    key={i}
                    animate={position}
                    variants={variants}
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.4, 0, 0.2, 1] 
                    }}
                    className="absolute w-[280px] h-[390px] xs:w-[300px] xs:h-[420px] sm:w-[340px] sm:h-[480px] md:w-[400px] md:h-[560px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-2 border-tertiary/30 shadow-[0_30px_70px_rgba(0,0,0,0.6)] bg-surface-container-low"
                  >
                    <img 
                      src={src} 
                      className="w-full h-full object-cover select-none pointer-events-none" 
                      alt={`Sacred Artwork ${i + 1}`} 
                      draggable={false}
                    />
                    
                    {/* Inner highlight for premium feel */}
                    <div className="absolute inset-0 border border-white/10 rounded-[2.2rem] md:rounded-[2.5rem] pointer-events-none" />
                    
                    {/* Bottom pulse glow for center image */}
                    {position === 'center' && (
                      <motion.div 
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-tertiary/40 to-transparent pointer-events-none"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Content second on mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex md:block flex-col space-y-4 md:space-y-6 max-w-2xl relative z-30 p-0 md:pl-0 text-left md:text-left shadow-none lg:translate-x-24 xl:translate-x-48 order-2 md:order-1 mt-4 md:mt-0 mb-20 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-serif-title font-bold leading-tight tracking-tighter text-on-surface">
              Bringing Tradition <br />
              into a <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">new era</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Crafting divine attire for Hindu deities with modern precision and timeless devotion. Experience the elegance of Antique Gold Kunthan work with premium quality materials.
            </p>
            <div className="flex gap-4 justify-start md:justify-start">
              <Link to="/products" className="flex-1 max-w-[200px] md:max-w-none md:flex-none">
                <button className="w-full px-4 md:px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-tertiary text-on-tertiary font-bold text-base md:text-lg hover:scale-[1.05] transition-all active:scale-95 shadow-[0_0_30px_rgba(255,180,168,0.15)] cursor-pointer whitespace-nowrap">
                  Explore Products
                </button>
              </Link>
              <Link to="/about" className="flex-1 max-w-[200px] md:max-w-none md:flex-none">
                <button className="w-full px-4 md:px-8 py-3.5 rounded-full border-2 border-primary/20 dark:border-outline-variant/30 text-primary dark:text-on-surface font-bold text-base md:text-lg hover:bg-primary/5 dark:hover:bg-surface-bright/40 transition-all cursor-pointer shadow-sm whitespace-nowrap">
                  About Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-8 md:py-16 bg-surface-container-low/40 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-10 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
            >
              Our Specialties
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-headline font-bold text-on-surface"
            >
              Product Categories
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 60 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-10">
            {productCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className={`group cursor-pointer ${i === 4 ? 'col-span-2 sm:col-span-1 lg:col-span-1 mx-auto w-1/2 sm:w-full' : ''}`}
              >
                <Link to="/products" className="block relative group">
                  {/* Background Pulse Glow Layer */}
                  <motion.div 
                    animate={{ 
                      opacity: [0.1, 0.4, 0.1],
                      scale: [0.9, 1.1, 0.9]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-primary/20 blur-[30px] rounded-full pointer-events-none z-0 dark:hidden"
                  />
                  
                  <div className="glare-card relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 shadow-xl transition-all duration-500 group-hover:shadow-primary/20 border border-primary/20 dark:border-outline-variant/10 glow-maroon-pulse dark:[animation:none] dark:shadow-none backdrop-blur-md bg-surface-container-low/40 z-10">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                      <span className="text-primary font-bold text-xs tracking-widest uppercase">Explore Items</span>
                    </div>
                  </div>
                  <h3 className="text-center font-headline font-bold text-sm md:text-base text-on-surface-variant dark:text-white group-hover:text-primary transition-colors leading-tight">
                    {cat.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Products Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-10 md:py-20 bg-surface-container-low/20 backdrop-blur-xl relative overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-14 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
            >
              Curated Products
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-headline font-bold text-on-surface"
            >
              Featured Products
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer w-full max-w-[260px] md:max-w-[280px] mx-auto"
                onClick={() => openModal(featuredImages, i)}
              >
                <div className="relative group">
                  {/* Background Pulse Glow Layer */}
                  <motion.div 
                    animate={{ 
                      opacity: [0.1, 0.4, 0.1],
                      scale: [0.9, 1.1, 0.9]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-4 bg-primary/20 blur-[30px] rounded-full pointer-events-none z-0 dark:hidden"
                  />
                  
                  {/* Product Image Box */}
                  <div className="glare-card relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 shadow-xl transition-all duration-500 group-hover:shadow-primary/20 border border-primary/20 dark:border-outline-variant/10 glow-maroon-pulse dark:[animation:none] dark:shadow-none backdrop-blur-md bg-surface-container-low/40 p-2 z-10">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-2xl" 
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                      <div className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-on-tertiary transition-colors shadow-lg">
                        View Photo
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-1 text-center md:text-left px-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-tertiary">Exclusive</span>
                      <span className="text-on-surface-variant text-[8px]">Featured Artifact</span>
                    </div>
                    <h3 className="text-sm md:text-base font-headline font-bold text-on-surface dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-10 md:py-20 bg-surface-container-low/30 relative overflow-hidden border-y border-outline-variant/10 dark:border-none"
      >
        <div className="container mx-auto px-8 relative z-10 mb-12">
          <div className="text-center space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
            >
              Our Commitment
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-headline font-bold text-on-surface"
            >
              Why Choose Us
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary to-tertiary mx-auto rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 max-w-6xl mx-auto px-6 md:px-8">
          {/* Left Column - First 4 items */}
          <div className="space-y-10 md:space-y-12">
            {whyChooseUsItems.slice(0, 4).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                className="flex items-start gap-4 md:gap-6"
              >
                <div className="shrink-0 mt-1 p-2.5 md:p-3 bg-surface-container rounded-2xl shadow-sm">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface dark:text-white mb-1.5 md:mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Remaining 4 items */}
          <div className="space-y-10 md:space-y-12">
            {whyChooseUsItems.slice(4).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                className="flex items-start gap-4 md:gap-6"
              >
                <div className="shrink-0 mt-1 p-2.5 md:p-3 bg-surface-container rounded-2xl shadow-sm">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-headline font-bold text-on-surface dark:text-white mb-1.5 md:mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section - Redesigned */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-10 md:py-24 bg-surface-container-low/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold tracking-[0.3em] uppercase text-[10px] inline-block"
            >
              Testimonials
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold text-on-surface">What Our Clients Say</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Names List */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-4 lg:pb-0 px-1">
              {testimonials.map((t, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  onMouseEnter={() => setActiveTestimonial(i)}
                  className={`group relative flex items-center gap-3 p-3 md:p-3.5 rounded-xl transition-all duration-500 text-left border-none focus:outline-none shrink-0 lg:shrink-1 ${
                    activeTestimonial === i 
                    ? 'bg-primary shadow-xl shadow-primary/20 lg:-translate-x-4' 
                    : 'bg-surface-container hover:bg-surface-container-high'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >

                  <div className="whitespace-nowrap lg:whitespace-normal">
                    <h4 className={`font-headline font-bold text-xs md:text-sm transition-colors ${
                      activeTestimonial === i ? 'text-white' : 'text-on-surface'
                    }`}>
                      {t.name}
                    </h4>
                    <p className={`text-[8px] md:text-[10px] uppercase tracking-widest transition-colors ${
                      activeTestimonial === i ? 'text-white/70' : 'text-on-surface-variant'
                    }`}>
                      {t.location}
                    </p>
                  </div>
                  
                  {activeTestimonial === i && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="hidden lg:block absolute right-4 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Side: Active Testimonial Content */}
            <div className="lg:col-span-8 relative min-h-[300px] flex items-center">
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] blur-3xl opacity-50 z-0"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative z-10 w-full bg-stone-900 dark:bg-stone-900/80 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
                >
                  <Star className="text-tertiary mb-4 w-8 h-8 fill-tertiary/20" strokeWidth={1} />
                  
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={20} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-2xl font-headline italic font-bold text-white leading-tight mb-6">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">

                    <div>
                      <h3 className="text-xl font-headline font-bold text-white">
                        {testimonials[activeTestimonial].name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold">
                        {testimonials[activeTestimonial].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 1000+ Happy Customers Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 md:mt-24 pt-12 border-t border-primary/5 text-center"
          >
            <div className="flex flex-col items-center gap-6">

              <h3 className="text-3xl md:text-5xl font-headline font-bold text-on-surface">
                <span className="text-primary font-black"><CountingNumber value={1000} />+</span> Happy Customers Worldwide
              </h3>
              <p className="text-on-surface-variant max-w-xl mx-auto font-light leading-relaxed">
                Join our sacred community of devotees and temples who trust us for their most divine requirements. Quality craftsmanship delivered globally.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 md:py-20 mt-10 md:mt-16 relative overflow-hidden bg-primary border-t border-primary-container"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 px-8">
          <motion.div
             initial={{ opacity: 0, scale: 0.9, y: 30 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <MessageCircle className="text-tertiary mx-auto mb-6 w-12 h-12" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-primary mb-6 leading-tight">
              Join Our Sacred Community
            </h2>
            <p className="text-on-primary/80 text-lg mb-8 max-w-xl mx-auto">
              Stay updated on new designs and traditional artistry previews.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="https://wa.me/919489686435"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto sm:mx-0 cursor-pointer"
              >
                <MessageCircle size={20} />
                Join WhatsApp Group
              </motion.a>
              <Link to="/products">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base transition-all cursor-pointer"
                >
                  View Collection
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Image Modal/Popup */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/40 backdrop-blur-3xl"
          >
            {/* Close Button - Premium Glassmorphic Design */}
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setModalData(null)}
              className="fixed top-6 right-6 md:top-12 md:right-12 z-[110] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-primary text-white rounded-full transition-all backdrop-blur-xl border border-white/20 shadow-2xl group cursor-pointer"
              aria-label="Close"
            >
              <X size={24} className="md:w-7 md:h-7 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Navigation Buttons for Carousel */}
            <div className="fixed inset-y-0 left-4 md:left-12 flex items-center z-[105]">
              <button 
                onClick={prevImage}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md border border-white/10 group active:scale-90"
              >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="fixed inset-y-0 right-4 md:right-12 flex items-center z-[105]">
              <button 
                onClick={nextImage}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-md border border-white/10 group active:scale-90"
              >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Pagination Indicator */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[105] flex gap-2">
              {modalData.images.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 transition-all duration-500 rounded-full ${modalData.index === i ? 'w-8 bg-primary' : 'w-2 bg-white/30'}`}
                />
              ))}
            </div>

            <motion.div
              key={modalData.index}
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center cursor-zoom-out"
              onClick={() => setModalData(null)}
            >
              <img 
                src={modalData.images[modalData.index]} 
                alt="Product Full View" 
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-[1.5rem] shadow-[0_0_80px_rgba(255,180,168,0.15)] border border-white/5"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
