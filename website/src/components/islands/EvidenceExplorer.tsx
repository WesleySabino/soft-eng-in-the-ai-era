import { LayoutGroup, motion } from 'motion/react';
import { useMemo, useState } from 'react';
import type { Lang } from '../../data/chapters';
import { cn } from './shared';

type Ev = 'types' | 'unit' | 'integration' | 'e2e' | 'property' | 'differential' | 'mutation' | 'load' | 'rollout';

const EVIDENCE: Record<Ev, { en: [string, string]; pt: [string, string] }> = {
  types: { en: ['Types & static analysis', 'Doesn’t show product intent or every runtime property.'], pt: ['Tipos e análise estática', 'Não demonstra intenção de produto nem todas as propriedades de execução.'] },
  unit: { en: ['Unit tests', 'Can miss relationships between components.'], pt: ['Testes unitários', 'Podem perder relações entre componentes.'] },
  integration: { en: ['Integration & contract tests', 'Depend on representative environments and versions.'], pt: ['Testes de integração e contrato', 'Dependem de ambientes e versões representativos.'] },
  e2e: { en: ['End-to-end tests', 'Expensive to run and prone to flakiness.'], pt: ['Testes de ponta a ponta', 'Execução cara e falhas intermitentes.'] },
  property: { en: ['Property-based tests', 'The chosen property must represent the correct rule.'], pt: ['Testes baseados em propriedades', 'A propriedade escolhida precisa representar a regra correta.'] },
  differential: { en: ['Differential tests', 'The reference may have bugs or different semantics.'], pt: ['Testes diferenciais', 'A referência pode ter erros ou semântica diferente.'] },
  mutation: { en: ['Mutation testing', 'Cost and interpretation require careful selection.'], pt: ['Testes de mutação', 'Custo e interpretação exigem seleção cuidadosa.'] },
  load: { en: ['Load measurement & profiling', 'The scenario must represent the relevant load.'], pt: ['Medição de carga e perfil', 'O cenário deve representar a carga relevante.'] },
  rollout: { en: ['Observation in gradual rollout', 'Detects after some exposure; requires containment.'], pt: ['Observação em implantação gradual', 'Detecta após alguma exposição; requer contenção.'] },
};

// strength: 2 = strong signal, 1 = partial, 0 = unlikely to catch it
const RISKS: { id: string; en: string; pt: string; s: Partial<Record<Ev, 0 | 1 | 2>>; noteEn: string; notePt: string }[] = [
  { id: 'race', en: 'Two requests race for the last unit', pt: 'Duas requisições disputam a última unidade', s: { integration: 2, property: 1, mutation: 1, load: 1, rollout: 1, e2e: 1 }, noteEn: 'Exercise the real database with barriers; mocks can’t show locking behavior. A deliberately racy version proves the test detects the defect.', notePt: 'Exercite o banco real com barreiras; mocks não mostram bloqueios. Uma versão deliberadamente vulnerável prova que o teste detecta o defeito.' },
  { id: 'tenant', en: 'Customer A can export customer B’s data', pt: 'O cliente A consegue exportar dados do cliente B', s: { integration: 2, e2e: 2, property: 1, unit: 1, types: 1, mutation: 1 }, noteEn: 'Use two customers with similar data and try to cross identifiers. “Returned a CSV” covers almost nothing.', notePt: 'Use dois clientes com dados parecidos e tente cruzar identificadores. “Retornou um CSV” cobre quase nada.' },
  { id: 'latency', en: 'p99 latency regresses under real load', pt: 'A latência p99 piora sob carga real', s: { load: 2, rollout: 2, e2e: 1 }, noteEn: 'Only measurement under representative load — or careful observation during rollout — sees tail latency.', notePt: 'Só medição com carga representativa — ou observação cuidadosa na implantação gradual — enxerga a cauda de latência.' },
  { id: 'rule', en: 'The business rule itself was misunderstood', pt: 'A própria regra de negócio foi mal entendida', s: { differential: 1, property: 1, e2e: 1, rollout: 1 }, noteEn: 'If code and tests come from the same wrong interpretation, they agree and both fail. You need an oracle with an independent origin: the domain owner, a reference, real users.', notePt: 'Se código e testes vêm da mesma interpretação errada, concordam e falham juntos. É preciso um oráculo de origem independente: o dono do domínio, uma referência, usuários reais.' },
  { id: 'contract', en: 'A change breaks another service’s API contract', pt: 'Uma mudança quebra o contrato de API de outro serviço', s: { integration: 2, types: 1, e2e: 1, differential: 1 }, noteEn: 'Contract tests at the boundary catch it before deployment; types help only if shared across services.', notePt: 'Testes de contrato na fronteira pegam antes da implantação; tipos ajudam só se compartilhados entre serviços.' },
  { id: 'calc', en: 'A rounding edge case in a price calculation', pt: 'Um caso de borda de arredondamento no cálculo de preço', s: { unit: 2, property: 2, differential: 2, mutation: 1, types: 1 }, noteEn: 'Local, deterministic logic: unit, property and differential tests shine. Mutation testing checks whether the tests would notice a wrong change.', notePt: 'Lógica local e determinística: testes unitários, de propriedade e diferenciais brilham. Mutação verifica se os testes notariam uma alteração errada.' },
];

