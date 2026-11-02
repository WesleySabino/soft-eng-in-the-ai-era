import { motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';

interface Config {
  model: number;
  infra: number;
  human: number; // minutes per attempt
  accept: number; // %
}

/** Cost per accepted change = (models + infrastructure + human time) / accepted changes. Illustrative numbers. */
export default function CostCalculator({ lang }: { lang: Lang }) {
  const [rate, setRate] = useState(80);
  const [cfg, setCfg] = useState<Config[]>([
    { model: 0.4, infra: 0.3, human: 45, accept: 60 },
    { model: 2.5, infra: 0.3, human: 15, accept: 85 },
  ]);
  const L = lang === 'en'
    ? { a: 'Config A · cheapest per token', b: 'Config B · stronger model', model: 'Models & tools per attempt', infra: 'Execution & validation infra', human: 'Human prep, review & fixes', accept: 'Attempts accepted', rate: 'Cost of an engineer-hour', per: 'per accepted change', humanShare: 'human time', note: 'Illustrative numbers. Compare classes of change that are actually comparable, and keep watching after acceptance for escaped failures.', min: 'min' }
    : { a: 'Config. A · mais barata por token', b: 'Config. B · modelo mais forte', model: 'Modelos e ferramentas por tentativa', infra: 'Infra de execução e validação', human: 'Preparação, revisão e correção humanas', accept: 'Tentativas aceitas', rate: 'Custo da hora de engenharia', per: 'por mudança aceita', humanShare: 'tempo humano', note: 'Números ilustrativos. Compare classes de mudança realmente comparáveis e continue observando depois da aceitação para capturar falhas escapadas.', min: 'min' };
  const cost = (c: Config) => {
    const attempt = c.model + c.infra + (c.human / 60) * rate;
    return { total: attempt / (c.accept / 100), human: ((c.human / 60) * rate) / attempt };
  };
  const results = cfg.map(cost);
  const max = Math.max(...results.map((r) => r.total));
  const set = (i: number, k: keyof Config, v: number) => setCfg((cs) => cs.map((c, j) => (j === i ? { ...c, [k]: v } : c)));
  const money = (n: number) => n.toLocaleString(lang === 'en' ? 'en-US' : 'pt-BR', { style: 'currency', currency: 'USD', maximumFractionDigits: n < 10 ? 2 : 0 });
  const colors = ['#fb7185', '#34d399'];

  return (
    <div className="glass p-5 sm:p-8">
      <label className="block max-w-md">
        <span className="flex justify-between text-sm text-zinc-300">
          {L.rate} <span className="font-mono text-white">{money(rate)}</span>
        </span>
        <input type="range" min={20} max={200} step={5} value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full accent-[var(--accent)]" />
      </label>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {cfg.map((c, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-black/20 p-5" style={{ borderColor: `${colors[i]}44` }}>
            <p className="font-semibold" style={{ color: colors[i] }}>
              {i === 0 ? L.a : L.b}
            </p>
            {(
              [
                ['model', L.model, 0, 6, 0.1, (n: number) => money(n)],
                ['infra', L.infra, 0, 3, 0.1, (n: number) => money(n)],
                ['human', L.human, 0, 120, 5, (n: number) => `${n} ${L.min}`],
                ['accept', L.accept, 10, 100, 5, (n: number) => `${n}%`],
              ] as const
            ).map(([k, label, min, max, step, fmt]) => (
              <label key={k} className="mt-4 block">
                <span className="flex justify-between text-xs text-zinc-400">
                  {label} <span className="font-mono text-zinc-200">{fmt(c[k])}</span>
                </span>
                <input type="range" min={min} max={max} step={step} value={c[k]} onChange={(e) => set(i, k, Number(e.target.value))} className="mt-1.5 w-full" style={{ accentColor: colors[i] }} />
              </label>
            ))}
            <div className="mt-6">
              <div className="h-3 overflow-hidden rounded-full bg-white/5">
                <motion.div className="h-full rounded-full" style={{ background: colors[i] }} animate={{ width: `${(results[i].total / max) * 100}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
              </div>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="display text-4xl">{money(results[i].total)}</span>
                <span className="text-xs text-zinc-400">{L.per}</span>
              </p>
              <p className="mt-1 font-mono text-[0.68rem] text-zinc-500">
                {Math.round(results[i].human * 100)}% {L.humanShare}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs leading-relaxed text-zinc-500">{L.note}</p>
    </div>
  );
}
