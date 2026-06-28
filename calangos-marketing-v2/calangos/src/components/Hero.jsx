import { motion } from "framer-motion";
import foto1 from "../assets/foto1.png";

export default function Hero() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen overflow-hidden bg-white rounded-b-[48px] md:rounded-b-[80px] z-10"
    >
      {/* Decorative sunburst top-left — hidden on mobile */}
      <div className="hidden md:block absolute left-6 md:left-12 top-28 text-[#A4FF3F] opacity-60 animate-[spin_20s_linear_infinite] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-14 h-14" strokeWidth="4">
          <circle cx="50" cy="50" r="10" fill="currentColor" />
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 50 + 15 * Math.cos(angle);
            const y1 = 50 + 15 * Math.sin(angle);
            const x2 = 50 + 40 * Math.cos(angle);
            const y2 = 50 + 40 * Math.sin(angle);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
          })}
        </svg>
      </div>

      {/* ── LEFT COLUMN: all text content ── */}
      <div className="relative z-10 flex flex-col justify-center items-center lg:items-start gap-8 px-6 md:px-12 lg:px-16 pt-32 pb-20 w-full lg:w-1/2 xl:w-[55%] text-center lg:text-left">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 w-fit"
        >
          <span className="h-2 w-2 rounded-full bg-[#A4FF3F] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-black/60">
            Agência de Marketing Digital
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.07] tracking-tight text-[#080808]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Transformamos atenção em{" "}
          <span className="text-[#7ED61D] italic">clientes</span>{" "}
          para sua empresa.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg leading-relaxed text-black/60 max-w-[480px] font-medium mx-auto lg:mx-0"
        >
          Estratégia, branding e conteúdo de alta performance para marcas que querem crescer,
          gerar autoridade e conquistar novos clientes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
        >
          <button
            onClick={() => handleScrollTo("contact")}
            className="rounded-full bg-[#080808] text-white px-8 py-4 text-sm font-extrabold uppercase tracking-wider hover:bg-[#1a1a1a] hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Solicitar Proposta
          </button>
          <button
            onClick={() => handleScrollTo("services")}
            className="rounded-full border-2 border-black/20 text-black px-8 py-4 text-sm font-extrabold uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all duration-300"
          >
            Ver Serviços
          </button>
        </motion.div>

      </div>

      {/* ── RIGHT COLUMN: photo fills full hero height ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[80px] bottom-0 right-0 hidden lg:block w-[38%] xl:w-[36%] overflow-hidden"
        style={{ borderRadius: "0 0 80px 0" }}
      >
        {/* Subtle green glow overlay on the left edge of the photo */}
        <div
          className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to right, white 0%, transparent 100%)",
          }}
        />

        {/* Photo covers full height */}
        <img
          src={foto1}
          alt="Calangos Marketing — estratégia digital"
          className="w-full h-full object-cover object-top"
          style={{
            filter: "contrast(1.03) saturate(1.05)",
          }}
        />

        {/* Decorative spark */}
        <div className="absolute top-28 left-0 text-[#A4FF3F] z-20">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
          </svg>
        </div>
      </motion.div>

    </section>
  );
}
