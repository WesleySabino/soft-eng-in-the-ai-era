import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

const DATA = {
  en: {
    request: '“Create a reservation endpoint.”',
    ambiguity: 'Ambiguity left for the agent to guess',
    ready: 'Ready to delegate: the agent knows what “done” means.',
    hint: 'Answer each contract question. Watch the contract assemble and the ambiguity drop.',
    contract: 'task-contract.yaml',
    qs: [
      { q: 'What outcome do we want, and for whom?', line: 'goal: "Reserve units of an item for the authenticated customer"', risk: 'Without it, the agent may optimize for the wrong user or scope.' },
      { q: 'What behavior needs to exist?', line: 'behavior: "POST /reservations returns the reservation or a defined error"', risk: 'Avoids a technically correct endpoint that does the wrong thing.' },
      { q: 'Which invariants must be preserved?', line: 'invariants: ["availability >= 0", "one logical reservation per key"]', risk: 'Concurrency and retries are where plausible code silently fails.' },
      { q: 'Which sources of context are reliable?', line: 'context: ["docs/adr/012-inventory.md", "PostgreSQL 16 isolation docs"]', risk: 'Stops the agent from following a stale issue comment.' },
      { q: 'What is the perimeter of the change?', line: 'scope: { includes: [API, persistence, event], excludes: [payment] }', risk: 'Prevents “helpful” edits to the fulfillment flow.' },
      { q: 'What evidence will demonstrate completion?', line: 'evidence: ["race on last unit", "retry after commit", "tenant isolation"]', risk: 'Turns “tests pass” into checks that catch the relevant errors.' },
      { q: 'What situation requires a human decision?', line: 'escalate: "expiration policy for reservation and key"', risk: 'The agent stops at a real domain decision instead of inventing one.' },
    ],
  },
  pt: {
    request: '“Crie um endpoint de reserva.”',
    ambiguity: 'Ambiguidade deixada para o agente adivinhar',
    ready: 'Pronto para delegar: o agente sabe o que significa “concluído”.',
    hint: 'Responda cada pergunta do contrato. Veja o contrato se montar e a ambiguidade cair.',
    contract: 'contrato-da-tarefa.yaml',
    qs: [
      { q: 'Qual resultado queremos e para quem?', line: 'objetivo: "Reservar unidades de um item para o cliente autenticado"', risk: 'Sem isso, o agente pode otimizar para o usuário ou escopo errado.' },
      { q: 'Que comportamento precisa existir?', line: 'comportamento: "POST /reservas retorna a reserva ou um erro definido"', risk: 'Evita um endpoint tecnicamente correto que faz a coisa errada.' },
      { q: 'Quais invariantes devem ser preservados?', line: 'invariantes: ["disponibilidade >= 0", "uma reserva lógica por chave"]', risk: 'Concorrência e repetições são onde código plausível falha em silêncio.' },
      { q: 'Quais fontes de contexto são confiáveis?', line: 'contexto: ["docs/adr/012-estoque.md", "docs de isolamento do PostgreSQL 16"]', risk: 'Impede o agente de seguir um comentário antigo de issue.' },
      { q: 'Qual é o perímetro da alteração?', line: 'escopo: { inclui: [API, persistência, evento], exclui: [pagamento] }', risk: 'Evita edições “prestativas” no fluxo de expedição.' },
      { q: 'Que evidências demonstrarão conclusão?', line: 'evidencias: ["disputa pelo último item", "repetição após commit", "isolamento entre clientes"]', risk: 'Transforma “os testes passaram” em verificações que pegam os erros relevantes.' },
      { q: 'Que situação exige decisão humana?', line: 'escalar: "política de expiração da reserva e da chave"', risk: 'O agente para em uma decisão real de domínio em vez de inventá-la.' },
    ],
  },
};

export default function ContractBuilder({ lang }: { lang: Lang }) {
  const d = DATA[lang];
  const t = ui(lang);
  const [answered, setAnswered] = useState<number[]>([]);
  const [last, setLast] = useState<number | null>(null);
  const ambiguity = Math.round(100 * (1 - answered.length / d.qs.length));
  const toggle = (i: number) => {
    setAnswered((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i].sort((x, y) => x - y)));
    setLast(answered.includes(i) ? null : i);
  };

  return (
    <div className="glass grid gap-0 overflow-hidden lg:grid-cols-2">
      <div className="p-5 sm:p-8">
        <p className="font-serif text-3xl text-white italic">{d.request}</p>
        <p className="mt-3 text-sm text-zinc-400">{d.hint}</p>
        <ol className="mt-6 grid gap-2">
          {d.qs.map((q, i) => {
            const on = answered.includes(i);
            return (
              <li key={q.q}>
                <motion.button
                  onClick={() => toggle(i)}
                  aria-pressed={on}
                  whileTap={{ scale: 0.98 }}
                  className={cn('flex w-full cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors', on ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10 text-white' : 'border-white/10 bg-white/[0.02] text-zinc-300 hover:border-white/25')}
                >
                  <motion.span animate={{ rotate: on ? 360 : 0, scale: on ? 1.1 : 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }} className={cn('grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[0.65rem]', on ? 'border-transparent bg-[var(--accent)] text-ink-950' : 'border-white/20')}>
                    {on ? '✓' : i + 1}
                  </motion.span>
                  {q.q}
                </motion.button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="flex flex-col border-t border-white/10 bg-black/30 p-5 sm:p-8 lg:border-t-0 lg:border-l">
        <div>
          <div className="flex items-baseline justify-between text-xs text-zinc-400">
            <span>{d.ambiguity}</span>
            <motion.span key={ambiguity} initial={{ scale: 1.4 }} animate={{ scale: 1 }} className={cn('font-mono text-lg', ambiguity === 0 ? 'text-emerald-300' : ambiguity > 50 ? 'text-rose-300' : 'text-amber-300')}>
              {ambiguity}%
            </motion.span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full" animate={{ width: `${ambiguity}%`, backgroundColor: ambiguity === 0 ? '#34d399' : ambiguity > 50 ? '#fb7185' : '#fbbf24' }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
          </div>
        </div>
        <div className="mt-6 flex-1 rounded-2xl border border-white/10 bg-ink-950/80 font-mono text-xs">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-2 text-zinc-500">{d.contract}</span>
          </div>
          <div className="min-h-[14rem] p-4 leading-relaxed">
            <AnimatePresence initial={false}>
              {answered.length === 0 && (
                <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-zinc-600">
                  # …
                </motion.p>
              )}
              {answered.map((i) => (
                <motion.p key={i} layout initial={{ opacity: 0, x: -12, filter: 'blur(4px)' }} animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, x: 12 }} transition={{ duration: 0.4, ease: easeOutExpo }} className="break-words text-zinc-200">
                  <span className="text-[var(--accent)]">{d.qs[i].line.split(':')[0]}</span>:{d.qs[i].line.slice(d.qs[i].line.indexOf(':') + 1)}
                </motion.p>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-4 min-h-[3.5rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            {ambiguity === 0 ? (
              <motion.p key="ready" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-medium text-emerald-300">
                ✓ {d.ready}
              </motion.p>
            ) : last !== null ? (
              <motion.p key={last} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm text-zinc-300">
                <span className="text-[var(--accent)]">↳ </span>
                {d.qs[last].risk}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </div>
        {answered.length > 0 && (
          <button onClick={() => (setAnswered([]), setLast(null))} className="mt-2 self-start text-xs text-zinc-500 hover:text-white">
            ↺ {t.reset}
          </button>
        )}
      </div>
    </div>
  );
}
