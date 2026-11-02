import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

interface PathChapter {
  id: number;
  title: string;
  kicker: string;
  url: string;
  accent: string;
  minutes: number;
}

/** Reading-path selector: choose a goal and the matching chapters assemble into a route. */
export default function PathPicker({ lang, paths, chapters }: { lang: Lang; paths: { label: string; ids: number[] }[]; chapters: PathChapter[] }) {
  const t = ui(lang);
  const [sel, setSel] = useState(0);
  const route = paths[sel].ids.map((id) => chapters.find((c) => c.id === id)!);
  const total = route.reduce((s, c) => s + c.minutes, 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
      <div className="flex flex-col gap-2" role="tablist" aria-label={t.readingPaths}>
        {paths.map((p, i) => (
          <button
            key={p.label}
            role="tab"
            aria-selected={sel === i}
            onClick={() => setSel(i)}
            className={cn('relative cursor-pointer rounded-2xl px-5 py-4 text-left transition-colors', sel === i ? 'text-white' : 'text-zinc-400 hover:text-zinc-200')}
          >
            {sel === i && <motion.span layoutId="path-pill" className="absolute inset-0 rounded-2xl border border-white/15 bg-white/[0.06]" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            <span className="relative flex items-center gap-3">
              <span className="font-mono text-xs text-zinc-500">0{i + 1}</span>
              <span className="font-medium">{p.label}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="glass p-5 sm:p-7" role="tabpanel">
        <p className="font-mono text-xs text-zinc-500">
          {route.length} {t.chapters.toLowerCase()} · ~{total} {t.minutes}
        </p>
        <ol className="relative mt-5">
          <span className="absolute top-3 bottom-3 left-[1.15rem] w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" aria-hidden="true" />
          <AnimatePresence mode="popLayout">
            {route.map((c, k) => (
              <motion.li
                key={`${sel}-${c.id}`}
                layout
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: easeOutExpo, delay: k * 0.05 }}
              >
                <a href={c.url} className="group relative flex items-start gap-4 rounded-2xl p-2 transition hover:bg-white/[0.04]">
                  <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full border bg-ink-900 font-mono text-xs text-white" style={{ borderColor: c.accent, boxShadow: `0 0 18px -4px ${c.accent}` }}>
                    {String(c.id).padStart(2, '0')}
                  </span>
                  <span className="pt-1">
                    <span className="block font-medium text-white group-hover:underline">{c.title}</span>
                    <span className="mt-0.5 block text-sm text-zinc-400">{c.kicker}</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      </div>
    </div>
  );
}
