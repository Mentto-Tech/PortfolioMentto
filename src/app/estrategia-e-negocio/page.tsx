import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import DiagnosticoForm from "../diagnostico-form";
import "../pages.css";
import "../contato/contato.css";

export const metadata: Metadata = {
  title: "Estratégia e Negócio | Mentto",
  description:
    "Planejamento estratégico com acompanhamento contínuo e imersões temáticas para o time. A Mentto fica do lado da empresa o ano inteiro.",
  openGraph: {
    title: "Estratégia e Negócio | Mentto",
    description:
      "Planejamento estratégico com acompanhamento contínuo e imersões temáticas para o time.",
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
    desc: "Execução com ritmo. A estratégia sai do slide e vira movimento, plano sem tração vira gaveta.",
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
    desc: "O que importa, de forma simples e dinâmica. Formato coletivo, turma de pares do mesmo setor. Primeira experiência com planejamento estruturado.",
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
    desc: "Alta gestão, individual e sob medida. Mais sênior, mais caro, para quem precisa de mais presença.",
    tag: "Avançado",
    color: "border-[#C25D44]",
    eyebrow: "text-[#C25D44]",
  },
  {
    name: "ROTA Conselho",
    desc: "A sala mais fechada, conselho, sócios, sucessão, transformação. Senioridade máxima, exclusividade, ticket mais alto.",
    tag: "Topo",
    color: "border-[#083D5F]",
    eyebrow: "text-[#083D5F]",
  },
];

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
    itens: ["Propósito, Visão e Valores", "Planejamento Estratégico", "OKRs", "Governança"],
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

