// EBM Academy V2 — JS consolidado e compatível com módulos completos.
const TRACK_MODULES = ['modulo01','modulo02','modulo03','modulo04','modulo05','modulo06'];
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
};
let activeQuizState = {};

document.addEventListener('DOMContentLoaded', initializeAcademy);

function initializeAcademy() {
  initializeTheme();
  initializeShellButtons();
  updateProgress();
  if (localStorage.getItem('academyLoggedIn') === 'true') showPortal(); else showLogin();
}
function showLogin() { document.getElementById('login-screen')?.classList.remove('hidden'); document.getElementById('portal-shell')?.classList.add('hidden'); document.getElementById('training-shell')?.classList.add('hidden'); }
function showPortal() { document.getElementById('login-screen')?.classList.add('hidden'); document.getElementById('portal-shell')?.classList.remove('hidden'); document.getElementById('training-shell')?.classList.add('hidden'); loadPortalPage('portal-home'); }
function openTraining(page='training-home') { document.getElementById('login-screen')?.classList.add('hidden'); document.getElementById('portal-shell')?.classList.add('hidden'); document.getElementById('training-shell')?.classList.remove('hidden'); loadTrainingPage(page); }
function initializeShellButtons() {
  document.getElementById('login-button')?.addEventListener('click',()=>{localStorage.setItem('academyLoggedIn','true'); showPortal();});
  document.getElementById('logout-button')?.addEventListener('click',()=>{localStorage.setItem('academyLoggedIn','false'); showLogin();});
  document.getElementById('back-portal-button')?.addEventListener('click',()=>showPortal());
  document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',(e)=>{e.preventDefault(); loadTrainingPage(a.dataset.page);}));
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
function setActiveMenu(base) { document.querySelectorAll('.menu a').forEach(a=>{ a.classList.toggle('active', a.dataset.page === base); }); }
function getModuleId(page) { const m = String(page).match(/modulo\d{2}/); return m ? m[0] : null; }

function initializeTheme() {
  if(localStorage.getItem('academyTheme')==='light') document.body.classList.add('light-mode'); else document.body.classList.remove('light-mode');
  updateThemeButtons();
  ['portal-theme-toggle','training-theme-toggle'].forEach(id=>{ const b=document.getElementById(id); if(!b) return; b.addEventListener('click',()=>{ document.body.classList.toggle('light-mode'); localStorage.setItem('academyTheme', document.body.classList.contains('light-mode')?'light':'dark'); updateThemeButtons(); }); });
}
function updateThemeButtons() { const isLight=document.body.classList.contains('light-mode'); ['portal-theme-toggle','training-theme-toggle'].forEach(id=>{ const b=document.getElementById(id); if(b) b.innerHTML = isLight ? '<i class="fa-solid fa-moon"></i><span>Modo Escuro</span>' : '<i class="fa-solid fa-sun"></i><span>Modo Claro</span>'; }); }

function initializePageFeatures(page) {
  initializeModuleNavAutoHide();
  initializeBackToTop();
  initializeRefrigerationTools();

  const mid = getModuleId(page);

  if (mid && moduleConfig[mid]) {
    if (String(page).endsWith('/quiz')) {
      initializeRandomQuiz(mid);
      initializeCompletion(mid);
      restoreCertificate(mid);
    } else {
      initializeChecklist(mid);
      initializeQuizButton(mid);
    }
  }

  if (page === 'modulo01') {
    initializeModule01CycleAnimation();
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
    return {question:q.question, options:randomized, correctAnswer:randomized.find(o=>o.isCorrect).label};
  });
  box.innerHTML = activeQuizState[mid].map((item,index)=>{ const n=index+1; return `<div class="card quiz-question"><h3>${n}. ${item.question}</h3>${item.options.map(o=>`<label><input type="radio" name="q${n}" value="${o.label}"><strong>${o.label})</strong> ${o.text}</label>`).join('')}</div>`; }).join('');
}
function processRandomQuiz(mid) {
  const cfg=moduleConfig[mid], result=document.getElementById(cfg.result), complete=document.getElementById(cfg.complete), qs=activeQuizState[mid]||[]; if(!result || !qs.length) return;
  let score=0, unanswered=[];
  qs.forEach((item,index)=>{ const n=index+1; const selected=document.querySelector(`input[name="q${n}"]:checked`); if(!selected) unanswered.push(n); else if(selected.value===item.correctAnswer) score++; });
  if(unanswered.length) { result.innerHTML='<div class="result-card warning"><h3>Avaliação incompleta</h3><p>Responda todas as 5 perguntas antes de enviar.</p></div>'; return; }
  if(score>=3) { localStorage.setItem(cfg.approvedKey,'true'); result.innerHTML=`<div class="result-card success"><h3>Aprovado</h3><p>Você acertou ${score} de 5 perguntas.</p><p>Critério mínimo atendido: 3 acertos.</p><p>Agora o botão de conclusão do módulo está liberado.</p></div>`; if(complete) { complete.disabled=false; complete.classList.remove('btn-disabled'); } }
  else { localStorage.setItem(cfg.approvedKey,'false'); result.innerHTML=`<div class="result-card danger"><h3>Revisão necessária</h3><p>Você acertou ${score} de 5 perguntas.</p><p>Para concluir o módulo, é necessário acertar pelo menos 3 perguntas.</p><p>Clique em "Refazer respostas" para nova tentativa com perguntas e alternativas aleatórias.</p></div>`; if(complete) { complete.disabled=true; complete.classList.add('btn-disabled'); } }
}
function resetRandomQuiz(mid) { const cfg=moduleConfig[mid]; const form=document.getElementById(cfg.form), result=document.getElementById(cfg.result), complete=document.getElementById(cfg.complete); if(form) form.reset(); if(result) result.innerHTML=''; localStorage.setItem(cfg.approvedKey,'false'); if(complete) { complete.disabled=true; complete.classList.add('btn-disabled'); } generateRandomQuiz(mid); }
function shuffle(arr) { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; }

function initializeCompletion(mid) {
  const cfg=moduleConfig[mid], btn=document.getElementById(cfg.complete); if(!btn) return;
  const approved=localStorage.getItem(cfg.approvedKey)==='true'; btn.disabled=!approved; btn.classList.toggle('btn-disabled', !approved);
  btn.addEventListener('click',()=>{ if(localStorage.getItem(cfg.approvedKey)!=='true') { alert('Para concluir o módulo, é necessário ser aprovado no quiz.'); return; } const completed=getCompletedModules(); if(!completed.includes(mid)) { completed.push(mid); localStorage.setItem('completedModules',JSON.stringify(completed)); } btn.innerHTML='Módulo concluído'; btn.disabled=true; btn.classList.add('btn-disabled'); updateProgress(); showCertificate(mid); });
}
function getCompletedModules() { try { return JSON.parse(localStorage.getItem('completedModules')) || []; } catch(e) { return []; } }
function updateProgress() { const completed=getCompletedModules().filter(m=>TRACK_MODULES.includes(m)); const pct=Math.round((completed.length/TRACK_MODULES.length)*100); document.querySelectorAll('.progress-fill').forEach(b=>b.style.width=`${pct}%`); document.querySelectorAll('.progress-text').forEach(t=>t.innerHTML=`${pct}% concluído`); }
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