import Link from "next/link";
import type { Metadata } from "next";
import { SiteShell } from "@/components/site-chrome";
import TitularForm from "./TitularForm";

export const metadata: Metadata = {
  title: "Acesso à Informação: Titular de Dados | Mentto",
  description: "Exerça seus direitos sobre seus dados pessoais de forma simples e transparente.",
};

export default function TitularPage() {
  return (
    <SiteShell>
      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#083D5F] text-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="border-b border-white/10 pb-8">
            <Link href="/termos-de-uso-e-politicas-de-privacidade" className="text-[#C25D44] hover:opacity-80 font-medium mb-4 inline-block transition-opacity">
              &larr; Voltar para Termos e Políticas
            </Link>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white sm:text-5xl mt-2">
              Acesso à Informação: Titular de Dados
            </h1>
            <p className="mt-4 text-xl text-white/70">
              Exerça seus direitos sobre seus dados pessoais de forma simples e transparente.
            </p>
          </div>

          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              Na Mentto, valorizamos sua privacidade e transparência. Como titular de dados pessoais, você possui direitos garantidos pela Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018). Esta página foi criada para facilitar o exercício desses direitos.
            </p>

            <h3 className="text-2xl font-heading font-bold text-white mt-8">Seus Direitos</h3>
            <p>Você pode solicitar a qualquer momento:</p>

            <div className="grid gap-6 md:grid-cols-2 mt-6">
              {[
                { title: "Acesso aos Dados", desc: "Confirmação da existência de tratamento e acesso aos dados que possuímos sobre você." },
                { title: "Correção de Dados", desc: "Correção de dados incompletos, inexatos ou desatualizados." },
                { title: "Anonimização, Bloqueio ou Eliminação", desc: "De dados desnecessários, excessivos ou tratados em desconformidade com a lei." },
                { title: "Portabilidade", desc: "Portabilidade dos dados a outro fornecedor de serviço ou produto." },
                { title: "Informação sobre Compartilhamento", desc: "Informação das entidades com as quais realizamos uso compartilhado de dados." },
                { title: "Revogação do Consentimento", desc: "Revogação do consentimento, nos termos da lei." },
              ].map((item) => (
                <div key={item.title} className="bg-[#052438] p-6 rounded-lg border border-white/10">
                  <h4 className="font-heading font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-heading font-bold text-white mt-10">Como Solicitar</h3>
            <p>Para exercer qualquer um dos seus direitos, ou caso tenha dúvidas sobre como tratamos seus dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO).</p>
            <p>Sua solicitação será analisada e respondida dentro dos prazos legais estabelecidos.</p>
          </div>

          <TitularForm />
        </div>
      </main>
    </SiteShell>
  );
}
