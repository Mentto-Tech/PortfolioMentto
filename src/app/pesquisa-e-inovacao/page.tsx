import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import PonteContatoForm from "../ponte/ponte-form";
import "../pages.css";
import "../contato/contato.css";

export const metadata: Metadata = {
  title: "Pesquisa e Inovação | Mentto",
  description:
    "Gestão de projetos de pesquisa e inovação tecnológica e desenvolvimento de soluções digitais. Da bancada ao mercado.",
  openGraph: {
    title: "Pesquisa e Inovação | Mentto",
    description: "Gestão de projetos de pesquisa e inovação tecnológica. Da bancada ao mercado.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const cases = [
  {
    nome: "CCD Circula",
    programa: "CCD FAPESP",
    desc: "O CCD Circula é um Centro de Pesquisa, Desenvolvimento e Inovação focado em desenvolver soluções para o gerenciamento integrado de resíduos sólidos urbanos. Reúne universidades, institutos de pesquisa e empresas para criar tecnologias aplicáveis à cadeia de reciclagem e economia circular.",
    color: "border-[#107F8D]",
    logo: "/CCD_Circula.png",
    link: "https://ccdcircula.org.br/",
  },
  {
    nome: "Cemasu",
    programa: "Pesquisa e inovação",
    desc: "O Cemasu é um centro de pesquisa e desenvolvimento voltado à saúde, com foco em soluções inovadoras para o sistema público. Articula pesquisadores, gestores e parceiros industriais em projetos de alta complexidade técnica e institucional.",
    color: "border-[#FFC300]",
    logo: "/CCD_Cemasu.png",
    link: "https://cemasu.com.br/",
  },
  {
    nome: "PBIS",
    programa: "Projeto de inovação tecnológica",
    desc: "O PBIS é um projeto de inovação voltado ao desenvolvimento de tecnologias para sistemas de produção sustentável. Envolve múltiplas instituições de pesquisa e parceiros privados, com foco em soluções aplicáveis ao campo e à agroindústria.",
    color: "border-[#C25D44]",
    logo: "/CCD_PBIS.png",
    link: "https://pbis.org.br/",
  },
];

export default function PesquisaEInovacaoPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <PageHeader
        eyebrow="Pesquisa e Inovação"
        title={
          <>
            Da pesquisa{" "}
            <span className="text-[#FFC300]">ao mercado.</span>
          </>
        }
        lede="Gestão de projetos de pesquisa e inovação tecnológica, e desenvolvimento de soluções digitais quando o projeto precisa. A Mentto organiza, alinha equipes e garante que a inovação avança."
      />

      {/* PONTE — Modelo de gestão */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow eyebrow-verde">PONTE, Gestão de projetos de pesquisa</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              PMO científico com o método ROTA.
            </h2>
            <p className="mt-5 text-lg text-[#333]/80 leading-relaxed max-w-[62ch] mx-auto">
              O método ROTA aplicado ao contexto de pesquisa: diagnóstico, definição de propósito/visão/objetivos,
              metas e indicadores, plano de execução e acompanhamento contínuo. A Mentto atua como escritório de projetos,
              gestão, governança e engajamento de equipes multi-institucionais.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {[
              { t: "Governança clara", d: "Papéis, ritos e decisões documentados. Quem responde pelo quê, quando. A equipe sabe onde está e para onde vai.", c: "benefit-box-verde" },
              { t: "Alinhamento multi-institucional", d: "Traduzimos entre equipes, financiadores e parceiros. Menos ruído, mais entrega, independente de quantas instituições estejam no projeto.", c: "benefit-box-amarelo" },
              { t: "Ritmo de acompanhamento", d: "Encontros curtos, frequentes, com pauta. Metas e indicadores (incluindo TRL) acompanhados ao longo de todo o ciclo.", c: "benefit-box-terracota" },
              { t: "Da bancada ao mercado", d: "A tecnologia sai do laboratório. A Mentto ajuda no caminho até chegar lá, do início ao fim, do edital à última entrega.", c: "benefit-box-petroleo" },
            ].map((b) => (
              <div key={b.t} className={`benefit-box ${b.c}`}>
                <div className="benefit-box-title">{b.t}</div>
                <p className="benefit-box-desc">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vale da Morte */}
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

      {/* Cases */}
      <section className="bg-[#083D5F] text-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-[#FFC300]">Cases</span>
            <h2 className="mt-1 font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.1]">
              Projetos que a Mentto acompanhou.
            </h2>
            <p className="mt-5 text-lg text-[#F3F1EB]/90 max-w-[58ch] mx-auto">
              Seis anos de atuação em projetos de pesquisa científica e tecnológica, CCDs/FAPESP, institutos, quádrupla hélice.
            </p>
          </div>
          <div className="mt-14 space-y-6">
            {cases.map((c) => (
              <article key={c.nome} className={`case-card-h ${c.color}`}>
                <div className="w-24 h-24 shrink-0 rounded-lg bg-white flex items-center justify-center overflow-hidden">
                  <Image src={c.logo} alt={`Logo ${c.nome}`} width={88} height={88} className="object-contain w-full h-full" />
                </div>
                <div className="flex flex-col">
                  <div className="font-heading font-bold text-[#FFC300] text-xl md:text-2xl mb-1">{c.nome}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider font-heading font-semibold mb-4">{c.programa}</div>
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
              </article>
            ))}
          </div>
          <p className="mt-10 text-[#F3F1EB]/60 text-sm">
            Outros projetos acompanhados: CCD CACAU 360, PTEC-SAN, Neutropec, SB-100, Cidades Carbono Neutro, Crop, APTA (~300 pesquisadores).
          </p>
        </div>
      </section>

      {/* Tech Lab */}
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow eyebrow-petroleo">Mentto Tech Lab</span>
            <h2 className="mt-1 font-heading font-bold text-[2rem] md:text-[2.75rem] leading-[1.1] text-[#083D5F]">
              Quando o projeto precisa de software, o software está aqui dentro.
            </h2>
            <p className="mt-5 text-lg text-[#333]/80 leading-relaxed max-w-[62ch] mx-auto">
              A área de tecnologia da Mentto nasce do contato direto com o cliente e a pesquisa, não do outro lado do muro.
            </p>
            <Link href="#contato" className="btn-secondary mt-8 inline-flex">
              Falar com a Mentto →
            </Link>
          </div>
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[
              { t: "Produtos digitais sob medida", d: "Sistemas internos, plataformas de gestão e ferramentas específicas para o que o negócio ou a pesquisa exigem." },
              { t: "Automação e integração", d: "Fluxos que economizam tempo do time e conectam sistemas que hoje não se falam." },
              { t: "Dados e visualização", d: "Painéis para decisão, não para relatório. Onde a informação encontra a rotina." },
              { t: "Apoio à inovação em pesquisa", d: "Protótipos e MVPs que ajudam a tirar a tecnologia do laboratório." },
            ].map((b) => (
              <div key={b.t} className="tema-card">
                <div className="tema-card-bar tema-card-bar-petroleo" />
                <div className="tema-card-title text-xl">{b.t}</div>
                <p className="mt-3 text-[#333]/80 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-[#107F8D] text-white">
        <div className="container-mentto py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-6">
              <span className="eyebrow text-[#FFC300]">Vamos conversar</span>
              <h2 className="mt-1 font-heading font-bold text-white text-[2rem] md:text-[2.75rem] leading-[1.05]">
                Entender o momento do projeto.
              </h2>
              <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[46ch] leading-relaxed">
                Projetos de pesquisa têm dinâmicas únicas. Nossa primeira conversa serve para entender
                o escopo, as instituições envolvidas e onde estão os desafios de gestão e governança.
                Não vendemos pacotes prontos, se fizer sentido, desenhamos como apoiar o seu programa.
              </p>
              <div className="mt-8 space-y-2 text-[#F3F1EB]/75 text-sm">
                <div>Pompeia/SP, atende todo o Brasil</div>
                <div><a href="mailto:contato@mentto.com.br" className="underline underline-offset-4 hover:text-[#FFC300] transition">contato@mentto.com.br</a></div>
              </div>
            </div>
            <PonteContatoForm origem="pesquisa-e-inovacao" />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
