import { motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';

/**
 * Two implementations that "look simple": a membership check inside a loop (O(n²))
 * versus building a hash set once (O(n)). Drag n and watch the cost diverge.
 */
export default function ComplexityViz({ lang }: { lang: Lang }) {
  const [exp, setExp] = useState(3); // n = 10^exp
  const n = Math.round(10 ** exp);
  const quad = n * n;
  const lin = 2 * n;
  const OPS_PER_SEC = 2e8;
  const fmtTime = (ops: number) => {
    const s = ops / OPS_PER_SEC;
    if (s < 1e-3) return `${(s * 1e6).toFixed(0)} µs`;
    if (s < 1) return `${(s * 1e3).toFixed(1)} ms`;
    if (s < 120) return `${s.toFixed(1)} s`;
    if (s < 7200) return `${(s / 60).toFixed(0)} min`;
    if (s < 172800) return `${(s / 3600).toFixed(1)} h`;
    return `${(s / 86400).toFixed(0)} ${lang === 'en' ? 'days' : 'dias'}`;
  };
  const maxLog = Math.log10(1e14);
  const w = (ops: number) => `${Math.max(2, (Math.log10(Math.max(ops, 1)) / maxLog) * 100)}%`;
  const L = {
    en: { n: 'Items to reconcile (n)', a: 'for each order → orders_seen.includes(id)', b: 'seen = new Set(ids) → seen.has(id)', ops: 'operations', time: 'estimated time', note: 'Both versions look fine in review with 100 rows. The difference only appears with real volume — which is why you must recognize the shape of the cost, even when you didn’t type the code.' },
    pt: { n: 'Itens a reconciliar (n)', a: 'para cada pedido → pedidos_vistos.includes(id)', b: 'vistos = new Set(ids) → vistos.has(id)', ops: 'operações', time: 'tempo estimado', note: 'As duas versões parecem corretas na revisão com 100 linhas. A diferença só aparece com volume real — por isso é preciso reconhecer a forma do custo, mesmo sem ter digitado o código.' },
  }[lang];
  const rows = [
    { label: 'O(n²)', code: L.a, ops: quad, color: '#fb7185' },
    { label: 'O(n)', code: L.b, ops: lin, color: '#34d399' },
  ];
  return (
    <div className="glass p-5 sm:p-8">
      <label className="flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-300">
        <span>{L.n}</span>
        <span className="font-mono text-2xl text-white">{n.toLocaleString(lang === 'en' ? 'en-US' : 'pt-BR')}</span>
      </label>
      <input type="range" min={1} max={7} step={0.05} value={exp} onChange={(e) => setExp(Number(e.target.value))} className="mt-4 w-full accent-[var(--accent)]" aria-label={L.n} />
      <div className="mt-8 grid gap-6">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-mono text-sm" style={{ color: r.color }}>
                {r.label} <span className="text-zinc-500">· {r.code}</span>
              </span>
              <span className="font-mono text-sm text-white">{fmtTime(r.ops)}</span>
            </div>
            <div className="mt-2 h-4 overflow-hidden rounded-full bg-white/5">
              <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, ${r.color}55, ${r.color})` }} animate={{ width: w(r.ops) }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
            </div>
            <p className="mt-1 font-mono text-[0.68rem] text-zinc-500">
              ≈ {r.ops.toExponential(1).replace('e+', '×10^')} {L.ops} · {L.time} @ 2×10^8 ops/s
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-zinc-400">{L.note}</p>
    </div>
  );
}
