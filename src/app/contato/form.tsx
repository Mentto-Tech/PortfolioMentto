"use client";

import "./contato.css";
import { useContactForm } from "@/lib/use-contact-form";

type Props = {
  assunto?: string;
};

export default function ContatoForm({ assunto }: Props) {
  const { status, handleSubmit } = useContactForm("contato");

  if (status === "success") {
    return (
      <div className="form-card text-center py-10">
        <p className="text-xl font-heading font-bold text-[#083D5F]">Mensagem enviada!</p>
        <p className="mt-2 text-[#333]/70">A gente responde em até 2 dias úteis.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        {[
          { label: "Nome", type: "text", name: "nome" },
          { label: "E-mail", type: "email", name: "email" },
          { label: "Telefone", type: "tel", name: "telefone" },
          { label: "Empresa ou instituição", type: "text", name: "empresa" },
        ].map((f) => (
          <label key={f.name} className="form-label">
            <span className="form-label-text">{f.label}</span>
            <input type={f.type} name={f.name} required className="form-input" />
          </label>
        ))}

        <label className="form-label">
          <span className="form-label-text">Tipo de contato</span>
          <select name="tipo" className="form-input" defaultValue={assunto ?? "diagnostico"}>
            <option value="diagnostico">Quero um diagnóstico gratuito</option>
            <option value="rota">Quero saber mais sobre o ROTA</option>
            <option value="mergulho">Quero saber mais sobre o MERGULHO</option>
            <option value="ponte">Quero saber mais sobre Ponte Pesquisa</option>
            <option value="outro">Outro assunto</option>
          </select>
        </label>

        <label className="form-label">
          <span className="form-label-text">Conta rapidamente o momento</span>
          <textarea name="mensagem" rows={4} className="form-input resize-y" />
        </label>

        <button type="submit" className="form-submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar mensagem"}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm">Algo deu errado. Tente novamente ou mande um email direto.</p>
        )}

        <p className="form-disclaimer">
          A gente responde em até 2 dias úteis. Sem lista, sem newsletter, só a conversa. Seus dados serão mantidos por 10 anos para histórico de atendimento.
        </p>
      </div>
    </form>
  );
}
