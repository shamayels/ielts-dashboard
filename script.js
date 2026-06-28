/* =========================================================
   IELTS Dashboard — Application Logic
========================================================= */

/* ========================================================================
   DATA: Resources
======================================================================== */
const RESOURCES = [
  {
    id: 'listening_reading',
    title: 'الاستماع والقراءة',
    icon: '🎧',
    color: 'from-blue-500 to-cyan-500',
    items: [
      { name: 'Asad Yaqub — تكتيكات الاختبار', url: 'https://youtube.com/@asadyaqubofficial?si=YLJp-wFChulCDDH4', type: 'youtube' },
      { name: 'IELTS Liz — شرح كل الأقسام', url: 'https://youtube.com/@ieltsliz?si=62W3pwS62yK66nvo', type: 'youtube' },
      { name: 'IELTS Liz — موقع الشرح المجاني', url: 'https://ieltsliz.com', type: 'website' },
      { name: 'AcademicEnglishHelp — استماع وقراءة', url: 'https://youtube.com/@aehelp?si=3Pqkjvqcw4OyelM5', type: 'youtube' },
    ]
  },
  {
    id: 'writing',
    title: 'الكتابة',
    icon: '✍️',
    color: 'from-violet-500 to-purple-600',
    items: [
      { name: 'IELTS Advantage — كل الأقسام', url: 'https://youtube.com/@ieltsadvantage?si=w78aNRqOi9V1ol9m', type: 'youtube' },
      { name: 'E2 IELTS — كل الأقسام', url: 'https://youtube.com/@e2ielts?si=BNX2LfF_H6OkGssj', type: 'youtube' },
      { name: 'AcademicEnglishHelp — بثوث حل أسئلة الكتابة', url: 'https://youtube.com/@aehelp?si=3Pqkjvqcw4OyelM5', type: 'youtube' },
    ]
  },
  {
    id: 'speaking',
    title: 'المحادثة',
    icon: '🗣️',
    color: 'from-amber-500 to-orange-600',
    items: [
      { name: 'English Speaking Success — الأفضل في المحادثة', url: 'https://youtube.com/@englishspeakingsuccess?si=kgSMkvzGOaWt2H3w', type: 'youtube' },
      { name: 'AcademicEnglishHelp', url: 'https://youtube.com/@aehelp?si=3Pqkjvqcw4OyelM5', type: 'youtube' },
    ]
  },
  {
    id: 'mock_tests',
    title: 'المراجعة والاختبارات التجريبية',
    icon: '📝',
    color: 'from-emerald-500 to-teal-600',
    items: [
      { name: 'دليلك للآيلتس — قناة يوتيوب', url: 'https://youtube.com/@dalilk4ielts?si=0xqQZZ_6qPuXCDcx', type: 'youtube' },
      { name: 'قناة تليجرام — دليلك للآيلتس', url: 'https://t.me/IELTSosamah', type: 'telegram' },
      { name: 'IELTS Ready — المجلس البريطاني', url: 'https://takeielts.britishcouncil.org/take-ielts/prepare/ielts-ready', type: 'website' },
    ]
  }
];

