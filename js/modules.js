// EBM Academy V2 — JS consolidado e compatível com módulos completos.
const HVAC_TRACK_MODULES = ['modulo01','modulo02','modulo03','modulo04','modulo05','modulo06','modulo07','modulo08','modulo09','modulo10'];
const ELECTRICAL_TRACK_MODULES = ['eletrica01','eletrica02','eletrica03','eletrica04'];
const TRACK_DEFINITIONS = { hvac: HVAC_TRACK_MODULES, eletrica: ELECTRICAL_TRACK_MODULES };
let currentTrainingTrack = 'hvac';
window.EBM_CURRENT_TRACK = currentTrainingTrack;
const TRACK_MODULES = HVAC_TRACK_MODULES;
const moduleConfig = {
  "modulo01": {
    "name": "Módulo 01",
    "title": "Fundamentos do Ciclo Frigorífico",
    "checkClass": "module01-check",
    "status": "module01-checklist-status",
    "go": "go-module01-quiz",
    "form": "module01-quiz-form",
    "questions": "module01-quiz-questions",
    "submit": "submit-module01-quiz",
    "retry": "retry-module01-quiz",
    "result": "module01-quiz-result",
    "complete": "complete-module01",
    "cert": "module01-certificate",
    "checkKey": "module01ChecklistDone",
    "approvedKey": "module01QuizApproved"
  },
  "modulo02": {
    "name": "Módulo 02",
    "title": "Superaquecimento e Subresfriamento",
    "checkClass": "modulo02-check",
    "status": "modulo02-checklist-status",
    "go": "go-modulo02-quiz",
    "form": "modulo02-quiz-form",
    "questions": "modulo02-quiz-questions",
    "submit": "submit-modulo02-quiz",
    "retry": "retry-modulo02-quiz",
    "result": "modulo02-quiz-result",
    "complete": "complete-modulo02",
    "cert": "modulo02-certificate",
    "checkKey": "modulo02ChecklistDone",
    "approvedKey": "modulo02QuizApproved"
  },
  "modulo03": {
    "name": "Módulo 03",
    "title": "Psicrometria",
    "checkClass": "modulo03-check",
    "status": "modulo03-checklist-status",
    "go": "go-modulo03-quiz",
    "form": "modulo03-quiz-form",
    "questions": "modulo03-quiz-questions",
    "submit": "submit-modulo03-quiz",
    "retry": "retry-modulo03-quiz",
    "result": "modulo03-quiz-result",
    "complete": "complete-modulo03",
    "cert": "modulo03-certificate",
    "checkKey": "modulo03ChecklistDone",
    "approvedKey": "modulo03QuizApproved"
  },
  "modulo04": {
    "name": "Módulo 04",
    "title": "Self Contained DX",
    "checkClass": "modulo04-check",
    "status": "modulo04-checklist-status",
    "go": "go-modulo04-quiz",
    "form": "modulo04-quiz-form",
    "questions": "modulo04-quiz-questions",
    "submit": "submit-modulo04-quiz",
    "retry": "retry-modulo04-quiz",
    "result": "modulo04-quiz-result",
    "complete": "complete-modulo04",
    "cert": "modulo04-certificate",
    "checkKey": "modulo04ChecklistDone",
    "approvedKey": "modulo04QuizApproved"
  },
  "modulo05": {
    "name": "Módulo 05",
    "title": "Selfs de Precisão",
    "checkClass": "modulo05-check",
    "status": "modulo05-checklist-status",
    "go": "go-modulo05-quiz",
    "form": "modulo05-quiz-form",
    "questions": "modulo05-quiz-questions",
    "submit": "submit-modulo05-quiz",
    "retry": "retry-modulo05-quiz",
    "result": "modulo05-quiz-result",
    "complete": "complete-modulo05",
    "cert": "modulo05-certificate",
    "checkKey": "modulo05ChecklistDone",
    "approvedKey": "modulo05QuizApproved"
  },
  "modulo06": {
    "name": "Módulo 06",
    "title": "Fancoils de Precisão",
    "checkClass": "modulo06-check",
    "status": "modulo06-checklist-status",
    "go": "go-modulo06-quiz",
    "form": "modulo06-quiz-form",
    "questions": "modulo06-quiz-questions",
    "submit": "submit-modulo06-quiz",
    "retry": "retry-modulo06-quiz",
    "result": "modulo06-quiz-result",
    "complete": "complete-modulo06",
    "cert": "modulo06-certificate",
    "checkKey": "modulo06ChecklistDone",
    "approvedKey": "modulo06QuizApproved"
  }
  ,"modulo07": {
    "name": "Módulo 07",
    "title": "Central de Água Gelada",
    "checkClass": "modulo07-check",
    "status": "modulo07-checklist-status",
    "go": "go-modulo07-quiz",
    "form": "modulo07-quiz-form",
    "questions": "modulo07-quiz-questions",
    "submit": "submit-modulo07-quiz",
    "retry": "retry-modulo07-quiz",
    "result": "modulo07-quiz-result",
    "complete": "complete-modulo07",
    "cert": "modulo07-certificate",
    "checkKey": "modulo07ChecklistDone",
    "approvedKey": "modulo07QuizApproved"
  }
  ,"modulo08": {
    "name": "Módulo 08",
    "title": "Bombas, Válvulas e Balanceamento Hidráulico",
    "checkClass": "modulo08-check",
    "status": "modulo08-checklist-status",
    "go": "go-modulo08-quiz",
    "form": "modulo08-quiz-form",
    "questions": "modulo08-quiz-questions",
    "submit": "submit-modulo08-quiz",
    "retry": "retry-modulo08-quiz",
    "result": "modulo08-quiz-result",
    "complete": "complete-modulo08",
    "cert": "modulo08-certificate",
    "checkKey": "modulo08ChecklistDone",
    "approvedKey": "modulo08QuizApproved"
  }
  ,"modulo09": {
    "name": "Módulo 09",
    "title": "Automação, CLP, BMS e Lógicas de Redundância em CAG",
    "checkClass": "modulo09-check",
    "status": "modulo09-checklist-status",
    "go": "go-modulo09-quiz",
    "form": "modulo09-quiz-form",
    "questions": "modulo09-quiz-questions",
    "submit": "submit-modulo09-quiz",
    "retry": "retry-modulo09-quiz",
    "result": "modulo09-quiz-result",
    "complete": "complete-modulo09",
    "cert": "modulo09-certificate",
    "checkKey": "modulo09ChecklistDone",
    "approvedKey": "modulo09QuizApproved"
  }
  ,"modulo10": {
    "name": "Módulo 10",
    "title": "Alarmes, Falhas Operacionais e Troubleshooting em CAG",
    "checkClass": "modulo10-check",
    "status": "modulo10-checklist-status",
    "go": "go-modulo10-quiz",
    "form": "modulo10-quiz-form",
    "questions": "modulo10-quiz-questions",
    "submit": "submit-modulo10-quiz",
    "retry": "retry-modulo10-quiz",
    "result": "modulo10-quiz-result",
    "complete": "complete-modulo10",
    "cert": "modulo10-certificate",
    "checkKey": "modulo10ChecklistDone",
    "approvedKey": "modulo10QuizApproved"
  }

  ,"eletrica01": {
    "name": "Módulo E01",
    "title": "Fundamentos Elétricos para HVAC",
    "checkClass": "eletrica01-check",
    "status": "eletrica01-checklist-status",
    "go": "go-eletrica01-quiz",
    "form": "eletrica01-quiz-form",
    "questions": "eletrica01-quiz-questions",
    "submit": "submit-eletrica01-quiz",
    "retry": "retry-eletrica01-quiz",
    "result": "eletrica01-quiz-result",
    "complete": "complete-eletrica01",
    "cert": "eletrica01-certificate",
    "checkKey": "eletrica01ChecklistDone",
    "approvedKey": "eletrica01QuizApproved"
  }
  ,"eletrica02": {
    "name": "Módulo E02",
    "title": "Comandos Elétricos Aplicados a HVAC",
    "checkClass": "eletrica02-check",
    "status": "eletrica02-checklist-status",
    "go": "go-eletrica02-quiz",
    "form": "eletrica02-quiz-form",
    "questions": "eletrica02-quiz-questions",
    "submit": "submit-eletrica02-quiz",
    "retry": "retry-eletrica02-quiz",
    "result": "eletrica02-quiz-result",
    "complete": "complete-eletrica02",
    "cert": "eletrica02-certificate",
    "checkKey": "eletrica02ChecklistDone",
    "approvedKey": "eletrica02QuizApproved"
  }
  ,"eletrica03": {
    "name": "Módulo E03",
    "title": "Instrumentos de Medição e Testes",
    "checkClass": "eletrica03-check",
    "status": "eletrica03-checklist-status",
    "go": "go-eletrica03-quiz",
    "form": "eletrica03-quiz-form",
    "questions": "eletrica03-quiz-questions",
    "submit": "submit-eletrica03-quiz",
    "retry": "retry-eletrica03-quiz",
    "result": "eletrica03-quiz-result",
    "complete": "complete-eletrica03",
    "cert": "eletrica03-certificate",
    "checkKey": "eletrica03ChecklistDone",
    "approvedKey": "eletrica03QuizApproved"
  }
  ,"eletrica04": {
    "name": "Módulo E04",
    "title": "Diagnóstico Elétrico em Equipamentos HVAC",
    "checkClass": "eletrica04-check",
    "status": "eletrica04-checklist-status",
    "go": "go-eletrica04-quiz",
    "form": "eletrica04-quiz-form",
    "questions": "eletrica04-quiz-questions",
    "submit": "submit-eletrica04-quiz",
    "retry": "retry-eletrica04-quiz",
    "result": "eletrica04-quiz-result",
    "complete": "complete-eletrica04",
    "cert": "eletrica04-certificate",
    "checkKey": "eletrica04ChecklistDone",
    "approvedKey": "eletrica04QuizApproved"
  }


};
const quizBanks = {
  "modulo01": [
    {
      "question": "Qual é a principal função do compressor no ciclo frigorífico?",
      "options": {
        "A": "Reduzir a pressão do refrigerante antes do evaporador.",
        "B": "Elevar a pressão e a temperatura do vapor refrigerante.",
        "C": "Remover impurezas da linha de líquido.",
        "D": "Controlar diretamente a umidade relativa da sala."
      },
      "answer": "B"
    },
    {
      "question": "Onde ocorre a principal absorção de calor do ambiente climatizado?",
      "options": {
        "A": "Condensador.",
        "B": "Compressor.",
        "C": "Evaporador.",
        "D": "Filtro secador."
      },
      "answer": "C"
    },
    {
      "question": "O que acontece no condensador?",
      "options": {
        "A": "O refrigerante absorve calor do ar interno.",
        "B": "O refrigerante rejeita calor e tende a passar de vapor para líquido.",
        "C": "A pressão do refrigerante é reduzida bruscamente.",
        "D": "O refrigerante é armazenado sem troca térmica."
      },
      "answer": "B"
    },
    {
      "question": "Qual componente reduz a pressão do refrigerante antes do evaporador?",
      "options": {
        "A": "Dispositivo de expansão.",
        "B": "Compressor.",
        "C": "Condensador.",
        "D": "Ventilador EC."
      },
      "answer": "A"
    },
    {
      "question": "Qual condição representa risco operacional para o compressor?",
      "options": {
        "A": "Líquido totalmente condensado na linha de líquido.",
        "B": "Boa rejeição térmica no condensador.",
        "C": "Fluxo de ar adequado no evaporador.",
        "D": "Retorno líquido pela linha de sucção."
      },
      "answer": "D"
    },
    {
      "question": "Qual é o estado típico do refrigerante ao sair do evaporador em operação correta?",
      "options": {
        "A": "Líquido subresfriado em alta pressão.",
        "B": "Vapor superaquecido em baixa pressão.",
        "C": "Mistura de óleo e água.",
        "D": "Líquido em alta temperatura."
      },
      "answer": "B"
    },
    {
      "question": "Qual é a principal função do evaporador?",
      "options": {
        "A": "Rejeitar calor para o ambiente externo.",
        "B": "Comprimir o refrigerante.",
        "C": "Absorver calor do ambiente climatizado.",
        "D": "Armazenar refrigerante líquido."
      },
      "answer": "C"
    },
    {
      "question": "Qual é a principal função do dispositivo de expansão?",
      "options": {
        "A": "Elevar a pressão do vapor refrigerante.",
        "B": "Reduzir pressão e controlar a alimentação do evaporador.",
        "C": "Aumentar a temperatura da descarga.",
        "D": "Filtrar o ar de retorno."
      },
      "answer": "B"
    },
    {
      "question": "Em qual componente o refrigerante normalmente passa de vapor para líquido?",
      "options": {
        "A": "Condensador.",
        "B": "Evaporador.",
        "C": "Compressor.",
        "D": "Termostato."
      },
      "answer": "A"
    },
    {
      "question": "Em qual componente o refrigerante normalmente passa de mistura líquido/vapor para vapor?",
      "options": {
        "A": "Condensador.",
        "B": "Compressor.",
        "C": "Evaporador.",
        "D": "Filtro de ar."
      },
      "answer": "C"
    },
    {
      "question": "O que pode acontecer se houver baixa vazão de ar no evaporador?",
      "options": {
        "A": "Aumento garantido da capacidade.",
        "B": "Risco de congelamento, baixa pressão e redução de troca térmica.",
        "C": "Eliminação do Superheat.",
        "D": "Abertura automática da condensadora."
      },
      "answer": "B"
    },
    {
      "question": "Qual item pode causar alta pressão de condensação?",
      "options": {
        "A": "Condensador sujo ou falha de ventilação na condensação.",
        "B": "Filtro de ar novo.",
        "C": "Baixa temperatura externa sempre.",
        "D": "Evaporador limpo."
      },
      "answer": "A"
    },
    {
      "question": "Por que não se deve diagnosticar um sistema apenas pela pressão?",
      "options": {
        "A": "Porque pressão não tem nenhuma relação com temperatura.",
        "B": "Porque é necessário correlacionar pressão, temperatura, carga térmica, vazão de ar e condição operacional.",
        "C": "Porque o manifold mede apenas corrente elétrica.",
        "D": "Porque pressão só existe em sistemas hidráulicos."
      },
      "answer": "B"
    },
    {
      "question": "O que indica uma serpentina evaporadora suja?",
      "options": {
        "A": "Melhor troca térmica.",
        "B": "Possível redução de vazão de ar e queda de capacidade.",
        "C": "Aumento automático do rendimento.",
        "D": "Eliminação da necessidade de filtro."
      },
      "answer": "B"
    },
    {
      "question": "Qual é a função do filtro secador na linha de líquido?",
      "options": {
        "A": "Comprimir refrigerante.",
        "B": "Remover umidade e contaminantes do circuito.",
        "C": "Medir temperatura de retorno.",
        "D": "Aumentar a vazão de ar."
      },
      "answer": "B"
    },
    {
      "question": "Qual componente é responsável por rejeitar o calor absorvido no ambiente?",
      "options": {
        "A": "Evaporador.",
        "B": "Condensador.",
        "C": "Dispositivo de expansão.",
        "D": "Sensor de umidade."
      },
      "answer": "B"
    },
    {
      "question": "O que é carga térmica?",
      "options": {
        "A": "Quantidade de calor que precisa ser removida do ambiente.",
        "B": "Quantidade de óleo no compressor.",
        "C": "Número de filtros instalados.",
        "D": "Pressão nominal do ventilador."
      },
      "answer": "A"
    },
    {
      "question": "Qual é uma boa prática antes de concluir baixa carga de refrigerante?",
      "options": {
        "A": "Ignorar a vazão de ar.",
        "B": "Verificar filtros, serpentina, vazão de ar, temperaturas, SH/SC e condição operacional.",
        "C": "Completar gás sem medir nada.",
        "D": "Desligar todos os sensores."
      },
      "answer": "B"
    },
    {
      "question": "O que pode causar retorno líquido ao compressor?",
      "options": {
        "A": "Superheat muito baixo e alimentação excessiva do evaporador.",
        "B": "Filtro de ar limpo.",
        "C": "Subcooling inexistente na linha de líquido sempre.",
        "D": "Ventilador externo desligado obrigatoriamente."
      },
      "answer": "A"
    },
    {
      "question": "Qual é a sequência básica do ciclo frigorífico de compressão de vapor?",
      "options": {
        "A": "Evaporador, condensador, compressor, filtro.",
        "B": "Compressor, condensador, expansão, evaporador.",
        "C": "Filtro, sensor, ventilador, dreno.",
        "D": "Condensador, evaporador, compressor, sensor."
      },
      "answer": "B"
    }
  ],
  "modulo02": [
    {
      "question": "O que representa o Superheat?",
      "options": {
        "A": "A diferença entre temperatura externa e insuflamento.",
        "B": "A diferença entre temperatura real da sucção e temperatura de saturação de evaporação.",
        "C": "A pressão de descarga.",
        "D": "A diferença entre corrente nominal e medida."
      },
      "answer": "B"
    },
    {
      "question": "Qual condição pode indicar risco de retorno líquido?",
      "options": {
        "A": "Superheat elevado.",
        "B": "Subcooling elevado.",
        "C": "Superheat baixo.",
        "D": "Alta temperatura externa."
      },
      "answer": "C"
    },
    {
      "question": "O que representa o Subcooling?",
      "options": {
        "A": "Diferença entre saturação de condensação e temperatura real da linha de líquido.",
        "B": "Diferença entre retorno e insuflamento.",
        "C": "Superaquecimento na sucção.",
        "D": "Pressão mínima de evaporação."
      },
      "answer": "A"
    },
    {
      "question": "SH alto e SC baixo pode indicar:",
      "options": {
        "A": "Excesso de refrigerante.",
        "B": "Retorno líquido.",
        "C": "Condensador superdimensionado.",
        "D": "Baixa carga refrigerante ou alimentação insuficiente."
      },
      "answer": "D"
    },
    {
      "question": "Por que não diagnosticar apenas pela pressão?",
      "options": {
        "A": "Porque pressão não tem relação com temperatura.",
        "B": "Porque é necessário correlacionar pressão, temperatura, SH, SC e condição operacional.",
        "C": "Porque pressão só serve para sistemas hidráulicos.",
        "D": "Porque o manifold não mede pressão."
      },
      "answer": "B"
    },
    {
      "question": "Superheat é calculado geralmente em qual linha?",
      "options": {
        "A": "Linha de sucção.",
        "B": "Linha de líquido.",
        "C": "Linha de dreno.",
        "D": "Linha de água gelada."
      },
      "answer": "A"
    },
    {
      "question": "Subcooling é calculado geralmente em qual linha?",
      "options": {
        "A": "Linha de sucção.",
        "B": "Linha de líquido.",
        "C": "Linha de retorno de ar.",
        "D": "Linha de descarga de ar."
      },
      "answer": "B"
    },
    {
      "question": "Superheat elevado pode indicar:",
      "options": {
        "A": "Baixa alimentação do evaporador.",
        "B": "Retorno líquido garantido.",
        "C": "Excesso de óleo sempre.",
        "D": "Baixa temperatura de descarga."
      },
      "answer": "A"
    },
    {
      "question": "Subcooling baixo pode indicar:",
      "options": {
        "A": "Excesso de líquido estável.",
        "B": "Baixa carga ou falta de líquido estável.",
        "C": "Filtro de ar limpo.",
        "D": "Reheat ligado."
      },
      "answer": "B"
    },
    {
      "question": "Subcooling alto pode indicar:",
      "options": {
        "A": "Excesso de refrigerante ou restrição.",
        "B": "Evaporador sem carga.",
        "C": "Compressor desligado sempre.",
        "D": "BMS bloqueado."
      },
      "answer": "A"
    },
    {
      "question": "Risco de retorno líquido afeta principalmente:",
      "options": {
        "A": "Filtro de ar.",
        "B": "Condensador externo.",
        "C": "Compressor.",
        "D": "Display."
      },
      "answer": "C"
    },
    {
      "question": "Para calcular SH é necessário:",
      "options": {
        "A": "Temperatura externa e umidade.",
        "B": "Temperatura da linha de sucção e saturação de evaporação.",
        "C": "Corrente do ventilador.",
        "D": "Pressão estática."
      },
      "answer": "B"
    },
    {
      "question": "Para calcular SC é necessário:",
      "options": {
        "A": "Retorno e insuflamento.",
        "B": "Temperatura do compressor.",
        "C": "Saturação de condensação e temperatura da linha de líquido.",
        "D": "UR da sala."
      },
      "answer": "C"
    },
    {
      "question": "Carga refrigerante deve ser avaliada com:",
      "options": {
        "A": "SH, SC, pressões, temperaturas e condição operacional.",
        "B": "Somente ruído.",
        "C": "Cor da tubulação.",
        "D": "Somente display."
      },
      "answer": "A"
    },
    {
      "question": "Linha de líquido instável pode impactar:",
      "options": {
        "A": "A pintura do gabinete.",
        "B": "Alimentação do dispositivo de expansão.",
        "C": "Sensor de porta.",
        "D": "Iluminação da sala."
      },
      "answer": "B"
    },
    {
      "question": "Superheat muito baixo significa:",
      "options": {
        "A": "Pouca margem de vapor superaquecido na sucção.",
        "B": "Alto subcooling sempre.",
        "C": "Filtro sujo sempre.",
        "D": "Água gelada excessiva."
      },
      "answer": "A"
    },
    {
      "question": "Um sistema com restrição pode apresentar:",
      "options": {
        "A": "SH baixo sempre.",
        "B": "SC baixo sempre.",
        "C": "Alteração de SC e alimentação deficiente.",
        "D": "Sem mudança de temperatura."
      },
      "answer": "C"
    },
    {
      "question": "Temperatura de saturação vem de:",
      "options": {
        "A": "Cor do tubo.",
        "B": "Relação pressão-temperatura do refrigerante.",
        "C": "Corrente elétrica.",
        "D": "Velocidade do ventilador."
      },
      "answer": "B"
    },
    {
      "question": "SH/SC ajudam a avaliar:",
      "options": {
        "A": "Apenas iluminação.",
        "B": "Apenas acústica.",
        "C": "Apenas tensão.",
        "D": "Alimentação do evaporador e estabilidade da linha de líquido."
      },
      "answer": "D"
    },
    {
      "question": "Diagnóstico técnico correto exige:",
      "options": {
        "A": "Medição, correlação e contexto operacional.",
        "B": "Chute pela pressão.",
        "C": "Troca direta de compressor.",
        "D": "Reset de alarmes."
      },
      "answer": "A"
    }
  ],
  "modulo03": [
    {
      "question": "O que a psicrometria estuda?",
      "options": {
        "A": "Apenas pressão de refrigerante.",
        "B": "Propriedades do ar úmido e relação entre temperatura, umidade e energia.",
        "C": "Apenas corrente elétrica.",
        "D": "Somente carga de refrigerante."
      },
      "answer": "B"
    },
    {
      "question": "O que é ponto de orvalho?",
      "options": {
        "A": "Temperatura de descarga.",
        "B": "Temperatura de insuflamento.",
        "C": "Temperatura em que vapor de água começa a condensar.",
        "D": "Pressão mínima do evaporador."
      },
      "answer": "C"
    },
    {
      "question": "Qual condição pode gerar condensação?",
      "options": {
        "A": "Superfície abaixo do ponto de orvalho do ar ao redor.",
        "B": "Superfície acima da temperatura externa.",
        "C": "UR sempre abaixo de 10%.",
        "D": "Compressor em carga parcial."
      },
      "answer": "A"
    },
    {
      "question": "Carga sensível está relacionada a:",
      "options": {
        "A": "Mudança de umidade.",
        "B": "Variação de temperatura.",
        "C": "Apenas corrente elétrica.",
        "D": "Pressão de condensação."
      },
      "answer": "B"
    },
    {
      "question": "Carga latente está relacionada a:",
      "options": {
        "A": "Pressão de sucção.",
        "B": "Variação de temperatura seca.",
        "C": "Mudança de umidade.",
        "D": "Rotação do ventilador."
      },
      "answer": "C"
    },
    {
      "question": "Umidade relativa isolada pode enganar porque:",
      "options": {
        "A": "Depende da temperatura e não mostra diretamente ponto de orvalho.",
        "B": "Sempre é zero.",
        "C": "Não existe em HVAC.",
        "D": "É igual a pressão estática."
      },
      "answer": "A"
    },
    {
      "question": "Reheat é usado para:",
      "options": {
        "A": "Aumentar pressão de descarga.",
        "B": "Filtrar ar.",
        "C": "Reduzir rotação EC.",
        "D": "Reaquecer após desumidificação."
      },
      "answer": "D"
    },
    {
      "question": "Alta umidade em sala crítica pode causar:",
      "options": {
        "A": "Risco de condensação e instabilidade ambiental.",
        "B": "Aumento garantido de eficiência.",
        "C": "Eliminação de alarmes.",
        "D": "Fim da carga térmica."
      },
      "answer": "A"
    },
    {
      "question": "Baixa umidade pode aumentar risco de:",
      "options": {
        "A": "Condensação.",
        "B": "Eletricidade estática.",
        "C": "Baixa pressão de água.",
        "D": "Subcooling alto."
      },
      "answer": "B"
    },
    {
      "question": "Delta T de ar é:",
      "options": {
        "A": "Pressão de água.",
        "B": "Sinal 0-10 V.",
        "C": "Diferença entre retorno e insuflamento.",
        "D": "Subcooling."
      },
      "answer": "C"
    },
    {
      "question": "Data centers tendem a ter predominância de:",
      "options": {
        "A": "Carga sensível.",
        "B": "Carga latente sempre.",
        "C": "Sem carga térmica.",
        "D": "Apenas carga humana."
      },
      "answer": "A"
    },
    {
      "question": "A análise psicrométrica em precisão deve considerar:",
      "options": {
        "A": "Só temperatura.",
        "B": "Temperatura, umidade e ponto de orvalho.",
        "C": "Somente compressor.",
        "D": "Somente filtro."
      },
      "answer": "B"
    },
    {
      "question": "Desumidificação ocorre quando:",
      "options": {
        "A": "O ar passa por superfície abaixo do ponto de orvalho.",
        "B": "A superfície está sempre quente.",
        "C": "Ventilador desliga.",
        "D": "A pressão aumenta."
      },
      "answer": "A"
    },
    {
      "question": "Bulbo seco representa:",
      "options": {
        "A": "Umidade absoluta.",
        "B": "Temperatura comum do ar.",
        "C": "Ponto de orvalho.",
        "D": "Entalpia da água."
      },
      "answer": "B"
    },
    {
      "question": "Entalpia representa:",
      "options": {
        "A": "Energia total do ar úmido.",
        "B": "Somente pressão.",
        "C": "Vazão elétrica.",
        "D": "Tamanho do filtro."
      },
      "answer": "A"
    },
    {
      "question": "Sensor mal posicionado pode causar:",
      "options": {
        "A": "Leitura sempre correta.",
        "B": "Zero impacto.",
        "C": "Controle inadequado e diagnóstico incorreto.",
        "D": "Fim de manutenção."
      },
      "answer": "C"
    },
    {
      "question": "Boa prática ASHRAE em ambiente crítico envolve:",
      "options": {
        "A": "Ignorar umidade.",
        "B": "Trabalhar sem monitoramento.",
        "C": "Resetar alarmes.",
        "D": "Monitorar condições ambientais e tendência."
      },
      "answer": "D"
    },
    {
      "question": "Ponto de orvalho ajuda a avaliar:",
      "options": {
        "A": "Risco de condensação.",
        "B": "Corrente nominal.",
        "C": "Pressão de óleo.",
        "D": "Velocidade do compressor."
      },
      "answer": "A"
    },
    {
      "question": "Controle de umidade inadequado pode afetar:",
      "options": {
        "A": "Somente estética.",
        "B": "Confiabilidade de equipamentos eletrônicos.",
        "C": "A cor da tubulação.",
        "D": "O nome da sala."
      },
      "answer": "B"
    },
    {
      "question": "Em diagnóstico psicrométrico, é correto:",
      "options": {
        "A": "Correlacionar temperatura, UR, ponto de orvalho e processos HVAC.",
        "B": "Usar só sensação térmica.",
        "C": "Ignorar reheat.",
        "D": "Medir apenas tensão."
      },
      "answer": "A"
    }
  ],
  "modulo04": [
    {
      "question": "O que caracteriza um equipamento Self Contained DX?",
      "options": {
        "A": "Unidade terminal sem circuito frigorífico próprio.",
        "B": "Equipamento de expansão direta com circuito frigorífico próprio e componentes integrados.",
        "C": "Sistema composto apenas por ventilador e filtro.",
        "D": "Equipamento exclusivo para aquecimento elétrico."
      },
      "answer": "B"
    },
    {
      "question": "Qual componente eleva pressão e temperatura do vapor refrigerante?",
      "options": {
        "A": "Evaporador.",
        "B": "Filtro de ar.",
        "C": "Compressor.",
        "D": "Bandeja de condensado."
      },
      "answer": "C"
    },
    {
      "question": "Alarme de alta pressão pode estar relacionado a:",
      "options": {
        "A": "Condensador obstruído ou falha de ventilação na condensação.",
        "B": "Baixa umidade relativa.",
        "C": "Sensor de iluminação.",
        "D": "Excesso de vazão de ar sempre."
      },
      "answer": "A"
    },
    {
      "question": "Antes da partida do compressor, o controlador verifica:",
      "options": {
        "A": "Cor do tubo.",
        "B": "Nome do fabricante.",
        "C": "Posição física.",
        "D": "Permissivos, alarmes e temporizações."
      },
      "answer": "D"
    },
    {
      "question": "Boa prática de troubleshooting em Self DX:",
      "options": {
        "A": "Trocar compressor sempre.",
        "B": "Correlacionar pressões, temperaturas, ar, elétrica e histórico.",
        "C": "Ignorar alarmes.",
        "D": "Avaliar só sucção."
      },
      "answer": "B"
    },
    {
      "question": "Self DX difere de água gelada porque:",
      "options": {
        "A": "Possui refrigeração direta no equipamento.",
        "B": "Sempre não tem compressor.",
        "C": "Usa somente água.",
        "D": "Não tem evaporador."
      },
      "answer": "A"
    },
    {
      "question": "Baixa pressão pode indicar:",
      "options": {
        "A": "Condensador perfeito.",
        "B": "Alta carga sempre.",
        "C": "Baixa carga, restrição ou baixa vazão de ar.",
        "D": "Sensor de porta."
      },
      "answer": "C"
    },
    {
      "question": "Compressor deve receber:",
      "options": {
        "A": "Líquido.",
        "B": "Vapor.",
        "C": "Água.",
        "D": "Óleo puro."
      },
      "answer": "B"
    },
    {
      "question": "Retorno líquido causa risco de:",
      "options": {
        "A": "Danos mecânicos ao compressor.",
        "B": "Melhor lubrificação.",
        "C": "Menor corrente sempre.",
        "D": "Fim dos alarmes."
      },
      "answer": "A"
    },
    {
      "question": "Evaporador do Self DX:",
      "options": {
        "A": "Rejeita calor.",
        "B": "Comprime.",
        "C": "Absorve calor do ar.",
        "D": "Expande óleo."
      },
      "answer": "C"
    },
    {
      "question": "Condensação deficiente pode gerar:",
      "options": {
        "A": "Alta pressão.",
        "B": "Baixa temperatura sempre.",
        "C": "Sem alarmes.",
        "D": "Melhora de capacidade."
      },
      "answer": "A"
    },
    {
      "question": "Filtro sujo no ar pode causar:",
      "options": {
        "A": "Mais capacidade.",
        "B": "Baixa vazão e congelamento.",
        "C": "Menor consumo sempre.",
        "D": "Fim de umidade."
      },
      "answer": "B"
    },
    {
      "question": "Controlador gerencia:",
      "options": {
        "A": "Apenas pintura.",
        "B": "Apenas dreno.",
        "C": "Apenas filtro.",
        "D": "Setpoints, sensores, alarmes e estágios."
      },
      "answer": "D"
    },
    {
      "question": "Anti-ciclagem protege contra:",
      "options": {
        "A": "Partidas e paradas excessivas.",
        "B": "Alta umidade apenas.",
        "C": "Filtro limpo.",
        "D": "Água no dreno."
      },
      "answer": "A"
    },
    {
      "question": "Pressostato HP atua por:",
      "options": {
        "A": "Baixa umidade.",
        "B": "Alta pressão.",
        "C": "Baixa luz.",
        "D": "Vazão de água."
      },
      "answer": "B"
    },
    {
      "question": "Pressostato LP atua por:",
      "options": {
        "A": "Alta pressão.",
        "B": "Alta vazão.",
        "C": "Baixa pressão.",
        "D": "Reheat."
      },
      "answer": "C"
    },
    {
      "question": "Baixa capacidade exige verificar:",
      "options": {
        "A": "Compressor, serpentinas, vazão, SH/SC e alarmes.",
        "B": "Somente etiqueta.",
        "C": "Somente BMS.",
        "D": "Somente tinta."
      },
      "answer": "A"
    },
    {
      "question": "Falha compressor pode envolver:",
      "options": {
        "A": "Umidade baixa sempre.",
        "B": "Sobrecorrente, térmico, fase ou contator.",
        "C": "Filtro novo.",
        "D": "Piso limpo."
      },
      "answer": "B"
    },
    {
      "question": "O calor absorvido no evaporador é rejeitado no:",
      "options": {
        "A": "Condensador.",
        "B": "Filtro.",
        "C": "Dreno.",
        "D": "Display."
      },
      "answer": "A"
    },
    {
      "question": "Diagnóstico correto em Self DX exige:",
      "options": {
        "A": "Chute.",
        "B": "Reset.",
        "C": "Troca direta.",
        "D": "Método e correlação de parâmetros."
      },
      "answer": "D"
    }
  ],
  "modulo05": [
    {
      "question": "Qual é a principal finalidade de um Self de Precisão?",
      "options": {
        "A": "Atender somente conforto térmico.",
        "B": "Manter condições ambientais estáveis em ambientes críticos.",
        "C": "Operar sem sensores.",
        "D": "Substituir sistema elétrico."
      },
      "answer": "B"
    },
    {
      "question": "Qual item pode ser usado como sensor de controle?",
      "options": {
        "A": "Apenas sensor de fumaça.",
        "B": "Apenas sensor de porta.",
        "C": "Retorno, insuflamento ou sensor remoto.",
        "D": "Apenas temperatura externa."
      },
      "answer": "C"
    },
    {
      "question": "Para que serve a banda morta?",
      "options": {
        "A": "Evitar alternância excessiva entre resfriamento e aquecimento.",
        "B": "Desligar sensores.",
        "C": "Eliminar manutenção.",
        "D": "Aumentar pressão de descarga."
      },
      "answer": "A"
    },
    {
      "question": "O que fazer diante de alarmes recorrentes?",
      "options": {
        "A": "Resetar sempre.",
        "B": "Desabilitar permanentemente.",
        "C": "Ignorar se a sala estiver fria.",
        "D": "Consultar histórico, correlacionar parâmetros e investigar causa raiz."
      },
      "answer": "D"
    },
    {
      "question": "Alarme de fluxo de ar pode estar relacionado a:",
      "options": {
        "A": "Apenas iluminação.",
        "B": "Filtro obstruído, falha de ventilador, obstrução ou sensor.",
        "C": "Somente baixa umidade.",
        "D": "Apenas BMS."
      },
      "answer": "B"
    },
    {
      "question": "Característica típica da climatização de precisão:",
      "options": {
        "A": "Operação contínua e controle refinado.",
        "B": "Ausência de alarmes.",
        "C": "Controle apenas manual.",
        "D": "Uso residencial."
      },
      "answer": "A"
    },
    {
      "question": "Por que controlar umidade em ambiente crítico?",
      "options": {
        "A": "Elimina temperatura.",
        "B": "Reduz riscos de condensação, estática e instabilidade.",
        "C": "Desativa ventiladores.",
        "D": "Impede carga térmica."
      },
      "answer": "B"
    },
    {
      "question": "O que representa setpoint?",
      "options": {
        "A": "Valor alvo que o sistema busca manter.",
        "B": "Corrente máxima.",
        "C": "Número de série.",
        "D": "Tempo de vida do filtro."
      },
      "answer": "A"
    },
    {
      "question": "Função comum do BMS:",
      "options": {
        "A": "Substituir sensores.",
        "B": "Supervisionar alarmes, estados e tendências.",
        "C": "Remover manutenção.",
        "D": "Aumentar carga térmica."
      },
      "answer": "B"
    },
    {
      "question": "Sensor mal posicionado pode causar:",
      "options": {
        "A": "Controle incorreto, hotspots ou sobre-resfriamento.",
        "B": "Aumento da vida útil do filtro.",
        "C": "Bloqueio BMS.",
        "D": "Fim de alarmes."
      },
      "answer": "A"
    },
    {
      "question": "Componente que movimenta o ar:",
      "options": {
        "A": "Sensor de umidade.",
        "B": "Ventilador.",
        "C": "Display.",
        "D": "Bandeja."
      },
      "answer": "B"
    },
    {
      "question": "Possível causa de alta temperatura ambiente:",
      "options": {
        "A": "Baixa carga térmica.",
        "B": "Baixa capacidade, falha de ventilação ou carga elevada.",
        "C": "Excesso de iluminação no display.",
        "D": "Filtro novo instalado corretamente."
      },
      "answer": "B"
    },
    {
      "question": "Possível causa de alta umidade:",
      "options": {
        "A": "Infiltração de ar externo ou falha na desumidificação.",
        "B": "Sensor de fumaça.",
        "C": "Ventilador nominal.",
        "D": "Ambiente sem carga latente."
      },
      "answer": "A"
    },
    {
      "question": "Função do reheat:",
      "options": {
        "A": "Reaquecer após desumidificação para controlar temperatura e umidade.",
        "B": "Aumentar pressão de sucção.",
        "C": "Substituir compressor.",
        "D": "Desligar BMS."
      },
      "answer": "A"
    },
    {
      "question": "O que verificar na preventiva?",
      "options": {
        "A": "Apenas gabinete.",
        "B": "Filtros, serpentinas, dreno, sensores, alarmes, ventiladores, elétrica e histórico.",
        "C": "Somente cor dos cabos.",
        "D": "Apenas temperatura externa."
      },
      "answer": "B"
    },
    {
      "question": "Alarme de filtro pode indicar:",
      "options": {
        "A": "Filtro limpo.",
        "B": "Perda de carga elevada, filtro sujo ou obstrução.",
        "C": "Falha exclusiva do compressor.",
        "D": "Alta pressão de água."
      },
      "answer": "B"
    },
    {
      "question": "Risco de resetar alarmes sem diagnóstico:",
      "options": {
        "A": "Eliminar causa raiz.",
        "B": "Ocultar sintomas e permitir reincidência.",
        "C": "Aumentar eficiência.",
        "D": "Recalibrar sensores."
      },
      "answer": "B"
    },
    {
      "question": "Operação em standby significa:",
      "options": {
        "A": "Unidade reserva pronta para assumir por falha, rotação ou sobrecarga.",
        "B": "Unidade sem comunicação.",
        "C": "Equipamento sem alimentação.",
        "D": "Modo transporte."
      },
      "answer": "A"
    },
    {
      "question": "Registrar tendência operacional é importante porque:",
      "options": {
        "A": "Substitui inspeção física.",
        "B": "Ajuda a identificar degradação e comportamento anormal.",
        "C": "Elimina sensores.",
        "D": "Impede alarmes."
      },
      "answer": "B"
    },
    {
      "question": "Boa prática ao alterar setpoints:",
      "options": {
        "A": "Alterar sem registro.",
        "B": "Alterar com critério, registro e validação.",
        "C": "Definir sempre o menor valor.",
        "D": "Desabilitar alarmes."
      },
      "answer": "B"
    }
  ],
  "modulo06": [
    {
      "question": "Qual é a principal função de um fancoil de precisão?",
      "options": {
        "A": "Produzir água gelada diretamente como um chiller.",
        "B": "Controlar o ambiente usando serpentina, ventiladores, sensores e água gelada.",
        "C": "Substituir o sistema elétrico.",
        "D": "Operar apenas como exaustor."
      },
      "answer": "B"
    },
    {
      "question": "Qual é a principal diferença entre DX e fancoil CW?",
      "options": {
        "A": "No DX há circuito frigorífico local; no CW há água gelada na serpentina.",
        "B": "CW sempre usa refrigerante R410A na sala.",
        "C": "DX não possui serpentina.",
        "D": "Não existe diferença."
      },
      "answer": "A"
    },
    {
      "question": "O que a válvula modulante controla?",
      "options": {
        "A": "Iluminação da sala.",
        "B": "Vazão de água gelada pela serpentina.",
        "C": "Rotação fixa do compressor.",
        "D": "Pressão do refrigerante."
      },
      "answer": "B"
    },
    {
      "question": "Delta T hidráulico muito alto pode indicar:",
      "options": {
        "A": "Baixa vazão de água ou restrição no circuito.",
        "B": "Filtro de ar novo.",
        "C": "Excesso de iluminação.",
        "D": "BMS normal."
      },
      "answer": "A"
    },
    {
      "question": "Delta T hidráulico muito baixo pode indicar:",
      "options": {
        "A": "Boa troca térmica garantida.",
        "B": "Baixa transferência de calor, excesso de vazão ou baixa carga.",
        "C": "Falha exclusiva de fumaça.",
        "D": "Alta pressão de refrigerante."
      },
      "answer": "B"
    },
    {
      "question": "O que verificar em baixa vazão de ar?",
      "options": {
        "A": "Filtros, ventiladores EC, obstruções e sensor de fluxo.",
        "B": "Apenas cor do gabinete.",
        "C": "Número de série.",
        "D": "Temperatura externa."
      },
      "answer": "A"
    },
    {
      "question": "Alarme de filtro pode indicar:",
      "options": {
        "A": "Perda de carga elevada por saturação.",
        "B": "Válvula 100% aberta.",
        "C": "Baixa pressão de refrigerante.",
        "D": "Excesso de água no chiller sempre."
      },
      "answer": "A"
    },
    {
      "question": "Função dos ventiladores EC:",
      "options": {
        "A": "Modular a vazão de ar com maior controle e eficiência.",
        "B": "Comprimir refrigerante.",
        "C": "Bombear água gelada.",
        "D": "Substituir válvula."
      },
      "answer": "A"
    },
    {
      "question": "O que é Delta T de ar?",
      "options": {
        "A": "Diferença entre retorno e insuflamento.",
        "B": "Diferença entre sucção e descarga.",
        "C": "Corrente do ventilador.",
        "D": "Sinal do BMS."
      },
      "answer": "A"
    },
    {
      "question": "O que é Delta P?",
      "options": {
        "A": "Diferença de pressão entre dois pontos.",
        "B": "Temperatura média.",
        "C": "Velocidade do display.",
        "D": "Umidade absoluta."
      },
      "answer": "A"
    },
    {
      "question": "Válvula 100% e baixa capacidade pode indicar:",
      "options": {
        "A": "Restrição hidráulica, baixa vazão ou água inadequada.",
        "B": "Filtro limpo.",
        "C": "BMS desligado sem impacto.",
        "D": "Capacidade máxima sempre garantida."
      },
      "answer": "A"
    },
    {
      "question": "Alta temperatura em fancoil CW pode ser causada por:",
      "options": {
        "A": "Baixa vazão de água, válvula travada, filtro sujo ou baixo airflow.",
        "B": "Sensor de iluminação.",
        "C": "Compressor local sempre desligado.",
        "D": "Excesso de pintura."
      },
      "answer": "A"
    },
    {
      "question": "Quem remove calor do ar no fancoil CW?",
      "options": {
        "A": "Serpentina de água gelada.",
        "B": "Display frontal.",
        "C": "Etiqueta.",
        "D": "Chave de porta."
      },
      "answer": "A"
    },
    {
      "question": "Presença de ar na linha pode indicar:",
      "options": {
        "A": "Ruído, oscilação, baixa capacidade e instabilidade.",
        "B": "Filtro novo.",
        "C": "Pressão perfeita sempre.",
        "D": "BMS desligado."
      },
      "answer": "A"
    },
    {
      "question": "Componente que protege válvula/serpentina no circuito hidráulico:",
      "options": {
        "A": "Filtro Y ou strainer.",
        "B": "Sensor de fumaça.",
        "C": "Display de toque.",
        "D": "Bandeja de condensado."
      },
      "answer": "A"
    },
    {
      "question": "Balanceamento hidráulico é:",
      "options": {
        "A": "Ajuste de vazão para distribuir água entre unidades.",
        "B": "Reset do controlador.",
        "C": "Troca de filtros de ar.",
        "D": "Teste de porta."
      },
      "answer": "A"
    },
    {
      "question": "Boa prática para alarmes recorrentes:",
      "options": {
        "A": "Consultar histórico, tendência e parâmetros antes de resetar.",
        "B": "Resetar até desaparecer.",
        "C": "Ignorar se a sala estiver fria.",
        "D": "Desabilitar alarme."
      },
      "answer": "A"
    },
    {
      "question": "Parâmetro que avalia perda de carga no filtro:",
      "options": {
        "A": "Pressão diferencial do filtro.",
        "B": "Número de portas.",
        "C": "Temperatura externa.",
        "D": "Tensão do display."
      },
      "answer": "A"
    },
    {
      "question": "Em fancoil CW, produção de frio ocorre normalmente:",
      "options": {
        "A": "Na planta de água gelada/chiller.",
        "B": "No display da unidade.",
        "C": "No filtro de ar.",
        "D": "No sensor de umidade."
      },
      "answer": "A"
    },
    {
      "question": "Possível causa de condensação excessiva:",
      "options": {
        "A": "Alta umidade, serpentina muito fria ou dreno obstruído.",
        "B": "Filtro limpo sempre.",
        "C": "Água gelada inexistente.",
        "D": "Sensor desligado sem impacto."
      },
      "answer": "A"
    },
    {
      "question": "Função da bandeja e dreno:",
      "options": {
        "A": "Coletar e remover condensado.",
        "B": "Controlar vazão de água.",
        "C": "Aumentar pressão estática.",
        "D": "Comprimir refrigerante."
      },
      "answer": "A"
    },
    {
      "question": "Baixo Delta T de ar pode ser causado por:",
      "options": {
        "A": "Baixa troca térmica, airflow excessivo ou água inadequada.",
        "B": "Controle perfeito.",
        "C": "Filtro obrigatoriamente limpo.",
        "D": "BMS bloqueado."
      },
      "answer": "A"
    },
    {
      "question": "Abordagem correta de troubleshooting:",
      "options": {
        "A": "Correlacionar ar, água, válvula, sensores, alarmes e histórico.",
        "B": "Trocar válvula sem medir.",
        "C": "Ignorar tendência.",
        "D": "Avaliar só display."
      },
      "answer": "A"
    },
    {
      "question": "Filtro saturado pode causar:",
      "options": {
        "A": "Redução de vazão de ar, perda de capacidade e aumento DP.",
        "B": "Aumento garantido de eficiência.",
        "C": "Abertura da válvula por serial.",
        "D": "Eliminação de alarmes."
      },
      "answer": "A"
    },
    {
      "question": "Informações importantes na inspeção CW:",
      "options": {
        "A": "Temperaturas de ar e água, válvula, filtros, alarmes e tendência.",
        "B": "Somente nome da sala.",
        "C": "Somente cor da unidade.",
        "D": "Apenas horário de almoço."
      },
      "answer": "A"
    }
  ]
,
  "modulo07": [
    {
        "question": "Qual é a principal função de uma Central de Água Gelada?",
        "options": {
            "A": "Produzir e distribuir água gelada para consumidores térmicos.",
            "B": "Substituir todos os ventiladores da instalação.",
            "C": "Controlar apenas a iluminação da sala.",
            "D": "Eliminar a necessidade de bombas."
        },
        "answer": "A"
    },
    {
        "question": "No chiller, onde a água do circuito é resfriada?",
        "options": {
            "A": "No evaporador.",
            "B": "No filtro de ar.",
            "C": "No quadro de iluminação.",
            "D": "No dreno de condensado."
        },
        "answer": "A"
    },
    {
        "question": "O que representa LWT em uma central de água gelada?",
        "options": {
            "A": "Temperatura da água de saída do evaporador.",
            "B": "Tensão de linha do ventilador.",
            "C": "Umidade relativa do corredor frio.",
            "D": "Pressão estática do filtro."
        },
        "answer": "A"
    },
    {
        "question": "O que representa EWT em um chiller?",
        "options": {
            "A": "Temperatura da água entrando no evaporador.",
            "B": "Temperatura externa do compressor apenas.",
            "C": "Corrente elétrica total da bomba.",
            "D": "Relação de velocidade do ventilador."
        },
        "answer": "A"
    },
    {
        "question": "Delta T hidráulico é calculado como:",
        "options": {
            "A": "Temperatura de retorno menos temperatura de alimentação.",
            "B": "Pressão alta menos pressão baixa do refrigerante.",
            "C": "Umidade relativa menos ponto de orvalho.",
            "D": "Tensão nominal menos corrente elétrica."
        },
        "answer": "A"
    },
    {
        "question": "Delta T muito baixo na central pode indicar:",
        "options": {
            "A": "Excesso de vazão, bypass, válvulas abertas demais ou baixa troca térmica.",
            "B": "Sempre falta de refrigerante no chiller.",
            "C": "Filtro de ar novo obrigatoriamente.",
            "D": "Setpoint perfeito sem necessidade de análise."
        },
        "answer": "A"
    },
    {
        "question": "Delta T muito alto pode indicar:",
        "options": {
            "A": "Baixa vazão, restrição ou alta carga térmica nos consumidores.",
            "B": "Excesso de iluminação no painel.",
            "C": "Controle sempre ideal.",
            "D": "Ausência total de carga térmica."
        },
        "answer": "A"
    },
    {
        "question": "Qual componente confirma circulação de água antes da operação segura do chiller?",
        "options": {
            "A": "Fluxóstato ou sensor de fluxo.",
            "B": "Sensor de fumaça da sala.",
            "C": "Iluminação de emergência.",
            "D": "Etiqueta de identificação."
        },
        "answer": "A"
    },
    {
        "question": "A bomba de água gelada tem como função principal:",
        "options": {
            "A": "Garantir circulação e vencer perdas de carga do circuito.",
            "B": "Comprimir refrigerante no circuito frigorífico.",
            "C": "Medir umidade da sala.",
            "D": "Filtrar partículas do ar."
        },
        "answer": "A"
    },
    {
        "question": "Em baixa capacidade com válvula 100% aberta, o técnico deve verificar:",
        "options": {
            "A": "Vazão, Delta P, strainer, água de alimentação e serpentina.",
            "B": "Apenas a cor do gabinete.",
            "C": "Apenas o nome do fabricante.",
            "D": "Somente o botão de logout."
        },
        "answer": "A"
    },
    {
        "question": "Qual é a função do strainer/filtro Y no circuito hidráulico?",
        "options": {
            "A": "Reter partículas e proteger trocadores, válvulas e sensores.",
            "B": "Aumentar a temperatura da água.",
            "C": "Substituir o compressor.",
            "D": "Controlar a iluminação."
        },
        "answer": "A"
    },
    {
        "question": "Freecooling em central de água gelada usa principalmente:",
        "options": {
            "A": "Condições externas favoráveis para reduzir trabalho dos compressores.",
            "B": "Aquecimento elétrico para aumentar carga.",
            "C": "Desligamento de todas as bombas sempre.",
            "D": "Remoção dos sensores de fluxo."
        },
        "answer": "A"
    },
    {
        "question": "Em sistemas com freecooling e risco de baixa temperatura, deve-se considerar:",
        "options": {
            "A": "Proteção anticongelamento, glicol adequado e intertravamentos de fluxo.",
            "B": "Remover filtros da tubulação.",
            "C": "Desativar alarmes de segurança.",
            "D": "Operar sem tratamento de água."
        },
        "answer": "A"
    },
    {
        "question": "O BMS pode atuar na central para:",
        "options": {
            "A": "Habilitar, monitorar alarmes, ajustar setpoints e aplicar limites de demanda.",
            "B": "Eliminar proteções locais do chiller.",
            "C": "Substituir a necessidade de fluxo no evaporador.",
            "D": "Impedir manutenção preventiva."
        },
        "answer": "A"
    },
    {
        "question": "A proteção anticongelamento do evaporador pode ser acionada por:",
        "options": {
            "A": "Baixa vazão, setpoint inadequado, sensor incorreto ou glicol insuficiente.",
            "B": "Filtro de ar limpo sempre.",
            "C": "Alta temperatura de retorno sem relação com fluxo.",
            "D": "Bomba funcionando perfeitamente em qualquer condição."
        },
        "answer": "A"
    },
    {
        "question": "Sequência típica antes da partida do chiller inclui:",
        "options": {
            "A": "Habilitação, bomba ativa, confirmação de fluxo e recirculação do loop.",
            "B": "Desligar o fluxóstato e forçar compressor.",
            "C": "Fechar todas as válvulas de água.",
            "D": "Ignorar alarmes ativos."
        },
        "answer": "A"
    },
    {
        "question": "A limpeza do condensador em chiller a ar impacta principalmente:",
        "options": {
            "A": "Pressão de condensação, eficiência e estabilidade operacional.",
            "B": "A cor do display.",
            "C": "A velocidade da internet.",
            "D": "O nome do módulo."
        },
        "answer": "A"
    },
    {
        "question": "Tratamento inadequado da água pode causar:",
        "options": {
            "A": "Incrustação, corrosão, obstrução e perda de troca térmica.",
            "B": "Aumento garantido da eficiência.",
            "C": "Eliminação de manutenções.",
            "D": "Menor necessidade de bombas em qualquer caso."
        },
        "answer": "A"
    },
    {
        "question": "Boa prática ao diagnosticar uma central de água gelada é:",
        "options": {
            "A": "Correlacionar alarmes, EWT, LWT, Delta T, Delta P, vazão, válvulas e histórico.",
            "B": "Trocar compressor sem medições.",
            "C": "Resetar alarmes repetidamente sem registro.",
            "D": "Avaliar apenas se a água está fria ao toque."
        },
        "answer": "A"
    },
    {
        "question": "Em múltiplos chillers, o sequenciamento deve considerar:",
        "options": {
            "A": "Carga, eficiência, disponibilidade, limites operacionais e estratégia de controle.",
            "B": "Apenas ordem alfabética dos equipamentos.",
            "C": "Somente cor dos painéis.",
            "D": "Sempre ligar todos ao mesmo tempo."
        },
        "answer": "A"
    }
]
  ,"modulo08": [
    {
        "question": "Qual é a função principal de uma bomba em um circuito de água gelada?",
        "options": {
            "A": "Produzir frio diretamente no ambiente.",
            "B": "Fornecer energia hidráulica para circular água pelo sistema.",
            "C": "Aumentar a umidade relativa da sala.",
            "D": "Reduzir a temperatura do refrigerante no compressor."
        },
        "answer": "B"
    },
    {
        "question": "Em uma CAG, a bomba primária normalmente está mais associada a qual função?",
        "options": {
            "A": "Garantir circulação pelo chiller ou evaporador.",
            "B": "Controlar exclusivamente a umidade da sala.",
            "C": "Substituir a válvula de expansão.",
            "D": "Medir vibração do compressor."
        },
        "answer": "A"
    },
    {
        "question": "Bombas secundárias com inversor geralmente modulam para manter:",
        "options": {
            "A": "Pressão diferencial, vazão ou pressão de alimentação conforme projeto.",
            "B": "Pressão de condensação do compressor.",
            "C": "Superheat do refrigerante.",
            "D": "Temperatura de descarga do compressor."
        },
        "answer": "A"
    },
    {
        "question": "O que tende a acontecer quando a pressão diferencial cai abaixo do setpoint em uma lógica de bombas modulantes?",
        "options": {
            "A": "As bombas tendem a reduzir frequência.",
            "B": "As bombas tendem a acelerar para recuperar pressão.",
            "C": "O chiller sempre desliga imediatamente.",
            "D": "O by-pass sempre fecha completamente."
        },
        "answer": "B"
    },
    {
        "question": "By-pass excessivamente aberto pode causar qual efeito indesejado?",
        "options": {
            "A": "Aumento garantido do Delta T útil.",
            "B": "Curto-circuito hidráulico e redução da vazão útil no campo.",
            "C": "Eliminação da necessidade de bombas.",
            "D": "Aumento da capacidade do compressor sem carga."
        },
        "answer": "B"
    },
    {
        "question": "Qual é uma possível causa de baixo Delta T em uma CAG?",
        "options": {
            "A": "Excesso de vazão ou by-pass hidráulico.",
            "B": "Falta total de circulação de água.",
            "C": "Sensor de fumaça em alarme.",
            "D": "Baixa iluminação da sala de automação."
        },
        "answer": "A"
    },
    {
        "question": "O que a média excludente de sensores busca fazer?",
        "options": {
            "A": "Somar todas as leituras sem validação.",
            "B": "Retirar do cálculo uma leitura com defeito ou fora de plausibilidade.",
            "C": "Desligar todos os sensores quando há alarme.",
            "D": "Aumentar a frequência das bombas sem referência."
        },
        "answer": "B"
    },
    {
        "question": "Comando de partida enviado à bomba, mas sem confirmação de ligada, caracteriza principalmente:",
        "options": {
            "A": "Falha de status da bomba.",
            "B": "Delta T normal.",
            "C": "Operação estável do PID.",
            "D": "Rodízio de prioridade concluído."
        },
        "answer": "A"
    },
    {
        "question": "Falha de falta de fase deve levar o operador a verificar inicialmente:",
        "options": {
            "A": "Alimentação trifásica, proteção elétrica, fusíveis e bornes.",
            "B": "Apenas a limpeza do filtro de ar.",
            "C": "Somente a temperatura de retorno da sala.",
            "D": "O tipo de refrigerante do chiller."
        },
        "answer": "A"
    },
    {
        "question": "Qual item confirma mecanicamente ou eletricamente que uma válvula atingiu sua posição?",
        "options": {
            "A": "Microchave ou fim de curso.",
            "B": "Sensor de umidade da sala.",
            "C": "Pressostato de óleo do compressor.",
            "D": "Filtro de ar do fancoil."
        },
        "answer": "A"
    },
    {
        "question": "Frequência alta no inversor com pressão diferencial baixa pode indicar:",
        "options": {
            "A": "Sistema obrigatoriamente perfeito.",
            "B": "Perda de capacidade hidráulica, by-pass aberto, restrição ou sensor incorreto.",
            "C": "Superheat ideal.",
            "D": "Umidade baixa no ambiente."
        },
        "answer": "B"
    },
    {
        "question": "Cavitação em bomba costuma se manifestar por:",
        "options": {
            "A": "Ruído, vibração e instabilidade de desempenho.",
            "B": "Aumento automático do rendimento.",
            "C": "Redução garantida da vibração.",
            "D": "Eliminação de perdas de carga."
        },
        "answer": "A"
    },
    {
        "question": "Em manutenção preditiva, velocidade de vibração RMS ajuda principalmente a identificar:",
        "options": {
            "A": "Desbalanceamento, desalinhamento e folgas mecânicas.",
            "B": "Tipo exato do refrigerante.",
            "C": "Cor do isolamento térmico.",
            "D": "Ponto de orvalho da sala."
        },
        "answer": "A"
    },
    {
        "question": "Envelope de aceleração é útil para avaliar principalmente:",
        "options": {
            "A": "Condição de rolamentos e impactos de alta frequência.",
            "B": "Temperatura de água gelada de saída.",
            "C": "Setpoint de umidade relativa.",
            "D": "Abertura da válvula de expansão eletrônica."
        },
        "answer": "A"
    },
    {
        "question": "Por que o modo automático/manual da CAG deve ser tratado com cuidado?",
        "options": {
            "A": "Porque pode transferir responsabilidade de comando entre automação e operação local.",
            "B": "Porque muda a cor da IHM apenas.",
            "C": "Porque elimina todos os intertravamentos físicos.",
            "D": "Porque aumenta a capacidade nominal do chiller."
        },
        "answer": "A"
    },
    {
        "question": "Qual é o risco de alterar setpoint de by-pass apenas na gerenciadora principal, esquecendo a redundante?",
        "options": {
            "A": "Comportamento diferente em transferência para redundância.",
            "B": "Aumento automático de eficiência sem risco.",
            "C": "Desativação do tratamento de água.",
            "D": "Mudança do tipo de compressor."
        },
        "answer": "A"
    },
    {
        "question": "No balanceamento hidráulico, abrir todas as válvulas sem critério pode causar:",
        "options": {
            "A": "Distribuição incorreta de vazão e baixo Delta T.",
            "B": "Controle perfeito da planta.",
            "C": "Redução garantida da pressão diferencial.",
            "D": "Eliminação de alarmes de bomba."
        },
        "answer": "A"
    },
    {
        "question": "Antes de habilitar um chiller, uma sequência segura deve confirmar:",
        "options": {
            "A": "Válvula aberta, bomba operando, fluxo/pressão e permissivos.",
            "B": "Apenas o logotipo na IHM.",
            "C": "Somente a temperatura externa.",
            "D": "Apenas o modo claro/escuro da plataforma."
        },
        "answer": "A"
    },
    {
        "question": "Qual é uma boa primeira ação ao observar oscilação de pressão na CAG?",
        "options": {
            "A": "Avaliar tendência, sensores, PID, by-pass e demanda antes de trocar componentes.",
            "B": "Trocar imediatamente todas as bombas.",
            "C": "Desligar todos os chillers sem análise.",
            "D": "Ignorar a pressão e olhar apenas a temperatura."
        },
        "answer": "A"
    },
    {
        "question": "A reserva N+1 em bombas significa que:",
        "options": {
            "A": "Existe capacidade reserva para suportar a perda de um equipamento dentro do critério de projeto.",
            "B": "Todas as bombas devem operar sempre em 100%.",
            "C": "A bomba reserva nunca deve ser testada.",
            "D": "A central não precisa de sensores."
        },
        "answer": "A"
    },
  ],
  "modulo09": [
  {
    "question": "Qual camada normalmente executa permissivos, intertravamentos e lógica principal da CAG?",
    "options": {
      "A": "BMS ou supervisório",
      "B": "CLP / controlador",
      "C": "Somente a IHM",
      "D": "Apenas o motor da bomba"
    },
    "answer": "B"
  },
  {
    "question": "Um exemplo típico de entrada digital (DI) é:",
    "options": {
      "A": "Pressão 4-20 mA",
      "B": "Temperatura de água gelada",
      "C": "Status de bomba em operação",
      "D": "Sinal de modulação de válvula"
    },
    "answer": "C"
  },
  {
    "question": "Um exemplo típico de entrada analógica (AI) é:",
    "options": {
      "A": "Fim de curso aberto",
      "B": "Falha geral do inversor",
      "C": "Contato de run",
      "D": "Pressão diferencial enviada por transmissor"
    },
    "answer": "D"
  },
  {
    "question": "Qual é a finalidade principal de um permissivo de partida?",
    "options": {
      "A": "Tornar a sequência mais lenta sem motivo",
      "B": "Garantir que a partida só ocorra em condição segura",
      "C": "Eliminar a necessidade de sensores",
      "D": "Substituir a proteção elétrica"
    },
    "answer": "B"
  },
  {
    "question": "Se o CLP envia comando para partir uma bomba, mas não recebe status run, a primeira leitura correta é:",
    "options": {
      "A": "A lógica está obrigatoriamente errada",
      "B": "Pode existir falha de campo, intertravamento ou ausência de retorno",
      "C": "O sensor de temperatura está ruim",
      "D": "O chiller precisa ser desligado imediatamente"
    },
    "answer": "B"
  },
  {
    "question": "Na prática, intertravamento significa:",
    "options": {
      "A": "Permitir qualquer sequência manual",
      "B": "Ignorar alarmes se a demanda estiver alta",
      "C": "Bloquear ações inseguras ou inconsistentes",
      "D": "Substituir o operador"
    },
    "answer": "C"
  },
  {
    "question": "Em automação de CAG, uma saída analógica (AO) pode ser usada para:",
    "options": {
      "A": "Enviar referência de frequência ao VFD",
      "B": "Ler a falha da bomba",
      "C": "Confirmar fim de curso",
      "D": "Salvar histórico no supervisório"
    },
    "answer": "A"
  },
  {
    "question": "O conceito N+1 indica que:",
    "options": {
      "A": "Todos os equipamentos devem operar ao mesmo tempo",
      "B": "Existe capacidade reserva para perda de um equipamento dentro do projeto",
      "C": "A reserva nunca deve ser testada",
      "D": "Não são necessários permissivos"
    },
    "answer": "B"
  },
  {
    "question": "Uma boa prática em modo manual é:",
    "options": {
      "A": "Esquecer o equipamento em manual ao final do teste",
      "B": "Executar testes sem registrar condição da planta",
      "C": "Usar o modo com procedimento e depois restaurar o automático",
      "D": "Bloquear todos os alarmes"
    },
    "answer": "C"
  },
  {
    "question": "Qual destas variáveis é mais típica para alimentar um PID hidráulico?",
    "options": {
      "A": "Número de série da bomba",
      "B": "Pressão diferencial",
      "C": "Cor do painel",
      "D": "Horário do operador"
    },
    "answer": "B"
  },
  {
    "question": "Quando um sensor crítico apresenta valor implausível, a automação pode:",
    "options": {
      "A": "Sempre ignorar o problema",
      "B": "Forçar 100% em todos os VFDs",
      "C": "Aplicar fallback, exclusão ou alarme conforme estratégia",
      "D": "Desligar definitivamente o BMS"
    },
    "answer": "C"
  },
  {
    "question": "Qual camada é mais associada a tendências, histórico e telas globais?",
    "options": {
      "A": "Supervisório / BMS",
      "B": "Somente o motor elétrico",
      "C": "A válvula de bloqueio",
      "D": "O rolamento da bomba"
    },
    "answer": "A"
  },
  {
    "question": "Em troubleshooting, após ver o sintoma, uma etapa essencial é:",
    "options": {
      "A": "Trocar o CLP sem medir nada",
      "B": "Verificar comando e feedback de campo",
      "C": "Desligar toda a planta",
      "D": "Alterar setpoints aleatoriamente"
    },
    "answer": "B"
  },
  {
    "question": "Em um teste tipo MOP, antes da intervenção é recomendável:",
    "options": {
      "A": "Apagar os backups antigos e seguir direto",
      "B": "Fazer backup e registrar condição operacional",
      "C": "Desabilitar todos os alarmes do site",
      "D": "Passar todos os equipamentos para manual sem comunicar ninguém"
    },
    "answer": "B"
  },
  {
    "question": "Se uma BAG falha e a reserva assume conforme lógica, isso é um exemplo de:",
    "options": {
      "A": "Modulação psicrométrica",
      "B": "Redundância operacional",
      "C": "Subresfriamento",
      "D": "Expansão direta"
    },
    "answer": "B"
  },
  {
    "question": "Qual situação mais provavelmente impede habilitação de chiller?",
    "options": {
      "A": "Fluxo não confirmado e válvula não liberada",
      "B": "Tela do BMS em modo escuro",
      "C": "Leitura estável de temperatura",
      "D": "Bomba operando com permissivos válidos"
    },
    "answer": "A"
  },
  {
    "question": "Alarme crítico em automação de CAG tende a significar:",
    "options": {
      "A": "Condição com potencial de impacto à carga crítica",
      "B": "Somente um lembrete visual sem prioridade",
      "C": "Mudança de turno do operador",
      "D": "Registro sem necessidade de ação"
    },
    "answer": "A"
  },
  {
    "question": "Qual é a diferença entre DI e DO?",
    "options": {
      "A": "DI lê um estado; DO envia um comando discreto",
      "B": "DI modula válvula; DO mede pressão",
      "C": "DI só existe em BMS; DO só existe em chiller",
      "D": "Não há diferença"
    },
    "answer": "A"
  },
  {
    "question": "Uma causa comum de comportamento automático inesperado é:",
    "options": {
      "A": "Equipamento deixado em manual ou permissivo ausente",
      "B": "Excesso de documentação MOP",
      "C": "Número insuficiente de telas na IHM",
      "D": "Uso de tendência histórica"
    },
    "answer": "A"
  },
  {
    "question": "Na análise de um desvio, a melhor postura inicial é:",
    "options": {
      "A": "Confirmar estado da planta, sinais, lógica e proteções antes de alterar parâmetros",
      "B": "Trocar sensores e VFDs de forma preventiva imediata",
      "C": "Ignorar feedback de campo e confiar só no supervisório",
      "D": "Desligar todos os chillers por garantia"
    },
    "answer": "A"
  }
],
  "modulo10": [
  {
    "question": "Em uma CAG, qual situação melhor representa um evento crítico?",
    "options": {
      "A": "Mudança de tela no BMS",
      "B": "Tendência leve de vibração",
      "C": "Falha do principal sem reserva disponível",
      "D": "Retorno de comunicação sem impacto"
    },
    "answer": "C",
    "explanation": "Falha do principal sem reserva disponível ameaça diretamente a continuidade do resfriamento. Por isso tende a ser tratada como condição crítica."
  },
  {
    "question": "Bomba a 100% com ΔP abaixo do setpoint normalmente sugere primeiro:",
    "options": {
      "A": "Capacidade hidráulica insuficiente, restrição ou demanda elevada",
      "B": "Excesso de pressão no anel",
      "C": "Exclusivamente erro do sensor de umidade",
      "D": "Setpoint de temperatura muito baixo"
    },
    "answer": "A",
    "explanation": "Quando a bomba já está no máximo e o ΔP continua baixo, a leitura inicial mais coerente é incapacidade do sistema de entregar a pressão requerida, seja por demanda alta, restrição ou desempenho reduzido."
  },
  {
    "question": "Baixo ΔT em água gelada é frequentemente associado a:",
    "options": {
      "A": "Excesso de vazão, by-pass elevado ou baixa carga",
      "B": "Somente falha elétrica do VFD",
      "C": "Exclusivamente sensor de nível defeituoso",
      "D": "Sempre falta de fluxo no evaporador"
    },
    "answer": "A",
    "explanation": "Baixo ΔT costuma estar ligado a excesso de vazão, curto-circuito hidráulico por by-pass, válvulas muito abertas ou baixa troca térmica nos consumidores."
  },
  {
    "question": "Se vários fancoils de precisão começam a alarmar por alta temperatura quase ao mesmo tempo, a primeira hipótese mais ampla é:",
    "options": {
      "A": "Problema local individual em cada filtro",
      "B": "Evento sistêmico de água gelada ou distribuição",
      "C": "Erro simultâneo de todos os sensores de retorno",
      "D": "Umidade baixa no corredor"
    },
    "answer": "B",
    "explanation": "Vários terminais falhando juntos sugerem problema sistêmico na produção/distribuição de água gelada ou na automação da central, e não um defeito local isolado em cada unidade."
  },
  {
    "question": "Em um fancoil de precisão, alarme High Return Air Temperature com válvula em 100% e fluxo de ar reduzido aponta primeiro para:",
    "options": {
      "A": "Baixa vazão de ar por filtro saturado ou falha de ventilação",
      "B": "Excesso de água gelada",
      "C": "Pressão de condensação alta de um chiller",
      "D": "Queda de tensão no reheat"
    },
    "answer": "A",
    "explanation": "Se a válvula abre totalmente e mesmo assim a sala não resfria, o problema pode estar no lado do ar: filtro sujo, ventilador com falha ou fluxo insuficiente através da serpentina."
  },
  {
    "question": "Alarme de High Humidity com temperatura de sala estável e água gelada chegando mais quente pode indicar:",
    "options": {
      "A": "Remoção latente insuficiente por água gelada quente/capacidade reduzida",
      "B": "Necessidade imediata de aumentar reheat sem checagens",
      "C": "Problema exclusivamente do sensor de fumaça",
      "D": "Baixa umidade do ambiente"
    },
    "answer": "A",
    "explanation": "A umidade pode subir mesmo com temperatura aparentemente controlada quando a serpentina perde capacidade de condensar vapor de água, por exemplo com água gelada mais quente ou baixa capacidade latente."
  },
  {
    "question": "Qual alarme de fancoil se relaciona diretamente a risco de transbordo e proteção por água?",
    "options": {
      "A": "Dirty Filter",
      "B": "Condensate / High Level",
      "C": "High Return Air",
      "D": "Low Supply Static"
    },
    "answer": "B",
    "explanation": "Condensate / High Level está ligado à bandeja, drenagem, sifão ou sensor de nível, com risco de transbordo e atuação de proteção."
  },
  {
    "question": "Quando um chiller está habilitado, mas não entra em carga, uma hipótese plausível é:",
    "options": {
      "A": "Baixa demanda real ou permissivo incompleto de processo",
      "B": "Sempre falta de gás refrigerante",
      "C": "Somente sensor de umidade errado",
      "D": "Sempre falha mecânica grave do compressor"
    },
    "answer": "A",
    "explanation": "Chiller habilitado sem carga pode ocorrer por baixa demanda, lógica de controle, fluxo inadequado ou permissivos não plenamente atendidos. Não significa automaticamente falha grave do compressor."
  },
  {
    "question": "Qual é a melhor sequência inicial de troubleshooting?",
    "options": {
      "A": "Mudar setpoint, depois medir",
      "B": "Trocar peças e observar",
      "C": "Definir sintoma, alcance, sinais/permissivos e só então agir",
      "D": "Ignorar alarmes recorrentes"
    },
    "answer": "C",
    "explanation": "Troubleshooting seguro começa com definição do sintoma e do alcance do problema, seguida da validação de sinais, permissivos e estados antes de qualquer intervenção."
  },
  {
    "question": "Falha de sensor crítico pode impactar a operação porque:",
    "options": {
      "A": "A lógica passa a decidir com informação inválida",
      "B": "Sempre causa vazamento de água",
      "C": "Aumenta automaticamente o ΔT",
      "D": "Elimina a necessidade de intertravamentos"
    },
    "answer": "A",
    "explanation": "Sem sinais confiáveis, a lógica de controle pode bloquear sequências, modular incorretamente ou gerar alarmes falsos, comprometendo o diagnóstico e a operação."
  },
  {
    "question": "EC Fan Fault em um fancoil de precisão tende a impactar diretamente:",
    "options": {
      "A": "Fluxo de ar e capacidade do terminal",
      "B": "A concentração de glicol na central",
      "C": "A tensão do barramento do chiller",
      "D": "O nível da torre de resfriamento"
    },
    "answer": "A",
    "explanation": "Sem ventilação adequada, a serpentina perde efetividade e o ambiente deixa de trocar calor com o terminal, comprometendo a capacidade do fancoil."
  },
  {
    "question": "Alta pressão diferencial no anel geralmente é lida primeiro como:",
    "options": {
      "A": "Baixa demanda, válvulas fechadas ou setpoint alto",
      "B": "Excesso de carga térmica em todos os terminais",
      "C": "Falta total de água gelada",
      "D": "Falha exclusiva de sensor de fumaça"
    },
    "answer": "A",
    "explanation": "ΔP alto é coerente com baixa demanda hidráulica, válvulas mais fechadas e/ou setpoint de pressão acima do necessário."
  },
  {
    "question": "Se a válvula de água gelada está em 100% e o ambiente não cai, além da água disponível deve-se verificar:",
    "options": {
      "A": "Fluxo de ar, condição da serpentina e resposta da válvula",
      "B": "Somente a iluminação da sala",
      "C": "Apenas o relógio do CLP",
      "D": "Exclusivamente a umidade externa"
    },
    "answer": "A",
    "explanation": "Uma válvula totalmente aberta não garante capacidade. Também é preciso verificar se há fluxo de ar suficiente, serpentina limpa e a própria válvula realmente respondendo."
  },
  {
    "question": "Qual leitura é mais coerente para um alarme Dirty Filter ativo?",
    "options": {
      "A": "Redução de vazão de ar e perda de capacidade térmica",
      "B": "Aumento garantido da vazão de água gelada",
      "C": "Falha imediata do chiller",
      "D": "Comunicação perdida com o BMS"
    },
    "answer": "A",
    "explanation": "Filtro sujo aumenta a perda de carga no lado do ar, reduz o fluxo e prejudica a troca térmica do terminal."
  },
  {
    "question": "Em um sistema N+1, a perda do equipamento principal deve levar idealmente a:",
    "options": {
      "A": "Chamada da reserva, se estiver disponível e apta",
      "B": "Desligamento imediato de todos os terminais",
      "C": "Ignorar o evento por alguns minutos",
      "D": "Remover todos os alarmes"
    },
    "answer": "A",
    "explanation": "A filosofia N+1 existe para sustentar a operação essencial após a perda de um equipamento, desde que a reserva esteja disponível e os permissivos válidos."
  },
  {
    "question": "Quando apenas um fancoil apresenta alta umidade, a leitura inicial tende a ser:",
    "options": {
      "A": "Investigar primeiro o próprio terminal e sua condição local",
      "B": "Assumir imediatamente colapso total da CAG",
      "C": "Trocar o CLP da central",
      "D": "Ignorar porque a temperatura está normal"
    },
    "answer": "A",
    "explanation": "Falha isolada em um único terminal sugere começar pelo próprio fancoil: serpentina, válvula, drenagem, sensores, ventilação e controle local."
  },
  {
    "question": "Qual atitude é menos recomendada em troubleshooting?",
    "options": {
      "A": "Confirmar o alcance do problema",
      "B": "Cruzar alarmes com variáveis de processo",
      "C": "Alterar parâmetros sem evidência de causa",
      "D": "Validar modos manual/automático"
    },
    "answer": "C",
    "explanation": "Mexer em setpoints e parâmetros sem evidência tende a mascarar o problema, dificultar o diagnóstico e até criar novos desvios."
  },
  {
    "question": "Um alarme de alta temperatura em vários ambientes, acompanhado de água gelada mais quente, sugere mais fortemente:",
    "options": {
      "A": "Problema na produção ou distribuição de água gelada",
      "B": "Falha individual de todos os filtros ao mesmo tempo",
      "C": "Erro isolado do sensor de cada sala",
      "D": "Excesso de reheat em um único fancoil"
    },
    "answer": "A",
    "explanation": "A repetição do sintoma em diversos pontos e a evidência de água gelada mais quente apontam para a CAG ou sua distribuição, não para falhas locais isoladas."
  },
  {
    "question": "Em troubleshooting, justificativa técnica serve para:",
    "options": {
      "A": "Documentar e ensinar por que uma hipótese faz ou não sentido",
      "B": "Substituir medições de campo",
      "C": "Eliminar a necessidade de alarmes",
      "D": "Evitar qualquer interação com o BMS"
    },
    "answer": "A",
    "explanation": "Explicar a razão da resposta ajuda a consolidar raciocínio, documentar a intervenção e formar análise crítica, especialmente em treinamento."
  },
  {
    "question": "Ao receber um alarme de fancoil com aquecimento e baixa ventilação, a leitura mais madura é:",
    "options": {
      "A": "Analisar simultaneamente lado do ar, água gelada e comando local",
      "B": "Trocar imediatamente o sensor de umidade",
      "C": "Desligar toda a CAG sem medições",
      "D": "Assumir que sempre é falha do chiller"
    },
    "answer": "A",
    "explanation": "Problemas em fancoils de precisão costumam envolver interação entre fluxo de ar, água gelada, válvula e controle local. A análise madura considera o conjunto, e não uma única causa automática."
  }
],
  "eletrica01": [
  {
    "question": "Qual é a primeira postura correta antes de abrir ou medir um painel de equipamento HVAC?",
    "options": {
      "A": "Confirmar segurança, documentação, procedimento e instrumento adequado",
      "B": "Aumentar o setpoint para reduzir alarmes",
      "C": "Medir continuidade com o circuito energizado",
      "D": "Pular direto para troca do contator"
    },
    "answer": "A",
    "explanation": "Diagnóstico elétrico começa com controle do risco e confirmação do procedimento. Medição sem segurança pode causar acidente, dano ao instrumento ou parada indevida."
  },
  {
    "question": "Por que desligar o equipamento pelo controlador não é garantia de segurança elétrica?",
    "options": {
      "A": "Porque o controlador pode desligar lógica, mas não necessariamente isolar a potência interna",
      "B": "Porque o controlador sempre aumenta a tensão do painel",
      "C": "Porque motores deixam de ter fases após alguns minutos",
      "D": "Porque o BMS remove todos os riscos elétricos"
    },
    "answer": "A",
    "explanation": "Em equipamentos HVAC, alguns componentes podem continuar energizados mesmo com o controle em Off. O isolamento deve ser confirmado no ponto correto."
  },
  {
    "question": "Em um sistema trifásico, qual comparação ajuda a identificar falta de fase ou desequilíbrio?",
    "options": {
      "A": "L1-L2, L2-L3 e L1-L3",
      "B": "Apenas temperatura de insuflação",
      "C": "Continuidade entre fase e terra com circuito energizado",
      "D": "Pressão diferencial de água gelada"
    },
    "answer": "A",
    "explanation": "Comparar as três medições fase-fase permite identificar ausência de fase, mau contato, fusível aberto ou desequilíbrio."
  },
  {
    "question": "Qual instrumento é mais adequado para medir corrente de motor sem abrir o circuito?",
    "options": {
      "A": "Alicate amperímetro",
      "B": "Megômetro",
      "C": "Detector de tensão sem contato",
      "D": "Manômetro diferencial"
    },
    "answer": "A",
    "explanation": "O alicate amperímetro mede corrente pelo campo magnético ao redor do condutor, sem abrir o circuito. Deve-se medir apenas um condutor por vez."
  },
  {
    "question": "Quando é adequado medir continuidade ou resistência?",
    "options": {
      "A": "Com o circuito desenergizado, isolado e seguro",
      "B": "Com a carga em plena operação",
      "C": "Durante rampa de aceleração da soft-starter",
      "D": "Com tensão aplicada na bobina"
    },
    "answer": "A",
    "explanation": "Continuidade e resistência são medições para circuito sem energia. Fazer isso em circuito energizado é perigoso e pode danificar o instrumento."
  },
  {
    "question": "Qual é a principal função do circuito de comando?",
    "options": {
      "A": "Decidir quando a carga de potência pode ser energizada",
      "B": "Transportar toda a corrente de potência do motor",
      "C": "Substituir o aterramento do painel",
      "D": "Aumentar a vazão de água gelada"
    },
    "answer": "A",
    "explanation": "O comando reúne permissivos, bobinas, contatos auxiliares e intertravamentos para permitir ou bloquear a energização da carga."
  },
  {
    "question": "Se há tensão na entrada do contator, mas a carga não recebe tensão quando deveria operar, o que investigar primeiro?",
    "options": {
      "A": "Bobina, comando, proteção, intertravamento ou contator",
      "B": "Somente o filtro de ar",
      "C": "Apenas a umidade relativa da sala",
      "D": "Somente a pintura do painel"
    },
    "answer": "A",
    "explanation": "Entrada energizada e saída sem tensão sugerem que o caminho de potência não fechou ou que a lógica de comando/proteção bloqueou a partida."
  },
  {
    "question": "Em uma soft-starter, quais leituras são úteis para diagnóstico inicial?",
    "options": {
      "A": "Corrente do motor, frequência da rede, estado atual e erro atual/últimos erros",
      "B": "Temperatura externa e pressão de sala",
      "C": "Somente o horário do relógio",
      "D": "Apenas o nome do fabricante"
    },
    "answer": "A",
    "explanation": "Soft-starters costumam disponibilizar status, corrente, frequência e histórico/estado de erro, dados úteis para separar falha elétrica, carga e comando."
  },
  {
    "question": "Em uma resistência elétrica de reaquecimento sem aquecer, qual sequência é mais coerente?",
    "options": {
      "A": "Verificar comando, tensão na carga, proteções térmicas e continuidade com circuito isolado",
      "B": "Trocar o sensor de umidade antes de qualquer medição",
      "C": "Jumpear proteções térmicas permanentemente",
      "D": "Aumentar a rotação do ventilador sem medir nada"
    },
    "answer": "A",
    "explanation": "Resistências podem ter comando, alimentação, chaves térmicas e elementos abertos. A continuidade só deve ser medida com circuito isolado."
  },
  {
    "question": "Qual componente é usado para reduzir impacto mecânico e surto de corrente na partida de motor trifásico?",
    "options": {
      "A": "Soft-starter",
      "B": "Filtro de ar",
      "C": "Sifão de condensado",
      "D": "Sensor de umidade"
    },
    "answer": "A",
    "explanation": "A soft-starter controla a partida de motores de indução trifásicos, reduzindo choques mecânicos e surtos de corrente."
  },
  {
    "question": "O que significa uma fase-fase muito diferente das outras em um equipamento trifásico?",
    "options": {
      "A": "Possível fase ausente, fusível aberto, mau contato ou problema upstream",
      "B": "Operação perfeita garantida",
      "C": "Filtro limpo confirmado",
      "D": "Umidade baixa no ambiente"
    },
    "answer": "A",
    "explanation": "Leituras fase-fase discrepantes são indícios de problema de alimentação e devem ser investigadas antes de liberar a carga."
  },
  {
    "question": "Qual é o risco de usar detector de tensão sem contato como única confirmação?",
    "options": {
      "A": "Ele serve para triagem, mas não substitui medição confirmatória adequada",
      "B": "Ele sempre mede corrente em ampères",
      "C": "Ele substitui megômetro em motores",
      "D": "Ele corrige falha de fase automaticamente"
    },
    "answer": "A",
    "explanation": "Detectores sem contato podem ajudar na triagem, mas a confirmação técnica exige instrumento adequado e procedimento correto."
  },
  {
    "question": "Em diagnóstico de motor que não parte, por que separar potência e comando ajuda?",
    "options": {
      "A": "Porque mostra se falta energia na carga ou se a lógica está bloqueando a partida",
      "B": "Porque elimina a necessidade de medição",
      "C": "Porque transforma circuito trifásico em monofásico",
      "D": "Porque substitui o diagrama elétrico"
    },
    "answer": "A",
    "explanation": "Separar potência e comando ajuda a localizar se o problema está na alimentação, no elemento de manobra, na proteção, na bobina ou nos permissivos."
  },
  {
    "question": "Qual prática é correta ao medir corrente de motor com alicate amperímetro?",
    "options": {
      "A": "Abraçar apenas um condutor por vez",
      "B": "Abraçar as três fases juntas sempre",
      "C": "Medir nos terminais do sensor de temperatura",
      "D": "Usar escala de continuidade"
    },
    "answer": "A",
    "explanation": "O alicate deve envolver um único condutor para medir a corrente daquela fase. Envolver vários condutores pode cancelar campos e gerar leitura incorreta."
  },
  {
    "question": "Quando um equipamento possui ATS ou transferência automática, o que o técnico deve considerar?",
    "options": {
      "A": "Pode existir mais de uma fonte de alimentação e lógica de transferência a ser compreendida",
      "B": "Nunca existe tensão interna",
      "C": "O ATS elimina a necessidade de bloqueio",
      "D": "O equipamento passa a operar sem proteção"
    },
    "answer": "A",
    "explanation": "Em sistemas críticos, transferência automática pode envolver fontes distintas, sensoriamento de tensão e contatos auxiliares. O procedimento deve considerar todas as fontes."
  },
  {
    "question": "O terra de proteção deve ser tratado como:",
    "options": {
      "A": "Condutor de proteção, não substituto improvisado de neutro ou retorno de comando",
      "B": "Retorno universal de qualquer circuito",
      "C": "Fase auxiliar",
      "D": "Ponto para medir corrente do motor"
    },
    "answer": "A",
    "explanation": "PE é proteção. Usá-lo como retorno de comando ou neutro improvisado é prática incorreta e perigosa."
  },
  {
    "question": "Qual condição pode indicar sobrecarga ou travamento mecânico em motor?",
    "options": {
      "A": "Corrente acima do esperado",
      "B": "Filtro limpo",
      "C": "Baixa umidade",
      "D": "Tela do BMS em modo claro"
    },
    "answer": "A",
    "explanation": "Corrente alta pode refletir sobrecarga, travamento, baixa tensão, desbalanceamento ou problema mecânico na carga."
  },
  {
    "question": "Antes de usar megômetro em motor/cabos, é importante:",
    "options": {
      "A": "Isolar o circuito e proteger/desconectar eletrônicos conforme procedimento",
      "B": "Manter o VFD conectado sempre",
      "C": "Aplicar tensão de comando na bobina",
      "D": "Medir em paralelo com o BMS energizado"
    },
    "answer": "A",
    "explanation": "O megômetro aplica tensão de teste e pode danificar eletrônicos. Use apenas com circuito isolado e seguindo procedimento do fabricante/site."
  },
  {
    "question": "Em HVAC, por que o diagnóstico elétrico precisa considerar comando e automação?",
    "options": {
      "A": "Porque CLP, BMS, permissivos e intertravamentos podem impedir uma partida mesmo com potência disponível",
      "B": "Porque comandos não têm relação com partida",
      "C": "Porque sensores substituem disjuntores",
      "D": "Porque comunicação elimina falhas elétricas"
    },
    "answer": "A",
    "explanation": "Equipamentos HVAC críticos dependem de permissivos e intertravamentos. A potência pode estar presente e a partida ainda ser bloqueada pelo comando."
  },
  {
    "question": "Qual é a melhor conclusão para o Módulo E01?",
    "options": {
      "A": "Diagnóstico elétrico começa com segurança, separação potência/comando e medições coerentes",
      "B": "Todo defeito elétrico é resolvido trocando contator",
      "C": "Toda medição deve ser feita em continuidade",
      "D": "A tensão nominal dispensa leitura da placa"
    },
    "answer": "A",
    "explanation": "A base do diagnóstico é segurança, documentação, escolha correta do instrumento, separação de circuitos e interpretação das medições."
  }
],
  "eletrica02": [
  {
    "question": "Em um circuito de comando, a bobina do contator serve para:",
    "options": {
      "A": "Alimentar diretamente o motor",
      "B": "Acionar o mecanismo que fecha os contatos de potência",
      "C": "Medir corrente do circuito",
      "D": "Substituir o relé térmico"
    },
    "answer": "B",
    "explanation": "A bobina energizada movimenta o contator, fechando ou abrindo seus contatos principais e auxiliares."
  },
  {
    "question": "O contato de selo em um comando de partida existe para:",
    "options": {
      "A": "Reduzir a corrente do motor",
      "B": "Manter a bobina energizada após soltar o botão de START",
      "C": "Substituir o botão de STOP",
      "D": "Eliminar a necessidade de proteção"
    },
    "answer": "B",
    "explanation": "O selo usa um contato auxiliar do próprio contator para manter a bobina alimentada depois que o START momentâneo é solto."
  },
  {
    "question": "Se a bobina energiza, mas o motor não recebe potência, a hipótese inicial mais coerente é:",
    "options": {
      "A": "Falha no circuito de potência ou nos contatos principais",
      "B": "Sensor de umidade defeituoso",
      "C": "Erro exclusivo do BMS",
      "D": "A bobina está aberta"
    },
    "answer": "A",
    "explanation": "Se a bobina já energiza, o comando chegou. O próximo passo é investigar contatos principais, fusíveis e a linha de potência até a carga."
  },
  {
    "question": "Qual componente normalmente abre o comando em caso de sobrecarga do motor?",
    "options": {
      "A": "Contato auxiliar de selo",
      "B": "Relé térmico",
      "C": "Botoeira de start",
      "D": "Detector de tensão"
    },
    "answer": "B",
    "explanation": "O relé térmico protege o motor contra sobrecarga e costuma usar um contato NF em série com a bobina do contator."
  },
  {
    "question": "Em HVAC, um permissivo de fluxo serve para:",
    "options": {
      "A": "Aumentar a tensão de comando",
      "B": "Permitir partida apenas com condição hidráulica adequada",
      "C": "Substituir o contator",
      "D": "Eliminar o uso de pressostatos"
    },
    "answer": "B",
    "explanation": "Permissivos de fluxo impedem partidas sem vazão mínima, protegendo equipamentos como chillers, trocadores e bombas."
  },
  {
    "question": "Botoeira NF em série com a bobina geralmente cumpre papel de:",
    "options": {
      "A": "Parada / interrupção do comando",
      "B": "Aumento de corrente",
      "C": "Medição de frequência",
      "D": "Equalização de fases"
    },
    "answer": "A",
    "explanation": "O contato normalmente fechado interrompe o caminho da bobina quando é acionado, típico de um circuito de STOP."
  },
  {
    "question": "Se o equipamento parte e solta imediatamente após soltar o START, deve-se suspeitar primeiro de:",
    "options": {
      "A": "Contato de selo não fechando",
      "B": "Alicate amperímetro defeituoso",
      "C": "Tensão excessiva no painel",
      "D": "Medição errada de umidade"
    },
    "answer": "A",
    "explanation": "Quando o selo não se mantém, a bobina perde energia assim que o botão momentâneo de START é liberado."
  },
  {
    "question": "Em comandos elétricos, intertravamento é usado para:",
    "options": {
      "A": "Impedir condição insegura ou sequência indevida",
      "B": "Substituir qualquer medição",
      "C": "Aumentar a potência do circuito",
      "D": "Desligar o terra de proteção"
    },
    "answer": "A",
    "explanation": "Intertravamentos evitam que a lógica permita operação em condição insegura ou fora da sequência correta."
  },
  {
    "question": "Soft-starter em ready sem partir pode indicar primeiro:",
    "options": {
      "A": "Sinal de start/enable ausente ou permissivo não atendido",
      "B": "Curto garantido no motor",
      "C": "Apenas problema mecânico no rotor",
      "D": "Que a rede caiu totalmente"
    },
    "answer": "A",
    "explanation": "Se a soft-starter está pronta, mas não recebe comando efetivo, o diagnóstico deve começar pelo start/enable e pelos permissivos."
  },
  {
    "question": "Transformador de comando defeituoso pode causar:",
    "options": {
      "A": "Desaparecimento geral da tensão de comando",
      "B": "Aumento de vazão hidráulica",
      "C": "Queda de pressão diferencial",
      "D": "Correção automática do selo"
    },
    "answer": "A",
    "explanation": "Se o transformador que alimenta o comando falha, a lógica e as bobinas podem ficar sem tensão mesmo com potência no painel."
  },
  {
    "question": "Contatos auxiliares são comumente usados para:",
    "options": {
      "A": "Selo, feedback e intertravamentos",
      "B": "Apenas medição de corrente",
      "C": "Substituir disjuntores",
      "D": "Resfriar o painel"
    },
    "answer": "A",
    "explanation": "Contatos auxiliares participam de retenção, indicação de estado, sequenciamento e intertravamento."
  },
  {
    "question": "A melhor conclusão do módulo E02 é:",
    "options": {
      "A": "Comando elétrico é um caminho lógico que deve ser seguido ponto a ponto",
      "B": "Todo defeito de partida é falta de motor",
      "C": "Não é necessário medir bobinas",
      "D": "Intertravamentos podem ser ignorados"
    },
    "answer": "A",
    "explanation": "O diagnóstico de comando depende de seguir o caminho elétrico até localizar onde a cadeia de autorização foi interrompida."
  }
],
  "eletrica03": [
  {
    "question": "Para medir corrente de um motor com alicate amperímetro, deve-se:",
    "options": {
      "A": "Abraçar os três condutores ao mesmo tempo",
      "B": "Medir um condutor por vez",
      "C": "Usar apenas em circuito desligado",
      "D": "Encostar nas partes metálicas do painel"
    },
    "answer": "B",
    "explanation": "O alicate mede o campo magnético de um único condutor. Abraçar mais de um condutor pode cancelar ou distorcer a leitura."
  },
  {
    "question": "Continuidade e resistência devem ser medidas com:",
    "options": {
      "A": "Circuito energizado",
      "B": "Circuito desenergizado e isolado",
      "C": "Motor em plena carga",
      "D": "Apenas com alicate amperímetro"
    },
    "answer": "B",
    "explanation": "Essas funções do multímetro não devem ser usadas em circuito energizado, sob risco de dano ao instrumento e leitura incorreta."
  },
  {
    "question": "O instrumento mais adequado para avaliação de isolamento é:",
    "options": {
      "A": "Detector de tensão",
      "B": "Megômetro",
      "C": "Relé térmico",
      "D": "Botoeira NA"
    },
    "answer": "B",
    "explanation": "O megômetro é específico para teste de isolamento, desde que o circuito esteja preparado e autorizado para esse ensaio."
  },
  {
    "question": "Se há tensão na entrada de um dispositivo e não há na saída, a hipótese inicial mais lógica é:",
    "options": {
      "A": "Dispositivo aberto, desarmado ou falhado",
      "B": "Sempre defeito do motor",
      "C": "Curto garantido na serpentina",
      "D": "Erro de umidade"
    },
    "answer": "A",
    "explanation": "Comparar entrada e saída ajuda a localizar exatamente onde a energia deixa de prosseguir no circuito."
  },
  {
    "question": "O detector de tensão serve melhor para:",
    "options": {
      "A": "Triagem rápida de presença de tensão",
      "B": "Substituir todas as medições com multímetro",
      "C": "Medir corrente de motor",
      "D": "Testar isolamento profundo"
    },
    "answer": "A",
    "explanation": "Ele é útil para triagem, mas não substitui a medição formal e confiável com instrumento adequado."
  },
  {
    "question": "Ao medir tensão DC em fonte eletrônica, deve-se observar:",
    "options": {
      "A": "Polaridade e faixa adequada",
      "B": "Somente a cor do cabo",
      "C": "A posição do relé térmico",
      "D": "A temperatura externa"
    },
    "answer": "A",
    "explanation": "Em medições DC, a polaridade é relevante e precisa ser respeitada, além da escala correta do instrumento."
  },
  {
    "question": "Corrente muito diferente entre fases de um motor pode indicar:",
    "options": {
      "A": "Desequilíbrio, perda parcial de fase ou condição anormal da carga",
      "B": "Operação perfeita",
      "C": "Que o termostato está bom",
      "D": "Que o terra está substituindo o neutro"
    },
    "answer": "A",
    "explanation": "A comparação entre fases ajuda a detectar desequilíbrios elétricos e problemas mecânicos refletidos na corrente."
  },
  {
    "question": "Megômetro não deve ser aplicado indiscriminadamente em:",
    "options": {
      "A": "Placas eletrônicas e VFDs conectados",
      "B": "Cabos isolados preparados para o ensaio",
      "C": "Motores adequadamente isolados para teste",
      "D": "Circuitos autorizados pelo procedimento"
    },
    "answer": "A",
    "explanation": "A alta tensão do ensaio pode danificar eletrônicos. O circuito precisa ser preparado conforme o procedimento antes do teste."
  },
  {
    "question": "Se a bobina do contator está sem tensão, o primeiro foco de medição com multímetro deve ser:",
    "options": {
      "A": "O circuito de comando e permissivos",
      "B": "A umidade da sala",
      "C": "A vibração da bomba",
      "D": "O filtro do fan coil"
    },
    "answer": "A",
    "explanation": "Ausência de tensão na bobina aponta primeiro para interrupção no caminho do comando, não diretamente para a carga."
  },
  {
    "question": "Qual par combina corretamente instrumento e uso?",
    "options": {
      "A": "Alicate amperímetro — corrente; multímetro — tensão/resistência",
      "B": "Megômetro — corrente; alicate — isolamento",
      "C": "Detector — potência; multímetro — vazão",
      "D": "Relé térmico — continuidade"
    },
    "answer": "A",
    "explanation": "Esse é o pareamento mais básico e correto entre instrumento e aplicação."
  },
  {
    "question": "O melhor resumo do módulo E03 é:",
    "options": {
      "A": "Instrumento, ponto de medição e interpretação formam uma tríade inseparável",
      "B": "Basta medir qualquer valor para diagnosticar",
      "C": "O megômetro serve para tudo",
      "D": "O alicate substitui o multímetro em todas as funções"
    },
    "answer": "A",
    "explanation": "A qualidade do diagnóstico depende da combinação correta entre instrumento, local de medição e interpretação técnica."
  }
],
  "eletrica04": [
  {
    "question": "Qual é a sequência mais coerente de troubleshooting elétrico?",
    "options": {
      "A": "Trocar componente, depois medir",
      "B": "Sintoma → potência → comando → carga → proteção/causa",
      "C": "Mudar setpoint primeiro",
      "D": "Ignorar o histórico do alarme"
    },
    "answer": "B",
    "explanation": "Essa sequência organiza o raciocínio e evita intervenções precipitadas sem evidência."
  },
  {
    "question": "Se a potência está presente no painel, mas a bobina do contator está sem tensão, a hipótese inicial mais lógica é:",
    "options": {
      "A": "Interrupção no comando ou permissivo aberto",
      "B": "Falha garantida do motor",
      "C": "Curto imediato no compressor",
      "D": "Erro de psicrometria"
    },
    "answer": "A",
    "explanation": "Sem tensão na bobina, o problema tende a estar no caminho de comando, não na carga em si."
  },
  {
    "question": "Corrente muito menor em uma das fases de um motor, acompanhada de aquecimento, sugere primeiro:",
    "options": {
      "A": "Perda parcial de fase ou mau contato em uma perna do circuito",
      "B": "Operação ideal",
      "C": "Apenas erro do pressostato",
      "D": "Exclusivamente alta umidade"
    },
    "answer": "A",
    "explanation": "Corrente desequilibrada com aquecimento é indício clássico de problema de alimentação parcial ou defeito associado à carga."
  },
  {
    "question": "Soft-starter em falha deve levar o técnico a verificar:",
    "options": {
      "A": "Status, último erro, alimentação e corrente do motor",
      "B": "Somente a temperatura externa",
      "C": "Apenas o BMS",
      "D": "Somente o fusível de iluminação"
    },
    "answer": "A",
    "explanation": "Soft-starters fornecem informações valiosas de estado e proteção. A leitura do erro e das grandezas elétricas é central no diagnóstico."
  },
  {
    "question": "Em um EC fan parado, uma abordagem coerente é:",
    "options": {
      "A": "Separar alimentação, enable, feedback e alarme do drive",
      "B": "Trocar o CLP de imediato",
      "C": "Ignorar o status interno do ventilador",
      "D": "Medir isolamento em placa sem procedimento"
    },
    "answer": "A",
    "explanation": "Ventiladores EC combinam alimentação, eletrônica integrada, comando e feedback. O diagnóstico deve respeitar essas camadas."
  },
  {
    "question": "Se uma resistência de reheat recebe comando, mas não aquece, deve-se verificar primeiro:",
    "options": {
      "A": "Tensão na carga, limites térmicos e continuidade do elemento isolado",
      "B": "A psicrometria do ambiente apenas",
      "C": "Somente a tela do BMS",
      "D": "A bomba de água gelada"
    },
    "answer": "A",
    "explanation": "É preciso confirmar se a energia realmente chega ao elemento e se as proteções térmicas ou o próprio elemento estão íntegros."
  },
  {
    "question": "ATS sem transferir não significa automaticamente defeito mecânico porque:",
    "options": {
      "A": "A lógica depende de sensoriamento de fontes, permissivos e temporizações",
      "B": "Todo ATS é puramente manual",
      "C": "ATS não usa sinais elétricos",
      "D": "A transferência sempre ocorre instantaneamente"
    },
    "answer": "A",
    "explanation": "Esses equipamentos monitoram tensão, condições de fonte e lógicas internas antes de transferir a carga."
  },
  {
    "question": "Relé térmico desarmado deve ser interpretado inicialmente como:",
    "options": {
      "A": "Evidência de sobrecarga, travamento ou ajuste inadequado",
      "B": "Prova de defeito no sensor de umidade",
      "C": "Falha definitiva do motor sem medir corrente",
      "D": "Que a bobina do contator está perfeita"
    },
    "answer": "A",
    "explanation": "O relé térmico atua por sobrecarga percebida; o técnico precisa investigar a causa antes de simplesmente resetar."
  },
  {
    "question": "Quando vários níveis de sistema se misturam em HVAC, o diagnóstico precisa considerar:",
    "options": {
      "A": "Potência, comando, automação e resposta da carga",
      "B": "Apenas a tensão nominal",
      "C": "Somente a parte mecânica",
      "D": "Exclusivamente o operador"
    },
    "answer": "A",
    "explanation": "Equipamentos HVAC unem circuitos elétricos, lógica de controle e resposta física. O diagnóstico maduro integra essas camadas."
  },
  {
    "question": "A melhor postura diante de um defeito recorrente é:",
    "options": {
      "A": "Documentar medições, sintomas e hipóteses para fechar causa raiz",
      "B": "Trocar componentes aleatoriamente",
      "C": "Resetar sem registro",
      "D": "Ignorar as proteções"
    },
    "answer": "A",
    "explanation": "Troubleshooting profissional depende de evidências documentadas e aprendizado com o histórico do problema."
  },
  {
    "question": "O melhor fechamento para a trilha elétrica é:",
    "options": {
      "A": "Segurança, método e medição coerente formam a base do diagnóstico elétrico HVAC",
      "B": "Toda falha elétrica é igual",
      "C": "Sempre basta olhar a placa",
      "D": "Não é preciso seguir sequência lógica"
    },
    "answer": "A",
    "explanation": "A trilha foi construída justamente para formar base, comando, medição e método antes da ferramenta de diagnóstico elétrico."
  }
]
};
let activeQuizState = {};

