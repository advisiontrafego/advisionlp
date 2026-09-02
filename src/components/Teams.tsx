"use client";
import Image from "next/image";
import { m } from "motion/react";

const members = [
  {
    id: "gabriel",
    src: "/team/gabriel.png",
    width: 928,
    height: 1152,
    name: "Gabriel Lemos",
    role: "Fundador e Gestor",
  },
  {
    id: "rafael",
    src: "/team/rafael.jpeg",
    width: 1066,
    height: 1600,
    name: "Rafael Américo",
    role: "Gestor de Tráfego",
  },
  {
    id: "alexandre",
    src: "/team/alexandre.png",
    width: 1520,
    height: 2688,
    name: "Alexandre Garcia",
    role: "Gestor e Desenvolvedor",
  },
];

// Revela nome e cargo no hover e no foco de teclado.
const reveal =
  "md:translate-y-3 md:opacity-0 transition duration-300 ease-out group-hover/article:translate-y-0 group-hover/article:opacity-100 group-focus-within/article:translate-y-0 group-focus-within/article:opacity-100";

// Anima flex-grow, nao width: num flex container a largura final e resolvida
// pelo algoritmo de flex, entao o card que expande nao tem mudanca de `width`
// para transicionar e saltaria. grow-[0.72] mantem o card expandido ainda em
// retrato, perto da proporcao das fotos, evitando reenquadramento agressivo.
// As classes precisam estar literais aqui: o Tailwind varre o texto do arquivo.

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

// easeOutQuint: sai rapido e desacelera longo, o que da a sensacao de fluidez
const card = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Teams() {
  return (
    <m.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className="group flex max-md:flex-col justify-center gap-3 w-full max-w-6xl mx-auto list-none"
      aria-label="Integrantes da equipe Advision"
    >
      {members.map((member) => (
        <m.li
          key={member.id}
          variants={card}
          className="group/article relative w-full md:flex-1 md:basis-0 h-96 md:h-[560px] rounded-3xl overflow-hidden transition-[flex-grow] duration-500 ease-[cubic-bezier(.5,.85,.25,1.15)] md:not-[&:hover]:group-hover:grow-[0.72] md:[&:not(:focus-within):not(:hover)]:group-focus-within:grow-[0.72] focus-within:ring-2 focus-within:ring-electric-500 focus-within:ring-offset-2 focus-within:ring-offset-background before:absolute before:inset-x-0 before:bottom-0 before:h-2/3 before:bg-linear-to-t before:from-black/85 before:via-black/40 before:to-transparent before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 md:focus-within:before:opacity-100 after:absolute after:inset-0 after:rounded-3xl after:bg-background/25 after:backdrop-blur-xs after:opacity-0 after:transition-opacity after:duration-500 md:not-[&:hover]:group-hover:after:opacity-100"
        >
          <figure className="contents">
            <Image
              className="h-full w-full object-cover object-top"
              src={member.src}
              width={member.width}
              height={member.height}
              quality={100}
              unoptimized
              alt={`Retrato de ${member.name}`}
            />

            <figcaption
              tabIndex={0}
              className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-1 p-6 md:p-7 text-white outline-none"
            >
              <span
                className={`block text-xl md:text-2xl font-bold leading-tight md:truncate md:whitespace-nowrap ${reveal} group-hover/article:delay-100 group-focus-within/article:delay-100`}
              >
                {member.name}
              </span>
              <span
                className={`block text-sm md:text-base font-medium text-white/85 leading-snug md:truncate md:whitespace-nowrap ${reveal} group-hover/article:delay-200 group-focus-within/article:delay-200`}
              >
                {member.role}
              </span>
            </figcaption>
          </figure>
        </m.li>
      ))}
    </m.ul>
  );
}
