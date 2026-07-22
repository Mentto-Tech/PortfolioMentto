import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, ChevronPattern } from "@/components/site-chrome";
import DiagnosticoForm from "../diagnostico-form";
import "../pages.css";
import "../contato/contato.css";

export const metadata: Metadata = {
  title: "MERGULHO — Workshops e imersões temáticas | Mentto",
  description:
    "O time desce fundo num tema e sai com clareza e plano de ação. Imersões de 1 a 2 dias em Ágil, Inovação, Estratégia, Pessoas e sob medida.",
  openGraph: {
    title: "MERGULHO — Workshops e imersões | Mentto",
    description:
      "O time desce fundo num tema e sai com clareza e plano de ação.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const temas = [
  {
    grupo: "Ágil",
    itens: ["Lego4Scrum", "Scrum", "Mentalidade Ágil"],
    color: "border-[#107F8D]",
    eyebrow: "text-[#107F8D]",
  },
  {
    grupo: "Inovação",
    itens: ["Design Thinking", "Design Sprint", "MVP", "Lean Inception"],
    color: "border-[#C25D44]",
    eyebrow: "text-[#C25D44]",
  },
  {
    grupo: "Estratégia",
    itens: [
      "Propósito, Visão e Valores",
      "Planejamento Estratégico",
      "OKRs",
      "Governança",
    ],
    color: "border-[#083D5F]",
    eyebrow: "text-[#083D5F]",
  },
  {
    grupo: "Pessoas",
    itens: ["Liderança", "Liderança Transformacional", "Gestão de Pessoas"],
    color: "border-[#FFC300]",
    eyebrow: "text-[#083D5F]",
  },
  {
    grupo: "Sob Medida",
    itens: ["Desenhado com a empresa, do zero"],
    color: "border-[#C25D44]",
    eyebrow: "text-[#C25D44]",
  },
];

export default function MergulhoPage() {
  return (
    <SiteShell>
      {/* 1ª DOBRA — Hero */}
      <section className="hero-radial relative overflow-hidden text-white">
        <ChevronPattern className="absolute inset-0 h-full w-full text-white/10" />
        <div className="container-mentto relative py-28 md:py-36">
          <div className="max-w-4xl">
            <span className="eyebrow text-[#FFC300]">Transversal · MERGULHO</span>
            <h1 className="mt-4 font-heading font-bold leading-[1.05] tracking-tight text-white text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem]">
              O time desce fundo no tema.{" "}
              <span className="text-[#FFC300]">E sai sabendo o que fazer.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#F3F1EB]/90 leading-relaxed">
              Imersões de 1 a 2 dias, preferencialmente presenciais, sem
              cardápio fechado. Cada MERGULHO é desenhado com o cliente — a
              gente entende o objetivo, depois monta o formato e o material.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#diagnostico"
                className="inline-flex items-center rounded-md bg-[#FFC300] px-6 py-3.5 font-heading font-semibold text-[#333] transition hover:brightness-95 hover:-translate-y-0.5"
              >
                Pedir um diagnóstico
              </Link>
              <Link
                href="#temas"
                className="inline-flex items-center rounded-md border-[1.5px] border-white/90 px-6 py-3.5 font-heading font-semibold text-white transition hover:bg-white/10 hover:-translate-y-0.5"
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2ª DOBRA — Como funciona */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <span className="eyebrow eyebrow-terracota">Como funciona</span>
              <h2 className="mt-1 font-heading font-bold text-[1.75rem] md:text-[2.5rem] leading-tight text-[#083D5F]">
                Formato curto, conteúdo denso, saída acionável.
              </h2>
              <p className="mt-5 text-lg text-[#333]/80 leading-relaxed">
                Cada MERGULHO é desenhado com o cliente. A gente entende
                primeiro o objetivo — depois monta o formato, a duração e o
                material. Sem cardápio fechado.
              </p>
            </div>
            <div className="md:col-span-7 space-y-5">
              {[
                {
                  n: "1 a 2 dias",
                  d: "Presencial, preferencialmente. O time todo junto, focado no mesmo tema.",
                  c: "border-[#107F8D]",
                },
                {
                  n: "Desenhado com você",
                  d: "Não existe prateleira fechada. A gente entende o objetivo e monta o formato.",
                  c: "border-[#C25D44]",
                },
                {
                  n: "Saída acionável",
                  d: "O time sai com clareza e plano de ação — não só com conceitos.",
                  c: "border-[#FFC300]",
                },
                {
                  n: "Porta de entrada",
                  d: "O cliente experimenta o jeito Mentto. Muitos MERGULHOS abrem caminho para o ROTA.",
                  c: "border-[#083D5F]",
                },
              ].map((b) => (
                <div
                  key={b.n}
                  className={`benefit-box border-l-4 ${b.c}`}
                >
                  <div className="benefit-box-title">{b.n}</div>
                  <p className="benefit-box-desc">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3ª DOBRA — Catálogo de temas */}
      <section id="temas" className="bg-[#F3F1EB]">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-petroleo">Catálogo de temas</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-tight text-[#083D5F]">
              Do ágil à estratégia. Do conceito ao plano.
            </h2>
            <p className="mt-4 text-lg text-[#333]/80 max-w-[58ch]">
              Todos os temas abaixo já foram entregues pela Mentto. O catálogo é
              aberto — se o tema não estiver aqui, basta conversar.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {temas.map((g) => (
              <div
                key={g.grupo}
                className={`bg-white rounded-lg p-7 border-l-4 ${g.color}`}
              >
                <span
                  className={`font-heading font-bold text-xs uppercase tracking-widest ${g.eyebrow}`}
                >
                  {g.grupo}
                </span>
                <ul className="mt-4 space-y-2">
                  {g.itens.map((item) => (
                    <li
                      key={item}
                      className="text-[#333]/80 font-heading font-medium text-sm flex items-start gap-2"
                    >
                      <span className="text-[#107F8D] mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4ª DOBRA — Função transversal / conexão com ROTA */}
      <section className="bg-[#083D5F] text-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow text-[#FFC300]">Mais do que um evento</span>
            <h2 className="mt-1 font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.1]">
              O MERGULHO conecta. Antes e depois.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Antes do ROTA",
                body: "O cliente experimenta o jeito Mentto. Uma imersão de 1 a 2 dias mostra o que acontece quando alguém do lado não te deixa ficar só no conceito.",
                cta: "→ Muitos MERGULHOS abrem o ROTA.",
              },
              {
                title: "Dentro do ROTA",
                body: "Cliente em acompanhamento que percebe que precisa capacitar mais gente do time. O MERGULHO entra como upsell — o mesmo DNA, mais fundo num tema específico.",
                cta: "→ O plano pede, a gente entrega.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white/[0.08] border border-white/15 rounded-lg p-8"
              >
                <h3 className="font-heading font-bold text-xl text-[#FFC300]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[#F3F1EB]/90 leading-relaxed">
                  {c.body}
                </p>
                <p className="mt-4 text-white font-heading font-semibold text-sm">
                  {c.cta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5ª DOBRA — Diagnóstico gratuito + formulário */}
      <section id="diagnostico" className="relative overflow-hidden hero-radial text-white">
        <ChevronPattern className="absolute inset-0 h-full w-full text-white/[0.08]" />
        <div className="container-mentto relative py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#FFC300] text-[#333] font-heading font-bold text-sm px-4 py-2 rounded-full mb-6">
                ✦ 100% GRATUITO
              </div>
              <span className="eyebrow eyebrow-amarelo block mb-2">
                O diagnóstico
              </span>
              <h2 className="font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.05]">
                Antes de comprar qualquer coisa, a gente entende o momento.
              </h2>
              <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[46ch] leading-relaxed">
                Uma conversa curta — do lado de dentro, sem cardápio, sem pressa
                de fechar. A gente escuta primeiro. Depois, se fizer sentido,
                apresenta o que cabe no seu momento.
              </p>
              <p className="mt-4 text-[#FFC300] font-heading font-semibold text-lg">
                Sem custo. Sem compromisso. Só a conversa.
              </p>
            </div>
            <DiagnosticoForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
