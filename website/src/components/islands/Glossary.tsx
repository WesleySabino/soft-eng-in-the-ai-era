import { motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { ui } from './shared';

/** Flip cards: the term on the front, the meaning on the back. */
export default function Glossary({ lang, terms }: { lang: Lang; terms: { term: string; meaning: string }[] }) {
  const t = ui(lang);
  const [flipped, setFlipped] = useState<string[]>([]);
  const [q, setQ] = useState('');
  const list = terms.filter((x) => !q || (x.term + x.meaning).toLowerCase().includes(q.toLowerCase()));
  const colors = ['#a78bfa', '#22d3ee', '#fbbf24', '#34d399', '#fb7185'];
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">{lang === 'en' ? 'Guess the meaning, then flip the card.' : 'Tente adivinhar o significado e depois vire a carta.'}</p>
        <div className="flex items-center gap-3">
          <button className="text-xs text-zinc-400 hover:text-white" onClick={() => setFlipped(flipped.length ? [] : terms.map((x) => x.term))}>
            {flipped.length ? `↺ ${t.reset}` : lang === 'en' ? 'Flip all' : 'Virar todas'}
          </button>
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`${t.search}…`} aria-label={t.search} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none" />
        </div>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((x) => {
          const i = terms.indexOf(x);
          const on = flipped.includes(x.term);
          const c = colors[i % colors.length];
          return (
            <li key={x.term} className="h-44 [perspective:1000px]">
              <motion.button onClick={() => setFlipped((f) => (on ? f.filter((y) => y !== x.term) : [...f, x.term]))} aria-pressed={on} aria-label={`${x.term}: ${x.meaning}`} animate={{ rotateY: on ? 180 : 0 }} transition={{ type: 'spring', stiffness: 160, damping: 20 }} className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]">
                <span className="glass absolute inset-0 flex flex-col justify-between p-5 text-left [backface-visibility:hidden]" style={{ boxShadow: `0 30px 60px -40px ${c}` }}>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: c }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-3xl text-white">{x.term}</span>
                  <span className="text-xs text-zinc-500">↻</span>
                </span>
                <span className="absolute inset-0 flex items-center rounded-3xl border p-5 text-left text-sm leading-relaxed text-zinc-100 [backface-visibility:hidden] [transform:rotateY(180deg)]" style={{ borderColor: `${c}66`, background: `linear-gradient(135deg, ${c}26, rgb(10 10 19 / .95))` }}>
                  {x.meaning}
                </span>
              </motion.button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
