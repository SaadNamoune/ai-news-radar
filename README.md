# Daily AI Digest

> An automated AI-powered daily news pipeline — curates, summarizes, and scores the best AI, tech, cybersecurity, and open-source articles every day using GPT-4.

**Author:** Saad Namoune  
**Stack:** Python · Astro · Tailwind CSS · GitHub Actions · OpenAI / Gemini

---

## What it does

Every day at 23:00 (Algeria time), a GitHub Actions workflow:

1. **Fetches** articles from curated RSS feeds (Hacker News, OpenAI Blog, Anthropic, Hugging Face, The Hacker News, GitHub Trending, and more)
2. **Summarizes & scores** each article using GPT-4o-mini — produces a title, English summary, topic tag, and quality score (1–10)
3. **Selects** the top 20 highest-scored articles across 5 categories
4. **Generates** a Markdown file `news/dailyNews_YYYY-MM-DD.md`
5. **Commits** the file back to the repository automatically

An [Astro](https://astro.build/) frontend renders all the Markdown files into a clean, fast static website deployable on Vercel or Netlify in one click.

---

## News Categories

| Category | Sources |
|----------|---------|
| 🤖 AI & LLMs | Hacker News AI, OpenAI Blog, Anthropic Blog, Google AI Blog |
| 📥 Tech News | The Verge AI, MIT Tech Review, Ars Technica, InfoQ, Apple Developer |
| 🔐 Cybersecurity | Hacker News Security, Krebs on Security, The Hacker News |
| 💾 Open Source & Code | GitHub Trending Python, GitHub Trending All |
| 📚 Research Papers | Hugging Face Daily Papers, Hacker News ML |

---

## Architecture

```
GitHub Actions (cron: daily 22:00 UTC)
        │
        ▼
  main.py
        │
        ├─ workflow/article/rss.py      ← fetch & parse RSS feeds
        │         └─ feedparser, BeautifulSoup, requests
        │
        ├─ workflow/gpt/summary.py      ← call OpenAI / Gemini API
        │         └─ score + summarize each article in English
        │
        ├─ workflow/mainflow.py         ← orchestrate, rank, select top 20
        │
        └─ workflow/article/blog.py     ← generate dailyNews_YYYY-MM-DD.md
                  └─ written to /news/
        │
        ▼
  git commit + push
        │
        ▼
  Astro frontend (yarn dev / Vercel deploy)
        └─ renders /news/*.md as a static website
```

---

## Quick Start

### 1. Clone and configure

```bash
git clone https://github.com/SaadNamoune/<repo-name>.git
cd <repo-name>
cp .env.example .env
```

Edit `.env`:

```env
AI_PROVIDER=openai           # or "gemini"
GPT_API_KEY=sk-...           # your OpenAI or Gemini API key
GPT_BASE_URL=                # leave empty for default OpenAI endpoint
MAX_ARTICLE_NUMS=20
RSS_CACHE_ENABLE=true
```

### 2. Install dependencies

```bash
# Python backend
pip install -r requirements.txt

# Node frontend
yarn install --ignore-engines
```

### 3. Run the digest pipeline

```bash
python main.py
```

A new `news/dailyNews_YYYY-MM-DD.md` file will be created.

### 4. Preview the website locally

```bash
yarn dev
```

Open [http://localhost:4321](http://localhost:4321).

---

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SaadNamoune/daily-ai-digest)

Set the following GitHub repository secrets for the Actions workflow to run automatically:

| Secret | Description |
|--------|-------------|
| `GPT_API_KEY` | Your OpenAI or Gemini API key |
| `GPT_BASE_URL` | Custom API base URL (optional) |

---

## Customize RSS Sources

Edit [`workflow/resources/rss.json`](workflow/resources/rss.json) to add or remove feeds.

Each item supports:

```json5
{
  "title": "Feed display name",
  "url": "https://example.com/rss",
  "type": "link",       // "link" = scrape full page, "code" = GitHub README, omit = use RSS summary
  "output_count": 2     // max articles to show from this feed per day
}
```

---

## Project Structure

```
.
├── main.py                         # Entry point
├── requirements.txt                # Python dependencies
├── .env.example                    # Environment variables template
│
├── workflow/
│   ├── mainflow.py                 # Orchestration: fetch → score → select → write
│   ├── resources/
│   │   └── rss.json                # RSS feed configuration
│   ├── article/
│   │   ├── rss.py                  # RSS parsing & web scraping
│   │   └── blog.py                 # Markdown generation
│   └── gpt/
│       ├── prompt.py               # English system prompts for GPT
│       └── summary.py              # OpenAI / Gemini API calls
│
├── news/                           # Auto-generated daily digests (Markdown)
│   └── dailyNews_YYYY-MM-DD.md
│
├── .github/
│   └── workflows/
│       └── main.yml                # GitHub Actions cron workflow
│
└── src/                            # Astro frontend
    └── ...
```

---

## Supported AI Providers

| Provider | `AI_PROVIDER` value | Model used |
|----------|---------------------|------------|
| OpenAI | `openai` | `gpt-4o-mini` (configurable via `GPT_MODEL_NAME`) |
| Google Gemini | `gemini` | `gemini-pro` |

---

## License

MIT — see [LICENSE](LICENSE)

---

*Built by [Saad Namoune](https://github.com/SaadNamoune) — ESI Algiers*
