import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { ArrowRight, Info, Zap } from "lucide-react";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const InteractiveOfferBoard = ({ business, playbook }) => {
  return (
    <V5Section id="offers" className="v5-section-py">
      <div className="v5-container">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-32">
           <div className="max-w-5xl">
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="flex items-center gap-4 mb-10 text-red-500"
             >
               <Zap size={20} fill="currentColor" />
               <span className="text-[12px] font-black uppercase tracking-[0.5em]">Service Briefing</span>
             </motion.div>
             <h2 className="text-6xl md:text-[130px] v5-heading">Niche <br/><span className="italic" style={{ color: business.theme.accent }}>Specialization.</span></h2>
           </div>
           <p className="text-2xl v5-body max-w-sm italic opacity-40">
             Choose the artistic path that aligns with your vision. Precision focused.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {business.offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="card-v5-decision flex flex-col h-full group"
            >
              <div className="flex justify-between items-start mb-14">
                <h3 className="text-4xl font-black uppercase tracking-tighter text-white group-hover:text-red-500 transition-colors leading-[0.85]">{offer.title}</h3>
                <div className="px-4 py-2 rounded-lg bg-white/5 text-[10px] font-black uppercase tracking-widest text-white/40">{offer.time}</div>
              </div>

              <div className="mb-14 p-10 bg-white/[0.03] rounded-[3rem] border border-white/5">
                <div className="text-[11px] font-black uppercase tracking-[0.4em] text-white/30 mb-4">Investment Anchor</div>
                <div className="text-5xl font-black text-white">{offer.price}</div>
              </div>

              <div className="flex-grow space-y-10 mb-20">
                 <div>
                    <div className="flex items-center gap-4 text-red-600 mb-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-current" />
                       <span className="text-[12px] font-black uppercase tracking-[0.3em]">{offer.bestFor}</span>
                    </div>
                    <p className="text-xl font-medium text-slate-500 leading-relaxed">
                       {offer.desc || "Bespoke session logic tailored for high-contrast results."}
                    </p>
                 </div>
              </div>

              <motion.a 
                href={buildWhatsAppIntent(business.phone, business.niche, 'pricing')}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.95 }}
                className="btn-v5-intent bg-white text-black w-full"
              >
                Inquire Price
                <ArrowRight size={28} strokeWidth={3} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </V5Section>
  );
};