document.addEventListener('DOMContentLoaded', initializeAcademy);

function initializeAcademy() {
  initializeTheme();
  initializeShellButtons();
  updateProgress();

  if (window.EBMAuth && window.EBMAuth.isConfigured()) {
    setAuthMessage('Verificando sessão...', 'info');
    window.EBMAuth.init(
      async function(user) {
        updateAuthenticatedUserLabels(user);
        if (window.EBMCloudSync) {
          await window.EBMCloudSync.connect(user);
        }
        showPortal();
      },
      function() {
        updateAuthenticatedUserLabels(null);
        if (window.EBMCloudSync) {
          window.EBMCloudSync.disconnect({ clearLocalProgress: true });
        }
        showLogin();
      }
    );
  } else {
    updateAuthenticatedUserLabels(null);
    showLogin();
    showFirebaseConfigNotice();
  }
}
function showLogin() { document.getElementById('login-screen')?.classList.remove('hidden'); document.getElementById('portal-shell')?.classList.add('hidden'); document.getElementById('training-shell')?.classList.add('hidden'); }
function showPortal() { document.getElementById('login-screen')?.classList.add('hidden'); document.getElementById('portal-shell')?.classList.remove('hidden'); document.getElementById('training-shell')?.classList.add('hidden'); loadPortalPage('portal-home'); }
function getCurrentTrackModules() { return (TRACK_DEFINITIONS[currentTrainingTrack] || HVAC_TRACK_MODULES).filter(mid => moduleConfig[mid]); }
function renderTrainingMenu(track='hvac') {
  const title = document.querySelector('.sidebar h2');
  const menu = document.querySelector('.menu');
  const topTitle = document.querySelector('.topbar-left h2');
  if(!menu) return;
  if(track === 'eletrica') {
    if(title) title.textContent = 'TRILHA ELÉTRICA APLICADA A HVAC';
    if(topTitle) topTitle.textContent = 'EBM Academy • Elétrica';
    menu.innerHTML = `
      <a href="#" data-page="eletrica-home" class="active"><i class="fa-solid fa-bolt"></i><span>Home Elétrica</span></a>
      <a href="#" data-page="eletrica01"><i class="fa-solid fa-plug-circle-bolt"></i><span>E01 • Fundamentos</span></a>
      <a href="#" data-page="eletrica02"><i class="fa-solid fa-diagram-project"></i><span>E02 • Comandos</span></a>
      <a href="#" data-page="eletrica03"><i class="fa-solid fa-gauge-high"></i><span>E03 • Instrumentos</span></a>
      <a href="#" data-page="eletrica04"><i class="fa-solid fa-stethoscope"></i><span>E04 • Diagnóstico</span></a>
      <a href="#" data-page="eletrica-diagnostic-tool"><i class="fa-solid fa-toolbox"></i><span>Ferramenta</span></a>
      <a href="#" data-page="eletrica-final-assessment"><i class="fa-solid fa-medal"></i><span>Avaliação Final</span></a>
    `;
  } else {
    if(title) title.textContent = 'TRILHA HVAC CRÍTICO';
    if(topTitle) topTitle.textContent = 'EBM Academy • HVAC Crítico';
    menu.innerHTML = `
      <a href="#" data-page="training-home" class="active"><i class="fa-solid fa-graduation-cap"></i><span>Home Treinamento</span></a>
      <a href="#" data-page="modulo01"><i class="fa-solid fa-snowflake"></i><span>Ciclo Frigorífico</span></a>
      <a href="#" data-page="modulo02"><i class="fa-solid fa-temperature-high"></i><span>SH & SC</span></a>
      <a href="#" data-page="modulo03"><i class="fa-solid fa-wind"></i><span>Psicrometria</span></a>
      <a href="#" data-page="modulo04"><i class="fa-solid fa-box"></i><span>Self Contained DX</span></a>
      <a href="#" data-page="modulo05"><i class="fa-solid fa-microchip"></i><span>Selfs de Precisão</span></a>
      <a href="#" data-page="modulo06"><i class="fa-solid fa-fan"></i><span>Fancoils de Precisão</span></a>
      <a href="#" data-page="modulo07"><i class="fa-solid fa-water"></i><span>Central Água Gelada</span></a>
      <a href="#" data-page="modulo08"><i class="fa-solid fa-circle-nodes"></i><span>Bombas e Válvulas</span></a>
      <a href="#" data-page="modulo09"><i class="fa-solid fa-sitemap"></i><span>Automação e BMS</span></a>
      <a href="#" data-page="modulo10"><i class="fa-solid fa-screwdriver-wrench"></i><span>Alarmes e Troubleshooting</span></a>
      <a href="#" data-page="tools"><i class="fa-solid fa-toolbox"></i><span>Ferramentas HVAC</span></a>
      <a href="#" data-page="hvac-final-assessment"><i class="fa-solid fa-award"></i><span>Avaliação Final</span></a>
    `;
  }
  bindTrainingMenuClicks();
  if(window.EBMGamificationCore && window.EBMGamificationCore.renderAllGamificationUi) window.EBMGamificationCore.renderAllGamificationUi();
}
function bindTrainingMenuClicks() { document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',(e)=>{e.preventDefault(); loadTrainingPage(a.dataset.page);})); }
function openTrainingTrack(track='hvac', page) {
  currentTrainingTrack = track === 'eletrica' ? 'eletrica' : 'hvac';
  window.EBM_CURRENT_TRACK = currentTrainingTrack;
  renderTrainingMenu(currentTrainingTrack);
  document.getElementById('login-screen')?.classList.add('hidden');
  document.getElementById('portal-shell')?.classList.add('hidden');
  document.getElementById('training-shell')?.classList.remove('hidden');
  loadTrainingPage(page || (currentTrainingTrack === 'eletrica' ? 'eletrica-home' : 'training-home'));
}
function openTraining(page='training-home') { openTrainingTrack('hvac', page); }
function openElectricalTraining(page='eletrica-home') { openTrainingTrack('eletrica', page); }
function initializeShellButtons() {
  document.getElementById('login-button')?.addEventListener('click', handleLogin);
  document.getElementById('register-button')?.addEventListener('click', handleRegister);
  document.getElementById('reset-password-button')?.addEventListener('click', handlePasswordReset);
  document.getElementById('auth-password')?.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') handleLogin();
  });

  document.getElementById('logout-button')?.addEventListener('click', handleLogout);
  document.getElementById('back-portal-button')?.addEventListener('click',()=>showPortal());
  bindTrainingMenuClicks();
}
async function loadPortalPage(page) {
  const container = document.getElementById('portal-content'); if (!container) return;
  try { const res = await fetch(`modules/${page}.html`); if(!res.ok) throw new Error(page); container.innerHTML = await res.text(); initializePageFeatures(page); }
  catch(e) { container.innerHTML = `<section class="section"><div class="card"><h3>Erro</h3><p>Não foi possível carregar: ${page}</p></div></section>`; }
}
async function loadTrainingPage(page) {
  const container = document.getElementById('app-content'); if (!container) return;
  try { const res = await fetch(`modules/${page}.html`); if(!res.ok) throw new Error(page); container.innerHTML = await res.text(); setActiveMenu(page.split('/')[0]); initializePageFeatures(page); }
  catch(e) { container.innerHTML = `<section class="section"><div class="card"><h3>Erro</h3><p>Não foi possível carregar: ${page}</p></div></section>`; }
}
function loadPage(page) { loadTrainingPage(page); }
function setActiveMenu(base) { const normalized = ['hvac-diagnostic-dx','hvac-diagnostic-cag','hvac-diagnostic-precision'].includes(base) ? 'tools' : base; document.querySelectorAll('.menu a').forEach(a=>{ a.classList.toggle('active', a.dataset.page === normalized); }); }
function getModuleId(page) { const m = String(page).match(/(?:modulo|eletrica)\d{2}/); return m ? m[0] : null; }

