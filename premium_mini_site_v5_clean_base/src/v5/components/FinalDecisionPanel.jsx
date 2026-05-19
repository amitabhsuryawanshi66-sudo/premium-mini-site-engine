import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { MessageSquare, Heart } from "lucide-react";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const FinalDecisionPanel = ({ business, selectedIntent }) => {
  const whatsappUrl = buildWhatsAppIntent(business.phone, business.niche, selectedIntent || 'availability');

  return (
    <V5Section className="bg-[#0A0A0A] v5-section-py overflow-hidden border-t border-white/5">
      <div className="v5-container">
        <div className="relative rounded-[5rem] p-16 md:p-40 overflow-hidden border border-white/5 bg-white/[0.01] flex flex-col items-center text-center">
          {/* V5 Dark Kinetic Glow */}
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-[-40%] left-[-20%] w-[100%] aspect-square rounded-full blur-[200px]"
            style={{ backgroundColor: business.theme.accent }}
          />

          <div className="relative z-10 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="v5-glass px-10 py-4 rounded-full text-[12px] font-black uppercase tracking-[0.6em] text-red-600 mb-16 border-red-600/30"
            >
              The Mark of Permanence
            </motion.div>
            
            <h2 className="text-6xl md:text-[160px] v5-heading text-white mb-20 leading-[0.75] tracking-tighter">
              Your idea <br/>is <span className="italic text-red-600">next.</span>
            </h2>
            
            <motion.a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-10 px-20 py-12 bg-white rounded-full text-black text-4xl font-black shadow-v5-floating transition-all"
            >
              Initiate
              <MessageSquare size={48} strokeWidth={3} />
            </motion.a>
          </div>

          {/* Watermark Branding */}
          <div className="absolute bottom-20 left-0 right-0 opacity-[0.03] pointer-events-none select-none">
            <div className="text-[250px] font-black uppercase tracking-tighter whitespace-nowrap overflow-hidden leading-none">
              {business.name} {business.name} {business.name}
            </div>
          </div>
        </div>
      </div>
    </V5Section>
  );
};
