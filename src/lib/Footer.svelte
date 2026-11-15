<script lang="ts">
  import { site } from './site';
  import { paths, router } from './router.svelte';

  const year = new Date().getFullYear();
</script>

<footer class="section">
  <div class="wrap inner">
    <div class="row label">
      <span>&copy; {year} {site.studio}</span>
      {#if router.route === 'project'}
        <a href={paths.home}>Astrum</a>
      {:else if site.modio}
        <a href={site.modio} target="_blank" rel="noopener noreferrer">mod.io</a>
      {/if}
    </div>
    <p>
      {site.project.title} is a fan-made mod and is not affiliated with Vankrupt Games or Northwood Studios. Inspired
      by SCP: Secret Laboratory by Northwood Studios. Built with assets from SCP: Containment Breach by Joonas &ldquo;Regalis&rdquo; Rikkonen and Undertow Games. Content
      relating to the SCP Foundation is licensed under Creative Commons Attribution-ShareAlike 3.0 and is based on
      works from scpwiki.com and its authors.
    </p>
  </div>
</footer>

<style>
  .inner {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-block: 40px 48px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 12px 24px;
    min-height: 44px;
  }

  .row a {
    display: flex;
    align-items: center;
    min-height: 44px;
  }

  p {
    max-width: 760px;
    font-size: 12px;
    line-height: 1.6;
    color: var(--mut);
  }
</style>
