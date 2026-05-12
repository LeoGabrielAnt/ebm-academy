# EBM-ACADEMY-GAMIFICATION-CORE-V1-LIMPO

Versão limpa da Fase 1 de gamificação da EBM Academy.

## O que mudou nesta versão

- Removidos os ícones personalizados dos pacotes enviados.
- Mantidos apenas ícones comuns via Font Awesome, que já está carregado no `index.html`.
- Visual simplificado: cards menores, menos brilho, menos gradientes e menos peso visual.
- Mantidas as funções da Fase 1: XP, níveis, medalhas, status dos módulos, histórico de tentativas, página Meu Progresso, Continuar de onde parei e liberação progressiva.

## Arquivos principais

```text
css/gamification-core-v1.css
js/gamification-core-v1.js
```

## Integração no index.html

No `<head>`, depois do `css/style.css`:

```html
<link rel="stylesheet" href="css/gamification-core-v1.css">
```

No final do `<body>`, carregue o core depois do `modules.js` e antes do `app.js`:

```html
<script src="js/modules.js"></script>
<script src="js/gamification-core-v1.js"></script>
<script src="js/app.js"></script>
<script src="js/modulo06-pid-sim.js"></script>
```

## Observação

Esta versão não usa a pasta `assets/icons/gamification/`. Se essa pasta existir de testes anteriores, ela pode ser removida sem afetar esta versão limpa.
