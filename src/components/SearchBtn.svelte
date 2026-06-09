<script lang="ts">
  import { isSearchVisible } from '../store/search'

  function open() { isSearchVisible.set(true) }

  function handleGlobalKey(e: KeyboardEvent) {
    const tag = (e.target as HTMLElement)?.tagName
    if (tag === 'INPUT' || tag === 'TEXTAREA') return
    if (e.key === '/') { e.preventDefault(); open() }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open() }
  }
</script>

<svelte:window on:keydown={handleGlobalKey} />

<button class="search-btn" on:click={open} aria-label="Search">
  <svg class="search-btn__icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="9" cy="9" r="6"/>
    <path d="M15 15l3 3" stroke-linecap="round"/>
  </svg>
  <span class="search-btn__label">Search</span>
  <kbd class="search-btn__kbd">/</kbd>
</button>

<style>
  .search-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0.6rem;
    border: 1px solid var(--border);
    border-radius: 0.375rem;
    background: var(--bg-alt);
    color: var(--text-3);
    cursor: pointer;
    font-size: 0.78rem;
    font-weight: 500;
    transition: border-color 0.15s, color 0.15s, background 0.15s;
    white-space: nowrap;
  }
  .search-btn:hover {
    border-color: var(--accent);
    color: var(--text);
    background: var(--bg-card);
  }
  .search-btn__icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
  .search-btn__label {
    display: none;
  }
  @media (min-width: 640px) {
    .search-btn__label { display: inline; }
  }
  .search-btn__kbd {
    font-size: 0.6rem;
    padding: 0.1em 0.4em;
    border: 1px solid var(--border);
    border-radius: 0.2rem;
    background: var(--bg-card);
    color: var(--text-3);
    font-family: inherit;
    line-height: 1.4;
    display: none;
  }
  @media (min-width: 640px) {
    .search-btn__kbd { display: inline; }
  }
</style>
