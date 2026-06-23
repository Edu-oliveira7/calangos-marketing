import FadeUp from "./FadeUp"

const PAINS = [
  {
    index: "01",
    title: "Invisibilidade que custa caro",
    copy: "Sua marca até existe. Mas não ocupa espaço na cabeça de ninguém. Sem presença forte, o cliente compara você só por preço — e você sempre perde essa guerra.",
    effect: "Menos atenção, menos vendas.",
  },
  {
    index: "02",
    title: "Redes sociais paradas",
    copy: "Conteúdo sem intenção vira obrigação. E obrigação não gera desejo. Gera silêncio e irrelevância perante a concorrência que comunicou melhor.",
    effect: "Audiência fria e passiva.",
  },
  {
    index: "03",
    title: "Marca sem diferenciação clara",
    copy: "Se o cliente não percebe rapidamente o que torna sua empresa única, você vira só mais uma opção na prateleira digital e perde força na decisão de compra.",
    effect: "Disputa por preço e margem menor.",
  },
]

export default function Problema() {
  return (
    <section id="problema" className="bg-ink/85 py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <FadeUp className="mb-16">
          <span className="eyebrow mb-6 block">Problema real</span>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <h2 className="font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              A maioria das marcas não perde mercado por falta de produto.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/60">
              Está perdendo porque parece igual, fala igual e passa a mesma sensação morna de sempre. Quem entra no seu
              perfil precisa sentir valor rápido — ou vai embora sem voltar.
            </p>
          </div>
        </FadeUp>

        {/* Cards de dor */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((pain, i) => (
            <FadeUp key={pain.index} delay={i * 0.1}>
              <article className="card-base flex h-full flex-col p-10">
                <div className="flex-1">
                  <span className="mb-8 inline-flex items-center rounded-full border border-gold/25 bg-gold/[0.06] px-4 py-1.5 text-xs font-bold tracking-[0.1em] text-gold">
                    {pain.index}
                  </span>

                  <h3 className="mb-4 font-display text-[1.6rem] font-bold leading-snug text-white">{pain.title}</h3>
                  <p className="leading-7 text-white/60">{pain.copy}</p>
                </div>

                <div className="mt-8 border-t border-white/[0.07] pt-6">
                  <span className="mb-1 block text-[0.68rem] font-bold uppercase tracking-widest text-white/25">
                    Efeito direto
                  </span>
                  <strong className="text-sm text-white/80">{pain.effect}</strong>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
