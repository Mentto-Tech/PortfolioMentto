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
            {/* Espaço reservado para foto */}
            <div className="mt-8 w-full aspect-[4/3] rounded-lg bg-[#083D5F]/10 border-2 border-dashed border-[#083D5F]/20 flex items-center justify-center">
              <span className="text-[#083D5F]/40 text-sm font-heading">Foto em breve</span>
            </div>
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
    accent: "#083D5F",
    href: "/rota",
  },
  {
    tag: "Transversal",
    name: "MERGULHO",
    title: "Workshops e imersões temáticas",
    desc: "A gente desce fundo no tema — e o time emerge sabendo o que fazer. Imersões de 1 a 2 dias (Ágil, Inovação, Estratégia, Pessoas) de onde o time sai com clareza e plano de ação.",
    accent: "#C25D44",
    href: "/mergulho",
  },
  {
    tag: "Pesquisa",
    name: "Ponte pesquisa",
    title: "Gestão e acompanhamento de projetos de inovação tecnológica",
    desc: "A gente organiza o projeto, alinha as equipes e garante que a inovação avança — dentro dos prazos e exigências. Atuamos como PMO para projetos de pesquisa científica e tecnológica (CCDs, institutos).",
    accent: "#FFC300",
    tagline: "Da pesquisa ao mercado.",
    href: "/ponte",
  },
  {
    tag: "Tecnologia",
    name: "Mentto Tech Lab",
    title: "Desenvolvimento de soluções digitais",
    desc: "Nosso braço de P&D que pega uma ideia digital presa num protótipo e transforma em produto real no mercado: valida o que falta, constrói pra valer, coloca no ar e fica do lado até funcionar.",
    accent: "#107F8D",
    href: "/tech-lab",
  },
];

function Frentes() {
  return (
    <section id="frentes" className="bg-[#F3F1EB] reveal-section">
      <div className="container-mentto py-24 md:py-24">
        <div className="text-center reveal">
          <span className="eyebrow eyebrow-terracota">O que fazemos</span>
          <h2 className="mt-1 md:mt-2 font-heading font-bold text-[2.25rem] md:text-[3rem] leading-[1.1] text-[#083D5F]">
            Três frentes de trabalho.
            <br />
            Dois públicos: empresa e pesquisa.
          </h2>
          <p className="mt-6 text-lg text-[#333]/80 max-w-[62ch] mx-auto">
            Você não precisa escolher agora em qual entrar — a gente entende
            primeiro, depois direciona. Este é o mapa.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {frentes.map((f, i) => (
            <Link
              key={f.name}
              href={f.href}
              className={`frente-card reveal stagger-${(i + 1) as 1|2|3|4} block no-underline`}
            >
              <div
                className="card-accent-bar"
                style={{ backgroundColor: f.accent }}
              />
              <div className="flex items-baseline justify-between gap-4">
                <div
                  className="eyebrow"
                  style={{ color: f.accent === "#FFC300" ? "#666" : f.accent }}
                >
                  {f.tag}
                </div>
                <div
                  className="font-heading font-bold text-2xl md:text-[1.75rem] tracking-tight"
                  style={{ color: f.accent }}
                >
                  {f.name}
                </div>
              </div>
              <h3 className="mt-6 font-heading font-semibold text-xl md:text-[1.375rem] text-[#083D5F] leading-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-[#333]/80 leading-relaxed">{f.desc}</p>
              {f.tagline && (
                <p className="mt-4 font-heading font-semibold" style={{ color: f.accent }}>
                  {f.tagline}
                </p>
              )}
              <div
                className="mt-6 inline-flex items-center gap-1.5 font-heading font-semibold text-sm"
                style={{ color: f.accent }}
              >
                Saiba mais
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

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

        {/* Espaço reservado para imagem com logos das empresas */}
        <div className="mt-16 reveal stagger-1">
          <div className="w-full rounded-xl bg-white/[0.08] border-2 border-dashed border-white/25 flex flex-col items-center justify-center py-20 gap-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden className="opacity-40">
              <rect x="4" y="10" width="40" height="28" rx="4" stroke="white" strokeWidth="2" />
              <circle cx="17" cy="22" r="4" stroke="white" strokeWidth="2" />
              <path d="M4 34l10-8 8 6 8-10 14 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white/50 font-heading text-sm">Imagem com logos em breve</span>
          </div>
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
            <div className="inline-flex items-center gap-2 bg-[#FFC300] text-[#333] font-heading font-bold text-sm px-4 py-2 rounded-full mb-6">
              ✦ 100% GRATUITO
            </div>
            <span className="eyebrow eyebrow-amarelo block mb-2">
              O diagnóstico
            </span>
            <h2 className="font-heading font-bold text-white text-[2rem] md:text-[3rem] leading-[1.05]">
              Antes de vender qualquer coisa, a gente escuta.
            </h2>
            <p className="mt-6 text-lg text-[#F3F1EB]/90 max-w-[46ch] leading-relaxed">
              O diagnóstico é real, sem suavizar a verdade. A conversa começa entendendo, não vendendo. O gargalo não é conhecimento — é presença: alguém que não deixa o plano morrer na gaveta.
            </p>
            <p className="mt-4 text-[#FFC300] font-heading font-semibold text-lg">
              Sem custo. Sem compromisso. Só a conversa.
            </p>
            <div className="mt-8 space-y-2 cta-contact-info">
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
