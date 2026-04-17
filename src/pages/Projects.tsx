import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Ancient Mural Restoration",
      client: "Madurai Temple Trust",
      description: "Sacred murals restored with traditional natural pigments, preserving the divinity for future generations.",
      image: "/assets/temple_mural_project_1776277757919.png",
      span: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
      tag: "HERITAGE"
    },
    {
      title: "Royal Wedding Collection",
      client: "Private Heirloom",
      description: "Bespoke gold jewelry and traditional attire designed for a grand heritage wedding ceremony.",
      image: "/assets/wedding_jewelry_project_1776277779440.png",
      span: "md:col-span-2 lg:col-span-2 lg:row-span-1",
      tag: "WEDDING"
    },
    {
      title: "Golden Deity Ornaments",
      client: "Sacred Shrine Society",
      description: "Intricately hand-crafted gold-plated ornaments for temple deities.",
      image: "/assets/deity_ornaments_project_1776277797412.png",
      span: "col-span-1 lg:col-span-1 lg:row-span-1",
      tag: "SACRED"
    },
    {
      title: "Silk Muthangi Robe",
      client: "Festival Commission",
      description: "Exquisite hand-embroidered deity vestments featuring traditional Muthangi work.",
      image: "/assets/deity_robe_project_1776277816056.png",
      span: "col-span-1 lg:col-span-1 lg:row-span-1",
      tag: "ARTISTRY"
    },
    {
      title: "Grand Festival Backdrop",
      client: "Annual Mahotsavam",
      description: "Full-scale ornamental backdrop design for significant temple festivals and celebrations.",
      image: "/assets/festival_backdrop_project_1776277838220.png",
      span: "md:col-span-2 lg:col-span-2 lg:row-span-1",
      tag: "FESTIVAL"
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20 px-5 md:px-6 max-w-7xl mx-auto min-h-screen">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`relative group rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-outline-variant/10 shadow-xl ${project.span}`}
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
            <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-end">
              <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-white">
                    {project.tag}
                </span>
                <h3 className="text-xl md:text-2xl font-headline font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="hidden md:block text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
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
    </div>
  );
};

export default Projects;
