<script lang="ts">
  import { tick } from "svelte";

  let isOpen = false;
  let lang: "en" | "fr" | "de" = "en";
  let messages: { role: "user" | "assistant"; content: string }[] = [];
  let input = "";
  let loading = false;
  let messagesEl: HTMLElement;

  const UI = {
    en: {
      title: "AI Research Assistant",
      placeholder: "Ask about any CS or AI concept...",
      hint: "e.g. transformer attention, Byzantine fault tolerance, RLHF, zero-knowledge proof",
      send: "Send",
      clear: "Clear",
      thinking: "Thinking...",
      error: "Connection error. Please try again.",
    },
    fr: {
      title: "Assistant de Recherche",
      placeholder: "Posez une question sur un concept CS ou IA...",
      hint: "ex. attention, tolérance aux pannes byzantines, RLHF, preuve à zéro connaissance",
      send: "Envoyer",
      clear: "Effacer",
      thinking: "Réflexion...",
      error: "Erreur de connexion. Veuillez réessayer.",
    },
    de: {
      title: "KI-Forschungsassistent",
      placeholder: "Fragen Sie nach einem CS- oder KI-Konzept...",
      hint: "z.B. Transformer-Aufmerksamkeit, Byzantine Fault Tolerance, RLHF, Zero-Knowledge-Beweis",
      send: "Senden",
      clear: "Löschen",
      thinking: "Denkt nach...",
      error: "Verbindungsfehler. Bitte erneut versuchen.",
    },
  };

  $: ui = UI[lang];

  function toggle() {
    isOpen = !isOpen;
  }

  function setLang(l: "en" | "fr" | "de") {
    lang = l;
  }

  function clearChat() {
    messages = [];
  }

  function formatContent(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\n/g, "<br>");
  }

  async function scrollToBottom() {
    await tick();
    if (messagesEl) messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    input = "";
    messages = [...messages, { role: "user", content: text }];
    loading = true;
    await scrollToBottom();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          lang,
          history: messages.slice(-9, -1),
        }),
      });

      const data = await res.json();
      messages = [
        ...messages,
        {
          role: "assistant",
          content: data.answer || data.error || "No response.",
        },
      ];
    } catch {
      messages = [...messages, { role: "assistant", content: ui.error }];
    }

    loading = false;
    await scrollToBottom();
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }
</script>

