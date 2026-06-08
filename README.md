# AI News Radar

**Automated daily digest of AI, cybersecurity, and open-source news — powered by Mistral AI**

> Fully automated pipeline: RSS ingestion → LLM scoring & summarization → static site publishing via GitHub Actions + Vercel

---

## Overview

AI News Radar is a personal research tool that aggregates and summarizes the most relevant daily news in:

- Artificial Intelligence & Large Language Models
- Cybersecurity & vulnerability research
- Open-source software & developer tools
- Research papers (HuggingFace, arXiv via HN)

Every day at **23:00 Algeria time**, a GitHub Actions workflow fetches articles from 20+ curated RSS feeds, scores each one using a Mistral AI language model, and publishes the top results as a static Markdown blog via Vercel.

---

## Architecture

```
RSS Feeds (20+ sources)
        │
        ▼
  workflow/rss.py       ← fetch & parse feeds (feedparser)
        │
        ▼
  workflow/gpt/         ← score & summarize via Mistral AI
  summary.py            ← OpenAI-compatible client (base_url override)
        │
        ▼
  src/content/blog/     ← Markdown files with YAML frontmatter
        │
        ▼
  Astro + Tailwind      ← static site build
        │
        ▼
  Vercel                ← auto-deploy on every push
```

---

## RSS Sources

| Category | Sources |
|---|---|
| AI & LLMs | HackerNews AI/LLM, OpenAI Blog, Anthropic Blog, Google AI Blog |
| Tech News | The Verge, MIT Tech Review, Ars Technica, InfoQ, Facebook Engineering |
| Cybersecurity | HackerNews Security, Krebs on Security, The Hacker News |
| Open Source | GitHub Trending (Python & All), Julia Evans |
| Research Papers | HuggingFace Daily Papers, HackerNews ML |

---

## Quick Start

### Prerequisites

- Python 3.10+
- Node.js 18+ and Yarn
- A [Mistral AI](https://console.mistral.ai) API key

### Local Setup

```bash
# Clone
git clone https://github.com/SaadNamoune/ai-news-radar
cd ai-news-radar

# Install Python dependencies
pip install -r requirements.txt

# Set environment variables
cp .env.example .env
# Edit .env: set GPT_API_KEY to your Mistral key

# Run the pipeline
python main.py

# Start the frontend
yarn install
yarn dev
```

### Environment Variables

| Variable | Value |
|---|---|
| `AI_PROVIDER` | `openai` |
| `GPT_API_KEY` | Your Mistral AI key |
| `GPT_BASE_URL` | `https://api.mistral.ai/v1` |
| `GPT_MODEL_NAME` | `mistral-small-latest` |
| `MAX_ARTICLE_NUMS` | `20` |

---

## GitHub Actions Automation

The workflow runs daily and requires one GitHub Secret:

```
Settings → Secrets → Actions → New repository secret
Name:  GPT_API_KEY
Value: <your Mistral API key>
```

To trigger a manual run: **Actions → Daily AI Digest → Run workflow**

---

## Deployment (Vercel)

1. Import `SaadNamoune/ai-news-radar` from the Vercel dashboard
2. Framework: **Astro** (auto-detected)
3. Add environment variable `GPT_API_KEY` in Vercel project settings
4. Deploy — every GitHub Actions push redeploys automatically

---

## Author

**Saad Namoune**
Software Engineer · [ENGISOFT.NET](https://engisoft.net)
4th Year SIL · École Nationale Supérieure d'Informatique (ESI Alger)

Research interests: distributed systems (Kubernetes, Kafka), machine learning, cybersecurity, LLM-based automation

GitHub: [github.com/SaadNamoune](https://github.com/SaadNamoune)
Email: saad.namoune28@gmail.com

---

## License

MIT — see [LICENSE](LICENSE)
