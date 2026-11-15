export type Theme = 'dark' | 'light';

const KEY = 'astrum-theme';

function initial(): Theme {
  // index.html already resolved this before first paint.
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export const theme = $state<{ current: Theme }>({ current: initial() });

function apply(next: Theme) {
  theme.current = next;
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(KEY, next);
  } catch {
    // Storage can be blocked; the toggle still works for this visit.
  }
}

export function toggleTheme() {
  const next: Theme = theme.current === 'dark' ? 'light' : 'dark';
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cross-fade the whole page where the browser supports it.
  if (doc.startViewTransition && !reduced) doc.startViewTransition(() => apply(next));
  else apply(next);
}
