import { motion } from "framer-motion";
import { MessageSquare, Instagram } from "lucide-react";
import { buildWhatsAppIntent } from "../engine/whatsappIntentBuilder";

export const StickyDecisionBar = ({ business, selectedIntent }) => {
  const whatsappUrl = buildWhatsAppIntent(business.phone, business.niche, selectedIntent || 'consultation');

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-48px)] max-w-lg">
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 4 }}
        className="v5-glass p-3 rounded-full flex gap-3 shadow-v5-floating border border-white/20"
      >
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow flex items-center justify-center gap-5 py-6 rounded-full bg-white text-black font-black uppercase text-[11px] tracking-[0.4em] active:scale-95 transition-all shadow-v5-floating"
        >
          <MessageSquare size={20} strokeWidth={3} />
          Brief Studio
        </a>
        <a 
          href={business.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white active:scale-90 transition-all border border-white/10 hover:bg-white/20"
          aria-label="Instagram"
        >
          <Instagram size={24} />
        </a>
      </motion.div>
    </div>
  );
};
