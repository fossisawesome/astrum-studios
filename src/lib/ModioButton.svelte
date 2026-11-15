<script lang="ts">
  import { site } from './site';
</script>

{#if site.modio}
  <a class="btn" href={site.modio} target="_blank" rel="noopener noreferrer">
    Get it on mod.io <span class="arrow" aria-hidden="true">&rarr;</span>
  </a>
{:else}
  <span class="btn btn-pending">mod.io link soon</span>
{/if}
