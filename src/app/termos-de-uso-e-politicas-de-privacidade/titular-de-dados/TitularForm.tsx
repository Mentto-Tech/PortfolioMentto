"use client";

import { useState } from "react";
import { submitTitularForm } from "../actions";

const inputCls = "mt-1 block w-full rounded-md bg-[#052438] border border-white/20 text-white placeholder-white/30 shadow-sm focus:border-[#C25D44] focus:ring-[#C25D44] text-sm px-4 py-2";
const labelCls = "block text-sm font-medium text-white/70";
const radioCls = "h-4 w-4 text-[#C25D44] border-white/30 bg-[#052438] focus:ring-[#C25D44]";

export default function TitularForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    const result = await submitTitularForm(new FormData(event.currentTarget));
    setLoading(false);
    if (result.success) {
      setMessage({ type: "success", text: result.message });
      (event.target as HTMLFormElement).reset();
    } else {
      setMessage({ type: "error", text: result.message });
    }
  }

  return (
    <div className="bg-[#052438] border border-white/10 rounded-xl p-8 shadow-sm">
      <h3 className="text-2xl font-heading font-bold text-white mb-4 text-center">Entre em Contato</h3>
      <p className="text-white/60 mb-6 text-center text-sm">
        Preencha o formulário abaixo para enviar sua solicitação diretamente para nossa equipe de privacidade. Seus dados serão mantidos por 10 anos para fins de compliance e auditoria.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label htmlFor="email" className={labelCls}>E-mail do titular *</label>
          <input type="email" name="email" id="email" required className={inputCls} />
        </div>

        <div>
          <label className={labelCls}>Solicitante *</label>
          <div className="mt-2 space-y-2">
            {["Titular de dados pessoais", "Pai/mãe", "Responsável Legal", "Procurador"].map((option) => (
              <div key={option} className="flex items-center gap-3">
                <input id={`solicitante_${option.replace(/\s+/g, "_")}`} name="solicitante" type="radio" value={option} required className={radioCls} />
                <label htmlFor={`solicitante_${option.replace(/\s+/g, "_")}`} className="text-sm text-white/70">{option}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="nome_titular" className={labelCls}>Nome do titular *</label>
          <input type="text" name="nome_titular" id="nome_titular" required className={inputCls} />
        </div>

        <div>
          <label htmlFor="cpf" className={labelCls}>CPF do titular *</label>
          <input type="text" name="cpf" id="cpf" required className={inputCls} />
        </div>

        <div>
          <label className={labelCls}>Vínculo do Titular com a MENTTO</label>
          <div className="mt-2 space-y-2">
            {[
              "Funcionário CLT",
              "Fornecedor PJ",
              "Estagiário",
              "Menor aprendiz",
              "Participante dos curso e eventos promovidos pela Mentto",
              "Cliente ou seu representante legal",
              "Pessoa cuja imagem, voz ou outro dados pessoal aparece em instrumento de divulgação da MENTTO",
              "Pessoa que realizou cadastro ou enviou mensagem via site",
              "Outro vínculo que não os acima",
            ].map((option) => (
              <div key={option} className="flex items-start gap-3">
                <input id={`vinculo_${option.substring(0, 10).replace(/\s+/g, "_")}`} name="vinculo_do_titular" type="radio" value={option} className={`${radioCls} mt-0.5`} />
                <label htmlFor={`vinculo_${option.substring(0, 10).replace(/\s+/g, "_")}`} className="text-sm text-white/70">{option}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className={labelCls}>Tipo de Solicitação</label>
          <div className="mt-2 space-y-2">
            {[
              "Acesso a dados pessoais tratados",
              "Anonimização, bloqueio ou eliminação de dados pessoais desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD",
              "Confirmação da existência de tratamento de dados pessoais",
              "Eliminação dos dados pessoais tratados com o consentimento",
              "Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa",
              "Revogação do consentimento anteriormente manifestado",
            ].map((option) => (
              <div key={option} className="flex items-start gap-3">
                <input id={`tipo_${option.substring(0, 10).replace(/\s+/g, "_")}`} name="tipo_de_solicitacao" type="checkbox" value={option} className={`${radioCls} mt-1 rounded`} />
                <label htmlFor={`tipo_${option.substring(0, 10).replace(/\s+/g, "_")}`} className="text-sm text-white/70">{option}</label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="descricao_da_solicitacao" className={labelCls}>Descrição da Solicitação *</label>
          <textarea name="descricao_da_solicitacao" id="descricao_da_solicitacao" required rows={4} className={inputCls} />
        </div>

        <div>
          <label className={labelCls}>Correção de Dados</label>
          <p className="text-xs text-white/40 mb-2">Para solicitar correção de dados pessoais incompletos, inexatos ou desatualizados, entre em contato com a área de Atendimento ao Candidato.</p>
          <div className="flex items-center gap-3">
            <input id="correcao_ciente" name="correcao_dos_dados" type="radio" value="ciente" required className={radioCls} />
            <label htmlFor="correcao_ciente" className="text-sm text-white/70">Ciente</label>
          </div>
        </div>

        <div>
          <label className={labelCls}>Autorizo contato via whatsapp/telegram *</label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-3">
              <input id="autorizo_sim" name="autorizo_contato" type="radio" value="sim" required className={radioCls} />
              <label htmlFor="autorizo_sim" className="text-sm text-white/70">Sim</label>
            </div>
            <div className="flex items-center gap-3">
              <input id="autorizo_nao" name="autorizo_contato" type="radio" value="não, somente por e-mail" className={radioCls} />
              <label htmlFor="autorizo_nao" className="text-sm text-white/70">Não, somente por e-mail</label>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white bg-[#C25D44] hover:bg-[#C25D44]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C25D44] disabled:opacity-50 transition-colors"
          >
            {loading ? "Enviando..." : "Enviar Solicitação"}
          </button>
        </div>

        {message && (
          <div className={`mt-4 p-4 rounded-md text-sm ${message.type === "success" ? "bg-green-900/50 text-green-200" : "bg-red-900/50 text-red-200"}`}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}
