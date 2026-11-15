<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { fly } from 'svelte/transition';
  import Footer from './lib/Footer.svelte';
  import Nav from './lib/Nav.svelte';
  import { router } from './lib/router.svelte';
  import { site } from './lib/site';
  import Home from './routes/Home.svelte';
  import Project from './routes/Project.svelte';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  $effect(() => {
    document.title = router.route === 'project' ? `${site.project.title} / ${site.studio}` : site.studio;
  });
</script>

<Nav />

{#key router.route}
  <main in:fly={{ y: reduced ? 0 : 18, duration: reduced ? 0 : 700, easing: cubicOut }}>
    {#if router.route === 'project'}
      <Project />
    {:else}
      <Home />
    {/if}
  </main>
{/key}

<Footer />
