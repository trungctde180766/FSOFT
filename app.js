/**
 * APEXCORE - 8-WEEK ENTRY TEST & AUDIT MASTERY ENGINE
 * High-performance, zero-latency vanilla ES6 application logic
 */

(function () {
  'use strict';

  // ==================== STORAGE & STATE ====================
  const STORAGE_KEYS = {
    THEME: 'apex_theme',
    ROADMAP_PROGRESS: 'apex_roadmap_progress',
    ROADMAP_NOTES: 'apex_roadmap_notes',
    FLASHCARD_RATINGS: 'apex_fc_ratings',
    USER_ERRORS: 'apex_user_errors',
    MOCK_HISTORY: 'apex_mock_history',
    ENGLISH_STREAK: 'apex_english_streak',
    STREAK_DAYS: 'apex_streak_days',
    LAST_STUDY_DATE: 'apex_last_study_date',
    LESSON_PROGRESS: 'apex_lesson_progress',
    BEHAVIOR_LOGS: 'apex_behavior_logs',
    LEARNER_PROFILE: 'apex_learner_profile',
    SRS_DATA: 'apex_srs_data',
    XP_DATA: 'apex_xp_data',
    EXAM_DATE: 'apex_exam_date',
    QUICK_NOTES: 'apex_quick_notes',
    CHAPTER_STATS: 'apex_chapter_stats'
  };

  const appData = window.APP_DATA || {
    roadmap: [],
    flashcards: [],
    quizzes: [],
    auditQuestions: [],
    traps: { classicTraps: [], accessModifiersMatrix: [], collectionsMatrix: [] },
    commentCodes: [],
    dailyLessons: {}
  };

  const state = {
    activeTab: 'roadmap',
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'dark',
    roadmapProgress: JSON.parse(localStorage.getItem(STORAGE_KEYS.ROADMAP_PROGRESS) || '{}'),
    roadmapNotes: JSON.parse(localStorage.getItem(STORAGE_KEYS.ROADMAP_NOTES) || '{}'),
    flashcardRatings: JSON.parse(localStorage.getItem(STORAGE_KEYS.FLASHCARD_RATINGS) || '{}'),
    userErrors: JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_ERRORS) || '[]'),
    lessonProgress: JSON.parse(localStorage.getItem(STORAGE_KEYS.LESSON_PROGRESS) || '{}'),
    behaviorLogs: JSON.parse(localStorage.getItem(STORAGE_KEYS.BEHAVIOR_LOGS) || '[]'),
    learnerProfile: JSON.parse(localStorage.getItem(STORAGE_KEYS.LEARNER_PROFILE) || '{}'),

    // English session scoring
    engSessionCorrect: 0,
    engSessionWrong: 0,
    
    // Flashcard View State
    fcIndex: 0,
    fcFilteredList: [],
    fcCategory: 'all',
    fcOnlyWeak: false,
    fcSRSMode: false,
    fcIsFlipped: false,

    // Quiz State
    quizMode: 'practice', // 'practice' | 'mock'
    quizCategory: 'all',
    quizList: [],
    mockAnswers: {},
    mockTimerInterval: null,
    mockTimeRemaining: 1800, // 30 mins in seconds
    mockIsSubmitted: false,

    // Audit State
    auditIndex: 0,
    auditTimerInterval: null,
    auditTimeRemaining: 90,
    auditTotalTime: 90,
    mediaRecorder: null,
    audioChunks: [],
    recordedAudioUrl: null,
    auditChecklistState: {},

    // English State
    engIndex: 0,
    engMode: 'en-to-vi', // 'en-to-vi' | 'vi-to-en'
    engDailyDoneCount: 0,
    engFilteredList: [],

    // Pomodoro State
    pomoRemaining: 45 * 60,
    pomoTotal: 45 * 60,
    pomoInterval: null,
    pomoIsRunning: false,
    pomoLabel: '☕ Java Core (45m)',

    // SRS Data (SM-2 algorithm per card)
    srsData: JSON.parse(localStorage.getItem(STORAGE_KEYS.SRS_DATA) || '{}'),

    // XP & Gamification
    xpData: JSON.parse(localStorage.getItem(STORAGE_KEYS.XP_DATA) || '{"totalXP":0,"level":1,"earnedBadges":[]}'),

    // Exam date (ISO string)
    examDate: localStorage.getItem(STORAGE_KEYS.EXAM_DATE) || null,

    // Quick notes
    quickNotes: localStorage.getItem(STORAGE_KEYS.QUICK_NOTES) || '',

    // Chapter stats: { 'Ch1': { correct: 0, total: 0 }, ... }
    chapterStats: JSON.parse(localStorage.getItem(STORAGE_KEYS.CHAPTER_STATS) || '{}')
  };

  // Web Audio Context for zero-dependency beeps & alarms
  let audioCtx = null;
  function playTone(freq = 600, duration = 0.2, type = 'sine') {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play failed', e);
    }
  }

  function playSuccessChime() {
    playTone(523.25, 0.15); // C5
    setTimeout(() => playTone(659.25, 0.15), 120); // E5
    setTimeout(() => playTone(783.99, 0.25), 240); // G5
  }

  function playAlertChime() {
    playTone(880, 0.2, 'triangle');
    setTimeout(() => playTone(880, 0.2, 'triangle'), 250);
  }

  function speakText(text, lang = 'en-US') {
    if (!('speechSynthesis' in window)) {
      showToast('Trình duyệt không hỗ trợ Web Speech API', 'error');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }

  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ==================== INITIALIZATION ====================
  function init() {
    applyTheme(state.theme);
    setupTabs();
    setupHeader();
    setupPomodoro();
    
    // Modules Setup
    initRoadmapModule();
    initFlashcardsModule();
    initQuizModule();
    initAuditModule();
    initEnglishModule();
    initErrorBookModule();
    initPECodeModule();
    initAITutorModule();
    initBehaviorProfilerModule();
    initSRSModule();
    initXPGamificationModule();
    initAnalyticsModule();
    initExamCountdown();
    initAIStudyPlannerModule();
    initVoiceAuditModule();
    initSpeedQuizModule();
    initMockInterviewModule();
    initExportImport();
    
    updateGlobalProgress();
    checkDailyStreak();
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    const btn = document.getElementById('themeToggleBtn');
    if (btn) btn.innerHTML = theme === 'dark' ? '🌙' : '☀️';
  }

  function setupTabs() {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabKey = tab.dataset.tab;
        switchTab(tabKey);
      });
    });
  }

  function switchTab(tabKey) {
    state.activeTab = tabKey;
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tabKey));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.toggle('active', p.id === `pane-${tabKey}`));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setupHeader() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
      });
    }
  }

  function checkDailyStreak() {
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem(STORAGE_KEYS.LAST_STUDY_DATE);
    let streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK_DAYS) || '0', 10);

    if (lastDate) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (lastDate === yesterday) {
        // Continue streak
      } else if (lastDate !== today) {
        // Streak broken
        streak = 1;
      }
    } else {
      streak = 1;
    }

    localStorage.setItem(STORAGE_KEYS.LAST_STUDY_DATE, today);
    localStorage.setItem(STORAGE_KEYS.STREAK_DAYS, streak.toString());

    const streakEl = document.getElementById('streakDaysStat');
    if (streakEl) streakEl.textContent = `${streak} ngày 🔥`;
  }

  // ==================== POMODORO TIMER ====================
  function setupPomodoro() {
    const toggleBtn = document.getElementById('pomoToggleBtn');
    const resetBtn = document.getElementById('pomoResetBtn');
    const presetBtn = document.getElementById('pomoPresetBtn');
    const menu = document.getElementById('pomoMenu');
    const display = document.getElementById('pomoTimer');
    const badge = document.getElementById('pomoModeBadge');

    function updateDisplay() {
      const m = Math.floor(state.pomoRemaining / 60).toString().padStart(2, '0');
      const s = (state.pomoRemaining % 60).toString().padStart(2, '0');
      display.textContent = `${m}:${s}`;
    }

    toggleBtn.addEventListener('click', () => {
      if (state.pomoIsRunning) {
        clearInterval(state.pomoInterval);
        state.pomoIsRunning = false;
        toggleBtn.textContent = '▶';
      } else {
        state.pomoIsRunning = true;
        toggleBtn.textContent = '⏸';
        state.pomoInterval = setInterval(() => {
          if (state.pomoRemaining > 0) {
            state.pomoRemaining--;
            updateDisplay();
          } else {
            clearInterval(state.pomoInterval);
            state.pomoIsRunning = false;
            toggleBtn.textContent = '▶';
            playAlertChime();
            showToast('🎉 Hết giờ học tập trung! Hãy nghỉ ngơi ít phút.', 'success');
          }
        }, 1000);
      }
    });

    resetBtn.addEventListener('click', () => {
      clearInterval(state.pomoInterval);
      state.pomoIsRunning = false;
      toggleBtn.textContent = '▶';
      state.pomoRemaining = state.pomoTotal;
      updateDisplay();
    });

    presetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });

    document.addEventListener('click', () => menu.classList.remove('show'));

    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const mins = parseInt(btn.dataset.pomo, 10);
        state.pomoTotal = mins * 60;
        state.pomoRemaining = state.pomoTotal;
        state.pomoLabel = btn.dataset.label;
        badge.textContent = state.pomoLabel;
        clearInterval(state.pomoInterval);
        state.pomoIsRunning = false;
        toggleBtn.textContent = '▶';
        updateDisplay();
        menu.classList.remove('show');
      });
    });

    updateDisplay();
  }

  // ==================== TAB 1: ROADMAP & TRACKER ====================
  function initRoadmapModule() {
    renderRoadmapWeeks();

    // Filter toolbar buttons
    const filterBtns = document.querySelectorAll('.roadmap-toolbar .filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const weekFilter = btn.dataset.week;
        filterRoadmapWeeks(weekFilter);
      });
    });

    const resetBtn = document.getElementById('resetProgressBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ 56 ngày không?')) {
          state.roadmapProgress = {};
          localStorage.removeItem(STORAGE_KEYS.ROADMAP_PROGRESS);
          renderRoadmapWeeks();
          updateGlobalProgress();
          showToast('Đã đặt lại tiến độ lộ trình.', 'info');
        }
      });
    }
  }

  function filterRoadmapWeeks(weekFilter) {
    const cards = document.querySelectorAll('.week-card');
    cards.forEach(card => {
      if (weekFilter === 'all' || card.dataset.week === weekFilter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // ==================== MULTI-STAGE LESSON PROGRESS HELPERS ====================
  function getDayLessonProgress(day) {
    const dayKey = day.toString();
    if (!state.lessonProgress[dayKey]) {
      const wasDone = !!state.roadmapProgress[day];
      state.lessonProgress[dayKey] = {
        status: wasDone ? 'completed' : 'not_started',
        theoryDone: wasDone,
        practiceDone: wasDone,
        assessmentPassed: wasDone,
        quizScore: wasDone ? { correct: 10, total: 10, percent: 100 } : null,
        completed: wasDone
      };
    }
    return state.lessonProgress[dayKey];
  }

  function saveDayLessonProgress(day, updates) {
    const dayKey = day.toString();
    const current = getDayLessonProgress(day);
    Object.assign(current, updates);
    state.lessonProgress[dayKey] = current;
    localStorage.setItem(STORAGE_KEYS.LESSON_PROGRESS, JSON.stringify(state.lessonProgress));
    updateDayCardUI(day);
  }

  function getStatusBadgeHtml(day) {
    const prog = getDayLessonProgress(day);
    if (prog.completed) {
      return `<span class="day-status-pill day-status-completed">🟢 DAY COMPLETED</span>`;
    }
    if (prog.assessmentPassed) {
      const scoreText = prog.quizScore ? `${prog.quizScore.correct}/${prog.quizScore.total}` : 'Đạt';
      return `<span class="day-status-pill day-status-quiz">🟣 Quiz ${scoreText}</span>`;
    }
    if (prog.practiceDone) {
      return `<span class="day-status-pill day-status-practice">🟠 ✓ Practice</span>`;
    }
    if (prog.theoryDone) {
      return `<span class="day-status-pill day-status-theory">🟡 ✓ Theory</span>`;
    }
    if (prog.status === 'studying') {
      return `<span class="day-status-pill day-status-studying">🔵 ◐ Đang học</span>`;
    }
    return `<span class="day-status-pill day-status-not-started">⚪ Chưa bắt đầu</span>`;
  }

  function updateDayCardUI(day) {
    const dayCard = document.getElementById(`dayCard-${day}`);
    if (!dayCard) return;
    const prog = getDayLessonProgress(day);
    const isDone = prog.completed || !!state.roadmapProgress[day];

    dayCard.classList.toggle('completed', isDone);
    const cb = dayCard.querySelector('.day-checkbox');
    if (cb) cb.checked = isDone;

    const badgeWrap = dayCard.querySelector('.day-status-badge-wrap');
    if (badgeWrap) badgeWrap.innerHTML = getStatusBadgeHtml(day);

    const breakdownWrap = dayCard.querySelector('.day-stage-breakdown');
    if (breakdownWrap) {
      const quizText = prog.quizScore ? `${prog.quizScore.correct}/${prog.quizScore.total}` : (prog.assessmentPassed ? '✓' : '○');
      breakdownWrap.innerHTML = `
        <span class="stage-tag ${prog.theoryDone ? 'done' : ''}">Theory ${prog.theoryDone ? '✓' : '○'}</span>
        <span class="stage-tag ${prog.practiceDone ? 'done' : ''}">Practice ${prog.practiceDone ? '✓' : '○'}</span>
        <span class="stage-tag ${prog.assessmentPassed ? 'done' : ''}">Quiz ${quizText}</span>
      `;
    }
  }

  function renderRoadmapWeeks() {
    const container = document.getElementById('roadmapWeeksContainer');
    if (!container) return;
    container.innerHTML = '';

    appData.roadmap.forEach((weekObj, wIndex) => {
      const weekCard = document.createElement('div');
      weekCard.className = `week-card ${wIndex === 0 ? 'expanded' : ''}`;
      weekCard.dataset.week = weekObj.week.toString();

      // Count completed days in this week
      const totalDays = weekObj.days.length;
      let completedDays = 0;
      weekObj.days.forEach(d => {
        const prog = getDayLessonProgress(d.day);
        if (prog.completed || state.roadmapProgress[d.day]) completedDays++;
      });

      const weekHeader = document.createElement('div');
      weekHeader.className = 'week-header';
      weekHeader.innerHTML = `
        <div class="week-title-area">
          <span class="week-badge" style="background: ${weekObj.color}22; color: ${weekObj.color}; border: 1px solid ${weekObj.color}44;">${weekObj.badge}</span>
          <h3 class="week-title">${weekObj.title}</h3>
        </div>
        <div class="week-meta">
          <span class="week-progress-pill" id="weekProg-${weekObj.week}">Đã xong: ${completedDays}/${totalDays} ngày</span>
          <span class="accordion-icon">${wIndex === 0 ? '▲' : '▼'}</span>
        </div>
      `;

      weekHeader.addEventListener('click', () => {
        const isExp = weekCard.classList.toggle('expanded');
        weekHeader.querySelector('.accordion-icon').textContent = isExp ? '▲' : '▼';
      });

      const daysContainer = document.createElement('div');
      daysContainer.className = 'week-days-container';

      weekObj.days.forEach(dayObj => {
        const prog = getDayLessonProgress(dayObj.day);
        const isDone = prog.completed || !!state.roadmapProgress[dayObj.day];
        const dayCard = document.createElement('div');
        dayCard.className = `day-card ${isDone ? 'completed' : ''}`;
        dayCard.id = `dayCard-${dayObj.day}`;

        const topicsHtml = dayObj.topics.map(t => `<span class="topic-tag">${t}</span>`).join('');
        const tasksHtml = dayObj.tasks.map(t => `<li class="day-task-item">${t}</li>`).join('');
        const savedNote = state.roadmapNotes[dayObj.day] || '';
        const quizText = prog.quizScore ? `${prog.quizScore.correct}/${prog.quizScore.total}` : (prog.assessmentPassed ? '✓' : '○');

        dayCard.innerHTML = `
          <div class="day-header">
            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <label class="day-checkbox-label">
                <input type="checkbox" class="day-checkbox" data-day="${dayObj.day}" ${isDone ? 'checked' : ''}>
                <span>Ngày ${dayObj.day}: ${dayObj.title}</span>
              </label>
              <span class="day-status-badge-wrap">${getStatusBadgeHtml(dayObj.day)}</span>
            </div>
            <span class="day-target-pill">Target: ${dayObj.targetHours.java}h Java + ${dayObj.targetHours.other}h Tech + ${dayObj.targetHours.testking}h TK</span>
          </div>

          <div class="day-stage-breakdown">
            <span class="stage-tag ${prog.theoryDone ? 'done' : ''}">Theory ${prog.theoryDone ? '✓' : '○'}</span>
            <span class="stage-tag ${prog.practiceDone ? 'done' : ''}">Practice ${prog.practiceDone ? '✓' : '○'}</span>
            <span class="stage-tag ${prog.assessmentPassed ? 'done' : ''}">Quiz ${quizText}</span>
          </div>

          <div class="day-topics">${topicsHtml}</div>
          <ul class="day-tasks-list">${tasksHtml}</ul>
          <div class="day-actions-row">
            <button class="btn btn-sm btn-primary open-lesson-btn" data-day="${dayObj.day}">📖 Vào Học Lesson Chi Tiết (Ngày ${dayObj.day})</button>
            <button class="btn btn-sm btn-outline open-fc-btn" data-day="${dayObj.day}">⚡ Flashcards Ngày ${dayObj.day}</button>
            <button class="btn btn-sm btn-outline open-quiz-btn" data-day="${dayObj.day}">🎯 Luyện Đề</button>
          </div>
          <div class="day-notes-wrapper">
            <textarea class="day-notes-input" data-day="${dayObj.day}" rows="2" placeholder="Ghi chép nhanh / các điểm cần nhớ của ngày ${dayObj.day}...">${savedNote}</textarea>
          </div>
        `;

        // Lesson button handler
        dayCard.querySelector('.open-lesson-btn').addEventListener('click', () => {
          openDailyLesson(dayObj.day);
        });

        // Jump to flashcards
        dayCard.querySelector('.open-fc-btn').addEventListener('click', () => {
          switchTab('flashcards');
        });

        // Jump to quiz
        dayCard.querySelector('.open-quiz-btn').addEventListener('click', () => {
          switchTab('quiz');
        });

        // Checkbox event
        const cb = dayCard.querySelector('.day-checkbox');
        cb.addEventListener('change', (e) => {
          const checked = e.target.checked;
          if (checked) {
            state.roadmapProgress[dayObj.day] = true;
            saveDayLessonProgress(dayObj.day, { completed: true, status: 'completed' });
            playSuccessChime();
            showToast(`Tuyệt vời! Đã hoàn thành Ngày ${dayObj.day}`, 'success');
            // Award XP for completing a day
            awardXP(10, `Hoàn Thành Ngày ${dayObj.day} ✅`);
            updateExamCountdown();
          } else {
            delete state.roadmapProgress[dayObj.day];
            saveDayLessonProgress(dayObj.day, { completed: false, status: 'studying' });
          }
          localStorage.setItem(STORAGE_KEYS.ROADMAP_PROGRESS, JSON.stringify(state.roadmapProgress));
          updateGlobalProgress();
          updateWeekBadge(weekObj.week);
          checkAndAwardBadges();
        });

        // Note change event
        const noteInput = dayCard.querySelector('.day-notes-input');
        noteInput.addEventListener('input', (e) => {
          state.roadmapNotes[dayObj.day] = e.target.value;
          localStorage.setItem(STORAGE_KEYS.ROADMAP_NOTES, JSON.stringify(state.roadmapNotes));
        });

        daysContainer.appendChild(dayCard);
      });

      weekCard.appendChild(weekHeader);
      weekCard.appendChild(daysContainer);
      container.appendChild(weekCard);
    });

    setupDailyLessonModal();
  }

  // ==================== MARKDOWN TO HTML RENDERER ====================
  function renderMarkdown(md) {
    if (!md) return '';

    // 1. Math symbols & superscripts
    let s = md
      .replace(/\\times/g, '×')
      .replace(/\\pm/g, '±')
      .replace(/\\rightarrow/g, '→')
      .replace(/\$(\-?\d+)\^\{?(\d+)\}?\s*-\s*1\$/g, '$1<sup>$2</sup> - 1')
      .replace(/\$(\-?\d+)\^\{?(\d+)\}?\$/g, '$1<sup>$2</sup>')
      .replace(/\$([^\$]+)\$/g, '$1');

    function inlineFormat(txt) {
      return txt
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/`([^`]+)`/g, '<code class="lesson-inline-code">$1</code>');
    }

    const lines = s.split('\n');
    const out = [];
    let inTable = false;
    let tableHeader = [];
    let tableRows = [];
    let inList = false;
    let listType = '';

    function closeTable() {
      if (!inTable) return;
      let html = '<div class="table-responsive" style="overflow-x: auto; margin: 1.25rem 0;"><table class="lesson-markdown-table">';
      if (tableHeader.length > 0) {
        html += '<thead><tr>' + tableHeader.map(h => '<th>' + inlineFormat(h) + '</th>').join('') + '</tr></thead>';
      }
      html += '<tbody>';
      tableRows.forEach(r => {
        html += '<tr>' + r.map(c => '<td>' + inlineFormat(c) + '</td>').join('') + '</tr>';
      });
      html += '</tbody></table></div>';
      out.push(html);
      inTable = false;
      tableHeader = [];
      tableRows = [];
    }

    function closeList() {
      if (!inList) return;
      out.push(listType === 'ol' ? '</ol>' : '</ul>');
      inList = false;
      listType = '';
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Markdown Table Row
      if (line.startsWith('|') && line.endsWith('|')) {
        closeList();
        const cells = line.split('|').slice(1, -1).map(c => c.trim());
        // Check if it's separator row | :--- | :--- |
        if (cells.every(c => /^:?-+:?$/.test(c))) {
          continue;
        }
        if (!inTable) {
          inTable = true;
          tableHeader = cells;
        } else {
          tableRows.push(cells);
        }
        continue;
      } else {
        closeTable();
      }

      if (!line) {
        closeList();
        continue;
      }

      // Headings
      if (line.startsWith('#### ')) {
        closeList();
        out.push('<h5 class="lesson-theory-h5">' + inlineFormat(line.slice(5)) + '</h5>');
        continue;
      }
      if (line.startsWith('### ')) {
        closeList();
        out.push('<h4 class="lesson-theory-h4">' + inlineFormat(line.slice(4)) + '</h4>');
        continue;
      }
      if (line.startsWith('## ')) {
        closeList();
        out.push('<h3 class="lesson-theory-h3">' + inlineFormat(line.slice(3)) + '</h3>');
        continue;
      }

      // Unordered list
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (!inList || listType !== 'ul') {
          closeList();
          inList = true;
          listType = 'ul';
          out.push('<ul class="lesson-theory-list">');
        }
        out.push('<li>' + inlineFormat(line.slice(2)) + '</li>');
        continue;
      }

      // Ordered list
      const olMatch = line.match(/^(\d+)\.\s+(.*)/);
      if (olMatch) {
        if (!inList || listType !== 'ol') {
          closeList();
          inList = true;
          listType = 'ol';
          out.push('<ol class="lesson-theory-ol">');
        }
        out.push('<li>' + inlineFormat(olMatch[2]) + '</li>');
        continue;
      }

      closeList();
      out.push('<p class="lesson-theory-p">' + inlineFormat(line) + '</p>');
    }

    closeTable();
    closeList();
    return out.join('\n');
  }

  // ==================== DAILY LESSON READER (COURSE HUB ENGINE) ====================
  let activeLessonDay = 1;

  function setupDailyLessonModal() {
    const backBtn = document.getElementById('backToRoadmapBtn');
    const backFooterBtn = document.getElementById('backToRoadmapFooterBtn');
    const markDoneBtn = document.getElementById('lessonPageMarkCompletedBtn');
    const openFcBtn = document.getElementById('lessonPageOpenFcBtn');
    const openQzBtn = document.getElementById('lessonPageOpenQuizBtn');

    function returnToRoadmap() {
      switchTab('roadmap');
      setTimeout(() => {
        const targetCard = document.getElementById(`dayCard-${activeLessonDay}`);
        if (targetCard) targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }

    if (backBtn) backBtn.addEventListener('click', returnToRoadmap);
    if (backFooterBtn) backFooterBtn.addEventListener('click', returnToRoadmap);

    if (markDoneBtn) {
      markDoneBtn.addEventListener('click', () => {
        const prog = getDayLessonProgress(activeLessonDay);
        // Prerequisite validation
        if (!prog.assessmentPassed && (!prog.quizScore || prog.quizScore.percent < 70)) {
          showToast('⚠️ Bạn cần vượt qua bài kiểm tra Daily Assessment (>= 70%) trước khi hoàn thành!', 'error');
          const secAssess = document.getElementById('sec-assessment');
          if (secAssess) secAssess.scrollIntoView({ behavior: 'smooth' });
          return;
        }

        saveDayLessonProgress(activeLessonDay, { completed: true, status: 'completed' });
        state.roadmapProgress[activeLessonDay] = true;
        localStorage.setItem(STORAGE_KEYS.ROADMAP_PROGRESS, JSON.stringify(state.roadmapProgress));

        const lesson = (appData.dailyLessons && appData.dailyLessons[activeLessonDay.toString()]) || {};
        updateGlobalProgress();
        if (lesson.week) updateWeekBadge(lesson.week);
        playSuccessChime();
        showToast(`🎉 Xuất sắc! Đã hoàn thành đạt chuẩn Ngày ${activeLessonDay}.`, 'success');
        returnToRoadmap();
      });
    }

    if (openFcBtn) {
      openFcBtn.addEventListener('click', () => {
        switchTab('flashcards');
      });
    }

    if (openQzBtn) {
      openQzBtn.addEventListener('click', () => {
        switchTab('quiz');
      });
    }
  }

  function openDailyLesson(dayNumber) {
    activeLessonDay = dayNumber;
    const body = document.getElementById('lessonPageContentBody');
    const title = document.getElementById('lessonPageTitle');
    const weekBadge = document.getElementById('lessonPageWeekBadge');
    const priorityBadge = document.getElementById('lessonPagePriority');
    const timeBadge = document.getElementById('lessonPageTime');
    const diffBadge = document.getElementById('lessonPageDiff');
    const navList = document.getElementById('lessonPageNavList');
    const progressFill = document.getElementById('lessonPageProgressFill');
    const progressText = document.getElementById('lessonPageProgressText');

    const lesson = (appData.dailyLessons && appData.dailyLessons[dayNumber.toString()]) || null;
    if (!lesson) {
      showToast(`Đang cập nhật bài học chi tiết cho ngày ${dayNumber}`, 'info');
      return;
    }

    // Set status to studying if not started
    const prog = getDayLessonProgress(dayNumber);
    if (prog.status === 'not_started') {
      saveDayLessonProgress(dayNumber, { status: 'studying' });
    }

    // Update Header Metadata
    if (title) title.textContent = `Ngày ${dayNumber}: ${lesson.title}`;
    if (weekBadge) weekBadge.textContent = `Tuần ${lesson.week}`;
    if (priorityBadge) priorityBadge.textContent = lesson.priority || '🔴 MUST KNOW';
    if (timeBadge) timeBadge.textContent = `⏱️ ${lesson.estimatedTime || '3h 30m'}`;
    if (diffBadge) diffBadge.textContent = lesson.difficulty || '⭐⭐';

    // Synchronize AI Tutor context with current day's lesson
    if (typeof window.setAILessonContext === 'function') {
      window.setAILessonContext(dayNumber, lesson.title, lesson.summary || lesson.topic || '');
    }

    // Calculate lesson progress
    const pct = prog.completed ? 100 : (prog.assessmentPassed ? 85 : (prog.practiceDone ? 60 : (prog.theoryDone ? 40 : 20)));
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (progressText) progressText.textContent = `Tiến độ bài học: ${pct}%`;

    // 1. Build Sidebar Navigation
    const navItems = [
      { id: 'sec-overview', label: '01. Mục tiêu & Tổng quan' }
    ];

    if (lesson.parts && lesson.parts.length > 0) {
      lesson.parts.forEach((p, idx) => {
        navItems.push({ id: `sec-${p.id}`, label: `02.${idx + 1} ${p.title.split(':')[0]}` });
      });
    }

    navItems.push(
      { id: 'sec-tracing', label: '03. Trace The Code Arena' },
      { id: 'sec-traps', label: '04. ⚠️ Exam Traps (Cạm bẫy)' },
      { id: 'sec-practice', label: '05. 📝 Bài tập 5 cấp độ' },
      { id: 'sec-assessment', label: '06. 🎯 Daily Assessment (MCQ)' },
      { id: 'sec-flashcards', label: '07. ⚡ Flashcards phản xạ' },
      { id: 'sec-english', label: '08. 🇬🇧 CommentCode IT' },
      { id: 'sec-pe-coding', label: '09. 💻 PE Luyện Code Chay' }
    );

    if (navList) {
      navList.innerHTML = navItems.map((item, idx) => `
        <button class="lesson-nav-btn ${idx === 0 ? 'active' : ''}" data-target="${item.id}">
          <span>${item.label}</span>
        </button>
      `).join('');

      navList.querySelectorAll('.lesson-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          navList.querySelectorAll('.lesson-nav-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const targetEl = document.getElementById(btn.dataset.target);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }

    // 2. Render Sub-lessons (Parts A-F)
    const partsHtml = (lesson.parts || []).map(part => {
      let legalIllegalHtml = '';
      if (part.legalExamples && part.illegalExamples) {
        legalIllegalHtml = `
          <div class="legal-illegal-grid">
            <div class="legal-box">
              <div class="legal-header">✓ 10 Định Danh HỢP LỆ (Legal Identifiers)</div>
              <table class="examples-table">
                <tbody>
                  ${part.legalExamples.map(ex => `
                    <tr>
                      <td class="example-code" style="color: #34d399;">${ex.name}</td>
                      <td style="color: #cbd5e1;">${ex.why}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            <div class="illegal-box">
              <div class="illegal-header">✗ 10 Định Danh BỊ LỖI (Illegal Identifiers)</div>
              <table class="examples-table">
                <tbody>
                  ${part.illegalExamples.map(ex => `
                    <tr>
                      <td class="example-code" style="color: #fb7185;">${ex.name}</td>
                      <td style="color: #fca5a5;">${ex.why}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      let codeHtml = '';
      if (part.code) {
        codeHtml = `
          <div style="margin: 1rem 0;">
            <div class="code-box-header">
              <span>Java Source Code</span>
              <button class="btn-copy-code" onclick="navigator.clipboard.writeText(this.dataset.code); showToast('Đã copy code vào clipboard!', 'info');" data-code="${part.code.replace(/"/g, '&quot;')}">📋 Copy</button>
            </div>
            <pre style="margin: 0; background: #080d1a; padding: 1rem 1.25rem; border: 1px solid rgba(255,255,255,0.08); border-radius: 0 0 6px 6px; font-family: var(--font-mono); font-size: 0.85rem; color: #7dd3fc; overflow-x: auto;"><code>${part.code}</code></pre>
          </div>
        `;
      }

      return `
        <div class="lesson-section-block" id="sec-${part.id}">
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.85rem;">
            <h4 style="font-size: 1.15rem; color: var(--accent-blue); font-weight: 800; margin: 0;">${part.title}</h4>
            <span style="font-size: 0.75rem; background: rgba(56, 189, 248, 0.12); color: #38bdf8; padding: 0.2rem 0.55rem; border-radius: 4px; font-family: var(--font-mono);">${part.sourceRef || 'SCJP Core'}</span>
          </div>
          <div class="lesson-theory-text">${renderMarkdown(part.theory)}</div>
          ${legalIllegalHtml}
          ${codeHtml}
        </div>
      `;
    }).join('');

    // 3. Render Interactive Code Tracing Arena
    const tracingHtml = (lesson.codeTracing || []).map((ct, idx) => `
      <div class="tracing-arena-box" id="ctCard-${ct.id}">
        <div class="tracing-header">
          <span style="font-weight: 700; color: var(--text-primary);">Bài Tracing #${idx + 1}: ${ct.question}</span>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="btn-ask-ai-pill" onclick="window.askAIAboutItem('tracing', ${idx})">
              <span class="ai-sparkle">✨</span> Hỏi AI
            </button>
            <span class="tracing-level level-${ct.level.toLowerCase()}">${ct.level}</span>
          </div>
        </div>
        <pre style="background: #060913; padding: 0.85rem 1rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.85rem; color: #38bdf8; border: 1px solid rgba(255,255,255,0.06); margin-bottom: 0.75rem; overflow-x: auto;"><code>${ct.code}</code></pre>
        <div class="tracing-options-grid">
          ${ct.options.map((opt, optIdx) => `
            <button class="tracing-opt-btn" data-ct-id="${ct.id}" data-opt-idx="${optIdx}" data-correct-idx="${ct.correctIndex}">
              ${opt}
            </button>
          `).join('')}
        </div>
        <div class="tracing-feedback-box" id="ctFeedback-${ct.id}" style="display: none; margin-top: 0.75rem; padding: 0.85rem 1rem; border-radius: 4px; background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-subtle); font-size: 0.88rem;">
          <div class="ct-result-title" style="font-weight: 700; margin-bottom: 0.35rem;"></div>
          <div class="ct-explanation" style="color: #cbd5e1;">${ct.explanation}</div>
          <div style="margin-top: 0.75rem; padding-top: 0.6rem; border-top: 1px dashed rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-size: 0.8rem; color: #94a3b8;">Chưa hiểu rõ cơ chế JVM hoặc cạm bẫy?</span>
            <button type="button" class="btn-ask-ai-action" onclick="window.askAIAboutItem('tracing', ${idx})">
              🤖 Nhắn AI phân tích sâu & hỏi đáp riêng →
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // 4. Render Exam Traps
    const trapsHtml = (lesson.examTraps || []).map((trap, idx) => `
      <div class="lesson-section-block" style="background: rgba(245, 158, 11, 0.04); border-color: rgba(245, 158, 11, 0.25); margin-bottom: 1rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
          <h5 style="color: var(--accent-amber); font-size: 1rem; font-weight: 800; margin: 0; display: flex; align-items: center; gap: 0.4rem;">
            <span>⚠️</span> ${trap.trap}
          </h5>
          <button type="button" class="btn-ask-ai-pill" onclick="window.askAIAboutItem('trap', ${idx})">
            <span class="ai-sparkle">✨</span> Hỏi AI bẫy này
          </button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem; color: #e2e8f0;">
          <div><strong style="color: #f87171;">❌ Tại sao dễ mất điểm:</strong> ${trap.whyPeopleWrong}</div>
          <div><strong style="color: #fb923c;">🧠 Tư duy cảm tính sai:</strong> ${trap.wrongThinking}</div>
          <div><strong style="color: #34d399;">✅ Quy tắc đúng trong Java:</strong> ${trap.correctRule}</div>
          ${trap.code ? `<pre style="background: #090e1c; padding: 0.6rem 0.85rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.82rem; color: #fde047; margin: 0.35rem 0;"><code>${trap.code}</code></pre>` : ''}
          <div style="background: rgba(255,255,255,0.03); padding: 0.5rem 0.75rem; border-radius: 4px; border-left: 3px solid var(--accent-amber); margin-top: 0.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <div><strong style="color: #fef08a;">💡 Mini Check:</strong> ${trap.miniCheck}</div>
            <button type="button" class="btn-ask-ai-link" onclick="window.askAIAboutItem('trap', ${idx})">
              🤖 Nhờ AI giải thích thêm →
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // 5. Render Progressive Practice (5 Levels)
    const practiceHtml = (lesson.practiceExercises || []).map((levelItem, lIdx) => `
      <div class="practice-accordion-item">
        <div class="practice-accordion-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'flex' : 'none'">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span style="color: var(--accent-blue); font-weight: 800;">${levelItem.level}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 400;">(${levelItem.desc})</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--accent-blue);">Chi tiết ▼</span>
        </div>
        <div class="practice-accordion-body" style="display: ${lIdx === 0 ? 'flex' : 'none'};">
          ${levelItem.questions.map((qObj, qIdx) => `
            <div style="background: rgba(0,0,0,0.25); padding: 0.85rem 1rem; border-radius: 4px; border: 1px solid rgba(255,255,255,0.05); width: 100%;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.4rem;">
                <div style="font-weight: 600; color: #f8fafc;">❓ Câu ${qIdx + 1}: ${qObj.q}</div>
                <button type="button" class="btn-ask-ai-pill" onclick="window.askAIAboutItem('practice', ${lIdx}, ${qIdx})">
                  <span class="ai-sparkle">✨</span> Hỏi AI
                </button>
              </div>
              <div style="margin-top: 0.4rem;">
                <button class="lesson-reveal-ans-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
                  💡 Xem Lời Giải & Phân Tích
                </button>
                <div style="display: none; margin-top: 0.5rem; padding: 0.6rem 0.85rem; border-radius: 4px; background: rgba(52, 211, 153, 0.08); border-left: 3px solid #34d399; color: #34d399; font-size: 0.85rem;">
                  <div><strong>Đáp án & Giải thích:</strong> ${qObj.ans}</div>
                  <div style="margin-top: 0.5rem; text-align: right;">
                    <button type="button" class="btn-ask-ai-link" onclick="window.askAIAboutItem('practice', ${lIdx}, ${qIdx})">
                      🤖 Chưa hiểu? Nhắn AI giải thích chi tiết bước này →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    // 6. Render Daily Assessment (Strict MCQ)
    const assessmentQuestions = lesson.dailyAssessment || [];
    const assessmentHtml = assessmentQuestions.map((qItem, qIdx) => `
      <div class="assessment-q-card" id="assessCard-${qItem.id}">
        <div class="assessment-q-title" style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
          <div><span style="color: var(--accent-blue); font-family: var(--font-mono);">Câu ${qIdx + 1}:</span> ${qItem.q}</div>
          <button type="button" class="btn-ask-ai-pill" onclick="window.askAIAboutItem('assessment', ${qIdx})">
            <span class="ai-sparkle">✨</span> Hỏi AI
          </button>
        </div>
        <div class="assessment-opts">
          ${qItem.options.map((optText, optIdx) => `
            <label class="assessment-label">
              <input type="radio" name="assess_${qItem.id}" value="${optIdx}">
              <span>${optText}</span>
            </label>
          `).join('')}
        </div>
        <div class="assessment-feedback" id="assessFeedback-${qItem.id}" style="display: none; margin-top: 0.6rem; padding: 0.6rem 0.85rem; border-radius: 4px; font-size: 0.82rem;">
          <div class="assess-feedback-title" style="font-weight: 700; margin-bottom: 0.2rem;"></div>
          <div style="color: #cbd5e1;">${qItem.exp}</div>
          <div style="margin-top: 0.5rem; padding-top: 0.4rem; border-top: 1px dashed rgba(255,255,255,0.1); text-align: right;">
            <button type="button" class="btn-ask-ai-action" onclick="window.askAIAboutItem('assessment', ${qIdx})">
              🤖 Hỏi AI phân tích sâu câu hỏi này →
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // 7. Render Flashcards Section
    const flashcardsHtml = (lesson.dailyFlashcards || []).map((fc, idx) => `
      <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 0.75rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-weight: 700; color: var(--accent-blue);">⚡ Flashcard #${idx + 1}</span>
            <span style="font-size: 0.75rem; color: var(--accent-amber);">⚠️ Bẫy thi</span>
          </div>
          <button type="button" class="btn-ask-ai-pill" onclick="window.askAIAboutItem('flashcard', ${idx})">
            <span class="ai-sparkle">✨</span> Hỏi AI
          </button>
        </div>
        <div style="font-size: 0.92rem; font-weight: 600; color: #f8fafc; margin-bottom: 0.5rem;">${fc.q}</div>
        <button class="lesson-reveal-ans-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
          🔄 Lật Thẻ / Xem Đáp Án
        </button>
        <div style="display: none; margin-top: 0.6rem; padding: 0.6rem 0.85rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--accent-emerald); border-radius: 4px; font-size: 0.85rem; color: #34d399;">
          <div><strong>Đáp án:</strong> ${fc.a}</div>
          <div style="margin-top: 0.25rem; color: #fde047; font-size: 0.8rem;"><em>Cạm bẫy: ${fc.trap}</em></div>
          <div style="margin-top: 0.4rem; text-align: right;">
            <button type="button" class="btn-ask-ai-link" onclick="window.askAIAboutItem('flashcard', ${idx})">
              🤖 Nhờ AI giải thích chi tiết & ví dụ →
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // 8. Render English Drill
    const englishRows = (lesson.dailyEnglish || []).map(eng => `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 700; width: 45px;">#${eng.id}</td>
        <td>${eng.vi}</td>
        <td style="font-weight: 600; color: var(--accent-blue);">${eng.en}</td>
        <td style="color: #94a3b8; font-size: 0.8rem;">${eng.grammar || 'Ngữ pháp IT chuẩn'}</td>
        <td style="width: 50px;"><button class="icon-btn-text" onclick="window.speechSynthesis && window.speechSynthesis.speak(new SpeechSynthesisUtterance('${eng.en.replace(/'/g, "\\'")}'))">🔊</button></td>
      </tr>
    `).join('');

    // Match PE problem for this day
    const peProblems = appData.peProblems || [];
    const matchedPe = peProblems.find(p => p.dayRef === dayNumber) || peProblems[((dayNumber - 1) % peProblems.length)] || peProblems[0] || { id: 'pe_01_reverse_words', title: 'PE 01: Reverse Words', category: 'Strings' };

    // Injected Full HTML Body
    if (body) {
      body.innerHTML = `
        <!-- Section 1: Overview & Objectives -->
        <div class="lesson-section-block" id="sec-overview" style="background: rgba(56, 189, 248, 0.06); border-color: rgba(56, 189, 248, 0.25);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
            <h4 style="color: var(--accent-blue); font-size: 1.1rem; margin: 0; font-weight: 800;">🎯 Mục Tiêu Trọng Tâm & Khung Kỹ Năng</h4>
            <span style="font-size: 0.78rem; background: rgba(255,255,255,0.06); padding: 0.2rem 0.6rem; border-radius: var(--radius-full); color: #94a3b8;">📖 Nguồn: ${lesson.source}</span>
          </div>
          
          <div style="margin-bottom: 1rem;">
            <div style="font-size: 0.88rem; font-weight: 700; color: #93c5fd; margin-bottom: 0.4rem;">Mục tiêu cụ thể cần đạt sau buổi học:</div>
            <ul style="padding-left: 1.25rem; margin: 0; color: #cbd5e1; font-size: 0.88rem; line-height: 1.6;">
              ${(lesson.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
            </ul>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.82rem; margin-top: 0.75rem; border-top: 1px dashed rgba(56, 189, 248, 0.2); padding-top: 0.75rem;">
            <div><strong style="color: #38bdf8;">📌 Tầm quan trọng đề thi:</strong> <span style="color: #cbd5e1;">${lesson.whyMatters}</span></div>
            <div><strong style="color: #38bdf8;">🔑 Điều kiện tiên quyết:</strong> <span style="color: #cbd5e1;">${lesson.prerequisites}</span></div>
          </div>
        </div>

        <!-- Section 2: Sub-lessons Parts A-F -->
        ${partsHtml}

        <!-- Section 3: Interactive Code Tracing Arena -->
        <div class="lesson-section-block" id="sec-tracing">
          <div class="lesson-section-title">🧠 TRACE THE CODE ARENA (Dự Đoán Kết Quả & Phân Tích Máy Ảo)</div>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 1rem;">
            Không có đáp án sẵn! Hãy phân tích dòng chảy thực thi và chọn phương án dự đoán để kiểm tra độ nhạy bén với cơ chế máy ảo JVM.
          </p>
          <div class="tracing-arena-list">${tracingHtml}</div>
        </div>

        <!-- Section 4: Exam Traps -->
        <div class="lesson-section-block" id="sec-traps">
          <div class="lesson-section-title" style="color: var(--accent-amber);">⚠️ CẠM BẪY ĐỀ THI KINH ĐIỂN (EXAM TRAPS DEEP-DIVE)</div>
          <div class="traps-container">${trapsHtml}</div>
        </div>

        <!-- Section 5: Progressive Practice -->
        <div class="lesson-section-block" id="sec-practice">
          <div class="lesson-section-title">📝 BÀI TẬP PHÂN TÍCH TĂNG DẦN ĐỘ KHÓ (5 CẤP ĐỘ)</div>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 1rem;">
            Hệ thống bài tập chia theo 5 bậc thang nhận thức: Recall → Understanding → Code Tracing → Exam Trap → Challenge.
          </p>
          <div class="practice-accordions-list">${practiceHtml}</div>
        </div>

        <!-- Section 6: Daily Assessment Quiz -->
        <div class="lesson-section-block" id="sec-assessment" style="border-color: rgba(168, 85, 247, 0.35);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
            <div class="lesson-section-title" style="color: var(--accent-purple); margin: 0;">🎯 DAILY ASSESSMENT (${assessmentQuestions.length} Câu Trắc Nghiệm Chuẩn)</div>
            <span style="font-size: 0.78rem; background: rgba(168, 85, 247, 0.15); color: #c084fc; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); font-weight: 700;">Chuẩn đạt: >= 70%</span>
          </div>
          <p style="color: #94a3b8; font-size: 0.85rem; margin-bottom: 1.25rem;">
            Làm bài kiểm tra khách quan để kiểm chứng kiến thức đã học. Điểm số $\ge 70\%$ sẽ mở khóa hoàn thành ngày học. Nếu làm sai, bạn có thể tự động đồng bộ câu hỏi vào Error Book để ôn lại!
          </p>

          <form id="dailyAssessmentForm">
            ${assessmentHtml}
            <div style="margin-top: 1.5rem; text-align: center; display: flex; justify-content: center; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
              <button type="button" class="btn btn-primary" id="btnSubmitAssessment" style="padding: 0.75rem 2rem; font-size: 1rem;">
                📝 Nộp Bài Kiểm Tra & Chấm Điểm
              </button>
              <button type="button" class="btn btn-secondary" id="btnResetAssessmentForm" style="padding: 0.75rem 1.5rem; font-size: 0.95rem; display: none;">
                🔄 Thi Lại / Làm Mới
              </button>
            </div>
          </form>

          <div id="assessmentResultBanner" style="display: none; margin-top: 1.5rem;"></div>
        </div>

        <!-- Section 7: Flashcards -->
        <div class="lesson-section-block" id="sec-flashcards">
          <div class="lesson-section-title">⚡ BỘ THẺ FLASHCARDS ÔN NHANH TRONG NGÀY</div>
          <div class="flashcards-grid">${flashcardsHtml}</div>
        </div>

        <!-- Section 8: CommentCode IT -->
        <div class="lesson-section-block" id="sec-english">
          <div class="lesson-section-title">🇬🇧 5 CÂU LUYỆN DỊCH COMMENT CODE IT</div>
          <table class="lesson-english-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mô tả tiếng Việt</th>
                <th>English Comment</th>
                <th>Cấu trúc ngữ pháp</th>
                <th>Nghe</th>
              </tr>
            </thead>
            <tbody>${englishRows}</tbody>
          </table>
        </div>

        <!-- Section 9: PE Code Chay Lab -->
        <div class="lesson-section-block" id="sec-pe-coding">
          <div class="lesson-section-title">💻 BÀI TẬP THỰC HÀNH PE (PRACTICAL EXAM) - CODE CHAY LEETCODE</div>
          <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.15)); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: var(--radius-md); padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="font-size: 0.75rem; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.35rem;">
                ⚡ Bài thực hành gắn liền với kiến thức ngày ${dayNumber} (${matchedPe.category})
              </div>
              <h4 style="margin: 0 0 0.4rem; color: #f8fafc; font-size: 1.15rem; font-weight: 800;">
                ${escapeHtml(matchedPe.title)}
              </h4>
              <p style="margin: 0; color: #cbd5e1; font-size: 0.85rem; line-height: 1.5; max-width: 650px;">
                Tự gõ code chay trực tiếp trên trình duyệt kiểu LeetCode, chấm điểm bằng trình biên dịch <strong>Java 23</strong> thực tế với các test case tự động.
              </p>
            </div>
            <button type="button" class="btn btn-primary" onclick="window.openPEProblemById('${matchedPe.id}')" style="box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);">
              💻 Vào Code Chay Ngay →
            </button>
          </div>
        </div>
      `;

      // 3. Attach Tracing Options Event Handlers
      body.querySelectorAll('.tracing-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ctId = btn.dataset.ctId;
          const optIdx = parseInt(btn.dataset.optIdx, 10);
          const correctIdx = parseInt(btn.dataset.correctIdx, 10);
          const card = document.getElementById(`ctCard-${ctId}`);
          const feedback = document.getElementById(`ctFeedback-${ctId}`);
          if (!card || !feedback) return;

          // Disable all buttons in this card
          card.querySelectorAll('.tracing-opt-btn').forEach((b, idx) => {
            b.disabled = true;
            if (idx === correctIdx) {
              b.classList.add('selected-correct');
            } else if (idx === optIdx && optIdx !== correctIdx) {
              b.classList.add('selected-wrong');
            }
          });

          const titleEl = feedback.querySelector('.ct-result-title');
          if (optIdx === correctIdx) {
            titleEl.textContent = '✓ Chính xác! Phân tích logic rất tốt.';
            titleEl.style.color = '#34d399';
            playTone(600, 0.1);
          } else {
            titleEl.textContent = '✗ Chưa chính xác. Xem cơ chế JVM bên dưới:';
            titleEl.style.color = '#fb7185';
            playTone(300, 0.15);
          }
          feedback.style.display = 'block';

          // Update progress
          saveDayLessonProgress(dayNumber, { practiceDone: true, theoryDone: true });
        });
      });

      // Retake / Reset Daily Assessment function
      const handleRetakeDailyAssessment = () => {
        const form = document.getElementById('dailyAssessmentForm');
        if (form) {
          form.querySelectorAll('input[type="radio"]').forEach(r => {
            r.checked = false;
            r.disabled = false;
          });
        }

        assessmentQuestions.forEach(qItem => {
          const card = document.getElementById(`assessCard-${qItem.id}`);
          if (card) {
            card.style.borderColor = '';
            card.querySelectorAll('.assessment-label').forEach(lbl => {
              lbl.classList.remove('opt-correct', 'opt-wrong');
            });
          }
          const feedback = document.getElementById(`assessFeedback-${qItem.id}`);
          if (feedback) {
            feedback.style.display = 'none';
            const titleEl = feedback.querySelector('.assess-feedback-title');
            if (titleEl) titleEl.textContent = '';
          }
        });

        const banner = document.getElementById('assessmentResultBanner');
        if (banner) {
          banner.style.display = 'none';
          banner.innerHTML = '';
        }

        const submitBtn = document.getElementById('btnSubmitAssessment');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '📝 Nộp Bài Kiểm Tra & Chấm Điểm';
        }

        const resetBtn = document.getElementById('btnResetAssessmentForm');
        if (resetBtn) {
          resetBtn.style.display = 'none';
        }

        const retakeDiff = Math.round((Date.now() - (window.lastAssessSubmitTime || 0)) / 1000);
        if (retakeDiff > 0 && retakeDiff < 10) {
          recordBehaviorEvent({
            type: 'rage-retake',
            title: `🔄 Bấm Thi Lại sau ${retakeDiff}s`,
            detail: `Hành vi nôn nóng: Bạn vừa bấm thi lại sau ${retakeDiff}s mà chưa dành thời gian đọc kỹ lời giải của các câu sai!`
          });
        }
        window.activeAssessStartTime = Date.now();

        const assessSec = document.getElementById('sec-assessment');
        if (assessSec) {
          assessSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        showToast('🔄 Đã làm mới bài thi Daily Assessment! Bạn có thể làm lại từ đầu.', 'info');
      };

      // Set initial assessment start time
      window.activeAssessStartTime = Date.now();

      // 4. Attach Daily Assessment Form Submission
      const submitAssessBtn = document.getElementById('btnSubmitAssessment');
      const resetAssessBtn = document.getElementById('btnResetAssessmentForm');
      if (resetAssessBtn) {
        resetAssessBtn.addEventListener('click', handleRetakeDailyAssessment);
      }

      if (submitAssessBtn) {
        submitAssessBtn.addEventListener('click', () => {
          let correctCount = 0;
          const total = assessmentQuestions.length;
          const wrongItems = [];

          assessmentQuestions.forEach(qItem => {
            const selected = document.querySelector(`input[name="assess_${qItem.id}"]:checked`);
            const card = document.getElementById(`assessCard-${qItem.id}`);
            const feedback = document.getElementById(`assessFeedback-${qItem.id}`);
            const titleEl = feedback ? feedback.querySelector('.assess-feedback-title') : null;

            // Highlight answer options
            if (card) {
              card.querySelectorAll('.assessment-label').forEach((lbl, oIdx) => {
                lbl.classList.remove('opt-correct', 'opt-wrong');
                if (oIdx === qItem.correct) {
                  lbl.classList.add('opt-correct');
                } else if (selected && parseInt(selected.value, 10) === oIdx) {
                  lbl.classList.add('opt-wrong');
                }
              });
            }

            if (!selected) {
              if (card) card.style.borderColor = 'rgba(244, 63, 94, 0.5)';
              if (feedback && titleEl) {
                titleEl.textContent = `✗ Bạn chưa chọn đáp án. Đáp án đúng là: ${qItem.options[qItem.correct]}`;
                titleEl.style.color = '#fb7185';
                feedback.style.display = 'block';
              }
              wrongItems.push({
                question: qItem.q,
                userAns: '(Chưa chọn)',
                correctAns: qItem.options[qItem.correct],
                exp: qItem.exp
              });
              return;
            }

            const userVal = parseInt(selected.value, 10);
            if (userVal === qItem.correct) {
              correctCount++;
              if (card) card.style.borderColor = 'rgba(16, 185, 129, 0.5)';
              if (feedback && titleEl) {
                titleEl.textContent = '✓ Chính xác!';
                titleEl.style.color = '#34d399';
                feedback.style.display = 'block';
              }
            } else {
              if (card) card.style.borderColor = 'rgba(244, 63, 94, 0.5)';
              if (feedback && titleEl) {
                titleEl.textContent = `✗ Chưa đúng. Đáp án đúng là: ${qItem.options[qItem.correct]}`;
                titleEl.style.color = '#fb7185';
                feedback.style.display = 'block';
              }
              wrongItems.push({
                question: qItem.q,
                userAns: qItem.options[userVal],
                correctAns: qItem.options[qItem.correct],
                exp: qItem.exp
              });
            }
          });

          const scorePercent = Math.round((correctCount / total) * 100);
          const isPassed = scorePercent >= 70;
          const banner = document.getElementById('assessmentResultBanner');

          const durationSec = Math.max(1, Math.round((Date.now() - (window.activeAssessStartTime || Date.now())) / 1000));
          const avgSec = parseFloat((durationSec / total).toFixed(1));
          window.lastAssessSubmitTime = Date.now();

          // Log telemetry
          let eventType = 'methodical-pass';
          let badgeText = '🎯 Cẩn Trọng & Đạt';
          if (!isPassed) {
            if (avgSec < 8) {
              eventType = 'overconfident';
              badgeText = '⚠️ Tự Tin Nhưng Ẩu (Quá Vội Vàng)';
            } else {
              eventType = 'hesitant-fail';
              badgeText = '⏳ Do Dự & Cấn Kiến Thức';
            }
          } else {
            if (avgSec < 8) {
              eventType = 'speed-master';
              badgeText = '⚡ Siêu Tốc & Chuẩn Xác';
            } else {
              eventType = 'methodical-pass';
              badgeText = '🎯 Điềm Tĩnh & Đạt Điểm';
            }
          }

          recordBehaviorEvent({
            type: eventType,
            avgSec,
            isTestSubmit: true,
            title: `Daily Assessment Ngày ${dayNumber}: ${correctCount}/${total} (${scorePercent}%) - ${avgSec}s/câu`,
            detail: `Nộp ${total} câu trong ${durationSec}s. ${eventType === 'overconfident' ? 'Bệnh "Tự tin nhưng ẩu": Làm bài quá nhanh theo phản xạ cảm tính (System 1), thấy quen mắt là chọn ngay ➜ Sập bẫy cú pháp!' : (eventType === 'speed-master' ? 'Phản xạ thần tốc và chính xác!' : 'Tốc độ làm bài tương đối cân bằng.')}`
          });

          // Save progress
          saveDayLessonProgress(dayNumber, {
            quizScore: { correct: correctCount, total, percent: scorePercent },
            assessmentPassed: isPassed,
            status: isPassed ? 'quiz_passed' : 'studying'
          });

          // Show inline reset button
          if (resetAssessBtn) {
            resetAssessBtn.style.display = 'inline-flex';
          }

          if (banner) {
            banner.style.display = 'block';
            if (isPassed) {
              banner.innerHTML = `
                <div class="assessment-score-banner score-pass">
                  <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">🎉 XUẤT SẮC! ĐẠT ${correctCount}/${total} (${scorePercent}%)</h3>
                  <p style="margin-bottom: 0.85rem; font-size: 0.95rem;">Bạn đã vượt qua tiêu chuẩn bài học ngày ${dayNumber}. Bạn có thể bấm nút <strong>"✓ Đạt Chuẩn & Hoàn Thành Ngày Này"</strong> ở góc dưới hoặc thi lại để đạt điểm tuyệt đối!</p>
                  
                  <div class="behavioral-quick-alert" style="margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                      <span style="font-weight: 700; font-size: 0.85rem; color: #e0e7ff;">
                        🧠 Bắt bệnh thói quen: <strong>${avgSec}s/câu</strong> · 
                        <span style="color: #34d399;">${badgeText}</span>
                      </span>
                      <button type="button" class="btn-open-profiler-link" onclick="window.openBehaviorProfiler()">
                        🔍 Xem Bắt Bệnh Tâm Lý &amp; Kê Toa AI →
                      </button>
                    </div>
                  </div>

                  <div style="display: flex; gap: 0.75rem; justify-content: center; align-items: center; flex-wrap: wrap; margin-top: 1rem;">
                    <button type="button" class="btn btn-secondary" id="btnRetakeAssessment" style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.5); color: #34d399; padding: 0.65rem 1.4rem; font-size: 0.95rem;">
                      🔄 Thi Lại Để Đạt Điểm Tuyệt Đối (100%)
                    </button>
                  </div>
                </div>
              `;
              playSuccessChime();
            } else {
              banner.innerHTML = `
                <div class="assessment-score-banner score-fail">
                  <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem;">⚠️ CHƯA ĐẠT CHUẨN (${correctCount}/${total} - ${scorePercent}%)</h3>
                  <p style="margin-bottom: 0.85rem; font-size: 0.95rem;">Cần tối thiểu 70% (${Math.ceil(total * 0.7)}/${total} câu) để hoàn thành ngày. Hãy đọc lại phần lý thuyết và phân tích các câu sai phía trên, sau đó bấm <strong>"🔄 Làm Lại Bài Thi"</strong> để thi lại!</p>
                  
                  <div class="behavioral-quick-alert" style="margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                      <span style="font-weight: 700; font-size: 0.85rem; color: #e0e7ff;">
                        🧠 Bắt bệnh thói quen: <strong>${avgSec}s/câu</strong> · 
                        <span style="color: #fb7185;">${badgeText}</span>
                      </span>
                      <button type="button" class="btn-open-profiler-link" onclick="window.openBehaviorProfiler()">
                        🔍 Xem Bắt Bệnh Tâm Lý &amp; Kê Toa AI →
                      </button>
                    </div>
                  </div>

                  <div style="display: flex; gap: 0.75rem; justify-content: center; align-items: center; flex-wrap: wrap; margin-top: 1rem;">
                    <button type="button" class="btn btn-primary" id="btnRetakeAssessment" style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 0.7rem 1.6rem; font-weight: 700; font-size: 0.95rem; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);">
                      🔄 Làm Lại Bài Thi (Thi Lại)
                    </button>
                    <button type="button" class="btn btn-danger" id="btnSyncErrorsToBook" style="padding: 0.7rem 1.4rem; font-size: 0.95rem;">
                      📕 Lưu ${wrongItems.length} Câu Sai Này Vào Error Book Để Ôn Tập
                    </button>
                  </div>
                </div>
              `;
              playTone(350, 0.2);

              const syncBtn = document.getElementById('btnSyncErrorsToBook');
              if (syncBtn) {
                syncBtn.addEventListener('click', () => {
                  wrongItems.forEach(item => {
                    state.userErrors.unshift({
                      id: 'err_quiz_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
                      title: `[Ngày ${dayNumber}] ${item.question.slice(0, 50)}...`,
                      category: 'syntax',
                      desc: `Câu hỏi: ${item.question}\nBạn chọn: ${item.userAns}\nĐáp án đúng: ${item.correctAns}`,
                      code: '',
                      fix: item.exp,
                      date: new Date().toLocaleDateString('vi-VN')
                    });
                  });
                  localStorage.setItem(STORAGE_KEYS.USER_ERRORS, JSON.stringify(state.userErrors));
                  renderUserErrors();
                  syncBtn.disabled = true;
                  syncBtn.textContent = `✓ Đã lưu ${wrongItems.length} câu vào Error Book!`;
                  showToast(`Đã lưu ${wrongItems.length} câu sai vào Error Book. Hãy ôn lại trong tab Error Book!`, 'success');
                });
              }
            }

            // Attach retake click listener to the button inside banner
            const retakeBtn = document.getElementById('btnRetakeAssessment');
            if (retakeBtn) {
              retakeBtn.addEventListener('click', handleRetakeDailyAssessment);
            }

            banner.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    }

    // Switch to the dedicated full-page Lesson Hub!
    switchTab('lesson');
  }

  function updateWeekBadge(weekNum) {
    const weekObj = appData.roadmap.find(w => w.week === weekNum);
    if (!weekObj) return;
    let completed = 0;
    weekObj.days.forEach(d => {
      if (state.roadmapProgress[d.day]) completed++;
    });
    const el = document.getElementById(`weekProg-${weekNum}`);
    if (el) el.textContent = `Đã xong: ${completed}/${weekObj.days.length} ngày`;
  }

  function updateGlobalProgress() {
    const totalDays = 56;
    const completedDays = Object.keys(state.roadmapProgress).length;
    const pct = Math.round((completedDays / totalDays) * 100);

    const fill = document.getElementById('headerProgressFill');
    const text = document.getElementById('headerProgressText');
    const stat = document.getElementById('completedDaysStat');

    if (fill) fill.style.width = `${pct}%`;
    if (text) text.textContent = `${completedDays}/${totalDays} Ngày (${pct}%)`;
    if (stat) stat.textContent = `${completedDays}/${totalDays}`;
  }

  // ==================== TAB 2: 3D FLASHCARDS ====================
  function initFlashcardsModule() {
    const categorySelect = document.getElementById('fcCategoryFilter');
    const categories = ['all', ...new Set(appData.flashcards.map(f => f.category))];

    if (categorySelect) {
      categorySelect.innerHTML = categories.map(cat => {
        const label = cat === 'all' ? 'Tất cả chuyên đề (Toàn bộ thẻ)' : cat;
        return `<option value="${cat}">${label}</option>`;
      }).join('');

      categorySelect.addEventListener('change', (e) => {
        state.fcCategory = e.target.value;
        filterFlashcards();
      });
    }

    const card = document.getElementById('activeFlashcard');
    if (card) {
      card.addEventListener('click', toggleCardFlip);
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (state.activeTab !== 'flashcards') return;
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        toggleCardFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        nextFlashcard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevFlashcard();
      } else if (e.key === '1') {
        rateActiveCard('hard');
      } else if (e.key === '2') {
        rateActiveCard('good');
      } else if (e.key === '3') {
        rateActiveCard('mastered');
      }
    });

    document.getElementById('fcPrevBtn').addEventListener('click', prevFlashcard);
    document.getElementById('fcNextBtn').addEventListener('click', nextFlashcard);
    document.getElementById('fcRateHardBtn').addEventListener('click', () => rateActiveCard('hard'));
    document.getElementById('fcRateGoodBtn').addEventListener('click', () => rateActiveCard('good'));
    document.getElementById('fcRateMasteredBtn').addEventListener('click', () => rateActiveCard('mastered'));

    document.getElementById('fcShuffleBtn').addEventListener('click', () => {
      shuffleArray(state.fcFilteredList);
      state.fcIndex = 0;
      renderCurrentFlashcard();
      showToast('Đã xáo trộn thứ tự các thẻ!', 'info');
    });

    const weakBtn = document.getElementById('fcFilterWeakBtn');
    weakBtn.addEventListener('click', () => {
      state.fcOnlyWeak = !state.fcOnlyWeak;
      weakBtn.classList.toggle('active', state.fcOnlyWeak);
      filterFlashcards();
      if (state.fcOnlyWeak) showToast('Đang lọc các thẻ "Chưa nhớ"', 'info');
    });

    const srsBtn = document.getElementById('fcSRSModeBtn');
    if (srsBtn) {
      srsBtn.addEventListener('click', () => {
        state.fcSRSMode = !state.fcSRSMode;
        state.fcOnlyWeak = false;
        document.getElementById('fcFilterWeakBtn').classList.remove('active');
        srsBtn.classList.toggle('active', state.fcSRSMode);
        filterFlashcards();
        if (state.fcSRSMode) {
          const dueCount = getSRSDueCards().length;
          showToast(`SRS Mode: ${dueCount} thẻ cần ôn hôm nay!`, 'info');
        }
      });
    }

    document.getElementById('fcResetMasteryBtn').addEventListener('click', () => {
      if (confirm('Đặt lại tất cả đánh giá nhớ của thẻ?')) {
        state.flashcardRatings = {};
        localStorage.removeItem(STORAGE_KEYS.FLASHCARD_RATINGS);
        updateFlashcardStats();
        renderCurrentFlashcard();
        showToast('Đã reset toàn bộ trạng thái nhớ của thẻ', 'info');
      }
    });

    document.getElementById('fcAudioBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      const current = state.fcFilteredList[state.fcIndex];
      if (current) speakText(current.answer, 'vi-VN');
    });

    document.getElementById('fcCopyCodeBtn').addEventListener('click', (e) => {
      e.stopPropagation();
      const current = state.fcFilteredList[state.fcIndex];
      if (current && current.code) {
        navigator.clipboard.writeText(current.code);
        showToast('Đã sao chép mã code vào clipboard!', 'success');
      }
    });

    filterFlashcards();
    updateSRSDueBadge();
  }

  function toggleCardFlip() {
    const card = document.getElementById('activeFlashcard');
    if (!card) return;
    state.fcIsFlipped = !state.fcIsFlipped;
    card.classList.toggle('flipped', state.fcIsFlipped);
  }

  function filterFlashcards() {
    let list = [...appData.flashcards];
    if (state.fcSRSMode) {
      list = getSRSDueCards();
    } else {
      if (state.fcCategory !== 'all') {
        list = list.filter(f => f.category === state.fcCategory);
      }
      if (state.fcOnlyWeak) {
        list = list.filter(f => (state.flashcardRatings[f.id] || 'hard') === 'hard');
      }
    }
    state.fcFilteredList = list;
    state.fcIndex = 0;
    updateFlashcardStats();
    renderCurrentFlashcard();
  }

  function renderCurrentFlashcard() {
    const card = document.getElementById('activeFlashcard');
    if (!card) return;

    // Reset flip
    state.fcIsFlipped = false;
    card.classList.remove('flipped');

    if (state.fcFilteredList.length === 0) {
      document.getElementById('fcQuestionText').textContent = 'Không có thẻ nào phù hợp với bộ lọc hiện tại.';
      document.getElementById('fcAnswerText').textContent = '';
      document.getElementById('fcCodeContainer').style.display = 'none';
      document.getElementById('fcTrapContainer').style.display = 'none';
      document.getElementById('fcFrontTag').textContent = 'Trống';
      document.getElementById('fcIndexCounter').textContent = '0 / 0';
      document.getElementById('fcPositionIndicator').textContent = '0 / 0';
      return;
    }

    const current = state.fcFilteredList[state.fcIndex];
    document.getElementById('fcFrontTag').textContent = `${current.category} • ${current.tag}`;
    document.getElementById('fcIndexCounter').textContent = `${state.fcIndex + 1} / ${state.fcFilteredList.length}`;
    document.getElementById('fcPositionIndicator').textContent = `${state.fcIndex + 1} / ${state.fcFilteredList.length}`;
    document.getElementById('fcQuestionText').textContent = current.question;
    document.getElementById('fcAnswerText').textContent = current.answer;

    // Code
    const codeBox = document.getElementById('fcCodeContainer');
    const codeEl = document.getElementById('fcCodeContent');
    if (current.code) {
      codeEl.textContent = current.code;
      codeBox.style.display = 'block';
    } else {
      codeBox.style.display = 'none';
    }

    // Trap
    const trapBox = document.getElementById('fcTrapContainer');
    const trapEl = document.getElementById('fcTrapText');
    if (current.trap) {
      trapEl.textContent = current.trap;
      trapBox.style.display = 'flex';
    } else {
      trapBox.style.display = 'none';
    }
  }

  function nextFlashcard() {
    if (state.fcFilteredList.length === 0) return;
    state.fcIndex = (state.fcIndex + 1) % state.fcFilteredList.length;
    renderCurrentFlashcard();
  }

  function prevFlashcard() {
    if (state.fcFilteredList.length === 0) return;
    state.fcIndex = (state.fcIndex - 1 + state.fcFilteredList.length) % state.fcFilteredList.length;
    renderCurrentFlashcard();
  }

  function rateActiveCard(rating) {
    const current = state.fcFilteredList[state.fcIndex];
    if (!current) return;
    state.flashcardRatings[current.id] = rating;
    localStorage.setItem(STORAGE_KEYS.FLASHCARD_RATINGS, JSON.stringify(state.flashcardRatings));

    // SM-2 SRS Algorithm update
    updateSRSCard(current.id, rating);

    // Award XP for SRS review
    if (state.fcSRSMode) {
      awardXP(5, 'Ôn SRS');
    }

    updateFlashcardStats();
    updateSRSDueBadge();

    if (rating === 'mastered') playSuccessChime();
    else playTone(rating === 'good' ? 500 : 350, 0.1);

    nextFlashcard();
  }

  function updateFlashcardStats() {
    const all = appData.flashcards;
    let hard = 0, good = 0, mastered = 0;
    all.forEach(c => {
      const r = state.flashcardRatings[c.id];
      if (r === 'mastered') mastered++;
      else if (r === 'good') good++;
      else hard++;
    });

    document.getElementById('fcHardCount').textContent = `🔴 Chưa nhớ: ${hard}`;
    document.getElementById('fcGoodCount').textContent = `🟡 Tạm ổn: ${good}`;
    document.getElementById('fcMasteredCount').textContent = `🟢 Đã thuộc: ${mastered}`;
    document.getElementById('fcTotalCount').textContent = `Tổng: ${all.length} thẻ`;
  }

  // ==================== TAB 3: QUIZ & TESTKING MOCK ====================
  function initQuizModule() {
    const practiceBtn = document.getElementById('quizPracticeModeBtn');
    const mockBtn = document.getElementById('quizMockModeBtn');
    const chapterSelect = document.getElementById('quizChapterFilter');
    const shuffleBtn = document.getElementById('quizShuffleBtn');
    const startMockFromPrac = document.getElementById('quizStartMockFromPractice');

    practiceBtn.addEventListener('click', () => setQuizMode('practice'));
    mockBtn.addEventListener('click', () => setQuizMode('mock'));

    if (chapterSelect) {
      chapterSelect.addEventListener('change', (e) => {
        state.quizCategory = e.target.value;
        filterQuizzes();
      });
    }

    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        shuffleArray(state.quizList);
        renderQuizArena();
        showToast('Đã xáo trộn câu hỏi!', 'info');
      });
    }

    if (startMockFromPrac) {
      startMockFromPrac.addEventListener('click', () => setQuizMode('mock'));
    }

    document.getElementById('mockSubmitBtn').addEventListener('click', submitMockExam);
    document.getElementById('closeResultModalBtn').addEventListener('click', () => {
      document.getElementById('mockResultModal').style.display = 'none';
    });
    document.getElementById('retakeMockBtn').addEventListener('click', () => {
      document.getElementById('mockResultModal').style.display = 'none';
      setQuizMode('mock');
    });
    document.getElementById('reviewWrongBtn').addEventListener('click', () => {
      document.getElementById('mockResultModal').style.display = 'none';
      setQuizMode('practice');
    });

    filterQuizzes();
  }

  function setQuizMode(mode) {
    state.quizMode = mode;
    document.getElementById('quizPracticeModeBtn').classList.toggle('active', mode === 'practice');
    document.getElementById('quizMockModeBtn').classList.toggle('active', mode === 'mock');

    const timerWidget = document.getElementById('mockTimerWidget');
    const practiceControls = document.getElementById('practiceControlsBar');

    if (mode === 'mock') {
      timerWidget.style.display = 'flex';
      practiceControls.style.display = 'none';
      startMockExam();
    } else {
      clearInterval(state.mockTimerInterval);
      timerWidget.style.display = 'none';
      practiceControls.style.display = 'flex';
      state.mockIsSubmitted = false;
      filterQuizzes();
    }
  }

  function filterQuizzes() {
    let list = [...appData.quizzes];
    if (state.quizCategory !== 'all') {
      list = list.filter(q => q.type === state.quizCategory);
    }
    state.quizList = list;
    renderQuizArena();
  }

  function renderQuizArena() {
    const arena = document.getElementById('quizArena');
    if (!arena) return;
    arena.innerHTML = '';

    if (state.quizList.length === 0) {
      arena.innerHTML = '<div class="quiz-card"><p>Không có câu hỏi nào trong danh mục này.</p></div>';
      return;
    }

    state.quizList.forEach((q, qIndex) => {
      const card = document.createElement('div');
      card.className = 'quiz-card';
      card.id = `quizCard-${q.id}`;

      const optionsHtml = q.options.map((opt, optIndex) => {
        const letter = String.fromCharCode(65 + optIndex);
        return `
          <button class="quiz-option-btn" data-qid="${q.id}" data-optindex="${optIndex}">
            <span class="opt-prefix">${letter}.</span>
            <span class="opt-text">${opt}</span>
          </button>
        `;
      }).join('');

      card.innerHTML = `
        <div class="quiz-meta-row" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="quiz-type-badge">${q.type} • ${q.chapter}</span>
            <button type="button" class="btn-ask-ai-pill" onclick="window.askAIQuizQuestion('${q.id}')">
              <span class="ai-sparkle">✨</span> Hỏi AI
            </button>
          </div>
          <span class="card-counter">Câu ${qIndex + 1} / ${state.quizList.length}</span>
        </div>
        <h4 class="quiz-question-title">${q.question}</h4>
        ${q.code ? `<div class="quiz-code-box"><pre><code>${q.code}</code></pre></div>` : ''}
        <div class="quiz-options-list">${optionsHtml}</div>
        <div class="quiz-feedback-box" id="feedback-${q.id}">
          <div class="feedback-status-title"></div>
          <div class="feedback-explanation"></div>
          <div class="feedback-trap"></div>
          <div style="margin-top: 0.6rem; padding-top: 0.5rem; border-top: 1px dashed rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-size: 0.8rem; color: #94a3b8;">Muốn mổ xẻ câu hỏi này cùng AI?</span>
            <button type="button" class="btn-ask-ai-action" onclick="window.askAIQuizQuestion('${q.id}')">
              🤖 Nhờ AI giải thích chi tiết & bẫy đề thi →
            </button>
          </div>
        </div>
      `;

      // Option click handler
      card.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          handleOptionSelect(q, parseInt(btn.dataset.optindex, 10));
        });
      });

      arena.appendChild(card);
    });
  }

  function handleOptionSelect(question, selectedIndex) {
    const card = document.getElementById(`quizCard-${question.id}`);
    if (!card) return;

    if (state.quizMode === 'practice') {
      const allBtns = card.querySelectorAll('.quiz-option-btn');
      allBtns.forEach((b, idx) => {
        b.classList.remove('selected', 'correct', 'incorrect');
        if (idx === question.correctIndex) b.classList.add('correct');
        else if (idx === selectedIndex) b.classList.add('incorrect');
      });

      const fb = document.getElementById(`feedback-${question.id}`);
      fb.style.display = 'block';

      const isRight = selectedIndex === question.correctIndex;
      const statusTitle = fb.querySelector('.feedback-status-title');
      if (isRight) {
        statusTitle.textContent = '✓ CHÍNH XÁC! Tuyệt vời.';
        statusTitle.style.color = 'var(--accent-emerald)';
        playSuccessChime();
      } else {
        statusTitle.textContent = '✕ CHƯA ĐÚNG! Xem kỹ bẫy bên dưới:';
        statusTitle.style.color = 'var(--accent-rose)';
        playTone(300, 0.2, 'sawtooth');
      }

      fb.querySelector('.feedback-explanation').innerHTML = `<strong>Giải thích:</strong> ${question.explanation}`;
      fb.querySelector('.feedback-trap').innerHTML = `<strong>⚠️ Cạm bẫy:</strong> ${question.trap}`;
    } else {
      // Mock mode
      state.mockAnswers[question.id] = selectedIndex;
      card.querySelectorAll('.quiz-option-btn').forEach((b, idx) => {
        b.classList.toggle('selected', idx === selectedIndex);
      });
    }
  }

  function startMockExam() {
    state.mockAnswers = {};
    state.mockIsSubmitted = false;
    state.mockTimeRemaining = 30 * 60; // 30 minutes

    // Shuffle and pick 20 questions
    const shuffled = [...appData.quizzes];
    shuffleArray(shuffled);
    state.quizList = shuffled.slice(0, 20);

    renderQuizArena();
    updateMockClock();

    clearInterval(state.mockTimerInterval);
    state.mockTimerInterval = setInterval(() => {
      if (state.mockTimeRemaining > 0) {
        state.mockTimeRemaining--;
        updateMockClock();
      } else {
        clearInterval(state.mockTimerInterval);
        submitMockExam();
      }
    }, 1000);
  }

  function updateMockClock() {
    const clock = document.getElementById('mockClock');
    if (!clock) return;
    const m = Math.floor(state.mockTimeRemaining / 60).toString().padStart(2, '0');
    const s = (state.mockTimeRemaining % 60).toString().padStart(2, '0');
    clock.textContent = `${m}:${s}`;
  }

  function submitMockExam() {
    clearInterval(state.mockTimerInterval);
    state.mockIsSubmitted = true;

    let correctCount = 0;
    const wrongQuestions = [];

    state.quizList.forEach(q => {
      const userAns = state.mockAnswers[q.id];
      if (userAns === q.correctIndex) {
        correctCount++;
      } else {
        wrongQuestions.push(q);
      }
    });

    const score = correctCount;
    const total = state.quizList.length;

    // Evaluation thresholds from user roadmap:
    let verdict = '';
    let verdictColor = '';
    if (score < 12) {
      verdict = '🔴 CẦN QUAY LẠI HỌC NỀN TẢNG (Ch1 - Ch5)! Hãy đọc kỹ lý thuyết và phân tích lỗi sai.';
      verdictColor = 'var(--accent-rose)';
    } else if (score <= 15) {
      verdict = '🟡 NỀN TẢNG ỔN ĐỊNH. Đang ở ngưỡng an toàn, cần tăng tốc luyện TestKing để chắc cú.';
      verdictColor = 'var(--accent-amber)';
    } else if (score <= 17) {
      verdict = '🟢 ĐẠT MỨC KHÁ. Phản xạ tốt với các bẫy cú pháp và flow control.';
      verdictColor = 'var(--accent-cyan)';
    } else {
      verdict = '⚡ XUẤT SẮC! SẴN SÀNG CHINH PHỤC BÀI THI ENTRY TEST!';
      verdictColor = 'var(--accent-emerald)';
    }

    const modalBody = document.getElementById('mockResultBody');
    modalBody.innerHTML = `
      <div style="text-align: center; margin-bottom: 1.5rem;">
        <div style="font-size: 3.5rem; font-weight: 800; font-family: var(--font-mono); color: ${verdictColor};">
          ${score} / ${total}
        </div>
        <div style="font-size: 1.1rem; font-weight: 700; color: ${verdictColor}; margin-top: 0.5rem;">
          ${verdict}
        </div>
      </div>
      <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 8px; font-size: 0.9rem;">
        <p><strong>Số câu làm đúng:</strong> ${score}/${total} (${Math.round((score/total)*100)}%)</p>
        <p><strong>Số câu làm sai:</strong> ${wrongQuestions.length} câu</p>
        <p><strong>Thời gian làm bài:</strong> ${Math.floor((1800 - state.mockTimeRemaining)/60)} phút ${((1800 - state.mockTimeRemaining)%60)} giây</p>
      </div>
    `;

    document.getElementById('mockResultModal').style.display = 'flex';
    playSuccessChime();

    // Reveal answers in arena
    state.quizList.forEach(q => {
      const card = document.getElementById(`quizCard-${q.id}`);
      if (!card) return;
      const userAns = state.mockAnswers[q.id];
      card.querySelectorAll('.quiz-option-btn').forEach((b, idx) => {
        b.classList.remove('selected');
        if (idx === q.correctIndex) b.classList.add('correct');
        else if (idx === userAns) b.classList.add('incorrect');
      });

      const fb = document.getElementById(`feedback-${q.id}`);
      fb.style.display = 'block';
      fb.querySelector('.feedback-status-title').textContent = userAns === q.correctIndex ? '✓ Bạn đã chọn ĐÚNG' : '✕ Bạn đã chọn SAI';
      fb.querySelector('.feedback-explanation').innerHTML = `<strong>Giải thích:</strong> ${q.explanation}`;
      fb.querySelector('.feedback-trap').innerHTML = `<strong>⚠️ Cạm bẫy:</strong> ${q.trap}`;
    });

    // Save mock history for Analytics chart
    const pct = Math.round((score / total) * 100);
    const history = JSON.parse(localStorage.getItem(STORAGE_KEYS.MOCK_HISTORY) || '[]');
    history.push({ date: Date.now(), score, total, pct, timeTaken: 1800 - state.mockTimeRemaining });
    // Keep last 20 records
    if (history.length > 20) history.shift();
    localStorage.setItem(STORAGE_KEYS.MOCK_HISTORY, JSON.stringify(history));

    // Award XP based on performance
    if (pct >= 70) awardXP(30, 'Mock Test Pass 🏅');
    else if (pct >= 50) awardXP(15, 'Mock Test TB');
    else awardXP(5, 'Mock Test Tham Gia');

    // Update chapter stats from quiz answers
    state.quizList.forEach(q => {
      const ch = q.chapter || 'General';
      if (!state.chapterStats[ch]) state.chapterStats[ch] = { correct: 0, total: 0 };
      state.chapterStats[ch].total++;
      if (state.mockAnswers[q.id] === q.correctIndex) state.chapterStats[ch].correct++;
    });
    localStorage.setItem(STORAGE_KEYS.CHAPTER_STATS, JSON.stringify(state.chapterStats));

    checkAndAwardBadges();
  }

  // ==================== TAB 4: AUDIT 1-1 SIMULATOR ====================
  function initAuditModule() {
    const select = document.getElementById('auditQuestionSelect');
    if (select) {
      select.innerHTML = appData.auditQuestions.map((q, idx) => {
        return `<option value="${idx}">[${q.domain}] ${q.question.slice(0, 60)}...</option>`;
      }).join('');

      select.addEventListener('change', (e) => {
        state.auditIndex = parseInt(e.target.value, 10);
        loadAuditQuestion();
      });
    }

    document.getElementById('auditRandomBtn').addEventListener('click', () => {
      const rnd = Math.floor(Math.random() * appData.auditQuestions.length);
      state.auditIndex = rnd;
      if (select) select.value = rnd.toString();
      loadAuditQuestion();
    });

    // Record buttons
    const recBtn = document.getElementById('auditRecordBtn');
    const stopBtn = document.getElementById('auditStopBtn');

    recBtn.addEventListener('click', startAuditRecording);
    stopBtn.addEventListener('click', stopAuditRecording);

    // Toggle model answer
    document.getElementById('toggleModelAnswerBtn').addEventListener('click', () => {
      const content = document.getElementById('auditModelAnswerContent');
      const arrow = document.getElementById('modelAnswerArrow');
      const isShowing = content.style.display === 'flex';
      content.style.display = isShowing ? 'none' : 'flex';
      arrow.textContent = isShowing ? '▼' : '▲';
    });

    loadAuditQuestion();
    initAuditBank();
  }

  function loadAuditQuestion() {
    const q = appData.auditQuestions[state.auditIndex];
    if (!q) return;

    // Reset recording state & timer
    clearInterval(state.auditTimerInterval);
    state.auditTimeRemaining = q.timeLimitSeconds || 90;
    state.auditTotalTime = state.auditTimeRemaining;
    updateAuditTimerRing();

    document.getElementById('auditDomainTag').textContent = q.domain;
    document.getElementById('auditTimeLimitTag').textContent = `Thời gian chuẩn: ${state.auditTotalTime} giây`;
    document.getElementById('auditQuestionDisplay').textContent = q.question;

    document.getElementById('auditRecordBtn').style.display = 'inline-flex';
    document.getElementById('auditStopBtn').style.display = 'none';
    document.getElementById('recordingIndicator').style.display = 'none';
    document.getElementById('auditPlaybackBox').style.display = 'none';

    // Criteria checklist
    const criteriaList = document.getElementById('auditCriteriaList');
    criteriaList.innerHTML = q.keyPoints.map((kp, idx) => {
      return `
        <label class="audit-check-label">
          <input type="checkbox" class="audit-criterion-cb" data-idx="${idx}">
          <span>${kp}</span>
        </label>
      `;
    }).join('');

    criteriaList.querySelectorAll('.audit-criterion-cb').forEach(cb => {
      cb.addEventListener('change', updateSelfScore);
    });
    updateSelfScore();

    // Model answer
    const kpUl = document.getElementById('auditKeyPointsList');
    kpUl.innerHTML = q.keyPoints.map(kp => `<li>${kp}</li>`).join('');
    document.getElementById('auditModelFullText').textContent = q.modelAnswer;

    // Senior Tip in Simulator
    let seniorTipEl = document.getElementById('auditModelSeniorTip');
    if (!seniorTipEl) {
      seniorTipEl = document.createElement('div');
      seniorTipEl.id = 'auditModelSeniorTip';
      seniorTipEl.className = 'audit-tip-box';
      seniorTipEl.style.marginTop = '1rem';
      document.getElementById('auditModelAnswerContent').appendChild(seniorTipEl);
    }
    if (q.seniorTip) {
      seniorTipEl.innerHTML = `<strong>🔥 Bí kíp phòng thi:</strong> <span style="font-size:0.9rem; line-height:1.5; display:block; margin-top:0.25rem;">${escapeHtml(q.seniorTip)}</span>`;
      seniorTipEl.style.display = 'block';
    } else {
      seniorTipEl.style.display = 'none';
    }

    document.getElementById('auditModelAnswerContent').style.display = 'none';
    document.getElementById('modelAnswerArrow').textContent = '▼';
  }

  function updateAuditTimerRing() {
    const text = document.getElementById('auditCountdownText');
    const ring = document.getElementById('auditTimerRing');
    if (!text || !ring) return;

    text.textContent = `${state.auditTimeRemaining}s`;
    const circumference = 2 * Math.PI * 50; // 314.159
    const fraction = state.auditTimeRemaining / state.auditTotalTime;
    const offset = circumference * (1 - fraction);
    ring.style.strokeDashoffset = offset.toString();

    if (fraction <= 0.2) ring.style.stroke = 'var(--accent-rose)';
    else if (fraction <= 0.5) ring.style.stroke = 'var(--accent-amber)';
    else ring.style.stroke = 'var(--accent-emerald)';
  }

  async function startAuditRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      state.audioChunks = [];
      state.mediaRecorder = new MediaRecorder(stream);

      state.mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) state.audioChunks.push(e.data);
      };

      state.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(state.audioChunks, { type: 'audio/webm' });
        state.recordedAudioUrl = URL.createObjectURL(audioBlob);
        const player = document.getElementById('auditAudioPlayer');
        player.src = state.recordedAudioUrl;
        document.getElementById('auditPlaybackBox').style.display = 'block';
        showToast('Đã lưu bản ghi âm câu trả lời của bạn!', 'success');
      };

      state.mediaRecorder.start();

      document.getElementById('auditRecordBtn').style.display = 'none';
      document.getElementById('auditStopBtn').style.display = 'inline-flex';
      document.getElementById('recordingIndicator').style.display = 'flex';

      // Start Countdown
      clearInterval(state.auditTimerInterval);
      state.auditTimerInterval = setInterval(() => {
        if (state.auditTimeRemaining > 0) {
          state.auditTimeRemaining--;
          updateAuditTimerRing();
          if (state.auditTimeRemaining === 10) playTone(800, 0.1);
        } else {
          stopAuditRecording();
          playAlertChime();
          showToast('Hết thời gian trả lời chuẩn!', 'info');
        }
      }, 1000);

    } catch (err) {
      console.warn('Microphone error:', err);
      showToast('Không thể truy cập Microphone. Vui lòng cho phép quyền micro để ghi âm.', 'error');
    }
  }

  function stopAuditRecording() {
    clearInterval(state.auditTimerInterval);
    if (state.mediaRecorder && state.mediaRecorder.state !== 'inactive') {
      state.mediaRecorder.stop();
      state.mediaRecorder.stream.getTracks().forEach(t => t.stop());
    }

    document.getElementById('auditRecordBtn').style.display = 'inline-flex';
    document.getElementById('auditStopBtn').style.display = 'none';
    document.getElementById('recordingIndicator').style.display = 'none';
  }

  function updateSelfScore() {
    const checked = document.querySelectorAll('.audit-criterion-cb:checked').length;
    const total = document.querySelectorAll('.audit-criterion-cb').length;
    const scoreBadge = document.getElementById('auditSelfScore');
    if (scoreBadge) scoreBadge.textContent = `Điểm tự chấm: ${checked}/${total} tiêu chí`;
  }

  // ==================== TOP 50 SÁT THỦ AUDIT 1-1 BROWSER & FLASHCARD SYSTEM ====================
  let auditBankDomain = 'all';
  let auditBankSearch = '';
  let auditFcIdx = 0;
  let auditMasteredSet = new Set(JSON.parse(localStorage.getItem('apex_audit_mastered') || '[]'));

  function initAuditBank() {
    // 1. Filter Buttons
    const filterBtns = document.querySelectorAll('.audit-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        auditBankDomain = btn.dataset.domain || 'all';
        renderAuditBankGrid();
        renderAuditFlashcard();
      });
    });

    // 2. Search Input
    const searchInput = document.getElementById('auditBankSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        auditBankSearch = e.target.value.toLowerCase().trim();
        renderAuditBankGrid();
        renderAuditFlashcard();
      });
    }

    // 3. View Modes (List vs Flashcard)
    const listBtn = document.getElementById('auditViewListBtn');
    const fcBtn = document.getElementById('auditViewFlashcardBtn');
    const gridContainer = document.getElementById('auditBankGrid');
    const fcContainer = document.getElementById('auditFlashcardContainer');

    if (listBtn && fcBtn) {
      listBtn.addEventListener('click', () => {
        listBtn.classList.add('active');
        fcBtn.classList.remove('active');
        if (gridContainer) gridContainer.style.display = 'grid';
        if (fcContainer) fcContainer.style.display = 'none';
      });

      fcBtn.addEventListener('click', () => {
        fcBtn.classList.add('active');
        listBtn.classList.remove('active');
        if (gridContainer) gridContainer.style.display = 'none';
        if (fcContainer) fcContainer.style.display = 'block';
        renderAuditFlashcard();
      });
    }

    // 4. Flashcard Flipping & Controls
    const fcCard = document.getElementById('auditFcCard');
    if (fcCard) {
      fcCard.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a')) return;
        fcCard.classList.toggle('flipped');
      });
    }

    const prevBtn = document.getElementById('auditFcPrevBtn');
    const nextBtn = document.getElementById('auditFcNextBtn');
    const rndBtn = document.getElementById('auditFcRandomBtn');
    const masteredBtn = document.getElementById('auditFcMarkMasteredBtn');
    const reviewBtn = document.getElementById('auditFcMarkReviewBtn');
    const loadSimBtn = document.getElementById('auditFcLoadSimulatorBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const list = getFilteredAuditQuestions();
        if (list.length === 0) return;
        auditFcIdx = (auditFcIdx - 1 + list.length) % list.length;
        if (fcCard) fcCard.classList.remove('flipped');
        renderAuditFlashcard();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const list = getFilteredAuditQuestions();
        if (list.length === 0) return;
        auditFcIdx = (auditFcIdx + 1) % list.length;
        if (fcCard) fcCard.classList.remove('flipped');
        renderAuditFlashcard();
      });
    }

    if (rndBtn) {
      rndBtn.addEventListener('click', () => {
        const list = getFilteredAuditQuestions();
        if (list.length === 0) return;
        auditFcIdx = Math.floor(Math.random() * list.length);
        if (fcCard) fcCard.classList.remove('flipped');
        renderAuditFlashcard();
      });
    }

    if (masteredBtn) {
      masteredBtn.addEventListener('click', () => {
        const list = getFilteredAuditQuestions();
        const currentQ = list[auditFcIdx];
        if (!currentQ) return;
        auditMasteredSet.add(currentQ.id || currentQ.question);
        localStorage.setItem('apex_audit_mastered', JSON.stringify([...auditMasteredSet]));
        updateMasteryProgress();
        showToast('Đã đánh dấu thuộc lòng câu này! 🎉', 'success');
        if (list.length > 1) {
          auditFcIdx = (auditFcIdx + 1) % list.length;
          if (fcCard) fcCard.classList.remove('flipped');
          renderAuditFlashcard();
        }
      });
    }

    if (reviewBtn) {
      reviewBtn.addEventListener('click', () => {
        const list = getFilteredAuditQuestions();
        const currentQ = list[auditFcIdx];
        if (!currentQ) return;
        auditMasteredSet.delete(currentQ.id || currentQ.question);
        localStorage.setItem('apex_audit_mastered', JSON.stringify([...auditMasteredSet]));
        updateMasteryProgress();
        showToast('Đã thêm vào danh sách cần ôn luyện kỹ hơn!', 'info');
      });
    }

    if (loadSimBtn) {
      loadSimBtn.addEventListener('click', () => {
        const list = getFilteredAuditQuestions();
        const currentQ = list[auditFcIdx];
        if (!currentQ) return;
        const origIdx = appData.auditQuestions.findIndex(q => q.question === currentQ.question);
        if (origIdx >= 0) {
          state.auditIndex = origIdx;
          const select = document.getElementById('auditQuestionSelect');
          if (select) select.value = origIdx.toString();
          loadAuditQuestion();
          const target = document.querySelector('.audit-layout');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
          showToast(`Đã nạp câu #${origIdx + 1} vào phòng thi! Bấm "Ghi âm" để luyện nói.`, 'success');
        }
      });
    }

    // 5. Senior Cheat Sheet Modal
    initSeniorCheatSheet();

    // 6. Audit Export & Print Modal
    initAuditExport();

    // Initial render
    renderAuditBankGrid();
    updateMasteryProgress();
  }

  function getFilteredAuditQuestions() {
    let list = appData.auditQuestions || [];
    if (auditBankDomain !== 'all') {
      list = list.filter(q => q.domain.toLowerCase() === auditBankDomain.toLowerCase());
    }
    if (auditBankSearch) {
      list = list.filter(q => {
        const fullTxt = `${q.domain} ${q.question} ${(q.keyPoints||[]).join(' ')} ${q.modelAnswer||''} ${q.seniorTip||''}`.toLowerCase();
        return fullTxt.includes(auditBankSearch);
      });
    }
    return list;
  }

  function updateMasteryProgress() {
    const total = (appData.auditQuestions || []).length;
    const countEl = document.getElementById('auditMasteryCount');
    if (countEl) countEl.textContent = auditMasteredSet.size.toString();
    const countBadge = document.getElementById('auditBankCountBadge');
    if (countBadge) {
      const filtered = getFilteredAuditQuestions().length;
      countBadge.textContent = `${filtered}/${total} Câu Hỏi Chuẩn Senior`;
    }
  }

  function getDomainCssClass(domain) {
    if (!domain) return 'domain-core';
    if (domain.includes('Core')) return 'domain-core';
    if (domain.includes('8+')) return 'domain-java8';
    if (domain.includes('SQL') || domain.includes('Database')) return 'domain-sql';
    if (domain.includes('Web')) return 'domain-web';
    if (domain.includes('Spring')) return 'domain-spring';
    return 'domain-core';
  }

  function renderAuditBankGrid() {
    const grid = document.getElementById('auditBankGrid');
    if (!grid) return;

    const list = getFilteredAuditQuestions();
    updateMasteryProgress();

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <div style="font-size: 1.1rem; font-weight: 600; color: #cbd5e1;">Không tìm thấy câu hỏi phù hợp</div>
          <p style="font-size: 0.88rem; margin-top: 0.25rem;">Thử thay đổi từ khóa tìm kiếm hoặc chọn chuyên mục "Tất Cả".</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map((q) => {
      const origIdx = appData.auditQuestions.findIndex(x => x.question === q.question);
      const isMastered = auditMasteredSet.has(q.id || q.question);
      const domainClass = getDomainCssClass(q.domain);
      const timeLimit = q.timeLimitSeconds || 90;

      return `
        <div class="audit-bank-card" id="auditCard_${origIdx}">
          <div class="audit-bank-card-header">
            <span class="audit-domain-tag ${domainClass}">${escapeHtml(q.domain)}</span>
            <span class="audit-q-num">Câu #${origIdx + 1}</span>
            <span class="audit-target-time">⏱️ ${timeLimit}s</span>
            ${isMastered ? '<span style="font-size:0.75rem; background:rgba(16,185,129,0.15); color:var(--accent-emerald); border:1px solid rgba(16,185,129,0.3); border-radius:var(--radius-sm); padding:0.1rem 0.4rem; font-weight:700;">ĐÃ THUỘC</span>' : ''}
          </div>

          <div class="audit-card-question">${escapeHtml(q.question)}</div>

          <div class="audit-card-keypoints">
            <h5>🎯 Ý chính bắt buộc (Key Points):</h5>
            <ul>
              ${(q.keyPoints || []).map(kp => `<li>${escapeHtml(kp)}</li>`).join('')}
            </ul>
          </div>

          <div class="audit-card-accordion">
            <div class="audit-accordion-toggle" onclick="toggleAuditCardAccordion(${origIdx})">
              <span id="accordionText_${origIdx}">💡 Xem câu trả lời mẫu & Mẹo thi</span>
              <span id="accordionArrow_${origIdx}">▼</span>
            </div>
            <div class="audit-accordion-content" id="accordionContent_${origIdx}" style="display: none;">
              <div style="background: rgba(0,0,0,0.25); border-radius: var(--radius-md); padding: 0.85rem; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.8rem; font-weight: 700; color: var(--accent-amber); margin-bottom: 0.35rem; text-transform: uppercase;">
                  Bài mẫu trả lời trôi chảy:
                </div>
                <div style="font-size: 0.88rem; line-height: 1.6; color: #f1f5f9; white-space: pre-line;">
                  ${escapeHtml(q.modelAnswer || '')}
                </div>
              </div>
              ${q.seniorTip ? `
                <div class="audit-tip-box" style="margin-top: 0.5rem;">
                  <strong>🔥 Bí kíp Senior:</strong> ${escapeHtml(q.seniorTip)}
                </div>
              ` : ''}
            </div>
          </div>

          <div class="audit-card-footer">
            <button class="btn btn-sm btn-primary" onclick="loadAuditQuestionFromBank(${origIdx})">
              🎙️ Luyện Nói
            </button>
            <button class="btn btn-sm btn-outline" onclick="window.askAIAboutAudit(${origIdx})">
              🤖 Hỏi AI Coach
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.toggleAuditCardAccordion = function(origIdx) {
    const content = document.getElementById(`accordionContent_${origIdx}`);
    const arrow = document.getElementById(`accordionArrow_${origIdx}`);
    const text = document.getElementById(`accordionText_${origIdx}`);
    if (!content) return;
    const isHidden = content.style.display === 'none';
    content.style.display = isHidden ? 'flex' : 'none';
    if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
    if (text) text.textContent = isHidden ? 'Ẩn câu trả lời mẫu' : '💡 Xem câu trả lời mẫu & Mẹo thi';
  };

  window.loadAuditQuestionFromBank = function(origIdx) {
    state.auditIndex = origIdx;
    const select = document.getElementById('auditQuestionSelect');
    if (select) select.value = origIdx.toString();
    loadAuditQuestion();
    const target = document.querySelector('.audit-layout');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    showToast(`Đã nạp Câu #${origIdx + 1} vào phòng thi giả lập!`, 'success');
  };

  window.askAIAboutAudit = function(idx) {
    const q = appData.auditQuestions[idx];
    if (!q) return;
    openAIPanel();
    const chatInput = document.getElementById('aiChatInput');
    if (chatInput) {
      chatInput.value = `[Hỏi Giám Khảo Audit FPT]: Tôi chuẩn bị trả lời câu hỏi: "${q.question}". Hãy hướng dẫn tôi cách trả lời trôi chảy trong 60-90 giây, nhấn mạnh các từ khóa ghi điểm tuyệt đối và những lỗi sai ngớ ngẩn thí sinh hay mắc phải.`;
      chatInput.focus();
    }
  };

  function renderAuditFlashcard() {
    const list = getFilteredAuditQuestions();
    if (list.length === 0) return;
    if (auditFcIdx >= list.length) auditFcIdx = 0;
    const q = list[auditFcIdx];
    if (!q) return;

    const origIdx = appData.auditQuestions.findIndex(x => x.question === q.question);
    const domainClass = getDomainCssClass(q.domain);

    const domainEl = document.getElementById('auditFcDomain');
    if (domainEl) {
      domainEl.textContent = q.domain;
      domainEl.className = `audit-domain-tag ${domainClass}`;
    }

    const numEl = document.getElementById('auditFcNumber');
    if (numEl) numEl.textContent = `Câu ${auditFcIdx + 1}/${list.length} (Tổng #${origIdx + 1})`;

    const timeEl = document.getElementById('auditFcTime');
    if (timeEl) timeEl.textContent = `⏱️ ${q.timeLimitSeconds || 90}s`;

    const qEl = document.getElementById('auditFcQuestion');
    if (qEl) qEl.textContent = q.question;

    const kpUl = document.getElementById('auditFcKeyPoints');
    if (kpUl) kpUl.innerHTML = (q.keyPoints || []).map(kp => `<li>${escapeHtml(kp)}</li>`).join('');

    const ansEl = document.getElementById('auditFcModelAnswer');
    if (ansEl) ansEl.textContent = q.modelAnswer || '';

    const tipBox = document.getElementById('auditFcTipBox');
    const tipEl = document.getElementById('auditFcSeniorTip');
    if (tipBox && tipEl) {
      if (q.seniorTip) {
        tipEl.textContent = q.seniorTip;
        tipBox.style.display = 'block';
      } else {
        tipBox.style.display = 'none';
      }
    }
  }

  function initSeniorCheatSheet() {
    const openBtn = document.getElementById('auditOpenCheatSheetBtn');
    const closeBtn = document.getElementById('closeCheatSheetModalBtn');
    const closeFooterBtn = document.getElementById('closeCheatSheetModalFooterBtn');
    const modal = document.getElementById('seniorCheatSheetModal');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
    }

    const closeModal = () => {
      if (modal) modal.style.display = 'none';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    // Tabs inside cheat sheet
    const tabBtns = document.querySelectorAll('.cheatsheet-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const targetId = btn.dataset.target;
        document.querySelectorAll('.cs-section').forEach(sec => {
          sec.style.display = sec.id === targetId ? 'block' : 'none';
        });
      });
    });
  }

  function initAuditExport() {
    const openBtn = document.getElementById('auditExportBtn');
    const closeBtn = document.getElementById('closeAuditExportModalBtn');
    const closeFooterBtn = document.getElementById('closeAuditExportModalFooterBtn');
    const modal = document.getElementById('auditExportModal');
    const filterSelect = document.getElementById('exportDomainFilter');
    const printBtn = document.getElementById('printAuditGuideBtn');
    const copyMdBtn = document.getElementById('copyAuditMarkdownBtn');

    if (openBtn && modal) {
      openBtn.addEventListener('click', () => {
        renderExportDocument();
        modal.style.display = 'flex';
      });
    }

    const closeModal = () => {
      if (modal) modal.style.display = 'none';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeModal);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }

    if (filterSelect) {
      filterSelect.addEventListener('change', renderExportDocument);
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    if (copyMdBtn) {
      copyMdBtn.addEventListener('click', () => {
        const domain = filterSelect ? filterSelect.value : 'all';
        let list = appData.auditQuestions || [];
        if (domain !== 'all') {
          list = list.filter(q => q.domain === domain);
        }

        let md = `# CẨM NANG TOP 50 CÂU HỎI SÁT THỦ AUDIT 1-1 FPT SOFTWARE\n\n`;
        md += `> Ngày xuất: ${new Date().toLocaleDateString('vi-VN')} | Tổng số câu: ${list.length}\n\n---\n\n`;

        list.forEach((q, idx) => {
          md += `### Câu ${idx + 1}: [${q.domain}] ${q.question}\n\n`;
          md += `⏱️ **Thời gian trả lời chuẩn:** ${q.timeLimitSeconds || 90} giây\n\n`;
          md += `**🎯 Ý chính bắt buộc (Key Points):**\n`;
          (q.keyPoints || []).forEach(kp => {
            md += `- ${kp}\n`;
          });
          md += `\n**💬 Câu trả lời mẫu chuẩn Senior:**\n\n${q.modelAnswer}\n\n`;
          if (q.seniorTip) {
            md += `**🔥 Bí kíp ghi điểm tuyệt đối (Senior Tip):**\n>${q.seniorTip}\n\n`;
          }
          md += `---\n\n`;
        });

        navigator.clipboard.writeText(md).then(() => {
          showToast('Đã sao chép toàn bộ đề cương dạng Markdown vào Clipboard!', 'success');
        }).catch(() => {
          showToast('Không thể tự động sao chép. Vui lòng cho phép quyền clipboard.', 'error');
        });
      });
    }
  }

  function renderExportDocument() {
    const docEl = document.getElementById('auditPrintableDocument');
    const filterSelect = document.getElementById('exportDomainFilter');
    if (!docEl) return;

    const domain = filterSelect ? filterSelect.value : 'all';
    let list = appData.auditQuestions || [];
    if (domain !== 'all') {
      list = list.filter(q => q.domain === domain);
    }

    docEl.innerHTML = `
      <div style="margin-bottom: 1.5rem; text-align: center; border-bottom: 2px solid var(--border-subtle); padding-bottom: 1rem;">
        <h2 style="margin: 0; color: #f8fafc;">ĐỀ CƯƠNG 50 CÂU HỎI SÁT THỦ AUDIT 1-1 FPT SOFTWARE</h2>
        <p style="margin: 0.35rem 0 0 0; font-size: 0.88rem; color: var(--text-muted);">
          Tài liệu nội bộ ôn luyện Fresher Entry Test & Đánh giá Audit Kỹ thuật 1-1 | ${list.length} câu hỏi chọn lọc
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${list.map((q, idx) => `
          <div class="audit-print-item" style="background: rgba(15, 23, 42, 0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-weight: 700; color: var(--accent-amber); font-size: 1rem;">
                Câu #${idx + 1} [${q.domain}]
              </span>
              <span style="font-size: 0.8rem; color: var(--text-muted);">Chuẩn: ${q.timeLimitSeconds || 90}s</span>
            </div>
            <div style="font-weight: 700; font-size: 1.05rem; color: #f8fafc; margin-bottom: 0.75rem;">
              ${escapeHtml(q.question)}
            </div>

            <div style="margin-bottom: 0.75rem;">
              <strong style="color: var(--accent-primary); font-size: 0.85rem; text-transform: uppercase;">🎯 Ý chính bắt buộc (Key Points):</strong>
              <ul style="margin: 0.35rem 0 0 0; padding-left: 1.25rem; font-size: 0.88rem; color: #cbd5e1;">
                ${(q.keyPoints || []).map(kp => `<li>${escapeHtml(kp)}</li>`).join('')}
              </ul>
            </div>

            <div style="background: rgba(0,0,0,0.3); border-left: 3px solid var(--accent-emerald); padding: 0.75rem 1rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; margin-bottom: 0.75rem;">
              <strong style="color: var(--accent-emerald); font-size: 0.85rem; text-transform: uppercase;">💬 Câu trả lời mẫu chuẩn mực:</strong>
              <p style="margin: 0.35rem 0 0 0; font-size: 0.88rem; line-height: 1.6; color: #f1f5f9; white-space: pre-line;">
                ${escapeHtml(q.modelAnswer || '')}
              </p>
            </div>

            ${q.seniorTip ? `
              <div style="background: rgba(245, 158, 11, 0.08); border-left: 3px solid var(--accent-amber); padding: 0.65rem 0.85rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-size: 0.85rem; color: #fde68a;">
                <strong>🔥 Bí kíp phòng thi:</strong> ${escapeHtml(q.seniorTip)}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // ==================== TAB 5: ENGLISH DRILL ====================
  function initEnglishModule() {
    state.engFilteredList = [...appData.commentCodes];

    const enToViBtn = document.getElementById('engModeEnToVi');
    const viToEnBtn = document.getElementById('engModeViToEn');

    enToViBtn.addEventListener('click', () => setEnglishMode('en-to-vi'));
    viToEnBtn.addEventListener('click', () => setEnglishMode('vi-to-en'));

    document.getElementById('engCheckBtn').addEventListener('click', checkEnglishAnswer);
    document.getElementById('engRevealBtn').addEventListener('click', revealEnglishAnswer);
    document.getElementById('engPrevBtn').addEventListener('click', prevEnglish);
    document.getElementById('engNextBtn').addEventListener('click', nextEnglish);
    document.getElementById('engRandomBtn').addEventListener('click', () => {
      state.engIndex = Math.floor(Math.random() * state.engFilteredList.length);
      renderEnglishCard();
    });

    document.getElementById('engTtsBtn').addEventListener('click', () => {
      const current = state.engFilteredList[state.engIndex];
      if (current) speakText(current.en, 'en-US');
    });

    const searchInput = document.getElementById('engSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        state.engFilteredList = appData.commentCodes.filter(c => {
          return c.vi.toLowerCase().includes(query) || c.en.toLowerCase().includes(query);
        });
        state.engIndex = 0;
        renderEnglishCard();
        renderEnglishTable();
      });
    }

    document.getElementById('engDailyChallengeBtn').addEventListener('click', () => {
      shuffleArray(state.engFilteredList);
      state.engIndex = 0;
      renderEnglishCard();
      showToast('Đã bắt đầu thử thách 10 câu ngẫu nhiên!', 'info');
    });

    renderEnglishCard();
    renderEnglishTable();
  }

  function setEnglishMode(mode) {
    state.engMode = mode;
    document.getElementById('engModeEnToVi').classList.toggle('active', mode === 'en-to-vi');
    document.getElementById('engModeViToEn').classList.toggle('active', mode === 'vi-to-en');
    // Reset session score on mode switch
    state.engSessionCorrect = 0;
    state.engSessionWrong = 0;
    updateEngSessionScore();
    renderEnglishCard();
    renderEnglishTable();
  }

  function renderEnglishCard() {
    if (state.engFilteredList.length === 0) return;
    const current = state.engFilteredList[state.engIndex];

    document.getElementById('engSttBadge').textContent = `STT: #${current.id} (${state.engIndex + 1}/${state.engFilteredList.length})`;
    document.getElementById('engNavCounter').textContent = `${state.engIndex + 1} / ${state.engFilteredList.length}`;

    const promptLabel = document.getElementById('engPromptLabel');
    const promptText = document.getElementById('engPromptText');
    const inputLabel = document.getElementById('engInputLabel');
    const userInput = document.getElementById('engUserInput');
    const resultSec = document.getElementById('engResultSection');

    resultSec.style.display = 'none';
    userInput.value = '';

    if (state.engMode === 'en-to-vi') {
      promptLabel.textContent = 'Câu gốc tiếng Anh:';
      promptText.textContent = current.en;
      inputLabel.textContent = 'Nhập bản dịch tiếng Việt của bạn:';
    } else {
      promptLabel.textContent = 'Mô tả nghiệp vụ tiếng Việt:';
      promptText.textContent = current.vi;
      inputLabel.textContent = 'Viết câu comment code tiếng Anh chuẩn:';
    }
  }

  function updateEngSessionScore() {
    const el = document.getElementById('engSessionScore');
    if (!el) return;
    const total = state.engSessionCorrect + state.engSessionWrong;
    const pct = total > 0 ? Math.round(state.engSessionCorrect / total * 100) : 0;
    el.innerHTML = `<span class="eng-score-correct">✓ ${state.engSessionCorrect} Đúng</span>&nbsp;&nbsp;<span class="eng-score-wrong">✕ ${state.engSessionWrong} Sai</span>&nbsp;&nbsp;<span class="eng-score-pct">${pct}% chính xác</span>`;
  }

  function checkEnglishAnswer() {
    const current = state.engFilteredList[state.engIndex];
    if (!current) return;

    const userInput = document.getElementById('engUserInput').value.trim();
    if (!userInput) {
      showToast('Vui lòng nhập câu dịch của bạn trước!', 'info');
      return;
    }

    const officialAnswer = state.engMode === 'en-to-vi' ? current.vi : current.en;
    document.getElementById('engOfficialAnswer').textContent = officialAnswer;
    document.getElementById('engUserAnswerDisplay').textContent = userInput;
    document.getElementById('engResultSection').style.display = 'block';

    // Keyword similarity scoring
    const uWords = userInput.toLowerCase().split(/[\s,;]+/).filter(Boolean);
    const oWords = officialAnswer.toLowerCase().split(/[\s,;]+/).filter(Boolean);
    // Count exact keyword hits (ignore short filler words < 2 chars)
    const keyWords = oWords.filter(w => w.length >= 2);
    let matchCount = 0;
    keyWords.forEach(w => { if (uWords.includes(w)) matchCount++; });
    const ratio = keyWords.length > 0 ? matchCount / keyWords.length : 0;

    const badge = document.getElementById('engFeedbackBadge');
    const isCorrect = ratio >= 0.6 || userInput.toLowerCase() === officialAnswer.toLowerCase();

    if (isCorrect) {
      badge.className = 'eng-feedback-badge badge-correct';
      badge.innerHTML = '✓ Dịch chuẩn xác hoặc rất sát nghĩa! Xuất sắc!';
      state.engSessionCorrect++;
      playSuccessChime();
    } else if (ratio >= 0.35) {
      badge.className = 'eng-feedback-badge badge-partial';
      badge.innerHTML = '~ Gần đúng! Đối chiếu câu chuẩn phía trên — chú ý từ còn thiếu.';
      state.engSessionWrong++;
      playTone(500, 0.15);
    } else {
      badge.className = 'eng-feedback-badge badge-wrong';
      badge.innerHTML = '✕ Chưa khớp — ghi nhớ cấu trúc câu chuẩn và thử lại lần sau.';
      state.engSessionWrong++;
      playTone(350, 0.2, 'sawtooth');
    }

    updateEngSessionScore();
    state.engDailyDoneCount++;
    document.getElementById('engDailyCount').textContent = `Đã luyện hôm nay: ${state.engDailyDoneCount}/10 câu`;
  }

  function revealEnglishAnswer() {
    const current = state.engFilteredList[state.engIndex];
    if (!current) return;
    const officialAnswer = state.engMode === 'en-to-vi' ? current.vi : current.en;
    document.getElementById('engOfficialAnswer').textContent = officialAnswer;
    document.getElementById('engUserAnswerDisplay').textContent = '(Bạn đã xem đáp án trực tiếp)';
    document.getElementById('engFeedbackBadge').textContent = '💡 Ghi nhớ cấu trúc từ vựng của câu này.';
    document.getElementById('engFeedbackBadge').style.color = 'var(--accent-blue)';
    document.getElementById('engResultSection').style.display = 'block';
  }

  function nextEnglish() {
    if (state.engFilteredList.length === 0) return;
    state.engIndex = (state.engIndex + 1) % state.engFilteredList.length;
    renderEnglishCard();
  }

  function prevEnglish() {
    if (state.engFilteredList.length === 0) return;
    state.engIndex = (state.engIndex - 1 + state.engFilteredList.length) % state.engFilteredList.length;
    renderEnglishCard();
  }

  function renderEnglishTable() {
    const tbody = document.getElementById('engTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';

    // Update table header based on mode
    const theadViTh = document.getElementById('engTableHeaderVi');
    const theadEnTh = document.getElementById('engTableHeaderEn');
    const modeLabelEl = document.getElementById('engTableModeLabel');
    if (state.engMode === 'en-to-vi') {
      if (theadViTh) theadViTh.textContent = '👁 Đáp án Tiếng Việt (ẩn — click hàng để xem)';
      if (theadEnTh) theadEnTh.textContent = 'Câu Comment tiếng Anh (đầu bài)';
      if (modeLabelEl) modeLabelEl.textContent = 'Chế độ: Anh → Việt | Cột đáp án bị ẩn';
    } else {
      if (theadViTh) theadViTh.textContent = 'Mô tả tiếng Việt (đầu bài)';
      if (theadEnTh) theadEnTh.textContent = '👁 Đáp án tiếng Anh (ẩn — click hàng để xem)';
      if (modeLabelEl) modeLabelEl.textContent = 'Chế độ: Việt → Anh | Cột đáp án bị ẩn';
    }

    state.engFilteredList.forEach((item, idx) => {
      const tr = document.createElement('tr');
      tr.className = 'eng-table-row';

      // The "answer" column depends on mode
      const answerText = state.engMode === 'en-to-vi' ? item.vi : item.en;
      const promptText = state.engMode === 'en-to-vi' ? item.en : item.vi;

      // Prompt col always visible; answer col blurred until revealed
      const viContent = state.engMode === 'en-to-vi'
        ? `<span class="eng-blur-cell" data-revealed="false" title="Click để xem đáp án">${item.vi}</span>`
        : `<span>${item.vi}</span>`;
      const enContent = state.engMode === 'vi-to-en'
        ? `<span class="eng-blur-cell" data-revealed="false" title="Click để xem đáp án">${item.en}</span>`
        : `<span style="font-weight:600;color:var(--accent-blue)">${item.en}</span>`;

      tr.innerHTML = `
        <td class="eng-table-idx">#${item.id}</td>
        <td class="eng-table-vi">${viContent}</td>
        <td class="eng-table-en">${enContent}</td>
        <td class="eng-table-audio"><button class="icon-btn-text eng-tts-row" title="Nghe phát âm">🔊</button></td>
      `;

      // Toggle blur on click
      const blurCell = tr.querySelector('.eng-blur-cell');
      if (blurCell) {
        blurCell.addEventListener('click', () => {
          const revealed = blurCell.dataset.revealed === 'true';
          blurCell.dataset.revealed = revealed ? 'false' : 'true';
          blurCell.title = revealed ? 'Click để xem đáp án' : 'Click để ẩn lại';
        });
      }

      // Jump to this card in drill area
      tr.addEventListener('click', (e) => {
        if (e.target.closest('.eng-tts-row') || e.target.closest('.eng-blur-cell')) return;
        state.engIndex = idx;
        renderEnglishCard();
        document.getElementById('engPromptText').scrollIntoView({ behavior: 'smooth', block: 'center' });
        showToast(`Đã chuyển đến câu #${item.id} trong khu luyện tập`, 'info');
      });

      tr.querySelector('.eng-tts-row').addEventListener('click', (e) => {
        e.stopPropagation();
        speakText(item.en, 'en-US');
      });

      tbody.appendChild(tr);
    });

    const countEl = document.getElementById('engTableCount');
    if (countEl) countEl.textContent = `Hiển thị ${state.engFilteredList.length}/${appData.commentCodes.length} câu`;
  }

  // ==================== TAB 6: ERROR BOOK & CHEAT SHEETS ====================
  function initErrorBookModule() {
    // Subtab navigation
    const subtabs = document.querySelectorAll('.cheat-subnav .subtab-btn');
    subtabs.forEach(btn => {
      btn.addEventListener('click', () => {
        subtabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.subtab;
        document.querySelectorAll('.subtab-content').forEach(c => {
          c.classList.toggle('active', c.id === `subtab-${target}`);
        });
      });
    });

    // Add Error Note Modal
    const modal = document.getElementById('addErrorModal');
    document.getElementById('addErrorNoteBtn').addEventListener('click', () => {
      modal.style.display = 'flex';
    });
    document.getElementById('closeErrorModalBtn').addEventListener('click', () => modal.style.display = 'none');
    document.getElementById('cancelErrorBtn').addEventListener('click', () => modal.style.display = 'none');

    document.getElementById('saveErrorBtn').addEventListener('click', () => {
      const title = document.getElementById('errorTitleInput').value.trim();
      const category = document.getElementById('errorCategorySelect').value;
      const desc = document.getElementById('errorDescInput').value.trim();
      const code = document.getElementById('errorCodeInput').value.trim();
      const fix = document.getElementById('errorFixInput').value.trim();

      if (!title) {
        showToast('Vui lòng nhập tiêu đề lỗi sai!', 'error');
        return;
      }

      state.userErrors.unshift({
        id: 'err_' + Date.now(),
        title,
        category,
        desc,
        code,
        fix,
        date: new Date().toLocaleDateString('vi-VN')
      });

      localStorage.setItem(STORAGE_KEYS.USER_ERRORS, JSON.stringify(state.userErrors));
      renderUserErrors();
      modal.style.display = 'none';
      showToast('Đã lưu lỗi vào Error Book thành công!', 'success');

      // Clear inputs
      document.getElementById('errorTitleInput').value = '';
      document.getElementById('errorDescInput').value = '';
      document.getElementById('errorCodeInput').value = '';
      document.getElementById('errorFixInput').value = '';
    });

    // Export & Import JSON
    document.getElementById('exportErrorsBtn').addEventListener('click', exportErrors);
    const importInput = document.getElementById('importFileInput');
    document.getElementById('importErrorsBtn').addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', importErrors);

    // Search & Tag Filter
    const searchInp = document.getElementById('errorSearchInput');
    const tagSel = document.getElementById('errorTagFilter');
    if (searchInp) searchInp.addEventListener('input', renderUserErrors);
    if (tagSel) tagSel.addEventListener('change', renderUserErrors);

    renderUserErrors();
    renderClassicTraps();
    renderModifiersMatrix();
    renderCollectionsMatrix();
  }

  function renderUserErrors() {
    const container = document.getElementById('userErrorsContainer');
    const countEl = document.getElementById('userErrorCount');
    if (!container) return;

    if (countEl) countEl.textContent = state.userErrors.length.toString();

    const query = (document.getElementById('errorSearchInput')?.value || '').toLowerCase().trim();
    const tag = document.getElementById('errorTagFilter')?.value || 'all';

    let list = state.userErrors;
    if (tag !== 'all') list = list.filter(e => e.category === tag);
    if (query) {
      list = list.filter(e => {
        return e.title.toLowerCase().includes(query) ||
               (e.desc && e.desc.toLowerCase().includes(query)) ||
               (e.fix && e.fix.toLowerCase().includes(query));
      });
    }

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
          Chưa có ghi chép lỗi nào. Bấm <strong>"+ Thêm lỗi sai mới"</strong> để lưu lại các câu bạn đã làm sai!
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(item => `
      <div class="error-note-card">
        <div>
          <div class="error-card-header">
            <h4 class="error-title">${item.title}</h4>
            <span class="error-tag">${item.category}</span>
          </div>
          <div class="error-desc">${item.desc}</div>
          ${item.code ? `<pre style="background: #090d16; padding: 0.6rem; border-radius: 4px; font-family: var(--font-mono); font-size: 0.8rem; color: #7dd3fc; margin-bottom: 0.6rem;"><code>${item.code}</code></pre>` : ''}
          ${item.fix ? `<div class="error-fix"><strong>Khắc phục:</strong> ${item.fix}</div>` : ''}
        </div>
        <div class="error-actions">
          <span style="font-size: 0.72rem; color: var(--text-muted); margin-right: auto;">${item.date || ''}</span>
          <button class="btn btn-outline" style="padding: 0.25rem 0.6rem; font-size: 0.75rem;" onclick="window.deleteUserError('${item.id}')">Xóa</button>
        </div>
      </div>
    `).join('');
  }

  window.deleteUserError = function(id) {
    if (confirm('Xóa ghi chép lỗi này?')) {
      state.userErrors = state.userErrors.filter(e => e.id !== id);
      localStorage.setItem(STORAGE_KEYS.USER_ERRORS, JSON.stringify(state.userErrors));
      renderUserErrors();
      showToast('Đã xóa ghi chép.', 'info');
    }
  };

  function exportErrors() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.userErrors, null, 2));
    const dl = document.createElement('a');
    dl.setAttribute('href', dataStr);
    dl.setAttribute('download', `ApexCore_ErrorBook_${new Date().toISOString().slice(0, 10)}.json`);
    dl.click();
    showToast('Đã xuất file Error Book JSON!', 'success');
  }

  function importErrors(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          state.userErrors = [...imported, ...state.userErrors];
          localStorage.setItem(STORAGE_KEYS.USER_ERRORS, JSON.stringify(state.userErrors));
          renderUserErrors();
          showToast(`Nhập thành công ${imported.length} mục lỗi!`, 'success');
        } else {
          showToast('Định dạng file JSON không hợp lệ.', 'error');
        }
      } catch (err) {
        showToast('Lỗi đọc file JSON.', 'error');
      }
    };
    reader.readAsText(file);
  }

  function renderClassicTraps() {
    const container = document.getElementById('classicTrapsContainer');
    if (!container) return;
    const traps = appData.traps.classicTraps || [];

    container.innerHTML = traps.map(trap => `
      <div class="trap-card">
        <div class="trap-header">
          <h4 class="trap-title">${trap.title}</h4>
          <span class="quiz-type-badge">${trap.category}</span>
        </div>
        <p class="trap-desc">${trap.description}</p>
        <div class="trap-code-comparison">
          <div class="trap-box-bad">
            <div class="box-title bad-title">✕ Đoạn Code Bẫy / Lỗi Thường Gặp</div>
            <pre><code>${trap.badCode}</code></pre>
          </div>
          <div class="trap-box-good">
            <div class="box-title good-title">✓ Đoạn Code Chuẩn / Giải Pháp Đúng</div>
            <pre><code>${trap.goodCode}</code></pre>
          </div>
        </div>
        <div class="trap-rule-bar">
          <strong>Nguyên tắc vàng:</strong> ${trap.rule}
        </div>
      </div>
    `).join('');
  }

  function renderModifiersMatrix() {
    const tbody = document.getElementById('modifiersTableBody');
    if (!tbody) return;
    const matrix = appData.traps.accessModifiersMatrix || [];

    tbody.innerHTML = matrix.map(row => `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-blue);">${row.modifier}</td>
        <td>${row.sameClass}</td>
        <td>${row.samePackage}</td>
        <td>${row.subclassDifferentPackage}</td>
        <td>${row.world}</td>
      </tr>
    `).join('');
  }

  function renderCollectionsMatrix() {
    const tbody = document.getElementById('collectionsTableBody');
    if (!tbody) return;
    const matrix = appData.traps.collectionsMatrix || [];

    tbody.innerHTML = matrix.map(row => `
      <tr>
        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-cyan);">${row.name}</td>
        <td><span class="quiz-type-badge">${row.type}</span></td>
        <td>${row.duplicates}</td>
        <td>${row.ordered}</td>
        <td>${row.sorted}</td>
        <td style="color: ${row.threadSafe.includes('CÓ') ? 'var(--accent-emerald)' : 'inherit'}; font-weight: ${row.threadSafe.includes('CÓ') ? '700' : 'normal'}">${row.threadSafe}</td>
        <td style="font-size: 0.82rem; color: var(--text-secondary);">${row.notes}</td>
      </tr>
    `).join('');
  }

  // ==================== PE CODE CHAY (LEETCODE ARENA) MODULE ====================
  const PE_STORAGE_PREFIX = 'apex_pe_code_';
  const PE_SOLVED_KEY = 'apex_pe_solved_map';

  function initPECodeModule() {
    const problems = appData.peProblems || [];
    if (!problems.length) return;

    const selectEl = document.getElementById('peProblemSelect');
    const prevBtn = document.getElementById('pePrevProblemBtn');
    const nextBtn = document.getElementById('peNextProblemBtn');
    const formatBtn = document.getElementById('peFormatCodeBtn');
    const resetBtn = document.getElementById('peResetCodeBtn');
    const copyBtn = document.getElementById('peCopyCodeBtn');
    const aiReviewBtn = document.getElementById('peAIReviewBtn');
    const runBtn = document.getElementById('peRunTestBtn');
    const submitBtn = document.getElementById('peSubmitBtn');
    const codeTextarea = document.getElementById('peCodeInput');
    const lineNums = document.getElementById('peLineNumbers');

    let solvedMap = {};
    try {
      solvedMap = JSON.parse(localStorage.getItem(PE_SOLVED_KEY) || '{}');
    } catch (_) {}

    let currentProblemIndex = 0;
    let currentTestTabIndex = 0;
    let customTestInput = '';
    let isRunningCode = false;
    let lastExecutionResult = null;

    function updateNavBadge() {
      const badge = document.getElementById('navPeBadge');
      if (!badge) return;
      const solvedCount = Object.keys(solvedMap).filter(k => solvedMap[k]).length;
      badge.textContent = `${solvedCount}/${problems.length} Đạt`;
      if (solvedCount > 0) {
        badge.style.background = 'rgba(16, 185, 129, 0.2)';
        badge.style.color = '#34d399';
      }
    }

    function populateSelect() {
      if (!selectEl) return;
      selectEl.innerHTML = problems.map((p, idx) => {
        const isSolved = !!solvedMap[p.id];
        return `<option value="${p.id}" ${idx === currentProblemIndex ? 'selected' : ''}>
          ${isSolved ? '✓ ' : ''}${p.title} (${p.difficulty})
        </option>`;
      }).join('');
    }

    function loadProblem(idx) {
      if (idx < 0) idx = 0;
      if (idx >= problems.length) idx = problems.length - 1;
      currentProblemIndex = idx;
      currentTestTabIndex = 0;
      lastExecutionResult = null;

      const p = problems[currentProblemIndex];
      if (!p) return;

      if (selectEl) selectEl.value = p.id;

      // Update Meta Tags
      const metaContainer = document.getElementById('peProblemMetaTags');
      if (metaContainer) {
        const diffClass = p.difficulty === 'Easy' ? 'pe-tag-easy' : (p.difficulty === 'Medium' ? 'pe-tag-medium' : 'pe-tag-hard');
        const isSolved = !!solvedMap[p.id];
        metaContainer.innerHTML = `
          <span class="pe-tag ${diffClass}">${p.difficulty}</span>
          <span class="pe-tag pe-tag-cat">${p.category}</span>
          ${p.dayRef ? `<span class="pe-tag pe-tag-day">Ngày ${p.dayRef}</span>` : ''}
          ${isSolved ? '<span class="pe-tag pe-tag-easy">✓ Đã Đạt Chuẩn</span>' : ''}
        `;
      }

      // Update Title & Markdown Statement
      const titleEl = document.getElementById('peProblemTitle');
      const descEl = document.getElementById('peProblemDescription');
      if (titleEl) titleEl.textContent = p.title;
      if (descEl) descEl.innerHTML = renderMarkdown(p.description || '');

      // Update Examples
      const exContainer = document.getElementById('peExamplesContainer');
      if (exContainer) {
        exContainer.innerHTML = (p.examples || []).map((ex, i) => `
          <div class="pe-example-card">
            <div class="pe-example-header">Ví dụ ${i + 1}:</div>
            <div class="pe-example-row"><span class="pe-example-lbl">Input:</span><span class="pe-example-val">${escapeHtml(ex.input)}</span></div>
            <div class="pe-example-row"><span class="pe-example-lbl">Output:</span><span class="pe-example-val">${escapeHtml(ex.output)}</span></div>
            ${ex.explanation ? `<div class="pe-example-exp"><strong>Giải thích:</strong> ${escapeHtml(ex.explanation)}</div>` : ''}
          </div>
        `).join('');
      }

      // Update Constraints
      const constBox = document.getElementById('peConstraintsBox');
      if (constBox) {
        constBox.textContent = `${p.constraints || ''}\n\nĐầu vào: ${p.inputFormat || ''}\nĐầu ra: ${p.outputFormat || ''}`;
      }

      // Update Hints
      const hintsContainer = document.getElementById('peHintsContainer');
      if (hintsContainer) {
        hintsContainer.innerHTML = (p.hints || []).map((h, i) => `
          <div class="pe-hint-card">
            <strong>Gợi ý ${i + 1}:</strong> ${escapeHtml(h)}
          </div>
        `).join('');
      }

      // Update Solution
      const solContainer = document.getElementById('peSolutionContainer');
      if (solContainer) {
        solContainer.innerHTML = `<pre class="pe-solution-code"><code>${escapeHtml(p.solution || '// Đang cập nhật lời giải')}</code></pre>`;
      }

      // Switch to first tab (Statement)
      document.querySelectorAll('.pe-tab-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === 'statement'));
      document.querySelectorAll('.pe-tab-content').forEach(c => {
        c.style.display = c.id === 'peTabContentStatement' ? 'block' : 'none';
        c.classList.toggle('active', c.id === 'peTabContentStatement');
      });

      // Load Saved Code or Starter Code
      const saved = localStorage.getItem(PE_STORAGE_PREFIX + p.id);
      if (codeTextarea) {
        codeTextarea.value = (saved !== null && saved !== undefined) ? saved : (p.starterCode || '');
        updateLineNumbers();
      }

      // Render Test Tabs
      renderTestTabs();
      hideResultPanel();
    }

    function renderTestTabs() {
      const tabsEl = document.getElementById('peTestTabs');
      if (!tabsEl) return;
      const p = problems[currentProblemIndex];
      const publicTests = (p && p.testCases) ? p.testCases.filter(tc => !tc.isHidden) : [];

      let html = publicTests.map((tc, idx) => `
        <button type="button" class="pe-test-tab-btn ${idx === currentTestTabIndex ? 'active' : ''}" data-idx="${idx}">
          Case ${idx + 1}
        </button>
      `).join('');

      html += `
        <button type="button" class="pe-test-tab-btn ${currentTestTabIndex === publicTests.length ? 'active' : ''}" data-idx="${publicTests.length}">
          Custom Input
        </button>
      `;

      tabsEl.innerHTML = html;
      tabsEl.querySelectorAll('.pe-test-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          currentTestTabIndex = parseInt(btn.dataset.idx, 10);
          renderTestTabs();
          renderTestCaseBody();
        });
      });

      renderTestCaseBody();
    }

    function renderTestCaseBody() {
      const bodyEl = document.getElementById('peTestCaseBody');
      if (!bodyEl) return;
      const p = problems[currentProblemIndex];
      const publicTests = (p && p.testCases) ? p.testCases.filter(tc => !tc.isHidden) : [];

      if (currentTestTabIndex < publicTests.length) {
        const tc = publicTests[currentTestTabIndex];
        bodyEl.innerHTML = `
          <div class="pe-field-label">Input (Dữ liệu đầu vào):</div>
          <div class="pe-field-box">${escapeHtml(tc.input || '')}</div>
          <div class="pe-field-label">Expected Output (Kết quả mong đợi):</div>
          <div class="pe-field-box" style="color:#34d399;">${escapeHtml(tc.expectedOutput || '')}</div>
        `;
      } else {
        bodyEl.innerHTML = `
          <div class="pe-field-label">Custom Test Input (Nhập dữ liệu tự do kiểm tra):</div>
          <textarea id="peCustomInputArea" class="custom-input font-code" rows="3"
            placeholder="Nhập tham số đầu vào thử nghiệm..." style="width:100%;font-size:0.84rem;margin-bottom:0.4rem;">${escapeHtml(customTestInput)}</textarea>
          <div class="pe-field-label" style="font-size:0.68rem;color:#94a3b8;">Nhấn "▶ Chạy Thử" để xem kết quả mã nguồn Java của bạn xử lý dữ liệu này.</div>
        `;
        const customArea = document.getElementById('peCustomInputArea');
        if (customArea) {
          customArea.addEventListener('input', () => {
            customTestInput = customArea.value;
          });
        }
      }
    }

    function updateLineNumbers() {
      if (!codeTextarea || !lineNums) return;
      const lineCount = (codeTextarea.value.match(/\n/g) || []).length + 1;
      let numsHtml = '';
      for (let i = 1; i <= lineCount; i++) {
        numsHtml += i + '<br>';
      }
      lineNums.innerHTML = numsHtml;
    }

    function saveCode() {
      const p = problems[currentProblemIndex];
      if (!p || !codeTextarea) return;
      localStorage.setItem(PE_STORAGE_PREFIX + p.id, codeTextarea.value);
    }

    // Code Editor Keystrokes & Ergonomics
    if (codeTextarea) {
      codeTextarea.addEventListener('keydown', (e) => {
        // Tab key: insert 4 spaces
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = codeTextarea.selectionStart;
          const end = codeTextarea.selectionEnd;
          codeTextarea.value = codeTextarea.value.substring(0, start) + "    " + codeTextarea.value.substring(end);
          codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 4;
          updateLineNumbers();
          saveCode();
          return;
        }

        // Enter key: auto-indent based on previous line
        if (e.key === 'Enter') {
          const start = codeTextarea.selectionStart;
          const currentLine = codeTextarea.value.substring(0, start).split('\n').pop();
          const indentMatch = currentLine.match(/^\s*/);
          let indent = indentMatch ? indentMatch[0] : '';
          
          if (currentLine.trim().endsWith('{')) {
            indent += "    ";
          }

          if (indent.length > 0) {
            e.preventDefault();
            codeTextarea.value = codeTextarea.value.substring(0, start) + "\n" + indent + codeTextarea.value.substring(codeTextarea.selectionEnd);
            codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 1 + indent.length;
            updateLineNumbers();
            saveCode();
            return;
          }
        }

        // Auto-pairing brackets
        const pairs = { '(': ')', '{': '}', '[': ']', '"': '"' };
        if (pairs[e.key]) {
          const start = codeTextarea.selectionStart;
          const end = codeTextarea.selectionEnd;
          if (start === end) {
            e.preventDefault();
            codeTextarea.value = codeTextarea.value.substring(0, start) + e.key + pairs[e.key] + codeTextarea.value.substring(end);
            codeTextarea.selectionStart = codeTextarea.selectionEnd = start + 1;
            updateLineNumbers();
            saveCode();
          }
        }
      });

      codeTextarea.addEventListener('input', () => {
        updateLineNumbers();
        saveCode();
      });

      codeTextarea.addEventListener('scroll', () => {
        if (lineNums) lineNums.scrollTop = codeTextarea.scrollTop;
      });
    }

    // Tabs inside Problem pane
    document.querySelectorAll('.pe-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pe-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        const targetId = tab === 'statement' ? 'peTabContentStatement' : (tab === 'hints' ? 'peTabContentHints' : 'peTabContentSolution');
        document.querySelectorAll('.pe-tab-content').forEach(c => {
          c.style.display = c.id === targetId ? 'block' : 'none';
          c.classList.toggle('active', c.id === targetId);
        });
      });
    });

    // Action buttons
    if (selectEl) {
      selectEl.addEventListener('change', () => {
        const idx = problems.findIndex(p => p.id === selectEl.value);
        if (idx !== -1) loadProblem(idx);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentProblemIndex > 0) loadProblem(currentProblemIndex - 1);
        else showToast('Đang ở bài đầu tiên!', 'info');
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentProblemIndex < problems.length - 1) loadProblem(currentProblemIndex + 1);
        else showToast('Đang ở bài cuối cùng!', 'info');
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const p = problems[currentProblemIndex];
        if (!p) return;
        if (confirm('Bạn có chắc muốn đặt lại code về trạng thái ban đầu?')) {
          codeTextarea.value = p.starterCode || '';
          updateLineNumbers();
          saveCode();
          showToast('Đã đặt lại code bài tập', 'info');
        }
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        if (!codeTextarea) return;
        navigator.clipboard.writeText(codeTextarea.value).then(() => {
          showToast('✓ Đã copy mã nguồn Java vào clipboard', 'success');
        });
      });
    }

    if (formatBtn) {
      formatBtn.addEventListener('click', () => {
        if (!codeTextarea) return;
        const lines = codeTextarea.value.split('\n');
        let indentLevel = 0;
        const formatted = lines.map(line => {
          let trimmed = line.trim();
          if (trimmed.startsWith('}')) indentLevel = Math.max(0, indentLevel - 1);
          const indented = '    '.repeat(indentLevel) + trimmed;
          if (trimmed.endsWith('{')) indentLevel++;
          return indented;
        }).join('\n');
        codeTextarea.value = formatted;
        updateLineNumbers();
        saveCode();
        showToast('✓ Đã format căn lề code', 'success');
      });
    }

    // Runner Execution
    async function executeCode(isSubmission = false) {
      if (isRunningCode) return;
      const p = problems[currentProblemIndex];
      if (!p || !codeTextarea) return;

      const userCode = codeTextarea.value.trim();
      if (!userCode) {
        showToast('Vui lòng viết code trước khi chạy', 'warning');
        return;
      }

      let testsToRun = [];
      if (isSubmission) {
        testsToRun = p.testCases || [];
      } else {
        const publicTests = (p.testCases || []).filter(tc => !tc.isHidden);
        if (currentTestTabIndex < publicTests.length) {
          testsToRun = [publicTests[currentTestTabIndex]];
        } else {
          testsToRun = [{
            id: 999,
            title: 'Custom Test Input',
            input: customTestInput || '',
            expectedOutput: '',
            isHidden: false
          }];
        }
      }

      isRunningCode = true;
      const activeBtn = isSubmission ? submitBtn : runBtn;
      const origText = activeBtn ? activeBtn.innerHTML : '';
      if (activeBtn) activeBtn.innerHTML = '<span>⏳</span> Đang biên dịch Java 23...';

      showResultLoading(isSubmission);

      try {
        const payload = {
          code: userCode,
          driverCode: p.driverCode || '',
          testCases: testsToRun
        };

        const res = await fetch('/api/run-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await res.json();
        lastExecutionResult = data;
        renderResultPanel(data, isSubmission);

        if (isSubmission && data.status === 'ACCEPTED') {
          solvedMap[p.id] = true;
          try {
            localStorage.setItem(PE_SOLVED_KEY, JSON.stringify(solvedMap));
          } catch (_) {}
          updateNavBadge();
          populateSelect();
          loadProblem(currentProblemIndex);
          playSuccessChime();
          showToast(`🎉 Xuất sắc! Nộp bài thành công bài: ${p.title}`, 'success');
        }
      } catch (err) {
        renderResultPanel({
          ok: false,
          status: 'SERVER_ERROR',
          compilerError: 'Không thể kết nối đến máy chủ: ' + err.message
        }, isSubmission);
      } finally {
        isRunningCode = false;
        if (activeBtn) activeBtn.innerHTML = origText;
      }
    }

    if (runBtn) {
      runBtn.addEventListener('click', () => executeCode(false));
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', () => executeCode(true));
    }

    function showResultLoading(isSub) {
      const panel = document.getElementById('peResultPanel');
      if (!panel) return;
      panel.style.display = 'block';
      panel.innerHTML = `
        <div style="text-align:center;padding:1rem;color:#cbd5e1;font-size:0.85rem;">
          <div style="font-size:1.5rem;animation:spin 1s infinite linear;display:inline-block;margin-bottom:0.5rem;">⚙️</div>
          <div>Đang biên dịch bằng <strong>javac 23</strong> và thực thi JVM...</div>
        </div>
      `;
    }

    function hideResultPanel() {
      const panel = document.getElementById('peResultPanel');
      if (panel) panel.style.display = 'none';
    }

    function renderResultPanel(res, isSub) {
      const panel = document.getElementById('peResultPanel');
      if (!panel) return;
      panel.style.display = 'block';

      if (res.status === 'COMPILE_ERROR') {
        panel.innerHTML = `
          <div class="pe-result-banner status-compile-err">
            <span>⚠️ COMPILE ERROR (Lỗi Biên Dịch Java)</span>
            <span style="font-size:0.8rem;font-weight:600;">javac 23</span>
          </div>
          <pre class="pe-compile-err-pre"><code>${escapeHtml(res.compilerError || 'Lỗi cú pháp không xác định')}</code></pre>
          <div style="margin-top:0.6rem;text-align:right;">
            <button type="button" class="btn-ask-ai-pill" id="peAskAIFromErrorBtn">
              <span class="ai-sparkle">✨</span> Nhờ AI phân tích &amp; chỉ cách sửa lỗi này →
            </button>
          </div>
        `;
        const askBtn = document.getElementById('peAskAIFromErrorBtn');
        if (askBtn) askBtn.addEventListener('click', triggerAIReview);
        return;
      }

      const isAccepted = res.status === 'ACCEPTED';
      const statusBannerClass = isAccepted ? 'status-accepted' : (res.status === 'TIMEOUT' ? 'status-timeout' : 'status-wrong');
      const statusTitle = isAccepted
        ? `✓ ACCEPTED (${res.passedTests}/${res.totalTests} Test Cases Đạt)`
        : (res.status === 'TIMEOUT' ? '⏱️ TIME LIMIT EXCEEDED (> 4000ms)' : `❌ WRONG ANSWER (${res.passedTests}/${res.totalTests} Đạt)`);

      let diffsHtml = (res.testResults || []).map((tr, idx) => {
        const passBadge = tr.passed
          ? '<span style="color:#34d399;font-weight:700;">✓ PASSED</span>'
          : '<span style="color:#f87171;font-weight:700;">✗ FAILED</span>';
        
        return `
          <div class="pe-result-diff-card" style="border-left: 3px solid ${tr.passed ? '#10b981' : '#ef4444'};">
            <div style="display:flex;justify-content:space-between;margin-bottom:0.35rem;font-size:0.75rem;">
              <strong>${escapeHtml(tr.title || ('Test #' + (idx + 1)))}</strong>
              <div>${passBadge} <span style="color:#94a3b8;font-family:var(--font-mono);margin-left:0.4rem;">${tr.runtimeMs || 0}ms</span></div>
            </div>
            ${tr.input ? `<div style="font-size:0.72rem;color:#94a3b8;">Input: <code style="color:#38bdf8;">${escapeHtml(tr.input)}</code></div>` : ''}
            <div style="margin-top:0.25rem;font-size:0.75rem;">
              <span style="color:#94a3b8;">Output của bạn:</span>
              <pre style="margin:0.2rem 0;background:#0d1117;padding:0.35rem 0.5rem;border-radius:4px;font-family:var(--font-mono);color:${tr.passed ? '#34d399' : '#f87171'}">${escapeHtml(tr.actualOutput || '')}</pre>
            </div>
            ${tr.expectedOutput ? `
              <div style="font-size:0.75rem;">
                <span style="color:#94a3b8;">Output mong đợi:</span>
                <pre style="margin:0.2rem 0;background:#0d1117;padding:0.35rem 0.5rem;border-radius:4px;font-family:var(--font-mono);color:#34d399">${escapeHtml(tr.expectedOutput)}</pre>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      panel.innerHTML = `
        <div class="pe-result-banner ${statusBannerClass}">
          <span>${statusTitle}</span>
          <span style="font-size:0.8rem;font-family:var(--font-mono);">Tổng: ${res.runtimeMs || 0}ms</span>
        </div>
        <div class="pe-diffs-list">${diffsHtml}</div>
        ${!isAccepted ? `
          <div style="margin-top:0.6rem;text-align:right;">
            <button type="button" class="btn-ask-ai-pill" id="peAskAIFromErrorBtn">
              <span class="ai-sparkle">✨</span> Chưa hiểu lỗi? Nhờ AI Tutor hướng dẫn sửa →
            </button>
          </div>
        ` : ''}
      `;

      const askBtn = document.getElementById('peAskAIFromErrorBtn');
      if (askBtn) askBtn.addEventListener('click', triggerAIReview);
    }

    // AI Review Code Integration
    function triggerAIReview() {
      const p = problems[currentProblemIndex];
      if (!p) return;
      const userCode = (codeTextarea ? codeTextarea.value : '') || '';

      let errorContext = '';
      if (lastExecutionResult) {
        if (lastExecutionResult.status === 'COMPILE_ERROR') {
          errorContext = `\n⚠️ LỖI BIÊN DỊCH JAVAC:\n\`\`\`\n${lastExecutionResult.compilerError || ''}\n\`\`\``;
        } else if (lastExecutionResult.status !== 'ACCEPTED') {
          const failedTest = (lastExecutionResult.testResults || []).find(r => !r.passed);
          if (failedTest) {
            errorContext = `\n❌ TEST CASE BỊ SAI:\n- Input: ${failedTest.input}\n- Output thực tế của code: ${failedTest.actualOutput}\n- Expected Output: ${failedTest.expectedOutput}`;
          }
        }
      }

      const displayTitle = `Chữa code PE: ${p.title}`;
      const prompt = `Tôi đang luyện "Code Chay" cho bài thi thực hành PE / FSOFT Entry Test:
Đề bài: ${p.title}
Chủ đề: ${p.category} • Độ khó: ${p.difficulty}

Mô tả bài toán:
${p.description}

💻 Đoạn code Java hiện tại của tôi:
\`\`\`java
${userCode}
\`\`\`
${errorContext}

Hãy đóng vai trò Giám Khảo PE FPT / LeetCode Mentor để:
1. Chỉ ra lỗi logic hoặc cú pháp (nếu có lỗi) và giải thích cặn kẽ nguyên nhân tại sao lại sai.
2. Hướng dẫn tôi phương pháp tư duy khắc phục từng bước (không đưa ngay full đáp án trừ khi thật cần thiết).
3. Đánh giá độ phức tạp thuật toán Time Complexity O(...) và Space Complexity O(...).
4. Nhắc nhở các cạm bẫy edge case đề thi PE hay gài thí sinh ở dạng bài này.`;

      const quickFollowUps = [
        '💡 Gợi ý thuật toán tối ưu hơn cho bài này',
        '🧠 Phân tích Time Complexity O(N) và Space O(1)',
        '⚠️ Các test case đặc biệt (edge cases) cần chú ý',
        '🎯 Cho tôi code mẫu chuẩn sạch (Clean Code)'
      ];

      openAIPanel();
      sendAIPerQuestionMessage(displayTitle, prompt, quickFollowUps);
    }

    if (aiReviewBtn) {
      aiReviewBtn.addEventListener('click', triggerAIReview);
    }

    // ============================================================
    // AI CODE ASSISTANT PANEL (Inline trong editor)
    // ============================================================
    const chatPanel = document.getElementById('peAIChatPanel');
    const chatMessages = document.getElementById('peAIChatMessages');
    const chatInput = document.getElementById('peAIChatInput');
    const sendBtn = document.getElementById('peAISendBtn');
    const closeBtn = document.getElementById('peAIChatCloseBtn');
    const thinkingEl = document.getElementById('peAIThinking');

    function openPEAIChat() {
      if (chatPanel) chatPanel.style.display = 'flex';
    }

    function closePEAIChat() {
      if (chatPanel) chatPanel.style.display = 'none';
    }

    if (closeBtn) closeBtn.addEventListener('click', closePEAIChat);

    function appendAIMessage(role, content) {
      if (!chatMessages) return;
      const msg = document.createElement('div');
      msg.className = `pe-ai-msg pe-ai-msg--${role}`;
      msg.innerHTML = content.replace(/```java([\s\S]*?)```/g, '<pre class="pe-ai-code">$1</pre>')
                             .replace(/```([\s\S]*?)```/g, '<pre class="pe-ai-code">$1</pre>')
                             .replace(/\n/g, '<br>');
      chatMessages.appendChild(msg);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function askCodeAI(userMsg, customPrompt) {
      const p = problems[currentProblemIndex];
      if (!p) return;
      const userCode = codeTextarea ? codeTextarea.value : '';

      openPEAIChat();
      if (userMsg) appendAIMessage('user', userMsg);
      if (thinkingEl) thinkingEl.style.display = 'inline';

      const baseContext = `Bạn là AI Code Mentor cho kỳ thi PE Java FPT (Practical Exam).
Bài tập hiện tại: "${p.title}" — ${p.category} · ${p.difficulty}
Mô tả: ${p.description.slice(0, 300)}

Code Java hiện tại của học viên:
\`\`\`java
${userCode || '// (Chưa viết code)'}
\`\`\``;

      const fullPrompt = baseContext + '\n\n' + (customPrompt || userMsg);

      try {
        const resp = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: fullPrompt, model: 'gemini-2.0-flash' })
        });
        const data = await resp.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Không có phản hồi.';
        appendAIMessage('assistant', text);
      } catch (err) {
        appendAIMessage('assistant', `❌ Lỗi kết nối AI: ${err.message}. Thử lại sau nhé!`);
      } finally {
        if (thinkingEl) thinkingEl.style.display = 'none';
      }
    }

    // Quick action buttons
    const hintBtn = document.getElementById('peHintStep1Btn');
    const nextStepBtn = document.getElementById('peNextStepBtn');
    const explainBtn = document.getElementById('peExplainApproachBtn');
    const writeBtn = document.getElementById('peWriteCodeBtn');
    const debugBtn = document.getElementById('peDebugCodeBtn');

    if (hintBtn) hintBtn.addEventListener('click', () => {
      askCodeAI('🔍 Bắt đầu từ đâu?',
        `Học viên chưa biết bắt đầu từ đâu. Hãy:
1. Phân tích đề bài thành các bước nhỏ (đừng đưa code ngay)
2. Gợi ý kiểu dữ liệu / cấu trúc dữ liệu phù hợp
3. Hướng dẫn bước 1 cụ thể cần làm là gì
Giải thích ngắn gọn, bằng tiếng Việt, có ví dụ nếu cần.`
      );
    });

    if (nextStepBtn) nextStepBtn.addEventListener('click', () => {
      const code = codeTextarea ? codeTextarea.value.trim() : '';
      if (!code) {
        openPEAIChat();
        appendAIMessage('assistant', '💡 Bạn chưa viết code gì cả! Hãy thử viết phần khai báo class và method trước nhé, hoặc bấm "🔍 Bắt đầu từ đâu?" để được hướng dẫn.');
        return;
      }
      askCodeAI('⚡ Bước tiếp theo tôi cần làm gì?',
        `Học viên đã viết được một phần code. Dựa trên code hiện tại, hãy:
1. Nhận xét phần đã viết có hướng đúng không
2. Chỉ ra bước TIẾP THEO cụ thể cần làm (không viết full code)
3. Nếu có lỗi nhỏ, chỉ ra ngay
Ngắn gọn, actionable, tiếng Việt.`
      );
    });

    if (explainBtn) explainBtn.addEventListener('click', () => {
      askCodeAI('💡 Giải thích approach và thuật toán cho bài này',
        `Hãy giải thích:
1. Approach tốt nhất để giải bài này (tư duy thuật toán)
2. Time Complexity và Space Complexity
3. Các pattern phổ biến áp dụng được (loop, array, map...)
4. Pseudocode 5-7 dòng (tiếng Việt)
KHÔNG viết code Java đầy đủ.`
      );
    });

    if (writeBtn) writeBtn.addEventListener('click', () => {
      const confirmed = confirm('⚠️ Gợi ý: Tự code trước 15 phút sẽ giúp bạn nhớ lâu hơn! Bạn có chắc muốn AI viết code không?');
      if (!confirmed) return;
      askCodeAI('🤖 AI viết code giúp tôi',
        `Học viên cần code mẫu hoàn chỉnh. Hãy:
1. Viết code Java chuẩn, clean, đầy đủ cho bài này
2. Comment giải thích từng phần quan trọng (tiếng Việt)
3. Phân tích Time/Space Complexity
4. Nêu 1-2 cách viết thay thế nếu có
Format: code trong \`\`\`java ... \`\`\``
      );
    });

    if (debugBtn) debugBtn.addEventListener('click', () => {
      const code = codeTextarea ? codeTextarea.value.trim() : '';
      if (!code || code.length < 10) {
        openPEAIChat();
        appendAIMessage('assistant', '🐛 Chưa có code để debug! Viết code vào editor trước rồi bấm "Tìm lỗi" nhé.');
        return;
      }
      askCodeAI('🐛 Tìm lỗi trong code của tôi',
        `Hãy phân tích code Java của học viên và:
1. Liệt kê TẤT CẢ lỗi (compile error, logic error, runtime exception)
2. Giải thích tại sao từng đoạn sai
3. Gợi ý cách sửa (không viết lại toàn bộ, chỉ chỉ ra chỗ cần sửa)
4. Kiểm tra edge cases bài hay gài bẫy`
      );
    });

    // Chat input send
    function sendChatMessage() {
      const msg = chatInput ? chatInput.value.trim() : '';
      if (!msg) return;
      chatInput.value = '';
      askCodeAI(msg, `Học viên hỏi: "${msg}"\nHãy trả lời cụ thể, liên quan đến bài toán hiện tại. Tiếng Việt, ngắn gọn.`);
    }

    if (sendBtn) sendBtn.addEventListener('click', sendChatMessage);
    if (chatInput) {
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendChatMessage();
        }
      });
    }

    // Expose jump function to open PE from daily lessons
    window.openPEProblemById = function(problemId) {
      switchTab('pe-code');
      const idx = problems.findIndex(p => p.id === problemId);
      if (idx !== -1) {
        loadProblem(idx);
      }
    };

    // Initialize module
    populateSelect();
    loadProblem(0);
    updateNavBadge();
  }

  // ==================== AI TUTOR MODULE ====================
  const AI_STORAGE = {
    MODEL: 'apex_ai_model',
    CONTEXT: 'apex_ai_lesson_context'
  };

  const aiState = {
    // API keys are managed by server.js proxy — no key stored in browser
    model: localStorage.getItem(AI_STORAGE.MODEL) || 'gemini-3.6-flash',
    history: [], // [{role:'user'|'model', parts:[{text}]}]
    isThinking: false,
    lessonContext: null // {day, title, topic}
  };

  // System instruction for the AI — grounded in FSOFT curriculum
  function buildSystemPrompt() {
    const basePrompt = `Bạn là **Java AI Tutor** chuyên dụng cho hệ thống luyện thi FSOFT Entry Test & Audit 1-1.

## Phạm vi chuyên môn:
- Java Core (SCJP Study Guide Ch01-Ch09): Language Fundamentals, OOP, Operators, Flow Control, Exceptions, Strings/Collections, Inner Classes, Threads
- SQL cơ bản và JavaWeb (JSP, Servlet, JDBC)
- FEE (Front-End Essentials) và Spring MVC cơ bản
- Luyện thi TestKing (bộ đề SCJP 310-035/310-065)
- Comment Code FPT: dịch mô tả nghiệp vụ Anh-Việt chuẩn xác

## Nguyên tắc trả lời:
1. **Luôn trả lời bằng tiếng Việt** trừ khi người dùng hỏi bằng tiếng Anh
2. **Trả lời có cấu trúc rõ ràng** — dùng headers, bullet points, code blocks
3. **Luôn cung cấp code ví dụ** khi giải thích concept Java
4. **Phân tích bẫy thi** khi liên quan — chỉ rõ tại sao đáp án sai, tại sao đáp án đúng
5. **Giữ ngắn gọn súc tích** — tối đa 400 từ mỗi câu trả lời, trừ khi hỏi tóm tắt
6. **Không hallucinate** — nếu không chắc chắn, nói rõ "Theo SCJP..." hoặc "Cần xác minh thêm..."
7. **Hỗ trợ 3 cấp độ**: Giải thích cơ bản → Ví dụ nâng cao → Bẫy thi thực tế

## Format code:
- Luôn bọc code Java trong \`\`\`java ... \`\`\`
- Thêm comment giải thích từng dòng quan trọng
- Ghi rõ output dự kiến ở dạng comment: // Output: ...`;

    if (aiState.lessonContext) {
      return basePrompt + `\n\n## Ngữ cảnh bài học hiện tại:\nNgười dùng đang học **Ngày ${aiState.lessonContext.day}: ${aiState.lessonContext.title}**\nChủ đề: ${aiState.lessonContext.topic}\nHãy ưu tiên giải thích các câu hỏi liên quan đến chủ đề này.`;
    }
    return basePrompt;
  }

  function initAITutorModule() {
    const fab = document.getElementById('aiTutorFab');
    const closeBtn = document.getElementById('aiClosePanelBtn');
    const expandBtn = document.getElementById('aiExpandBtn');
    const minimizeBtn = document.getElementById('aiMinimizeBtn');
    const resizeHandle = document.getElementById('aiResizeHandle');
    const clearBtn = document.getElementById('aiClearBtn');
    const settingsBtn = document.getElementById('aiSettingsBtn');
    const sendBtn = document.getElementById('aiSendBtn');
    const chatInput = document.getElementById('aiChatInput');
    const settingsPanel = document.getElementById('aiSettingsPanel');
    const saveSettingsBtn = document.getElementById('aiSaveSettingsBtn');
    const closeSettingsBtn = document.getElementById('aiCloseSettingsBtn');
    const clearContextBtn = document.getElementById('aiClearContextBtn');

    // Restore saved custom panel width
    const savedWidth = localStorage.getItem('apex_ai_panel_width');
    if (savedWidth && parseInt(savedWidth, 10) >= 320) {
      document.documentElement.style.setProperty('--ai-panel-width', `${parseInt(savedWidth, 10)}px`);
    }

    // FAB open/close
    fab.addEventListener('click', () => openAIPanel());
    closeBtn.addEventListener('click', () => closeAIPanel());
    if (minimizeBtn) {
      minimizeBtn.addEventListener('click', () => closeAIPanel());
    }

    // Expand / Toggle Maximize Width
    if (expandBtn) {
      expandBtn.addEventListener('click', () => {
        const panel = document.getElementById('aiTutorPanel');
        if (!panel) return;
        const isMax = panel.classList.toggle('is-maximized');
        expandBtn.textContent = isMax ? '🗗' : '🗖';
        expandBtn.title = isMax ? 'Thu nhỏ kích thước chuẩn' : 'Phóng to tối đa';
        const currentW = isMax
          ? Math.min(980, Math.floor(window.innerWidth * 0.92))
          : (parseInt(localStorage.getItem('apex_ai_panel_width'), 10) || 450);
        document.documentElement.style.setProperty('--ai-panel-width', `${currentW}px`);
      });
    }

    // Drag-to-resize handle
    if (resizeHandle) {
      let isDragging = false;
      let startX = 0;
      let startWidth = 450;

      resizeHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        const panel = document.getElementById('aiTutorPanel');
        startWidth = panel ? panel.getBoundingClientRect().width : 450;
        if (panel) {
          panel.classList.remove('is-maximized');
          panel.classList.add('is-resizing');
        }
        if (expandBtn) expandBtn.textContent = '🗖';
        resizeHandle.classList.add('active');
        document.body.classList.add('ai-resizing');
        e.preventDefault();
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const deltaX = startX - e.clientX;
        let newWidth = startWidth + deltaX;
        const minW = 320;
        const maxW = Math.min(window.innerWidth - 60, 1200);
        newWidth = Math.max(minW, Math.min(maxW, newWidth));
        document.documentElement.style.setProperty('--ai-panel-width', `${Math.round(newWidth)}px`);
      });

      window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        const panel = document.getElementById('aiTutorPanel');
        if (panel) {
          panel.classList.remove('is-resizing');
          const finalW = panel.getBoundingClientRect().width;
          localStorage.setItem('apex_ai_panel_width', Math.round(finalW).toString());
        }
        resizeHandle.classList.remove('active');
        document.body.classList.remove('ai-resizing');
      });

      // Double-click to reset to default 450px
      resizeHandle.addEventListener('dblclick', () => {
        const defaultW = 450;
        document.documentElement.style.setProperty('--ai-panel-width', `${defaultW}px`);
        localStorage.setItem('apex_ai_panel_width', defaultW.toString());
        const panel = document.getElementById('aiTutorPanel');
        if (panel) panel.classList.remove('is-maximized');
        if (expandBtn) expandBtn.textContent = '🗖';
        showToast('Đã đặt lại kích thước chat chuẩn (450px)', 'info');
      });
    }

    // Clear chat
    clearBtn.addEventListener('click', () => {
      aiState.history = [];
      renderWelcomeMessage();
      showToast('Đã xóa lịch sử chat', 'info');
    });

    // Settings & Token Dashboard Modal
    const tokenBadge = document.getElementById('aiHeaderTokenBadge');
    const refreshBtn = document.getElementById('aiRefreshTokenBtn');
    const closeXBtn = document.getElementById('aiSettingsCloseXBtn');
    let statusPollInterval = null;

    function openSettings() {
      const modelSel = document.getElementById('aiModelSelect');
      if (modelSel) modelSel.value = aiState.model;
      settingsPanel.style.display = 'flex';
      fetchAndRenderKeyStatus();
      if (!statusPollInterval) {
        statusPollInterval = setInterval(fetchAndRenderKeyStatus, 4000);
      }
    }

    function closeSettings() {
      settingsPanel.style.display = 'none';
      if (statusPollInterval) {
        clearInterval(statusPollInterval);
        statusPollInterval = null;
      }
    }

    settingsBtn.addEventListener('click', openSettings);
    if (tokenBadge) tokenBadge.addEventListener('click', openSettings);
    if (closeXBtn) closeXBtn.addEventListener('click', closeSettings);
    closeSettingsBtn.addEventListener('click', closeSettings);

    if (refreshBtn) {
      refreshBtn.addEventListener('click', () => {
        refreshBtn.textContent = '⏳ Đang tải...';
        fetchAndRenderKeyStatus().finally(() => {
          setTimeout(() => { refreshBtn.textContent = '🔄 Cập nhật ngay'; }, 350);
        });
      });
    }

    saveSettingsBtn.addEventListener('click', () => {
      const modelSel = document.getElementById('aiModelSelect');
      const newModel = modelSel ? modelSel.value : 'gemini-3.6-flash';
      aiState.model = newModel;
      localStorage.setItem(AI_STORAGE.MODEL, newModel);
      closeSettings();
      updateStatusDot('online', `${newModel.replace('models/','').replace('gemini-','Gemini ')} · Sẵn sàng`);
      showToast(`✓ Model đã đổi sang ${newModel}`, 'success');
    });

    // Send message
    sendBtn.addEventListener('click', sendAIMessage);
    chatInput.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        sendAIMessage();
      }
    });

    // Quick chips — no key check needed, server handles it
    document.querySelectorAll('.quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.dataset.q;
        chatInput.value = q;
        sendAIMessage();
      });
    });

    // Clear context
    if (clearContextBtn) {
      clearContextBtn.addEventListener('click', () => {
        aiState.lessonContext = null;
        updateContextBadge();
      });
    }

    // Always enable chat — keys are on server
    enableChatInput();
    renderWelcomeMessage();
    updateContextBadge();
    fetchAndRenderKeyStatus();
  }

  // Fetch real-time token and key usage from /api/ai/status
  async function fetchAndRenderKeyStatus() {
    try {
      const res = await fetch('/api/ai/status');
      if (!res.ok) return;
      const data = await res.json();

      // Update header token pill counter
      const headerTokenNum = document.getElementById('aiHeaderTokenNum');
      if (headerTokenNum) {
        headerTokenNum.textContent = (data.grandTotalTokens || 0).toLocaleString();
      }

      // Update summary stat boxes in Settings modal
      const statTokens = document.getElementById('statGrandTokens');
      const statRequests = document.getElementById('statGrandRequests');
      const statActive = document.getElementById('statActiveKeys');

      if (statTokens) statTokens.textContent = `${(data.grandTotalTokens || 0).toLocaleString()} tokens`;
      if (statRequests) statRequests.textContent = `${(data.grandTotalRequests || 0).toLocaleString()} / ${(data.grandDailyQuota || 7500).toLocaleString()}`;
      if (statActive) statActive.textContent = `${data.availableCount || 0} / ${data.totalKeys || 5} sẵn sàng`;

      // Render 5 Key Cards with token progress bars
      const listEl = document.getElementById('aiKeyTokenCardsList');
      if (!listEl) return;

      if (!Array.isArray(data.keys) || data.keys.length === 0) {
        listEl.innerHTML = '<div style="color:#94a3b8;font-size:0.8rem;text-align:center;padding:1rem;">Không tìm thấy key nào trong .env</div>';
        return;
      }

      listEl.innerHTML = data.keys.map(k => {
        const isCooling = k.status === 'cooling';
        const badgeHtml = isCooling
          ? `<span class="key-badge badge-cooling">⏳ Hạ nhiệt (${k.coolingSeconds}s)</span>`
          : `<span class="key-badge badge-available">🟢 Sẵn sàng</span>`;

        const reqPct = Math.min(100, Math.max(0, k.percentUsed || 0));
        // Relative token bar scale (reference: 50,000 tokens)
        const tokPct = Math.min(100, Math.max(k.totalTokens > 0 ? 5 : 0, Math.round((k.totalTokens / 50000) * 100)));

        return `
          <div class="ai-key-card ${isCooling ? 'status-cooling' : ''}">
            <div class="key-card-header">
              <div class="key-card-name">
                <span>🔑 ${k.key}</span>
                <span class="key-card-masked">(${k.masked})</span>
              </div>
              ${badgeHtml}
            </div>

            <!-- Token Bar -->
            <div class="key-metric-row">
              <div class="key-metric-label">
                <span>💎 Tokens đã dùng:</span>
                <strong style="color: #38bdf8; font-family: var(--font-mono);">${k.totalTokens.toLocaleString()} tokens</strong>
              </div>
              <div class="key-progress-track" title="Tokens: ${k.totalTokens.toLocaleString()} (Prompt: ${k.promptTokens.toLocaleString()}, Output: ${k.candidatesTokens.toLocaleString()})">
                <div class="key-progress-fill-token" style="width: ${tokPct}%;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.65rem; color: #64748b; font-family: var(--font-mono);">
                <span>Input: ${k.promptTokens.toLocaleString()}</span>
                <span>Output: ${k.candidatesTokens.toLocaleString()}</span>
              </div>
            </div>

            <!-- Daily Requests Quota Bar -->
            <div class="key-metric-row" style="margin-top: 0.15rem;">
              <div class="key-metric-label">
                <span>📈 Request hôm nay:</span>
                <span style="font-family: var(--font-mono);">${k.requestsToday} / ${k.dailyLimit} <span style="color: #64748b;">(Còn ${k.remainingRequests})</span></span>
              </div>
              <div class="key-progress-track" title="Đã dùng ${reqPct}% giới hạn ngày (1,500 req)">
                <div class="key-progress-fill-req" style="width: ${reqPct}%;"></div>
              </div>
            </div>

            <div class="key-card-footer">
              <span>⚡ Tốc độ: <strong style="color: #cbd5e1;">${k.rpm} / ${k.rpmLimit}</strong> req/phút</span>
              <span>⏱️ ${k.lastUsedStr}</span>
            </div>
          </div>
        `;
      }).join('');
    } catch (_) {}
  }

  function openAIPanel() {
    const panel = document.getElementById('aiTutorPanel');
    const fab = document.getElementById('aiTutorFab');
    panel.classList.add('open');
    fab.classList.add('panel-open');
    document.body.classList.add('ai-panel-open');
    setTimeout(() => document.getElementById('aiChatInput').focus(), 350);
  }

  function closeAIPanel() {
    const panel = document.getElementById('aiTutorPanel');
    const fab = document.getElementById('aiTutorFab');
    panel.classList.remove('open');
    fab.classList.remove('panel-open');
    document.body.classList.remove('ai-panel-open');
  }

  // Call this from lesson hub when a day is opened
  window.setAILessonContext = function(day, title, topic) {
    aiState.lessonContext = { day, title, topic };
    updateContextBadge();
  };

  // Ask AI about a specific item in daily lessons (Tracing, Trap, Practice, Assessment, Flashcard)
  window.askAIAboutItem = function(type, p1, p2) {
    const dayNumber = activeLessonDay || 1;
    const lesson = (appData.dailyLessons && appData.dailyLessons[dayNumber.toString()]) || null;
    if (!lesson) {
      showToast('Vui lòng mở bài học trước khi hỏi AI', 'warning');
      return;
    }

    let displayTitle = '';
    let prompt = '';
    let quickFollowUps = [];

    if (type === 'tracing') {
      const ct = (lesson.codeTracing || [])[p1];
      if (!ct) return;
      displayTitle = `Bài Tracing #${p1 + 1}: ${ct.question}`;
      prompt = `Tôi đang làm bài Trace The Code (Ngày ${dayNumber}: ${lesson.title}):
❓ Câu hỏi: ${ct.question}
💻 Đoạn code:
\`\`\`java
${ct.code}
\`\`\`
📋 Các phương án lựa chọn:
${ct.options.map((opt, i) => `${i === ct.correctIndex ? '👉 [ĐÁP ÁN ĐÚNG] ' : '- '}${opt}`).join('\n')}

📝 Giải thích hiện tại: ${ct.explanation}

Hãy giúp tôi:
1. Phân tích chi tiết từng dòng code theo cơ chế JVM (Bộ nhớ Stack & Heap, Reference và Value, cách Compiler diễn giải cú pháp).
2. Tại sao các đáp án khác lại sai hoặc gây hiểu lầm cho người học?
3. Nếu đi thi gặp dạng bài mảng/cú pháp này thì có những biến thể cạm bẫy nào khác cần cảnh giác?
4. Đưa ra lời khuyên cốt lõi để tôi có thể tự tin trả lời bất kỳ câu hỏi nào bạn sẽ hỏi thêm sau đây.`;

      quickFollowUps = [
        '🔍 Tại sao không bị Compile Error?',
        '🧠 Vẽ sơ đồ bộ nhớ Heap & Stack câu này',
        '⚠️ Cho ví dụ biến thể bẫy tương tự',
        '💡 Thuộc tính .length hoạt động ra sao?'
      ];
    } else if (type === 'assessment') {
      const qItem = (lesson.dailyAssessment || [])[p1];
      if (!qItem) return;
      displayTitle = `Câu trắc nghiệm #${p1 + 1}: ${qItem.q.slice(0, 45)}...`;
      prompt = `Tôi đang làm câu trắc nghiệm Daily Assessment (Ngày ${dayNumber}: ${lesson.title}):
❓ Câu hỏi: ${qItem.q}
📋 Các phương án lựa chọn:
${qItem.options.map((opt, i) => `${i === qItem.correct ? '👉 [ĐÁP ÁN ĐÚNG] ' : '- '}${opt}`).join('\n')}

📝 Giải thích gốc: ${qItem.exp}

Hãy phân tích chi tiết:
1. Bản chất lý thuyết trong Java / SCJP đằng sau câu hỏi này.
2. Tại sao đáp án trên lại đúng, và mổ xẻ từng đáp án sai để tôi hiểu tận gốc không bao giờ chọn nhầm.
3. Mẹo phản xạ nhanh để nhận diện câu này trong phòng thi.`;

      quickFollowUps = [
        '❌ Phân tích chi tiết tại sao các phương án khác sai',
        '📖 Quy tắc SCJP chuẩn áp dụng ở đây',
        '⚡ Mẹo loại trừ đáp án nhanh trong 10 giây'
      ];
    } else if (type === 'trap') {
      const trap = (lesson.examTraps || [])[p1];
      if (!trap) return;
      displayTitle = `Cạm bẫy thi: ${trap.trap.slice(0, 40)}...`;
      prompt = `Tôi đang tìm hiểu cạm bẫy thi kinh điển (Ngày ${dayNumber}: ${lesson.title}):
⚠️ Cạm bẫy: ${trap.trap}
❌ Lý do dễ mất điểm: ${trap.whyPeopleWrong}
🧠 Tư duy sai phổ biến: ${trap.wrongThinking}
✅ Quy tắc chuẩn Java: ${trap.correctRule}
${trap.code ? `💻 Code minh họa:\n\`\`\`java\n${trap.code}\n\`\`\`` : ''}

Hãy giải thích sâu hơn:
1. Cơ chế nội tại của JVM / Java Language Specification quy định điều này ra sao?
2. Cho thêm 2 ví dụ biến thể cạm bẫy tinh vi hơn hay gặp trong TestKing.
3. Cách phản xạ 3 giây khi gặp câu hỏi dạng này trong bài thi.`;

      quickFollowUps = [
        '🔥 Cho thêm 2 ví dụ bẫy tương tự',
        '⚡ Cách nhận diện bẫy này trong 3 giây',
        '💻 Viết code test thử các trường hợp ngoại lệ'
      ];
    } else if (type === 'practice') {
      const levelItem = (lesson.practiceExercises || [])[p1];
      if (!levelItem) return;
      const qObj = (levelItem.questions || [])[p2];
      if (!qObj) return;
      displayTitle = `Bài tập ${levelItem.level} #${p2 + 1}`;
      prompt = `Tôi đang làm bài tập thực hành ${levelItem.level} (Ngày ${dayNumber}: ${lesson.title}):
❓ Đề bài: ${qObj.q}
💡 Lời giải tham khảo: ${qObj.ans}

Hãy hướng dẫn tôi:
1. Phương pháp tư duy từng bước để giải bài này từ đầu.
2. Phân tích chi tiết tại sao lại làm như vậy.
3. Các trường hợp biên (edge cases) hoặc lỗi phổ biến cần chú ý.`;

      quickFollowUps = [
        '🧩 Hướng dẫn từng bước tư duy',
        '⚠️ Các trường hợp biên (edge cases)',
        '💡 Thử thách nâng cao cho bài này'
      ];
    } else if (type === 'flashcard') {
      const fc = (lesson.dailyFlashcards || [])[p1];
      if (!fc) return;
      displayTitle = `Flashcard #${p1 + 1}: ${fc.q.slice(0, 40)}...`;
      prompt = `Tôi muốn đào sâu Flashcard (Ngày ${dayNumber}: ${lesson.title}):
❓ Khái niệm: ${fc.q}
✅ Đáp án: ${fc.a}
⚠️ Cạm bẫy: ${fc.trap}

Hãy giải thích chi tiết bản chất, kèm ví dụ code minh họa cụ thể và cách ghi nhớ lâu!`;

      quickFollowUps = [
        '💻 Cho ví dụ code minh họa',
        '⚠️ Phân tích sâu cạm bẫy',
        '📝 Câu thần chú 1 dòng để nhớ lâu'
      ];
    }

    openAIPanel();
    sendAIPerQuestionMessage(displayTitle, prompt, quickFollowUps);
  };

  // Ask AI about a Tab 3 Quiz question
  window.askAIQuizQuestion = function(quizId) {
    const q = (appData.quizzes || []).find(item => item.id === quizId);
    if (!q) {
      showToast('Không tìm thấy dữ liệu câu hỏi', 'warning');
      return;
    }

    const displayTitle = `Câu hỏi TestKing [${q.type}]: ${q.question.slice(0, 45)}...`;
    const prompt = `Tôi đang làm câu hỏi trắc nghiệm TestKing/Audit:
Chuyên đề: ${q.type} • ${q.chapter}
❓ Câu hỏi: ${q.question}
${q.code ? `💻 Đoạn code:\n\`\`\`java\n${q.code}\n\`\`\`` : ''}
📋 Các lựa chọn:
${q.options.map((opt, idx) => `${idx === q.correctIndex ? '👉 [ĐÁP ÁN ĐÚNG] ' : '- '}${String.fromCharCode(65 + idx)}. ${opt}`).join('\n')}

