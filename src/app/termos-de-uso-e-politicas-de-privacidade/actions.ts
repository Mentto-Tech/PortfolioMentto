"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT = "mentto.tech@gmail.com";

function buildTable(fields: Record<string, string | undefined>) {
  const rows = Object.entries(fields)
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:6px 12px;color:#555;font-weight:bold;width:220px;vertical-align:top">${k}</td>
          <td style="padding:6px 12px;vertical-align:top">${v}</td>
        </tr>`
    )
    .join("");
  return `<table style="width:100%;border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>`;
}

export async function submitTitularForm(formData: FormData) {
  const email = formData.get("email") as string;
  const solicitante = formData.get("solicitante") as string;
  const cpf = formData.get("cpf") as string;

  if (!email || !solicitante || !cpf) {
    return { success: false, message: "E-mail, Solicitante e CPF são obrigatórios." };
  }

  const tipos = formData.getAll("tipo_de_solicitacao").join(", ");

  const fields = {
    "E-mail": email,
    "Solicitante": solicitante,
    "Nome do titular": formData.get("nome_titular") as string,
    "CPF": cpf,
    "Vínculo com a Mentto": formData.get("vinculo_do_titular") as string,
    "Tipo de Solicitação": tipos,
    "Descrição": formData.get("descricao_da_solicitacao") as string,
    "Correção de dados": formData.get("correcao_dos_dados") as string,
    "Autoriza contato via WhatsApp": formData.get("autorizo_contato") as string,
  };

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: RECIPIENT,
      replyTo: email,
      subject: `[Mentto LGPD] Solicitação de Titular de Dados — ${solicitante}`,
      html: `
        <div style="font-family:sans-serif;max-width:700px;margin:0 auto">
          <h2 style="color:#083D5F">Solicitação: Titular de Dados</h2>
          ${buildTable(fields)}
        </div>
      `,
    });
    return { success: true, message: "Solicitação enviada com sucesso!" };
  } catch (err) {
    console.error("[titular-form]", err);
    return { success: false, message: "Erro ao enviar. Tente novamente mais tarde." };
  }
}

export async function submitIncidenteForm(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "E-mail é obrigatório." };
  }

  const getMulti = (key: string) => formData.getAll(key).join(", ");

  const fields = {
    "E-mail": email,
    "Telefone": formData.get("telefone") as string,
    "Nome / Razão Social": formData.get("nome_razao_social") as string,
    "CPF/CNPJ": formData.get("cpf_cnpj") as string,
    "Natureza da organização": formData.get("natureza_da_organizacao") as string,
    "É encarregado de dados?": formData.get("notificante_encarregado_de_dados") as string,
    "Agente de tratamento": formData.get("agente_de_tratamento") as string,
    "Comunicação ao Controlador": formData.get("comunicacao_do_incidente") as string,
    "Tipo de comunicação": formData.get("tipo_de_comunicacao") as string,
    "Critério para comunicação": getMulti("criterio_para_comunicacao"),
    "Descrição do incidente": formData.get("incidente_de_seguranca") as string,
    "Quando ocorreu": formData.get("quando_ocorreu") as string,
    "Data do incidente": formData.get("data_incidente") as string,
    "Organização envolvida ciente?": formData.get("organizacao_envolvida") as string,
    "Como a org. tomou ciência": formData.get("organizacao_ciente") as string,
    "Justificativa (prazo)": formData.get("justificativa") as string,
    "Justificativa (não imediata)": formData.get("justificativa_2") as string,
    "Natureza dos dados afetados": getMulti("natureza_dos_dados"),
    "Quantidade de afetados": formData.get("quantidade_de_afetados") as string,
    "Categoria dos afetados": formData.get("categoria_dos_afetados") as string,
    "Consequências prováveis": formData.get("consequencias_provaveis") as string,
    "Consequências transfronteiriças": formData.get("consequencias_transfronteiricas") as string,
    "Medidas preventivas": formData.get("medidas_tomadas") as string,
    "Medidas após ciência": formData.get("medidas_tomadas_apos") as string,
    "Medidas para mitigar": formData.get("medidas_tomadas_reverter") as string,
    "Relatório RIPD": formData.get("fierelatorio_ripd") as string,
    "Titulares comunicados?": formData.get("titulares_comunicados") as string,
    "Justificativa (não comunicado)": formData.get("justificativa_nao_comunicacao") as string,
  };

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM as string,
      to: RECIPIENT,
      replyTo: email,
      subject: `[Mentto LGPD] Comunicação de Incidente de Segurança`,
      html: `
        <div style="font-family:sans-serif;max-width:700px;margin:0 auto">
          <h2 style="color:#083D5F">Comunicação de Incidente de Segurança</h2>
          ${buildTable(fields)}
        </div>
      `,
    });
    return { success: true, message: "Comunicação enviada com sucesso!" };
  } catch (err) {
    console.error("[incidente-form]", err);
    return { success: false, message: "Erro ao enviar. Tente novamente mais tarde." };
  }
}
