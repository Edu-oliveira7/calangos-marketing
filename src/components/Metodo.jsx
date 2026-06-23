import FadeUp from "./FadeUp"

const STEPS = [
  {
    n: "01",
    title: "Raio X do que está travando sua percepção",
    copy: "A gente encontra os pontos em que sua marca some, confunde ou desperdiça clique. Diagnóstico honesto, sem eufemismo.",
    offset: false,
  },
  {
    n: "02",
    title: "Posicionamento que sustenta valor",
    copy: "Ajustamos narrativa, oferta e visual para a sua empresa parar de parecer comum e começar a parecer a escolha certa.",
    offset: true,
  },
  {
    n: "03",
    title: "Implementação que gera resultado real",
    copy: "Criamos conteúdo, identidade e páginas que fazem sua marca ser vista, lembrada e escolhida. Sem achismo.",
    offset: false,
  },
  {
    n: "04",
    title: "Ajuste contínuo para crescer sem perder força",
    copy: "Medimos resposta, cortamos ruído e refinamos o que realmente move venda. A evolução nunca para.",
    offset: true,
  },
]

export default function Metodo() {
  return (
    <section id="metodo" className="overflow-hidden bg-ink py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Coluna esquerda fixa */}
          <FadeUp>
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow mb-6 block">Método Calangos</span>
              <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl">
                A transformação acontece quando estratégia, estética e venda andam juntas.
              </h2>
              <p className="max-w-xl text-lg leading-8 text-white/60">
                A gente não empilha entregas. Montamos um sistema de percepção e conversão para sua marca parar de
                parecer uma promessa e começar a parecer uma escolha óbvia.
              </p>

              {/* Destaque */}
              <div className="mt-10 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6">
                <div className="mb-2 font-display text-4xl font-black tracking-tight text-gold">4 etapas</div>
                <p className="text-sm text-white/60">Do diagnóstico até o crescimento sustentável</p>
              </div>
            </div>
          </FadeUp>

          {/* Etapas */}
          <div className="grid gap-5">
            {STEPS.map((step, i) => (
              <FadeUp key={step.n} delay={0.06 + i * 0.09} className={step.offset ? "method-offset" : ""}>
                <article className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-white/5 bg-white/[0.025] p-6 transition-all duration-400">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gold/10 font-display text-sm font-black text-gold">
                    {step.n}
                  </div>

                  <div>
                    <h3 className="mb-2 font-display text-xl font-bold leading-tight text-white">{step.title}</h3>
                    <p className="text-sm leading-7 text-white/60">{step.copy}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
