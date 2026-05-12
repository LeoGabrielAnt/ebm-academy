# EBM Academy V8 — Firebase Auth + Firestore Progress

Esta versão mantém o login real via Firebase Authentication e adiciona sincronização de progresso com **Firestore**.

## O que foi incluído
- Sincronização por usuário logado
- Salvamento na nuvem de:
  - progresso dos módulos
  - checklists concluídos
  - quizzes aprovados
  - módulos concluídos
  - XP, níveis, medalhas e histórico de tentativas da gamificação
  - avaliações finais HVAC e Elétrica
  - estados das ferramentas de diagnóstico
  - preferência de tema
- Histórico básico de acesso em `users/{uid}/accessLogs`
- Fallback local: se a nuvem falhar, o navegador continua salvando em `localStorage`
- Status visual de sincronização no topo da plataforma

## Arquivos novos/alterados
- `js/firebase-sync.js` — novo módulo de sincronização Firestore
- `js/firebase-config.js` — comentário atualizado para ativar Firestore
- `js/firebase-auth.js` — expõe instâncias internas para integração
- `js/modules.js` — carrega progresso da nuvem após login
- `index.html` — adiciona Firebase Firestore compat e status de nuvem
- `css/style.css` — estilos do status de sincronização

## Configuração no Firebase
1. Crie ou use seu projeto Firebase.
2. Ative **Authentication > Sign-in method > Email/Password**.
3. Ative **Firestore Database**.
4. Preencha `js/firebase-config.js` com as credenciais do app Web.
5. Adicione o domínio do GitHub Pages em:
   `Authentication > Settings > Authorized domains`.

## Regras Firestore sugeridas para teste controlado
Use regras por usuário, para cada pessoa acessar apenas seus próprios dados:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Estrutura de dados criada
- `users/{uid}` — perfil básico e último login
- `users/{uid}/academy/progress` — estado de progresso principal
- `users/{uid}/accessLogs/{autoId}` — registros básicos de acesso

## Observação
Esta versão é adequada para teste online no GitHub Pages. Para produção final, ainda recomendo revisar regras, permissões, privacidade, política de dados e estratégia de backup.
