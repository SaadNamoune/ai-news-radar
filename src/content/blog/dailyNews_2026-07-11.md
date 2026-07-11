---
title: "Daily AI Digest #2026-07-11"
date: "2026-07-11 23:45:24"
description: "Mesh LLM: Distributed LLM inference via peer-to-peer QUIC mesh
Mesh LLM: Distributed inference for large language models via peer-to-peer mesh networking
Vasari: Browser-based tool for rigorous LLM judge evaluation and failure analysis
AI uncovers 15-year-old typo causing license plate misidentification; low-paid hacker army controversy
Token Time: Local token usage meter for AI agents on macOS
Context Graph: Proactive Agentic AI for Enterprise Productivity
Adversarial Social Epistemology: Trust Subversion in Scaffolded Public Communications
Compromised jscrambler npm package 8.14.0 delivers multi-platform infostealer with eBPF persistence
China- and India-aligned actors compromise Pakistani law enforcement via PlugX, ShadowPad, and Remcos RAT
isitsecure: AI-powered SAST+DAST+LLM security scanner for web apps
6 essential GitHub security settings for maintainers"
tags:
- "hacker-recruitment"
- "DevSecOps"
- "trust-scaffolding"
- "LLM-security"
- "mesh-networking"
- "token-metering"
- "web-security"
- "llm-serving"
- "local-ai"
- "security-flaw"
- "judge-validation"
- "DAST"
- "context-graph"
- "license-plate-recognition"
- "failure-analysis"
- "ai-bug-detection"
- "cyber-espionage"
- "geopolitical-cyberwar"
- "SAST"
- "malware-families"
- "proactive-agents"
- "cost-tracking"
- "macOS-tool"
- "supply-chain-attack"
- "epistemic-auditing"
- "social-epistemology"
- "distributed-inference"
- "human-in-the-loop"
- "peer-to-peer"
- "model-partitioning"
- "delta-detection"
- "infostealer"
- "APT"
- "eBPF"
- "QUIC"
- "npm-security"
- "GitHub-security"
- "llm-evaluation"
- "enterprise-ai"
- "inferential-chains"
- "vulnerability-management"

---

> - Mesh LLM: Distributed LLM inference via peer-to-peer QUIC mesh
> - Mesh LLM: Distributed inference for large language models via peer-to-peer mesh networking
> - Vasari: Browser-based tool for rigorous LLM judge evaluation and failure analysis
> - AI uncovers 15-year-old typo causing license plate misidentification; low-paid hacker army controversy
> - Token Time: Local token usage meter for AI agents on macOS
> - Context Graph: Proactive Agentic AI for Enterprise Productivity
> - Adversarial Social Epistemology: Trust Subversion in Scaffolded Public Communications
> - Compromised jscrambler npm package 8.14.0 delivers multi-platform infostealer with eBPF persistence
> - China- and India-aligned actors compromise Pakistani law enforcement via PlugX, ShadowPad, and Remcos RAT
> - isitsecure: AI-powered SAST+DAST+LLM security scanner for web apps
> - 6 essential GitHub security settings for maintainers

## AI & Large Language Models

### [Mesh LLM: Distributed LLM inference via peer-to-peer QUIC mesh](https://www.iroh.computer/blog/mesh-llm)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-11 23:38:57 &nbsp;·&nbsp; `distributed-inference` `llm-serving` `peer-to-peer` `QUIC`</small>

