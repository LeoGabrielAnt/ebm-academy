// EBM Academy — Firebase Firestore Sync
// Sincroniza progresso, gamificação, avaliações e histórico por usuário logado.
(function () {
  const SYNC_VERSION = '1.0.0-firestore';
  const CLOUD_COLLECTION = 'users';
  const CLOUD_DOC_COLLECTION = 'academy';
  const CLOUD_DOC_ID = 'progress';
  const LOCAL_SYNC_KEY = 'EBM_CLOUD_SYNC_META';

  let db = null;
  let currentUser = null;
  let applyingRemote = false;
  let saveTimer = null;
  let originalSetItem = null;
  let originalRemoveItem = null;

  function hasFirestore() {
    return typeof window.firebase !== 'undefined' &&
      window.firebase.firestore &&
      window.firebase.apps &&
      window.firebase.apps.length;
  }

  function initDb() {
    if (!hasFirestore()) return null;
    if (!db) db = window.firebase.firestore();
    return db;
  }

  function nowISO() {
    return new Date().toISOString();
  }

  function isProgressKey(key) {
    if (!key) return false;
    return key === 'EBM_GAMIFICATION_CORE_V1' ||
      key === 'completedModules' ||
      key === 'academyTheme' ||
      key === 'hvacFinalAssessmentScore' ||
      key === 'hvacFinalAssessmentApproved' ||
      key === 'eletricaFinalAssessmentScore' ||
      key === 'eletricaFinalAssessmentApproved' ||
      key === 'hvacDxDiagnosticState' ||
      key === 'hvacCagDiagnosticState' ||
      key === 'hvacPrecisionDiagnosticState' ||
      key === 'electricalDiagnosticToolState' ||
      key === LOCAL_SYNC_KEY ||
      /^(modulo|eletrica)\d{2}(ChecklistDone|QuizApproved)$/.test(key);
  }

  function collectLocalStorage() {
    const storage = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (isProgressKey(key)) storage[key] = localStorage.getItem(key);
    }
    return storage;
  }

  function clearProgressKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (isProgressKey(key) && key !== 'academyTheme') keys.push(key);
    }
    keys.forEach(key => localStorage.removeItem(key));
  }

  function applyStorage(storage) {
    if (!storage || typeof storage !== 'object') return;
    applyingRemote = true;
    try {
      Object.keys(storage).forEach(key => {
        if (isProgressKey(key) && key !== LOCAL_SYNC_KEY) {
          localStorage.setItem(key, storage[key]);
        }
      });
      localStorage.setItem(LOCAL_SYNC_KEY, JSON.stringify({ lastCloudLoadAt: nowISO(), version: SYNC_VERSION }));
    } finally {
      applyingRemote = false;
    }
  }

  function getProgressRef(uid) {
    const database = initDb();
    if (!database || !uid) return null;
    return database.collection(CLOUD_COLLECTION).doc(uid).collection(CLOUD_DOC_COLLECTION).doc(CLOUD_DOC_ID);
  }

  function getProfileRef(uid) {
    const database = initDb();
    if (!database || !uid) return null;
    return database.collection(CLOUD_COLLECTION).doc(uid);
  }

  function getAccessLogRef(uid) {
    const database = initDb();
    if (!database || !uid) return null;
    return database.collection(CLOUD_COLLECTION).doc(uid).collection('accessLogs').doc();
  }

  async function saveNow(reason = 'auto') {
    if (!currentUser || applyingRemote) return false;
    const ref = getProgressRef(currentUser.uid);
    if (!ref) return false;
    const payload = {
      version: SYNC_VERSION,
      user: {
        uid: currentUser.uid,
        email: currentUser.email || '',
        displayName: currentUser.displayName || ''
      },
      storage: collectLocalStorage(),
      updatedAt: nowISO(),
      lastReason: reason
    };
    await ref.set(payload, { merge: true });
    localStorage.setItem(LOCAL_SYNC_KEY, JSON.stringify({ lastCloudSaveAt: nowISO(), version: SYNC_VERSION, reason }));
    updateCloudStatus('Progresso salvo na nuvem', 'success');
    return true;
  }

  function scheduleSave(reason = 'change') {
    if (!currentUser || applyingRemote) return;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      saveNow(reason).catch(error => {
        console.warn('EBM Firestore sync: erro ao salvar progresso', error);
        updateCloudStatus('Falha ao salvar na nuvem. Os dados continuam salvos neste navegador.', 'warning');
      });
    }, 900);
  }

  async function loadOrCreateProgress(user) {
    const ref = getProgressRef(user.uid);
    if (!ref) return;
    const snap = await ref.get();
    if (snap.exists && snap.data() && snap.data().storage) {
      applyStorage(snap.data().storage);
      updateCloudStatus('Progresso carregado da nuvem', 'success');
    } else {
      await saveNow('first-cloud-save');
      updateCloudStatus('Progresso inicial criado na nuvem', 'success');
    }
  }

  async function updateProfile(user) {
    const ref = getProfileRef(user.uid);
    if (!ref) return;
    await ref.set({
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || '',
      lastLoginAt: nowISO(),
      updatedAt: nowISO(),
      platform: 'EBM Academy'
    }, { merge: true });
  }

  async function logAccess(user) {
    const ref = getAccessLogRef(user.uid);
    if (!ref) return;
    await ref.set({
      accessedAt: nowISO(),
      path: location.pathname,
      href: location.href,
      userAgent: navigator.userAgent,
      language: navigator.language || '',
      platform: 'EBM Academy',
      version: SYNC_VERSION
    });
  }

  function patchLocalStorage() {
    if (originalSetItem || !window.Storage || !window.localStorage) return;
    originalSetItem = Storage.prototype.setItem;
    originalRemoveItem = Storage.prototype.removeItem;

    Storage.prototype.setItem = function (key, value) {
      originalSetItem.apply(this, arguments);
      if (this === localStorage && isProgressKey(key) && !applyingRemote && key !== LOCAL_SYNC_KEY) {
        scheduleSave('localStorage.setItem:' + key);
      }
    };

    Storage.prototype.removeItem = function (key) {
      originalRemoveItem.apply(this, arguments);
      if (this === localStorage && isProgressKey(key) && !applyingRemote && key !== LOCAL_SYNC_KEY) {
        scheduleSave('localStorage.removeItem:' + key);
      }
    };
  }

  function refreshUi() {
    try { if (typeof updateProgress === 'function') updateProgress(); } catch(e) {}
    try { if (window.EBMGamification && window.EBMGamification.refresh) window.EBMGamification.refresh(); } catch(e) {}
    try { if (window.EBMGamificationCore && window.EBMGamificationCore.renderAllGamificationUi) window.EBMGamificationCore.renderAllGamificationUi(); } catch(e) {}
    try { if (typeof updateThemeButtons === 'function') updateThemeButtons(); } catch(e) {}
  }

  function updateCloudStatus(message, type = 'info') {
    const text = message || '';
    ['portal-cloud-sync-label','training-cloud-sync-label','cloud-sync-status'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.textContent = text;
      el.classList.remove('success','warning','danger','info');
      el.classList.add(type);
    });
  }

  async function connect(user) {
    if (!user || !initDb()) return;
    currentUser = {
      uid: user.uid,
      email: user.email || '',
      displayName: user.displayName || ''
    };
    patchLocalStorage();
    updateCloudStatus('Sincronizando progresso...', 'info');
    try {
      await updateProfile(currentUser);
      await loadOrCreateProgress(currentUser);
      await logAccess(currentUser);
      refreshUi();
      scheduleSave('post-login-sync');
    } catch (error) {
      console.warn('EBM Firestore sync: erro ao conectar', error);
      updateCloudStatus('Nuvem indisponível. Progresso salvo neste navegador.', 'warning');
    }
  }

  function disconnect(options = {}) {
    currentUser = null;
    clearTimeout(saveTimer);
    updateCloudStatus('', 'info');
    if (options.clearLocalProgress) clearProgressKeys();
  }

  window.EBMCloudSync = {
    version: SYNC_VERSION,
    connect,
    disconnect,
    saveNow,
    scheduleSave,
    clearProgressKeys,
    collectLocalStorage,
    isConfigured: function () { return !!initDb(); }
  };
})();
