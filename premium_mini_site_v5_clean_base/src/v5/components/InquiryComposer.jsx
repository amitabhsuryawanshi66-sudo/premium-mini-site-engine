import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const InquiryComposer = ({ business, selectedIntent }) => {
  return (
    <V5Section id="inquiry" className="v5-section-py bg-black border-y border-white/5">
      <div className="v5-container max-w-4xl mx-auto text-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="v5-glass p-16 md:p-24 rounded-[var(--radius-v5-editorial)] text-left shadow-v5-floating"
        >
          <div className="text-[11px] font-black uppercase tracking-[0.5em] text-red-600 mb-10">Briefing Desk</div>
          <h2 className="text-4xl md:text-7xl v5-heading text-white mb-12 leading-tight uppercase">Ready to start <br/>the brief?</h2>
          
          <div className="space-y-12 mb-20">
            <div className="flex flex-col gap-4 border-l-4 border-red-600 pl-8">
               <span className="text-[11px] font-black uppercase tracking-widest text-white/30">Selected Intent</span>
               <span className="text-3xl font-black text-white uppercase tracking-tighter italic">
                 {selectedIntent || 'Custom Concept Session'}
               </span>
            </div>
            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              When you click the button, a niche-aware prefilled message will be generated for {business.name}.
            </p>
          </div>

          <a 
            href={buildWhatsAppIntent(business.phone, business.niche, selectedIntent || 'consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-v5-intent bg-white text-black w-full"
          >
            Open Brief in WhatsApp
          </a>
        </motion.div>
      </div>
    </V5Section>
  );
};
