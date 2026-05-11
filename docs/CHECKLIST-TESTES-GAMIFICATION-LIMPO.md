# Checklist de Testes — Gamification Core V1 Limpo

1. Abra o `index.html`.
2. Entre na plataforma.
3. Verifique se aparece o card de progresso com visual simples.
4. Acesse **Home Treinamento** e confirme o botão **Continuar**.
5. Acesse **Meu Progresso** pelo menu lateral.
6. Confirme que os módulos aparecem com status: Liberado, Avaliação, Aprovado, Concluído ou Bloqueado.
7. Faça checklist e quiz em um módulo de teste.
8. Confirme XP, nível, medalhas e histórico de tentativas.
9. Tente acessar um módulo bloqueado antes de concluir o anterior.
10. Teste no modo claro e no modo escuro.

Para zerar os dados de teste no console:

```js
localStorage.clear();
location.reload();
```
