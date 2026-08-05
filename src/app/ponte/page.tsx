import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import PonteContatoForm from "./ponte-form";
import "../pages.css";
import "../contato/contato.css";

export const metadata: Metadata = {
  title: "Ponte Pesquisa — Gestão de projetos de pesquisa e inovação tecnológica | Mentto",
  description:
    "A Mentto organiza o projeto, alinha as equipes e garante que a inovação avança — dentro dos prazos e exigências do programa. Da pesquisa ao mercado.",
  openGraph: {
    title: "Ponte Pesquisa — Da pesquisa ao mercado | Mentto",
    description:
      "A Mentto organiza o projeto e mantém o ritmo — o ano inteiro.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const cases = [
  {
    nome: "CCD Circula",
    programa: "CCD FAPESP",
    desc: "Gestão e acompanhamento de projeto de pesquisa multi-institucional, com equipes de pesquisa, indústria e governo — garantindo entregas dentro dos prazos do programa.",
    color: "border-[#107F8D]",
    logo: "/CCD_Circula.png",
    link: "https://ccdcircula.org.br/",
  },
  {
    nome: "Cemasu",
    programa: "Pesquisa e inovação",
    desc: "Organização de projeto, alinhamento de equipes e acompanhamento das metas e indicadores ao longo do ciclo de pesquisa.",
    color: "border-[#FFC300]",
    logo: "/CCD_Cemasu.png",
    link: "https://cemasu.com.br/",
  },
  {
    nome: "PBIS",
    programa: "Projeto de inovação tecnológica",
    desc: "Governança e ritmo de projeto — papéis definidos, ritos de acompanhamento e prestação de contas em dia para os financiadores.",
    color: "border-[#C25D44]",
    logo: "/CCD_PBIS.png",
    link: "https://pbis.org.br/",
  },
];

export default function PontePage() {
  return (
    <SiteShell>
      {/* 1ª DOBRA — Hero */}
      <PageHeader
        eyebrow="Pesquisa · Ponte Pesquisa"
        title={
          <>
            Da pesquisa{" "}
            <span className="text-[#FFC300]">ao mercado.</span>
          </>
        }
        lede="O serviço mais consolidado da casa — 6 anos de atuação em projetos de pesquisa e inovação tecnológica. A Mentto organiza o projeto, alinha as equipes e garante que a inovação avança dentro dos prazos e das exigências do programa."
      />

      {/* 2ª DOBRA — Modelo de gestão integrada */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow eyebrow-verde">Modelo de gestão integrada</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              PMO científico com o método ROTA.
            </h2>
            <p className="mt-5 text-lg text-[#333]/80 leading-relaxed max-w-[62ch]">
              É o método ROTA aplicado ao contexto de pesquisa: diagnóstico,
              definição de propósito/visão/objetivos, metas e indicadores,
              plano de execução e acompanhamento contínuo. A Mentto atua como
              escritório de projetos — gestão, governança e engajamento de
              equipes multi-institucionais (pesquisadores, indústria, governo,
              sociedade).
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              {
                t: "Governança clara",
                d: "Papéis, ritos e decisões documentados. Quem responde pelo quê, quando. A equipe sabe onde está e para onde vai.",
                c: "benefit-box-verde",
              },
              {
                t: "Alinhamento multi-institucional",
                d: "Traduzimos entre equipes, financiadores e parceiros. Menos ruído, mais entrega — independente de quantas instituições estejam no projeto.",
                c: "benefit-box-amarelo",
              },
              {
                t: "Ritmo de acompanhamento",
                d: "Encontros curtos, frequentes, com pauta. Metas e indicadores (incluindo TRL) acompanhados ao longo de todo o ciclo. Prestação de contas em dia.",
                c: "benefit-box-terracota",
              },
              {
                t: "Da bancada ao mercado",
                d: "A tecnologia sai do laboratório. A Mentto ajuda no caminho até chegar lá — do início ao fim, do edital à última entrega.",
                c: "benefit-box-petroleo",
              },
            ].map((b) => (
              <div key={b.t} className={`benefit-box ${b.c}`}>
                <div className="benefit-box-title">{b.t}</div>
                <p className="benefit-box-desc">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVO: Vale da Morte */}
      <section className="bg-[#F3F1EB]">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              Atravessando o Vale da Morte.
            </h2>
            <p className="mt-5 text-lg text-[#333]/80 leading-relaxed max-w-[62ch] mx-auto">
              A pesquisa é promissora, mas escalar e levar ao mercado exige outro ritmo. A Mentto ajuda a estruturar a travessia dos níveis de maturidade (TRL).
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <Image 
                src="/vale_morte_mentto.jpeg" 
                alt="Gráfico do Vale da Morte (TRL) e a travessia da inovação" 
                fill
                className="object-cover md:object-contain bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3ª DOBRA — Cases */}
      <section className="bg-[#083D5F] text-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="eyebrow text-[#FFC300]">Cases</span>
            <h2 className="mt-1 font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.1]">
              Projetos que a Mentto acompanhou.
            </h2>
            <p className="mt-5 text-lg text-[#F3F1EB]/90 max-w-[58ch]">
              Seis anos de atuação em projetos de pesquisa científica e
              tecnológica — CCDs/FAPESP, institutos, quádrupla hélice.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {cases.map((c) => (
              <article
                key={c.nome}
                className={`case-card-h ${c.color}`}
              >
                {/* Logo */}
                <div className="w-24 h-24 shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={c.logo}
                    alt={`Logo ${c.nome}`}
                    width={88}
                    height={88}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="font-heading font-bold text-[#FFC300] text-xl md:text-2xl mb-1">
                    {c.nome}
                  </div>
                  <div className="text-white/60 text-xs uppercase tracking-wider font-heading font-semibold mb-4">
                    {c.programa}
                  </div>
                  <p className="text-[#F3F1EB]/90 leading-relaxed max-w-3xl mb-6">{c.desc}</p>
                  
                  <div className="mt-auto">
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-white/90 hover:text-white hover:underline underline-offset-4 transition">
                      Ver site oficial
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M4 10L10 4M10 4H5.5M10 4V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Photo Placeholder */}
                <div className="hidden md:flex w-48 h-full shrink-0 rounded-lg bg-white/5 border border-white/10 items-center justify-center text-center">
                  <span className="text-white/30 font-heading text-xs">FOTO<br/>DA EQUIPE</span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-[#F3F1EB]/60 text-sm">
            Outros projetos acompanhados: CCD CACAU 360, PTEC-SAN, Neutropec, SB-100, Cidades Carbono Neutro, Crop, APTA (~300 pesquisadores).
          </p>
        </div>
      </section>

      {/* 4ª DOBRA — Formulário de contato */}
      <section className="bg-[#107F8D] text-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
              <span className="eyebrow text-[#FFC300]">Vamos conversar</span>
              <h2 className="mt-1 font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.05]">
                Entender o momento do projeto.
              </h2>
              <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[46ch] leading-relaxed">
                Projetos de pesquisa têm dinâmicas únicas. Nossa primeira conversa serve para entender o escopo, as instituições envolvidas e onde estão os desafios de gestão e governança. Não vendemos pacotes prontos — se fizer sentido, desenhamos como apoiar o seu programa.
              </p>
              <div className="mt-8 space-y-2 text-[#F3F1EB]/75 text-sm">
                <div>Pompeia/SP — atende todo o Brasil</div>
                <div>
                  <a
                    href="mailto:contato@mentto.com.br"
                    className="underline underline-offset-4 hover:text-[#FFC300] transition"
                  >
                    contato@mentto.com.br
                  </a>
                </div>
                {/* <div>
                  <a
                    href="tel:+5514981756771"
                    className="underline underline-offset-4 hover:text-[#FFC300] transition"
                  >
                    (14) 98175-6771
                  </a>
                </div> */}
              </div>
            </div>

            <PonteContatoForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
