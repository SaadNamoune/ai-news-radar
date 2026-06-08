<script lang="ts">
  export let post: {
    slug: string
    title: string
    description: string
    category: string
    tags: string[]
  }
  export let isLast: boolean = false
</script>

<a href={`/${post.category}/${post.slug}`} class="result-item">
  <div class="result-title">{post.title}</div>
  {#if post.description}
    <div class="result-desc">{post.description}</div>
  {/if}
  {#if post.tags?.length}
    <div class="result-tags">
      {#each post.tags.slice(0, 4) as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  {/if}
</a>
{#if !isLast}
  <div class="divider"></div>
{/if}

<style>
  .result-item {
    display: block;
    padding: 0.875rem 1.25rem;
    text-decoration: none;
    transition: background 0.1s;
  }
  .result-item:hover { background: var(--bg-alt); }

  .result-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.2rem;
    line-height: 1.3;
  }
  .result-item:hover .result-title { color: var(--accent); }

  .result-desc {
    font-size: 0.78rem;
    color: var(--text-2);
    line-height: 1.5;
    margin-bottom: 0.4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .result-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }
  .tag {
    font-size: 0.6rem;
    font-weight: 600;
    padding: 0.15em 0.5em;
    border-radius: 0.2rem;
    background: var(--bg-alt);
    color: var(--text-3);
    border: 1px solid var(--border);
    font-family: 'SFMono-Regular', Consolas, Menlo, monospace;
  }

  .divider {
    height: 1px;
    background: var(--border-alt);
    margin: 0 1.25rem;
  }
</style>
