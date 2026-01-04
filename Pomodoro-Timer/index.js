// --- Theme Toggle ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
body.classList.add('light');
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
});

// --- Button Animation ---
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('btn-animation');
    setTimeout(() => btn.classList.remove('btn-animation'), 200);
  });
});

// --- Tabs ---
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');
const [timerSection, statsSection, settingsSection] = sections;
tabs.forEach((tab, idx) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    sections.forEach(sec => sec.classList.add('hidden'));
    sections[idx].classList.remove('hidden');
  });
});

// --- Timer Elements ---
const timerDisplay = document.querySelector('.time');
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const nextBtn = document.getElementById('next');
const smallBtn = document.querySelector('.timer-small');
const largeBtn = document.querySelector('.timer-large');
const customBtn = document.querySelector('.custom');
const txtFocus = document.querySelector('.txt-focus');
const txtBreak = document.querySelector('.txt-break');
const txtLongBreak = document.querySelector('.txt-longbreak');
const footerCycle = document.querySelector('.footer div:first-child');
const circularProgress = document.querySelector('.circular-progress');
const customModal = document.querySelector('.custom-modal');
const customInput = document.getElementById('custom-input');
const customSave = document.getElementById('custom-save');
const customCancel = document.getElementById('custom-cancel');
const timerAdjBtns = document.querySelectorAll('.timer-small, .timer-large, .custom');

// --- Timer State ---
let mode = 'focus'; // 'focus' | 'break' | 'longbreak'
let isRunning = false;
let timeLeft = 50 * 60;
let timerInterval = null;
let cycle = 1;
let customDuration = null;
let currentTotalTime = 50 * 60;

// --- Utility Functions ---
const formatTime = seconds => {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
};

const updateProgress = () => {
  const progress = ((currentTotalTime - timeLeft) / currentTotalTime) * 360;
  circularProgress.style.background = `conic-gradient(var(--btn-color-start) ${progress}deg, var(--track-color) ${progress}deg)`;
};

const updateTextDisplay = () => {
  txtFocus.style.display = mode === 'focus' ? 'block' : 'none';
  txtBreak.style.display = mode === 'break' ? 'block' : 'none';
  txtLongBreak.style.display = mode === 'longbreak' ? 'block' : 'none';
};

const disableTimerBtns = () => timerAdjBtns.forEach(btn => {
  btn.disabled = true;
  btn.classList.add('disabled');
});

const enableTimerBtns = () => timerAdjBtns.forEach(btn => {
  btn.disabled = false;
  btn.classList.remove('disabled');
});

const pauseTimer = () => {
  clearInterval(timerInterval);
  isRunning = false;
  startBtn.classList.remove('running');
  enableTimerBtns();
};

const updateDisplay = () => {
  timerDisplay.textContent = formatTime(timeLeft);
  footerCycle.textContent = `Cycle ${cycle} of ${settings.cycles}`;
};

// --- Timer Logic ---
const startTimer = () => {
  if (isRunning) return;
  isRunning = true;
  startBtn.classList.add('running');
  disableTimerBtns();

  if (mode === 'focus') currentTotalTime = customDuration || settings.focusDuration * 60;
  else if (mode === 'break') currentTotalTime = settings.shortBreak * 60;
  else currentTotalTime = settings.longBreak * 60;

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();
    updateProgress();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      startBtn.classList.remove('running');
      enableTimerBtns();

      if (mode === 'focus') {
        completeSession();
        addFocusTime(currentTotalTime);
      }
      nextPhase();
    }
  }, 1000);
};

const resetTimer = () => {
  pauseTimer();
  if (mode === 'focus' && customDuration) timeLeft = customDuration;
  else if (mode === 'focus') timeLeft = settings.focusDuration * 60;
  else if (mode === 'break') timeLeft = settings.shortBreak * 60;
  else timeLeft = settings.longBreak * 60;

  updateDisplay();
  updateProgress();
};

const nextPhase = () => {
  if (mode === 'focus') {
    setMode((cycle % settings.cycles === 0) ? 'longbreak' : 'break');
  } else {
    cycle++;
    setMode('focus');
  }
};

const setMode = newMode => {
  mode = newMode;
  pauseTimer();
  timerSection.classList.remove('focus', 'break', 'longbreak');
  timerSection.classList.add(mode);

  if (mode === 'focus') timeLeft = customDuration || settings.focusDuration * 60;
  else if (mode === 'break') timeLeft = settings.shortBreak * 60;
  else timeLeft = settings.longBreak * 60;

  currentTotalTime = timeLeft;
  circularProgress.style.background = `conic-gradient(var(--btn-color-start) 0deg, var(--track-color) 0deg)`;
  updateDisplay();
  updateTextDisplay();
  updateProgress();
};

// --- Timer Button Events ---
startBtn.addEventListener('click', () => isRunning ? pauseTimer() : startTimer());
resetBtn.addEventListener('click', resetTimer);
nextBtn.addEventListener('click', nextPhase);

smallBtn.addEventListener('click', () => {
  timeLeft = 25 * 60;
  customDuration = 25 * 60;
  updateDisplay();
  updateProgress();
});
largeBtn.addEventListener('click', () => {
  timeLeft = 50 * 60;
  customDuration = null;
  updateDisplay();
  updateProgress();
});

