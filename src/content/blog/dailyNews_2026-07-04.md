---
title: "Daily AI Digest #2026-07-04"
date: "2026-07-04 23:57:20"
description: "Kortex: Out-of-core LLM inference engine in Rust with streaming across memory hierarchy
Agent Budget Protocol: Real-time cost control for AI agent runs
Can AI invert AES? A feasibility analysis of breaking AES-XTS with ML
AI Cost Calculator: Procurement-grade multi-agent LLM deployment cost modeling
Microsoft’s experimental Copilot OS (Aion) explores agentic AI-driven desktop UX
Apple’s Hide My Email Service Leaks Real Addresses Due to Unpatched Vulnerability
Alibaba Bans Claude Code Over Hidden Tracking Code for Chinese Users
PHP Ecosystem Security Engineering: One Month Progress Report"
tags:
- "copilot-integration"
- "PHP-ecosystem"
- "agent-framework"
- "email-forwarding"
- "ui-innovation"
- "open-source-security"
- "cryptanalysis"
- "cost-modeling"
- "procurement-tools"
- "streaming-architecture"
- "budget-enforcement"
- "ai-cost-control"
- "vulnerability-scanning"
- "LiteLLM"
- "llm-inference"
- "one-way-functions"
- "privacy-leak"
- "spyware"
- "constraint-satisfaction"
- "out-of-core"
- "agentic-ai"
- "CVE-unknown"
- "code-agent"
- "windows-os"
- "llm-deployment"
- "security-research"
- "rust"
- "supply-chain-risk"
- "aes-inversion"
- "security-automation"
- "enterprise-policy"

---

> - Kortex: Out-of-core LLM inference engine in Rust with streaming across memory hierarchy
> - Agent Budget Protocol: Real-time cost control for AI agent runs
> - Can AI invert AES? A feasibility analysis of breaking AES-XTS with ML
> - AI Cost Calculator: Procurement-grade multi-agent LLM deployment cost modeling
> - Microsoft’s experimental Copilot OS (Aion) explores agentic AI-driven desktop UX
> - Apple’s Hide My Email Service Leaks Real Addresses Due to Unpatched Vulnerability
> - Alibaba Bans Claude Code Over Hidden Tracking Code for Chinese Users
> - PHP Ecosystem Security Engineering: One Month Progress Report

## AI & Large Language Models

### [Kortex: Out-of-core LLM inference engine in Rust with streaming across memory hierarchy](https://github.com/Vage91/Kortex)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-07-04 23:47:59 &nbsp;·&nbsp; `llm-inference` `out-of-core` `streaming-architecture` `rust`</small>