/* ========================================================================
   DATA: 6-Week Plan
======================================================================== */
const WEEKS = [
  {
    week: 1,
    title: 'التأسيس والتقييم الذاتي',
    subtitle: 'فهم الاختبار + اختبار تجريبي أولي',
    tasks: [
      'مشاهدة فيديو تعريفي عن تنسيق اختبار الآيلتس (IELTS Liz)',
      'عمل اختبار تحديد مستوى (Practice Test) على منصة IELTS Ready',
      'الانضمام لقناة دليلك للآيلتس على يوتيوب وتليجرام ومراجعة المحتوى المثبت',
      'مشاهدة 3 فيديوهات من Asad Yaqub عن تكتيكات القراءة',
      'تحديد نقاط القوة والضعف في كل قسم (استماع، قراءة، كتابة، محادثة)',
      'إنشاء جدول مذاكرة أسبوعي ثابت (تخصيص وقت يومي)'
    ]
  },
  {
    week: 2,
    title: 'أساسيات الاستماع والقراءة',
    subtitle: 'تكتيكات Skimming/Scanning وأنواع أسئلة الاستماع',
    tasks: [
      'مشاهدة سلسلة IELTS Liz لقسم القراءة (أنواع الأسئلة)',
      'تطبيق تمرين Skimming & Scanning على نص تجريبي واحد',
      'متابعة فيديوهات AcademicEnglishHelp الخاصة بالاستماع',
      'حل اختبار استماع كامل (Listening Practice Test) ومراجعة الأخطاء',
      'حفظ 20 مفردة جديدة من نصوص القراءة',
      'متابعة بث AcademicEnglishHelp المباشر إن وجد خلال الأسبوع'
    ]
  },
  {
    week: 3,
    title: 'انطلاقة الكتابة — Task 1 & 2',
    subtitle: 'هيكلة المقال والرسوم البيانية',
    tasks: [
      'مشاهدة شرح IELTS Advantage لهيكلية Writing Task 2',
      'مشاهدة شرح E2 IELTS لكيفية وصف الرسوم البيانية (Task 1)',
      'كتابة مقال Task 2 كامل وتقييمه ذاتياً باستخدام معايير التصحيح',
      'كتابة وصف Task 1 لرسم بياني (Line/Bar Chart)',
      'حفظ قائمة Linking Words الأساسية للكتابة',
      'مراقبة محتوى الكتابة في قناة دليلك للآيلتس (يوتيوب وتليجرام)'
    ]
  },
  {
    week: 4,
    title: 'تعميق المحادثة وبناء الثقة',
    subtitle: 'الأجزاء الثلاثة لاختبار Speaking',
    tasks: [
      'مشاهدة سلسلة English Speaking Success لأجزاء المحادثة الثلاثة',
      'التدرب على Part 1 (أسئلة شخصية) أمام المرآة أو مع صديق',
      'التدرب على Part 2 (Cue Card) بنظام الدقيقتين',
      'مشاهدة فيديو من AcademicEnglishHelp عن أخطاء المحادثة الشائعة',
      'تسجيل صوتي لنفسك والاستماع لتحديد الأخطاء',
      'حفظ تعبيرات وصفية (Idioms/Phrases) لرفع مستوى المفردات'
    ]
  },
  {
    week: 5,
    title: 'تكامل المهارات الأربع',
    subtitle: 'ربط الاستماع والقراءة والكتابة والمحادثة معاً',
    tasks: [
      'حل اختبار قراءة كامل بوقت محدد (60 دقيقة) من IELTS Ready',
      'حل اختبار استماع كامل بوقت محدد ومراجعة النتائج',
      'كتابة مقالين Task 2 بمواضيع مختلفة (Opinion / Discussion)',
      'جلسة محادثة كاملة محاكية للاختبار (Mock Speaking) مع تسجيل',
      'مراجعة فيديوهات Asad Yaqub لتكتيكات الوقت في الاختبار',
      'مراجعة شاملة للمفردات المحفوظة من الأسابيع السابقة'
    ]
  },
  {
    week: 6,
    title: 'المراجعة النهائية والاختبار التجريبي الشامل',
    subtitle: 'الاستعداد النفسي والفني ليوم الاختبار',
    tasks: [
      'حل اختبار تجريبي كامل (Full Mock Test) من IELTS Ready بجميع الأقسام',
      'مراجعة جميع الأخطاء المتكررة في كل قسم وتدوينها',
      'مراجعة أخيرة لفيديوهات IELTS Advantage و E2 IELTS عن استراتيجيات اللحظة الأخيرة',
      'جلسة محادثة أخيرة محاكية للاختبار الحقيقي',
      'الاطلاع على آخر التحديثات في قناة دليلك للآيلتس (يوتيوب وتليجرام)',
      'تجهيز الأوراق المطلوبة والتأكد من موقع وتوقيت الاختبار',
      'الحصول على راحة كافية وتجنب المذاكرة المكثفة قبل الاختبار بيوم'
    ]
  }
];

/* ========================================================================
   ICONS (inline SVG, no external deps)
======================================================================== */
const ICONS = {
  youtube: `<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.94-1.9-.94-2.36-1C16.96 2.5 12 2.5 12 2.5h-.01s-4.96 0-8.2.34c-.46.06-1.46.06-2.36 1-.71.72-.94 2.36-.94 2.36S0 8.13 0 10.06v1.87c0 1.93.23 3.86.23 3.86s.23 1.64.94 2.36c.9.94 2.08.91 2.6 1.01 1.9.18 8.06.34 8.23.34h.01s4.96-.01 8.2-.35c.46-.06 1.46-.06 2.36-1 .71-.72.94-2.36.94-2.36s.23-1.93.23-3.86v-1.87c0-1.93-.23-3.86-.23-3.86zM9.55 14.93V7.93l6.34 3.5-6.34 3.5z"/></svg>`,
  website: `<svg viewBox="0 0 24 24" class="w-5 h-5 fill-none stroke-current" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path d="M22.05 2.4 1.6 10.4c-.93.37-.93 1.69.03 2l5 1.6 1.9 6.1c.27.86 1.36 1.1 1.97.44l2.8-3.05 4.9 3.6c.7.5 1.7.13 1.9-.7L23.97 3.6c.22-.96-.74-1.65-1.92-1.2zM8.6 14.3l-.6-.2-1.2-3.9 11-7.1-9.2 11.2z"/></svg>`
};

