---
title: "Daily AI Digest #2026-06-12"
date: "2026-06-12 00:20:36"
description: "OpenDream: Local-first agent memory and context management system
Partial Conservation Laws Framework for Restless Bandits with Binary Latent States and Imperfect Feedback
SciConBench: A Live Benchmark for Evaluating Scientific Conclusion Synthesis in High-Stakes Domains
CRCP: Realistic Corpus Poisoning for Multi-Stage RAG Pipelines
TileFuse: Mixed-Precision Kernel Library for AWQ-Style LLM Inference on AMD XDNA2 NPUs
BlendIn: Quality-Aware Inference-Time Alignment for Robust LLM Guidance
FewRS: Scalable Resampling for Statistical Significance in Data Mining
SemantiClean: A Modular Framework for Auditability-Driven Semantic Signal Extraction in E-Commerce
MPC-Patch-Bench: Repository-Level Benchmark for Secure Multi-Party Computation Code Repair
vllm-cost-meter: Measuring Real LLM Costs Under Variable GPU Utilization
EMFular: A Web-Based Framework for Generating EMF Model Editors Without Backend
Acoda: Adversarial Code Obfuscation Against LLM-Based Code Analysis"
tags:
- "scalability"
- "partial-conservation-laws"
- "reranking"
- "e-commerce"
- "context-management"
- "cryptographic-verification"
- "hybrid-distributions"
- "semantic-extraction"
- "benchmark"
- "LLM-cost-modeling"
- "LLM-alignment"
- "Angular"
- "NPU-acceleration"
- "retrieval-pipelines"
- "software-privacy"
- "model-driven-engineering"
- "spectrum-access"
- "FP8-quantization"
- "MPC"
- "inference-time-alignment"
- "restless-bandits"
- "model-guidance"
- "auditability"
- "GPU-utilization"
- "code-repair"
- "adversarial-attacks"
- "corpus-poisoning"
- "structured-inference"
- "web-based-tools"
- "EMF"
- "whittle-index"
- "agent-memory"
- "scientific-synthesis"
- "RAG-security"
- "data-mining"
- "data-leakage"
- "resampling"
- "LLM-benchmark"
- "vLLM"
- "LLM-security"
- "transformer-kernels"
- "local-first"
- "statistical-significance"
- "developer-tools"
- "scientific-agents"
- "code-obfuscation"
- "quantization"
- "mixed-precision"

---

> - OpenDream: Local-first agent memory and context management system
> - Partial Conservation Laws Framework for Restless Bandits with Binary Latent States and Imperfect Feedback
> - SciConBench: A Live Benchmark for Evaluating Scientific Conclusion Synthesis in High-Stakes Domains
> - CRCP: Realistic Corpus Poisoning for Multi-Stage RAG Pipelines
> - TileFuse: Mixed-Precision Kernel Library for AWQ-Style LLM Inference on AMD XDNA2 NPUs
> - BlendIn: Quality-Aware Inference-Time Alignment for Robust LLM Guidance
> - FewRS: Scalable Resampling for Statistical Significance in Data Mining
> - SemantiClean: A Modular Framework for Auditability-Driven Semantic Signal Extraction in E-Commerce
> - MPC-Patch-Bench: Repository-Level Benchmark for Secure Multi-Party Computation Code Repair
> - vllm-cost-meter: Measuring Real LLM Costs Under Variable GPU Utilization
> - EMFular: A Web-Based Framework for Generating EMF Model Editors Without Backend
> - Acoda: Adversarial Code Obfuscation Against LLM-Based Code Analysis

## AI & Large Language Models

### [OpenDream: Local-first agent memory and context management system](https://github.com/pylit-ai/opendream)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-06-12 00:01:29 &nbsp;·&nbsp; `agent-memory` `context-management` `local-first` `developer-tools`</small>

