import { Instagram } from "lucide-react"
import { scrollToSection } from "../lib/scroll"

const SERVICES_LINKS = ["Social Media", "Design & Identidade", "Websites & Landing Pages", "Posicionamento de Marca"]

const COMPANY_LINKS = [
  { label: "Método", id: "metodo" },
  { label: "Contato", id: "contato" },
]

// TODO: trocar pelo link real do Instagram da Calangos
const INSTAGRAM_URL = "#"
const EMAIL_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=calangosmarketing@gmail.com"

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink/[0.98] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Grid superior */}
        <div className="mb-14 grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div>
            <button onClick={() => scrollToSection("hero")} className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-xs font-black text-ink">
                C
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">Calangos</span>
            </button>

            <p className="mb-6 max-w-xs text-sm leading-7 text-white/[0.38]">
              Presença digital que justifica seu preço antes da primeira reunião.
            </p>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/45 transition-all duration-300 hover:border-gold/40 hover:text-gold"
            >
              <Instagram size={14} aria-hidden="true" />
              Instagram
            </a>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/[0.28]">Serviços</h4>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/[0.28]">Empresa</h4>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/[0.28]">
              Fale com a gente
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={EMAIL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-sm text-white/50 transition-colors duration-200 hover:text-gold"
                >
                  calangosmarketing@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-white/25">© 2025 Calangos Marketing. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
