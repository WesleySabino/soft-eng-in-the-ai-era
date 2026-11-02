import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, load, save, ui } from './shared';

/** A persistent checklist with a progress ring. */
export default function Checklist({ lang, items, storageKey }: { lang: Lang; items: string[]; storageKey: string }) {
  const t = ui(lang);
  const [on, setOn] = useState<number[]>([]);
  useEffect(() => setOn(load<number[]>(storageKey, [])), [storageKey]);
  useEffect(() => save(storageKey, on), [on, storageKey]);
  const pct = on.length / items.length;
  const r = 26;
  const len = 2 * Math.PI * r;
  return (
    <div className="glass p-5 sm:p-8">
      <div className="flex items-center gap-5">
        <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90" aria-hidden="true">
          <circle cx="32" cy="32" r={r} fill="none" stroke="rgb(255 255 255 / .1)" strokeWidth="5" />
          <motion.circle cx="32" cy="32" r={r} fill="none" stroke="var(--accent)" strokeWidth="5" strokeLinecap="round" strokeDasharray={len} animate={{ strokeDashoffset: len * (1 - pct) }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
        </svg>
        <p className="font-mono text-sm text-zinc-300">
          {on.length} / {items.length}
        </p>
        {on.length > 0 && (
          <button className="ml-auto text-xs text-zinc-500 hover:text-white" onClick={() => setOn([])}>
            ↺ {t.reset}
          </button>
        )}
      </div>
      <ul className="mt-6 grid gap-2">
        {items.map((it, i) => {
          const c = on.includes(i);
          return (
            <li key={it}>
              <label className={cn('flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 text-sm transition-colors', c ? 'border-[var(--accent)]/50 bg-[var(--accent)]/[0.08] text-white' : 'border-white/10 text-zinc-300 hover:border-white/25')}>
                <input type="checkbox" checked={c} onChange={() => setOn((o) => (c ? o.filter((x) => x !== i) : [...o, i]))} className="mt-0.5 accent-[var(--accent)]" />
                {it}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
