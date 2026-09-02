'use client';

import { LogoCarousel } from '../ui/logo-carousel';
import LogoDanieleADV from '../logos/clientes/LogoDanieleADV';
import LogoJaciaraSoares from '../logos/clientes/LogoJaciaraSoares';
import LogoJuliaBenati from '../logos/clientes/LogoJuliaBenati';
import LogoMoreno from '../logos/clientes/LogoMoreno';
import LogoNathiaraBorges from '../logos/clientes/LogoNathiaraBorges';
import LogoPryscilaDroppa from '../logos/clientes/LogoPryscilaDroppa';
import LogoRamosValadao from '../logos/clientes/LogoRamosValadao';
import LogoSandraVilela from '../logos/clientes/LogoSandraVilela';
import LogoVilmarCrisanto from '../logos/clientes/LogoVilmarCrisanto';
import { LogoFull } from '../logos/LogoFull';

const allLogos = [
  { name: 'Daniele ADV', id: 1, img: LogoDanieleADV },
  { name: 'Moreno', id: 2, img: LogoMoreno },
  { name: 'Jaciara Soares', id: 3, img: LogoJaciaraSoares },
  { name: 'Julia Benati', id: 4, img: LogoJuliaBenati },
  { name: 'Nathiara Borges', id: 5, img: LogoNathiaraBorges },
  { name: 'Pryscila Droppa', id: 6, img: LogoPryscilaDroppa },
  { name: 'Ramos e Valadao', id: 7, img: LogoRamosValadao },
  { name: 'Sandra Vilela', id: 8, img: LogoSandraVilela },
  { name: 'Vilmar Crisanto', id: 9, img: LogoVilmarCrisanto },
];

export function LogoCarouselSection() {
  return (
    <section className="relative w-full py-4 sm:py-24" aria-label="Clientes parceiros">
      <div className="absolute inset-x-0 top-0 h-px bg-background" aria-hidden="true" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Parceiros que confiam na
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            <LogoFull className="inline-block w-auto h-7 sm:h-9 mt-2" aria-label="Advision" />
          </h3>
        </div>
        
        <div className="flex justify-center mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" aria-hidden="true">
          <LogoCarousel columnCount={3} logos={allLogos} />
        </div>
      </div>
    </section>
  );
}

