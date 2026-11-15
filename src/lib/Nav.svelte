<script lang="ts">
  import Logo from './Logo.svelte';
  import { site } from './site';
  import { paths, router } from './router.svelte';
  import { theme, toggleTheme } from './theme.svelte';
</script>

<header>
  <div class="wrap bar">
    <a class="brand" href={paths.home} aria-label="{site.studio} home">
      <Logo size={32} />
    </a>

    <nav class="label" aria-label="Main">
      {#if router.route === 'home'}
        <a href={paths.project}>{site.project.file}</a>
      {:else}
        <a href={paths.home}><span aria-hidden="true">&larr;&nbsp;</span>Astrum</a>
      {/if}
      <a href={site.discord.url} target="_blank" rel="noopener noreferrer">Contact</a>
      <button
        class="label"
        type="button"
        onclick={toggleTheme}
        aria-label="Switch to {theme.current === 'dark' ? 'light' : 'dark'} mode"
      >
        <span class="dot" aria-hidden="true"></span>
        <span>{theme.current}</span>
      </button>
    </nav>
  </div>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: color-mix(in srgb, var(--bg) 72%, transparent);
    -webkit-backdrop-filter: blur(18px);
    backdrop-filter: blur(18px);
  }

  .bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 8px 16px;
    padding-block: 14px;
  }

  .brand {
    display: flex;
    align-items: center;
    min-height: 44px;
    transition: opacity 0.3s var(--ease);
  }

  .brand:hover {
    opacity: 0.7;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px clamp(18px, 3vw, 32px);
  }

  nav a,
  button {
    display: flex;
    align-items: center;
    min-height: 44px;
  }

  button {
    gap: 10px;
    min-width: 44px;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    transition: color 0.3s var(--ease);
  }

  button:hover {
    color: var(--fg);
  }
</style>
