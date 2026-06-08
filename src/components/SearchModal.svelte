<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import { isSearchVisible } from '../store/search'
  import Search from './Search.svelte'

  const dismissModal = () => isSearchVisible.set(false)
  const handleEsc = (event) => {
    if (event.key === 'Escape') dismissModal()
  }
</script>

{#if $isSearchVisible}
  <div
    class="backdrop"
    role="button"
    tabindex="0"
    on:click={dismissModal}
    on:keydown={handleEsc}
    transition:fade={{ duration: 150 }}
  ></div>
  <div class="modal" role="dialog" aria-modal="true" transition:fly={{ y: -20, duration: 200 }}>
    <Search />
  </div>
{/if}

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 100;
    cursor: pointer;
  }
  .modal {
    position: fixed;
    top: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: min(640px, calc(100vw - 2rem));
    z-index: 101;
  }
</style>