![OpenDream: Local-first agent memory and context management system](https://opengraph.githubassets.com/5c46bfcbf3ca5f9474caf774e6c9c86ada12f580f824b4181daba812afb4274b/pylit-ai/opendream)

**Overview:** OpenDream is a local-first system for managing agent memory and context across sessions in a portable, reviewable way. It enables agents (e.g., Codex, Claude Code, Cursor) to retain useful context between projects and tools while maintaining clear boundaries and auditability. The system emphasizes observability with a UI for reviewing agent activity, memories, and decisions without raw JSON exposure. **Method:** OpenDream stores canonical state per workspace in `.opendream/` and uses a semantic-first mode for context preparation. It integrates via CLI commands, hooks, or generated files depending on the host agent (e.g., `.cursor/rules/opendream.mdc` for Cursor). The system supports activation plans, event emission, and maintenance workflows to capture and reuse context. **Results:** Demonstrated via UI/CLI demos (light/dark MP4s) and integration with multiple agents. The system is designed for local execution with no default telemetry, prioritizing user control. **Impact:** Advances agentic workflows by addressing context fragmentation and memory portability. Open questions include scalability for large workspaces and broader agent compatibility.

[→ Read full article](https://github.com/pylit-ai/opendream)

---

## CS Research & Papers

### [Partial Conservation Laws Framework for Restless Bandits with Binary Latent States and Imperfect Feedback](https://arxiv.org/abs/2606.11192)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `restless-bandits` `whittle-index` `partial-conservation-laws` `spectrum-access`</small>

**Overview:** This paper advances the theory of restless bandits with binary latent states and imperfect binary feedback, motivated by opportunistic spectrum access scenarios where sensing errors occur. The work develops a rigorous analytical and computational framework to establish indexability and compute the Whittle index, addressing a gap in prior methods. **Method:** The authors introduce a Partial Conservation Laws (PCL)-based framework that leverages a verification theorem for real-state discounted restless bandits. The approach analyzes stochastic dynamics via an associated deterministic skeleton, renewal decompositions, and combinatorics on words. For regimes where full analytic verification is infeasible, efficient numerical schemes compute marginal metrics and the marginal productivity (MP) index, which coincides with the Whittle index under PCL-indexability conditions. **Results:** The framework yields tractable expressions for discounted reward and resource metrics in threshold regimes, with extensive experiments showing the MP index policy outperforms standard benchmarks across broad parameter ranges, often substantially. **Impact:** This work advances the theoretical foundations of restless bandits, enabling more robust and efficient decision-making in dynamic resource allocation problems with noisy observations.

[→ Read full article](https://arxiv.org/abs/2606.11192)

---

### [SciConBench: A Live Benchmark for Evaluating Scientific Conclusion Synthesis in High-Stakes Domains](https://arxiv.org/abs/2606.11337)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `scientific-agents` `benchmark` `scientific-synthesis` `data-leakage`</small>

**Overview:** SciConBench introduces a 9.11K-question benchmark to evaluate open-domain scientific conclusion synthesis in high-stakes domains like health, addressing the reliability of AI-generated conclusions. **Method:** The benchmark uses an expert-validated pipeline to decompose conclusions into atomic facts, measuring correctness via factual precision and recall. SciConHarness, a clean-room evaluation harness, mitigates data leakage by controlling web interaction. **Results:** Evaluating 8 frontier models and deep research agents, the best agent achieves a factual F1 of 0.337 under clean-room settings, revealing low factual quality. Clean-room evaluation consistently reduces performance, indicating leakage inflates prior estimates. Audits of consumer-facing agents (e.g., Google AI Overview) reveal incomplete and contradictory conclusions. **Impact:** Demonstrates that reliable scientific conclusion synthesis remains an open challenge, emphasizing the need for clean-room evaluation to assess true capabilities of AI agents.

[→ Read full article](https://arxiv.org/abs/2606.11337)

---

### [CRCP: Realistic Corpus Poisoning for Multi-Stage RAG Pipelines](https://arxiv.org/abs/2606.11265)

<small>**cs.CR updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `RAG-security` `corpus-poisoning` `reranking` `retrieval-pipelines`</small>

**Overview:** This paper examines corpus poisoning attacks on Retrieval-Augmented Generation (RAG) systems under realistic multi-stage retrieval pipelines (chunking, dense retrieval, reranking, grounded generation). It demonstrates that existing attacks degrade after reranking despite high retrieval-stage relevance, highlighting a critical realism gap in RAG security evaluation. **Method:** The authors propose Chunk-aware and Rerank-Consistent Poisoning (CRCP), which jointly optimizes retrieval relevance, reranker consistency, and chunk-boundary robustness. CRCP models chunking transformations during optimization to generate locally self-contained adversarial passages effective under varying chunking configurations. **Results:** Experiments on standard RAG benchmarks with multiple retrievers and rerankers show existing poisoning methods are highly sensitive to chunk size and reranking strategies, while CRCP achieves substantially higher attack success rates and stronger robustness. **Impact:** The work advances RAG security research by framing poisoning as a multi-stage retrieval consistency problem, revealing vulnerabilities in current evaluation practices and proposing a more realistic attack framework.

[→ Read full article](https://arxiv.org/abs/2606.11265)

---

### [TileFuse: Mixed-Precision Kernel Library for AWQ-Style LLM Inference on AMD XDNA2 NPUs](https://arxiv.org/abs/2606.11357)

<small>**cs.DC updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `quantization` `NPU-acceleration` `transformer-kernels` `mixed-precision`</small>

**Overview:** TileFuse addresses practical challenges in deploying quantized LLMs on client NPUs by enabling AWQ-style W4A16/W8A16 inference on AMD XDNA2 NPUs. This work is critical for edge LLM deployment where proprietary NPU stacks and limited low-level control hinder usability. **Method:** TileFuse co-designs weight layout, metadata placement, and mixed-precision microkernels to fuse unpacking, dequantization, and GEMM/GEMV execution into a single kernel flow. Key innovations include an interleaved pre-tiling layout supporting GEMM dimensions up to 32K and a redesigned GEMV dataflow utilizing the full 4x8 AIE array. **Results:** Kernel-level evaluations show up to 121.6% GEMM and 281% GEMV speedups over full-precision baselines, with >2x performance and energy-efficiency gains over iGPU baselines on GEMM. End-to-end LLM experiments on Ryzen AI laptops achieve 2.0x lower prefilling latency and 64.6% lower energy consumption. **Impact:** Demonstrates XDNA2 as a viable target for off-the-shelf quantization, advancing practical edge LLM deployment while highlighting NPU usability challenges.

[→ Read full article](https://arxiv.org/abs/2606.11357)

---

### [BlendIn: Quality-Aware Inference-Time Alignment for Robust LLM Guidance](https://arxiv.org/abs/2606.11201)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `LLM-alignment` `inference-time-alignment` `model-guidance` `hybrid-distributions`</small>

**Overview:** This paper addresses the challenge of inference-time alignment in LLMs, where guidances from aligned models may be unreliable. The authors introduce BlendIn, a framework that stabilizes alignment by creating hybrid distributions that proportionally weight contributions from multiple models based on reliability. **Method:** BlendIn shifts from binary decisions to hybrid distributions, performing quality-aware alignment. It evaluates guidance effectiveness dynamically and adjusts contributions to mitigate unreliable suggestions. The framework provides diagnostic signals and mitigation strategies, with a focus on preserving beneficial guidance while downweighting unreliable inputs. **Results:** BlendIn achieves consistent performance improvements, including up to 50% gains on challenging model pairs, while reducing excessive interventions that degrade performance. **Impact:** This work advances inference-time alignment techniques, offering a more robust and efficient approach to LLM guidance that adapts to model reliability.

[→ Read full article](https://arxiv.org/abs/2606.11201)

---

### [FewRS: Scalable Resampling for Statistical Significance in Data Mining](https://arxiv.org/abs/2606.11235)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `data-mining` `statistical-significance` `resampling` `scalability`</small>

**Overview:** This paper introduces FewRS, a resampling-based approach to assess the statistical significance of data mining results with rigorous guarantees on false discovery rates. The method addresses the computational inefficiency of traditional resampling techniques, which require generating thousands of resampled datasets. **Method:** FewRS builds on a novel bound to the supremum deviation of test statistics, enabling it to generate and analyze far fewer resampled datasets while maintaining statistical rigor. The approach is designed for broad applicability across pattern mining, graph analysis, and other domains. **Results:** FewRS reduces running time by up to two orders of magnitude compared to state-of-the-art methods while preserving high statistical power. It demonstrates effectiveness on large-scale real-world datasets. **Impact:** This work advances the scalability of statistical validation in data mining, enabling rigorous analysis of large datasets where traditional methods are impractical.

[→ Read full article](https://arxiv.org/abs/2606.11235)

---

### [SemantiClean: A Modular Framework for Auditability-Driven Semantic Signal Extraction in E-Commerce](https://arxiv.org/abs/2606.11207)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `semantic-extraction` `auditability` `e-commerce` `structured-inference`</small>

**Overview:** SemantiClean is a modular framework for extracting structured semantic signals from e-commerce session data, enabling pluggable inference targets like purchase intent, customer segmentation, and product affinity while prioritizing auditability and sigma=0 reproducibility over marginal predictive gains. **Method:** The framework organizes 24 behavioral elements into a four-layer architecture (Functional, Interaction, Systemic, Contextual) and enforces signal quality via three anti-inflation mechanisms: RedundancyGroup contribution caps, TieredPenaltyCalculator bias penalties, and AdaptiveConstraintMode cold-start protection. A two-phase LLM-driven inference engine leverages complete element metadata at inference time, with deterministic outputs fully reproducible. **Results:** The framework is evaluated on the Online Shoppers Purchasing Intention (OSPI) dataset, with quantitative results produced by the LLM-Integrated Semantic Inference Engine. **Impact:** Advances transparent, defensible AI systems for e-commerce by decoupling predictive performance from auditability, addressing structural governance challenges in high-stakes applications.

[→ Read full article](https://arxiv.org/abs/2606.11207)

---

### [MPC-Patch-Bench: Repository-Level Benchmark for Secure Multi-Party Computation Code Repair](https://arxiv.org/abs/2606.11416)

<small>**cs.CR updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `MPC` `code-repair` `LLM-benchmark` `cryptographic-verification`</small>

**Overview:** This paper introduces MPC-Patch-Bench, the first repository-level benchmark for evaluating LLM-based code repair on Secure Multi-Party Computation (MPC) software. It addresses gaps in existing benchmarks by providing MPC-aware data curation and verification tailored to cryptographic safety and numerical fidelity. **Method:** The benchmark combines a domain-specific curation agent filtering pull requests through cryptographic layers with a human-AI completion engine synthesizing tests, yielding 205 verified instances. The MPC Verifier performs dynamic differential testing against plaintext oracles and static analysis for unsafe operations (e.g., reveals, insecure arithmetic). **Results:** The strongest LLM resolves only 22.9% of tasks; the MPC Verifier reduces verified resolution to 17.1%, with up to 40% of functionally-passing patches rejected for cryptographic violations. **Impact:** Advances LLM evaluation for security-critical domains, revealing limitations in general-purpose code repair models and emphasizing the need for domain-specific verification in cryptographic software.

[→ Read full article](https://arxiv.org/abs/2606.11416)

---

### [vllm-cost-meter: Measuring Real LLM Costs Under Variable GPU Utilization](https://arxiv.org/abs/2606.11690)

<small>**cs.DC updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `LLM-cost-modeling` `GPU-utilization` `vLLM` `FP8-quantization`</small>

**Overview:** This work exposes systematic errors in public LLM cost calculators by demonstrating that GPU utilization (λ) is the dominant driver of cost variability. The authors propose a measurement-based methodology to accurately model costs as C_eff = f(H, M, Q, λ, L). **Method:** The study validates a parameterized cost model across 42 benchmarks (dense, ultra-sparse MoE, sparse MoE) and releases vllm-cost-meter, an open-source tool that attaches to live vLLM servers to report real $/M-tokens. The framework quantifies how FP8 quantization benefits MoE architectures 2.2-2.4x more than dense models (+69-74% vs. +31% throughput). **Results:** On identical H100 hardware, effective costs range from $0.21 to $15.25 per million tokens (2.5-24x underutilization penalty), with 36.3x penalties near idle. The model reproduces on A100 80GB PCIe (7.0-11.4x spread). **Impact:** Provides a hardware-aware, utilization-sensitive cost modeling framework, revealing critical flaws in static-cost assumptions and guiding optimal deployment strategies.

[→ Read full article](https://arxiv.org/abs/2606.11690)

---

### [EMFular: A Web-Based Framework for Generating EMF Model Editors Without Backend](https://arxiv.org/abs/2606.11442)

<small>**cs.SE updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `model-driven-engineering` `EMF` `web-based-tools` `Angular`</small>

**Overview:** EMFular is a purely web-based framework for generating graphical editors for EMF (Eclipse Modeling Framework) models without requiring a backend. It addresses the need for low-effort, customizable, and deployable modeling tools in web environments. **Method:** EMFular consists of a generator that maps an Ecore metamodel to a ready-to-use Angular-based editor. The generated editors ensure 'EMF consistency' by supporting standard modeling operations (creation, inspection, navigation, editing, undo/redo) and handling containment/inverse references. Developers can customize the editor via designated Angular extension points. **Results:** The evaluation focuses on editor adequacy (editing capabilities), adaptability (customization mechanisms), and robustness of generation. The framework demonstrates feasibility for real-world modeling tasks. **Impact:** EMFular advances model-driven engineering by enabling browser-based EMF tooling, reducing deployment complexity, and fostering extensibility through Angular's ecosystem.

[→ Read full article](https://arxiv.org/abs/2606.11442)

---

### [Acoda: Adversarial Code Obfuscation Against LLM-Based Code Analysis](https://arxiv.org/abs/2606.11755)

<small>**cs.SE updates on arXiv.org** &nbsp;·&nbsp; 2026-06-11 05:00:00 &nbsp;·&nbsp; `LLM-security` `code-obfuscation` `adversarial-attacks` `software-privacy`</small>

**Overview:** Acoda is a genetic algorithm-based framework for obfuscating source code to defend against LLM-based analysis, addressing IP leakage risks in software engineering. **Method:** Acoda leverages LLM mechanisms (safety alignment, token processing) to design 8 semantics-preserving obfuscation methods. A genetic algorithm optimizes obfuscation strategies to maximize defensive effectiveness. Evaluation uses an auxiliary LLM and four metrics to assess LLM responses to obfuscated code. **Results:** On 7 LLMs (e.g., GPT-4o, DeepSeek), Acoda achieves up to 70% attack success rate (ASR), with cross-model transferability and minimal runtime overhead while preserving code semantics. **Impact:** Acoda introduces a novel approach to code protection against LLM analysis, advancing LLM security and software privacy in the era of AI-driven development.

[→ Read full article](https://arxiv.org/abs/2606.11755)

---
