"use client"
import { useEffect, useMemo, useState, useRef } from "react";
import { useTheme } from "next-themes";

const INTRO_STYLE_ID = "faq1-animations";

const faqs = [
  {
    question: "Como funciona o investimento mínimo em Anúncios?",
    answer:
      "Trabalhamos com investimento mínimo de R$1.500/mês em mídia paga. Esse valor garante volume suficiente para testar, otimizar e gerar dados reais que orientam decisões estratégicas.",
    meta: "Investimento",
  },
  {
    question: "Vocês garantem resultados?",
    answer:
      "Não prometemos fórmulas mágicas. Crescimento vem de método, estratégia e parceria. Trabalhamos com transparência total: você acompanha métricas, testes e otimizações em tempo real. Vamos encontrar os gargalos, resolvê-los e escalar.",
    meta: "Resultados",
  },
  {
    question: "O que diferencia a Advision de outras agências?",
    answer:
      "Vamos além dos anúncios. Analisamos o funil completo: tráfego, landing page, atendimento e conversão. Sem promessas vazias, colocamos o método à frente de tudo.",
    meta: "Diferenciais",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Os primeiros dados surgem em 7-15 dias. Otimizações consistentes acontecem entre 30-45 dias. Crescimento escalável é construído com método, teste e ajustes contínuos, sempre buscando o melhor resultado.",
    meta: "Prazo",
  },
];

const palettes = {
  dark: {
    surface: "bg-navy-950 text-neutral-100",
    panel: "bg-navy-900/50",
    border: "border-electric-500/20",
    heading: "text-white",
    muted: "text-neutral-400",
    iconRing: "border-electric-500/30",
    iconSurface: "bg-electric-500/10",
    icon: "text-white",
    toggle: "border-electric-500/30 text-white",
    toggleSurface: "bg-electric-500/10",
    glow: "rgba(52, 73, 234, 0.15)",
    aurora: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(52, 73, 234, 0.1), transparent 65%), var(--color-navy-800)",
    shadow: "shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]",
    overlay: "linear-gradient(130deg, rgba(52,73,234,0.08) 0%, transparent 65%)",
  },
  light: {
    surface: "bg-background text-foreground",
    panel: "bg-white/70",
    border: "border-electric-500/20",
    heading: "text-foreground",
    muted: "text-muted-foreground",
    iconRing: "border-electric-500/30",
    iconSurface: "bg-electric-500/10",
    icon: "text-electric-600",
    toggle: "border-electric-500/30 text-foreground",
    toggleSurface: "bg-white",
    glow: "rgba(52, 73, 234, 0.12)",
    aurora: "radial-gradient(ellipse 50% 100% at 10% 0%, rgba(52, 73, 234, 0.08), rgba(255, 255, 255, 0.95) 70%)",
    shadow: "shadow-[0_36px_120px_-70px_rgba(15,15,15,0.18)]",
    overlay: "linear-gradient(130deg, rgba(52,73,234,0.06) 0%, transparent 70%)",
  },
};