// --- Space Key Toggle ---
document.addEventListener('keydown', e => {
  if (e.code === 'Space' && !customModal.classList.contains('hidden')) return;
  if (e.code === 'Space') {
    e.preventDefault();
    isRunning ? pauseTimer() : startTimer();
  }
});

// --- Custom Modal ---
customBtn.addEventListener('click', () => {
  customModal.classList.remove('hidden');
  customInput.value = '';
  customInput.focus();
});
customSave.addEventListener('click', () => {
  const minutes = parseInt(customInput.value, 10);
  if (!isNaN(minutes) && minutes > 0) {
    timeLeft = minutes * 60;
    customDuration = minutes * 60;
    updateDisplay();
    updateProgress();
    customModal.classList.add('hidden');
  } else {
    alert('Please enter a valid number greater than 0.');
  }
});
customCancel.addEventListener('click', () => customModal.classList.add('hidden'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') customModal.classList.add('hidden');
});

// --- Settings Elements ---
const settingsForm = document.getElementById('settings-form');
const savedMsg = document.getElementById('saved-msg');

// --- Settings State ---
let settings = {
  focusDuration: 50,
  shortBreak: 10,
  longBreak: 20,
  cycles: 5
};

// --- Settings Functions ---
const loadSettings = () => {
  const saved = localStorage.getItem('pomodoroSettings');
  if (saved) Object.assign(settings, JSON.parse(saved));
  document.getElementById('focus-duration').value = settings.focusDuration;
  document.getElementById('short-break').value = settings.shortBreak;
  document.getElementById('long-break').value = settings.longBreak;
  document.getElementById('cycles').value = settings.cycles;
};

const saveSettings = () => {
  localStorage.setItem('pomodoroSettings', JSON.stringify(settings));
  showSavedMessage();
};

const resetToDefaults = () => {
  settings = { focusDuration: 50, shortBreak: 10, longBreak: 20, cycles: 5 };
  loadSettings();
  saveSettings();
};

const showSavedMessage = () => {
  savedMsg.style.visibility = 'visible';
  savedMsg.classList.add('show');
  setTimeout(() => {
    savedMsg.style.visibility = 'hidden';
    savedMsg.classList.remove('show');
  }, 2000);
};

// --- Settings Events ---
settingsForm.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(settingsForm);
  settings.focusDuration = parseInt(formData.get('focusDuration'));
  settings.shortBreak = parseInt(formData.get('shortBreak'));
  settings.longBreak = parseInt(formData.get('longBreak'));
  settings.cycles = parseInt(formData.get('cycles'));

  if (
    settings.focusDuration < 1 || settings.focusDuration > 180 ||
    settings.shortBreak < 1 || settings.shortBreak > 60 ||
    settings.longBreak < 5 || settings.longBreak > 120 ||
    settings.cycles < 1 || settings.cycles > 12
  ) {
    alert('Please enter valid settings.');
    return;
  }

  saveSettings();
  if (mode === 'focus' && !isRunning) {
    timeLeft = settings.focusDuration * 60;
    customDuration = null;
    updateDisplay();
    updateProgress();
  }
});
document.getElementById('reset-btn').addEventListener('click', resetToDefaults);

// --- Stats Elements ---
const statTextTime = document.querySelector('.stat-text-time');
const statTextSession = document.querySelector('.stat-text-session');
const statTextStreak = document.querySelector('.stat-text-streak');

// --- Stats State ---
let stats = {
  todayFocus: 0,
  sessionsCompleted: 0,
  currentStreak: 1,
  lastActivityDate: null
};

// --- Stats Functions ---
const loadStats = () => {
  const saved = localStorage.getItem('pomodoroStats');
  if (saved) Object.assign(stats, JSON.parse(saved));
  const today = new Date().toDateString();
  if (stats.lastActivityDate !== today) {
    stats.todayFocus = 0;
    stats.sessionsCompleted = 0;
    stats.lastActivityDate = today;
  }
  updateStatsDisplay();
};

const saveStats = () => localStorage.setItem('pomodoroStats', JSON.stringify(stats));

const updateStatsDisplay = () => {
  const hours = Math.floor(stats.todayFocus / 3600);
  const minutes = Math.floor((stats.todayFocus % 3600) / 60);
  statTextTime.textContent = `${hours}h ${minutes}m`;
  statTextSession.textContent = stats.sessionsCompleted;
  statTextStreak.textContent = `${stats.currentStreak} days`;
};

const addFocusTime = seconds => {
  stats.todayFocus += seconds;
  stats.lastActivityDate = new Date().toDateString();
  saveStats();
  updateStatsDisplay();
};

const completeSession = () => {
  stats.sessionsCompleted++;
  const today = new Date().toDateString();
  const last = stats.lastActivityDate;
  stats.lastActivityDate = today;

  // Update streak
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (last === yesterday.toDateString()) stats.currentStreak++;
  else if (last !== today) stats.currentStreak = 1;

  saveStats();
  updateStatsDisplay();
};

// --- Initialize ---
loadSettings();
loadStats();
setMode('focus');
updateDisplay();
updateTextDisplay();