"use client";

import "../contato/contato.css";
import { useContactForm } from "@/lib/use-contact-form";

export default function PonteContatoForm({ origem = "ponte" }: { origem?: string }) {
  const { status, handleSubmit } = useContactForm(origem);

  if (status === "success") {
    return (
      <div className="md:col-span-6 form-card text-center py-10">
        <p className="text-xl font-heading font-bold text-[#083D5F]">Mensagem enviada!</p>
        <p className="mt-2 text-[#333]/70">A gente responde em até 2 dias úteis.</p>
      </div>
    );
  }

  return (
    <form className="md:col-span-6 form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        {[
          { label: "Nome", type: "text", name: "nome" },
          { label: "E-mail", type: "email", name: "email" },
          { label: "Telefone", type: "tel", name: "telefone" },
          { label: "Instituição ou projeto", type: "text", name: "empresa" },
        ].map((f) => (
          <label key={f.name} className="form-label">
            <span className="form-label-text">{f.label}</span>
            <input type={f.type} name={f.name} required className="form-input" />
          </label>
        ))}
        <label className="form-label">
          <span className="form-label-text">Conte sobre o projeto e como podemos ajudar</span>
          <textarea name="mensagem" rows={4} className="form-input resize-y" />
        </label>
        <button type="submit" className="form-submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Entrar em contato"}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm">Algo deu errado. Tente novamente ou mande um email direto.</p>
        )}

        <p className="form-disclaimer">
          A gente responde em até 2 dias úteis. Sem lista, sem newsletter, só a conversa.
        </p>
      </div>
    </form>
  );
}
