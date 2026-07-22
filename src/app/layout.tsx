import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import ScrollReveal from "@/components/scroll-reveal";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
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
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccc71e24-4e6a-4170-b354-de75fe42a7b1/id-preview-5c983b5f--895ecf0e-d5ae-4d95-a5ca-752ab936fdfb.lovable.app-1784727849952.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Lovable",
    title: "Mentto — Estratégia, pesquisa e tecnologia, do lado do cliente",
    description:
      "A Mentto não entrega um plano e some. A gente fica do lado — na empresa e no centro de pesquisa — enquanto o plano vira execução, o ano inteiro.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ccc71e24-4e6a-4170-b354-de75fe42a7b1/id-preview-5c983b5f--895ecf0e-d5ae-4d95-a5ca-752ab936fdfb.lovable.app-1784727849952.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${openSans.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
