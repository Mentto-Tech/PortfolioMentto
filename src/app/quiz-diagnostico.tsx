// "use client";

// import { useState } from "react";
// import { HelpCircle, CheckCircle2, ChevronRight, RotateCcw, ArrowRight, Loader2 } from "lucide-react";
// import Link from "next/link";

// /**
//  * ============================================================
//  * PERGUNTAS E RESPOSTAS DO QUIZ (DIAGNÓSTICO RÁPIDO)
//  * 
//  * Adicione ou modifique perguntas e opções de resposta abaixo.
//  * Cada opção pode opcionalmente apontar para um produto da Mentto 
//  * ("ROTA", "PONTE", "MERGULHO" ou "MENTTO TECH LAB").
//  * ============================================================
//  */
// export interface QuizOption {
//   id: string;
//   text: string;
//   description?: string;
//   productRecommendation?: "ROTA" | "PONTE" | "MERGULHO" | "MENTTO TECH LAB";
// }

// export interface QuizQuestion {
//   id: number;
//   title: string;
//   subtitle?: string;
//   options: QuizOption[];
// }

// export const QUIZ_QUESTIONS: QuizQuestion[] = [
//   {
//     id: 1,
//     title: "Qual é o principal desafio atual da sua organização ou projeto?",
//     subtitle: "Selecione a opção que melhor descreve o seu momento.",
//     options: [
//       {
//         id: "q1_a",
//         text: "Alinhar a estratégia da empresa e garantir a execução contínua com a liderança",
//         description: "As decisões saem da reunião mas acabam morrendo na rotina semanal sem acompanhamento.",
//         productRecommendation: "ROTA",
//       },
//       {
//         id: "q1_b",
//         text: "Organizar e gerir a governança de um projeto de pesquisa ou inovação tecnológica",
//         description: "Envolve várias instituições, docentes, parceiros e prazos rigorosos de entregáveis.",
//         productRecommendation: "PONTE",
//       },
//       {
//         id: "q1_c",
//         text: "Destravar um tema específico com a equipe em uma imersão focada",
//         description: "Queremos fazer um alinhamento rápido (1 a 2 dias) sobre OKRs, governança ou planejamento.",
//         productRecommendation: "MERGULHO",
//       },
//       {
//         id: "q1_d",
//         text: "Desenvolver uma solução digital, automação, IA ou MVP rápido",
//         description: "Precisamos transformar uma ideia em tecnologia ou protótipo funcional para testes.",
//         productRecommendation: "MENTTO TECH LAB",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "Qual o nível de acompanhamento e velocidade de entrega que você procura?",
//     subtitle: "Escolha o formato de atuação ideal para o seu ritmo.",
//     options: [
//       {
//         id: "q2_a",
//         text: "Acompanhamento recorrente ao longo de todo o ano",
//         description: "Queremos uma consultoria de gestão com ritos mensais e cadência constante de execução.",
//         productRecommendation: "ROTA",
//       },
//       {
//         id: "q2_b",
//         text: "Gestão focada em cronograma de projeto de inovação/pesquisa",
//         description: "Garantir prestação de contas, maturidade tecnológica e alinhamento de entregas.",
//         productRecommendation: "PONTE",
//       },
//       {
//         id: "q2_c",
//         text: "Workshop / Imersão presencial intensiva de curto prazo",
//         description: "Resolver uma pendência específica em 1 ou 2 dias práticos com entregáveis na mão.",
//         productRecommendation: "MERGULHO",
//       },
//     ],
//   },
// ];

// interface ProductInfo {
//   title: string;
//   tagline: string;
//   description: string;
//   badgeColor: string;
//   textColor?: string;
//   link: string;
// }

// // Detalhes dos produtos para exibição no resultado
// const PRODUCTS_INFO: Record<"ROTA" | "PONTE" | "MERGULHO" | "MENTTO TECH LAB", ProductInfo> = {
//   ROTA: {
//     title: "ROTA — Gestão de Estratégia e Negócio",
//     tagline: "Consultoria estratégica com acompanhamento contínuo",
//     description: "Construímos a rota com a sua liderança e ficamos do lado o ano inteiro para garantir que o combinado seja cumprido.",
//     badgeColor: "#083D5F",
//     link: "/estrategia-e-negocio",
//   },
//   PONTE: {
//     title: "PONTE — Projetos de Pesquisa e Inovação",
//     tagline: "Gestão de projetos de alta complexidade tecnológica",
//     description: "Governança, prestação de contas e sincronia entre pesquisa, empresas parceiras e órgãos financiadores.",
//     badgeColor: "#FFC300",
//     textColor: "#333",
//     link: "/pesquisa-e-inovacao",
//   },
//   MERGULHO: {
//     title: "MERGULHO — Imersão Temática",
//     tagline: "Workshops intensivos de 1 a 2 dias com o seu time",
//     description: "Para destravar um gargalo específico na prática (planejamento, OKRs, governança, IA) sem compromisso longo inicial.",
//     badgeColor: "#C25D44",
//     link: "/mergulho",
//   },
//   "MENTTO TECH LAB": {
//     title: "Mentto Tech Lab — P&D e Soluções Digitais",
//     tagline: "Desenvolvimento rápido de protótipos e IA",
//     description: "Para transformar a sua ideia em MVP ou ferramenta funcional com agilidade.",
//     badgeColor: "#107F8D",
//     link: "/tech-lab",
//   },
// };

