const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealSelector = 'main > section:not(.hero):not(.page-hero):not(.page-intro):not(.closing):not(.cta-band):not(.contact):not(.promise)';
const revealSections = [...document.querySelectorAll(revealSelector)];

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

  revealSections.forEach((section) => {
    section.classList.add('scroll-reveal');
    observer.observe(section);
  });
}