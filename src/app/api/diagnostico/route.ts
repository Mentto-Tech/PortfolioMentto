import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `Você é um consultor especialista da Mentto. A Mentto oferece 4 produtos principais:

1. ROTA: Gestão de Estratégia e Negócio. Consultoria estratégica com acompanhamento contínuo para empresas. Ideal para quem precisa alinhar estratégia e garantir execução contínua com a liderança ao longo do ano.
2. PONTE: Projetos de Pesquisa e Inovação. Gestão de projetos de alta complexidade tecnológica. Ideal para organizar governança, prazos e entregáveis de pesquisa ou inovação envolvendo várias instituições.
3. MERGULHO: Imersão Temática. Workshops intensivos de 1 a 2 dias com o time. Ideal para destravar um gargalo específico na prática (planejamento, OKRs, governança, IA) de forma rápida.
4. MENTTO TECH LAB: P&D e Soluções Digitais. Desenvolvimento rápido de protótipos e IA. Ideal para transformar uma ideia em MVP ou ferramenta funcional com agilidade.

O usuário respondeu a um diagnóstico rápido.
Com base nas perguntas e respostas fornecidas, indique qual é a melhor solução da Mentto para ele.
Sua resposta deve conter APENAS o nome exato do produto recomendado: "ROTA", "PONTE", "MERGULHO" ou "MENTTO TECH LAB". Não adicione pontuação, explicações ou texto extra.`;

export async function POST(request: Request) {
  try {
    const { qaList } = await request.json();

    if (!qaList || !Array.isArray(qaList)) {
      return NextResponse.json({ error: "Lista de perguntas e respostas inválida." }, { status: 400 });
    }

    const userPrompt = `Perguntas e Respostas do Usuário:\n` + qaList.map(qa => `Pergunta: ${qa.question}\nResposta: ${qa.answer}`).join("\n\n");

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.warn("OPENROUTER_API_KEY não configurada. Usando fallback.");
      // Fallback estático caso a chave não esteja configurada
      return NextResponse.json({ recommendation: "ROTA" });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "google/gemini-pro-1.5",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.1,
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Erro na API do OpenRouter:", errorData);
      return NextResponse.json({ error: "Erro ao consultar a IA." }, { status: 500 });
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content?.trim();

    // Validação da resposta
    const validProducts = ["ROTA", "PONTE", "MERGULHO", "MENTTO TECH LAB"];
    let recommendation = "ROTA"; // Fallback padrão
    
    if (aiResponse && validProducts.includes(aiResponse.toUpperCase())) {
      recommendation = aiResponse.toUpperCase();
    } else {
      // Tenta encontrar a palavra na resposta, caso a IA ignore a instrução estrita
      for (const prod of validProducts) {
        if (aiResponse?.toUpperCase().includes(prod)) {
          recommendation = prod;
          break;
        }
      }
    }

    return NextResponse.json({ recommendation });
  } catch (error) {
    console.error("Erro no endpoint de diagnóstico:", error);
    return NextResponse.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
}
