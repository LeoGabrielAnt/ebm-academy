/* =====================================================
   EBM ACADEMY — GAMIFICATION CORE V1
   Pacote: EBM-ACADEMY-GAMIFICATION-CORE-V1-LIMPO
   Objetivo: XP, níveis, medalhas, status, histórico,
   Meu Progresso, Continuar e liberação progressiva.

   Integração segura:
   - Carregar depois de js/modules.js.
   - Não substitui bancos de perguntas nem HTML dos módulos.
   - Usa hooks em funções globais já existentes.
===================================================== */
(function(){
  const CORE_VERSION = '1.0.1-clean';
  const STORAGE_KEY = 'EBM_GAMIFICATION_CORE_V1';
  const LEGACY_COMPLETED_KEY = 'completedModules';

  const XP_RULES = {
    checklist: 10,
    quizPass: 30,
    moduleComplete: 60,
    perfectScore: 20,
    firstAttemptPass: 15
  };

  const LEVELS = [
    { level: 1, min: 0, title: 'Aprendiz HVAC' },
    { level: 2, min: 100, title: 'Operador em Treinamento' },
    { level: 3, min: 250, title: 'Técnico Base' },
    { level: 4, min: 450, title: 'Técnico Aplicado' },
    { level: 5, min: 700, title: 'Especialista de Campo' },
    { level: 6, min: 1000, title: 'Mentor EBM' }
  ];

  const BADGE_LIBRARY = {
    first_module: {
      id: 'first_module',
      icon: 'fa-medal',
      title: 'Primeiro Sistema Dominado',
      description: 'Concluiu o primeiro módulo da trilha.'
    },
    three_modules: {
      id: 'three_modules',
      icon: 'fa-trophy',
      title: 'Técnico em Evolução',
      description: 'Concluiu 3 módulos da trilha atual.'
    },
    six_modules: {
      id: 'six_modules',
      icon: 'fa-certificate',
      title: 'Base HVAC Crítico Concluída',
      description: 'Concluiu os módulos 01 a 06.'
    },
    perfect_quiz: {
      id: 'perfect_quiz',
      icon: 'fa-star',
      title: 'Avaliação Perfeita',
      description: 'Acertou 5 de 5 em uma avaliação.'
    },
    persistent: {
      id: 'persistent',
      icon: 'fa-rotate-right',
      title: 'Persistência Técnica',
      description: 'Registrou 3 ou mais tentativas em avaliações.'
    },
    shsc: {
      id: 'shsc',
      icon: 'fa-temperature-half',
      title: 'Diagnóstico SH/SC',
      description: 'Concluiu o módulo de Superaquecimento e Subresfriamento.'
    },
    fancoil: {
      id: 'fancoil',
      icon: 'fa-fan',
      title: 'Especialista em Fancoils',
      description: 'Concluiu o módulo de Fancoils de Precisão.'
    },
    chilled_water: {
      id: 'chilled_water',
      icon: 'fa-water',
      title: 'Operador de Central AG',
      description: 'Concluiu o módulo de Central de Água Gelada.'
    },
    hydraulic_balance: {
      id: 'hydraulic_balance',
      icon: 'fa-circle-nodes',
      title: 'Balanceamento Hidráulico',
      description: 'Concluiu o módulo de Bombas, Válvulas e Balanceamento.'
    },
    automation_logic: {
      id: 'automation_logic',
      icon: 'fa-sitemap',
      title: 'Automação e BMS',
      description: 'Concluiu o módulo de Automação, CLP, BMS e Redundância em CAG.'
    },
    troubleshooting_ops: {
      id: 'troubleshooting_ops',
      icon: 'fa-screwdriver-wrench',
      title: 'Troubleshooting HVAC',
      description: 'Concluiu o módulo de Alarmes, Falhas Operacionais e Troubleshooting em CAG.'
    },
    electrical_foundation: {
      id: 'electrical_foundation',
      icon: 'fa-bolt',
      title: 'Base Elétrica HVAC',
      description: 'Concluiu o módulo de Fundamentos Elétricos para HVAC.'
    },
    electrical_commands: {
      id: 'electrical_commands',
      icon: 'fa-diagram-project',
      title: 'Comandos Elétricos',
      description: 'Concluiu o módulo de Comandos Elétricos Aplicados a HVAC.'
    },
    electrical_measurement: {
      id: 'electrical_measurement',
      icon: 'fa-gauge-high',
      title: 'Medição Elétrica',
      description: 'Concluiu o módulo de Instrumentos de Medição e Testes.'
    },
    electrical_diagnosis: {
      id: 'electrical_diagnosis',
      icon: 'fa-stethoscope',
      title: 'Diagnóstico Elétrico HVAC',
      description: 'Concluiu o módulo de Diagnóstico Elétrico em Equipamentos HVAC.'
    },
    first_attempt_pass: {
      id: 'first_attempt_pass',
      icon: 'fa-bolt',
      title: 'Aprovado de Primeira',
      description: 'Foi aprovado em uma avaliação na primeira tentativa.'
    }
  };

  const $ = (selector, root=document) => root.querySelector(selector);
  const $$ = (selector, root=document) => Array.from(root.querySelectorAll(selector));
  const nowISO = () => new Date().toISOString();

  function hasAcademyGlobals(){
    return typeof moduleConfig !== 'undefined' && typeof TRACK_MODULES !== 'undefined';
  }

  function getTrackModules(){
    if(typeof TRACK_DEFINITIONS !== 'undefined' && typeof moduleConfig !== 'undefined'){
      const track = window.EBM_CURRENT_TRACK || 'hvac';
      const modules = TRACK_DEFINITIONS[track] || TRACK_DEFINITIONS.hvac || TRACK_MODULES || [];
      return modules.filter(mid => moduleConfig[mid]);
    }
    if(hasAcademyGlobals()) return TRACK_MODULES.filter(mid => moduleConfig[mid]);
    return ['modulo01','modulo02','modulo03','modulo04','modulo05','modulo06','modulo07','modulo08','modulo09','modulo10'];
  }

  function getModuleTitle(mid){
    if(hasAcademyGlobals() && moduleConfig[mid]) return moduleConfig[mid].title || moduleConfig[mid].name || mid;
    return mid.replace('modulo', 'Módulo ');
  }

  function getModuleName(mid){
    if(hasAcademyGlobals() && moduleConfig[mid]) return moduleConfig[mid].name || mid;
    return mid.replace('modulo', 'Módulo ');
  }

  function readJson(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    }catch(e){
      return fallback;
    }
  }

  function writeJson(key, value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  function createInitialState(){
    return {
      version: CORE_VERSION,
      createdAt: nowISO(),
      updatedAt: nowISO(),
      xp: 0,
      lastPage: 'training-home',
      migratedLegacy: false,
      rewards: {},
      badges: {},
      modules: {}
    };
  }

  function getState(){
    const state = readJson(STORAGE_KEY, createInitialState());
    if(!state.version) state.version = CORE_VERSION;
    if(!state.createdAt) state.createdAt = nowISO();
    if(!state.rewards) state.rewards = {};
    if(!state.badges) state.badges = {};
    if(!state.modules) state.modules = {};
    if(typeof state.xp !== 'number') state.xp = 0;
    if(!state.lastPage) state.lastPage = 'training-home';
    getTrackModules().forEach(mid => ensureModuleState(state, mid));
    return state;
  }

  function saveState(state){
    state.updatedAt = nowISO();
    writeJson(STORAGE_KEY, state);
    return state;
  }

  function ensureModuleState(state, mid){
    if(!state.modules[mid]){
      state.modules[mid] = {
        checklistDone: false,
        quizApproved: false,
        completed: false,
        attempts: [],
        bestScore: 0,
        checklistDoneAt: null,
        approvedAt: null,
        completedAt: null,
        lastAttemptAt: null
      };
    }
    if(!Array.isArray(state.modules[mid].attempts)) state.modules[mid].attempts = [];
    return state.modules[mid];
  }

  function getLegacyCompletedModules(){
    return readJson(LEGACY_COMPLETED_KEY, []);
  }

  function getModuleConfig(mid){
    return hasAcademyGlobals() ? moduleConfig[mid] : null;
  }

  function reconcileLegacyProgress(state){
    const completed = getLegacyCompletedModules();

    getTrackModules().forEach(mid => {
      const cfg = getModuleConfig(mid);
      const moduleState = ensureModuleState(state, mid);

      if(cfg && localStorage.getItem(cfg.checkKey) === 'true'){
        moduleState.checklistDone = true;
        if(!moduleState.checklistDoneAt) moduleState.checklistDoneAt = nowISO();
      }

      if(cfg && localStorage.getItem(cfg.approvedKey) === 'true'){
        moduleState.quizApproved = true;
        if(!moduleState.approvedAt) moduleState.approvedAt = nowISO();
      }

      if(completed.includes(mid)){
        moduleState.completed = true;
        moduleState.quizApproved = true;
        moduleState.checklistDone = true;
        if(!moduleState.completedAt) moduleState.completedAt = nowISO();
      }
    });

    if(!state.migratedLegacy){
      getTrackModules().forEach(mid => {
        const moduleState = ensureModuleState(state, mid);
        if(moduleState.checklistDone) awardOnce(state, `legacy:${mid}:checklist`, XP_RULES.checklist);
        if(moduleState.quizApproved) awardOnce(state, `legacy:${mid}:quizPass`, XP_RULES.quizPass);
        if(moduleState.completed) awardOnce(state, `legacy:${mid}:complete`, XP_RULES.moduleComplete);
      });
      state.migratedLegacy = true;
    }

    evaluateBadges(state);
    return saveState(state);
  }

  function awardOnce(state, key, xp){
    if(state.rewards[key]) return false;
    state.rewards[key] = {
      xp,
      earnedAt: nowISO()
    };
    state.xp += xp;
    return true;
  }

  function earnBadge(state, badgeId){
    if(state.badges[badgeId] || !BADGE_LIBRARY[badgeId]) return false;
    state.badges[badgeId] = {
      ...BADGE_LIBRARY[badgeId],
      earnedAt: nowISO()
    };
    return true;
  }

  function evaluateBadges(state){
    const modules = getTrackModules();
    const completedCount = modules.filter(mid => ensureModuleState(state, mid).completed).length;
    const allAttempts = modules.flatMap(mid => ensureModuleState(state, mid).attempts || []);

    if(completedCount >= 1) earnBadge(state, 'first_module');
    if(completedCount >= 3) earnBadge(state, 'three_modules');
    if(completedCount >= 6) earnBadge(state, 'six_modules');
    if(allAttempts.some(a => Number(a.score) === 5)) earnBadge(state, 'perfect_quiz');
    if(allAttempts.length >= 3) earnBadge(state, 'persistent');
    if(ensureModuleState(state, 'modulo02').completed) earnBadge(state, 'shsc');
    if(ensureModuleState(state, 'modulo06').completed) earnBadge(state, 'fancoil');
    if(ensureModuleState(state, 'modulo07').completed) earnBadge(state, 'chilled_water');
    if(ensureModuleState(state, 'modulo08').completed) earnBadge(state, 'hydraulic_balance');
    if(ensureModuleState(state, 'modulo09').completed) earnBadge(state, 'automation_logic');
    if(ensureModuleState(state, 'modulo10').completed) earnBadge(state, 'troubleshooting_ops');
    if(ensureModuleState(state, 'eletrica01').completed) earnBadge(state, 'electrical_foundation');
    if(ensureModuleState(state, 'eletrica02').completed) earnBadge(state, 'electrical_commands');
    if(ensureModuleState(state, 'eletrica03').completed) earnBadge(state, 'electrical_measurement');
    if(ensureModuleState(state, 'eletrica04').completed) earnBadge(state, 'electrical_diagnosis');
    if(allAttempts.some(a => a.passed && a.attemptNumber === 1)) earnBadge(state, 'first_attempt_pass');
  }

  function getLevelInfo(xp){
    let current = LEVELS[0];
    let next = null;

    for(let i = 0; i < LEVELS.length; i++){
      if(xp >= LEVELS[i].min) current = LEVELS[i];
      if(xp < LEVELS[i].min){
        next = LEVELS[i];
        break;
      }
    }

    if(!next) next = { level: current.level + 1, min: current.min + 400, title: 'Lenda HVAC Crítico' };

    const previousMin = current.min;
    const span = Math.max(1, next.min - previousMin);
    const progress = Math.min(100, Math.max(0, Math.round(((xp - previousMin) / span) * 100)));

    return {
      current,
      next,
      progress,
      xpToNext: Math.max(0, next.min - xp)
    };
  }

  function getPreviousModule(mid){
    const modules = getTrackModules();
    const index = modules.indexOf(mid);
    return index > 0 ? modules[index - 1] : null;
  }

  function canAccessModule(mid){
    const modules = getTrackModules();
    if(!modules.includes(mid)) return false;
    const index = modules.indexOf(mid);
    if(index <= 0) return true;
    const state = getState();
    const previous = modules[index - 1];
    return ensureModuleState(state, previous).completed === true || getLegacyCompletedModules().includes(previous);
  }

  function getModuleStatus(mid){
    const state = getState();
    const moduleState = ensureModuleState(state, mid);

    if(!canAccessModule(mid)){
      return { key: 'locked', label: 'Bloqueado', icon: 'fa-lock' };
    }

    if(moduleState.completed || getLegacyCompletedModules().includes(mid)){
      return { key: 'completed', label: 'Concluído', icon: 'fa-circle-check' };
    }

    if(moduleState.quizApproved){
      return { key: 'approved', label: 'Aprovado', icon: 'fa-award' };
    }

    if(moduleState.checklistDone){
      return { key: 'quiz', label: 'Avaliação', icon: 'fa-clipboard-check' };
    }

    return { key: 'available', label: 'Liberado', icon: 'fa-play' };
  }

  function getFirstUnlockedIncompletePage(){
    const state = getState();
    const modules = getTrackModules();
    const moduleToContinue = modules.find(mid => canAccessModule(mid) && !ensureModuleState(state, mid).completed);
    return moduleToContinue || 'training-home';
  }

  function getContinuePage(){
    const state = getState();
    const lastPage = state.lastPage || 'training-home';
    const mid = getModuleIdSafe(lastPage);
    if(mid && !canAccessModule(mid)) return getFirstUnlockedIncompletePage();
    if(lastPage === 'meu-progresso') return getFirstUnlockedIncompletePage();
    return lastPage;
  }

  function setLastPage(page){
    if(!page || page === 'meu-progresso') return;
    const state = getState();
    state.lastPage = page;
    saveState(state);
  }

  function getModuleIdSafe(page){
    const match = String(page || '').match(/(?:modulo|eletrica)\d{2}/);
    return match ? match[0] : null;
  }

  function formatDate(iso){
    if(!iso) return '-';
    try{
      return new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date(iso));
    }catch(e){
      return '-';
    }
  }

  function escapeHtml(value){
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function recordChecklist(mid){
    const state = getState();
    const moduleState = ensureModuleState(state, mid);
    if(!moduleState.checklistDone){
      moduleState.checklistDone = true;
      moduleState.checklistDoneAt = nowISO();
      awardOnce(state, `${mid}:checklist`, XP_RULES.checklist);
    }
    evaluateBadges(state);
    saveState(state);
    renderAllGamificationUi();
  }

  function recordQuizAttempt(mid, score, total){
    const state = getState();
    const moduleState = ensureModuleState(state, mid);
    const passed = score >= 3;
    const attemptNumber = (moduleState.attempts || []).length + 1;

    moduleState.attempts.push({
      score,
      total,
      passed,
      attemptNumber,
      createdAt: nowISO()
    });

    moduleState.bestScore = Math.max(Number(moduleState.bestScore || 0), score);
    moduleState.lastAttemptAt = nowISO();

    if(passed){
      moduleState.quizApproved = true;
      if(!moduleState.approvedAt) moduleState.approvedAt = nowISO();
      awardOnce(state, `${mid}:quizPass`, XP_RULES.quizPass);
      if(attemptNumber === 1) awardOnce(state, `${mid}:firstAttemptPass`, XP_RULES.firstAttemptPass);
    }

    if(score === total){
      awardOnce(state, `${mid}:perfectScore`, XP_RULES.perfectScore);
    }

    evaluateBadges(state);
    saveState(state);
    renderAllGamificationUi();
  }

  function recordModuleCompletion(mid){
    const state = getState();
    const moduleState = ensureModuleState(state, mid);

    moduleState.completed = true;
    moduleState.quizApproved = true;
    moduleState.checklistDone = true;
    if(!moduleState.completedAt) moduleState.completedAt = nowISO();

    awardOnce(state, `${mid}:complete`, XP_RULES.moduleComplete);
    evaluateBadges(state);
    saveState(state);
    renderAllGamificationUi();
  }

  function getCurrentQuizScore(mid){
    if(typeof activeQuizState === 'undefined' || !activeQuizState[mid]) return null;
    const questions = activeQuizState[mid] || [];
    if(!questions.length) return null;

    let score = 0;
    let unanswered = 0;

    questions.forEach((item, index) => {
      const n = index + 1;
      const selected = document.querySelector(`input[name="q${n}"]:checked`);
      if(!selected) unanswered += 1;
      else if(selected.value === item.correctAnswer) score += 1;
    });

    return {
      score,
      total: questions.length,
      unanswered
    };
  }

  function patchAcademyFunctions(){
    if(!hasAcademyGlobals()){
      console.warn('[EBM Gamification] moduleConfig/TRACK_MODULES não encontrados. Carregue este core depois de js/modules.js.');
      return;
    }

    if(typeof loadTrainingPage === 'function' && !loadTrainingPage.__ebmGamificationPatched){
      const originalLoadTrainingPage = loadTrainingPage;
      const patchedLoadTrainingPage = async function(page='training-home'){
        if(page === 'meu-progresso'){
          renderProgressPage();
          return;
        }

        const mid = getModuleIdSafe(page);
        if(mid && getTrackModules().includes(mid) && !canAccessModule(mid)){
          renderLockedModulePage(mid);
          return;
        }

        setLastPage(page);
        await originalLoadTrainingPage.call(this, page);
        injectTrainingHomePanel(page);
        renderAllGamificationUi();
      };
      patchedLoadTrainingPage.__ebmGamificationPatched = true;
      window.loadTrainingPage = patchedLoadTrainingPage;
      try { loadTrainingPage = patchedLoadTrainingPage; } catch(e) {}
    }

    if(typeof loadPortalPage === 'function' && !loadPortalPage.__ebmGamificationPatched){
      const originalLoadPortalPage = loadPortalPage;
      const patchedLoadPortalPage = async function(page='portal-home'){
        await originalLoadPortalPage.call(this, page);
        injectPortalPanel();
        renderAllGamificationUi();
      };
      patchedLoadPortalPage.__ebmGamificationPatched = true;
      window.loadPortalPage = patchedLoadPortalPage;
      try { loadPortalPage = patchedLoadPortalPage; } catch(e) {}
    }

    if(typeof processRandomQuiz === 'function' && !processRandomQuiz.__ebmGamificationPatched){
      const originalProcessRandomQuiz = processRandomQuiz;
      const patchedProcessRandomQuiz = function(mid){
        const scoreBeforeSubmit = getCurrentQuizScore(mid);
        originalProcessRandomQuiz.call(this, mid);

        if(scoreBeforeSubmit && scoreBeforeSubmit.unanswered === 0){
          recordQuizAttempt(mid, scoreBeforeSubmit.score, scoreBeforeSubmit.total);
        }
      };
      patchedProcessRandomQuiz.__ebmGamificationPatched = true;
      window.processRandomQuiz = patchedProcessRandomQuiz;
      try { processRandomQuiz = patchedProcessRandomQuiz; } catch(e) {}
    }

    if(typeof initializeChecklist === 'function' && !initializeChecklist.__ebmGamificationPatched){
      const originalInitializeChecklist = initializeChecklist;
      const patchedInitializeChecklist = function(mid){
        originalInitializeChecklist.call(this, mid);

        const cfg = getModuleConfig(mid);
        if(!cfg) return;
        const checks = $$(`.${cfg.checkClass}`);
        if(!checks.length) return;

        checks.forEach(check => {
          if(check.dataset.ebmGamificationChecklistBound === 'true') return;
          check.dataset.ebmGamificationChecklistBound = 'true';
          check.addEventListener('change', () => {
            const allDone = checks.every(item => item.checked);
            if(allDone) recordChecklist(mid);
            renderAllGamificationUi();
          });
        });
      };
      patchedInitializeChecklist.__ebmGamificationPatched = true;
      window.initializeChecklist = patchedInitializeChecklist;
      try { initializeChecklist = patchedInitializeChecklist; } catch(e) {}
    }

    if(typeof initializeCompletion === 'function' && !initializeCompletion.__ebmGamificationPatched){
      const originalInitializeCompletion = initializeCompletion;
      const patchedInitializeCompletion = function(mid){
        originalInitializeCompletion.call(this, mid);

        const cfg = getModuleConfig(mid);
        if(!cfg) return;
        const btn = document.getElementById(cfg.complete);
        if(!btn || btn.dataset.ebmGamificationCompleteBound === 'true') return;

        btn.dataset.ebmGamificationCompleteBound = 'true';
        btn.addEventListener('click', () => {
          setTimeout(() => {
            if(getLegacyCompletedModules().includes(mid) || localStorage.getItem(cfg.approvedKey) === 'true'){
              recordModuleCompletion(mid);
            }
          }, 0);
        });
      };
      patchedInitializeCompletion.__ebmGamificationPatched = true;
      window.initializeCompletion = patchedInitializeCompletion;
      try { initializeCompletion = patchedInitializeCompletion; } catch(e) {}
    }

    if(typeof updateProgress === 'function' && !updateProgress.__ebmGamificationPatched){
      const originalUpdateProgress = updateProgress;
      const patchedUpdateProgress = function(){
        originalUpdateProgress.call(this);
        const state = reconcileLegacyProgress(getState());
        updateLegacyProgressText(state);
        renderAllGamificationUi();
      };
      patchedUpdateProgress.__ebmGamificationPatched = true;
      window.updateProgress = patchedUpdateProgress;
      try { updateProgress = patchedUpdateProgress; } catch(e) {}
    }
  }

  function updateLegacyProgressText(state){
    const modules = getTrackModules();
    const completedCount = modules.filter(mid => ensureModuleState(state, mid).completed).length;
    const pct = Math.round((completedCount / modules.length) * 100);
    $$('.progress-fill').forEach(bar => bar.style.width = `${pct}%`);
    $$('.progress-text').forEach(text => text.innerHTML = `${pct}% concluído · ${state.xp} XP`);
  }

  function renderTopbarWidget(){
    const state = reconcileLegacyProgress(getState());
    const level = getLevelInfo(state.xp);
    const badgeCount = Object.keys(state.badges || {}).length;
    const topbarRight = $('.topbar-right');
    if(!topbarRight) return;

    let widget = $('#ebm-gamification-topbar');
    if(!widget){
      widget = document.createElement('button');
      widget.id = 'ebm-gamification-topbar';
      widget.type = 'button';
      widget.className = 'ebm-xp-pill';
      widget.dataset.ebmGamificationAction = 'progress';
      const progressBox = $('.progress-box', topbarRight);
      topbarRight.insertBefore(widget, progressBox || null);
    }

    widget.innerHTML = `
      <i class="fa-solid fa-star"></i>
      <span><strong>Nível ${level.current.level}</strong> · ${state.xp} XP</span>
      <small>${badgeCount} medalha${badgeCount === 1 ? '' : 's'}</small>
    `;
  }

  function renderAllGamificationUi(){
    const state = reconcileLegacyProgress(getState());
    updateLegacyProgressText(state);
    decorateSidebar();
    renderTopbarWidget();
    refreshProgressPageIfVisible();
  }

  function injectSidebarLink(){
    const menu = $('.menu');
    if(!menu || $('.menu a[data-page="meu-progresso"]')) return;

    const link = document.createElement('a');
    link.href = '#';
    link.dataset.page = 'meu-progresso';
    link.innerHTML = `
      <i class="fa-solid fa-chart-line"></i>
      <span>Meu Progresso</span>
    `;

    const trainingHome = $('.menu a[data-page="training-home"]');
    if(trainingHome && trainingHome.nextSibling){
      menu.insertBefore(link, trainingHome.nextSibling);
    }else{
      menu.prepend(link);
    }

    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.loadTrainingPage('meu-progresso');
    });
  }

  function decorateSidebar(){
    injectSidebarLink();
    const state = getState();

    $$('.menu a').forEach(link => {
      const page = link.dataset.page;
      const mid = getModuleIdSafe(page);
      const oldBadge = $('.ebm-module-menu-badge', link);
      if(oldBadge) oldBadge.remove();

      link.classList.remove('ebm-menu-locked', 'ebm-menu-completed', 'ebm-menu-current');

      if(page === 'meu-progresso') return;
      if(!mid) return;

      const badge = document.createElement('small');
      badge.className = 'ebm-module-menu-badge';

      if(!getTrackModules().includes(mid)){
        link.classList.add('ebm-menu-locked');
        badge.innerHTML = '<i class="fa-solid fa-clock"></i> Em breve';
      }else{
        const status = getModuleStatus(mid);
        if(status.key === 'locked') link.classList.add('ebm-menu-locked');
        if(status.key === 'completed') link.classList.add('ebm-menu-completed');
        if(status.key === 'available' || status.key === 'quiz' || status.key === 'approved') link.classList.add('ebm-menu-current');
        badge.innerHTML = `<i class="fa-solid ${status.icon}"></i> ${status.label}`;
      }

      link.appendChild(badge);
    });

    updateLegacyProgressText(state);
  }

  function renderPortalPanelHtml(){
    const state = getState();
    const level = getLevelInfo(state.xp);
    const modules = getTrackModules();
    const completedCount = modules.filter(mid => ensureModuleState(state, mid).completed).length;
    const total = modules.length;
    const continuePage = getContinuePage();
    const continueLabel = continuePage === 'training-home' ? 'Home Treinamento' : `${getModuleName(getModuleIdSafe(continuePage) || '')}${String(continuePage).includes('/quiz') ? ' · Avaliação' : ''}`;

    return `
      <section id="ebm-gamification-portal-panel" class="ebm-gamification-portal-panel">
        <div class="ebm-gamification-hero-card">
          <div>
            <span class="ebm-overline"><i class="fa-solid fa-star"></i> Gamificação ativa</span>
            <h2>Progresso técnico</h2>
            <p>XP, níveis, medalhas e histórico salvos localmente no navegador.</p>
          </div>
          <div class="ebm-hero-actions">
            <button class="btn btn-primary" type="button" data-ebm-gamification-action="continue">
              <i class="fa-solid fa-forward"></i>
              Continuar de onde parei
            </button>
            <button class="btn btn-secondary" type="button" data-ebm-gamification-action="progress">
              <i class="fa-solid fa-chart-line"></i>
              Meu Progresso
            </button>
          </div>
        </div>

        <div class="ebm-progress-summary-grid">
          <div class="ebm-summary-card">
            <i class="fa-solid fa-bolt"></i>
            <span>XP total</span>
            <strong>${state.xp}</strong>
          </div>
          <div class="ebm-summary-card">
            <i class="fa-solid fa-layer-group"></i>
            <span>Nível atual</span>
            <strong>${level.current.level}</strong>
            <small>${level.current.title}</small>
          </div>
          <div class="ebm-summary-card">
            <i class="fa-solid fa-circle-check"></i>
            <span>Módulos concluídos</span>
            <strong>${completedCount}/${total}</strong>
          </div>
          <div class="ebm-summary-card">
            <i class="fa-solid fa-arrow-right"></i>
            <span>Próximo passo</span>
            <strong>${escapeHtml(continueLabel)}</strong>
          </div>
        </div>
      </section>
    `;
  }

  function injectPortalPanel(){
    const container = $('#portal-content');
    if(!container || $('#ebm-gamification-portal-panel')) return;
    container.insertAdjacentHTML('afterbegin', renderPortalPanelHtml());
  }

  function injectTrainingHomePanel(page){
    if(page !== 'training-home') return;
    const container = $('#app-content');
    if(!container || $('#ebm-training-home-gamification-panel')) return;

    const state = getState();
    const level = getLevelInfo(state.xp);
    const continuePage = getContinuePage();

    container.insertAdjacentHTML('afterbegin', `
      <section id="ebm-training-home-gamification-panel" class="section ebm-training-home-gamification-panel">
        <div class="card ebm-gamification-training-card">
          <div>
            <span class="ebm-overline"><i class="fa-solid fa-gauge-high"></i> Fase 1</span>
            <h3>Nível ${level.current.level} — ${level.current.title}</h3>
            <p>${state.xp} XP acumulados. Faltam ${level.xpToNext} XP para o próximo nível.</p>
            <div class="ebm-xp-track"><span style="width:${level.progress}%"></span></div>
          </div>
          <div class="ebm-hero-actions">
            <button class="btn btn-primary" type="button" data-ebm-gamification-action="continue">
              <i class="fa-solid fa-forward"></i>
              Continuar
            </button>
            <button class="btn btn-secondary" type="button" data-ebm-gamification-action="progress">
              <i class="fa-solid fa-chart-line"></i>
              Meu Progresso
            </button>
          </div>
          <input type="hidden" value="${escapeHtml(continuePage)}">
        </div>
      </section>
    `);
  }

  function renderLockedModulePage(mid){
    const container = $('#app-content');
    if(!container) return;

    const previous = getPreviousModule(mid);
    const previousLabel = previous ? `${getModuleName(previous)} — ${getModuleTitle(previous)}` : 'módulo anterior';
    if(typeof setActiveMenu === 'function') setActiveMenu(mid);

    container.innerHTML = `
      <section class="section ebm-locked-section">
        <div class="card ebm-locked-card">
          <div class="ebm-locked-icon"><i class="fa-solid fa-lock"></i></div>
          <h2>Módulo bloqueado por progressão</h2>
          <p>Para acessar <strong>${getModuleName(mid)} — ${getModuleTitle(mid)}</strong>, conclua primeiro <strong>${previousLabel}</strong>.</p>
          <div class="quiz-actions">
            ${previous ? `<button class="btn btn-primary" type="button" data-ebm-gamification-go-page="${previous}"><i class="fa-solid fa-arrow-right"></i> Ir para o módulo anterior</button>` : ''}
            <button class="btn btn-secondary" type="button" data-ebm-gamification-action="progress"><i class="fa-solid fa-chart-line"></i> Ver Meu Progresso</button>
          </div>
        </div>
      </section>
    `;

    renderAllGamificationUi();
  }

  function renderProgressPage(){
    const container = $('#app-content');
    if(!container) return;

    const state = reconcileLegacyProgress(getState());
    const level = getLevelInfo(state.xp);
    const modules = getTrackModules();
    const completedCount = modules.filter(mid => ensureModuleState(state, mid).completed).length;
    const attempts = modules
      .flatMap(mid => (ensureModuleState(state, mid).attempts || []).map(a => ({...a, mid})))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if(typeof setActiveMenu === 'function'){
      setActiveMenu('meu-progresso');
      $$('.menu a').forEach(a => a.classList.toggle('active', a.dataset.page === 'meu-progresso'));
    }

    container.innerHTML = `
      <section id="ebm-progress-page" class="section ebm-progress-page">
        <div class="ebm-progress-header">
          <div>
            <span class="ebm-overline"><i class="fa-solid fa-chart-line"></i> Meu Progresso</span>
            <h1>Meu Progresso</h1>
            <p>Acompanhe XP, níveis, medalhas, tentativas e status dos módulos da trilha.</p>
          </div>
          <div class="ebm-hero-actions">
            <button class="btn btn-primary" type="button" data-ebm-gamification-action="continue">
              <i class="fa-solid fa-forward"></i>
              Continuar de onde parei
            </button>
            <button class="btn btn-secondary" type="button" data-ebm-gamification-action="export">
              <i class="fa-solid fa-file-export"></i>
              Exportar progresso
            </button>
          </div>
        </div>

        <div class="ebm-level-card">
          <div class="ebm-level-ring">
            <strong>${level.current.level}</strong>
            <span>Nível</span>
          </div>
          <div class="ebm-level-info">
            <h2>${level.current.title}</h2>
            <p>${state.xp} XP acumulados · faltam ${level.xpToNext} XP para ${level.next.title}.</p>
            <div class="ebm-xp-track"><span style="width:${level.progress}%"></span></div>
          </div>
          <div class="ebm-level-stats">
            <div><strong>${completedCount}/${modules.length}</strong><span>Módulos</span></div>
            <div><strong>${Object.keys(state.badges || {}).length}</strong><span>Medalhas</span></div>
            <div><strong>${attempts.length}</strong><span>Tentativas</span></div>
          </div>
        </div>

        <div class="ebm-progress-grid">
          ${modules.map(mid => renderModuleProgressCard(mid, state)).join('')}
        </div>

        <div class="card ebm-badges-card">
          <h3><i class="fa-solid fa-medal"></i> Medalhas</h3>
          <div class="ebm-badges-grid">
            ${Object.values(BADGE_LIBRARY).map(badge => renderBadgeCard(badge, state.badges[badge.id])).join('')}
          </div>
        </div>

        <div class="card ebm-attempts-card">
          <h3><i class="fa-solid fa-clock-rotate-left"></i> Histórico de tentativas</h3>
          ${attempts.length ? renderAttemptsTable(attempts) : '<p>Nenhuma tentativa registrada ainda. As próximas avaliações aparecerão aqui automaticamente.</p>'}
        </div>
      </section>
    `;

    renderAllGamificationUi();
  }

  function renderModuleProgressCard(mid, state){
    const moduleState = ensureModuleState(state, mid);
    const status = getModuleStatus(mid);
    const attempts = moduleState.attempts || [];
    const buttonPage = moduleState.quizApproved && !moduleState.completed ? `${mid}/quiz` : mid;
    const buttonText = status.key === 'locked' ? 'Bloqueado' : status.key === 'completed' ? 'Revisar módulo' : status.key === 'quiz' ? 'Fazer avaliação' : 'Abrir módulo';

    return `
      <article class="ebm-module-progress-card ${status.key}">
        <div class="ebm-module-progress-top">
          <span><i class="fa-solid ${status.icon}"></i> ${status.label}</span>
          <strong>${getModuleName(mid)}</strong>
        </div>
        <h3>${getModuleTitle(mid)}</h3>
        <div class="ebm-module-checks">
          <span class="${moduleState.checklistDone ? 'done' : ''}"><i class="fa-solid fa-list-check"></i> Checklist</span>
          <span class="${moduleState.quizApproved ? 'done' : ''}"><i class="fa-solid fa-clipboard-question"></i> Quiz</span>
          <span class="${moduleState.completed ? 'done' : ''}"><i class="fa-solid fa-certificate"></i> Conclusão</span>
        </div>
        <div class="ebm-module-meta">
          <span>Melhor nota: <strong>${moduleState.bestScore || 0}/5</strong></span>
          <span>Tentativas: <strong>${attempts.length}</strong></span>
        </div>
        <button class="btn ${status.key === 'locked' ? 'btn-secondary btn-disabled' : 'btn-primary'}" type="button" ${status.key === 'locked' ? 'disabled' : ''} data-ebm-gamification-go-page="${buttonPage}">
          <i class="fa-solid fa-arrow-right"></i>
          ${buttonText}
        </button>
      </article>
    `;
  }

  function renderBadgeCard(badge, earned){
    return `
      <div class="ebm-badge-card ${earned ? 'earned' : 'locked'}">
        <i class="fa-solid ${badge.icon}"></i>
        <h4>${badge.title}</h4>
        <p>${badge.description}</p>
        <span>${earned ? `Conquistada em ${formatDate(earned.earnedAt)}` : 'Ainda bloqueada'}</span>
      </div>
    `;
  }

  function renderAttemptsTable(attempts){
    return `
      <div class="table-wrapper">
        <table class="tech-table ebm-attempts-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Módulo</th>
              <th>Tentativa</th>
              <th>Resultado</th>
              <th>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            ${attempts.slice(0, 30).map(attempt => `
              <tr>
                <td>${formatDate(attempt.createdAt)}</td>
                <td>${getModuleName(attempt.mid)} — ${getModuleTitle(attempt.mid)}</td>
                <td>${attempt.attemptNumber || '-'}</td>
                <td><span class="ebm-result-chip ${attempt.passed ? 'success' : 'danger'}">${attempt.passed ? 'Aprovado' : 'Revisar'}</span></td>
                <td><strong>${attempt.score}/${attempt.total || 5}</strong></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function refreshProgressPageIfVisible(){
    if($('#ebm-progress-page')){
      // Evita loop recursivo: só atualiza indicadores externos aqui.
      return;
    }
  }

  function goToTrainingPage(page){
    const target = page || getContinuePage();
    const trainingShell = $('#training-shell');
    const isTrainingHidden = trainingShell && trainingShell.classList.contains('hidden');

    if(isTrainingHidden && typeof openTraining === 'function'){
      openTraining(target);
    }else if(typeof window.loadTrainingPage === 'function'){
      window.loadTrainingPage(target);
    }
  }

  function exportProgress(){
    const state = reconcileLegacyProgress(getState());
    const payload = {
      package: 'EBM-ACADEMY-GAMIFICATION-CORE-V1',
      exportedAt: nowISO(),
      state
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ebm-academy-progresso-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function resetGamificationOnly(){
    const ok = confirm('Deseja apagar apenas os dados de gamificação local? Os dados antigos dos módulos concluídos permanecem no localStorage original.');
    if(!ok) return;
    localStorage.removeItem(STORAGE_KEY);
    renderAllGamificationUi();
    renderProgressPage();
  }

  function bindDelegatedActions(){
    document.addEventListener('click', (event) => {
      const actionEl = event.target.closest('[data-ebm-gamification-action]');
      if(actionEl){
        const action = actionEl.dataset.ebmGamificationAction;
        if(action === 'continue') goToTrainingPage(getContinuePage());
        if(action === 'progress') goToTrainingPage('meu-progresso');
        if(action === 'export') exportProgress();
        if(action === 'reset') resetGamificationOnly();
      }

      const pageEl = event.target.closest('[data-ebm-gamification-go-page]');
      if(pageEl){
        const page = pageEl.dataset.ebmGamificationGoPage;
        if(page) goToTrainingPage(page);
      }
    });
  }

  function initializeGamification(){
    if(!hasAcademyGlobals()) return;
    reconcileLegacyProgress(getState());
    injectSidebarLink();
    decorateSidebar();
    renderTopbarWidget();
    bindDelegatedActions();
    renderAllGamificationUi();
  }

  patchAcademyFunctions();

  window.EBMGamification = {
    version: CORE_VERSION,
    getState: () => reconcileLegacyProgress(getState()),
    refresh: renderAllGamificationUi,
    renderProgressPage,
    goContinue: () => goToTrainingPage(getContinuePage()),
    exportProgress,
    resetGamificationOnly,
    getLevelInfo,
    getModuleStatus,
    canAccessModule,
    rules: XP_RULES
  };

  document.addEventListener('DOMContentLoaded', initializeGamification);
})();
