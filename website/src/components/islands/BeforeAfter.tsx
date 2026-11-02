import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo } from './shared';

/** Toggle between two "centers of gravity"; each row morphs from the old framing to the new one. */
export default function BeforeAfter({ lang, before, after, pairs }: { lang: Lang; before: string; after: string; pairs: [string, string][] }) {
  const [isAfter, setAfter] = useState(false);
  const [rowFlip, setRowFlip] = useState<Record<number, boolean>>({});
  const hint = lang === 'en' ? 'Flip the switch — or tap a single row.' : 'Vire a chave — ou toque em uma linha.';

  return (
    <div className="glass p-5 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">{hint}</p>
        <button
          role="switch"
          aria-checked={isAfter}
          onClick={() => {
            setAfter(!isAfter);
            setRowFlip({});
          }}
          className="relative flex cursor-pointer items-center rounded-full border border-white/15 bg-white/5 p-1 text-xs font-semibold"
        >
          <motion.span
            layout
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={cn('absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full', isAfter ? 'right-1' : 'left-1')}
            style={{ background: isAfter ? 'var(--accent)' : 'rgb(255 255 255 / .14)' }}
          />
          <span className={cn('relative z-10 px-4 py-1.5 transition-colors', !isAfter ? 'text-white' : 'text-zinc-400')}>{before}</span>
          <span className={cn('relative z-10 px-4 py-1.5 transition-colors', isAfter ? 'text-ink-950' : 'text-zinc-400')}>{after}</span>
        </button>
      </div>
      <ul className="mt-6 grid gap-3">
        {pairs.map(([b, a], i) => {
          const showAfter = rowFlip[i] ?? isAfter;
          return (
            <li key={i}>
              <button
                onClick={() => setRowFlip((r) => ({ ...r, [i]: !showAfter }))}
                className={cn('flex w-full cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-colors duration-500', showAfter ? 'border-[var(--accent)]/40 bg-[var(--accent)]/[0.07]' : 'border-white/10 bg-white/[0.02]')}
              >
                <span className={cn('font-mono text-xs transition-colors', showAfter ? 'text-[var(--accent)]' : 'text-zinc-600')}>{String(i + 1).padStart(2, '0')}</span>
                <span className="relative min-h-[1.6em] flex-1 overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={String(showAfter)}
                      initial={{ y: 18, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: -18, opacity: 0, filter: 'blur(4px)' }}
                      transition={{ duration: 0.45, ease: easeOutExpo, delay: rowFlip[i] === undefined ? i * 0.05 : 0 }}
                      className={cn('block leading-snug', showAfter ? 'font-medium text-white' : 'text-zinc-400 line-through decoration-white/20')}
                    >
                      {showAfter ? a : b}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
