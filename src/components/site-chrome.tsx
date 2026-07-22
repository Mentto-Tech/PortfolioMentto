"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./site-chrome.css";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const textColor = tone === "light" ? "text-white" : "text-[#1a1a2e]";
  return (
    <Link href="/" aria-label="Mentto" className={`flex items-center gap-2 ${textColor}`}>
      <Image
        src="/logo.png"
        alt=""
        width={28}
        height={28}
        className={`h-7 w-auto object-contain${tone === "light" ? " brightness-0 invert" : ""}`}
        priority
      />
      <span className="font-heading font-bold text-lg leading-none">Mentto</span>
    </Link>
  );
}

export function ChevronPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern
          id="chev"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M8 34 L24 14 L40 34"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#chev)" />
    </svg>
  );
}

const navItems = [
  { href: "/", label: "Início" },
  { href: "/rota", label: "ROTA" },
  { href: "/mergulho", label: "Mergulho" },
  { href: "/ponte", label: "Ponte pesquisa" },
] as const;
export function Nav() {
  const pathname = usePathname();

  return (
    <header key={pathname} className="nav-root nav-enter">
      <div className="container-mentto nav-inner">
        <Logo tone="dark" />
        <nav className="nav-links">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`nav-link ${pathname === n.href ? "nav-link-active" : ""}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contato" className="nav-cta">
          Contato
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer-root">
      <div className="container-mentto footer-grid">
        <div>
          <Logo tone="light" />
          <p className="footer-tagline">
            Consultoria em estratégia, pesquisa e tecnologia. Do lado do
            cliente, o ano inteiro.
          </p>
        </div>
        <div className="footer-col-links">
          <div className="footer-col-title">Frentes</div>
          <div>
            <Link href="/rota" className="footer-link">
              ROTA — planejamento estratégico
            </Link>
          </div>
          <div>
            <Link href="/mergulho" className="footer-link">
              MERGULHO — treinamentos e imersões
            </Link>
          </div>
          <div>
            <Link href="/ponte" className="footer-link">
              PONTE — gestão de projetos de pesquisa
            </Link>
          </div>
          <div>
            <Link href="/tech-lab" className="footer-link">
              Mentto Tech Lab — soluções digitais
            </Link>
          </div>
        </div>
        <div className="footer-col-links">
          <div className="footer-col-title">Contato</div>
          <div>Pompeia/SP — atende todo o Brasil</div>
          <div>
            <a href="mailto:contato@mentto.com.br" className="footer-link-underline">
              contato@mentto.com.br
            </a>
          </div>
          <div>
            <a href="tel:+5514981756771" className="footer-link-underline">
              (14) 98175-6771
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-mentto footer-bottom-inner">
          <div>
            © {new Date().getFullYear()} Mentto Educação, Estratégia e Inovação
            LTDA · CNPJ 33.304.526/0001-14
          </div>
          <div>mentto.com.br</div>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
  eyebrowColor = "text-[#FFC300]",
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  eyebrowColor?: string;
}) {
  return (
    <section className="hero-radial page-header reveal-section">
      <ChevronPattern className="absolute inset-0 h-full w-full text-white/10" />
      <div className="container-mentto page-header-inner">
        <span className={`eyebrow ${eyebrowColor} reveal`}>{eyebrow}</span>
        <h1 className="mt-5 font-heading font-bold leading-[1.05] tracking-tight text-white text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] max-w-4xl reveal stagger-1">
          {title}
        </h1>
        {lede && <p className="page-header-lede reveal stagger-2">{lede}</p>}
      </div>
    </section>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
