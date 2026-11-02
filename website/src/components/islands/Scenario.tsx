import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

export interface ScenarioOption {
  label: string;
  result: string;
  verdict: 'best' | 'ok' | 'bad';
  series?: number[];
}

/**
 * A decision scenario. The learner picks a response and sees its consequence,
 * optionally as a small animated chart of how the problem evolves over time.
 */
export default function Scenario({
  lang,
  situation,
  question,
  options,
  seriesLabel,
  seriesUnit,
}: {
  lang: Lang;
  situation: string;
  question: string;
  options: ScenarioOption[];
  seriesLabel?: string;
  seriesUnit?: string;
}) {
  const t = ui(lang);
  const [pick, setPick] = useState<number | null>(null);
  const verdictMeta = {
    best: { c: '#34d399', en: 'Fixes the class of problem', pt: 'Elimina a classe do problema' },
    ok: { c: '#fbbf24', en: 'Helps, but partially', pt: 'Ajuda, mas parcialmente' },
    bad: { c: '#fb7185', en: 'Treats the symptom', pt: 'Trata o sintoma' },
  };
  const hasSeries = options.some((o) => o.series);
  const max = Math.max(1, ...options.flatMap((o) => o.series ?? []));
  const shown = pick !== null ? options[pick].series : undefined;

  return (
    <div className="glass overflow-hidden">
      <div className="border-b border-white/10 bg-black/20 p-6 sm:p-8">
        <p className="font-mono text-[0.68rem] tracking-[0.2em] text-zinc-500 uppercase">{lang === 'en' ? 'Situation' : 'Situação'}</p>
        <p className="mt-2 font-serif text-2xl leading-snug text-white sm:text-[1.75rem]">{situation}</p>
      </div>
      <div className={cn('grid gap-6 p-6 sm:p-8', hasSeries && 'lg:grid-cols-[1.1fr_1fr]')}>
        <div>
          <p className="text-sm font-medium text-zinc-300">{question}</p>
          <div className="mt-4 grid gap-3">
            {options.map((o, i) => (
              <motion.button
                key={o.label}
                onClick={() => setPick(i)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={pick === i}
                className={cn(
                  'cursor-pointer rounded-2xl border px-5 py-4 text-left text-[0.97rem] leading-snug transition-colors',
                  pick === i ? 'bg-white/[0.07] text-white' : 'border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/25',
                )}
                style={{ borderColor: pick === i ? verdictMeta[o.verdict].c : undefined }}
              >
                {o.label}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {hasSeries && (
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="font-mono text-[0.68rem] tracking-[0.2em] text-zinc-500 uppercase">{seriesLabel}</p>
              <div className="mt-4 flex h-40 items-end gap-2" role="img" aria-label={seriesLabel}>
                {Array.from({ length: options[0].series?.length ?? 8 }).map((_, k) => {
                  const v = shown ? shown[k] : options[0].series![0];
                  const color = pick !== null ? verdictMeta[options[pick].verdict].c : '#71717a';
                  return (
                    <div key={k} className="flex flex-1 flex-col items-center gap-1.5">
                      <motion.span className="font-mono text-[0.6rem] text-zinc-500" animate={{ opacity: shown ? 1 : 0.4 }}>
                        {v}
                      </motion.span>
                      <motion.div
                        className="w-full rounded-t-md"
                        initial={false}
                        animate={{ height: `${(v / max) * 100}%`, backgroundColor: color }}
                        transition={{ type: 'spring', stiffness: 120, damping: 18, delay: k * 0.06 }}
                        style={{ minHeight: 2, opacity: 0.85 }}
                      />
                    </div>
                  );
                })}
              </div>
              {seriesUnit && <p className="mt-2 text-right font-mono text-[0.6rem] text-zinc-500">{seriesUnit} →</p>}
            </div>
          )}
          <AnimatePresence mode="wait">
            {pick !== null ? (
              <motion.div
                key={pick}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: easeOutExpo }}
                className="rounded-2xl border p-5"
                style={{ borderColor: `${verdictMeta[options[pick].verdict].c}66`, background: `${verdictMeta[options[pick].verdict].c}12` }}
                aria-live="polite"
              >
                <p className="font-semibold" style={{ color: verdictMeta[options[pick].verdict].c }}>
                  {verdictMeta[options[pick].verdict][lang]}
                </p>
                <p className="mt-1.5 leading-relaxed text-zinc-200">{options[pick].result}</p>
              </motion.div>
            ) : (
              <motion.p key="hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-zinc-500">
                ← {t.tryIt}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
