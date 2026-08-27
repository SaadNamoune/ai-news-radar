---
title: "Daily AI Digest #2026-08-27"
date: "2026-08-27 03:56:40"
description: "Waymo’s 10 AI lessons from 200+ million autonomous miles
OpenExecutive: Multi-agent executive AI system with episodic memory
Meta’s scrapped AI-native restructuring plan reveals challenges in replacing human roles with agents
TrustShift: Temporal Server-Side Attacks on Model Context Protocol (MCP) Agents
Equivariant Cellular Sheaf Networks for Molecular Hamiltonians via Topological Deep Learning
Renormalization Group Flow Matching for Scalable Generative Modeling
RENDER: A Benchmark for Evaluating Memory and RAG Systems via Reader-Facing Artifact Control
ESQ-Bench: Enterprise Schema Complexity Benchmark for NL2SQL with Silent Divergence Evaluation
Stitch: Host-Based Real-Time Pivoting Detection via Programmable Kernel
Exact Resource Accounting for Storage-Backed Inference in Large Language Models
Constant-Round Almost Stable Matching in the CONGEST Model
Measuring the Justifiability of AI Pipeline Records for Deployment Claims
Corpus Statistics Predict Transformer Weight Growth via Weibull Scaling Law
Bottleneck-Aware Architectural Measurement of Particle Pipelines in Layered Browser Architectures
caddy-analyzer: Real-time threat detection and log analysis tool for Caddy v2 web server"
tags:
- "AI-productivity"
- "Qwen3"
- "webgl"
- "Weibull-distribution"
- "MCP-security"
- "AI-safety"
- "agent-systems"
- "intrusion-detection"
- "round-complexity"
- "pivoting-detection"
- "flow-matching"
- "equivariant-networks"
- "memory-management"
- "CONGEST-model"
- "CI_CD"
- "autonomous-vehicles"
- "evaluation-metrics"
- "cellular-sheaves"
- "AI-deployment"
- "RAG"
- "benchmark"
- "enterprise-databases"
- "generative-modeling"
- "transformer-weights"
- "web-security"
- "input-representation"
- "topological-deep-learning"
- "webassembly"
- "attestation"
- "stable-matching"
- "LLM-orchestration"
- "NL2SQL"
- "long-range-correlations"
- "enterprise-AI"
- "LLM-inference"
- "distributed-algorithms"
- "supply-chain-security"
- "multi-agent-systems"
- "browser-architecture"
- "foundation-models"
- "temporal-attacks"
- "scaling-laws"
- "memory-systems"
- "sensor-fusion"
- "molecular-hamiltonian"
- "web-workers"
- "benchmark-design"
- "log-analysis"
- "ML-pipelines"
- "resource-accounting"
- "organizational-transformation"
- "data-statistics"
- "host-based-security"
- "caddy-server"
- "renormalization-group"

---

> - Waymo’s 10 AI lessons from 200+ million autonomous miles
> - OpenExecutive: Multi-agent executive AI system with episodic memory
> - Meta’s scrapped AI-native restructuring plan reveals challenges in replacing human roles with agents
> - TrustShift: Temporal Server-Side Attacks on Model Context Protocol (MCP) Agents
> - Equivariant Cellular Sheaf Networks for Molecular Hamiltonians via Topological Deep Learning
> - Renormalization Group Flow Matching for Scalable Generative Modeling
> - RENDER: A Benchmark for Evaluating Memory and RAG Systems via Reader-Facing Artifact Control
> - ESQ-Bench: Enterprise Schema Complexity Benchmark for NL2SQL with Silent Divergence Evaluation
> - Stitch: Host-Based Real-Time Pivoting Detection via Programmable Kernel
> - Exact Resource Accounting for Storage-Backed Inference in Large Language Models
> - Constant-Round Almost Stable Matching in the CONGEST Model
> - Measuring the Justifiability of AI Pipeline Records for Deployment Claims
> - Corpus Statistics Predict Transformer Weight Growth via Weibull Scaling Law
> - Bottleneck-Aware Architectural Measurement of Particle Pipelines in Layered Browser Architectures
> - caddy-analyzer: Real-time threat detection and log analysis tool for Caddy v2 web server

## AI & Large Language Models

