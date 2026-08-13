"use client";

import { useState } from "react";
import { submitIncidenteForm } from "../actions";

const inp = "mt-1 block w-full rounded-md bg-[#052438] border border-white/20 text-white placeholder-white/30 shadow-sm focus:border-[#C25D44] focus:ring-[#C25D44] text-sm px-4 py-2";
const lbl = "block text-sm font-medium text-white/70";
const rad = "h-4 w-4 text-[#C25D44] border-white/30 bg-[#052438] focus:ring-[#C25D44]";
const sec = "text-lg font-heading font-semibold text-white border-b border-white/10 pb-2";

export default function IncidenteForm() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    const result = await submitIncidenteForm(new FormData(e.currentTarget));
    setLoading(false);
    if (result.success) {
      setMsg({ type: "success", text: result.message });
      (e.target as HTMLFormElement).reset();
    } else {
      setMsg({ type: "error", text: result.message });
    }
  }

  return (
    <div className="bg-[#052438] border border-white/10 rounded-xl p-8 shadow-sm mt-12">
      <h3 className="text-2xl font-heading font-bold text-white mb-4 text-center">Comunicar Incidente</h3>
      <p className="text-white/60 mb-6 text-center text-sm">
        Utilize o formulário abaixo para reportar um incidente de segurança ou suspeita de violação de dados. Seus dados serão mantidos por 10 anos para fins de compliance e auditoria.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 text-left">

        {/* Seção 1 — Notificante */}
        <div className="space-y-4">
          <h4 className={sec}>Informações do Notificante</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inc_email" className={lbl}>E-mail *</label>
              <input type="email" name="email" id="inc_email" required className={inp} />
            </div>
            <div>
              <label htmlFor="inc_telefone" className={lbl}>Telefone (DDD) *</label>
              <input type="text" name="telefone" id="inc_telefone" required className={inp} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inc_encarregado" className={lbl}>O notificante, em sendo pessoa jurídica, é encarregado de dados? *</label>
              <p className="text-xs text-white/40 mb-1">O DPO tem a função de ser o canal de comunicação entre a empresa, a ANPD e o titular dos dados.</p>
              <textarea name="notificante_encarregado_de_dados" id="inc_encarregado" required rows={2} className={inp} />
            </div>
            <div>
              <label htmlFor="inc_nome_razao" className={lbl}>Dados do notificante: (Nome ou Razão Social) *</label>
              <input type="text" name="nome_razao_social" id="inc_nome_razao" required className={inp} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inc_cpf_cnpj" className={lbl}>CPF/CNPJ *</label>
              <input type="text" name="cpf_cnpj" id="inc_cpf_cnpj" required className={inp} />
            </div>
            <div>
              <label className={lbl}>Natureza da Organização *</label>
              <div className="mt-2 space-y-2">
                {["pública", "privada"].map((v) => (
                  <div key={v} className="flex items-center gap-3">
                    <input id={"nat_" + v} name="natureza_da_organizacao" type="radio" value={v} required className={rad} />
                    <label htmlFor={"nat_" + v} className="text-sm text-white/70 capitalize">{v}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className={lbl}>Agente de Tratamento. O notificante é:</label>
            <div className="mt-2 space-y-2">
              {[
                ["agente_ctrl", "Controlador de Dados", "Controlador de Dados (coletou diretamente)"],
                ["agente_op", "Operador de dados pessoais", "Operador de dados pessoais (acessou/tratou sem coletar diretamente)"],
                ["agente_nn", "Nenhuma das opções anteriores", "Nenhuma das opções anteriores"],
              ].map(([id, val, label]) => (
                <div key={id} className="flex items-center gap-3">
                  <input id={id} name="agente_de_tratamento" type="radio" value={val} className={rad} />
                  <label htmlFor={id} className="text-sm text-white/70">{label}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="inc_com_controlador" className={lbl}>Se operador de dados: já houve comunicação do incidente ao Controlador? *</label>
            <textarea name="comunicacao_do_incidente" id="inc_com_controlador" required rows={2} className={inp} />
          </div>
        </div>

        {/* Seção 2 — Detalhes */}
        <div className="space-y-4">
          <h4 className={sec}>Detalhes do Incidente</h4>

          <div>
            <label htmlFor="inc_descricao" className={lbl}>Incidente de segurança (Descreva de forma resumida) *</label>
            <textarea name="incidente_de_seguranca" id="inc_descricao" required rows={3} className={inp} />
          </div>

          <div>
            <label className={lbl}>Quando o Incidente Ocorreu? *</label>
            <div className="mt-2 space-y-2">
              {["Não tenho conhecimento", "Não tenho certeza", "Data e hora informados no item seguinte"].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <input id={"qdo_" + v.slice(0, 8)} name="quando_ocorreu" type="radio" value={v} required className={rad} />
                  <label htmlFor={"qdo_" + v.slice(0, 8)} className="text-sm text-white/70">{v}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="inc_data" className={lbl}>Data e hora do incidente:</label>
              <input type="text" name="data_incidente" id="inc_data" placeholder="DD/MM/AAAA HH:mm" className={inp} />
            </div>
          </div>

          <div>
            <label className={lbl}>Tipo de Comunicação:</label>
            <div className="mt-2 space-y-2">
              {[
                ["tipo_comp", "Completa", "Completa (incidente nas instalações da MENTTO)"],
                ["tipo_parc", "Parcial", "Parcial (ambiente externo, mas envolve dados da MENTTO)"],
              ].map(([id, val, label]) => (
                <div key={id} className="flex items-center gap-3">
                  <input id={id} name="tipo_de_comunicacao" type="radio" value={val} className={rad} />
                  <label htmlFor={id} className="text-sm text-white/70">{label}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className={lbl}>Critério para a comunicação:</label>
            <div className="mt-2 space-y-2">
              {[
                ["crit_risco", "O incidente de segurança pode acarretar risco ou dano relevante aos titulares."],
                ["crit_inc", "Não tenho certeza sobre o nível de risco do incidente de segurança."],
              ].map(([id, val]) => (
                <div key={id} className="flex items-start gap-3">
                  <input id={id} name="criterio_para_comunicacao" type="checkbox" value={val} className={rad + " mt-0.5 rounded"} />
                  <label htmlFor={id} className="text-sm text-white/70">{val}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="inc_org_ciente" className={lbl}>A organização envolvida no incidente teve ciência do mesmo? *</label>
            <input type="text" name="organizacao_envolvida" id="inc_org_ciente" required className={inp} />
          </div>
          <div>
            <label htmlFor="inc_como_ciente" className={lbl}>Como a organização teve ciência do incidente?</label>
            <input type="text" name="organizacao_ciente" id="inc_como_ciente" className={inp} />
          </div>
          <div>
            <label htmlFor="inc_just1" className={lbl}>Justificativa se a comunicação não foi em 2 dias úteis: *</label>
            <input type="text" name="justificativa" id="inc_just1" required className={inp} />
          </div>
          <div>
            <label htmlFor="inc_just2" className={lbl}>Justificativa se a comunicação não foi imediata:</label>
            <input type="text" name="justificativa_2" id="inc_just2" className={inp} />
          </div>
        </div>

        {/* Seção 3 — Impacto */}
        <div className="space-y-4">
          <h4 className={sec}>Impacto e Dados Afetados</h4>

          <div>
            <label className={lbl}>Natureza dos dados pessoais afetados pelo incidente:</label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "raça/etnia", "religião", "opinião política", "filiação a sindicato",
                "Filiação a organização de caráter religioso, filosófico ou político",
                "saúde", "vida sexual", "gênero", "biométrico",
                "Dado de comprovação de identidade oficial (RG, CPF, CNH)",
                "dados financeiros", "Nomes de usuário ou senhas", "dados de geolocalização", "Outro",
              ].map((v) => (
                <div key={v} className="flex items-start gap-2">
                  <input id={"nd_" + v.slice(0, 8)} name="natureza_dos_dados" type="checkbox" value={v} className={rad + " mt-1 rounded"} />
                  <label htmlFor={"nd_" + v.slice(0, 8)} className="text-sm text-white/70">{v}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="inc_qtd" className={lbl}>Quantidade de titulares afetados? *</label>
            <input type="text" name="quantidade_de_afetados" id="inc_qtd" required className={inp} />
          </div>

          <div>
            <label className={lbl}>Categoria de titulares afetados? *</label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {["Funcionários", "Prestadores de Serviço", "Clientes", "Consumidores", "Usuários", "Pacientes de serviços de saúde", "crianças e/ou adolescentes", "Outros"].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <input id={"cat_" + v.slice(0, 8)} name="categoria_dos_afetados" type="radio" value={v} required className={rad} />
                  <label htmlFor={"cat_" + v.slice(0, 8)} className="text-sm text-white/70">{v}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="inc_conseq" className={lbl}>Prováveis consequências do incidente para os titulares afetados:</label>
            <textarea name="consequencias_provaveis" id="inc_conseq" rows={2} className={inp} />
          </div>
          <div>
            <label htmlFor="inc_trans" className={lbl}>O incidente pode trazer consequências transfronteiriças?</label>
            <textarea name="consequencias_transfronteiricas" id="inc_trans" rows={2} className={inp} />
          </div>
        </div>

        {/* Seção 4 — Medidas */}
        <div className="space-y-4">
          <h4 className={sec}>Medidas e Comunicação</h4>

          <div>
            <label htmlFor="inc_med1" className={lbl}>Medidas para prevenir a ocorrência do incidente *</label>
            <textarea name="medidas_tomadas" id="inc_med1" required rows={2} className={inp} />
          </div>
          <div>
            <label htmlFor="inc_med2" className={lbl}>Medidas tomadas após a ciência do incidente *</label>
            <textarea name="medidas_tomadas_apos" id="inc_med2" required rows={2} className={inp} />
          </div>
          <div>
            <label htmlFor="inc_med3" className={lbl}>Medidas para reverter ou mitigar os efeitos *</label>
            <textarea name="medidas_tomadas_reverter" id="inc_med3" required rows={2} className={inp} />
          </div>
          <div>
            <label htmlFor="inc_ripd" className={lbl}>Realizou relatório de impacto (RIPD)? *</label>
            <textarea name="fierelatorio_ripd" id="inc_ripd" required rows={2} className={inp} />
          </div>

          <div>
            <label className={lbl}>Os titulares foram comunicados sobre o incidente?</label>
            <div className="mt-2 space-y-2">
              {["Sim", "Não", "Não sei"].map((v) => (
                <div key={v} className="flex items-center gap-3">
                  <input id={"com_" + v} name="titulares_comunicados" type="radio" value={v} className={rad} />
                  <label htmlFor={"com_" + v} className="text-sm text-white/70">{v}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="inc_just_nc" className={lbl}>Justificativa (caso não comunicado)</label>
            <textarea name="justificativa_nao_comunicacao" id="inc_just_nc" rows={2} className={inp} />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-3 px-4 rounded-md text-sm font-medium text-white bg-[#C25D44] hover:bg-[#C25D44]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C25D44] disabled:opacity-50 transition-colors"
        >
          {loading ? "Enviando..." : "Enviar Comunicação de Incidente"}
        </button>

        {msg && (
          <div className={"mt-4 p-4 rounded-md text-sm " + (msg.type === "success" ? "bg-green-900/50 text-green-200" : "bg-red-900/50 text-red-200")}>
            {msg.text}
          </div>
        )}
      </form>
    </div>
  );
}
