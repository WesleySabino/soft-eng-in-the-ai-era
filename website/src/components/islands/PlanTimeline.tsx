import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, load, save } from './shared';

interface Phase {
  from: number;
  to: number;
  title: string;
  actions: string[];
  deliverables: string[];
  criterion: string;
}

const PHASES: Record<Lang, Phase[]> = {
  en: [
    {
      from: 1, to: 15, title: 'Establish a complete flow and a baseline',
      actions: ['Choose one main tool; learn to operate context, execution, resumption and limits.', 'Run a few real tasks and record where you intervened, the time consumed and which checks supported the delivery.', 'Talk with a user or product owner to choose an improvement with recognizable value.', 'Reproduce a failure and complete a small delivery with AI, including testing and observing the result.'],
      deliverables: ['Task log', 'First completed change', 'List of the main limitations of the flow', 'One personal technical gap identified'],
      criterion: 'You can explain the goal, demonstrate the result and distinguish the agent’s contribution from your interventions.',
    },
    {
      from: 16, to: 30, title: 'Make the work more delegable',
      actions: ['Improve the repository map and the setup and validation commands.', 'Use task contracts with invariants and completion criteria.', 'Turn a repeated instruction into a shared resource; remove outdated information.', 'Hold a deliberate session on your chosen gap and complete a variant that applies it.'],
      deliverables: ['Short project orientation', 'Tested task template', 'Reusable procedure', 'Comprehension exercise'],
      criterion: 'Another person, or a fresh agent session, can repeat the process without verbal guidance from you.',
    },
    {
      from: 31, to: 60, title: 'Increase autonomy with evidence',
      actions: ['Build a small collection of tasks to evaluate the flow: previous errors, edge cases, different difficulties.', 'Compare two configurations only when it answers a real question, with fixed criteria.', 'If parallelism could remove a limitation, try it on a decomposable task with interfaces, isolation and an integration owner.', 'Check permissions, accessible data and recovery procedures; automate one class of repetitive checks.'],
      deliverables: ['Initial evaluation suite', 'Automated repetitive checks', 'Simple autonomy policy by class of change'],
      criterion: 'A demonstrable reduction in repetitive intervention, with evidence of quality and control of consequences.',
    },
    {
      from: 61, to: 90, title: 'Improve the team’s system',
      actions: ['Choose an observed bottleneck: review queue, environment startup, CI, fragmented context or manual validation.', 'Implement an improvement and track its effect — or write a proposal if another team owns it.', 'Share the procedure and train at least one other user of the flow.', 'Reassess the value delivered from a product perspective; remove what didn’t prove useful.'],
      deliverables: ['Adopted flow improvement', 'Contextualized before/after comparison', 'Usage documentation', 'Next development priority'],
      criterion: 'The benefit survives your absence and shows up in other people’s work or in a better result for the user.',
    },
  ],
  pt: [
    {
      from: 1, to: 15, title: 'Estabelecer um fluxo completo e uma linha de base',
      actions: ['Escolha uma ferramenta principal; aprenda a operar contexto, execução, retomada e limites.', 'Execute algumas tarefas reais e registre onde interveio, o tempo consumido e quais verificações sustentaram a entrega.', 'Converse com um usuário ou responsável de produto para escolher uma melhoria com valor reconhecível.', 'Reproduza uma falha e conclua uma entrega pequena com IA, incluindo teste e observação do resultado.'],
      deliverables: ['Registro das tarefas', 'Primeira mudança concluída', 'Lista das principais limitações do fluxo', 'Uma lacuna técnica pessoal identificada'],
      criterion: 'Você consegue explicar o objetivo, demonstrar o resultado e distinguir a contribuição do agente de suas intervenções.',
    },
    {
      from: 16, to: 30, title: 'Tornar o trabalho mais delegável',
      actions: ['Melhore o mapa do repositório e os comandos de preparação e validação.', 'Use contratos de tarefa com invariantes e critérios de conclusão.', 'Converta uma instrução repetida em recurso compartilhado; remova informações desatualizadas.', 'Faça uma sessão deliberada sobre a lacuna escolhida e conclua uma variante que a aplique.'],
      deliverables: ['Orientação curta do projeto', 'Modelo de tarefa testado', 'Procedimento reutilizável', 'Exercício de entendimento'],
      criterion: 'Outra pessoa, ou uma nova sessão do agente, consegue repetir o processo sem depender de orientações orais suas.',
    },
    {
      from: 31, to: 60, title: 'Aumentar autonomia com evidência',
      actions: ['Construa uma pequena coleção de tarefas para avaliar o fluxo: erros anteriores, casos de borda, dificuldades diferentes.', 'Compare duas configurações só quando isso responder a uma dúvida real, com critérios fixos.', 'Se o paralelismo puder remover uma limitação, experimente-o numa tarefa decomponível, com interfaces, isolamento e responsável pela integração.', 'Verifique permissões, dados acessíveis e procedimentos de recuperação; automatize uma classe de verificações repetitivas.'],
      deliverables: ['Suíte inicial de avaliação', 'Verificações repetitivas automatizadas', 'Política simples de autonomia por classe de mudança'],
      criterion: 'Redução demonstrável de intervenção repetitiva, com evidência de qualidade e controle de consequências.',
    },
    {
      from: 61, to: 90, title: 'Melhorar o sistema da equipe',
      actions: ['Escolha um gargalo observado: fila de revisão, inicialização de ambiente, CI, contexto fragmentado ou validação manual.', 'Implemente uma melhoria e acompanhe seu efeito — ou formule uma proposta se outra equipe for dona.', 'Compartilhe o procedimento e forme ao menos outro usuário do fluxo.', 'Reavalie o valor entregue na perspectiva de produto; remova o que não demonstrou utilidade.'],
      deliverables: ['Melhoria de fluxo adotada', 'Comparação antes/depois contextualizada', 'Documentação de uso', 'Próxima prioridade de desenvolvimento'],
      criterion: 'O benefício sobrevive à sua ausência e aparece no trabalho de outras pessoas ou em um resultado melhor para o usuário.',
    },
  ],
};

