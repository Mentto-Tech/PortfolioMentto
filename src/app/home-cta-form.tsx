"use client";

import "./contato/contato.css";
import { useContactForm } from "@/lib/use-contact-form";

export default function HomeCTAForm() {
  const { status, handleSubmit } = useContactForm("home");

  if (status === "success") {
    return (
      <div className="home-cta-form-card text-center py-10">
        <p className="text-xl font-heading font-bold text-[#083D5F]">Mensagem enviada!</p>
        <p className="mt-2 text-[#333]/70">A gente responde em até 2 dias úteis.</p>
      </div>
    );
  }

  return (
    <form className="home-cta-form-card" onSubmit={handleSubmit}>
      <div className="form-grid">
        {[
          { label: "Nome",                   placeholder: "Como podemos te chamar", type: "text",  name: "nome" },
          { label: "E-mail",                 placeholder: "seu@email.com.br",       type: "email", name: "email" },
          { label: "Telefone",               placeholder: "(00) 00000-0000",        type: "tel",   name: "telefone" },
          { label: "Empresa ou instituição", placeholder: "Onde você trabalha",     type: "text",  name: "empresa" },
        ].map((f) => (
          <label key={f.name} className="form-label">
            <span className="form-label-text">{f.label}</span>
            <input type={f.type} name={f.name} placeholder={f.placeholder} required className="form-input" />
          </label>
        ))}
        <label className="form-label">
          <span className="form-label-text">O que precisa ser resolvido</span>
          <textarea name="mensagem" rows={3} placeholder="Duas linhas bastam" className="form-input resize-y" />
        </label>
        <button type="submit" className="form-submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Quero entender o meu momento"}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm">Algo deu errado. Tente novamente ou mande um email direto.</p>
        )}

        <p className="form-disclaimer">A gente responde em até 2 dias úteis. Seus dados serão mantidos por 10 anos para histórico de atendimento.</p>
      </div>
    </form>
  );
}
