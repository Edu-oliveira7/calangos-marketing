import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Plugins: React (JSX/Fast Refresh) e Tailwind v4 (lê os tokens do globals.css)
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