function initializeTheme() {
  if(localStorage.getItem('academyTheme')==='light') document.body.classList.add('light-mode'); else document.body.classList.remove('light-mode');
  updateThemeButtons();
  ['portal-theme-toggle','training-theme-toggle'].forEach(id=>{ const b=document.getElementById(id); if(!b) return; b.addEventListener('click',()=>{ document.body.classList.toggle('light-mode'); localStorage.setItem('academyTheme', document.body.classList.contains('light-mode')?'light':'dark'); updateThemeButtons(); }); });
}
function updateThemeButtons() { const isLight=document.body.classList.contains('light-mode'); ['portal-theme-toggle','training-theme-toggle'].forEach(id=>{ const b=document.getElementById(id); if(b) b.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i><span>Modo Escuro</span>' : '<i class="fa-solid fa-sun"></i><span>Modo Claro</span>'; }); }

function setAuthMessage(message, type='info') {
  const el = document.getElementById('auth-message');
  if(!el) return;
  el.classList.remove('hidden','success','danger','info');
  el.classList.add(type);
  el.textContent = message;
}

function clearAuthMessage() {
  const el = document.getElementById('auth-message');
  if(!el) return;
  el.classList.add('hidden');
  el.textContent = '';
}

function showFirebaseConfigNotice() {
  document.getElementById('firebase-config-alert')?.classList.remove('hidden');
  setAuthMessage('Preencha o arquivo js/firebase-config.js para ativar o login real.', 'info');
  const login = document.getElementById('login-button');
  const register = document.getElementById('register-button');
  const reset = document.getElementById('reset-password-button');
  [login, register, reset].forEach(btn => {
    if(btn) btn.disabled = true;
  });
}

function updateAuthenticatedUserLabels(user) {
  const email = user && user.email ? user.email : '';
  ['portal-user-label','training-user-label'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = email ? email : '';
  });
}

function getAuthFormValues() {
  return {
    email: (document.getElementById('auth-email')?.value || '').trim(),
    password: document.getElementById('auth-password')?.value || ''
  };
}

function validateAuthInputs(requirePassword=true) {
  const { email, password } = getAuthFormValues();
  if(!email) {
    setAuthMessage('Digite seu e-mail.', 'danger');
    return null;
  }
  if(requirePassword && !password) {
    setAuthMessage('Digite sua senha.', 'danger');
    return null;
  }
  return { email, password };
}

async function handleLogin() {
  if(!window.EBMAuth || !window.EBMAuth.isConfigured()) {
    showFirebaseConfigNotice();
    return;
  }
  const values = validateAuthInputs(true);
  if(!values) return;

  try {
    setAuthMessage('Entrando...', 'info');
    await window.EBMAuth.signIn(values.email, values.password);
    clearAuthMessage();
  } catch(error) {
    setAuthMessage(window.EBMAuth.errorMessage(error), 'danger');
  }
}

async function handleRegister() {
  if(!window.EBMAuth || !window.EBMAuth.isConfigured()) {
    showFirebaseConfigNotice();
    return;
  }
  const values = validateAuthInputs(true);
  if(!values) return;

  try {
    setAuthMessage('Criando conta...', 'info');
    await window.EBMAuth.register(values.email, values.password);
    setAuthMessage('Conta criada com sucesso. Acessando a plataforma...', 'success');
  } catch(error) {
    setAuthMessage(window.EBMAuth.errorMessage(error), 'danger');
  }
}

async function handlePasswordReset() {
  if(!window.EBMAuth || !window.EBMAuth.isConfigured()) {
    showFirebaseConfigNotice();
    return;
  }
  const values = validateAuthInputs(false);
  if(!values) return;

  try {
    setAuthMessage('Enviando e-mail de recuperação...', 'info');
    await window.EBMAuth.resetPassword(values.email);
    setAuthMessage('E-mail de recuperação enviado. Verifique sua caixa de entrada.', 'success');
  } catch(error) {
    setAuthMessage(window.EBMAuth.errorMessage(error), 'danger');
  }
}

async function handleLogout() {
  try {
    if(window.EBMAuth && window.EBMAuth.isConfigured()) {
      await window.EBMAuth.signOut();
    } else {
      localStorage.setItem('academyLoggedIn','false');
      showLogin();
    }
  } catch(error) {
    console.warn('Erro ao sair:', error);
    localStorage.setItem('academyLoggedIn','false');
    showLogin();
  }
}

function initializePageFeatures(page) {
  initializeModuleNavAutoHide();
  initializeBackToTop();
  initializeRefrigerationTools();

  if (page === 'eletrica-diagnostic-tool') {
    initializeElectricalDiagnosticTool();
    return;
  }
  if (page === 'hvac-diagnostic-dx') {
    initializeHvacDxDiagnosticTool();
    return;
  }
  if (page === 'hvac-diagnostic-cag') {
    initializeHvacCagDiagnosticTool();
    return;
  }
  if (page === 'hvac-diagnostic-precision') {
    initializeHvacPrecisionDiagnosticTool();
    return;
  }
  if (page === 'hvac-final-assessment') {
    initializeFinalAssessment('hvac');
    return;
  }
  if (page === 'eletrica-final-assessment') {
    initializeFinalAssessment('eletrica');
    return;
  }

  const mid = getModuleId(page);

  if (!mid || !moduleConfig[mid]) {
    return;
  }

  if (String(page).endsWith('/quiz')) {
    initializeRandomQuiz(mid);
    initializeCompletion(mid);
    restoreCertificate(mid);
  } else {
    initializeChecklist(mid);
    initializeQuizButton(mid);
  }

  if (page === 'modulo01') {
    initializeModule01CycleAnimation();
  }

  if (page === 'modulo07') {
    initializeModule07ChwCalculator();
  }

  if (page === 'modulo08') {
    initializeModule08HydraulicSimulator();
  }

  if (page === 'modulo09') {
    initializeModule09ManualAutoSimulator();
  }

  if (page === 'modulo10') {
    initializeModule10TroubleshootingCases();
  }

  if (page === 'eletrica04') {
    initializeElectrical04Cases();
  }
}

function initializeChecklist(mid) {
  const cfg = moduleConfig[mid];
  const checks = document.querySelectorAll(`.${cfg.checkClass}`);
  const status = document.getElementById(cfg.status);
  const btn = document.getElementById(cfg.go);
  if(!checks.length || !status || !btn) return;
  const done = localStorage.getItem(cfg.checkKey)==='true';
  checks.forEach(c=>c.checked=done);
  done ? unlockChecklist(status,btn) : lockChecklist(status,btn);
  checks.forEach(c=>c.addEventListener('change',()=>{ const all = Array.from(checks).every(x=>x.checked); localStorage.setItem(cfg.checkKey, all?'true':'false'); all ? unlockChecklist(status,btn) : lockChecklist(status,btn); }));
}
function unlockChecklist(status,btn) { status.innerHTML='Checklist concluído. Avaliação liberada.'; status.classList.add('approved'); btn.disabled=false; btn.classList.remove('btn-disabled'); }
function lockChecklist(status,btn) { status.innerHTML='Conclua o checklist para liberar a avaliação.'; status.classList.remove('approved'); btn.disabled=true; btn.classList.add('btn-disabled'); }
function initializeQuizButton(mid) { const cfg=moduleConfig[mid]; const btn=document.getElementById(cfg.go); if(!btn) return; btn.addEventListener('click',()=>{ if(localStorage.getItem(cfg.checkKey)!=='true') { alert('Conclua o checklist de aprendizagem antes de acessar a avaliação.'); return; } loadTrainingPage(`${mid}/quiz`); }); }

function initializeRandomQuiz(mid) {
  const cfg = moduleConfig[mid];
  const form=document.getElementById(cfg.form), submit=document.getElementById(cfg.submit), retry=document.getElementById(cfg.retry);
  if(!form || !submit || !retry) return;
  form.addEventListener('submit',e=>e.preventDefault());
  generateRandomQuiz(mid);
  submit.addEventListener('click',()=>processRandomQuiz(mid));
  retry.addEventListener('click',()=>resetRandomQuiz(mid));
}
function generateRandomQuiz(mid) {
  const cfg=moduleConfig[mid]; const box=document.getElementById(cfg.questions); const bank=quizBanks[mid]; if(!box || !bank) return;
  activeQuizState[mid] = shuffle(bank).slice(0,5).map(q=>{
    const labels=['A','B','C','D'];
    const opts = Object.keys(q.options).map(k=>({text:q.options[k], isCorrect:k===q.answer}));
    const randomized = shuffle(opts).map((o,i)=>({label:labels[i], text:o.text, isCorrect:o.isCorrect}));
    return {question:q.question, options:randomized, correctAnswer:randomized.find(o=>o.isCorrect).label, explanation:q.explanation || ''};
  });
  box.innerHTML = activeQuizState[mid].map((item,index)=>{ const n=index+1; return `<div class="card quiz-question" data-qindex="${index}"><h3>${n}. ${item.question}</h3>${item.options.map(o=>`<label><input type="radio" name="q${n}" value="${o.label}"><strong>${o.label})</strong> ${o.text}</label>`).join('')}</div>`; }).join('');
}
function processRandomQuiz(mid) {
  const cfg=moduleConfig[mid], result=document.getElementById(cfg.result), complete=document.getElementById(cfg.complete), qs=activeQuizState[mid]||[]; if(!result || !qs.length) return;
  let score=0, unanswered=[];
  document.querySelectorAll('.quiz-inline-feedback').forEach(el=>el.remove());
  qs.forEach((item,index)=>{
    const n=index+1;
    const selected=document.querySelector(`input[name="q${n}"]:checked`);
    if(!selected) { unanswered.push(n); return; }
    if(selected.value===item.correctAnswer) {
      score++;
    } else if(item.explanation) {
      const card = document.querySelector(`.quiz-question[data-qindex="${index}"]`);
      if(card) {
        const fb=document.createElement('div');
        fb.className='quiz-inline-feedback';
        fb.innerHTML=`<h4>Justificativa</h4><p>${item.explanation}</p>`;
        card.appendChild(fb);
      }
    }
  });
  if(unanswered.length) { result.innerHTML='<div class="result-card warning"><h3>Avaliação incompleta</h3><p>Responda todas as 5 perguntas antes de enviar.</p></div>'; return; }
  if(score>=3) { localStorage.setItem(cfg.approvedKey,'true'); result.innerHTML=`<div class="result-card success"><h3>Aprovado</h3><p>Você acertou ${score} de 5 perguntas.</p><p>Critério mínimo atendido: 3 acertos.</p><p>Agora o botão de conclusão do módulo está liberado.</p></div>`; if(complete) { complete.disabled=false; complete.classList.remove('btn-disabled'); } }
  else { localStorage.setItem(cfg.approvedKey,'false'); result.innerHTML=`<div class="result-card danger"><h3>Revisão necessária</h3><p>Você acertou ${score} de 5 perguntas.</p><p>Para concluir o módulo, é necessário acertar pelo menos 3 perguntas.</p><p>Leia as justificativas exibidas abaixo das respostas incorretas e clique em "Refazer respostas" para uma nova tentativa.</p></div>`; if(complete) { complete.disabled=true; complete.classList.add('btn-disabled'); } }
}
function resetRandomQuiz(mid) { const cfg=moduleConfig[mid]; const form=document.getElementById(cfg.form), result=document.getElementById(cfg.result), complete=document.getElementById(cfg.complete); if(form) form.reset(); if(result) result.innerHTML=''; localStorage.setItem(cfg.approvedKey,'false'); if(complete) { complete.disabled=true; complete.classList.add('btn-disabled'); } generateRandomQuiz(mid); }
function shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

function initializeCompletion(mid) {
  const cfg=moduleConfig[mid], btn=document.getElementById(cfg.complete); if(!btn) return;
  const approved=localStorage.getItem(cfg.approvedKey)==='true'; btn.disabled=!approved; btn.classList.toggle('btn-disabled', !approved);
  btn.addEventListener('click',()=>{ if(localStorage.getItem(cfg.approvedKey)!=='true') { alert('Para concluir o módulo, é necessário ser aprovado no quiz.'); return; } const completed=getCompletedModules(); if(!completed.includes(mid)) { completed.push(mid); localStorage.setItem('completedModules',JSON.stringify(completed)); } btn.innerHTML='Módulo concluído'; btn.disabled=true; btn.classList.add('btn-disabled'); updateProgress(); showCertificate(mid); });
}
function getCompletedModules() { try { return JSON.parse(localStorage.getItem('completedModules')) || []; } catch(e) { return []; } }
function updateProgress() { const modules=getCurrentTrackModules ? getCurrentTrackModules() : TRACK_MODULES; const completed=getCompletedModules().filter(m=>modules.includes(m)); const pct=modules.length ? Math.round((completed.length/modules.length)*100) : 0; document.querySelectorAll('.progress-fill').forEach(b=>b.style.width=`${pct}%`); document.querySelectorAll('.progress-text').forEach(t=>t.innerHTML=`${pct}% concluído`); }
function showCertificate(mid) { const cert=document.getElementById(moduleConfig[mid].cert); if(cert) { cert.classList.remove('hidden'); cert.scrollIntoView({behavior:'smooth',block:'center'}); } }
function restoreCertificate(mid) { if(getCompletedModules().includes(mid)) showCertificate(mid); }

function initializeRefrigerationTools() {
  const calc=document.getElementById('calculate-sh-sc') || document.getElementById('calc-btn'); if(!calc || calc.dataset.bound==='true') return; calc.dataset.bound='true';
  const diagnostic=document.getElementById('tool-diagnostic') || document.getElementById('calc-diagnostic');
  calc.addEventListener('click',()=>{
    const shLine=parseFloat(document.getElementById('sh-line-temp')?.value), shSat=parseFloat(document.getElementById('sh-sat-temp')?.value), scSat=parseFloat(document.getElementById('sc-sat-temp')?.value), scLine=parseFloat(document.getElementById('sc-line-temp')?.value);
    const shR=document.getElementById('sh-result'), scR=document.getElementById('sc-result'); let msgs=[];
    if(!isNaN(shLine) && !isNaN(shSat)) { const sh=shLine-shSat; if(shR) shR.innerHTML=sh.toFixed(1)+' K'; msgs.push(sh<5?'Superheat baixo: atenção para retorno líquido.':sh>14?'Superheat alto: possível baixa alimentação do evaporador.':'Superheat em faixa intermediária didática.'); }
    if(!isNaN(scSat) && !isNaN(scLine)) { const sc=scSat-scLine; if(scR) scR.innerHTML=sc.toFixed(1)+' K'; msgs.push(sc<3?'Subcooling baixo: possível instabilidade na linha de líquido.':sc>12?'Subcooling alto: possível excesso ou restrição.':'Subcooling em faixa intermediária didática.'); }
    if(diagnostic) diagnostic.innerHTML=msgs.map(m=>`<p>${m}</p>`).join('') || 'Preencha os campos para calcular.';
  });
  const reset=document.getElementById('reset-sh-sc'); if(reset) reset.addEventListener('click',()=>{ ['sh-line-temp','sh-sat-temp','sc-sat-temp','sc-line-temp'].forEach(id=>{const el=document.getElementById(id); if(el) el.value='';}); ['sh-result','sc-result'].forEach(id=>{const el=document.getElementById(id); if(el) el.innerHTML='--';}); if(diagnostic) diagnostic.innerHTML='Preencha os campos e clique em calcular.'; });
}
function initializeModuleNavAutoHide() { const nav=document.querySelector('.module-nav'); if(!nav) return; window.onscroll=()=>{ if(window.scrollY>120) nav.classList.add('nav-hidden'); else nav.classList.remove('nav-hidden'); }; }
function initializeBackToTop() { const btn=document.getElementById('back-to-top'); if(!btn) return; window.addEventListener('scroll',()=>{ if(window.scrollY>500) btn.classList.add('visible'); else btn.classList.remove('visible'); }); btn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'})); }

function initializeModule07ChwCalculator() {
  const btn = document.getElementById('m7-calc-btn');
  if(!btn || btn.dataset.bound === 'true') return;
  btn.dataset.bound = 'true';

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if(el) el.textContent = value;
  };

  const diagnose = (message) => {
    const el = document.getElementById('m7-calc-diagnostic');
    if(el) el.innerHTML = `<h4>Interpretação</h4><p>${message}</p>`;
  };

  const calculate = () => {
    const flow = parseFloat(document.getElementById('m7-flow')?.value);
    const supply = parseFloat(document.getElementById('m7-supply-temp')?.value);
    const ret = parseFloat(document.getElementById('m7-return-temp')?.value);

    if(isNaN(flow) || isNaN(supply) || isNaN(ret) || flow <= 0){
      setText('m7-dt-result', '--');
      setText('m7-kw-result', '--');
      setText('m7-tr-result', '--');
      diagnose('Preencha vazão, temperatura de ida e temperatura de retorno com valores válidos.');
      return;
    }

    const dt = ret - supply;
    const kw = flow * 1.163 * dt;
    const tr = kw / 3.517;

    setText('m7-dt-result', `${dt.toFixed(1)} K`);
    setText('m7-kw-result', `${kw.toFixed(1)} kW`);
    setText('m7-tr-result', `${tr.toFixed(1)} TR`);

    if(dt <= 0){
      diagnose('Delta T nulo ou negativo indica leitura invertida, sensor incorreto ou condição operacional anormal. Confira ida/retorno e instrumentos.');
    }else if(dt < 4){
      diagnose('Delta T baixo: pode haver excesso de vazão, bypass, válvulas abertas demais, baixa carga ou baixa transferência nos consumidores.');
    }else if(dt > 8){
      diagnose('Delta T alto: pode indicar baixa vazão, restrição hidráulica, filtro obstruído, válvula limitada ou carga térmica elevada.');
    }else{
      diagnose('Delta T em faixa didática intermediária. Confirme com dados de projeto, concentração de glicol, vazão real e tendência operacional.');
    }
  };

  btn.addEventListener('click', calculate);
  ['m7-flow','m7-supply-temp','m7-return-temp'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('input', calculate);
  });
  calculate();
}



