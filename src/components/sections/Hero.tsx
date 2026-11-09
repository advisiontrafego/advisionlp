"use client";
import { Header } from "@/components/sections/Header";
import Link from "next/link";
import dynamic from "next/dynamic";
import TextType from "../TextType";
import { FlowButton } from "../ui/flow-button";
import { WHATSAPP_URL } from "@/lib/constants";

const RotatingEarth = dynamic(() => import("@/components/OrbitLogos"), {
  loading: () => (
    <div className="flex justify-center items-center w-full h-full min-h-[300px] lg:min-h-[400px]" />
  ),
  ssr: false,
});

const TYPING_TEXTS = ["Método.", "Previsibilidade.", "Estratégia."];

export default function Hero() {
  return (
    <>
      <Header />
      <section
        id="hero"
        className="relative overflow-hidden min-h-screen w-full flex items-center justify-center pt-16 md:pt-0"
        aria-label="Seção principal"
      >
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="hero-grid"></div>
        </div>

        <div className="w-full h-full flex items-center justify-center px-6 py-6 md:px-12 md:py-12 lg:px-16 4xl:px-24">
          <div className="mx-auto max-w-7xl xl:max-w-[88rem] 3xl:max-w-[110rem] 4xl:max-w-[140rem] 5xl:max-w-[200rem] w-full">
            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 md:gap-16 lg:gap-12 3xl:gap-16 4xl:gap-24 items-center">
              <div className="text-left md:text-center lg:text-left space-y-6 md:space-y-10 4xl:space-y-14 5xl:space-y-20">
                {/* Mobile: tamanho fluido pela largura da tela.
                    A partir do lg, cada tamanho foi calculado para "Advocacia não é sorte."
                    caber em uma linha na largura da coluna do breakpoint */}
                <h1 className="text-[length:clamp(2.25rem,13vw,3.5rem)] sm:text-[3.5rem] md:text-6xl lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4.25rem] 3xl:text-[5.25rem] 4xl:text-[6.75rem] 5xl:text-[9.5rem] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                  Advocacia <br className="sm:hidden" />
                  não é sorte. <br />
                  Cresça com <br />
                  {/* Mobile: o destaque usa o maior tamanho em que "Previsibilidade."
                      (palavra mais longa) cabe na linha, sem passar do tamanho do h1 */}
                  <span className="inline-block text-[length:min(1em,calc(14.25vw_-_0.75rem))] sm:text-[length:1em]">
                    <TextType
                      text={TYPING_TEXTS}
                      className="text-white bg-electric-500 px-2 rounded"
                      typingSpeed={90}
                      deletingSpeed={50}
                      pauseDuration={1000}
                      initialDelay={800}
                    />
                  </span>
                </h1>
                <p className="text-lg md:text-xl 3xl:text-2xl 4xl:text-[1.875rem] 5xl:text-[2.75rem] leading-relaxed text-gray-900 dark:text-gray-300 max-w-2xl 3xl:max-w-3xl 4xl:max-w-4xl 5xl:max-w-6xl md:mx-auto lg:mx-0">
                  <strong>Tráfego pago</strong>, <strong>estrutura comercial</strong> e{" "}
                  <strong>análise de dados</strong>. É o que faz um escritório crescer com
                  previsibilidade e parar de depender de indicação.
                </p>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Falar com especialista via WhatsApp"
                  >
                    <FlowButton
                      text="Falar com especialista"
                      className="4xl:min-h-[72px] 4xl:min-w-[360px] 4xl:px-12 4xl:text-xl 5xl:min-h-[104px] 5xl:min-w-[520px] 5xl:px-16 5xl:text-3xl 5xl:rounded-2xl"
                    />
                  </Link>
                </div>
              </div>

              <div
                className="flex justify-center items-center w-full overflow-visible py-8"
                aria-hidden="true"
              >
                <RotatingEarth />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
