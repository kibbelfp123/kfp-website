const serviceDetails = {
  'financial-planning': {
    title: 'Financial Planning',
    approachHeading: 'A plan built around the full picture.',
    description: 'A holistic view of your finances, values, objectives, and concerns to guide planning recommendations.',
    overview: 'Financial planning brings the parts of your financial life into one coordinated conversation. The starting point is understanding what matters to you, where things stand today, and the decisions you want to make.',
    topics: ['Cash flow, saving, and debt priorities', 'Investments, retirement, and long-term goals', 'Insurance, tax, estate, and education considerations'],
    approach: 'Planning recommendations depend on your goals, financial circumstances, and the services included in your engagement. We explain relevant options and tradeoffs so you can make informed decisions.',
    note: 'Financial planning is an ongoing process. Your plan can be reviewed and adjusted as your circumstances and priorities change.'
  },
  'investment-management': {
    title: 'Investment Management',
    approachHeading: 'Investment decisions with your goals in view.',
    description: 'Investment management considers your goals, time horizon, resources, and comfort with investment risk.',
    overview: 'Investment management focuses on how your financial assets fit your broader plan. The conversation can include the purpose of each account, your time horizon, liquidity needs, and how much uncertainty you can accept.',
    topics: ['Portfolio purpose, allocation, and diversification', 'Risk, time horizon, and liquidity needs', 'Account coordination and ongoing review'],
    approach: 'Investment decisions are made in the context of your circumstances and agreed objectives. Investments involve risk, including possible loss of principal; no strategy assures a profit or protects against loss.',
    note: 'Past performance does not guarantee future results. Investment services are offered through Shorebreak Capital LLC, a Registered Investment Adviser.'
  },
  'retirement-planning': {
    title: 'Retirement Planning',
    approachHeading: 'A retirement plan shaped by your next chapter.',
    description: 'Prepare for retirement by considering your goals, savings, timing, income needs, and available resources.',
    overview: 'Retirement planning starts before retirement. It considers the life you hope to lead, the resources available, and the choices you may face as you move from saving toward using your assets.',
    topics: ['Retirement timing and spending goals', 'Savings, income sources, and withdrawal considerations', 'Social Security, health coverage, and changing needs'],
    approach: 'A retirement plan is personal to your circumstances. We can organize questions, compare possible approaches, and revisit assumptions as your plans and situation evolve.',
    note: 'Estimates rely on assumptions and cannot guarantee a particular retirement date, income, or investment result.'
  },
  'investment-planning': {
    title: 'Investment Planning',
    approachHeading: 'An investment approach grounded in your goals.',
    description: 'Connect investment choices to your financial goals, available resources, time horizon, and risk considerations.',
    overview: 'Investment planning identifies the goals your investments are meant to support and how those goals relate to your broader financial picture. It starts with your current resources and the timing of your needs.',
    topics: ['Short- and long-term financial objectives', 'Time horizon, liquidity, and risk tolerance', 'How investment decisions coordinate with your financial plan'],
    approach: 'We discuss the tradeoffs associated with different approaches. Diversification does not ensure a profit or guarantee against loss, and investment results cannot be guaranteed.',
    note: 'Investment planning is not a prediction of market performance. Your circumstances and investment objectives should guide decisions.'
  },
  'insurance-planning': {
    title: 'Insurance Planning',
    approachHeading: 'Protection choices for your real life.',
    description: 'Review how insurance and other protection strategies may address risks to your income, family, and assets.',
    overview: 'Insurance planning looks at risks that could affect your financial goals and reviews how existing coverage fits your needs. The right questions depend on your family, work, assets, and other resources.',
    topics: ['Life, disability, health, and long-term care considerations', 'Home, auto, and other property coverage needs', 'Existing policies, coverage gaps, and coordination'],
    approach: 'We can help identify planning questions and discuss coverage considerations. Product availability and recommendations depend on your circumstances; commissions may be received on certain insurance or annuity products.',
    note: 'Insurance products involve terms, costs, and limitations. Review policy documents and compensation details before making a decision.'
  },
  'tax-planning': {
    title: 'Tax Planning',
    approachHeading: 'Tax considerations, connected to your plan.',
    description: 'Consider how taxes relate to cash flow, investments, retirement, and other financial decisions.',
    overview: 'Tax planning considers potential tax effects while you make broader financial decisions. Coordinating timing, accounts, and anticipated changes can help you understand the tradeoffs involved.',
    topics: ['Tax considerations related to saving and investing', 'Retirement income and distribution questions', 'Coordination with your tax preparer or CPA'],
    approach: 'We can discuss tax-aware planning considerations as part of your financial plan and coordinate with your tax professional when appropriate.',
    note: 'Tax preparation and tax advice may be separate services and are not offered through Shorebreak Capital LLC. Consult a qualified tax professional about your circumstances.'
  },
  'estate-planning': {
    title: 'Estate Planning',
    approachHeading: 'Your wishes, considered in the financial plan.',
    description: 'Organize estate-related financial questions and coordinate your planning with qualified legal professionals.',
    overview: 'Estate planning helps you consider how decisions about beneficiaries, assets, and future care connect to your wishes and the people important to you.',
    topics: ['Beneficiary designations and account ownership', 'Questions about wills, trusts, and powers of attorney', 'Coordination with your estate-planning attorney'],
    approach: 'We can help identify financial planning questions and coordinate relevant information with your attorney. Legal documents and legal advice should come from a licensed attorney.',
    note: 'This page is educational information, not legal advice. Estate plans should be drafted or reviewed by a qualified attorney.'
  },
  'education-planning': {
    title: 'Education Planning',
    approachHeading: 'Education goals, balanced with the bigger picture.',
    description: 'Plan for education goals by considering timing, estimated costs, available resources, and other priorities.',
    overview: 'Education planning helps families think ahead about education costs and how those goals fit alongside retirement, cash flow, and other financial needs.',
    topics: ['Education timelines and possible cost ranges', 'Savings approaches and account considerations', 'Balancing education goals with other household priorities'],
    approach: 'We can help organize the questions and compare planning considerations based on your goals and circumstances. Any projections rely on assumptions and are not guarantees.',
    note: 'Education costs, aid, and account rules can change. Confirm current details with the relevant institutions and qualified professionals.'
  },
  'cash-flow-planning': {
    title: 'Cash Flow Planning',
    approachHeading: 'A day-to-day plan that fits your priorities.',
    description: 'Understand how income, spending, saving, and debt interact with your short- and long-term goals.',
    overview: 'Cash flow planning provides a clearer view of where money comes from and where it goes. That information can help you evaluate everyday choices alongside larger financial goals.',
    topics: ['Income, spending patterns, and savings capacity', 'Debt payments and upcoming expenses', 'Emergency reserves and competing financial goals'],
    approach: 'We work from your actual priorities and financial picture to identify practical questions and possible next steps. A plan should fit your circumstances, not a generic budget formula.',
    note: 'Cash flow estimates are based on information available at the time and may change as income, expenses, and priorities change.'
  },
  'business-planning': {
    title: 'Business Planning',
    approachHeading: 'Business decisions, connected to your goals.',
    description: 'Connect business decisions with owner goals, cash flow, employee benefits, and personal financial planning.',
    overview: 'Business planning considers how business and personal finances affect one another. Owners may need to coordinate compensation, business cash flow, employee benefits, taxes, and long-term plans.',
    topics: ['Business cash flow and owner compensation', 'Employee benefits and planning considerations', 'Coordination with tax, legal, and business professionals'],
    approach: 'We can help identify financial planning questions and coordinate with your other professional advisers. Scope depends on your situation and the services agreed to.',
    note: 'Business, tax, and legal matters may require separate specialists. No business or financial result is guaranteed.'
  },
  'financial-literacy': {
    title: 'Financial Literacy',
    approachHeading: 'Clear explanations for more confident decisions.',
    description: 'Build practical understanding of financial topics to support informed conversations and decisions.',
    overview: 'Financial literacy is about understanding common money concepts and knowing which questions to ask. Clear information can help individuals and families participate more confidently in financial decisions.',
    topics: ['Everyday money, saving, and spending concepts', 'Understanding financial planning terms and tradeoffs', 'Age-appropriate financial education for families'],
    approach: 'We aim to explain planning topics in plain language and make room for questions. Educational materials are general in nature and are not a substitute for advice tailored to your situation.',
    note: 'The educational information on this page is general and does not constitute investment, tax, legal, or accounting advice.'
  }
};

