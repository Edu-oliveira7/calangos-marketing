document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.getElementById("navbar");
  const revealItems = document.querySelectorAll(".reveal-up");
  const statNumbers = document.querySelectorAll(".stat-number");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  const tiltCards = document.querySelectorAll(".tilt-card");
  let lastScrollY = window.scrollY;

  // ─── Favicon dinâmico via canvas ───
  (function setFavicon() {
    try {
      const existingFavicon = document.querySelector("link[rel='icon'], link[rel='shortcut icon'], link[rel='apple-touch-icon']");
      if (existingFavicon?.getAttribute("href")) return;

      const canvas = document.createElement("canvas");
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext("2d");

      // fundo escuro
      ctx.fillStyle = "#0d0d0d";
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();

      // círculo acid externo
      ctx.strokeStyle = "#a2ff00";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(16, 16, 11, 0, Math.PI * 2);
      ctx.stroke();

      // ponto central
      ctx.fillStyle = "#a2ff00";
      ctx.beginPath();
      ctx.arc(16, 16, 4, 0, Math.PI * 2);
      ctx.fill();

      const link = document.querySelector("link[rel='icon']") || document.createElement("link");
      link.rel = "icon";
      link.href = canvas.toDataURL("image/png");
      document.head.appendChild(link);
    } catch (e) {
      // silently fail
    }
  })();

  // ─── Header scroll ───
  const syncHeader = () => {
    const currentY = window.scrollY;
    const isScrolled = currentY > 24;
    const isScrollingDown = currentY > lastScrollY && currentY > 60;

    if (header) {
      header.classList.toggle("is-scrolled", isScrolled);
      header.classList.toggle("is-scrolling-down", isScrollingDown);
    }

    lastScrollY = currentY;
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  // ─── Reveal on scroll ───
  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // Respeita o transition-delay já definido no HTML
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  // ─── Counter animation ───
  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || "";
    const duration = 1500;
    let startTime = null;

    const updateValue = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      element.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(updateValue);
    };

    requestAnimationFrame(updateValue);
  };

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        statsObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );

  statNumbers.forEach((item) => statsObserver.observe(item));

  // ─── Smooth scroll com offset da nav ───
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      const headerOffset = header ? header.offsetHeight + 24 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });

  // ─── Active nav links ───
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const currentId = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
        });
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((section) => sectionObserver.observe(section));

  // ─── Tilt 3D em cards ───
  if (!prefersReducedMotion) {
    tiltCards.forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -5;
        const rotateY = ((x / rect.width) - 0.5) * 6;
        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
        card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
      });

      card.addEventListener("pointerenter", () => {
        card.style.transition = "transform 0.1s ease";
      });
    });
  }

  // ─── Parallax sutil no hero ───
  if (!prefersReducedMotion) {
    const heroLogo = document.querySelector(".hero-brand-logo");
    const heroTitle = document.querySelector(".hero-title");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight) return;

      const factor = scrollY * 0.25;
      if (heroLogo) heroLogo.style.transform = `translateY(${factor}px)`;
      if (heroTitle) heroTitle.style.transform = `translateY(${factor * 0.15}px)`;
    }, { passive: true });
  }

  // ─── Ambient movement on mousemove ───
  if (!prefersReducedMotion) {
    const ambients = document.querySelectorAll(".ambient");
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      ambients.forEach((el, i) => {
        const factor = i === 0 ? 1 : -0.7;
        el.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
        el.style.transition = "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)";
      });
    }, { passive: true });
  }
});