### [Waymo’s 10 AI lessons from 200+ million autonomous miles](https://waymo.com/blog/2026/08/10ailessons/)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-08-27 02:56:28 &nbsp;·&nbsp; `autonomous-vehicles` `sensor-fusion` `AI-safety` `foundation-models`</small>

![Waymo’s 10 AI lessons from 200+ million autonomous miles](https://lh3.googleusercontent.com/v_WTrt44FJl9OY1Abmur0c0_PNSo7lRq_6RJmrN0qzlyhHzr23VACBZmpIZ83tmo8InRzoRtPecMDiQH3vE3kt57OaI1VVPwbn7u)

**Overview:** Waymo shares 10 foundational lessons from operating its L4 autonomous driving system across 200+ million fully autonomous miles, emphasizing safety, sensor redundancy, and AI architecture. **Method:** Key insights include: (1) **Multi-sensor fusion** (cameras, lidar, radar) for redundant, complementary sensing; (2) **HD maps as dynamic inputs** for validation and real-time decision-making; (3) **Consolidated foundation models** (vs. modular spaghetti) leveraging scaling laws; (4) **Dual-layer AI safety** with an independent validation layer using RL and generative AI; (5) **Closed-loop simulation** for rare edge-case testing; (6) **AI Critic** for automated behavioral feedback; (7) **Vision-Language Models (VLMs)** for high-level reasoning paired with fast sensor fusion; (8) **Safety governance framework** integrating empirical metrics and human judgment. **Results:** Waymo’s safety data shows reduced incidents in deployed cities, with VLMs and "thinking fast and slow" architectures addressing long-tail scenarios. **Impact:** Advances autonomous vehicle AI by codifying best practices for safety-critical, real-world deployment, offering a blueprint for other high-stakes AI systems.

[→ Read full article](https://waymo.com/blog/2026/08/10ailessons/)

---

### [OpenExecutive: Multi-agent executive AI system with episodic memory](https://github.com/SenteLabsAI/OpenExecutive)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-08-27 02:46:22 &nbsp;·&nbsp; `multi-agent-systems` `RAG` `enterprise-AI` `LLM-orchestration`</small>

![OpenExecutive: Multi-agent executive AI system with episodic memory](https://opengraph.githubassets.com/8f04e14746e258eceddb45e226611b998ddce649a351f8f8d3c79ce7ec61fcbc/SenteLabsAI/OpenExecutive)

**Overview:** OpenExecutive is an open-source AI system acting as a virtual executive team, combining eight specialist agents (e.g., CSO, CFO) with a unified executive voice, episodic memory, and proactive scheduling. **Method:** Architecture includes: (1) **Executive Orchestrator** (claude-sonnet-4-6) routing queries to parallel specialist agents; (2) **RAG pipeline** with ChromaDB for context retrieval from company documents and built-in MBA knowledge; (3) **Episodic memory** tracking past decisions; (4) **Scheduler** for follow-ups; (5) **Integrations** (Slack, Email, Discord) via FastAPI and Next.js UI. Supports local/model-agnostic deployment (e.g., Anthropic, OpenRouter) with Docker/Fly.io. **Results:** Demo showcases coherent executive responses across business domains, with episodic memory enabling continuity. **Impact:** Advances enterprise AI by demonstrating scalable multi-agent orchestration for complex, context-aware decision-making, with potential applications in corporate governance and advisory systems.

[→ Read full article](https://github.com/SenteLabsAI/OpenExecutive)

---

### [Meta’s scrapped AI-native restructuring plan reveals challenges in replacing human roles with agents](https://arstechnica.com/ai/2026/08/metas-scrapped-plans-to-go-ai-native-included-slashing-teams-by-60-percent/)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-08-27 03:07:22 &nbsp;·&nbsp; `AI-deployment` `organizational-transformation` `AI-productivity`</small>

![Meta’s scrapped AI-native restructuring plan reveals challenges in replacing human roles with agents](https://cdn.arstechnica.net/wp-content/uploads/2026/08/GettyImages-2171717886-1152x648.jpg)

**Overview:** Meta’s internal "Project OT" aimed to reduce teams by up to 60% to become "AI native" but was scrapped after identifying risks in productivity and security. The plan involved AI agents replacing human tasks, with oversight by small teams, and was canceled after a May layoff round. **Method:** Project OT explored AI-driven workflow automation, agent-assisted analysis, and AI-native tooling (e.g., "AI-Native Playbook") to restructure engineering and research teams. Meta used internal monitoring (e.g., keyboard/mouse tracking) to train agents but paused the program due to morale concerns. **Results:** Internal data showed AI agents caused a 40% increase in major technical/security incidents and a 70% rise in time spent resolving them. Code changes increased 220% YoY, but feature deployments rose only 36%. CEO Zuckerberg later noted agentic AI development "hasn’t really accelerated" as expected. **Impact:** Highlights the risks of overzealous AI deployment in organizations, including productivity trade-offs, security vulnerabilities, and employee morale impacts. Open questions remain about optimal AI-human collaboration in enterprise settings.

[→ Read full article](https://arstechnica.com/ai/2026/08/metas-scrapped-plans-to-go-ai-native-included-slashing-teams-by-60-percent/)

---

## CS Research & Papers

### [TrustShift: Temporal Server-Side Attacks on Model Context Protocol (MCP) Agents](https://arxiv.org/abs/2608.23763)

<small>**cs.CR updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `MCP-security` `agent-systems` `temporal-attacks`</small>

**Overview:** TrustShift introduces a novel server-side threat to MCP-based LLM agents, where compromised servers condition agents during benign phases before switching to adversarial behavior. Unlike indirect prompt injection or man-in-the-middle attacks, TrustShift originates from the trusted server endpoint. **Method:** The attack model defines a stateful lifecycle with a benign conditioning phase followed by adversarial defection. TrustShiftProbe includes a language-agnostic attack engine, SHIELD—a multi-tier runtime defense auditing server payloads against behavioral baselines—and a taxonomy of nine attack variants (structural violation, semantic corruption, scope expansion) with objectives (disruption, exfiltration). **Results:** Across frontier models, TrustShift achieves 69.5% mean attack success rate, mitigated to 42.7% by SHIELD. **Impact:** Highlights critical vulnerabilities in MCP ecosystems, proposing defenses and a framework for evaluating temporal threats in agent-server interactions.

[→ Read full article](https://arxiv.org/abs/2608.23763)

---

### [Equivariant Cellular Sheaf Networks for Molecular Hamiltonians via Topological Deep Learning](https://arxiv.org/abs/2608.23571)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `topological-deep-learning` `molecular-hamiltonian` `equivariant-networks` `cellular-sheaves`</small>

**Overview:** This work unifies topological deep learning with molecular Hamiltonian prediction by formalizing the molecular single-particle Hamiltonian as a Laplacian of a cellular sheaf on a regular cell complex. It advances equivariant message-passing networks by introducing a sheaf-theoretic framework that captures non-bonding orbitals and delocalization effects. **Method:** The Hamiltonian is embedded as a sheaf Laplacian, with restriction maps constructed from O(3)-steerable two-center kernels, recovering Slater-Koster form as a special case. The model leverages sheaf cohomology (H⁰ for non-bonding orbitals, H¹ for delocalization) and inherits anti-oversmoothing properties. **Results:** The Hamiltonian-to-sheaf embedding is exact to machine precision. Cohomology dimensions reproduce non-bonding-orbital counts across 11 conjugated molecules, and the sheaf Laplacian achieves O(3)-equivariance to machine precision. The equivariant model outperforms E(3)-equivariant message-passing in directional electronic targets. **Impact:** Establishes a foundational link between sheaf theory and molecular physics, enabling topological invariants for electronic structure prediction while generalizing existing equivariant architectures.

[→ Read full article](https://arxiv.org/abs/2608.23571)

---

### [Renormalization Group Flow Matching for Scalable Generative Modeling](https://arxiv.org/abs/2608.23696)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `generative-modeling` `renormalization-group` `flow-matching` `long-range-correlations`</small>

**Overview:** Introduces Renormalization Group Flow Matching (RGFM), a generative framework that leverages RG theory to capture long-range correlations with local computation. Addresses the tradeoff between global coherence and computational efficiency in generative models. **Method:** Uses an exact RG flow as the probability path, generating data from long- to short-wavelength structures. Exploits quasi-locality and scale separation to approximate the RG flow with local velocity fields of size O(ln L), reducing computational cost to nearly linear in system volume. **Results:** RGFM reproduces long-range correlations beyond its receptive field in 1D distributions and generates coherent 64x64/256x256 FFHQ images, outperforming local flow matching. Theoretical analysis bounds approximation error by ε with patch size O(ln L). **Impact:** Establishes RG-guided probability flows as a scalable alternative to global generative models, enabling efficient generation of globally coherent data while maintaining local computation.

[→ Read full article](https://arxiv.org/abs/2608.23696)

---

### [RENDER: A Benchmark for Evaluating Memory and RAG Systems via Reader-Facing Artifact Control](https://arxiv.org/abs/2608.23568)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `memory-systems` `RAG` `benchmark-design` `input-representation`</small>

**Overview:** RENDER introduces a controlled benchmark to evaluate how the *reader-facing artifact* (e.g., summaries, raw excerpts, typed records) impacts the performance of memory and retrieval-augmented generation (RAG) systems. The work highlights that current evaluations often overlook how conversation history is rendered, which can significantly affect model outputs. **Method:** RENDER uses a five-level packet ladder to localize when answer-bearing content enters the input and employs deterministic templates mimicking ChatGPT-style entries, LangChain summaries, MemGPT-style typed records, and raw conversation. The benchmark tests 500 LongMemEval questions across nine models. **Results:** Matched-budget resolved packets outperform recency-truncated raw dialogue by 42.4–72.6 points. In deployed-style templates, the best-worst spread ranges from 24.6 to 48.8 points per model. ChatGPT-style entries yield higher point estimates than raw conversation in 7 of 9 models. The effect persists under retrieval noise and transfers to HotpotQA. **Impact:** Demonstrates that memory/RAG evaluations must control or report the reader-facing artifact to ensure reproducibility and fairness. Open questions include the generalizability of these findings to other domains and models.

[→ Read full article](https://arxiv.org/abs/2608.23568)

---

### [ESQ-Bench: Enterprise Schema Complexity Benchmark for NL2SQL with Silent Divergence Evaluation](https://arxiv.org/abs/2608.23569)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `NL2SQL` `benchmark` `enterprise-databases` `evaluation-metrics`</small>

**Overview:** ESQ-Bench addresses the gap between academic NL2SQL benchmarks (e.g., Spider, BIRD) and real-world enterprise databases by introducing a benchmark with Oracle-first complexity tiers and silent-divergence evaluation. **Method:** The benchmark includes six populated schemas (465 tables, 164,682 rows) across Oracle, PostgreSQL, MySQL, and SQL Server, with 550 gold-validated question-query pairs. It evaluates four metrics: exact match (EM), execution match (EX), schema recovery (SR), and silent divergence (SD). Schema-linked prompting with GPT-4o and Claude Sonnet 4.6 is tested. **Results:** Execution-match (EX) degrades monotonically across tiers: 79.8%, 60.3%, and 57.2% for GPT-4o schema-linked (June 2026). Silent divergence reaches 73–99% among EX-passing queries. Local Llama 3.2 schema-linked achieves only 13.3% EX. Zero-shot EX inverts schema-linked trends at higher tiers. **Impact:** Highlights the limitations of current NL2SQL models in enterprise environments and the need for benchmarks that reflect real-world complexity. Open questions include the scalability of solutions to higher tiers and the generalizability across database systems.

[→ Read full article](https://arxiv.org/abs/2608.23569)

---

### [Stitch: Host-Based Real-Time Pivoting Detection via Programmable Kernel](https://arxiv.org/abs/2608.23731)

<small>**cs.CR updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `pivoting-detection` `host-based-security` `intrusion-detection`</small>

**Overview:** Stitch is a host-based system that detects pivoting attacks in real time by leveraging programmable kernel capabilities. Pivoting, where attackers relay traffic through compromised hosts, is difficult to detect due to its legitimate appearance. Existing defenses suffer from high latency, low accuracy, or reliance on network-wide participation. **Method:** Stitch observes host-traversing flows and uses process tracing to combine system and network-level information, linking incoming and outgoing communications to identify pivoting characteristics. It operates at the kernel level for low overhead and independence from network-wide constraints. **Results:** Stitch achieves 31% higher accuracy than state-of-the-art pivoting defenses and maintains a maximum false positive rate of 0.006% across two real-world deployments. **Impact:** Addresses a critical gap in pivoting detection by providing accurate, lightweight, and host-specific coverage, advancing host-based security research and practical deployment.

[→ Read full article](https://arxiv.org/abs/2608.23731)

---

### [Exact Resource Accounting for Storage-Backed Inference in Large Language Models](https://arxiv.org/abs/2608.23805)

<small>**cs.DC updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `LLM-inference` `resource-accounting` `memory-management` `Qwen3`</small>

**Overview:** This paper presents a falsifiable certificate for exact resource accounting in LLM inference, addressing overclaiming in storage-backed systems (e.g., RSS vs. page cache, device-local vs. board-wide usage). **Method:** The certificate separates representation, semantic demand, scheduler requests, and traffic, defining resource authorities and exactness horizons. It evaluates Qwen3-Next with 48x512 layer-experts, demonstrating a 43.59 GiB semantic-demand lower bound vs. declared 34 GiB envelope. **Results:** LRU64 execution adheres to host/GPU contracts, while buffered paths hit 11 GiB limits. Asynchronous components reduce wall time by 32.3% vs. blocking paths at identical output. Fourteen control/fault cells validate fail-closed behavior. **Impact:** Establishes rigorous resource accounting for LLM inference, enabling safer deployment and optimization in constrained environments.

[→ Read full article](https://arxiv.org/abs/2608.23805)

---

### [Constant-Round Almost Stable Matching in the CONGEST Model](https://arxiv.org/abs/2608.24102)

<small>**cs.DC updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `distributed-algorithms` `stable-matching` `CONGEST-model` `round-complexity`</small>

**Overview:** This paper solves almost stable matching in constant distributed rounds on general bipartite graphs using shared randomness, addressing a long-standing open problem in the CONGEST model. **Method:** The algorithm achieves $O(\frac{\log(1/\varepsilon)}{\varepsilon^4})$ rounds with $O(\log(1/\varepsilon))$ shared random bits, using a degree-guarded freezing rule to handle varying degrees uniformly. **Results:** For constant $\varepsilon>0$, round complexity is $O(1)$, independent of graph size or degree. Extensions include an $O(\frac{\log(1/\varepsilon)}{\varepsilon^4} + \frac{\log n}{\varepsilon})$-round algorithm without pre-shared randomness and an $O(\frac{\log(1/\varepsilon)}{\varepsilon^4})$-round algorithm in the MPC model. **Impact:** Advances distributed algorithm design, enabling efficient solutions for matching problems in large-scale networks with theoretical guarantees.

[→ Read full article](https://arxiv.org/abs/2608.24102)

---

### [Measuring the Justifiability of AI Pipeline Records for Deployment Claims](https://arxiv.org/abs/2608.23610)

<small>**cs.SE updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `ML-pipelines` `CI/CD` `attestation` `supply-chain-security`</small>

**Overview:** This paper evaluates whether AI pipeline documentation can justify claims that an evaluated system is the one deployed, focusing on content-addressed identity and behavioral tuple consistency. **Method:** A two-class survey of 47 delivery platforms (20 CI/CD, 27 model-serving/agent) and a realized assurance depth analysis of 30 repositories, graded twice via pinned content hashes. The study checks for content-addressed identities (model version, instructions, tools, runtime config) and compares declared vs. realized assurance depth. **Results:** No platform emits default content-addressed identities (0/47). Immutable nominal versioning dominates agent platforms (16/27). Only 5/30 repositories fully realize declared bindings; 7/15 adopting attestation tools publish source-only releases, breaking verifiability. **Impact:** Exposes a structural verifiability hole in AI pipeline records, highlighting the need for content-addressed identities to justify deployment claims and improve supply-chain security.

[→ Read full article](https://arxiv.org/abs/2608.23610)

---

### [Corpus Statistics Predict Transformer Weight Growth via Weibull Scaling Law](https://arxiv.org/abs/2608.23573)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `transformer-weights` `scaling-laws` `Weibull-distribution` `data-statistics`</small>

**Overview:** The paper derives a training-free law predicting transformer weight magnitude growth during training using corpus statistics. It identifies the bigram conditional entropy (D) as a key predictor of weight scale growth (λ) in a Weibull distribution (k≈1.2). **Method:** The law is formulated as λ² - λ₀² = C₀(η) + C₁(η)(Hᵣ - D)^0.59, where Hᵣ is a shuffle baseline. The exponent 0.59 is inherited from data-side saturation relations, not fitted. The law holds across learning rates, architectures, and per-layer resolutions. **Results:** The law predicts weight growth with 5.7% relative error in held-out settings (R²=0.941). Cross-corpus prediction fails for code, indicating redundancy as a secondary factor. **Impact:** Provides a mechanistic understanding of weight growth, enabling pre-training predictions of model behavior and highlighting corpus properties as critical to training dynamics.

[→ Read full article](https://arxiv.org/abs/2608.23573)

---

### [Bottleneck-Aware Architectural Measurement of Particle Pipelines in Layered Browser Architectures](https://arxiv.org/abs/2608.23609)

<small>**cs.SE updates on arXiv.org** &nbsp;·&nbsp; 2026-08-26 05:00:00 &nbsp;·&nbsp; `browser-architecture` `web-workers` `webgl` `webassembly`</small>

**Overview:** This paper decomposes the performance bottlenecks of particle simulation pipelines across browser layers (DOM, Web Workers, WebGL, WebAssembly) using a controlled experimental framework. It addresses the gap between local optimization and end-to-end user-visible performance in layered browser architectures. **Method:** Five particle pipelines (P1-P5) and a CSS-layer baseline (P0) are evaluated across Chrome 138/150 and Firefox 153 on dual-GPU-class hosts and Google Colab (Tesla T4). The study isolates thread placement, renderer choice, and simulation backend, measuring interactive pacing, high-load stress, and simulation-only microbenchmarks. **Results:** Worker offload improves Chrome interactive pacing (~144 vs ~52 FPS, Cliff's delta=1). AssemblyScript accelerates Chrome's update kernel by 1.5-1.6x (primary host) and 1.85x (Colab T4). Under ~250k WebGL particles, WASM gains in simulation do not always propagate to FPS (P5≤P4 across configurations). Renderer rankings and margins vary significantly by browser/GPU/host. **Impact:** Demonstrates that layer-specific optimizations do not always translate to end-to-end gains, advocating for bottleneck-aware architectural measurement in browser performance engineering.

[→ Read full article](https://arxiv.org/abs/2608.23609)

---

## Cybersecurity

### [caddy-analyzer: Real-time threat detection and log analysis tool for Caddy v2 web server](https://github.com/lenny-ts/caddy-analyzer)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-08-27 03:29:02 &nbsp;·&nbsp; `web-security` `log-analysis` `intrusion-detection` `caddy-server`</small>

![caddy-analyzer: Real-time threat detection and log analysis tool for Caddy v2 web server](https://opengraph.githubassets.com/23a1806a7aa99f2c675f9db6d4791acde1fac24a067cce5b3feb8d4a46c0bb63/lenny-ts/caddy-analyzer)

**Overview:** caddy-analyzer is a security-focused log analysis tool for Caddy v2, addressing the lack of native parsing support for Caddy's structured JSON logs. It provides real-time threat detection, IP blocking, and forensic analysis capabilities for web traffic analysis. **Method:** The tool implements a dual-pass pattern engine scanning 26 attack categories (SQLi, XSS, RCE, etc.) against both URL-unescaped and raw URIs to detect multibyte and double-encoded bypass attempts. It uses LRU-based IP eviction (100K cap) and per-IP path caps (1K) with TTL-based cache eviction. Detection rules are tagged with MITRE ATT&CK IDs and exportable as Sigma rules. **Results:** Achieves ~7,000 lines/sec throughput with detection (parse-only: ~70,000 lines/sec) on synthetic logs with 10% attack traffic. Memory usage scales linearly (~1.3 KB/line with detection). Includes 23 preconfigured Sigma rules and supports iptables-based IP blocking. **Impact:** Advances web security monitoring by providing specialized tooling for Caddy's JSON log format, enabling proactive threat detection and automated response in web server environments.

[→ Read full article](https://github.com/lenny-ts/caddy-analyzer)

---
