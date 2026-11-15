<script lang="ts">
  import Redacted from '../lib/Redacted.svelte';
  import { reveal, scramble } from '../lib/motion';
  import { paths } from '../lib/router.svelte';
  import { site } from '../lib/site';

  const letters = 'ASTRUM'.split('');
</script>

<section class="hero">
  <div class="wrap hero-in">
    <h1 aria-label={site.studio}>
      <span class="word" aria-hidden="true">
        {#each letters as ch, i}<span class="ch" style="--i: {i}">{ch}</span>{/each}
      </span>
      <span class="sub" aria-hidden="true">Studios</span>
    </h1>

    <div class="hero-row label">
      <span class="signal">
        <span class="dot pulse" aria-hidden="true"></span>
        <span use:scramble={{ delay: 900 }}>Signal 01 / active</span>
      </span>
      <a class="open" href={paths.project}>
        Open {site.project.file} <span class="arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap file">
    <span class="label" use:reveal>{site.project.file} / {site.project.status}</span>
    <h2 class="display" use:reveal={{ delay: 80 }}>{site.project.title}</h2>
    <p class="lede" use:reveal={{ delay: 160 }}>{site.project.tagline}</p>
    <div class="meta label" use:reveal={{ delay: 240 }}>
      <span>Location</span>
      <Redacted />
      <span>Pavlov Shack / Meta Quest</span>
    </div>
    <div use:reveal={{ delay: 320 }}>
      <a class="btn" href={paths.project}>Enter <span class="arrow" aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap studio">
    <div class="about">
      <span class="label" use:reveal>Studio</span>
      <p class="statement" use:reveal={{ delay: 80 }}>{site.studio} is a small game modding studio.</p>
    </div>
    <dl class="team">
      {#each site.team as member, i}
        <div class="member" use:reveal={{ delay: 120 + i * 90 }}>
          <dd>{member.name}</dd>
          <dt class="label">{member.role}</dt>
        </div>
      {/each}
    </dl>
  </div>
</section>

<section class="section">
  <div class="wrap contact">
    <h2 class="display" use:reveal>Stay in Contact</h2>
    <div use:reveal={{ delay: 120 }}>
      <a class="ulink" href={site.discord.url} target="_blank" rel="noopener noreferrer">
        {site.discord.label} <span class="arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
</section>

<style>
  /* Hero */

  .hero-in {
    display: flex;
    flex-direction: column;
    gap: 56px;
    padding-block: clamp(110px, 17vw, 200px) clamp(120px, 18vw, 220px);
  }

  h1 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-weight: 400;
  }

  .word {
    display: block;
    font-family: var(--f-dot);
    font-weight: 900;
    font-size: clamp(72px, 19vw, 280px);
    line-height: 0.84;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .ch {
    display: inline-block;
    animation: rise 1.4s var(--ease) calc(var(--i) * 70ms + 120ms) both;
  }

  .sub {
    padding-left: 0.5em;
    font-family: var(--f-mono);
    font-size: clamp(12px, 1.4vw, 16px);
    letter-spacing: 1.1em;
    text-transform: uppercase;
    color: var(--mut);
    animation: track 1.8s var(--ease) 0.6s both;
  }

  .hero-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px 24px;
    animation: fade 1.4s var(--ease) 0.9s both;
  }

  .signal {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .pulse {
    animation: pulse 3.2s ease-in-out infinite;
  }

  .open {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 44px;
    color: var(--fg);
  }

  .open:hover {
    color: var(--acc);
  }

  /* The wordmark recedes as the page scrolls, where scroll-driven
     animations are supported. */
  @supports (animation-timeline: scroll()) {
    @media (prefers-reduced-motion: no-preference) {
      h1 {
        animation: recede linear both;
        animation-timeline: scroll(root);
        animation-range: 0 70vh;
      }
    }
  }

  @keyframes rise {
    from {
      opacity: 0;
      transform: translateY(0.18em);
      filter: blur(10px);
    }
  }

  @keyframes track {
    from {
      opacity: 0;
      letter-spacing: 0.5em;
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

  @keyframes recede {
    to {
      opacity: 0;
      transform: translateY(-48px) scale(0.96);
    }
  }

  /* File 01 */

  .file {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    padding-block: clamp(96px, 14vw, 160px);
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 16px;
  }

  /* Studio */

  .studio {
    display: flex;
    flex-wrap: wrap;
    gap: 64px;
    padding-block: clamp(96px, 14vw, 160px);
  }

  .about {
    flex: 1 1 360px;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .statement {
    max-width: 460px;
    font-size: clamp(24px, 2.6vw, 36px);
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  .team {
    flex: 1 1 360px;
    min-width: 0;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--line);
  }

  .member {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 4px 16px;
    padding-block: 20px;
    border-top: 1px solid var(--line);
  }

  .member dd {
    font-size: 20px;
  }

  /* Contact */

  .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 36px;
    padding-block: clamp(110px, 16vw, 180px);
  }
</style>