function initializeElectrical04Cases() {
  const cases = {
    e4c1: {
      name: 'e04case1',
      correct: 'B',
      success: 'Correto. Sem tensão na bobina, a leitura inicial mais coerente é procurar onde o comando foi interrompido ou qual permissivo está aberto.',
      explanation: 'A ausência de tensão na bobina aponta primeiro para o circuito de comando, permissivos, intertravamentos ou proteção aberta. Ainda não é evidência suficiente para culpar o motor ou trocar o contator.'
    },
    e4c2: {
      name: 'e04case2',
      correct: 'A',
      success: 'Correto. Corrente muito menor em uma fase com aquecimento sugere perda parcial de fase, mau contato ou defeito de alimentação naquela perna do circuito.',
      explanation: 'Quando uma fase foge muito do padrão, o técnico deve priorizar a hipótese de alimentação incompleta, fusível aberto, borne ruim, cabo danificado ou outro problema elétrico associado.'
    },
    e4c3: {
      name: 'e04case3',
      correct: 'A',
      success: 'Correto. O melhor início é confirmar se a tensão realmente chega ao elemento, se os limites térmicos estão fechados e se a resistência tem continuidade com o circuito isolado.',
      explanation: 'Em reheat sem aquecimento, o diagnóstico passa por comando, tensão na carga, limites térmicos e continuidade do elemento. Ajustar setpoint ou trocar CLP sem medir tende a mascarar a causa.'
    }
  };
  document.querySelectorAll('.e04-case-quiz').forEach(card => {
    const caseId = card.dataset.case;
    const cfg = cases[caseId];
    if(!cfg) return;
    const btn = card.querySelector('.e04-check-case');
    const box = card.querySelector('.m10-case-feedback');
    if(!btn || !box || btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', () => {
      const selected = card.querySelector(`input[name="${cfg.name}"]:checked`);
      if(!selected) {
        box.className = 'm10-case-feedback danger';
        box.innerHTML = '<h4>Resposta não selecionada</h4><p>Escolha uma alternativa antes de verificar a resposta.</p>';
        return;
      }
      if(selected.value === cfg.correct) {
        box.className = 'm10-case-feedback success';
        box.innerHTML = `<h4>Resposta correta</h4><p>${cfg.success}</p>`;
      } else {
        box.className = 'm10-case-feedback danger';
        box.innerHTML = `<h4>Justificativa</h4><p>${cfg.explanation}</p>`;
      }
    });
  });
}




