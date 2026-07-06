---
title: "Daily AI Digest #2026-07-07"
date: "2026-07-07 00:05:31"
description: "riddle: Handwriting-based LLM interaction on reMarkable Paper Pro via ink-to-ink streaming"
tags:
- "LLM-inference"
- "e-ink-device"
- "rust"
- "handwriting-recognition"

---

> - riddle: Handwriting-based LLM interaction on reMarkable Paper Pro via ink-to-ink streaming

## AI & Large Language Models

### [riddle: Handwriting-based LLM interaction on reMarkable Paper Pro via ink-to-ink streaming](https://github.com/MaximeRivest/Riddle)

<small>**Hacker News - Newest: "llm"** &nbsp;·&nbsp; 2026-07-07 00:00:24 &nbsp;·&nbsp; `handwriting-recognition` `e-ink-device` `LLM-inference` `rust`</small>

![riddle: Handwriting-based LLM interaction on reMarkable Paper Pro via ink-to-ink streaming](https://opengraph.githubassets.com/c358e3222f9c9bd2b952558fcbbeefa47982e8e031a12db5a3c77a4205535e4a/MaximeRivest/riddle)

**Overview:** A novel open-source system enabling real-time, pen-based interaction with a vision-capable LLM on the reMarkable Paper Pro e-ink tablet. Replaces traditional chat UIs with a 'diary' metaphor where handwritten input fades and responses appear in flowing script. Targets researchers seeking low-latency, screen-free LLM interfaces. **Method:** Uses raw evdev pressure data (4096 levels) to capture strokes, commits pages as PNGs, and streams responses via two backends: (1) direct OpenAI-compatible API calls (pure Rust HTTPS) or (2) resident Node.js RPC process (pi) for reduced latency. Responses are skeletonized to single-pixel paths, rendered via Dancing Script font using proprietary vendor libraries (libqsgepaper.so, libquill.so). Two display modes: QtFB (windowed) or Quill (full takeover with e-ink engine). **Results:** Measured 0.9–1.1s latency from pen pause to first ink response. Streaming enables incremental writing before model completion. Supports any vision-capable LLM via /chat/completions endpoint (e.g., OpenAI, OpenRouter, Groq). **Impact:** Advances human-computer interaction by merging analog writing with generative AI, offering a distraction-free, low-latency interface. Open questions include scalability to other e-ink devices and robustness to varied handwriting styles.

[→ Read full article](https://github.com/MaximeRivest/Riddle)

---
