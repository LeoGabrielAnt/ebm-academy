// EBM Academy — Configuração Firebase
// 1) Crie um projeto em https://console.firebase.google.com/
// 2) Ative Authentication > Sign-in method > Email/Password
// 2.1) Ative Firestore Database em modo Production ou Teste controlado
// 3) Em Project settings > Your apps > Web app, copie o objeto firebaseConfig abaixo
// 4) Para teste no GitHub Pages, adicione seu domínio autorizado:
//    Authentication > Settings > Authorized domains > seu-usuario.github.io

window.EBM_FIREBASE_CONFIG = {
  apiKey: "COLE_AQUI_API_KEY",
  authDomain: "COLE_AQUI_AUTH_DOMAIN",
  projectId: "COLE_AQUI_PROJECT_ID",
  storageBucket: "COLE_AQUI_STORAGE_BUCKET",
  messagingSenderId: "COLE_AQUI_MESSAGING_SENDER_ID",
  appId: "COLE_AQUI_APP_ID"
};
