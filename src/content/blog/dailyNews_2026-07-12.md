---
title: "Daily AI Digest #2026-07-12"
date: "2026-07-12 23:56:32"
description: "nanoGPT-Seis: End-to-end educational LLM pretraining pipeline for seismology
Adaptive Recall: ML-Powered Memory API with Cognitive Science-Inspired Retrieval
isitsecure: Open-source AI-powered security scanner for web apps
AI Arcade: Benchmarking Coding Models via Retro-Style Gameplay
chatbrat.ai: Free, Browser-Based AI Companion Character Builder with Persistent Memory"
tags:
- "model-benchmarking"
- "reinforcement-learning"
- "memory-api"
- "retrieval-augmented-generation"
- "data-pipeline"
- "LLM-code-review"
- "persistent-memory"
- "SAST"
- "language-model-pretraining"
- "game-ai"
- "transformer"
- "ai-companionship"
- "DAST"
- "web-security"
- "character-builder"
- "seismology"
- "cognitive-modeling"

---

> - nanoGPT-Seis: End-to-end educational LLM pretraining pipeline for seismology
> - Adaptive Recall: ML-Powered Memory API with Cognitive Science-Inspired Retrieval
> - isitsecure: Open-source AI-powered security scanner for web apps
> - AI Arcade: Benchmarking Coding Models via Retro-Style Gameplay
> - chatbrat.ai: Free, Browser-Based AI Companion Character Builder with Persistent Memory

## AI & Large Language Models

### [nanoGPT-Seis: End-to-end educational LLM pretraining pipeline for seismology](https://github.com/jiazhe868/nanogpt-seis)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-07-12 22:58:38 &nbsp;·&nbsp; `language-model-pretraining` `transformer` `data-pipeline` `seismology`</small>

