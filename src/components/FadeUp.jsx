import { useIntersection } from "../hooks/useIntersection";

/**
 * Envolve qualquer conteúdo com uma animação de "subir e aparecer"
 * quando ele entra na viewport. `delay` escalona elementos em sequência.
 */
export default function FadeUp({ children, delay = 0, className = "" }) {
  const [ref, visible] = useIntersection();

  return (
    <div
      ref={ref}
      className={`reveal-up ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