![Mesh LLM: Distributed LLM inference via peer-to-peer QUIC mesh](https://www.iroh.computer/api/og?title=Blog&subtitle=Mesh%20LLM:%20distributed%20AI%20computing%20on%20iroh)

**Overview:** Mesh LLM enables distributed LLM inference across heterogeneous machines using iroh’s peer-to-peer QUIC mesh, offering an alternative to centralized cloud APIs. It targets teams seeking control over model updates, data locality, and hardware costs without sacrificing compatibility with OpenAI clients. **Method:** Mesh LLM partitions large models into layer ranges (e.g., layers 0–15 on one node, 16–31 on another) and streams activations between stages via QUIC. Nodes run iroh endpoints (≈18 MB) for identity, NAT traversal, and secure transport. The system uses ALPN-negotiated QUIC streams (mesh-llm/1) to multiplex gossip, inference, and routing over a single bidirectional connection. Plugins declare capabilities via manifests, and MCP/HTTP endpoints expose services. **Results:** Supports 40+ models (0.5B–235B parameters, including MoE), with split-mode enabling inference on machines unable to hold the full model. OpenAI clients interact with localhost:9337/v1, abstracting the distributed backend. **Impact:** Advances decentralized AI infrastructure by reducing reliance on cloud providers, enabling private compute sharing, and lowering costs. Open questions include scalability limits, fault tolerance under churn, and security guarantees in adversarial mesh deployments.

[→ Read full article](https://www.iroh.computer/blog/mesh-llm)

---

### [Mesh LLM: Distributed inference for large language models via peer-to-peer mesh networking](https://www.iroh.computer/blog/mesh-llm)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-07-11 23:38:57 &nbsp;·&nbsp; `distributed-inference` `mesh-networking` `QUIC` `model-partitioning`</small>

![Mesh LLM: Distributed inference for large language models via peer-to-peer mesh networking](https://www.iroh.computer/api/og?title=Blog&subtitle=Mesh%20LLM:%20distributed%20AI%20computing%20on%20iroh)

**Overview:** Mesh LLM enables distributed inference of large language models across heterogeneous machines without centralized coordination, targeting organizations with idle GPU resources. It addresses lock-in, cost, and privacy concerns of cloud-based LLM APIs by allowing teams to pool on-prem or edge compute into a single logical endpoint. **Method:** Uses iroh’s NAT-traversing QUIC mesh for secure, direct peer connections and partitions models by layers (Skippy) across nodes. The system exposes a local OpenAI-compatible endpoint (localhost:9337/v1) while handling gossip, routing, and pipeline orchestration transparently. **Results:** Supports models from 0.5B to 235B parameters via layer-wise partitioning; leverages QUIC’s ALPN for multiplexing control/data streams; includes fallback relays for NAT traversal. **Impact:** Advances decentralized AI infrastructure, enabling cost-efficient, private, and scalable LLM serving. Open questions include fault tolerance under churn and optimal partitioning strategies for MoE models.

[→ Read full article](https://www.iroh.computer/blog/mesh-llm)

---

### [Vasari: Browser-based tool for rigorous LLM judge evaluation and failure analysis](https://github.com/AntoineF23/verdict)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-07-11 20:55:44 &nbsp;·&nbsp; `llm-evaluation` `judge-validation` `failure-analysis` `human-in-the-loop`</small>

![Vasari: Browser-based tool for rigorous LLM judge evaluation and failure analysis](https://opengraph.githubassets.com/a5a0212af3e25e462b8e4c7824d849ec5061ce4e1f562ec673ccdb9cce1f56a1/AntoineF23/vasari)

**Overview:** Vasari is a browser-based tool for evaluating and improving LLM judges used in production systems. It enforces a rigorous loop: human labeling → judge validation → deployment, ensuring judges match human reviewers before replacing them. **Method:** Implements open/axial coding for failure analysis, evaluates judges using Cohen’s kappa, TPR, TNR, and precision on held-out test sets. Supports trace formats (OTLP, OpenInference, Langfuse) and exports verdicts for production use. **Results:** Provides real-time metrics (kappa, F1) and enforces stratified train/test splits to prevent overfitting. Built as a single offline HTML file using Vite and TypeScript. **Impact:** Advances responsible AI deployment by standardizing judge validation. Open questions include scalability to high-volume traffic and generalization across domains.

[→ Read full article](https://github.com/AntoineF23/verdict)

---

### [AI uncovers 15-year-old typo causing license plate misidentification; low-paid hacker army controversy](https://www.untempled.com/guilhermen/art/ai-found-a-secret-computer-bug-hidden-for-15-years-plus-why-cops-chased-a-reporter-over-a-typo-cmrgwcw7o0001ky04qu4ubln8)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-11 22:53:28 &nbsp;·&nbsp; `ai-bug-detection` `license-plate-recognition` `security-flaw` `hacker-recruitment`</small>

![AI uncovers 15-year-old typo causing license plate misidentification; low-paid hacker army controversy](https://assets.untempled.com/images/1783807510486-sfasdf.png)

**Overview:** This article highlights two unrelated tech stories: (1) VEGA, an AI tool, discovered a 15-year-old typo in legacy code (fixed by Google for $92K), demonstrating AI’s bug-finding potential; (2) A typo in a license plate number led to a reporter’s vehicle being flagged as stolen by Flock’s AI camera system, revealing flaws in human-AI interaction. **Method:** VEGA analyzed old code to identify the typo; Flock’s AI system misclassified a license plate due to an input error. **Results:** The typo caused a 15-year oversight in the codebase; the license plate incident was resolved without harm. The article also critiques a US government program offering $22.5K/year to train "hacker armies," raising concerns about pay and accountability. **Impact:** Underscores the value of AI in static analysis and the risks of over-reliance on AI systems without robust input validation. Open questions include the scalability of AI-driven bug detection and the ethical implications of low-budget cybersecurity hiring.

[→ Read full article](https://www.untempled.com/guilhermen/art/ai-found-a-secret-computer-bug-hidden-for-15-years-plus-why-cops-chased-a-reporter-over-a-typo-cmrgwcw7o0001ky04qu4ubln8)

---

### [Token Time: Local token usage meter for AI agents on macOS](https://tokentime.bar)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-11 23:13:52 &nbsp;·&nbsp; `token-metering` `local-ai` `macOS-tool` `cost-tracking`</small>

![Token Time: Local token usage meter for AI agents on macOS](https://tokentime.bar/desk.png)

**Overview:** Token Time is a lightweight macOS utility (Apple Silicon, macOS 13+) that meters token consumption from local AI agents and nudges users to take breaks. It targets developers and power users concerned about runaway token usage or costs. **Method:** Runs locally without accounts or telemetry, tracking tokens, model-specific spend, and hourly usage via a menu-bar icon. Users configure thresholds (e.g., alerts every 100M tokens) and receive full-screen reminders. The app reads usage data locally and presents charts, costs, and settings without cloud sync. **Results:** Provides real-time visibility into token burn and comparative analytics (e.g., model spend). No benchmarks provided; functionality is limited to monitoring and user-defined thresholds. **Impact:** Addresses the pain point of unchecked AI agent costs but lacks integration with cloud APIs or multi-device sync. Useful for privacy-conscious users but may not scale to team environments.

[→ Read full article](https://tokentime.bar)

---

## CS Research & Papers

### [Context Graph: Proactive Agentic AI for Enterprise Productivity](https://arxiv.org/abs/2607.07721)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-07-11 05:00:00 &nbsp;·&nbsp; `proactive-agents` `enterprise-ai` `context-graph` `delta-detection`</small>

**Overview:** Introduces proactive agents for enterprise AI that surface actionable insights *before* explicit user queries, addressing limitations of reactive RAG/agent frameworks. **Method:** Proposes a *Context Graph* (live relational model of entities/relationships/state transitions) with three components: (1) *Delta Detection Engine* (continuous state-change monitoring), (2) *Proactivity Scorer* (ranks insights by urgency/relevance/persona-fit via a unified *Proactivity Score* function), and (3) *Surfacing Layer* (LLM-powered notifications with grounded explanations). Implemented in Python using NetworkX and Anthropic Claude API. **Results:** Evaluated across three enterprise case studies (contract lifecycle, incident response, sales pipeline), achieving Precision@5=0.83, false positive rate=0.11, and reducing mean time-to-surface from 47 minutes (reactive) to <30 seconds. **Impact:** Advances enterprise AI toward anticipatory systems; open questions include scalability to dynamic environments and generalization across domains.

[→ Read full article](https://arxiv.org/abs/2607.07721)

---

### [Adversarial Social Epistemology: Trust Subversion in Scaffolded Public Communications](https://arxiv.org/abs/2607.07760)

<small>**cs.AI updates on arXiv.org** &nbsp;·&nbsp; 2026-07-11 05:00:00 &nbsp;·&nbsp; `social-epistemology` `trust-scaffolding` `inferential-chains` `epistemic-auditing`</small>

**Overview:** Develops a theoretical framework (*Adversarial Social Epistemology*) to analyze how agents exploit trust in scaffolded public communications (e.g., testimony, institutional certification) for strategic gains. **Method:** Introduces language to describe trust subversion mechanisms (e.g., distorting inferential chains, under-specifying commitments) and proposes auditing machinery to detect/repair breaches. Uses *enriched epistemic networks* with inferentialist semantics. **Results:** Conceptual validation via case studies (e.g., misinformation in policy debates), but lacks empirical evaluation. **Impact:** Advances understanding of epistemic vulnerabilities in modern information ecosystems; open questions include scalability to large-scale networks and integration with computational auditing tools.

[→ Read full article](https://arxiv.org/abs/2607.07760)

---

## Cybersecurity

### [Compromised jscrambler npm package 8.14.0 delivers multi-platform infostealer with eBPF persistence](https://thehackernews.com/2026/07/compromised-jscrambler-8140-npm-release.html)

<small>**The Hacker News** &nbsp;·&nbsp; 2026-07-11 18:59:26 &nbsp;·&nbsp; `supply-chain-attack` `infostealer` `npm-security` `eBPF`</small>

![Compromised jscrambler npm package 8.14.0 delivers multi-platform infostealer with eBPF persistence](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhodiWPXDsex6YL7v4e2n_D5MJFMht76GRRmHTdiG61tfEmsoZyow4tkiS3ORACILDl2fNP27YQkw1XLSBKGcom-DhCVzzPDdkdSgeMGdxcVL_rgO70x5LqZcjxKAPTtFOquB8LwSBPWrSpflqCzns-cFZ_EVm0WZfV7wSoPM3S-7_IGtCT3AjxY0rfITU/s1600/npm-js.jpg)

**Overview:** A malicious version of the jscrambler npm package (8.14.0) was published on July 11, 2026, containing a preinstall hook that executes a Rust-based infostealer across Windows, macOS, and Linux. The attack bypassed normal release flows, targeting developer environments to exfiltrate secrets and establish kernel-level persistence via eBPF on Linux. **Method:** The payload is delivered via a preinstall script (`setup.js`) that unpacks a 7.8MB container (`intro.js`) containing platform-specific binaries. The stealer targets cloud credentials (AWS/Azure/GCP), cryptocurrency wallets, password managers, and AI tool configs (Claude Desktop, Cursor, etc.). On Linux, it loads an eBPF program into the kernel; Windows/macOS variants add anti-debugging and persistence (scheduled task/LaunchAgent). **Results:** The attack was flagged 6 minutes post-publication but remained on npm for days. Indicators include hardcoded IPs, Tor infrastructure, and hidden temp files. No CVE assigned yet. **Impact:** Demonstrates escalating supply-chain threats targeting build systems and AI tooling. Highlights npm 12’s mitigation (disabled install hooks by default) as critical but insufficient for legacy clients.

[→ Read full article](https://thehackernews.com/2026/07/compromised-jscrambler-8140-npm-release.html)

---

### [China- and India-aligned actors compromise Pakistani law enforcement via PlugX, ShadowPad, and Remcos RAT](https://thehackernews.com/2026/07/hackers-weaponize-balochistan-police.html)

<small>**The Hacker News** &nbsp;·&nbsp; 2026-07-11 18:49:31 &nbsp;·&nbsp; `cyber-espionage` `APT` `malware-families` `geopolitical-cyberwar`</small>

![China- and India-aligned actors compromise Pakistani law enforcement via PlugX, ShadowPad, and Remcos RAT](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimRVwRIhs54UhNHyRll9YzVxICmTpgqwjAK1Sy7vYt6FAzb9oImcFpuM0J8dOWdtdjCdlROkternhP9r5jZD9HNvwVwcyRzhesdYgbVjUpJk7p4rxDDJSdEUibs1Gk-Ihy1bTcxs8fA7kgG49ImfTWEZO6068Ui-_X6sTTraCg8lFuucYJrUJi2RhdXyG2/s1600/pakistan.jpg)

**Overview:** SentinelLabs uncovered a multi-year cyber espionage campaign (Feb 2024–Apr 2026) targeting Pakistani law enforcement, including Balochistan Police, Khyber Pakhtunkhwa Police, and Punjab Safe Cities Authority. Threat actors deployed PlugX, ShadowPad (China-nexus), and Remcos RAT (India-nexus) to steal biometric data, criminal records, and personnel files. **Method:** Attack chains involved compromising web applications (e.g., Complaint Management System) to deploy implants like `cms_plugin.exe`. Lures included decoy documents about Afghan repatriation plans. Infrastructure overlaps tied Remcos to Mysterious Elephant (APT-C-08) and SideWinder. **Results:** Four distinct malware clusters identified, with PlugX/ShadowPad targeting broader Asian regions. Cobalt Strike C2 (`142.171.183[.]8`) linked to China-aligned actors. **Impact:** Highlights geopolitical tensions driving cyber espionage against critical infrastructure. Demonstrates how compromised public-facing systems can pivot to deliver malware to both citizens and officials.

[→ Read full article](https://thehackernews.com/2026/07/hackers-weaponize-balochistan-police.html)

---

### [isitsecure: AI-powered SAST+DAST+LLM security scanner for web apps](https://github.com/jaurakunal/isitsecure)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-07-11 06:39:42 &nbsp;·&nbsp; `web-security` `SAST` `DAST` `LLM-security`</small>

![isitsecure: AI-powered SAST+DAST+LLM security scanner for web apps](https://opengraph.githubassets.com/693a17cb63cec48aea124c570e48681a69fa4e09ef6b9d60679fd86b6508c924/jaurakunal/isitsecure)

**Overview:** isitsecure is an open-source CLI tool combining SAST, DAST, and LLM-based code review to detect vulnerabilities in web applications. It targets solo developers and small teams needing consolidated security scanning without enterprise tooling complexity. **Method:** The tool integrates 40+ rule-based scanners (15 DAST, 8 special DAST, 17 SAST by default) with optional LLM triage for semantic analysis. Scans run via `isitsecure scan --repo` or `isitsecure scan <url>` with modes like `code-only`, `url-only`, or `authenticated`. A Language Server Protocol (LSP) integration suppresses false positives by validating auth flows. **Results:** Includes a benchmark harness scoring recall/false positives on vulnerable apps (e.g., OWASP Juice Shop) and outputs fixes via `git diff`. Supports 4 output formats (table/json/html/sarif) and auto-generates security badges. **Impact:** Advances practical DevSecOps by unifying disparate security tools into a single workflow, though LLM features require API tokens and Docker for DAST benchmarks.

[→ Read full article](https://github.com/jaurakunal/isitsecure)

---

### [6 essential GitHub security settings for maintainers](https://github.blog/security/6-security-settings-every-github-maintainer-should-enable-this-week/)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-07-11 00:39:44 &nbsp;·&nbsp; `GitHub-security` `DevSecOps` `vulnerability-management`</small>

![6 essential GitHub security settings for maintainers](https://github.blog/wp-content/uploads/2026/01/generic-github-security-logo.png)

**Overview:** GitHub Security Lab recommends 6 free settings to harden open-source projects against common attacks, emphasizing low-effort configurations for non-security experts. **Method:** Settings include adding a SECURITY.md file for coordinated disclosure, enabling private vulnerability reporting, and configuring dependency review, code scanning, secret scanning, and Dependabot alerts. The "Protect Your Project" guided flow automates setup. **Results:** These settings reduce attack surface by closing easy exploitation vectors (e.g., unpatched dependencies, exposed secrets) without requiring advanced security expertise. **Impact:** Improves baseline security posture for maintainers, though does not replace dedicated security engineering. Focuses on automation and scalability for open-source projects.

[→ Read full article](https://github.blog/security/6-security-settings-every-github-maintainer-should-enable-this-week/)

---
