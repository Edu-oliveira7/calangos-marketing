import { ArrowUpRight } from "lucide-react"
import FadeUp from "./FadeUp"

const SERVICES = [
  {
    tag: "Social Media",
    title: "Conteúdo estratégico para atrair, engajar e vender.",
    copy: "Planejamento editorial, direção criativa e narrativa de marca para transformar seu perfil em um canal de autoridade e geração de vendas.",
    list: ["Direção de conteúdo e narrativa", "Presença que gera autoridade de verdade"],
    featured: true,
    offset: false,
  },
  {
    tag: "Design",
    title: "Design que comunica valor já no primeiro olhar.",
    copy: "Identidade visual, direção de arte e materiais que deixam sua empresa mais forte, confiável e memorável.",
    list: ["Identidade visual premium", "Peças com unidade e personalidade"],
    featured: false,
    offset: true,
  },
  {
    tag: "Websites",
    title: "Páginas pensadas para orientar, convencer e converter.",
    copy: "Sites e landing pages que unem estética e estratégia para facilitar a decisão e aumentar a conversão.",
    list: ["Landing pages de alta resposta", "Sites institucionais com peso de marca", "UX com foco em clareza"],
    featured: false,
    offset: false,
  },
]

export default function Servicos() {
  return (
    <section id="servicos" className="bg-ink/85 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <FadeUp className="mb-16">
          <span className="eyebrow mb-6 block">Serviços principais</span>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <h2 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Escolhemos as alavancas certas para sua marca ser lembrada e comprada.
            </h2>
            <p className="text-lg leading-8 text-white/60">
              Cada serviço entra para resolver um ponto de atrito claro. Nada de pacote inflado só para parecer grande.
            </p>
          </div>
        </FadeUp>

        {/* Grid de cards */}
        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {SERVICES.map((svc, i) => (
            <FadeUp key={svc.tag} delay={i * 0.1} className={svc.offset ? "service-offset" : ""}>
              <article className={`card-base group p-10 ${svc.featured ? "card-featured" : ""}`}>
                {/* Tag + seta */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/65">
                    {svc.tag}
                  </span>
                  <ArrowUpRight
                    className="text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={24}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-4 font-display text-[clamp(1.4rem,1.8vw,1.9rem)] font-bold leading-tight text-white">
                  {svc.title}
                </h3>

                <p className="mb-6 text-[0.95rem] leading-7 text-white/60">{svc.copy}</p>

                <ul className="flex flex-col gap-3">
                  {svc.list.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/[0.72]">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