/* ========================================================================
   STORAGE KEYS
======================================================================== */
const STORAGE_KEY = 'ielts_dashboard_progress_v1';
const DARK_MODE_KEY = 'ielts_dashboard_dark_mode';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}
function saveProgress(progress) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); }
  catch (e) { console.error('فشل حفظ التقدم', e); }
}

let progress = loadProgress();

/* ========================================================================
   RENDER: Resources
======================================================================== */
function renderResources() {
  const grid = document.getElementById('resourcesGrid');
  grid.innerHTML = RESOURCES.map((cat, i) => `
    <div class="card-hover fade-in bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl p-5 flex flex-col gap-4" style="animation-delay:${i * 60}ms">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-xl text-white shadow-md shrink-0">
          ${cat.icon}
        </div>
        <h3 class="font-extrabold text-base text-slate-900 dark:text-white">${cat.title}</h3>
      </div>
      <div class="flex flex-col gap-2">
        ${cat.items.map(item => `
          <a href="${item.url}" target="_blank" rel="noopener noreferrer"
             class="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <span class="shrink-0 text-slate-500 dark:text-slate-400 group-hover:text-emerald-500 transition-colors">${ICONS[item.type] || ICONS.website}</span>
            <span class="text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">${item.name}</span>
            <svg class="w-3.5 h-3.5 mr-auto ms-auto rtl:rotate-180 text-slate-400 group-hover:text-emerald-500 transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ========================================================================
   RENDER: Weeks Timeline
======================================================================== */
function taskKey(weekNum, taskIdx) { return `w${weekNum}_t${taskIdx}`; }

function renderWeeks() {
  const container = document.getElementById('weeksContainer');
  container.innerHTML = WEEKS.map((wk, wIdx) => {
    const completedCount = wk.tasks.filter((_, tIdx) => progress[taskKey(wk.week, tIdx)]).length;
    const total = wk.tasks.length;
    const pct = total ? Math.round((completedCount / total) * 100) : 0;
    const isDone = pct === 100;

    return `
    <div class="week-card fade-in bg-white dark:bg-slate-900 rounded-2xl border ${isDone ? 'border-emerald-400 dark:border-emerald-600' : 'border-slate-200 dark:border-slate-800'} shadow-sm overflow-hidden" style="animation-delay:${wIdx * 70}ms" id="week-card-${wk.week}">
      <button class="week-toggle w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-right hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors" data-week="${wk.week}">
        <div class="flex items-center gap-3 sm:gap-4 min-w-0">
          <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isDone ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-700 dark:to-slate-900'} flex items-center justify-center text-white font-extrabold text-base shrink-0 shadow-md">
            ${isDone ? '✓' : wk.week}
          </div>
          <div class="text-right min-w-0">
            <h3 class="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate">الأسبوع ${wk.week}: ${wk.title}</h3>
            <p class="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate">${wk.subtitle}</p>
          </div>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <span class="hidden sm:inline-block text-xs font-bold text-slate-500 dark:text-slate-400">${completedCount}/${total}</span>
          <div class="w-9 h-9 rounded-full grid place-items-center relative">
            <svg class="w-9 h-9 -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" stroke-width="3" class="text-slate-200 dark:text-slate-700"/>
              <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="${2 * Math.PI * 15}" stroke-dashoffset="${2 * Math.PI * 15 * (1 - pct / 100)}" stroke-linecap="round" class="text-emerald-500 transition-all duration-500"/>
            </svg>
            <span class="absolute text-[9px] font-extrabold text-slate-600 dark:text-slate-300">${pct}%</span>
          </div>
          <svg class="chevron w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </button>
      <div class="week-body" id="week-body-${wk.week}">
        <div class="px-4 sm:px-5 pb-5 pt-1 space-y-2 border-t border-slate-100 dark:border-slate-800">
          ${wk.tasks.map((task, tIdx) => {
            const key = taskKey(wk.week, tIdx);
            const checked = !!progress[key];
            return `
            <div class="task-row flex items-start gap-3 py-2 px-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
              <input type="checkbox" class="task-checkbox custom-checkbox mt-0.5" id="${key}" data-key="${key}" ${checked ? 'checked' : ''}>
              <label for="${key}" class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed cursor-pointer select-none">${task}</label>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>`;
  }).join('');

  // attach checkbox listeners
  document.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('change', onTaskToggle);
  });

  // attach week toggle listeners
  document.querySelectorAll('.week-toggle').forEach(btn => {
    btn.addEventListener('click', () => toggleWeek(btn.dataset.week, btn));
  });
}

