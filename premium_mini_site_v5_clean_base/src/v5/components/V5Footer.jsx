import { ArrowUpRight } from "lucide-react";

export const V5Footer = ({ business }) => {
  return (
    <footer className="bg-black py-32 border-t border-white/5">
      <div className="v5-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="flex flex-col items-center md:items-start gap-6">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">{business.name}</h2>
            <div className="flex flex-col md:flex-row items-center gap-4 text-slate-600 font-bold text-sm uppercase tracking-widest">
              <span>© 2024 {business.name}.</span>
              <span className="hidden md:block opacity-20">|</span>
              <span className="text-red-950 font-black">Premium Mini Site V5 — Niche Engine Build</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-slate-500 text-xs font-black uppercase tracking-[0.4em]">
            Bespoke Engineering
            <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
            Pune Core
            <ArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};
