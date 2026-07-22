import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell, PageHeader } from "@/components/site-chrome";
import "../pages.css";

export const metadata: Metadata = {
  title: "Método R·O·T·A — Mentto",
  description:
    "Reconhecer, Orientar, Tracionar e — sobretudo — Acompanhar. O caminho único que atravessa tudo que a Mentto faz.",
  openGraph: {
    title: "Método R·O·T·A — Mentto",
    description:
      "Reconhecer, Orientar, Tracionar e — sobretudo — Acompanhar. O caminho único que atravessa tudo que a Mentto faz.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const rota = [
  {
    letter: "R",
    name: "Reconhecer",
    desc: "Diagnóstico real, sem suavizar a verdade. A conversa começa entendendo o momento — pessoas, números, histórias — e não vendendo cardápio.",
    detail:
      "Escutamos o dono, a liderança e o time. Lemos os documentos que existem. Mapeamos o que trava a decisão. Só depois disso a gente propõe qualquer coisa.",
  },
  {
    letter: "O",
    name: "Orientar",
    desc: "Estratégia com foco, não volume. O que importa, na ordem certa.",
    detail:
      "Poucas prioridades, com dono, com prazo, com critério de sucesso. Menos slides, mais decisões tomadas em conjunto.",
  },
  {
    letter: "T",
    name: "Tracionar",
    desc: "Execução com ritmo. Plano sem tração vira gaveta — e a gaveta a gente conhece.",
    detail:
      "Ritual de tração curto, semanal ou quinzenal. A gente destrava, cobra e ajuda a redistribuir carga quando a realidade muda.",
  },
  {
    letter: "A",
    name: "Acompanhar",
    desc: "Presença contínua. É aqui que a maioria das consultorias falha. É aqui que a Mentto entrega.",
    detail:
      "Depois que o plano começa a rodar, a Mentto continua do lado — o ano inteiro. É a parte mais pesada do nosso trabalho e a que mais muda resultado.",
    heavy: true,
  },
];

export default function MetodoPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="O método"
        title={
          <>
            R·O·T·A —{" "}
            <span className="text-[#FFC300]">um caminho só</span>, do primeiro
            café ao ano inteiro.
          </>
        }
        lede="Reconhecer, Orientar, Tracionar e — sobretudo — Acompanhar. É o mesmo método para empresa e para centro de pesquisa."
      />
      <section className="bg-white">
        <div className="container-mentto py-20 md:py-28 space-y-8">
          {rota.map((s, i) => (
            <div
              key={s.letter}
              className={`grid md:grid-cols-12 gap-8 rounded-lg p-8 md:p-10 ${
                s.heavy ? "bg-[#083D5F] text-white" : "bg-[#F3F1EB]"
              }`}
            >
              <div className="md:col-span-3">
                <div
                  className={`font-heading font-bold leading-none ${
                    s.heavy
                      ? "text-[7rem] text-[#FFC300]"
                      : "text-[5rem] text-[#083D5F]/90"
                  }`}
                >
                  {s.letter}
                </div>
                <div
                  className={`mt-2 font-heading font-semibold text-xl ${
                    s.heavy ? "text-white" : "text-[#083D5F]"
                  }`}
                >
                  {s.name}
                </div>
              </div>
              <div className="md:col-span-9">
                <p
                  className={`text-lg leading-relaxed ${
                    s.heavy ? "text-[#F3F1EB]/95" : "text-[#333]"
                  }`}
                >
                  {s.desc}
                </p>
                <p
                  className={`mt-4 leading-relaxed ${
                    s.heavy ? "text-[#F3F1EB]/80" : "text-[#333]/75"
                  }`}
                >
                  {s.detail}
                </p>
                {i === 3 && (
                  <p className="mt-6 font-heading font-semibold text-[#FFC300]">
                    É por isso que o &ldquo;A&rdquo; é o mais pesado.
                  </p>
                )}
              </div>
            </div>
          ))}
        <div className="pt-6 flex flex-wrap gap-4">
            <Link href="/frentes" className="btn-primary">
              Ver as frentes
            </Link>
            <Link href="/contato" className="btn-secondary">
              Pedir meu diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
