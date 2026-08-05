import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Rocket, Users, CalendarCheck, FileText, FlaskConical, Wrench } from "lucide-react";
import { Nav, Footer } from "@/components/site-chrome";
import HomeCTAForm from "./home-cta-form";
import FAQAccordion from "./faq-accordion";
import "./home.css";

/* ============================================================
   BACKUP — HOME ANTERIOR AO HTML v17
   ============================================================

import { StatsCards } from "@/components/stats-cards";

function Hero() {
  return (
    <section className="hero-radial relative overflow-hidden text-white">
      <div className="container-mentto relative py-24">
        <div className="max-w-4xl">
          <span className="eyebrow text-[#FFC300] reveal">Estratégia · Pesquisa · Tecnologia</span>
          <h1 className="mt-6 font-heading font-bold leading-[1.05] tracking-tight text-white text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] reveal stagger-1">
            A gente não entrega um plano.<br />
            <span className="text-[#FFC300]">A gente fica do lado</span> enquanto ele acontece.
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#F3F1EB]/90 leading-relaxed reveal stagger-2">
            Consultoria com acompanhamento contínuo — para a empresa que quer sair do papel e para o centro de pesquisa que precisa entregar. Do lado, o ano inteiro.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 reveal stagger-3">
            <Link href="#contato" className="inline-flex items-center rounded-md bg-[#FFC300] px-6 py-3.5 font-heading font-semibold text-[#333] transition hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0">Pedir um diagnóstico</Link>
            <Link href="#frentes" className="inline-flex items-center rounded-md border-[1.5px] border-white/90 px-6 py-3.5 font-heading font-semibold text-white transition hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0">Conheça nossos serviços</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
function ValueStrip() {
  return (
    <section className="value-strip reveal-section">
      <div className="container-mentto"><StatsCards /></div>
    </section>
  );
}
function Promessa() {
  return (
    <section id="mentto" className="bg-[#F3F1EB] reveal-section">
      <div className="container-mentto py-24">
        <div className="grid md:grid-cols-12 gap-4 md:gap-12 items-start">
          <div className="md:col-span-4 reveal-left">
            <span className="eyebrow eyebrow-terracota">Breve história</span>
            <div className="divider-bar divider-bar-terracota" />
            <div className="mt-8 w-full aspect-[4/3] rounded-lg bg-[#083D5F]/10 border-2 border-dashed border-[#083D5F]/20 flex items-center justify-center">
              <span className="text-[#083D5F]/40 text-sm font-heading">Foto em breve</span>
            </div>
          </div>
          <div className="md:col-span-8 reveal stagger-1">
            <h2 className="font-heading font-bold text-[2rem] md:text-[3rem] leading-[1.1] text-[#083D5F]">7 anos de experiência em projetos de alta complexidade…</h2>
            <p className="mt-8 text-lg text-[#333] leading-relaxed max-w-[68ch]">A Mentto atua em três frentes — <strong>estratégia, pesquisa e tecnologia</strong> — atendendo empresas e centros de pesquisa.</p>
            <p className="mt-6 text-lg text-[#333]/80 leading-relaxed max-w-[68ch]">Nosso diferencial não é uma metodologia pronta, o que entregamos é <strong>comprometimento e maturidade</strong>.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
const frentesOld = [
  { tag:"Empresas", name:"ROTA", title:"Consultoria estratégica com acompanhamento contínuo", desc:"A gente constrói a sua rota — e fica do lado o ano inteiro.", accent:"#083D5F", href:"/rota" },
  { tag:"Transversal", name:"MERGULHO", title:"Workshops e imersões temáticas", desc:"A gente desce fundo no tema.", accent:"#C25D44", href:"/mergulho" },
  { tag:"Pesquisa", name:"Ponte pesquisa", title:"Gestão de projetos de inovação tecnológica", desc:"A gente organiza o projeto.", accent:"#FFC300", tagline:"Da pesquisa ao mercado.", href:"/ponte" },
  { tag:"Tecnologia", name:"Mentto Tech Lab", title:"Desenvolvimento de soluções digitais", desc:"Nosso braço de P&D.", accent:"#107F8D", href:"/tech-lab" },
];
function Frentes() {
  return (
    <section id="frentes" className="bg-[#F3F1EB] reveal-section">
      <div className="container-mentto py-24">
        <div className="text-center reveal">
          <span className="eyebrow eyebrow-terracota">O que fazemos</span>
          <h2 className="mt-2 font-heading font-bold text-[2.25rem] md:text-[3rem] leading-[1.1] text-[#083D5F]">Três frentes de trabalho.<br />Dois públicos: empresa e pesquisa.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {frentesOld.map((f,i) => (
            <Link key={f.name} href={f.href} className={`frente-card reveal stagger-${(i+1) as 1|2|3|4} block no-underline`}>
              <div className="card-accent-bar" style={{backgroundColor:f.accent}} />
              <div className="flex items-baseline justify-between gap-4">
                <div className="eyebrow" style={{color:f.accent==="#FFC300"?"#666":f.accent}}>{f.tag}</div>
                <div className="font-heading font-bold text-2xl" style={{color:f.accent}}>{f.name}</div>
              </div>
              <h3 className="mt-6 font-heading font-semibold text-xl text-[#083D5F] leading-tight">{f.title}</h3>
              <p className="mt-4 text-[#333]/80 leading-relaxed">{f.desc}</p>
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
      <div className="container-mentto py-24">
        <div className="max-w-3xl reveal">
          <span className="eyebrow text-[#FFC300]">Lastro e Confiança</span>
          <h2 className="mt-2 font-heading font-bold text-white text-[2.25rem] md:text-[3rem] leading-[1.1]">Empresas que já passaram por aqui</h2>
        </div>
        <div className="mt-16 reveal stagger-1">
          <Image src="/EmpresasQueJaAtendemos.png" alt="Empresas que já passaram pela Mentto" width={1200} height={400} className="w-full rounded-xl" />
        </div>
      </div>
    </section>
  );
}
function CTAOld() {
  return (
    <section id="contato" className="hero-radial relative overflow-hidden text-white reveal-section">
      <div className="container-mentto relative py-24">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6">
            <span className="eyebrow eyebrow-amarelo block mb-2">O diagnóstico</span>
            <h2 className="font-heading font-bold text-white text-[2rem] md:text-[3rem] leading-[1.05]">Antes de vender qualquer coisa, a gente escuta.</h2>
            <div className="mt-8 space-y-2 cta-contact-info">
              <div className="font-heading font-semibold text-white">Mentto</div>
              <div>Pompeia/SP — atende todo o Brasil</div>
              <div><a href="mailto:contato@mentto.com.br" className="cta-contact-link">contato@mentto.com.br</a></div>
              <div><a href="tel:+5514981756771" className="cta-contact-link">(14) 98175-6771</a></div>
            </div>
          </div>
          <HomeCTAForm />
        </div>
      </div>
    </section>
  );
}
export default function HomeOld() {
  return (
    <div className="site-shell"><Nav /><main><Hero /><ValueStrip /><Promessa /><Frentes /><Empresas /><CTAOld /></main><Footer /></div>
  );
}

   ============================================================
   FIM DO BACKUP
   ============================================================ */

