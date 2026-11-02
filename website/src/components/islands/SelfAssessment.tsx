import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, load, save, ui } from './shared';

const DIMS = {
  en: [
    ['Product & domain', 'Can I explain why the change matters and how to recognize value?'],
    ['Specification', 'Did I make behavior, invariants, limits and completion explicit?'],
    ['Fundamentals', 'Can I predict consequences and notice technical inconsistencies?'],
    ['Context', 'Does the agent find sufficient, reliable and current information?'],
    ['Delegation', 'Does the work progress without repetitive oversight?'],
    ['Verification', 'Do I know which errors my evidence detects — and which it leaves open?'],
    ['Security', 'Do I know the reach of the access and the consequences of operations?'],
    ['Operations', 'Can I observe, diagnose and recover the change in use?'],
    ['Learning', 'Do I show understanding that transfers to new situations?'],
    ['Collective effect', 'Does my improvement help others without depending on my presence?'],
  ],
  pt: [
    ['Produto e domínio', 'Consigo explicar por que a mudança importa e como reconhecer valor?'],
    ['Especificação', 'Explicitei comportamento, invariantes, limites e conclusão?'],
    ['Fundamentos', 'Consigo prever consequências e perceber incoerências técnicas?'],
    ['Contexto', 'O agente encontra informação suficiente, confiável e atual?'],
    ['Delegação', 'O trabalho avança sem acompanhamento repetitivo?'],
    ['Verificação', 'Sei quais erros minhas evidências detectam — e quais deixam em aberto?'],
    ['Segurança', 'Conheço o alcance dos acessos e as consequências das operações?'],
    ['Operação', 'Consigo observar, diagnosticar e recuperar a mudança em uso?'],
    ['Aprendizagem', 'Demonstro entendimento transferível para situações novas?'],
    ['Efeito coletivo', 'Minha melhoria ajuda outras pessoas sem depender da minha presença?'],
  ],
};
const LEVELS = {
  en: ['Dependence', 'Assisted execution', 'Bounded autonomy', 'Judgment', 'Shared capability'],
  pt: ['Dependência', 'Execução assistida', 'Autonomia delimitada', 'Julgamento', 'Capacidade compartilhada'],
};
const KEY = 'seai:self-assessment:v1';

export default function SelfAssessment({ lang, links }: { lang: Lang; links: { url: string; title: string }[] }) {
  const t = ui(lang);
  const dims = DIMS[lang];
  const [scores, setScores] = useState<number[]>(Array(10).fill(2));
  const [focus, setFocus] = useState(0);
  useEffect(() => setScores(load<number[]>(KEY, Array(10).fill(2))), []);
  useEffect(() => save(KEY, scores), [scores]);

  const N = dims.length;
  const C = 150;
  const R = 110;
  const pt = (k: number, v: number) => {
    const a = (k / N) * Math.PI * 2 - Math.PI / 2;
    const r = (v / 4) * R;
    return [C + r * Math.cos(a), C + r * Math.sin(a)];
  };
  const path = (vals: number[]) => vals.map((v, k) => `${k ? 'L' : 'M'} ${pt(k, Math.max(v, 0.15)).map((n) => n.toFixed(2)).join(' ')}`).join(' ') + ' Z';
  const lowest = scores
    .map((v, k) => ({ v, k }))
    .sort((a, b) => a.v - b.v)
    .slice(0, 2);
  const L = lang === 'en'
    ? { hint: 'Rate each dimension on a real task you did recently. The radar is for choosing your next development experience — not a scientific score.', next: 'Suggested next focus', study: 'Study' }
    : { hint: 'Avalie cada dimensão em uma tarefa real recente. O radar serve para escolher sua próxima experiência de desenvolvimento — não é uma nota científica.', next: 'Próximo foco sugerido', study: 'Estudar' };

  return (
    <div className="glass grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1fr]">
      <div>
        <p className="text-sm text-zinc-400">{L.hint}</p>
        <ul className="mt-5 grid gap-2">
          {dims.map(([name, q], k) => (
            <li key={name} onMouseEnter={() => setFocus(k)} onFocus={() => setFocus(k)} className={cn('rounded-xl border px-4 py-3 transition-colors', focus === k ? 'border-white/20 bg-white/[0.04]' : 'border-white/5')}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-medium text-white">{name}</span>
                <div className="flex gap-1" role="radiogroup" aria-label={name}>
                  {[0, 1, 2, 3, 4].map((v) => (
                    <button key={v} role="radio" aria-checked={scores[k] === v} title={LEVELS[lang][v]} onClick={() => setScores((s) => s.map((x, j) => (j === k ? v : x)))} className={cn('grid h-7 w-7 cursor-pointer place-items-center rounded-lg font-mono text-xs transition-colors', v <= scores[k] ? 'bg-[var(--accent)] text-ink-950' : 'bg-white/5 text-zinc-500 hover:bg-white/10')}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
              <AnimatePresence initial={false}>
                {focus === k && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden text-xs text-zinc-400">
                    <span className="block pt-2">
                      {q} <span className="text-[var(--accent)]">· {LEVELS[lang][scores[k]]}</span>
                    </span>
                  </motion.p>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 300 300" className="w-full max-w-md" role="img" aria-label={dims.map(([n], k) => `${n}: ${scores[k]}`).join(', ')}>
          {[1, 2, 3, 4].map((lv) => (
            <path key={lv} d={path(Array(N).fill(lv))} fill="none" stroke="rgb(255 255 255 / .08)" />
          ))}
          {dims.map((_, k) => {
            const [x, y] = pt(k, 4);
            return <line key={k} x1={C} y1={C} x2={x} y2={y} stroke={focus === k ? 'rgb(255 255 255 / .35)' : 'rgb(255 255 255 / .07)'} />;
          })}
          <motion.path initial={false} animate={{ d: path(scores) }} transition={{ type: 'spring', stiffness: 140, damping: 18 }} fill="color-mix(in oklab, var(--accent) 28%, transparent)" stroke="var(--accent)" strokeWidth="2" strokeLinejoin="round" />
          {scores.map((v, k) => {
            const [x, y] = pt(k, Math.max(v, 0.15));
            return <motion.circle key={k} initial={false} animate={{ cx: x, cy: y, r: focus === k ? 5 : 3.2 }} fill="white" />;
          })}
          {dims.map(([n], k) => {
            const [x, y] = pt(k, 4.75);
            return (
              <text key={n} x={x} y={y} textAnchor="middle" dominantBaseline="middle" className={cn('text-[8.5px]', focus === k ? 'fill-white' : 'fill-zinc-500')}>
                {n}
              </text>
            );
          })}
        </svg>
        <div className="mt-4 w-full rounded-2xl border border-white/10 bg-black/30 p-5">
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">{L.next}</p>
          <ul className="mt-3 space-y-2">
            {lowest.map(({ v, k }) => (
              <li key={k} className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <span className="text-white">
                  {dims[k][0]} <span className="font-mono text-xs text-zinc-500">· {v}/4</span>
                </span>
                <a href={links[k].url} className="text-xs text-[var(--accent)] hover:underline">
                  {L.study}: {links[k].title} →
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-4 text-xs text-zinc-500 hover:text-white" onClick={() => setScores(Array(10).fill(2))}>
            ↺ {t.reset}
          </button>
        </div>
      </div>
    </div>
  );
}