![Kortex: Out-of-core LLM inference engine in Rust with streaming across memory hierarchy](https://opengraph.githubassets.com/1fe82e4300c58e30d590ff1a00e22ed7f180fcdeddd1619620262843bf06d937/Vage91/Kortex)

**Overview:** Kortex is a novel out-of-core LLM inference engine implemented from scratch in Rust, enabling inference of models far exceeding GPU VRAM by treating inference as a streaming problem across the memory hierarchy (NVMe → RAM → VRAM → compute). It achieves ~1.95 tok/s for Llama-3.3-70B (42.5 GB weights) on a 20 GB GPU, outperforming llama.cpp on the same hardware. **Method:** Kortex uses a streaming pipeline with FILE_FLAG_NO_BUFFERING, a wgpu+WGSL GPU backend (Vulkan/DX12), and a pure-CPU reference backend for correctness verification. It employs speculative decoding, parallel NVMe reads, and auto-detected VRAM/RAM budgets. **Results:** On a Radeon RX 7900 XT (20 GB VRAM, 32 GB RAM, dual NVMe), Kortex achieves 1.95 tok/s for 70B vs. 0.21 tok/s for partial offload in llama.cpp, and 160 tok/s for a 30B MoE model. **Impact:** Advances practical LLM deployment by enabling large-model inference on consumer GPUs without vendor-specific SDKs, opening new research directions in memory-efficient inference architectures.

[→ Read full article](https://github.com/Vage91/Kortex)

---

### [Agent Budget Protocol: Real-time cost control for AI agent runs](https://github.com/iamapsrajput/agent-budget-protocol/blob/main/RFC.md)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-04 23:42:00 &nbsp;·&nbsp; `ai-cost-control` `agent-framework` `budget-enforcement` `LiteLLM`</small>

![Agent Budget Protocol: Real-time cost control for AI agent runs](https://opengraph.githubassets.com/c0cdcd6a8e209989d29d0b4c103faa5c0e824b2818638cd6f610304aca219ba8/iamapsrajput/agent-budget-protocol)

**Overview:** The Agent Budget Protocol (RFC) proposes a real-time budget decision plane to prevent unbounded AI agent spend by atomically reserving estimated costs before provider calls and reconciling afterward. **Method:** The protocol introduces a run-scoped budget authority that enforces cost limits across hierarchical scopes (run/user/team/key/feature) via atomic transactions (e.g., Redis Lua scripts). It supports four enforcement modes (advisory_estimate, soft_gate, hard_gate, actuals_only) and dynamically adjusts `effective_max_output_tokens` to bound exposure. Headers like `X-Budget-Decision` and `X-Budget-Remaining-USD` provide machine-readable state. **Results:** Phase 1 integrates with LiteLLM; Phase 2 targets a standalone sidecar. The design guarantees no overage in hard-gate mode if price tables model all billable dimensions (e.g., reasoning tokens). **Impact:** Addresses structural issues in agentic AI (e.g., $4.2K weekend bills) by shifting from post-hoc auditing to pre-call enforcement. Open questions include adoption barriers and handling unmodeled billing classes.

[→ Read full article](https://github.com/iamapsrajput/agent-budget-protocol/blob/main/RFC.md)

---

### [Can AI invert AES? A feasibility analysis of breaking AES-XTS with ML](https://www.juanslozano.com/blog/ai-aes)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-04 23:11:17 &nbsp;·&nbsp; `aes-inversion` `cryptanalysis` `constraint-satisfaction` `one-way-functions`</small>

**Overview:** This post argues that AI *might* eventually invert AES by framing it as a constraint-satisfaction problem (CSP), though complexity theory suggests fundamental limits. **Method:** The author models AES-XTS (used in full-disk encryption) as a CSP with two encodings: (1) *opaque* (monolithic cipher as a black box) and (2) *lowered* (exposing internal wires for intermediary rewards). The latter enables local search by providing thousands of intermediate variables (wires) to optimize, but requires maintaining consistency across constraints. **Results:** The CSP approach leverages the fact that AES’s security relies on average-case hardness, not worst-case NP-hardness. However, the search landscape remains challenging due to AES’s avalanche effect and the need for precise constraint modeling. **Impact:** While no breakthrough is demonstrated, the post highlights a plausible research direction for cryptanalysis using ML. It underscores the tension between theoretical hardness and practical solvability, inviting further work on CSP-based attacks or hybrid AI-cryptanalysis methods.

[→ Read full article](https://www.juanslozano.com/blog/ai-aes)

---

### [AI Cost Calculator: Procurement-grade multi-agent LLM deployment cost modeling](https://calc.ajinkya.ai/)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-07-04 20:43:51 &nbsp;·&nbsp; `cost-modeling` `llm-deployment` `procurement-tools`</small>

**Overview:** AI Cost Calculator is a browser-based tool for estimating TCO of multi-agent LLM deployments, calibrated against real API runs (OpenAI/Anthropic). It models perturbations (MAU, cache hit rate, provider rates) and supports self-host vs. API comparisons. **Method:** Uses character-based token heuristics (±10% accuracy), empirically derived multipliers (e.g., FedRAMP High × active-active = ×2.60), and a flat self-host cost model. Workloads are represented as JSON with editable parameters. **Results:** Provides cost estimates with ±20% accuracy vs. production, including reservation savings and perturbation analysis. **Impact:** Advances practical LLM deployment planning by enabling data-driven procurement decisions, though limited to high-level modeling.

[→ Read full article](https://calc.ajinkya.ai/)

---

### [Microsoft’s experimental Copilot OS (Aion) explores agentic AI-driven desktop UX](https://www.windowscentral.com/microsoft/windows-11/microsoft-copilot-os-revealed-in-leaked-video-lightweight-windows-os-exploration-features-new-desktop-ui-built-entirely-around-copilot-and-agentic-ai)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-07-04 23:50:45 &nbsp;·&nbsp; `agentic-ai` `windows-os` `copilot-integration` `ui-innovation`</small>

![Microsoft’s experimental Copilot OS (Aion) explores agentic AI-driven desktop UX](https://cdn.mos.cms.futurecdn.net/E6sdJDERh9uyUYNHb6yjEn-2560-80.jpg)

**Overview:** A leaked 2024 video reveals Microsoft’s experimental "Copilot OS" (codenamed Aion), a lightweight Windows derivative (Win3) built around agentic AI with Copilot at its core. The OS explores a desktop UI where Copilot powers a new Start menu and Taskbar with "Spaces" for app/site grouping, but runs only web apps (leveraging Windows 365 for legacy support). **Method:** Aion uses a stripped-down Windows codebase (Win3) optimized for faster updates, battery life, and security by excluding legacy Win32 apps. The UI mimics traditional desktop elements but is architected for AI-first interactions, with Copilot as the central interface. **Results:** The video demonstrates a functional prototype with Taskbar "Spaces" and AI-driven Start menu, but it remains unclear if this is a hackathon project or a product roadmap. Microsoft’s recent "Project Solara" suggests evolution toward agentic OS capabilities. **Impact:** While not a shipping product, Aion highlights Microsoft’s exploration of AI-native desktop experiences and may influence future Windows 11 features. Open questions remain about user adoption and Copilot’s controversial role in the ecosystem.

[→ Read full article](https://www.windowscentral.com/microsoft/windows-11/microsoft-copilot-os-revealed-in-leaked-video-lightweight-windows-os-exploration-features-new-desktop-ui-built-entirely-around-copilot-and-agentic-ai)

---

## Cybersecurity

### [Apple’s Hide My Email Service Leaks Real Addresses Due to Unpatched Vulnerability](https://www.wired.com/story/security-roundup-apples-hide-my-email-service-fails-to-hide-your-email/)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-07-04 18:01:39 &nbsp;·&nbsp; `CVE-unknown` `privacy-leak` `email-forwarding` `security-research`</small>

![Apple’s Hide My Email Service Leaks Real Addresses Due to Unpatched Vulnerability](https://media.wired.com/photos/6a459c14043fba997ea26852/191:100/w_1280,c_limit/security_roudnup_GettyImages-1157988186.jpg)

**Overview:** A critical privacy flaw in Apple’s Hide My Email service, discovered in June 2025, allows attackers to uncover users’ real email addresses despite the service’s intended anonymization. The vulnerability has persisted for over a year despite Apple’s claims of remediation. **Method:** The attack vector involves exploiting weaknesses in the email forwarding mechanism of @icloud.com aliases to trace them back to the original account. Security researcher Tyler Murphy reported the issue to Apple in 2024, but testing in 2025 confirmed exploitability. Apple acknowledged the issue but has not released a patch. **Results:** In controlled tests, 100% of tested Hide My Email addresses were exploitable. The flaw undermines the service’s core privacy promise and exposes users to targeted tracking or phishing. **Impact:** This vulnerability erodes trust in privacy-preserving tools and highlights risks in relying on proprietary anonymization systems. Open questions include the full scope of affected users and Apple’s timeline for a fix.

[→ Read full article](https://www.wired.com/story/security-roundup-apples-hide-my-email-service-fails-to-hide-your-email/)

---

### [Alibaba Bans Claude Code Over Hidden Tracking Code for Chinese Users](https://www.scmp.com/tech/big-tech/article/3359375/alibaba-bans-staff-using-claude-code-over-anthropic-spyware-concerns)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-07-04 07:02:29 &nbsp;·&nbsp; `spyware` `code-agent` `supply-chain-risk` `enterprise-policy`</small>

![Alibaba Bans Claude Code Over Hidden Tracking Code for Chinese Users](https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2026/07/03/4b7ecbd0-179f-44fa-bd51-278c76e2a29b_88a762fd.jpg?itok=wcisl7Sd&v=1783088147)

**Overview:** Alibaba Group banned internal use of Anthropic’s Claude Code after discovering hidden tracking code that could identify Chinese users or affiliates, labeling it a high-risk software vulnerability. The ban takes effect July 10, 2026. **Method:** Anthropic embedded code in Claude Code to detect whether users were in China or associated with Chinese AI labs, allegedly to comply with US export controls. Security researchers exposed this practice via public forums (Reddit, GitHub). The tracking mechanism operated covertly, raising concerns about data exfiltration and compliance with Chinese data sovereignty laws. **Results:** Alibaba’s internal notice cited "back-door risks" and "security vulnerabilities," prompting a company-wide prohibition. The incident has sparked broader backlash in China regarding US AI tooling and data privacy. **Impact:** Highlights risks of proprietary AI coding agents in regulated environments and the need for transparent supply chains. Open questions include the legality of such tracking under Chinese law and Anthropic’s response to mitigate reputational damage.

[→ Read full article](https://www.scmp.com/tech/big-tech/article/3359375/alibaba-bans-staff-using-claude-code-over-anthropic-spyware-concerns)

---

### [PHP Ecosystem Security Engineering: One Month Progress Report](https://thephp.foundation/blog/2026/06/23/one-month-of-ecosystem-security-engineering/)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-07-04 21:57:40 &nbsp;·&nbsp; `open-source-security` `vulnerability-scanning` `PHP-ecosystem` `security-automation`</small>

![PHP Ecosystem Security Engineering: One Month Progress Report](https://thephp.foundation/assets/share/2026-06-23-one-month-of-ecosystem-security-engineering.png)

**Overview:** The PHP Foundation’s new Ecosystem Security Team, funded by Alpha-Omega, reports on its first month of securing the PHP open-source ecosystem. The initiative focuses on automated vulnerability scanning, maintainer support, and collaborative tooling to address security gaps in widely used Composer packages and frameworks. **Method:** The team scanned over 300 top Composer packages and major frameworks, using AI-assisted analysis and containerized environments to identify vulnerabilities. Scrutineer, a shared tool developed with other language ecosystems, was used to standardize reporting, deduplicate findings, and generate reproducible exploits. Maintainers were engaged via direct outreach, with AI models assisting in triage and fix validation. **Results:** Nearly 100 public fixes were implemented across the ecosystem, including mass fixes for GitHub Actions templates affecting 200 repositories. Report quality improved significantly, with maintainers validating findings independently using their own tools. Challenges included false positives, reproducible outputs, and complex threat modeling in PHP core. **Impact:** Advances open-source security practices by establishing a sustainable model for vulnerability disclosure and remediation in the PHP ecosystem. Open questions include long-term scalability and deeper integration with PHP core development.

[→ Read full article](https://thephp.foundation/blog/2026/06/23/one-month-of-ecosystem-security-engineering/)

---
