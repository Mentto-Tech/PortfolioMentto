import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import "./frentes.css";

export const metadata: Metadata = {
  title: "O que fazemos — Mentto",
  description:
    "Três frentes de trabalho e um laboratório de tecnologia. Dois públicos: empresa e centro de pesquisa.",
  openGraph: {
    title: "O que fazemos — Mentto",
    description:
      "Três frentes de trabalho e um laboratório de tecnologia. Dois públicos: empresa e centro de pesquisa.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const frentes = [
  {
    href: "/rota",
    tag: "Empresas",
    name: "ROTA",
    title: "Planejamento estratégico com acompanhamento contínuo",
    desc: "O carro-chefe. Estratégia que sai do papel — e a gente fica do lado o ano inteiro. Há níveis diferentes conforme o momento; qual, é conversa.",
    accent: "#107F8D",
  },
  {
    href: "/mergulho",
    tag: "Transversal",
    name: "MERGULHO",
    title: "Treinamentos, workshops e imersões",
    desc: "Temas pontuais em 1 a 2 dias — de ágil e inovação a estratégia, pessoas e sob medida. Para o time inteiro entrar no mesmo ritmo.",
    accent: "#C25D44",
  },
  {
    href: "/ponte",
    tag: "Pesquisa",
    name: "PONTE",
    title: "Gestão de projetos de pesquisa e inovação",
    desc: "O serviço mais consolidado da casa. Organiza o projeto, alinha equipes multi-institucionais e garante que a inovação avança — dentro dos prazos do programa.",
    accent: "#FFC300",
    tagline: "Da pesquisa ao mercado.",
  },
  {
    href: "/tech-lab",
    tag: "Tecnologia",
    name: "Mentto Tech Lab",
    title: "Desenvolvimento de soluções digitais",
    desc: "A área de tecnologia da Mentto. Quando a estratégia pede software para acontecer, a capacidade está dentro de casa.",
    accent: "#083D5F",
  },
];

export default function FrentesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="O que fazemos"
        title={
          <>
            Três frentes de trabalho.{" "}
            <span className="text-[#FFC300]">Dois públicos.</span>
          </>
        }
        lede="Você não precisa escolher agora em qual entrar — a gente entende primeiro, depois direciona. Este é o mapa."
      />
      <section className="bg-[#F3F1EB]">
        <div className="container-mentto py-20 md:py-28 grid md:grid-cols-2 gap-6">
          {frentes.map((f) => (
            <Link
              key={f.name}
              href={f.href}
              className="frentes-card group"
            >
              <div className={`card-accent-${f.accent === "#107F8D" ? "verde" : f.accent === "#FFC300" ? "amarelo" : f.accent === "#083D5F" ? "petroleo" : "terracota"}`} />
              <div className="flex items-baseline justify-between gap-4">
                <div className={`eyebrow ${f.accent === "#FFC300" ? "eyebrow-grafite" : f.accent === "#107F8D" ? "eyebrow-verde" : f.accent === "#083D5F" ? "eyebrow-petroleo" : "eyebrow-terracota"}`}>
                  {f.tag}
                </div>
                <div className="font-heading font-bold text-2xl md:text-[1.75rem] text-[#083D5F] tracking-tight">
                  {f.name}
                </div>
              </div>
              <h3 className="mt-6 font-heading font-semibold text-xl md:text-[1.375rem] text-[#083D5F] leading-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-[#333]/80 leading-relaxed">{f.desc}</p>
              {f.tagline && (
                <p className="mt-4 font-heading font-semibold text-[#107F8D]">
                  {f.tagline}
                </p>
              )}
              <div className="frentes-card-cta">
                Conhecer →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
