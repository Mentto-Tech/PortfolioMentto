import Link from "next/link";
import { Nav, Footer, ChevronPattern } from "@/components/site-chrome";
import HomeCTAForm from "./home-cta-form";
import { StatsCards } from "@/components/stats-cards";
import "./home.css";


function Hero() {
  return (
    <section className="hero-radial relative overflow-hidden text-white">
      <ChevronPattern className="absolute inset-0 h-full w-full text-white/10" />
      <div className="container-mentto relative py-24">
        <div className="max-w-4xl">
          <span className="eyebrow text-[#FFC300] reveal">
            Estratégia · Pesquisa · Tecnologia
          </span>
          <h1 className="mt-6 font-heading font-bold leading-[1.05] tracking-tight text-white text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] reveal stagger-1">
            A gente não entrega um plano.
            <br />
            <span className="text-[#FFC300]">A gente fica do lado</span> enquanto
            ele acontece.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#F3F1EB]/90 leading-relaxed reveal stagger-2">
            Consultoria com acompanhamento contínuo — para a empresa que quer
            sair do papel e para o centro de pesquisa que precisa entregar. Do
            lado, o ano inteiro.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 reveal stagger-3">
            <Link
              href="#contato"
              className="inline-flex items-center rounded-md bg-[#FFC300] px-6 py-3.5 font-heading font-semibold text-[#333] transition hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0"
            >
              Pedir um diagnóstico
            </Link>
            <Link
              href="#frentes"
              className="inline-flex items-center rounded-md border-[1.5px] border-white/90 px-6 py-3.5 font-heading font-semibold text-white transition hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0"
            >
              Conheça nossos serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueStrip() {
  return (
    <section className="value-strip reveal-section">
      <div className="container-mentto">
        <StatsCards />
      </div>
    </section>
  );
}

function Promessa() {
  return (
    <section id="mentto" className="bg-[#F3F1EB] reveal-section">
      <div className="container-mentto py-24 md:py-24">
        <div className="grid md:grid-cols-12 gap-4 md:gap-12 items-start">
          <div className="md:col-span-4 reveal-left">
            <span className="eyebrow eyebrow-terracota">Breve história</span>
            <div className="divider-bar divider-bar-terracota" />
          </div>
          <div className="md:col-span-8 reveal stagger-1">
            <h2 className="font-heading font-bold text-[2rem] md:text-[3rem] leading-[1.1] text-[#083D5F]">
              7 anos de experiência em projetos de alta complexidade…
            </h2>
            <p className="mt-8 text-lg text-[#333] leading-relaxed max-w-[68ch]">
              A Mentto atua em três frentes — <strong className="font-semibold">estratégia, pesquisa e tecnologia</strong> — atendendo empresas e centros de pesquisa. Sediada em Pompeia/SP, dentro do Centro de Inovação Tecnológica da Alta Paulista (CITAP), levamos nosso trabalho para todo o Brasil.
            </p>
            <p className="mt-6 text-lg text-[#333]/80 leading-relaxed max-w-[68ch]">
              Nosso diferencial não é uma metodologia pronta, o que entregamos é <strong className="font-semibold">comprometimento e maturidade</strong>. Onde a maioria das consultorias entrega um plano e vai embora, nós ficamos do lado enquanto a execução acontece. O dono não larga o plano, o time executa e o pesquisador se engaja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const frentes = [
  {
    tag: "Empresas",
    name: "ROTA",
    title: "Consultoria estratégica com acompanhamento contínuo",
    desc: "A gente constrói a sua rota — e fica do lado o ano inteiro. Plano e acompanhamento são inseparáveis para que a estratégia saia da gaveta e vire movimento em 4 níveis: Essencial, Gestão, Executivo e Conselho.",
    accent: "#107F8D",
  },
  {
    tag: "Transversal",
    name: "MERGULHO",
    title: "Workshops e imersões temáticas",
    desc: "A gente desce fundo no tema — e o time emerge sabendo o que fazer. Imersões de 1 a 2 dias (Ágil, Inovação, Estratégia, Pessoas) de onde o time sai com clareza e plano de ação.",
    accent: "#C25D44",
  },
  {
    tag: "Pesquisa",
    name: "Ponte pesquisa",
    title: "Gestão e acompanhamento de projetos de inovação tecnológica",
    desc: "A gente organiza o projeto, alinha as equipes e garante que a inovação avança — dentro dos prazos e exigências. Atuamos como PMO para projetos de pesquisa científica e tecnológica (CCDs, institutos).",
    accent: "#FFC300",
    tagline: "Da pesquisa ao mercado.",
  },
  {
    tag: "Tecnologia",
    name: "Mentto Tech Lab",
    title: "Desenvolvimento de soluções digitais",
    desc: "Nosso braço de P&D que pega uma ideia digital presa num protótipo e transforma em produto real no mercado: valida o que falta, constrói pra valer, coloca no ar e fica do lado até funcionar.",
    accent: "#083D5F",
  },
];

function Frentes() {
  return (
    <section id="frentes" className="bg-[#F3F1EB] reveal-section">
      <div className="container-mentto py-24 md:py-24">
        <div className="max-w-3xl reveal">
          <span className="eyebrow eyebrow-terracota">O que fazemos</span>
          <h2 className="mt-1 md:mt-2 font-heading font-bold text-[2.25rem] md:text-[3rem] leading-[1.1] text-[#083D5F]">
            Três frentes de trabalho.
            <br />
            Dois públicos: empresa e pesquisa.
          </h2>
          <p className="mt-6 text-lg text-[#333]/80 max-w-[62ch]">
            Você não precisa escolher agora em qual entrar — a gente entende
            primeiro, depois direciona. Este é o mapa.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {frentes.map((f, i) => (
            <article
              key={f.name}
              className={`frente-card reveal stagger-${(i + 1) as 1|2|3|4}`}
            >
              <div className={`card-accent-${f.accent === "#107F8D" ? "verde" : f.accent === "#FFC300" ? "amarelo" : f.accent === "#083D5F" ? "petroleo" : "terracota"}`} />
              <div className="flex items-baseline justify-between gap-4">
                <div
                  className={`eyebrow ${f.accent === "#FFC300" ? "eyebrow-grafite" : f.accent === "#107F8D" ? "eyebrow-verde" : f.accent === "#083D5F" ? "eyebrow-petroleo" : "eyebrow-terracota"}`}
                >
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const empresas = [
  {
    nome: "Toca Imóveis",
    cliente: "Mário Colombo Neto, Diretor",
    depoimento: "Projetos conjuntos com ferramentas de gestão e inovação; mais assertividade e foco na solução dos problemas.",
  },
  {
    nome: "Helda Cervejaria",
    cliente: "Pedro Palú",
    depoimento: "Mais clareza, mais estratégia, decisões melhores; repensou a estrutura do negócio e evoluiu como gestor.",
  },
  {
    nome: "ITAL",
    cliente: "Gisele Anne Camargo, Vice-Diretora",
    depoimento: "A gestão estruturada permitiu o acompanhamento periódico de metas e resultados, fortalecendo a governança e a transparência das entregas.",
  },
  {
    nome: "Fundação Shunji Nishimura (FSNT)",
    cliente: "Alberto Honda, Conselheiro",
    depoimento: "A liderança da Mentto foi fundamental para fazer acontecer o maior programa de transformação digital da região — mais de 20 empresas e 100 profissionais.",
  }
];

function Empresas() {
  return (
    <section id="empresas" className="bg-[#107F8D] text-white reveal-section">
      <div className="container-mentto py-24 md:py-32">
        <div className="max-w-3xl reveal">
          <span className="eyebrow text-[#FFC300]">Lastro e Confiança</span>
          <h2 className="mt-1 md:mt-2 font-heading font-bold text-white text-[2.25rem] md:text-[3rem] leading-[1.1]">
            Empresas que já passaram por aqui
          </h2>
          <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[62ch]">
            De líderes regionais e indústrias a grandes centros de pesquisa e inovação tecnológica.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {empresas.map((e, i) => (
            <article
              key={e.nome}
              className={`bg-white/[0.08] backdrop-blur-sm rounded-lg p-8 border border-white/15 reveal stagger-${(i + 1) as 1|2|3|4}`}
            >
              <div className="font-heading font-bold text-[#FFC300] text-xl mb-1">{e.nome}</div>
              <div className="text-white/70 text-sm mb-5">{e.cliente}</div>
              <p className="text-[#F3F1EB]/95 leading-relaxed italic">
                "{e.depoimento}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contato" className="hero-radial relative overflow-hidden text-white reveal-section">
      <ChevronPattern className="absolute inset-0 h-full w-full text-white/[0.08]" />
      <div className="container-mentto relative py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6">
            <span className="eyebrow eyebrow-amarelo">
              Diagnóstico
            </span>
            <h2 className="mt-1 md:mt-2 font-heading font-bold text-white text-[2rem] md:text-[3rem] leading-[1.05]">
              Enxergar a empresa como ela é, não como o dono gostaria.
            </h2>
            <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[46ch]">
              O diagnóstico é real, sem suavizar a verdade. A conversa começa entendendo, não vendendo. O gargalo não é conhecimento — é presença: alguém que não deixa o plano morrer na gaveta.
            </p>
            <div className="mt-10 space-y-2 cta-contact-info">
              <div className="font-heading font-semibold text-white">Mentto</div>
              <div>Pompeia/SP — atende todo o Brasil</div>
              <div>
                <a
                  href="mailto:contato@mentto.com.br"
                  className="cta-contact-link"
                >
                  contato@mentto.com.br
                </a>
              </div>
              <div>
                <a
                  href="tel:+5514981756771"
                  className="cta-contact-link"
                >
                  (14) 98175-6771
                </a>
              </div>
            </div>
          </div>

          <HomeCTAForm />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <Nav />
      <main>
        <Hero />
        <ValueStrip />
        <Promessa />
        <Frentes />
        <Empresas />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
