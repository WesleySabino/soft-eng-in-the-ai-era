export type Lang = 'en' | 'pt';
export const LANGS: Lang[] = ['en', 'pt'];
export type L<T = string> = Record<Lang, T>;

export interface Part {
  id: number;
  accent: string; // CSS color used across the part
  title: L;
  tagline: L;
}

export interface Chapter {
  id: number;
  part: number;
  minutes: number;
  slug: L;
  title: L;
  short: L;
  kicker: L;
  description: L;
}

export const PARTS: Part[] = [
  {
    id: 1,
    accent: '#a78bfa',
    title: { en: 'The shift', pt: 'A mudança' },
    tagline: {
      en: 'What the engineer’s job becomes when code production is delegable.',
      pt: 'O que o trabalho do engenheiro se torna quando produzir código é delegável.',
    },
  },
  {
    id: 2,
    accent: '#22d3ee',
    title: { en: 'The craft', pt: 'O ofício' },
    tagline: {
      en: 'The fundamentals to keep, the new skills to learn and what to let go.',
      pt: 'Os fundamentos a conservar, as novas competências e o que deixar de lado.',
    },
  },
  {
    id: 3,
    accent: '#fbbf24',
    title: { en: 'The practice', pt: 'A prática' },
    tagline: {
      en: 'A full technical case, delivery flow, learning and a 90-day plan.',
      pt: 'Um caso técnico completo, fluxo de entrega, aprendizagem e um plano de 90 dias.',
    },
  },
  {
    id: 4,
    accent: '#34d399',
    title: { en: 'The toolkit', pt: 'O kit' },
    tagline: {
      en: 'Sources, reading paths, working templates and a glossary.',
      pt: 'Fontes, trilhas de leitura, modelos de trabalho e glossário.',
    },
  },
];

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    part: 1,
    minutes: 6,
    slug: { en: 'the-central-shift', pt: 'a-mudanca-central' },
    title: {
      en: 'The central shift: what is the engineer’s job now?',
      pt: 'A mudança central: qual é o trabalho do engenheiro agora?',
    },
    short: { en: 'The central shift', pt: 'A mudança central' },
    kicker: {
      en: 'Your unit of contribution is no longer code. It is a useful, verified change in the real system.',
      pt: 'Sua unidade de contribuição deixa de ser código. Passa a ser uma mudança útil e verificada no sistema real.',
    },
    description: {
      en: 'Learn how AI changes the software engineer’s role: directing agents, redesigning the delivery flow and turning failures into reusable improvements.',
      pt: 'Entenda como a IA muda o papel do engenheiro de software: dirigir agentes, redesenhar o fluxo de entrega e transformar falhas em melhorias reutilizáveis.',
    },
  },
  {
    id: 2,
    part: 1,
    minutes: 5,
    slug: { en: 'what-the-evidence-says', pt: 'o-que-dizem-as-evidencias' },
    title: { en: 'What the evidence already supports', pt: 'O que as evidências já permitem afirmar' },
    short: { en: 'The evidence', pt: 'As evidências' },
    kicker: {
      en: 'Capability, productivity and outcome are three different questions. Learn to keep them apart.',
      pt: 'Capacidade, produtividade e resultado são três perguntas diferentes. Aprenda a separá-las.',
    },
    description: {
      en: 'What research from DORA, METR, Anthropic, OpenAI and field experiments says about AI-assisted software development — and its limits.',
      pt: 'O que pesquisas da DORA, METR, Anthropic, OpenAI e experimentos de campo dizem sobre desenvolvimento com IA — e seus limites.',
    },
  },
  {
    id: 3,
    part: 1,
    minutes: 7,
    slug: { en: 'the-mindset', pt: 'a-mentalidade' },
    title: { en: 'The mindset needed for the new role', pt: 'A mentalidade necessária para exercer o novo papel' },
    short: { en: 'The mindset', pt: 'A mentalidade' },
    kicker: {
      en: 'Seven habits of mind for engineers who direct agents and answer for outcomes.',
      pt: 'Sete hábitos mentais para engenheiros que dirigem agentes e respondem pelo resultado.',
    },
    description: {
      en: 'Outcome-anchored identity, expanded responsibility, evidence-based trust and systems thinking: the mindset of the AI-era engineer.',
      pt: 'Identidade ancorada em resultado, responsabilidade ampliada, confiança baseada em evidências e visão sistêmica: a mentalidade do engenheiro na era da IA.',
    },
  },
  {
    id: 4,
    part: 1,
    minutes: 5,
    slug: { en: 'the-competency-map', pt: 'o-mapa-das-competencias' },
    title: { en: 'The competency map', pt: 'O mapa das competências' },
    short: { en: 'Competency map', pt: 'Mapa das competências' },
    kicker: {
      en: 'Preserve, deepen, learn, deprioritize: four decisions about where your learning time goes.',
      pt: 'Conservar, aprofundar, aprender, despriorizar: quatro decisões sobre onde investir seu tempo de estudo.',
    },
    description: {
      en: 'An interactive map of software engineering competencies in the AI era: what to preserve, deepen, learn and deprioritize.',
      pt: 'Um mapa interativo das competências de engenharia de software na era da IA: o que conservar, aprofundar, aprender e despriorizar.',
    },
  },
  {
    id: 5,
    part: 2,
    minutes: 9,
    slug: { en: 'fundamentals', pt: 'fundamentos' },
    title: { en: 'Fundamentals that must remain strong', pt: 'Fundamentos que precisam permanecer fortes' },
    short: { en: 'Fundamentals', pt: 'Fundamentos' },
    kicker: {
      en: 'You can delegate the syntax. You cannot delegate the mental model of what the code does.',
      pt: 'Você pode delegar a sintaxe. Não pode delegar o modelo mental do que o código faz.',
    },
    description: {
      en: 'Semantics, complexity, concurrency, idempotency, architecture, debugging and observability: the fundamentals AI makes more valuable.',
      pt: 'Semântica, complexidade, concorrência, idempotência, arquitetura, depuração e observabilidade: os fundamentos que a IA torna mais valiosos.',
    },
  },
  {
    id: 6,
    part: 2,
    minutes: 10,
    slug: { en: 'working-with-agents', pt: 'trabalhando-com-agentes' },
    title: { en: 'New competencies for working with agents', pt: 'Novas competências para trabalhar com agentes' },
    short: { en: 'Working with agents', pt: 'Trabalhando com agentes' },
    kicker: {
      en: 'Specify, provide context, equip with tools, decompose and keep long runs on track.',
      pt: 'Especificar, fornecer contexto, equipar com ferramentas, decompor e manter execuções longas no rumo.',
    },
    description: {
      en: 'Task contracts, context engineering, repository readiness, tools and MCP, skills, parallel agents and the economics of execution.',
      pt: 'Contratos de tarefa, engenharia de contexto, repositório preparado, ferramentas e MCP, skills, agentes em paralelo e economia da execução.',
    },
  },
  {
    id: 7,
    part: 2,
    minutes: 8,
    slug: { en: 'verification-and-evals', pt: 'verificacao-e-avaliacao' },
    title: {
      en: 'Verification, testing and evaluation: building trust at scale',
      pt: 'Verificação, testes e avaliação: construir confiança em escala',
    },
    short: { en: 'Verification & evals', pt: 'Verificação e avaliação' },
    kicker: {
      en: 'Trust is built from evidence with independent origins, not from a convincing explanation.',
      pt: 'Confiança se constrói com evidências de origens independentes, não com uma explicação convincente.',
    },
    description: {
      en: 'Correctness oracles, choosing the right form of evidence, the new economics of testing, distributed human review and evaluating AI workflows.',
      pt: 'Oráculos de correção, escolha da evidência certa, a nova economia dos testes, revisão humana distribuída e avaliação de fluxos com IA.',
    },
  },
  {
    id: 8,
    part: 2,
    minutes: 7,
    slug: { en: 'security-and-autonomy', pt: 'seguranca-e-autonomia' },
    title: { en: 'Security and autonomy as engineering problems', pt: 'Segurança e autonomia como problemas de engenharia' },
    short: { en: 'Security & autonomy', pt: 'Segurança e autonomia' },
    kicker: {
      en: 'Useful autonomy needs an effective perimeter: control what can happen and how far it can reach.',
      pt: 'Autonomia útil exige um perímetro efetivo: controlar o que pode acontecer e até onde pode chegar.',
    },
    description: {
      en: 'Prompt injection, least privilege, sandboxing, egress control and an autonomy matrix for AI agents in software engineering.',
      pt: 'Prompt injection, menor privilégio, sandbox, controle de saída de rede e uma matriz de autonomia para agentes de IA na engenharia.',
    },
  },
  {
    id: 9,
    part: 2,
    minutes: 7,
    slug: { en: 'what-to-deprioritize', pt: 'o-que-despriorizar' },
    title: {
      en: 'What deserves less investment — and what to put in its place',
      pt: 'O que merece menos investimento — e o que colocar no lugar',
    },
    short: { en: 'What to deprioritize', pt: 'O que despriorizar' },
    kicker: {
      en: 'Adapting requires withdrawing investment. Rebalance your study week deliberately.',
      pt: 'Adaptar-se exige retirar investimento. Rebalanceie deliberadamente sua semana de estudo.',
    },
    description: {
      en: 'Which skills to stop over-investing in as an AI-era engineer — syntax memorization, boilerplate, line-by-line review — and what to reinvest in.',
      pt: 'Em quais habilidades parar de investir em excesso — memorizar sintaxe, boilerplate, revisão linha a linha — e onde reinvestir.',
    },
  },
  {
    id: 10,
    part: 2,
    minutes: 3,
    slug: { en: 'specialization', pt: 'especializacao' },
    title: {
      en: 'Specialization: what everyone needs to know and what depends on the job',
      pt: 'Especialização: o que todos precisam saber e o que depende do trabalho',
    },
    short: { en: 'Specialization', pt: 'Especialização' },
    kicker: {
      en: 'A common core for everyone, plus selective depth where your judgment is hardest.',
      pt: 'Um núcleo comum para todos e profundidade seletiva onde seu julgamento é mais difícil.',
    },
    description: {
      en: 'The common core every AI-era engineer needs, three professional scopes and how to choose selective depth.',
      pt: 'O núcleo comum para todo engenheiro na era da IA, três escopos de atuação e como escolher profundidade seletiva.',
    },
  },
  {
    id: 11,
    part: 3,
    minutes: 10,
    slug: { en: 'case-study-inventory-reservation', pt: 'caso-reserva-de-estoque' },
    title: {
      en: 'A complete technical case: inventory reservation under concurrency',
      pt: 'Um caso técnico completo: reserva de estoque com concorrência',
    },
    short: { en: 'Case study', pt: 'Caso técnico' },
    kicker: {
      en: 'Race conditions, idempotency keys and the transactional outbox — simulated step by step.',
      pt: 'Condições de corrida, chaves de idempotência e outbox transacional — simulados passo a passo.',
    },
    description: {
      en: 'Interactive case study: designing an inventory reservation API with concurrency, idempotency and the outbox pattern, delegating implementation to AI.',
      pt: 'Caso interativo: projetar uma API de reserva de estoque com concorrência, idempotência e padrão outbox, delegando a implementação à IA.',
    },
  },
  {
    id: 12,
    part: 3,
    minutes: 7,
    slug: { en: 'delivery-flow', pt: 'fluxo-de-entrega' },
    title: { en: 'From individual productivity to delivery flow', pt: 'Da produtividade individual ao fluxo de entrega' },
    short: { en: 'Delivery flow', pt: 'Fluxo de entrega' },
    kicker: {
      en: 'A 10× faster implementation can make delivery only 1.56× faster. Find where time really goes.',
      pt: 'Uma implementação 10× mais rápida pode acelerar a entrega só 1,56×. Descubra onde o tempo realmente vai.',
    },
    description: {
      en: 'Why local AI speedups don’t automatically speed up delivery, DORA metrics, cost per accepted change and turning recurring failures into improvements.',
      pt: 'Por que acelerações locais com IA não aceleram a entrega automaticamente, métricas DORA, custo por mudança aceita e melhoria contínua.',
    },
  },
  {
    id: 13,
    part: 3,
    minutes: 6,
    slug: { en: 'learning-with-ai', pt: 'aprender-com-ia' },
    title: { en: 'Learning with AI while preserving judgment', pt: 'Aprender com IA e preservar a capacidade de julgamento' },
    short: { en: 'Learning with AI', pt: 'Aprender com IA' },
    kicker: {
      en: 'Receiving a solution and understanding it are different outcomes. Design for the one you need.',
      pt: 'Receber uma solução e compreendê-la são resultados diferentes. Desenhe para o que você precisa.',
    },
    description: {
      en: 'How to learn with AI without losing judgment: a seven-step learning cycle, a sustainable study agenda and how to train junior engineers.',
      pt: 'Como aprender com IA sem perder o julgamento: um ciclo de aprendizagem em sete passos, agenda de estudo e formação de iniciantes.',
    },
  },
  {
    id: 14,
    part: 3,
    minutes: 6,
    slug: { en: '90-day-plan', pt: 'plano-de-90-dias' },
    title: { en: 'A 90-day development plan', pt: 'Um plano de desenvolvimento de 90 dias' },
    short: { en: '90-day plan', pt: 'Plano de 90 dias' },
    kicker: {
      en: 'Four phases, real deliverables and a criterion for advancing. Track your own progress.',
      pt: 'Quatro fases, entregas reais e um critério de avanço. Acompanhe seu próprio progresso.',
    },
    description: {
      en: 'A practical 90-day roadmap to become an AI-era software engineer, with deliverables and progress tracking.',
      pt: 'Um roteiro prático de 90 dias para se tornar um engenheiro de software da era da IA, com entregas e acompanhamento de progresso.',
    },
  },
  {
    id: 15,
    part: 3,
    minutes: 6,
    slug: { en: 'career-levels', pt: 'niveis-de-carreira' },
    title: {
      en: 'Recognizing excellence at different career levels',
      pt: 'Como reconhecer excelência em diferentes níveis de carreira',
    },
    short: { en: 'Career levels', pt: 'Níveis de carreira' },
    kicker: {
      en: 'Rate yourself on ten dimensions and see your profile take shape.',
      pt: 'Avalie-se em dez dimensões e veja seu perfil tomar forma.',
    },
    description: {
      en: 'What excellence looks like from early career to staff and leadership, plus an interactive self-assessment radar for AI-era engineers.',
      pt: 'Como é a excelência do início de carreira ao staff e à liderança, com um radar interativo de autoavaliação para engenheiros na era da IA.',
    },
  },
  {
    id: 16,
    part: 3,
    minutes: 2,
    slug: { en: 'the-excellent-engineer', pt: 'o-engenheiro-excelente' },
    title: { en: 'An operational definition of the excellent engineer', pt: 'Uma definição operacional do excelente engenheiro' },
    short: { en: 'The excellent engineer', pt: 'O engenheiro excelente' },
    kicker: {
      en: 'One sentence that summarizes the whole report.',
      pt: 'Uma frase que resume todo o relatório.',
    },
    description: {
      en: 'The excellent engineer converts relevant problems into verifiable outcomes and increases the capacity of the system that performs that conversion.',
      pt: 'O excelente engenheiro converte problemas relevantes em resultados verificáveis e aumenta a capacidade do sistema que realiza essa conversão.',
    },
  },
  {
    id: 17,
    part: 4,
    minutes: 4,
    slug: { en: 'references', pt: 'referencias' },
    title: { en: 'References and further reading paths', pt: 'Referências e trilhas de aprofundamento' },
    short: { en: 'References', pt: 'Referências' },
    kicker: {
      en: '39 primary sources, filterable, with the nature and limits of each one.',
      pt: '39 fontes primárias, filtráveis, com a natureza e os limites de cada uma.',
    },
    description: {
      en: 'Annotated bibliography on AI and software engineering: DORA, METR, Anthropic, OpenAI, OWASP, SRE and more, with suggested reading paths.',
      pt: 'Bibliografia comentada sobre IA e engenharia de software: DORA, METR, Anthropic, OpenAI, OWASP, SRE e mais, com trilhas de leitura.',
    },
  },
  {
    id: 18,
    part: 4,
    minutes: 5,
    slug: { en: 'templates-and-glossary', pt: 'modelos-e-glossario' },
    title: { en: 'Appendices: working templates and glossary', pt: 'Apêndices: modelos de trabalho e glossário' },
    short: { en: 'Templates & glossary', pt: 'Modelos e glossário' },
    kicker: {
      en: 'Copy-ready templates for task contracts, repository maps, failure logs and reviews.',
      pt: 'Modelos prontos para copiar: contratos de tarefa, mapas de repositório, registros de falha e revisões.',
    },
    description: {
      en: 'Templates for AI agent task contracts, repository maps, failure logs and evidence-driven reviews, plus a glossary of AI engineering terms.',
      pt: 'Modelos de contrato de tarefa para agentes, mapa de repositório, registro de falhas e revisão orientada por evidências, com glossário.',
    },
  },
];

export const chapterById = (id: number) => CHAPTERS.find((c) => c.id === id)!;
export const partById = (id: number) => PARTS.find((p) => p.id === id)!;
export const chaptersOfPart = (id: number) => CHAPTERS.filter((c) => c.part === id);
