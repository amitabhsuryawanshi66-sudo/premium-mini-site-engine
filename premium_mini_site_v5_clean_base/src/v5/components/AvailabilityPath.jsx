import { motion } from "framer-motion";
import { V5Section } from "./V5Section";

export const AvailabilityPath = ({ playbook }) => {
  return (
    <V5Section id="booking" className="v5-section-py bg-white border-t border-slate-100">
      <div className="v5-container">
        <div className="text-center mb-40">
           <h2 className="text-6xl md:text-[130px] v5-heading text-black leading-[0.8]">Booking <br/><span className="italic text-red-600">Protocol.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {(playbook.steps || [
            { title: "Brief Idea", detail: "Share concept via WhatsApp." },
            { title: "Finalize Date", detail: "Secure slot with deposit." },
            { title: "The Session", detail: "Artistry day in KP studio." }
          ]).map((step, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative"
            >
              <div className="text-[180px] font-black text-slate-50 leading-none absolute -top-24 -left-10 select-none -z-10">{idx + 1}</div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter text-black">{step.title}</h3>
                <p className="text-2xl body-v2 text-slate-500 font-medium leading-relaxed max-w-sm">{step.detail || step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </V5Section>
  );
};
