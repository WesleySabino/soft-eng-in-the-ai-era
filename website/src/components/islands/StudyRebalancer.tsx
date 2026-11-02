import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

const ROWS = {
  en: [
    ['Memorizing signatures, options and rare syntax', 'Read docs, understand types, spot incompatible usage', 'Semantics, contracts and rapid API exploration'],
    ['Hand-writing CRUD, DTOs, adapters', 'Understand boundaries, validation and effects', 'Domain modeling, authorization and invariants'],
    ['Typing speed and shortcuts as the edge', 'Operate tools fluently', 'Clarity of intent, autonomous execution, feedback quality'],
    ['Memorizing framework recipes', 'Understand execution model and main constraints', 'Diagnosis, integration and technology choices'],
    ['Reimplementing known algorithms as routine', 'Judge complexity, suitability and adversarial cases', 'Data representation, performance, correctness properties'],
    ['Hand-writing large volumes of repetitive tests', 'Read test code, recognize an inadequate oracle', 'Risk coverage, independent evidence, fast feedback'],
    ['Human review of style and mechanical conventions', 'Define standards with real consequences', 'Rule automation; review of higher-impact decisions'],
    ['Repeating environment setup by hand', 'Diagnose the environment, recover from failures', 'Reproducibility and self-service automation'],
    ['Descriptive docs that the code already says', 'Verify fidelity and currency', 'Reasons, constraints and context missing from code'],
    ['Collecting languages for a longer list', 'Navigate and intervene in relevant environments', 'Selective depth, transfer of principles'],
    ['Collecting models, extensions and prompt formulas', 'Use the necessary options well', 'Evaluation on real tasks; a complete flow'],
    ['Polishing abstractions without demonstrable benefit', 'Useful readability and consistency', 'Simplicity, compatibility, maintenance cost'],
    ['Personally resolving every recurring exception', 'Intervene precisely when necessary', 'Eliminating causes; shared capability'],
    ['Babysitting every micro-step between chat and editor', 'Recognize blockers and decision points', 'Async execution with contracts and progress logs'],
  ],
  pt: [
    ['Decorar assinaturas, opções e sintaxe rara', 'Ler documentação, entender tipos, notar uso incompatível', 'Semântica, contratos e exploração rápida de APIs'],
    ['Produzir à mão CRUD, DTOs, adaptadores', 'Entender limites, validação e efeitos', 'Modelagem do domínio, autorização e invariantes'],
    ['Velocidade de digitação e atalhos como vantagem', 'Operar ferramentas com fluidez', 'Clareza de intenção, execução autônoma, qualidade do feedback'],
    ['Memorizar receitas de framework', 'Entender o modelo de execução e restrições', 'Diagnóstico, integração e escolhas tecnológicas'],
    ['Reimplementar algoritmos conhecidos como rotina', 'Julgar complexidade, adequação e casos adversos', 'Representação de dados, desempenho, propriedades de correção'],
    ['Escrever à mão muitos testes repetitivos', 'Ler código de teste, reconhecer oráculo inadequado', 'Cobertura de riscos, evidência independente, feedback rápido'],
    ['Revisão humana de estilo e convenções mecânicas', 'Definir padrões com consequência real', 'Automação de regras; revisão de decisões de maior impacto'],
    ['Repetir configuração de ambientes à mão', 'Diagnosticar o ambiente e recuperar falhas', 'Reprodutibilidade e automação de autosserviço'],
    ['Documentação descritiva que o código já diz', 'Verificar fidelidade e atualização', 'Motivos, restrições e contexto ausente do código'],
    ['Colecionar linguagens para alongar a lista', 'Navegar e intervir nos ambientes relevantes', 'Profundidade seletiva, transferência de princípios'],
    ['Colecionar modelos, extensões e fórmulas de prompt', 'Usar bem as opções necessárias', 'Avaliação em tarefas reais; um fluxo completo'],
    ['Aperfeiçoar abstrações sem benefício demonstrável', 'Legibilidade e consistência úteis', 'Simplicidade, compatibilidade, custo de manutenção'],
    ['Resolver pessoalmente toda exceção recorrente', 'Intervir com precisão quando necessário', 'Eliminar causas; capacidade compartilhada'],
    ['Acompanhar cada microetapa entre chat e editor', 'Reconhecer bloqueios e pontos de decisão', 'Execução assíncrona com contratos e registros'],
  ],
};