// ============================================================
// HOME v17 — fiel ao mentto-home-V17.html
// Único ajuste: hero-radial mantido no fundo azul (hero + CTA)
// ============================================================

// ── HERO (com stats integrados à direita) ───────────────────
function Hero() {
  return (
    <section className="hero-radial relative overflow-hidden text-white">
      <div className="container-mentto relative py-24 md:py-12">
        <div className="home-hero-layout">
          {/* coluna esquerda — texto */}
          <div className="home-hero-left">
            <p className="home-hero-eyebrow home-hero-eyebrow--pill home-section-tag--light-yellow">
              Consultoria de gestão, estratégia, pesquisa e inovação
            </p>
            <h1 className="home-hero-h1">
              Junto <span style={{ color: 'var(--color-amarelo)' }}>até virar resultado.</span>
            </h1>
            <p className="home-hero-lede">
              A Mentto transforma estratégia em rotina de gestão, para empresas e para
              projetos de pesquisa e inovação.
            </p>
            <div className="home-hero-ctas">
              <Link href="#contato" className="home-hero-cta-primary">
                Peça um diagnóstico
              </Link>
              <Link href="#o-que-trava" className="home-hero-cta-secondary">
                Como a gente atua
              </Link>
            </div>
          </div>

          {/* coluna direita — stats */}
          <div className="home-hero-stats">
            <p className="home-hero-stats-label">Sete anos fazendo isso</p>
            <div className="home-hero-stats-list">
              <div className="home-hero-stat">
                <span className="home-hero-stat-num">70+</span>
                <span className="home-hero-stat-desc">empresas e instituições atendidas desde 2019</span>
              </div>
              <div className="home-hero-stat">
                <span className="home-hero-stat-num">25+</span>
                <span className="home-hero-stat-desc">planejamentos estratégicos só em 2026</span>
              </div>
              <div className="home-hero-stat">
                <span className="home-hero-stat-num">10</span>
                <span className="home-hero-stat-desc">projetos público-privados geridos</span>
              </div>
              <div className="home-hero-stat">
                <span className="home-hero-stat-num">97</span>
                <span className="home-hero-stat-desc">de NPS entre clientes de mentoria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── LOGOS ───────────────────────────────────────────────────
function Logos() {
  return (
    <section className="home-logos-section">
      <div className="container-mentto">
        <p className="home-logos-label">Empresas e instituições que já trabalharam com a Mentto</p>
        <Image
          src="/EmpresasQueJaAtendemos.jpeg"
          alt="Empresas e instituições que já trabalharam com a Mentto"
          width={1200}
          height={300}
          className="home-logos-img"
        />
      </div>
    </section>
  );
}

// ── O QUE TRAVA ─────────────────────────────────────────────
function OQueTrava() {
  return (
    <section id="o-que-trava" className="home-trava-section">
      <div className="container-mentto">
        <div className="home-trava-header">
          <span className="home-section-tag home-section-tag--light-red">O que trava</span>
          <p className="home-trava-claim">
            Ninguém trava por falta de conhecimento.<br />
            Trava porque ninguém sustenta o combinado.
          </p>
          <div className="home-section-rule" />
          <p className="home-trava-lede">
            A equipe é boa, a direção está clara e mesmo assim o ano passa sem que o
            principal aconteça. Não é falta de competência: é falta de rotina de gestão.
          </p>
        </div>

        <div className="home-trava-grid">
          {/* card negócio */}
          <div className="home-trava-card">
            <svg className="home-trava-card-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 12L12 3l9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <p className="home-trava-card-tag">Na gestão de estratégia e negócio</p>
            <h3 className="home-trava-card-title">A decisão sai da reunião e morre na semana seguinte.</h3>
            <ul className="home-trava-list">
              <li>
                <strong>Quem decide está preso na operação.</strong>{" "}
                Executivos passam 72% do tempo em reunião e só 43% na própria agenda.{" "}
                <em>Harvard Business Review, 2018</em>
              </li>
              <li>
                <strong>Metade das empresas que fecham têm causa interna,</strong>{" "}
                planejamento, gestão e caixa. Não foi o mercado.{" "}
                <em>Sebrae, 2024</em>
              </li>
            </ul>
          </div>

          {/* card pesquisa */}
          <div className="home-trava-card">
            <svg className="home-trava-card-icon" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 3h6M10 3v6.2L5.4 18a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3L14 9.2V3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.5 15h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
            </svg>
            <p className="home-trava-card-tag">Na gestão de projetos de pesquisa e inovação</p>
            <h3 className="home-trava-card-title">A tecnologia avança. O projeto não fecha.</h3>
            <ul className="home-trava-list">
              <li>
                <strong>Várias instituições, um cronograma só.</strong>{" "}
                Pesquisa, indústria, governo e financiador em ritmos diferentes, com um prazo comum e ninguém governando a travessia.
              </li>
              <li>
                <strong>Resultado técnico não é entrega de projeto.</strong>{" "}
                A tecnologia amadurece, mas o projeto precisa de gestão para virar entrega, e depois, mercado.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── MÉTODO ROTA ─────────────────────────────────────────────
const rotaSteps = [
  { letter: "R", name: "Reconhecer", desc: "Diagnóstico sem suavizar. A organização como ela é, não como a liderança gostaria que fosse." },
  { letter: "O", name: "Orientar",   desc: "Direção com foco, não volume. Poucas prioridades, que cabem na cabeça e na agenda de quem decide." },
  { letter: "T", name: "Tracionar",  desc: "A estratégia sai do slide e vira iniciativa com dono, prazo e andamento cobrado." },
  { letter: "A", name: "Acompanhar", desc: "Correção de rumo enquanto o ano acontece. É nesta etapa que a maioria das consultorias já saiu." },
];

const rotaColors = ["#FFC300", "#C25D44", "#ffffffff", "#083D5F"];
const rotaTextColors = ["#333", "#fff", "#107f8d", "#fff"];

function MetodoRota() {
  return (
    <section id="como-atua" className="home-rota-section">
      <div className="container-mentto">
        <div className="home-rota-header">
          <span className="home-section-tag home-section-tag--rota">Como destrava</span>
          <h2 className="home-rota-title">
            Método R·O·T·A: da realidade ao resultado acompanhado.
          </h2>
          <div className="home-rota-rule" />
          <p className="home-rota-lede">
            As mesmas quatro etapas em todo o portfólio da Mentto. Muda o escopo e o
            cliente; o jeito de trabalhar, não.
          </p>
        </div>
        <div className="home-rota-timeline">
          <div className="home-rota-line" aria-hidden="true" />
          <ol className="home-rota-steps">
            {rotaSteps.map((s, i) => (
              <li key={s.letter} className="home-rota-step">
                <span
                  className="home-rota-circle"
                  style={{ backgroundColor: rotaColors[i], color: rotaTextColors[i] }}
                >
                  {s.letter}
                </span>
                <strong className="home-rota-step-name">{s.name}</strong>
                <p className="home-rota-step-desc">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ── POR ONDE ENTRA ──────────────────────────────────────────
function PorOndeEntra() {
  return (
    <section className="home-entrada-section">
      <div className="container-mentto">
        <div className="home-entrada-header">
          <span className="home-section-tag home-section-tag--light-red">Por onde a Mentto entra</span>
          <h2 className="home-section-h2">Dois caminhos. A gente entende primeiro, depois indica o formato.</h2>
          <div className="home-section-rule" />
        </div>

        <div className="home-entrada-grid">
          {/* ROTA */}
          <div className="home-entrada-card home-entrada-card--rota">
            <div className="home-entrada-card-top">
              <LayoutDashboard size={28} className="home-entrada-icon home-entrada-icon--rota" />
              <span className="home-entrada-num">01</span>
            </div>
            <div className="home-entrada-audience home-entrada-audience--rota">Você que toca uma empresa</div>
            <h3 className="home-entrada-title">Estratégia e Negócio</h3>
            <p className="home-entrada-subtitle">consultoria de gestão com acompanhamento contínuo</p>
            <span className="home-entrada-product home-entrada-product--rota">ROTA</span>
            <p className="home-entrada-body">
              Para empresa em que liderança, decisão e execução andam juntas. Começa por um planejamento
              estratégico construído com a liderança, e continua o ano inteiro.
            </p>
            <ul className="home-entrada-list">
              <li>Rumo, prioridades e metas definidos com a liderança</li>
              <li>Iniciativas com dono, prazo e cobrança de andamento</li>
              <li>Indicadores construídos e mantidos vivos</li>
              <li>Rotina de decisão que não depende de heroísmo</li>
            </ul>
            <Link href="/estrategia-e-negocio" className="home-entrada-btn">
              Ver gestão de estratégia e negócio{" "}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* PONTE */}
          <div className="home-entrada-card home-entrada-card--ponte">
            <div className="home-entrada-card-top">
              <Rocket size={28} className="home-entrada-icon home-entrada-icon--ponte" />
              <span className="home-entrada-num">02</span>
            </div>
            <div className="home-entrada-audience home-entrada-audience--ponte">Você que lidera um projeto de pesquisa</div>
            <h3 className="home-entrada-title">Projetos de pesquisa e inovação</h3>
            <p className="home-entrada-subtitle">gestão de projetos de pesquisa, desenvolvimento e inovação</p>
            <span className="home-entrada-product home-entrada-product--ponte">PONTE</span>
            <p className="home-entrada-body">
              Para quem conduz projeto grande com várias instituições, empresas parceiras e um financiador
              esperando entrega. No meio acadêmico e em áreas de P&amp;D.
            </p>
            <ul className="home-entrada-list">
              <li>Governança clara, papéis, ritos e decisões</li>
              <li>Transparência, não vigilância: cada frente responde pelo que combinou</li>
              <li>Visível o quanto a tecnologia amadureceu, com evidência</li>
              <li>Prestação de contas em dia, sem consumir o tempo técnico</li>
            </ul>
            <Link href="/pesquisa-e-inovacao" className="home-entrada-btn">
              Ver projetos de pesquisa e inovação{" "}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* CTA inline */}
        <div className="home-entrada-cta-box">
          <p className="home-entrada-cta-text">
            <strong>Ainda não sabe por onde começar?</strong>
            Conte a sua situação. A gente entende primeiro e indica o caminho.
          </p>
          <Link href="#contato" className="home-entrada-cta-btn">Falar com a Mentto</Link>
        </div>
      </div>
    </section>
  );
}

// ── POR QUE A MENTTO ────────────────────────────────────────
const diferenciais = [
  {
    icon: Users,
    title: "Construído com a liderança, não entregue a ela.",
    desc: "Prioridades, metas e iniciativas saem de dentro, com quem conhece o negócio e vai sustentar as decisões. Ninguém recebe um diagnóstico pronto para assinar.",
  },
  {
    icon: CalendarCheck,
    title: "Presença na rotina, não visita mensal.",
    desc: "A estratégia entra na agenda, nos indicadores e nas decisões do dia a dia, não numa reunião de status a cada trinta dias.",
  },
  {
    icon: FileText,
    title: "O plano é o começo, não a entrega final.",
    desc: "Objetivos ganham responsáveis, prazos e cadência. O contrato é de acompanhamento; o documento é só o ponto de partida dele.",
  },
];

function PorQueMentto() {
  return (
    <section className="home-porque-section">
      <div className="container-mentto">
        <div className="home-porque-header">
          <span className="home-section-tag home-section-tag--porque">Por que a Mentto</span>
          <h2 className="home-porque-title">O que nos separa de uma consultoria tradicional.</h2>
          <p className="home-porque-lede">Três diferenças que aparecem já no primeiro mês de trabalho.</p>
        </div>
        <div className="home-porque-grid">
          {diferenciais.map((d) => (
            <div key={d.title} className="home-porque-card">
              <d.icon size={24} className="home-porque-icon" aria-hidden />
              <h3 className="home-porque-card-title">{d.title}</h3>
              <p className="home-porque-card-desc">{d.desc}</p>
            </div>
          ))}
        </div>
        <p className="home-porque-close">
          No fim das contas é isto: quando a Mentto entra, você para de carregar sozinho.
        </p>
      </div>
    </section>
  );
}

// ── MERGULHO ────────────────────────────────────────────────
function Mergulho() {
  return (
    <section className="home-mergulho-section">
      <div className="container-mentto">
        <div className="home-mergulho-header">
          <span className="home-section-tag home-section-tag--light-red">Antes de qualquer contrato</span>
          <h2 className="home-section-h2">Comece por um dia.</h2>
        </div>

        <div className="home-mergulho-card">
          {/* coluna esquerda */}
          <div className="home-mergulho-text">
            <p className="home-mergulho-product">MERGULHO</p>
            <p className="home-mergulho-body">
              Um a dois dias, presencial, com o seu time,
              no tema que está travando agora, planejamento, OKR, governança, liderança, gestão ágil,
              IA nos negócios. Você sai com trabalho feito, não com teoria.
            </p>
            <p className="home-mergulho-body">
              Um ano é um passo grande; um dia é um passo curto. Por isso boa parte de quem entra no ROTA
              começou por aqui, e quem já é cliente contrata um MERGULHO quando precisa destravar um tema
              específico com o time.
            </p>
            <Link href="/mergulho" className="home-entrada-btn" style={{ marginTop: "1.5rem" }}>
              Ver os temas{" "}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* coluna direita */}
          <div className="home-mergulho-right">
            {/* foto */}
            <div className="home-mergulho-photo" style={{ padding: 0, overflow: 'hidden' }}>
              <Image
                src="/MenttoMergulho 1.png"
                alt="Um MERGULHO acontecendo"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* lista */}
            <ul className="home-mergulho-list">
              <li>No seu endereço, com o time inteiro</li>
              <li>Tema escolhido a partir do seu momento</li>
              <li>Sai com entregável, não com apostila</li>
              <li>Sem compromisso de continuidade nenhum</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CASES ───────────────────────────────────────────────────
const cases = [
  {
    categoria: "InovaSkill",
    situacao: "Empresas tinham desafios de inovação, mas precisavam de uma metodologia para transformá-los em soluções viáveis.",
    trabalho: "Conduziu a gestão do programa, apoiando empresas e alunos com metodologias de inovação, acompanhamento dos squads e mentorias.",
    resultado: "Empresas passaram a desenvolver soluções inovadoras com equipes multidisciplinares, reduzindo riscos e acelerando a validação de novos produtos e processos.",
    instituicao: "Fundação Shunji Nishimura de Tecnologia",
  },
  {
    categoria: "CCD Circula",
    situacao: "Projetos de pesquisa exigiam maior organização, integração entre equipes e acompanhamento das entregas.",
    trabalho: "Aplicou metodologias de gestão, criou rotinas de acompanhamento e fortaleceu a governança do projeto.",
    resultado: "Pesquisadores ganharam mais clareza sobre prioridades, prazos e entregas, fortalecendo a execução do projeto.",
    instituicao: "CCD Circula",
  },
  {
    categoria: "ASSERTI",
    situacao: "Empresas precisavam estruturar seu planejamento estratégico para crescer com mais direção e previsibilidade.",
    trabalho: "Conduziu o planejamento estratégico de mais de 25 empresas, consolidando a metodologia que deu origem ao ROTA.",
    resultado: "Empresas passaram a tomar decisões mais estratégicas, com prioridades claras e planos de ação estruturados.",
    instituicao: "Impacto360 · Asserti",
  },
];

function Cases() {
  return (
    <section className="home-cases-section">
      <div className="container-mentto">
        <div className="home-cases-header">
          <span className="home-section-tag home-section-tag--light-red">Cases</span>
          <h2 className="home-section-h2">Trabalhos que dá para conferir.</h2>
          <div className="home-section-rule" />
          <p className="home-cases-lede">Nomes reais, situações reais, e o que mudou depois.</p>
        </div>

        <div className="home-cases-grid">
          {cases.map((c) => (
            <div key={c.categoria} className="home-case-card">
              <p className="home-case-categoria">{c.categoria}</p>
              <dl className="home-case-dl">
                <dt>A situação</dt>
                <dd>{c.situacao}</dd>
                <dt>O que a Mentto fez</dt>
                <dd>{c.trabalho}</dd>
                <dt>O que mudou depois</dt>
                <dd>{c.resultado}</dd>
              </dl>
              <p className="home-case-inst">{c.instituicao}</p>
            </div>
          ))}
        </div>

        <div className="home-cases-cta-box">
          <div>
            <p className="home-cases-cta-title">Quer saber como isso funcionaria no seu caso?</p>
            <p className="home-cases-cta-sub">Conte a situação e a gente volta com uma leitura do seu momento.</p>
          </div>
          <Link href="#contato" className="home-cases-cta-btn">Pedir um diagnóstico</Link>
        </div>
      </div>
    </section>
  );
}

// ── DEPOIMENTOS ─────────────────────────────────────────────
const depoimentos = [
  { tipo: "Parceria em projetos", texto: "Fizemos projetos juntos onde aprendemos novas ferramentas de gestão e inovação, acrescentando maior assertividade e foco na solução dos problemas.", nome: "Mário Colombo Neto", empresa: "Diretor · Toca Imóveis" },
  { tipo: "Consultoria com acompanhamento", texto: "A Mentoria me trouxe mais clareza, mais estratégia e decisões melhores. Me fez repensar a estrutura do negócio e evoluir como gestor.", nome: "Pedro Palú", empresa: "Helda Cervejaria" },
  { tipo: "Projeto de pesquisa", texto: "A gestão estruturada permitiu o acompanhamento periódico de metas e resultados, fortalecendo a governança e a transparência das entregas.", nome: "Gisele Anne Camargo", empresa: "Vice-Diretora · ITAL" },
  { tipo: "Programa de inovação", texto: "A liderança da Mentto foi fundamental para fazer acontecer o maior programa de transformação digital da região.", nome: "Alberto Honda", empresa: "Conselheiro · Fundação Shunji Nishimura de Tecnologia" },
];

function Depoimentos() {
  return (
    <section className="home-depo-section">
      <div className="container-mentto">
        <span className="home-section-tag home-section-tag--depo">Quem já passou por aqui</span>
        <h2 className="home-depo-title">O que dizem os clientes.</h2>
        <div className="home-depo-rule" />
        <div className="home-depo-grid">
          {depoimentos.map((d, i) => (
            <div key={i} className="home-depo-card-wrap">
              <div className="home-depo-card">
                <svg className="home-depo-quote" width="24" height="20" viewBox="0 0 24 20" fill="none" aria-hidden>
                  <path d="M0 20V12.5C0 5.596 4.156 1.48 12.469 0l1.093 1.875C9.61 3.073 7.5 5.615 7.031 9.375H11V20H0zm13 0V12.5C13 5.596 17.156 1.48 25.469 0l1.093 1.875C22.61 3.073 20.5 5.615 20.031 9.375H24V20H13z" fill="currentColor"/>
                </svg>
                <p className="home-depo-tipo">{d.tipo}</p>
                <p className="home-depo-texto">{d.texto}</p>
                <div className="home-depo-autor">
                  <div className="home-depo-avatar" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <strong className="home-depo-nome">{d.nome}</strong>
                    <span className="home-depo-empresa">{d.empresa}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TIME ─────────────────────────────────────────────────────
const time = [
  { nome: "Tiago Goulart", cargo: "CEO e Fundador", foto: "/MenttoTiago.png" },
  { nome: "Christopher Tsen", cargo: "Gerente Comercial e Sócio", foto: "/MenttoChris.png" },
  { nome: "Hugo Butarelli", cargo: "Gerente Operacional e Sócio", foto: "/MenttoHugo.png" },
];

function Time() {
  return (
    <section className="home-time-section">
      <div className="container-mentto">
        <div className="home-time-header">
          <span className="home-section-tag home-section-tag--light-red">Quem vai te atender</span>
          <h2 className="home-section-h2">Gente que você vai gostar de ter por perto.</h2>
          <div className="home-section-rule" />
          <p className="home-time-lede">
            Gente próxima, técnica e fácil de trabalhar junto, a mesma que entendeu o seu
            contexto na primeira conversa e continua ali no décimo mês. A ideia é simples: quando a
            Mentto chega, você fica mais tranquilo, porque agora tem quem resolva junto.
            Somos do interior de São Paulo e atendemos todo o Brasil, a proximidade é escolha,
            não limitação. A base fica no CITAP, o primeiro ambiente de inovação credenciado da
            região, em Pompeia.
          </p>
        </div>
        <div className="home-time-grid">
          {time.map((m, i) => (
            <div key={i} className="home-time-card">
              <div className="home-time-avatar">
                <Image
                  src={m.foto}
                  alt={m.nome}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <strong className="home-time-nome">{m.nome}</strong>
              <span className="home-time-cargo">{m.cargo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ─────────────────────────────────────────────────────
const faqs = [
  {
    q: "Quanto custa?",
    a: "O ROTA é mensalidade, com quatro níveis de acompanhamento. O MERGULHO é por diária. Projetos de pesquisa são orçados por escopo e duração. O valor de cada proposta considera o formato, a cadência de acompanhamento e a necessidade de atuação presencial. Primeiro a Mentto entende o contexto e indica o caminho adequado; depois apresenta a proposta para o seu caso.",
  },
  {
    q: "Já contratei consultoria e não deu em nada. Por que seria diferente?",
    a: "Porque na maioria das vezes o que você contratou foi um diagnóstico e um plano, e o plano dependia do seu time executar sozinho, no meio da urgência. Aqui o acompanhamento não é o extra: é o contrato. A cadência de encontros está escrita nele.",
  },
  {
    q: "Quanto tempo o meu time vai gastar com isso?",
    a: "Encontros de acompanhamento com cadência fixa e hora marcada, mais o trabalho que já era do time, só que agora priorizado. A Mentto não cria comitê, não pede relatório extra e não convoca reunião fora do combinado.",
  },
  {
    q: "Vou ficar dependente de vocês?",
    a: "O objetivo é o contrário: instalar a rotina de gestão dentro da casa. Quando o seu time sustenta o ritmo sozinho, a gente reduz a presença.",
  },
];

function FAQ() {
  return (
    <section className="home-faq-section">
      <div className="container-mentto">
        <span className="home-section-tag home-section-tag--faq">Perguntas que ninguém faz em voz alta</span>
        <h2 className="home-faq-title">As respostas difíceis, aqui mesmo.</h2>
        <FAQAccordion />
      </div>
    </section>
  );
}

// ── TAMBÉM FAZ PARTE ─────────────────────────────────────────
function TambemFazParte() {
  return (
    <section className="home-tambem-section">
      <div className="container-mentto">
        <span className="home-section-tag home-section-tag--light-red">Também faz parte</span>
        <h2 className="home-section-h2">Duas frentes que entram quando o caso pede.</h2>
        <div className="home-tambem-grid">
          <div className="home-tambem-card">
            <FlaskConical size={28} className="home-tambem-icon" aria-hidden />
            <p className="home-tambem-product">Mentto Tech Lab</p>
            <p className="home-tambem-desc">
              A área de tecnologia da casa: automação, IA e a ideia que precisa virar MVP rápido
              para ser testada.
            </p>
            <Link href="/tech-lab" className="home-entrada-btn">
              Conhecer o Tech Lab →
            </Link>
          </div>
          <div className="home-tambem-card">
            <Wrench size={28} className="home-tambem-icon" aria-hidden />
            <p className="home-tambem-product">Projetos sob medida</p>
            <p className="home-tambem-desc">
              Quando o desafio não cabe num formato pronto, estruturar uma área de inovação
              dentro da empresa, por exemplo.
            </p>
            <Link href="#contato" className="home-entrada-btn">
              Falar sobre o seu caso →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CTA FINAL ────────────────────────────────────────────────
function CTA() {
  return (
    <section id="contato" className="hero-radial relative overflow-hidden text-white">
      <div className="container-mentto relative py-24 md:py-32">
        <div className="home-cta-grid">
          <div className="home-cta-left">
            <span className="home-section-tag home-section-tag--cta">O primeiro passo</span>
            <h2 className="home-cta-claim">Conta a sua situação. A gente escuta antes de propor qualquer coisa.</h2>
            <p className="home-cta-body">
              Nada de cardápio pronto e nada de proposta genérica.
              A gente entende o seu caso primeiro e desenha o caminho a partir dele, se não for a
              hora, a gente também fala.
            </p>
            <p className="home-cta-steps-label">Como começa</p>
            <ol className="home-cta-steps">
              <li>
                <div className="home-cta-step-head"><span>1</span><strong>Você escreve.</strong></div>
                <p>Duas linhas sobre o que está travando já bastam.</p>
              </li>
              <li>
                <div className="home-cta-step-head"><span>2</span><strong>A gente conversa.</strong></div>
                <p>Uma reunião para entender o momento e o contexto, sem apresentação de slides.</p>
              </li>
              <li>
                <div className="home-cta-step-head"><span>3</span><strong>Você recebe uma proposta.</strong></div>
                <p>Desenhada para o seu caso, com escopo, cadência e prazo. Se não for a hora, a gente diz.</p>
              </li>
            </ol>
            <div className="home-cta-contact">
              <span>Pompeia/SP, atende todo o Brasil</span>
              <span>
                <a href="mailto:contato@mentto.com.br" className="cta-contact-link">contato@mentto.com.br</a>
              </span>
            </div>
          </div>
          <HomeCTAForm />
        </div>
      </div>
    </section>
  );
}

// ── PAGE ────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="site-shell">
      <Nav />
      <main>
        <Hero />
        <Logos />
        <OQueTrava />
        <MetodoRota />
        <PorOndeEntra />
        <PorQueMentto />
        <Mergulho />
        <Cases />
        <Depoimentos />
        <Time />
        <FAQ />
        <TambemFazParte />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
