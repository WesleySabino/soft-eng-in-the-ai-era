/**
 * Site-wide motion layer: Lenis smooth scrolling + GSAP ScrollTrigger/SplitText.
 * Everything is declarative through data attributes so .astro pages stay static and indexable:
 *   data-reveal            fade/slide in when entering the viewport (data-reveal="left|right|scale")
 *   data-split             split heading into words and reveal them with a mask
 *   data-scrub             words light up progressively while scrolling (for big statements)
 *   data-count="123.4"     animated counter (data-decimals, data-prefix, data-suffix, data-locale)
 *   data-bar="64"          bar grows to the given width (%) when visible
 *   data-parallax="0.2"    vertical parallax factor
 *   data-draw              SVG paths stroke-draw on enter
 *   .spotlight             pointer-following glow (CSS vars)
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

function initLenis() {
  if (reduce) return;
  const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  (window as any).__lenis = lenis;
  // in-page anchor links
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')!;
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    });
  });
}

function initReveal() {
  const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (reduce) {
    els.forEach((el) => (el.style.opacity = '1'));
    return;
  }
  els.forEach((el) => {
    const kind = el.dataset.reveal;
    const from: gsap.TweenVars = { opacity: 0, y: 40 };
    if (kind === 'left') Object.assign(from, { x: -50, y: 0 });
    if (kind === 'right') Object.assign(from, { x: 50, y: 0 });
    if (kind === 'scale') Object.assign(from, { scale: 0.92, y: 20 });
    gsap.fromTo(
      el,
      from,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: 'expo.out',
        delay: Number(el.dataset.delay ?? 0),
        clearProps: 'transform',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });
}

function initSplit() {
  const els = gsap.utils.toArray<HTMLElement>('[data-split]');
  els.forEach((el) => {
    el.style.visibility = 'visible';
    if (reduce) return;
    SplitText.create(el, {
      type: 'words',
      mask: 'words',
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          yPercent: 110,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.045,
          delay: Number(el.dataset.delay ?? 0),
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      },
    });
  });
}

function initScrub() {
  gsap.utils.toArray<HTMLElement>('[data-scrub]').forEach((el) => {
    if (reduce) return;
    SplitText.create(el, {
      type: 'words',
      autoSplit: true,
      onSplit(self) {
        return gsap.fromTo(
          self.words,
          { opacity: 0.14 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true },
          },
        );
      },
    });
  });
}

function initCounters() {
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count);
    const decimals = Number(el.dataset.decimals ?? 0);
    const locale = el.dataset.locale ?? 'en-US';
    const prefix = el.dataset.prefix ?? '';
    const suffix = el.dataset.suffix ?? '';
    const fmt = (v: number) =>
      prefix +
      v.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) +
      suffix;
    if (reduce) {
      el.textContent = fmt(target);
      return;
    }
    const obj = { v: 0 };
    el.textContent = fmt(0);
    gsap.to(obj, {
      v: target,
      duration: 2.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => (el.textContent = fmt(obj.v)),
    });
  });
}

function initBars() {
  gsap.utils.toArray<HTMLElement>('[data-bar]').forEach((el) => {
    const w = `${el.dataset.bar}%`;
    if (reduce) {
      el.style.width = w;
      return;
    }
    gsap.fromTo(
      el,
      { width: '0%' },
      {
        width: w,
        duration: 1.8,
        ease: 'expo.out',
        delay: Number(el.dataset.delay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      },
    );
  });
}

function initParallax() {
  if (reduce) return;
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    const f = Number(el.dataset.parallax || 0.2);
    gsap.to(el, {
      yPercent: -100 * f,
      ease: 'none',
      scrollTrigger: { trigger: el.parentElement ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
}

function initDraw() {
  gsap.utils.toArray<SVGPathElement>('[data-draw] path, [data-draw] line, [data-draw] circle').forEach((p) => {
    if (reduce || typeof p.getTotalLength !== 'function') return;
    const len = p.getTotalLength();
    gsap.fromTo(
      p,
      { strokeDasharray: len, strokeDashoffset: len },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: { trigger: p.closest('[data-draw]') as Element, start: 'top 85%', once: true },
      },
    );
  });
}

function initProgressBar() {
  const bar = document.getElementById('read-progress');
  if (!bar) return;
  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
  });
}

function initSpotlight() {
  document.addEventListener(
    'pointermove',
    (e) => {
      const card = (e.target as HTMLElement | null)?.closest?.('.spotlight') as HTMLElement | null;
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true },
  );
}

function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  let last = 0;
  ScrollTrigger.create({
    start: 0,
    end: 'max',
    onUpdate(self) {
      const y = self.scroll();
      header.dataset.scrolled = y > 24 ? 'true' : 'false';
      header.dataset.hidden = y > 400 && y > last ? 'true' : 'false';
      last = y;
    },
  });
}

function boot() {
  initLenis();
  initSplit();
  initReveal();
  initScrub();
  initCounters();
  initBars();
  initParallax();
  initDraw();
  initProgressBar();
  initSpotlight();
  initHeader();
  // fonts and islands can shift layout: refresh trigger positions once things settle
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

try {
  boot();
} catch (err) {
  // never leave content invisible if something goes wrong
  root.classList.remove('motion-ok');
  console.error(err);
}
