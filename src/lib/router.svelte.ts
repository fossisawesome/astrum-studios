import { site } from './site';

// Tiny hash router: "#/" is home, "#/scp-security-breach" is the project page.
// Hash routes work on any static host with no server rewrites.

export type Route = 'home' | 'project';

export const paths = {
  home: '#/',
  project: `#/${site.project.slug}`,
} as const;

function parse(hash: string): Route {
  return hash.replace(/^#\/?/, '') === site.project.slug ? 'project' : 'home';
}

export const router = $state<{ route: Route }>({ route: parse(location.hash) });

window.addEventListener('hashchange', () => {
  const next = parse(location.hash);
  if (next === router.route) return;
  router.route = next;
  window.scrollTo({ top: 0, behavior: 'instant' });
});
