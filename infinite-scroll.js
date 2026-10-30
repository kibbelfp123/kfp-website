const main = document.querySelector('main');

if (main && 'IntersectionObserver' in window) {
  const excludedSections = '.page-hero, .hero, .page-intro, .closing, .cta-band, .contact, .promise';
  const sourceSections = [...main.children].filter((element) =>
    element.matches('section') &&
    !element.matches(excludedSections) &&
    !element.querySelector('form, input, select, textarea, button, [contenteditable="true"]')
  );

  if (sourceSections.length) {
    const sentinel = document.createElement('div');
    sentinel.setAttribute('aria-hidden', 'true');
    sentinel.style.height = '1px';
    main.append(sentinel);

    const status = document.createElement('span');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    status.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
    main.append(status);

    let cycleNumber = 0;
    let loading = false;

    const appendCycle = () => {
      if (loading) return;
      loading = true;
      cycleNumber += 1;

      const cycle = document.createElement('div');
      cycle.className = 'infinite-scroll-cycle';
      cycle.setAttribute('role', 'group');
      cycle.setAttribute('aria-label', `Repeated page content, cycle ${cycleNumber}`);

      sourceSections.forEach((section) => {
        const clone = section.cloneNode(true);
        [clone, ...clone.querySelectorAll('[id], [aria-labelledby], [aria-describedby]')].forEach((element) => {
          element.removeAttribute('id');
          element.removeAttribute('aria-labelledby');
          element.removeAttribute('aria-describedby');
        });
        cycle.append(clone);
      });

      main.insertBefore(cycle, sentinel);
      status.textContent = `Repeated page content loaded, cycle ${cycleNumber}.`;
      loading = false;
    };

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.unobserve(sentinel);
      appendCycle();
      requestAnimationFrame(() => observer.observe(sentinel));
    }, { rootMargin: '500px 0px' });

    observer.observe(sentinel);
  }
}