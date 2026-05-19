import { motion, useReducedMotion } from "framer-motion";
import { v5Stagger } from "../utils/motion";
import { ArrowUpRight, MapPin, ShieldCheck } from "lucide-react";

export const IntentHero = ({ business, playbook }) => {
  const shouldReduce = useReducedMotion();
  
  return (
    <section className="relative min-h-[98svh] lg:min-h-screen flex flex-col justify-center v5-container pt-32 pb-24 overflow-hidden">
      {/* Editorial Depth Layer */}
      <div className="absolute top-0 right-0 w-full h-full -z-10 pointer-events-none opacity-[0.12]">
        <div 
          className="absolute top-[-20%] right-[-10%] w-[90%] aspect-square rounded-full blur-[160px]" 
          style={{ backgroundColor: business.theme.accent }} 
        />
      </div>

      <motion.div 
        variants={v5Stagger.container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-end relative z-10"
      >
        {/* Content Column */}
        <div className="lg:col-span-8">
          <motion.div variants={v5Stagger.item(shouldReduce)} className="mb-14">
            <span className="v5-glass px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.5em] text-white/50 inline-flex items-center gap-4 border border-white/5 shadow-v5-inner">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: business.theme.accent }} />
              {business.hero.badge}
            </span>
          </motion.div>

          <motion.h1 
            variants={v5Stagger.item(shouldReduce)}
            className="text-6xl sm:text-8xl lg:text-[160px] v5-heading mb-16 leading-[0.78]"
            dangerouslySetInnerHTML={{ __html: business.hero.headline }}
          />

          <motion.div variants={v5Stagger.item(shouldReduce)} className="flex flex-col md:flex-row items-start md:items-center gap-12">
             <a 
              href={`https://wa.me/${business.phone}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-v5-intent bg-white text-black group"
            >
              {playbook.primaryCTA}
              <ArrowUpRight size={32} strokeWidth={3} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            <div className="flex flex-col gap-3">
               <div className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.5em] text-white opacity-40">
                 <MapPin size={16} />
                 {business.location}
               </div>
               <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-sm leading-snug">
                 {business.hero.subheadline}
               </p>
            </div>
          </motion.div>
        </div>

        {/* Tactical Image Mask - Asymmetric Composition */}
        <div className="lg:col-span-4 relative hidden lg:block pb-12">
           <motion.div 
             variants={v5Stagger.item(shouldReduce)}
             className="relative aspect-[3/4.5] rounded-[var(--radius-v5-editorial)] overflow-hidden shadow-v5-floating border border-white/5"
           >
             <img src={business.hero.image} alt={business.name} className="w-full h-full object-cover grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
           </motion.div>

           <motion.div
             variants={v5Stagger.item(shouldReduce)}
             className="absolute -bottom-6 -left-24 v5-glass p-10 rounded-[3rem] shadow-v5-floating max-w-[280px] border border-white/10"
           >
             <ShieldCheck className="mb-6 text-red-500" size={40} />
             <div className="text-3xl font-black mb-2 uppercase tracking-tighter text-white">Pune Protocol</div>
             <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 leading-relaxed">
                Hospital-grade sterilization strictly enforced in Koregaon Park studio.
             </p>
           </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
