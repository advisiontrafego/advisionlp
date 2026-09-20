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
        className="relative overflow-hidden min-h-screen w-full flex items-center justify-center pt-20 md:pt-0"
        aria-label="Seção principal"
      >
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="hero-grid"></div>
        </div>

        <div className="w-full h-full flex items-center justify-center px-6 py-12 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl xl:max-w-[88rem] w-full">
            <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 md:gap-16 lg:gap-12 items-center">
              <div className="text-center lg:text-left space-y-6 md:space-y-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-[3.5rem] 2xl:text-[4rem] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                  Advocacia <br />
                  não é sorte. <br />
                  Cresça com <br />
                  <span className="inline-block">
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
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-900 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
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
                    <FlowButton text="Falar com especialista" />
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
