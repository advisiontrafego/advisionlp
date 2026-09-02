"use client";

import { TestimonialSlider } from "@/components/testimonial-slider-1";
import LogoDanieleADV from "@/components/logos/clientes/LogoDanieleADV";
import LogoMoreno from "@/components/logos/clientes/LogoMoreno";
import LogoJaciaraSoares from "@/components/logos/clientes/LogoJaciaraSoares";
import LogoJuliaBenati from "@/components/logos/clientes/LogoJuliaBenati";
import LogoNathiaraBorges from "@/components/logos/clientes/LogoNathiaraBorges";
import LogoPryscilaDroppa from "@/components/logos/clientes/LogoPryscilaDroppa";
import LogoRamosValadao from "@/components/logos/clientes/LogoRamosValadao";
import LogoSandraVilela from "@/components/logos/clientes/LogoSandraVilela";
import LogoVilmarCrisanto from "@/components/logos/clientes/LogoVilmarCrisanto";

const testimonials = [
  {
    id: 1,
    name: "Daniele Demenek",
    affiliation: "Advocacia para Mulheres",
    quote: "Fui apresentada à Advision por meio de indicação, ao longo do trabalho, pude comprovar o alto nível de dedicação, profissionalismo e transparência. A empresa é extremamente confiável e cumpre rigorosamente tudo aquilo que se propõe a fazer. Recomendo com tranquilidade!",
    LogoComponent: LogoDanieleADV,
  },
  {
    id: 2,
    name: "Jaciara Soares",
    affiliation: "Advocacia e Consultoria Juridica",
    // TODO: PLACEHOLDER (texto de cliente anterior) - trocar pelo depoimento real de Jaciara Soares
    quote: "No primeiro mês de parceria já vimos resultados expressivos. A Advision não só aumentou nosso Faturamento, mas também melhorou significativamente nosso Branding dentro da nossa Cidade.",
    LogoComponent: LogoJaciaraSoares,
  },
  {
    id: 3,
    name: "Julia Benati",
    affiliation: "Advocacia para empresários",
    // TODO: PLACEHOLDER (texto de cliente anterior) - trocar pelo depoimento real de Julia Benati
    quote: "Finalmente entendemos de onde vêm nossos resultados. O rastreamento no WhatsApp é impecável e nos trouxe clareza.",
    LogoComponent: LogoJuliaBenati,
    scale: 0.75,
  },
  {
    id: 4,
    name: "Nathiara Borges",
    affiliation: "Advocacia da Saúde",
    // TODO: PLACEHOLDER (texto de cliente anterior) - trocar pelo depoimento real de Nathiara Borges
    quote: "A Advision é muito profissional e comprometida com o resultado! Estou super satisfeita com o trabalho deles. Recomendo muito!",
    LogoComponent: LogoNathiaraBorges,
  },
  {
    id: 5,
    name: "Moreno & Santiago",
    affiliation: "Advocacia da Saúde",
    quote: "Investimento otimizado e resultados claros. A Advision entende nosso negócio e entrega performance de verdade.",
    LogoComponent: LogoMoreno,
  },
  {
    id: 6,
    name: "Pryscila Droppa",
    affiliation: "Advocacia da Saúde",
    // TODO: PLACEHOLDER (texto de cliente anterior) - trocar pelo depoimento real de Pryscila Droppa
    quote: "Escalamos com controle total. Sabemos exatamente quanto investir e quanto e de onde retorna, são muito atenciosos e realmente preocupados com nossos resultados.",
    LogoComponent: LogoPryscilaDroppa,
    scale: 0.75,
  },
  {
    id: 7,
    name: "Ramos e Valadão",
    affiliation: "Advocacia Empresarial",
    // TODO: PLACEHOLDER (texto de cliente anterior) - trocar pelo depoimento real de Ramos e Valadão
    quote: "Do tráfego ao fechamento, tudo rastreado. A Advision nos deu visibilidade completa do nosso funil de vendas.",
    LogoComponent: LogoRamosValadao,
    scale: 0.75,
  },
  {
    id: 8,
    name: "Sandra Vilela",
    affiliation: "Advocacia da Saúde",
    // TODO: PLACEHOLDER (texto de cliente anterior) - trocar pelo depoimento real de Sandra Vilela
    quote: "A Advision nos surprendeu muito, muito mais do que apenas gestão de tráfego, entregam o que prometem, referência em Salário Maternidade.",
    LogoComponent: LogoSandraVilela,
  },
  {
    id: 9,
    name: "Vilmar Crisanto",
    affiliation: "Advocacia da Saúde",
    // TODO: PLACEHOLDER (texto de cliente anterior) - trocar pelo depoimento real de Vilmar Crisanto
    quote: "A Advision trouxe transparência, método e resultados que podemos comprovar mês a mês.",
    LogoComponent: LogoVilmarCrisanto,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full py-20 lg:py-32 overflow-hidden bg-background" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative z-20">
          <div className="inline-block mb-4">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-electric-500 dark:text-electric-400" aria-hidden="true">
              Resultados Reais
            </p>
          </div>
          
          <h2 id="testimonials-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.3] mb-6">
            Alguns parceiros que cresceram com{' '}
            <span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-electric-600 to-electric-400 dark:from-electric-400 dark:to-electric-200 pb-2">
              método e estratégia.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
            Empresas reais que transformaram tráfego em crescimento previsível.
          </p>
        </div>

        <TestimonialSlider reviews={testimonials} />
      </div>
    </section>
  );
}
