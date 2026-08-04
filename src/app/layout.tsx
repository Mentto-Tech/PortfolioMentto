import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ScrollReveal from "@/components/scroll-reveal";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mentto — Estratégia, pesquisa e tecnologia, do lado do cliente",
  description:
    "A Mentto não entrega um plano e some. A gente fica do lado — na empresa e no centro de pesquisa — enquanto o plano vira execução, o ano inteiro.",
  authors: [{ name: "Mentto" }],

  openGraph: {
    title: "Mentto — Estratégia, pesquisa e tecnologia, do lado do cliente",
    description:
      "A Mentto não entrega um plano e some. A gente fica do lado — na empresa e no centro de pesquisa — enquanto o plano vira execução, o ano inteiro.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentto — Estratégia, pesquisa e tecnologia, do lado do cliente",
    description:
      "A Mentto não entrega um plano e some. A gente fica do lado — na empresa e no centro de pesquisa — enquanto o plano vira execução, o ano inteiro.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
