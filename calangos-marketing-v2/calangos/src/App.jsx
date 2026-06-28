import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import About from "./components/About";
import MissionVisionValues from "./components/MissionVisionValues";
import Results from "./components/Results";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const orbLeftRef = useRef(null);
  const orbRightRef = useRef(null);

  // Parallax ambient lighting orbs that react to mouse movements
  useEffect(() => {
    const isMobileOrReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.innerWidth < 768;
    
    if (isMobileOrReducedMotion) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 35;
      const y = (e.clientY / window.innerHeight - 0.5) * 35;

      if (orbLeftRef.current) {
        orbLeftRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
      if (orbRightRef.current) {
        orbRightRef.current.style.transform = `translate(${-x * 0.7}px, ${-y * 0.7}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Premium Analog Noise Overlay */}
      <div className="page-noise" aria-hidden="true" />

      {/* Ambient background glows */}
      <div
        ref={orbLeftRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-0 rounded-full"
        style={{
          width: "45vw",
          height: "45vw",
          top: "15%",
          left: "-15%",
          background: "radial-gradient(circle, rgba(201,168,76,0.065) 0%, transparent 70%)",
          filter: "blur(130px)",
          opacity: 0.45,
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
      <div
        ref={orbRightRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-0 rounded-full"
        style={{
          width: "38vw",
          height: "38vw",
          bottom: "20%",
          right: "-12%",
          background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
          filter: "blur(130px)",
          opacity: 0.35,
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <Metrics />
        <About />
        <MissionVisionValues />
        <Results />
        <Services />
        <Process />
        <Testimonials />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
