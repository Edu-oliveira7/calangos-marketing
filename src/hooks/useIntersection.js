import { useEffect, useRef, useState } from "react";

/**
 * Observa quando um elemento entra na viewport.
 * Retorna [ref, visible] — anexe o ref ao elemento e use
 * `visible` para disparar a animação de entrada.
 */
export function useIntersection(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