const FINAL_ASSESSMENTS = {
  hvac: {
    title: 'Trilha HVAC Crítico',
    modules: ['modulo01','modulo02','modulo03','modulo04','modulo05','modulo06','modulo07','modulo08','modulo09','modulo10'],
    groups: [
      ['modulo01','modulo02','modulo03'],
      ['modulo03','modulo04','modulo05'],
      ['modulo06','modulo07','modulo08'],
      ['modulo08','modulo09','modulo10'],
      ['modulo09','modulo10']
    ],
    prefix: 'hvac',
    approvedKey: 'hvacFinalAssessmentApproved',
    scoreKey: 'hvacFinalAssessmentScore',
    certificate: 'hvac-final-certificate',
    extraQuestions: [
      {
            "tier": 0,
            "question": "Em um ciclo frigorífico, qual interpretação é mais correta quando se compara evaporação e condensação?",
            "options": {
                  "A": "A evaporação absorve calor do ambiente/fluido atendido e a condensação rejeita esse calor para outro meio.",
                  "B": "A evaporação sempre ocorre em alta pressão e a condensação sempre em baixa pressão.",
                  "C": "Evaporação e condensação não alteram a condição térmica do refrigerante.",
                  "D": "O compressor é responsável direto por retirar calor do ar de retorno."
            },
            "answer": "A",
            "explanation": "A evaporação é a etapa de absorção de calor e a condensação é a etapa de rejeição. O compressor cria a diferença de pressão necessária para esse processo."
      },
      {
            "tier": 0,
            "question": "Qual leitura sobre superheat e subcooling é tecnicamente mais adequada?",
            "options": {
                  "A": "Devem ser interpretados em conjunto com pressão, temperatura, carga térmica, fluxo de ar/água e condição operacional.",
                  "B": "Superheat sozinho sempre define carga de refrigerante com precisão absoluta.",
                  "C": "Subcooling não tem relação com estabilidade da linha de líquido.",
                  "D": "SH e SC eliminam a necessidade de avaliar o evaporador e o condensador."
            },
            "answer": "A",
            "explanation": "SH e SC são indicadores importantes, mas precisam ser correlacionados com o restante do sistema para evitar diagnóstico simplista."
      },
      {
            "tier": 0,
            "question": "Em psicrometria aplicada a HVAC crítico, por que temperatura e umidade devem ser analisadas juntas?",
            "options": {
                  "A": "Porque conforto/controle térmico e remoção de umidade dependem da condição completa do ar, não apenas da temperatura de bulbo seco.",
                  "B": "Porque umidade não interfere na operação de equipamentos de precisão.",
                  "C": "Porque controlar somente umidade elimina a necessidade de resfriamento.",
                  "D": "Porque o ar seco sempre tem a mesma entalpia do ar úmido."
            },
            "answer": "A",
            "explanation": "A condição do ar envolve temperatura, umidade e energia. Em ambientes críticos, controlar apenas a temperatura pode mascarar problemas latentes."
      },
      {
            "tier": 1,
            "question": "Um self DX apresenta baixa capacidade, sucção baixa e superheat elevado. Qual hipótese deve ser investigada com prioridade?",
            "options": {
                  "A": "Subalimentação do evaporador por baixa carga, restrição ou falha no dispositivo de expansão.",
                  "B": "Retorno líquido garantido ao compressor.",
                  "C": "Excesso de fluxo de refrigerante no evaporador como única possibilidade.",
                  "D": "Falha exclusiva no sensor de umidade do ambiente."
            },
            "answer": "A",
            "explanation": "A combinação de sucção baixa e superheat alto aponta para evaporador subalimentado, que pode ocorrer por restrição, baixa carga ou expansão inadequada."
      },
      {
            "tier": 1,
            "question": "Em um fancoil de precisão, válvula de água gelada em 100% e temperatura de retorno subindo indicam primeiro:",
            "options": {
                  "A": "Que a unidade está pedindo capacidade, mas algo limita a troca térmica: água insuficiente, baixa vazão, baixo fluxo de ar ou serpentina/controle com problema.",
                  "B": "Que a válvula aberta sempre prova excesso de capacidade disponível.",
                  "C": "Que o equipamento deve ser desligado sem verificar água, ar ou sensores.",
                  "D": "Que o problema é necessariamente somente no BMS."
            },
            "answer": "A",
            "explanation": "Válvula em 100% mostra demanda de resfriamento. Se a temperatura não cai, é preciso verificar lado da água, lado do ar e resposta real do terminal."
      },
      {
            "tier": 1,
            "question": "Em um sistema de precisão, alarme de filtro sujo pode afetar diretamente qual variável operacional?",
            "options": {
                  "A": "Fluxo de ar e capacidade de troca térmica da serpentina.",
                  "B": "A frequência da rede elétrica da CAG.",
                  "C": "A concentração de refrigerante no compressor.",
                  "D": "A pressão estática da linha de líquido DX."
            },
            "answer": "A",
            "explanation": "Filtro saturado aumenta perda de carga, reduz vazão de ar e compromete a capacidade do equipamento."
      },
      {
            "tier": 2,
            "question": "Em uma CAG, ΔT baixo com vazão alta costuma sugerir qual linha de investigação?",
            "options": {
                  "A": "Excesso de vazão, bypass, válvulas muito abertas, baixa carga ou baixa transferência térmica nos consumidores.",
                  "B": "Baixa vazão como única possibilidade.",
                  "C": "Falha obrigatória do chiller por falta de compressor.",
                  "D": "Erro exclusivo do sensor de umidade ambiente."
            },
            "answer": "A",
            "explanation": "ΔT baixo associado a vazão alta frequentemente indica que a água está circulando demais ou trocando pouco calor nos consumidores."
      },
      {
            "tier": 2,
            "question": "Alta pressão diferencial no anel de água gelada deve ser analisada inicialmente como possível consequência de:",
            "options": {
                  "A": "Baixa demanda hidráulica, válvulas fechando, setpoint elevado ou restrição no circuito.",
                  "B": "Necessariamente falta de refrigerante no chiller.",
                  "C": "Sempre excesso de umidade na sala.",
                  "D": "Falha garantida de todos os fancoils."
            },
            "answer": "A",
            "explanation": "ΔP alto pode ocorrer por menor abertura de válvulas, baixa demanda ou setpoint/controle inadequado."
      },
      {
            "tier": 2,
            "question": "Se um alarme de fluxo impede habilitar um chiller, qual atitude é mais segura?",
            "options": {
                  "A": "Confirmar vazão real, bomba, válvulas, sensores e permissivos antes de qualquer tentativa de forçar a habilitação.",
                  "B": "Jumpear o fluxo para testar carga do compressor.",
                  "C": "Ignorar o alarme se a tela mostrar demanda.",
                  "D": "Trocar imediatamente o chiller sem verificar hidráulica."
            },
            "answer": "A",
            "explanation": "Fluxo é permissivo crítico. Forçar habilitação sem vazão pode danificar o equipamento."
      },
      {
            "tier": 3,
            "question": "Quando o BMS mostra equipamento ligado, mas o processo não responde, qual leitura de diagnóstico é mais madura?",
            "options": {
                  "A": "Separar indicação de tela, comando enviado, feedback real de campo e resposta física do processo.",
                  "B": "Assumir que a tela do BMS sempre prova operação física real.",
                  "C": "Reiniciar o sistema antes de medir qualquer sinal.",
                  "D": "Ignorar feedbacks de campo e trabalhar apenas com tendência histórica."
            },
            "answer": "A",
            "explanation": "Em automação, indicação visual não substitui feedback real e efeito no processo."
      },
      {
            "tier": 3,
            "question": "Em lógica N+1, a chamada da reserva deve ser entendida como:",
            "options": {
                  "A": "Resposta para manter continuidade quando o equipamento principal falha ou fica indisponível, desde que permissivos e capacidade existam.",
                  "B": "Sinal de que a automação deve ser ignorada.",
                  "C": "Indicação de que todos os equipamentos devem operar sempre juntos.",
                  "D": "Função sem relação com disponibilidade ou criticidade."
            },
            "answer": "A",
            "explanation": "A filosofia N+1 protege continuidade operacional, mas depende de reserva disponível e condições válidas."
      },
      {
            "tier": 3,
            "question": "Qual abordagem evita falso diagnóstico em alarmes recorrentes de HVAC?",
            "options": {
                  "A": "Cruzar histórico, tendência, estado atual, sensores e resposta física antes de concluir causa raiz.",
                  "B": "Apagar os alarmes para reduzir ruído na tela.",
                  "C": "Trocar componentes aleatoriamente até parar de alarmar.",
                  "D": "Modificar setpoints sem registrar condição anterior."
            },
            "answer": "A",
            "explanation": "Alarmes recorrentes exigem correlação de dados e evidências; apagar ou alterar parâmetros pode mascarar a falha."
      },
      {
            "tier": 4,
            "question": "Em um data center, vários fancoils apresentam válvula aberta, retorno quente e fluxo de ar normal, enquanto a CAG apresenta temperatura de ida acima do esperado. Qual hipótese sistêmica é mais forte?",
            "options": {
                  "A": "Limitação na geração/distribuição de água gelada antes de culpar individualmente cada fancoil.",
                  "B": "Todos os filtros ficaram sujos exatamente ao mesmo tempo.",
                  "C": "Todos os sensores de umidade falharam simultaneamente.",
                  "D": "O problema deve estar apenas no reheat de uma unidade."
            },
            "answer": "A",
            "explanation": "Sintomas simultâneos em vários terminais apontam primeiro para problema sistêmico de produção/distribuição."
      },
      {
            "tier": 4,
            "question": "Em uma investigação de baixo ΔT, qual decisão demonstra melhor raciocínio integrado?",
            "options": {
                  "A": "Avaliar vazão, bypass, abertura de válvulas, carga térmica e temperaturas antes de alterar setpoint de bomba ou chiller.",
                  "B": "Aumentar velocidade da bomba sem observar vazão e válvulas.",
                  "C": "Reduzir temperatura de água gelada para compensar qualquer sintoma.",
                  "D": "Considerar baixo ΔT sempre uma condição normal."
            },
            "answer": "A",
            "explanation": "Baixo ΔT pode ter múltiplas causas. A decisão correta é correlacionar hidráulica, carga e controle."
      },
      {
            "tier": 4,
            "question": "Qual ação é mais adequada quando um chiller não entra em carga apesar de estar habilitado?",
            "options": {
                  "A": "Verificar demanda real, fluxo, permissivos, setpoint, status da lógica e leituras de água antes de concluir falha mecânica.",
                  "B": "Concluir imediatamente compressor danificado.",
                  "C": "Forçar carga manual ignorando permissivos.",
                  "D": "Alterar todos os limites de operação para acelerar a partida."
            },
            "answer": "A",
            "explanation": "Chiller habilitado sem carga pode ser lógica, demanda, fluxo ou permissivo, não necessariamente falha mecânica."
      },
      {
            "tier": 5,
            "question": "Após manutenção, a CAG opera com bombas em automático, mas há oscilação de ΔP e fancoils distantes apresentam baixa capacidade. Qual raciocínio integrado deve guiar a análise?",
            "options": {
                  "A": "Verificar balanceamento, resposta de válvulas, localização de sensores, controle de bomba e possível interação com bypass antes de culpar apenas os chillers.",
                  "B": "Assumir que chillers sempre são a origem de qualquer baixa capacidade hidráulica.",
                  "C": "Desativar todos os controles automáticos e manter bombas em 100% indefinidamente.",
                  "D": "Ignorar fancoils distantes se a sala principal estiver fria."
            },
            "answer": "A",
            "explanation": "Oscilação de ΔP e baixa capacidade em pontos distantes normalmente exigem análise de controle hidráulico, balanceamento e resposta de válvulas."
      },
      {
            "tier": 5,
            "question": "Um alarme crítico surge após falha de comunicação entre supervisório e controlador local, porém os equipamentos continuam operando. Qual postura é tecnicamente mais correta?",
            "options": {
                  "A": "Separar perda de supervisão de perda de controle, confirmar controle local, alarmes ativos, tendência e plano de contingência.",
                  "B": "Desligar imediatamente toda a CAG porque qualquer falha de comunicação equivale a parada física.",
                  "C": "Ignorar a comunicação, pois supervisão nunca participa da operação crítica.",
                  "D": "Forçar comandos pelo BMS sem confirmar o estado local."
            },
            "answer": "A",
            "explanation": "Perda de supervisão não é necessariamente perda de controle. É preciso confirmar camadas, estado real e contingência."
      },
      {
            "tier": 5,
            "question": "Em uma falha combinada de alta umidade, válvula muito aberta e água gelada ligeiramente quente, qual conclusão exige mais cuidado?",
            "options": {
                  "A": "A capacidade latente pode estar limitada pela temperatura da água, fluxo e condição da serpentina; a resposta exige análise psicrométrica e hidráulica.",
                  "B": "O sensor de umidade sempre é a única causa.",
                  "C": "A melhor ação é aumentar reheat até a umidade baixar, sem verificar água gelada.",
                  "D": "Válvula aberta elimina qualquer hipótese de limitação de capacidade."
            },
            "answer": "A",
            "explanation": "Alta umidade com válvula aberta e água quente sugere limitação de remoção latente, exigindo análise integrada."
      },
      {
            "tier": 5,
            "question": "Durante contingência, qual decisão reduz mais risco operacional em HVAC crítico?",
            "options": {
                  "A": "Priorizar manutenção da carga crítica, confirmar redundância disponível, registrar estado da planta e executar ações por procedimento.",
                  "B": "Executar testes manuais não documentados para acelerar a resposta.",
                  "C": "Ignorar tendências se os alarmes ainda não forem críticos.",
                  "D": "Alterar lógicas de CLP sem controle de mudança."
            },
            "answer": "A",
            "explanation": "Contingência exige prioridade, redundância, registro, procedimento e controle de risco."
      }
],
    veryAdvanced: [
      {
        question: 'Em uma operação crítica, vários fancoils apresentam alta temperatura de retorno, válvulas muito abertas e a CAG mostra ΔT baixo com vazão elevada. Qual interpretação integrada é tecnicamente mais forte?',
        options: {
          A: 'O sistema provavelmente está com baixa troca térmica nos consumidores, excesso de vazão ou mistura por bypass, e a ação deve correlacionar hidráulica, válvulas e capacidade real antes de alterar setpoints.',
          B: 'O problema é exclusivamente falta de gás refrigerante em todos os fancoils, e a primeira ação deve ser recarga imediata.',
          C: 'O ΔT baixo prova que a capacidade da CAG está acima do necessário e que todos os alarmes podem ser ignorados.',
          D: 'A abertura das válvulas não possui relação com vazão, troca térmica ou resposta térmica do ambiente.'
        },
        answer: 'A',
        explanation: 'A alternativa correta integra sintomas de distribuição hidráulica e baixa troca térmica. Alterar setpoints sem entender vazão, bypass, válvulas e carga pode mascarar a causa raiz.'
      },
      {
        question: 'Durante troubleshooting, o BMS indica bomba em operação, mas a pressão diferencial não responde, o chiller não recebe fluxo válido e há chamada de reserva. Qual sequência de análise é mais adequada?',
        options: {
          A: 'Validar feedback real da bomba, corrente/VFD, válvulas, sensores de ΔP/fluxo e permissivos antes de concluir falha de lógica.',
          B: 'Concluir imediatamente que o CLP está travado e reiniciar o sistema sem medir sinais de campo.',
          C: 'Forçar o permissivo de fluxo para habilitar o chiller e verificar depois se há vazão.',
          D: 'Desconsiderar a chamada de reserva, pois lógica N+1 nunca participa do diagnóstico hidráulico.'
        },
        answer: 'A',
        explanation: 'A leitura correta separa indicação de tela, feedback real, resposta hidráulica e permissivos. Forçar fluxo ou reiniciar sem evidência aumenta o risco operacional.'
      },
      {
        question: 'Em um sistema DX, SH alto, SC baixo, baixa sucção e evaporador com baixa capacidade aparecem ao mesmo tempo. Qual hipótese deve ser priorizada antes de qualquer ajuste fino?',
        options: {
          A: 'Subalimentação do evaporador por baixa carga, restrição ou falha de expansão, confirmando medições antes de intervenção.',
          B: 'Retorno líquido garantido ao compressor, independentemente das demais leituras.',
          C: 'Excesso de refrigerante como única possibilidade, mesmo com SC baixo.',
          D: 'Problema exclusivamente de sensor de temperatura ambiente.'
        },
        answer: 'A',
        explanation: 'SH alto com SC baixo e baixa sucção sugere subalimentação. A causa pode ser carga insuficiente, restrição ou expansão, e deve ser confirmada por medições.'
      },
      {
        question: 'Ao investigar alarme crítico em CAG, qual decisão representa melhor a mentalidade de operação segura?',
        options: {
          A: 'Classificar severidade, confirmar impacto na carga, validar sensores e permissivos, e só então executar ação corretiva documentada.',
          B: 'Reduzir alarmes na tela para evitar ruído operacional.',
          C: 'Alterar todos os setpoints para estabilizar visualmente o painel.',
          D: 'Partir equipamentos em manual sem validar fluxo, proteção e intertravamentos.'
        },
        answer: 'A',
        explanation: 'Operação crítica exige classificação, confirmação de impacto, validação de sinais e ação documentada, não respostas impulsivas.'
      }
    ]
  },
  eletrica: {
    title: 'Trilha Elétrica Aplicada a HVAC',
    modules: ['eletrica01','eletrica02','eletrica03','eletrica04'],
    groups: [
      ['eletrica01'],
      ['eletrica02'],
      ['eletrica03'],
      ['eletrica04'],
      ['eletrica02','eletrica03','eletrica04']
    ],
    prefix: 'eletrica',
    approvedKey: 'eletricaFinalAssessmentApproved',
    scoreKey: 'eletricaFinalAssessmentScore',
    certificate: 'eletrica-final-certificate',
    extraQuestions: [
      {
            "tier": 0,
            "question": "Em equipamentos HVAC, qual interpretação de tensão trifásica é mais adequada para diagnóstico?",
            "options": {
                  "A": "A tensão deve ser confirmada entre fases e comparada com placa, diagrama e procedimento do local.",
                  "B": "Basta medir uma fase contra qualquer ponto metálico para concluir o estado do sistema.",
                  "C": "Tensão nominal dispensa verificar desequilíbrio ou queda em carga.",
                  "D": "A tensão nunca influencia partida de motores ou falhas de comando."
            },
            "answer": "A",
            "explanation": "Diagnóstico seguro exige medir corretamente e comparar com placa/diagrama/procedimento."
      },
      {
            "tier": 0,
            "question": "Por que potência e comando devem ser separados mentalmente em um painel HVAC?",
            "options": {
                  "A": "Porque o comando autoriza a operação e a potência alimenta a carga; defeitos podem ocorrer em camadas diferentes.",
                  "B": "Porque comando e potência sempre usam a mesma tensão e o mesmo cabo.",
                  "C": "Porque a potência sempre falha antes do comando.",
                  "D": "Porque separar os circuitos elimina a necessidade de proteção."
            },
            "answer": "A",
            "explanation": "Separar potência e comando ajuda a localizar se a falha está na alimentação da carga ou na lógica de autorização."
      },
      {
            "tier": 0,
            "question": "Qual prática é mais segura antes de medir continuidade em um circuito de comando?",
            "options": {
                  "A": "Desenergizar, isolar o circuito e confirmar ausência de tensão.",
                  "B": "Medir continuidade com a bobina energizada.",
                  "C": "Usar continuidade para verificar circuito de potência em operação.",
                  "D": "Jumpear o dispositivo de proteção para facilitar a leitura."
            },
            "answer": "A",
            "explanation": "Continuidade e resistência exigem circuito desenergizado e seguro."
      },
      {
            "tier": 1,
            "question": "Em um comando com selo, o equipamento parte enquanto o botão START é pressionado, mas desliga ao soltar. Qual hipótese deve ser priorizada?",
            "options": {
                  "A": "Falha no contato auxiliar de selo, no ramo de retenção ou na alimentação de comando sustentada.",
                  "B": "Falha garantida no motor, mesmo sem medir potência.",
                  "C": "Excesso de umidade no ambiente como causa principal.",
                  "D": "A bobina está necessariamente em curto."
            },
            "answer": "A",
            "explanation": "Se o equipamento só mantém enquanto o START está pressionado, o circuito de retenção deve ser investigado."
      },
      {
            "tier": 1,
            "question": "Se a bobina de um contator não recebe tensão, mas a potência principal está presente, qual investigação é mais coerente?",
            "options": {
                  "A": "Seguir o caminho do comando, incluindo fonte, stop, proteções NF, permissivos e intertravamentos.",
                  "B": "Trocar imediatamente a carga acionada.",
                  "C": "Medir corrente do motor parado para confirmar o defeito.",
                  "D": "Alterar setpoint de temperatura antes de medir o comando."
            },
            "answer": "A",
            "explanation": "Ausência de tensão na bobina aponta para comando ou permissivo, não diretamente para a carga."
      },
      {
            "tier": 1,
            "question": "Relé térmico atuado em circuito de motor deve ser tratado inicialmente como:",
            "options": {
                  "A": "Sinal de sobrecarga ou condição anormal que exige investigar corrente e carga mecânica antes de resetar repetidamente.",
                  "B": "Defeito visual sem importância.",
                  "C": "Comprovação de que o motor está leve.",
                  "D": "Motivo para aumentar o ajuste sem medir corrente."
            },
            "answer": "A",
            "explanation": "Relé térmico é proteção. Resetar repetidamente sem causa raiz aumenta risco de dano."
      },
      {
            "tier": 2,
            "question": "Qual erro de medição pode gerar diagnóstico falso com alicate amperímetro?",
            "options": {
                  "A": "Abraçar mais de um condutor ao mesmo tempo ou medir no ponto errado.",
                  "B": "Medir um único condutor por vez.",
                  "C": "Comparar corrente entre fases.",
                  "D": "Registrar a leitura durante condição de carga."
            },
            "answer": "A",
            "explanation": "O alicate deve medir um condutor por vez. Medir mais de um pode distorcer ou cancelar a leitura."
      },
      {
            "tier": 2,
            "question": "Ao aplicar megômetro em equipamento HVAC, qual cuidado é essencial?",
            "options": {
                  "A": "Garantir que eletrônicos, VFDs, sensores e placas estejam protegidos/desconectados conforme procedimento.",
                  "B": "Aplicar o teste em qualquer placa energizada para acelerar o diagnóstico.",
                  "C": "Usar megômetro como substituto de todas as medições de tensão.",
                  "D": "Ignorar instruções do fabricante se o motor estiver parado."
            },
            "answer": "A",
            "explanation": "O ensaio de isolamento pode danificar eletrônicos se aplicado sem preparo do circuito."
      },
      {
            "tier": 2,
            "question": "Se há tensão na entrada de um fusível, mas não há tensão na saída, qual leitura inicial é mais provável?",
            "options": {
                  "A": "Fusível aberto, mau contato ou dispositivo interrompendo a passagem de energia.",
                  "B": "Falha obrigatória no sensor de umidade.",
                  "C": "Compressor em retorno líquido.",
                  "D": "Comando operando perfeitamente sem necessidade de inspeção."
            },
            "answer": "A",
            "explanation": "Comparar entrada e saída localiza onde a energia deixa de prosseguir."
      },
      {
            "tier": 3,
            "question": "Em uma soft-starter com falha recorrente, qual sequência é mais técnica?",
            "options": {
                  "A": "Registrar código de falha, medir tensão/corrente, conferir carga mecânica e revisar parâmetros antes de rearmar.",
                  "B": "Rearmar continuamente até o sistema permanecer ligado.",
                  "C": "Aumentar proteções sem registrar leituras.",
                  "D": "Trocar a IHM antes de verificar potência."
            },
            "answer": "A",
            "explanation": "Soft-starter fornece dados de falha. O diagnóstico exige código, medições e condição da carga."
      },
      {
            "tier": 3,
            "question": "Ventilador EC sem resposta ao comando exige separar quais camadas?",
            "options": {
                  "A": "Alimentação, enable/referência, alarme interno, feedback e condição mecânica do ventilador.",
                  "B": "Apenas a tensão nominal do painel.",
                  "C": "Somente a umidade do ambiente.",
                  "D": "Apenas a pressão da água gelada."
            },
            "answer": "A",
            "explanation": "EC fans combinam potência, eletrônica integrada, comando e feedback; todas as camadas precisam ser verificadas."
      },
      {
            "tier": 3,
            "question": "Em um ATS que não transfere, qual hipótese não deve ser ignorada?",
            "options": {
                  "A": "Sensoriamento incorreto da fonte, parâmetros, temporizações ou contatos auxiliares envolvidos na lógica.",
                  "B": "O mecanismo é sempre o primeiro componente a ser substituído.",
                  "C": "ATS não depende de leitura de fontes.",
                  "D": "A transferência sempre deve ocorrer sem permissivos."
            },
            "answer": "A",
            "explanation": "ATS depende de monitoramento de fonte, lógica, temporizações e feedback de posição."
      },
      {
            "tier": 4,
            "question": "Um motor desarma por sobrecarga após alguns minutos, com corrente elevada em todas as fases e tensão equilibrada. Qual hipótese ganha força?",
            "options": {
                  "A": "Sobrecarga mecânica, travamento parcial, ajuste de proteção inadequado ou motor trabalhando acima da condição esperada.",
                  "B": "Perda de fase como única possibilidade.",
                  "C": "Falta de tensão na bobina como causa única.",
                  "D": "Defeito no sensor de umidade da sala."
            },
            "answer": "A",
            "explanation": "Corrente elevada em todas as fases com tensão equilibrada direciona a análise para carga mecânica, ajuste ou condição do motor."
      },
      {
            "tier": 4,
            "question": "Em um circuito de reheat, comando presente e ausência de aquecimento com limite térmico fechado indicam qual próximo passo?",
            "options": {
                  "A": "Confirmar tensão na carga e continuidade do elemento com o circuito isolado.",
                  "B": "Substituir a controladora sem verificar potência.",
                  "C": "Jumpear proteções para forçar aquecimento.",
                  "D": "Desconsiderar fluxo de ar e limites de segurança."
            },
            "answer": "A",
            "explanation": "Com comando e limite ok, é necessário verificar se a potência chega ao elemento e se o elemento está íntegro."
      },
      {
            "tier": 4,
            "question": "Qual conduta é mais correta diante de uma falha elétrica intermitente em painel HVAC?",
            "options": {
                  "A": "Registrar condições, medições, tendência, temperatura, carga e sequência do evento antes de substituir componentes.",
                  "B": "Trocar aleatoriamente todos os contatores.",
                  "C": "Ignorar o evento se ele resetar sozinho.",
                  "D": "Remover intertravamentos para simplificar o circuito."
            },
            "answer": "A",
            "explanation": "Falhas intermitentes exigem evidência e histórico para evitar troca aleatória e perda de rastreabilidade."
      },
      {
            "tier": 5,
            "question": "Em um fan coil crítico, ventilador opera, reheat não aquece, há comando de aquecimento e o limite térmico abre após tentativa de partida. Qual análise integrada é mais segura?",
            "options": {
                  "A": "Tratar o limite como proteção, verificar fluxo real, elemento, potência, contatos e causa de sobretemperatura antes de novo teste.",
                  "B": "Jumpear o limite para manter aquecimento até estabilizar a sala.",
                  "C": "Concluir que o problema é apenas de software e ignorar potência.",
                  "D": "Aumentar setpoint para reduzir a atuação do limite."
            },
            "answer": "A",
            "explanation": "Limite térmico atuando é proteção. A análise deve combinar elétrica, fluxo de ar e condição térmica."
      },
      {
            "tier": 5,
            "question": "Em uma bomba com VFD/soft-starter, comando presente, falha de partida e alarme de corrente, qual abordagem reduz risco de diagnóstico incorreto?",
            "options": {
                  "A": "Comparar comando, estado do drive, corrente, tensão, proteção e condição mecânica da bomba antes de trocar o equipamento.",
                  "B": "Trocar imediatamente o motor sem ler o alarme.",
                  "C": "Ignorar corrente se houver comando presente.",
                  "D": "Aumentar a rampa sem medir a carga."
            },
            "answer": "A",
            "explanation": "Comando presente não garante operação. É preciso ler estado do drive, grandezas elétricas e condição mecânica."
      },
      {
            "tier": 5,
            "question": "Durante diagnóstico de ATS, a fonte alternativa mede normal no multímetro, mas o ATS não a reconhece. Qual hipótese é mais técnica?",
            "options": {
                  "A": "Falha no circuito de sensoriamento, fusível de medição, parâmetro de reconhecimento ou entrada lógica do controlador.",
                  "B": "A fonte alternativa não existe porque o ATS não reconheceu.",
                  "C": "O mecanismo de transferência deve ser trocado sem avaliar leitura interna.",
                  "D": "O multímetro sempre está errado quando discorda do ATS."
            },
            "answer": "A",
            "explanation": "Comparar medição real e leitura percebida pelo ATS é essencial para separar fonte real de sensoriamento."
      },
      {
            "tier": 5,
            "question": "Qual raciocínio representa melhor maturidade em diagnóstico elétrico HVAC?",
            "options": {
                  "A": "Separar potência, comando, proteção, eletrônica de controle e resposta física da carga antes de concluir causa raiz.",
                  "B": "Tratar qualquer falha como defeito de motor.",
                  "C": "Substituir a peça mais cara primeiro para acelerar o processo.",
                  "D": "Desconsiderar diagramas quando o painel possui BMS."
            },
            "answer": "A",
            "explanation": "Equipamentos HVAC unem força, comando, eletrônica e processo. Diagnóstico maduro separa essas camadas."
      }
],
    veryAdvanced: [
      {
        question: 'Em um equipamento HVAC, a potência principal está presente, a bobina do contator não recebe tensão, o relé térmico está normal e há intertravamentos de fluxo e porta no circuito. Qual raciocínio é mais adequado?',
        options: {
          A: 'Seguir o circuito de comando ponto a ponto, validando fonte de comando, contatos NF, permissivos e ponto exato onde a tensão desaparece.',
          B: 'Trocar imediatamente o motor, pois ausência de tensão na bobina prova falha no enrolamento.',
          C: 'Medir corrente do motor em operação, mesmo que ele não tenha partido.',
          D: 'Aplicar megômetro no CLP e na placa eletrônica para encontrar o intertravamento aberto.'
        },
        answer: 'A',
        explanation: 'Sem tensão na bobina, o foco inicial é o comando: fonte, contatos, permissivos e intertravamentos. Motor e carga ainda não são a primeira hipótese.'
      },
      {
        question: 'Uma soft-starter de bomba está em trip, há corrente desequilibrada antes do desarme e uma fase apresenta leitura significativamente menor. Qual conclusão técnica é mais consistente?',
        options: {
          A: 'Investigar perda parcial de fase, mau contato, fusível/borne/contator e condição do motor antes de rearmar repetidamente.',
          B: 'A corrente menor em uma fase prova que a carga está leve e o trip é falso.',
          C: 'O defeito é necessariamente na IHM, pois soft-starter não monitora corrente.',
          D: 'A primeira ação deve ser aumentar o ajuste de proteção até o equipamento permanecer ligado.'
        },
        answer: 'A',
        explanation: 'Corrente desequilibrada com trip aponta para alimentação, contato, proteção ou motor. Rearmes sucessivos ou aumento de proteção sem causa raiz elevam o risco.'
      },
      {
        question: 'Em um fan coil de precisão, o reheat recebe comando, mas não aquece; o ventilador opera, há permissivo de fluxo de ar e o limite térmico aparece aberto. Qual caminho é mais correto?',
        options: {
          A: 'Tratar o limite térmico como proteção ativa, investigar superaquecimento/fluxo/elemento e confirmar continuidade apenas com circuito isolado.',
          B: 'Jumpear o limite térmico para confirmar aquecimento durante operação normal.',
          C: 'Concluir que a válvula de água gelada está com defeito, sem verificar potência do reheat.',
          D: 'Ignorar o limite térmico, pois ele não participa da segurança do aquecimento.'
        },
        answer: 'A',
        explanation: 'Limite térmico aberto é proteção. O diagnóstico deve respeitar a segurança, confirmar causa e testar continuidade com circuito desenergizado/isolado.'
      },
      {
        question: 'Um ATS não transfere, embora a fonte alternativa exista. O equipamento não reconhece corretamente a fonte e há contatos auxiliares envolvidos na lógica. Qual abordagem é mais técnica?',
        options: {
          A: 'Comparar medição real da fonte com a leitura percebida pelo ATS, checar sensoriamento, fusíveis de medição, parâmetros e feedback de posição.',
          B: 'Forçar manualmente a transferência sem validar fonte, carga e permissivos.',
          C: 'Trocar o mecanismo de transferência antes de avaliar sensoriamento.',
          D: 'Concluir que tensão de comando e sensoriamento são irrelevantes para ATS.'
        },
        answer: 'A',
        explanation: 'ATS depende de sensoriamento, parâmetros, permissivos e feedback. O diagnóstico deve comparar valor real e valor percebido pelo equipamento.'
      }
    ]
  }
};

