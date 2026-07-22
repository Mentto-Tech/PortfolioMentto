import type { Metadata } from "next";
import { SiteShell, ChevronPattern } from "@/components/site-chrome";
import ContatoForm from "./form";
import "./contato.css";

export const metadata: Metadata = {
  title: "Contato — Diagnóstico gratuito | Mentto",
  description:
    "Conta o que está acontecendo. A Mentto escuta primeiro — o diagnóstico é gratuito, sem cardápio, sem pressa de fechar.",
  openGraph: {
    title: "Contato — Diagnóstico gratuito | Mentto",
    description: "Conta o que está acontecendo. A gente escuta primeiro.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function ContatoPage() {
  return (
    <SiteShell>
      {/* 1ª DOBRA — Destaque do diagnóstico gratuito */}
      <section className="hero-radial relative overflow-hidden text-white">
        <ChevronPattern className="absolute inset-0 h-full w-full text-white/[0.08]" />
        <div className="container-mentto relative py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
              {/* Badge de gratuito */}
              <div className="inline-flex items-center gap-2 bg-[#FFC300] text-[#333] font-heading font-bold text-sm px-5 py-2 rounded-full mb-6">
                ✦ O DIAGNÓSTICO É 100% GRATUITO
              </div>

              <span className="eyebrow eyebrow-amarelo block mb-2">
                Diagnóstico
              </span>
              <h1 className="font-heading font-bold text-white text-[2.25rem] md:text-[3.25rem] leading-[1.05]">
                Antes de vender qualquer coisa, a gente escuta.
              </h1>
              <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[48ch] leading-relaxed">
                Uma conversa curta para enxergar a empresa como ela é — não
                como o dono gostaria. Sem cardápio, sem pressa de fechar. O
                diagnóstico é real: a gente entende o momento antes de indicar
                qualquer caminho.
              </p>

              {/* Pontos de reforço */}
              <ul className="mt-8 space-y-3">
                {[
                  "Sem custo. Sem compromisso. Só a conversa.",
                  "A gente responde em até 2 dias úteis.",
                  "Sem lista, sem newsletter — o que você conta fica entre nós.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#F3F1EB]/90">
                    <span className="text-[#FFC300] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-2 text-[#F3F1EB]/70 text-sm">
                <div className="font-heading font-semibold text-white">Mentto</div>
                <div>Pompeia/SP — atende todo o Brasil</div>
                <div>
                  <a
                    href="mailto:contato@mentto.com.br"
                    className="underline underline-offset-4 hover:text-[#FFC300] transition"
                  >
                    contato@mentto.com.br
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+5514981756771"
                    className="underline underline-offset-4 hover:text-[#FFC300] transition"
                  >
                    (14) 98175-6771
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <ContatoForm />
            </div>
          </div>
        </div>
      </section>

      {/* 2ª DOBRA — O que é o diagnóstico */}
      <section className="bg-[#F3F1EB]">
        <div className="container-mentto py-20 md:py-24">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-petroleo">O que é o diagnóstico</span>
            <h2 className="mt-1 font-heading font-bold text-[1.75rem] md:text-[2.5rem] leading-tight text-[#083D5F]">
              O gargalo não é conhecimento. É presença.
            </h2>
            <p className="mt-5 text-lg text-[#333]/80 leading-relaxed max-w-[60ch]">
              Alguém que não deixa o plano morrer na gaveta. Esse é o
              diferencial real da Mentto — e é exatamente o que o diagnóstico
              começa a revelar. Foi um cliente que disse melhor do que qualquer
              slide:{" "}
              <em>
                &quot;o que vocês entregam é ajudar no comprometimento das
                pessoas.&quot;
              </em>
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "Reconhecer",
                d: "Antes de qualquer plano, entender o momento. Pessoas, números, história — sem suavizar a verdade.",
                c: "border-[#107F8D]",
                e: "text-[#107F8D]",
              },
              {
                n: "Sem pressa",
                d: "A gente escuta primeiro, antes de indicar qualquer caminho. Não existe cardápio pronto para vender.",
                c: "border-[#C25D44]",
                e: "text-[#C25D44]",
              },
              {
                n: "Gratuito de verdade",
                d: "Sem custo, sem compromisso. Se fizer sentido avançar, a gente apresenta o que cabe no seu momento.",
                c: "border-[#FFC300]",
                e: "text-[#083D5F]",
              },
            ].map((b) => (
              <div key={b.n} className={`bg-white rounded-lg p-7 border-l-4 ${b.c}`}>
                <div className={`font-heading font-bold text-base ${b.e} uppercase tracking-wide text-xs mb-3`}>
                  {b.n}
                </div>
                <p className="text-[#333]/75 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
