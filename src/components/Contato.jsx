import { MapPin, Zap, Sparkles, ArrowUpRight } from "lucide-react"
import FadeUp from "./FadeUp"

const INFO_ITEMS = [
  { icon: MapPin, text: "Rio Grande do Norte, Brasil" },
  { icon: Zap, text: "Resposta em até 24 horas" },
  { icon: Sparkles, text: "Diagnóstico gratuito" },
]

// TODO: trocar pelo número real de WhatsApp da Calangos (formato: 55 + DDD + número)
const WHATSAPP_URL = "https://wa.me/5584999999999"
const EMAIL_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=calangosmarketing@gmail.com"

export default function Contato() {
  return (
    <section id="contato" className="bg-ink py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="card-featured relative overflow-hidden rounded-[2.5rem] border border-gold/[0.18] p-12 lg:p-16">
            {/* Glow */}
            <div
              className="pointer-events-none absolute -left-1/5 -top-1/2 h-[200%] w-3/5 blur-[70px]"
              style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.1), transparent 60%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              {/* Texto */}
              <div>
                <span className="eyebrow mb-6 block">Vamos conversar</span>
                <h2 className="mb-6 font-display text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">
                  Se a sua marca já cansou de parecer menor do que realmente é.
                </h2>
                <p className="mb-8 max-w-xl text-lg leading-8 text-white/60">
                  Diagnóstico, posicionamento e direção visual para construir uma presença que faz sentido e converte.
                </p>

                {/* Itens de informação */}
                <div className="flex flex-wrap gap-6">
                  {INFO_ITEMS.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5 text-sm text-white/[0.42]">
                      <Icon size={16} className="text-gold" aria-hidden="true" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-shrink-0 flex-col gap-3">
                <a
                  href={EMAIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary whitespace-nowrap px-7 py-4 text-sm"
                >
                  <span>calangosmarketing@gmail.com</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>

                <div className="text-center text-xs uppercase tracking-widest text-white/20">ou</div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary whitespace-nowrap px-7 py-4 text-sm"
                >
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
