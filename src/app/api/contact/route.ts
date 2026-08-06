import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [
  "mentto.tech@gmail.com",
  "christopher@mentto.com.br",
  "tiago@mentto.com.br",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nome, email, telefone, empresa, mensagem, tipo, origem } = body;

    if (!nome || !email || !telefone || !empresa) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const assunto = tipo
      ? `[Mentto] Novo contato: ${tipo} — ${nome}`
      : `[Mentto] Novo contato via ${origem ?? "site"} — ${nome}`;

    await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: RECIPIENTS,
      replyTo: email,
      subject: assunto,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#083D5F">Novo contato pelo site</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#555;width:140px"><strong>Nome</strong></td><td style="padding:8px 0">${nome}</td></tr>
            <tr><td style="padding:8px 0;color:#555"><strong>E-mail</strong></td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#555"><strong>Telefone</strong></td><td style="padding:8px 0">${telefone}</td></tr>
            <tr><td style="padding:8px 0;color:#555"><strong>Empresa</strong></td><td style="padding:8px 0">${empresa}</td></tr>
            ${tipo ? `<tr><td style="padding:8px 0;color:#555"><strong>Assunto</strong></td><td style="padding:8px 0">${tipo}</td></tr>` : ""}
            ${origem ? `<tr><td style="padding:8px 0;color:#555"><strong>Origem</strong></td><td style="padding:8px 0">${origem}</td></tr>` : ""}
          </table>
          ${mensagem ? `<div style="margin-top:16px;padding:16px;background:#f5f5f5;border-radius:6px"><strong>Mensagem:</strong><p style="margin:8px 0 0">${mensagem}</p></div>` : ""}
        </div>
      `,
    });

    // MailerLite: adiciona o contato ao grupo e dispara automação
    const mlKey = process.env.MAILERLITE_API_KEY;
    const mlGroup = process.env.MAILERLITE_GROUP_ID;
    if (mlKey && mlGroup) {
      try {
        const mlRes = await fetch(`https://connect.mailerlite.com/api/subscribers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${mlKey}`,
          },
          body: JSON.stringify({
            email,
            fields: {
              name: nome,
              phone: telefone,
              company: empresa,
            },
            groups: [mlGroup],
          }),
        });
        if (!mlRes.ok) {
          const mlBody = await mlRes.text();
          console.error("[mailerlite] erro", mlRes.status, mlBody);
        }
      } catch (mlErr) {
        console.error("[mailerlite]", mlErr);
      }
    } else {
      console.warn("[mailerlite] variáveis não configuradas", { mlKey: !!mlKey, mlGroup: !!mlGroup });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json({ error: "Erro ao enviar mensagem." }, { status: 500 });
  }
}
