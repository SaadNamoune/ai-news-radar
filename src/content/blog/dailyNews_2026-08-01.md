---
title: "Daily AI Digest #2026-08-01"
date: "2026-08-01 23:53:20"
description: "Coldcard Hardware Wallet Seed Flaw Exploited in $71M Bitcoin Theft
AI-Powered Automated Cognitive Testing System for Wild Capuchin Monkeys
Minimal LLM Post-Training on 8GB GPU: SFT, DPO, GRPO with Open-Source Frameworks
Evaluating Large Language Models for Personalized Financial Advice
ThinAir: Probabilistic Python objects with LLM-generated attributes and methods
Ten Advances in Mathematics and Theoretical Computer Science
Coldcard Hardware Wallet PRNG Flaw Enables Offline Seed Reconstruction and $70M Bitcoin Theft
Coldcard Hardware Wallet Flaw Exploited via Weak Randomness in Seeds
Supply-Chain Attack on Adform’s JavaScript Library Rewrites Crypto Wallet Addresses
Presigned URLs: A Deliberate Security Vulnerability in Object Storage
ShinyHunters Claims Breach of Brinks Home Salesforce Instance"
tags:
- "object-storage"
- "CVE-analysis"
- "supply-chain-attack"
- "crypto-address-hijacking"
- "financial-ai"
- "cryptographic-failure"
- "authentication"
- "probabilistic-programming"
- "computer-vision"
- "uncertainty-quantification"
- "BIP-39"
- "prompt-engineering"
- "cryptographic-entropy"
- "JavaScript"
- "PII-leak"
- "edge-computing"
- "PRNG"
- "ShinyHunters"
- "wildlife-monitoring"
- "python-runtime"
- "SigV4"
- "llm-integration"
- "XOR-obfuscation"
- "theoretical-computer-science"
- "LLM-evaluation"
- "mathematics"
- "hardware-security"
- "SFT"
- "behavioral-finance"
- "DPO"
- "hardware-wallet"
- "llm-post-training"
- "reinforcement-learning"
- "behavioral-experiments"
- "cryptographic-vulnerability"
- "randomness-failure"
- "replay-attack"
- "GRPO"
- "AI-research"
- "Salesforce"
- "data-breach"
- "entropy-vulnerability"

---

> - Coldcard Hardware Wallet Seed Flaw Exploited in $71M Bitcoin Theft
> - AI-Powered Automated Cognitive Testing System for Wild Capuchin Monkeys
> - Minimal LLM Post-Training on 8GB GPU: SFT, DPO, GRPO with Open-Source Frameworks
> - Evaluating Large Language Models for Personalized Financial Advice
> - ThinAir: Probabilistic Python objects with LLM-generated attributes and methods
> - Ten Advances in Mathematics and Theoretical Computer Science
> - Coldcard Hardware Wallet PRNG Flaw Enables Offline Seed Reconstruction and $70M Bitcoin Theft
> - Coldcard Hardware Wallet Flaw Exploited via Weak Randomness in Seeds
> - Supply-Chain Attack on Adform’s JavaScript Library Rewrites Crypto Wallet Addresses
> - Presigned URLs: A Deliberate Security Vulnerability in Object Storage
> - ShinyHunters Claims Breach of Brinks Home Salesforce Instance

## AI & Large Language Models

### [Coldcard Hardware Wallet Seed Flaw Exploited in $71M Bitcoin Theft](https://cryptonews.net/news/security/33234551/)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-08-01 23:17:17 &nbsp;·&nbsp; `CVE-analysis` `cryptographic-failure` `hardware-security` `entropy-vulnerability`</small>

