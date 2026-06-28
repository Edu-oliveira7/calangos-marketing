import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck } from "lucide-react";

const ITEMS = [
  {
    title: "Missão",
    icon: Target,
    content: "Transformar negócios em marcas mais relevantes através de estratégias digitais criativas e orientadas a resultados.",
  },
  {
    title: "Visão",
    icon: Eye,
    content: "Ser reconhecida como uma referência em marketing digital e posicionamento de marcas.",
  },
  {
    title: "Valores",
    icon: ShieldCheck,
    content: [
      "Transparência",
      "Criatividade",
      "Inovação",
      "Compromisso com resultados",
      "Relacionamento com clientes",
    ],
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative bg-[#0b0b0b] py-24 md:py-32">
      {/* Glow background accent */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 90% 80%, rgba(201,168,76,0.03) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            const isValores = Array.isArray(item.content);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-2.5xl border border-white/5 bg-[#111111]/85 p-8 shadow-xl transition-all duration-500 hover:border-[#C9A84C]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] hover:-translate-y-2"
              >
                {/* Gold glow top border effect on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon Container */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#C9A84C] transition-all duration-500 group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/5">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Card Title */}
                <h3
                  className="mb-4 text-xl font-bold uppercase tracking-wider text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* Card Content */}
                {isValores ? (
                  <ul className="mt-2 space-y-3">
                    {item.content.map((val, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-white/72">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                        {val}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm leading-relaxed text-white/72">
                    {item.content}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