const COLORS = ['#a78bfa', '#22d3ee', '#fbbf24', '#34d399'];
const KEY = 'seai:plan90:v1';

export default function PlanTimeline({ lang }: { lang: Lang }) {
  const phases = PHASES[lang];
  const [day, setDay] = useState(1);
  const [checked, setChecked] = useState<string[]>([]);
  useEffect(() => {
    const s = load<{ day: number; checked: string[] }>(KEY, { day: 1, checked: [] });
    setDay(s.day);
    setChecked(s.checked);
  }, []);
  useEffect(() => save(KEY, { day, checked }), [day, checked]);

  const active = phases.findIndex((p) => day >= p.from && day <= p.to);
  const [view, setView] = useState<number | null>(null);
  const shown = view ?? active;
  const p = phases[shown];
  const L = lang === 'en' ? { day: 'I am on day', actions: 'What to do', deliv: 'Deliverables', crit: 'Criterion for advancing', days: 'Days', done: 'done' } : { day: 'Estou no dia', actions: 'O que fazer', deliv: 'Entregas', crit: 'Critério de avanço', days: 'Dias', done: 'feitas' };
  const id = (k: number, d: number) => `${k}:${d}`;
  const doneIn = (k: number) => phases[k].deliverables.filter((_, d) => checked.includes(id(k, d))).length;

  return (
    <div className="glass p-5 sm:p-8">
      {/* timeline */}
      <div className="relative">
        <div className="flex h-14 gap-1.5">
          {phases.map((ph, k) => (
            <button key={ph.title} onClick={() => setView(k === active && view === null ? null : k)} className={cn('relative flex cursor-pointer flex-col justify-center overflow-hidden rounded-xl border px-3 text-left transition-colors', shown === k ? 'border-white/30' : 'border-white/10 hover:border-white/20')} style={{ flex: ph.to - ph.from + 1, background: shown === k ? `${COLORS[k]}22` : 'rgb(255 255 255 / .02)' }}>
              <motion.span className="absolute inset-y-0 left-0" style={{ background: `${COLORS[k]}33` }} animate={{ width: `${(doneIn(k) / ph.deliverables.length) * 100}%` }} />
              <span className="relative font-mono text-[0.62rem] text-zinc-400">
                {L.days} {ph.from}–{ph.to}
              </span>
              <span className="relative hidden truncate text-xs font-medium text-white sm:block">{ph.title}</span>
            </button>
          ))}
        </div>
        <motion.div className="pointer-events-none absolute -top-2 bottom-[-0.5rem] w-[2px] rounded-full bg-white" style={{ boxShadow: '0 0 12px white' }} animate={{ left: `calc(${((day - 0.5) / 90) * 100}% - 1px)` }} transition={{ type: 'spring', stiffness: 200, damping: 26 }} aria-hidden="true" />
      </div>
      <label className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
        {L.day}
        <input type="range" min={1} max={90} value={day} onChange={(e) => (setDay(Number(e.target.value)), setView(null))} className="flex-1 accent-[var(--accent)]" />
        <span className="w-10 font-mono text-xl text-white">{day}</span>
      </label>

      <AnimatePresence mode="wait">
        <motion.div key={shown} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45, ease: easeOutExpo }} className="mt-8" style={{ ['--accent' as string]: COLORS[shown] }}>
          <p className="eyebrow">
            {L.days} {p.from}–{p.to}
          </p>
          <h3 className="display mt-2 text-4xl">{p.title}</h3>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">{L.actions}</p>
              <ol className="mt-3 space-y-3">
                {p.actions.map((a, k) => (
                  <motion.li key={a} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * k }} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                    <span className="font-mono text-xs text-[var(--accent)]">{k + 1}</span>
                    {a}
                  </motion.li>
                ))}
              </ol>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] tracking-[0.2em] text-zinc-500 uppercase">
                {L.deliv} · {doneIn(shown)}/{p.deliverables.length} {L.done}
              </p>
              <ul className="mt-3 space-y-2">
                {p.deliverables.map((d, k) => {
                  const on = checked.includes(id(shown, k));
                  return (
                    <li key={d}>
                      <label className={cn('flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors', on ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10 text-white' : 'border-white/10 text-zinc-300 hover:border-white/25')}>
                        <input type="checkbox" checked={on} onChange={() => setChecked((c) => (on ? c.filter((x) => x !== id(shown, k)) : [...c, id(shown, k)]))} className="accent-[var(--accent)]" />
                        <span className={on ? 'line-through decoration-white/30' : ''}>{d}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[var(--accent)] uppercase">{L.crit}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-200">{p.criterion}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