function initializeFinalAssessment(track) {
  const cfg = FINAL_ASSESSMENTS[track];
  if(!cfg) return;
  const form = document.getElementById(`${cfg.prefix}-final-form`);
  const submit = document.getElementById(`submit-${cfg.prefix}-final`);
  const retry = document.getElementById(`retry-${cfg.prefix}-final`);
  if(!form || !submit || !retry || submit.dataset.bound === 'true') return;
  submit.dataset.bound = 'true';
  form.addEventListener('submit', e => e.preventDefault());
  generateFinalAssessment(track);
  submit.addEventListener('click', () => processFinalAssessment(track));
  retry.addEventListener('click', () => resetFinalAssessment(track));
  restoreFinalCertificate(track);
}

function getDifficultyLabel(index) {
  if(index < 4) return { label:'Fundamentos', cls:'level-1' };
  if(index < 8) return { label:'Aplicação', cls:'level-2' };
  if(index < 12) return { label:'Intermediário', cls:'level-3' };
  if(index < 16) return { label:'Avançado', cls:'level-4' };
  if(index < 18) return { label:'Especialista', cls:'level-5' };
  return { label:'Muito avançado', cls:'level-6' };
}

function collectFinalPool(modules) {
  return modules.flatMap(mid => (quizBanks[mid] || []).map(q => ({...q, sourceModule: mid})));
}

function pickFinalQuestionsFromModules(cfg) {
  const basePool = collectFinalPool(cfg.modules);
  const extraPool = (cfg.extraQuestions || []).map((q, idx) => ({...q, sourceModule: `extra-${idx}`}));
  const allPool = basePool.concat(extraPool);
  const selected = [];
  const used = new Set();
  const makeKey = q => (q.question || '').trim();
  const pickFrom = (mods, count, tierIndex) => {
    let pool = collectFinalPool(mods).concat(extraPool.filter(q => q.tier === tierIndex)).filter(q => !used.has(makeKey(q)));
    if(pool.length < count) pool = allPool.filter(q => !used.has(makeKey(q)));
    shuffle(pool).slice(0,count).forEach(q => { used.add(makeKey(q)); selected.push(q); });
  };
  pickFrom(cfg.groups[0], 4, 0);
  pickFrom(cfg.groups[1], 4, 1);
  pickFrom(cfg.groups[2], 4, 2);
  pickFrom(cfg.groups[3], 4, 3);
  pickFrom(cfg.groups[4], 2, 4);
  const veryAdvancedPool = shuffle((cfg.veryAdvanced || []).concat(extraPool.filter(q => q.tier === 5))).filter(q => !used.has(makeKey(q)));
  veryAdvancedPool.slice(0,2).forEach(q => { used.add(makeKey(q)); selected.push({...q, sourceModule: q.sourceModule || 'síntese'}); });
  while(selected.length < 20) pickFrom(cfg.modules, 20 - selected.length, 4);
  return selected.slice(0,20);
}

function generateFinalAssessment(track) {
  const cfg = FINAL_ASSESSMENTS[track];
  const box = document.getElementById(`${cfg.prefix}-final-questions`);
  if(!box) return;
  const raw = pickFinalQuestionsFromModules(cfg);
  activeQuizState[`${cfg.prefix}-final`] = raw.map((q, index) => {
    const labels = ['A','B','C','D'];
    const opts = Object.keys(q.options).map(k => ({ text:q.options[k], isCorrect:k === q.answer }));
    const randomized = shuffle(opts).map((o,i) => ({ label:labels[i], text:o.text, isCorrect:o.isCorrect }));
    return { question:q.question, options:randomized, correctAnswer:randomized.find(o=>o.isCorrect).label, explanation:q.explanation || '', difficulty:getDifficultyLabel(index) };
  });

  const progress = '<div class="final-progress-strip clean-progress-strip">' + Array.from({length:20}, () => '<span></span>').join('') + '</div>';
  box.innerHTML = progress + activeQuizState[`${cfg.prefix}-final`].map((item,index)=>{
    const n = index + 1;
    return `<div class="card quiz-question final-question" data-qindex="${index}">
      <div class="final-question-header clean-final-question-header">
        <h3>${n}. ${item.question}</h3>
      </div>
      ${item.options.map(o=>`<label><input type="radio" name="final-${cfg.prefix}-q${n}" value="${o.label}"><strong>${o.label})</strong> ${o.text}</label>`).join('')}
    </div>`;
  }).join('');

  const result = document.getElementById(`${cfg.prefix}-final-result`);
  if(result) result.innerHTML = '';
  const cert = document.getElementById(cfg.certificate);
  if(cert) cert.classList.add('hidden');
}

