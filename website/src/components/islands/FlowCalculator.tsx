import { motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';

function Bar({ a, b, label, unit, f }: { a: number; b: number; label: string; unit: string; f: (n: number, d?: number) => string }) {
  return (
    <div>
      <div className="flex justify-between font-mono text-xs text-zinc-400">
        <span>{label}</span>
        <span className="text-white">
          {f(a + b)} {unit}
        </span>
      </div>
      <div className="mt-2 flex h-10 overflow-hidden rounded-xl bg-white/5">
        <motion.div className="flex h-full items-center justify-center overflow-hidden bg-[var(--accent)] text-[0.65rem] font-semibold whitespace-nowrap text-ink-950" animate={{ width: `${a}%` }} transition={{ type: 'spring', stiffness: 110, damping: 20 }}>
          {a > 8 && `${f(a)}${unit}`}
        </motion.div>
        <motion.div className="flex h-full items-center justify-center overflow-hidden bg-zinc-600/60 text-[0.65rem] font-semibold whitespace-nowrap text-white" animate={{ width: `${b}%` }} transition={{ type: 'spring', stiffness: 110, damping: 20 }}>
          {b > 8 && `${f(b)}${unit}`}
        </motion.div>
      </div>
    </div>
  );
}

function Slider({ label, value, set, min, max, step, fmt }: { label: string; value: number; set: (n: number) => void; min: number; max: number; step: number; fmt: (n: number) => string }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3 text-sm text-zinc-300">
        <span>{label}</span>
        <span className="font-mono text-lg text-white">{fmt(value)}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(Number(e.target.value))} className="mt-2 w-full accent-[var(--accent)]" />
    </label>
  );
}

/**
 * Amdahl's law for delivery: speeding up implementation only shrinks its share of elapsed time.
 * Defaults reproduce the report's illustrative example (40h implementation + 60h of everything else).
 */
export default function FlowCalculator({ lang }: { lang: Lang }) {
  const [impl, setImpl] = useState(40);
  const [speed, setSpeed] = useState(10);
  const [restSpeed, setRestSpeed] = useState(1);
  const rest = 100 - impl;
  const newImpl = impl / speed;
  const newRest = rest / restSpeed;
  const total = newImpl + newRest;
  const overall = 100 / total;
  const loc = lang === 'en' ? 'en-US' : 'pt-BR';
  const f = (n: number, d = 1) => n.toLocaleString(loc, { maximumFractionDigits: d, minimumFractionDigits: d });
  const L = lang === 'en'
    ? { impl: 'Share of elapsed time spent implementing', speed: 'AI speedup on implementation', rest: 'Speedup on decisions, waiting, integration & validation', before: 'Before', after: 'After', implL: 'Implementation', restL: 'Decisions · waits · integration · validation', overall: 'Overall delivery speedup', hours: 'h', insight: (s: number) => `Even an infinite implementation speedup caps out at ${f(100 / rest)}×. The next win is in the other ${rest} hours.`, example: 'Fictitious numbers, sequential stages — an illustration, not a measurement.' }
    : { impl: 'Parcela do tempo decorrido gasta implementando', speed: 'Aceleração da implementação com IA', rest: 'Aceleração de decisões, esperas, integração e validação', before: 'Antes', after: 'Depois', implL: 'Implementação', restL: 'Decisões · esperas · integração · validação', overall: 'Aceleração total da entrega', hours: 'h', insight: (s: number) => `Mesmo uma aceleração infinita da implementação fica limitada a ${f(100 / rest)}×. O próximo ganho está nas outras ${rest} horas.`, example: 'Números fictícios, etapas sequenciais — uma ilustração, não uma medição.' };

  return (
    <div className="glass grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
      <div className="grid content-start gap-6">
        <Slider label={L.impl} value={impl} set={setImpl} min={10} max={90} step={5} fmt={(n) => `${n}%`} />
        <Slider label={L.speed} value={speed} set={setSpeed} min={1} max={50} step={1} fmt={(n) => `${n}×`} />
        <Slider label={L.rest} value={restSpeed} set={setRestSpeed} min={1} max={4} step={0.25} fmt={(n) => `${f(n, 2)}×`} />
        <p className="text-xs text-zinc-500">{L.example}</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 text-xs text-zinc-400">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-[var(--accent)]" />
            {L.implL}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-zinc-600" />
            {L.restL}
          </span>
        </div>
        <Bar a={impl} b={rest} label={L.before} unit={L.hours} f={f} />
        <Bar a={newImpl} b={newRest} label={L.after} unit={L.hours} f={f} />
        <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="font-mono text-[0.68rem] tracking-[0.2em] text-zinc-500 uppercase">{L.overall}</p>
          <motion.p key={overall.toFixed(2)} initial={{ scale: 1.08 }} animate={{ scale: 1 }} className="display mt-2 text-6xl">
            {f(overall, 2)}×
          </motion.p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{L.insight(overall)}</p>
        </div>
      </div>
    </div>
  );
}
