(function(){
  const SUPPORTED = ['pt','es','en'];
  const DEFAULT_LANG = 'pt';

  const messages = {
    pt: {
      htmlLang: 'pt-BR',
      themeLight: 'Modo Claro',
      themeDark: 'Modo Escuro',
      home: 'Home',
      logout: 'Sair',
      portalTitle: 'EBM Academy',
      trainingTitleHvac: 'EBM Academy • HVAC Crítico',
      trainingTitleElectrical: 'EBM Academy • Elétrica',
      trackHvac: 'TRILHA HVAC CRÍTICO',
      trackElectrical: 'TRILHA ELÉTRICA APLICADA A HVAC',
      menuTrainingHome: 'Home Treinamento',
      menuCycle: 'Ciclo Frigorífico',
      menuPsychrometrics: 'Psicrometria',
      menuPrecisionSelfs: 'Selfs de Precisão',
      menuPrecisionFanCoils: 'Fancoils de Precisão',
      menuChilledWater: 'Central Água Gelada',
      menuPumpsValves: 'Bombas e Válvulas',
      menuAutomation: 'Automação e BMS',
      menuTroubleshooting: 'Alarmes e Troubleshooting',
      menuHvacTools: 'Ferramentas HVAC',
      menuFinalAssessment: 'Avaliação Final',
      menuElectricalHome: 'Home Elétrica',
      menuFundamentals: 'Fundamentos',
      menuControls: 'Comandos',
      menuInstruments: 'Instrumentos',
      menuDiagnosis: 'Diagnóstico',
      menuTool: 'Ferramenta',
      loginText: 'Acesse a plataforma com seu usuário para estudar as trilhas de HVAC Crítico e Elétrica Aplicada a HVAC.',
      loginButton: 'Entrar',
      registerButton: 'Criar conta',
      resetButton: 'Esqueci minha senha',
      langSelector: 'Idioma / Language',
      loadErrorTitle: 'Erro',
      loadErrorText: 'Não foi possível carregar:',
      checklistDone: 'Checklist concluído. Avaliação liberada.',
      checklistPending: 'Conclua o checklist para liberar a avaliação.',
    },
    es: {
      htmlLang: 'es',
      themeLight: 'Modo Claro',
      themeDark: 'Modo Oscuro',
      home: 'Inicio',
      logout: 'Salir',
      portalTitle: 'EBM Academy',
      trainingTitleHvac: 'EBM Academy • HVAC Crítico',
      trainingTitleElectrical: 'EBM Academy • Electricidad',
      trackHvac: 'RUTA HVAC CRÍTICO',
      trackElectrical: 'RUTA ELÉCTRICA APLICADA A HVAC',
      menuTrainingHome: 'Inicio Formación',
      menuCycle: 'Ciclo de Refrigeración',
      menuPsychrometrics: 'Psicrometría',
      menuPrecisionSelfs: 'Unidades de Precisión',
      menuPrecisionFanCoils: 'Fan Coils de Precisión',
      menuChilledWater: 'Planta de Agua Helada',
      menuPumpsValves: 'Bombas y Válvulas',
      menuAutomation: 'Automatización y BMS',
      menuTroubleshooting: 'Alarmas y Troubleshooting',
      menuHvacTools: 'Herramientas HVAC',
      menuFinalAssessment: 'Evaluación Final',
      menuElectricalHome: 'Inicio Eléctrica',
      menuFundamentals: 'Fundamentos',
      menuControls: 'Mandos',
      menuInstruments: 'Instrumentos',
      menuDiagnosis: 'Diagnóstico',
      menuTool: 'Herramienta',
      loginText: 'Accede a la plataforma con tu usuario para estudiar las rutas de HVAC Crítico y Electricidad Aplicada a HVAC.',
      loginButton: 'Entrar',
      registerButton: 'Crear cuenta',
      resetButton: 'Olvidé mi contraseña',
      langSelector: 'Idioma / Language',
      loadErrorTitle: 'Error',
      loadErrorText: 'No fue posible cargar:',
      checklistDone: 'Checklist concluido. Evaluación liberada.',
      checklistPending: 'Complete el checklist para liberar la evaluación.',
    },
    en: {
      htmlLang: 'en',
      themeLight: 'Light Mode',
      themeDark: 'Dark Mode',
      home: 'Home',
      logout: 'Sign out',
      portalTitle: 'EBM Academy',
      trainingTitleHvac: 'EBM Academy • Critical HVAC',
      trainingTitleElectrical: 'EBM Academy • Electrical',
      trackHvac: 'CRITICAL HVAC TRACK',
      trackElectrical: 'ELECTRICAL HVAC TRACK',
      menuTrainingHome: 'Training Home',
      menuCycle: 'Refrigeration Cycle',
      menuPsychrometrics: 'Psychrometrics',
      menuPrecisionSelfs: 'Precision Units',
      menuPrecisionFanCoils: 'Precision Fan Coils',
      menuChilledWater: 'Chilled Water Plant',
      menuPumpsValves: 'Pumps and Valves',
      menuAutomation: 'Automation and BMS',
      menuTroubleshooting: 'Alarms and Troubleshooting',
      menuHvacTools: 'HVAC Tools',
      menuFinalAssessment: 'Final Assessment',
      menuElectricalHome: 'Electrical Home',
      menuFundamentals: 'Fundamentals',
      menuControls: 'Controls',
      menuInstruments: 'Instruments',
      menuDiagnosis: 'Diagnosis',
      menuTool: 'Tool',
      loginText: 'Access the platform with your account to study the Critical HVAC and Electrical Applied to HVAC tracks.',
      loginButton: 'Sign in',
      registerButton: 'Create account',
      resetButton: 'Forgot my password',
      langSelector: 'Idioma / Language',
      loadErrorTitle: 'Error',
      loadErrorText: 'Could not load:',
      checklistDone: 'Checklist completed. Assessment unlocked.',
      checklistPending: 'Complete the checklist to unlock the assessment.',
    }
  };

  function safeLang(value){
    return SUPPORTED.includes(value) ? value : DEFAULT_LANG;
  }

  function getLanguage(){
    return safeLang(localStorage.getItem('ebm-language'));
  }

  function t(key, fallback){
    const lang = getLanguage();
    return (messages[lang] && messages[lang][key]) || (messages.pt && messages.pt[key]) || fallback || key;
  }

  function setButtonHtml(button, icon, label){
    if(!button) return;
    button.innerHTML = `${icon}<span>${label}</span>`;
  }

  function updateThemeLabels(){
    const isLight = document.body.classList.contains('light-mode');
    const label = isLight ? t('themeDark') : t('themeLight');
    const icon = isLight ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    ['portal-theme-toggle','training-theme-toggle'].forEach(id => setButtonHtml(document.getElementById(id), icon, label));
  }

  function updateStaticUi(){
    const lang = getLanguage();
    document.documentElement.lang = messages[lang].htmlLang;
    document.querySelectorAll('.language-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    document.querySelectorAll('.language-switcher').forEach(el => el.setAttribute('aria-label', t('langSelector')));

    const logout = document.getElementById('logout-button');
    setButtonHtml(logout, '<i class="fa-solid fa-arrow-right-from-bracket"></i>', t('logout'));
    const home = document.getElementById('back-portal-button');
    setButtonHtml(home, '<i class="fa-solid fa-house"></i>', t('home'));

    const loginP = document.querySelector('#login-screen .auth-login-card > p');
    if(loginP) loginP.textContent = t('loginText');
    setButtonHtml(document.getElementById('login-button'), '<i class="fa-solid fa-right-to-bracket"></i>', t('loginButton'));
    const register = document.getElementById('register-button'); if(register) register.textContent = t('registerButton');
    const reset = document.getElementById('reset-password-button'); if(reset) reset.textContent = t('resetButton');
    updateThemeLabels();
  }

  function updateModuleIframeLang(root){
    const base = root || document;
    base.querySelectorAll('.module01-simlab-frame').forEach(frame => {
      frame.setAttribute('src', `simulators/ciclo-basico/index.html?embed=1&lang=${getLanguage()}`);
    });
  }

  function localizedModuleUrl(page){
    const lang = getLanguage();
    if(page === 'modulo01' && lang !== 'pt') return `modules/i18n/modulo01.${lang}.html`;
    return `modules/${page}.html`;
  }

  function afterPageLoad(page, container){
    updateStaticUi();
    updateModuleIframeLang(container || document);
  }

  function reloadCurrentLocalizedPage(){
    const shell = document.getElementById('training-shell');
    if(shell && !shell.classList.contains('hidden')){
      const page = window.EBM_ACTIVE_TRAINING_PAGE || document.querySelector('.menu a.active')?.dataset?.page;
      if(page && typeof window.loadTrainingPage === 'function') window.loadTrainingPage(page);
    }
  }

  function setLanguage(lang){
    const next = safeLang(lang);
    localStorage.setItem('ebm-language', next);
    updateStaticUi();
    if(typeof window.renderTrainingMenu === 'function' && window.EBM_CURRENT_TRACK){
      window.renderTrainingMenu(window.EBM_CURRENT_TRACK);
    }
    reloadCurrentLocalizedPage();
    document.dispatchEvent(new CustomEvent('ebm:languagechange', { detail: { lang: next } }));
  }

  function bindLanguageButtons(){
    document.querySelectorAll('.language-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    if(!localStorage.getItem('ebm-language')) localStorage.setItem('ebm-language', DEFAULT_LANG);
    bindLanguageButtons();
    updateStaticUi();
  });

  window.EBMI18N = {
    getLanguage,
    setLanguage,
    t,
    updateStaticUi,
    updateThemeLabels,
    localizedModuleUrl,
    afterPageLoad,
    updateModuleIframeLang,
  };
})();
