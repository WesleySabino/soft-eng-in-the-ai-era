# Engenharia de software na era da IA

## Competências para construir melhor no presente

**Relatório de pesquisa e orientação profissional**  
**Data de corte: 1º de novembro de 2026**  
**Idioma: português brasileiro**

> **Tese do relatório:** a excelência do engenheiro passa a depender de sua capacidade de transformar intenção em sistemas confiáveis, dirigindo a execução por IA e melhorando continuamente o ambiente em que pessoas e agentes trabalham. O domínio técnico permite ampliar essa delegação e responder pelo resultado.

---

## Como ler este documento

Este relatório toma como premissa o manifesto **“AI @ Proton, Engineering Manifesto”**, fornecido em três imagens. A versão pública foi localizada no site da Proton, publicada em 1º de novembro de 2026 e atribuída a **Bart Butler**, CTO da empresa. O texto das imagens é a fonte de partida; a publicação e a página oficial do autor permitem verificar sua atribuição. [F01] [F02]

A pergunta que orienta a pesquisa é: **o que um engenheiro precisa compreender, aprender, conservar e deixar de priorizar para exercer esse novo papel com excelência?** A transformação descrita no manifesto é tratada como condição presente de trabalho. As qualificações metodológicas deste relatório servem para orientar sua implementação, selecionar investimentos e medir resultados.

Há quatro tipos de conteúdo:

- **Premissa:** as ideias do manifesto que organizam o problema.
- **Evidência:** resultados de pesquisas, documentação e experiências publicadas, com referências.
- **Síntese aplicada:** recomendações formuladas neste relatório a partir dessas fontes e de raciocínio de engenharia.
- **Exemplos:** cenários, números e modelos de trabalho explicitamente ilustrativos, sem pretensão de serem resultados observados.

A pesquisa é uma **revisão dirigida de fontes primárias**, não uma revisão sistemática exaustiva. Foram priorizados estudos de 2025–2026, relatos técnicos dos próprios autores, documentação oficial e referências duráveis de engenharia. Pesquisas observacionais, experimentos, propostas metodológicas e relatos de fornecedores têm forças e limites distintos. Esses limites aparecem junto das alegações relevantes. As referências ao final contêm links, datas e natureza das fontes.

**Percursos de leitura:**

- Para compreender a mudança profissional, leia as seções **1 a 4**.
- Para reorganizar seu desenvolvimento técnico, leia as seções **5 a 10**.
- Para transformar o diagnóstico em prática, leia as seções **11 a 16** e os apêndices.
- Para aprofundar a pesquisa, use a bibliografia comentada da seção **17**.

## Sumário

