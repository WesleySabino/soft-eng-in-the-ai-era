import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo } from './shared';

export interface Stage {
  title: string;
  does: string;
  failure: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * The value chain from problem to reusable learning.
 * 1. Select a stage to learn what it requires.
 * 2. "Simulate a failure" there: the chain turns red from that point on, and a result panel
 *    spells out the consequence (later stages become wasted effort; no value reaches the user).
 */
export default function Pipeline({ lang, stages, colors }: { lang: Lang; stages: Stage[]; colors?: string[] }) {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState<number | null>(null);
  const palette = colors ?? ['#a78bfa', '#8b9cf7', '#22d3ee', '#5ad6c0', '#a7d27a', '#fbbf24'];
  const n = stages.length;

  const L = {
    en: {
      step1: 'Pick a step to see what it requires.',
      step2: 'Then simulate a failure to see what happens to the rest of the chain.',
      what: 'What it requires',
      ifFails: 'If this step fails',
      simulate: 'Simulate a failure here',
      simulateHint: 'What happens to the rest of the chain?',
      isBroken: 'This step is failing',
      wasted: 'wasted',
      restore: 'Restore the chain',
      healthyTitle: 'Every link holds',
      healthy: `All ${n} steps hold, so the change reaches the user and its value builds on itself.`,
      brokenTitle: (i: number, t: string) => `Step ${pad(i + 1)} failed: ${t}`,
      consequence: (i: number) =>
        i === n - 1
          ? 'The change is delivered, but nothing is learned from it. The next change starts from zero, and the same mistakes can come back.'
          : `Steps ${pad(i + 2)}–${pad(n)} still consume time and effort, but they build on a broken link: that work is wasted and no value reaches the user.`,
      moral: 'A change is worth only as much as its weakest link. Excellence means making every link hold, not just writing code well.',
      reaches: 'Value reaches the user?',
      wastedSteps: 'Wasted steps',
      yes: 'Yes',
      no: 'No',
      once: 'Only once',
    },
    pt: {
      step1: 'Escolha uma etapa para ver o que ela exige.',
      step2: 'Depois simule uma falha para ver o que acontece com o resto da cadeia.',
      what: 'O que exige',
      ifFails: 'Se esta etapa falhar',
      simulate: 'Simular falha aqui',
      simulateHint: 'O que acontece com o resto da cadeia?',
      isBroken: 'Esta etapa está falhando',
      wasted: 'desperdício',
      restore: 'Restaurar a cadeia',
      healthyTitle: 'Todos os elos se sustentam',
      healthy: `As ${n} etapas se sustentam: a mudança chega ao usuário e o valor se acumula.`,
      brokenTitle: (i: number, t: string) => `A etapa ${pad(i + 1)} falhou: ${t}`,
      consequence: (i: number) =>
        i === n - 1
          ? 'A mudança é entregue, mas nada se aprende com ela. A próxima mudança começa do zero, e os mesmos erros podem voltar.'
          : `As etapas ${pad(i + 2)}–${pad(n)} continuam consumindo tempo e esforço, mas se apoiam num elo quebrado: esse trabalho é desperdiçado e nenhum valor chega ao usuário.`,
      moral: 'Uma mudança vale o que vale o seu elo mais fraco. Excelência é fazer todos os elos se sustentarem, não só escrever bom código.',
      reaches: 'O valor chega ao usuário?',
      wastedSteps: 'Etapas desperdiçadas',
      yes: 'Sim',
      no: 'Não',
      once: 'Só uma vez',
    },
  }[lang];

  // Value only exists end to end: any broken link before the last one means nothing reaches the user.
  const wastedCount = broken === null ? 0 : n - 1 - broken;
  const reaches = broken === null ? L.yes : broken === n - 1 ? L.once : L.no;

  return (
    <div className="glass p-5 sm:p-8">
      <ol className="flex flex-col gap-1 text-sm text-zinc-400 sm:flex-row sm:gap-6">
        <li><span className="mr-2 font-mono text-[var(--accent)]">1</span>{L.step1}</li>
        <li><span className="mr-2 font-mono text-[var(--accent)]">2</span>{L.step2}</li>
      </ol>

      {/* Chain */}
      <div className="relative mt-8">
        <div className="absolute top-6 right-[8%] left-[8%] hidden h-[2px] md:block" aria-hidden="true">
          {stages.slice(0, -1).map((_, i) => {
            const dead = broken !== null && i >= broken;
            return (
              <div
                key={i}
                className={cn('absolute top-0 h-full overflow-hidden', dead ? 'border-t-2 border-dashed border-rose-500/50' : 'bg-white/10')}
                style={{ left: `${(i / (n - 1)) * 100}%`, width: `${100 / (n - 1)}%` }}
              >
                {!dead && (
                  <motion.div
                    className="h-full w-1/3 rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${palette[i + 1]}, transparent)` }}
                    animate={{ x: ['-100%', '300%'] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: i * 0.27 }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <ol className="relative grid grid-cols-3 gap-x-3 gap-y-5 md:grid-cols-6">
          {stages.map((s, i) => {
            const wasted = broken !== null && i > broken;
            const isBroken = broken === i;
            return (
              <li key={s.title}>
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full cursor-pointer flex-col items-center gap-2 text-center"
                >
                  <motion.span
                    animate={{ scale: active === i ? 1.12 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={cn(
                      'relative grid h-12 w-12 place-items-center rounded-full border font-mono text-xs',
                      isBroken ? 'border-rose-400 bg-rose-500/25 text-rose-100' : wasted ? 'border-dashed border-rose-400/60 bg-ink-900 text-rose-200' : 'border-white/20 bg-ink-900 text-white',
                    )}
                    style={{ boxShadow: active === i && !isBroken && !wasted ? `0 0 0 4px ${palette[i]}33, 0 0 30px ${palette[i]}` : undefined }}
                  >
                    {isBroken ? '✕' : pad(i + 1)}
                  </motion.span>
                  <span className={cn('text-xs leading-tight font-medium sm:text-sm', isBroken ? 'text-rose-200' : wasted ? 'text-zinc-500' : active === i ? 'text-white' : 'text-zinc-400')}>{s.title}</span>
                  <span className="h-4">
                    <AnimatePresence>
                      {wasted && (
                        <motion.span
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ delay: (i - (broken ?? 0)) * 0.08 }}
                          className="rounded-full bg-rose-500/15 px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-rose-300 uppercase"
                        >
                          {L.wasted}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detail of the selected step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="mt-6 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-2xl border bg-black/20 p-5" style={{ borderColor: `${palette[active]}55` }}>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase" style={{ color: palette[active] }}>
              {pad(active + 1)} · {L.what}
            </p>
            <p className="mt-2 font-serif text-2xl text-white">{stages[active].title}</p>
            <p className="mt-2 leading-relaxed text-zinc-300">{stages[active].does}</p>
          </div>
          <div className={cn('flex flex-col rounded-2xl border p-5 transition-colors', broken === active ? 'border-rose-400/50 bg-rose-500/10' : 'border-white/10 bg-black/20')}>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-rose-300 uppercase">{L.ifFails}</p>
            <p className="mt-2 leading-relaxed text-zinc-300">{stages[active].failure}</p>
            <div className="mt-auto pt-4">
              {broken === active ? (
                <p className="font-mono text-xs text-rose-300">✕ {L.isBroken}</p>
              ) : (
                <>
                  <button onClick={() => setBroken(active)} className="btn border border-rose-400/40 bg-rose-500/10 text-rose-100 hover:bg-rose-500/20">
                    ⚡ {L.simulate}
                  </button>
                  <p className="mt-2 text-xs text-zinc-500">{L.simulateHint}</p>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Result of the simulation */}
      <div aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={broken ?? 'ok'}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: easeOutExpo }}
            className={cn('mt-4 rounded-2xl border p-5 sm:p-6', broken === null ? 'border-emerald-400/25 bg-emerald-500/[0.06]' : 'border-rose-400/40 bg-rose-500/[0.08]')}
          >
            <div className="grid gap-5 md:grid-cols-[1.6fr_1fr] md:items-center">
              <div>
                <p className={cn('font-serif text-xl sm:text-2xl', broken === null ? 'text-emerald-200' : 'text-rose-100')}>
                  {broken === null ? `✓ ${L.healthyTitle}` : L.brokenTitle(broken, stages[broken].title)}
                </p>
                <p className="mt-2 leading-relaxed text-zinc-300">{broken === null ? L.healthy : L.consequence(broken)}</p>
                {broken !== null && <p className="mt-3 text-sm leading-relaxed text-zinc-400">{L.moral}</p>}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: L.reaches, v: reaches, bad: broken !== null && broken < n - 1 },
                  { label: L.wastedSteps, v: `${wastedCount} / ${n}`, bad: wastedCount > 0 },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-black/25 p-3">
                    <p className="font-mono text-[0.62rem] tracking-[0.15em] text-zinc-500 uppercase">{m.label}</p>
                    <motion.p key={m.v} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className={cn('mt-1 font-serif text-2xl', m.bad ? 'text-rose-300' : 'text-emerald-300')}>
                      {m.v}
                    </motion.p>
                  </div>
                ))}
                {broken !== null && (
                  <button onClick={() => setBroken(null)} className="btn-ghost col-span-2 !py-1.5 text-xs">
                    ↺ {L.restore}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
