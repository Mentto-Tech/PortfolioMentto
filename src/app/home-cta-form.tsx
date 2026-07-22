"use client";

import "./contato/contato.css";

export default function HomeCTAForm() {
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
          {
            label: "Empresa ou instituição",
            type: "text",
            name: "empresa",
          },
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
        <button type="submit" className="form-submit">
          Pedir meu diagnóstico
        </button>
        <p className="form-disclaimer">
          A gente responde em até 2 dias úteis. Sem lista, sem newsletter — só
          a conversa.
        </p>
      </div>
    </form>
  );
}
