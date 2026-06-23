import { useEffect, useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  const ambientL = useRef(null);
  const ambientR = useRef(null);

  /* Orbs ambientes seguem o mouse suavemente */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28;
      const y = (e.clientY / window.innerHeight - 0.5) * 28;

      if (ambientL.current) {
        ambientL.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (ambientR.current) {
        ambientR.current.style.transform = `translate(${-x * 0.7}px, ${-y * 0.7}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="page-noise" aria-hidden="true" />

      <div ref={ambientL} className="ambient-orb ambient-orb--left" aria-hidden="true" />
      <div ref={ambientR} className="ambient-orb ambient-orb--right" aria-hidden="true" />

      <Header />

      <main>
        <Hero />
      </main>
    </>
  );
}
