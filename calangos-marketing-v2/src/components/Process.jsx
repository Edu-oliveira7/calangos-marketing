import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Conhecemos seu negócio",
    desc: "Entendemos como sua empresa funciona, seus objetivos e os principais desafios para encontrar as melhores oportunidades de crescimento.",
  },
  {
    num: "02",
    title: "Criamos um plano",
    desc: "Montamos uma estratégia personalizada, definindo o que será feito, em quais canais e quais resultados queremos alcançar.",
  },
  {
    num: "03",
    title: "Produzimos o conteúdo",
    desc: "Criamos os posts, vídeos, textos e o site (quando necessário), sempre alinhados à identidade da sua marca.",
  },
  {
    num: "04",
    title: "Colocamos em prática",
    desc: "Publicamos o conteúdo, lançamos as campanhas e iniciamos todas as ações planejadas para atrair mais clientes.",
  },
  {
    num: "05",
    title: "Acompanhamos os resultados",
    desc: "Monitoramos o desempenho, analisamos o que está funcionando e fazemos melhorias para gerar resultados cada vez melhores.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#0b0b0b] py-24 md:py-36">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-35 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.035) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]"
          >
            <span className="h-px w-6 bg-[#C9A84C]/40" />
            Metodologia
            <span className="h-px w-6 bg-[#C9A84C]/40" />
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Nosso processo de <span className="text-[#C9A84C] font-light italic">aceleração</span> digital.
          </motion.h2>
        </div>

        {/* Timeline Row */}
        <div className="relative mt-16">
          
          {/* Horizontal Line connecting items (only visible on lg screens) */}
          <div
            className="absolute top-10 left-[10%] right-[10%] hidden h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            aria-hidden="true"
          />

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Number Circle indicator */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/5 bg-[#111111] font-bold text-white shadow-md transition-all duration-500 group-hover:border-[#C9A84C]/40 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]">
                  {/* Glowing inner effect on hover */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/5 to-white/0 opacity-100 transition-opacity group-hover:from-[#C9A84C]/10 group-hover:to-transparent" />
                  
                  <span
                    className="text-xl font-bold tracking-tight text-[#C9A84C] group-hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="mt-6 text-base font-bold text-white group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/72 max-w-[240px] sm:max-w-none">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
