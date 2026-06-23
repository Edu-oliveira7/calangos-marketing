import { useEffect, useState } from "react";
import { scrollToSection } from "../lib/scroll";

const NAV_LINKS = [
  { id: "problema", label: "Dores" },
  { id: "metodo", label: "Método" },
  { id: "servicos", label: "Serviços" },
  { id: "contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Rastreia a seção ativa para destacar no menu */
  useEffect(() => {
    const ids = ["hero", "problema", "metodo", "servicos", "contato"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header id="site-header" className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3"
          aria-label="Ir para o início"
        >
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-light to-gold-dark text-xs font-black text-ink">
            C
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Calangos
          </span>
        </button>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-link ${activeId === link.id ? "active" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection("contato")}
            className="btn-primary px-5 py-2.5 text-xs"
          >
            Falar conosco
          </button>

          <button
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block h-px w-5 bg-white/60 transition-all duration-300"
              style={menuOpen ? { transform: "rotate(45deg) translate(3px, 3px)" } : {}}
            />
            <span
              className="block h-px w-5 bg-white/60 transition-all duration-300"
              style={menuOpen ? { opacity: 0 } : {}}
            />
            <span
              className="block h-px w-5 bg-white/60 transition-all duration-300"
              style={menuOpen ? { transform: "rotate(-45deg) translate(3px, -3px)" } : {}}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className="overflow-hidden transition-all duration-500 lg:hidden"
        style={{ maxHeight: menuOpen ? "280px" : "0" }}
      >
        <nav className="flex flex-col gap-1 border-t border-white/5 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setMenuOpen(false);
              }}
              className={`py-3 text-left text-sm font-semibold transition-colors duration-200 hover:text-gold ${
                activeId === link.id ? "text-gold" : "text-white/60"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