function processFinalAssessment(track) {
  const cfg = FINAL_ASSESSMENTS[track];
  const key = `${cfg.prefix}-final`;
  const qs = activeQuizState[key] || [];
  const result = document.getElementById(`${cfg.prefix}-final-result`);
  if(!result || !qs.length) return;
  let score = 0;
  const unanswered = [];
  document.querySelectorAll('.quiz-inline-feedback').forEach(el => el.remove());
  qs.forEach((item,index)=>{
    const n = index + 1;
    const selected = document.querySelector(`input[name="final-${cfg.prefix}-q${n}"]:checked`);
    if(!selected) { unanswered.push(n); return; }
    if(selected.value === item.correctAnswer) score++;
    else if(item.explanation) {
      const card = document.querySelector(`.final-question[data-qindex="${index}"]`);
      if(card) {
        const fb = document.createElement('div');
        fb.className = 'quiz-inline-feedback';
        fb.innerHTML = `<h4>Justificativa técnica</h4><p>${item.explanation}</p>`;
        card.appendChild(fb);
      }
    }
  });
  if(unanswered.length) {
    result.innerHTML = '<div class="result-card warning"><h3>Avaliação incompleta</h3><p>Responda todas as perguntas antes de enviar.</p></div>';
    return;
  }
  const pct = Math.round((score / 20) * 100);
  const approved = pct >= 75;
  localStorage.setItem(cfg.scoreKey, String(score));
  localStorage.setItem(cfg.approvedKey, approved ? 'true' : 'false');
  result.innerHTML = `<div class="result-card ${approved ? 'success' : 'danger'}">
    <h3>${approved ? 'Aprovado na avaliação final' : 'Revisão necessária'}</h3>
    <div class="final-score-panel clean-score-panel">
      <div class="final-score-item"><strong>${pct}%</strong><span>Aproveitamento</span></div>
      <div class="final-score-item"><strong>${approved ? 'Concluído' : 'Pendente'}</strong><span>Status</span></div>
    </div>
    <p>${approved ? 'Aproveitamento mínimo atingido. A avaliação final da trilha foi concluída.' : 'O aproveitamento mínimo ainda não foi atingido. Revise as justificativas das respostas incorretas e sorteie uma nova avaliação.'}</p>
  </div>`;
  const cert = document.getElementById(cfg.certificate);
  if(cert) {
    cert.classList.toggle('hidden', !approved);
    if(approved) cert.scrollIntoView({behavior:'smooth', block:'center'});
  }
}

function resetFinalAssessment(track) {
  const cfg = FINAL_ASSESSMENTS[track];
  const form = document.getElementById(`${cfg.prefix}-final-form`);
  if(form) form.reset();
  localStorage.setItem(cfg.approvedKey, 'false');
  generateFinalAssessment(track);
}

function restoreFinalCertificate(track) {
  const cfg = FINAL_ASSESSMENTS[track];
  const cert = document.getElementById(cfg.certificate);
  if(cert && localStorage.getItem(cfg.approvedKey) === 'true') cert.classList.remove('hidden');
}


