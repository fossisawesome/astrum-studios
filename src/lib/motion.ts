// Small motion helpers used as Svelte actions. Both do nothing when the
// visitor prefers reduced motion.

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fade and rise an element in the first time it scrolls into view. */
export function reveal(node: HTMLElement, opts: { delay?: number } = {}) {
  if (reducedMotion() || !('IntersectionObserver' in window)) return;

  node.classList.add('reveal');
  if (opts.delay) node.style.setProperty('--reveal-delay', `${opts.delay}ms`);

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        node.classList.add('in');
        io.disconnect();
      }
    },
    { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
  );
  io.observe(node);

  return { destroy: () => io.disconnect() };
}

/** Resolve a label out of random characters, left to right. */
export function scramble(node: HTMLElement, opts: { delay?: number; duration?: number } = {}) {
  if (reducedMotion()) return;

  const final = node.textContent ?? '';
  const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#';
  const duration = opts.duration ?? 1100;
  const startAt = performance.now() + (opts.delay ?? 0);
  let raf = 0;
  let lastDraw = 0;

  const noise = (text: string) =>
    Array.from(text, (c) => (c === ' ' ? ' ' : glyphs[Math.floor(Math.random() * glyphs.length)])).join('');

  node.textContent = noise(final);

  const tick = (now: number) => {
    const p = Math.min(1, Math.max(0, (now - startAt) / duration));
    if (p >= 1) {
      node.textContent = final;
      return;
    }
    if (now - lastDraw > 45) {
      const shown = Math.floor(p * final.length);
      node.textContent = final.slice(0, shown) + noise(final.slice(shown));
      lastDraw = now;
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  return {
    destroy() {
      cancelAnimationFrame(raf);
      node.textContent = final;
    },
  };
}