![nanoGPT-Seis: End-to-end educational LLM pretraining pipeline for seismology](https://opengraph.githubassets.com/a8e2b94bb3aae9a8964271e52c17d82d9f6697f298fa19977d3f5df6a29bd1f0/jiazhe868/nanogpt-seis)

**Overview:** nanoGPT-Seis is an educational repository demonstrating a complete pretraining pipeline for a 113M-parameter decoder-only Transformer (GQA+RoPE) on seismology-focused text. It emphasizes transparency in every stage (data crawling to inference) for pedagogy rather than state-of-the-art performance. **Method:** The pipeline includes: (1) crawling open-access seismology papers (Crossref/Unpaywall), preprints (arXiv/EarthArXiv), and Substack via threaded BFS with shared state management; (2) cleaning/deduplicating text (PDF line-break normalization, reference stripping, MinHash+LSH deduplication with O(N) complexity); (3) training a custom 16k-token BPE tokenizer (byte-level, domain-specific); (4) training a 113M-parameter decoder with grouped-query attention and rotary embeddings using 2-GPU DDP; (5) streaming inference. The corpus mixes 24% domain text (seismology) with 76% general text (Wikipedia+FineWeb-Edu) to balance fluency and specialization. **Results:** Adding ~540M general tokens (total ~823M tokens, 3.8 epochs) to a domain-only base (v1) reduces bits-per-byte by 35% on general prose while increasing domain perplexity by 22% (measured with bits-per-byte for fair comparison). The fluent base (v2) is intended for supervised fine-tuning. **Impact:** Advances ML education by open-sourcing a reproducible, hardware-measured pretraining pipeline with detailed design rationales. Open questions include optimal domain-to-general ratios and scaling laws for small models on narrow corpora.

[→ Read full article](https://github.com/jiazhe868/nanogpt-seis)

---

### [Adaptive Recall: ML-Powered Memory API with Cognitive Science-Inspired Retrieval](https://www.adaptiverecall.com/)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-12 22:08:20 &nbsp;·&nbsp; `memory-api` `retrieval-augmented-generation` `cognitive-modeling`</small>

![Adaptive Recall: ML-Powered Memory API with Cognitive Science-Inspired Retrieval](https://www.adaptiverecall.com/images/logo.jpg)

**Overview:** Adaptive Recall is a memory API for AI applications that dynamically stores, retrieves, and forgets information while improving retrieval quality over time. It targets limitations of traditional vector search by integrating cognitive science (ACT-R) and machine learning. **Method:** The system employs six parallel search strategies: vector similarity, temporal recency, keyword matching, and knowledge graph traversal, ranked using ACT-R activation modeling. Memories progress through confidence stages, fade with disuse, and are validated via user feedback. The API includes tools for CRUD operations (store, recall, forget) and integrates via MCP or REST with bearer token auth. **Results:** Claims automatic improvement through usage data validation and supports 500 free memories. Designed for scalability in agentic systems and CLI tools. **Impact:** Advances retrieval-augmented generation (RAG) by introducing adaptive, context-aware memory prioritization, though lacks published benchmarks or ablation studies.

[→ Read full article](https://www.adaptiverecall.com/)

---

### [isitsecure: Open-source AI-powered security scanner for web apps](https://github.com/jaurakunal/isitsecure)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-07-12 21:07:56 &nbsp;·&nbsp; `SAST` `DAST` `LLM-code-review` `web-security`</small>

![isitsecure: Open-source AI-powered security scanner for web apps](https://opengraph.githubassets.com/48146494b2223f3b08662a449ca13f707af48d97a118567bc1271d4bb417fcb4/jaurakunal/isitsecure)

**Overview:** isitsecure is an open-source CLI tool combining SAST, DAST, and LLM-powered code review to detect vulnerabilities in web apps (e.g., SSRF, XXE, injection) in a single scan. It targets solo developers and small teams needing actionable security insights without enterprise tooling. **Method:** The scanner integrates 40+ rule-based checks (expandable to 44) with optional LLM-based triage (Anthropic/Google API). It supports multiple modes (url-only, code-only, authenticated, full) and depths (quick/deep). SAST analyzes code structure (e.g., route mapping, auth detection), while DAST tests live endpoints. Cross-referencing and LSP integration reduce false positives. Outputs include fixes, SARIF/JSON reports, and a security badge. Benchmarks run against vulnerable apps (e.g., OWASP Juice Shop) in Docker with ground-truth scoring. **Results:** The tool reports recall and false-positive rates via a repeatable harness; results are tracked in benchmarks/RESULTS.md. Auto-fix mode generates git-ready patches for some vulnerabilities. **Impact:** Democratizes security scanning by unifying multiple techniques in one tool, reducing tool sprawl. Limitations include dependency on LLM API costs and coverage gaps for non-web systems.

[→ Read full article](https://github.com/jaurakunal/isitsecure)

---

### [AI Arcade: Benchmarking Coding Models via Retro-Style Gameplay](https://ai-arcade.app)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-12 22:01:36 &nbsp;·&nbsp; `model-benchmarking` `reinforcement-learning` `game-ai`</small>

**Overview:** AI Arcade is a web-based platform that evaluates coding models (e.g., Grok 4.5) by tasking them with creating playable retro-style games (e.g., "CATACOMB") under constrained inputs. It serves as a lightweight, interactive benchmark for generative AI systems. **Method:** Models are given a fixed prompt set and must generate games with specific mechanics (e.g., multi-stage action, falling hazards) using a shared input schema (6-key controls). The platform provides a standardized "machine" interface for each model, enabling direct comparison. Games include classics like Snake and Pong, adapted to the same ruleset. **Results:** No quantitative metrics are provided; the focus is on qualitative playability and adherence to constraints. The platform is free during the "experiment" phase. **Impact:** Offers a novel, low-overhead approach to evaluating coding models in interactive, multi-system environments, though lacks formal metrics or reproducibility standards.

[→ Read full article](https://ai-arcade.app)

---

### [chatbrat.ai: Free, Browser-Based AI Companion Character Builder with Persistent Memory](https://chatbrat.ai/bratlog/chat-with-ai-mommy-free)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-12 23:26:18 &nbsp;·&nbsp; `ai-companionship` `persistent-memory` `character-builder`</small>

![chatbrat.ai: Free, Browser-Based AI Companion Character Builder with Persistent Memory](https://chatbrat.ai/bratlog/chat-with-ai-mommy-free-hero.jpg)

**Overview:** chatbrat.ai is a free, browser-based platform for creating customizable AI companion characters (e.g., "AI Mommy") without sign-ups or downloads. It addresses the limitations of generic AI chatbots by enabling users to define personality, memory, and behavior for consistent, personalized interactions across chat and roleplay scenarios. **Method:** Users build characters via a form-based creator or AI-assisted description ("AI Forge"), defining traits like patience, speech patterns, and memory persistence. The system prioritizes persistent memory over stateless interactions, ensuring characters retain context across sessions. Pre-built maternal characters are also available for immediate use. **Results:** The platform eliminates paywalls, app installations, and account requirements, focusing on flexibility and user-defined personality. It positions itself as an alternative to apps like Talkie AI by offering free, memory-aware companionship. **Impact:** Highlights a growing trend in AI companionship toward user-defined, memory-capable characters, though it lacks rigorous technical validation or peer-reviewed methodology.

[→ Read full article](https://chatbrat.ai/bratlog/chat-with-ai-mommy-free)

---

