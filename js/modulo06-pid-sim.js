let modulo06PID = {
  running: false,
  interval: null,
  sp: 22.0,
  pv: 26.0,
  sliderValue: 26.0,
  output: 0,
  valve: 0,
  integral: 0,
  prevError: 0,
  history: [],
  maxHistory: 8,
  thermalLoad: 0.06
};

function modulo06PIDSafeEl(id){
  return document.getElementById(id);
}

function modulo06PIDUpdateSlider(value){
  const v = parseFloat(value);
  modulo06PID.sliderValue = v;
  const label = modulo06PIDSafeEl('pidSliderValue');
  if(label) label.textContent = v.toFixed(1);

  if(!modulo06PID.running){
    modulo06PID.pv = v;
    modulo06PID.integral = 0;
    modulo06PID.prevError = modulo06PID.pv - modulo06PID.sp;
    modulo06PID.output = 0;
    modulo06PID.valve = 0;
    modulo06PID.history = Array(modulo06PID.maxHistory).fill(v);
    modulo06PIDRefreshUI('Aguardando início');
  }
}

function modulo06PIDStart(){
  if(!modulo06PIDSafeEl('pidPV')) return;
  if(modulo06PID.running) return;

  modulo06PID.running = true;
  modulo06PID.pv = parseFloat(modulo06PIDSafeEl('pidTempSlider')?.value || modulo06PID.sliderValue || 26);
  modulo06PID.history = Array(modulo06PID.maxHistory).fill(modulo06PID.pv);
  modulo06PID.integral = 0;
  modulo06PID.prevError = modulo06PID.pv - modulo06PID.sp;

  modulo06PIDRefreshUI('Controlando...');

  modulo06PID.interval = setInterval(() => {
    modulo06PIDStep();
  }, 450);
}

function modulo06PIDStep(){
  const kp = 20;
  const ki = 2.0;
  const kd = 6.0;

  let error = modulo06PID.pv - modulo06PID.sp;
  modulo06PID.integral += error * 0.45;
  modulo06PID.integral = Math.max(-20, Math.min(20, modulo06PID.integral));
  const derivative = error - modulo06PID.prevError;

  let output = (kp * error) + (ki * modulo06PID.integral) + (kd * derivative);
  output = Math.max(0, Math.min(100, output));

  modulo06PID.output = output;
  modulo06PID.valve = output;

  const coolingEffect = (modulo06PID.valve / 100) * 0.30;
  const ambientGain = modulo06PID.thermalLoad;
  modulo06PID.pv = modulo06PID.pv + ambientGain - coolingEffect;

  if(modulo06PID.pv < 20.8){
    modulo06PID.pv = 20.8;
  }
  if(modulo06PID.pv > 30){
    modulo06PID.pv = 30;
  }

  modulo06PID.prevError = error;
  modulo06PID.history.push(modulo06PID.pv);
  if(modulo06PID.history.length > modulo06PID.maxHistory){
    modulo06PID.history.shift();
  }

  let state = 'Modulando';
  if(modulo06PID.valve > 70) state = 'Abrindo mais';
  else if(modulo06PID.valve > 15) state = 'Modulando';
  else state = 'Reduzindo abertura';

  if(Math.abs(modulo06PID.pv - modulo06PID.sp) < 0.15 && modulo06PID.valve < 15){
    state = 'Próximo do setpoint';
  }

  modulo06PIDRefreshUI(state);

  if(modulo06PID.history.length >= 8 && Math.abs(modulo06PID.pv - modulo06PID.sp) < 0.08 && modulo06PID.valve < 8){
    clearInterval(modulo06PID.interval);
    modulo06PID.running = false;
    modulo06PIDRefreshUI('Estabilizado');
  }
}

function modulo06PIDReset(){
  clearInterval(modulo06PID.interval);
  modulo06PID.running = false;
  const slider = modulo06PIDSafeEl('pidTempSlider');
  const val = parseFloat(slider?.value || 26);
  modulo06PID.sliderValue = val;
  modulo06PID.pv = val;
  modulo06PID.output = 0;
  modulo06PID.valve = 0;
  modulo06PID.integral = 0;
  modulo06PID.prevError = modulo06PID.pv - modulo06PID.sp;
  modulo06PID.history = Array(modulo06PID.maxHistory).fill(val);

  const label = modulo06PIDSafeEl('pidSliderValue');
  if(label) label.textContent = val.toFixed(1);

  modulo06PIDRefreshUI('Aguardando início');
}

function modulo06PIDRefreshUI(stateText){
  const error = modulo06PID.pv - modulo06PID.sp;

  const setText = (id, txt) => {
    const el = modulo06PIDSafeEl(id);
    if(el) el.textContent = txt;
  };

  setText('pidSP', `${modulo06PID.sp.toFixed(1)} °C`);
  setText('pidPV', `${modulo06PID.pv.toFixed(1)} °C`);
  setText('pidError', `${error >= 0 ? '+' : ''}${error.toFixed(1)} °C`);
  setText('pidOutput', `${Math.round(modulo06PID.output)} %`);
  setText('pidValveOpen', `${Math.round(modulo06PID.valve)} %`);
  setText('pidState', stateText);
  setText('pidMeterText', `${Math.round(modulo06PID.valve)}%`);

  const meter = modulo06PIDSafeEl('pidMeterFill');
  if(meter) meter.style.width = `${Math.round(modulo06PID.valve)}%`;

  const gate = modulo06PIDSafeEl('pidValveGate');
  if(gate){
    gate.classList.remove('open-low', 'open-mid', 'open-high');
    if(modulo06PID.valve > 65) gate.classList.add('open-high');
    else if(modulo06PID.valve > 25) gate.classList.add('open-mid');
    else if(modulo06PID.valve > 0) gate.classList.add('open-low');
  }

  modulo06PIDRenderTrend();
}

function modulo06PIDRenderTrend(){
  const line = modulo06PIDSafeEl('pidTrendLine');
  const dot = modulo06PIDSafeEl('pidTrendDot');
  if(!line || !dot) return;

  const values = modulo06PID.history.length ? modulo06PID.history : Array(modulo06PID.maxHistory).fill(modulo06PID.pv);
  const left = 40;
  const right = 600;
  const top = 40;
  const bottom = 210;
  const minT = 18;
  const maxT = 30;

  const step = (right - left) / (values.length - 1 || 1);

  const pts = values.map((v, i) => {
    const x = left + (i * step);
    const normalized = (v - minT) / (maxT - minT);
    const y = bottom - (normalized * (bottom - top));
    return {x, y};
  });

  const pointsStr = pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  line.setAttribute('points', pointsStr);

  const last = pts[pts.length - 1];
  dot.setAttribute('cx', last.x.toFixed(1));
  dot.setAttribute('cy', last.y.toFixed(1));
}

window.modulo06PIDUpdateSlider = modulo06PIDUpdateSlider;
window.modulo06PIDStart = modulo06PIDStart;
window.modulo06PIDReset = modulo06PIDReset;

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if(document.getElementById('pidTempSlider')){
      modulo06PIDReset();
    }
  }, 200);
});