function initializeHvacDxDiagnosticTool() {
  const symptom = document.getElementById('dx-symptom');
  const sh = document.getElementById('dx-sh');
  const sc = document.getElementById('dx-sc');
  const airflow = document.getElementById('dx-airflow');
  const cond = document.getElementById('dx-cond');
  const run = document.getElementById('dx-run');
  const reset = document.getElementById('dx-reset');
  const panel = document.getElementById('dx-result-panel');
  const badge = document.getElementById('dx-result-badge');
  if(!run || run.dataset.bound === 'true') return;
  run.dataset.bound = 'true';

  const db = {
    high_sh: {
      level: 'Atenção',
      title: 'Superheat alto',
      causes: ['Baixa alimentação do evaporador.', 'Restrição na linha de líquido ou dispositivo de expansão.', 'Carga refrigerante insuficiente.', 'Evaporador com pouca transferência por carga/fluxo inadequado.'],
      checks: ['Comparar SH e SC juntos.', 'Confirmar condição do dispositivo de expansão.', 'Avaliar carga refrigerante e sinais de flash gas.', 'Conferir carga térmica e temperatura de retorno.'],
      steps: ['Validar medições.', 'Separar hipótese de falta de refrigerante de hipótese de restrição.', 'Concluir após correlacionar SH, SC e comportamento do evaporador.']
    },
    low_sh: {
      level: 'Crítico',
      title: 'Superheat baixo',
      causes: ['Risco de retorno líquido ao compressor.', 'Válvula de expansão muito aberta.', 'Carga excessiva ou inundação do evaporador.', 'Baixo fluxo de ar com serpentina muito fria.'],
      checks: ['Checar retorno líquido e temperatura de sucção.', 'Conferir fluxo de ar no evaporador.', 'Observar controle da expansão.', 'Cruzar com SC e pressão de evaporação.'],
      steps: ['Proteger o compressor.', 'Investigar expansão e fluxo de ar.', 'Verificar se o evaporador está inundando.']
    },
    high_sc: {
      level: 'Atenção',
      title: 'Subcooling alto',
      causes: ['Acúmulo de líquido no condensador.', 'Possível excesso de refrigerante.', 'Restrição posterior à condensação.', 'Alta rejeição com condensador saturado.'],
      checks: ['Checar ventilação/limpeza do condensador.', 'Cruzar com pressão de descarga.', 'Conferir visores, filtros e linha de líquido.', 'Comparar com superheat.'],
      steps: ['Entender se há excesso de carga ou restrição.', 'Verificar condensação.', 'Concluir com todas as medições combinadas.']
    },
    low_sc: {
      level: 'Atenção',
      title: 'Subcooling baixo',
      causes: ['Linha de líquido instável.', 'Carga refrigerante insuficiente.', 'Baixa condensação efetiva.', 'Bolhas/gás na linha de líquido.'],
      checks: ['Conferir carga de refrigerante.', 'Observar estabilidade da condensação.', 'Cruzar com SH e pressão de sucção.', 'Checar leitura da linha de líquido.'],
      steps: ['Confirmar se o sistema está subalimentado.', 'Conferir condições de condensação.', 'Documentar a tendência das leituras.']
    },
    low_suction: {
      level: 'Atenção',
      title: 'Baixa sucção / baixa evaporação',
      causes: ['Evaporador subalimentado.', 'Restrição na expansão ou linha.', 'Baixa carga refrigerante.', 'Baixo fluxo de ar ou baixa carga térmica.'],
      checks: ['Comparar pressão de evaporação com SH.', 'Inspecionar filtro, ventilador e evaporador.', 'Conferir carga e expansão.', 'Verificar obstruções e gelo.'],
      steps: ['Relacionar sucção com SH.', 'Checar ar e expansão.', 'Fechar a hipótese mais coerente com o conjunto de sinais.']
    },
    high_head: {
      level: 'Crítico',
      title: 'Alta pressão de condensação',
      causes: ['Condensador sujo ou com ventilação ruim.', 'Temperatura ambiente elevada.', 'Excesso de refrigerante.', 'Não-condensáveis ou restrição de ar/água na condensação.'],
      checks: ['Inspecionar condensador.', 'Confirmar ventiladores, água ou rejeição térmica.', 'Cruzar com SC.', 'Verificar condições ambientais.'],
      steps: ['Reduzir risco operacional.', 'Checar rejeição de calor.', 'Só depois discutir carga ou falhas secundárias.']
    },
    freeze: {
      level: 'Crítico',
      title: 'Evaporador congelando',
      causes: ['Baixo fluxo de ar.', 'Superheat muito baixo.', 'Baixa carga térmica com expansão agressiva.', 'Controle inadequado do ventilador/temperatura.'],
      checks: ['Checar filtro, serpentina e ventilador.', 'Comparar SH.', 'Observar comportamento da válvula de expansão.', 'Conferir degelo quando aplicável.'],
      steps: ['Priorizar fluxo de ar e proteção do evaporador.', 'Avaliar expansão.', 'Normalizar a condição antes de testar novamente.']
    },
    short_cycle: {
      level: 'Atenção',
      title: 'Compressor ciclando',
      causes: ['Controle instável.', 'Proteção atuando e rearmando.', 'Carga térmica baixa ou setpoint apertado.', 'Problemas de condensação/evaporação.'],
      checks: ['Avaliar pressostatos e temporizações.', 'Checar histórico de alarme.', 'Observar SH/SC e pressões.', 'Confirmar demanda real do sistema.'],
      steps: ['Registrar a frequência da ciclagem.', 'Descobrir se a causa é proteção, controle ou processo.', 'Corrigir a origem antes de insistir em novo teste.']
    }
  };

  function render(){
    const data = db[symptom.value];
    if(!data) return;
    const insights = [];
    if(sh.value === 'high') insights.push('Superheat alto reforça hipótese de subalimentação do evaporador, baixa carga ou restrição.');
    if(sh.value === 'low') insights.push('Superheat baixo reforça risco de retorno líquido e excesso de alimentação do evaporador.');
    if(sc.value === 'low') insights.push('Subcooling baixo pode indicar baixa carga refrigerante ou instabilidade na linha de líquido.');
    if(sc.value === 'high') insights.push('Subcooling alto pode reforçar excesso de carga, líquido retido ou restrição.');
    if(airflow.value === 'low') insights.push('Fluxo de ar baixo altera muito a leitura do evaporador e pode causar congelamento, baixa capacidade e SH distorcido.');
    if(cond.value === 'dirty') insights.push('Condensador sujo ou ventilação ruim desloca a análise para rejeição de calor e alta condensação.');
    if(cond.value === 'high_ambient') insights.push('Ambiente externo muito quente pode elevar condensação e distorcer leituras.');
    badge.textContent = data.level;
    badge.className = 'case-badge ' + (data.level === 'Crítico' ? 'negative' : 'warning');
    panel.innerHTML = `
      <div class="edt-result-block"><h4>${data.title}</h4><p>Ferramenta de apoio didático. Confirme sempre com medições reais, procedimento e dados do fabricante.</p></div>
      <div class="edt-result-block"><h4>Hipóteses prováveis</h4><ul>${data.causes.map(i=>`<li>${i}</li>`).join('')}</ul></div>
      <div class="edt-result-block"><h4>Verificações sugeridas</h4><ol>${data.checks.map(i=>`<li>${i}</li>`).join('')}</ol></div>
      <div class="edt-result-block"><h4>Sequência inicial</h4><ol>${data.steps.map(i=>`<li>${i}</li>`).join('')}</ol></div>
      <div class="edt-result-block"><h4>Leitura adicional pelas evidências</h4><ul>${(insights.length?insights:['Nenhuma evidência adicional selecionada além do sintoma principal.']).map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
    localStorage.setItem('hvacDxDiagnosticState', JSON.stringify({ symptom:symptom.value, sh:sh.value, sc:sc.value, airflow:airflow.value, cond:cond.value }));
  }

  run.addEventListener('click', render);
  reset.addEventListener('click', ()=>{
    symptom.value='high_sh'; sh.value='unknown'; sc.value='unknown'; airflow.value='unknown'; cond.value='unknown';
    badge.textContent='Aguardando dados'; badge.className='case-badge warning';
    panel.innerHTML='<p class="muted">Selecione as condições e clique em <strong>Gerar diagnóstico</strong>.</p>';
    localStorage.removeItem('hvacDxDiagnosticState');
  });
  document.querySelectorAll('.dx-quickcase').forEach(btn=>btn.addEventListener('click',()=>{
    symptom.value=btn.dataset.symptom; sh.value=btn.dataset.sh; sc.value=btn.dataset.sc; airflow.value=btn.dataset.airflow; cond.value=btn.dataset.cond; render(); window.scrollTo({top:0,behavior:'smooth'});
  }));
  try{ const saved = JSON.parse(localStorage.getItem('hvacDxDiagnosticState')||'null'); if(saved){ symptom.value=saved.symptom||'high_sh'; sh.value=saved.sh||'unknown'; sc.value=saved.sc||'unknown'; airflow.value=saved.airflow||'unknown'; cond.value=saved.cond||'unknown'; render(); }}catch(e){}
}

function initializeHvacCagDiagnosticTool() {
  const symptom = document.getElementById('cag-symptom');
  const dt = document.getElementById('cag-dt');
  const flow = document.getElementById('cag-flow');
  const valve = document.getElementById('cag-valve');
  const pump = document.getElementById('cag-pump');
  const run = document.getElementById('cag-run');
  const reset = document.getElementById('cag-reset');
  const panel = document.getElementById('cag-result-panel');
  const badge = document.getElementById('cag-result-badge');
  if(!run || run.dataset.bound === 'true') return;
  run.dataset.bound = 'true';
  const db = {
    low_dt: { level:'Atenção', title:'ΔT baixo', causes:['Excesso de vazão no circuito.', 'Bypass aberto ou mistura entre ida e retorno.', 'Válvulas muito abertas.', 'Baixa carga térmica no consumidor.'], checks:['Comparar vazão real com projeto.', 'Verificar bypass e balanceamento.', 'Avaliar posição das válvulas.', 'Observar comportamento dos consumidores.'], steps:['Confirmar ΔT.', 'Relacionar ΔT com vazão.', 'Investigar mistura hidráulica e controle.']},
    high_dt: { level:'Atenção', title:'ΔT alto', causes:['Baixa vazão.', 'Filtro ou trecho restrito.', 'Válvula insuficiente / pouco aberta.', 'Carga térmica alta.'], checks:['Conferir status de bomba.', 'Verificar restrições e filtros.', 'Observar abertura de válvulas.', 'Cruzar com temperatura de retorno e conforto térmico.'], steps:['Confirmar ΔT e vazão.', 'Separar baixa vazão de alta carga.', 'Corrigir a causa antes de novo teste.']},
    low_capacity: { level:'Crítico', title:'Baixa capacidade de resfriamento', causes:['Água insuficientemente fria.', 'Baixa vazão.', 'Válvula sem resposta adequada.', 'Problemas nos consumidores ou carga acima do esperado.'], checks:['Checar temperatura de ida e retorno.', 'Conferir vazão.', 'Validar resposta da válvula.', 'Verificar permissivos do chiller e da bomba.'], steps:['Definir se o problema está na geração ou na distribuição.', 'Comparar grandezas térmicas básicas.', 'Seguir a cadeia hidráulica e de controle.']},
    flow_alarm: { level:'Crítico', title:'Alarme de fluxo / vazão', causes:['Bomba parada ou falhando.', 'Fluxostato/DP incoerente.', 'Baixa vazão real.', 'Ar no circuito ou obstrução.'], checks:['Verificar bomba e sentido de operação.', 'Conferir pressões diferenciais e sensores.', 'Inspecionar filtros e strainers.', 'Avaliar presença de ar e válvulas fechadas.'], steps:['Confirmar se a vazão realmente caiu.', 'Checar bomba e instrumentação.', 'Só depois concluir falha de sensor.']},
    pump_no_start: { level:'Crítico', title:'Bomba não parte', causes:['Falta de alimentação/comando.', 'Permissivos não atendidos.', 'Proteção atuada.', 'Falha mecânica ou elétrica da bomba/conjunto.'], checks:['Conferir comando e potência.', 'Verificar intertravamentos.', 'Checar relé térmico/soft-starter.', 'Inspecionar acoplamento e carga mecânica.'], steps:['Separar comando de força.', 'Verificar permissivos.', 'Confirmar resposta da bomba.']},
    hot_return: { level:'Atenção', title:'Retorno quente persistente', causes:['Alta carga térmica contínua.', 'Baixa capacidade do sistema.', 'Válvulas/controle inadequados.', 'Vazão ou distribuição desequilibradas.'], checks:['Comparar demanda do ambiente.', 'Checar temperatura de ida.', 'Observar ΔT e abertura de válvulas.', 'Avaliar sequência operacional da CAG.'], steps:['Confirmar se é comportamento global ou local.', 'Checar geração, depois distribuição.', 'Documentar tendência do retorno.']}
  };
  function render(){
    const data = db[symptom.value]; if(!data) return;
    const insights=[];
    if(dt.value==='low') insights.push('ΔT baixo reforça excesso de vazão, bypass ou baixa carga/transferência.');
    if(dt.value==='high') insights.push('ΔT alto reforça baixa vazão, restrição hidráulica ou carga elevada.');
    if(flow.value==='low') insights.push('Vazão baixa desloca a prioridade para bomba, filtros, válvulas fechadas e restrições.');
    if(flow.value==='high') insights.push('Vazão alta pode derrubar ΔT e mascarar eficiência da troca térmica.');
    if(valve.value==='too_open') insights.push('Válvula muito aberta pode contribuir para ΔT baixo e controle instável.');
    if(valve.value==='restricted') insights.push('Válvula restrita pode explicar baixa capacidade e ΔT alto.');
    if(valve.value==='bypass') insights.push('Suspeita de bypass reforça mistura entre ida e retorno e ΔT artificialmente baixo.');
    if(pump.value==='fault' || pump.value==='off') insights.push('Falha/parada de bomba deve ser priorizada antes de aprofundar outras hipóteses.');
    badge.textContent=data.level; badge.className='case-badge ' + (data.level==='Crítico'?'negative':'warning');
    panel.innerHTML=`<div class="edt-result-block"><h4>${data.title}</h4><p>Ferramenta de apoio didático. Confirme sempre com medições reais, procedimento e dados do fabricante.</p></div><div class="edt-result-block"><h4>Hipóteses prováveis</h4><ul>${data.causes.map(i=>`<li>${i}</li>`).join('')}</ul></div><div class="edt-result-block"><h4>Verificações sugeridas</h4><ol>${data.checks.map(i=>`<li>${i}</li>`).join('')}</ol></div><div class="edt-result-block"><h4>Sequência inicial</h4><ol>${data.steps.map(i=>`<li>${i}</li>`).join('')}</ol></div><div class="edt-result-block"><h4>Leitura adicional pelas evidências</h4><ul>${(insights.length?insights:['Nenhuma evidência adicional selecionada além do sintoma principal.']).map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
    localStorage.setItem('hvacCagDiagnosticState', JSON.stringify({ symptom:symptom.value, dt:dt.value, flow:flow.value, valve:valve.value, pump:pump.value }));
  }
  run.addEventListener('click', render);
  reset.addEventListener('click', ()=>{ symptom.value='low_dt'; dt.value='unknown'; flow.value='unknown'; valve.value='unknown'; pump.value='unknown'; badge.textContent='Aguardando dados'; badge.className='case-badge warning'; panel.innerHTML='<p class="muted">Selecione as condições e clique em <strong>Gerar diagnóstico</strong>.</p>'; localStorage.removeItem('hvacCagDiagnosticState'); });
  document.querySelectorAll('.cag-quickcase').forEach(btn=>btn.addEventListener('click',()=>{ symptom.value=btn.dataset.symptom; dt.value=btn.dataset.dt; flow.value=btn.dataset.flow; valve.value=btn.dataset.valve; pump.value=btn.dataset.pump; render(); window.scrollTo({top:0,behavior:'smooth'});}));
  try{ const saved = JSON.parse(localStorage.getItem('hvacCagDiagnosticState')||'null'); if(saved){ symptom.value=saved.symptom||'low_dt'; dt.value=saved.dt||'unknown'; flow.value=saved.flow||'unknown'; valve.value=saved.valve||'unknown'; pump.value=saved.pump||'unknown'; render(); }}catch(e){}
}

function initializeHvacPrecisionDiagnosticTool() {
  const symptom = document.getElementById('pr-symptom');
  const air = document.getElementById('pr-air');
  const valve = document.getElementById('pr-valve');
  const drain = document.getElementById('pr-drain');
  const reheat = document.getElementById('pr-reheat');
  const run = document.getElementById('pr-run');
  const reset = document.getElementById('pr-reset');
  const panel = document.getElementById('pr-result-panel');
  const badge = document.getElementById('pr-result-badge');
  if(!run || run.dataset.bound === 'true') return;
  run.dataset.bound = 'true';
  const db = {
    high_supply_temp: { level:'Atenção', title:'Temperatura de insuflamento alta', causes:['Baixa troca térmica na serpentina.', 'Válvula de água gelada sem resposta ou fechada.', 'Baixo fluxo de ar e mistura inadequada.', 'Carga térmica acima do esperado.'], checks:['Conferir abertura da válvula.', 'Comparar temperatura de água gelada.', 'Verificar ventilador, filtros e serpentina.', 'Observar demanda e setpoint.'], steps:['Confirmar condição térmica.', 'Separar lado do ar de lado hidráulico.', 'Fechar hipótese com base em medições simples.']},
    low_airflow: { level:'Crítico', title:'Baixo fluxo de ar', causes:['Filtros sujos.', 'Falha de ventilador.', 'Obstrução na serpentina.', 'Correia/acionamento ou EC fan em falha.'], checks:['Inspecionar filtros.', 'Confirmar rotação/comando do ventilador.', 'Checar alarmes do fan.', 'Observar queda de pressão e sujeira geral.'], steps:['Restaurar o fluxo antes de outras conclusões.', 'Conferir ventilador.', 'Reavaliar temperatura após normalizar o ar.']},
    condensate_alarm: { level:'Crítico', title:'Alarme de condensado', causes:['Dreno obstruído.', 'Bandeja acumulando água.', 'Chave/sensor atuado.', 'Baixo fluxo de ar ou alta condensação local.'], checks:['Inspecionar dreno e bandeja.', 'Checar sensor/chave de nível.', 'Avaliar inclinação e escoamento.', 'Observar condição da serpentina e filtro.'], steps:['Eliminar risco de transbordo.', 'Limpar/normalizar drenagem.', 'Depois validar se o alarme persiste.']},
    high_humidity: { level:'Atenção', title:'Umidade alta', causes:['Baixa capacidade de desumidificação.', 'Ar insuficiente ou bypass.', 'Válvula sem resposta adequada.', 'Reheat ou lógica de controle interferindo na remoção de umidade.'], checks:['Comparar temperatura/umidade de retorno e insuflamento.', 'Checar condição da serpentina.', 'Validar válvula e controle.', 'Observar sequência de reheat.'], steps:['Relacionar umidade com temperatura e vazão.', 'Checar remoção de calor sensível/latente.', 'Ajustar a hipótese pela lógica do equipamento.']},
    valve_no_response: { level:'Atenção', title:'Válvula sem resposta', causes:['Atuador sem comando.', 'Válvula travada.', 'Sinal analógico/digital ausente.', 'Problema de automação ou alimentação do atuador.'], checks:['Conferir sinal de comando.', 'Verificar alimentação do atuador.', 'Observar curso/feedback da válvula.', 'Checar modo manual/auto na controladora.'], steps:['Separar problema mecânico da válvula de problema de comando.', 'Confirmar resposta real.', 'Normalizar o controle e observar efeito térmico.']},
    reheat_no_heat: { level:'Atenção', title:'Reheat sem aquecimento', causes:['Elemento sem potência.', 'Proteção/limite atuado.', 'Comando ausente.', 'Sequência de controle não habilitando o aquecimento.'], checks:['Confirmar comando e potência.', 'Verificar limites térmicos.', 'Checar continuidade/estado do elemento.', 'Observar permissivos de fluxo de ar.'], steps:['Confirmar se a lógica pede aquecimento.', 'Checar potência e proteção.', 'Só então concluir defeito do elemento.']}
  };
  function render(){
    const data = db[symptom.value]; if(!data) return;
    const insights=[];
    if(air.value==='restricted') insights.push('Fluxo restrito/filtro sujo pode explicar perda de capacidade, alta umidade e alarmes térmicos.');
    if(air.value==='fan_fault') insights.push('Falha de ventilador desloca a prioridade para o conjunto de insuflamento e permissivos.');
    if(valve.value==='stuck_closed') insights.push('Válvula fechada ou travada reduz fortemente a capacidade de resfriamento.');
    if(valve.value==='stuck_open') insights.push('Válvula travada aberta pode gerar controle ruim de temperatura e umidade.');
    if(drain.value==='blocked' || drain.value==='switch_alarm') insights.push('Condição de drenagem exige correção imediata para evitar transbordo e alarmes recorrentes.');
    if(reheat.value==='trip') insights.push('Reheat em trip reforça verificação de proteção, potência e permissivos de ar.');
    if(reheat.value==='off') insights.push('Reheat sem atuação pode ser comando, lógica ou ausência de potência, dependendo da demanda.');
    badge.textContent=data.level; badge.className='case-badge ' + (data.level==='Crítico'?'negative':'warning');
    panel.innerHTML=`<div class="edt-result-block"><h4>${data.title}</h4><p>Ferramenta de apoio didático. Confirme sempre com medições reais, procedimento e dados do fabricante.</p></div><div class="edt-result-block"><h4>Hipóteses prováveis</h4><ul>${data.causes.map(i=>`<li>${i}</li>`).join('')}</ul></div><div class="edt-result-block"><h4>Verificações sugeridas</h4><ol>${data.checks.map(i=>`<li>${i}</li>`).join('')}</ol></div><div class="edt-result-block"><h4>Sequência inicial</h4><ol>${data.steps.map(i=>`<li>${i}</li>`).join('')}</ol></div><div class="edt-result-block"><h4>Leitura adicional pelas evidências</h4><ul>${(insights.length?insights:['Nenhuma evidência adicional selecionada além do sintoma principal.']).map(i=>`<li>${i}</li>`).join('')}</ul></div>`;
    localStorage.setItem('hvacPrecisionDiagnosticState', JSON.stringify({ symptom:symptom.value, air:air.value, valve:valve.value, drain:drain.value, reheat:reheat.value }));
  }
  run.addEventListener('click', render);
  reset.addEventListener('click', ()=>{ symptom.value='high_supply_temp'; air.value='unknown'; valve.value='unknown'; drain.value='unknown'; reheat.value='unknown'; badge.textContent='Aguardando dados'; badge.className='case-badge warning'; panel.innerHTML='<p class="muted">Selecione as condições e clique em <strong>Gerar diagnóstico</strong>.</p>'; localStorage.removeItem('hvacPrecisionDiagnosticState'); });
  document.querySelectorAll('.pr-quickcase').forEach(btn=>btn.addEventListener('click',()=>{ symptom.value=btn.dataset.symptom; air.value=btn.dataset.air; valve.value=btn.dataset.valve; drain.value=btn.dataset.drain; reheat.value=btn.dataset.reheat; render(); window.scrollTo({top:0,behavior:'smooth'});}));
  try{ const saved = JSON.parse(localStorage.getItem('hvacPrecisionDiagnosticState')||'null'); if(saved){ symptom.value=saved.symptom||'high_supply_temp'; air.value=saved.air||'unknown'; valve.value=saved.valve||'unknown'; drain.value=saved.drain||'unknown'; reheat.value=saved.reheat||'unknown'; render(); }}catch(e){}
}


function initializeElectricalDiagnosticTool() {
  const equipment = document.getElementById('edt-equipment');
  const symptom = document.getElementById('edt-symptom');
  const power = document.getElementById('edt-power');
  const command = document.getElementById('edt-command');
  const protection = document.getElementById('edt-protection');
  const alarm = document.getElementById('edt-alarm');
  const run = document.getElementById('edt-run');
  const reset = document.getElementById('edt-reset');
  const panel = document.getElementById('edt-result-panel');
  const badge = document.getElementById('edt-result-badge');
  if(!equipment || !symptom || !run || !reset || !panel || !badge) return;
  if(run.dataset.bound === 'true') return;
  run.dataset.bound = 'true';

  const symptomCatalog = {
    motor_bomba: [
      { value: 'nao_liga', label: 'Não liga' },
      { value: 'desarma', label: 'Desarma / proteção atua' },
      { value: 'corrente_desequilibrada', label: 'Corrente desequilibrada / aquecimento' }
    ],
    ventilador_ec: [
      { value: 'nao_liga', label: 'Não liga' },
      { value: 'alarme_drive', label: 'Alarme / falha do ventilador EC' },
      { value: 'sem_resposta', label: 'Sem resposta ao comando' }
    ],
    resistencia: [
      { value: 'sem_aquecimento', label: 'Sem aquecimento' },
      { value: 'desarma_limite', label: 'Limite térmico atuando' }
    ],
    softstarter: [
      { value: 'nao_liga', label: 'Não parte' },
      { value: 'em_falha', label: 'Em falha / trip' }
    ],
    ats: [
      { value: 'sem_transferencia', label: 'Sem transferência' },
      { value: 'fonte_nao_reconhecida', label: 'Fonte não reconhecida / monitoramento incoerente' }
    ],
    painel_comando: [
      { value: 'bobina_sem_tensao', label: 'Bobina / enable sem tensão' },
      { value: 'parte_e_solta', label: 'Parte e solta' },
      { value: 'contator_fecha_sem_saida', label: 'Contator fecha sem entregar potência' }
    ]
  };

  const db = {
    'motor_bomba:nao_liga': {
      level: 'Atenção',
      title: 'Motor / bomba não liga',
      safety: 'Aplicar bloqueio e confirmar ausência de energia antes de qualquer medição invasiva. Verificar risco de partida inesperada.',
      causes: ['Ausência de alimentação principal no painel ou na saída de proteção.', 'Comando não chegando à bobina / entrada de start.', 'Permissivo aberto: fluxo, intertravamento, relé térmico, botão de stop ou lógica externa.', 'Falha na bobina do contator, soft-starter ou motor.'],
      measurements: ['Conferir tensão na entrada e saída do dispositivo de potência.', 'Medir tensão na bobina do contator ou borne de enable/start.', 'Verificar continuidade de fusíveis e estado do relé térmico.', 'Se o comando estiver correto, avaliar corrente e integridade da carga.'],
      steps: ['Definir se o problema está em potência ou comando.', 'Seguir o caminho do comando até localizar o ponto onde a tensão desaparece.', 'Depois confirmar a resposta da carga e das proteções.']
    },
    'motor_bomba:desarma': {
      level: 'Crítico',
      title: 'Motor / bomba desarmando',
      safety: 'Resetar sem investigar a causa pode agravar aquecimento, travamento mecânico ou dano ao enrolamento.',
      causes: ['Sobrecarga real da bomba ou do motor.', 'Relé térmico mal ajustado.', 'Corrente elevada por travamento, rotor preso, rolamento ou acoplamento.', 'Desequilíbrio de fases ou problema de alimentação.'],
      measurements: ['Medir corrente por fase e comparar entre elas.', 'Comparar ajuste do relé térmico com a placa.', 'Inspecionar acoplamento, mancal, bomba e condição mecânica.', 'Checar tensão entre fases e sinais de queda ou mau contato.'],
      steps: ['Coletar histórico da atuação.', 'Comparar grandezas elétricas e condição mecânica.', 'Só depois resetar e testar novamente.']
    },
    'motor_bomba:corrente_desequilibrada': {
      level: 'Crítico',
      title: 'Corrente desequilibrada / aquecimento',
      safety: 'Desequilíbrio de corrente pode degradar isolamento e causar sobretemperatura do motor.',
      causes: ['Perda parcial de fase.', 'Mau contato em borne, contator ou fusível.', 'Problema interno no motor ou diferença de carga entre fases.', 'Alimentação assimétrica.'],
      measurements: ['Medir corrente fase a fase com alicate amperímetro.', 'Confirmar tensão fase-fase na entrada e na saída do contator.', 'Inspecionar fusíveis, bornes e aperto elétrico.', 'Se necessário, avaliar isolamento e condição do motor.'],
      steps: ['Priorizar o circuito elétrico antes de concluir falha mecânica.', 'Comparar entrada e saída dos componentes.', 'Documentar as diferenças entre as fases.']
    },
    'ventilador_ec:nao_liga': {
      level: 'Atenção',
      title: 'Ventilador EC não liga',
      safety: 'Ventiladores EC possuem eletrônica integrada; respeite o procedimento do fabricante antes de isolar ou abrir o conjunto.',
      causes: ['Alimentação ausente.', 'Enable / comando ausente.', 'Bloqueio por alarme interno.', 'Falha no próprio ventilador ou placa integrada.'],
      measurements: ['Confirmar alimentação no ventilador.', 'Conferir sinal de enable / speed reference.', 'Ler alarme disponível na placa ou no BMS.', 'Verificar feedback de operação quando houver.'],
      steps: ['Separar alimentação, comando e resposta.', 'Validar permissivos do sistema de ar.', 'Investigar a camada eletrônica antes de substituir o conjunto.']
    },
    'ventilador_ec:alarme_drive': {
      level: 'Crítico',
      title: 'Ventilador EC com alarme',
      safety: 'Alarmes podem indicar sobrecorrente, rotor bloqueado, superaquecimento ou falha eletrônica. Evite partidas repetitivas sem investigação.',
      causes: ['Falha interna do drive EC.', 'Rotor bloqueado ou alta carga mecânica.', 'Problema na alimentação ou na referência.', 'Superaquecimento do conjunto.'],
      measurements: ['Registrar o código de falha.', 'Confirmar tensão de alimentação.', 'Inspecionar livre rotação e obstruções.', 'Comparar comando, feedback e condição térmica do conjunto.'],
      steps: ['Capturar o código.', 'Associar o código ao sintoma real.', 'Somente então avançar para reset e novo teste.']
    },
    'ventilador_ec:sem_resposta': {
      level: 'Atenção',
      title: 'Ventilador EC sem resposta ao comando',
      safety: 'Verificar se o sistema está em AUTO/MAN, se há demanda e se a lógica externa realmente está liberando o ventilador.',
      causes: ['Sinal de controle ausente ou fora de faixa.', 'Enable desabilitado.', 'Intertravamento externo.', 'Falha de comunicação ou parametrização.'],
      measurements: ['Conferir enable digital.', 'Medir sinal analógico quando houver.', 'Verificar modo de operação local/remoto.', 'Checar alarmes internos e feedback de status.'],
      steps: ['Separar comando digital e analógico.', 'Validar permissivos.', 'Comparar o estado esperado com o feedback real.']
    },
    'resistencia:sem_aquecimento': {
      level: 'Atenção',
      title: 'Resistência elétrica sem aquecimento',
      safety: 'Resistências podem estar associadas a limites térmicos e fluxo de ar. Nunca force o sistema sem garantir dissipação adequada.',
      causes: ['Ausência de tensão na carga.', 'Limite térmico aberto.', 'Elemento resistivo interrompido.', 'Comando presente, mas potência não chegando ao elemento.'],
      measurements: ['Confirmar tensão na entrada e na saída dos contatores.', 'Verificar continuidade do elemento com o circuito isolado.', 'Conferir limites térmicos e permissivos de ventilação.', 'Registrar corrente de operação, se houver.'],
      steps: ['Separar comando e potência.', 'Confirmar limites térmicos.', 'Somente depois concluir falha do elemento.']
    },
    'resistencia:desarma_limite': {
      level: 'Crítico',
      title: 'Limite térmico atuando',
      safety: 'Atuação repetida do limite é um aviso de aquecimento excessivo ou ausência de fluxo de ar. Não ignore a proteção.',
      causes: ['Baixo fluxo de ar.', 'Contator colado ou lógica indevida.', 'Elemento superaquecendo.', 'Limite térmico fatigado ou mal posicionado.'],
      measurements: ['Verificar fluxo de ar e operação do ventilador.', 'Conferir sequenciamento de comando.', 'Inspecionar estado do limitador e do elemento.', 'Medir corrente do circuito de aquecimento.'],
      steps: ['Corrigir a causa térmica.', 'Checar o posicionamento do sensor/limitador.', 'Só então liberar novo teste.']
    },
    'softstarter:nao_liga': {
      level: 'Atenção',
      title: 'Soft-starter não parte',
      safety: 'Não altere parâmetros sem registrar o estado anterior. Confirme antes as entradas de comando e permissivos.',
      causes: ['Start/enable ausente.', 'Permissivo externo não atendido.', 'Falha na alimentação de linha ou controle.', 'Parâmetro de comando incompatível com o modo usado.'],
      measurements: ['Ler estado da soft-starter.', 'Conferir bornes de start/stop ou entrada digital.', 'Verificar alimentação de potência e controle.', 'Comparar modo de comando com a lógica externa.'],
      steps: ['Separar o que é comando do que é falha interna.', 'Confirmar permissivos.', 'Testar novamente com registro de evidências.']
    },
    'softstarter:em_falha': {
      level: 'Crítico',
      title: 'Soft-starter em falha / trip',
      safety: 'Alarmes repetitivos podem indicar problema real de corrente, sequência ou motor. Não insista em rearme contínuo.',
      causes: ['Sobrecorrente ou rampa inadequada.', 'Perda de fase.', 'Falha interna da soft-starter.', 'Problema no motor ou na carga mecânica.'],
      measurements: ['Capturar código/descrição da falha.', 'Medir tensão de linha.', 'Comparar corrente do motor.', 'Checar parâmetros básicos e condição do motor.'],
      steps: ['Registrar falha.', 'Confirmar grandezas elétricas.', 'Correlacionar com a carga mecânica antes de rearmar.']
    },
    'ats:sem_transferencia': {
      level: 'Crítico',
      title: 'ATS sem transferência',
      safety: 'Equipamento crítico. Qualquer intervenção deve respeitar condição de carga, fontes e autorização operacional.',
      causes: ['Fonte não reconhecida como disponível.', 'Lógica / permissivos de transferência bloqueados.', 'Temporização ainda em curso.', 'Falha nos contatos auxiliares ou mecanismo.'],
      measurements: ['Conferir tensão nas duas fontes.', 'Verificar sensoriamento/monitoramento do ATS.', 'Checar permissivos, temporizações e estado lógico.', 'Confirmar feedback de posição e contatos auxiliares.'],
      steps: ['Separar ausência de fonte de bloqueio lógico.', 'Ler status completo do equipamento.', 'Só depois avaliar componente mecânico.']
    },
    'ats:fonte_nao_reconhecida': {
      level: 'Atenção',
      title: 'ATS não reconhece uma fonte',
      safety: 'Monitoramento errado pode impedir transferência ou retorno. Confirmar medições com cuidado antes de simular falha de fonte.',
      causes: ['Sensoriamento incorreto.', 'Falha no circuito de medição.', 'Parâmetro de faixa inadequado.', 'Problema real de tensão/frequência da fonte.'],
      measurements: ['Medir tensão diretamente na fonte afetada.', 'Comparar com a leitura percebida pelo ATS.', 'Checar cabos de medição, fusíveis e ajustes.', 'Verificar frequência e sequência quando aplicável.'],
      steps: ['Confirmar o valor real.', 'Comparar com o valor lido pelo ATS.', 'Investigar circuito de sensoriamento.']
    },
    'painel_comando:bobina_sem_tensao': {
      level: 'Atenção',
      title: 'Bobina / enable sem tensão',
      safety: 'Seguir o caminho do comando com método. Muitos defeitos são apenas intertravamentos ou proteções abertas.',
      causes: ['Botão de stop ou proteção NF aberta.', 'Permissivo de processo não atendido.', 'Transformador/fonte de comando ausente.', 'Falha na lógica externa ou CLP.'],
      measurements: ['Medir tensão de comando na origem e ao longo do circuito.', 'Checar continuidade dos contatos NF com circuito isolado.', 'Verificar permissivos de fluxo, pressão ou manutenção.', 'Confirmar fonte/transformador de comando.'],
      steps: ['Mapear o ponto onde a tensão desaparece.', 'Identificar o dispositivo que abriu a cadeia.', 'Restabelecer a causa raiz, não apenas o sintoma.']
    },
    'painel_comando:parte_e_solta': {
      level: 'Atenção',
      title: 'Contator parte e solta',
      safety: 'A condição costuma apontar falha de retenção. Evite múltiplas tentativas seguidas sem investigar o selo.',
      causes: ['Contato auxiliar de selo não fechando.', 'Comando momentâneo sem retenção.', 'Tensão de comando instável.', 'Intertravamento abrindo logo após a partida.'],
      measurements: ['Checar o ramo do selo.', 'Conferir contato auxiliar K1.', 'Verificar estabilidade da tensão da bobina.', 'Observar se algum permissivo abre logo após a energização.'],
      steps: ['Conferir o circuito de retenção.', 'Observar a sequência de partida.', 'Validar contatos auxiliares e intertravamentos.']
    },
    'painel_comando:contator_fecha_sem_saida': {
      level: 'Crítico',
      title: 'Contator fecha sem entregar potência',
      safety: 'Comando presente não garante potência efetiva. Tratar como possível falha de força até prova em contrário.',
      causes: ['Contato principal danificado.', 'Fusível aberto na potência.', 'Mau contato na saída.', 'Carga desconectada ou cabo interrompido.'],
      measurements: ['Comparar tensão na entrada e na saída do contator.', 'Verificar fusíveis e barramentos.', 'Inspecionar bornes e cabos da carga.', 'Se necessário, testar continuidade com circuito isolado.'],
      steps: ['Confirmar que o contator realmente fechou.', 'Comparar força antes/depois.', 'Localizar o ponto em que a potência deixa de existir.']
    }
  };

  function populateSymptoms(selectedEquipment, selectedSymptom) {
    const items = symptomCatalog[selectedEquipment] || [];
    symptom.innerHTML = items.map(item => `<option value="${item.value}">${item.label}</option>`).join('');
    if(selectedSymptom && items.some(item => item.value === selectedSymptom)) {
      symptom.value = selectedSymptom;
    }
  }

  function renderResult() {
    const key = `${equipment.value}:${symptom.value}`;
    const data = db[key];
    if(!data) {
      badge.textContent = 'Sem regra';
      panel.innerHTML = '<p class="muted">Não foi possível montar um diagnóstico para essa combinação.</p>';
      return;
    }

    const insights = [];
    if(power.value === 'no') insights.push('A ausência de potência principal desloca a prioridade para alimentação, proteção de entrada, seccionadora, disjuntor e disponibilidade da fonte.');
    if(power.value === 'unknown') insights.push('A potência principal ainda não foi confirmada. Essa deve ser uma das primeiras verificações.');
    if(command.value === 'no') insights.push('Como o comando / bobina / enable está ausente, a investigação deve priorizar permissivos, intertravamentos, botões, proteção NF e fonte de comando.');
    if(command.value === 'yes') insights.push('Comando presente indica que a lógica de partida chegou ao dispositivo. O foco pode migrar para potência, atuação do componente ou resposta da carga.');
    if(protection.value === 'tripped') insights.push('Proteção atuada sugere investigar corrente, sobrecarga, curto, travamento mecânico ou ajuste inadequado antes de simplesmente resetar.');
    if(alarm.value === 'yes') insights.push('Há alarme disponível. Registrar o código e correlacionar com o sintoma acelera bastante o fechamento da hipótese.');
    if(alarm.value === 'unknown') insights.push('Ainda não foi verificado se existe alarme/código. Vale consultar IHM, display, placa, BMS ou interface do equipamento.');

    badge.textContent = data.level;
    badge.className = 'case-badge ' + (data.level === 'Crítico' ? 'negative' : 'warning');
    panel.innerHTML = `
      <div class="edt-result-block">
        <h4>${data.title}</h4>
        <p>${data.safety}</p>
      </div>
      <div class="edt-result-block">
        <h4>Hipóteses iniciais mais prováveis</h4>
        <ul>${data.causes.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div class="edt-result-block">
        <h4>Medições e verificações sugeridas</h4>
        <ol>${data.measurements.map(item => `<li>${item}</li>`).join('')}</ol>
      </div>
      <div class="edt-result-block">
        <h4>Sequência inicial recomendada</h4>
        <ol>${data.steps.map(item => `<li>${item}</li>`).join('')}</ol>
      </div>
      <div class="edt-result-block">
        <h4>Leitura adicional com base nas evidências</h4>
        <ul>${insights.map(item => `<li>${item}</li>`).join('') || '<li>Nenhuma evidência adicional foi selecionada além da combinação principal.</li>'}</ul>
      </div>
    `;

    localStorage.setItem('electricalDiagnosticToolState', JSON.stringify({
      equipment: equipment.value,
      symptom: symptom.value,
      power: power.value,
      command: command.value,
      protection: protection.value,
      alarm: alarm.value
    }));
  }

  equipment.addEventListener('change', () => {
    populateSymptoms(equipment.value);
  });

  run.addEventListener('click', renderResult);

  reset.addEventListener('click', () => {
    equipment.value = 'motor_bomba';
    populateSymptoms('motor_bomba', 'nao_liga');
    power.value = 'yes';
    command.value = 'unknown';
    protection.value = 'unknown';
    alarm.value = 'unknown';
    badge.textContent = 'Aguardando dados';
    badge.className = 'case-badge warning';
    panel.innerHTML = '<p class="muted">Escolha os parâmetros e clique em <strong>Gerar diagnóstico</strong>.</p>';
    localStorage.removeItem('electricalDiagnosticToolState');
  });

  document.querySelectorAll('.edt-quickcase').forEach(btn => {
    btn.addEventListener('click', () => {
      equipment.value = btn.dataset.equipment;
      populateSymptoms(equipment.value, btn.dataset.symptom);
      power.value = btn.dataset.power;
      command.value = btn.dataset.command;
      protection.value = btn.dataset.protection;
      alarm.value = btn.dataset.alarm;
      renderResult();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  try {
    const saved = JSON.parse(localStorage.getItem('electricalDiagnosticToolState') || 'null');
    if(saved && saved.equipment) {
      equipment.value = saved.equipment;
      populateSymptoms(saved.equipment, saved.symptom);
      power.value = saved.power || 'yes';
      command.value = saved.command || 'unknown';
      protection.value = saved.protection || 'unknown';
      alarm.value = saved.alarm || 'unknown';
      renderResult();
      return;
    }
  } catch(e) {}

  populateSymptoms('motor_bomba', 'nao_liga');
}


function initializeModule10TroubleshootingCases() {
  const cases = {
    c1: {
      name: 'm10case1',
      correct: 'B',
      success: 'Correto. Bomba a 100% com ΔP baixo é leitura clássica de insuficiência hidráulica, restrição ou demanda elevada demais para o arranjo atual.',
      explanation: 'A resposta esperada é investigar capacidade hidráulica, restrição ou demanda excessiva. Reduzir setpoint ou mexer no by-pass sem validar a causa pode mascarar o problema e piorar o atendimento.'
    },
    c2: {
      name: 'm10case2',
      correct: 'A',
      success: 'Correto. Válvula aberta com alta temperatura de retorno e filtro sujo aponta fortemente para baixa vazão de ar e perda de capacidade do terminal.',
      explanation: 'A leitura inicial mais coerente é problema de ar: filtro saturado, ventilador com falha ou fluxo insuficiente. Sem ar atravessando bem a serpentina, o terminal perde capacidade mesmo com válvula aberta.'
    },
    c3: {
      name: 'm10case3',
      correct: 'A',
      success: 'Correto. A umidade sobe quando a serpentina perde capacidade de remoção latente, o que pode acontecer com água gelada mais quente e válvula já muito aberta.',
      explanation: 'A justificativa correta é perda de capacidade latente por água gelada mais quente ou insuficiência de capacidade na serpentina. Ajustar reheat sem investigar a causa ou culpar automaticamente o sensor tende a desviar o diagnóstico.'
    }
  };
  document.querySelectorAll('.m10-case-quiz').forEach(card => {
    const caseId = card.dataset.case;
    const cfg = cases[caseId];
    if(!cfg) return;
    const btn = card.querySelector('.m10-check-case');
    const box = card.querySelector('.m10-case-feedback');
    if(!btn || !box) return;
    if(btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click', () => {
      const selected = card.querySelector(`input[name="${cfg.name}"]:checked`);
      if(!selected) {
        box.className = 'm10-case-feedback danger';
        box.innerHTML = '<h4>Resposta não selecionada</h4><p>Escolha uma alternativa antes de verificar a resposta.</p>';
        return;
      }
      if(selected.value === cfg.correct) {
        box.className = 'm10-case-feedback success';
        box.innerHTML = `<h4>Resposta correta</h4><p>${cfg.success}</p>`;
      } else {
        box.className = 'm10-case-feedback danger';
        box.innerHTML = `<h4>Justificativa</h4><p>${cfg.explanation}</p>`;
      }
    });
  });
}

function initializeModule09ManualAutoSimulator() {
  const mode = document.getElementById('m9-mode-select');
  const demand = document.getElementById('m9-demand-select');
  const vfd = document.getElementById('m9-vfd-select');
  const sensor = document.getElementById('m9-sensor-select');
  const flow = document.getElementById('m9-flow-select');
  const mainFault = document.getElementById('m9-main-fault-select');
  const standby = document.getElementById('m9-standby-select');
  const run = document.getElementById('m9-run-sim');
  const reset = document.getElementById('m9-reset-sim');
  if(!mode || !demand || !vfd || !sensor || !flow || !mainFault || !standby || !run || !reset) return;
  if(run.dataset.bound === 'true') return;
  run.dataset.bound = 'true';

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if(el) el.textContent = value;
  };

  const diagnose = (message) => {
    const el = document.getElementById('m9-sim-diagnostic');
    if(el) el.innerHTML = '<h4>Interpretação</h4><p>' + message + '</p>';
  };

  const render = () => {
    const isManual = mode.value === 'manual';
    const hasDemand = demand.value === 'yes';
    const vfdOk = vfd.value === 'ok';
    const sensorOk = sensor.value === 'ok';
    const flowOk = flow.value === 'ok';
    const mainFailed = mainFault.value === 'yes';
    const standbyAvailable = standby.value === 'yes';

    let modeResult = isManual ? 'Manual' : 'Automático';
    let clpResult = isManual ? 'Bloqueado' : 'Habilitado';
    let seqResult = 'Aguardando';
    let standbyResult = standbyAvailable ? 'Disponível' : 'Indisponível';
    let message = '';

    if(isManual) {
      seqResult = hasDemand ? 'Sem comando automático' : 'Sem demanda';
      if(mainFailed && standbyAvailable && hasDemand) {
        standbyResult = 'Não assume';
        message = 'O equipamento está em MANUAL. Mesmo com demanda e falha do principal, a lógica automática não consegue assumir a sequência como faria em AUTO. Esse é um risco operacional clássico.';
      } else {
        message = 'Em MANUAL, o CLP não conduz a sequência principal. O operador assume a intervenção local, e a automação perde parte da capacidade de resposta automática.';
      }
    } else if(!hasDemand) {
      seqResult = 'Sem partida';
      message = 'O sistema está em AUTO, mas sem demanda. A lógica permanece habilitada, porém não precisa comandar a operação.';
    } else if(!vfdOk || !sensorOk || !flowOk) {
      seqResult = 'Bloqueada';
      const reasons = [];
      if(!vfdOk) reasons.push('VFD/proteção indisponível');
      if(!sensorOk) reasons.push('sensor inválido');
      if(!flowOk) reasons.push('fluxo não confirmado');
      message = 'O sistema está em AUTO, mas a sequência foi bloqueada por permissivo não atendido: ' + reasons.join(', ') + '. Antes de partir, a lógica precisa ver condição segura.';
      if(mainFailed && standbyAvailable) standbyResult = 'Pronta, porém bloqueada';
    } else if(mainFailed) {
      seqResult = 'Principal falhado';
      if(standbyAvailable) {
        standbyResult = 'Assumiu';
        message = 'O sistema está em AUTO, a demanda existe e os permissivos estão válidos. Como o principal falhou, a lógica N+1 chama a reserva e mantém a continuidade operacional.';
      } else {
        standbyResult = 'Sem reserva';
        message = 'O sistema está em AUTO e detectou falha do principal, mas não há reserva disponível. Essa condição tende a gerar alarme crítico por risco ao atendimento da carga.';
      }
    } else {
      seqResult = 'Operação normal';
      standbyResult = standbyAvailable ? 'Em espera' : 'Indisponível';
      message = 'O sistema está em AUTO, a demanda existe, os permissivos estão válidos e o equipamento principal está apto. A lógica pode assumir normalmente o controle da sequência.';
    }

    setText('m9-mode-result', modeResult);
    setText('m9-clp-result', clpResult);
    setText('m9-seq-result', seqResult);
    setText('m9-standby-result', standbyResult);
    diagnose(message);
  };

  run.addEventListener('click', render);
  reset.addEventListener('click', () => {
    mode.value = 'manual';
    demand.value = 'yes';
    vfd.value = 'ok';
    sensor.value = 'ok';
    flow.value = 'ok';
    mainFault.value = 'no';
    standby.value = 'yes';
    setText('m9-mode-result', '--');
    setText('m9-clp-result', '--');
    setText('m9-seq-result', '--');
    setText('m9-standby-result', '--');
    diagnose('Escolha as condições e clique em “Executar simulação”.');
  });

  reset.click();
}

function initializeModule08HydraulicSimulator() {
  const sp = document.getElementById('m8-sp');
  const pumps = document.getElementById('m8-pumps');
  const load = document.getElementById('m8-load');
  const bypass = document.getElementById('m8-bypass');
  if(!sp || !pumps || !load || !bypass) return;
  if(sp.dataset.bound === 'true') return;
  sp.dataset.bound = 'true';

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if(el) el.textContent = value;
  };

  const render = () => {
    const spv = parseFloat(sp.value);
    const pumpCount = parseInt(pumps.value, 10);
    const loadPct = parseFloat(load.value);
    const bypassPct = parseFloat(bypass.value);

    setText('m8-sp-label', spv.toFixed(2));
    setText('m8-pumps-label', String(pumpCount));
    setText('m8-load-label', String(Math.round(loadPct)));
    setText('m8-bypass-label', String(Math.round(bypassPct)));

    const usefulDemand = loadPct / 100;
    const bypassLoss = bypassPct / 100;
    const pumpCapacity = pumpCount * 0.62;
    const effectiveHydraulicCapacity = Math.max(0.15, pumpCapacity * (1 - bypassLoss * 0.55));
    const demandFactor = 0.55 + usefulDemand * 0.95;
    const dp = Math.max(0.15, effectiveHydraulicCapacity / demandFactor);
    const error = spv - dp;
    let pid = 52 + (error * 42) + (usefulDemand * 18) + (bypassLoss * 20) - ((pumpCount - 1) * 7);
    pid = Math.max(20, Math.min(100, pid));
    const hz = 30 + (pid / 100) * 30;

    let state = 'Estável';
    let message = 'Pressão estimada próxima da referência didática. Confirme sempre com instrumentos reais de campo.';
    if(dp < spv * 0.82){
      state = 'Pressão baixa';
      message = 'Delta P abaixo do setpoint: a lógica tenderia a acelerar bombas. Investigue by-pass, válvulas, filtros, ar, sensores e disponibilidade de bombas.';
    }else if(dp > spv * 1.22){
      state = 'Pressão alta';
      message = 'Delta P acima do setpoint: pode haver baixa demanda, válvulas fechadas, setpoint alto ou by-pass insuficiente.';
    }else if(bypassPct > 50){
      state = 'By-pass elevado';
      message = 'By-pass muito aberto pode provocar curto-circuito hidráulico e reduzir Delta T útil nos consumidores.';
    }else if(pid > 88){
      state = 'PID alto';
      message = 'Comando PID elevado indica esforço para manter pressão. Verifique se a frequência alta está compatível com vazão e pressão reais.';
    }

    setText('m8-dp-result', dp.toFixed(2) + ' bar');
    setText('m8-pid-result', Math.round(pid) + ' %');
    setText('m8-hz-result', hz.toFixed(1) + ' Hz');
    setText('m8-state-result', state);
    const fill = document.getElementById('m8-meter-fill');
    if(fill) fill.style.width = Math.round(pid) + '%';
    const diag = document.getElementById('m8-sim-diagnostic');
    if(diag) diag.innerHTML = '<h4>Interpretação</h4><p>' + message + '</p>';
  };

  [sp, pumps, load, bypass].forEach(el => el.addEventListener('input', render));
  render();
}

function initializeModule01CycleAnimation() {
  const nodes = document.querySelectorAll('.cycle-node');
  const title = document.getElementById('module01-cycle-status-title');
  const text = document.getElementById('module01-cycle-status-text');
  const badge = document.getElementById('module01-cycle-status-badge');

  if (!nodes.length || !title || !text || !badge) return;

  const stages = [
    {
      selector: '.cycle-node.compressor',
      title: 'Compressor',
      text: 'O compressor recebe vapor de baixa pressão vindo do evaporador e eleva sua pressão e temperatura. Esse processo é fundamental para permitir a rejeição de calor no condensador.',
      badgeText: 'Alta pressão / alta temperatura',
      badgeClass: 'high'
    },
    {
      selector: '.cycle-node.condenser',
      title: 'Condensador',
      text: 'No condensador, o refrigerante rejeita calor para o meio externo. Ao perder energia térmica, ele tende a passar do estado de vapor para líquido.',
      badgeText: 'Rejeição de calor / região de alta',
      badgeClass: 'high'
    },
    {
      selector: '.cycle-node.expansion',
      title: 'Dispositivo de Expansão',
      text: 'O dispositivo de expansão provoca uma queda brusca de pressão e controla a alimentação do evaporador. Essa redução de pressão prepara o refrigerante para absorver calor novamente.',
      badgeText: 'Queda de pressão / alimentação',
      badgeClass: 'low'
    },
    {
      selector: '.cycle-node.evaporator',
      title: 'Evaporador',
      text: 'No evaporador, o refrigerante absorve calor do ambiente climatizado. Ao ganhar calor, ele evapora e retorna ao compressor como vapor.',
      badgeText: 'Absorção de calor / baixa pressão',
      badgeClass: 'low'
    }
  ];

  let currentIndex = 0;

  if (window.module01CycleInterval) {
    clearInterval(window.module01CycleInterval);
  }

  function updateStage(index) {
    nodes.forEach(node => node.classList.remove('active-stage'));

    const stage = stages[index];
    const activeNode = document.querySelector(stage.selector);

    if (activeNode) {
      activeNode.classList.add('active-stage');
    }

    title.textContent = stage.title;
    text.textContent = stage.text;

    badge.textContent = stage.badgeText;
    badge.classList.remove('high', 'low');
    badge.classList.add(stage.badgeClass);
  }

  updateStage(currentIndex);

  window.module01CycleInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= stages.length) {
      currentIndex = 0;
    }
    updateStage(currentIndex);
  }, 2500);
} 