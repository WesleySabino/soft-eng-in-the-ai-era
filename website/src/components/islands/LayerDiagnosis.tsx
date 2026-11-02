import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn, easeOutExpo, ui } from './shared';

type LayerId = 'model' | 'agent' | 'env';

const DATA = {
  en: {
    prompt: 'Where does the fault live? Diagnose the layer before you rewrite the prompt.',
    layers: {
      model: { name: 'Model', desc: 'Produces responses and tool-use decisions.' },
      agent: { name: 'Agent & harness', desc: 'Organizes the loop: context, state, tools and their interfaces.' },
      env: { name: 'Execution environment', desc: 'Files, processes, network, credentials and resources.' },
    },
    cases: [
      { s: 'The agent writes plausible code but never runs the tests: the test suite needs a database that doesn’t exist in its sandbox.', a: 'env', why: 'Reasoning is fine; the environment can’t execute the check. Provide a reproducible test database.' },
      { s: 'After a long session, the agent redoes work it had discarded an hour earlier.', a: 'agent', why: 'State persistence is a harness concern: record decisions, discarded hypotheses and next steps.' },
      { s: 'It keeps calling an API version that was deprecated — the docs it retrieved are from 2023.', a: 'agent', why: 'Context engineering: make the current version and documentation the authoritative source.' },
      { s: 'The deploy tool returns free text “ok”, so the agent reports a deployment that never finished.', a: 'agent', why: 'Tool interface design: distinguish “request accepted” from “deployment completed” with a queryable state.' },
      { s: 'With complete context and working tools, it still misreads a subtle invariant in a novel algorithm.', a: 'model', why: 'A genuine capability limit. Change the task split, add a check, or keep this decision human.' },
      { s: 'Dependency installation fails every time: outbound network to the package registry is blocked.', a: 'env', why: 'An environment limit. Provide a mirror or pre-built image — rewording the request won’t help.' },
    ],
  },
  pt: {
    prompt: 'Onde está a falha? Diagnostique a camada antes de reescrever o pedido.',
    layers: {
      model: { name: 'Modelo', desc: 'Produz respostas e decisões de uso de ferramentas.' },
      agent: { name: 'Agente e harness', desc: 'Organiza o ciclo: contexto, estado, ferramentas e suas interfaces.' },
      env: { name: 'Ambiente de execução', desc: 'Arquivos, processos, rede, credenciais e recursos.' },
    },
    cases: [
      { s: 'O agente escreve código plausível mas nunca executa os testes: a suíte precisa de um banco que não existe no sandbox.', a: 'env', why: 'O raciocínio está ok; o ambiente não consegue executar a verificação. Forneça um banco de teste reproduzível.' },
      { s: 'Depois de uma sessão longa, o agente refaz um trabalho que tinha descartado uma hora antes.', a: 'agent', why: 'Persistência de estado é papel do harness: registre decisões, hipóteses descartadas e próximos passos.' },
      { s: 'Ele continua chamando uma versão de API descontinuada — a documentação recuperada é de 2023.', a: 'agent', why: 'Engenharia de contexto: torne a versão e a documentação atuais a fonte de autoridade.' },
      { s: 'A ferramenta de deploy devolve texto livre “ok”, e o agente relata uma implantação que nunca terminou.', a: 'agent', why: 'Desenho da interface da ferramenta: distinga “solicitação aceita” de “implantação concluída” com estado consultável.' },
      { s: 'Com contexto completo e ferramentas funcionando, ele ainda interpreta mal um invariante sutil de um algoritmo novo.', a: 'model', why: 'Um limite real de capacidade. Mude a divisão da tarefa, acrescente uma verificação ou mantenha a decisão humana.' },
      { s: 'A instalação de dependências falha sempre: a rede de saída para o registro de pacotes está bloqueada.', a: 'env', why: 'Limite do ambiente. Forneça um espelho ou imagem pronta — reescrever o pedido não ajuda.' },
    ],
  },
};

const COLORS: Record<LayerId, string> = { model: '#a78bfa', agent: '#22d3ee', env: '#fbbf24' };

export default function LayerDiagnosis({ lang }: { lang: Lang }) {
  const d = DATA[lang];
  const t = ui(lang);
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<LayerId | null>(null);
  const [score, setScore] = useState(0);
  const c = d.cases[i % d.cases.length];
  const done = i >= d.cases.length;

  const choose = (l: LayerId) => {
    if (pick) return;
    setPick(l);
    if (l === c.a) setScore((s) => s + 1);
  };

  return (
    <div className="glass grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr]">
      {/* stacked layers */}
      <div className="flex flex-col justify-center gap-3 [perspective:900px]">
        <p className="text-sm text-zinc-400">{d.prompt}</p>
        {(['model', 'agent', 'env'] as LayerId[]).map((l, k) => {
          const isAnswer = pick && l === c.a;
          const isWrong = pick === l && l !== c.a;
          return (
            <motion.button
              key={l}
              onClick={() => choose(l)}
              disabled={!!pick || done}
              initial={{ rotateX: 28, opacity: 0, y: 20 }}
              whileInView={{ rotateX: 18, opacity: 1, y: 0 }}
              whileHover={!pick ? { rotateX: 6, y: -4 } : undefined}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 160, damping: 18, delay: k * 0.08 }}
              className={cn('cursor-pointer rounded-2xl border p-5 text-left transition-colors disabled:cursor-default', isAnswer ? 'bg-emerald-400/10' : isWrong ? 'bg-rose-400/10' : 'bg-white/[0.03]')}
              style={{
                borderColor: isAnswer ? '#34d399' : isWrong ? '#fb7185' : `${COLORS[l]}55`,
                boxShadow: isAnswer ? '0 20px 60px -25px #34d399' : `0 20px 50px -30px ${COLORS[l]}`,
                transformStyle: 'preserve-3d',
              }}
            >
              <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase" style={{ color: COLORS[l] }}>
                {d.layers[l].name}
              </span>
              <span className="mt-1 block text-sm text-zinc-300">{d.layers[l].desc}</span>
            </motion.button>
          );
        })}
      </div>

      {/* case */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between font-mono text-xs text-zinc-500">
          <span>
            {Math.min(i + 1, d.cases.length)} / {d.cases.length}
          </span>
          <span>
            {t.score} {score}
          </span>
        </div>
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.45, ease: easeOutExpo }} className="mt-4 flex flex-1 flex-col">
              <p className="font-serif text-2xl leading-snug text-white sm:text-[1.7rem]">{c.s}</p>
              <AnimatePresence>
                {pick && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5" aria-live="polite">
                    <p className={cn('font-semibold', pick === c.a ? 'text-emerald-300' : 'text-rose-300')}>
                      {pick === c.a ? t.correct : `${t.notQuite} → ${d.layers[c.a as LayerId].name}`}
                    </p>
                    <p className="mt-1 text-zinc-300">{c.why}</p>
                    <button className="btn-primary mt-4" onClick={() => (setPick(null), setI(i + 1))}>
                      {t.next} →
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div key="end" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 text-center">
              <p className="display text-6xl">
                {score}
                <span className="text-zinc-500">/{d.cases.length}</span>
              </p>
              <button className="btn-ghost mt-6" onClick={() => (setI(0), setScore(0), setPick(null))}>
                ↺ {t.tryAgain}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
