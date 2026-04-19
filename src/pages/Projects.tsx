import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [modalData, setModalData] = useState<{ index: number } | null>(null);

  const projectList = [
    {
      title: "Full Muthangi",
      client: "Sri Venkateshwara Temple, Bangalore",
      description: "A magnificent full pearl vestment (Muthangi) crafted with intricate detail for the presiding deity.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.03 PM (1).jpeg",
      span: "md:col-span-2 md:row-span-2",
      tag: "SACRED"
    },
    {
      title: "Synthetic Rathna Kavasam",
      client: "Sri Thyagaraja Swami Temple, Thiruvarur",
      description: "Exquisite synthetic gemstone armor designed for ceremonial protection and adornment.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.03 PM.jpeg",
      span: "md:col-span-1",
      tag: "HERITAGE"
    },
    {
      title: "Full Synthetic Rathna Kavasam",
      client: "Sri Subramaniya Swami Temple, Pondicherry",
      description: "Complete synthetic gem-studded armor, showcasing brilliant artistry and devotion.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.04 PM (1).jpeg",
      span: "md:col-span-1",
      tag: "ARTISTRY"
    },
    {
      title: "Synthetic Stone Work",
      client: "Sri Srinivasa Temple, Kanchipuram",
      description: "Beautifully crafted synthetic stone embellishments for temple deities and artifacts.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.04 PM (2).jpeg",
      span: "md:col-span-1",
      tag: "REGAL"
    },
    {
      title: "Synthetic Stone Work",
      client: "Sri Bhampiriyal Temple, Thoothukudi",
      description: "Intricate stone-setting work using high-quality synthetic gems for a divine appearance.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.04 PM.jpeg",
      span: "md:col-span-2",
      tag: "CRAFT"
    },
    {
      title: "Rathna Kiridam",
      client: "Sri Gandhimathi Temple, Chennai",
      description: "A majestic gem-studded crown (Kiridam) designed for the temple's main deity.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.05 PM (1).jpeg",
      span: "md:col-span-2",
      tag: "FESTIVAL"
    },
    {
      title: "Synthetic Kiridam",
      client: "Sri Kodhanda Ramar Temple, Bangalore",
      description: "Handcrafted synthetic crown featuring traditional patterns and radiant stones.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.05 PM (2).jpeg",
      span: "md:col-span-1",
      tag: "DEVOTION"
    },
    {
      title: "Synthetic Stone Work",
      client: "Sri Mariamman Temple, Bangalore",
      description: "Vibrant and durable synthetic stone work for the adornment of temple icons.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.05 PM.jpeg",
      span: "md:col-span-1",
      tag: "HEIRLOOM"
    },
    {
      title: "Synthetic Stone Work",
      client: "Sri Badrakaliamman Temple, Chennai",
      description: "Masterful application of synthetic gems to create stunning visual motifs for worship.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.06 PM (1).jpeg",
      span: "md:col-span-2 md:row-span-2",
      tag: "SYMBOLIC"
    },
    {
      title: "Synthetic Stone Work",
      client: "Sri Vishnu Durgai Temple, Chennai",
      description: "Detailed synthetic stone ornamentation reflecting sacred geometry and tradition.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.06 PM (2).jpeg",
      span: "md:col-span-1",
      tag: "TRADITION"
    },
    {
      title: "Synthetic Stone Work",
      client: "Sri Swarna Vinayagar Temple, Nagapattinam",
      description: "Elegant stone-studded decorations for the beloved Vinayagar deity.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.06 PM.jpeg",
      span: "md:col-span-1",
      tag: "MURAL"
    },
    {
      title: "Traditional Muthangi",
      client: "Sri Mahakaliamman Temple, Nagapattinam",
      description: "A classic pearl-woven vestment (Muthangi) following age-old temple traditions.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.07 PM (1).jpeg",
      span: "md:col-span-1",
      tag: "GRANDEUR"
    },
    {
      title: "Traditional Muthangi",
      client: "Sri Mela Neelayadakshi Amman Temple, Nagapattinam",
      description: "Exquisite pearl work crafted with devotion for the divine Neelayadakshi Amman.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.07 PM.jpeg",
      span: "md:col-span-2",
      tag: "EXPRESSION"
    },
    {
      title: "Traditional Muthangi",
      client: "Meenakshi Amman Temple, Paravai",
      description: "Timeless pearl artistry created for the iconic deity of the Paravai Meenakshi temple.",
      image: "/Projects pic/WhatsApp Image 2026-04-17 at 10.08.08 PM.jpeg",
      span: "md:col-span-1",
      tag: "PURITY"
    },
    {
      title: "Lord Hanuman Rathna Kavasam",
      client: "Sri Anjanya Perumal Kovil, Ooty",
      description: "A majestic full-body gemstone-studded armor (Rathna Kavasam) meticulously crafted for Lord Hanuman.",
      image: "/Projects pic/WhatsApp Image 2026-04-19 at 2.20.53 PM.jpeg",
      span: "md:col-span-2 md:row-span-1",
      tag: "CELESTIAL"
    }
  ];

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalData) {
      setModalData({
        index: (modalData.index + 1) % projectList.length
      });
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (modalData) {
      setModalData({
        index: (modalData.index - 1 + projectList.length) % projectList.length
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

  return (
    <div className="pt-14 md:pt-32 pb-20 px-5 md:px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="text-tertiary w-5 h-5 animate-pulse" />
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">Our Masterpieces</span>
          <Sparkles className="text-tertiary w-5 h-5 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-6">Signature Projects</h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          A showcase of our most prestigious commissions, where traditional craftsmanship meets timeless devotion.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] md:auto-rows-[450px] gap-6 md:gap-8">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-outline-variant/10 shadow-xl cursor-pointer ${project.span}`}
            onClick={() => setModalData({ index: i })}
          >
            {/* Image Container */}
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 p-8 md:p-10 flex flex-col justify-end">
              <div className="space-y-3 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-white">
                  {project.tag}
                </span>
                <h3 className="text-xl md:text-3xl font-headline font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="hidden md:block text-white/70 text-sm md:text-base line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-[10px] font-bold text-tertiary tracking-widest uppercase">{project.client}</span>
                  <ExternalLink size={14} className="text-tertiary" />
                </div>
              </div>
            </div>

            {/* Visual Flair: Border Glow on Hover */}
            <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-500 rounded-[2rem] md:rounded-[2.5rem] pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Image Modal/Popup */}
      <AnimatePresence>
        {modalData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/60 backdrop-blur-3xl"
            onClick={() => setModalData(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setModalData(null)}
              className="fixed top-6 right-6 md:top-12 md:right-12 z-[110] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-primary text-white rounded-full transition-all backdrop-blur-xl border border-white/20 shadow-2xl group cursor-pointer"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Navigation Buttons */}
            <div className="fixed inset-y-0 left-4 md:left-12 flex items-center z-[105]">
              <button
                onClick={prevImage}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-primary/40 text-white rounded-full transition-all backdrop-blur-md border border-white/10 active:scale-90"
              >
                <ChevronLeft size={32} />
              </button>
            </div>

            <div className="fixed inset-y-0 right-4 md:right-12 flex items-center z-[105]">
              <button
                onClick={nextImage}
                className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-white/10 hover:bg-primary/40 text-white rounded-full transition-all backdrop-blur-md border border-white/10 active:scale-90"
              >
                <ChevronRight size={32} />
              </button>
            </div>

            <motion.div
              key={modalData.index}
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side: Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="order-2 md:order-1 flex-1 text-center md:text-left space-y-6 bg-black/20 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 w-full"
              >
                <div className="space-y-4">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-[10px] font-bold tracking-widest text-primary-container shadow-lg">
                    {projectList[modalData.index].tag}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">
                    {projectList[modalData.index].title}
                  </h2>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="h-px w-8 bg-tertiary/50" />
                    <span className="text-sm md:text-lg font-medium text-tertiary uppercase tracking-[0.2em]">
                      {projectList[modalData.index].client}
                    </span>
                  </div>
                </div>

                <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                  {projectList[modalData.index].description}
                </p>

                {/* Count Indicator - Integrated into content on desktop */}
                <div className="flex justify-center md:justify-start gap-1.5 pt-4">
                  {projectList.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 transition-all duration-500 rounded-full ${modalData.index === i ? 'w-8 bg-primary' : 'w-1.5 bg-white/20'}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Right Side: Photo */}
              <div className="order-1 md:order-2 flex-1 relative group w-full flex justify-center items-center">
                <img
                  src={projectList[modalData.index].image}
                  alt={projectList[modalData.index].title}
                  className="max-w-full max-h-[50vh] md:max-h-[80vh] object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
                />

                {/* Decorative glow behind image */}
                <div className="absolute -inset-4 bg-primary/10 blur-[60px] rounded-full -z-10 animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
