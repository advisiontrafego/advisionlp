"use client";

import { m } from "motion/react";
import Teams from "@/components/Teams";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-background"
      aria-labelledby="team-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-block mb-4" aria-hidden="true">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-electric-500 dark:text-electric-400">
              O Time
            </p>
          </div>

          <h2
            id="team-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-6"
          >
            Quem vai cuidar do{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-electric-600 to-electric-400 dark:from-electric-400 dark:to-electric-200">
              seu escritório.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto">
            Nosso time cuida do seu negócio como se fosse nosso. Você fala direto com quem executa a sua
            campanha, não com atendimento.
          </p>
        </m.div>

        <Teams />
      </div>
    </section>
  );
}

