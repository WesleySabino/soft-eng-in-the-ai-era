import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo } from './shared';

export interface Stage {
  title: string;
  does: string;
  failure: string;
}

/**
 * The value chain from problem to reusable learning.
 * Select a stage to learn what it does; "break" it to see how the failure propagates downstream.
 */
export default function Pipeline({ lang, stages, colors }: { lang: Lang; stages: Stage[]; colors?: string[] }) {
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState<number | null>(null);
  const palette = colors ?? ['#a78bfa', '#8b9cf7', '#22d3ee', '#5ad6c0', '#a7d27a', '#fbbf24'];
  const L = {
    en: { inspect: 'Select a step', breakIt: 'Break this step', fix: 'Repair', what: 'What it requires', ifFails: 'If it fails', healthy: 'Value flows end to end.', blocked: 'Downstream value is lost.' },
    pt: { inspect: 'Selecione uma etapa', breakIt: 'Quebrar esta etapa', fix: 'Consertar', what: 'O que exige', ifFails: 'Se falhar', healthy: 'O valor flui de ponta a ponta.', blocked: 'O valor a jusante se perde.' },
  }[lang];

  return (
    <div className="glass p-5 sm:p-8">
      <p className="text-sm text-zinc-400">{L.inspect}</p>
      {/* Chain */}
      <div className="relative mt-6">
        <div className="absolute top-6 right-6 left-6 hidden h-[2px] overflow-hidden rounded-full bg-white/10 md:block" aria-hidden="true">
          {stages.slice(0, -1).map((_, i) => {
            const dead = broken !== null && i >= broken;
            return (
              <div key={i} className="absolute top-0 h-full" style={{ left: `${(i / (stages.length - 1)) * 100}%`, width: `${100 / (stages.length - 1)}%` }}>
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
        <ol className="relative grid grid-cols-3 gap-3 md:grid-cols-6">
          {stages.map((s, i) => {
            const dead = broken !== null && i > broken;
            const isBroken = broken === i;
            return (
              <li key={s.title}>
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full cursor-pointer flex-col items-center gap-3 text-center"
                >
                  <motion.span
                    animate={{ scale: active === i ? 1.12 : 1, opacity: dead ? 0.3 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={cn('relative grid h-12 w-12 place-items-center rounded-full border font-mono text-xs', isBroken ? 'border-rose-400 bg-rose-500/20 text-rose-200' : 'border-white/20 bg-ink-900 text-white')}
                    style={{ boxShadow: active === i && !isBroken ? `0 0 0 4px ${palette[i]}33, 0 0 30px ${palette[i]}` : undefined }}
                  >
                    {isBroken ? '✕' : String(i + 1).padStart(2, '0')}
                  </motion.span>
                  <span className={cn('text-xs leading-tight font-medium sm:text-sm', dead ? 'text-zinc-600 line-through' : active === i ? 'text-white' : 'text-zinc-400')}>{s.title}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Detail */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active + String(broken === active)}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5" style={{ borderColor: `${palette[active]}55` }}>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase" style={{ color: palette[active] }}>
              {L.what}
            </p>
            <p className="mt-2 font-serif text-2xl text-white">{stages[active].title}</p>
            <p className="mt-2 leading-relaxed text-zinc-300">{stages[active].does}</p>
          </div>
          <div className={cn('rounded-2xl border p-5 transition-colors', broken === active ? 'border-rose-400/50 bg-rose-500/10' : 'border-white/10 bg-black/20')}>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-rose-300 uppercase">{L.ifFails}</p>
            <p className="mt-2 leading-relaxed text-zinc-300">{stages[active].failure}</p>
            <button onClick={() => setBroken(broken === active ? null : active)} className={cn('mt-4', broken === active ? 'btn-ghost' : 'btn border border-rose-400/40 bg-rose-500/10 text-rose-100 hover:bg-rose-500/20')}>
              {broken === active ? `↺ ${L.fix}` : `⚡ ${L.breakIt}`}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
      <p className={cn('mt-5 text-center font-mono text-xs transition-colors', broken === null ? 'text-emerald-300' : 'text-rose-300')} aria-live="polite">
        {broken === null ? L.healthy : L.blocked}
      </p>
    </div>
  );
}
