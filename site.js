const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-wrap');
const exploreLink = document.querySelector('.primary-nav a[href="site-map.html"]');

if (exploreLink) {
  const categories = [
    {
      title: 'About',
      links: [
        ['Our Philosophy', 'about.html#philosophy'],
        ['Who We Serve', 'about.html#who-we-serve']
      ]
    },
    {
      title: 'Services',
      links: [
        ['Financial Planning', 'financial-planning.html'],
        ['Investment Management', 'investment-management.html'],
        ['Retirement Planning', 'retirement-planning.html'],
        ['Investment Planning', 'investment-planning.html'],
        ['Insurance Planning', 'insurance-planning.html'],
        ['Tax Planning', 'tax-planning.html'],
        ['Estate Planning', 'estate-planning.html'],
        ['Education Planning', 'education-planning.html'],
        ['Cash Flow Planning', 'cash-flow-planning.html'],
        ['Business Planning', 'business-planning.html'],
        ['Financial Literacy', 'financial-literacy.html']
      ]
    },
    {
      title: 'Pricing',
      links: [['Planning and Investment Fees', 'pricing.html']]
    },
    {
      title: 'Resources',
      links: [
        ['Frequently Asked Questions', 'resources.html#faq'],
        ['Blog Articles', 'resources.html#articles'],
        ['Financial Calculators', 'resources.html#calculator'],
        ['Useful Links', 'resources.html#useful-links']
      ]
    },
    {
      title: 'Firm Information',
      links: [
        ['Disclosures', 'legal.html#disclosures'],
        ['Privacy Policy', 'legal.html#privacy']
      ]
    },
    {
      title: 'Contact',
      links: [['Contact Us', 'contact.html']]
    },
    {
      title: 'Client Access',
      links: [
        ['RightCapital', 'https://app.rightcapital.com/account/login?cobrand=jE68KEe8AQOXTp6RTVM43w&type=client'],
        ['Altruist', 'https://app.altruist.com/login']
      ]
    }
  ];

  const dropdown = document.createElement('details');
  dropdown.className = 'nav-dropdown';

  const toggle = document.createElement('summary');
  toggle.textContent = 'Explore';
  toggle.setAttribute('aria-label', 'Explore pages by category');
  toggle.setAttribute('aria-controls', 'explore-menu');
  if (exploreLink.getAttribute('aria-current') === 'page') {
    toggle.setAttribute('aria-current', 'page');
  }

  const panel = document.createElement('div');
  panel.className = 'explore-menu';
  panel.id = 'explore-menu';

  categories.forEach(({ title, links }) => {
    const section = document.createElement('details');
    section.className = 'explore-category';

    const heading = document.createElement('summary');
    heading.textContent = title;

    const categoryLinks = document.createElement('div');
    categoryLinks.className = 'explore-category-links';
    if (title === 'Services') section.classList.add('explore-category-services');

    links.forEach(([label, href]) => {
      const link = document.createElement('a');
      link.href = href;
      link.textContent = label;
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      if (href.split('#')[0] === currentPath) link.setAttribute('aria-current', 'page');
      if (/^(https?:)?\/\//.test(href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      categoryLinks.append(link);
    });

    section.append(heading, categoryLinks);
    panel.append(section);
  });

  dropdown.append(toggle, panel);
  exploreLink.replaceWith(dropdown);

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) dropdown.open = false;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && dropdown.open) {
      dropdown.open = false;
      toggle.focus();
    }
  });
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
    if (expanded) {
      const dropdown = navigation.querySelector('.nav-dropdown');
      if (dropdown) dropdown.open = false;
    }
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    });
  });
}