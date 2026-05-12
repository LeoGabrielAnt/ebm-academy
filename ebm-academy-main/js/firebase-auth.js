// EBM Academy — Login real com Firebase Authentication
(function () {
  function hasFirebase() {
    return typeof window.firebase !== 'undefined' && window.firebase.auth && window.firebase.initializeApp;
  }

  function isConfigReady() {
    const cfg = window.EBM_FIREBASE_CONFIG || {};
    return Boolean(
      cfg.apiKey &&
      cfg.authDomain &&
      cfg.projectId &&
      !String(cfg.apiKey).includes('COLE_AQUI') &&
      !String(cfg.authDomain).includes('COLE_AQUI') &&
      !String(cfg.projectId).includes('COLE_AQUI')
    );
  }

  let app = null;
  let auth = null;

  function initFirebase() {
    if (!hasFirebase() || !isConfigReady()) return null;
    if (!app) {
      app = window.firebase.apps && window.firebase.apps.length
        ? window.firebase.app()
        : window.firebase.initializeApp(window.EBM_FIREBASE_CONFIG);
      auth = window.firebase.auth();
      auth.setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
    }
    return auth;
  }

  window.EBMAuth = {
    isConfigured: function () {
      return hasFirebase() && isConfigReady();
    },

    init: function (onUser, onNoUser) {
      const authInstance = initFirebase();
      if (!authInstance) {
        if (typeof onNoUser === 'function') onNoUser(null);
        return function () {};
      }

      return authInstance.onAuthStateChanged(function (user) {
        if (user) {
          window.EBM_CURRENT_USER = {
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || ''
          };
          localStorage.setItem('academyLoggedIn', 'true');
          localStorage.setItem('academyAuthUid', user.uid);
          localStorage.setItem('academyAuthEmail', user.email || '');
          if (typeof onUser === 'function') onUser(user);
        } else {
          window.EBM_CURRENT_USER = null;
          localStorage.setItem('academyLoggedIn', 'false');
          localStorage.removeItem('academyAuthUid');
          localStorage.removeItem('academyAuthEmail');
          if (typeof onNoUser === 'function') onNoUser(null);
        }
      });
    },

    signIn: function (email, password) {
      const authInstance = initFirebase();
      if (!authInstance) return Promise.reject(new Error('Firebase não configurado.'));
      return authInstance.signInWithEmailAndPassword(email, password);
    },

    register: function (email, password) {
      const authInstance = initFirebase();
      if (!authInstance) return Promise.reject(new Error('Firebase não configurado.'));
      return authInstance.createUserWithEmailAndPassword(email, password);
    },

    resetPassword: function (email) {
      const authInstance = initFirebase();
      if (!authInstance) return Promise.reject(new Error('Firebase não configurado.'));
      return authInstance.sendPasswordResetEmail(email);
    },

    signOut: function () {
      const authInstance = initFirebase();
      if (!authInstance) {
        localStorage.setItem('academyLoggedIn', 'false');
        return Promise.resolve();
      }
      return authInstance.signOut();
    },

    getFirebaseApp: function () {
      return app;
    },

    getAuthInstance: function () {
      return auth;
    },

    errorMessage: function (error) {
      const code = error && error.code ? error.code : '';
      const map = {
        'auth/invalid-email': 'E-mail inválido.',
        'auth/user-disabled': 'Usuário desativado.',
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/wrong-password': 'Senha incorreta.',
        'auth/invalid-credential': 'E-mail ou senha incorretos.',
        'auth/email-already-in-use': 'Este e-mail já está cadastrado.',
        'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
        'auth/missing-password': 'Digite sua senha.',
        'auth/too-many-requests': 'Muitas tentativas. Aguarde alguns minutos e tente novamente.',
        'auth/network-request-failed': 'Falha de rede. Verifique sua conexão.'
      };
      return map[code] || (error && error.message ? error.message : 'Não foi possível concluir a operação.');
    }
  };
})();
