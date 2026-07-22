import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import "../pages.css";

export const metadata: Metadata = {
  title: "Mentto Tech Lab — Desenvolvimento de soluções digitais | Mentto",
  description:
    "Quando a estratégia pede software para acontecer, a capacidade está dentro de casa. A área de tecnologia da Mentto.",
  openGraph: {
    title: "Mentto Tech Lab — Soluções digitais",
    description:
      "Quando a estratégia pede software para acontecer, a capacidade está dentro de casa.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function TechLabPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Tecnologia · Mentto Tech Lab"
        title={
          <>
            Quando o plano precisa de software,{" "}
            <span className="text-[#FFC300]">o software está aqui dentro.</span>
          </>
        }
        lede="A área de tecnologia da Mentto. Nasce do contato direto com o cliente e a pesquisa — não do outro lado do muro."
      />
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28 grid md:grid-cols-2 gap-8">
          {[
            {
              t: "Produtos digitais sob medida",
              d: "Sistemas internos, plataformas de gestão e ferramentas específicas para o que o negócio ou a pesquisa exigem.",
            },
            {
              t: "Automação e integração",
              d: "Fluxos que economizam tempo do time e conectam sistemas que hoje não se falam.",
            },
            {
              t: "Dados e visualização",
              d: "Painéis para decisão, não para relatório. Onde a informação encontra a rotina.",
            },
            {
              t: "Apoio à inovação em pesquisa",
              d: "Protótipos e MVPs que ajudam a tirar a tecnologia do laboratório.",
            },
          ].map((b) => (
            <div key={b.t} className="tema-card">
              <div className="tema-card-bar tema-card-bar-petroleo" />
              <div className="tema-card-title text-xl">{b.t}</div>
              <p className="mt-3 text-[#333]/80 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
        <div className="container-mentto pb-24">
          <Link href="/contato" className="btn-primary">
            Contar o que você precisa construir
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
