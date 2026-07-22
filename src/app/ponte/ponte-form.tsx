"use client";

import "../contato/contato.css";

export default function PonteContatoForm() {
  return (
    <form
      className="md:col-span-6 form-card"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="form-grid">
        {[
          { label: "Nome", type: "text", name: "nome" },
          { label: "E-mail", type: "email", name: "email" },
          { label: "Telefone", type: "tel", name: "telefone" },
          { label: "Instituição ou projeto", type: "text", name: "empresa" },
        ].map((f) => (
          <label key={f.name} className="form-label">
            <span className="form-label-text">{f.label}</span>
            <input
              type={f.type}
              name={f.name}
              required
              className="form-input"
            />
          </label>
        ))}
        <label className="form-label">
          <span className="form-label-text">
            Conta sobre o projeto (programa, estágio, desafio)
          </span>
          <textarea name="mensagem" rows={4} className="form-input resize-y" />
        </label>
        <button type="submit" className="form-submit">
          Entrar em contato
        </button>
        <p className="form-disclaimer">
          A gente responde em até 2 dias úteis. Sem lista, sem newsletter — só
          a conversa.
        </p>
      </div>
    </form>
  );
}
