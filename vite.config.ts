import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Relative base so the built site works from any folder on any static host.
export default defineConfig({
  base: './',
  plugins: [svelte()],
});
