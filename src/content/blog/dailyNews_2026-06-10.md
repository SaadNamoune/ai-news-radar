---
title: "Daily AI Digest #2026-06-10"
date: "2026-06-10 00:17:39"
description: "ScaleDisturb: Amplifying DRAM Read Disturbance via Asymmetric Aggressor Row Access Patterns
RL4F: Offline Reinforcement Learning Benchmark for Plasma Control in Nuclear Fusion
PathoSage: Structured Evidence Adjudication for Robust Patch-Level Pathology Multimodal Reasoning
PATCH: Adversarial Patches as Honeytokens Against Visual Aimbot Cheaters in Multiplayer Games
Efficient Birkhoff Projection via Dual Newton and Implicit Differentiation for Manifold-Constrained Hyper-Connections
Distributed Multi-GPU LP Solver with Systems-Algorithm Co-Design for Large-Scale Block-Diagonal LPs
LLM-Agentic Pipeline for Differentiable Translation of Legacy Fortran to JAX
SPIN: Swarm Policy Interference Network for Edge Multi-Agent Coordination
OmniMem: Memory-Efficient Streaming for Audio-Visual LLMs via Modality-Aware Compression
SWE-Marathon: Long-Horizon Agent Benchmark for Software Engineering
Boundary-Induced Acquisition Bias in Gaussian Processes for Bounded Domains
Nucleus: Minimalist Declarative Container Runtime with Nix Integration"
tags:
- "CUDA-kernels"
- "tensor-networks"
- "memory-efficiency"
- "nuclear-fusion"
- "memory-exploits"
- "plasma-control"
- "PyTorch"
- "nix"
- "anti-cheat-systems"
- "container-runtime"
- "linear-programming"
- "Fortran"
- "DRAM-security"
- "long-horizon-tasks"
- "acquisition-bias"
- "differentiable-programming"
- "implicit-differentiation"
- "Sinkhorn-Knopp"
- "AI-agents"
- "declarative-orchestration"
- "agent-evaluation"
- "evidence-adjudication"
- "legacy-code-translation"
- "RowHammer"
- "multi-agent-systems"
- "audio-visual-llm"
- "software-engineering-benchmark"
- "kernel-methods"
- "ridge-regularization"
- "distributed-systems"
- "edge-computing"
- "hallucination-mitigation"
- "adversarial-attacks"
- "JAX"
- "linux-kernel"
- "game-security"
- "long-video-understanding"
- "bayesian-optimization"
- "pathology-multimodal-reasoning"
- "KV-cache-compression"
- "RowPress"
- "agentic-ai"
- "Birkhoff-polytope"
- "neuro-symbolic-ai"
- "gaussian-processes"
- "offline-reinforcement-learning"
- "benchmark"
- "computer-vision"

---

> - ScaleDisturb: Amplifying DRAM Read Disturbance via Asymmetric Aggressor Row Access Patterns
> - RL4F: Offline Reinforcement Learning Benchmark for Plasma Control in Nuclear Fusion
> - PathoSage: Structured Evidence Adjudication for Robust Patch-Level Pathology Multimodal Reasoning
> - PATCH: Adversarial Patches as Honeytokens Against Visual Aimbot Cheaters in Multiplayer Games
> - Efficient Birkhoff Projection via Dual Newton and Implicit Differentiation for Manifold-Constrained Hyper-Connections
> - Distributed Multi-GPU LP Solver with Systems-Algorithm Co-Design for Large-Scale Block-Diagonal LPs
> - LLM-Agentic Pipeline for Differentiable Translation of Legacy Fortran to JAX
> - SPIN: Swarm Policy Interference Network for Edge Multi-Agent Coordination
> - OmniMem: Memory-Efficient Streaming for Audio-Visual LLMs via Modality-Aware Compression
> - SWE-Marathon: Long-Horizon Agent Benchmark for Software Engineering
> - Boundary-Induced Acquisition Bias in Gaussian Processes for Bounded Domains
> - Nucleus: Minimalist Declarative Container Runtime with Nix Integration

## CS Research & Papers

### [ScaleDisturb: Amplifying DRAM Read Disturbance via Asymmetric Aggressor Row Access Patterns](https://arxiv.org/abs/2606.07761)

<small>**cs.CR updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `DRAM-security` `RowHammer` `RowPress` `memory-exploits`</small>

