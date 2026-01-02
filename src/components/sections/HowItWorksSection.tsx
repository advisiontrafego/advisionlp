"use client";
import HowItWorks from "../ui/HowItWorks";
import { m } from "motion/react";
import Link from "next/link";
import { FlowButton } from "../ui/flow-button";
import { WHATSAPP_URL } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Atração Qualificada",
    description: "Conectamos sua marca às principais plataformas (Google, Meta, TikTok) para atingir, com precisão, o público que realmente compra de você.",
  },
  {
    number: "02",
    title: "Inteligência de Dados",
    description: "Nossa tecnologia proprietária cruza dados de campanha, site e vendas para entender não só quem clica, mas quem converte.",
  },
  {
    number: "03",
    title: "Escala Previsível",
    description: "Com o funil validado, escalamos o investimento mantendo o ROI saudável. Transformamos dados em crescimento real.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative w-full py-24 overflow-hidden bg-linear-to-br from-neutral-100 via-background to-background dark:from-navy-800 dark:via-background dark:to-background border-t border-border" aria-labelledby="how-it-works-title">
      

      <div className="absolute inset-0 bg-linear-to-br from-electric-500/5 via-transparent to-transparent dark:from-electric-500/10 pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          

          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 dark:bg-electric-500/20 border border-electric-500/20 dark:border-electric-500/30" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-electric-500 dark:bg-electric-400 animate-pulse" />
                <span className="text-xs font-semibold text-electric-600 dark:text-electric-400 uppercase tracking-wide">Fluxo de Alta Performance</span>
              </div>
              <h2 id="how-it-works-title" className="text-3xl md:text-5xl font-bold text-foreground dark:text-white tracking-tight leading-tight">
                Como transformamos <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-600 to-electric-400 dark:from-electric-400 dark:to-electric-200">
                  Tráfego em Receita
                </span>
              </h2>
              <p className="text-lg text-foreground dark:text-white/70 max-w-lg leading-relaxed">
                Esqueça métricas de vaidade. Nosso foco é conectar todas as pontas do seu marketing para gerar vendas reais.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-electric-500 dark:bg-electric-500 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg group-hover:shadow-electric-500/30 transition-all duration-300" aria-hidden="true">
                      {step.number}
                  </div>
                  <div>
                      <h3 className="text-xl font-bold text-foreground dark:text-white mb-2 group-hover:text-electric-500 dark:group-hover:text-electric-400 transition-colors">{step.title}</h3>
                      <p className="text-foreground dark:text-white/70 leading-relaxed text-sm md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="relative flex justify-center lg:justify-end">

            <div className="absolute inset-0 bg-electric-500/5 dark:bg-electric-500/10 rounded-full pointer-events-none transform translate-x-10 scale-75" aria-hidden="true" />
            
            <m.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 w-full max-w-150"
            >
                <HowItWorks 
                  badgeTexts={{
                    first: "Meta",
                    second: "Google",
                    third: "TikTok",
                    fourth: "Site"
                  }}
                  buttonTexts={{
                    first: "Público Qualificado",
                    second: "Análise de Conversão",
                    third: "ROI Saudável"
                  }}
                  title="Atração → Inteligência → Escala"
                  lightColor="#3449ea"
                />
            </m.div>
          </div>

        </div>
        
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl font-bold text-foreground mb-6 max-w-2xl mx-auto">
            Pronto para transformar tráfego em receita?
          </p>
          <div className="flex justify-center">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com especialista via WhatsApp"
            >
              <FlowButton text="Falar com especialista" />
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
}
