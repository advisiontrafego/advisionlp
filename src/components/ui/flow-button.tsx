'use client';
import { ArrowRight } from 'lucide-react';

export  function FlowButton({ text = "Entrar em Contato" }: { text?: string }) {
  return (
    <button className="group relative flex items-center gap-1 overflow-hidden rounded-xl border-[1.5px] border-transparent bg-electric-500 px-10 py-5 min-h-[56px] min-w-[280px] text-base font-semibold text-white cursor-pointer transition-all duration-600ms ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-electric-600 active:scale-[0.95]">
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className="absolute w-5 h-5 left-[-25%] stroke-white fill-none z-9 group-hover:left-5 transition-all duration-800ms ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text */}
      <span className="relative z-1 -translate-x-3 group-hover:translate-x-3 transition-all duration-800ms ease-out">
        {text}
      </span>

      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className="absolute w-5 h-5 right-5 stroke-white fill-none z-9 group-hover:right-[-25%] transition-all duration-3000ms ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );
}
