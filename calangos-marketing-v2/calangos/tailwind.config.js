/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080808",
          soft:    "#111111",
          raised:  "#1A1A1A",
          hover:   "#222222",
        },
        gold: {
          lightest: "#FFF8E7",
          light:    "#E8C97A",
          DEFAULT:  "#C9A84C",
          dark:     "#A8893A",
          deep:     "#7A6228",
        },
        brand: {
          green: "#A4FF3F",
          "green-light": "#B8FF68",
          "green-dark": "#7ED61D",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body:    ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-gold":    "pulseGold 2.2s ease-in-out infinite",
        "scroll-bounce": "scrollBounce 2.4s ease-in-out infinite",
        "marquee":       "marquee 22s linear infinite",
        "float":         "float 5s ease-in-out infinite",
        "float-delayed": "float 5s ease-in-out 1.5s infinite",
        "glow-pulse":    "glowPulse 4s ease-in-out infinite",
      },
      keyframes: {
        pulseGold: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(201,168,76,0.4)" },
          "70%":     { boxShadow: "0 0 0 10px rgba(201,168,76,0)" },
        },
        scrollBounce: {
          "0%,100%": { transform: "translateY(0)",    opacity: "1" },
          "60%":     { transform: "translateY(14px)", opacity: "0.2" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.35" },
          "50%":     { opacity: "0.75" },
        },
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
