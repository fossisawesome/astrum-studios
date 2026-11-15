<script lang="ts">
  import ModioButton from '../lib/ModioButton.svelte';
  import { reveal, scramble } from '../lib/motion';
  import { site } from '../lib/site';

  const lines = ['SECURITY', 'BREACH'];
</script>

<section class="hero">
  <div class="wrap hero-in">
    <div class="status label">
      <span class="dot pulse" aria-hidden="true"></span>
      <span use:scramble={{ delay: 300 }}>{site.project.file} / {site.project.status}</span>
    </div>

    <h1 aria-label={site.project.title}>
      <span class="prefix" aria-hidden="true">SCP:</span>
      {#each lines as line, i}
        <span class="line" aria-hidden="true" style="--i: {i}">{line}</span>
      {/each}
    </h1>

    <div class="hero-row">
      <p class="lede">{site.project.tagline}</p>
      <ModioButton />
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap enter">
    <h2 class="display" use:reveal>Enter the facility.</h2>
    <div class="actions" use:reveal={{ delay: 120 }}>
      <ModioButton />
      <a class="ulink" href={site.discord.url} target="_blank" rel="noopener noreferrer">
        {site.discord.label} <span class="arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
    <span class="label" use:reveal={{ delay: 200 }}>{site.project.platform}</span>
  </div>
</section>

<style>
  .hero-in {
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding-block: clamp(100px, 15vw, 180px) clamp(110px, 17vw, 200px);
  }

  .status {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .pulse {
    animation: pulse 3.2s ease-in-out infinite;
  }

  h1 {
    display: flex;
    flex-direction: column;
    font-family: var(--f-dot);
    font-weight: 900;
  }

  .prefix {
    margin-bottom: 8px;
    font-size: clamp(28px, 4vw, 56px);
    line-height: 0.9;
    color: var(--mut);
    animation: fade 1.4s var(--ease) 0.1s both;
  }

  .line {
    font-size: clamp(52px, 12.5vw, 184px);
    line-height: 0.84;
    letter-spacing: -0.02em;
    white-space: nowrap;
    animation: rise 1.5s var(--ease) calc(var(--i) * 140ms + 180ms) both;
  }

  .hero-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    animation: fade 1.4s var(--ease) 0.8s both;
  }

  .enter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    padding-block: clamp(110px, 16vw, 180px);
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px 32px;
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(0.16em);
      filter: blur(10px);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
  }

  @keyframes pulse {
    50% {
      opacity: 0.25;
    }
  }
</style>
