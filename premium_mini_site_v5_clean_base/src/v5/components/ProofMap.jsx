import { motion } from "framer-motion";
import { V5Section } from "./V5Section";
import { CheckCircle2, ShieldCheck, Trophy, Users } from "lucide-react";

export const ProofMap = ({ business }) => {
  const icons = {
    healed: <Trophy size={40} />,
    concept: <CheckCircle2 size={40} />,
    review: <Users size={40} />,
    default: <ShieldCheck size={40} />
  };

  return (
    <V5Section id="proof" className="v5-section-py bg-[#0A0A0A]">
      <div className="v5-container">
        <div className="mb-32">
          <h2 className="text-6xl md:text-[130px] v5-heading text-white leading-[0.8]">Evidence <br/><span className="italic text-red-600">Trail.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {business.proof.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className="card-v5-proof group hover:bg-white hover:text-black transition-all duration-700 h-full justify-between"
            >
              <div className="text-red-600 group-hover:text-black transition-colors mb-16">
                {icons[item.type] || icons.default}
              </div>
              
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.5em] text-white/30 group-hover:text-black/30 mb-4">{item.type}</div>
                <p className="text-2xl font-bold leading-tight text-white group-hover:text-black transition-colors">
                  {item.text || "Bespoke results verified in Koregaon Park studio."}
                </p>
              </div>

              {item.url && (
                <div className="mt-12 aspect-[4/3] rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-white/5 group-hover:border-black/5">
                  <img src={item.url} alt="Proof Evidence" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </V5Section>
  );
};