export default function EstrategiaENegocioPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <PageHeader
        eyebrow="Empresas · Estratégia e Negócio"
        title={
          <>
            Planejamento estratégico.{" "}
            <span className="text-[#FFC300]">Com alguém do lado</span> o ano
            inteiro.
          </>
        }
        lede="Diagnóstico honesto, plano com foco e presença contínua enquanto o plano acontece. Para a empresa que quer sair do papel, e o time que precisa destravar um tema específico."
      />

      {/* ROTA, Para quem é */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="eyebrow eyebrow-verde">ROTA — Para quem é</span>
            <div className="divider-bar divider-bar-verde" />
            <h2 className="mt-6 font-heading font-bold text-[1.75rem] md:text-[2.25rem] leading-[1.15] text-[#083D5F]">
              O dono está na operação. E na decisão.
            </h2>
            <p className="mt-5 text-[#333]/80 text-lg leading-relaxed">
              Empresa de tradição familiar ou industrial com estrutura e governança que já pedem apoio.
              A gente entra do lado, não por cima.
            </p>
            {/* <Link href="/rota" className="btn-secondary mt-8 inline-flex">
              Ver a página do ROTA →
            </Link> */}
          </div>
          <div className="md:col-span-7 space-y-4">
            {[
              { t: "Diagnóstico honesto", d: "Antes de qualquer plano, entender o momento. Pessoas, números, história, sem suavizar a verdade.", c: "border-[#107F8D]" },
              { t: "Foco, não volume", d: "Poucas prioridades, com dono e prazo. O que importa, na ordem certa.", c: "border-[#C25D44]" },
              { t: "Ritmo de tração", d: "Ritual curto e frequente. A gaveta a gente conhece, e não deixa o plano cair nela.", c: "border-[#FFC300]" },
              { t: "Presença contínua", d: "Enquanto o plano acontece, a Mentto continua do lado. Todo o ano.", c: "border-[#083D5F]" },
            ].map((b) => (
              <div key={b.t} className={`hover-card ${b.c}`}>
                <div className="hover-card-title">
                  {b.t}
                  <svg className="hover-card-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="hover-card-desc">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Método R·O·T·A */}
      <section className="bg-[#F3F1EB]">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow eyebrow-verde">O método</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              R·O·T·A
            </h2>
            <p className="mt-4 text-lg text-[#333]/80 max-w-[58ch] mx-auto">
              Um único caminho atravessa tudo que a Mentto faz. O que muda é o escopo e o cliente, nunca o &quot;não largar no meio do caminho&quot;.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-4 gap-5">
            {rotaSteps.map((step) => (
              <div key={step.letter} className={`relative rounded-lg p-8 ${step.heavy ? "bg-[#083D5F] text-white" : "bg-white"}`}>
                <div className={`h-1 w-10 rounded-full mb-6 ${step.bar}`} />
                <div className={`font-heading font-bold text-[4.5rem] leading-none ${step.heavy ? "text-[#FFC300]" : step.color}`}>
                  {step.letter}
                </div>
                <div className={`mt-2 font-heading font-semibold text-lg ${step.heavy ? "text-white" : "text-[#083D5F]"}`}>
                  {step.name}
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${step.heavy ? "text-[#F3F1EB]/85" : "text-[#333]/70"}`}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Níveis do ROTA */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow eyebrow-petroleo">Os níveis do ROTA</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              Uma escada clara.<br />Você entra no nível certo.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {niveis.map((n) => (
              <div key={n.name} className={`rounded-lg bg-[#F3F1EB] p-8 border-l-4 ${n.color}`}>
                <span className={`font-heading font-semibold text-xs uppercase tracking-widest ${n.eyebrow}`}>{n.tag}</span>
                <h3 className="mt-2 font-heading font-bold text-xl text-[#083D5F]">{n.name}</h3>
                <p className="mt-3 text-[#333]/75 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MERGULHO */}
      <section className="bg-[#083D5F] text-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-[#FFC300]">MERGULHO, Antes de qualquer contrato</span>
            <h2 className="mt-1 font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.1]">
              Comece por um dia.
            </h2>
            <p className="mt-5 text-lg text-[#F3F1EB]/90 max-w-[58ch] mx-auto">
              Imersões de 1 a 2 dias, presenciais, com o time inteiro, no tema que está travando agora.
              Você sai com trabalho feito, não com teoria. Muitos ROTA começaram por aqui.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {temas.map((g) => (
              <div key={g.grupo} className={`bg-white/[0.07] border border-white/12 rounded-lg p-7 border-l-4 ${g.color} flex flex-col`}>
                <span className={`font-heading font-bold text-xs uppercase tracking-widest text-[#FFC300]`}>{g.grupo}</span>
                <ul className="mt-4 space-y-2 flex-1">
                  {g.itens.map((item) => (
                    <li key={item} className="text-[#F3F1EB]/85 font-heading font-medium text-sm flex items-start gap-2">
                      <span className="text-[#FFC300] mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/mergulho" className="mt-6 inline-flex items-center gap-2 border border-white/30 rounded-md px-4 py-2 font-heading font-semibold text-sm text-white hover:bg-white/10 transition self-start">
                  Saiba mais
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden hero-radial text-white">
        <div className="container-mentto relative py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
              <div className="inline-flex items-center gap-2 bg-[#FFC300] text-[#333] font-heading font-bold text-sm px-4 py-2 rounded-full mb-6">
                ✦ 100% GRATUITO
              </div>
              <span className="eyebrow eyebrow-amarelo block mb-2">O diagnóstico</span>
              <h2 className="font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.05]">
                Antes de vender qualquer coisa, a gente escuta.
              </h2>
              <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[46ch] leading-relaxed">
                Uma conversa curta para entender o momento, sem cardápio, sem pressa de fechar.
              </p>
              <p className="mt-4 text-[#FFC300] font-heading font-semibold text-lg">
                Sem custo. Sem compromisso. Só a conversa.
              </p>
              <div className="mt-8 space-y-2 text-[#F3F1EB]/80 text-sm">
                <div>Pompeia/SP, atende todo o Brasil</div>
                <div><a href="mailto:contato@mentto.com.br" className="underline underline-offset-4 hover:text-[#FFC300] transition">contato@mentto.com.br</a></div>
              </div>
            </div>
            <DiagnosticoForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
