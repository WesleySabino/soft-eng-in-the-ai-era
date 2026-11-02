# Software engineering in the AI era

## Competencies for building better in the present

**Research and professional guidance report**  
**Cutoff date: November 1, 2026**  
**Language: English (translated from the Brazilian Portuguese original)**

> **Thesis of the report:** an engineer's excellence comes to depend on their ability to turn intent into reliable systems, directing AI execution and continuously improving the environment in which people and agents work. Technical mastery is what makes it possible to expand that delegation and to answer for the result.

---

## How to read this document

This report takes as its premise the manifesto **“AI @ Proton, Engineering Manifesto”**, provided in three images. The public version was located on Proton's website, published on November 1, 2026, and attributed to **Bart Butler**, the company's CTO. The text of the images is the starting source; the publication and the author's official page make it possible to verify its attribution. [F01] [F02]

The question guiding the research is: **what does an engineer need to understand, learn, preserve, and stop prioritizing in order to perform this new role with excellence?** The transformation described in the manifesto is treated as a present working condition. The methodological qualifications in this report serve to guide its implementation, select investments, and measure results.

There are four types of content:

- **Premise:** the ideas from the manifesto that frame the problem.
- **Evidence:** results from research, documentation, and published experiences, with references.
- **Applied synthesis:** recommendations formulated in this report based on those sources and on engineering reasoning.
- **Examples:** scenarios, numbers, and working templates that are explicitly illustrative, with no claim to be observed results.

The research is a **targeted review of primary sources**, not an exhaustive systematic review. Priority was given to studies from 2025–2026, technical accounts by the authors themselves, official documentation, and durable engineering references. Observational surveys, experiments, methodological proposals, and vendor reports have different strengths and limits. Those limits appear alongside the relevant claims. The references at the end contain links, dates, and the nature of each source.

**Reading paths:**

- To understand the professional shift, read sections **1 to 4**.
- To reorganize your technical development, read sections **5 to 10**.
- To turn the diagnosis into practice, read sections **11 to 16** and the appendices.
- To go deeper into the research, use the annotated bibliography in section **17**.

## Table of contents

