import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0b0b0b] py-24 md:py-36">
      {/* Background glowing gradients */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-35 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        <div className="mx-auto max-w-[1200px] rounded-3xl border border-white/5 bg-gradient-to-br from-[#111111] to-[#080808] p-8 shadow-2xl md:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Copy column (6 columns) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                <span className="h-px w-8 bg-[#C9A84C]/40" />
                Vamos conversar?
              </span>

              <h2
                className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.1]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Sua empresa pode ser a próxima a crescer com uma presença digital profissional.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-white/72 md:text-lg">
                Vamos construir uma estratégia que gere autoridade, alcance e novos clientes.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/42 font-medium">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                  Diagnóstico Gratuito
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                  Análise de Canais
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C9A84C]" />
                  Plano Estratégico
                </span>
              </div>
            </div>

            {/* Coluna dos Botões (AGORA COM lg:col-span-6) */}
            <div className="lg:col-span-6 w-full max-w-md mt-8 lg:mt-0 space-y-4 lg:justify-self-end">

              <a
                href="https://instagram.com/calangosmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0c0c0c] px-5 py-3 transition hover:border-[#C9A84C]/50"
              >
                <div className="text-left">
                  <p className="text-sm text-white/50">Instagram</p>
                  <p className="font-semibold text-white">@calangosmarketing</p>
                </div>
                <span className="ml-4 text-[#C9A84C] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="mailto:calangosmarketing@gmail.com"
                className="group flex w-full items-center justify-between rounded-xl border border-white/10 bg-[#0c0c0c] px-5 py-3 transition hover:border-[#C9A84C]/50"
              >
                <div className="text-left">
                  <p className="text-sm text-white/50">E-mail</p>
                  <p className="font-semibold text-white">calangosmarketing@gmail.com</p>
                </div>
                <span className="ml-4 text-[#C9A84C] transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
