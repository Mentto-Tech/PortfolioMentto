import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import "../pages.css";

export const metadata: Metadata = {
  title: "Casos — O que muda quando alguém não te larga | Mentto",
  description:
    "Casos reais da Mentto: problema, o que a gente fez, o que mudou. Empresa, pesquisa e liderança.",
  openGraph: {
    title: "Casos — Mentto",
    description:
      "Casos reais da Mentto: problema, o que a gente fez, o que mudou. Sem número inventado.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const casos = [
  {
    kind: "Empresa · tradição familiar",
    problem:
      "Plano estratégico existia, mas nunca virava execução — o dono estava dentro da operação.",
    action:
      "ROTA com ritmo mensal: reuniões curtas de tração, prioridades reescritas junto, o dono acompanhado semana a semana.",
    result:
      "Ciclo de planejamento cumprido pela primeira vez em anos. Time entrou no ritmo.",
  },
  {
    kind: "Centro de pesquisa · multi-institucional",
    problem:
      "Projeto travado por desalinhamento entre equipes de instituições diferentes, com prazo do edital apertando.",
    action:
      "PONTE: governança estabelecida, papéis redistribuídos, rito de acompanhamento com pesquisadores e financiadores.",
    result:
      "Entregas do projeto voltaram ao prazo. Prestação de contas em dia.",
  },
  {
    kind: "Empresa · indústria regional",
    problem:
      "Time de liderança operando em silos, sem clareza compartilhada de para onde a empresa ia.",
    action:
      "MERGULHO de 2 dias em estratégia + Propósito/Visão/Valores. Desdobrado em ROTA no mês seguinte.",
    result: "Liderança alinhada. Plano do ano com dono para cada frente.",
  },
];

export default function CasosPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Casos"
        title={
          <>
            O que muda quando{" "}
            <span className="text-[#FFC300]">alguém não te larga.</span>
          </>
        }
        lede="Casos reais — problema, o que a Mentto fez, o que mudou. Sem número inventado."
      />
      <section className="bg-[#107F8D] text-white">
        <div className="container-mentto py-20 md:py-28 grid md:grid-cols-3 gap-6">
          {casos.map((c) => (
            <article
              key={c.kind}
              className="bg-white/[0.08] backdrop-blur-sm rounded-lg p-8 border border-white/15"
            >
              <div className="eyebrow text-[#FFC300]">{c.kind}</div>
              <div className="mt-6 space-y-5 text-[#F3F1EB]/95 leading-relaxed">
                <div>
                  <div className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1.5">
                    Problema
                  </div>
                  <p>{c.problem}</p>
                </div>
                <div>
                  <div className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-1.5">
                    O que a Mentto fez
                  </div>
                  <p>{c.action}</p>
                </div>
                <div>
                  <div className="font-heading font-semibold text-[#FFC300] text-sm uppercase tracking-wider mb-1.5">
                    O que mudou
                  </div>
                  <p className="text-white font-medium">{c.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="container-mentto cta-bar-inner">
          <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#083D5F] max-w-2xl">
            Seu caso não está aqui? Melhor ainda — a gente começa entendendo o
            seu.
          </h3>
          <Link href="/contato" className="btn-primary">
            Falar com a Mentto
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