// export default function QuizDiagnostico() {
//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
//   const [isCompleted, setIsCompleted] = useState<boolean>(false);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [recommendationResult, setRecommendationResult] = useState<keyof typeof PRODUCTS_INFO>("ROTA");

//   const currentQuestion = QUIZ_QUESTIONS[currentStep];

//   const handleSelectOption = (optionId: string) => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestion.id]: optionId,
//     }));
//   };

//   const handleNext = async () => {
//     if (currentStep < QUIZ_QUESTIONS.length - 1) {
//       setCurrentStep((prev) => prev + 1);
//     } else {
//       // Último passo: consultar a IA
//       setIsLoading(true);
      
//       const qaList = QUIZ_QUESTIONS.map((q) => {
//         const optionId = selectedAnswers[q.id];
//         const option = q.options.find(o => o.id === optionId);
//         return {
//           question: q.title,
//           answer: option ? option.text : "Não respondido",
//         };
//       });

//       try {
//         const response = await fetch("/api/diagnostico", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ qaList }),
//         });
        
//         if (response.ok) {
//           const data = await response.json();
//           if (data.recommendation && PRODUCTS_INFO[data.recommendation as keyof typeof PRODUCTS_INFO]) {
//             setRecommendationResult(data.recommendation as keyof typeof PRODUCTS_INFO);
//           }
//         }
//       } catch (error) {
//         console.error("Erro ao obter diagnóstico da IA:", error);
//       } finally {
//         setIsLoading(false);
//         setIsCompleted(true);
//       }
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   const handleReset = () => {
//     setCurrentStep(0);
//     setSelectedAnswers({});
//     setIsCompleted(false);
//     setRecommendationResult("ROTA");
//   };

//   const currentSelectionId = selectedAnswers[currentQuestion?.id];
//   const recommendation = PRODUCTS_INFO[recommendationResult];

//   return (
//     <section id="diagnostico-rapido" className="py-20 bg-[#083D5F]/5 border-y border-[#083D5F]/10">
//       <div className="container-mentto">
//         {/* Cabeçalho da Seção */}
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <span className="home-section-tag home-section-tag--light-yellow inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FFC300]/20 !text-black border border-[#FFC300]/40" style={{ color: '#000000' }}>
//             Diagnóstico Rápido
//           </span>
//           <h2 className="mt-4 font-heading font-bold text-3xl md:text-4xl text-[#083D5F] leading-tight">
//             Descubra qual a solução ideal para o seu momento
//           </h2>
//           <p className="mt-3 text-[#333]/80 text-base md:text-lg leading-relaxed">
//             Responda a este teste rápido em poucos segundos para entender por onde a Mentto pode gerar mais impacto para a sua organização.
//           </p>
//         </div>

//         {/* Container do Quiz */}
//         <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-[#083D5F]/10 transition-all">
//           {!isCompleted ? (
//             <div>
//               {/* Barra de Progresso */}
//               <div className="flex items-center justify-between text-xs font-heading font-semibold text-[#083D5F]/70 mb-3">
//                 <span>Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
//                 <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% concluído</span>
//               </div>
//               <div className="w-full h-2 bg-[#F3F1EB] rounded-full overflow-hidden mb-8">
//                 <div
//                   className="h-full bg-[#107F8D] transition-all duration-300 ease-out"
//                   style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
//                 />
//               </div>

//               {/* Título da Pergunta */}
//               <h3 className="font-heading font-bold text-xl md:text-2xl text-[#083D5F] leading-snug mb-2">
//                 {currentQuestion.title}
//               </h3>
//               {currentQuestion.subtitle && (
//                 <p className="text-sm text-[#333]/70 mb-6">{currentQuestion.subtitle}</p>
//               )}

//               {/* Lista de Opções */}
//               <div className="space-y-3 mb-8">
//                 {currentQuestion.options.map((option) => {
//                   const isSelected = currentSelectionId === option.id;
//                   return (
//                     <button
//                       key={option.id}
//                       type="button"
//                       onClick={() => handleSelectOption(option.id)}
//                       className={`w-full text-left p-4 md:p-5 rounded-xl border-2 transition-all flex items-start justify-between gap-4 cursor-pointer ${isSelected
//                         ? "border-[#107F8D] bg-[#107F8D]/5 shadow-sm"
//                         : "border-gray-200 hover:border-[#107F8D]/40 bg-white hover:bg-gray-50/50"
//                         }`}
//                     >
//                       <div className="flex-1">
//                         <div className={`font-heading font-semibold text-base md:text-lg ${isSelected ? "text-[#107F8D]" : "text-[#083D5F]"}`}>
//                           {option.text}
//                         </div>
//                         {option.description && (
//                           <div className="mt-1 text-xs md:text-sm text-[#333]/70 leading-relaxed">
//                             {option.description}
//                           </div>
//                         )}
//                       </div>
//                       <div className="pt-0.5">
//                         <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? "border-[#107F8D] bg-[#107F8D] text-white" : "border-gray-300"
//                           }`}>
//                           {isSelected && <CheckCircle2 size={14} />}
//                         </div>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* Botões de Ação */}
//               <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                 <button
//                   type="button"
//                   onClick={handlePrev}
//                   disabled={currentStep === 0}
//                   className={`text-sm font-heading font-semibold px-4 py-2 rounded-lg transition-colors ${currentStep === 0
//                     ? "opacity-0 pointer-events-none"
//                     : "text-[#333]/70 hover:text-[#083D5F] hover:bg-gray-100"
//                     }`}
//                 >
//                   Voltar
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleNext}
//                   disabled={!currentSelectionId || isLoading}
//                   className={`inline-flex items-center gap-2 font-heading font-semibold text-sm px-6 py-3 rounded-lg transition-all ${(currentSelectionId && !isLoading)
//                     ? "bg-[#107F8D] text-white hover:brightness-110 shadow-md cursor-pointer"
//                     : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                     }`}
//                 >
//                   {isLoading ? (
//                     <>Analisando com IA... <Loader2 size={16} className="animate-spin" /></>
//                   ) : currentStep === QUIZ_QUESTIONS.length - 1 ? (
//                     <>Ver Resultado <ChevronRight size={16} /></>
//                   ) : (
//                     <>Próxima Pergunta <ChevronRight size={16} /></>
//                   )}
//                 </button>
//               </div>
//             </div>
//           ) : (
//             /* Tela de Resultado Recomendado */
//             <div className="text-center py-4">
//               <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#107F8D]/10 text-[#107F8D] mb-4">
//                 <CheckCircle2 size={28} />
//               </div>
//               <span className="block text-xs font-heading font-semibold uppercase tracking-wider text-[#333]/60 mb-1">
//                 Resultado do seu Diagnóstico Rápido
//               </span>
//               <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#083D5F] mb-4">
//                 Recomendação Ideal para Você:
//               </h3>