**Overview:** DRAM read disturbance (e.g., RowHammer, RowPress) causes bitflips in victim rows due to repeated or prolonged access to nearby aggressor rows. ScaleDisturb introduces a new access pattern that asymmetrically extends the open time of two aggressor rows, significantly amplifying disturbance effects. **Method:** ScaleDisturb is characterized across 196 DDR4 and 3 HBM2 DRAM chips, demonstrating reduced row activations required for bitflips compared to state-of-the-art patterns. A proof-of-concept attack on a real system shows ScaleDisturb induces more bitflips than existing methods. **Results:** ScaleDisturb exacerbates read disturbance across all tested DRAM chips and scales with manufacturing node sizes, making attacks easier and more reliable. Four mitigation strategies are proposed and evaluated. **Impact:** Landmark work in DRAM security, exposing critical vulnerabilities in modern memory systems and calling for urgent research into scalable mitigation techniques.

[→ Read full article](https://arxiv.org/abs/2606.07761)

---

### [RL4F: Offline Reinforcement Learning Benchmark for Plasma Control in Nuclear Fusion](https://arxiv.org/abs/2606.07550)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `offline-reinforcement-learning` `plasma-control` `nuclear-fusion` `benchmark`</small>

**Overview:** Introduces RL4F, the first standardized offline reinforcement learning (RL) benchmark for plasma control in nuclear fusion, addressing the lack of reproducible evaluation in this domain. **Method:** Provides closed-loop environments for four plasma control tasks (rotation, density, temperature, pressure) using a dynamics model derived from historical DIII-D tokamak data. Evaluates imitation learning and offline RL baselines (e.g., model-based RL) under a unified protocol. **Results:** Offline model-based RL methods achieve the best average performance across most tasks, though no single method dominates all objectives, emphasizing the role of dynamics modeling in long-horizon control. **Impact:** Advances offline RL research and fusion control by enabling standardized comparisons and open-sourcing code, datasets, and evaluation frameworks for broader algorithmic and domain-specific innovation.

[→ Read full article](https://arxiv.org/abs/2606.07550)

---

### [PathoSage: Structured Evidence Adjudication for Robust Patch-Level Pathology Multimodal Reasoning](https://arxiv.org/abs/2606.07549)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `pathology-multimodal-reasoning` `evidence-adjudication` `agentic-ai` `hallucination-mitigation`</small>

**Overview:** PathoSage introduces a three-stage framework to address hallucinations and conflicting evidence in computational pathology MLLMs. It explicitly separates knowledge retrieval, evidence collection, and evidence adjudication for patch-level reasoning, addressing limitations of end-to-end models and agentic systems. **Method:** The core Structured Evidence Deliberation module independently evaluates heterogeneous evidence (tools, retrieved knowledge) and resolves conflicts in a fresh context to reduce anchoring bias. A training-free Beta-Bernoulli experience system models long-term tool reliability with continuous credit assignment, constructing similarity-weighted priors for future tool selection. **Results:** Experiments demonstrate reduced VQA hallucinations and classifier disagreement, outperforming strong pathology MLLM and agentic baselines. The framework highlights explicit evidence adjudication and reliability-aware tool modeling as critical for robust pathology agents. **Impact:** Advances reliable multimodal reasoning in high-stakes medical AI, offering a template for structured evidence integration in agentic systems.

[→ Read full article](https://arxiv.org/abs/2606.07549)

---

### [PATCH: Adversarial Patches as Honeytokens Against Visual Aimbot Cheaters in Multiplayer Games](https://arxiv.org/abs/2606.07650)

<small>**cs.CR updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `anti-cheat-systems` `computer-vision` `adversarial-attacks` `game-security`</small>

**Overview:** Visual aimbots in multiplayer online games (MOGs) use computer vision to detect opponents from screen captures, evading kernel-level anti-cheat systems. PATCH introduces adversarial patches as in-game honeytokens to proactively detect or disrupt visual aimbots by triggering their object detection models. **Method:** PATCH deploys visually distinct adversarial patches that either directly trigger the aimbot's YOLO-based object detector or flood the cheater's viewport to render the game unplayable. The approach is evaluated across patch sizes, screen resolutions, YOLO model variants, and configurations. **Results:** In white-box tests on a custom Unreal Engine game, PATCH achieves >90% detection rates for most patch sizes, with 60–90% cross-model transferability for larger patches. Validation on Fortnite demonstrates real-world applicability. **Impact:** Advances anti-cheat research by providing a detectable, scalable, and transferable defense against evasive visual cheats, addressing a critical gap in game security.

[→ Read full article](https://arxiv.org/abs/2606.07650)

---

### [Efficient Birkhoff Projection via Dual Newton and Implicit Differentiation for Manifold-Constrained Hyper-Connections](https://arxiv.org/abs/2606.07574)

<small>**cs.DC updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `Birkhoff-polytope` `Sinkhorn-Knopp` `implicit-differentiation` `CUDA-kernels`</small>

**Overview:** This paper addresses computational inefficiencies in manifold-constrained hyper-connections (mHCs), which enforce doubly stochastic constraints via Sinkhorn-Knopp iterations. The work targets the 4x4 Birkhoff projection setting, a practically important case, to improve speed and accuracy. **Method:** The authors reformulate the projection problem using duality, reducing it to a 3D unconstrained convex optimization solved via Newton’s method. For the backward pass, implicit differentiation replaces unrolled differentiation, eliminating intermediate state storage. A warp-level CUDA kernel leverages register-level primitives to maximize parallelism without global/shared memory I/O. **Results:** The solver achieves >20x speedup at large batch sizes while reducing marginal errors by orders of magnitude, particularly improving reliability for large-magnitude inputs. **Impact:** This work advances optimization for constrained ML systems, offering exact gradients and scalable performance for mHCs and related applications requiring Birkhoff projections.

[→ Read full article](https://arxiv.org/abs/2606.07574)

---

### [Distributed Multi-GPU LP Solver with Systems-Algorithm Co-Design for Large-Scale Block-Diagonal LPs](https://arxiv.org/abs/2606.07777)

<small>**cs.DC updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `linear-programming` `distributed-systems` `PyTorch` `ridge-regularization`</small>

**Overview:** This paper presents a distributed multi-GPU LP solver for large-scale block-diagonal LPs, addressing scale, temporal instability, and extensibility gaps in existing solvers like cuPDLP and DuaLip-Scala. **Method:** The system adopts column-sharded parallelism with fused Triton kernels and batched operations to minimize per-iteration overhead. Ridge-regularized LPs improve stability, and a continuation schedule balances convergence speed and solution fidelity. An operator-centric programming model enables composable constraint families without modifying the solve loop. **Results:** The system achieves order-of-magnitude speedups over DuaLip-Scala, near-linear multi-GPU scaling (3.86x on 4 GPUs), and scales beyond existing GPU solvers’ memory limits. **Impact:** This work advances large-scale optimization infrastructure, enabling faster and more stable solutions for production-scale LPs in ad allocation and content matching.

[→ Read full article](https://arxiv.org/abs/2606.07777)

---

### [LLM-Agentic Pipeline for Differentiable Translation of Legacy Fortran to JAX](https://arxiv.org/abs/2606.07681)

<small>**cs.SE updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `differentiable-programming` `legacy-code-translation` `JAX` `Fortran`</small>

**Overview:** This paper presents a five-phase LLM-based agentic pipeline to translate legacy Fortran codebases into differentiable JAX, addressing the challenge of migrating scientific modeling code. The work is significant for enabling gradient-based parameter estimation and sensitivity analysis in legacy systems. **Method:** The pipeline uses static dependency analysis to determine module translation order, iterative compile-repair loops for autonomous error correction, and a Fortran reference oracle to enforce numerical parity. The approach is evaluated on CLM-ml-v2, a 19,000-line Fortran land surface model. **Results:** The translated model computes the complete Jacobian in a single backward pass, recovers physical parameters in 8x fewer steps than gradient-free optimization, and achieves a 24x wall-clock speedup over sequential Fortran at ensemble size N=2,048. **Impact:** Advances differentiable programming for scientific modeling, enabling efficient parameter recovery and ensemble computations. The pipeline and translated model are released as reusable frameworks.

[→ Read full article](https://arxiv.org/abs/2606.07681)

---

### [SPIN: Swarm Policy Interference Network for Edge Multi-Agent Coordination](https://arxiv.org/abs/2606.07557)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `multi-agent-systems` `edge-computing` `tensor-networks` `neuro-symbolic-ai`</small>

**Overview:** Introduces SPIN, a framework for decentralized multi-agent swarm coordination on resource-constrained edge platforms, addressing exponential joint action space scaling and communication overhead. **Method:** Models swarm topologies as compressed tensor networks (Matrix Product State chains), reducing evaluation complexity from O(n^m) to O(m·n·χ²). Uses a hybrid neuro-symbolic pipeline: local neural networks pre-train offline to map geometric descriptors to target measures, while runtime adaptation applies Radon-Nikodym derivative as a zero-shot importance filter. **Results:** Validated in simulations for tracking, dispersion, and multi-goal coordination, demonstrating stable motion, anti-collapse spreading, and structured subgroup formation. **Impact:** Provides a mathematically grounded, low-power approach to scalable swarm intelligence, with potential applications in robotics and IoT.

[→ Read full article](https://arxiv.org/abs/2606.07557)

---

### [OmniMem: Memory-Efficient Streaming for Audio-Visual LLMs via Modality-Aware Compression](https://arxiv.org/abs/2606.07577)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `audio-visual-llm` `KV-cache-compression` `long-video-understanding` `memory-efficiency`</small>

**Overview:** OmniMem tackles the linear growth of video tokens and KV caches in audio-visual LLMs for long-form video understanding. It proposes a memory-efficient streaming framework with modality-aware strategies to address token imbalance between visual and audio modalities. **Method:** OmniMem separates memory management for visual and audio contexts and uses perturbation-aware memory selection to retain non-redundant KV states. Budget-aware fine-tuning further consolidates useful information into retained memory under deployment constraints. **Results:** On VideoMME Long, LVBench, and LVOmniBench, OmniMem improves accuracy by 2-4% over training-free compression baselines under identical memory budgets, with an additional 1-2% gain post fine-tuning. **Impact:** Enables scalable long-video inference for audio-visual LLMs, addressing a critical bottleneck in multimodal understanding.

[→ Read full article](https://arxiv.org/abs/2606.07577)

---

### [SWE-Marathon: Long-Horizon Agent Benchmark for Software Engineering](https://arxiv.org/abs/2606.07682)

<small>**cs.SE updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `AI-agents` `long-horizon-tasks` `software-engineering-benchmark` `agent-evaluation`</small>

**Overview:** Introduces SWE-Marathon, a benchmark for evaluating AI agents on long-horizon software engineering tasks, addressing the gap in current short-form agent benchmarks. **Method:** The benchmark consists of 20 tasks with executable environments, human-written reference solutions, and multi-layer verification suites. Tasks average 27.2M tokens, significantly longer than existing benchmarks. **Results:** Current frontier coding agents solve fewer than 30% of tasks, with failures due to poor self-verification, premature termination, and reward-hacking in 13.8% of rollouts. **Impact:** Advances the evaluation of AI agents in long-horizon planning, memory use, and complex workflows. The benchmark, evaluation code, and agent trajectories are released publicly.

[→ Read full article](https://arxiv.org/abs/2606.07682)

---

### [Boundary-Induced Acquisition Bias in Gaussian Processes for Bounded Domains](https://arxiv.org/abs/2606.07561)

<small>**cs.LG updates on arXiv.org** &nbsp;·&nbsp; 2026-06-09 05:00:00 &nbsp;·&nbsp; `gaussian-processes` `bayesian-optimization` `kernel-methods` `acquisition-bias`</small>

**Overview:** Investigates boundary-induced acquisition bias in Gaussian processes (GPs) with stationary kernels on bounded domains, a long-standing issue in geostatistics and Bayesian optimization. **Method:** Identifies the root cause as kernel correlation truncation at boundaries, leading to observation-independent distortion. Analyzes how this distortion affects acquisition strategies: variance maximization concentrates selections at corners, while negative integrated variance and predictive information gain move selections inward. Introduces a function-free diagnostic to quantify selection profiles across acquisitions, kernels, and geometries. **Results:** Demonstrates systematic biases in acquisition behavior driven by kernel geometry rather than task objectives. **Impact:** Highlights the need for geometry-aware acquisition functions in GP-based optimization, with implications for improving reliability in high-dimensional settings.

[→ Read full article](https://arxiv.org/abs/2606.07561)

---

## Cybersecurity

### [Nucleus: Minimalist Declarative Container Runtime with Nix Integration](https://github.com/sig-id/nucleus)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-06-10 00:03:40 &nbsp;·&nbsp; `container-runtime` `linux-kernel` `nix` `declarative-orchestration`</small>

![Nucleus: Minimalist Declarative Container Runtime with Nix Integration](https://opengraph.githubassets.com/482052cba73914de56efbecb7ba7638eb47e567b0b80582c29252467b151315c/sig-id/nucleus)

**Overview:** Nucleus is a lightweight, declarative container runtime for Linux that leverages kernel primitives (e.g., namespaces, cgroups, Landlock) to provide strong isolation without traditional runtime overhead. It targets hardened sandboxing and reproducible deployments, diverging from Docker by omitting image distribution and mutable state. **Method:** Uses Nix to build immutable root filesystems (closures) and a declarative config schema (snake_case long CLI options) for sandbox parameters. Supports production mode (reproducible NixOS rootfs) and agent modes (ephemeral tmpfs workspaces). Implements strict seccomp, Landlock, and optional gVisor isolation. Provides NixOS module integration for systemd-managed services with automatic dependency ordering. **Results:** PostgreSQL benchmarks show near bare-metal performance under Nucleus isolation (measured on Linux 6.18 x86_64), with overhead attributed to benchmark noise. Supports multi-container orchestration via TOML-based Compose equivalent. **Impact:** Advances minimalist, auditable containerization by decoupling security policy (via Nix) from runtime configuration, enabling reproducible and policy-compliant deployments. Open questions include long-term stability in production and broader platform support.

[→ Read full article](https://github.com/sig-id/nucleus)

---
