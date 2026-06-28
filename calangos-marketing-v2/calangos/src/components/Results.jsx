import { motion } from "framer-motion";
import marketingImg from "../assets/marketing.jpg";

const ITEMS = [
  "Planejamento Estratégico",
  "Identidade Visual",
  "Gestão de Redes Sociais",
  "Conteúdo Profissional",
];

export default function Results() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24 md:py-36">
      {/* Background glow behind text */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(164,255,63,0.025) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Copy + Checkmarks (occupies 6 columns) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#A4FF3F]">
                <span className="h-px w-8 bg-[#A4FF3F]/40" />
                Resultados
              </span>

              <h2
                className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.1]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Presença digital que gera <span className="text-[#A4FF3F] font-light italic">resultados</span> reais.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/72 md:text-lg">
                Criamos estratégias de comunicação que fortalecem marcas, aumentam o alcance e transformam seguidores em potenciais clientes.
              </p>

              {/* Checkmark List */}
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 w-full">
                {ITEMS.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm font-medium text-white/85"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#A4FF3F]/10 text-[#A4FF3F] text-xs font-bold shadow-[0_0_10px_rgba(164,255,63,0.1)]">
                      ✓
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Image with depth & gold border (occupies 6 columns) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer soft gold glow shadow */}
              <div
                className="pointer-events-none absolute -inset-4 z-0 rounded-[2rem] opacity-30 blur-[30px]"
                style={{
                  background: "radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Main Image frame */}
              <div className="relative overflow-hidden rounded-2.5xl border border-white/10 bg-[#111111] p-1.5 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl border border-white/5 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
                <img
                  src={marketingImg}
                  alt="Metodologia de marketing digital de alta performance"
                  className="w-full rounded-2xl object-cover aspect-[4/3] filter contrast-[1.03] brightness-[0.94]"
                />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
