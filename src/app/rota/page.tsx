import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, PageHeader, ChevronPattern } from "@/components/site-chrome";
import DiagnosticoForm from "../diagnostico-form";
import "../pages.css";
import "../contato/contato.css";

export const metadata: Metadata = {
  title: "ROTA — Consultoria estratégica com acompanhamento contínuo | Mentto",
  description:
    "Estratégia que sai do papel. A Mentto fica do lado da empresa o ano inteiro — diagnóstico honesto, plano com foco e presença contínua durante a execução.",
  openGraph: {
    title: "ROTA — Consultoria estratégica com acompanhamento contínuo | Mentto",
    description:
      "Estratégia que sai do papel. A Mentto fica do lado da empresa o ano inteiro, para o plano virar execução.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const rotaSteps = [
  {
    letter: "R",
    name: "Reconhecer",
    desc: "Diagnóstico real, sem suavizar a verdade. Enxergar a empresa como ela é, não como o dono gostaria.",
    color: "text-[#107F8D]",
    bar: "bg-[#107F8D]",
  },
  {
    letter: "O",
    name: "Orientar",
    desc: "Estratégia com foco, não volume. Direção que cabe na cabeça do líder e na agenda da empresa.",
    color: "text-[#107F8D]",
    bar: "bg-[#107F8D]",
  },
  {
    letter: "T",
    name: "Tracionar",
    desc: "Execução com ritmo. A estratégia sai do slide e vira movimento — plano sem tração vira gaveta.",
    color: "text-[#C25D44]",
    bar: "bg-[#C25D44]",
  },
  {
    letter: "A",
    name: "Acompanhar",
    desc: "Presença contínua. A Mentto fica do lado enquanto acontece. É aqui que a maioria das consultorias falha.",
    color: "text-[#FFC300]",
    bar: "bg-[#FFC300]",
    heavy: true,
  },
];

const niveis = [
  {
    name: "ROTA Essencial",
    desc: "O que importa, de forma simples e dinâmica. Formato coletivo — turma de pares do mesmo setor. Primeira experiência com planejamento estruturado.",
    tag: "Entrada",
    color: "border-[#107F8D]",
    eyebrow: "text-[#107F8D]",
  },
  {
    name: "ROTA Gestão",
    desc: "Empresa com estrutura, com gestão de verdade. Ainda coletivo, mais profundidade e ritmo.",
    tag: "Intermediário",
    color: "border-[#107F8D]",
    eyebrow: "text-[#107F8D]",
  },
  {
    name: "ROTA Executivo",
    desc: "Alta gestão, individual e sob medida. Mais sênior, mais caro — para quem precisa de mais presença.",
    tag: "Avançado",
    color: "border-[#C25D44]",
    eyebrow: "text-[#C25D44]",
  },
  {
    name: "ROTA Conselho",
    desc: "A sala mais fechada — conselho, sócios, sucessão, transformação. Senioridade máxima, exclusividade, ticket mais alto.",
    tag: "Topo",
    color: "border-[#083D5F]",
    eyebrow: "text-[#083D5F]",
  },
];

export default function RotaPage() {
  return (
    <SiteShell>
      {/* 1ª DOBRA — Hero */}
      <PageHeader
        eyebrow="Empresas · ROTA"
        title={
          <>
            Planejamento estratégico.{" "}
            <span className="text-[#FFC300]">Com alguém do lado</span> o ano
            inteiro.
          </>
        }
        lede="O carro-chefe da Mentto para empresas. A gente constrói a sua rota — e fica do lado o ano inteiro. Plano e acompanhamento são inseparáveis. Aqui o plano não fica na gaveta."
      />

      {/* 2ª DOBRA — Para quem é + benefícios */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow eyebrow-verde">Para quem é</span>
            <div className="divider-bar divider-bar-verde" />
            <h2 className="mt-6 font-heading font-bold text-[1.75rem] md:text-[2.25rem] leading-[1.15] text-[#083D5F]">
              O dono está na operação. E na decisão.
            </h2>
            <p className="mt-5 text-[#333]/80 text-lg leading-relaxed">
              Empresa de tradição familiar ou industrial — em geral do interior —
              com estrutura e governança que já pedem apoio. A gente entra do
              lado, não por cima.
            </p>
          </div>
          <div className="md:col-span-7 space-y-6">
            {[
              {
                t: "Diagnóstico honesto",
                d: "Antes de qualquer plano, entender o momento. Pessoas, números, história — sem suavizar a verdade.",
              },
              {
                t: "Foco, não volume",
                d: "Poucas prioridades, com dono e prazo. O que importa, na ordem certa.",
              },
              {
                t: "Ritmo de tração",
                d: "Ritual curto e frequente. A gaveta a gente conhece — e não deixa o plano cair nela.",
              },
              {
                t: "Presença contínua",
                d: "Enquanto o plano acontece, a Mentto continua do lado. Todo o ano.",
              },
            ].map((b) => (
              <div key={b.t} className="benefit-box benefit-box-verde">
                <div className="benefit-box-title">{b.t}</div>
                <p className="benefit-box-desc">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3ª DOBRA — O Método R·O·T·A */}
      <section className="bg-[#F3F1EB]">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-verde">O método</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              R·O·T·A
            </h2>
            <p className="mt-4 text-lg text-[#333]/80 max-w-[58ch]">
              Um único caminho atravessa tudo que a Mentto faz. O que muda é o
              escopo e o cliente — nunca o &quot;não largar no meio do
              caminho&quot;.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-4 gap-5">
            {rotaSteps.map((step) => (
              <div
                key={step.letter}
                className={`relative rounded-lg p-8 ${step.heavy ? "bg-[#083D5F] text-white" : "bg-white"}`}
              >
                <div className={`h-1 w-10 rounded-full mb-6 ${step.bar}`} />
                <div
                  className={`font-heading font-bold text-[4.5rem] leading-none ${step.heavy ? "text-[#FFC300]" : step.color}`}
                >
                  {step.letter}
                </div>
                <div
                  className={`mt-2 font-heading font-semibold text-lg ${step.heavy ? "text-white" : "text-[#083D5F]"}`}
                >
                  {step.name}
                </div>
                <p
                  className={`mt-3 text-sm leading-relaxed ${step.heavy ? "text-[#F3F1EB]/85" : "text-[#333]/70"}`}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4ª DOBRA — Os 4 níveis */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-petroleo">Os níveis do ROTA</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              Uma escada clara.
              <br />
              Você entra no nível certo.
            </h2>
            <p className="mt-4 text-lg text-[#333]/80 max-w-[58ch]">
              Qual nível cabe no seu momento é conversa — a gente entende
              primeiro, depois indica.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {niveis.map((n) => (
              <div
                key={n.name}
                className={`rounded-lg bg-[#F3F1EB] p-8 border-l-4 ${n.color}`}
              >
                <span
                  className={`font-heading font-semibold text-xs uppercase tracking-widest ${n.eyebrow}`}
                >
                  {n.tag}
                </span>
                <h3 className="mt-2 font-heading font-bold text-xl text-[#083D5F]">
                  {n.name}
                </h3>
                <p className="mt-3 text-[#333]/75 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5ª DOBRA — Diagnóstico gratuito */}
      <section className="relative overflow-hidden hero-radial text-white">
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
                Antes de vender qualquer coisa, a gente escuta.
              </h2>
              <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[46ch] leading-relaxed">
                Uma conversa curta para entender o momento — do lado de dentro,
                sem cardápio, sem pressa de fechar. O diagnóstico é real, sem
                suavizar a verdade. Enxergar a empresa como ela é, não como o
                dono gostaria.
              </p>
              <p className="mt-4 text-[#FFC300] font-heading font-semibold text-lg">
                Sem custo. Sem compromisso. Só a conversa.
              </p>
              <div className="mt-8 space-y-2 text-[#F3F1EB]/80 text-sm">
                <div>Pompeia/SP — atende todo o Brasil</div>
                <div>
                  <a href="mailto:contato@mentto.com.br" className="underline underline-offset-4 hover:text-[#FFC300] transition">
                    contato@mentto.com.br
                  </a>
                </div>
                <div>
                  <a href="tel:+5514981756771" className="underline underline-offset-4 hover:text-[#FFC300] transition">
                    (14) 98175-6771
                  </a>
                </div>
              </div>
            </div>

            <DiagnosticoForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
