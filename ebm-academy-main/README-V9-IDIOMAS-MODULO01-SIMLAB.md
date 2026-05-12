# EBM Academy V9 — Idiomas + SimLab no Módulo 01

## Entregas incluídas

- Integração do SimLab **Ciclo Básico de Refrigeração** ao **Módulo 01**.
- Seletor de idioma com ícones no topo da plataforma:
  - 🇧🇷 Português
  - 🇪🇸 Español
  - 🇺🇸 English
- Sistema centralizado em `js/i18n.js`, preparado para as próximas inclusões multilíngues.
- Módulo 01 disponível em:
  - `modules/modulo01.html` — Português
  - `modules/i18n/modulo01.es.html` — Español
  - `modules/i18n/modulo01.en.html` — English
- Simulador integrado em:
  - `simulators/ciclo-basico/`
- Preservação da base da V8:
  - Firebase Auth
  - Firestore Progress
  - trilhas HVAC e Elétrica
  - gamificação e avaliações existentes

## Como funciona o idioma

O idioma selecionado é salvo em `localStorage` pela chave:

```js
ebm-language
```

O carregamento do Módulo 01 é resolvido dinamicamente:

- `pt` → `modules/modulo01.html`
- `es` → `modules/i18n/modulo01.es.html`
- `en` → `modules/i18n/modulo01.en.html`

O iframe do simulador também recebe o idioma via query string:

```text
simulators/ciclo-basico/index.html?embed=1&lang=pt|es|en
```

## Preparação para próximas criações

A estrutura criada permite traduzir os próximos módulos e ferramentas de forma incremental, sem reestruturar o site. Para adicionar um novo módulo multilíngue:

1. Criar o arquivo traduzido em `modules/i18n/`.
2. Adicionar a rota correspondente em `js/i18n.js` / `localizedModuleUrl`.
3. Garantir que simuladores e componentes interativos leiam o idioma selecionado.

## Observação importante

Nesta versão, o conteúdo completo do **Módulo 01** e o **SimLab integrado** já estão preparados para PT / ES / EN. Os demais módulos permanecem em português e foram mantidos estáveis para tradução progressiva nas próximas versões.