![Coldcard Hardware Wallet Seed Flaw Exploited in $71M Bitcoin Theft](https://cnews24.ru/uploads/679/6794ad32428801f3274d3c06a713455fc5ec17b7.png)

**Overview:** A critical flaw in Coldcard hardware wallets (Mk3–Mk5, Q devices) allowed recovery seeds to be generated with only ~40–72 bits of entropy instead of 128 bits, enabling brute-force attacks. Exploited between July 30–31, 2026, stealing ~1,128 BTC ($71M). **Method:** Flaw stemmed from a 2021 build-time config error where MicroPython’s weak RNG was used instead of hardware TRNG due to a silent fallback. Attackers reconstructed seeds by testing potential addresses against the Bitcoin blockchain. **Results:** Coinkite issued emergency firmware fixes; affected users must generate new seeds. AI-assisted code review was theorized as a possible discovery method, but human error and lack of entropy audits were primary causes. **Impact:** Exposes risks of open-source hardware relying on manual audits. Raises questions about AI’s role in vulnerability discovery vs. exploitation. Urges stronger entropy testing and continuous auditing of legacy code.

[→ Read full article](https://cryptonews.net/news/security/33234551/)

---

### [AI-Powered Automated Cognitive Testing System for Wild Capuchin Monkeys](https://news.emory.edu/features/2026/07/ai-opens-new-era-cognitive-studies-wild-primates)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-08-01 23:40:22 &nbsp;·&nbsp; `computer-vision` `wildlife-monitoring` `behavioral-experiments` `edge-computing`</small>

![AI-Powered Automated Cognitive Testing System for Wild Capuchin Monkeys](https://news.emory.edu/sites/emorynews/files/shorthand/stories/7XXiiaGOuD/2026-07-28T18%3A13%3A54.762Z/assets/kaxouII40f/frame-at-0.000s-of-capuchins_square_clip-social-cover.jpg)

**Overview:** Researchers developed *CapuchinAI*, an AI system combining facial recognition and real-time touchscreen tasks to automate cognitive studies of wild capuchins. Published in *American Journal of Primatology*, it addresses the challenge of studying primate cognition in natural environments where traditional lab controls are impractical. **Method:** The system uses YOLO-based facial recognition (97% accuracy) on a Raspberry Pi, triggering touchscreen tasks and food rewards. A low-cost, weatherproof enclosure houses the hardware, with Python scripts managing stimuli and motor circuits. **Results:** Field tests in Costa Rica showed rapid habituation to touchscreens and scalable data collection. The open-source framework includes a build guide for replicable, low-tech deployment. **Impact:** Bridges lab-field gaps in primate cognition research, enabling systematic study of individual differences in wild populations. Open questions include generalization to other species and long-term behavioral insights.

[→ Read full article](https://news.emory.edu/features/2026/07/ai-opens-new-era-cognitive-studies-wild-primates)

---

### [Minimal LLM Post-Training on 8GB GPU: SFT, DPO, GRPO with Open-Source Frameworks](https://github.com/pochenai/nano-llm-posttraining)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-08-01 13:30:32 &nbsp;·&nbsp; `llm-post-training` `SFT` `DPO` `GRPO` `reinforcement-learning`</small>

![Minimal LLM Post-Training on 8GB GPU: SFT, DPO, GRPO with Open-Source Frameworks](https://opengraph.githubassets.com/c17f63d8c698d8eb52c2aa4ab88524eb600fe903446a5929a3461a0cc81a6a45/pochenai/nano-llm-posttraining)

**Overview:** This tutorial provides reproducible experiments on LLM post-training (SFT, DPO, GRPO) using minimal resources (8GB GPU), focusing on KL divergence, preference optimization, and reasoning amplification. **Method:** **SFT** fine-tunes a base model (e.g., SmolLM2-135M) to align responses with target patterns (e.g., identity shifts from "Emily Wilson" to "Qwen"). **DPO** uses preference pairs to gently shift outputs (e.g., "Qwen" → "Deep Qwen") with a KL penalty controlled by β. **GRPO** (DeepSeek-R1’s algorithm) replaces PPO’s value network with group-based advantage estimation: responses from the same prompt serve as baselines, avoiding critic training. Rewards are verifiable (e.g., IFEval’s rule-based scoring). **Results:** GRPO improves IFEval instruction satisfaction from ~0.31 to ~0.58 on a 3B model (48GB GPU), while SFT/DPO show targeted but limited shifts. KL divergence is measured to quantify policy drift. **Impact:** Demystifies post-training trade-offs (e.g., RL’s capability gains vs. SFT’s pattern memorization) and provides a practical framework for small-scale experiments. Open questions include scaling to larger models and optimizing reward designs.

[→ Read full article](https://github.com/pochenai/nano-llm-posttraining)

---

### [Evaluating Large Language Models for Personalized Financial Advice](https://mitsloan.mit.edu/ideas-made-to-matter/ai-financial-advice-surprisingly-good-especially-if-you-ask-right-questions)

<small>**Hacker News - Newest: "AI"** &nbsp;·&nbsp; 2026-08-01 23:25:12 &nbsp;·&nbsp; `financial-ai` `prompt-engineering` `behavioral-finance` `LLM-evaluation`</small>

![Evaluating Large Language Models for Personalized Financial Advice](https://mitsloan.mit.edu/sites/default/files/styles/og_image/public/2026-07/ai-finance.png.webp?h=7691f918&itok=Zfv-5Ys6)

**Overview:** MIT Sloan study assesses LLM financial advice quality by simulating outcomes for 1,000 adults over lifetimes. Focuses on how prompt structure (casual vs. academic) affects advice efficacy. **Method:** Simulated 22–89-year-olds following AI recommendations (GPT-5.2/5.6, Gemini 3 Flash) vs. baseline human behavior. Academic prompts (explicit financial context) improved results, reducing wealth gaps tied to user demographics. **Results:** LLMs outperformed expectations, boosting savings and diversified investments but struggled with shocks (e.g., unemployment) and rebalancing. Gender/financial literacy gaps in prompts led to ~5% wealth differences near retirement. **Impact:** Highlights LLM potential as accessible financial advisors while emphasizing prompt design and bias mitigation. Calls for standardized benchmarks and demographic-aware frameworks.

[→ Read full article](https://mitsloan.mit.edu/ideas-made-to-matter/ai-financial-advice-surprisingly-good-especially-if-you-ask-right-questions)

---

### [ThinAir: Probabilistic Python objects with LLM-generated attributes and methods](https://github.com/MiskaKan/thinair)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-08-01 13:31:52 &nbsp;·&nbsp; `probabilistic-programming` `llm-integration` `python-runtime` `uncertainty-quantification`</small>

![ThinAir: Probabilistic Python objects with LLM-generated attributes and methods](https://opengraph.githubassets.com/5e9385a0b693e65deb51a61c0c81c15039cbef1e2fd12089a9cdf12e622dbc2a/MiskaKan/thinair)

**Overview:** ThinAir introduces a Python class (`Thing`) that treats attributes/methods as probabilistic LLM-generated values, enabling dynamic object behavior with confidence scores. It targets seamless integration of LLMs into Python runtime without prompt engineering or parsing overhead. **Method:** The core interface uses three operators: `@ <type>` (inference call), `+thing` (probabilistic addition), and `~thing` (negation). Unwritten attributes/methods are inferred on-demand with confidence tracking (e.g., `blob @ Car` creates a probabilistic `Car` object). Inference is tiered: single-shot attempts first, falling back to "thinking" mode for low-confidence or unparseable outputs. Provenance is explicit—user-written code has certainty (probability=1.0), while LLM-generated parts report confidence. **Results:** Demonstrates dynamic method calls (e.g., `chat()` for conversational objects) and stateful interactions (e.g., journaled conversations). Supports local/remote LLMs via OpenAI-compatible endpoints. **Impact:** Advances probabilistic programming by embedding LLMs into Python objects, enabling uncertainty-aware automation. Limitations include inference costs for unresolved attributes and reliance on model quality.

[→ Read full article](https://github.com/MiskaKan/thinair)

---

### [Ten Advances in Mathematics and Theoretical Computer Science](https://openai.com/index/ten-advances-in-mathematics)

<small>**OpenAI News** &nbsp;·&nbsp; 2026-08-01 01:00:00 &nbsp;·&nbsp; `theoretical-computer-science` `mathematics` `AI-research`</small>

![Ten Advances in Mathematics and Theoretical Computer Science](https://images.ctfassets.net/kftzwdyauwt9/5RUlCTeEvzWYd2DDpdcNgh/f38e144bf6f5911074b1939c1528ed2b/Frame__4_.png?w=1600&h=900&fit=fill)

**Overview:** OpenAI highlights ten research advances in mathematics and theoretical computer science (TCS) that leverage or inspire AI techniques. The post emphasizes cross-disciplinary progress with potential implications for algorithmic efficiency, cryptography, and optimization. **Method:** The advances span areas such as algebraic geometry, combinatorics, and complexity theory, with some results directly tied to machine learning (e.g., neural network expressivity, optimization landscapes). **Results:** While specific numerical benchmarks are not provided, the post suggests these advances address long-standing open problems or improve theoretical bounds in areas like cryptographic hardness assumptions or graph algorithms. **Impact:** The work bridges AI and pure mathematics, potentially enabling new cryptographic protocols, faster algorithms, or deeper theoretical foundations for neural network training. Open questions remain regarding practical deployability and integration with existing systems.

[→ Read full article](https://openai.com/index/ten-advances-in-mathematics)

---

## Cybersecurity

### [Coldcard Hardware Wallet PRNG Flaw Enables Offline Seed Reconstruction and $70M Bitcoin Theft](https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html)

<small>**The Hacker News** &nbsp;·&nbsp; 2026-08-01 18:17:22 &nbsp;·&nbsp; `hardware-wallet` `PRNG` `cryptographic-entropy` `BIP-39`</small>

![Coldcard Hardware Wallet PRNG Flaw Enables Offline Seed Reconstruction and $70M Bitcoin Theft](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiea5Kw_2TLtPI4Ts3s3anmPIQr3S8VxO0G9yL-UV1dSlRrW1Z_L41XoHcSFuk2ThCBDKLFy-xZl_y7DnA0FM2nWHk4G1TpV2iMx6-X6EDT3gK7s0pJu6e1wMUoEsuPifcXseXuqOIHL3W9voWoD_se5gKJPyii4X0mJY7sxJ3uOPlTWVfAyrKs4ixa-18/s1600/coldcard.jpg)

**Overview:** A firmware integration error in Coldcard hardware wallets (Mk3/Mk4/Mk5/Q) routed seed generation to a weak software PRNG instead of the hardware RNG, enabling attackers to reconstruct seeds offline and drain 1,082.65 BTC (~$70.2M) from 1,196 addresses in 41 minutes. The flaw affects seeds created on vulnerable firmware versions, not patched versions. **Method:** The bug stemmed from a March 2021 firmware change that bypassed the STM32 hardware RNG, reducing entropy to ~40 bits (Mk3) or ~72 bits (Mk4/Mk5/Q) vs. the expected 128 bits for a 12-word BIP-39 seed. Attackers could exploit UID, timer state, and prior RNG-call history to constrain candidate seed streams and verify them against public blockchain addresses. **Results:** Coinkite issued emergency firmware patches but noted these do not retroactively secure existing seeds. The company recommends generating new seeds on patched firmware and migrating funds. Multisig or BIP-39 passphrases mitigate but do not fully eliminate risk. **Impact:** This is a critical cryptographic failure in a widely trusted Bitcoin wallet, exposing the risks of weak PRNGs in hardware security devices. Open questions remain about the attacker's methodology and the feasibility of reconstructing seeds for all affected addresses.

[→ Read full article](https://thehackernews.com/2026/08/coldcard-hardware-wallet-flaw-linked-to.html)

---

### [Coldcard Hardware Wallet Flaw Exploited via Weak Randomness in Seeds](https://cryptonews.net/news/security/33234551/)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-08-01 23:17:17 &nbsp;·&nbsp; `cryptographic-vulnerability` `hardware-wallet` `randomness-failure` `BIP-39`</small>

![Coldcard Hardware Wallet Flaw Exploited via Weak Randomness in Seeds](https://cnews24.ru/uploads/679/6794ad32428801f3274d3c06a713455fc5ec17b7.png)

**Overview:** A critical flaw in Coldcard hardware wallets (Coinkite) allowed attackers to steal ~1,128 BTC (~$71M) by exploiting weak randomness in recovery seed generation. The vulnerability stemmed from a 5-year-old build-time configuration error that reduced seed entropy from 128 bits to ~40 bits on affected Mk3 devices. **Method:** The flaw occurred due to a misconfigured function in firmware v4.0.1+ that silently selected a weaker MicroPython-based RNG over the hardware-based TRNG. The error persisted because the build system checked for a configuration label's existence rather than its value. **Results:** Attackers brute-forced seeds with ~40 bits of entropy, reconstructing wallet addresses and draining funds. Coinkite issued emergency firmware fixes and advised users to regenerate seeds. **Impact:** Highlights risks of open-source firmware flaws, the importance of entropy validation, and the potential for AI-assisted code analysis to uncover latent vulnerabilities. Open questions remain about the attacker's methodology and the role of AI in discovery.

[→ Read full article](https://cryptonews.net/news/security/33234551/)

---

### [Supply-Chain Attack on Adform’s JavaScript Library Rewrites Crypto Wallet Addresses](https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html)

<small>**The Hacker News** &nbsp;·&nbsp; 2026-08-01 10:03:07 &nbsp;·&nbsp; `supply-chain-attack` `JavaScript` `crypto-address-hijacking` `XOR-obfuscation`</small>

![Supply-Chain Attack on Adform’s JavaScript Library Rewrites Crypto Wallet Addresses](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiX-el4ovGAmKfllRfhupL0SzdEoZKlouDb1_YmhCOl3owxN1ks0Do-WphuD77rka_3ukbqvPxSmFYMdBKBirYyw0DJpvSxVP5riGBR_vd7wKwnpgZfNm0RFEDLTzsvzzQB7qGtawMvpccd700dfNM2zZeFTy9cyHf4oFyHSASKRU3gmxbMgTJRtDFsSNs/s1600/adform.jpg)

**Overview:** Attackers compromised Adform’s `trackpoint-async.js` (served from `s2.adform.net`) to inject malicious code that rewrites cryptocurrency wallet addresses (Bitcoin, Ethereum, Tron) in real-time. The attack occurred on July 27, 2026, and targeted users who copied/pasted or entered wallet addresses on affected websites. **Method:** The injected payload used XOR-obfuscated strings to replace addresses dynamically. It monitored clipboard events, DOM text nodes, and input fields, intercepting copy/cut/paste events to swap addresses. A secondary payload sent the victim’s page hostname/path to an external server (84.32.102[.]230:7744) on page load. The attack required no persistence and operated only while the affected page remained open. **Results:** Adform detected and removed the malicious code, but the scope (number of websites/users affected) and whether funds were diverted remain undisclosed. VirusTotal initially flagged the file as benign. **Impact:** This highlights the risks of shared JavaScript libraries in ad-tech supply chains, enabling large-scale cryptocurrency theft with minimal attacker effort. Open questions include the attacker’s entry vector and the total number of compromised sites.

[→ Read full article](https://thehackernews.com/2026/08/hackers-poison-adform-script-to-swap.html)

---

### [Presigned URLs: A Deliberate Security Vulnerability in Object Storage](https://www.tigrisdata.com/blog/presigned-urls-security-vuln/)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-08-01 22:44:49 &nbsp;·&nbsp; `authentication` `replay-attack` `SigV4` `object-storage`</small>

![Presigned URLs: A Deliberate Security Vulnerability in Object Storage](https://www.tigrisdata.com/blog/assets/images/hero-image-ef93e25066352293ec6a45a99cc9cb81.webp)

**Overview:** Presigned URLs in object storage systems (e.g., Tigris, AWS S3) are intentionally designed to enable replay attacks, trading security for convenience. The article argues that while replayable auth tokens are traditionally a vulnerability, presigned URLs weaponize this weakness into a feature. **Method:** SigV4 signatures are time-bound (15-minute validity) to mitigate replay risks, but presigned URLs extend this window indefinitely. The design flattens auth into URL parameters, allowing any HTTP client to perform privileged operations until expiry. **Results:** No practical revocation mechanism exists short of disabling the signing key. URLs leak via logs/API responses, and misuse can lead to unauthorized access. **Impact:** Challenges traditional security models for object storage, emphasizing the trade-offs between usability and attack surface. Highlights the need for time-bound capabilities and careful URL lifecycle management.

[→ Read full article](https://www.tigrisdata.com/blog/presigned-urls-security-vuln/)

---

### [ShinyHunters Claims Breach of Brinks Home Salesforce Instance](https://www.theregister.com/security/2026/07/31/the-most-famous-brand-in-physical-security-got-pwned-by-shinyhunters/5281924)

<small>**Hacker News - Newest: "security"** &nbsp;·&nbsp; 2026-08-01 00:38:50 &nbsp;·&nbsp; `data-breach` `Salesforce` `ShinyHunters` `PII-leak`</small>

![ShinyHunters Claims Breach of Brinks Home Salesforce Instance](https://image.theregister.com/5241973.jpg?imageId=5241973&x=0&y=0&cropw=100&croph=100&panox=0&panoy=0&panow=100&panoh=100&width=1200&height=683)

**Overview:** ShinyHunters claims to have breached Brinks Home’s Salesforce instance, stealing 4.9M+ records containing PII. The attack targeted Brinks Home’s SaaS systems, not its physical security products. **Method:** The group exploited misconfigured guest accounts in Salesforce, a vector Salesforce previously warned about. Brinks Home acknowledged unauthorized access but did not confirm the attacker or data scope. **Results:** ShinyHunters threatened to leak data and cause "digital problems" if ransom demands weren’t met. The incident aligns with ShinyHunters’ pattern of targeting high-profile Salesforce instances. **Impact:** Underscores risks of SaaS misconfigurations and the need for robust guest account controls. Raises questions about Brinks Home’s incident response transparency and Salesforce’s shared responsibility model.

[→ Read full article](https://www.theregister.com/security/2026/07/31/the-most-famous-brand-in-physical-security-got-pwned-by-shinyhunters/5281924)

---