1. [The central shift: what is the engineer's job now?](#1-the-central-shift-what-is-the-engineers-job-now)
2. [What the evidence already supports](#2-what-the-evidence-already-supports)
3. [The mindset needed for the new role](#3-the-mindset-needed-for-the-new-role)
4. [The competency map](#4-the-competency-map)
5. [Fundamentals that must remain strong](#5-fundamentals-that-must-remain-strong)
6. [New competencies for working with agents](#6-new-competencies-for-working-with-agents)
7. [Verification, testing, and evaluation: building trust at scale](#7-verification-testing-and-evaluation-building-trust-at-scale)
8. [Security and autonomy as engineering problems](#8-security-and-autonomy-as-engineering-problems)
9. [What deserves less investment — and what to put in its place](#9-what-deserves-less-investment--and-what-to-put-in-its-place)
10. [Specialization: what everyone needs to know and what depends on the job](#10-specialization-what-everyone-needs-to-know-and-what-depends-on-the-job)
11. [A complete technical case: inventory reservation under concurrency](#11-a-complete-technical-case-inventory-reservation-under-concurrency)
12. [From individual productivity to delivery flow](#12-from-individual-productivity-to-delivery-flow)
13. [Learning with AI while preserving judgment](#13-learning-with-ai-while-preserving-judgment)
14. [A 90-day development plan](#14-a-90-day-development-plan)
15. [Recognizing excellence at different career levels](#15-recognizing-excellence-at-different-career-levels)
16. [An operational definition of the excellent engineer](#16-an-operational-definition-of-the-excellent-engineer)
17. [References and further reading paths](#17-references-and-further-reading-paths)
18. [Appendices: working templates and glossary](#18-appendices-working-templates-and-glossary)

---

## 1. The central shift: what is the engineer's job now?

### 1.1. The essence of the manifesto

The manifesto brings together three complementary shifts.

**First, the individual role changes.** The engineer comes to direct models and agents: making intent explicit, providing the conditions for execution, recognizing limits, and turning recurring failures into improvements to the working system. The ambition is to enable autonomous, continuous progress with less need for repetitive intervention.

**Second, the development flow changes.** Speeding up implementation shifts the bottlenecks. Specifications, integration, testing, CI, review, approval, and deployment all need to be reconsidered. The work includes redesigning entire stages when simply speeding up one activity no longer produces a meaningful gain.

**Third, collective responsibility changes.** Context, tools, automations, and useful practices need to benefit the team. Some improvements depend on organizational investment, and identifying those dependencies is also part of the engineer's responsibility.

The manifesto itself preserves expertise, architecture, documentation, testing, and human accountability. Its proposal is to redistribute effort so that this competence can steer a much greater execution capacity. This section summarizes the material provided by the user. [F01]

### 1.2. The new unit of contribution

The unit of professional contribution becomes a **useful, understood, verified, and sustainable change in the real system**.

This might mean delivering a feature, removing a performance limitation, reducing a recurring incident, simplifying a process, or concluding that a request would be better served without adding software. Code is one of the artifacts of that contribution. An API contract, an architectural decision, a test that captures an important failure, or an environment that lets agents investigate problems on their own can also be decisive.

An operational formulation helps make the breadth of the work visible:

**Relevant problem → explicit intent → delegable execution → evidence of correctness → observed effect → reusable learning.**

Each transition requires competence. A failure at the first stage can produce a technically sophisticated system for a need that doesn't exist. A failure in verification can let a convincing implementation reach production with a serious defect. A failure in learning makes the same team pay repeatedly to solve the same kind of problem.

### 1.3. The scarce resource changes

Once we adopt the premise that code production has become broadly delegable, human investment should concentrate on the constraints that prevent that capacity from turning into results: understanding of the domain, hard decisions, integration, reliable evidence, and available attention.

This is a central inference of this report. If an engineer can request several implementations in a short time, the ability to compare solutions, notice incorrect assumptions, and decide which complexity deserves to exist gains value. The cost of producing an alternative may fall dramatically; the cost of living with a bad alternative still includes maintenance, operations, and consequences for users.

The excellent professional learns to **increase execution capacity without increasing the need for supervision in the same proportion**. To do so, they turn quality criteria into contracts, tools, tests, limits, and feedback.

### 1.4. What it means to be up to date

**For delegable tasks, starting with AI execution becomes the normal practice. Manual intervention becomes a choice driven by value, risk, or learning.** The engineer needs to justify where their direct execution adds something, and to invest in removing the obstacles that still require repetitive oversight.

Being up to date comes to involve three simultaneous moves:

1. **Using the available capacity:** delegating real work and knowing tools through hands-on execution experience.
2. **Reorganizing one's own work:** creating the conditions to delegate more, monitoring exceptions, and improving the flow.
3. **Reinvesting the freed-up capacity:** deepening judgment, exploring more valuable problems, and building shared assets.

The relevant professional lag appears when a person keeps organizing their value exclusively around activities they could already delegate, without developing the judgment and the infrastructure that would allow them to expand their contribution. This is a diagnosis of practice, not a verdict on the person or on their ability to learn.

---

## 2. What the evidence already supports

### 2.1. There are present-day experiences of deep reorganization

In February 2026, OpenAI described a team that built a beta product using agents to generate the application, tests, documentation, infrastructure, and tooling. Human work concentrated on preparing the environment, specifying intent, and building feedback. This is a technical account from the vendor about a specific experience; its estimated gains are not a forecast for any given organization. [F06]

In October 2026, Anthropic reported that its volume of merged changes grew from roughly 2,500 per day in May to more than 30,000 in September. The bottleneck moved to development infrastructure, and the company redesigned its version control. The authors stress how exceptional this load is. The transferable lesson is to investigate the actual bottleneck; the experience does not imply that other teams should replace Git. [F39]

These cases make the manifesto's point concrete: directing agents and redesigning the production system are already engineering activities. The result depends on the ability to turn local speed into a reliable process.

### 2.2. Research distinguishes capability, productivity, and outcome

| Evidence | What was studied | What it supports | Relevant limitation |
|---|---|---|---|
| DORA 2025 | Nearly 5,000 respondents and more than 100 hours of qualitative research | AI amplifies organizational strengths and difficulties; the working environment matters | Observational survey and self-reports; does not provide a universal causal multiplier. [F03] |
| Three field experiments, 2025 | 4,867 developers at three companies; randomized access to a coding assistant | The pooled analysis estimated 26.08% more tasks completed, with a standard error of 10.3 percentage points | Tools and tasks of that time; completed tasks do not measure all of a product's value or quality. [F09] |
| DORA, March 2026 | Analysis of 1,110 open-ended responses from Google engineers about Q3 2025 | Faster generation can shift effort toward auditing and verification | One organizational context and qualitative data; not a causal measurement of the full flow. [F05] |
| Anthropic, June 2026 | About 400,000 sessions from roughly 235,000 people, October 2025 to April 2026 | Domain expertise is associated with greater success; human decisions concentrate more on planning than on execution | Vendor study with session classification; local success does not prove longitudinal quality in production. [F08] |
| Kim et al., April 2026 revision | 260 configurations across six agent benchmarks | Task structure and coordination affect the benefit of using multiple agents | Experimental preprint; its percentages are not estimates of team productivity. [F21] |

Three questions need to be kept separate: **can the agent do the task?; did the process become more efficient?; did the outcome improve something that matters?** A capability demonstration answers the first. To answer the others, we need to observe cost, time, quality, rework, and effect on the user.

### 2.3. The career implication

The most useful result of this literature for the engineer is identifying **where to invest competence**. The evidence points to mastery of the problem, accessible context, good interfaces, verification, and work organization. This report turns that convergence into a practical curriculum, without attributing validation of the whole curriculum to any single study.

We also need to update the way we measure. In February 2026, METR explained that participant and task selection, changes in compensation, and simultaneous use of agents made its new round of experiments hard to interpret. This case shows why human time, the duration of a run, and concurrent work need to be distinguished. A result from a previous generation of tools should not serve as a permanent portrait of the profession. [F10]

The horizon for action, therefore, is current work: experimenting on real tasks, measuring consequences, and changing the process. Research serves to make that adaptation more competent.

---

## 3. The mindset needed for the new role

The guidance in this section is an applied synthesis. It connects the manifesto with the evidence and with engineering principles.

### 3.1. Professional identity anchored in outcomes

The engineer needs to be able to recognize their contribution even when they did not type a single line of the result. Discovering the decisive requirement, designing an experiment, choosing a simple architecture, or creating a verification mechanism can demand more competence than producing the corresponding implementation.

This changes the source of professional pride. A good sign of growth is being able to say: “the system solves the problem, we know under which conditions it works, we monitor its effects, and we can change it safely.” The amount of visible effort is no longer a good measure of how important a contribution is.

This orientation also makes it possible to reject unnecessary work. If a request can be solved with a process change, a configuration, or the removal of a step, the ease of generating code does not oblige anyone to build a new application. Knowing how to cut scope is still a form of engineering.

### 3.2. Expanded responsibility

Responsibility includes the outcome and the mechanism that produced it. When a failure repeats, it is worth investigating whether requirements, documentation, access to evidence, tools, tests, or a better division of work are missing.

A simple example: the agent repeatedly calls a deprecated API. Correcting each response solves the immediate task. Making the correct version explicit, providing current documentation, and adding a relevant check can eliminate the whole class of error. The second intervention changes the capability of the working system.

Not every problem needs to become a platform. The point is to choose the smallest improvement that verifiably reduces recurrence: sometimes an example; sometimes a command; sometimes a test; sometimes an organizational decision.

### 3.3. Evidence-based trust

Useful trust is specific. One can trust an agent quite a lot to update documentation for a well-defined interface and demand stronger evidence when it changes authorization, concurrency, or a data migration.

The engineer should learn to ask: what claim am I accepting, what evidence does it rest on, and what could show it is wrong? The confident appearance of an explanation is no substitute for a test, a measurement, or an inspection of the real state.

A study presented at CHI 2025, with 319 workers and 936 self-reported examples, found associations between trust in AI and critical effort, along with a redistribution of that effort toward verification, integration, and responsibility for the task. The design is correlational and does not demonstrate loss of cognitive ability. It reinforces the value of making these evaluation habits explicit. [F16]

### 3.4. Ambition with scope discipline

AI expands the set of problems an engineer can explore. This favors initiative: testing hypotheses, building prototypes, investigating unfamiliar systems, and automating work that previously seemed too expensive.

This capability also changes the relationship with personal initiative. An opportunity that would once have waited for several people to become available can start as an investigation run by one engineer with agents. They gain room to cross boundaries between product, data, and implementation, making an idea concrete enough to be examined. Exercising this freedom with good judgment is part of the excellence proposed here.

The corresponding discipline is choosing experiments that answer important questions. A prototype should make it possible to learn something: whether the flow is understandable, whether the integration is feasible, whether the latency fits the budget, whether the user needs the feature. An impressive prototype that does not reduce uncertainty consumes attention and can create premature commitment to a solution.

It is useful to explicitly distinguish **exploration**, **candidate implementation**, and **change ready to operate**. The level of polish and evidence changes between these stages. The speed of generation makes this distinction even more necessary.

### 3.5. Thinking about the whole system

The excellent engineer follows the path from need to effect. If the code is ready early and waits days for an environment, integration, or a decision, there is a flow problem to solve.

This view requires talking with product, design, security, operations, and other teams. It also requires noticing capacity constraints: increasing work in progress can increase queues, conflicts, and integration cost. The competence includes choosing how many fronts to open and where human intervention really unblocks the process.

The DevEx framework proposes looking at developer experience together with data from engineering systems. Its application highlights feedback, cognitive load, and flow. These concepts help assess whether agents are freeing up attention or creating a new queue of interruptions. [F12]

### 3.6. Knowledge as a shared capability

A decision that exists only in someone's memory forces people and agents to rediscover it. Documenting reasons, constraints, and lines of investigation increases the capacity for independent work.

The knowledge-sharing chapter of *Software Engineering at Google* describes the costs of concentrated expertise and fragmented information, as well as the need to maintain documentation and train people. That foundation remains relevant: knowledge needs to be accessible, up to date, and interpretable. [F36]

Applied to the present, the guidance is concrete: a recurring discovery should find a stable home. That home might be the code, a test, an architectural decision, or a procedure. The criterion is its usefulness for the next piece of work, including when the author is not available.

### 3.7. Technical humility with decision-making ability

Working well with AI requires admitting gaps without outsourcing every decision. The engineer can investigate a new technology with the model's help and still distinguish what they have verified from what they are merely assuming.

It is particularly valuable to be able to say: “this was tested under these conditions; this property comes from the platform's contract; this point is still a hypothesis; this consequence needs a decision from the domain owner.” That precision makes it possible to move forward with less ambiguity.

The manifesto's analogy with leading a team is useful for delegation and coordination. In practice, the engineer also needs to design memory, access, continuity, and operational limits: these elements depend on the system that runs the agents. One cannot assume that an intent communicated once remains available in every run.

---

## 4. The competency map

### 4.1. Four decisions about one's own development

The proposed curriculum organizes competencies into four moves:

- **Preserve:** maintain the minimum mastery needed to understand the system and intervene.
- **Deepen:** invest more in capabilities whose judgment guides many delegated decisions.
- **Learn:** acquire new practices around context, tools, agents, and evaluation.
- **Deprioritize:** reduce time spent on repetitive execution and easily replaceable memorization.

These categories indicate marginal investment. A skill can remain necessary and, at the same time, deserve less practice in manual execution.

### 4.2. Main matrix

| Competency | Priority move | Present-day expression of excellence |
|---|---|---|
| Understanding of the user and the domain | Deepen | Identify the real need and formulate criteria that represent value. |
| Code reading and semantics | Preserve and deepen | Explain behavior, recognize inconsistencies, and investigate failures. |
| Architecture and interface design | Deepen | Define boundaries that enable evolution and independent execution. |
| Algorithms, data, and systems | Preserve with selective depth | Judge scale, consistency, cost, and the consequences of failures. |
| Debugging and investigation | Deepen | Produce distinguishable hypotheses and connect symptoms to causes. |
| Work specification | Learn more explicit practices | Turn goals into contracts, constraints, and evidence of completion. |
| Context engineering | Learn | Make relevant, reliable, and current information available at the right moment. |
| Delegation and orchestration | Learn | Split work, calibrate autonomy, and integrate results. |
| Testing and agent evaluation | Deepen and learn | Design evidence that detects relevant errors and measures consistency. |
| Security of tools and environments | Deepen and learn | Control authority, data, execution, and the reach of consequences. |
| CI/CD, observability, and operations | Deepen | Close the loop between change, validation, deployment, and real effect. |
| Communication and collective learning | Deepen | Make decisions and improvements usable by other people and agents. |
| Memorization and mechanical production | Deprioritize | Automate and look things up, keeping enough understanding to evaluate. |

This matrix is a proposal of the report, not a statistical classification of the sources. Its intent is to guide decisions about study and practice.

### 4.3. What changes relative to the previous center of gravity

The contrast below describes ways of organizing work. It does not claim that all engineers worked the same way a year ago.

| Previous center of gravity | Center of gravity suited to the manifesto's premise |
|---|---|
| Solving a task mainly through one's own execution | Making the task solvable by a guided, verifiable execution system |
| Knowing enough detail to produce quickly | Knowing enough principles and context to direct, discriminate, and correct |
| Reviewing everything with the same procedure | Distributing verification according to properties, risk, and evidence |
| Improving one's own speed | Improving the capacity of the flow and the team |
| Solving each difficulty again | Reducing recurrence through context, contracts, tools, and tests |
| Studying to expand one's implementation repertoire | Studying to expand domain mastery, delegation power, and the reach of decisions |

---

## 5. Fundamentals that must remain strong

### 5.1. Understanding code: semantics before memory

The engineer needs to read a piece of code and understand what it does, what state it modifies, what assumptions it relies on, and how it can fail. This requires familiarity with types, scope, mutability, error handling, resources, concurrency, and the execution model of the language relevant to their work.

This mastery makes it possible to select what to investigate and which controls to require. It does not presuppose a full human re-reading of everything the agents produce; section 7 describes how to distribute verification and attention.

AI can produce the syntax of an asynchronous routine. The judgment required includes noticing whether cancellation is propagated, whether a task is left orphaned, whether exceptions are lost, and whether resources are released. These problems require a mental model of execution.

**Practical criterion:** given new code, be able to predict an important behavior, create a case that confirms or refutes the prediction, and explain the result. You can use AI in the investigation; the understanding needs to become demonstrable.

The CS2023 curriculum, developed by ACM, IEEE-CS, and AAAI, already distinguished changing activities from enduring fundamentals: greater abstraction, comprehension, verification, and decomposition coexist with the need to evaluate algorithms and programs. It is curricular guidance from experts, published in 2024, and not a measurement of current model capabilities. [F14]

### 5.2. Algorithms, complexity, and representation

The study of algorithms should serve choice and evaluation. What matters is recognizing when a data structure changes the order of magnitude of the cost, when volume makes an implementation infeasible, and when an approximation changes the product's answer.

An engineer can delegate writing a search or a sort and still need to notice that composing two seemingly simple operations created quadratic cost. They also need to distinguish asymptotic performance from concrete costs: allocation, network, disk, cache, serialization, and contention can determine the observed behavior.

**Priority:** understand classes of problems and resource limits, use measurement, and examine adversarial cases. The number of algorithms one can recite from memory is a very limited indicator of this mastery.

### 5.3. Data modeling and correctness under concurrency

Data requires attention to meaning, identity, cardinality, invariants, authorization, history, and schema evolution. A query that runs without error can duplicate records in a `join`, mix customers together, or count the wrong entity. A transaction can be syntactically valid and still insufficient for a concurrent business rule.

The PostgreSQL documentation shows, for example, that `Read Committed` isolation works with per-statement snapshots and has specific behaviors in the face of concurrent updates. The choice of isolation level and constraints needs to match the intended invariant; “put it in a transaction” does not describe the whole solution. [F28]

**Practical criterion:** explain what happens when two requests arrive together, when one fails after writing, and when a migration needs to coexist with different versions of the application.

### 5.4. Distributed systems and side effects

Timeouts, retries, ordering, consistency, queues, load control, and partial failures remain a central part of many systems. The engineer should understand that the absence of a response does not mean the absence of an effect.

The Amazon Builders' Library describes idempotency as a contract that allows calls to be retried without adding the unwanted effect, with identification of intent and explicit handling of repeated requests. The relevant skill is defining that contract and verifying that it holds, including under concurrency. [F29]

This knowledge also applies to agents. If a tool fails after sending a request, retrying may duplicate an action. Tools that expose operation identifiers, queryable states, and clear retry rules enable more reliable recovery.

### 5.5. Architecture as the definition of useful constraints

Architecture should make responsibilities, dependencies, and hard-to-reverse decisions clear. In an environment with abundant execution, these boundaries help prevent local solutions from harming the whole.

It is worth going deeper into API contracts, separation of domain and infrastructure, compatibility, schema evolution, and component isolation. The goal is to enable independent changes and reduce the knowledge needed to perform each task correctly.

It is equally necessary to recognize abstraction without benefit. AI can produce layers, adapters, and services quickly; the engineer should demand a reason for their existence. An architecture needs to respond to observed needs or concrete constraints. The degree of formalization should track the lifespan and consequences of the system.

The treatment of time, scale, and trade-offs in *Software Engineering at Google* helps frame this judgment: building software includes sustaining its ability to change over time. [F35]

### 5.6. Debugging as causal investigation

Debugging well involves formulating hypotheses, seeking evidence that discriminates between them, and narrowing the problem down. AI expands the ability to surface causes, locate code, and prepare experiments. It is up to the engineer to keep the investigation connected to the real phenomenon.

If a request is slow, you need to separate CPU wait, I/O, locking, queuing, network, and dependencies. Adding a cache without understanding the cause can hide the symptom and introduce inconsistency. The useful question is which observation would change the current hypothesis.

**Mastery exercise:** before running an experiment, predict which signal should change if the hypothesis is correct. Then compare prediction and observation. This teaches you to recognize when a fix merely moved the problem elsewhere.

### 5.7. Operations and observability

The system needs to be understandable while running. Logs describe events; metrics make it possible to track aggregate behavior; traces relate the steps of an operation. OpenTelemetry provides a common foundation for producing and correlating these signals. [F31]

The engineer should know how to choose the relevant signals, interpret latency tails, distinguish error from success, and relate a change to the observed behavior. The monitoring chapter of Google's SRE book highlights latency, traffic, errors, and saturation, combining internal observation with external experience. [F32]

Generating a dashboard can be delegated. Knowing whether the dashboard answers the operational question remains technical judgment. This includes limiting sensitive data in telemetry and avoiding metrics whose cardinality makes observation expensive or hard to use.

### 5.8. Product, domain, and user experience

The easier it is to implement an idea, the greater the need to choose the problem well. The engineer needs to understand who uses the system, what task they are trying to accomplish, which constraints matter, and how to recognize improvement.

The HEART framework, presented by Google researchers, proposes translating product goals into user-centered signals and metrics. It is a reference for connecting engineering to observable outcomes. [F37]

This connection requires concrete skills: talking with users, observing usage, interpreting feedback, negotiating scope, and evaluating accessibility. A screen can look complete and still fail at keyboard navigation, in error states, or in making an important decision understandable. AI can explore alternatives; the success criteria need to represent real people.

---

## 6. New competencies for working with agents

### 6.1. Understanding the technical unit you work with

It is useful to distinguish **model**, **agent**, and **execution environment**. The model produces responses and tool-use decisions. The agent is the system that organizes those interactions over the course of a task. The environment provides files, processes, network, credentials, and resources. The term *harness* refers to the infrastructure that coordinates the loop and its interfaces.

A deficiency can lie in any layer. An agent may have sufficient reasoning ability and fail because it cannot run the test, received outdated documentation, or lost the state of the work. This distinction makes it possible to fix the right cause instead of just changing the wording of the request.

**Minimum expected fluency:** understanding the context window, information retrieval, tool use, variability between runs, time and cost budgets, permissions, state persistence, and environment limits. Knowing how to use one tool end to end is more useful than superficially knowing many names.

### 6.2. Specifying delegable work

A delegable task needs to clarify the outcome and the conditions under which it will be considered correct. The greater the intended autonomy, the more important it is to make explicit the ambiguities that would change the solution.

A good task contract answers:

1. **What outcome do we want, and for whom?**
2. **What behavior needs to exist?**
3. **Which invariants and constraints must be preserved?**
4. **Which sources of context are reliable?**
5. **What is the perimeter of the change?**
6. **What evidence will demonstrate completion?**
7. **What situation requires a human decision?**

This can fit in a few lines for a simple fix. For a broad change, it may require interface design, examples, domain decisions, and a migration plan. The goal is to reduce relevant uncertainty, not to produce documents for the sake of volume.

Spec Kit, published by GitHub in 2025, is an example of a tool that organizes specification, planning, tasks, and implementation. The durable capability is formulating verifiable intent; adopting that particular kit is a process choice. [F27]

You also need to know **what to leave open**. Specifying the latency limit and the contract of an operation may be necessary; choosing every class in advance can reduce the agent's freedom without improving the result. Good contracts constrain important properties and leave room to explore the implementation.

### 6.3. Context engineering

Context engineering is organizing the information available to the agent during the work: requirements, rules, code, documentation, tools, execution results, and task state. Anthropic describes this activity as continuous curation, with on-demand retrieval and maintenance of relevant information. [F17]

The practical application proposed here has three layers:

| Layer | Content | Question it answers |
|---|---|---|
| Stable orientation | Repository map, architecture, commands, and fundamental rules | “Where am I and how do I work here?” |
| Task context | Goal, decisions, relevant files, examples, and constraints | “What do I need to accomplish and preserve?” |
| Execution state | Changes, results, discarded hypotheses, open items, and next steps | “What has already happened and what is left?” |

The engineer should identify the source of authority for each piece of information. A current architectural decision, a hypothesis recorded during an investigation, and a suggestion found in an issue do not carry the same weight.

Each important document needs a purpose and some update mechanism. When there is a conflict, there should be a way to resolve it. Accumulating old and contradictory instructions increases the work of interpretation.

A high-value detail is making results retrievable: file paths, test identifiers, code version, and links to decisions. A summary that says “the tests passed” is less useful than a record that lets you locate which tests, against which version, and with what result.

### 6.4. Preparing the repository for independent execution

OpenAI's account of *harness engineering* describes a short orientation file that works as a map to more detailed documentation, along with isolated environments and access to execution signals. This case illustrates the importance of making the project understandable and operable by agents. [F06]

As a practical proposal, a prepared repository should let a new executor discover how to install dependencies, start the system, run the relevant checks, and understand architectural boundaries. It should also provide suitable test data and explain what to do when an external dependency is unavailable.

This does not require moving all of the company's knowledge into a single file. The work consists of building reliable paths to the necessary information and eliminating steps that depend on personal memory or repeated manual intervention.

**Readiness test:** can a team member unfamiliar with the module, or an agent in a fresh session, reproduce a failure and run the relevant validation using the available instructions? The difficulties they encounter are concrete opportunities for improvement.

### 6.5. Tools, APIs, CLIs, and MCP

The engineer should understand how to connect agents to the actions and information they need. This includes command-line tools, APIs, connectors, and protocols such as MCP, depending on the environment in use.

Interface design matters: clear names, typed arguments, understandable results, useful errors, and well-bounded operations make tools easier to use. Anthropic's article on tools recommends testing these contracts on realistic tasks and holding out cases for evaluating changes. [F18]

A deployment tool, for example, might require environment, version, and operation identifier, return a queryable state, and make it possible to distinguish “request accepted” from “deployment completed.” An interface that just runs a command and returns free text can make that distinction harder.

The criterion for adopting MCP or building your own tool is solving an integration need. An existing, well-documented CLI may be enough. The professional should know the options and weigh maintenance, authorization, observability, and ergonomics; there's no need to wrap every operation in a new framework.

### 6.6. Reusable procedures and skills

A *skill* can bundle instructions, scripts, examples, and resources for a type of work. The Agent Skills proposal published by Anthropic uses progressive loading of this information to specialize execution according to the task. [F19]

A good starting point is a recurring difficulty. If every migration requires the same delicate steps, they can become a verifiable procedure. If every performance investigation requires locating the same signals, a shared resource can reduce the setup.

A skill should have criteria for when to use it, inputs, expected outcome, and verification. It needs to be tested on representative cases and revised when the environment changes. A set of instructions that seems sensible but has never been exercised is still a process hypothesis.

It is useful to separate guidance from deterministic execution. When a transformation can already be performed by a reliable function or script, the agent can select and run that tool rather than regenerating its logic each time.

### 6.7. Decomposition, parallelism, and integration

The engineer needs to recognize dependencies before distributing tasks. Independent fronts can proceed in parallel; shared decisions that are still undefined need to be resolved or have a clear owner.

**Good candidates for parallelism:** investigating distinct subsystems, reviewing different risks, exploring architectural alternatives, and implementing modules against already-agreed interfaces.

**Situations that call for coordination care:** several agents changing the same infrastructure, incompatible versions of an API, dependent migrations, or a common cause that blocks every front.

In its April 2026 revision, *Towards a Science of Scaling Agent Systems* found performance to depend on the combination of architecture, task, and resources, including losses in poorly aligned configurations. The study offers an empirical reason to treat coordination as an engineering choice. [F21]

A useful practice is to define an owner for each change, integration contracts, and synchronization points. Separate worktrees or clones, each with its own branch, and isolated environments reduce file and execution collisions. Branches alone do not isolate two processes in the same working directory. Integration still needs to verify the semantics of the whole: two changes can compile separately and contradict the same business rule.

### 6.8. Managing continuity and the economics of execution

Prolonged autonomous work requires persistent state, stopping criteria, cost limits, and recovery mechanisms. The engineer needs to know when to resume a run, when to restart with better context, and when to ask for a missing decision.

In March 2026, Anthropic described an architecture with separate planning, generation, and evaluation for long-running application development. The account also shows that model improvements can make components of an earlier harness unnecessary. The implication is to revisit the process as the tools evolve. [F07]

As a design rule, record the goal, proven progress, decisions, blockers, and next action. Stop loops with no observable progress. An agent that repeats the same attempt needs a diagnosis, new information, or a different task.

The relevant cost includes inference, tools, CI, waiting, and human attention. The cheapest model per call can turn out expensive if it requires many corrections. The choice should consider cost per accepted result and quality across the real set of tasks.

---

## 7. Verification, testing, and evaluation: building trust at scale

### 7.1. Two different things need to be evaluated

**The software produced** needs to meet requirements and preserve important properties. **The agent-based process** needs to solve tasks consistently, with acceptable cost and intervention.

One run might produce a correct change after many attempts and hours of supervision. That validates the result but leaves a problem in the process. Another run might be fast and elegant and produce a wrong change. That is why software tests and evaluations of the agent system complement each other.

Anthropic's guide to *evals* distinguishes task, trial, trajectory, and final state, and recommends evaluating the combination of model and harness. It also stresses the need for multiple runs and for calibrating model-based graders. [F20]

### 7.2. Defining the correctness oracle

An **oracle** is the criterion used to decide whether a result is correct. It can be a mathematical rule, a contract, a data constraint, a reference behavior, or a structured human evaluation.

The engineer should identify where that criterion comes from. If implementation and tests are derived from the same incomplete interpretation, both can agree and still fail the real requirement. Asking another agent for a second opinion helps with exploration, but the strongest independence comes from evidence with different origins.

Example: an export endpoint should only include data from the authenticated customer. A test that checks “returned a CSV” covers a very small property. A scenario with two customers, similar data, and attempts to cross identifiers tests the authorization boundary that really matters.

**Operational question:** what relevant error would go unnoticed if this test were the only quality signal?

### 7.3. Choosing the form of evidence

The table below is a decision proposal, to be adapted to the risk and the domain.

| Evidence | Especially useful for | Limitation to acknowledge |
|---|---|---|
| Types and static analysis | Structural contracts, invalid usage, and certain classes of error | They do not demonstrate product intent or all runtime properties. |
| Unit tests | Local rules, calculations, and edge cases | They can miss relationships between components. |
| Integration and contract tests | Real database, queues, APIs, and service boundaries | They depend on representative environments and versions. |
| End-to-end tests | Essential journeys and observable behavior | They can be expensive to run and prone to flakiness. |
| Property-based tests | Invariants over many inputs and sequences | The chosen property must represent the correct rule. |
| Differential tests | Comparison with a reference implementation | The reference may have bugs or different semantics. |
| Mutation testing | Checking whether incorrect changes are detected | Cost and interpretation require careful selection. |
| Load measurement and profiling | Latency, memory, contention, and capacity | The scenario must represent the relevant load. |
| Observation during gradual rollout | Effect under real conditions | Detects problems after some exposure; requires containment. |

Properties and metamorphic relations can be particularly useful. In a lossless transformation, transforming and then reversing should preserve the data. In a search, adding a conjunctive filter to the same set, before pagination, should not enlarge the result set. The value comes from the relation tested and its conditions of validity.

### 7.4. The economics of testing need to be reconsidered

The manifesto observes that the lower cost of writing and maintaining tests may change earlier decisions about coverage. The competent application is to reassess the total cost of each strategy.

If generating tests has become cheap, you still have to pay for running them, investigating flaky failures, and maintaining environments. The team should expand evidence where that reduces risk or human work, while preserving fast feedback. It may be worth producing many more contract tests, adversarial cases, and critical journeys, as long as the result remains interpretable.

In the compiler experiment with parallel agents, Nicholas Carlini reports that his work concentrated on the environment, the verifiers, and the feedback; external references helped isolate problems for independent execution. It is a capability experiment, with limitations acknowledged by the author, and it illustrates the value of good verification conditions. [F22]

### 7.5. Human review changes its distribution

There is room to automate style checks, repetitive policies, local consistency, and many routine reviews. Human investment should migrate toward requirements, trust boundaries, changes without good evidence, and decisions with greater consequences.

This makes it possible to set policies by class of change. Updating documentation or performing a mechanically verifiable refactoring may warrant a different flow than modifying authorization or deleting data. Approval should correspond to the risk and to the quality of the controls available.

To reduce manual review sustainably, the team needs to know which defects its mechanisms detect, track the failures that slip through, and have recovery capability. The practical goal is to eliminate the need for repetitive inspection in well-controlled classes and concentrate judgment on the exceptions.

### 7.6. Building a small evaluation suite for the AI workflow

An initial proposal is to select representative real tasks: a localized fix, a change that crosses modules, an investigation, an interface change, a migration, and a case with an ambiguous requirement. There is no need to start with a large benchmark.

For each task, record: initial state, expected result, evaluation criteria, code version, agent configuration, time, cost, and interventions. Each attempt should start from a known, restored state, to avoid contamination by data, caches, or effects of a previous run. Include tasks that failed previously. Hold out some cases to evaluate changes without tuning the process directly to them.

Compare configurations under sufficiently similar conditions and repeat runs when variability could change the decision. Measure correct outcomes, cost, human time, regressions, and out-of-scope actions. A single favorable demonstration is a starting point for investigation.

The success narrated by the agent should be confirmed in the relevant artifact or state: file, tests, database, application, or deployment. The final record needs to distinguish checks that were run, checks that were impossible, and hypotheses still open.

---

## 8. Security and autonomy as engineering problems

### 8.1. Useful autonomy requires an effective perimeter

Autonomy expands the work done without continuous oversight. To sustain it, you need to control which actions can happen and which consequences they can reach.

The OWASP catalog for agentic applications includes risks related to goal hijacking, tool misuse, privileges, supply chain, and memory and context poisoning. It is an expert framework for risk analysis, not a guarantee of security obtained by completing a checklist. [F24]

The practical competence consists of modeling the path between **information received**, **agent decision**, **tool invoked**, **credential used**, and **effect produced**. That path reveals where trust changes and where a control needs to exist.

### 8.2. Untrusted content can influence privileged actions

An issue, a log, a document, or a tool response may contain text that tries to redirect the agent. This material needs to be treated as data to be interpreted within the task, preserving the authority of legitimate instructions and policies.

Security design should combine guidance to the model with external controls: authorization in the service, execution isolation, file restrictions, secret protection, and network egress control. Anthropic describes containment as a way to limit consequences even when a model decision fails. [F23]

A comment saying “don't expose secrets” does not prevent a process from reading a credential that is already in the environment. The stronger design avoids making that credential available when it isn't needed and limits what can be done with it.

### 8.3. Technical competencies that need to enter the repertoire

- **Identity and authorization:** differentiate user, agent, subagent, and tool; grant scopes appropriate to the task.
- **Isolated environments:** separate investigation and execution from production resources, according to the consequences of the operations.
- **Data management:** classify what can be sent to each service, record the purpose, and limit retention and exposure.
- **Supply chain:** verify the provenance of dependencies, scripts, extensions, and skills; control updates.
- **Traceability:** link request, actions, changes, and owner; preserve evidence useful for investigation.
- **Recovery:** stop execution, revoke access, revert reversible changes, and handle effects that require compensation.

These items constitute a practical synthesis. Concrete decisions depend on the organization's data, systems, and policies.

The MCP security documentation addresses problems such as improper token passthrough, confused deputy issues, and access scopes. Integrating through a standardized protocol does not eliminate the need to understand the authorization of each component. [F25]

### 8.4. Verifying the actual reach of controls

Controls have scope. The documentation for the GitHub Copilot firewall, for example, distinguishes processes started by the agent via Bash, MCP servers, setup steps, and processes external to the environment. In the version consulted, the firewall does not directly cover all of these routes. This detail shows why the engineer should verify the effective protection rather than infer it from the feature's name. [F26]

The same reasoning applies to file isolation, network restrictions, and branch protection. What actually prevents the operation? Who can change that rule? Does the control also apply to the subprocesses and integrations in use?

### 8.5. An autonomy matrix

The model below is a working proposal, not a normative classification.

| Situation | Appropriate autonomy as a starting point | Condition for expanding it |
|---|---|---|
| Research and analysis with permitted data | Independent execution, with references and a record of uncertainties | Quality of sources and adherence to the goal. |
| Bounded change in an isolated environment | Implement, test, and prepare a reviewable result | Reliable evidence of correctness and scope. |
| Routine, reversible, well-covered change | Merge or deploy through a previously authorized flow | Track record, automated controls, and observation of consequences. |
| Sensitive change to access, data, or contract | Prepare a proposal and evidence; explicit decision at the relevant point | Better containment and verification, commensurate with the responsibility involved. |
| Hard-to-reverse, far-reaching effect | Strong limits and a decision by an identified owner | Concrete demonstration of control; autonomy never based solely on verbal assurance. |

Approving every command can turn the engineer into a confirmation operator. The design should concentrate human decisions where they change the risk or resolve a material ambiguity. At other points, clear controls allow work to continue.

---

## 9. What deserves less investment — and what to put in its place

### 9.1. The shift needs to show up in the study agenda

Time for professional development is limited. Keeping all previous priorities and adding agents, context, evaluation, and product produces an impossible curriculum. **Adapting requires withdrawing investment from certain activities.**

The proposed criterion is to reduce effort on capabilities whose value depends mainly on repetitive execution or recall of details, and to increase effort on the capabilities that make it possible to formulate, verify, and sustain the result. This is an explicit time-allocation decision.

### 9.2. Deprioritization matrix

| Reduce investment in | Preserve enough to | Reinvest in |
|---|---|---|
| Memorizing signatures, options, and infrequent syntax | Read documentation, understand types, and recognize incompatible usage | Semantics, contracts, and rapid API exploration. |
| Manually producing CRUD, DTOs, adapters, and other repeated patterns | Understand the boundaries, validation, and effects of the implementation | Domain modeling, authorization, and invariants. |
| Training typing speed and shortcuts as the main advantage | Operate tools fluently | Clarity of intent, autonomous execution, and quality of feedback. |
| Memorizing framework recipes | Understand their execution model and main constraints | Diagnosis, integration, and evaluation of technology choices. |
| Reimplementing well-known algorithms as routine | Judge complexity, suitability, and adversarial cases | Data representation, performance, and correctness properties. |
| Hand-writing large volumes of repetitive tests | Understand test code and recognize an inadequate oracle | Risk coverage, independence of evidence, and fast feedback. |
| Doing human review of style and mechanical conventions | Define standards that have real consequences | Rule automation and review of higher-impact decisions. |
| Repeating environment setup and operational procedures | Diagnose the environment and know how to recover from failures | Reproducibility, self-service tools, and automation. |
| Writing descriptive documentation that can be extracted from code | Verify fidelity and currency | The reasons behind decisions, constraints, and context missing from the code. |
| Collecting languages just to lengthen a list of technologies | Navigate and intervene in the relevant environments | Selective depth and transfer of principles across systems. |
| Collecting models, extensions, and prompt formulas | Use the necessary options well and know their limits | Evaluation on real tasks and integration of a complete flow. |
| Polishing abstractions or style without demonstrable benefit | Maintain useful readability and consistency | Simplicity, compatibility, and maintenance cost. |
| Personally resolving every recurring exception | Intervene precisely when necessary | Eliminating causes and creating shared capability. |
| Following every micro-step and manually shuttling answers between chat and editor | Recognize blockers and relevant decision points | Asynchronous execution with contracts, progress logs, and intervention criteria. |

This matrix is an investment recommendation. It does not declare any activity universally useless. The minimum to preserve varies with the domain and the responsibility.

### 9.3. Syntax loses centrality; semantics should guide study

When learning a language, prioritize how it represents data, handles errors, manages resources, and executes concurrency. Use AI and documentation to recall syntax details. Short manual exercises remain useful when they reveal a behavior you need to understand.

The goal is no longer being able to produce any snippet from memory. It becomes recognizing intent, understanding consequences, and quickly discovering what you still need to know. This difference makes it possible to learn new technologies with greater reach without keeping every detail in memory.

### 9.4. Mechanical repetition should leave the productive routine

Boilerplate, predictable conversions, derived documentation, and mechanical adjustments are prime candidates for automation. Whenever possible, use generators, deterministic transformations, or agents with clear criteria, followed by the relevant checks.

Delegation should also reach new, technically demanding changes when the environment provides enough context, tools, and criteria to verify the result. The case in section 11 shows this transition. Complexity determines which conditions need to be built in order to delegate well.

It is worth examining your own week and identifying what was repeated. If an activity consumes time because no one has consolidated the procedure, automating it may have a greater return than studying yet another library. The gain is especially relevant when the improvement becomes available to the team.

### 9.5. Interview algorithms call for a contextual decision

Practicing algorithmic problems can serve a concrete hiring requirement or a gap in reasoning. That purpose should be explicit. Preparing for an interview format does not need to occupy the center of professional development indefinitely.

For excellence on the job, prefer exercises that require understanding data, recognizing complexity, measuring a limitation, and choosing a solution. Specialists in compilers, database engines, computer graphics, security, embedded systems, or performance infrastructure will have different needs for depth and direct execution.

### 9.6. Line-by-line review stops being the only standard

An engineer who delegates the implementation and then manually reconstructs the reasoning behind every line maintains a linear dependency between production and human attention. The path forward is developing controls that make it possible to evaluate properties, contracts, relevant changes, and observed results.

Detailed reading remains appropriate when it resolves a concrete doubt, investigates a failure, examines a sensitive boundary, or builds a new trust mechanism. For stable classes of changes, automation and sampling can reduce repeated work, as long as the team tracks what slips through and adjusts the policy.

### 9.7. Knowing every new thing is not a productive obligation

The professional needs a way to absorb relevant changes. This might involve a periodic review of the tools in use, trials of alternatives, and attention to changes that affect current work.

The question to ask of something new is: **what concrete limitation does it remove, on which tasks, and at what adoption cost?** If there is no answer, study can remain exploratory, with a small budget. Competence accumulates more when a person completes full cycles of work and learns from the results.

### 9.8. What should not lose priority by mistake

Deprioritizing manual execution requires preserving the ability to notice problems. It is especially worth protecting domain understanding, causal reasoning, data, security, communication, and quality of evidence.

There are also moments when writing a small program is the fastest way to understand a mechanism. That exercise has a pedagogical or investigative purpose. It can coexist with a productive routine in which most implementation is delegated.

A good study decision answers two questions: **does this increase my ability to delegate with quality? Does this expand the set of problems I can answer for?** If the answer to both is no, there is probably a better investment.

---

## 10. Specialization: what everyone needs to know and what depends on the job

### 10.1. The common core

Every engineer who uses AI professionally should be able to formulate tasks, provide context, operate tools, choose verifications, interpret results, control access, and learn from failures. They also need to maintain the fundamentals relevant to the systems they are responsible for.

This does not require building an agent runtime, training models, or mastering all of the machine learning infrastructure. Competent adoption starts with deep use of existing tools and with improving the development environment.

### 10.2. Three scopes of work

| Professional scope | Priority additional knowledge | Practical evidence of mastery |
|---|---|---|
| Engineer who develops software with AI | Context, delegation, verification, permissions, and delivery flow | Delivers a complete change with appropriate autonomy and reliable evidence. |
| Platform engineer for agents | Environments, integrations, identity, isolation, shared evaluation, and observability | Multiple teams carry out tasks with less setup and intervention. |
| Product engineer whose behavior depends on AI | Behavior evaluation, information retrieval, data quality, latency, cost, and failures of the system in use | Demonstrates success on user tasks and tracks regressions in production. |

For the third scope, techniques such as RAG, model fine-tuning, and specialized orchestration should be learned when they solve an observed problem. Their value depends on requirements for freshness, accuracy, access, data distribution, and cost. An implementation of these techniques also needs its own evaluation.

### 10.3. Selective depth

A sustainable education combines enough breadth to follow a delivery end to end with depth in the areas where the engineer needs to exercise hard judgment. The data specialist deepens integrity, queries, and schema evolution; the frontend specialist, interaction, accessibility, and perceived performance; the platform specialist, reliability and isolation; the systems specialist, resources and concurrency.

AI makes it possible to broaden one's area of work, but professional commitment should remain proportional to the ability to verify consequences. When a task crosses an area of impact that no one masters sufficiently, the competent response includes bringing in the appropriate expertise and recording the decision.

---

## 11. A complete technical case: inventory reservation under concurrency

**Illustrative scenario created for this report.** The goal is to show how the competencies combine; the examples do not constitute a production-ready implementation.

An application needs to let a customer reserve units of an item. There are multiple organizational customers (tenants), simultaneous requests, retries after timeouts, and an event that notifies another service of the reservation's creation.

### 11.1. The work starts with the contract

Asking to “create a reservation endpoint” leaves important decisions open. Before delegating, the engineer identifies the invariants:

- The available quantity can never become negative.
- During the contracted key-retention window, repeating the same intent must produce a single logical reservation.
- Reusing the same key with different content must produce an explicitly defined result.
- A customer can only act on their own data.
- A partial failure must not produce a reservation without traceability of the corresponding event.
- The system must allow the outcome to be discovered when the connection drops after the database commit.

The engineer also settles with the domain whether the reservation expires, how it is canceled, and how long the idempotency key remains valid. The contract must say what happens when the key expires and when the reservation expires before it: recovering the original operation and starting a new intent with a new key are distinct behaviors. These decisions change the modeling.

A condensed contract might be:

```yaml
goal: "Reserve units of an item for the authenticated customer"
scope:
  includes: [reservation API, persistence, event, tests, telemetry]
  excludes: [payment, changes to the fulfillment flow]
invariants:
  - "availability >= 0"
  - "one logical reservation per customer and key during the retention window"
  - "same key with a different payload produces a conflict"
  - "no access to another customer's data"
evidence:
  - "test with concurrent requests competing for the last item"
  - "retry test after commit and before the response"
  - "isolation test between customers"
  - "event publication recovery test"
pending_decisions:
  - "expiration policy for the reservation and the key"
```

The fields are an illustrative template. The contract is only ready for full implementation once the pending items that affect semantics have been resolved.

### 11.2. The engineer defines the atomicity boundary

A naive solution reads the availability and then writes the reduction. Two requests can observe the same stock and act on a premise that is no longer true.

For an item represented by a single row, a conditional operation can be part of the solution:

```sql
-- Illustrative fragment: quantity must be validated as a positive integer.
-- The customer's identity comes from authentication, not from the request body.
UPDATE inventory
SET available = available - :quantity
WHERE tenant_id = :authenticated_tenant
  AND item_id = :item_id
  AND available >= :quantity
RETURNING available;
```

In PostgreSQL, the semantics of concurrent updates under `Read Committed` include re-evaluating the condition against the updated version of the row after waiting for a concurrent transaction. It is this documented property, together with the schema constraints, that should ground the reasoning; the visual shape of the query does not prove its adequacy. [F28]

The fragment **does not on its own solve** idempotency, reservation creation, full authorization, expiration, or event publication. One possible design guarantees a single inventory row per `(tenant_id, item_id)` and uses a unique constraint on `(tenant_id, idempotency_key)` in the operations log. Key coordination, the conditional decrement, the reservation, the retrievable result, and the outbox insert all take part in the same transaction.

The retry path queries the committed result and compares the relevant parameters. Concurrency handling needs to distinguish a conflict, an operation not yet committed, and a completed result, without allowing a second effect. The contract also defines whether refusals, such as insufficient stock, stay bound to the key or allow a new attempt. This is a design proposal for the example, whose implementation requires its own validation.

The retry contract also needs to distinguish the same intent from a different operation with identical parameters. The explicit-identifier approach presented by AWS helps formulate this aspect. [F29]

### 11.3. The event requires handling partial failure

Writing the reservation and publishing directly to a broker are two distinct operations. If one happens and the other fails, there can be divergence.

One possibility is to write an event to an *outbox* in the same transaction as the reservation and use a publisher to deliver it later. This pattern addresses the boundary between persistence and publication. Delivery may repeat messages; consumers need to handle duplicates according to the contract. The AWS documentation describes the pattern and its conditions. [F30]

The engineer decides whether this design matches the requirements and defines how to observe delays, retry publication, and recognize processed events. AI can implement each component and produce alternatives. The coherence of the contract between them remains an engineering decision.

For the example, each event has a stable identifier. The consumer can record that identifier and apply its effect in the same local transaction, or perform an operation whose contract is idempotent. If the effect happens in another service, the guarantee also depends on that service. The outbox alone does not provide exactly-once effect at the destination.

### 11.4. The work is split along already-defined interfaces

One possible organization would be:

| Front | Deliverable | Integration condition |
|---|---|---|
| Investigation | Map of the existing code and inventory rules | Verified references to files and current behavior. |
| Implementation | API and persistence changes | Agreed idempotency contract and schema. |
| Verification | Concurrency, retry, and isolation scenarios | Criteria derived from the invariants and use of a real database. |
| Operations | Telemetry, migration, and deployment plan | Compatibility with the environment and defined failure signals. |

These fronts can be people, agents, or combinations. The split should only be parallel where dependencies allow. The initial investigation may reveal that a domain decision needs to be resolved before any implementation.

### 11.5. The evidence goes beyond the happy path

The engineer asks for observable results for specific scenarios:

1. Two requests compete for the last unit: only one gets the reservation.
2. Two requests use the same key: there is a single effect on inventory.
3. The same key reappears with a different quantity: the specified conflict occurs.
4. The process terminates after the commit and before the response: the retry recovers the defined result.
5. A customer tries to reference another customer's item: there is no improper exposure or mutation.
6. The broker accepts the event, but the publisher terminates before recording the publication: resumption may repeat the message; the consumer's deduplication or idempotency prevents a new effect.
7. The reservation expires during concurrent operations: the agreed rule preserves consistency.

Isolated mocks can help with local tests, but they do not demonstrate the database's locking and isolation behavior. The relevant tests should exercise that behavior, coordinating the relevant sequence of operations with barriers or synchronization points. Simply firing requests at the same time may fail to reproduce the intended race. When feasible, introducing a version deliberately vulnerable to the race makes it possible to confirm that the test detects the intended defect.

### 11.6. The result needs to be deployable and observable

The delivery includes the change, the compatible migration, the relevant tests, and the operational signals. The evidence should identify the validated version. If integration with another change alters the behavior, the corresponding validation needs to be repeated on the integrated result.

For a gradual rollout, one can monitor reservation conflicts, latency, errors, outbox delays, and invariant divergences. Abort conditions should be defined before exposure. Data changes require their own care: rolling back the binary does not automatically undo a mutation that has already been persisted.

The chapter on *canarying* from Google's SRE Workbook offers a reference for combining release automation, small changes, and evaluation of a version before widening its exposure. [F33]

### 11.7. Where the engineer's competence lay

The biggest human contribution lay in defining the intent, recognizing concurrency and partial failures, choosing the contracts, separating fronts, demanding independent evidence, and preparing for operations. The implementation was a field of delegable execution within those conditions.

When finished, the engineer records the useful learnings: an example concurrency test, the idempotency policy, a migration procedure, and the diagnostic signals. The next similar task starts from a better position.

---

## 12. From individual productivity to delivery flow

### 12.1. Local acceleration needs to cross the whole system

Consider a **fictitious numerical example**: a delivery takes 100 hours of elapsed time, of which 40 correspond to implementation and 60 to decisions, waiting, integration, and validation. If implementation drops to four hours and everything else stays the same, the delivery will take 64 hours. A tenfold speedup in that stage produces roughly a 1.56× speedup overall.

The calculation is purely illustrative and assumes sequential stages. It shows why the engineer needs to see where time is being consumed. The next improvement may lie in test environments, contracts between teams, CI capacity, or product decisions.

DORA's AI Capabilities Model identifies seven capabilities associated with better outcomes with AI: a clear organizational stance, a healthy data ecosystem, AI access to internal data, version control practices, small batches, user focus, and quality internal platforms. The model reinforces that the collective environment shapes the results. [F04]

### 12.2. A small dashboard with useful questions

The dashboard proposed below combines outcome and process measures. There is no need to instrument everything before starting; select what answers the current bottleneck.

| Question | Possible measure | Use in decision-making |
|---|---|---|
| Can the user accomplish their task better? | Journey success, time to complete, errors, and feedback | Prioritize work that produces value. |
| Where does delivery wait? | Queue time and execution time per stage | Find the flow bottleneck. |
| Is the change sustainable? | Escaped defects, rework, regressions, and incidents | Adjust controls and architecture. |
| Is autonomy increasing? | Human intervention time per class of task | Identify repetitive supervision that can be eliminated. |
| Is the total cost appropriate? | Cost per accepted change, including review and infrastructure | Compare models and processes by outcome. |
| Has the gain become collective? | Reuse of procedures and reduction of recurring failures | Prioritize shared improvements. |

For delivery indicators, DORA's current guidance presents **five metrics**: time from commit to production (*change lead time*), deployment frequency, failed deployment recovery time, the proportion of deployments requiring immediate intervention, and the proportion of unplanned deployments resulting from incidents (*deployment rework rate*). They should be contextualized by application or service, avoiding artificial comparisons between different kinds of work. [F38]

The SPACE framework also guides measuring productivity across several dimensions, including satisfaction, performance, activity, collaboration, and efficiency. This approach helps prevent token consumption, commits, or code volume from becoming the purpose of the work. [F11]

### 12.3. Measuring cost without hiding human attention

An illustrative operational formula is:

```text
cost per accepted change =
  (cost of models and tools
   + cost of execution and validation infrastructure
   + cost of human time for preparation, review, and correction)
  / number of accepted changes in a comparable class
```

It does not replace measures of value, quality, and consequence. It serves to reveal that a configuration that is cheap per token may require more rework, and that a more expensive configuration may free up enough human time to make up for it.

The classes need to be comparable: fixing a piece of text and migrating a database have different profiles. It is also advisable to track the period after delivery to capture failures and fixes that did not appear at the moment of acceptance.

Record calendar time, agent time, and human effort separately. Concurrency changes the relationship between them. An agent can work for hours while the person handles another request; adding the times together as if they were a sequential activity produces a misleading measure.

### 12.4. Turning recurring failure into improvement

A simple procedure for the team:

1. Record the failure with the task, configuration, and evidence.
2. Distinguish ambiguous requirement, inadequate context, environment, tool, verification, and model limitation.
3. Choose the simplest intervention that addresses the cause.
4. Re-run a case that reproduced the failure.
5. Share the improvement and watch for recurrence.

Possible outcomes include a regression test, an API constraint, a usage example, a documentation update, or a clearer tool. The growth of instructions should respond to real need; obsolete guidance also needs to be removed.

This practice extends an engineering tradition already expressed by SRE: reducing repetitive operational work by eliminating its cause. AI makes it more accessible to build automations, but it is still necessary to choose where they produce benefit. [F34]

### 12.5. Organizational responsibilities

An engineer can improve their local context, create checks, and share procedures. Some conditions require institutional support: suitable environments, authorized access, budget, CI capacity, integration with internal data, and criteria for professional evaluation.

Leadership should recognize work that increases collective capacity, even when it reduces the visible volume of intervention by the person who did it. This includes useful documentation, infrastructure, training colleagues, and eliminating recurring tasks.

The 2025 study *The SPACE of AI* gathered responses from more than 500 developers along with qualitative observations, highlighting the role of organizational support and peer learning. These results are consistent with the collective dimension of the manifesto. [F13]

An adoption initiative should have an owner for the flow, prioritized problems, and tracked outcomes. Distributing tools without solving access, integration, and verification leaves an important part of the potential with no path to reach the user.

---

## 13. Learning with AI while preserving judgment

### 13.1. Production and learning have different goals

When producing familiar work, heavy delegation may be the right choice. When a gap compromises your ability to evaluate, the activity needs to include deliberate learning.

A 2026 experiment with 52 engineers, mostly junior, examined learning of the Trio library. The average score on the post-test was 50% in the AI group and 67% in the non-AI group: a difference of **17 percentage points**. The small difference in time was not statistically significant. The study measures immediate learning on a limited task. The analysis of usage modes suggests value in interactions aimed at understanding, but those modes were not separately randomized. [F15]

The practical guidance is to design AI use according to the goal. Receiving a solution and understanding a solution are different outcomes that need their own criteria.

### 13.2. A learning cycle that makes use of AI

The method below is a proposal of this report:

1. **Choose a concrete gap.** Use something that affected a recent decision: isolation, cancellation, caching, authorization, accessibility, or profiling.
2. **Write down a prediction.** Before consulting the answer, describe the expected behavior and the reasons.
3. **Use AI as a laboratory.** Ask for small examples, variations, counterexamples, and explanations connected to your system.
4. **Run and observe.** Compare the prediction with concrete results.
5. **Rebuild the explanation.** Use your own words and make the conditions of validity explicit.
6. **Solve a variant.** Change inputs, scale, or type of failure to test the transfer of knowledge.
7. **Produce a useful asset.** Turn the discovery into a test, decision note, or procedure that helps with the work.

You can ask for gradual hints instead of a complete fix. You can also ask the model to critique an explanation you wrote. What matters is that there be some demonstration of understanding that does not depend on repeating the answer you just received.

### 13.3. A sustainable study agenda

Organize study into three levels:

- **Durable fundamentals:** reasoning about systems, data, algorithms, security, and product.
- **Operational practices:** specification, context, delegation, verification, and flow.
- **Current tools:** features that let you carry out those practices better.

The first two levels guide which tools deserve attention. If your biggest limitation is understanding concurrency, switching editors probably won't close the gap. If you understand the domain but manually repeat every configuration, improving the environment may be the most useful investment.

One or two short sessions of deliberate learning per week can be a starting point, adjusted to availability. This cadence is a suggestion, not a scientifically optimal frequency. The indicator of progress is being able to explain, predict, detect, and correct something that previously depended on trusting the model's answer.

### 13.4. How to train people who are starting out

Early career development should include AI from the start, with tasks that make the learner's reasoning visible. A small, complete project makes it possible to observe requirement, implementation, test, deployment, and effect, preserving the relationship between the parts.

The mentor can ask the person to formulate the contract before generation, anticipate a failure case, explain a decision, and diagnose a variant. AI can help in all of these steps, but the evaluation should verify what the engineer has come to understand and control.

If mechanical tasks are automated, training needs to create experiences of judgment on purpose. This includes analyzing incidents, testing hypotheses, talking with users, and taking part in decisions of appropriate scope. Progression happens through demonstrated responsibility, not through the volume of code produced.

---

## 14. A 90-day development plan

This roadmap is an adaptable proposal, not a promise of proficiency in three months. Use a real project, with authorized access and controlled impact. The phases can overlap; the criterion for advancing is the evidence obtained.

### Days 1–15: establish a complete flow and a baseline

Choose one main tool and learn to operate context, execution, resumption, and limits. Select a few real tasks and record where you intervened, how much time was consumed, and which checks supported the delivery.

Talk with a user or product owner to choose an improvement with recognizable value. Reproduce a failure or a limitation and complete a small delivery with AI, including testing and observing the result.

**Phase deliverables:** task log; first completed change; list of the main limitations of the flow; one personal technical gap identified.

**Criterion for advancing:** you can explain the goal, demonstrate the result, and distinguish the agent's contribution from your interventions.

### Days 16–30: make the work more delegable

Improve the repository map and the setup and validation commands. Use task contracts with invariants and completion criteria. Turn a repeated instruction into a shared resource, removing outdated information that gets in the way.

Hold a deliberate session on the chosen gap. Complete a variant that requires applying the understanding, and record what changed in your judgment.

**Phase deliverables:** short project orientation; tested task template; reusable procedure; comprehension exercise.

**Criterion for advancing:** another person, or a new agent session, can repeat the process without depending on verbal guidance from the author.

### Days 31–60: increase autonomy with evidence

Build a small collection of tasks to evaluate the flow. Include previous errors, edge cases, and tasks with different kinds of difficulty. Compare two configurations when that answers a real question, keeping criteria fixed.

If there is a limitation that parallelism could solve, try it on a decomposable task, defining interfaces, isolation, and integration responsibility. Check permissions, accessible data, and recovery procedures. Automate one class of repetitive checks.

**Phase deliverables:** initial evaluation suite; automated repetitive checks; simple autonomy policy by class of change. Add a comparative log and an integrated parallel task if those experiments were useful for the chosen problem.

**Criterion for advancing:** there is a demonstrable reduction in repetitive intervention, accompanied by evidence of quality and control of consequences.

### Days 61–90: improve the team's system

Choose an observed bottleneck: review queue, environment startup, CI, fragmented context, or manual validation. Implement an improvement and track its effect. If it depends on another team, write a proposal with the problem, impact, evidence, and required investment.

Share the procedure and train at least one other user of the flow. Reassess the value delivered from a product perspective. Remove automations and instructions that have not proven useful.

**Phase deliverables:** adopted flow improvement; contextualized before/after comparison; usage documentation; next development priority.

**Criterion for advancing:** the benefit survives your absence and shows up in other people's work or in a better result for the user.

### How to adapt it without turning the roadmap into bureaucracy

If you are just starting out, reduce the scope of the system and increase the room for explaining and experimenting. If you are already senior, choose a bottleneck that affects other people. In higher-consequence areas, concentrate the work in isolated environments until the relevant controls have been demonstrated.

The plan can be repeated in cycles. In each cycle, eliminate some repetitive execution and expand one capacity for judgment. That combination keeps the transition connected to the work.

---

## 15. Recognizing excellence at different career levels

### 15.1. The breadth of responsibility remains decisive

The profiles below are a development proposal, not a standardization of job titles.

| Profile | Responsibility to develop | Evidence of excellence |
|---|---|---|
| Early career | Understand and complete bounded tasks with AI | Explains behavior, detects edge cases, and demonstrates that things work. |
| Mid-level | Drive a feature through the delivery cycle | Formulates the contract, coordinates execution, validates, and monitors operation. |
| Senior | Resolve ambiguities and expand the team's autonomy | Translates judgment into architecture, checks, and reusable context. |
| Staff or principal | Improve decisions and flow across teams | Removes structural bottlenecks and creates shared capabilities with observed effect. |
| Engineering leadership | Create conditions, priorities, and incentives | Provides infrastructure, training, accountability, and metrics consistent with outcomes. |

A senior engineer can demonstrate growth by producing fewer manual reviews because they created better controls. A beginner can demonstrate growth by producing a smaller project that they understand and can operate. The number of agents used does not determine seniority.

### 15.2. Self-assessment rubric

Use the scale to evaluate each dimension on a real task:

**AI can be used at every level. The scale measures autonomy in driving and evaluating the work; “guidance” means the additional support needed to exercise that judgment.**

- **0 — Dependence:** I cannot drive or evaluate this part.
- **1 — Assisted execution:** I can make progress with frequent guidance.
- **2 — Bounded autonomy:** I can complete familiar situations and recognize limits.
- **3 — Judgment:** I can handle ambiguities, investigate failures, and justify choices.
- **4 — Shared capability:** I can improve the process and enable others to do better.

| Dimension | Assessment question |
|---|---|
| Product and domain | Can I explain why the change matters and how to recognize value? |
| Specification | Did I make behavior, invariants, limits, and completion explicit? |
| Fundamentals | Can I predict consequences and notice technical inconsistencies? |
| Context | Does the agent find sufficient, reliable, and current information? |
| Delegation | Does the work progress without depending on repetitive oversight? |
| Verification | Do I know which errors my evidence detects and which it leaves open? |
| Security | Do I know the reach of the access granted and the consequences of the operations? |
| Operations | Can I observe, diagnose, and recover the change in use? |
| Learning | Do I demonstrate understanding that transfers to new situations? |
| Collective effect | Does my improvement help other people without depending on my presence? |

Do not add up the scores as if they formed a scientific measure of professional worth. Use the distribution to choose the next development experience and to identify gaps that are incompatible with your current responsibility.

### 15.3. A portfolio suited to the new role

A professional portfolio can present a problem, a solution contract, architectural decisions, division of work, validation evidence, and observed effect. It should show the role the engineer played and the limits they recognized.

A good demonstration includes a failure that was found and the way it changed the process. It also distinguishes prototype, experiment, and system in operation. This makes it possible to evaluate discernment and delivery capability, beyond the appearance of the artifact.

For interviews and internal training, a useful activity is to propose a change with AI and introduce a variation: concurrency, a timeout, greater volume, or a conflicting requirement. What is observed is how the person clarifies the situation, chooses evidence, and adapts the solution. The activity should be adjusted to the domain and is not a validated psychometric test.

---

## 16. An operational definition of the excellent engineer

The excellent engineer of the present **converts relevant problems into verifiable outcomes and increases the capacity of the system that performs that conversion**.

They start with AI execution wherever it can take on the work, make intent explicit, and prepare the conditions for autonomy. They use technical depth to choose constraints, recognize failures, and support decisions. They learn to produce evidence proportional to risk and to concentrate attention on the points where their judgment changes the outcome.

Their competence also shows in what no longer consumes time: automated mechanical steps, failures that stop recurring, knowledge that becomes accessible, and interventions that are no longer necessary. The team comes to do more useful work without continually depending on the memory and availability of a single person.

The opportunity described by the manifesto is to expand the reach of what can be built. An engineer can explore more ideas, understand more systems, and bring more solutions into reality. To take advantage of this capacity, they need to deliberately reorganize their own learning: reduce replaceable execution, deepen judgment, and turn experience into better working conditions for people and agents.

---

## 17. References and further reading paths

**All sources were consulted on November 1, 2026.** Publication dates and data-collection dates are distinguished where relevant. Documentation pages without an explicit date are identified as current documentation. The identifiers `[F01]` to `[F39]` are links to the original sources.

### 17.1. Premise and attribution

- **[F01] Butler, Bart — “Proton’s AI manifesto for software engineering”. Proton, November 1, 2026.** Public source of the manifesto provided by the user. A position and organizational guidance text; not a productivity study.
- **[F02] Proton — “Bart Butler”. Author's official page, current.** Verification of the attribution and the CTO title.

### 17.2. Changes in work, productivity, and organization

- **[F03] DeBellis, Storer, Harvey et al. — “DORA 2025 State of AI-assisted Software Development Report”. DORA/Google, 2025.** Qualitative research and survey on AI and software development.
- **[F04] Storer and DeBellis — “Introducing the DORA AI Capabilities Model”. Google Cloud, September 23, 2025.** The researchers' presentation of the organizational capabilities associated with outcomes.
- **[F05] Baolin and Harvey — “Balancing AI tensions: Moving from AI adoption to effective SDLC use”. DORA, March 10, 2026.** Thematic analysis of engineers' responses; useful for investigating shifts in effort.
- **[F06] Lopopolo, Ryan — “Harness engineering: leveraging Codex in an agent-first world”. OpenAI, February 11, 2026.** Vendor engineering account of agent-driven execution and environment preparation.
- **[F07] Rajasekaran, Prithvi — “Harness design for long-running application development”. Anthropic, March 24, 2026.** Development experience with planning, generation, and evaluation.
- **[F08] Anthropic Economics — “Agentic coding and persistent returns to expertise”. June 16, 2026.** Observational study of sessions; useful for understanding domain expertise and division of labor.
- **[F09] Cui, Demirer, Jaffe, Musolff, Peng, and Salz — “The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers”. June 2025.** Field experiments presented by the authors at Microsoft Research.
- **[F10] Becker et al. — “We are Changing our Developer Productivity Experiment Design”. METR, February 24, 2026.** Methodological update on selection, measurement, and simultaneous work with agents.
- **[F11] Forsgren et al. — “The SPACE of Developer Productivity: There’s more to it than you think”. ACM Queue, February 2021.** Multidimensional productivity framework; authors' page at Microsoft Research.
- **[F12] Noda and Tacho — “Applying the DevEx framework”. March 1, 2024.** The authors' guidance on application. Complements the [original article “DevEx: What Actually Drives Productivity”](https://getdx.com/research/devex-what-actually-drives-productivity/), by Noda, Storey, Forsgren, and Greiler, published May 3, 2023.
- **[F13] Houck et al. — “The SPACE of AI: Real-World Lessons on AI’s Impact on Developers”. Microsoft Research, August 2025.** Mixed-methods study on experience, productivity, and team adoption.
- **[F38] Harvey, Nathen — “DORA’s software delivery performance metrics”. DORA, current documentation.** Official definitions of the five metrics and guidance on contextualized use.
- **[F39] Anthropic Engineering — “Redesigning source control at Anthropic”. October 13, 2026, updated October 15, 2026.** Account of infrastructure and version control under an exceptional AI-driven workload.

### 17.3. Training, fundamentals, and judgment

- **[F14] ACM, IEEE Computer Society, and AAAI — “Generative AI and the Curriculum”, CS2023 section. January 2024.** Curricular guidance on changing activities and enduring fundamentals.
- **[F15] Anthropic — “How AI assistance impacts the formation of coding skills”. January 29, 2026.** Write-up of the Shen and Tamkin experiment on immediate learning with AI assistance.
- **[F16] Lee et al. — “The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers”. CHI, April 2025.** Correlational survey on critical effort and confidence.
- **[F35] Winters, Titus — “What Is Software Engineering?”. In Software Engineering at Google, 2020.** Reference on time, scale, and engineering trade-offs.
- **[F36] Chen and Barolak — “Knowledge Sharing”. In Software Engineering at Google, 2020.** Reference on collective learning, documentation, and distribution of expertise.
- **[F37] Rodden, Hutchinson, and Fu — “Measuring the User Experience on a Large Scale: User-Centered Metrics for Web Applications”. CHI, 2010.** Presentation of the HEART framework and user-oriented metrics.

### 17.4. Context, tools, agents, and evaluation

- **[F17] Anthropic — “Effective context engineering for AI agents”. September 29, 2025.** Practices for organizing and maintaining context during execution.
- **[F18] Anthropic — “Writing effective tools for agents — with agents”. September 11, 2025.** Design and evaluation of tool interfaces.
- **[F19] Anthropic — “Equipping agents for the real world with Agent Skills”. October 16, 2025, updated December 18, 2025.** Organization of reusable instructions, resources, and scripts.
- **[F20] Anthropic — “Demystifying evals for AI agents”. January 9, 2026.** Methodology for evaluating tasks, runs, trajectories, and outcomes.
- **[F21] Kim et al. — “Towards a Science of Scaling Agent Systems”. arXiv, version 3, April 8, 2026.** Experimental preprint on coordination and alignment between architecture and task structure. Citing this specific version avoids mixing numbers from earlier revisions.
- **[F22] Carlini, Nicholas — “Building a C compiler with a team of parallel Claudes”. Anthropic, February 5, 2026.** Capability experiment and account of testing, environment, and division of labor.
- **[F27] Delimarsky, Den — “Spec-driven development with AI: Get started with a new open source toolkit”. GitHub, September 2, 2025.** Methodological proposal and presentation of Spec Kit.

### 17.5. Security and operational limits

- **[F23] Anthropic — “How we contain Claude across products”. May 25, 2026.** Security account of isolation, access limits, and containment.
- **[F24] OWASP GenAI Security Project — “OWASP Top 10 for Agentic Applications for 2026”. December 9, 2025.** Expert framework. Both the overview page and the downloadable document were consulted.
- **[F25] Model Context Protocol — “Security Best Practices”. Documentation for version 2026-07-28.** Technical guidance on identity, authorization, and integration risks.
- **[F26] GitHub Docs — “Customizing or disabling the firewall for GitHub Copilot”. Current documentation.** Concrete example of the limits and coverage of a network egress control.

### 17.6. Data, reliability, and operations

- **[F28] PostgreSQL — “Transaction Isolation”. Documentation for version 16, section 13.2.** Isolation semantics and concurrent operations used in the technical example. The reference is explicitly to this version.
- **[F29] Featonby, Malcolm — “Making retries safe with idempotent APIs”. Amazon Builders' Library, no explicit date.** Experience designing retry contracts and identifying intent.
- **[F30] AWS Prescriptive Guidance — “Transactional outbox pattern”. Current documentation.** Boundary between database writes and publication, with considerations about duplicates.
- **[F31] OpenTelemetry — “Signals”. Current documentation.** Reference for traces, metrics, logs, and observability signals.
- **[F32] Ewaschuk, Rob — “Monitoring Distributed Systems”. In Site Reliability Engineering, Google, 2016.** Fundamentals of monitoring and signal interpretation.
- **[F33] Google — “Canarying Releases”. In The Site Reliability Workbook, 2018.** Release automation and gradual rollout with evaluation.
- **[F34] Google — “Eliminating Toil”. In The Site Reliability Workbook, 2018.** Identifying and reducing repetitive operational work.

### 17.7. Suggested reading paths

**To change your own practice:** manifesto [F01], context [F17], specification [F27], and evaluation [F20]. Pair the reading with a real delivery.

**To expand the team's capacity:** DORA [F03] [F04], metrics [F38], DevEx [F12], and knowledge sharing [F36]. Choose a bottleneck and track its effect.

**To exercise technical judgment:** curriculum [F14], skill formation [F15], and sources on fundamentals relevant to your system, such as [F28] [F29] [F32]. Solve variants and investigate failures.

**To increase autonomy with control:** agent security [F23] [F24], integration [F25], and coordination architecture [F21]. Assess the concrete environment before expanding permissions.

---

## 18. Appendices: working templates and glossary

The templates below were created for this report. Adapt them to the size and consequences of the task; fields that don't help a decision can be removed.

### Appendix A — Task contract for agents

```text
Problem and user:
  What need or failure should be resolved? For whom?

Expected result:
  What observable behavior should exist upon completion?

Reliable context:
  Which files, documents, contracts, and examples should guide the work?
  Which version or initial state is in use?

Invariants:
  What must remain true, including under failure?

Scope:
  What may change? Which decision or access requires another owner?

Evidence:
  How will behavior, integration, and consequences be verified?
  Which risks require specific cases?

Execution:
  What resources are available? What is the budget and stopping condition?
  How will progress be recorded and the task resumed?

Completion:
  Deliver the change, evidence tied to the version, limits, and open items.
```

### Appendix B — Contents of a short repository map

| Information | Expected content |
|---|---|
| Purpose | What the system does and which users it serves. |
| Navigation | Where the relevant modules, contracts, and decisions live. |
| Setup | How to get a reproducible environment with appropriate data. |
| Execution and validation | Real, maintained commands to start, test, and investigate. |
| Limits | Dependency rules, security, and sensitive changes. |
| Evidence | How to record results and identify the validated version. |
| Continuity | Where task state, decisions, and known problems are kept. |

The map should point to the details. Replicating all the content across several files creates more places to maintain and reconcile.

### Appendix C — Failure and flow improvement log

```text
Task and configuration:
Observed symptom:
Reproducible evidence:
Expected result:

Investigated cause:
  requirement / context / environment / tool / model / verification / other

Chosen intervention:
  minimal change that addresses the cause

Validation of the intervention:
  case that used to fail; current result; conditions verified

Shared knowledge:
  test, tool, document, or procedure changed

Follow-up:
  owner; recurrence signal; condition for revising or removing the rule
```

### Appendix D — Evidence-driven review of a delivery

Use these questions to locate gaps, adjusting the depth to the change:

- Does the result solve the agreed problem?
- Are the domain decisions explicit?
- Does the change preserve the relevant contracts and invariants?
- Was the evidence produced on the version that will be merged or deployed?
- Does the verification exercise the important risks, including failures and concurrency where applicable?
- Are there relevant differences between the test environment and the environment of use?
- Do the access, dependencies, and external effects correspond to the authorized scope?
- Will the behavior be observable, and is there a recovery path?
- Does the final record distinguish verified facts, hypotheses, and open items?
- Should any discovery improve the next work cycle?

### Appendix E — Brief glossary

| Term | Meaning in this report |
|---|---|
| Agent | A system that uses a model and tools to progress through the steps of a task. |
| Harness | Infrastructure that organizes execution, tools, state, and interaction with the model. |
| Context engineering | Organizing the information the agent needs throughout the work. |
| Skill | A reusable procedure with instructions and, when needed, resources and scripts. |
| Eval | A structured evaluation of an AI system's behavior on defined tasks. |
| Oracle | A criterion or mechanism that makes it possible to judge whether a result is correct. |
| Invariant | A property that must remain true under the system's defined conditions. |
| Idempotency | A contracted property that allows an operation to be repeated without adding the unwanted effect. |
| Outbox | A transactional record of events to be published later. |
| Prompt injection | An attempt to make received content improperly redirect the agent's behavior. |
| Sandbox | An environment with limits imposed on execution and access to resources. |
| MCP | Model Context Protocol, used to integrate AI applications with tools and context sources. |
| CI/CD | Automation of integration, validation, and delivery or deployment of changes. |
| Observability | The ability to investigate a system's behavior through signals and runtime evidence. |
| Toil | Repetitive operational work that can be reduced through engineering improvements. |

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




