<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { isSearchVisible } from '../store/search'
  import Search from './Search.svelte'

  const close = () => isSearchVisible.set(false)

  function handleKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close()
  }
</script>

<svelte:window on:keydown={handleKey} />

{#if $isSearchVisible}
  <div
    class="overlay"
    role="button"
    tabindex="-1"
    on:click={close}
    on:keydown={() => {}}
    transition:fade={{ duration: 120 }}
  ></div>

  <div class="search-container" transition:fly={{ y: -12, duration: 180 }}>
    <Search on:close={close} />
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    z-index: 200;
  }

  .search-container {
    position: fixed;
    top: 72px;
    left: 50%;
    transform: translateX(-50%);
    width: min(680px, calc(100vw - 2rem));
    z-index: 201;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow:
      0 0 0 1px var(--border),
      0 24px 64px rgba(0,0,0,0.35),
      0 8px 24px rgba(0,0,0,0.2);
  }
</style>
