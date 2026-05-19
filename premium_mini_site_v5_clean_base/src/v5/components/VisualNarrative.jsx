import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { Instagram, ArrowUpRight } from "lucide-react";

export const VisualNarrative = ({ business }) => {
  const { proof, name } = business;

  return (
    <V5Section id="gallery" className="bg-[#0A0A0A] v5-section-py border-y border-white/5">
      <div className="v5-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-32">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-8 text-white/40"
            >
              <Instagram size={20} />
              <span className="text-[11px] font-black uppercase tracking-[0.6em]">Visual Evidence</span>
            </motion.div>
            <h2 className="text-6xl md:text-[130px] v5-heading text-white leading-[0.8]">Artistic <br/><span className="italic text-red-600">Authority.</span></h2>
          </div>
          
          <motion.a 
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="group flex items-center gap-10 v5-glass px-12 py-10 rounded-[4.5rem] hover:bg-white hover:text-black transition-all duration-700 shadow-v5-floating"
          >
            <div className="text-left">
              <div className="text-[11px] font-black uppercase tracking-widest opacity-40">Follow Daily Story</div>
              <div className="text-3xl font-black tracking-tighter">{business.igHandle}</div>
            </div>
            <ArrowUpRight size={36} strokeWidth={3} className="opacity-20 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </div>

        {/* Asymmetric Narrative Grid - Blank Slate Design */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-12 auto-rows-[350px] md:auto-rows-[550px]">
          {proof.filter(p => p.url).map((img, index) => {
            const spanClass = 
              index === 0 ? 'col-span-2 md:col-span-8 md:row-span-1' :
              index === 1 ? 'col-span-2 md:col-span-4 md:row-span-2' :
              'col-span-2 md:col-span-8 md:row-span-1';

            return (
              <motion.div 
                key={img.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1 }}
                className={`narrative-v5-collage group overflow-hidden ${spanClass}`}
              >
                <img 
                  src={img.url} 
                  alt={`${name} Portfolio`} 
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105 grayscale hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />
                
                <div className="absolute bottom-16 left-16 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                  <div className="text-[12px] font-black uppercase tracking-[0.5em] text-red-600 mb-4">Portfolio</div>
                  <div className="text-4xl font-black text-white uppercase italic tracking-tighter leading-none">
                     {img.type === 'healed' ? 'Healed Piece' : 'Artistic Concept'}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </V5Section>
  );
};
