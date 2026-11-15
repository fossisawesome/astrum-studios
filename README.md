# Astrum Studios website

Studio site for Astrum Studios and its current project, SCP: Security Breach
(a mod for Pavlov Shack). Vite + Svelte 5 + TypeScript, plain CSS, no UI
libraries. It is separate from the mod and ships nothing into the Modkit.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run check    # type-check (svelte-check)
npm run build    # static site in dist/
npm run preview  # serve the built site
```

The build uses a relative base and hash routes (`#/`, `#/scp-security-breach`),
so `dist/` can be dropped onto any static host or subfolder with no rewrites.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` type-checks, builds and publishes `dist/` on every
push to `main`. This folder must be the root of its own GitHub repository for
the workflow to be picked up. One-time setup: in the repo go to
Settings > Pages and set Source to "GitHub Actions".

## Where things are

| What | Where |
|------|-------|
| Links, team, project text | `src/lib/site.ts` |
| Colours, fonts, shared styles, dark/light tokens | `src/app.css` |
| Home page / project page | `src/routes/Home.svelte`, `src/routes/Project.svelte` |
| Nav with theme toggle, footer | `src/lib/Nav.svelte`, `src/lib/Footer.svelte` |
| Theme logic (saved in `localStorage` as `astrum-theme`) | `src/lib/theme.svelte.ts`, plus the inline script in `index.html` |
| Hash router | `src/lib/router.svelte.ts` |
| Scroll reveal and text scramble | `src/lib/motion.ts` |
| Logo (navy + pale PNGs, switched by theme) | `src/lib/Logo.svelte`, `src/assets/logo-*.png`, favicons in `public/` |

## Still to fill in

- **mod.io link**: set `modio` in `src/lib/site.ts`. While it is empty the
  site shows a "mod.io link soon" placeholder instead of a button.

## Notes

- Fonts (Doto, Space Grotesk, Space Mono) are self-hosted via @fontsource packages (SIL OFL), bundled into the build. No requests to Google.
- All motion is disabled for visitors with "reduce motion" set.
- The design mockup lives on a Claude Design canvas, not in this folder.

## Licence

GPL-3.0, see `LICENSE`. Note that CC BY-SA 3.0 material (SCP Foundation content, Containment Breach assets) is not GPLv3-compatible, so keep it out of this repo; the site only credits it.
