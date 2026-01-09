"use client";

import { useEffect, useRef} from "react";
import { m, useInView, useSpring, useTransform } from "motion/react";
import dynamic from "next/dynamic";

const DollarSign = dynamic(() => import('lucide-react').then(mod => ({ default: mod.DollarSign })), { ssr: false });
const Megaphone = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Megaphone })), { ssr: false });
const Zap = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Zap })), { ssr: false });
const Handshake = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Handshake })), { ssr: false });


const metrics = [
  {
    icon: DollarSign,
    value: 2,
    suffix: "M+",
    prefix: "R$ ",
    label: "Faturamento Gerado",
    description: "Crescimento real para nossos parceiros no último ano.",
  },
  {
    icon: Megaphone,
    value: 100,
    suffix: "K+",
    prefix: "R$ ",
    label: "Gerenciados em Ads",
    description: "Orçamento otimizado para máxima performance.",
  },
  {
    icon: Zap,
    value: 200,
    suffix: "+",
    prefix: "",
    label: "Otimizações Mensais",
    description: "Análises e ajustes contínuos nas campanhas.",
  },
  {
    icon: Handshake,
    value: 20,
    suffix: "+",
    prefix: "",
    label: "Clientes Parceiros",
    description: "Empresas que confiam no nosso método.",
  },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    mass: 0.5,
    stiffness: 75,
    damping: 15,
    duration: 1000,
  });
  
  // Create a display value that avoids decimal places during animation if integer
  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current).toLocaleString("pt-BR")
  );

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {prefix}
      <m.span>{displayValue}</m.span>
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-22 transition-colors duration-700 bg-background dark:bg-navy-950" aria-label="Métricas e resultados">
      <div className="absolute inset-0 z-0 dark:block hidden" style={{ background: 'radial-gradient(ellipse 50% 100% at 10% 0%, rgba(52, 73, 234, 0.1), transparent 65%)' }} aria-hidden="true" />
      <div className="absolute inset-0 z-0 dark:hidden" style={{ background: 'radial-gradient(ellipse 50% 100% at 10% 0%, rgba(52, 73, 234, 0.08), rgba(255, 255, 255, 0.95) 70%)' }} aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80 dark:block hidden"
        style={{ background: 'linear-gradient(130deg, rgba(52,73,234,0.08) 0%, transparent 65%)', mixBlendMode: 'screen' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80 dark:hidden"
        style={{ background: 'linear-gradient(130deg, rgba(52,73,234,0.06) 0%, transparent 70%)', mixBlendMode: 'multiply' }}
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 lg:gap-6">
          {metrics.map((metric, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex flex-col items-start justify-start text-left py-2 sm:py-8 px-4 w-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-electric-400/20 to-electric-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" aria-hidden="true" />
                  <div className="relative p-3 rounded-2xl bg-linear-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg shadow-electric-500/10">
                    <metric.icon className="w-7 h-7 text-electric-600 dark:text-electric-400 drop-shadow-[0_2px_8px_rgba(52,73,234,0.3)]" strokeWidth={2.5} aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-navy-600 to-navy-700 dark:from-electric-400 dark:to-electric-500 leading-none whitespace-nowrap" aria-label={`${metric.prefix}${metric.value}${metric.suffix}`}>
                  <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </div>
              </div>
              
              <h3 className="text-2xl sm:text-lg font-bolder text-navy-800 dark:text-white mb-3">
                {metric.label}
              </h3>
              
              <p className="text-1xl sm:text-sm text-navy-800/80 dark:text-slate-300 leading-relaxed">
                {metric.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
