"use client";

import  { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Quanto preciso investir nos anúncios?",
    answer: "Recomendamos um investimento inicial mínimo de R$ 3.000,00 por mês em mídia. Esse valor garante volume de dados suficiente para que nosso método de otimização funcione e traga leads qualificados e vendas reais com previsibilidade."
  },
  {
    question: "Em quanto tempo verei os resultados?",
    answer: "Não vendemos sorte nem 'hacks' milagrosos. O tráfego pago gera dados imediatos, mas a maturação da campanha ocorre nas primeiras semanas. Nossos clientes costumam ver tração consistente e otimizada a partir do primeiro mês de trabalho sério e estruturado."
  },
  {
    question: "Vocês garantem resultado ou faturamento?",
    answer: "Fugimos de promessas de 'resultado garantido' pois o mercado é dinâmico. O que garantimos é método: análise de dados diária, testes A/B constantes e uma busca incansável por bater as metas. O resultado financeiro vem da parceria entre nossa estratégia de tráfego e seu processo comercial."
  },
  {
    question: "Trabalham com quais plataformas?",
    answer: "Atuamos onde seu cliente está. Somos especialistas em Meta Ads (Instagram/Facebook), Google Ads (Rede de Pesquisa, YouTube e Display) e TikTok Ads, focando sempre no canal que traz maior retorno sobre o investimento (ROAS) para seu nicho específico."
  },
  {
    question: "Não tenho site ou Landing Page, a Advision faz?",
    answer: "Sim. Sabemos que tráfego sem uma boa página de conversão é dinheiro jogado fora. Como parte do nosso escopo de 'Funil Completo', analisamos e podemos desenvolver ou otimizar suas Landing Pages para garantir que os cliques virem clientes."
  },
  {
    question: "Como vou acompanhar o trabalho?",
    answer: "Clareza é nosso pilar. Você terá acesso a relatórios transparentes e reuniões periódicas de alinhamento. Não usamos 'impresionês': mostramos quanto foi investido e quanto retornou em leads ou vendas (ROAS), para que você tome decisões de negócio conosco."
  },
  {
    question: "Meu negócio é pequeno/local, a Advision serve para mim?",
    answer: "Atendemos empresas que buscam crescimento profissional, sejam negócios locais (imobiliárias, clínicas, lojas) ou digitais, que faturem até R$ 100k/mês e queiram escalar. Se você tem maturidade para investir em marketing profissional, somos o parceiro ideal."
  },
  {
    question: "Como funciona o contrato e fidelidade?",
    answer: "Trabalhamos com contratos focados na parceria. Acreditamos que você deve ficar na agência porque estamos gerando lucro e resultados reais, criando uma relação de longo prazo baseada em confiança e dados, não apenas em cláusulas de multa."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick, index }: { question: string, answer: string, isOpen: boolean, onClick: () => void, index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "border rounded-xl mb-4 overflow-hidden transition-all duration-300",
        isOpen 
          ? "border-electric-500/50 bg-electric-50/50 dark:bg-navy-800/50 shadow-lg shadow-electric-500/5" 
          : "border-neutral-200 dark:border-navy-700 bg-white dark:bg-navy-900 hover:border-electric-500/30"
      )}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className={cn(
            "text-lg font-semibold transition-colors duration-200",
            isOpen ? "text-electric-600 dark:text-electric-400" : "text-gray-800 dark:text-gray-200"
        )}>
          {question}
        </span>
        <div className={cn(
            "p-1 rounded-full border transition-all duration-300 ml-4 shrink-0",
            isOpen 
                ? "bg-electric-500 border-electric-500 rotate-180" 
                : "bg-transparent border-neutral-300 dark:border-navy-600"
        )}>
           <ChevronDown className={cn("w-5 h-5 transition-colors", isOpen ? "text-white" : "text-gray-500 dark:text-gray-400")} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
               <p className="text-gray-600 dark:text-slate-300 leading-relaxed font-medium border-t border-dashed border-electric-200 dark:border-navy-700 pt-4">
                 {answer}
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 bg-white dark:bg-navy-950">
       <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
          
          <div className="text-center mb-16 space-y-4">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-navy-800 border border-neutral-200 dark:border-navy-700">
                 <span className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide">Dúvidas Frequentes</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                Ainda tem alguma <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 to-electric-400">dúvida?</span>
             </h2>
             <p className="text-gray-600 dark:text-slate-400 text-lg">
                Entenda como trabalhamos e porque somos o parceiro ideal para seu crescimento.
             </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

       </div>
    </section>
  );
}
