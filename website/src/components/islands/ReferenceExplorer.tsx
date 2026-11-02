import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, ui } from './shared';

export interface Ref {
  id: string;
  category: string;
  citationHtml: string;
  noteHtml: string;
  url: string;
  year: string;
}

/** Filterable, searchable bibliography with layout animations. */
export default function ReferenceExplorer({ lang, refs }: { lang: Lang; refs: Ref[] }) {
  const t = ui(lang);
  const cats = useMemo(() => [...new Set(refs.map((r) => r.category))], [refs]);
  const [cat, setCat] = useState<string | null>(null);
  const [q, setQ] = useState('');
  const strip = (h: string) => h.replace(/<[^>]+>/g, '');
  const list = refs.filter((r) => (!cat || r.category === cat) && (!q || (strip(r.citationHtml) + strip(r.noteHtml) + r.id).toLowerCase().includes(q.toLowerCase())));
  const colors = ['#a78bfa', '#22d3ee', '#fbbf24', '#34d399', '#fb7185', '#60a5fa'];
  const colorOf = (c: string) => colors[cats.indexOf(c) % colors.length];

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setCat(null)} className={cn('cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition', !cat ? 'border-white bg-white text-ink-950' : 'border-white/10 text-zinc-400 hover:text-white')}>
            {t.all} · {refs.length}
          </button>
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(cat === c ? null : c)} className={cn('cursor-pointer rounded-full border px-4 py-1.5 text-xs font-semibold transition', cat === c ? 'text-ink-950' : 'border-white/10 text-zinc-400 hover:text-white')} style={cat === c ? { background: colorOf(c), borderColor: colorOf(c) } : undefined}>
              {c}
            </button>
          ))}
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`${t.search}… (DORA, METR, OWASP…)`} aria-label={t.search} className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-white/30 focus:outline-none lg:w-72" />
      </div>
      <LayoutGroup>
        <motion.ul layout className="mt-8 grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((r) => (
              <motion.li key={r.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ type: 'spring', stiffness: 260, damping: 28 }} className="glass spotlight flex flex-col p-5" style={{ ['--accent' as string]: colorOf(r.category) }}>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs font-semibold" style={{ color: colorOf(r.category) }}>
                    {r.id}
                  </span>
                  <span className="font-mono text-[0.65rem] text-zinc-500">{r.year}</span>
                </div>
                <p className="mt-2 text-[0.95rem] leading-snug font-medium text-white [&_a]:underline" dangerouslySetInnerHTML={{ __html: r.citationHtml }} />
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 [&_a]:underline" dangerouslySetInnerHTML={{ __html: r.noteHtml }} />
                {r.url && (
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="mt-auto pt-4 text-xs font-medium text-[var(--accent)] hover:underline">
                    {new URL(r.url).hostname.replace(/^www\./, '')} ↗
                  </a>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </div>
  );
}
