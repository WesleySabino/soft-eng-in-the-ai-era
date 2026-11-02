import { AnimatePresence, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}

export default function Quiz({ lang, questions, title }: { lang: Lang; questions: QuizQuestion[]; title?: string }) {
  const t = ui(lang);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[i];

  const choose = (k: number) => {
    if (picked !== null) return;
    setPicked(k);
    if (k === q.answer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= questions.length) setDone(true);
    else {
      setI(i + 1);
      setPicked(null);
    }
  };
  const restart = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  const sparks = useMemo(
    () => Array.from({ length: 18 }, (_, k) => ({ a: (k / 18) * Math.PI * 2, d: 60 + Math.random() * 60 })),
    [done],
  );

  return (
    <div className="glass relative overflow-hidden p-6 sm:p-9" aria-live="polite">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow">{title ?? t.checkUnderstanding}</p>
        <div className="flex gap-1.5" aria-hidden="true">
          {questions.map((_, k) => (
            <span
              key={k}
              className={cn('h-1.5 rounded-full transition-all duration-500', k === i && !done ? 'w-8 bg-[var(--accent)]' : 'w-3 bg-white/15', (k < i || done) && 'bg-white/50')}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <p className="mt-6 font-mono text-xs text-zinc-500">
              {t.question} {i + 1} {t.of} {questions.length}
            </p>
            <h3 className="mt-2 font-serif text-2xl leading-snug text-white sm:text-3xl">{q.q}</h3>
            <div className="mt-6 grid gap-3">
              {q.options.map((o, k) => {
                const isAnswer = k === q.answer;
                const isPicked = k === picked;
                const state = picked === null ? 'idle' : isAnswer ? 'right' : isPicked ? 'wrong' : 'dim';
                return (
                  <motion.button
                    key={k}
                    onClick={() => choose(k)}
                    disabled={picked !== null}
                    whileHover={picked === null ? { x: 4 } : undefined}
                    whileTap={picked === null ? { scale: 0.98 } : undefined}
                    animate={state === 'wrong' ? { x: [0, -8, 8, -5, 5, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className={cn(
                      'flex w-full items-start gap-4 rounded-2xl border px-5 py-4 text-left text-[0.98rem] leading-snug transition-colors',
                      state === 'idle' && 'cursor-pointer border-white/10 bg-white/[0.03] text-zinc-200 hover:border-white/25 hover:bg-white/[0.06]',
                      state === 'right' && 'border-emerald-400/60 bg-emerald-400/10 text-white',
                      state === 'wrong' && 'border-rose-400/60 bg-rose-400/10 text-white',
                      state === 'dim' && 'border-white/5 text-zinc-500',
                    )}
                  >
                    <span className={cn('mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[0.7rem]', state === 'right' ? 'border-emerald-400 bg-emerald-400 text-ink-950' : state === 'wrong' ? 'border-rose-400 bg-rose-400 text-ink-950' : 'border-white/20')}>
                      {state === 'right' ? '✓' : state === 'wrong' ? '✕' : String.fromCharCode(65 + k)}
                    </span>
                    <span>{o}</span>
                  </motion.button>
                );
              })}
            </div>
            <AnimatePresence>
              {picked !== null && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: easeOutExpo }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className={cn('font-semibold', picked === q.answer ? 'text-emerald-300' : 'text-rose-300')}>
                      {picked === q.answer ? t.correct : t.notQuite}
                    </p>
                    <p className="mt-1.5 leading-relaxed text-zinc-300">{q.explain}</p>
                  </div>
                  <button onClick={next} className="btn-primary mt-5">
                    {i + 1 >= questions.length ? t.score : t.next} →
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div key="done" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: easeOutExpo }} className="relative py-10 text-center">
            <div className="pointer-events-none absolute top-1/2 left-1/2" aria-hidden="true">
              {score === questions.length &&
                sparks.map((s, k) => (
                  <motion.span
                    key={k}
                    className="absolute h-1.5 w-1.5 rounded-full"
                    style={{ background: ['#a78bfa', '#22d3ee', '#fbbf24', '#34d399'][k % 4] }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{ x: Math.cos(s.a) * s.d * 2, y: Math.sin(s.a) * s.d * 1.4, opacity: 0 }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                  />
                ))}
            </div>
            <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase">{t.score}</p>
            <p className="display mt-3 text-7xl">
              {score}
              <span className="text-zinc-500">/{questions.length}</span>
            </p>
            <button onClick={restart} className="btn-ghost mt-8">
              ↺ {t.tryAgain}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