function FAQ1() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [introReady, setIntroReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById(INTRO_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = INTRO_STYLE_ID;
    style.innerHTML = `
      @keyframes faq1-fade-up {
        0% { transform: translate3d(0, 20px, 0); opacity: 0; filter: blur(6px); }
        60% { filter: blur(0); }
        100% { transform: translate3d(0, 0, 0); opacity: 1; filter: blur(0); }
      }
      @keyframes faq1-beam-spin {
        0% { transform: rotate(0deg) scale(1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes faq1-pulse {
        0% { transform: scale(0.7); opacity: 0.55; }
        60% { opacity: 0.1; }
        100% { transform: scale(1.25); opacity: 0; }
      }
      @keyframes faq1-meter {
        0%, 20% { transform: scaleX(0); transform-origin: left; }
        45%, 60% { transform: scaleX(1); transform-origin: left; }
        80%, 100% { transform: scaleX(0); transform-origin: right; }
      }
      @keyframes faq1-tick {
        0%, 30% { transform: translateX(-6px); opacity: 0.4; }
        50% { transform: translateX(2px); opacity: 1; }
        100% { transform: translateX(20px); opacity: 0; }
      }
      .faq1-intro {
        position: relative;
        display: flex;
        align-items: center;
        gap: 0.85rem;
        padding: 0.85rem 1.4rem;
        border-radius: 9999px;
        overflow: hidden;
        border: 1px solid rgba(52, 73, 234, 0.2);
        background: rgba(12, 12, 12, 0.42);
        color: rgba(52, 73, 234, 0.92);
        text-transform: uppercase;
        letter-spacing: 0.35em;
        font-size: 0.65rem;
        width: 100%;
        max-width: 24rem;
        margin: 0 auto;
        mix-blend-mode: screen;
        opacity: 0;
        transform: translate3d(0, 12px, 0);
        filter: blur(8px);
        transition: opacity 720ms ease, transform 720ms ease, filter 720ms ease;
        isolation: isolate;
      }
      .faq1-intro--light {
        border-color: rgba(52, 73, 234, 0.2);
        background: rgba(248, 250, 252, 0.88);
        color: rgba(52, 73, 234, 0.78);
        mix-blend-mode: multiply;
      }
      .faq1-intro--active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        filter: blur(0);
      }
      .faq1-intro__beam,
      .faq1-intro__pulse {
        position: absolute;
        inset: -110%;
        pointer-events: none;
        border-radius: 50%;
      }
      .faq1-intro__beam {
        background: conic-gradient(from 160deg, rgba(52, 73, 234, 0.3), transparent 32%, rgba(52, 73, 234, 0.22) 58%, transparent 78%, rgba(52, 73, 234, 0.18));
        opacity: 0.55;
      }
      @media (min-width: 768px) {
        .faq1-intro__beam {
          animation: faq1-beam-spin 18s linear infinite;
        }
      }
      .faq1-intro__beam.paused {
        animation-play-state: paused;
      }
      .faq1-intro--light .faq1-intro__beam {
        background: conic-gradient(from 180deg, rgba(52, 73, 234, 0.2), transparent 30%, rgba(52, 73, 234, 0.18) 58%, transparent 80%, rgba(52, 73, 234, 0.14));
      }
      .faq1-intro__pulse {
        border: 1px solid currentColor;
        opacity: 0.25;
      }
      @media (min-width: 768px) {
        .faq1-intro__pulse {
          animation: faq1-pulse 3.4s ease-out infinite;
        }
      }
      .faq1-intro__pulse.paused {
        animation-play-state: paused;
      }
      .faq1-intro__label {
        position: relative;
        z-index: 1;
        font-weight: 600;
        letter-spacing: 0.4em;
      }
      .faq1-intro__meter {
        position: relative;
        z-index: 1;
        flex: 1 1 auto;
        height: 1px;
        background: linear-gradient(90deg, transparent, currentColor 35%, transparent 85%);
        transform: scaleX(0);
        transform-origin: left;
        opacity: 0.7;
      }
      @media (min-width: 768px) {
        .faq1-intro__meter {
          animation: faq1-meter 5.8s ease-in-out infinite;
        }
      }
      .faq1-intro__meter.paused {
        animation-play-state: paused;
      }
      .faq1-intro__tick {
        position: relative;
        z-index: 1;
        width: 0.55rem;
        height: 0.55rem;
        border-radius: 9999px;
        background: currentColor;
        box-shadow: 0 0 0 4px rgba(52, 73, 234, 0.15);
      }
      @media (min-width: 768px) {
        .faq1-intro__tick {
          animation: faq1-tick 3.2s ease-in-out infinite;
        }
      }
      .faq1-intro__tick.paused {
        animation-play-state: paused;
      }
      .faq1-intro--light .faq1-intro__tick {
        box-shadow: 0 0 0 4px rgba(52, 73, 234, 0.1);
      }
      .faq1-fade {
        opacity: 0;
        transform: translate3d(0, 24px, 0);
        transition: opacity 700ms ease, transform 700ms ease, filter 700ms ease;
      }
      @media (min-width: 768px) {
        .faq1-fade {
          filter: blur(6px);
        }
      }
      .faq1-fade--ready {
        animation: faq1-fade-up 860ms cubic-bezier(0.22, 0.68, 0, 1) forwards;
      }
    `;

    document.head.appendChild(style);

    return () => {
      if (style.parentNode) style.remove();
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const frame = window.requestAnimationFrame(() => setIntroReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  const theme = (resolvedTheme as "dark" | "light") || "dark";
  const palette = useMemo(() => palettes[theme], [theme]);
  const toggleQuestion = (index: number) => setActiveIndex((prev) => (prev === index ? -1 : index));

  useEffect(() => {
    if (!mounted) return;

    let timeout: NodeJS.Timeout;
    const onLoad = () => {
      timeout = setTimeout(() => setHasEntered(true), 120);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(timeout);
    };
  }, [mounted]);

  const setCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    if (isMobile) return;
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--faq-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--faq-y", `${event.clientY - rect.top}px`);
  };

  const clearCardGlow = (event: React.MouseEvent<HTMLLIElement>) => {
    if (isMobile) return;
    const target = event.currentTarget;
    target.style.removeProperty("--faq-x");
    target.style.removeProperty("--faq-y");
  };

  if (!mounted) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden transition-colors duration-700 bg-navy-950 text-neutral-100">
        <div className="absolute inset-0 z-0" style={{ background: palettes.dark.aurora }} aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-80"
          style={{ background: palettes.dark.overlay, mixBlendMode: "screen" }}
          aria-hidden="true"
        />
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="relative z-10 mx-auto flex max-w-4xl flex-col gap-12 px-6 py-24 lg:max-w-5xl lg:px-12 faq1-fade"
        >
          <div className="faq1-intro faq1-intro--dark">
            <span className="faq1-intro__beam" aria-hidden="true" />
            <span className="faq1-intro__pulse" aria-hidden="true" />
            <span className="faq1-intro__label text-black dark:text-white font-bold">Dúvidas Frequentes</span>
            <span className="faq1-intro__meter" aria-hidden="true" />
            <span className="faq1-intro__tick" aria-hidden="true" />
          </div>
          <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400" aria-hidden="true">Perguntas</p>
              <h1 id="faq-heading" className="text-4xl font-semibold leading-tight md:text-5xl text-white">
                Crescimento com clareza e método.
              </h1>
              <p className="max-w-xl text-base text-neutral-400">
                Tudo que você precisa saber sobre como a Advision transforma tráfego em crescimento previsível.
              </p>
            </div>
          </header>
          <ul className="space-y-4">
            {faqs.map((item, index) => {
              const open = activeIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-trigger-${index}`;
              return (
                <li
                  key={item.question}
                  className="group relative overflow-hidden rounded-3xl border md:backdrop-blur-xl transition-all duration-500 md:hover:-translate-y-0.5 focus-within:-translate-y-0.5 border-electric-500/20 bg-navy-900/50 shadow-[0_36px_140px_-60px_rgba(10,10,10,0.95)]"
                >
                  <div
                    className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{ background: `radial-gradient(240px circle at 50% 50%, rgba(52, 73, 234, 0.15), transparent 70%)` }}
                  />
                  <button
                    type="button"
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={open}
                    onClick={() => toggleQuestion(index)}
                    style={{ "--faq-outline": "rgba(52,73,234,0.5)" } as React.CSSProperties}
                    className="relative flex w-full items-start gap-6 px-8 py-7 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--faq-outline)]"
                  >
                    <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 border-electric-500/30 bg-electric-500/10">
                      <span className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 border-electric-500/30 ${open ? "animate-ping" : ""}`} />
                      <svg
                        className={`relative h-5 w-5 transition-transform duration-500 text-white ${open ? "rotate-45" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div className="flex flex-1 flex-col gap-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                        <h2 className="text-lg font-medium leading-tight sm:text-xl text-white">{item.question}</h2>
                        {item.meta && (
                          <span className="inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto border-electric-500/20 text-neutral-400">
                            {item.meta}
                          </span>
                        )}
                      </div>
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className={`overflow-hidden text-sm leading-relaxed transition-[max-height] duration-500 ease-out ${open ? "max-h-64" : "max-h-0"} text-neutral-400`}
                      >
                        <p className="pr-2">{item.answer}</p>
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 ${palette.surface}`}>

      <div className="absolute top-0 left-0 right-0 h-18 bg-gradient-to-t from-transparent to-background backdrop-blur-sm z-20" aria-hidden="true" />
      
      <div className="absolute inset-0 z-0" style={{ background: palette.aurora }} aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{ background: palette.overlay, mixBlendMode: theme === "dark" ? "screen" : "multiply" }}
        aria-hidden="true"
      />

      <section
        ref={sectionRef}
        id="faq"
        aria-labelledby="faq-heading"
        className={`relative z-10 mx-auto flex max-w-4xl flex-col gap-12 px-6 py-24 lg:max-w-5xl lg:px-12 ${
          hasEntered ? "faq1-fade--ready" : "faq1-fade"
        }`}
      >
        <div
          className={`faq1-intro ${introReady ? "faq1-intro--active" : ""} ${
            theme === "light" ? "faq1-intro--light" : "faq1-intro--dark"
          }`}
        >
          <span className={`faq1-intro__beam ${!isInView ? "paused" : ""}`} aria-hidden="true" />
          <span className={`faq1-intro__pulse ${!isInView ? "paused" : ""}`} aria-hidden="true" />
          <span className="faq1-intro__label text-black dark:text-white font-bold">Dúvidas Frequentes</span>
          <span className={`faq1-intro__meter ${!isInView ? "paused" : ""}`} aria-hidden="true" />
          <span className={`faq1-intro__tick ${!isInView ? "paused" : ""}`} aria-hidden="true" />
        </div>

        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className={`text-xs uppercase tracking-[0.35em] ${palette.muted}`} aria-hidden="true">Perguntas</p>
            <h1 id="faq-heading" className={`text-4xl font-semibold leading-tight md:text-5xl ${palette.heading}`}>
              Crescimento com clareza e método.
            </h1>
            <p className={`max-w-xl text-base ${palette.muted}`}>
              Tudo que você precisa saber sobre como a Advision transforma tráfego em crescimento previsível.
            </p>
          </div>


        </header>

        <ul className="space-y-4">
          {faqs.map((item, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-trigger-${index}`;

            return (
              <li
                key={item.question}
                className={`group relative overflow-hidden rounded-3xl border md:backdrop-blur-xl transition-all duration-500 md:hover:-translate-y-0.5 focus-within:-translate-y-0.5 ${palette.border} ${palette.panel} ${palette.shadow}`}
                onMouseMove={setCardGlow}
                onMouseLeave={clearCardGlow}
              >
                <div
                  className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                    open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{
                    background: `radial-gradient(240px circle at var(--faq-x, 50%) var(--faq-y, 50%), ${palette.glow}, transparent 70%)`,
                  }}
                />

                <button
                  type="button"
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={open}
                  onClick={() => toggleQuestion(index)}
                  style={{ "--faq-outline": theme === "dark" ? "rgba(52,73,234,0.5)" : "rgba(52,73,234,0.4)" } as React.CSSProperties}
                  className="relative flex w-full items-start gap-6 px-8 py-7 text-left transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--faq-outline)]"
                >
                  <span
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-105 ${palette.iconRing} ${palette.iconSurface}`}
                  >
                    <span
                      className={`pointer-events-none absolute inset-0 rounded-full border opacity-30 ${
                        palette.iconRing
                      } ${open ? "animate-ping" : ""}`}
                    />
                    <svg
                      className={`relative h-5 w-5 transition-transform duration-500 ${palette.icon} ${open ? "rotate-45" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M12 5v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>

                  <div className="flex flex-1 flex-col gap-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                      <h2 className={`text-lg font-medium leading-tight sm:text-xl ${palette.heading}`}>
                        {item.question}
                      </h2>
                      {item.meta && (
                        <span
                          className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.35em] transition-opacity duration-300 sm:ml-auto ${palette.border} ${palette.muted}`}
                        >
                          {item.meta}
                        </span>
                      )}
                    </div>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`overflow-hidden text-sm leading-relaxed transition-[max-height] duration-500 ease-out ${
                        open ? "max-h-64" : "max-h-0"
                      } ${palette.muted}`}
                    >
                      <p className="pr-2">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default FAQ1;
export { FAQ1 };
