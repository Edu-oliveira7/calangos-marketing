

export default function Footer() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[#080808] py-16">
      <div className="mx-auto max-w-[1400px] px-6">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8 pb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <button
              onClick={() => handleScrollTo("hero")}
              className="flex items-center gap-2 focus:outline-none"
              aria-label="Ir para o início"
            >
              <span
                className="text-lg font-bold tracking-tight text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Calangos <span className="text-[green]">Marketing</span>
              </span>
            </button>
            <p className="max-w-[28ch] text-xs leading-relaxed text-white/42">
              Transformamos atenção em clientes para sua empresa com estratégias digitais integradas de alta performance.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4
              className="text-[10px] font-bold uppercase tracking-widest text-white/42"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Navegação
            </h4>
            <ul className="space-y-2">
              {[
                { id: "about", label: "Quem Somos" },
                { id: "services", label: "Serviços" },
                { id: "process", label: "Processo" },
                { id: "testimonials", label: "Depoimentos" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="text-xs text-white/72 transition-colors hover:text-[#C9A84C]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Contato */}
          <div className="flex flex-col gap-3">
            <h4
              className="text-[10px] font-bold uppercase tracking-widest text-white/42"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Contato
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com/calangosmarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/72 transition-colors hover:text-[#C9A84C] flex items-center gap-1.5"
                >
                  Instagram <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:calangosmarketing@gmail.com"
                  className="text-xs text-white/72 transition-colors hover:text-[#C9A84C] flex items-center gap-1.5"
                >
                  calangosmarketing@gmail.com <span>↗</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="text-[10px] tracking-wider text-white/42">
            &copy; 2026 Calangos Marketing. Todos os direitos reservados.
          </span>
          
        </div>

      </div>
    </footer>
  );
}
