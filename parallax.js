const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileViewport = window.matchMedia('(max-width: 680px)');
const parallaxImages = [...document.querySelectorAll('.hero-image, .page-hero-image, .person-photo')];

if (!reduceMotion.matches && parallaxImages.length) {
  let framePending = false;

  const updateParallax = () => {
    const viewportCenter = window.innerHeight / 2;
    const maxOffset = mobileViewport.matches ? 10 : 24;
    const strength = mobileViewport.matches ? 0.018 : 0.045;

    parallaxImages.forEach((image) => {
      const section = image.closest('.hero, .page-hero, .person');
      if (!section) return;

      const bounds = section.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;

      const sectionCenter = bounds.top + bounds.height / 2;
      const offset = Math.max(-maxOffset, Math.min(maxOffset, (sectionCenter - viewportCenter) * -strength));
      image.style.setProperty('--parallax-offset', `${offset.toFixed(1)}px`);
    });
  };

  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(() => {
      framePending = false;
      updateParallax();
    });
  };

  updateParallax();
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  reduceMotion.addEventListener('change', () => {
    if (reduceMotion.matches) {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      parallaxImages.forEach((image) => image.style.removeProperty('--parallax-offset'));
    } else {
      scheduleUpdate();
      window.addEventListener('scroll', scheduleUpdate, { passive: true });
      window.addEventListener('resize', scheduleUpdate);
    }
  });
}