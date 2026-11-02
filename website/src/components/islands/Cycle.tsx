import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

export interface CycleStep {
  title: string;
  body: string;
}

/** Steps arranged on a ring. Autoplays (pausable) and lets the learner jump to any step. */
export default function Cycle({ lang, steps, center, interval = 4200 }: { lang: Lang; steps: CycleStep[]; center: string; interval?: number }) {
  const t = ui(lang);
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(false);
  const n = steps.length;

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setI((x) => (x + 1) % n), interval);
    return () => clearInterval(id);
  }, [playing, n, interval]);

  const R = 42; // % radius
  const angle = (k: number) => (k / n) * Math.PI * 2 - Math.PI / 2;

  return (
    <div className="glass grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div className="relative mx-auto aspect-square w-full max-w-[26rem]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgb(255 255 255 / .08)" strokeWidth="0.6" />
          <motion.circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.8"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            initial={false}
            animate={{ pathLength: (i + 1) / n }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          />
        </svg>
        <div className="absolute inset-[22%] grid place-items-center rounded-full border border-white/10 bg-black/30 p-4 text-center">
          <span className="font-serif text-lg leading-tight text-zinc-300 italic sm:text-xl">{center}</span>
        </div>
        {steps.map((s, k) => {
          const x = 50 + R * Math.cos(angle(k));
          const y = 50 + R * Math.sin(angle(k));
          return (
            <button
              key={s.title}
              onClick={() => {
                setI(k);
                setPlaying(false);
              }}
              aria-label={`${k + 1}. ${s.title}`}
              aria-pressed={i === k}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.span
                animate={{ scale: i === k ? 1.25 : 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className={cn('grid h-10 w-10 place-items-center rounded-full border font-mono text-xs sm:h-11 sm:w-11', i === k ? 'border-transparent text-ink-950' : k < i ? 'border-[var(--accent)]/50 bg-ink-900 text-white' : 'border-white/15 bg-ink-900 text-zinc-400')}
                style={{ background: i === k ? 'var(--accent)' : undefined, boxShadow: i === k ? '0 0 30px var(--accent)' : undefined }}
              >
                {k + 1}
              </motion.span>
            </button>
          );
        })}
      </div>

      <div>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.45, ease: easeOutExpo }} aria-live="polite">
            <p className="font-mono text-xs text-[var(--accent)]">
              {t.step} {i + 1} / {n}
            </p>
            <h3 className="display mt-3 text-4xl">{steps[i].title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">{steps[i].body}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex gap-2">
          <button className="btn-ghost !px-4 !py-2 text-xs" onClick={() => setI((i - 1 + n) % n)}>
            ← {t.stepBack}
          </button>
          <button className="btn-ghost !px-4 !py-2 text-xs" onClick={() => setPlaying(!playing)}>
            {playing ? `❚❚ ${t.pause}` : `▶ ${t.play}`}
          </button>
          <button className="btn-primary !px-4 !py-2 text-xs" onClick={() => setI((i + 1) % n)}>
            {t.stepForward} →
          </button>
        </div>
      </div>
    </div>
  );
}