const servicePricing = {
  'financial-planning': 'comprehensive',
  'retirement-planning': 'comprehensive',
  'investment-planning': 'comprehensive',
  'cash-flow-planning': 'hourly',
  'business-planning': 'hourly',
  'investment-management': 'asset-based'
};

const servicePage = document.querySelector('[data-service-page]');
const service = serviceDetails[servicePage?.dataset.servicePage];

if (servicePage && service) {
  document.title = `${service.title} | Kibbel Financial Planning`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', service.description);

  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const hero = create('section', 'page-hero');
  const image = create('img', 'page-hero-image');
  image.src = 'https://www.kibbelfinancialplanning.com/sites/stevenkibbel.us1.advisor.ws/files/styles/slider_xl/public/images/__1.jpeg?itok=ujivJlvU';
  image.alt = '';
  image.fetchPriority = 'high';
  const shade = create('div', 'page-hero-shade');
  shade.setAttribute('aria-hidden', 'true');
  const heroContent = create('div', 'container page-hero-content');
  heroContent.append(create('p', 'eyebrow', 'Financial planning services'));
  heroContent.append(create('h1', '', service.title));
  heroContent.append(create('p', 'page-hero-copy', service.description));
  hero.append(image, shade, heroContent);

  const breadcrumb = create('div', 'breadcrumb');
  const breadcrumbContainer = create('div', 'container');
  const homeLink = create('a', '', 'Home');
  homeLink.href = 'index.html';
  const separator = create('span', '', '/');
  const servicesLink = create('a', '', 'Services');
  servicesLink.href = 'services.html';
  breadcrumbContainer.append(homeLink, separator, servicesLink, ' / ', service.title);
  breadcrumb.append(breadcrumbContainer);

  const section = create('section', 'section');
  const container = create('div', 'container');
  const heading = create('div', 'section-heading');
  heading.append(create('p', 'eyebrow', 'A connected plan'));
  heading.append(create('h2', '', `How ${service.title.toLowerCase()} can fit your plan.`));
  heading.append(create('p', '', service.overview));

  const columns = create('div', 'two-column');
  const topics = create('article', 'item');
  topics.append(create('span', 'item-index', 'Topics to consider'));
  topics.append(create('h2', '', 'Start with your priorities.'));
  const topicList = create('ul', 'simple-list');
  service.topics.forEach((topic) => topicList.append(create('li', '', topic)));
  topics.append(topicList);

  const approach = create('article', 'item');
  approach.append(create('span', 'item-index', 'Our approach'));
  approach.append(create('h2', '', service.approachHeading));
  approach.append(create('p', '', service.approach));
  columns.append(topics, approach);

  const note = create('div', 'callout');
  note.style.marginTop = '24px';
  note.append(create('p', '', service.note));
  container.append(heading, columns, note);
  section.append(container);

  const pricingSection = create('section', 'section section-muted');
  const pricingContainer = create('div', 'container');
  const pricingHeading = create('div', 'section-heading');
  pricingHeading.append(create('p', 'eyebrow', 'Fees and pricing'));

  const pricingType = servicePricing[servicePage.dataset.servicePage];

  if (pricingType === 'comprehensive' || pricingType === 'hourly') {
    const options = pricingType === 'comprehensive'
      ? [
          {
            label: 'Ongoing relationship',
            title: 'Ongoing Comprehensive Plan',
            description: 'Ongoing coordination across financial goals and decisions.',
            prefix: 'Starting at ',
            amount: '$300'
          },
          {
            label: 'Defined engagement',
            title: 'One-Time Comprehensive Plan',
            description: 'A focused plan to organize your financial picture and outline next steps.',
            prefix: 'Starting at ',
            amount: '$2,500'
          }
        ]
      : [
          {
            label: 'Focused guidance',
            title: 'Hourly Planning',
            description: 'Targeted consultation on specific cash-flow or business-planning questions.',
            prefix: 'Starting at ',
            amount: '$250 per hour',
            detail: 'with a 2 hour minimum'
          }
        ];

    pricingHeading.append(create('h2', '', pricingType === 'comprehensive'
      ? 'Comprehensive planning fees.'
      : 'Hourly planning fee.'));
    pricingHeading.append(create('p', '', pricingType === 'comprehensive'
      ? 'These are engagement-level fees for comprehensive planning. The scope and applicable fee are discussed before you decide whether to move forward.'
      : 'Hourly planning is available for focused cash-flow and business-planning questions. The scope is discussed before work begins.'));

    const pricingOptions = create('div', 'three-column');

    options.forEach((option) => {
      const card = create('article', 'item');
      card.append(create('span', 'item-index', option.label));
      card.append(create('h2', '', option.title));
      card.append(create('p', '', option.description));
      const amount = create('p', 'price-amount');
      if (option.prefix) amount.append(option.prefix);
      amount.append(create('strong', '', option.amount));
      if (option.detail) amount.append(create('span', '', option.detail));
      card.append(amount);
      pricingOptions.append(card);
    });

    pricingContainer.append(pricingHeading, pricingOptions);
  } else if (pricingType === 'asset-based') {
    pricingHeading.append(create('h2', '', 'Asset-based fee schedule.'));
    pricingHeading.append(create('p', '', 'The fee is 1% for non-financial planning clients on assets up to $2,000,000. Other client and asset tiers have different rates, as shown below.'));

    const tableWrap = create('div', 'fee-table-wrap');
    const table = create('table', 'fee-table');
    const tableHead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Client relationship', 'Assets up to $2,000,000', 'Assets above $2,000,000'].forEach((label) => {
      headerRow.append(create('th', '', label));
    });
    tableHead.append(headerRow);
    const tableBody = document.createElement('tbody');
    [
      ['Non-Financial Planning Clients', '1%', '0.75%'],
      ['Financial Planning Clients', '0.75%', '0.75%']
    ].forEach(([relationship, below, above]) => {
      const row = document.createElement('tr');
      row.append(create('th', '', relationship), create('td', '', below), create('td', '', above));
      tableBody.append(row);
    });
    table.append(tableHead, tableBody);
    tableWrap.append(table);
    pricingContainer.append(pricingHeading, tableWrap);
  } else {
    pricingHeading.append(create('h2', '', 'Discuss pricing for your needs.'));
    pricingHeading.append(create('p', '', `No service-specific rate is listed for ${service.title}. Any fee depends on the scope of the broader planning engagement.`));
    const pricingLink = create('a', 'external-arrow', 'View planning and investment fees');
    pricingLink.href = 'pricing.html';
    pricingContainer.append(pricingHeading, pricingLink);
  }

  const pricingNote = create('p', 'pricing-note', 'Confirm current fees, billing terms, and the scope of services directly before engagement.');
  pricingContainer.append(pricingNote);
  pricingSection.append(pricingContainer);

  const cta = create('section', 'cta-band');
  const ctaContainer = create('div', 'container cta-inner');
  const ctaCopy = create('div');
  ctaCopy.append(create('h2', '', 'Talk through your questions.'));
  ctaCopy.append(create('p', '', 'We can discuss your goals, explain the scope of services, and help you decide on a next step.'));
  const contactLink = create('a', 'button', 'Contact Us');
  contactLink.href = 'contact.html';
  ctaContainer.append(ctaCopy, contactLink);
  cta.append(ctaContainer);

  servicePage.replaceChildren(hero, breadcrumb, section, pricingSection, cta);
}
