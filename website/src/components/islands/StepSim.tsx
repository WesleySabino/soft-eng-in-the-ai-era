import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

export interface SimActor {
  id: string;
  label: string;
  color: string;
}
export interface SimStep {
  actor: string;
  text: string;
  note: string;
  state: Record<string, string | number>;
  tone?: 'ok' | 'bad' | 'warn';
}
export interface SimMode {
  id: string;
  label: string;
  steps: SimStep[];
  outcome: { ok: boolean; text: string };
}

const toneColor = { ok: '#34d399', bad: '#fb7185', warn: '#fbbf24' };

/**
 * Generic sequence simulator: actors exchange messages step by step while a shared state panel updates.
 * Used for race conditions, retries/idempotency and the transactional outbox.
 */
export default function StepSim({
  lang,
  title,
  actors,
  modes,
  stateLabels,
}: {
  lang: Lang;
  title?: string;
  actors: SimActor[];
  modes: SimMode[];
  stateLabels: Record<string, string>;
}) {
  const t = ui(lang);
  const [modeIdx, setModeIdx] = useState(0);
  const [step, setStep] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const mode = modes[modeIdx];
  const total = mode.steps.length;
  const current = step >= 0 ? mode.steps[step] : null;
  const finished = step === total - 1;
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) return;
    if (finished) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setStep((s) => s + 1), step < 0 ? 300 : 2100);
    return () => clearTimeout(id);
  }, [playing, step, finished]);

  const selectMode = (i: number) => {
    setModeIdx(i);
    setStep(-1);
    setPlaying(false);
  };

  const state = current?.state ?? Object.fromEntries(Object.keys(stateLabels).map((k) => [k, mode.steps[0]?.state[k] ?? '—']));
  const initial = mode.steps[0]?.state;

  return (
    <div className="glass overflow-hidden">
      {/* header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/20 px-5 py-4 sm:px-7">
        {title && <p className="font-mono text-[0.68rem] tracking-[0.2em] text-zinc-400 uppercase">{title}</p>}
        <div className="flex rounded-full border border-white/10 bg-white/5 p-1" role="tablist">
          {modes.map((m, i) => (
            <button key={m.id} role="tab" aria-selected={modeIdx === i} onClick={() => selectMode(i)} className={cn('relative cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold transition-colors', modeIdx === i ? 'text-ink-950' : 'text-zinc-400 hover:text-white')}>
              {modeIdx === i && <motion.span layoutId={`sim-mode-${title}`} className="absolute inset-0 rounded-full bg-[var(--accent)]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
              <span className="relative">{m.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_17rem]">
        {/* lanes */}
        <div ref={logRef} className="relative grid min-h-[13rem] gap-3 p-5 sm:min-h-[20rem] sm:p-7" style={{ gridTemplateColumns: `repeat(${actors.length}, minmax(0, 1fr))` }}>
          {step < 0 && (
            <button onClick={() => setPlaying(true)} className="absolute inset-0 z-10 m-auto grid h-24 w-24 cursor-pointer place-items-center rounded-full border border-white/15 bg-ink-900/80 text-white backdrop-blur transition hover:scale-105 hover:border-[var(--accent)]" aria-label={t.play}>
              <span className="text-2xl">▶</span>
              <span className="absolute -bottom-7 font-mono text-[0.65rem] whitespace-nowrap text-zinc-400">{t.play}</span>
            </button>
          )}
          {actors.map((a) => (
            <div key={a.id} className="flex min-w-0 flex-col gap-2">
              <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                <motion.span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: a.color }}
                  animate={current?.actor === a.id ? { scale: [1, 1.6, 1], boxShadow: [`0 0 0px ${a.color}`, `0 0 18px ${a.color}`, `0 0 6px ${a.color}`] } : { scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <span className="truncate text-xs font-semibold text-white sm:text-sm">{a.label}</span>
              </div>
              <AnimatePresence initial={false}>
                {mode.steps.slice(0, step + 1).map((s, k) =>
                  s.actor === a.id ? (
                    <motion.div
                      key={`${mode.id}-${k}`}
                      initial={{ opacity: 0, y: 14, scale: 0.96 }}
                      animate={{ opacity: k === step ? 1 : 0.45, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: easeOutExpo }}
                      className="rounded-xl border px-3 py-2 font-mono text-[0.68rem] leading-relaxed break-words text-zinc-100 sm:text-xs"
                      style={{
                        borderColor: k === step ? (s.tone ? toneColor[s.tone] : a.color) : 'rgb(255 255 255 / .08)',
                        background: k === step ? `${s.tone ? toneColor[s.tone] : a.color}1a` : 'rgb(255 255 255 / .02)',
                      }}
                    >
                      <span className="mr-1.5 text-zinc-500">{k + 1}.</span>
                      {s.text}
                    </motion.div>
                  ) : null,
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* state panel */}
        <div className="border-t border-white/10 bg-black/25 p-5 sm:p-7 lg:border-t-0 lg:border-l">
          <p className="font-mono text-[0.68rem] tracking-[0.2em] text-zinc-500 uppercase">{lang === 'en' ? 'Shared state' : 'Estado compartilhado'}</p>
          <dl className="mt-4 grid gap-3">
            {Object.entries(stateLabels).map(([k, label]) => {
              const v = state[k] ?? '—';
              const changed = step > 0 && mode.steps[step - 1]?.state[k] !== v;
              const isNeg = typeof v === 'number' && v < 0;
              return (
                <div key={k} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                  <dt className="text-[0.7rem] text-zinc-500">{label}</dt>
                  <dd className="relative mt-1 h-8 overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.span
                        key={`${k}-${String(v)}`}
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, color: isNeg ? '#fb7185' : changed ? '#ffffff' : '#d4d4d8' }}
                        exit={{ y: -24, opacity: 0 }}
                        transition={{ duration: 0.45, ease: easeOutExpo }}
                        className="absolute font-mono text-xl font-semibold"
                      >
                        {String(v)}
                      </motion.span>
                    </AnimatePresence>
                  </dd>
                </div>
              );
            })}
          </dl>
          {initial && step < 0 && <p className="mt-4 text-xs text-zinc-500">{lang === 'en' ? 'Press play or step forward.' : 'Aperte reproduzir ou avance passo a passo.'}</p>}
        </div>
      </div>

      {/* narration + controls */}
      <div className="border-t border-white/10 px-5 py-5 sm:px-7">
        <div className="min-h-[3.5rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.p key={`${mode.id}-${step}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35 }} className="leading-relaxed text-zinc-200">
              {current ? current.note : mode.label}
            </motion.p>
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {finished && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-2xl border px-5 py-4 font-medium"
              style={{ borderColor: mode.outcome.ok ? '#34d39988' : '#fb718588', background: mode.outcome.ok ? '#34d39914' : '#fb718514', color: mode.outcome.ok ? '#a7f3d0' : '#fecdd3' }}
            >
              {mode.outcome.ok ? '✓ ' : '✕ '}
              {mode.outcome.text}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button className="btn-ghost !px-3 !py-2 text-xs" onClick={() => setStep((s) => Math.max(-1, s - 1))} disabled={step < 0}>
            ← {t.stepBack}
          </button>
          <button className="btn-ghost !px-4 !py-2 text-xs" onClick={() => (finished ? (setStep(-1), setPlaying(true)) : setPlaying(!playing))}>
            {playing ? `❚❚ ${t.pause}` : `▶ ${t.play}`}
          </button>
          <button className="btn-primary !px-4 !py-2 text-xs" onClick={() => setStep((s) => Math.min(total - 1, s + 1))} disabled={finished}>
            {t.stepForward} →
          </button>
          <button className="ml-auto text-xs text-zinc-500 underline-offset-4 hover:text-white hover:underline" onClick={() => (setStep(-1), setPlaying(false))}>
            ↺ {t.reset}
          </button>
          <div className="flex w-full gap-1 pt-2" aria-hidden="true">
            {mode.steps.map((_, k) => (
              <span key={k} className="h-1 flex-1 rounded-full transition-colors duration-500" style={{ background: k <= step ? 'var(--accent)' : 'rgb(255 255 255 / .1)' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
