import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "Quem Somos" },
  { id: "services", label: "Serviços" },
  { id: "process", label: "Processo" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "contact", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    const heroEl = document.getElementById("hero");
    if (heroEl) observer.observe(heroEl);

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
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
    <>
      <motion.header
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: "16px",
          left: "50%",
          width: "92%",
          maxWidth: "1400px",
          zIndex: 9999,
          borderRadius: "9999px",
          border: scrolled
            ? "1px solid rgba(201,168,76,0.25)"
            : "1px solid rgba(255,255,255,0.08)",
          background: scrolled
            ? "rgba(6,6,6,0.92)"
            : "rgba(10,10,10,0.80)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? "0 20px 50px rgba(0,0,0,0.85), 0 0 0 1px rgba(201,168,76,0.08)"
            : "0 8px 32px rgba(0,0,0,0.6)",
          padding: scrolled ? "8px 0" : "12px 0",
          transition: "background 0.5s ease, border 0.5s ease, box-shadow 0.5s ease, padding 0.5s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "24px", paddingRight: "24px" }}>
          {/* Logo */}
          <button
            onClick={() => handleScrollTo("hero")}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
            aria-label="Calangos Marketing"
          >
            <span
              style={{
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "-0.5px",
                color: "white",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Calangos <span style={{ color: "green" }}>Marketing</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  padding: "4px 0",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: activeSection === link.id ? "#C9A84C" : "rgba(255,255,255,0.7)",
                  transition: "color 0.2s",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      right: 0,
                      height: "1.5px",
                      background: "#C9A84C",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => handleScrollTo("contact")}
              className="cta-btn"
              style={{
                background: "#C9A84C",
                border: "none",
                cursor: "pointer",
                borderRadius: "9999px",
                padding: "10px 20px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#080808",
                transition: "all 0.3s ease",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Solicitar Proposta
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="hamburger-btn"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                cursor: "pointer",
                borderRadius: "9999px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "80px",
              left: "4%",
              right: "4%",
              zIndex: 9998,
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(8,8,8,0.97)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    cursor: "pointer",
                    textAlign: "center",
                    padding: "14px 0",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: activeSection === link.id ? "#C9A84C" : "rgba(255,255,255,0.85)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "color 0.2s",
                    width: "100%",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleScrollTo("contact")}
                style={{
                  marginTop: "16px",
                  background: "#C9A84C",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "12px",
                  padding: "14px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#080808",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Solicitar Proposta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* Desktop: show nav, hide hamburger */
        @media (min-width: 1025px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .cta-btn { display: inline-block !important; }
        }
        /* Mobile/Tablet: hide nav, show hamburger, hide CTA */
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .cta-btn { display: none !important; }
        }
        .cta-btn:hover {
          background: #E8C97A !important;
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(201,168,76,0.45);
        }
        .hamburger-btn:hover {
          background: rgba(255,255,255,0.12) !important;
          border-color: rgba(255,255,255,0.25) !important;
        }
      `}</style>
    </>
  );
}
