import { motion } from "framer-motion";
import { v5Spring } from "../utils/motion";

export const DecisionDock = ({ onSelectIntent }) => {
  const options = [
    { label: "Book Consultation", action: "consultation", badge: "Direct" },
    { label: "Price Estimate", action: "pricing" },
    { label: "Check Availability", action: "availability" }
  ];

  return (
    <div className="v5-thumb-dock no-scrollbar overflow-x-auto">
      <div className="flex gap-2 w-full">
        {options.map((opt, idx) => (
          <button
            key={opt.action}
            onClick={() => onSelectIntent(opt.action)}
            className={`px-8 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap transition-all active:scale-95 flex items-center gap-3
              ${idx === 0 ? 'bg-white text-black shadow-v5-ink' : 'bg-white/10 text-white/40 border border-white/5'}
            `}
          >
            {idx === 0 && <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />}
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};
