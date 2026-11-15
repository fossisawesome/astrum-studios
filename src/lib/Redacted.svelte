<script lang="ts">
  // A solid redaction bar, announced as "Redacted" to screen readers.
  let { width = 168, height = 14 }: { width?: number; height?: number } = $props();
</script>

<span class="bar" role="img" aria-label="Redacted" style="width: {width}px; height: {height}px"></span>

<style>
  .bar {
    display: inline-block;
    max-width: 60%;
    background: var(--fg);
    transform-origin: left center;
    animation: strike 0.9s var(--ease) 0.5s both;
  }

  @keyframes strike {
    from {
      transform: scaleX(0);
    }
  }
</style>
