<script lang="ts">
  // The Astrum Studios mark. Two files: navy for the light theme, pale for the
  // dark theme. The right one is chosen by CSS from the current theme.
  import dark from '../assets/logo-dark.png';
  import light from '../assets/logo-light.png';

  let { size = 26 }: { size?: number } = $props();
</script>

<span class="logo" style="width: {size}px; height: {size}px" aria-hidden="true">
  <img class="on-light" src={dark} alt="" width="1024" height="1024" />
  <img class="on-dark" src={light} alt="" width="1024" height="1024" />
</span>

<style>
  .logo {
    display: block;
    position: relative;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .on-light {
    display: none;
  }

  :global(:root[data-theme='light']) .on-light {
    display: block;
  }

  :global(:root[data-theme='light']) .on-dark {
    display: none;
  }
</style>
