import { motion } from "framer-motion";
import { Sparkles, Share2, Globe, PlaySquare } from "lucide-react";

const SERVICES_DATA = [
  {
    title: "Branding",
    icon: Sparkles,
    desc: "Construímos identidades visuais de alto padrão e posicionamentos de mercado que geram diferenciação imediata frente aos seus concorrentes.",
    features: ["Manual de Identidade Visual", "Logotipos Exclusivos", "Design moderno para seu negocio"],
  },
  {
    title: "Social Media",
    icon: Share2,
    desc: "Gestão completa de redes sociais com calendários editoriais estratégicos, designs autorais e copywriting com forte intenção de vendas.",
    features: ["Estratégia de Conteúdo", "Design de Grid & Carrosséis", "Conteúdo que Converte"],
  },
  {
  title: "Criação de Sites",
  icon: Globe,
  desc: "Desenvolvimento de landing pages e plataformas corporativas, seguras e totalmente otimizadas para converter visitantes em clientes.",
  features: [
    "Landing Pages",
    "Design Responsivo",
    "Alta Performance"
  ],
},
  {
    title: "Produção de Conteúdo",
    icon: PlaySquare,
    desc: "Criação de vídeos curtos, roteiros envolventes e peças visuais que elevam o profissionalismo e comunicam autoridade instantânea.",
    features: ["Roteiros Criativos", "Vídeos para Redes Sociais", "Conteúdo que converte"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#080808] py-24 md:py-36">
      {/* Background glow top right */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-0 h-[500px] w-[500px] opacity-30 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
              <span className="h-px w-8 bg-[#C9A84C]/40" />
              Serviços
            </span>
            <h2
              className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Soluções integradas para <span className="text-[#C9A84C] font-light italic">destacar</span> sua marca.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-sm leading-relaxed text-white/42"
          >
            Alinhamos design premium e estratégias de alta conversão para estruturar a presença digital ideal da sua empresa.
          </motion.p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_DATA.map((srv, index) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-2xl border border-white/5 bg-[#111111]/90 p-8 shadow-lg transition-all duration-500 hover:border-[#C9A84C]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(201,168,76,0.04)] hover:-translate-y-1.5"
              >
                {/* Accent glow on top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] w-full scale-x-0 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                {/* Icon Circle */}
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#C9A84C] transition-all duration-500 group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/5 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.2)]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3
                  className="mb-3 text-lg font-bold text-white group-hover:text-[#C9A84C] transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {srv.title}
                </h3>

                {/* Desc */}
                <p className="mb-6 flex-grow text-xs leading-relaxed text-white/72">
                  {srv.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-white/42 font-medium">
                      <span className="h-1 w-1 rounded-full bg-[#C9A84C]/60" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
