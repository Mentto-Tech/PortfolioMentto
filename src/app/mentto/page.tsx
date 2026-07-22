import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import "../pages.css";

export const metadata: Metadata = {
  title: "A Mentto — Estratégia, pesquisa e tecnologia, do lado do cliente",
  description:
    "Consultoria que fica do lado — na empresa e no centro de pesquisa — enquanto o plano vira execução. O ano inteiro.",
  openGraph: {
    title: "A Mentto — do lado do cliente",
    description:
      "Consultoria que fica do lado — na empresa e no centro de pesquisa — enquanto o plano vira execução.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function MenttoPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="A Mentto"
        title={
          <>
            A gente não entrega um plano.{" "}
            <span className="text-[#FFC300]">A gente fica do lado.</span>
          </>
        }
        lede="Sete anos de casa, seis de linha de pesquisa, mais de oitenta projetos acompanhados. Um jeito só de trabalhar: presença contínua."
      />
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="eyebrow eyebrow-terracota">A promessa</span>
            <div className="divider-bar divider-bar-terracota" />
          </div>
          <div className="md:col-span-7">
            <h2 className="font-heading font-bold text-[1.75rem] md:text-[2.5rem] leading-[1.15] text-[#083D5F]">
              O diferencial não é a metodologia. É o compromisso.
            </h2>
            <p className="mt-6 text-lg text-[#333] leading-relaxed max-w-[62ch]">
              OKR, Design Thinking, Scrum — todo mundo tem. O que a Mentto
              entrega é{" "}
              <strong className="font-semibold">
                comprometimento, engajamento e maturidade
              </strong>
              : o dono que não larga o plano, o time que executa, o pesquisador
              que se engaja.
            </p>
            <p className="mt-5 text-lg text-[#333]/80 leading-relaxed max-w-[62ch]">
              Um cliente cravou melhor que qualquer slide:{" "}
              <em className="text-[#083D5F] not-italic font-semibold">
                &ldquo;o que vocês entregam é ajudar no comprometimento das
                pessoas.&rdquo;
              </em>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F3F1EB]">
        <div className="container-mentto py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow eyebrow-verde">Quem atendemos</span>
            <h2 className="mt-4 font-heading font-bold text-[2rem] md:text-[2.5rem] text-[#083D5F] leading-tight">
              Dois públicos, um jeito só de estar do lado.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Para a empresa",
                headline: "O dono está na operação. E na decisão.",
                body: "Empresa de tradição familiar ou industrial — em geral do interior — com estrutura e governança que já pedem apoio. A gente entra do lado, não por cima.",
                accentClass: "card-accent-petroleo",
                eyebrowClass: "eyebrow-petroleo",
              },
              {
                tag: "Para o centro de pesquisa",
                headline: "Prazo apertado. Equipes que não andam juntas.",
                body: "Coordenadores e gestores de projeto que precisam entregar dentro do edital e prestar contas do que foi combinado. A Mentto fala a língua e sabe do processo.",
                accentClass: "card-accent-verde",
                eyebrowClass: "eyebrow-verde",
              },
            ].map((p) => (
              <div key={p.tag} className="publico-page-card">
                <div className={p.accentClass} />
                <span className={`eyebrow ${p.eyebrowClass}`}>{p.tag}</span>
                <h3 className="mt-4 font-heading font-bold text-[1.5rem] md:text-[2rem] leading-[1.15] text-[#083D5F]">
                  {p.headline}
                </h3>
                <p className="mt-5 text-[#333]/80 text-lg leading-relaxed max-w-[52ch]">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-bar-root">
        <div className="container-mentto cta-bar-inner">
          <h3 className="cta-bar-title">
            Quer entender se a Mentto encaixa no seu momento?
          </h3>
          <Link href="/contato" className="btn-highlight">
            Pedir meu diagnóstico
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
