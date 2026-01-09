"use client";

import { TestimonialSlider } from "@/components/testimonial-slider-1";
import LogoDanieleADV from "@/components/logos/clientes/LogoDanieleADV";
import LogoDikazza from "@/components/logos/clientes/LogoDikazza";
import LogoDionisio from "@/components/logos/clientes/LogoDionisio";
import LogoMarina from "@/components/logos/clientes/LogoMarina";
import LogoMoreno from "@/components/logos/clientes/LogoMoreno";
import LogoVltAdv from "@/components/logos/clientes/LogoVltAdv";
import LogoVltImv from "@/components/logos/clientes/LogoVltImv";
import LogoGrazi from "@/components/logos/clientes/LogoGrazi";
import LogoThaTha from "@/components/logos/clientes/LogoThaTha";

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
    name: "Dikazza Móveis",
    affiliation: "Loja de Móveis",
    quote: "No primeiro mês de parceria já vimos resultados expressivos. A Advision não só aumentou nosso Faturamento, mas também melhorou significativamente nosso Branding dentro da nossa Cidade.",
    LogoComponent: LogoDikazza,
  },
  {
    id: 3,
    name: "Dionísio Birnfeld",
    affiliation: "Advocacia",
    quote: "Finalmente entendemos de onde vêm nossos resultados. O rastreamento no WhatsApp é impecável e nos trouxe clareza.",
    LogoComponent: LogoDionisio,
  },
  {
    id: 4,
    name: "Mariana Faoro de Borba",
    affiliation: "Advocacia",
    quote: "A Advision é muito profissional e comprometida com o resultado! Estou super satisfeita com o trabalho deles. Recomendo muito!",
    LogoComponent: LogoMarina,
  },
  {
    id: 5,
    name: "Moreno & Santiago",
    affiliation: "Advocacia",
    quote: "Investimento otimizado e resultados claros. A Advision entende nosso negócio e entrega performance de verdade.",
    LogoComponent: LogoMoreno,
  },
  {
    id: 6,
    name: "VLT Advogados Associados",
    affiliation: "Advocacia",
    quote: "Escalamos com controle total. Sabemos exatamente quanto investir e quanto e de onde retorna.",
    LogoComponent: LogoVltAdv,
  },
  {
    id: 7,
    name: "VLT Imóveis",
    affiliation: "Imobiliária",
    quote: "Do tráfego ao fechamento, tudo rastreado. A Advision nos deu visibilidade completa do nosso funil de vendas.",
    LogoComponent: LogoVltImv,
  },
  {
    id: 8,
    name: "Grazi Boutique",
    affiliation: "Loja de Roupas",
    quote: "A Advision mudou nossa loja e Faturamento, são mais de 2 anos de Parceria.",
    LogoComponent: LogoGrazi,
  },
  {
    id: 9,
    name: "THA e THA Lingeries",
    affiliation: "Loja de Roupa Íntima",
    quote: "A Advision trouxe transparência, método e resultados que podemos comprovar mês a mês.",
    LogoComponent: LogoThaTha,
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
