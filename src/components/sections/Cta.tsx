"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/constants";

interface HorizontalMarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function HorizontalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: HorizontalMarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden gap-16", className)}
      style={{ "--duration": `${speed}s` } as React.CSSProperties}
    >
      <div
        className={cn(
          "flex shrink-0 gap-16 animate-marquee",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused"
        )}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-16 animate-marquee",
          reverse && "direction-[reverse]",
          pauseOnHover && "group-hover:paused"
        )}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const marqueeItems = [
  "Tráfego Estratégico",
  "Dados Reais",
  "Funil Completo",
  "ROI Previsível",
  "Resultados",
];

export default function CTAWithHorizontalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    let rafId: number;
    let isVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (!isVisible && rafId) {
          cancelAnimationFrame(rafId);
        } else if (isVisible) {
          rafId = requestAnimationFrame(updateOpacity);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(marqueeContainer);

    const updateOpacity = () => {
      if (!isVisible) return;

      const items = marqueeContainer.querySelectorAll('.marquee-item-horizontal');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterX = itemRect.left + itemRect.width / 2;
        const distance = Math.abs(centerX - itemCenterX);
        const maxDistance = containerRect.width / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        const opacity = 0.3 + (1 - normalizedDistance) * 0.7;
        (item as HTMLElement).style.opacity = opacity.toString();
      });

      rafId = requestAnimationFrame(updateOpacity);
    };

    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="contact" className="relative w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-background overflow-hidden" aria-labelledby="cta-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-100 dark:bg-electric-900/30 border border-electric-200 dark:border-electric-800" aria-hidden="true">
              <span className="text-xs font-bold text-electric-700 dark:text-electric-400 uppercase tracking-wide">
                Comece Agora
              </span>
            </div>

            <h2 id="cta-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground px-4">
              Pronto para crescer com{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-600 to-electric-400 dark:from-electric-400 dark:to-electric-200">
                método e estratégia?
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4">
              Transforme tráfego em crescimento previsível. Agende uma conversa e descubra como podemos acelerar seus resultados.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-10 justify-center pt-2 sm:pt-4 px-4">
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button 
                  className="w-full sm:min-w-[280px] group relative px-8 py-6 min-h-[60px] bg-electric-500 text-white rounded-md font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-electric-600 touch-manipulation"
                  aria-label="Falar com especialista via WhatsApp"
                >
                  <span className="relative z-10">FALAR COM ESPECIALISTA</span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" aria-hidden="true"></div>
                </button>
              </Link>
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button 
                  className="w-full sm:min-w-[280px] group relative px-8 py-6 min-h-[60px] bg-transparent text-foreground rounded-md font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-border hover:border-electric-500 touch-manipulation"
                  aria-label="Agendar diagnóstico via WhatsApp"
                >
                  <span className="relative z-10">AGENDAR DIAGNÓSTICO</span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-electric-500/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" aria-hidden="true"></div>
                </button>
              </Link>
            </div>
          </div>


          <div ref={marqueeRef} className="relative w-full mt-4 sm:mt-6 md:mt-8" aria-hidden="true">
            <div className="relative py-4 sm:py-6">
              <HorizontalMarquee speed={30}>
                {marqueeItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight marquee-item-horizontal whitespace-nowrap text-navy-800 dark:text-white/80 pb-3"
                  >
                    {item}
                  </div>
                ))}
              </HorizontalMarquee>
              

              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 md:w-56 lg:w-72 bg-linear-to-r from-background via-background/50 to-transparent z-10"></div>
              

              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 md:w-56 lg:w-72 bg-linear-to-l from-background via-background/50 to-transparent z-10"></div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-b from-transparent to-background backdrop-blur-sm z-20" />
    </section>
  );
}
