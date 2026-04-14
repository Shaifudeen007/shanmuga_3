import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { Heart, X, Award, ShieldCheck, Sparkles, IndianRupee, Clock, Factory, Globe, ThumbsUp, Star, MessageCircle } from 'lucide-react';

const heroImages = [
  '/assets/hero-new-1.jpg',
  '/assets/hero-new-2.jpg',
  '/assets/hero-new-3.jpg',
  '/assets/hero-new-4.jpg',
];

const CountingNumber: React.FC<{ value: number }> = ({ value }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (countRef.current) countRef.current.textContent = Math.round(latest).toLocaleString();
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={countRef}>0</span>;
};

const Home: React.FC = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
              Discover a sanctuary of curated clip arts, where ancient aesthetics are reimagined for the luminous age. Each product is a testament to digital craftsmanship.
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

      {/* Product Categories Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-surface-container-low/30 relative overflow-hidden"
      >
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-12 space-y-4">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
            {[
              { name: 'Traditional Muthangi work', image: '/assets/cat-1.jpg' },
              { name: 'Crown', image: '/assets/cat-2.jpg' },
              { name: 'Rathana Kavasam', image: '/assets/cat-3.jpg' },
              { name: 'Rajaalangaram', image: '/assets/cat-4.jpg' },
              { name: 'Velvet Stone work', image: '/assets/cat-5.png' },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="glare-card relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 shadow-xl transition-all duration-500 group-hover:shadow-primary/20 border border-outline-variant/10">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase">Explore Category</span>
                  </div>
                </div>
                <h3 className="text-center font-headline font-bold text-sm md:text-base text-on-surface-variant group-hover:text-primary transition-colors leading-tight">
                  {cat.name}
                </h3>
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
        className="py-24 bg-background relative overflow-hidden"
      >
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
            >
              Curated Collections
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

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { id: 1, name: 'Sacred Peacock Crown', image: '/assets/p1.jpg' },
              { id: 2, name: 'Pearl Velvet Ornaments', image: '/assets/p2.jpg' },
              { id: 3, name: 'Divine Gold Kavacham', image: '/assets/p3.jpg' },
              { id: 4, name: 'Royal Velvet Alankaram', image: '/assets/p4.jpg' }
            ].map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer w-[calc(50%-1.5rem)] md:w-[calc(33.33%-2.5rem)] lg:w-[calc(20%-2.5rem)]"
                onClick={() => setSelectedImage(product.image)}
              >
                {/* Product Image Box */}
                <div className="glare-card relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 shadow-xl transition-all duration-500 group-hover:shadow-primary/20 border border-outline-variant/10">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                    <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-bold text-[10px] tracking-widest uppercase hover:bg-tertiary hover:text-on-tertiary transition-colors shadow-lg">
                      View Product
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1 text-center md:text-left px-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-tertiary">Limited</span>
                    <span className="text-on-surface-variant text-[8px]">Artifact {product.id}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-headline font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-on-surface-variant/70 text-[10px] font-light">
                    Hand-crafted digital essence.
                  </p>
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
        className="py-24 bg-surface-container-low/30 relative overflow-hidden border-y border-outline-variant/10 dark:border-none"
      >
        <div className="container mx-auto px-8 relative z-10 mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto px-8">
          {/* Left Column - First 4 items */}
          <div className="space-y-12">
            {whyChooseUsItems.slice(0, 4).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 mt-1 p-3 bg-surface-container rounded-2xl shadow-sm">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-headline font-bold text-on-surface dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Remaining 4 items */}
          <div className="space-y-12">
            {whyChooseUsItems.slice(4).map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 mt-1 p-3 bg-surface-container rounded-2xl shadow-sm">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-headline font-bold text-on-surface dark:text-white mb-2">{item.title}</h3>
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
        className="py-32 bg-surface-container-low/50 relative overflow-hidden"
      >
        <div className="container mx-auto px-8 relative z-10">
          <div className="text-center mb-20 space-y-4">
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
            <div className="lg:col-span-4 flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  onMouseEnter={() => setActiveTestimonial(i)}
                  className={`group relative flex items-center gap-3 p-3.5 rounded-xl transition-all duration-500 text-left border-none focus:outline-none ${
                    activeTestimonial === i 
                    ? 'bg-primary shadow-xl shadow-primary/20 -translate-x-2 lg:-translate-x-4' 
                    : 'bg-surface-container hover:bg-surface-container-high'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                    activeTestimonial === i ? 'bg-white text-primary' : 'bg-primary/10 text-primary'
                  }`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-headline font-bold text-sm transition-colors ${
                      activeTestimonial === i ? 'text-white' : 'text-on-surface'
                    }`}>
                      {t.name}
                    </h4>
                    <p className={`text-[10px] uppercase tracking-widest transition-colors ${
                      activeTestimonial === i ? 'text-white/70' : 'text-on-surface-variant'
                    }`}>
                      {t.location}
                    </p>
                  </div>
                  
                  {activeTestimonial === i && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="absolute right-4 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]"
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
                  className="relative z-10 w-full bg-white dark:bg-stone-900/40 backdrop-blur-md p-6 md:p-10 rounded-3xl border-none shadow-2xl"
                >
                  <Star className="text-tertiary mb-4 w-8 h-8 fill-tertiary/20" strokeWidth={1} />
                  
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={20} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg md:text-2xl font-headline italic font-bold text-primary leading-tight mb-6">
                    "{testimonials[activeTestimonial].content}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-outline-variant/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold border-2 border-primary/20">
                      {testimonials[activeTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-headline font-bold text-on-surface">
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
            className="mt-32 pt-16 border-t border-primary/5 text-center"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="flex -space-x-4 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-surface-container flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Customer" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-background bg-primary flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-primary/30">
                  +1k
                </div>
              </div>
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
        className="py-20 relative overflow-hidden bg-primary border-t border-primary-container"
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
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-base transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto sm:mx-0"
              >
                <MessageCircle size={20} />
                Join WhatsApp Group
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base transition-all"
              >
                View Collection
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Image Modal/Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 -right-0 md:-right-12 text-white hover:text-primary transition-colors cursor-pointer p-2"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Product Full View" 
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl shadow-primary/20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
