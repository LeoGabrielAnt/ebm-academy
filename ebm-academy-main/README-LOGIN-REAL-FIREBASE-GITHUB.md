# EBM Academy — V7 Login Real Firebase para GitHub Pages

Esta versão prepara a plataforma para teste online no GitHub Pages com login real usando **Firebase Authentication**.

## O que foi incluído

- Login por e-mail e senha
- Cadastro de usuário
- Recuperação de senha
- Logout real
- Proteção da área interna por sessão Firebase
- Exibição do e-mail logado no portal e no treinamento
- Arquivo separado `js/firebase-config.js` para configurar o Firebase
- Compatível com GitHub Pages, pois continua sendo um projeto estático

## Como configurar o Firebase

1. Acesse o Firebase Console.
2. Crie um projeto.
3. Vá em **Authentication > Sign-in method**.
4. Ative **Email/Password**.
5. Vá em **Project settings > Your apps**.
6. Crie um app Web.
7. Copie o objeto `firebaseConfig`.
8. Abra o arquivo:

```text
js/firebase-config.js
```

9. Substitua os campos `COLE_AQUI...` pelos dados reais do Firebase.

## Domínio autorizado

Para testar no GitHub Pages, adicione o domínio:

```text
seu-usuario.github.io
```

em:

```text
Firebase Console > Authentication > Settings > Authorized domains
```

Se usar domínio próprio, adicione também esse domínio.

## Como subir no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos da pasta do projeto.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, selecione:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Salve e aguarde o link do GitHub Pages.

## Observação importante

A configuração do Firebase fica visível no front-end, isso é normal em apps Web Firebase. A segurança real deve ser feita por:

- Authentication habilitado corretamente
- domínios autorizados
- regras de segurança do Firebase, caso futuramente use Firestore/Storage

Nesta versão, o progresso ainda permanece no navegador via localStorage. Na etapa de produção, o próximo avanço recomendado é sincronizar progresso, certificados e tentativas no Firestore por usuário.
