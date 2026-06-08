<script lang="ts">
  import { onMount } from 'svelte'
  import PostSearchPreview from './PostSearchPreview.svelte'

  let searchInput
  let searchableDocs
  let searchIndex

  let searchQuery = ''
  let searchResults = []

  onMount(async () => {
    const lunr = (await import('lunr')).default
    const resp = await fetch('/search-index.json')
    searchableDocs = await resp.json()
    searchIndex = lunr(function () {
      this.ref('slug')
      this.field('title')
      this.field('description')
      this.field('tags')
      searchableDocs.forEach((doc) => this.add(doc), this)
    })
    searchInput.focus()
  })

  $: {
    if (searchQuery && searchQuery.length >= 2 && searchIndex) {
      try {
        const matches = searchIndex.search(searchQuery + '*')
        searchResults = matches
          .map((m) => searchableDocs.find((d) => d.slug === m.ref))
          .filter(Boolean)
      } catch {
        searchResults = []
      }
    } else {
      searchResults = []
    }
  }
</script>

<div class="search-box">
  <div class="search-input-wrap">
    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <input
      type="text"
      bind:this={searchInput}
      bind:value={searchQuery}
      placeholder="Search issues, topics, tags…"
      autocomplete="off"
      spellcheck="false"
    />
    {#if searchQuery}
      <button class="clear-btn" on:click={() => { searchQuery = ''; searchResults = [] }} aria-label="Clear">
        ✕
      </button>
    {/if}
  </div>

  <div class="results">
    {#if searchResults.length > 0}
      {#each searchResults as post, i}
        <PostSearchPreview {post} isLast={i === searchResults.length - 1} />
      {/each}
    {:else if searchQuery.length >= 2}
      <div class="empty">No results for "<strong>{searchQuery}</strong>"</div>
    {:else}
      <div class="empty hint">Type at least 2 characters to search</div>
    {/if}
  </div>

  <div class="footer-hint">Press <kbd>Esc</kbd> to close</div>
</div>

<style>
  .search-box {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    overflow: hidden;
  }

  .search-input-wrap {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 1px solid var(--border);
    gap: 0.75rem;
  }

  .search-icon {
    width: 1.125rem;
    height: 1.125rem;
    color: var(--text-3);
    flex-shrink: 0;
  }

  input {
    flex: 1;
    padding: 1rem 0;
    font-size: 1rem;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
  }

  input::placeholder { color: var(--text-3); }

  .clear-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-3);
    font-size: 0.75rem;
    padding: 0.25rem;
    line-height: 1;
    border-radius: 0.25rem;
  }
  .clear-btn:hover { color: var(--text); background: var(--bg-alt); }

  .results {
    max-height: 400px;
    overflow-y: auto;
  }

  .empty {
    padding: 2rem 1.25rem;
    font-size: 0.875rem;
    color: var(--text-2);
    text-align: center;
  }
  .empty.hint { color: var(--text-3); }

  .footer-hint {
    padding: 0.5rem 1.25rem;
    font-size: 0.7rem;
    color: var(--text-3);
    border-top: 1px solid var(--border-alt);
    text-align: right;
  }

  kbd {
    font-size: 0.65rem;
    padding: 0.1em 0.4em;
    border: 1px solid var(--border);
    border-radius: 0.2rem;
    background: var(--bg-alt);
    color: var(--text-2);
    font-family: inherit;
  }
</style>
