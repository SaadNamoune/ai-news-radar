<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let post: {
    slug: string
    title: string
    description: string
    category: string
    tags: string[]
  }
  export let isLast: boolean = false

  const dispatch = createEventDispatcher()
</script>

<a
  href={`/${post.category}/${post.slug}`}
  class="result-row"
  on:click={() => dispatch('navigate')}
>
  <div class="result-icon" aria-hidden="true">
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"/>
    </svg>
  </div>
  <div class="result-body">
    <div class="result-title">{post.title}</div>
    {#if post.description}
      <div class="result-desc">{post.description}</div>
    {/if}
    {#if post.tags?.length}
      <div class="result-tags">
        {#each post.tags.slice(0, 5) as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
  <div class="result-arrow" aria-hidden="true">→</div>
</a>

<style>
  .result-row {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 1.125rem;
    text-decoration: none;
    transition: background 0.1s;
    cursor: pointer;
    border-left: 2px solid transparent;
  }
  .result-row:hover {
    background: var(--bg-alt);
    border-left-color: var(--accent);
  }

  .result-icon {
    width: 28px; height: 28px;
    border-radius: 0.375rem;
    background: var(--bg-alt);
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    color: var(--text-3);
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
  .result-icon svg { width: 13px; height: 13px; }
  .result-row:hover .result-icon { background: var(--accent-bg); color: var(--accent); border-color: var(--accent); }

  .result-body { flex: 1; min-width: 0; }

  .result-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1.35;
    margin-bottom: 0.2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .result-row:hover .result-title { color: var(--accent); }

  .result-desc {
    font-size: 0.75rem;
    color: var(--text-3);
    line-height: 1.4;
    margin-bottom: 0.35rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .result-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
  }
  .tag {
    font-size: 0.6rem;
    font-weight: 600;
    padding: 0.15em 0.45em;
    border-radius: 0.2rem;
    background: var(--bg-card);
    color: var(--text-3);
    border: 1px solid var(--border-alt);
    font-family: 'SFMono-Regular', Consolas, Menlo, monospace;
  }

  .result-arrow {
    font-size: 0.9rem;
    color: var(--text-3);
    opacity: 0;
    transition: opacity 0.1s, transform 0.1s;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
  .result-row:hover .result-arrow { opacity: 1; transform: translateX(2px); }
</style>
