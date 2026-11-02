import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo } from './shared';

const DATA = {
  en: {
    hint: 'Choose a situation. The dial shows a reasonable starting autonomy — and what would justify expanding it.',
    start: 'Starting point',
    expand: 'Condition to expand',
    levels: ['Propose only', 'Decide at the point', 'Prepare for review', 'Integrate via authorized flow', 'Run independently'],
    rows: [
      { s: 'Research and analysis with permitted data', level: 4, start: 'Independent execution, with references and a record of uncertainties.', expand: 'Quality of sources and adherence to the goal.' },
      { s: 'Bounded change in an isolated environment', level: 2, start: 'Implement, test and prepare a reviewable result.', expand: 'Reliable evidence of correctness and scope.' },
      { s: 'Routine, reversible, well-covered change', level: 3, start: 'Merge or deploy through a previously authorized flow.', expand: 'Track record, automated controls and observation of consequences.' },
      { s: 'Sensitive change to access, data or contract', level: 1, start: 'Prepare a proposal and evidence; explicit decision at the relevant point.', expand: 'Better containment and verification, commensurate with the responsibility.' },
      { s: 'Hard-to-reverse, far-reaching effect', level: 0, start: 'Strong limits and a decision by an identified owner.', expand: 'Concrete demonstration of control — never verbal assurance alone.' },
    ],
  },
  pt: {
    hint: 'Escolha uma situação. O mostrador indica uma autonomia inicial razoável — e o que justificaria ampliá-la.',
    start: 'Ponto de partida',
    expand: 'Condição para ampliar',
    levels: ['Apenas propor', 'Decidir no ponto', 'Preparar para revisão', 'Integrar por fluxo autorizado', 'Executar com independência'],
    rows: [
      { s: 'Pesquisa e análise com dados permitidos', level: 4, start: 'Execução independente, com referências e registro de incertezas.', expand: 'Qualidade das fontes e aderência ao objetivo.' },
      { s: 'Mudança delimitada em ambiente isolado', level: 2, start: 'Implementar, testar e preparar resultado revisável.', expand: 'Evidência confiável de correção e escopo.' },
      { s: 'Mudança rotineira, reversível e bem coberta', level: 3, start: 'Integrar ou implantar pelo fluxo previamente autorizado.', expand: 'Histórico, controles automáticos e observação de consequências.' },
      { s: 'Alteração sensível de acesso, dados ou contrato', level: 1, start: 'Preparar proposta e evidências; decisão explícita no ponto relevante.', expand: 'Melhor contenção e verificação, compatíveis com a responsabilidade.' },
      { s: 'Efeito difícil de reverter e de grande alcance', level: 0, start: 'Limites fortes e decisão de responsável identificado.', expand: 'Demonstração concreta de controle — nunca só confiança verbal.' },
    ],
  },
};

export default function AutonomyDial({ lang }: { lang: Lang }) {
  const d = DATA[lang];
  const [i, setI] = useState(0);
  const row = d.rows[i];
  const angle = -90 + (row.level / 4) * 180;
  const colors = ['#fb7185', '#f59e0b', '#fbbf24', '#22d3ee', '#34d399'];

  return (
    <div className="glass grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-sm text-zinc-400">{d.hint}</p>
        <div className="mt-5 grid gap-2">
          {d.rows.map((r, k) => (
            <button key={r.s} onClick={() => setI(k)} aria-pressed={i === k} className={cn('relative cursor-pointer rounded-xl px-4 py-3 text-left text-sm transition-colors', i === k ? 'text-white' : 'text-zinc-400 hover:text-white')}>
              {i === k && <motion.span layoutId="aut-pill" className="absolute inset-0 rounded-xl border border-white/15 bg-white/[0.06]" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
              <span className="relative flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: colors[r.level] }} />
                {r.s}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-sm">
          <svg viewBox="0 0 200 115" className="w-full" aria-hidden="true">
            <defs>
              <linearGradient id="dial-g" x1="0" x2="1">
                {colors.map((c, k) => (
                  <stop key={c} offset={k / 4} stopColor={c} />
                ))}
              </linearGradient>
            </defs>
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="rgb(255 255 255 / .08)" strokeWidth="14" strokeLinecap="round" />
            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#dial-g)" strokeWidth="14" strokeLinecap="round" opacity="0.85" />
            {[0, 1, 2, 3, 4].map((k) => {
              const a = (Math.PI * (180 - k * 45)) / 180;
              return <circle key={k} cx={100 + 80 * Math.cos(a)} cy={100 - 80 * Math.sin(a)} r="2.2" fill="#05050a" />;
            })}
            <motion.g initial={false} animate={{ rotate: angle }} transition={{ type: 'spring', stiffness: 90, damping: 12 }} style={{ originX: '100px', originY: '100px' }}>
              <line x1="100" y1="100" x2="100" y2="34" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </motion.g>
            <circle cx="100" cy="100" r="7" fill="white" />
          </svg>
          <AnimatePresence mode="wait">
            <motion.p key={row.level} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mt-2 text-center font-serif text-3xl" style={{ color: colors[row.level] }}>
              {d.levels[row.level]}
            </motion.p>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: easeOutExpo }} className="mt-6 grid w-full gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">{d.start}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-200">{row.start}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">{d.expand}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-200">{row.expand}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
