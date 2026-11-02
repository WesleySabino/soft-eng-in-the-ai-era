import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, softSpring, ui } from './shared';

export interface DeckCard {
  title: string;
  tag?: string;
  summary: string;
  detail: string;
  example?: string;
  color?: string;
  icon?: string;
}

/** Grid of concept cards; selecting one expands it into a focused view with a shared-layout animation. */
export default function CardDeck({ lang, cards, cols = 3, exampleLabel }: { lang: Lang; cards: DeckCard[]; cols?: 2 | 3 | 4; exampleLabel?: string }) {
  const t = ui(lang);
  const [open, setOpen] = useState<number | null>(null);
  const palette = ['#a78bfa', '#22d3ee', '#fbbf24', '#34d399', '#fb7185', '#60a5fa', '#f472b6'];
  const colorOf = (i: number) => cards[i].color ?? palette[i % palette.length];
  const ex = exampleLabel ?? (lang === 'en' ? 'In practice' : 'Na prática');

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % cards.length));
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o - 1 + cards.length) % cards.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, cards.length]);

  return (
    <div className="relative">
      <div className={cn('grid gap-4 sm:grid-cols-2', cols === 3 && 'lg:grid-cols-3', cols === 4 && 'lg:grid-cols-4')}>
        {cards.map((c, i) => (
          <motion.button
            key={c.title}
            layoutId={`deck-${c.title}`}
            onClick={() => setOpen(i)}
            whileHover={{ y: -4 }}
            transition={softSpring}
            className="glass spotlight group flex min-h-[12rem] cursor-pointer flex-col p-6 text-left"
            style={{ ['--accent' as string]: colorOf(i) }}
          >
            <span className="flex items-center justify-between gap-3">
              <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase" style={{ color: colorOf(i) }}>
                {c.tag ?? String(i + 1).padStart(2, '0')}
              </span>
              {c.icon && <span className="text-xl" aria-hidden="true">{c.icon}</span>}
            </span>
            <span className="mt-4 font-serif text-[1.65rem] leading-tight text-white">{c.title}</span>
            <span className="mt-2 text-sm leading-relaxed text-zinc-400">{c.summary}</span>
            <span className="mt-auto pt-4 text-xs font-medium text-zinc-500 transition group-hover:text-white">＋</span>
          </motion.button>
        ))}
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
      <AnimatePresence>
        {open !== null && (
          <motion.div className="fixed inset-0 z-[90] grid place-items-center p-4 sm:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} data-lenis-prevent>
            <motion.div className="absolute inset-0 bg-ink-950/80 backdrop-blur-md" onClick={() => setOpen(null)} />
            <motion.div
              layoutId={`deck-${cards[open].title}`}
              role="dialog"
              aria-modal="true"
              aria-label={cards[open].title}
              transition={softSpring}
              className="glass relative max-h-[88vh] w-full max-w-2xl overflow-y-auto !bg-ink-900/95 p-7 sm:p-10"
              style={{ ['--accent' as string]: colorOf(open), boxShadow: `0 40px 120px -40px ${colorOf(open)}` }}
            >
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5, ease: easeOutExpo }}>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase" style={{ color: colorOf(open) }}>
                    {cards[open].tag ?? String(open + 1).padStart(2, '0')}
                  </span>
                  <button onClick={() => setOpen(null)} className="btn-ghost !px-3 !py-1 text-xs" autoFocus>
                    {t.close} ✕
                  </button>
                </div>
                <h3 className="display mt-5 text-4xl sm:text-5xl">{cards[open].title}</h3>
                <p className="mt-5 text-lg leading-relaxed text-zinc-200">{cards[open].detail}</p>
                {cards[open].example && (
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase" style={{ color: colorOf(open) }}>
                      {ex}
                    </p>
                    <p className="mt-2 leading-relaxed text-zinc-300">{cards[open].example}</p>
                  </div>
                )}
                <div className="mt-8 flex justify-between">
                  <button className="btn-ghost !py-1.5 text-xs" onClick={() => setOpen((open - 1 + cards.length) % cards.length)}>
                    ← {t.previous}
                  </button>
                  <button className="btn-ghost !py-1.5 text-xs" onClick={() => setOpen((open + 1) % cards.length)}>
                    {t.next} →
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
