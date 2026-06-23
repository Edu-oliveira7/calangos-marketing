const ITEMS = [
  "Tráfego Pago",
  "Gestão de Redes Sociais",
  "Branding",
  "Sites & Landing Pages",
  "Audiovisual",
  "Consultoria de Marketing",
]

export default function MarqueeStrip() {
  // Duplicamos a lista para criar um loop contínuo e sem "saltos".
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div
      className="overflow-hidden border-y border-gold/20 bg-ink-soft py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-8 whitespace-nowrap">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-medium uppercase tracking-wide text-cream/70">
              {item}
            </span>
            <span className="text-gold" aria-hidden="true">
              {"✦"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
