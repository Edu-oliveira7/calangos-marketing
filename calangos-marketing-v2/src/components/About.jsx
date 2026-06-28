import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-[#080808] py-24 md:py-36">
      {/* Radial lighting background glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background: "radial-gradient(circle at 10% 50%, rgba(201,168,76,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Eyebrow and Section Name (occupies 4 cols on large screens) */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                <span className="h-px w-8 bg-[#C9A84C]/40" />
                Quem Somos
              </span>
              <h2
                className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                A essência do nosso <span className="text-[#C9A84C] font-light italic">trabalho</span>.
              </h2>
            </motion.div>
          </div>

          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 border-l border-white/5 pl-6 md:pl-10"
            >
              <p className="text-xl leading-relaxed text-white/72 md:text-2xl md:leading-relaxed font-light">
                A <strong className="font-semibold text-white">Calangos Marketing</strong> é uma agência especializada em fortalecer marcas através de estratégias digitais, branding, conteúdo e presença online.
              </p>
              
              <p className="text-base leading-relaxed text-white/72 md:text-lg md:leading-relaxed font-light">
                Nosso foco é ajudar empresas a conquistarem autoridade, visibilidade e crescimento sustentável através do marketing digital.
              </p>

              
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]/60">Estética & Performance</span>
                <span className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
