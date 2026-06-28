import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    quote: "Adorei o design que fizeram para meu perfil no Instagram. Ficou muito mais profissional.",
    author: "Teodoro Fonseca",
    
  },
  {
    quote: "O atendimento foi excelente e o resultado superou minhas expectativas.",
    author: "Bruno Ramos",
    
  },
  {
    quote: "Minha marca ganhou muito mais credibilidade depois do trabalho realizado.",
    author: "Cláudia Mendes",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#080808] py-24 md:py-36">
      {/* Background glow bottom-left */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-0 h-[400px] w-[400px] opacity-25 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
            <span className="h-px w-6 bg-[#C9A84C]/40" />
            Depoimentos
            <span className="h-px w-6 bg-[#C9A84C]/40" />
          </span>
          <h2
            className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A palavra de quem cresce <span className="text-[#C9A84C] font-light italic">conosco</span>.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS_DATA.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between rounded-2.5xl border border-white/5 bg-[#111111]/80 p-8 shadow-lg transition-all duration-500 hover:border-[#C9A84C]/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:-translate-y-1.5"
            >
              {/* Stars header */}
              <div>
                <div className="flex items-center gap-1 mb-6 text-[#C9A84C]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-[#C9A84C]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base italic leading-relaxed text-white/85">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 border-t border-white/5 pt-5 flex flex-col">
                <span
                  className="text-sm font-bold text-white group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {t.author}
                </span>
                <span className="text-xs text-white/42 mt-0.5">
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