/** Rebalance a study budget: each moved activity shifts time from substitutable execution to judgment. */
export default function StudyRebalancer({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const rows = ROWS[lang];
  const [moved, setMoved] = useState<number[]>([]);
  const HOURS = 10;
  const per = HOURS / rows.length;
  const reinvested = moved.length * per;
  const L = lang === 'en'
    ? { hint: 'Your weekly learning budget is fixed. Tap an activity to reduce it — see what to keep, and where the time goes.', low: 'Substitutable execution', high: 'Judgment & leverage', keep: 'Preserve enough to', into: 'Reinvest in', h: 'h/week', all: 'Rebalance all' }
    : { hint: 'Seu orçamento semanal de estudo é fixo. Toque em uma atividade para reduzi-la — veja o que conservar e para onde vai o tempo.', low: 'Execução substituível', high: 'Julgamento e alavancagem', keep: 'Preservar o suficiente para', into: 'Reinvestir em', h: 'h/semana', all: 'Rebalancear tudo' };

  return (
    <div className="glass p-5 sm:p-8">
      <p className="text-sm text-zinc-400">{L.hint}</p>
      {/* budget bar */}
      <div className="mt-6">
        <div className="flex justify-between font-mono text-xs">
          <span className="text-zinc-400">
            {L.low} · {(HOURS - reinvested).toFixed(1)} {L.h}
          </span>
          <span className="text-[var(--accent)]">
            {L.high} · {reinvested.toFixed(1)} {L.h}
          </span>
        </div>
        <div className="mt-2 flex h-5 overflow-hidden rounded-full bg-white/5">
          <motion.div className="h-full bg-zinc-600/70" animate={{ width: `${100 - (reinvested / HOURS) * 100}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
          <motion.div className="h-full" style={{ background: 'linear-gradient(90deg, var(--accent), #22d3ee)' }} animate={{ width: `${(reinvested / HOURS) * 100}%` }} transition={{ type: 'spring', stiffness: 120, damping: 20 }} />
        </div>
      </div>
      <ul className="mt-6 grid gap-2">
        {rows.map(([reduce, keep, into], i) => {
          const on = moved.includes(i);
          return (
            <li key={reduce}>
              <button onClick={() => setMoved((m) => (on ? m.filter((x) => x !== i) : [...m, i]))} aria-expanded={on} className={cn('w-full cursor-pointer rounded-2xl border px-4 py-3 text-left transition-colors', on ? 'border-[var(--accent)]/40 bg-[var(--accent)]/[0.06]' : 'border-white/10 bg-white/[0.02] hover:border-white/25')}>
                <span className="flex items-center gap-3">
                  <motion.span animate={{ rotate: on ? 45 : 0 }} className={cn('grid h-6 w-6 shrink-0 place-items-center rounded-full border text-sm', on ? 'border-[var(--accent)] text-[var(--accent)]' : 'border-white/20 text-zinc-400')}>
                    +
                  </motion.span>
                  <span className={cn('text-sm transition-colors', on ? 'text-zinc-500 line-through decoration-white/30' : 'text-zinc-200')}>{reduce}</span>
                </span>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.span initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: easeOutExpo }} className="block overflow-hidden">
                      <span className="mt-3 grid gap-2 pl-9 sm:grid-cols-2">
                        <span className="block rounded-xl bg-black/30 p-3 text-xs leading-relaxed text-zinc-300">
                          <span className="mb-1 block font-mono text-[0.6rem] tracking-[0.18em] text-zinc-500 uppercase">{L.keep}</span>
                          {keep}
                        </span>
                        <span className="block rounded-xl bg-[var(--accent)]/10 p-3 text-xs leading-relaxed text-white">
                          <span className="mb-1 block font-mono text-[0.6rem] tracking-[0.18em] text-[var(--accent)] uppercase">{L.into}</span>
                          {into}
                        </span>
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-5 flex gap-3">
        <button className="btn-ghost !py-2 text-xs" onClick={() => setMoved(rows.map((_, i) => i))}>
          {L.all}
        </button>
        <button className="text-xs text-zinc-500 hover:text-white" onClick={() => setMoved([])}>
          ↺ {t.reset}
        </button>
      </div>
    </div>
  );
}
