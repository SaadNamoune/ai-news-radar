<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  import PostSearchPreview from './PostSearchPreview.svelte'

  const dispatch = createEventDispatcher()

  let inputEl: HTMLInputElement
  let searchableDocs: any[] = []
  let searchIndex: any = null
  let loading = true

  let query = ''
  let results: any[] = []

  onMount(async () => {
    const lunr = (await import('lunr')).default
    const resp = await fetch('/search-index.json')
    searchableDocs = await resp.json()
    searchIndex = lunr(function () {
      this.ref('slug')
      this.field('title', { boost: 10 })
      this.field('description', { boost: 5 })
      this.field('tags', { boost: 3 })
      this.field('body')
      searchableDocs.forEach(d => this.add(d), this)
    })
    loading = false
    inputEl?.focus()
  })

  function runSearch(q: string) {
    if (!searchIndex || q.length < 2) { results = []; return }
    try {
      let hits = searchIndex.search(q)
      if (!hits.length) hits = searchIndex.search(q + '~1')
      results = hits
        .map((h: any) => searchableDocs.find(d => d.slug === h.ref))
        .filter(Boolean)
        .slice(0, 8)
    } catch {
      try {
        const safe = q.replace(/[+\-&|!(){}\[\]^"~*?:\\]/g, '\\$&')
        results = searchIndex.search(safe)
          .map((h: any) => searchableDocs.find(d => d.slug === h.ref))
          .filter(Boolean)
          .slice(0, 8)
      } catch { results = [] }
    }
  }

  $: runSearch(query)
</script>

<div class="search-panel">
  <!-- Input row -->
  <div class="search-input-row">
    <svg class="search-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="9" cy="9" r="6"/>
      <path d="M15 15l3 3" stroke-linecap="round"/>
    </svg>
    <input
      bind:this={inputEl}
      bind:value={query}
      type="text"
      placeholder="Search issues, topics, papers…"
      autocomplete="off"
      spellcheck="false"
      class="search-input"
    />
    {#if query}
      <button class="clear-btn" on:click={() => { query = ''; results = []; inputEl.focus() }} aria-label="Clear">
        <svg viewBox="0 0 16 16" fill="currentColor"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06z"/></svg>
      </button>
    {:else}
      <kbd class="kbd-hint">ESC</kbd>
    {/if}
  </div>

  <!-- Results -->
  {#if loading}
    <div class="search-state">
      <div class="loader"></div>
      <span>Loading index…</span>
    </div>
  {:else if query.length >= 2}
    {#if results.length > 0}
      <div class="results-header">
        {results.length} result{results.length > 1 ? 's' : ''} for "<strong>{query}</strong>"
      </div>
      <ul class="results-list">
        {#each results as post, i}
          <li>
            <PostSearchPreview {post} isLast={i === results.length - 1} on:navigate={() => dispatch('close')} />
          </li>
        {/each}
      </ul>
    {:else}
      <div class="search-state no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35" stroke-linecap="round"/><path d="M8 11h6M11 8v6" stroke-linecap="round"/></svg>
        <span>No results for "<strong>{query}</strong>"</span>
      </div>
    {/if}
  {:else}
    <div class="search-hint-row">
      <div class="hint-item">
        <svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M11.5 2a4.5 4.5 0 0 1 0 9H8v1.5a.5.5 0 0 1-1 0V11H5.5a4.5 4.5 0 0 1 0-9h6zm0 1H5.5a3.5 3.5 0 1 0 0 7H7V4.5a.5.5 0 0 1 1 0V10h3.5a3.5 3.5 0 1 0 0-7z"/></svg>
        Search by topic, paper title, or tag
      </div>
    </div>
  {/if}

  <!-- Footer -->
  <div class="search-footer">
    <span class="footer-tip"><kbd>↑↓</kbd> navigate</span>
    <span class="footer-tip"><kbd>↵</kbd> open</span>
    <span class="footer-tip"><kbd>Esc</kbd> close</span>
    <span class="footer-brand">AI News Radar</span>
  </div>
</div>

<style>
  .search-panel {
    background: var(--bg-card);
    display: flex;
    flex-direction: column;
    max-height: min(540px, 80vh);
  }

  /* Input row */
  .search-input-row {
    display: flex;
    align-items: center;
    padding: 0 1.125rem;
    border-bottom: 1px solid var(--border);
    gap: 0.75rem;
    flex-shrink: 0;
  }
  .search-icon {
    width: 1.125rem;
    height: 1.125rem;
    color: var(--text-3);
    flex-shrink: 0;
  }
  .search-input {
    flex: 1;
    padding: 1.125rem 0;
    font-size: 1.05rem;
    font-weight: 500;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
    letter-spacing: -0.01em;
  }
  .search-input::placeholder { color: var(--text-3); font-weight: 400; }

  .clear-btn {
    width: 24px; height: 24px;
    display: flex; align-items: center; justify-content: center;
    background: var(--bg-alt);
    border: 1px solid var(--border);
    border-radius: 50%;
    cursor: pointer;
    color: var(--text-3);
    flex-shrink: 0;
    padding: 0;
    transition: color 0.1s, background 0.1s;
  }
  .clear-btn:hover { color: var(--text); background: var(--border); }
  .clear-btn svg { width: 12px; height: 12px; }

  .kbd-hint {
    font-size: 0.65rem;
    padding: 0.2em 0.5em;
    border: 1px solid var(--border);
    border-radius: 0.25rem;
    background: var(--bg-alt);
    color: var(--text-3);
    font-family: inherit;
    flex-shrink: 0;
  }

  /* Results header */
  .results-header {
    font-size: 0.7rem;
    color: var(--text-3);
    padding: 0.5rem 1.125rem;
    border-bottom: 1px solid var(--border-alt);
    flex-shrink: 0;
  }
  .results-header strong { color: var(--text-2); }

  /* Results list */
  .results-list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
  }

  /* States */
  .search-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    padding: 2.5rem 1.5rem;
    color: var(--text-3);
    font-size: 0.875rem;
    flex: 1;
  }
  .search-state strong { color: var(--text-2); }
  .no-results svg { width: 2rem; height: 2rem; opacity: 0.4; }

  .search-hint-row {
    padding: 1rem 1.125rem;
    flex: 1;
  }
  .hint-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--text-3);
  }

  /* Loading dots */
  .loader {
    width: 1.5rem; height: 1.5rem;
    border: 2px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* Footer */
  .search-footer {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1.125rem;
    border-top: 1px solid var(--border-alt);
    background: var(--bg-alt);
    flex-shrink: 0;
  }
  .footer-tip {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.68rem;
    color: var(--text-3);
  }
  .footer-tip kbd {
    font-size: 0.6rem;
    padding: 0.15em 0.4em;
    border: 1px solid var(--border);
    border-radius: 0.2rem;
    background: var(--bg-card);
    color: var(--text-2);
    font-family: inherit;
  }
  .footer-brand {
    margin-left: auto;
    font-size: 0.68rem;
    color: var(--text-3);
    font-weight: 700;
    letter-spacing: 0.04em;
  }
</style>
