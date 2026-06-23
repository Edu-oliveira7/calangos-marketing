import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";
import { scrollToSection } from "../lib/scroll";

/* Anima um número de 0 até o alvo (efeito "contador") */
function useCounter(target, duration = 1800, startDelay = 700) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const start = Date.now();
      const tick = () => {
        const progress = Math.min((Date.now() - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(target * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [target, duration, startDelay]);

  return value;
}

const STATS = [
  { target: 47, suffix: "+", label: "Clientes ativos" },
  { target: 120, suffix: "+", label: "Projetos entregues" },
  { target: 98, suffix: "%", label: "Taxa de satisfação" },
];

function StatItem({ target, suffix, label }) {
  const value = useCounter(target);
  return (
    <div className="text-center">
      <div className="font-display text-3xl font-black text-gold sm:text-4xl">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-xs font-medium tracking-wide text-white/35">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-start justify-center overflow-hidden bg-ink pt-40"
    >
      {/* Brilho radial de fundo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70rem] w-[70rem] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 68%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-6xl px-5 pb-20 text-center sm:px-6">
        {/* Badge */}
        <FadeUp delay={0.1}>
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.35em] text-white/55">
              <span
                className="h-1.5 w-1.5 rounded-full bg-gold"
                style={{
                  animation: "pulseGold 2.2s ease-in-out infinite",
                  boxShadow: "0 0 6px rgba(201,168,76,0.8)",
                }}
              />
              Posicionamento &amp; Performance
            </span>
          </div>
        </FadeUp>

        {/* Eyebrow + H1 */}
        <FadeUp delay={0.2}>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-gold">
            Estratégia Digital de Alto Padrão
          </p>
          <h1
            className="mx-auto font-display font-black leading-[0.96] text-white text-balance"
            style={{
              fontSize: "clamp(3rem, 10vw, 7.5rem)",
              letterSpacing: "-0.055em",
              maxWidth: "16ch",
            }}
          >
            Sua empresa <span className="hero-highlight">não cresce</span>
            <br className="hidden lg:block" /> porque ninguém te vê.
          </h1>
        </FadeUp>

        {/* Subtítulo */}
        <FadeUp delay={0.32} className="mx-auto mt-10 max-w-3xl">
          <p className="text-xl font-medium leading-relaxed text-white/60 sm:text-2xl text-pretty">
            Você não precisa de mais posts. Precisa de narrativa e um sistema
            visual que justifique seu preço antes da primeira venda.
          </p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] px-6 py-3 text-sm font-semibold tracking-wide text-white/45">
            <span className="text-base text-gold">◆</span>
            Clareza &nbsp;•&nbsp; Percepção &nbsp;•&nbsp; Conversão
          </div>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.44} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection("contato")}
            className="btn-primary group px-10 py-5 text-sm"
          >
            Quero escalar minha marca
            <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
          <button
            onClick={() => scrollToSection("metodo")}
            className="btn-secondary px-8 py-5 text-sm"
          >
            Ver o método ↓
          </button>
        </FadeUp>

        {/* Stats */}
        <FadeUp delay={0.56} className="mx-auto mt-16 grid max-w-md grid-cols-3 gap-8">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </FadeUp>

        {/* Indicador de scroll */}
        <FadeUp delay={0.7} className="mt-16 flex justify-center">
          <div className="scroll-mouse">
            <div className="scroll-dot-inner" />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
