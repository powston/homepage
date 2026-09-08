const hero = document.querySelector('.hero');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let framePending = false;
addEventListener('scroll', () => {
  if (framePending || reducedMotion.matches) return;
  framePending = true;
  requestAnimationFrame(() => {
    const top = hero.getBoundingClientRect().top;
    if (top > -hero.offsetHeight) hero.style.setProperty('--photo-shift', `${Math.max(-24, Math.min(24, -top * .045))}px`);
    framePending = false;
  });
}, { passive: true });