//               {/* Card da Recomendação */}
//               <div className="text-left bg-[#F3F1EB] rounded-xl p-6 md:p-8 border-l-4 mb-8 shadow-sm" style={{ borderLeftColor: recommendation.badgeColor }}>
//                 <div className="inline-block px-3 py-1 rounded text-xs font-heading font-bold uppercase tracking-wider mb-2" style={{ backgroundColor: recommendation.badgeColor, color: recommendation.textColor || '#fff' }}>
//                   {recommendation.title.split(" — ")[0]}
//                 </div>
//                 <h4 className="font-heading font-bold text-xl text-[#083D5F] mb-1">
//                   {recommendation.title}
//                 </h4>
//                 <p className="text-xs font-semibold text-[#107F8D] mb-3">{recommendation.tagline}</p>
//                 <p className="text-sm md:text-base text-[#333]/80 leading-relaxed mb-4">
//                   {recommendation.description}
//                 </p>
//                 <Link
//                   href={recommendation.link}
//                   className="inline-flex items-center gap-2 text-xs md:text-sm font-heading font-bold text-[#083D5F] hover:text-[#107F8D] transition-colors"
//                 >
//                   Conhecer detalhes desta solução <ArrowRight size={14} />
//                 </Link>
//               </div>

//               {/* Botões de Ação pós-resultado */}
//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <Link
//                   href="#contato"
//                   className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FFC300] hover:brightness-95 text-[#333] font-heading font-semibold text-base px-8 py-3.5 rounded-lg transition-all shadow-sm"
//                 >
//                   Falar com especialista sobre este diagnóstico
//                 </Link>
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#333]/70 hover:text-[#083D5F] font-heading font-semibold text-sm px-5 py-3.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-all cursor-pointer"
//                 >
//                   <RotateCcw size={16} /> Refazer Teste
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
