'use client';

import { m } from 'motion/react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FlowButton } from '../ui/flow-button';
import { WHATSAPP_URL } from '@/lib/constants';

const Crosshair = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Crosshair })), { ssr: false });
const LineChart = dynamic(() => import('lucide-react').then(mod => ({ default: mod.LineChart })), { ssr: false });
const Filter = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Filter })), { ssr: false });
const RotateCw = dynamic(() => import('lucide-react').then(mod => ({ default: mod.RotateCw })), { ssr: false });
const Check = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Check })), { ssr: false });

const services = [
  {
    icon: Crosshair,
    title: 'Tráfego Estratégico',
    subtitle: 'Seja encontrado por quem importa',
    description: (
      <>
        <strong>Anúncios</strong> que <strong>atraem</strong> quem <strong>realmente importa</strong>. Google, Meta, TikTok — cada plataforma com estratégia própria.
      </>
    ),
    points: [
      'Campanhas para Google Ads, Meta Ads e mais',
      'Segmentação baseada no seu ICP real',
      'Orçamento otimizado, sem desperdício',
    ],
  },
  {
    icon: LineChart,
    title: 'Rastreamento Avançado',
    subtitle: 'Tome decisões com Inteligência.',
    description: (
      <>
        Sabemos de onde vem <strong>cada lead</strong> e <strong>cada venda</strong>. Relatórios que <strong>fazem sentido</strong>.
      </>
    ),
    points: [
      'Pixel e conversões configurados corretamente',
      'Atribuição clara por canal e origem',
      'Rastreamento no WhatsApp e qualificação dos leads',
    ],
  },
  {
    icon: Filter,
    title: 'Funil Completo',
    subtitle: 'Do clique ao fechamento',
    description: (
      <>
        <strong>Performance</strong> vai <strong>além do anúncio</strong>. Trabalhamos do tráfego até a <strong>conversão final</strong>.
      </>
    ),
    points: [
      'Landing pages otimizadas',
      'Fluxo de WhatsApp estruturado',
      'Alinhamento com equipe de vendas',
    ],
  },
  {
    icon: RotateCw,
    title: 'Otimização Contínua',
    subtitle: 'Decisões melhores, resultados melhores',
    description: (
      <>
        Ajustamos com base em <strong>dados</strong>. <strong>Análise constante</strong> para <strong>escalar com controle</strong>.
      </>
    ),
    points: [
      'Análise semanal de performance',
      'Testes A/B constantes',
      'Escala com controle',
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="relative w-full py-18 overflow-hidden bg-background pb-4" aria-labelledby="services-title">
      <div className="absolute inset-0 -z-10 opacity-40 mix-blend-soft-light dark:mix-blend-screen" aria-hidden="true">
        <div className="hero-grid"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4" aria-hidden="true">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-electric-500 dark:text-electric-400">
              Método Advision
            </p>
          </div>
          
          <h2 id="services-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Como fazemos seu negócio{' '}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-electric-600 to-electric-400 dark:from-electric-400 dark:to-electric-200">
              crescer de verdade.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
            Do tráfego ao faturamento, com decisões baseadas em dados. <br className="hidden md:block"/>
            Sem achismo. Sem fórmulas prontas.
          </p>
        </m.div>


        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          role="list"
          aria-label="Lista de serviços"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <m.article
              key={service.title}
              role="listitem"
              variants={fadeInUp}
              transition={{ duration: 0.4 }}
              className="group relative p-6 rounded-4xl bg-card dark:bg-navy-800/40 border border-neutral-200 dark:border-navy-600/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_20px_60px_rgb(52,73,234,0.3)] dark:hover:shadow-[0_20px_60px_rgb(52,73,234,0.1)] hover:border-electric-500 hover:scale-[1.02] hover:z-10 transition-all duration-300 will-change-transform"
            >

              <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-electric-500 text-white mb-6 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              </div>


              <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight leading-tight">
                {service.title}
              </h3>
              <p className="text-base font-semibold text-foreground/80 mb-4 leading-snug">
                {service.subtitle}
              </p>
              <p className="text-sm font-medium text-foreground/70 dark:text-foreground/90 mb-6 leading-relaxed min-h-15">
                {service.description}
              </p>


              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground dark:text-white">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-electric-500/10 text-electric-600 dark:text-electric-400 mt-0.5 shrink-0" aria-hidden="true"><Check className='w-3.5'/></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </m.article>
          ))}
        </m.div>


        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold text-foreground mb-6 max-w-2xl mx-auto">
            Quer crescer com Inteligência e previsibilidade?
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