📝 Giải thích gốc: ${q.explanation}
⚠️ Cạm bẫy: ${q.trap}

Hãy phân tích chi tiết:
1. Tại sao đáp án trên lại đúng và mổ xẻ chi tiết từng phương án sai.
2. Cơ chế JVM / bản chất ngôn ngữ hoạt động ở đây là gì?
3. Các cạm bẫy đề thi hay lừa thí sinh ở dạng câu này.`;

    const quickFollowUps = [
      '❌ Phân tích chi tiết tại sao các phương án khác sai',
      '🧠 Cơ chế JVM / Memory ở câu này',
      '⚠️ Cạm bẫy phổ biến nhất ở câu này',
      '💡 Cho tôi 1 câu hỏi tương tự để test lại'
    ];

    openAIPanel();
    sendAIPerQuestionMessage(displayTitle, prompt, quickFollowUps);
  };

  async function sendAIPerQuestionMessage(displayTitle, prompt, quickFollowUps = []) {
    if (aiState.isThinking) {
      showToast('AI đang phân tích câu hỏi trước đó, vui lòng đợi một chút...', 'info');
      return;
    }

    // Append visually pleasing user question card in chat
    appendChatQuestionContextMsg(displayTitle);

    // Push full prompt into history for Gemini
    aiState.history.push({ role: 'user', parts: [{ text: prompt }] });

    setAIThinking(true);
    try {
      const reply = await callGeminiAPI();
      aiState.history.push({ role: 'model', parts: [{ text: reply }] });
      appendChatMsg('ai', reply, quickFollowUps);
    } catch (err) {
      const errEl = document.createElement('div');
      errEl.className = 'chat-error-msg';
      errEl.textContent = `⚠ ${err.message || 'Không thể kết nối. Thử lại sau.'}`;
      document.getElementById('aiMessagesArea').appendChild(errEl);
      scrollChatBottom();
    } finally {
      setAIThinking(false);
      fetchAndRenderKeyStatus();
    }
  }

  function appendChatQuestionContextMsg(displayTitle) {
    const area = document.getElementById('aiMessagesArea');
    if (!area) return;

    const welcome = area.querySelector('.ai-welcome-msg');
    if (welcome) welcome.remove();

    const div = document.createElement('div');
    div.className = 'chat-msg user-msg';
    div.innerHTML = `
      <div>
        <div class="chat-question-badge">
          <span class="badge-icon">🎯</span>
          <div>
            <div class="badge-title">Hỏi riêng về: <strong>${escapeHtml(displayTitle)}</strong></div>
            <div class="badge-sub">Đang nhờ AI phân tích cặn kẽ bản chất & cơ chế JVM...</div>
          </div>
        </div>
        <div class="chat-msg-time">${new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</div>
      </div>
    `;
    area.appendChild(div);
    scrollChatBottom();
  }

  function updateContextBadge() {
    const badge = document.getElementById('aiContextBadge');
    const label = document.getElementById('aiContextLabel');
    if (!badge || !label) return;
    if (aiState.lessonContext) {
      label.textContent = `Đang học: Ngày ${aiState.lessonContext.day} - ${aiState.lessonContext.title}`;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }

  function enableChatInput() {
    const chatInput = document.getElementById('aiChatInput');
    const sendBtn = document.getElementById('aiSendBtn');
    const setupBanner = document.getElementById('aiSetupBanner');
    if (chatInput) chatInput.disabled = false;
    if (sendBtn) sendBtn.disabled = false;
    if (setupBanner) setupBanner.style.display = 'none';
    updateStatusDot('online', `${aiState.model.replace('models/','').replace('gemini-','Gemini ')} · Sẵn sàng`);
  }

  function updateStatusDot(state, text) {
    const dot = document.querySelector('#aiStatusDot .status-dot');
    const label = document.getElementById('aiModelStatusLabel');
    if (dot) {
      dot.className = `status-dot ${state}`;
    }
    if (label) {
      label.textContent = text;
    }
  }

  function renderWelcomeMessage() {
    const area = document.getElementById('aiMessagesArea');
    if (!area) return;
    area.innerHTML = `
      <div class="ai-welcome-msg">
        <span class="welcome-emoji">🤖</span>
        <h4>Xin chào! Tôi là Java AI Tutor</h4>
        <p>Tôi có thể giải thích sâu bất kỳ khái niệm nào trong lộ trình 8 tuần:<br>
        Java Core · SQL · JavaWeb · TestKing traps · Comment Code FPT</p>
        <p style="color:#34d399;margin-top:0.5rem">✓ Sẵn sàng — 5 API key tự động xoay vòng tại server</p>
      </div>
    `;
  }

  async function sendAIMessage() {
    const input = document.getElementById('aiChatInput');
    const msg = input ? input.value.trim() : '';
    if (!msg || aiState.isThinking) return;

    input.value = '';
    appendChatMsg('user', msg);
    aiState.history.push({ role: 'user', parts: [{ text: msg }] });

    setAIThinking(true);
    try {
      const reply = await callGeminiAPI();
      aiState.history.push({ role: 'model', parts: [{ text: reply }] });
      appendChatMsg('ai', reply);
    } catch (err) {
      const errEl = document.createElement('div');
      errEl.className = 'chat-error-msg';
      errEl.textContent = `⚠ ${err.message || 'Không thể kết nối. Kiểm tra kết nối mạng và thử lại.'}`;
      document.getElementById('aiMessagesArea').appendChild(errEl);
      scrollChatBottom();
    } finally {
      setAIThinking(false);
      fetchAndRenderKeyStatus();
    }
  }

  async function callGeminiAPI() {
    // Use server-side proxy — keys are managed by server.js, never exposed to browser
    const recentHistory = aiState.history.slice(-20);

    const payload = {
      model: aiState.model,   // server reads this and removes it before forwarding
      system_instruction: { parts: [{ text: buildSystemPrompt() }] },
      contents: recentHistory,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1500,
        topP: 0.9
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' }
      ]
    };

    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      const errMsg = data?.error?.message || `Server lỗi HTTP ${response.status}`;
      throw new Error(errMsg);
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) throw new Error('AI không trả về nội dung. Thử lại.');
    return text;
  }

  function appendChatMsg(role, text, quickFollowUps = []) {
    const area = document.getElementById('aiMessagesArea');
    if (!area) return;

    // Remove welcome message if present
    const welcome = area.querySelector('.ai-welcome-msg');
    if (welcome) welcome.remove();

    const now = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    const div = document.createElement('div');
    div.className = `chat-msg ${role === 'user' ? 'user-msg' : 'ai-msg'}`;

    const avatarHtml = role === 'user'
      ? ''
      : `<div class="ai-avatar-sm">🤖</div>`;

    let followUpHtml = '';
    if (role === 'ai' && Array.isArray(quickFollowUps) && quickFollowUps.length > 0) {
      followUpHtml = `
        <div class="ai-followup-container">
          <div class="ai-followup-label">💡 Gợi ý câu hỏi đào sâu:</div>
          <div class="ai-followup-chips">
            ${quickFollowUps.map(chip => `<button type="button" class="ai-followup-chip" data-query="${escapeHtml(chip)}">${escapeHtml(chip)}</button>`).join('')}
          </div>
        </div>
      `;
    }

    div.innerHTML = `
      ${avatarHtml}
      <div>
        <div class="chat-bubble">
          ${role === 'ai' ? renderAIChatMarkdown(text) : escapeHtml(text)}
          ${followUpHtml}
        </div>
        <div class="chat-msg-time">${now}</div>
      </div>
    `;

    // Attach click listeners to follow-up chips
    div.querySelectorAll('.ai-followup-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.dataset.query;
        const input = document.getElementById('aiChatInput');
        if (input) input.value = query;
        sendAIMessage();
      });
    });

    area.appendChild(div);
    scrollChatBottom();
  }

  function renderAIChatMarkdown(text) {
    let html = escapeHtml(text);

    // Code blocks (```lang ... ```)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre><code>${code.trim()}</code></pre>`;
    });
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Headers
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^# (.+)$/gm, '<h4>$1</h4>');
    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Italic (used for emphasis)
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Unordered lists
    html = html.replace(/^[•\-\*] (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>');
    // Numbered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    // HR
    html = html.replace(/^---$/gm, '<hr>');
    // Line breaks
    html = html.replace(/\n\n/g, '</p><p>');
    html = html.replace(/\n/g, '<br>');
    html = `<p>${html}</p>`;
    // Clean up empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(/<p>(<h4>|<pre>|<ul>|<hr>)/g, '$1');
    html = html.replace(/(<\/h4>|<\/pre>|<\/ul>|<\/hr>)<\/p>/g, '$1');
    return html;
  }

  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function setAIThinking(thinking) {
    aiState.isThinking = thinking;
    const indicator = document.getElementById('aiTypingIndicator');
    const sendBtn = document.getElementById('aiSendBtn');
    const chatInput = document.getElementById('aiChatInput');
    if (indicator) indicator.style.display = thinking ? 'flex' : 'none';
    if (sendBtn) sendBtn.disabled = thinking;
    if (chatInput) chatInput.disabled = thinking;
    updateStatusDot(thinking ? 'thinking' : 'online', thinking ? 'Đang suy nghĩ...' : 'Gemini · Sẵn sàng');
    if (thinking) scrollChatBottom();
  }

  function scrollChatBottom() {
    const area = document.getElementById('aiMessagesArea');
    if (area) setTimeout(() => { area.scrollTop = area.scrollHeight; }, 50);
  }

  // ==================== BEHAVIORAL & COGNITIVE PROFILER MODULE ====================
  const DEFAULT_BEHAVIOR_PROFILE = {
    totalTests: 1,
    avgSpeed: 2.1,
    fastFails: 1,
    fastPasses: 0,
    slowFails: 0,
    methodicalPasses: 0,
    rageRetakes: 1,
    confidenceRate: 88,
    accuracyRate: 30,
    currentArchetype: '⚡ Chiến Thần Tốc Độ: Tự Tin Nhưng Ăn Bẫy',
    quote: 'Lướt đề 2-3 giây là bấm vì thấy từ khóa quen mắt. Tự tin 100% nhưng kết quả 0/10 vì ăn trọn bẫy TestKing!',
    badge: '⚡ Tự tin nhưng ẩu',
    latestAiDiagnosis: '',
    latestAiDiagnosisTime: ''
  };

  const DEFAULT_BEHAVIOR_LOGS = [
    {
      id: 'log_init_1',
      timeStr: '09:38:29',
      type: 'overconfident',
      title: '⚡ Daily Assessment Ngày 1: Nộp 10 câu trong 21s (2.1s/câu) ➔ 0/10 (0%)',
      detail: 'Bệnh "Tự tin nhưng ẩu": Làm bài siêu nhanh theo phản xạ trực giác (System 1). Thấy từ khóa quen là chọn ngay mà chưa kịp kiểm tra bẫy cú pháp Java!',
      category: 'syntax'
    },
    {
      id: 'log_init_2',
      timeStr: '09:38:35',
      type: 'rage-retake',
      title: '🔄 Bấm Thi Lại sau 6 giây',
      detail: 'Hành vi nôn nóng: Vừa thấy điểm chưa đạt chuẩn là bấm làm lại ngay lập tức mà chưa mở xem giải thích nguyên nhân sai của các câu!'
    }
  ];

  function getLearnerProfile() {
    if (!state.learnerProfile || Object.keys(state.learnerProfile).length === 0) {
      state.learnerProfile = { ...DEFAULT_BEHAVIOR_PROFILE };
    }
    return state.learnerProfile;
  }

  function getBehaviorLogs() {
    if (!Array.isArray(state.behaviorLogs) || state.behaviorLogs.length === 0) {
      state.behaviorLogs = [...DEFAULT_BEHAVIOR_LOGS];
    }
    return state.behaviorLogs;
  }

  function recordBehaviorEvent(event) {
    const logs = getBehaviorLogs();
    const now = new Date();
    const timeStr = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const newLog = {
      id: 'log_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      timeStr,
      type: event.type || 'normal',
      title: event.title || 'Hành vi làm bài',
      detail: event.detail || '',
      category: event.category || 'general'
    };

    logs.unshift(newLog);
    if (logs.length > 50) logs.pop();

    state.behaviorLogs = logs;
    localStorage.setItem(STORAGE_KEYS.BEHAVIOR_LOGS, JSON.stringify(logs));

    // Update Learner Profile
    const profile = getLearnerProfile();
    if (event.type === 'overconfident') profile.fastFails = (profile.fastFails || 0) + 1;
    if (event.type === 'speed-master') profile.fastPasses = (profile.fastPasses || 0) + 1;
    if (event.type === 'hesitant-fail') profile.slowFails = (profile.slowFails || 0) + 1;
    if (event.type === 'methodical-pass') profile.methodicalPasses = (profile.methodicalPasses || 0) + 1;
    if (event.type === 'rage-retake') profile.rageRetakes = (profile.rageRetakes || 0) + 1;
    if (event.avgSec) {
      profile.avgSpeed = profile.avgSpeed ? parseFloat(((profile.avgSpeed + event.avgSec) / 2).toFixed(1)) : event.avgSec;
    }
    if (event.isTestSubmit) {
      profile.totalTests = (profile.totalTests || 0) + 1;
    }

    // Determine Archetype
    const fastFails = profile.fastFails || 0;
    const fastPasses = profile.fastPasses || 0;
    const methodical = profile.methodicalPasses || 0;
    const hesitant = profile.slowFails || 0;

    if (fastFails >= fastPasses && fastFails > 0) {
      profile.currentArchetype = '⚡ Chiến Thần Tốc Độ: Tự Tin Nhưng Ăn Bẫy';
      profile.quote = 'Lướt đề 2-3 giây là bấm vì thấy từ khóa quen mắt. Tự tin 100% nhưng kết quả thấp vì ăn trọn bẫy TestKing!';
      profile.badge = '⚡ Tự tin nhưng ẩu';
      profile.confidenceRate = 88;
      profile.accuracyRate = Math.min(65, Math.max(10, Math.round((fastPasses / (fastFails + fastPasses + 0.1)) * 100)));
    } else if (fastPasses > fastFails) {
      profile.currentArchetype = '🚀 Phản Xạ Thần Tốc (Mastery Instinct)';
      profile.quote = 'Làm bài nhanh như chớp và độ chính xác cực cao. Cốt lõi phản xạ đã thành bản năng!';
      profile.badge = '🚀 Thần tốc & chuẩn';
      profile.confidenceRate = 92;
      profile.accuracyRate = 90;
    } else if (hesitant > 0 && hesitant >= methodical) {
      profile.currentArchetype = '🐢 Kẻ Do Dự Thiếu Tự Tin (Hesitant Overthinker)';
      profile.quote = 'Mất nhiều thời gian suy nghĩ nhưng vẫn phân vân giữa 2 đáp án và chọn nhầm phương án lừa.';
      profile.badge = '⏳ Do dự & cấn kiến thức';
      profile.confidenceRate = 45;
      profile.accuracyRate = 40;
    } else {
      profile.currentArchetype = '🎯 Kỹ Sư Điềm Tĩnh & Chuẩn Xác (Methodical Engineer)';
      profile.quote = 'Đọc kỹ từng dòng, kiểm tra cú pháp trước khi tính kết quả. Tỷ lệ vượt qua bẫy rất vững vàng.';
      profile.badge = '🎯 Điềm tĩnh & chuẩn';
      profile.confidenceRate = 85;
      profile.accuracyRate = 85;
    }

    state.learnerProfile = profile;
    localStorage.setItem(STORAGE_KEYS.LEARNER_PROFILE, JSON.stringify(profile));

    updateHeaderProfileBadge();
    return newLog;
  }

  function updateHeaderProfileBadge() {
    const el = document.getElementById('headerProfileBadge');
    if (!el) return;
    const profile = getLearnerProfile();
    el.textContent = profile.badge || '⚡ Tự tin nhưng ẩu';
  }

  function renderBehaviorProfilerModal() {
    const profile = getLearnerProfile();
    const logs = getBehaviorLogs();

    const titleEl = document.getElementById('profilerArchetypeTitle');
    const quoteEl = document.getElementById('profilerArchetypeQuote');
    const barConfFill = document.getElementById('barConfidenceFill');
    const barConfVal = document.getElementById('barConfidenceVal');
    const barAccFill = document.getElementById('barAccuracyFill');
    const barAccVal = document.getElementById('barAccuracyVal');
    const alertPill = document.getElementById('dkAlertPill');

    if (titleEl) titleEl.textContent = profile.currentArchetype;
    if (quoteEl) quoteEl.textContent = `"${profile.quote}"`;
    if (barConfFill) barConfFill.style.width = `${profile.confidenceRate || 85}%`;
    if (barConfVal) barConfVal.textContent = `${profile.confidenceRate || 85}%`;
    if (barAccFill) barAccFill.style.width = `${profile.accuracyRate || 30}%`;
    if (barAccVal) barAccVal.textContent = `${profile.accuracyRate || 30}%`;

    const gap = (profile.confidenceRate || 85) - (profile.accuracyRate || 30);
    if (alertPill) {
      if (gap > 20) {
        alertPill.innerHTML = `<span>🚨</span><div><strong>Ảo tưởng quen thuộc (Overconfidence Gap: +${gap}%):</strong> Bạn có xu hướng nhận diện từ khóa bề mặt (Surface Familiarity) rồi chọn ngay thay vì suy luận ngữ nghĩa máy ảo JVM!</div>`;
        alertPill.style.display = 'flex';
      } else {
        alertPill.innerHTML = `<span>✓</span><div><strong>Cân bằng tốt:</strong> Nhận thức năng lực phản ánh sát với kết quả thi thực tế.</div>`;
        alertPill.style.display = 'flex';
      }
    }

    // 4 Metrics
    const mSpeed = document.getElementById('metricAvgSpeed');
    const mSpeedDesc = document.getElementById('metricSpeedDesc');
    const mFastFail = document.getElementById('metricFastFailRate');
    const mTrap = document.getElementById('metricTrapRate');
    const mRage = document.getElementById('metricRageRetakes');

    const avgSpeed = profile.avgSpeed || 3.5;
    if (mSpeed) mSpeed.textContent = `${avgSpeed}s`;
    if (mSpeedDesc) mSpeedDesc.textContent = avgSpeed < 8 ? '⚡ Rất nhanh (Nguy cơ dính bẫy cao)' : (avgSpeed < 25 ? '🎯 Tốc độ lý tưởng' : '⏳ Chậm, do dự');

    const totalT = Math.max(1, profile.totalTests || 1);
    const fastFailPct = Math.round(((profile.fastFails || 1) / totalT) * 100);
    if (mFastFail) mFastFail.textContent = `${Math.min(100, Math.max(0, fastFailPct))}%`;
    if (mTrap) mTrap.textContent = `${profile.accuracyRate < 70 ? '80%' : '25%'}`;
    if (mRage) mRage.textContent = `${profile.rageRetakes || 1} lần`;

    // Render Telemetry logs
    const logList = document.getElementById('telemetryLogsList');
    if (logList) {
      logList.innerHTML = logs.map(l => `
        <div class="telemetry-log-item ${l.type}">
          <span class="telemetry-log-time">[${l.timeStr}]</span>
          <strong>${escapeHtml(l.title)}</strong><br>
          <span style="font-size: 0.74rem; color: #cbd5e1;">${escapeHtml(l.detail)}</span>
        </div>
      `).join('');
    }

    // Render existing diagnosis report if available
    const diagBox = document.getElementById('diagnosisOutputBox');
    if (diagBox) {
      if (profile.latestAiDiagnosis) {
        diagBox.style.display = 'block';
        diagBox.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <span style="font-size: 0.78rem; color: #34d399; font-weight: 700;">✓ Bản chẩn đoán lúc: ${profile.latestAiDiagnosisTime || 'Gần đây'}</span>
            <button type="button" class="btn btn-primary btn-xs" onclick="window.chatWithAIAboutMindset()" style="font-size: 0.75rem;">
              💬 Chat sâu thêm với Bác Sĩ AI →
            </button>
          </div>
          ${renderAIChatMarkdown(profile.latestAiDiagnosis)}
        `;
      } else {
        diagBox.style.display = 'none';
      }
    }
  }

  function openBehaviorProfiler() {
    const modal = document.getElementById('behaviorProfilerModal');
    if (!modal) return;
    renderBehaviorProfilerModal();
    modal.style.display = 'flex';
  }

  function closeBehaviorProfiler() {
    const modal = document.getElementById('behaviorProfilerModal');
    if (modal) modal.style.display = 'none';
  }

  async function runAIBrainDiagnosis() {
    const btn = document.getElementById('btnRunAIDiagnosis');
    const outputBox = document.getElementById('diagnosisOutputBox');
    if (!btn || !outputBox) return;

    btn.disabled = true;
    btn.innerHTML = `<span class="ai-spin-icon">⚡</span> Đang phân tích tâm lý...`;
    outputBox.style.display = 'block';
    outputBox.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem; color: #c084fc;">
        <span class="ai-spin-icon" style="font-size: 1.25rem;">🧠</span>
        <div>
          <strong>Bác Sĩ AI đang đọc Telemetry Logs của bạn...</strong>
          <div style="font-size: 0.8rem; color: #94a3b8;">Phân tích cơ chế não bộ, bóc mẽ điểm mù và kê toa kỷ luật thép.</div>
        </div>
      </div>
    `;

    const profile = getLearnerProfile();
    const logs = getBehaviorLogs();
    const logsSample = logs.slice(0, 5).map(l => `- [${l.timeStr}] ${l.title} (${l.detail})`).join('\n');
    const errorsSample = (state.userErrors || []).slice(0, 5).map(e => `- ${e.title}: ${e.desc}`).join('\n') || '(Chưa lưu câu lỗi nào)';

    const prompt = `Bạn là Chuyên gia Tâm lý Học Lập trình & Giám khảo FPT Software cấp cao.
Học viên này gửi dữ liệu telemetry về thói quen làm bài:

=== DỮ LIỆU THỰC TẾ CỦA HỌC VIÊN ===
- Archetype hiện tại: ${profile.currentArchetype}
- Tốc độ làm bài trung bình: ${profile.avgSpeed || 3.5} giây/câu (Khuyến nghị chuẩn là 15-25s/câu)
- Tỷ lệ làm bài siêu nhanh mà bị SAI (Tự tin nhưng ẩu): ${profile.fastFails || 1} lần
- Số lần bấm thi lại ngay lập tức (chưa đọc giải thích): ${profile.rageRetakes || 1} lần
- Độ tự tin cảm tính: ${profile.confidenceRate || 85}% vs Độ chuẩn xác: ${profile.accuracyRate || 30}%
- Các hành vi gần đây:
${logsSample}
- Các lỗi sai hay mắc trong Error Book:
${errorsSample}

=== CẢM NGHĨ CỦA HỌC VIÊN ===
"Tôi làm rất nhanh nhưng sai là kiểu tự tin nhưng sai :))))"

=== YÊU CẦU BẮT BỆNH & KÊ TOA ===
Hãy viết một bài chẩn đoán tâm lý và kê toa rèn luyện cho bạn ấy theo 4 phần mạch lạc, sắc sảo, hóm hỉnh và mang tính xây dựng cao:

### 1. 🎭 BẮT ĐÚNG BỆNH TÂM LÝ: TẠI SAO BẠN "TỰ TIN NHƯNG SAI"?
- Giải thích cơ chế não bộ: Hiện tượng **Nhận diện bề mặt (Surface Recognition) vs Hiểu ngữ nghĩa (Semantic Understanding)**.
- Não bộ lười biếng kích hoạt **System 1 (Phản xạ bản năng)** khi thấy từ khóa quen mắt (như sizeof, biến nguyên, vòng lặp) ➜ tạo cảm giác "câu này dễ quá, mình biết rồi", nhưng Java là ngôn ngữ cực kỳ chặt chẽ của **System 2 (Tư duy logic)**.
- Ảo tưởng năng lực Dunning-Kruger trong đề thi Java Core.

### 2. 🔍 BÓC MẼ 3 ĐIỂM MÙ KHIẾN BẠN SẬP BẪY
- Phân tích 3 cạm bẫy mà người làm nhanh hay bị lừa nhất (ví dụ: bẫy từ khóa C++ lọt vào Java; bẫy biến local chưa gán giá trị; bẫy toán tử ++ và ép kiểu byte/int).

### 3. 💊 TOA THUỐC "HÃM PHANH" (3 KỶ LUẬT THÉP)
- **Quy tắc 10 Giây Bắt Buộc (10-Second Freeze Rule)**: Tuyệt đối không được bấm chọn đáp án trước giây thứ 10.
- **Kỹ thuật Compiler Simulator**: Luôn tự hỏi: *"Dòng này có bị Compile Error không?"* trước khi tính toán output.
- **Kỹ thuật Devil's Advocate**: Tự hỏi: *"Nếu người ra đề muốn lừa mình ở câu này, họ sẽ đặt bẫy ở chữ nào?"*

### 4. 🏆 THỬ THÁCH RÈN LUYỆN HÔM NAY
- Giao 1 bài tập kỷ luật cụ thể để người học làm lại ngay lập tức (ví dụ: Mở lại Daily Assessment, mỗi câu dừng 15s và đạt điểm tuyệt đối 10/10).`;

    try {
      const payload = {
        model: aiState.model || 'gemini-3.6-flash',
        system_instruction: { parts: [{ text: buildSystemPrompt() }] },
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 1800 }
      };

      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error?.message || `Lỗi HTTP ${res.status}`);

      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!reply) throw new Error('Không nhận được phản hồi từ AI');

      profile.latestAiDiagnosis = reply;
      profile.latestAiDiagnosisTime = new Date().toLocaleString('vi-VN');
      state.learnerProfile = profile;
      localStorage.setItem(STORAGE_KEYS.LEARNER_PROFILE, JSON.stringify(profile));

      outputBox.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-size: 0.78rem; color: #34d399; font-weight: 700;">✓ Chẩn đoán AI hoàn tất lúc ${profile.latestAiDiagnosisTime}</span>
          <button type="button" class="btn btn-primary btn-xs" onclick="window.chatWithAIAboutMindset()" style="font-size: 0.75rem;">
            💬 Chat sâu thêm với Bác Sĩ AI →
          </button>
        </div>
        ${renderAIChatMarkdown(reply)}
      `;
      showToast('Đã hoàn tất bắt bệnh tâm lý làm bài!', 'success');
    } catch (err) {
      outputBox.innerHTML = `
        <div style="color: #fb7185; padding: 0.75rem; background: rgba(244,63,94,0.1); border-radius: 4px;">
          ⚠️ Không thể kết nối tới AI: ${escapeHtml(err.message)}
        </div>
      `;
    } finally {
      btn.disabled = false;
      btn.innerHTML = `✨ Nhờ Gemini Bắt Bệnh &amp; Kê Toa`;
    }
  }

  window.chatWithAIAboutMindset = function() {
    const modal = document.getElementById('behaviorProfilerModal');
    if (modal) modal.style.display = 'none';
    openAIPanel();
    setTimeout(() => {
      const input = document.getElementById('aiChatInput');
      if (input) {
        input.value = 'Chào AI Tutor! Tôi vừa xem chẩn đoán về thói quen "làm rất nhanh nhưng tự tin sai" của mình. Bạn có thể hướng dẫn chi tiết cách rèn phản xạ cẩn thận cho ngày hôm nay không?';
        input.focus();
      }
    }, 400);
  };

  function initBehaviorProfilerModule() {
    const openBtn = document.getElementById('btnOpenBehaviorProfiler');
    const closeBtn = document.getElementById('btnCloseProfilerModal');
    const closeFooterBtn = document.getElementById('btnCloseProfilerFooterBtn');
    const clearBtn = document.getElementById('btnClearBehaviorLogs');
    const diagBtn = document.getElementById('btnRunAIDiagnosis');
    const modal = document.getElementById('behaviorProfilerModal');

    if (openBtn) openBtn.addEventListener('click', openBehaviorProfiler);
    if (closeBtn) closeBtn.addEventListener('click', closeBehaviorProfiler);
    if (closeFooterBtn) closeFooterBtn.addEventListener('click', closeBehaviorProfiler);

    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeBehaviorProfiler();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn xóa lịch sử logs hành vi?')) {
          state.behaviorLogs = [];
          localStorage.removeItem(STORAGE_KEYS.BEHAVIOR_LOGS);
          renderBehaviorProfilerModal();
          showToast('Đã làm sạch logs hành vi.', 'info');
        }
      });
    }

    if (diagBtn) {
      diagBtn.addEventListener('click', runAIBrainDiagnosis);
    }

    updateHeaderProfileBadge();
  }

  // Expose to global window
  window.openBehaviorProfiler = openBehaviorProfiler;
  window.recordBehaviorEvent = recordBehaviorEvent;

  // ==================== SRS (SPACED REPETITION SYSTEM) ====================
  // SM-2 Algorithm: updates interval, ease factor, next review date per card
  function updateSRSCard(cardId, rating) {
    const now = Date.now();
    let card = state.srsData[cardId] || { interval: 1, easeFactor: 2.5, nextReview: now, reps: 0 };

    // quality: 0=hard, 1=good, 2=mastered
    const q = rating === 'hard' ? 0 : rating === 'good' ? 1 : 2;

    if (q === 0) {
      card.interval = 1;
      card.reps = 0;
    } else {
      if (card.reps === 0) card.interval = 1;
      else if (card.reps === 1) card.interval = 3;
      else card.interval = Math.round(card.interval * card.easeFactor);
      card.reps++;
      card.easeFactor = Math.max(1.3, card.easeFactor + (0.1 - (2 - q) * (0.08 + (2 - q) * 0.02)));
    }
    card.nextReview = now + card.interval * 24 * 60 * 60 * 1000;
    state.srsData[cardId] = card;
    localStorage.setItem(STORAGE_KEYS.SRS_DATA, JSON.stringify(state.srsData));
  }

  function getSRSDueCards() {
    const now = Date.now();
    return appData.flashcards.filter(f => {
      const srs = state.srsData[f.id];
      // Due if: no SRS data yet (never reviewed) OR nextReview <= now
      return !srs || srs.nextReview <= now;
    });
  }

  function updateSRSDueBadge() {
    const due = getSRSDueCards().length;
    const badge = document.getElementById('srsDueBadge');
    if (badge) {
      badge.textContent = due;
      badge.style.background = due > 0 ? '#ef4444' : '#22c55e';
    }
  }

  function initSRSModule() {
    updateSRSDueBadge();
    // Auto-refresh badge every minute
    setInterval(updateSRSDueBadge, 60000);
  }

  // ==================== XP & GAMIFICATION ====================
  const XP_LEVELS = [
    { level: 1, name: 'Rookie', icon: '⭐', threshold: 0 },
    { level: 2, name: 'Học Viên', icon: '🌱', threshold: 100 },
    { level: 3, name: 'Chiến Binh', icon: '⚔️', threshold: 250 },
    { level: 4, name: 'Java Dev', icon: '☕', threshold: 500 },
    { level: 5, name: 'Senior Dev', icon: '💻', threshold: 900 },
    { level: 6, name: 'Architect', icon: '🏗️', threshold: 1500 },
    { level: 7, name: 'Tech Lead', icon: '🚀', threshold: 2500 },
    { level: 8, name: 'FPT Champion', icon: '🏆', threshold: 4000 }
  ];

  const ALL_BADGES = [
    { id: 'first_day', icon: '🎯', name: 'Bước Đầu Tiên', desc: 'Hoàn thành ngày học đầu tiên', condition: (s) => Object.keys(s.roadmapProgress).length >= 1 },
    { id: 'streak_3', icon: '🔥', name: 'Streak 3 Ngày', desc: 'Học liên tục 3 ngày', condition: (s) => (parseInt(localStorage.getItem(STORAGE_KEYS.STREAK_DAYS)) || 0) >= 3 },
    { id: 'streak_7', icon: '🌟', name: 'Tuần Lễ Kiên Trì', desc: 'Học liên tục 7 ngày', condition: (s) => (parseInt(localStorage.getItem(STORAGE_KEYS.STREAK_DAYS)) || 0) >= 7 },
    { id: 'flashcard_50', icon: '⚡', name: 'Phản Xạ Cơ Bản', desc: 'Ôn 50+ flashcard', condition: (s) => Object.keys(s.flashcardRatings).length >= 50 },
    { id: 'flashcard_all', icon: '🧠', name: 'Thẻ Chủ', desc: 'Ôn tất cả flashcard ít nhất 1 lần', condition: (s) => Object.keys(s.flashcardRatings).length >= (appData.flashcards || []).length },
    { id: 'mock_pass', icon: '🎓', name: 'Pass Mock Test', desc: 'Đạt ≥70% trong 1 lần mock test', condition: (s) => { const h = JSON.parse(localStorage.getItem(STORAGE_KEYS.MOCK_HISTORY)||'[]'); return h.some(r => r.pct >= 70); } },
    { id: 'mock_80', icon: '💎', name: 'Xuất Sắc', desc: 'Đạt ≥80% trong mock test', condition: (s) => { const h = JSON.parse(localStorage.getItem(STORAGE_KEYS.MOCK_HISTORY)||'[]'); return h.some(r => r.pct >= 80); } },
    { id: 'week_1', icon: '🗓️', name: 'Tuần 1 Chinh Phục', desc: 'Hoàn thành tất cả 7 ngày của Tuần 1', condition: (s) => [1,2,3,4,5,6,7].every(d => s.roadmapProgress[`day-${d}`]) },
    { id: 'xp_500', icon: '💰', name: 'Triệu Phú XP', desc: 'Kiếm được 500 XP', condition: (s) => s.xpData.totalXP >= 500 },
    { id: 'srs_champion', icon: '🔁', name: 'SRS Champion', desc: 'Ôn 20 thẻ qua SRS', condition: (s) => Object.keys(s.srsData).length >= 20 },
    { id: 'error_book', icon: '📕', name: 'Thám Tử Lỗi', desc: 'Thêm 5 lỗi vào Error Book', condition: (s) => (s.userErrors || []).length >= 5 },
    { id: 'notes_keeper', icon: '📓', name: 'Nhật Ký Học Tập', desc: 'Viết Quick Notes ít nhất 100 ký tự', condition: (s) => (s.quickNotes || '').length >= 100 }
  ];

  function getCurrentLevel(xp) {
    let lvl = XP_LEVELS[0];
    for (const l of XP_LEVELS) {
      if (xp >= l.threshold) lvl = l;
    }
    return lvl;
  }

  function getNextLevel(xp) {
    const idx = XP_LEVELS.findIndex(l => xp < l.threshold);
    return idx === -1 ? null : XP_LEVELS[idx];
  }

  function awardXP(amount, reason) {
    state.xpData.totalXP = (state.xpData.totalXP || 0) + amount;
    const oldLevel = getCurrentLevel(state.xpData.totalXP - amount);
    const newLevel = getCurrentLevel(state.xpData.totalXP);
    if (newLevel.level > oldLevel.level) {
      showToast(`🎉 Level Up! ${newLevel.icon} ${newLevel.name} (Lv.${newLevel.level})`, 'success');
    } else {
      showToast(`+${amount} XP · ${reason}`, 'info');
    }
    localStorage.setItem(STORAGE_KEYS.XP_DATA, JSON.stringify(state.xpData));
    updateXPUI();
    checkAndAwardBadges();
  }

  function updateXPUI() {
    const xp = state.xpData.totalXP || 0;
    const lvl = getCurrentLevel(xp);
    const next = getNextLevel(xp);
    const pct = next ? Math.round(((xp - lvl.threshold) / (next.threshold - lvl.threshold)) * 100) : 100;

    // Header mini badge
    const icon = document.getElementById('xpLevelIcon');
    const title = document.getElementById('xpLevelTitle');
    const fill = document.getElementById('xpFillMini');
    const count = document.getElementById('xpCountText');
    if (icon) icon.textContent = lvl.icon;
    if (title) title.textContent = `Lv.${lvl.level} ${lvl.name}`;
    if (fill) fill.style.width = `${pct}%`;
    if (count) count.textContent = `${xp} XP`;

    // Analytics page
    const ringIcon = document.getElementById('xpRingIcon');
    const ringLevel = document.getElementById('xpRingLevel');
    const levelName = document.getElementById('xpLevelName');
    const fullFill = document.getElementById('xpFullFill');
    const toNext = document.getElementById('xpToNext');
    const totalXPEl = document.getElementById('analyticsTotalXP');
    if (ringIcon) ringIcon.textContent = lvl.icon;
    if (ringLevel) ringLevel.textContent = `Lv.${lvl.level}`;
    if (levelName) levelName.textContent = lvl.name;
    if (fullFill) fullFill.style.width = `${pct}%`;
    if (toNext) toNext.textContent = next ? `${xp} XP → Level ${next.level}: ${next.threshold} XP` : 'MAX LEVEL! 🏆';
    if (totalXPEl) totalXPEl.textContent = xp;
  }

  function checkAndAwardBadges() {
    ALL_BADGES.forEach(badge => {
      if (!state.xpData.earnedBadges.includes(badge.id) && badge.condition(state)) {
        state.xpData.earnedBadges.push(badge.id);
        localStorage.setItem(STORAGE_KEYS.XP_DATA, JSON.stringify(state.xpData));
        showToast(`🏅 Huy Hiệu Mới: ${badge.icon} ${badge.name}!`, 'success');
      }
    });
    renderBadges();
  }

  function renderBadges() {
    const grid = document.getElementById('badgesGrid');
    if (!grid) return;
    grid.innerHTML = ALL_BADGES.map(badge => {
      const earned = state.xpData.earnedBadges.includes(badge.id);
      return `<div class="badge-item ${earned ? 'earned' : 'locked'}" title="${badge.desc}">
        <span class="badge-icon">${badge.icon}</span>
        <span class="badge-name">${badge.name}</span>
        <span class="badge-status">${earned ? '✅' : '🔒'}</span>
      </div>`;
    }).join('');
  }

  function initXPGamificationModule() {
    updateXPUI();
    checkAndAwardBadges();
  }

  // ==================== ANALYTICS DASHBOARD ====================
  const CHAPTER_NAMES = [
    { id: 'Ch1', label: 'Ch1: Biến & Kiểu Dữ Liệu' },
    { id: 'Ch2', label: 'Ch2: Luồng & Điều Kiện' },
    { id: 'Ch3', label: 'Ch3: Methods & Scope' },
    { id: 'Ch4', label: 'Ch4: Array & Thuật Toán' },
    { id: 'Ch5', label: 'Ch5: OOP Cơ Bản' },
    { id: 'Ch6', label: 'Ch6: Kế Thừa & Đa Hình' },
    { id: 'Ch7', label: 'Ch7: Exception & File I/O' },
    { id: 'Ch8', label: 'Ch8: String & Math' },
    { id: 'Ch9', label: 'Ch9: Collections & Generics' }
  ];

  function initAnalyticsModule() {
    const refreshBtn = document.getElementById('analyticsRefreshBtn');
    if (refreshBtn) refreshBtn.addEventListener('click', refreshAnalytics);

    const saveDateBtn = document.getElementById('examSaveDateBtn');
    if (saveDateBtn) saveDateBtn.addEventListener('click', saveExamDate);

    const notesArea = document.getElementById('quickNotesArea');
    if (notesArea) {
      notesArea.value = state.quickNotes;
      notesArea.addEventListener('input', () => {
        state.quickNotes = notesArea.value;
        localStorage.setItem(STORAGE_KEYS.QUICK_NOTES, state.quickNotes);
        checkAndAwardBadges();
      });
    }

    const summarizeBtn = document.getElementById('aiSummarizeNotesBtn');
    if (summarizeBtn) summarizeBtn.addEventListener('click', summarizeNotesWithAI);

    const challengeBtn = document.getElementById('refreshChallengeBtn');
    if (challengeBtn) challengeBtn.addEventListener('click', renderDailyChallenge);

    // Render when switching to analytics tab
    document.querySelectorAll('[data-tab="analytics"]').forEach(btn => {
      btn.addEventListener('click', () => {
        setTimeout(refreshAnalytics, 100);
      });
    });

    renderDailyChallenge();
  }

  function refreshAnalytics() {
    renderScoreProgressChart();
    renderChapterHeatmap();
    renderBadges();
    updateXPUI();
    updateAnalyticsStats();
    renderDailyChallenge();
  }

  function updateAnalyticsStats() {
    const mockHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.MOCK_HISTORY) || '[]');
    const bestScore = mockHistory.length > 0 ? Math.max(...mockHistory.map(r => r.pct || 0)) : null;
    const avgScore = mockHistory.length > 0 ? Math.round(mockHistory.reduce((a, b) => a + (b.pct || 0), 0) / mockHistory.length) : null;

    const bestEl = document.getElementById('analyticsBestScore');
    const avgEl = document.getElementById('analyticsAvgScore');
    const predictEl = document.getElementById('analyticsPassPredict');
    if (bestEl) bestEl.textContent = bestScore !== null ? `${bestScore}%` : '--%';
    if (avgEl) avgEl.textContent = avgScore !== null ? `${avgScore}%` : '--%';
    if (predictEl) {
      if (avgScore === null) {
        predictEl.textContent = '--';
      } else if (avgScore >= 70) {
        predictEl.textContent = '✅ PASS';
        predictEl.style.color = '#22c55e';
      } else if (avgScore >= 55) {
        predictEl.textContent = '⚠️ Cố Gắng';
        predictEl.style.color = '#f59e0b';
      } else {
        predictEl.textContent = '❌ Cần Luyện';
        predictEl.style.color = '#ef4444';
      }
    }
  }

  function renderScoreProgressChart() {
    const canvas = document.getElementById('scoreProgressChart');
    const emptyMsg = document.getElementById('chartEmptyMsg');
    if (!canvas) return;

    const mockHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.MOCK_HISTORY) || '[]');

    if (mockHistory.length === 0) {
      canvas.style.display = 'none';
      if (emptyMsg) emptyMsg.style.display = 'block';
      return;
    }
    canvas.style.display = 'block';
    if (emptyMsg) emptyMsg.style.display = 'none';

    const ctx = canvas.getContext('2d');
    const W = canvas.offsetWidth || 600;
    const H = 200;
    canvas.width = W;
    canvas.height = H;

    const pad = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartW = W - pad.left - pad.right;
    const chartH = H - pad.top - pad.bottom;

    // Background
    ctx.fillStyle = 'rgba(15, 23, 42, 0.0)';
    ctx.fillRect(0, 0, W, H);

    const scores = mockHistory.map(r => r.pct || 0);
    const maxScore = 100;
    const minScore = 0;

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 1;
    [0, 25, 50, 70, 100].forEach(pct => {
      const y = pad.top + chartH - (pct / maxScore) * chartH;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + chartW, y);
      ctx.stroke();
      ctx.fillStyle = pct === 70 ? '#f59e0b' : 'rgba(255,255,255,0.4)';
      ctx.font = '10px Inter';
      ctx.fillText(`${pct}%`, 4, y + 4);
    });

    // Pass line at 70%
    const passY = pad.top + chartH - (70 / maxScore) * chartH;
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(pad.left, passY); ctx.lineTo(pad.left + chartW, passY); ctx.stroke();
    ctx.setLineDash([]);

    // Score line
    const gradient = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.8)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.1)');

    const xStep = scores.length > 1 ? chartW / (scores.length - 1) : chartW;
    const points = scores.map((s, i) => ({
      x: pad.left + (scores.length === 1 ? chartW / 2 : i * xStep),
      y: pad.top + chartH - (s / maxScore) * chartH
    }));

    // Fill area
    ctx.beginPath();
    ctx.moveTo(points[0].x, pad.top + chartH);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.lineTo(points[points.length - 1].x, pad.top + chartH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    points.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
    ctx.stroke();

    // Dots + Labels
    points.forEach((p, i) => {
      const s = scores[i];
      ctx.fillStyle = s >= 70 ? '#22c55e' : s >= 50 ? '#f59e0b' : '#ef4444';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#f1f5f9';
      ctx.font = '11px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(`${s}%`, p.x, p.y - 10);

      // Date label
      const d = new Date(mockHistory[i].date || Date.now());
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.font = '9px Inter';
      ctx.fillText(`${d.getDate()}/${d.getMonth()+1}`, p.x, H - 6);
    });
  }

  function renderChapterHeatmap() {
    const container = document.getElementById('chapterHeatmap');
    if (!container) return;

    // Compute chapter scores from quiz history stored in chapter stats
    container.innerHTML = CHAPTER_NAMES.map(ch => {
      const stat = state.chapterStats[ch.id] || { correct: 0, total: 0 };
      const pct = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : -1;
      let color, label;
      if (pct < 0) { color = 'rgba(99,102,241,0.2)'; label = 'Chưa làm'; }
      else if (pct < 50) { color = 'rgba(239,68,68,0.7)'; label = `${pct}% · Yếu`; }
      else if (pct < 80) { color = 'rgba(245,158,11,0.7)'; label = `${pct}% · TB`; }
      else { color = 'rgba(34,197,94,0.7)'; label = `${pct}% · Mạnh`; }

      return `<div class="heatmap-chapter" style="background:${color}">
        <div class="heatmap-ch-name">${ch.label.replace(': ', '\n')}</div>
        <div class="heatmap-ch-pct">${label}</div>
        <div class="heatmap-ch-bar"><div style="width:${Math.max(0,pct)}%;height:3px;background:rgba(255,255,255,0.6);border-radius:2px"></div></div>
      </div>`;
    }).join('');
  }

  async function summarizeNotesWithAI() {
    const notes = state.quickNotes.trim();
    if (!notes) { showToast('Chưa có ghi chú để tóm tắt!', 'warning'); return; }
    const box = document.getElementById('notesSummaryBox');
    if (!box) return;
    box.style.display = 'block';
    box.innerHTML = '<div style="text-align:center;padding:1rem;color:#94a3b8">⏳ AI đang tóm tắt...</div>';

    try {
      const prompt = `Bạn là trợ lý học tập Java Core cho kỳ thi FPT Entry Test. Người dùng vừa ghi chú sau đây. Hãy:
1. Tóm tắt các điểm quan trọng nhất thành bullet points
2. Highlight các bẫy kỳ thi cần lưu ý
3. Gợi ý 2-3 điều cần ôn lại

Ghi chú của người dùng:
${notes}

Trả lời bằng tiếng Việt, format HTML đẹp với <ul>, <strong>, emoji.`;

      const resp = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, model: 'gemini-2.0-flash' })
      });
      const data = await resp.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Không có phản hồi.';
      box.innerHTML = `<div class="notes-summary-result">${text.replace(/\n/g, '<br>')}</div>`;
    } catch(e) {
      box.innerHTML = `<div style="color:#ef4444">Lỗi: ${e.message}</div>`;
    }
  }

  function renderDailyChallenge() {
    const container = document.getElementById('dailyChallengeContent');
    if (!container || !appData.quizzes || appData.quizzes.length === 0) return;

    // Pick 3 questions from weakest chapter or random
    const weakChapters = CHAPTER_NAMES
      .map(ch => ({ id: ch.id, pct: state.chapterStats[ch.id]?.total > 0 ? Math.round((state.chapterStats[ch.id].correct / state.chapterStats[ch.id].total) * 100) : -1 }))
      .filter(c => c.pct < 80)
      .sort((a, b) => a.pct - b.pct);

    let pool = appData.quizzes;
    if (weakChapters.length > 0) {
      const weakId = weakChapters[0].id;
      const weakPool = appData.quizzes.filter(q => q.chapter && q.chapter.includes(weakId));
      if (weakPool.length >= 3) pool = weakPool;
    }
    shuffleArray(pool);
    const questions = pool.slice(0, 3);
    const challengeId = `challenge_${Date.now()}`;

    container.innerHTML = `
      <div class="challenge-intro">
        <span>🎯 3 câu từ chương yếu nhất · Trả lời để kiếm XP</span>
      </div>
      ${questions.map((q, qi) => `
        <div class="challenge-q" id="${challengeId}_q${qi}">
          <div class="challenge-q-text"><strong>Câu ${qi+1}:</strong> ${q.question}</div>
          <div class="challenge-options">
            ${q.options.map((opt, oi) => `
              <button class="challenge-opt-btn" onclick="window.answerChallenge('${challengeId}',${qi},${oi},${q.correct},${JSON.stringify(q.options).replace(/'/g,'\\\'')})">
                ${String.fromCharCode(65+oi)}. ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;

    window.answerChallenge = function(cid, qi, selected, correct, opts) {
      const qDiv = document.getElementById(`${cid}_q${qi}`);
      if (!qDiv || qDiv.dataset.answered) return;
      qDiv.dataset.answered = 'true';
      const btns = qDiv.querySelectorAll('.challenge-opt-btn');
      btns.forEach((btn, i) => {
        btn.disabled = true;
        if (i === correct) btn.style.background = 'rgba(34,197,94,0.3)';
        else if (i === selected && i !== correct) btn.style.background = 'rgba(239,68,68,0.3)';
      });
      if (selected === correct) {
        awardXP(2, 'Daily Challenge Đúng');
        updateChapterStat(qi, true);
      } else {
        updateChapterStat(qi, false);
        showToast(`❌ Sai! Đáp án: ${String.fromCharCode(65+correct)}. ${opts[correct]}`, 'error');
      }
    };
  }

  function updateChapterStat(questionIndex, correct) {
    // Very simplified - track overall stats
    const key = 'General';
    if (!state.chapterStats[key]) state.chapterStats[key] = { correct: 0, total: 0 };
    state.chapterStats[key].total++;
    if (correct) state.chapterStats[key].correct++;
    localStorage.setItem(STORAGE_KEYS.CHAPTER_STATS, JSON.stringify(state.chapterStats));
  }

  // ==================== EXAM COUNTDOWN ====================
  function initExamCountdown() {
    const setBtn = document.getElementById('examSetDateBtn');
    if (setBtn) {
      setBtn.addEventListener('click', () => {
        switchTab('analytics');
        setTimeout(() => {
          const input = document.getElementById('examDateInput');
          if (input) { input.focus(); input.click(); }
        }, 300);
      });
    }
    updateExamCountdown();
  }

  function saveExamDate() {
    const input = document.getElementById('examDateInput');
    if (!input || !input.value) { showToast('Vui lòng chọn ngày thi!', 'warning'); return; }
    state.examDate = input.value;
    localStorage.setItem(STORAGE_KEYS.EXAM_DATE, state.examDate);
    updateExamCountdown();
    showToast('✅ Đã lưu ngày thi!', 'success');
  }

  function updateExamCountdown() {
    const examDate = state.examDate;
    const headerDays = document.getElementById('examCountdownDays');
    const cdDaysBig = document.getElementById('cdDaysBig');
    const cdExamDateDisplay = document.getElementById('cdExamDateDisplay');
    const cdDaysLeftTask = document.getElementById('cdDaysLeftTask');
    const cdTodayTask = document.getElementById('cdTodayTask');
    const examInput = document.getElementById('examDateInput');

    if (!examDate) {
      if (headerDays) headerDays.textContent = '-- Ngày';
      if (cdDaysBig) cdDaysBig.textContent = '--';
      if (cdExamDateDisplay) cdExamDateDisplay.textContent = 'Chưa đặt';
      return;
    }

    if (examInput) examInput.value = examDate;

    const now = new Date();
    const exam = new Date(examDate);
    const diffMs = exam - now;
    const diffDays = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));

    const completedDays = Object.keys(state.roadmapProgress).length;
    const remainingDays = Math.max(0, 56 - completedDays);

    if (headerDays) {
      headerDays.textContent = diffDays > 0 ? `${diffDays} Ngày` : 'Hôm Nay!';
      headerDays.style.color = diffDays <= 3 ? '#ef4444' : diffDays <= 7 ? '#f59e0b' : '#22c55e';
    }
    if (cdDaysBig) cdDaysBig.textContent = diffDays;
    if (cdExamDateDisplay) cdExamDateDisplay.textContent = exam.toLocaleDateString('vi-VN');
    if (cdDaysLeftTask) cdDaysLeftTask.textContent = remainingDays > 0 ? `${remainingDays} ngày học còn lại` : '✅ Xong roadmap!';

    // Daily smart target
    if (cdTodayTask) {
      const daysPerLesson = diffDays > 0 ? (remainingDays / diffDays).toFixed(1) : '∞';
      const due = getSRSDueCards().length;
      cdTodayTask.innerHTML = diffDays <= 0
        ? '🎯 Ngày Thi! Chúc may mắn!'
        : `📚 ${daysPerLesson} bài/ngày${due > 0 ? ` + ${due} thẻ SRS` : ''}`;
    }
  }

  // ==================== AI STUDY PLANNER ====================
  function initAIStudyPlannerModule() {
    const btn = document.getElementById('aiGeneratePlanBtn');
    if (btn) btn.addEventListener('click', generateAIStudyPlan);
    updatePlannerStats();
  }

  function updatePlannerStats() {
    const completedDays = Object.keys(state.roadmapProgress).length;
    const mockHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.MOCK_HISTORY) || '[]');
    const srsCount = getSRSDueCards ? getSRSDueCards().length : 0;

    // Weakest chapter
    let weakestCh = '--';
    let minPct = 101;
    Object.entries(state.chapterStats).forEach(([ch, stat]) => {
      if (stat.total > 0) {
        const pct = Math.round((stat.correct / stat.total) * 100);
        if (pct < minPct) { minPct = pct; weakestCh = ch; }
      }
    });

    const doneEl = document.getElementById('plannerStatDone');
    const mockEl = document.getElementById('plannerStatMock');
    const srsEl = document.getElementById('plannerStatSRS');
    const weakEl = document.getElementById('plannerStatWeakChapter');
    if (doneEl) doneEl.textContent = `${completedDays}/56 ngày xong`;
    if (mockEl) mockEl.textContent = `${mockHistory.length} mock đã làm`;
    if (srsEl) srsEl.textContent = `${srsCount} thẻ SRS cần ôn`;
    if (weakEl) weakEl.textContent = minPct <= 100 ? `Yếu nhất: ${weakestCh} (${minPct}%)` : 'Chưa làm quiz';
  }

  async function generateAIStudyPlan() {
    const outputEl = document.getElementById('aiPlannerOutput');
    if (!outputEl) return;

    outputEl.innerHTML = '<div style="text-align:center;padding:2rem;color:#94a3b8">⏳ AI đang phân tích dữ liệu học tập của bạn...</div>';
    updatePlannerStats();

    // Gather data
    const completedDays = Object.keys(state.roadmapProgress).length;
    const mockHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.MOCK_HISTORY) || '[]');
    const avgScore = mockHistory.length > 0 ? Math.round(mockHistory.reduce((a, b) => a + (b.pct || 0), 0) / mockHistory.length) : 0;
    const lastScore = mockHistory.length > 0 ? mockHistory[mockHistory.length - 1].pct : 0;
    const srsCount = getSRSDueCards ? getSRSDueCards().length : 0;
    const streak = parseInt(localStorage.getItem(STORAGE_KEYS.STREAK_DAYS) || '0');
    const examDate = state.examDate;
    const daysUntilExam = examDate ? Math.max(0, Math.ceil((new Date(examDate) - new Date()) / (1000 * 60 * 60 * 24))) : null;
    const xp = state.xpData.totalXP || 0;
    const learnerProfile = state.learnerProfile || {};

    // Chapter analysis
    const chapterAnalysis = CHAPTER_NAMES.map(ch => {
      const stat = state.chapterStats[ch.id] || { correct: 0, total: 0 };
      return {
        id: ch.id,
        label: ch.label,
        pct: stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : -1,
        total: stat.total
      };
    }).sort((a, b) => a.pct - b.pct);

    const weakChapters = chapterAnalysis.filter(c => c.pct >= 0 && c.pct < 70);
    const untouchedChapters = chapterAnalysis.filter(c => c.pct < 0);

    const prompt = `Bạn là AI Study Planner chuyên lập kế hoạch học tập thích ứng cho kỳ thi FPT Software Entry Test Java Core.

DỮ LIỆU HỌC VIÊN:
- Số ngày hoàn thành: ${completedDays}/56 ngày
- Điểm mock trung bình: ${avgScore}% (lần gần nhất: ${lastScore}%)
- Streak học liên tục: ${streak} ngày
- Thẻ SRS cần ôn hôm nay: ${srsCount} thẻ
- XP tích lũy: ${xp} XP
${daysUntilExam !== null ? `- Còn ${daysUntilExam} ngày đến kỳ thi` : ''}
- Chương yếu (quiz dưới 70%): ${weakChapters.map(c => `${c.id}(${c.pct}%)`).join(', ') || 'Chưa có data'}
- Chương chưa làm quiz: ${untouchedChapters.map(c => c.id).join(', ') || 'Đã làm hết'}
- Cá tính học: ${learnerProfile.archetype || 'Chưa xác định'} ${learnerProfile.label || ''}

YÊU CẦU:
Lập kế hoạch học tập TỐI ƯU cho NGÀY MAI bao gồm:
1. 🎯 MỤC TIÊU CHÍNH (1-2 mục tiêu cụ thể nhất)
2. 📚 LỊCH HỌC CHI TIẾT (chia theo giờ, tổng 3-4h)
3. 🔁 SRS & FLASHCARD (số thẻ cần ôn, chủ đề tập trung)
4. ⚠️ ĐIỂM YẾU CẦN TẬP TRUNG (dựa trên data)
5. 🎮 DAILY CHALLENGE (1 micro-challenge cụ thể, ví dụ: "Viết tay 5 cú pháp ArrayList/LinkedList không nhìn tài liệu")
6. 💊 LỜI KHUYÊN TÂM LÝ (1 câu ngắn gọn motivational dựa trên cá tính)

Trả lời bằng tiếng Việt, format HTML đẹp với sections rõ ràng, emoji, màu sắc inline style, tối đa 400 từ.`;

    try {
      const resp = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, model: 'gemini-2.0-flash' })
      });
      const data = await resp.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        const today = new Date().toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'numeric' });
        outputEl.innerHTML = `
          <div class="planner-result-header">
            <span>📅 Kế hoạch ngày mai · Được tạo lúc ${new Date().toLocaleTimeString('vi-VN')}</span>
            <button class="btn btn-sm btn-outline" onclick="document.getElementById('aiGeneratePlanBtn').click()">🔄 Làm Mới</button>
          </div>
          <div class="planner-result-content">${text.replace(/\n/g, '<br>')}</div>
        `;
      } else {
        throw new Error('Không có phản hồi từ AI');
      }
    } catch (err) {
      outputEl.innerHTML = `
        <div class="planner-fallback">
          <h4>📋 Kế Hoạch Tự Động (AI đang bận)</h4>
          <div class="fallback-plan">
            ${completedDays < 14 ? `<div class="plan-item">📖 <strong>Ôn Tuần 1-2:</strong> Đọc lại Ch1-Ch4, làm 10 flashcard SRS</div>` : ''}
            ${srsCount > 0 ? `<div class="plan-item">🔁 <strong>SRS Ôn:</strong> ${srsCount} thẻ đến hạn · Bấm "🔁 SRS Ôn Hôm Nay" trong tab Flashcards</div>` : ''}
            ${weakChapters.length > 0 ? `<div class="plan-item">⚠️ <strong>Focus:</strong> ${weakChapters[0].label} (chỉ ${weakChapters[0].pct}% quiz đúng)</div>` : ''}
            <div class="plan-item">🎯 <strong>TestKing Mock:</strong> Làm 1 bài 20 câu, target ≥70%</div>
            <div class="plan-item">🎙️ <strong>Audit:</strong> Luyện 2 câu phỏng vấn Java OOP</div>
          </div>
        </div>
      `;
    }
  }

  // ==================== VOICE AUDIT AI SCORER ====================
  let speechRecognition = null;
  let currentTranscript = '';

  function initVoiceAuditModule() {
    const speechBtn = document.getElementById('auditSpeechBtn');
    const aiScoreBtn = document.getElementById('auditAIScoreBtn');
    const manualInputBtn = document.getElementById('auditManualInputBtn');
    const manualScoreBtn = document.getElementById('auditManualScoreBtn');

    if (speechBtn) {
      speechBtn.addEventListener('click', toggleSpeechRecognition);
    }
    if (aiScoreBtn) {
      aiScoreBtn.addEventListener('click', () => scoreAnswerWithAI(currentTranscript));
    }
    if (manualInputBtn) {
      manualInputBtn.addEventListener('click', () => {
        const box = document.getElementById('auditManualInputBox');
        if (box) box.style.display = box.style.display === 'none' ? 'block' : 'none';
      });
    }
    if (manualScoreBtn) {
      manualScoreBtn.addEventListener('click', () => {
        const text = document.getElementById('auditManualText')?.value?.trim();
        if (!text) { showToast('Vui lòng nhập nội dung câu trả lời!', 'warning'); return; }
        scoreAnswerWithAI(text);
      });
    }
  }

  function toggleSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      showToast('Trình duyệt không hỗ trợ Speech Recognition. Vui lòng dùng Chrome!', 'error');
      return;
    }

    const btn = document.getElementById('auditSpeechBtn');
    const transcriptBox = document.getElementById('speechTranscriptBox');
    const transcriptText = document.getElementById('speechTranscriptText');
    const statusEl = document.getElementById('speechStatus');
    const aiScoreBtn = document.getElementById('auditAIScoreBtn');

    if (speechRecognition) {
      // Stop recording
      speechRecognition.stop();
      speechRecognition = null;
      btn.textContent = '🎤 Đọc To Để AI Nghe';
      btn.classList.remove('recording');
      if (statusEl) statusEl.textContent = '✅ Đã xong! Nhấn "AI Chấm Điểm" để phân tích.';
      if (aiScoreBtn && currentTranscript) aiScoreBtn.style.display = 'inline-flex';
      return;
    }

    // Start recording
    speechRecognition = new SpeechRecognition();
    speechRecognition.lang = 'vi-VN';
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.maxAlternatives = 1;

    currentTranscript = '';
    if (transcriptBox) transcriptBox.style.display = 'block';
    if (transcriptText) transcriptText.textContent = '';
    if (statusEl) statusEl.textContent = '🎤 Đang nghe... Nói câu trả lời của bạn bằng tiếng Việt hoặc tiếng Anh';
    if (aiScoreBtn) aiScoreBtn.style.display = 'none';

    btn.textContent = '⏹ Dừng Nghe';
    btn.classList.add('recording');

    speechRecognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript + ' ';
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      currentTranscript += final;
      if (transcriptText) {
        transcriptText.textContent = currentTranscript + (interim ? `[${interim}]` : '');
      }
    };

    speechRecognition.onerror = (e) => {
      console.warn('Speech error:', e.error);
      if (e.error === 'not-allowed') {
        showToast('Cần cấp quyền Microphone cho trình duyệt!', 'error');
      } else {
        showToast(`Lỗi speech: ${e.error}`, 'error');
      }
      speechRecognition = null;
      btn.textContent = '🎤 Đọc To Để AI Nghe';
      btn.classList.remove('recording');
    };

    speechRecognition.onend = () => {
      if (speechRecognition) { // auto-restart if still supposed to be on
        try { speechRecognition.start(); } catch(e) {}
      }
    };

    speechRecognition.start();
  }

  async function scoreAnswerWithAI(userAnswer) {
    const q = appData.auditQuestions[state.auditIndex];
    if (!q) return;

    const resultEl = document.getElementById('auditAIScoreResult');
    if (!resultEl) return;

    resultEl.style.display = 'block';
    resultEl.innerHTML = '<div style="text-align:center;padding:1rem;color:#94a3b8">⏳ AI đang chấm điểm câu trả lời của bạn...</div>';

    const prompt = `Bạn là giám khảo FPT Software kỳ thi Java Entry Test, chấm điểm phần phỏng vấn kỹ thuật Audit 1-1.

CÂU HỎI: "${q.question}"

CÁC TIÊU CHÍ BẮT BUỘC:
${q.keyPoints.map((kp, i) => `${i + 1}. ${kp}`).join('\n')}

CÂU TRẢ LỜI CỦA THÍ SINH:
"${userAnswer}"

NHIỆM VỤ: Chấm điểm chi tiết theo format HTML với:
1. 🎯 ĐIỂM TỔNG (X/10) với màu xanh nếu ≥7, vàng nếu 5-6, đỏ nếu <5
2. ✅ ĐIỂM MẠNH: Những gì thí sinh nói đúng (bullet points)
3. ❌ THIẾU SÓT: Các tiêu chí chưa đề cập
4. 💡 GỢI Ý CẢI THIỆN: 2-3 câu cụ thể
5. 📝 MẪU CÂU HAY: 1-2 câu mẫu để nói thêm vào

Format ngắn gọn, HTML đẹp, tối đa 250 từ.`;

    try {
      const resp = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, model: 'gemini-2.0-flash' })
      });
      const data = await resp.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        resultEl.innerHTML = `
          <div class="audit-score-card">
            <div class="audit-score-header">🤖 Kết quả chấm điểm AI</div>
            <div class="audit-score-body">${text.replace(/\n/g, '<br>')}</div>
          </div>
        `;
        awardXP(5, 'Luyện Voice Audit 🎙️');
      } else {
        throw new Error('No response');
      }
    } catch (err) {
      resultEl.innerHTML = `<div style="color:#ef4444;padding:0.75rem">Lỗi gọi AI: ${err.message}. Thử lại sau!</div>`;
    }
  }

  // ==================== UTILITY ====================
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // ==================== SPEED QUIZ MODULE ====================
  function initSpeedQuizModule() {
    let mode = 'speed';
    let questions = [];
    let currentQIdx = 0;
    let score = 0;
    let combo = 0;
    let maxCombo = 0;
    let timer = null;
    let timeLeft = 10;
    let totalTime = 0;
    let sessionStart = 0;
    let weakBank = JSON.parse(localStorage.getItem('speedWeakBank') || '[]');

    const MODES = {
      speed:  { label: '⚡ Speed Mode', desc: 'Mỗi câu 10 giây · Tính combo streak', icon: '⚡', limit: 20, time: 10 },
      sprint: { label: '🏃 Sprint Mode', desc: '20 câu trong 3 phút · Tổng thời gian đếm ngược', icon: '🏃', limit: 20, time: 9999 },
      weak:   { label: '🎯 Weak Bank', desc: 'Chỉ các câu bạn sai nhiều nhất · Không giới hạn thời gian', icon: '🎯', limit: 20, time: 30 }
    };

    // Mode buttons
    document.querySelectorAll('.speed-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.speed-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mode = btn.dataset.mode;
        updateStartScreen();
      });
    });

    function updateStartScreen() {
      const m = MODES[mode];
      document.getElementById('speedModeTitle').textContent = m.label;
      document.getElementById('speedModeDesc').textContent = m.desc;
      document.querySelector('.speed-mode-icon').textContent = m.icon;
      const best = localStorage.getItem(`speedBest_${mode}`) || '--';
      document.getElementById('speedBestScore').textContent = best;
    }

    function getQuestions() {
      if (mode === 'weak') {
        if (weakBank.length === 0) {
          showToast('Weak Bank trống! Hãy làm quiz thường trước.', 'warning');
          return [];
        }
        return weakBank.slice(0, 20).map(w => {
          const q = (appData.quizzes || []).find(x => x.id === w.id);
          return q || null;
        }).filter(Boolean);
      }
      const pool = [...(appData.quizzes || [])];
      shuffleArray(pool);
      return pool.slice(0, MODES[mode].limit);
    }

    function startQuiz() {
      questions = getQuestions();
      if (questions.length === 0) {
        showToast('Không tìm thấy câu hỏi quiz nào!', 'warning');
        return;
      }
      currentQIdx = 0;
      score = 0;
      combo = 0;
      maxCombo = 0;
      totalTime = 0;
      sessionStart = Date.now();

      document.getElementById('speedStartScreen').style.display = 'none';
      document.getElementById('speedResultScreen').style.display = 'none';
      document.getElementById('speedActiveArea').style.display = 'block';
      document.getElementById('speedComboDisplay').style.display = 'none';

      if (mode === 'sprint') {
        // Sprint: global 3-min timer
        timeLeft = 180;
        startSprintTimer();
      }
      loadSpeedQ();
    }

    let sprintGlobalTimer = null;
    function startSprintTimer() {
      clearInterval(sprintGlobalTimer);
      sprintGlobalTimer = setInterval(() => {
        timeLeft--;
        const pct = (timeLeft / 180) * 100;
        updateRing(pct, timeLeft > 60 ? '#10b981' : timeLeft > 30 ? '#f59e0b' : '#ef4444');
        document.getElementById('speedTimerNum').textContent = timeLeft > 60
          ? `${Math.floor(timeLeft/60)}:${String(timeLeft%60).padStart(2,'0')}`
          : timeLeft;
        if (timeLeft <= 0) {
          clearInterval(sprintGlobalTimer);
          showResult();
        }
      }, 1000);
    }

    function loadSpeedQ() {
      if (currentQIdx >= questions.length) { showResult(); return; }
      const q = questions[currentQIdx];
      document.getElementById('speedQCounter').textContent = `Câu ${currentQIdx + 1}/${questions.length}`;
      document.getElementById('speedScoreLive').textContent = score;
      
      const qTextEl = document.getElementById('speedQText');
      if (q.code) {
        qTextEl.innerHTML = `${escapeHtml(q.question)}<pre style="margin-top:0.75rem;background:#0d1117;padding:0.75rem 1rem;border-radius:8px;font-family:var(--font-mono);font-size:0.85rem;color:#e2e8f0;overflow-x:auto;"><code>${escapeHtml(q.code)}</code></pre>`;
      } else {
        qTextEl.textContent = q.question;
      }
      document.getElementById('speedFeedback').style.display = 'none';

      // Render options
      const optEl = document.getElementById('speedOptions');
      optEl.innerHTML = '';
      const opts = [...q.options];
      shuffleArray(opts);
      opts.forEach((opt) => {
        const btn = document.createElement('button');
        btn.className = 'speed-opt-btn speed-option-btn';
        btn.textContent = opt;
        btn.dataset.idx = q.options.indexOf(opt);
        btn.addEventListener('click', () => answerQ(btn, q));
        optEl.appendChild(btn);
      });

      // Per-question timer (speed and weak mode)
      if (mode !== 'sprint') {
        timeLeft = MODES[mode].time;
        clearInterval(timer);
        timer = setInterval(() => {
          timeLeft--;
          const pct = (timeLeft / MODES[mode].time) * 100;
          updateRing(pct, timeLeft > 5 ? '#6366f1' : '#ef4444');
          document.getElementById('speedTimerNum').textContent = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(timer);
            // Time up — count as wrong
            recordWrong(q);
            combo = 0;
            document.getElementById('speedComboDisplay').style.display = 'none';
            const fb = document.getElementById('speedFeedback');
            fb.style.display = 'block';
            fb.className = 'speed-feedback speed-feedback--wrong';
            fb.textContent = `⏱ Hết giờ! Đáp án đúng: ${q.options[q.correctIndex]}`;
            setTimeout(() => { currentQIdx++; loadSpeedQ(); }, 1500);
          }
        }, 1000);
      }
    }

    function answerQ(btn, q) {
      clearInterval(timer);
      const chosen = parseInt(btn.dataset.idx);
      const correct = chosen === q.correctIndex;
      const elapsed = MODES[mode].time - timeLeft;
      totalTime += elapsed;

      // Visual feedback
      document.querySelectorAll('.speed-opt-btn').forEach(b => b.disabled = true);
      if (correct) {
        btn.classList.add('correct');
        score++;
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        if (combo >= 3) {
          document.getElementById('speedComboDisplay').style.display = 'block';
          document.getElementById('speedComboNum').textContent = combo;
        }
        const fb = document.getElementById('speedFeedback');
        fb.style.display = 'block';
        fb.className = 'speed-feedback speed-feedback--correct';
        fb.textContent = combo >= 3 ? `✅ Chính xác! 🔥 Combo x${combo}!` : '✅ Chính xác!';
      } else {
        btn.classList.add('wrong');
        document.querySelectorAll('.speed-opt-btn').forEach(b => {
          if (parseInt(b.dataset.idx) === q.correctIndex) b.classList.add('correct');
        });
        combo = 0;
        document.getElementById('speedComboDisplay').style.display = 'none';
        recordWrong(q);
        const fb = document.getElementById('speedFeedback');
        fb.style.display = 'block';
        fb.className = 'speed-feedback speed-feedback--wrong';
        fb.textContent = `❌ Sai! Đáp án: ${q.options[q.correctIndex]}`;
      }

      setTimeout(() => { currentQIdx++; loadSpeedQ(); }, correct ? 800 : 1800);
    }

    function recordWrong(q) {
      // Add to weak bank
      const existing = weakBank.findIndex(w => w.id === q.id);
      if (existing === -1) weakBank.push({ id: q.id, wrongs: 1 });
      else weakBank[existing].wrongs++;
      weakBank.sort((a, b) => b.wrongs - a.wrongs);
      localStorage.setItem('speedWeakBank', JSON.stringify(weakBank));
    }

    function updateRing(pct, color) {
      const fill = document.getElementById('speedRingFill');
      if (fill) {
        fill.style.strokeDashoffset = 100 - pct;
        fill.style.stroke = color;
      }
    }

    function showResult() {
      clearInterval(timer);
      clearInterval(sprintGlobalTimer);
      document.getElementById('speedActiveArea').style.display = 'none';
      document.getElementById('speedResultScreen').style.display = 'block';

      const total = questions.length;
      const pct = total > 0 ? Math.round((score / total) * 100) : 0;
      const avgTime = questions.length > 0 ? (totalTime / questions.length).toFixed(1) : '--';
      const xpEarned = score * 2 + maxCombo * 3;

      document.getElementById('speedFinalScore').textContent = `${score}/${total}`;
      document.getElementById('speedFinalCombo').textContent = `x${maxCombo}`;
      document.getElementById('speedFinalXP').textContent = `+${xpEarned}`;
      document.getElementById('speedFinalTime').textContent = mode !== 'sprint' ? `${avgTime}s` : '--';

      const emoji = pct >= 90 ? '🏆' : pct >= 70 ? '🌟' : pct >= 50 ? '💪' : '😅';
      const verdict = pct >= 90 ? 'Xuất sắc! Phản xạ siêu nhanh!' : pct >= 70 ? 'Tốt! Tiếp tục luyện tập!' : pct >= 50 ? 'Cần luyện thêm. Xem Weak Bank!' : 'Cần ôn lại kiến thức cơ bản!';
      document.getElementById('speedResultEmoji').textContent = emoji;
      document.getElementById('speedResultTitle').textContent = `${pct}% Chính Xác`;
      document.getElementById('speedResultVerdict').textContent = verdict;

      // Save best
      const best = localStorage.getItem(`speedBest_${mode}`);
      if (!best || score > parseInt(best)) {
        localStorage.setItem(`speedBest_${mode}`, score);
        showToast('🏆 Kỷ lục mới!', 'success');
      }

      awardXP(xpEarned, `Speed Quiz ${emoji}`);
    }

    document.getElementById('speedStartBtn').addEventListener('click', startQuiz);
    document.getElementById('speedPlayAgainBtn')?.addEventListener('click', () => {
      document.getElementById('speedResultScreen').style.display = 'none';
      document.getElementById('speedStartScreen').style.display = 'flex';
      updateStartScreen();
    });
    document.getElementById('speedViewWeakBtn')?.addEventListener('click', () => {
      document.querySelectorAll('.speed-mode-btn').forEach(b => b.classList.remove('active'));
      document.querySelector('[data-mode="weak"]').classList.add('active');
      mode = 'weak';
      document.getElementById('speedResultScreen').style.display = 'none';
      document.getElementById('speedStartScreen').style.display = 'flex';
      updateStartScreen();
    });

    updateStartScreen();
  }

  // ==================== MOCK INTERVIEW MODULE ====================
  function initMockInterviewModule() {
    let interviewHistory = JSON.parse(localStorage.getItem('interviewHistory') || '[]');
    let session = null;
    let interviewSR = null;

    const ROLE_PROMPTS = {
      hrd: 'Bạn là HRD của FPT Software, phỏng vấn Fresher Java. Hỏi về motivation, teamwork, và kiến thức Java tổng quát. Thân thiện nhưng chuyên nghiệp.',
      tech: 'Bạn là Tech Lead Java FPT. Hỏi sâu về OOP, Collections, Exception, Thread. Yêu cầu giải thích cơ chế bên trong, không chỉ nhớ thuộc.',
      senior: 'Bạn là Senior Java Developer FPT. Hỏi về code quality, design patterns, cách tư duy giải quyết vấn đề. Đặt câu hỏi code review.',
      tough: 'Bạn là giám khảo khắt khe FPT. Hỏi bẫy, phản biện mọi câu trả lời, đặt câu hỏi follow-up gai góc. Không dễ dàng chấp nhận câu trả lời chung chung.'
    };
    const TOPIC_HINTS = {
      all: 'tất cả chủ đề Java Core',
      oop: 'OOP — class, interface, inheritance, polymorphism, encapsulation, abstraction',
      collections: 'Collections — ArrayList, LinkedList, HashMap, HashSet, Iterator, Comparable/Comparator',
      exception: 'Exception — try-catch-finally, checked/unchecked, custom exception, throws',
      string: 'String — String pool, StringBuilder, StringBuffer, immutable, intern()',
      threading: 'Multithreading cơ bản — Thread, Runnable, synchronized, volatile'
    };

    function renderHistory() {
      const el = document.getElementById('interviewHistoryList');
      if (!el) return;
      if (interviewHistory.length === 0) {
        el.innerHTML = '<div style="color:var(--text-muted);font-size:0.82rem;text-align:center;padding:1rem">Chưa có lịch sử</div>';
        return;
      }
      el.innerHTML = interviewHistory.slice(-5).reverse().map(h => `
        <div class="interview-history-item">
          <span>${h.role} · ${h.topic}</span>
          <span style="color:#10b981;font-weight:700">${h.score}/100</span>
          <span style="color:var(--text-muted);font-size:0.72rem">${new Date(h.date).toLocaleDateString('vi-VN')}</span>
        </div>
      `).join('');
    }

    function appendInterviewMsg(role, content, score) {
      const msgs = document.getElementById('interviewMessages');
      if (!msgs) return;
      const div = document.createElement('div');
      div.className = `interview-msg interview-msg--${role}`;
      div.innerHTML = `
        ${role === 'ai' ? '<span class="interview-msg-role">🎭 AI Interviewer</span>' : '<span class="interview-msg-role">👤 Bạn</span>'}
        <div class="interview-msg-body">${content.replace(/\n/g, '<br>')}</div>
        ${score !== undefined ? `<div class="interview-score-pill">${score >= 7 ? '✅' : score >= 5 ? '⚠️' : '❌'} ${score}/10</div>` : ''}
      `;
      msgs.appendChild(div);
      msgs.scrollTop = msgs.scrollHeight;
    }

    async function startInterview() {
      const role = document.getElementById('interviewerRole').value;
      const topic = document.getElementById('interviewTopic').value;
      const numQ = parseInt(document.getElementById('interviewQuestions').value);

      session = { role, topic, numQ, qIdx: 0, totalScore: 0, history: [] };

      document.getElementById('interviewWelcome').style.display = 'none';
      document.getElementById('interviewMessages').style.display = 'flex';
      document.getElementById('interviewInputArea').style.display = 'block';
      document.getElementById('interviewFinalResult').style.display = 'none';
      document.getElementById('interviewMessages').innerHTML = '';
      updateInterviewProgress();

      // First question
      await askNextInterviewQ();
    }

    async function askNextInterviewQ() {
      if (!session) return;
      const { role, topic, numQ, qIdx, history } = session;
      const rolePrompt = ROLE_PROMPTS[role];
      const topicHint = TOPIC_HINTS[topic];

      const historyContext = history.length > 0
        ? `\nLịch sử phỏng vấn vừa rồi:\n${history.map(h => `Q: ${h.q}\nA: ${h.a}\nScore: ${h.score}/10`).join('\n---\n')}`
        : '';

      const prompt = `${rolePrompt}
Đây là buổi phỏng vấn Java Fresher. Chủ đề: ${topicHint}.
Tổng ${numQ} câu hỏi. Đây là câu ${qIdx + 1}/${numQ}.
${historyContext}

Yêu cầu:
- Đặt 1 câu hỏi phỏng vấn Java phù hợp, KHÔNG trả lời, KHÔNG gợi ý
- Câu hỏi phải khác với các câu đã hỏi ở trên
- Format: Chỉ ghi câu hỏi thôi, ngắn gọn dưới 2 câu, tiếng Việt`;

      appendInterviewMsg('thinking', '⏳ AI đang chuẩn bị câu hỏi tiếp theo...');

      try {
        const resp = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, model: 'gemini-2.0-flash' })
        });
        const data = await resp.json();
        const q = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || 'Hãy giải thích OOP là gì?';

        // Remove thinking bubble
        document.getElementById('interviewMessages').lastChild?.remove();

        session.currentQ = q;
        appendInterviewMsg('ai', q);
      } catch (err) {
        document.getElementById('interviewMessages').lastChild?.remove();
        appendInterviewMsg('ai', 'Hãy giải thích sự khác biệt giữa interface và abstract class trong Java?');
        session.currentQ = 'Hãy giải thích sự khác biệt giữa interface và abstract class?';
      }
    }

    async function submitAnswer() {
      if (!session) return;
      const ansEl = document.getElementById('interviewAnswerInput');
      const answer = ansEl.value.trim();
      if (!answer) { showToast('Nhập câu trả lời trước!', 'warning'); return; }

      ansEl.value = '';
      appendInterviewMsg('user', answer);

      // AI scores the answer
      const scorePrompt = `Bạn là giám khảo phỏng vấn Java FPT.
Câu hỏi: "${session.currentQ}"
Câu trả lời của ứng viên: "${answer}"

Chấm điểm theo format JSON:
{
  "score": <1-10>,
  "comment": "<nhận xét ngắn 1-2 câu tiếng Việt>",
  "missing": "<điểm thiếu quan trọng nếu có>"
}

Chỉ trả về JSON, không gì khác.`;

      try {
        const resp = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: scorePrompt, model: 'gemini-2.0-flash' })
        });
        const data = await resp.json();
        let text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{"score":5,"comment":"Trả lời cơ bản","missing":""}';
        text = text.replace(/```json|```/g, '').trim();
        let result;
        try { result = JSON.parse(text); } catch { result = { score: 5, comment: 'Đã ghi nhận câu trả lời', missing: '' }; }

        session.totalScore += result.score;
        session.history.push({ q: session.currentQ, a: answer, score: result.score });

        const feedback = `${result.comment}${result.missing ? `\n💡 Thiếu: ${result.missing}` : ''}`;
        appendInterviewMsg('ai-score', feedback, result.score);

        session.qIdx++;
        updateInterviewProgress();

        if (session.qIdx >= session.numQ) {
          await finishInterview();
        } else {
          setTimeout(() => askNextInterviewQ(), 800);
        }
      } catch (err) {
        session.qIdx++;
        if (session.qIdx >= session.numQ) finishInterview();
        else askNextInterviewQ();
      }
    }

    async function finishInterview() {
      const avgScore = Math.round((session.totalScore / session.numQ) * 10);
      document.getElementById('interviewInputArea').style.display = 'none';

      // Overall feedback
      const overallPrompt = `Ứng viên vừa hoàn thành phỏng vấn Java Fresher FPT (${session.numQ} câu).
Điểm trung bình: ${avgScore}/100.
Lịch sử: ${session.history.map(h => `Q: ${h.q} → Score: ${h.score}/10`).join('; ')}

Hãy viết nhận xét tổng kết ngắn (4-5 câu) và 2-3 điểm cần cải thiện. Tiếng Việt, motivational.`;

      document.getElementById('interviewFinalScore').textContent = `${avgScore}/100`;
      document.getElementById('interviewFinalFeedback').textContent = '⏳ AI đang tổng kết...';
      document.getElementById('interviewFinalResult').style.display = 'flex';

      try {
        const resp = await fetch('/api/ai', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: overallPrompt, model: 'gemini-2.0-flash' })
        });
        const data = await resp.json();
        const feedback = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Hoàn thành phỏng vấn!';
        document.getElementById('interviewFinalFeedback').textContent = feedback;
      } catch {
        document.getElementById('interviewFinalFeedback').textContent = 'Phỏng vấn hoàn thành! Xem lại điểm số và luyện thêm nhé.';
      }

      // Save history
      const role = document.getElementById('interviewerRole');
      const topic = document.getElementById('interviewTopic');
      interviewHistory.push({
        date: Date.now(),
        role: role.options[role.selectedIndex].text.slice(0, 20),
        topic: topic.options[topic.selectedIndex].text.slice(0, 20),
        score: avgScore
      });
      localStorage.setItem('interviewHistory', JSON.stringify(interviewHistory));
      renderHistory();

      awardXP(avgScore >= 70 ? 50 : 25, `Mock Interview ${avgScore}/100`);
    }

    function updateInterviewProgress() {
      if (!session) return;
      const pct = (session.qIdx / session.numQ) * 100;
      const barFill = document.getElementById('interviewBarFill');
      if (barFill) barFill.style.width = pct + '%';
      const label = document.getElementById('interviewQLabel');
      if (label) label.textContent = `Câu ${session.qIdx + 1} / ${session.numQ}`;
    }

    // Voice for interview
    let interviewSpeech = null;
    const intSpeechBtn = document.getElementById('interviewSpeechBtn');
    if (intSpeechBtn) {
      intSpeechBtn.addEventListener('click', () => {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) { showToast('Chrome chỉ hỗ trợ Speech Recognition!', 'error'); return; }
        if (interviewSpeech) {
          interviewSpeech.stop(); interviewSpeech = null;
          intSpeechBtn.textContent = '🎤 Ghi Âm';
          document.getElementById('interviewSpeechStatus').textContent = '';
          return;
        }
        interviewSpeech = new SR();
        interviewSpeech.lang = 'vi-VN';
        interviewSpeech.continuous = true;
        interviewSpeech.interimResults = true;
        interviewSpeech.onresult = (e) => {
          let final = '', interim = '';
          for (let i = e.resultIndex; i < e.results.length; i++) {
            if (e.results[i].isFinal) final += e.results[i][0].transcript + ' ';
            else interim += e.results[i][0].transcript;
          }
          const ta = document.getElementById('interviewAnswerInput');
          if (ta) ta.value = (ta.value + final).trimStart();
          document.getElementById('interviewSpeechStatus').textContent = interim ? `[${interim}]` : '🎤 Đang nghe...';
        };
        interviewSpeech.onerror = () => { interviewSpeech = null; intSpeechBtn.textContent = '🎤 Ghi Âm'; };
        interviewSpeech.onend = () => { if (interviewSpeech) try { interviewSpeech.start(); } catch(e) {} };
        interviewSpeech.start();
        intSpeechBtn.textContent = '⏹ Dừng';
        document.getElementById('interviewSpeechStatus').textContent = '🎤 Đang nghe...';
      });
    }

    document.getElementById('startInterviewBtn')?.addEventListener('click', startInterview);
    document.getElementById('interviewSubmitBtn')?.addEventListener('click', submitAnswer);
    document.getElementById('interviewAnswerInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.ctrlKey) submitAnswer();
    });
    document.getElementById('endInterviewBtn')?.addEventListener('click', () => {
      if (session && session.qIdx > 0) finishInterview();
      else {
        document.getElementById('interviewWelcome').style.display = 'block';
        document.getElementById('interviewMessages').style.display = 'none';
        document.getElementById('interviewInputArea').style.display = 'none';
        session = null;
      }
    });
    document.getElementById('interviewRestartBtn')?.addEventListener('click', () => {
      document.getElementById('interviewFinalResult').style.display = 'none';
      document.getElementById('interviewWelcome').style.display = 'block';
      document.getElementById('interviewMessages').style.display = 'none';
      session = null;
    });

    renderHistory();
  }

  // ==================== EXPORT / IMPORT BACKUP ====================
  function initExportImport() {
    // Add buttons to Analytics header
    const analyticsHeader = document.querySelector('#pane-analytics .section-hero .hero-content');
    if (analyticsHeader) {
      const btnRow = document.createElement('div');
      btnRow.style.cssText = 'display:flex;gap:0.5rem;margin-top:0.75rem;flex-wrap:wrap';
      btnRow.innerHTML = `
        <button class="btn btn-sm btn-outline" id="exportBackupBtn">📤 Xuất Backup JSON</button>
        <button class="btn btn-sm btn-outline" id="importBackupBtn">📥 Nhập Backup</button>
        <input type="file" id="importFileInput" accept=".json" style="display:none">
        <span id="backupStatusMsg" style="font-size:0.78rem;color:#94a3b8;align-self:center"></span>
      `;
      analyticsHeader.appendChild(btnRow);
    }

    setTimeout(() => {
      document.getElementById('exportBackupBtn')?.addEventListener('click', exportBackup);
      document.getElementById('importBackupBtn')?.addEventListener('click', () => {
        document.getElementById('importFileInput')?.click();
      });
      document.getElementById('importFileInput')?.addEventListener('change', importBackup);
    }, 100);
  }

  function exportBackup() {
    const keys = Object.values(STORAGE_KEYS);
    const backup = { version: '3.1', exportDate: new Date().toISOString(), data: {} };
    keys.forEach(k => {
      const v = localStorage.getItem(k);
      if (v) backup.data[k] = v;
    });
    // Also export interview/speed data
    ['speedWeakBank', 'interviewHistory', 'speedBest_speed', 'speedBest_sprint', 'speedBest_weak'].forEach(k => {
      const v = localStorage.getItem(k);
      if (v) backup.data[k] = v;
    });

    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `apexcore_backup_${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('✅ Đã xuất backup thành công!', 'success');
  }

  function importBackup(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const backup = JSON.parse(ev.target.result);
        if (!backup.data) throw new Error('File backup không hợp lệ!');
        const count = Object.keys(backup.data).length;
        if (!confirm(`Nhập ${count} mục dữ liệu từ backup ngày ${backup.exportDate?.slice(0,10)}?\n⚠️ Dữ liệu hiện tại sẽ bị ghi đè!`)) return;
        Object.entries(backup.data).forEach(([k, v]) => localStorage.setItem(k, v));
        showToast(`✅ Nhập thành công ${count} mục! Đang tải lại...`, 'success');
        setTimeout(() => location.reload(), 1500);
      } catch (err) {
        showToast(`❌ Lỗi nhập backup: ${err.message}`, 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // reset input
  }

  // ==================== UTILITY ====================
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Start app on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