export default function EvidenceExplorer({ lang }: { lang: Lang }) {
  const [risk, setRisk] = useState(RISKS[0].id);
  const r = RISKS.find((x) => x.id === risk)!;
  const ordered = useMemo(() => (Object.keys(EVIDENCE) as Ev[]).sort((a, b) => (r.s[b] ?? 0) - (r.s[a] ?? 0)), [r]);
  const L = lang === 'en' ? { pick: 'Pick a risk. The evidence that can actually catch it rises to the top.', strong: 'Strong signal', partial: 'Partial', none: 'Unlikely' } : { pick: 'Escolha um risco. As evidências que realmente o detectam sobem para o topo.', strong: 'Sinal forte', partial: 'Parcial', none: 'Improvável' };
  const label = (v: number) => (v === 2 ? L.strong : v === 1 ? L.partial : L.none);
  const color = (v: number) => (v === 2 ? '#34d399' : v === 1 ? '#fbbf24' : '#52525b');

  return (
    <div className="glass p-5 sm:p-8">
      <p className="text-sm text-zinc-400">{L.pick}</p>
      <div className="mt-4 flex flex-wrap gap-2" role="radiogroup">
        {RISKS.map((x) => (
          <button key={x.id} role="radio" aria-checked={risk === x.id} onClick={() => setRisk(x.id)} className={cn('relative cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors', risk === x.id ? 'border-transparent text-ink-950' : 'border-white/10 text-zinc-300 hover:border-white/30')}>
            {risk === x.id && <motion.span layoutId="risk-pill" className="absolute inset-0 rounded-full bg-[var(--accent)]" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
            <span className="relative">{x[lang]}</span>
          </button>
        ))}
      </div>
      <motion.p key={risk} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4 text-[0.95rem] leading-relaxed text-zinc-200">
        {lang === 'en' ? r.noteEn : r.notePt}
      </motion.p>
      <LayoutGroup>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((e) => {
            const v = r.s[e] ?? 0;
            return (
              <motion.div key={e} layout transition={{ type: 'spring', stiffness: 260, damping: 28 }} className="rounded-2xl border p-4" style={{ borderColor: `${color(v)}${v ? '88' : '33'}`, background: v ? `${color(v)}0f` : 'transparent', opacity: v ? 1 : 0.55 }}>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-white">{EVIDENCE[e][lang][0]}</span>
                  <span className="flex gap-1" aria-label={label(v)}>
                    {[0, 1].map((k) => (
                      <motion.span key={k} className="h-2 w-5 rounded-full" animate={{ backgroundColor: k < v ? color(v) : 'rgba(255,255,255,0.1)' }} />
                    ))}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[0.65rem] tracking-wider uppercase" style={{ color: color(v) }}>
                  {label(v)}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{EVIDENCE[e][lang][1]}</p>
              </motion.div>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}
