/**
 * Rola suavemente até uma seção pelo id, descontando a altura
 * do header fixo para o título não ficar escondido atrás dele.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.getElementById("site-header");
  const offset = (header?.offsetHeight ?? 64) + 16;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - offset,
    behavior: "smooth",
  });
}