function toggleWeek(weekNum, btnEl) {
  const body = document.getElementById(`week-body-${weekNum}`);
  const chevron = btnEl.querySelector('.chevron');
  const isOpen = body.classList.contains('open');
  if (isOpen) {
    body.classList.remove('open');
    chevron.classList.remove('rotated');
  } else {
    body.classList.add('open');
    chevron.classList.add('rotated');
  }
}

function onTaskToggle(e) {
  const key = e.target.dataset.key;
  progress[key] = e.target.checked;
  saveProgress(progress);
  updateProgressBar();
  // refresh just the week ring/badge without losing open state
  refreshWeekHeader(e.target);
}

function refreshWeekHeader(checkboxEl) {
  const weekBody = checkboxEl.closest('.week-body');
  if (!weekBody) return;
  const weekNum = weekBody.id.replace('week-body-', '');
  const wk = WEEKS.find(w => String(w.week) === String(weekNum));
  if (!wk) return;

  const completedCount = wk.tasks.filter((_, tIdx) => progress[taskKey(wk.week, tIdx)]).length;
  const total = wk.tasks.length;
  const pct = total ? Math.round((completedCount / total) * 100) : 0;
  const isDone = pct === 100;

  const card = document.getElementById(`week-card-${weekNum}`);
  const badge = card.querySelector('.week-toggle > div:first-child > div:first-child');
  const countLabel = card.querySelector('.week-toggle span.hidden');
  const ringCircle = card.querySelectorAll('circle')[1];
  const ringLabel = card.querySelector('.week-toggle .absolute');

  if (countLabel) countLabel.textContent = `${completedCount}/${total}`;
  if (ringCircle) {
    const r = 15;
    ringCircle.setAttribute('stroke-dashoffset', String(2 * Math.PI * r * (1 - pct / 100)));
  }
  if (ringLabel) ringLabel.textContent = `${pct}%`;
  if (badge) {
    badge.textContent = isDone ? '✓' : wk.week;
    badge.className = `w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${isDone ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-slate-600 to-slate-800 dark:from-slate-700 dark:to-slate-900'} flex items-center justify-center text-white font-extrabold text-base shrink-0 shadow-md`;
  }
  if (card) {
    card.className = `week-card fade-in bg-white dark:bg-slate-900 rounded-2xl border ${isDone ? 'border-emerald-400 dark:border-emerald-600' : 'border-slate-200 dark:border-slate-800'} shadow-sm overflow-hidden`;
  }
}

/* ========================================================================
   GLOBAL PROGRESS BAR
======================================================================== */
function getAllTaskKeys() {
  const keys = [];
  WEEKS.forEach(wk => wk.tasks.forEach((_, tIdx) => keys.push(taskKey(wk.week, tIdx))));
  return keys;
}

function updateProgressBar() {
  const allKeys = getAllTaskKeys();
  const total = allKeys.length;
  const done = allKeys.filter(k => progress[k]).length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressLabel').textContent = pct + '%';
  document.getElementById('taskCountLabel').textContent = `${done} من ${total} مهمة مكتملة`;
}

/* ========================================================================
   RESET
======================================================================== */
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('هل تريد إعادة تصفير كل التقدم في الخطة؟ سيتم حذف جميع علامات الصح.')) {
    progress = {};
    saveProgress(progress);
    renderWeeks();
    updateProgressBar();
  }
});

/* ========================================================================
   DARK MODE
======================================================================== */
function applyDarkMode(isDark) {
  document.documentElement.classList.toggle('dark', isDark);
  document.getElementById('modeIcon').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem(DARK_MODE_KEY, isDark ? '1' : '0');
}

function initDarkMode() {
  const saved = localStorage.getItem(DARK_MODE_KEY);
  let isDark;
  if (saved === null) {
    isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    isDark = saved === '1';
  }
  applyDarkMode(isDark);
}

document.getElementById('darkModeToggle').addEventListener('click', () => {
  const isDark = !document.documentElement.classList.contains('dark');
  applyDarkMode(isDark);
});

/* ========================================================================
   INIT
======================================================================== */
function init() {
  initDarkMode();
  renderResources();
  renderWeeks();
  updateProgressBar();
  // auto-open week 1 by default for first-time visitors
  const firstToggle = document.querySelector('.week-toggle[data-week="1"]');
  if (firstToggle) toggleWeek('1', firstToggle);
}

document.addEventListener('DOMContentLoaded', init);
