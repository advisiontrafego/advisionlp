'use client';

import { LogoCarousel } from '../ui/logo-carousel';
import LogoDanieleADV from '../logos/clientes/LogoDanieleADV';
import LogoDikazza from '../logos/clientes/LogoDikazza';
import LogoDionisio from '../logos/clientes/LogoDionisio';
import LogoGrazi from '../logos/clientes/LogoGrazi';
import LogoMarina from '../logos/clientes/LogoMarina';
import LogoMoreno from '../logos/clientes/LogoMoreno';
import LogoThaTha from '../logos/clientes/LogoThaTha';
import LogoVltAdv from '../logos/clientes/LogoVltAdv';
import LogoVltImv from '../logos/clientes/LogoVltImv';
import { LogoFull } from '../logos/LogoFull';

const allLogos = [
  { name: 'Daniele ADV', id: 1, img: LogoDanieleADV },
  { name: 'Dikazza', id: 2, img: LogoDikazza },
  { name: 'Dionisio', id: 3, img: LogoDionisio },
  { name: 'Grazi', id: 4, img: LogoGrazi },
  { name: 'Marina', id: 5, img: LogoMarina },
  { name: 'Moreno', id: 6, img: LogoMoreno },
  { name: 'ThaTha', id: 7, img: LogoThaTha },
  { name: 'VLT ADV', id: 8, img: LogoVltAdv },
  { name: 'VLT IMV', id: 9, img: LogoVltImv },
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

