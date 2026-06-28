import { motion } from "framer-motion";

const METRICS_DATA = [
  { value: "10", label: "Pessoas Atendidas" },
  { value: "98%", label: "Taxa de Satisfação" },
  { value: "1,5K+", label: "Pessoas Alcançadas" },
  { value: "R$ 12+", label: "Projetos entregue" },
];

export default function Metrics() {
  return (
    <section className="relative bg-[#080808] py-10">
      <div className="mx-auto max-w-[1200px] px-6">
        
        {/* Inset rounded container for the horizontal metrics list */}
        <div className="relative z-10 rounded-3xl border border-white/5 bg-[#0c0c0c] py-10 px-8 md:px-16 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            {METRICS_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full flex flex-col items-center justify-center ${
                  index > 0 ? "pt-6 md:pt-0 md:pl-4" : ""
                }`}
              >
                {/* Neon green metric values */}
                <span
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#A4FF3F]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.value}
                </span>
                <span className="mt-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
