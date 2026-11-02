/**
 * Reading progress stored locally (no server). When analytics is enabled,
 * finishing a chapter also sends an anonymous `chapter_complete` event.
 * - Chapters mark themselves complete when #chapter-end becomes visible.
 * - Any element with [data-progress-for="<id>"] gets data-done="true" when completed.
 * - [data-progress-count] shows "n / 18", [data-progress-ring] animates an SVG ring.
 */
const KEY = 'seai:progress:v1';

export function readProgress(): number[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
}

function write(list: number[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify([...new Set(list)].sort((a, b) => a - b)));
  } catch {
    /* storage unavailable: progress is just not persisted */
  }
  paint();
}

export function markDone(id: number) {
  const list = readProgress();
  if (list.includes(id)) return;
  write([...list, id]);
  // content_language is added to every event by Analytics.astro
  (window as any).gtag?.('event', 'chapter_complete', { chapter_id: String(id) });
}

function paint() {
  const done = readProgress();
  document.querySelectorAll<HTMLElement>('[data-progress-for]').forEach((el) => {
    el.dataset.done = done.includes(Number(el.dataset.progressFor)) ? 'true' : 'false';
  });
  const total = Number(document.body.dataset.total || 18);
  document.querySelectorAll<HTMLElement>('[data-progress-count]').forEach((el) => {
    el.textContent = `${done.length} / ${total}`;
  });
  document.querySelectorAll<SVGCircleElement>('[data-progress-ring]').forEach((c) => {
    const r = Number(c.getAttribute('r'));
    const len = 2 * Math.PI * r;
    c.style.strokeDasharray = `${len}`;
    c.style.strokeDashoffset = `${len * (1 - done.length / total)}`;
  });
  // "continue" buttons point to the first unfinished chapter
  document.querySelectorAll<HTMLAnchorElement>('[data-continue]').forEach((a) => {
    const links = JSON.parse(a.dataset.continue || '{}') as Record<string, string>;
    const next = Object.keys(links)
      .map(Number)
      .sort((x, y) => x - y)
      .find((id) => !done.includes(id));
    if (done.length && next) a.href = links[next];
  });
}

function init() {
  paint();
  const id = Number(document.body.dataset.chapter || 0);
  const end = document.getElementById('chapter-end');
  if (id && end) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        markDone(id);
        io.disconnect();
      }
    });
    io.observe(end);
  }
  document.querySelectorAll('[data-reset-progress]').forEach((b) =>
    b.addEventListener('click', () => write([])),
  );
  window.addEventListener('storage', (e) => e.key === KEY && paint());
}

init();
