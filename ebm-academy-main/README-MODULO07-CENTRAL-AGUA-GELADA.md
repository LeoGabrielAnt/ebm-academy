# EBM Academy — Módulo 07 Central de Água Gelada

Pacote de integração do Módulo 07 para a EBM Academy V2 com Gamification Core V1 Limpo.

## Arquivos alterados/adicionados

- `modules/modulo07.html`
- `modules/modulo07/quiz.html`
- `js/modules.js`
- `css/style.css`
- `js/gamification-core-v1.js`
- `index.html`

## O que foi incluído

- Aula teórica completa sobre Central de Água Gelada.
- Diagrama didático da arquitetura de produção, bombeamento, distribuição e retorno.
- Calculadora didática de Delta T, kW e TR.
- Checklist de aprendizagem.
- Banco com 20 perguntas para sorteio aleatório de 5 questões.
- Certificado do Módulo 07.
- Integração com gamificação, XP, progresso, tentativa e liberação progressiva.

## Observações técnicas

A fórmula da calculadora é didática para água pura:

`kW ≈ vazão (m³/h) × 1,163 × Delta T`

Para água com glicol, aplicar fatores de correção conforme concentração, temperatura e documentação do fabricante.

## Como testar

1. Limpe o progresso local se quiser testar do zero:

```js
localStorage.clear();
location.reload();
```

2. Conclua os módulos anteriores ou libere via console para testar diretamente:

```js
localStorage.setItem('completedModules', JSON.stringify(['modulo01','modulo02','modulo03','modulo04','modulo05','modulo06']));
location.reload();
```

3. Abra o menu `Central Água Gelada`.
4. Marque o checklist.
5. Faça a avaliação.
6. Conclua o módulo e confira Meu Progresso.