<!-- Floating button -->
{#if !isOpen}
  <button class="chat-fab" on:click={toggle} aria-label="Open AI assistant">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
    Ask AI
  </button>
{/if}

<!-- Chat panel -->
{#if isOpen}
  <div class="chat-panel" role="dialog" aria-label={ui.title}>
    <!-- Header -->
    <div class="chat-header">
      <div class="chat-header__left">
        <div class="chat-header__dot" aria-hidden="true"></div>
        <span class="chat-header__title">{ui.title}</span>
      </div>
      <div class="chat-header__actions">
        <!-- Language switcher -->
        <div class="lang-switcher" role="group" aria-label="Language">
          {#each ["en", "fr", "de"] as l}
            <button
              class="lang-btn"
              class:lang-btn--active={lang === l}
              on:click={() => setLang(l)}
              aria-pressed={lang === l}
            >
              {l.toUpperCase()}
            </button>
          {/each}
        </div>
        {#if messages.length > 0}
          <button class="icon-action" on:click={clearChat} title={ui.clear} aria-label={ui.clear}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6l-1 14H6L5 6"></path>
              <path d="M10 11v6M14 11v6"></path>
            </svg>
          </button>
        {/if}
        <button class="icon-action" on:click={toggle} aria-label="Close">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Messages -->
    <div class="chat-messages" bind:this={messagesEl}>
      {#if messages.length === 0}
        <div class="chat-hint">
          <p class="chat-hint__text">{ui.hint}</p>
        </div>
      {/if}

      {#each messages as msg}
        <div class="msg msg--{msg.role}">
          {#if msg.role === "assistant"}
            <div class="msg__avatar" aria-hidden="true">AI</div>
          {/if}
          <div class="msg__bubble">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html formatContent(msg.content)}
          </div>
        </div>
      {/each}

      {#if loading}
        <div class="msg msg--assistant">
          <div class="msg__avatar" aria-hidden="true">AI</div>
          <div class="msg__bubble msg__bubble--loading">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      {/if}
    </div>

    <!-- Input -->
    <div class="chat-input">
      <textarea
        bind:value={input}
        on:keydown={onKey}
        placeholder={ui.placeholder}
        rows="2"
        disabled={loading}
        class="chat-textarea"
        aria-label={ui.placeholder}
      ></textarea>
      <button
        class="chat-send"
        on:click={send}
        disabled={loading || !input.trim()}
        aria-label={ui.send}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  </div>
{/if}

<style>
  /* ── Floating button ── */
  .chat-fab {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 1rem;
    background: #0284c7;
    color: white;
    border: none;
    border-radius: 9999px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(2, 132, 199, 0.35);
    transition: background 0.15s, transform 0.15s, box-shadow 0.15s;
    z-index: 1000;
    font-family: inherit;
  }
  .chat-fab:hover {
    background: #0369a1;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(2, 132, 199, 0.45);
  }
  :global(html.dark) .chat-fab {
    background: #0369a1;
    box-shadow: 0 4px 16px rgba(2, 132, 199, 0.25);
  }
  :global(html.dark) .chat-fab:hover {
    background: #0284c7;
  }

  /* ── Chat panel ── */
  .chat-panel {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    width: 360px;
    max-height: 520px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0,0,0,0.04);
    overflow: hidden;
    z-index: 1000;
    font-family: inherit;
  }
  :global(html.dark) .chat-panel {
    background: #1e293b;
    border-color: #334155;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
  }

  /* Responsive: full-width on small screens */
  @media (max-width: 440px) {
    .chat-panel {
      right: 0.75rem;
      left: 0.75rem;
      width: auto;
      bottom: 1rem;
      max-height: 70vh;
    }
    .chat-fab {
      right: 1rem;
      bottom: 1rem;
    }
  }

  /* ── Header ── */
  .chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0.875rem;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;
    flex-shrink: 0;
  }
  :global(html.dark) .chat-header {
    background: #0f172a;
    border-bottom-color: #334155;
  }
  .chat-header__left {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .chat-header__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0284c7;
    flex-shrink: 0;
  }
  .chat-header__title {
    font-size: 0.8rem;
    font-weight: 700;
    color: #1e293b;
    letter-spacing: -0.01em;
  }
  :global(html.dark) .chat-header__title { color: #f1f5f9; }

  .chat-header__actions {
    display: flex;
    align-items: center;
    gap: 0.375rem;
  }

  /* Language switcher */
  .lang-switcher {
    display: flex;
    background: #e2e8f0;
    border-radius: 0.375rem;
    padding: 2px;
    gap: 1px;
  }
  :global(html.dark) .lang-switcher { background: #334155; }
  .lang-btn {
    padding: 0.15rem 0.45rem;
    font-size: 0.65rem;
    font-weight: 700;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    background: transparent;
    color: #64748b;
    transition: all 0.15s;
    font-family: 'SFMono-Regular', Consolas, monospace;
    letter-spacing: 0.03em;
  }
  :global(html.dark) .lang-btn { color: #64748b; }
  .lang-btn--active {
    background: white;
    color: #0284c7;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  :global(html.dark) .lang-btn--active {
    background: #1e293b;
    color: #38bdf8;
  }
  .lang-btn:hover:not(.lang-btn--active) {
    color: #374151;
  }
  :global(html.dark) .lang-btn:hover:not(.lang-btn--active) { color: #94a3b8; }

  .icon-action {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border: none;
    border-radius: 0.375rem;
    background: transparent;
    color: #94a3b8;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }
  .icon-action:hover {
    background: #e2e8f0;
    color: #475569;
  }
  :global(html.dark) .icon-action:hover {
    background: #334155;
    color: #94a3b8;
  }

  /* ── Messages area ── */
  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 0.875rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    min-height: 0;
  }
  .chat-messages::-webkit-scrollbar { width: 4px; }
  .chat-messages::-webkit-scrollbar-track { background: transparent; }
  .chat-messages::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 999px;
  }
  :global(html.dark) .chat-messages::-webkit-scrollbar-thumb { background: #334155; }

  /* Hint shown when no messages */
  .chat-hint {
    margin: auto;
    text-align: center;
    padding: 1rem 0.5rem;
  }
  .chat-hint__text {
    font-size: 0.75rem;
    color: #94a3b8;
    line-height: 1.6;
    font-style: italic;
  }
  :global(html.dark) .chat-hint__text { color: #475569; }

  /* Message rows */
  .msg {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    max-width: 100%;
  }
  .msg--user {
    flex-direction: row-reverse;
  }

  /* Avatar badge for assistant */
  .msg__avatar {
    flex-shrink: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #0284c7;
    color: white;
    font-size: 0.55rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    font-family: 'SFMono-Regular', Consolas, monospace;
  }

  /* Bubble */
  .msg__bubble {
    max-width: 82%;
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    font-size: 0.8rem;
    line-height: 1.6;
    word-break: break-word;
  }
  .msg--user .msg__bubble {
    background: #0284c7;
    color: white;
    border-bottom-right-radius: 0.25rem;
  }
  .msg--assistant .msg__bubble {
    background: #f1f5f9;
    color: #1e293b;
    border-bottom-left-radius: 0.25rem;
  }
  :global(html.dark) .msg--assistant .msg__bubble {
    background: #0f172a;
    color: #e2e8f0;
  }

  /* Bold/code inside bubbles */
  .msg__bubble :global(strong) {
    font-weight: 700;
    color: inherit;
  }
  .msg--user .msg__bubble :global(strong) { color: white; }
  .msg__bubble :global(code) {
    font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: 0.75em;
    background: rgba(0,0,0,0.08);
    padding: 0.1em 0.3em;
    border-radius: 0.25rem;
  }
  .msg--user .msg__bubble :global(code) { background: rgba(255,255,255,0.2); }

  /* Loading dots */
  .msg__bubble--loading {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.6rem 0.875rem;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #94a3b8;
    animation: bounce 1.2s ease-in-out infinite;
  }
  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }
  @keyframes bounce {
    0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
    40% { transform: translateY(-5px); opacity: 1; }
  }

  /* ── Input area ── */
  .chat-input {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 0.625rem 0.75rem;
    border-top: 1px solid #e2e8f0;
    background: #f8fafc;
    flex-shrink: 0;
  }
  :global(html.dark) .chat-input {
    border-top-color: #334155;
    background: #0f172a;
  }

  .chat-textarea {
    flex: 1;
    resize: none;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 0.5rem 0.625rem;
    font-size: 0.8rem;
    line-height: 1.5;
    color: #1e293b;
    background: white;
    outline: none;
    font-family: inherit;
    transition: border-color 0.15s;
  }
  :global(html.dark) .chat-textarea {
    background: #1e293b;
    border-color: #334155;
    color: #e2e8f0;
  }
  .chat-textarea:focus {
    border-color: #7dd3fc;
  }
  :global(html.dark) .chat-textarea:focus { border-color: #0369a1; }
  .chat-textarea::placeholder { color: #94a3b8; }
  .chat-textarea:disabled { opacity: 0.6; cursor: not-allowed; }

  .chat-send {
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    border-radius: 0.5rem;
    border: none;
    background: #0284c7;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }
  .chat-send:hover:not(:disabled) { background: #0369a1; }
  .chat-send:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
  }
  :global(html.dark) .chat-send:disabled { background: #334155; }
</style>