1. [A mudança central: qual é o trabalho do engenheiro agora?](#1-a-mudança-central-qual-é-o-trabalho-do-engenheiro-agora)
2. [O que as evidências já permitem afirmar](#2-o-que-as-evidências-já-permitem-afirmar)
3. [A mentalidade necessária para exercer o novo papel](#3-a-mentalidade-necessária-para-exercer-o-novo-papel)
4. [O mapa das competências](#4-o-mapa-das-competências)
5. [Fundamentos que precisam permanecer fortes](#5-fundamentos-que-precisam-permanecer-fortes)
6. [Novas competências para trabalhar com agentes](#6-novas-competências-para-trabalhar-com-agentes)
7. [Verificação, testes e avaliação: construir confiança em escala](#7-verificação-testes-e-avaliação-construir-confiança-em-escala)
8. [Segurança e autonomia como problemas de engenharia](#8-segurança-e-autonomia-como-problemas-de-engenharia)
9. [O que merece menos investimento — e o que colocar no lugar](#9-o-que-merece-menos-investimento--e-o-que-colocar-no-lugar)
10. [Especialização: o que todos precisam saber e o que depende do trabalho](#10-especialização-o-que-todos-precisam-saber-e-o-que-depende-do-trabalho)
11. [Um caso técnico completo: reserva de estoque com concorrência](#11-um-caso-técnico-completo-reserva-de-estoque-com-concorrência)
12. [Da produtividade individual ao fluxo de entrega](#12-da-produtividade-individual-ao-fluxo-de-entrega)
13. [Aprender com IA e preservar a capacidade de julgamento](#13-aprender-com-ia-e-preservar-a-capacidade-de-julgamento)
14. [Um plano de desenvolvimento de 90 dias](#14-um-plano-de-desenvolvimento-de-90-dias)
15. [Como reconhecer excelência em diferentes níveis de carreira](#15-como-reconhecer-excelência-em-diferentes-níveis-de-carreira)
16. [Uma definição operacional do excelente engenheiro](#16-uma-definição-operacional-do-excelente-engenheiro)
17. [Referências e trilhas de aprofundamento](#17-referências-e-trilhas-de-aprofundamento)
18. [Apêndices: modelos de trabalho e glossário](#18-apêndices-modelos-de-trabalho-e-glossário)

---

## 1. A mudança central: qual é o trabalho do engenheiro agora?

### 1.1. A essência do manifesto

O manifesto reúne três mudanças complementares.

**Primeiro, muda o papel individual.** O engenheiro passa a dirigir modelos e agentes: explicita intenção, fornece condições para execução, reconhece limites e transforma falhas recorrentes em melhorias do sistema de trabalho. A ambição é permitir progresso autônomo e contínuo, com menor necessidade de intervenção repetitiva.

**Segundo, muda o fluxo de desenvolvimento.** Acelerar a implementação desloca os gargalos. Especificações, integração, testes, CI, revisão, aprovação e implantação precisam ser reconsiderados. O trabalho inclui redesenhar etapas inteiras quando a simples aceleração de uma atividade deixa de produzir ganho relevante.

**Terceiro, muda a responsabilidade coletiva.** Contexto, ferramentas, automações e práticas úteis precisam beneficiar a equipe. Parte das melhorias depende de investimento organizacional, e identificar essas dependências também faz parte da responsabilidade do engenheiro.

O próprio manifesto preserva expertise, arquitetura, documentação, testes e responsabilidade humana. Sua proposta é redistribuir o esforço para que essa competência possa orientar uma capacidade de execução muito maior. Esta seção sintetiza o material fornecido pelo usuário. [F01]

### 1.2. A nova unidade de contribuição

A unidade de contribuição profissional passa a ser uma **mudança útil, compreendida, verificada e sustentável no sistema real**.

Isso pode significar entregar uma funcionalidade, remover uma limitação de desempenho, reduzir um incidente recorrente, simplificar um processo ou concluir que uma demanda seria melhor atendida sem acrescentar software. O código é um dos artefatos dessa contribuição. Também podem ser decisivos um contrato de API, uma decisão de arquitetura, um teste que captura uma falha importante ou um ambiente que permite aos agentes investigar problemas sozinhos.

Uma formulação operacional ajuda a enxergar a amplitude do trabalho:

**Problema relevante → intenção explícita → execução delegável → evidência de correção → efeito observado → aprendizado reutilizável.**

Cada passagem exige competência. Uma falha na primeira etapa pode produzir um sistema tecnicamente sofisticado para uma necessidade inexistente. Uma falha na verificação pode fazer uma implementação convincente chegar à produção com um defeito grave. Uma falha no aprendizado faz a mesma equipe pagar repetidamente para resolver o mesmo tipo de problema.

### 1.3. O recurso escasso muda

Adotada a premissa de que a produção de código ficou amplamente delegável, o investimento humano deve se concentrar nas limitações que impedem essa capacidade de se transformar em resultado: entendimento do domínio, decisões difíceis, integração, evidência confiável e atenção disponível.

Essa é uma inferência central deste relatório. Se um engenheiro pode solicitar várias implementações em pouco tempo, ganha valor a capacidade de comparar soluções, perceber premissas incorretas e decidir qual complexidade merece existir. O custo de produzir uma alternativa pode cair muito; o custo de conviver com uma alternativa ruim continua incluindo manutenção, operação e consequências para os usuários.

O profissional excelente aprende a **aumentar a capacidade de execução sem aumentar na mesma proporção a necessidade de supervisão**. Para isso, transforma critérios de qualidade em contratos, ferramentas, testes, limites e feedback.

### 1.4. O significado de estar atualizado

**Em tarefas delegáveis, começar pela execução com IA passa a ser a prática normal. A intervenção manual se torna uma escolha dirigida por valor, risco ou aprendizagem.** O engenheiro precisa justificar onde sua execução direta acrescenta algo e investir em remover os obstáculos que ainda exigem acompanhamento repetitivo.

Estar atualizado passa a envolver três movimentos simultâneos:

1. **Usar a capacidade disponível:** delegar trabalho real e conhecer ferramentas por experiência de execução.
2. **Reorganizar o próprio trabalho:** criar condições para delegar mais, acompanhar exceções e melhorar o fluxo.
3. **Reinvestir a capacidade liberada:** aprofundar julgamento, explorar problemas mais valiosos e construir ativos compartilhados.

O atraso profissional relevante aparece quando a pessoa continua organizando seu valor exclusivamente em torno de atividades que já pode delegar, sem desenvolver o julgamento e a infraestrutura que permitiriam ampliar sua contribuição. Isso é um diagnóstico de prática, não uma sentença sobre a pessoa ou sobre sua capacidade de aprender.

---

## 2. O que as evidências já permitem afirmar

### 2.1. Há experiências presentes de reorganização profunda

Em fevereiro de 2026, a OpenAI descreveu uma equipe que construiu um produto em beta usando agentes para gerar aplicação, testes, documentação, infraestrutura e ferramentas. O trabalho humano se concentrou em preparar o ambiente, especificar intenção e construir feedback. É um relato técnico do fornecedor sobre uma experiência específica; seus ganhos estimados não constituem uma previsão para qualquer organização. [F06]

Em outubro de 2026, a Anthropic relatou que seu volume de mudanças integradas cresceu de aproximadamente 2.500 por dia, em maio, para mais de 30.000, em setembro. O gargalo passou à infraestrutura de desenvolvimento, e a empresa redesenhou seu controle de versões. Os autores ressaltam a excepcionalidade da carga. A lição transferível é investigar o gargalo efetivo; a experiência não implica que outras equipes devam substituir Git. [F39]

Esses casos tornam concreto o ponto do manifesto: dirigir agentes e redesenhar o sistema de produção já são atividades de engenharia. O resultado depende da capacidade de transformar velocidade local em um processo confiável.

### 2.2. A pesquisa distingue capacidade, produtividade e resultado

| Evidência | O que foi estudado | O que ela sustenta | Limite relevante |
|---|---|---|---|
| DORA 2025 | Quase 5.000 respondentes e mais de 100 horas de investigação qualitativa | IA amplifica capacidades e dificuldades organizacionais; o ambiente de trabalho importa | Pesquisa observacional e relatos; não fornece um multiplicador causal universal. [F03] |
| Três experimentos de campo, 2025 | 4.867 desenvolvedores em três empresas; acesso aleatório a assistente de código | A análise combinada estimou 26,08% mais tarefas concluídas, com erro-padrão de 10,3 pontos percentuais | Ferramentas e tarefas da época; tarefas concluídas não medem todo o valor ou a qualidade de um produto. [F09] |
| DORA, março de 2026 | Análise de 1.110 respostas abertas de engenheiros Google sobre o terceiro trimestre de 2025 | A aceleração da geração pode deslocar esforço para auditoria e verificação | Um contexto organizacional e dados qualitativos; não é medição causal do fluxo completo. [F05] |
| Anthropic, junho de 2026 | Cerca de 400 mil sessões de aproximadamente 235 mil pessoas, de outubro de 2025 a abril de 2026 | Expertise de domínio se associa a maior sucesso; decisões humanas se concentram mais no planejamento que na execução | Estudo do fornecedor, com classificação de sessões; sucesso local não comprova qualidade longitudinal em produção. [F08] |
| Kim e colaboradores, revisão de abril de 2026 | 260 configurações em seis benchmarks de agentes | A estrutura das tarefas e a coordenação afetam o benefício do uso de múltiplos agentes | Preprint experimental; seus percentuais não são estimativas de produtividade de equipes. [F21] |

É necessário manter separadas três perguntas: **o agente consegue fazer a tarefa?; o processo ficou mais eficiente?; o resultado melhorou algo importante?** Uma demonstração de capacidade responde à primeira. Para responder às outras, precisamos observar custo, tempo, qualidade, retrabalho e efeito no usuário.

### 2.3. A implicação para a carreira

O resultado mais útil dessa literatura para o engenheiro é a identificação de **onde investir competência**. As evidências apontam para domínio do problema, contexto acessível, boas interfaces, verificação e organização do trabalho. Este relatório transforma essa convergência em um currículo prático, sem atribuir a qualquer estudo a validação de todo o currículo.

Também precisamos atualizar a maneira de medir. Em fevereiro de 2026, a METR explicou que seleção de participantes e tarefas, mudanças na remuneração e uso simultâneo de agentes dificultavam interpretar sua nova rodada de experimentos. Esse caso mostra por que tempo humano, duração de uma execução e trabalho concorrente precisam ser distinguidos. Um resultado de uma geração anterior de ferramentas não deve funcionar como retrato permanente da profissão. [F10]

O horizonte de ação, portanto, é o trabalho atual: experimentar em tarefas reais, medir consequências e modificar o processo. A pesquisa serve para tornar essa adaptação mais competente.

---

## 3. A mentalidade necessária para exercer o novo papel

As orientações desta seção são uma síntese aplicada. Elas articulam o manifesto com as evidências e com princípios de engenharia.

### 3.1. Identidade profissional ancorada em resultado

O engenheiro precisa conseguir reconhecer sua contribuição mesmo quando nenhuma linha do resultado foi digitada por ele. Descobrir o requisito decisivo, formular um experimento, escolher uma arquitetura simples ou criar um mecanismo de verificação pode exigir mais competência que produzir a implementação correspondente.

Isso muda a fonte do orgulho profissional. Um bom sinal de evolução é conseguir dizer: “o sistema resolve o problema, sabemos em quais condições funciona, acompanhamos seus efeitos e conseguimos modificá-lo com segurança”. A quantidade de esforço visível deixa de ser uma boa medida da importância da contribuição.

Essa orientação também permite rejeitar trabalho desnecessário. Se uma demanda pode ser resolvida com uma mudança de processo, uma configuração ou a remoção de uma etapa, a facilidade de gerar código não obriga a construir uma aplicação nova. Saber eliminar escopo continua sendo uma forma de engenharia.

### 3.2. Responsabilidade ampliada

A responsabilidade inclui o resultado e o mecanismo que o produziu. Quando uma falha se repete, vale investigar se faltam requisitos, documentação, acesso a evidências, ferramentas, testes ou uma divisão de trabalho melhor.

Um exemplo simples: o agente consulta repetidamente uma API descontinuada. Corrigir cada resposta resolve a tarefa imediata. Tornar a versão correta explícita, disponibilizar documentação atual e adicionar uma verificação pertinente pode eliminar a classe de erro. A segunda intervenção modifica a capacidade do sistema de trabalho.

Nem todo problema precisa virar plataforma. O ponto é escolher a menor melhoria que reduza recorrência de forma verificável: às vezes um exemplo; às vezes um comando; às vezes um teste; às vezes uma decisão organizacional.

### 3.3. Confiança baseada em evidências

A confiança útil é específica. Pode-se confiar bastante em um agente para atualizar documentação de uma interface bem definida e exigir evidência mais forte quando ele altera autorização, concorrência ou uma migração de dados.

O engenheiro deve aprender a perguntar: qual afirmação estou aceitando, em que evidência ela se apoia e o que poderia mostrar que está errada? A aparência de segurança de uma explicação não substitui um teste, uma medição ou a inspeção do estado real.

Uma pesquisa apresentada na CHI 2025, com 319 trabalhadores e 936 exemplos autorrelatados, encontrou associações entre confiança na IA e esforço crítico, além de uma redistribuição desse esforço para verificação, integração e responsabilidade pela tarefa. O desenho é correlacional e não demonstra perda de capacidade cognitiva. Ele reforça a utilidade de tornar esses hábitos de avaliação explícitos. [F16]

### 3.4. Ambição com disciplina de escopo

A IA amplia o conjunto de problemas que um engenheiro consegue explorar. Isso favorece iniciativa: testar hipóteses, produzir protótipos, investigar sistemas desconhecidos e automatizar trabalho que antes parecia caro demais.

Essa capacidade também muda a relação com a iniciativa pessoal. Uma oportunidade que antes esperaria a disponibilidade de várias pessoas pode começar como uma investigação conduzida por um engenheiro com agentes. Ele ganha espaço para atravessar fronteiras entre produto, dados e implementação, tornando uma ideia concreta o suficiente para ser examinada. Exercitar essa liberdade com bons critérios é parte da excelência proposta aqui.

A disciplina correspondente é escolher experimentos que respondam a perguntas importantes. Um protótipo deve permitir aprender algo: se o fluxo é compreensível, se a integração é viável, se a latência cabe no orçamento, se o usuário precisa da funcionalidade. Um protótipo impressionante que não reduz incerteza consome atenção e pode criar compromisso prematuro com uma solução.

É útil distinguir explicitamente **exploração**, **implementação candidata** e **mudança pronta para operar**. O nível de acabamento e de evidência muda entre essas etapas. A velocidade da geração torna essa distinção ainda mais necessária.

### 3.5. Pensamento sobre o sistema inteiro

O engenheiro excelente acompanha o caminho da necessidade até seu efeito. Se o código fica pronto cedo e aguarda dias por ambiente, integração ou decisão, há um problema de fluxo a resolver.

Essa visão exige conversar com produto, design, segurança, operação e outras equipes. Também exige perceber limitações de capacidade: aumentar trabalho em andamento pode aumentar filas, conflitos e custo de integração. A competência inclui escolher quantas frentes abrir e onde uma intervenção humana realmente destrava o processo.

O framework DevEx propõe observar experiência dos desenvolvedores em conjunto com dados dos sistemas de engenharia. Sua aplicação destaca feedback, carga cognitiva e fluxo. Esses conceitos ajudam a avaliar se agentes estão liberando atenção ou criando uma nova fila de interrupções. [F12]

### 3.6. Conhecimento como capacidade compartilhada

Uma decisão que só existe na memória de alguém obriga pessoas e agentes a reencontrá-la. Documentar motivos, restrições e caminhos de investigação aumenta a capacidade de trabalho independente.

O capítulo de compartilhamento de conhecimento de *Software Engineering at Google* descreve os custos de concentração de expertise e de informação fragmentada, e também a necessidade de manter documentação e formar pessoas. Essa base continua relevante: o conhecimento precisa ser acessível, atualizado e interpretável. [F36]

Aplicada ao presente, a orientação é concreta: uma descoberta recorrente deve encontrar um lugar estável. O lugar pode ser o código, um teste, uma decisão arquitetural ou um procedimento. O critério é sua utilidade para o próximo trabalho, inclusive quando o autor não estiver disponível.

### 3.7. Humildade técnica com capacidade de decisão

Trabalhar bem com IA exige admitir lacunas sem terceirizar toda decisão. O engenheiro pode investigar uma tecnologia nova com ajuda do modelo e ainda distinguir o que verificou do que está apenas supondo.

É particularmente valioso conseguir dizer: “isto foi testado nestas condições; esta propriedade vem do contrato da plataforma; este ponto ainda é uma hipótese; esta consequência precisa de decisão do responsável pelo domínio”. Essa precisão permite avançar com menos ambiguidade.

A analogia do manifesto com liderança de uma equipe é útil para delegação e coordenação. Na prática, o engenheiro também precisa projetar memória, acesso, continuidade e limites operacionais: esses elementos dependem do sistema que executa os agentes. Não se pode pressupor que uma intenção comunicada uma vez permaneça disponível em todas as execuções.

---

## 4. O mapa das competências

### 4.1. Quatro decisões sobre o próprio desenvolvimento

O currículo proposto organiza competências em quatro movimentos:

- **Conservar:** preservar o domínio mínimo necessário para entender o sistema e intervir.
- **Aprofundar:** investir mais em capacidades cujo julgamento orienta muitas decisões delegadas.
- **Aprender:** adquirir práticas novas de contexto, ferramentas, agentes e avaliação.
- **Despriorizar:** reduzir tempo em execução repetitiva e memorização facilmente substituíveis.

Essas categorias indicam investimento marginal. Uma habilidade pode permanecer necessária e, ao mesmo tempo, merecer menos treino de execução manual.

### 4.2. Matriz principal

| Competência | Movimento prioritário | Expressão atual de excelência |
|---|---|---|
| Entendimento do usuário e do domínio | Aprofundar | Identificar a necessidade real e formular critérios que representem valor. |
| Leitura de código e semântica | Conservar e aprofundar | Explicar comportamento, reconhecer inconsistências e investigar falhas. |
| Arquitetura e desenho de interfaces | Aprofundar | Definir fronteiras que permitam evolução e execução independente. |
| Algoritmos, dados e sistemas | Conservar com profundidade seletiva | Julgar escala, consistência, custo e consequências de falhas. |
| Depuração e investigação | Aprofundar | Produzir hipóteses discrimináveis e conectar sintomas a causas. |
| Especificação de trabalho | Aprender práticas mais explícitas | Transformar objetivos em contratos, restrições e evidências de conclusão. |
| Engenharia de contexto | Aprender | Disponibilizar informação pertinente, confiável e atual no momento certo. |
| Delegação e orquestração | Aprender | Dividir trabalho, calibrar autonomia e integrar resultados. |
| Testes e avaliação de agentes | Aprofundar e aprender | Projetar evidências que detectem erros relevantes e medir consistência. |
| Segurança de ferramentas e ambientes | Aprofundar e aprender | Controlar autoridade, dados, execução e alcance das consequências. |
| CI/CD, observabilidade e operação | Aprofundar | Fechar o ciclo entre alteração, validação, implantação e efeito real. |
| Comunicação e aprendizagem coletiva | Aprofundar | Tornar decisões e melhorias utilizáveis por outras pessoas e agentes. |
| Memorização e produção mecânica | Despriorizar | Automatizar e consultar, mantendo compreensão suficiente para avaliar. |

Esta matriz é uma proposta do relatório, não uma classificação estatística das fontes. Sua intenção é orientar decisões de estudo e prática.

### 4.3. O que muda em relação ao centro de gravidade anterior

O contraste abaixo descreve modos de organizar o trabalho. Não pretende afirmar que todos os engenheiros trabalhavam da mesma forma um ano atrás.

| Centro de gravidade anterior | Centro de gravidade adequado à premissa do manifesto |
|---|---|
| Resolver uma tarefa principalmente pela própria execução | Tornar a tarefa resolvível por um sistema de execução orientado e verificável |
| Conhecer detalhes suficientes para produzir rapidamente | Conhecer princípios e contexto suficientes para dirigir, distinguir e corrigir |
| Revisar tudo pelo mesmo procedimento | Distribuir verificação segundo propriedades, risco e evidências |
| Melhorar a própria velocidade | Melhorar a capacidade do fluxo e da equipe |
| Resolver novamente cada dificuldade | Reduzir recorrência por contexto, contratos, ferramentas e testes |
| Estudar para aumentar repertório de implementação | Estudar para aumentar domínio, poder de delegação e alcance das decisões |

---

## 5. Fundamentos que precisam permanecer fortes

### 5.1. Compreensão de código: semântica antes de memória

O engenheiro precisa ler um trecho e compreender o que ele faz, quais estados modifica, que suposições usa e como pode falhar. Isso exige familiaridade com tipos, escopo, mutabilidade, tratamento de erros, recursos, concorrência e modelo de execução da linguagem relevante ao seu trabalho.

Esse domínio permite selecionar o que investigar e quais controles exigir. Ele não pressupõe releitura humana integral de toda a produção dos agentes; a seção 7 descreve como distribuir verificação e atenção.

A IA pode produzir a sintaxe de uma rotina assíncrona. O julgamento necessário inclui perceber se o cancelamento é propagado, se uma tarefa fica órfã, se exceções se perdem e se recursos são liberados. Esses problemas exigem um modelo mental da execução.

**Critério prático:** diante de código novo, conseguir prever um comportamento importante, criar um caso que confirme ou refute a previsão e explicar o resultado. É possível usar IA na investigação; o entendimento precisa se tornar demonstrável.

O currículo CS2023, elaborado por ACM, IEEE-CS e AAAI, já distinguia a mudança de atividades da permanência dos fundamentos: maior abstração, compreensão, verificação e decomposição convivem com a necessidade de avaliar algoritmos e programas. É uma orientação curricular de especialistas, publicada em 2024, e não uma medição das capacidades atuais dos modelos. [F14]

### 5.2. Algoritmos, complexidade e representação

O estudo de algoritmos deve servir à escolha e à avaliação. Interessa reconhecer quando uma estrutura de dados muda a ordem de grandeza do custo, quando o volume torna uma implementação inviável e quando uma aproximação altera a resposta do produto.

Um engenheiro pode delegar a escrita de uma busca ou de uma ordenação e ainda precisar identificar que a composição de duas operações aparentemente simples criou um custo quadrático. Também precisa distinguir desempenho assintótico de custos concretos: alocação, rede, disco, cache, serialização e contenção podem determinar o comportamento observado.

**Prioridade:** entender classes de problemas e limites de recursos, usar medição e examinar casos adversos. A quantidade de algoritmos recitados de memória é um indicador muito limitado desse domínio.

### 5.3. Modelagem de dados e correção sob concorrência

Dados exigem atenção a significado, identidade, cardinalidade, invariantes, autorização, histórico e evolução de esquema. Uma consulta que executa sem erro pode duplicar registros em um `join`, misturar clientes ou contar a entidade errada. Uma transação pode ser válida sintaticamente e insuficiente para uma regra de negócio concorrente.

A documentação do PostgreSQL mostra, por exemplo, que o isolamento `Read Committed` trabalha com snapshots por comando e tem comportamentos específicos diante de atualizações concorrentes. A escolha de isolamento e de restrições precisa ser compatível com o invariante pretendido; “coloque em uma transação” não descreve toda a solução. [F28]

**Critério prático:** explicar o que acontece quando duas requisições chegam juntas, quando uma falha depois de gravar e quando uma migração precisa conviver com versões diferentes da aplicação.

### 5.4. Sistemas distribuídos e efeitos colaterais

Timeout, repetição, ordenação, consistência, filas, controle de carga e falhas parciais continuam sendo parte central de muitos sistemas. O engenheiro deve perceber que ausência de resposta não significa ausência de efeito.

A Amazon Builders’ Library descreve a idempotência como um contrato para permitir repetição de chamadas sem acrescentar o efeito indesejado, com identificação de intenção e tratamento explícito de solicitações repetidas. A habilidade relevante é definir esse contrato e verificar seu cumprimento, inclusive em concorrência. [F29]

Esse conhecimento também vale para agentes. Se uma ferramenta falha após enviar uma solicitação, tentar novamente pode duplicar uma ação. Ferramentas que expõem identificadores de operação, estados consultáveis e regras claras de repetição permitem recuperação mais confiável.

### 5.5. Arquitetura como definição de restrições úteis

Arquitetura deve tornar claras as responsabilidades, dependências e decisões difíceis de reverter. Em um ambiente com execução abundante, esses limites ajudam a impedir que soluções locais prejudiquem o conjunto.

Vale aprofundar contratos de APIs, separação de domínio e infraestrutura, compatibilidade, evolução de esquema e isolamento de componentes. O objetivo é permitir mudanças independentes e reduzir o conhecimento necessário para executar cada tarefa corretamente.

É igualmente necessário reconhecer abstração sem benefício. A IA pode produzir camadas, adaptadores e serviços rapidamente; o engenheiro deve exigir uma razão para sua existência. Uma arquitetura precisa responder a necessidades observadas ou restrições concretas. O grau de formalização deve acompanhar a duração e as consequências do sistema.

O tratamento de tempo, escala e escolhas em *Software Engineering at Google* ajuda a situar esse julgamento: construir software inclui sustentar sua capacidade de mudança ao longo do tempo. [F35]

### 5.6. Depuração como investigação causal

Depurar bem envolve formular hipóteses, buscar evidência que as discrimine e reduzir o problema. A IA amplia a capacidade de levantar causas, localizar código e preparar experimentos. Cabe ao engenheiro manter a investigação conectada ao fenômeno real.

Se uma requisição está lenta, é necessário separar espera de CPU, I/O, bloqueio, fila, rede e dependências. Acrescentar cache sem compreender a causa pode esconder o sintoma e introduzir inconsistência. A pergunta útil é qual observação mudaria a hipótese atual.

**Exercício de domínio:** antes de executar um experimento, prever qual sinal deve mudar se a hipótese estiver correta. Depois comparar previsão e observação. Isso ensina a reconhecer quando uma correção apenas deslocou o problema.

### 5.7. Operação e observabilidade

O sistema precisa ser compreensível em execução. Logs descrevem eventos; métricas permitem acompanhar comportamentos agregados; traces relacionam etapas de uma operação. OpenTelemetry oferece uma base comum para produzir e correlacionar esses sinais. [F31]

O engenheiro deve saber escolher os sinais relevantes, interpretar caudas de latência, distinguir erro de sucesso e relacionar uma alteração ao comportamento observado. O capítulo de monitoramento do Google SRE destaca latência, tráfego, erros e saturação, combinando observação interna e experiência externa. [F32]

Gerar um painel pode ser delegado. Saber se o painel responde à pergunta de operação continua sendo julgamento técnico. Isso inclui limitar dados sensíveis na telemetria e evitar métricas cuja cardinalidade torne a observação cara ou pouco utilizável.

### 5.8. Produto, domínio e experiência do usuário

Quanto mais fácil implementar uma ideia, maior a necessidade de escolher bem o problema. O engenheiro precisa compreender quem usa o sistema, qual tarefa está tentando realizar, quais restrições importam e como reconhecer melhora.

O framework HEART, apresentado por pesquisadores do Google, propõe traduzir objetivos de produto em sinais e métricas centrados no usuário. É uma referência para conectar engenharia a resultados observáveis. [F37]

Essa conexão exige competências concretas: conversar com usuários, observar uso, interpretar feedback, negociar escopo e avaliar acessibilidade. Uma tela pode parecer completa e ainda falhar na navegação por teclado, em estados de erro ou na compreensão de uma decisão importante. A IA pode explorar alternativas; os critérios de sucesso precisam representar pessoas reais.

---

## 6. Novas competências para trabalhar com agentes

### 6.1. Entender a unidade técnica com que se trabalha

É útil distinguir **modelo**, **agente** e **ambiente de execução**. O modelo produz respostas e decisões de uso de ferramentas. O agente é o sistema que organiza essas interações ao longo de uma tarefa. O ambiente fornece arquivos, processos, rede, credenciais e recursos. O termo *harness* designa a infraestrutura que coordena o ciclo e suas interfaces.

Uma deficiência pode estar em qualquer camada. Um agente pode ter capacidade de raciocínio suficiente e falhar porque não consegue executar o teste, recebeu documentação antiga ou perdeu o estado do trabalho. Essa distinção permite corrigir a causa adequada, em vez de apenas mudar o texto do pedido.

**Fluência mínima esperada:** compreender janela de contexto, recuperação de informações, uso de ferramentas, variabilidade entre execuções, orçamento de tempo e custo, permissões, persistência de estado e limites do ambiente. Saber usar uma ferramenta de ponta a ponta é mais útil que conhecer superficialmente muitos nomes.

### 6.2. Especificar trabalho delegável

Uma tarefa delegável precisa esclarecer o resultado e as condições em que será considerado correto. Quanto maior a autonomia pretendida, mais importante é explicitar as ambiguidades que alteram a solução.

Um bom contrato de tarefa responde:

1. **Qual resultado queremos e para quem?**
2. **Que comportamento precisa existir?**
3. **Quais invariantes e restrições devem ser preservados?**
4. **Quais fontes de contexto são confiáveis?**
5. **Qual é o perímetro da alteração?**
6. **Que evidências demonstrarão conclusão?**
7. **Que situação exige decisão humana?**

Essa explicitação pode caber em poucas linhas para uma correção simples. Para uma mudança ampla, pode exigir desenho de interfaces, exemplos, decisões de domínio e plano de migração. O objetivo é reduzir incerteza relevante, não produzir documentos por volume.

O Spec Kit, publicado pelo GitHub em 2025, é um exemplo de ferramenta que organiza especificação, planejamento, tarefas e implementação. A capacidade durável é formular intenção verificável; a adoção daquele kit específico é uma escolha de processo. [F27]

Também é preciso saber **o que deixar em aberto**. Especificar o limite de latência e o contrato de uma operação pode ser necessário; escolher antecipadamente cada classe pode reduzir a liberdade do agente sem melhorar o resultado. Bons contratos restringem propriedades importantes e permitem explorar a implementação.

### 6.3. Engenharia de contexto

Engenharia de contexto é organizar a informação disponível ao agente durante o trabalho: requisitos, regras, código, documentação, ferramentas, resultados de execução e estado da tarefa. A Anthropic descreve essa atividade como uma curadoria contínua, com recuperação sob demanda e manutenção de informação pertinente. [F17]

A aplicação prática proposta aqui tem três camadas:

| Camada | Conteúdo | Pergunta que resolve |
|---|---|---|
| Orientação estável | Mapa do repositório, arquitetura, comandos e regras fundamentais | “Onde estou e como trabalho aqui?” |
| Contexto da tarefa | Objetivo, decisões, arquivos relevantes, exemplos e restrições | “O que preciso realizar e preservar?” |
| Estado da execução | Alterações, resultados, hipóteses descartadas, pendências e próximos passos | “O que já aconteceu e o que falta?” |

O engenheiro deve identificar a fonte de autoridade de cada informação. Uma decisão de arquitetura vigente, uma hipótese registrada em uma investigação e uma sugestão encontrada em uma issue não têm o mesmo peso.

Cada documento importante precisa ter um propósito e algum mecanismo de atualização. Quando houver conflito, deve existir um caminho para resolvê-lo. Acumular instruções antigas e contraditórias aumenta o trabalho de interpretação.

Um detalhe de alto valor é tornar resultados recuperáveis: caminhos de arquivos, identificadores de testes, versão do código e links para decisões. Um resumo que diz “os testes passaram” é menos útil que um registro que permite localizar quais testes, sobre qual versão e com que resultado.

### 6.4. Preparar o repositório para execução independente

O relato da OpenAI sobre *harness engineering* descreve um arquivo de orientação curto, funcionando como mapa para documentação mais detalhada, além de ambientes isolados e acesso a sinais de execução. Esse caso ilustra a importância de tornar o projeto compreensível e operável pelos agentes. [F06]

Como proposta prática, um repositório preparado deve permitir que um novo executor descubra como instalar dependências, iniciar o sistema, executar verificações pertinentes e entender limites arquiteturais. Deve também oferecer dados de teste adequados e explicar o que fazer quando uma dependência externa não estiver disponível.

Isso não exige transferir todo conhecimento da empresa para um único arquivo. O trabalho consiste em construir caminhos confiáveis até a informação necessária e eliminar passos que dependam de memória pessoal ou de intervenção manual repetida.

**Teste de prontidão:** uma pessoa da equipe que não conhece o módulo, ou um agente em uma sessão nova, consegue reproduzir uma falha e executar a validação relevante usando as instruções disponíveis? As dificuldades encontradas são oportunidades concretas de melhoria.

### 6.5. Ferramentas, APIs, CLI e MCP

O engenheiro deve entender como conectar agentes às ações e informações de que precisam. Isso inclui ferramentas de linha de comando, APIs, conectores e protocolos como MCP, conforme o ambiente utilizado.

O desenho da interface importa: nomes claros, argumentos tipados, resultados compreensíveis, erros úteis e operações delimitadas facilitam o uso. O artigo da Anthropic sobre ferramentas recomenda testar esses contratos em tarefas realistas e reservar casos para avaliar alterações. [F18]

Uma ferramenta de implantação, por exemplo, pode exigir ambiente, versão e identificador de operação, devolver um estado consultável e permitir distinguir “solicitação aceita” de “implantação concluída”. Uma interface que apenas executa um comando e retorna texto livre pode tornar essa distinção mais difícil.

O critério para adotar MCP ou construir uma ferramenta própria é resolver uma necessidade de integração. Uma CLI existente e bem documentada pode ser suficiente. O profissional deve conhecer as opções e avaliar manutenção, autorização, observabilidade e ergonomia; não precisa envolver toda operação em um novo framework.

### 6.6. Procedimentos reutilizáveis e skills

Uma *skill* pode reunir instruções, scripts, exemplos e recursos para um tipo de trabalho. A proposta de Agent Skills publicada pela Anthropic usa carregamento progressivo dessas informações para especializar a execução conforme a tarefa. [F19]

Um bom ponto de partida é uma dificuldade recorrente. Se toda migração exige os mesmos passos delicados, eles podem virar um procedimento verificável. Se toda investigação de desempenho exige localizar os mesmos sinais, um recurso compartilhado pode reduzir a preparação.

Uma skill deve ter critérios de uso, entradas, resultado esperado e verificação. Precisa ser testada em casos representativos e revisada quando o ambiente mudar. Um conjunto de instruções que parece sensato, mas nunca foi exercitado, ainda é uma hipótese de processo.

É útil separar orientação de execução determinística. Quando uma transformação já pode ser realizada por uma função ou script confiável, o agente pode selecionar e operar essa ferramenta, sem regenerar sua lógica em cada uso.

### 6.7. Decomposição, paralelismo e integração

O engenheiro precisa reconhecer dependências antes de distribuir tarefas. Frentes independentes podem avançar em paralelo; decisões compartilhadas ainda indefinidas precisam ser resolvidas ou ter um responsável claro.

**Boas candidatas a paralelismo:** investigar subsistemas distintos, revisar riscos diferentes, explorar alternativas arquiteturais e implementar módulos contra interfaces já acordadas.

**Situações que pedem cuidado de coordenação:** vários agentes alterando a mesma infraestrutura, versões incompatíveis de uma API, migrações dependentes ou uma causa comum que bloqueia todas as frentes.

Na revisão de abril de 2026, *Towards a Science of Scaling Agent Systems* encontrou desempenho dependente da combinação entre arquitetura, tarefa e recursos, incluindo perdas em configurações mal alinhadas. O estudo oferece uma razão empírica para tratar coordenação como escolha de engenharia. [F21]

Uma prática útil é definir dono de cada alteração, contratos de integração e pontos de sincronização. Worktrees ou clones separados, cada um com sua branch, e ambientes isolados reduzem colisões de arquivos e execução. Branches, sozinhas, não isolam dois processos no mesmo diretório de trabalho. A integração ainda precisa verificar a semântica do conjunto: duas mudanças podem compilar separadamente e contradizer a mesma regra de negócio.

### 6.8. Gerenciar continuidade e economia da execução

Trabalho autônomo prolongado exige estado persistente, critérios de parada, limites de custo e mecanismos de recuperação. O engenheiro precisa saber quando retomar uma execução, quando reiniciar com contexto melhor e quando pedir uma decisão que falta.

Em março de 2026, a Anthropic descreveu uma arquitetura com planejamento, geração e avaliação separados para desenvolvimento prolongado de aplicações. O relato também mostra que melhorias de modelos podem tornar desnecessários componentes de um harness anterior. A implicação é revisar o processo junto com a evolução das ferramentas. [F07]

Como regra de projeto, registre objetivo, progresso comprovado, decisões, bloqueios e próxima ação. Interrompa ciclos sem progresso observável. Um agente que repete a mesma tentativa precisa de diagnóstico, informação nova ou uma tarefa diferente.

O custo relevante inclui inferência, ferramentas, CI, espera e atenção humana. O modelo mais barato por chamada pode sair caro se exigir muitas correções. A escolha deve considerar custo por resultado aceito e qualidade no conjunto de tarefas real.

---

## 7. Verificação, testes e avaliação: construir confiança em escala

### 7.1. Duas coisas diferentes precisam ser avaliadas

**O software produzido** precisa atender aos requisitos e preservar propriedades importantes. **O processo com agentes** precisa resolver tarefas de forma consistente, com custo e intervenção aceitáveis.

Uma execução pode gerar uma mudança correta depois de muitas tentativas e horas de supervisão. Isso valida aquele resultado, mas deixa um problema no processo. Outra execução pode ser rápida e elegante e produzir uma alteração errada. Por isso, testes do software e avaliações do sistema de agentes se complementam.

O guia de *evals* da Anthropic distingue tarefa, tentativa, trajetória e estado final, e recomenda avaliar o conjunto formado por modelo e harness. Também ressalta a necessidade de múltiplas execuções e de calibrar avaliadores baseados em modelos. [F20]

### 7.2. Definir o oráculo de correção

Um **oráculo** é o critério usado para decidir se o resultado está correto. Pode ser uma regra matemática, um contrato, uma restrição de dados, um comportamento de referência ou uma avaliação humana estruturada.

O engenheiro deve identificar de onde vem esse critério. Se implementação e testes forem derivados da mesma interpretação incompleta, ambos podem concordar e falhar no requisito real. Solicitar uma segunda opinião a outro agente ajuda a explorar, mas a independência mais forte vem de evidências com origens diferentes.

Exemplo: um endpoint de exportação só deve incluir dados do cliente autenticado. Um teste que verifica “retornou um CSV” cobre uma propriedade muito pequena. Um cenário com dois clientes, dados semelhantes e tentativas de cruzar identificadores testa a fronteira de autorização que realmente importa.

**Pergunta operacional:** qual erro relevante passaria despercebido se esse teste fosse o único sinal de qualidade?

### 7.3. Escolher a forma de evidência

O quadro abaixo é uma proposta de decisão, a ser adaptada ao risco e ao domínio.

| Evidência | Uso especialmente útil | Limitação a reconhecer |
|---|---|---|
| Tipos e análise estática | Contratos estruturais, usos inválidos e certas classes de erro | Não demonstram intenção de produto nem todas as propriedades de execução. |
| Testes unitários | Regras locais, cálculos e casos de borda | Podem perder relações entre componentes. |
| Testes de integração e contrato | Banco real, filas, APIs e fronteiras entre serviços | Dependem de ambientes e versões representativos. |
| Testes de ponta a ponta | Jornadas essenciais e comportamento observável | Podem ter execução cara e falhas intermitentes. |
| Testes baseados em propriedades | Invariantes sobre muitas entradas e sequências | A propriedade escolhida precisa representar a regra correta. |
| Testes diferenciais | Comparação com uma implementação de referência | A referência pode ter erros ou semântica diferente. |
| Testes de mutação | Verificar se mudanças incorretas são detectadas | Custo e interpretação exigem seleção cuidadosa. |
| Medição de carga e perfil de execução | Latência, memória, contenção e capacidade | O cenário deve representar a carga relevante. |
| Observação em implantação gradual | Efeito em condições reais | Detecta problemas depois de alguma exposição; requer contenção. |

Propriedades e relações metamórficas podem ser particularmente úteis. Em uma transformação sem perdas, transformar e desfazer deve preservar o dado. Em uma busca, acrescentar um filtro conjuntivo ao mesmo conjunto, antes da paginação, não deve aumentar o conjunto de resultados. O valor vem da relação testada e de suas condições de validade.

### 7.4. A economia dos testes precisa ser reconsiderada

O manifesto observa que a redução do custo de escrever e manter testes pode alterar decisões anteriores sobre cobertura. A aplicação competente é reavaliar o custo total de cada estratégia.

Se gerar testes ficou barato, ainda é necessário pagar sua execução, investigar falhas intermitentes e manter ambientes. A equipe deve ampliar evidência onde isso reduz risco ou trabalho humano, preservando feedback rápido. Pode valer a pena produzir muito mais testes de contrato, casos adversos e jornadas críticas, desde que o resultado continue interpretável.

No experimento de compilador com agentes paralelos, Nicholas Carlini relata que seu trabalho se concentrou no ambiente, nos verificadores e no feedback; referências externas ajudaram a isolar problemas para execução independente. É uma experiência de capacidade, com limitações reconhecidas pelo autor, e ilustra o valor de boas condições de verificação. [F22]

### 7.5. A revisão humana muda de distribuição

Há espaço para automatizar verificações de estilo, políticas repetitivas, consistência local e muitas revisões rotineiras. O investimento humano deve migrar para requisitos, fronteiras de confiança, mudanças sem boa evidência e decisões com consequências maiores.

Isso permite estabelecer políticas por classe de alteração. Atualizar documentação ou realizar uma refatoração mecanicamente verificável pode exigir um fluxo diferente de modificar autorização ou remover dados. A aprovação deve corresponder ao risco e à qualidade dos controles disponíveis.

Para reduzir revisão manual de forma sustentável, a equipe precisa saber quais defeitos seus mecanismos detectam, acompanhar falhas que escapam e ter capacidade de recuperação. O objetivo prático é eliminar a necessidade de inspeção repetitiva em classes bem controladas e concentrar julgamento nas exceções.

### 7.6. Criar uma pequena suíte de avaliação do fluxo com IA

Uma proposta inicial é selecionar tarefas reais representativas: correção localizada, mudança que atravessa módulos, investigação, alteração de interface, migração e caso com requisito ambíguo. Não é necessário começar com um benchmark grande.

Registre para cada tarefa: estado inicial, resultado esperado, critérios de avaliação, versão do código, configuração do agente, tempo, custo e intervenções. Cada tentativa deve começar de um estado conhecido e restaurado, para evitar contaminação por dados, caches ou efeitos de uma execução anterior. Inclua tarefas que falharam anteriormente. Reserve alguns casos para avaliar mudanças sem adaptar o processo diretamente a eles.

Compare configurações em condições suficientemente semelhantes e repita execuções quando a variabilidade puder mudar a decisão. Meça resultado correto, custo, tempo humano, regressões e ações fora do escopo. Uma única demonstração favorável é um ponto de partida para investigação.

O sucesso narrado pelo agente deve ser confirmado no artefato ou estado pertinente: arquivo, testes, banco, aplicação ou implantação. O registro final precisa distinguir verificações executadas, verificações impossíveis e hipóteses ainda abertas.

---

## 8. Segurança e autonomia como problemas de engenharia

### 8.1. Autonomia útil exige um perímetro efetivo

Autonomia amplia o trabalho realizado sem acompanhamento contínuo. Para sustentá-la, é necessário controlar quais ações podem acontecer e quais consequências podem alcançar.

O catálogo OWASP para aplicações com agentes inclui riscos relacionados a desvio de objetivos, uso indevido de ferramentas, privilégios, cadeia de suprimentos e contaminação de memória e contexto. É um framework de especialistas para análise de risco, não uma garantia de segurança obtida por completar uma lista. [F24]

A competência prática consiste em modelar o caminho entre **informação recebida**, **decisão do agente**, **ferramenta acionada**, **credencial utilizada** e **efeito produzido**. Esse caminho revela onde a confiança muda e onde um controle precisa existir.

### 8.2. Conteúdo não confiável pode influenciar ações privilegiadas

Uma issue, um log, um documento ou a resposta de uma ferramenta pode conter texto que tenta redirecionar o agente. É preciso tratar esse material como dado a interpretar dentro da tarefa, preservando a autoridade das instruções e políticas legítimas.

O projeto de segurança deve combinar orientação ao modelo com controles externos: autorização no serviço, isolamento de execução, restrição de arquivos, proteção de segredos e controle de saída de rede. A Anthropic descreve a contenção como forma de limitar consequências mesmo quando uma decisão do modelo falha. [F23]

Um comentário dizendo “não exponha segredos” não impede um processo de ler uma credencial que já está no ambiente. O desenho mais forte evita disponibilizar essa credencial quando ela não é necessária e limita o que pode ser feito com ela.

### 8.3. Competências técnicas que precisam entrar no repertório

- **Identidade e autorização:** diferenciar usuário, agente, subagente e ferramenta; conceder escopos adequados à tarefa.
- **Ambientes isolados:** separar investigação e execução de recursos de produção, conforme a consequência das operações.
- **Gestão de dados:** classificar o que pode ser enviado a cada serviço, registrar finalidade e limitar retenção e exposição.
- **Cadeia de suprimentos:** verificar procedência de dependências, scripts, extensões e skills; controlar atualizações.
- **Rastreabilidade:** relacionar solicitação, ações, mudanças e responsável; preservar evidências úteis para investigar.
- **Recuperação:** interromper execução, revogar acesso, reverter mudanças reversíveis e tratar efeitos que exigem compensação.

Esses itens constituem uma síntese prática. As decisões concretas dependem dos dados, do sistema e das políticas da organização.

A documentação de segurança do MCP aborda problemas como repasse inadequado de tokens, confusão de autoridade e escopos de acesso. Integrar por um protocolo padronizado não elimina a necessidade de compreender a autorização de cada componente. [F25]

### 8.4. Verificar o alcance real dos controles

Controles têm escopo. A documentação do firewall do GitHub Copilot, por exemplo, distingue processos iniciados pelo agente via Bash, servidores MCP, etapas de configuração e processos externos ao ambiente. Na versão consultada, o firewall não cobre diretamente todas essas rotas. Esse detalhe demonstra por que o engenheiro deve verificar a proteção efetiva, em vez de inferi-la pelo nome da funcionalidade. [F26]

O mesmo raciocínio vale para isolamento de arquivos, restrições de rede e proteção de branches. O que impede efetivamente a operação? Quem pode alterar essa regra? O controle se aplica também aos subprocessos e integrações utilizados?

### 8.5. Uma matriz de autonomia

O modelo abaixo é uma proposta de trabalho, não uma classificação normativa.

| Situação | Autonomia adequada como ponto de partida | Condição para ampliar |
|---|---|---|
| Pesquisa e análise com dados permitidos | Execução independente, com referências e registro de incertezas | Qualidade das fontes e aderência ao objetivo. |
| Mudança delimitada em ambiente isolado | Implementar, testar e preparar resultado revisável | Evidência confiável de correção e escopo. |
| Mudança rotineira, reversível e bem coberta | Integrar ou implantar pelo fluxo previamente autorizado | Histórico, controles automáticos e observação de consequências. |
| Alteração sensível de acesso, dados ou contrato | Preparar proposta e evidências; decisão explícita no ponto relevante | Melhor contenção e verificação, compatíveis com a responsabilidade envolvida. |
| Efeito difícil de reverter e de grande alcance | Limites fortes e decisão de responsável identificado | Demonstração concreta de controle; autonomia nunca baseada só em confiança verbal. |

Aprovar cada comando pode transformar o engenheiro em operador de confirmações. O projeto deve concentrar decisões humanas onde elas mudam o risco ou resolvem uma ambiguidade material. Nos demais pontos, controles claros permitem continuidade.

---

## 9. O que merece menos investimento — e o que colocar no lugar

### 9.1. A mudança precisa aparecer na agenda de estudo

O tempo de desenvolvimento profissional é limitado. Manter todas as prioridades anteriores e acrescentar agentes, contexto, avaliação e produto produz um currículo impossível. **Adaptar-se exige retirar investimento de certas atividades.**

O critério proposto é reduzir esforço em capacidades cujo valor depende principalmente de execução repetitiva ou recuperação de detalhes, e ampliar esforço nas capacidades que permitem formular, verificar e sustentar o resultado. Isso é uma decisão explícita de alocação de tempo.

### 9.2. Matriz de despriorização

| Reduzir investimento em | Preservar o suficiente para | Reinvestir em |
|---|---|---|
| Decorar assinaturas, opções e sintaxe pouco frequente | Ler documentação, compreender tipos e reconhecer uso incompatível | Semântica, contratos e exploração rápida de APIs. |
| Produzir manualmente CRUD, DTOs, adaptadores e outros padrões repetidos | Compreender limites, validação e efeitos da implementação | Modelagem do domínio, autorização e invariantes. |
| Treinar velocidade de digitação e atalhos como principal vantagem | Operar ferramentas com fluidez | Clareza de intenção, execução autônoma e qualidade do feedback. |
| Memorizar receitas de framework | Entender seu modelo de execução e principais restrições | Diagnóstico, integração e avaliação de escolhas tecnológicas. |
| Reimplementar algoritmos conhecidos como rotina | Julgar complexidade, adequação e casos adversos | Representação de dados, desempenho e propriedades de correção. |
| Escrever à mão grande volume de testes repetitivos | Entender o código de teste e reconhecer um oráculo inadequado | Cobertura de riscos, independência da evidência e feedback rápido. |
| Fazer revisão humana de estilo e convenções mecânicas | Definir padrões que tenham consequência real | Automação de regras e revisão de decisões de maior impacto. |
| Repetir configuração de ambientes e procedimentos operacionais | Diagnosticar o ambiente e saber recuperar falhas | Reprodutibilidade, ferramentas de autosserviço e automação. |
| Redigir documentação descritiva que pode ser extraída do código | Verificar fidelidade e atualização | Motivos das decisões, restrições e contexto ausente do código. |
| Colecionar linguagens apenas para ampliar uma lista de tecnologias | Navegar e intervir nos ambientes relevantes | Profundidade seletiva e transferência de princípios entre sistemas. |
| Colecionar modelos, extensões e fórmulas de prompt | Usar bem as opções necessárias e conhecer limites | Avaliação em tarefas reais e integração de um fluxo completo. |
| Aperfeiçoar abstrações ou estilo sem benefício demonstrável | Manter legibilidade e consistência úteis | Simplicidade, compatibilidade e custo de manutenção. |
| Resolver pessoalmente toda exceção recorrente | Intervir com precisão quando necessário | Eliminar causas e criar capacidade compartilhada. |
| Acompanhar toda microetapa e transportar respostas manualmente entre chat e editor | Reconhecer bloqueios e pontos de decisão relevantes | Execução assíncrona com contratos, registros de progresso e critérios de intervenção. |

Esta matriz é uma recomendação de investimento. Ela não declara inutilidade universal de qualquer atividade. O mínimo a preservar varia conforme o domínio e a responsabilidade.

### 9.3. Sintaxe perde centralidade; semântica passa a orientar o estudo

Ao aprender uma linguagem, priorize como ela representa dados, trata erros, administra recursos e executa concorrência. Use a IA e a documentação para recuperar detalhes de sintaxe. Exercícios manuais curtos continuam úteis quando revelam um comportamento que você precisa compreender.

O objetivo deixa de ser conseguir produzir qualquer trecho de memória. Passa a ser reconhecer a intenção, compreender as consequências e descobrir rapidamente o que falta saber. Essa diferença permite aprender novas tecnologias com maior alcance sem manter todos os detalhes na memória.

### 9.4. Repetição mecânica deve sair da rotina produtiva

Boilerplate, conversões previsíveis, documentação derivada e ajustes mecânicos são candidatos prioritários à automação. Sempre que possível, use geradores, transformações determinísticas ou agentes com critérios claros, seguidos das verificações pertinentes.

A delegação também deve alcançar mudanças novas e tecnicamente exigentes quando o ambiente oferece contexto, ferramentas e critérios suficientes para verificar o resultado. O caso da seção 11 mostra essa transição. A complexidade define quais condições precisam ser construídas para delegar bem.

Vale examinar a própria semana e identificar o que foi repetido. Se uma atividade consome tempo porque ninguém consolidou o procedimento, automatizá-la pode ter retorno maior que estudar mais uma biblioteca. O ganho é especialmente relevante quando a melhoria fica disponível à equipe.

### 9.5. Algoritmos de entrevista exigem uma decisão contextual

Treinar problemas algorítmicos pode atender a uma exigência concreta de seleção ou a uma lacuna de raciocínio. Essa finalidade deve ser explícita. A preparação para um formato de entrevista não precisa ocupar indefinidamente o centro do desenvolvimento profissional.

Para excelência no trabalho, prefira exercícios que exijam entender dados, reconhecer complexidade, medir uma limitação e escolher uma solução. Especialistas em compiladores, motores de banco, computação gráfica, segurança, sistemas embarcados ou infraestrutura de desempenho terão necessidades distintas de profundidade e execução direta.

### 9.6. Revisão linha a linha deixa de ser o padrão único

Um engenheiro que delega a implementação e depois reconstrói manualmente todo o raciocínio de cada linha mantém uma dependência linear entre produção e atenção humana. O caminho de evolução é desenvolver controles que permitam avaliar propriedades, contratos, alterações relevantes e resultados observados.

Leitura detalhada permanece apropriada quando resolve uma dúvida concreta, investiga falha, examina uma fronteira sensível ou constrói um novo mecanismo de confiança. Para classes estáveis de mudanças, automação e amostragem podem reduzir trabalho repetido, desde que a equipe acompanhe o que escapa e ajuste a política.

### 9.7. Conhecer todas as novidades não é uma obrigação produtiva

O profissional precisa de uma maneira de absorver mudanças relevantes. Isso pode envolver uma revisão periódica das ferramentas usadas, testes de alternativas e atenção a mudanças que afetem o trabalho atual.

A pergunta para uma novidade é: **que limitação concreta ela remove, em quais tarefas e com que custo de adoção?** Se não há uma resposta, o estudo pode permanecer exploratório, com orçamento pequeno. A competência se acumula mais quando a pessoa termina ciclos completos de trabalho e aprende com os resultados.

### 9.8. O que não deve perder prioridade por engano

Despriorizar execução manual exige preservar a capacidade de perceber problemas. Vale proteger especialmente entendimento de domínio, raciocínio causal, dados, segurança, comunicação e qualidade da evidência.

Há também momentos em que escrever um pequeno programa é a forma mais rápida de compreender um mecanismo. Esse exercício tem finalidade pedagógica ou investigativa. Ele pode coexistir com uma rotina produtiva em que a maior parte da implementação é delegada.

Uma boa decisão de estudo responde a duas perguntas: **isso aumenta minha capacidade de delegar com qualidade? Isso amplia o conjunto de problemas pelos quais consigo responder?** Se a resposta a ambas for negativa, provavelmente há um investimento melhor.

---

## 10. Especialização: o que todos precisam saber e o que depende do trabalho

### 10.1. O núcleo comum

Todo engenheiro que usa IA profissionalmente deve conseguir formular tarefas, fornecer contexto, operar ferramentas, escolher verificações, interpretar resultados, controlar acesso e aprender com falhas. Também precisa manter os fundamentos relevantes aos sistemas pelos quais responde.

Isso não exige construir um runtime de agentes, treinar modelos ou dominar toda a infraestrutura de aprendizado de máquina. A adoção competente começa com o uso profundo de ferramentas existentes e com a melhoria do ambiente de desenvolvimento.

### 10.2. Três escopos de atuação

| Escopo profissional | Conhecimento adicional prioritário | Evidência prática de domínio |
|---|---|---|
| Engenheiro que desenvolve software com IA | Contexto, delegação, verificações, permissões e fluxo de entrega | Entrega uma mudança completa com autonomia adequada e evidência confiável. |
| Engenheiro de plataforma para agentes | Ambientes, integrações, identidade, isolamento, avaliação compartilhada e observabilidade | Várias equipes executam tarefas com menos preparação e intervenção. |
| Engenheiro de produto cujo comportamento depende de IA | Avaliação de comportamento, recuperação de informação, qualidade de dados, latência, custo e falhas do sistema em uso | Demonstra sucesso em tarefas de usuários e acompanha regressões em produção. |

Para o terceiro escopo, técnicas como RAG, ajuste de modelos e orquestração especializada devem ser aprendidas quando solucionam um problema observado. Seu valor depende de requisitos de atualização, precisão, acesso, distribuição de dados e custo. Uma implementação dessas técnicas também precisa de avaliação própria.

### 10.3. Profundidade seletiva

Uma formação sustentável combina amplitude suficiente para acompanhar uma entrega e profundidade em áreas onde o engenheiro precisa exercer julgamento difícil. O especialista em dados aprofunda integridade, consultas e evolução de esquema; o de frontend, interação, acessibilidade e desempenho percebido; o de plataforma, confiabilidade e isolamento; o de sistemas, recursos e concorrência.

A IA permite ampliar a área de atuação, mas o compromisso profissional deve continuar proporcional à capacidade de verificar consequências. Quando a tarefa atravessa uma área de impacto que ninguém domina suficientemente, a resposta competente inclui trazer expertise adequada e registrar a decisão.

---

## 11. Um caso técnico completo: reserva de estoque com concorrência

**Cenário ilustrativo criado para este relatório.** O objetivo é mostrar como as competências se combinam; os exemplos não constituem uma implementação pronta para produção.

Uma aplicação precisa permitir que um cliente reserve unidades de um item. Existem múltiplos clientes organizacionais, requisições simultâneas, retries após timeout e um evento que informa a criação da reserva a outro serviço.

### 11.1. O trabalho começa pelo contrato

Pedir “crie um endpoint de reserva” deixa decisões importantes em aberto. Antes de delegar, o engenheiro identifica os invariantes:

- A quantidade disponível nunca pode ficar negativa.
- Durante a janela contratada de retenção da chave, repetir a mesma intenção deve produzir uma única reserva lógica.
- Reutilizar a mesma chave com conteúdo diferente precisa gerar um resultado explicitamente definido.
- Um cliente só pode atuar sobre seus próprios dados.
- Uma falha parcial não pode produzir reserva sem rastreabilidade do evento correspondente.
- O sistema deve permitir descobrir o resultado quando a conexão cai depois da confirmação no banco.

O engenheiro também resolve com o domínio se a reserva expira, como é cancelada e por quanto tempo a chave de idempotência continua válida. O contrato deve dizer o que ocorre quando a chave expira e quando a reserva expira antes dela: recuperar a operação original ou iniciar outra intenção com uma nova chave são comportamentos distintos. Essas decisões alteram a modelagem.

Um contrato resumido poderia ser:

```yaml
objetivo: "Reservar unidades de um item para o cliente autenticado"
escopo:
  inclui: [API de reserva, persistencia, evento, testes, telemetria]
  exclui: [pagamento, alteracao do fluxo de expedicao]
invariantes:
  - "disponibilidade >= 0"
  - "uma reserva logica por cliente e chave durante a janela de retencao"
  - "mesma chave com payload diferente produz conflito"
  - "nenhum acesso a dados de outro cliente"
evidencias:
  - "teste com requisicoes concorrentes disputando o ultimo item"
  - "teste de repeticao apos commit e antes da resposta"
  - "teste de isolamento entre clientes"
  - "teste de recuperacao da publicacao do evento"
decisoes_pendentes:
  - "politica de expiracao da reserva e da chave"
```

Os campos são um modelo ilustrativo. O contrato só estará pronto para implementação completa depois de resolver as pendências que afetam a semântica.

### 11.2. O engenheiro define a fronteira de atomicidade

Uma solução ingênua lê a disponibilidade e depois grava a redução. Duas requisições podem observar o mesmo estoque e agir sobre uma premissa que deixou de ser verdadeira.

Para um item representado por uma única linha, uma operação condicional pode ser parte da solução:

```sql
-- Fragmento ilustrativo: quantidade deve ser validada como inteira positiva.
-- A identidade do cliente vem da autenticacao, nao do corpo da requisicao.
UPDATE inventory
SET available = available - :quantity
WHERE tenant_id = :authenticated_tenant
  AND item_id = :item_id
  AND available >= :quantity
RETURNING available;
```

No PostgreSQL, a semântica de atualização concorrente em `Read Committed` inclui reavaliar a condição sobre a versão atualizada da linha após aguardar um concorrente. É essa propriedade documentada, junto das restrições do esquema, que deve fundamentar o raciocínio; o formato visual da consulta não prova sua adequação. [F28]

O fragmento **não resolve sozinho** idempotência, criação da reserva, autorização completa, expiração ou publicação de eventos. Um desenho possível garante uma única linha de estoque por `(tenant_id, item_id)` e usa uma restrição única para `(tenant_id, idempotency_key)` no registro de operações. A coordenação da chave, o decremento condicional, a reserva, o resultado recuperável e a inserção na outbox participam da mesma transação.

O caminho de repetição consulta o resultado confirmado e compara os parâmetros relevantes. O tratamento de concorrência precisa distinguir conflito, operação ainda não confirmada e resultado concluído, sem permitir um segundo efeito. O contrato também define se recusas, como estoque insuficiente, ficam associadas à chave ou permitem uma nova tentativa. Essa é uma proposta de desenho para o exemplo, cuja implementação exige validação própria.

O contrato de repetição também precisa distinguir a mesma intenção de outra operação com parâmetros iguais. A abordagem de identificadores explícitos apresentada pela AWS ajuda a formular esse aspecto. [F29]

### 11.3. O evento exige tratamento de falha parcial

Gravar a reserva e publicar diretamente em um broker são duas operações distintas. Se uma acontecer e a outra falhar, pode haver divergência.

Uma possibilidade é gravar um evento em uma *outbox* na mesma transação da reserva e usar um publicador para entregá-lo posteriormente. Esse padrão trata a fronteira entre persistência e publicação. A entrega pode repetir mensagens; consumidores precisam lidar com duplicatas conforme o contrato. A documentação da AWS descreve o padrão e suas condições. [F30]

O engenheiro decide se esse desenho corresponde aos requisitos e define como observar atrasos, retentar publicação e reconhecer eventos processados. A IA pode implementar cada componente e produzir alternativas. A coerência do contrato entre eles permanece uma decisão de engenharia.

Para o exemplo, cada evento tem um identificador estável. O consumidor pode registrar esse identificador e aplicar seu efeito na mesma transação local, ou executar uma operação cujo contrato seja idempotente. Se o efeito ocorre em outro serviço, a garantia depende também desse serviço. A outbox não fornece, sozinha, efeito único no destino.

### 11.4. O trabalho é dividido com interfaces já definidas

Uma organização possível seria:

| Frente | Entrega | Condição de integração |
|---|---|---|
| Investigação | Mapa do código existente e das regras de estoque | Referências verificadas a arquivos e comportamento atual. |
| Implementação | Alteração de API e persistência | Contrato de idempotência e esquema acordados. |
| Verificação | Cenários de concorrência, repetição e isolamento | Critérios derivados dos invariantes e uso de banco real. |
| Operação | Telemetria, migração e plano de implantação | Compatibilidade com o ambiente e sinais de falha definidos. |

Essas frentes podem ser pessoas, agentes ou combinações. A divisão só deve ser paralela onde as dependências permitirem. A investigação inicial pode revelar que uma decisão de domínio precisa ser resolvida antes de qualquer implementação.

### 11.5. A evidência vai além do caminho feliz

O engenheiro pede resultados observáveis para cenários específicos:

1. Duas requisições disputam a última unidade: apenas uma obtém a reserva.
2. Duas requisições usam a mesma chave: há um único efeito no estoque.
3. A mesma chave reaparece com outra quantidade: ocorre o conflito especificado.
4. O processo termina depois do commit e antes da resposta: a repetição recupera o resultado definido.
5. Um cliente tenta referenciar o item de outro: não há exposição nem mutação indevida.
6. O broker aceita o evento, mas o publicador termina antes de registrar a publicação: a retomada pode repetir a mensagem; a deduplicação ou idempotência do consumidor evita um novo efeito.
7. A reserva expira durante operações concorrentes: a regra acordada preserva consistência.

Mocks isolados podem auxiliar testes locais, mas não demonstram o comportamento de bloqueio e isolamento do banco. Os testes pertinentes devem exercitar esse comportamento, coordenando a sequência relevante de operações com barreiras ou pontos de sincronização. Apenas lançar requisições juntas pode deixar de reproduzir a disputa desejada. Quando viável, introduzir uma versão deliberadamente vulnerável à corrida permite confirmar que o teste detecta o defeito pretendido.

### 11.6. O resultado precisa ser implantável e observável

A entrega inclui a alteração, a migração compatível, os testes pertinentes e os sinais de operação. A evidência deve identificar a versão validada. Se a integração com outra mudança alterar o comportamento, a validação correspondente precisa ser repetida sobre o resultado integrado.

Para uma implantação gradual, podem ser acompanhados conflitos de reserva, latência, erros, atrasos na outbox e divergências de invariantes. As condições de interrupção devem ser definidas antes da exposição. Mudanças de dados exigem cuidado próprio: reverter o binário não desfaz automaticamente uma mutação já persistida.

O capítulo sobre *canarying* do Google SRE oferece uma referência para combinar automação de releases, mudanças pequenas e avaliação de uma versão antes de ampliar sua exposição. [F33]

### 11.7. Onde esteve a competência do engenheiro

A maior contribuição humana esteve em definir a intenção, reconhecer concorrência e falhas parciais, escolher os contratos, separar frentes, exigir evidência independente e preparar operação. A implementação foi um campo de execução delegável dentro dessas condições.

Ao terminar, o engenheiro registra os aprendizados úteis: um exemplo de teste de concorrência, a política de idempotência, um procedimento de migração e os sinais de diagnóstico. A próxima tarefa semelhante começa de uma posição melhor.

---

## 12. Da produtividade individual ao fluxo de entrega

### 12.1. Aceleração local precisa atravessar o sistema

Considere um **exemplo numérico fictício**: uma entrega leva 100 horas de tempo decorrido, das quais 40 correspondem à implementação e 60 a decisões, esperas, integração e validação. Se a implementação cair para quatro horas e todo o restante permanecer igual, a entrega levará 64 horas. Uma aceleração de dez vezes naquela etapa produz aproximadamente 1,56 vez de aceleração no total.

O cálculo é apenas ilustrativo e supõe etapas sequenciais. Ele mostra por que o engenheiro precisa enxergar onde o tempo é consumido. A próxima melhoria pode estar em ambientes de teste, contratos entre equipes, capacidade de CI ou decisões de produto.

O AI Capabilities Model da DORA identifica sete capacidades associadas a melhores resultados com IA: posição organizacional clara, ecossistema saudável de dados, acesso de IA aos dados internos, práticas de versionamento, lotes pequenos, foco no usuário e plataformas internas de qualidade. O modelo reforça que o ambiente coletivo participa dos resultados. [F04]

### 12.2. Um painel pequeno, com perguntas úteis

O painel proposto abaixo combina medidas de resultado e de processo. Não é necessário instrumentar tudo antes de começar; selecione o que responde ao gargalo atual.

| Pergunta | Medida possível | Uso na decisão |
|---|---|---|
| O usuário consegue realizar melhor sua tarefa? | Sucesso da jornada, tempo para concluir, erros e feedback | Priorizar trabalho que produz valor. |
| Onde a entrega espera? | Tempo em fila e em execução por etapa | Encontrar o gargalo de fluxo. |
| A mudança é sustentável? | Falhas escapadas, retrabalho, regressões e incidentes | Ajustar controles e arquitetura. |
| A autonomia está aumentando? | Tempo humano de intervenção por classe de tarefa | Identificar supervisão repetitiva que pode ser eliminada. |
| O custo total está adequado? | Custo por mudança aceita, incluindo revisão e infraestrutura | Comparar modelos e processos pelo resultado. |
| O ganho se tornou coletivo? | Reutilização de procedimentos e redução de falhas recorrentes | Priorizar melhorias compartilhadas. |

Para indicadores de entrega, a orientação atual da DORA apresenta **cinco métricas**: tempo do commit à produção (*change lead time*), frequência de implantação, tempo de recuperação de implantação malsucedida, proporção de implantações que exigem intervenção imediata e proporção de implantações não planejadas decorrentes de incidentes (*deployment rework rate*). Devem ser contextualizadas por aplicação ou serviço, evitando comparações artificiais entre trabalhos diferentes. [F38]

O framework SPACE também orienta medir produtividade por várias dimensões, incluindo satisfação, desempenho, atividade, colaboração e eficiência. Essa abordagem ajuda a evitar que consumo de tokens, commits ou volume de código se torne a finalidade do trabalho. [F11]

### 12.3. Medir custo sem esconder atenção humana

Uma fórmula operacional ilustrativa é:

```text
custo por mudança aceita =
  (custo de modelos e ferramentas
   + custo de infraestrutura de execução e validação
   + custo do tempo humano de preparação, revisão e correção)
  / quantidade de mudanças aceitas em uma classe comparável
```

Ela não substitui medidas de valor, qualidade e consequência. Serve para revelar que uma configuração barata por token pode exigir mais retrabalho, e que uma configuração mais cara pode liberar tempo humano suficiente para compensar.

As classes precisam ser comparáveis: corrigir um texto e migrar um banco têm perfis distintos. Também convém acompanhar o período posterior à entrega para capturar falhas e correções que não apareceram no momento da aceitação.

Registre separadamente tempo de calendário, tempo de agente e esforço humano. A simultaneidade altera a relação entre eles. Um agente pode trabalhar por horas enquanto a pessoa resolve outra demanda; somar os tempos como se fossem uma atividade sequencial produz uma medida enganosa.

### 12.4. Transformar falha recorrente em melhoria

Um procedimento simples para a equipe:

1. Registrar a falha com tarefa, configuração e evidência.
2. Distinguir requisito ambíguo, contexto inadequado, ambiente, ferramenta, verificação e limitação do modelo.
3. Escolher a intervenção mais simples que trate a causa.
4. Reexecutar um caso que reproduzia a falha.
5. Compartilhar a melhoria e observar recorrência.

Possíveis resultados incluem um teste de regressão, uma restrição de API, um exemplo de uso, uma atualização de documentação ou uma ferramenta mais clara. O crescimento de instruções deve responder a necessidade real; também é necessário remover orientações obsoletas.

Essa prática amplia uma tradição de engenharia já expressa pelo SRE: reduzir trabalho operacional repetitivo pela eliminação de sua causa. A IA torna mais acessível construir automações, mas continua sendo necessário escolher onde elas produzem benefício. [F34]

### 12.5. Responsabilidades organizacionais

Um engenheiro pode melhorar seu contexto local, criar verificações e compartilhar procedimentos. Algumas condições exigem apoio institucional: ambientes adequados, acesso autorizado, orçamento, capacidade de CI, integração com dados internos e critérios de avaliação profissional.

A liderança deve reconhecer trabalho que aumenta a capacidade coletiva, mesmo quando ele reduz o volume de intervenção visível de quem o realizou. Isso inclui documentação útil, infraestrutura, formação de colegas e eliminação de tarefas recorrentes.

O estudo *The SPACE of AI*, de 2025, reuniu respostas de mais de 500 desenvolvedores e observações qualitativas, destacando o papel de apoio organizacional e aprendizagem entre colegas. Esses resultados são compatíveis com a dimensão coletiva do manifesto. [F13]

Uma iniciativa de adoção deveria ter um responsável pelo fluxo, problemas priorizados e resultados acompanhados. Distribuir ferramentas sem resolver acesso, integração e verificação deixa parte importante do potencial sem caminho para chegar ao usuário.

---

## 13. Aprender com IA e preservar a capacidade de julgamento

### 13.1. Produção e formação têm objetivos diferentes

Na produção de trabalho conhecido, delegação intensa pode ser a escolha correta. Quando uma lacuna compromete sua capacidade de avaliar, a atividade precisa incluir aprendizagem deliberada.

Um experimento de 2026 com 52 engenheiros, majoritariamente juniores, examinou aprendizagem da biblioteca Trio. A média no teste posterior foi de 50% no grupo com IA e 67% no grupo sem IA: diferença de **17 pontos percentuais**. A pequena diferença de tempo não foi estatisticamente significativa. O estudo mede aprendizagem imediata em uma tarefa limitada. A análise dos modos de uso sugere valor de interações voltadas à compreensão, mas esses modos não foram randomizados separadamente. [F15]

A orientação prática é desenhar o uso da IA conforme o objetivo. Receber uma solução e compreender a solução são resultados diferentes, que precisam de critérios próprios.

### 13.2. Um ciclo de aprendizagem que aproveita a IA

O método abaixo é uma proposta do relatório:

1. **Escolha uma lacuna concreta.** Use algo que afetou uma decisão recente: isolamento, cancelamento, cache, autorização, acessibilidade ou perfil de execução.
2. **Registre uma previsão.** Antes de consultar a resposta, descreva o comportamento esperado e as razões.
3. **Use a IA como laboratório.** Peça exemplos pequenos, variações, contraexemplos e explicações conectadas ao seu sistema.
4. **Execute e observe.** Compare a previsão com resultados concretos.
5. **Reconstrua a explicação.** Use suas palavras e explicite condições de validade.
6. **Resolva uma variante.** Mude entradas, escala ou tipo de falha para testar transferência de conhecimento.
7. **Produza um ativo útil.** Transforme a descoberta em teste, nota de decisão ou procedimento que ajude no trabalho.

É possível pedir pistas graduais em vez de uma correção completa. Também é possível pedir ao modelo que critique uma explicação que você escreveu. O importante é haver alguma demonstração de entendimento que não dependa de repetir a resposta recém-recebida.

### 13.3. Uma agenda de estudo sustentável

Organize o estudo em três níveis:

- **Fundamentos duráveis:** raciocínio sobre sistemas, dados, algoritmos, segurança e produto.
- **Práticas operacionais:** especificação, contexto, delegação, verificação e fluxo.
- **Ferramentas atuais:** recursos que permitem executar essas práticas melhor.

Os dois primeiros níveis orientam quais ferramentas merecem atenção. Se sua maior limitação é entender concorrência, trocar de editor provavelmente não resolverá a lacuna. Se você compreende o domínio, mas repete manualmente toda configuração, melhorar o ambiente pode ser o investimento mais útil.

Uma ou duas sessões curtas de aprendizagem deliberada por semana podem ser um ponto de partida, ajustado à disponibilidade. Essa cadência é sugestiva, não uma frequência cientificamente ótima. O indicador de progresso é conseguir explicar, prever, detectar e corrigir algo que antes dependia de confiança na resposta do modelo.

### 13.4. Como formar quem está começando

O início de carreira deve incluir IA desde cedo, com tarefas que tornem visível o raciocínio do aprendiz. Um projeto pequeno e completo permite observar requisito, implementação, teste, implantação e efeito, preservando a relação entre as partes.

O mentor pode pedir que a pessoa formule o contrato antes da geração, antecipe um caso de falha, explique uma decisão e diagnostique uma variante. A IA pode ajudar em todas essas etapas, mas a avaliação deve verificar o que o engenheiro passou a compreender e controlar.

Se tarefas mecânicas são automatizadas, a formação precisa criar experiências de julgamento de propósito. Isso inclui analisar incidentes, testar hipóteses, conversar com usuários e participar de decisões com escopo adequado. A progressão acontece pela responsabilidade demonstrada, não pelo volume de código produzido.

---

## 14. Um plano de desenvolvimento de 90 dias

Este roteiro é uma proposta adaptável, não uma promessa de proficiência em três meses. Use um projeto real, com acesso autorizado e impacto controlado. As fases podem se sobrepor; o critério de avanço é a evidência obtida.

### Dias 1–15: estabelecer um fluxo completo e uma linha de base

Escolha uma ferramenta principal e aprenda a operar contexto, execução, retomada e limites. Selecione algumas tarefas reais e registre onde você interveio, quanto tempo foi consumido e quais verificações sustentaram a entrega.

Converse com um usuário ou responsável de produto para escolher uma melhoria que tenha valor reconhecível. Reproduza uma falha ou uma limitação e conclua uma entrega pequena com IA, incluindo teste e observação do resultado.

**Entregas da fase:** registro das tarefas; primeira mudança concluída; lista das principais limitações do fluxo; uma lacuna técnica pessoal identificada.

**Critério de avanço:** você consegue explicar o objetivo, demonstrar o resultado e distinguir a contribuição do agente de suas intervenções.

### Dias 16–30: tornar o trabalho mais delegável

Melhore o mapa do repositório e os comandos de preparação e validação. Use contratos de tarefa com invariantes e critérios de conclusão. Converta uma instrução repetida em recurso compartilhado, removendo informações desatualizadas que atrapalhem.

Faça uma sessão deliberada sobre a lacuna escolhida. Conclua uma variante que exija aplicar o entendimento, e registre o que mudou em sua capacidade de julgamento.

**Entregas da fase:** orientação curta do projeto; modelo de tarefa testado; procedimento reutilizável; exercício de entendimento.

**Critério de avanço:** outra pessoa ou uma nova sessão do agente consegue repetir o processo sem depender de orientações orais do autor.

### Dias 31–60: aumentar autonomia com evidência

Construa uma pequena coleção de tarefas para avaliar o fluxo. Inclua erros anteriores, casos de borda e tarefas com tipos diferentes de dificuldade. Compare duas configurações quando isso responder a uma dúvida real, mantendo critérios fixos.

Se houver uma limitação que o paralelismo possa resolver, experimente-o em uma tarefa decomponível, definindo interfaces, isolamento e responsabilidade de integração. Verifique permissões, dados acessíveis e procedimentos de recuperação. Automatize uma classe de verificações repetitivas.

**Entregas da fase:** suíte inicial de avaliação; verificações repetitivas automatizadas; política simples de autonomia por classe de mudança. Acrescente registro comparativo e tarefa paralela integrada se esses experimentos tiverem sido úteis ao problema escolhido.

**Critério de avanço:** há redução demonstrável de intervenção repetitiva, acompanhada de evidência de qualidade e controle de consequências.

### Dias 61–90: melhorar o sistema da equipe

Escolha um gargalo observado: fila de revisão, inicialização de ambiente, CI, contexto fragmentado ou validação manual. Implemente uma melhoria e acompanhe seu efeito. Se depender de outra equipe, formule uma proposta com problema, impacto, evidências e investimento necessário.

Compartilhe o procedimento e forme ao menos outro usuário do fluxo. Reavalie o valor entregue na perspectiva de produto. Remova automações e instruções que não demonstraram utilidade.

**Entregas da fase:** melhoria de fluxo adotada; comparação antes/depois contextualizada; documentação de uso; próxima prioridade de desenvolvimento.

**Critério de avanço:** o benefício sobrevive à sua ausência e aparece no trabalho de outras pessoas ou em um resultado melhor para o usuário.

### Como adaptar sem transformar o roteiro em burocracia

Se você está começando, reduza o escopo do sistema e aumente o espaço para explicar e experimentar. Se já é sênior, escolha um gargalo que afete outras pessoas. Em áreas de maior consequência, concentre o trabalho em ambientes isolados até que os controles relevantes estejam demonstrados.

O plano pode ser retomado em ciclos. A cada ciclo, elimine alguma execução repetitiva e amplie uma capacidade de julgamento. Essa combinação mantém a transição conectada ao trabalho.

---

## 15. Como reconhecer excelência em diferentes níveis de carreira

### 15.1. A amplitude da responsabilidade continua sendo decisiva

Os perfis abaixo são uma proposta de desenvolvimento, não uma padronização de cargos.

| Perfil | Responsabilidade a desenvolver | Evidência de excelência |
|---|---|---|
| Início de carreira | Entender e concluir tarefas delimitadas com IA | Explica comportamento, detecta caso de borda e demonstra funcionamento. |
| Pleno | Conduzir uma funcionalidade pelo ciclo de entrega | Formula contrato, coordena execução, valida e acompanha operação. |
| Sênior | Resolver ambiguidades e ampliar a autonomia da equipe | Traduz julgamento em arquitetura, verificações e contexto reutilizável. |
| Staff ou principal | Melhorar decisões e fluxo entre equipes | Remove gargalos estruturais e cria capacidades compartilhadas com efeito observado. |
| Liderança de engenharia | Criar condições, prioridades e incentivos | Oferece infraestrutura, formação, responsabilidade e métricas coerentes com resultados. |

Um sênior pode demonstrar evolução produzindo menos revisões manuais porque criou controles melhores. Um iniciante pode demonstrar evolução produzindo um projeto menor que compreende e consegue operar. O número de agentes utilizados não determina a senioridade.

### 15.2. Rubrica de autoavaliação

Use a escala para avaliar cada dimensão em uma tarefa real:

**A IA pode ser usada em todos os níveis. A escala mede autonomia para conduzir e avaliar o trabalho; “orientação” significa apoio adicional necessário para exercer esse julgamento.**

- **0 — Dependência:** não consigo conduzir ou avaliar essa parte.
- **1 — Execução assistida:** consigo avançar com orientação frequente.
- **2 — Autonomia delimitada:** consigo concluir situações conhecidas e reconhecer limites.
- **3 — Julgamento:** consigo tratar ambiguidades, investigar falhas e justificar escolhas.
- **4 — Capacidade compartilhada:** consigo melhorar o processo e permitir que outros façam melhor.

| Dimensão | Pergunta de avaliação |
|---|---|
| Produto e domínio | Consigo explicar por que a mudança importa e como reconhecer valor? |
| Especificação | Explicitei comportamento, invariantes, limites e conclusão? |
| Fundamentos | Consigo prever consequências e perceber incoerências técnicas? |
| Contexto | O agente encontra informação suficiente, confiável e atual? |
| Delegação | O trabalho avança sem depender de acompanhamento repetitivo? |
| Verificação | Sei quais erros minhas evidências detectam e quais deixam em aberto? |
| Segurança | Conheço o alcance dos acessos e as consequências das operações? |
| Operação | Consigo observar, diagnosticar e recuperar a mudança em uso? |
| Aprendizagem | Demonstro entendimento transferível para situações novas? |
| Efeito coletivo | Minha melhoria ajuda outras pessoas sem depender da minha presença? |

Não some as notas como se formassem uma medida científica de valor profissional. Use a distribuição para escolher a próxima experiência de desenvolvimento e identificar lacunas incompatíveis com a responsabilidade atual.

### 15.3. Um portfólio compatível com o novo papel

Um portfólio profissional pode apresentar um problema, um contrato de solução, decisões de arquitetura, divisão de trabalho, evidências de validação e efeito observado. Deve mostrar o papel exercido pelo engenheiro e os limites que ele reconheceu.

Uma boa demonstração inclui uma falha encontrada e o modo como ela modificou o processo. Também distingue protótipo, experimento e sistema em operação. Isso permite avaliar discernimento e capacidade de entrega, além da aparência do artefato.

Para entrevistas e formação interna, uma atividade útil é propor uma mudança com IA e introduzir uma variação: concorrência, timeout, volume maior ou requisito conflitante. O que se observa é como a pessoa esclarece a situação, escolhe evidência e adapta a solução. A atividade deve ser ajustada ao domínio e não é um teste psicométrico validado.

---

## 16. Uma definição operacional do excelente engenheiro

O excelente engenheiro do presente **converte problemas relevantes em resultados verificáveis e aumenta a capacidade do sistema que realiza essa conversão**.

Ele começa pela execução com IA onde ela pode assumir o trabalho, explicita intenção e prepara condições para autonomia. Usa profundidade técnica para escolher restrições, reconhecer falhas e sustentar decisões. Aprende a produzir evidência proporcional ao risco e a concentrar atenção nos pontos em que seu julgamento altera o resultado.

Sua competência também aparece no que deixa de consumir tempo: etapas mecânicas automatizadas, falhas que deixam de se repetir, conhecimento que se torna acessível e intervenções que já não são necessárias. A equipe passa a realizar mais trabalho útil sem depender continuamente da memória e da disponibilidade de uma única pessoa.

A oportunidade descrita pelo manifesto é a de ampliar o alcance da construção. Um engenheiro pode explorar mais ideias, compreender mais sistemas e levar mais soluções à realidade. Para aproveitar essa capacidade, precisa reorganizar deliberadamente o próprio aprendizado: reduzir execução substituível, aprofundar julgamento e transformar experiência em condições melhores de trabalho para pessoas e agentes.

---

## 17. Referências e trilhas de aprofundamento

**Todas as fontes foram consultadas em 1º de novembro de 2026.** Datas de publicação e de coleta de dados são distinguidas quando relevantes. Páginas de documentação sem data explícita são identificadas como documentação corrente. Os identificadores `[F01]` a `[F39]` são links para as fontes originais.

### 17.1. Premissa e atribuição

- **[F01] Butler, Bart — “Proton’s AI manifesto for software engineering”. Proton, 01/11/2026.** Fonte pública do manifesto fornecido pelo usuário. Texto de posicionamento e orientação organizacional; não é estudo de produtividade.
- **[F02] Proton — “Bart Butler”. Página oficial do autor, corrente.** Verificação da atribuição e do cargo de CTO.

### 17.2. Mudança do trabalho, produtividade e organização

- **[F03] DeBellis, Storer, Harvey e colaboradores — “DORA 2025 State of AI-assisted Software Development Report”. DORA/Google, 2025.** Pesquisa qualitativa e survey sobre IA e desenvolvimento.
- **[F04] Storer e DeBellis — “Introducing the DORA AI Capabilities Model”. Google Cloud, 23/09/2025.** Apresentação pelos pesquisadores das capacidades organizacionais associadas aos resultados.
- **[F05] Baolin e Harvey — “Balancing AI tensions: Moving from AI adoption to effective SDLC use”. DORA, 10/03/2026.** Análise temática de respostas de engenheiros; útil para investigar deslocamento de esforço.
- **[F06] Lopopolo, Ryan — “Harness engineering: leveraging Codex in an agent-first world”. OpenAI, 11/02/2026.** Relato de engenharia do fornecedor sobre execução com agentes e preparação do ambiente.
- **[F07] Rajasekaran, Prithvi — “Harness design for long-running application development”. Anthropic, 24/03/2026.** Experiência de desenvolvimento com planejamento, geração e avaliação.
- **[F08] Anthropic Economics — “Agentic coding and persistent returns to expertise”. 16/06/2026.** Estudo observacional de sessões; útil para entender domínio e divisão de trabalho.
- **[F09] Cui, Demirer, Jaffe, Musolff, Peng e Salz — “The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers”. Junho de 2025.** Experimentos de campo apresentados pelos autores em Microsoft Research.
- **[F10] Becker e colaboradores — “We are Changing our Developer Productivity Experiment Design”. METR, 24/02/2026.** Atualização metodológica sobre seleção, medição e trabalho simultâneo com agentes.
- **[F11] Forsgren e colaboradores — “The SPACE of Developer Productivity: There’s more to it than you think”. ACM Queue, fevereiro de 2021.** Framework de produtividade multidimensional; página dos autores em Microsoft Research.
- **[F12] Noda e Tacho — “Applying the DevEx framework”. 01/03/2024.** Orientação dos autores sobre aplicação. Complementa o [artigo original “DevEx: What Actually Drives Productivity”](https://getdx.com/research/devex-what-actually-drives-productivity/), de Noda, Storey, Forsgren e Greiler, publicado em 03/05/2023.
- **[F13] Houck e colaboradores — “The SPACE of AI: Real-World Lessons on AI’s Impact on Developers”. Microsoft Research, agosto de 2025.** Estudo de métodos mistos sobre experiência, produtividade e adoção em equipe.
- **[F38] Harvey, Nathen — “DORA’s software delivery performance metrics”. DORA, documentação corrente.** Definições oficiais das cinco métricas e orientação de uso contextualizado.
- **[F39] Anthropic Engineering — “Redesigning source control at Anthropic”. 13/10/2026, atualizado em 15/10/2026.** Relato sobre infraestrutura e controle de versões em uma carga excepcional de trabalho com IA.

### 17.3. Formação, fundamentos e julgamento

- **[F14] ACM, IEEE Computer Society e AAAI — “Generative AI and the Curriculum”, seção de CS2023. Janeiro de 2024.** Orientação curricular sobre mudança das atividades e permanência dos fundamentos.
- **[F15] Anthropic — “How AI assistance impacts the formation of coding skills”. 29/01/2026.** Divulgação do experimento de Shen e Tamkin sobre aprendizagem imediata com assistência de IA.
- **[F16] Lee e colaboradores — “The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers”. CHI, abril de 2025.** Survey correlacional sobre esforço crítico e confiança.
- **[F35] Winters, Titus — “What Is Software Engineering?”. Em Software Engineering at Google, 2020.** Referência sobre tempo, escala e escolhas de engenharia.
- **[F36] Chen e Barolak — “Knowledge Sharing”. Em Software Engineering at Google, 2020.** Referência sobre aprendizagem coletiva, documentação e distribuição de expertise.
- **[F37] Rodden, Hutchinson e Fu — “Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications”. CHI, 2010.** Apresentação do framework HEART e de métricas orientadas ao usuário.

### 17.4. Contexto, ferramentas, agentes e avaliação

- **[F17] Anthropic — “Effective context engineering for AI agents”. 29/09/2025.** Práticas de organização e manutenção do contexto durante a execução.
- **[F18] Anthropic — “Writing effective tools for agents — with agents”. 11/09/2025.** Projeto e avaliação de interfaces de ferramentas.
- **[F19] Anthropic — “Equipping agents for the real world with Agent Skills”. 16/10/2025, com atualização em 18/12/2025.** Organização de instruções, recursos e scripts reutilizáveis.
- **[F20] Anthropic — “Demystifying evals for AI agents”. 09/01/2026.** Metodologia de avaliação de tarefas, execuções, trajetórias e resultados.
- **[F21] Kim e colaboradores — “Towards a Science of Scaling Agent Systems”. arXiv, versão 3, 08/04/2026.** Preprint experimental sobre coordenação e alinhamento entre arquitetura e estrutura da tarefa. A versão citada evita misturar números de revisões anteriores.
- **[F22] Carlini, Nicholas — “Building a C compiler with a team of parallel Claudes”. Anthropic, 05/02/2026.** Experimento de capacidade e relato sobre testes, ambiente e divisão de trabalho.
- **[F27] Delimarsky, Den — “Spec-driven development with AI: Get started with a new open source toolkit”. GitHub, 02/09/2025.** Proposta metodológica e apresentação do Spec Kit.

### 17.5. Segurança e limites operacionais

- **[F23] Anthropic — “How we contain Claude across products”. 25/05/2026.** Relato de segurança sobre isolamento, limites de acesso e contenção.
- **[F24] OWASP GenAI Security Project — “OWASP Top 10 for Agentic Applications for 2026”. 09/12/2025.** Framework de especialistas. Foram consultados a apresentação e o documento disponível para download.
- **[F25] Model Context Protocol — “Security Best Practices”. Documentação da versão 2026-07-28.** Orientação técnica sobre identidade, autorização e riscos de integração.
- **[F26] GitHub Docs — “Customizing or disabling the firewall for GitHub Copilot”. Documentação corrente.** Exemplo concreto de limites e cobertura de um controle de saída de rede.

### 17.6. Dados, confiabilidade e operação

- **[F28] PostgreSQL — “Transaction Isolation”. Documentação da versão 16, seção 13.2.** Semântica de isolamento e operações concorrentes usada no exemplo técnico. A referência é explicitamente a essa versão.
- **[F29] Featonby, Malcolm — “Making retries safe with idempotent APIs”. Amazon Builders’ Library, sem data explícita.** Experiência de projeto de contratos de repetição e identificação de intenção.
- **[F30] AWS Prescriptive Guidance — “Transactional outbox pattern”. Documentação corrente.** Fronteira entre escrita no banco e publicação, com considerações sobre duplicatas.
- **[F31] OpenTelemetry — “Signals”. Documentação corrente.** Referência para traces, métricas, logs e sinais de observação.
- **[F32] Ewaschuk, Rob — “Monitoring Distributed Systems”. Em Site Reliability Engineering, Google, 2016.** Fundamentos de monitoramento e interpretação de sinais.
- **[F33] Google — “Canarying Releases”. Em The Site Reliability Workbook, 2018.** Automação de releases e implantação gradual com avaliação.
- **[F34] Google — “Eliminating Toil”. Em The Site Reliability Workbook, 2018.** Identificação e redução de trabalho operacional repetitivo.

### 17.7. Trilhas sugeridas de aprofundamento

**Para mudar a própria prática:** manifesto [F01], contexto [F17], especificação [F27] e avaliação [F20]. Acompanhe a leitura com uma entrega real.

**Para ampliar a capacidade da equipe:** DORA [F03] [F04], métricas [F38], DevEx [F12] e compartilhamento de conhecimento [F36]. Escolha um gargalo e acompanhe seu efeito.

**Para exercer julgamento técnico:** currículo [F14], formação de habilidades [F15] e fontes de fundamentos pertinentes ao seu sistema, como [F28] [F29] [F32]. Resolva variantes e investigue falhas.

**Para aumentar autonomia com controle:** segurança de agentes [F23] [F24], integração [F25] e arquitetura de coordenação [F21]. Avalie o ambiente concreto antes de ampliar permissões.

---

## 18. Apêndices: modelos de trabalho e glossário

Os modelos abaixo foram elaborados para este relatório. Adapte-os ao tamanho e à consequência da tarefa; campos que não ajudam uma decisão podem ser removidos.

### Apêndice A — Contrato de uma tarefa para agentes

```text
Problema e usuário:
  Qual necessidade ou falha deve ser resolvida? Para quem?

Resultado esperado:
  Qual comportamento observável deve existir ao concluir?

Contexto confiável:
  Quais arquivos, documentos, contratos e exemplos devem orientar?
  Qual versão ou estado inicial está em uso?

Invariantes:
  O que deve permanecer verdadeiro, inclusive sob falha?

Escopo:
  O que pode mudar? Que decisão ou acesso exige outro responsável?

Evidência:
  Como verificar comportamento, integração e consequências?
  Quais riscos requerem casos específicos?

Execução:
  Quais recursos estão disponíveis? Qual orçamento e condição de parada?
  Como registrar progresso e retomar a tarefa?

Conclusão:
  Entregar mudança, evidências vinculadas à versão, limites e pendências.
```

### Apêndice B — Conteúdo de um mapa curto do repositório

| Informação | Conteúdo esperado |
|---|---|
| Propósito | O que o sistema faz e quais usuários atende. |
| Navegação | Onde estão os módulos, contratos e decisões relevantes. |
| Preparação | Como obter um ambiente reproduzível com dados apropriados. |
| Execução e validação | Comandos reais e mantidos para iniciar, testar e investigar. |
| Limites | Regras de dependência, segurança e alterações sensíveis. |
| Evidência | Como registrar resultados e identificar a versão validada. |
| Continuidade | Onde ficam estado de tarefas, decisões e problemas conhecidos. |

O mapa deve apontar para os detalhes. Replicar todo o conteúdo em vários arquivos cria mais lugares para manter e reconciliar.

### Apêndice C — Registro de falha e melhoria do fluxo

```text
Tarefa e configuração:
Sintoma observado:
Evidência reproduzível:
Resultado esperado:

Causa investigada:
  requisito / contexto / ambiente / ferramenta / modelo / verificação / outra

Intervenção escolhida:
  mudança mínima que trata a causa

Validação da intervenção:
  caso que falhava; resultado atual; condições verificadas

Conhecimento compartilhado:
  teste, ferramenta, documento ou procedimento alterado

Acompanhamento:
  responsável; sinal de recorrência; condição para revisar ou remover a regra
```

### Apêndice D — Revisão de uma entrega orientada por evidências

Use estas perguntas para localizar lacunas, ajustando a profundidade à mudança:

- O resultado resolve o problema acordado?
- As decisões de domínio estão explícitas?
- A alteração preserva contratos e invariantes relevantes?
- As evidências foram produzidas sobre a versão que será integrada ou implantada?
- A verificação exercita os riscos importantes, inclusive falhas e concorrência quando aplicáveis?
- Há diferenças relevantes entre o ambiente de teste e o de uso?
- Os acessos, dependências e efeitos externos correspondem ao escopo autorizado?
- O comportamento será observável e existe um caminho de recuperação?
- O registro final distingue fatos verificados, hipóteses e pendências?
- Alguma descoberta deveria melhorar o próximo ciclo de trabalho?

### Apêndice E — Glossário breve

| Termo | Significado neste relatório |
|---|---|
| Agente | Sistema que usa um modelo e ferramentas para avançar por etapas em uma tarefa. |
| Harness | Infraestrutura que organiza execução, ferramentas, estado e interação com o modelo. |
| Engenharia de contexto | Organização da informação necessária ao agente ao longo do trabalho. |
| Skill | Procedimento reutilizável com instruções e, quando necessário, recursos e scripts. |
| Eval | Avaliação estruturada do comportamento de um sistema de IA em tarefas definidas. |
| Oráculo | Critério ou mecanismo que permite julgar se um resultado está correto. |
| Invariante | Propriedade que deve permanecer verdadeira nas condições definidas do sistema. |
| Idempotência | Propriedade contratada que permite repetir uma operação sem acrescentar o efeito indesejado. |
| Outbox | Registro transacional de eventos a publicar posteriormente. |
| Prompt injection | Tentativa de fazer conteúdo recebido redirecionar indevidamente o comportamento do agente. |
| Sandbox | Ambiente com limites impostos à execução e ao acesso a recursos. |
| MCP | Model Context Protocol, usado para integrar aplicações de IA a ferramentas e fontes de contexto. |
| CI/CD | Automação de integração, validação e entrega ou implantação de mudanças. |
| Observabilidade | Capacidade de investigar o comportamento do sistema por sinais e evidências de execução. |
| Toil | Trabalho operacional repetitivo que pode ser reduzido por melhorias de engenharia. |

---

[F01]: https://proton.me/blog/ai-manifesto
[F02]: https://proton.me/blog/author/bart-butler
[F03]: https://research.google/pubs/dora-2025-state-of-ai-assisted-software-development-report/
[F04]: https://cloud.google.com/blog/products/ai-machine-learning/introducing-doras-inaugural-ai-capabilities-model
[F05]: https://dora.dev/insights/balancing-ai-tensions/
[F06]: https://openai.com/index/harness-engineering/
[F07]: https://www.anthropic.com/research/harness-design-long-running-apps
[F08]: https://www.anthropic.com/research/claude-code-expertise
[F09]: https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/
[F10]: https://metr.org/blog/2026-02-24-uplift-update/
[F11]: https://www.microsoft.com/en-us/research/publication/the-space-of-developer-productivity-theres-more-to-it-than-you-think/
[F12]: https://newsletter.getdx.com/p/applying-the-devex-framework
[F13]: https://www.microsoft.com/en-us/research/publication/the-space-of-ai-real-world-lessons-on-ais-impact-on-developers/
[F14]: https://csed.acm.org/wp-content/uploads/2024/01/Generative-AI-v1.pdf
[F15]: https://www.anthropic.com/research/AI-assistance-coding-skills
[F16]: https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/
[F17]: https://www.anthropic.com/research/effective-context-engineering-for-ai-agents
[F18]: https://www.anthropic.com/research/writing-tools-for-agents
[F19]: https://www.anthropic.com/research/equipping-agents-for-the-real-world-with-agent-skills
[F20]: https://www.anthropic.com/research/demystifying-evals-for-ai-agents
[F21]: https://arxiv.org/abs/2512.08296v3
[F22]: https://www.anthropic.com/research/building-c-compiler
[F23]: https://www.anthropic.com/research/how-we-contain-claude
[F24]: https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
[F25]: https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices
[F26]: https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall
[F27]: https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/
[F28]: https://www.postgresql.org/docs/16/transaction-iso.html
[F29]: https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/
[F30]: https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html
[F31]: https://opentelemetry.io/docs/concepts/signals/
[F32]: https://sre.google/sre-book/monitoring-distributed-systems/
[F33]: https://sre.google/workbook/canarying-releases/
[F34]: https://sre.google/workbook/eliminating-toil/
[F35]: https://abseil.io/resources/swe-book/html/ch01.html
[F36]: https://abseil.io/resources/swe-book/html/ch03.html
[F37]: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/
[F38]: https://dora.dev/guides/dora-metrics/
[F39]: https://www.anthropic.com/research/redesigning-source-control




