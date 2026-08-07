"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quanto custa?",
    a: "O ROTA é mensalidade, com quatro níveis de acompanhamento. O MERGULHO é por diária. Projetos de pesquisa são orçados por escopo e duração. O valor de cada proposta considera o formato, a cadência de acompanhamento e a necessidade de atuação presencial. Primeiro a Mentto entende o contexto e indica o caminho adequado; depois apresenta a proposta para o seu caso.",
  },
  {
    q: "Já contratei consultoria e não deu em nada. Por que seria diferente?",
    a: "Porque na maioria das vezes o que você contratou foi um diagnóstico e um plano, e o plano dependia do seu time executar sozinho, no meio da urgência. Aqui o acompanhamento não é o extra, é o contrato. A cadência de encontros está escrita nele.",
  },
  {
    q: "Quanto tempo o meu time vai gastar com isso?",
    a: "Encontros de acompanhamento com cadência fixa e hora marcada, mais o trabalho que já era do time, só que agora priorizado. A Mentto não cria comitê, não pede relatório extra e não convoca reunião fora do combinado.",
  },
  {
    q: "Vou ficar dependente de vocês?",
    a: "O objetivo é o contrário: instalar a rotina de gestão dentro da casa. Quando o seu time sustenta o ritmo sozinho, a gente reduz a presença.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="home-faq-list">
      {faqs.map((item, i) => (
        <div key={item.q} className="home-faq-item">
          <dt>
            <button
              className="home-faq-btn"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="home-faq-q">{item.q}</span>
              <span className="home-faq-icon" aria-hidden>
                {open === i ? "−" : "+"}
              </span>
            </button>
          </dt>
          {open === i && (
            <dd className="home-faq-a">{item.a}</dd>
          )}
        </div>
      ))}
    </dl>
  );
}
