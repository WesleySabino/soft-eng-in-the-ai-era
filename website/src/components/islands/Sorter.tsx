import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, spring, ui } from './shared';

export interface SorterBucket {
  id: string;
  label: string;
  color: string;
  hint?: string;
}
export interface SorterItem {
  text: string;
  bucket: string;
  why: string;
}

/**
 * Classification game: one card at a time, the learner chooses a bucket.
 * Feedback explains the reasoning; cards fly into their bucket with shared-layout animations.
 */
export default function Sorter({
  lang,
  prompt,
  buckets,
  items,
  doneText,
}: {
  lang: Lang;
  prompt: string;
  buckets: SorterBucket[];
  items: SorterItem[];
  doneText?: string;
}) {
  const t = ui(lang);
  const [index, setIndex] = useState(0);
  const [placed, setPlaced] = useState<{ i: number; ok: boolean }[]>([]);
  const [feedback, setFeedback] = useState<{ ok: boolean; chosen: string } | null>(null);
  const current = items[index];
  const finished = index >= items.length;
  const score = placed.filter((p) => p.ok).length;

  const choose = (bucket: string) => {
    if (feedback || finished) return;
    setFeedback({ ok: bucket === current.bucket, chosen: bucket });
  };
  const advance = () => {
    if (!feedback) return;
    setPlaced((p) => [...p, { i: index, ok: feedback.ok }]);
    setFeedback(null);
    setIndex((i) => i + 1);
  };
  const reset = () => {
    setIndex(0);
    setPlaced([]);
    setFeedback(null);
  };
  const bucketOf = (id: string) => buckets.find((b) => b.id === id)!;

  return (
    <LayoutGroup>
      <div className="glass p-5 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-zinc-400">{prompt}</p>
          <span className="font-mono text-xs text-zinc-500">
            {Math.min(index + 1, items.length)} / {items.length} · {t.score} {score}
          </span>
        </div>

        {/* Stage */}
        <div className="relative mt-6 grid min-h-[13rem] place-items-center">
          <AnimatePresence mode="popLayout">
            {!finished ? (
              <motion.div
                key={index}
                layoutId={`sorter-card-${index}`}
                initial={{ opacity: 0, y: 30, rotate: -2, scale: 0.95 }}
                animate={feedback && !feedback.ok ? { opacity: 1, y: 0, rotate: 0, scale: 1, x: [0, -10, 10, -6, 6, 0] } : { opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={spring}
                className="relative w-full max-w-xl rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-6 text-center shadow-2xl"
              >
                {/* stacked cards behind */}
                {items.length - index > 1 && <div className="absolute inset-x-6 -bottom-2 -z-10 h-full rounded-3xl border border-white/5 bg-white/[0.02]" aria-hidden="true" />}
                <p className="font-serif text-2xl leading-snug text-white sm:text-[1.7rem]">{current.text}</p>
                <AnimatePresence>
                  {feedback && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: easeOutExpo }} className="overflow-hidden">
                      <p className={cn('mt-4 text-sm font-semibold', feedback.ok ? 'text-emerald-300' : 'text-rose-300')}>
                        {feedback.ok ? `✓ ${t.correct}` : `✕ ${t.notQuite} → ${bucketOf(current.bucket).label}`}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-300">{current.why}</p>
                      <button onClick={advance} className="btn-primary mt-4" autoFocus>
                        {t.next} →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div key="end" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                <p className="display text-6xl">
                  {score}
                  <span className="text-zinc-500">/{items.length}</span>
                </p>
                {doneText && <p className="mx-auto mt-3 max-w-md text-zinc-400">{doneText}</p>}
                <button onClick={reset} className="btn-ghost mt-5">
                  ↺ {t.reset}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Buckets */}
        <div className={cn('mt-8 grid gap-3', buckets.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : buckets.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2')}>
          {buckets.map((b) => {
            const mine = placed.filter((p) => items[p.i].bucket === b.id);
            const highlight = feedback && (b.id === current?.bucket ? 'right' : b.id === feedback.chosen ? 'wrong' : null);
            return (
              <motion.button
                key={b.id}
                onClick={() => choose(b.id)}
                disabled={!!feedback || finished}
                whileHover={!feedback && !finished ? { y: -3 } : undefined}
                whileTap={!feedback && !finished ? { scale: 0.97 } : undefined}
                className={cn(
                  'group flex min-h-[7.5rem] flex-col rounded-2xl border p-4 text-left transition-colors',
                  !feedback && !finished ? 'cursor-pointer border-white/10 bg-white/[0.03] hover:bg-white/[0.06]' : 'border-white/10 bg-white/[0.02]',
                  highlight === 'right' && '!border-emerald-400/70',
                  highlight === 'wrong' && '!border-rose-400/70',
                )}
                style={{ boxShadow: highlight === 'right' ? `0 0 40px -12px ${b.color}` : undefined }}
              >
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: b.color, boxShadow: `0 0 12px ${b.color}` }} />
                  <span className="font-semibold text-white">{b.label}</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">{mine.length}</span>
                </span>
                {b.hint && <span className="mt-1 text-xs leading-snug text-zinc-500">{b.hint}</span>}
                <span className="mt-3 flex flex-wrap gap-1.5">
                  {mine.map((p) => (
                    <motion.span
                      key={p.i}
                      layoutId={`sorter-card-${p.i}`}
                      transition={spring}
                      title={items[p.i].text}
                      className={cn('block h-2 w-5 rounded-full', p.ok ? '' : 'opacity-50')}
                      style={{ background: b.color }}
                    />
                  ))}
                </span>
              </motion.button>
            );
          })}
        </div>

        {finished && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 grid gap-4 md:grid-cols-2">
            {buckets.map((b) => (
              <div key={b.id} className="rounded-2xl border border-white/10 p-4">
                <p className="font-semibold" style={{ color: b.color }}>
                  {b.label}
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-300">
                  {items
                    .filter((it) => it.bucket === b.id)
                    .map((it) => (
                      <li key={it.text}>• {it.text}</li>
                    ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </LayoutGroup>
  );
}
