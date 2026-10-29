const serviceDetails = {
  'financial-planning': {
    title: 'Financial Planning',
    sectionHeading: 'Build a financial plan around your priorities.',
    approachHeading: 'A plan built around the full picture.',
    description: 'A holistic view of your finances, values, objectives, and concerns to guide planning recommendations.',
    overview: 'Financial planning brings the parts of your financial life into one coordinated conversation. The starting point is understanding what matters to you, where things stand today, and the decisions you want to make.',
    topics: ['Cash flow, saving, and debt priorities', 'Investments, retirement, and long-term goals', 'Insurance, tax, estate, and education considerations'],
    approach: 'Planning recommendations depend on your goals, financial circumstances, and the services included in your engagement. We explain relevant options and tradeoffs so you can make informed decisions.',
    note: 'Financial planning is an ongoing process. Your plan can be reviewed and adjusted as your circumstances and priorities change.'
  },
  'investment-management': {
    title: 'Investment Management',
    sectionHeading: 'A portfolio aligned with your goals.',
    approachHeading: 'Investment decisions with your goals in view.',
    description: 'Investment management considers your goals, time horizon, resources, and comfort with investment risk.',
    overview: 'Investment management focuses on how your financial assets fit your broader plan. The conversation can include the purpose of each account, your time horizon, liquidity needs, and how much uncertainty you can accept.',
    topics: ['Portfolio purpose, allocation, and diversification', 'Risk, time horizon, and liquidity needs', 'Account coordination and ongoing review'],
    approach: 'Investment decisions are made in the context of your circumstances and agreed objectives. Investments involve risk, including possible loss of principal; no strategy assures a profit or protects against loss.',
    note: 'Past performance does not guarantee future results. Investment services are offered through Shorebreak Capital LLC, a Registered Investment Adviser.'
  },
  'retirement-planning': {
    title: 'Retirement Planning',
    sectionHeading: 'What do you want retirement to make possible?',
    approachHeading: 'A retirement plan shaped by your next chapter.',
    description: 'Prepare for retirement by considering your goals, savings, timing, income needs, and available resources.',
    overview: 'Retirement planning starts before retirement. It considers the life you hope to lead, the resources available, and the choices you may face as you move from saving toward using your assets.',
    topics: ['Retirement timing and spending goals', 'Savings, income sources, and withdrawal considerations', 'Social Security, health coverage, and changing needs'],
    approach: 'A retirement plan is personal to your circumstances. We can organize questions, compare possible approaches, and revisit assumptions as your plans and situation evolve.',
    note: 'Estimates rely on assumptions and cannot guarantee a particular retirement date, income, or investment result.'
  },
  'investment-planning': {
    title: 'Investment Planning',
    sectionHeading: 'Give your investment decisions a clear purpose.',
    approachHeading: 'An investment approach grounded in your goals.',
    description: 'Connect investment choices to your financial goals, available resources, time horizon, and risk considerations.',
    overview: 'Investment planning identifies the goals your investments are meant to support and how those goals relate to your broader financial picture. It starts with your current resources and the timing of your needs.',
    topics: ['Short- and long-term financial objectives', 'Time horizon, liquidity, and risk tolerance', 'How investment decisions coordinate with your financial plan'],
    approach: 'We discuss the tradeoffs associated with different approaches. Diversification does not ensure a profit or guarantee against loss, and investment results cannot be guaranteed.',
    note: 'Investment planning is not a prediction of market performance. Your circumstances and investment objectives should guide decisions.'
  },
  'insurance-planning': {
    title: 'Insurance Planning',
    sectionHeading: 'Protect the people and plans that matter.',
    approachHeading: 'Protection choices for your real life.',
    description: 'Review how insurance and other protection strategies may address risks to your income, family, and assets.',
    overview: 'Insurance planning looks at risks that could affect your financial goals and reviews how existing coverage fits your needs. The right questions depend on your family, work, assets, and other resources.',
    topics: ['Life, disability, health, and long-term care considerations', 'Home, auto, and other property coverage needs', 'Existing policies, coverage gaps, and coordination'],
    approach: 'We can help identify planning questions and discuss coverage considerations. Product availability and recommendations depend on your circumstances; commissions may be received on certain insurance or annuity products.',
    note: 'Insurance products involve terms, costs, and limitations. Review policy documents and compensation details before making a decision.'
  },
  'tax-planning': {
    title: 'Tax Planning',
    sectionHeading: 'Bring tax considerations into your bigger picture.',
    approachHeading: 'Tax considerations, connected to your plan.',
    description: 'Consider how taxes relate to cash flow, investments, retirement, and other financial decisions.',
    overview: 'Tax planning considers potential tax effects while you make broader financial decisions. Coordinating timing, accounts, and anticipated changes can help you understand the tradeoffs involved.',
    topics: ['Tax considerations related to saving and investing', 'Retirement income and distribution questions', 'Coordination with your tax preparer or CPA'],
    approach: 'We can discuss tax-aware planning considerations as part of your financial plan and coordinate with your tax professional when appropriate.',
    note: 'Tax preparation and tax advice may be separate services and are not offered through Shorebreak Capital LLC. Consult a qualified tax professional about your circumstances.'
  },
  'estate-planning': {
    title: 'Estate Planning',
    sectionHeading: 'Make room for the legacy you want to leave.',
    approachHeading: 'Your wishes, considered in the financial plan.',
    description: 'Organize estate-related financial questions and coordinate your planning with qualified legal professionals.',
    overview: 'Estate planning helps you consider how decisions about beneficiaries, assets, and future care connect to your wishes and the people important to you.',
    topics: ['Beneficiary designations and account ownership', 'Questions about wills, trusts, and powers of attorney', 'Coordination with your estate-planning attorney'],
    approach: 'We can help identify financial planning questions and coordinate relevant information with your attorney. Legal documents and legal advice should come from a licensed attorney.',
    note: 'This page is educational information, not legal advice. Estate plans should be drafted or reviewed by a qualified attorney.'
  },
  'education-planning': {
    title: 'Education Planning',
    sectionHeading: 'How education planning can fit your plan.',
    approachHeading: 'Education goals, balanced with the bigger picture.',
    description: 'Plan for education goals by considering timing, estimated costs, available resources, and other priorities.',
    overview: 'Education planning helps families think ahead about education costs and how those goals fit alongside retirement, cash flow, and other financial needs.',
    topics: ['Education timelines and possible cost ranges', 'Savings approaches and account considerations', 'Balancing education goals with other household priorities'],
    approach: 'We can help organize the questions and compare planning considerations based on your goals and circumstances. Any projections rely on assumptions and are not guarantees.',
    note: 'Education costs, aid, and account rules can change. Confirm current details with the relevant institutions and qualified professionals.'
  },
  'cash-flow-planning': {
    title: 'Cash Flow Planning',
    sectionHeading: 'Create a cash flow that reflects what matters.',
    approachHeading: 'A day-to-day plan that fits your priorities.',
    description: 'Understand how income, spending, saving, and debt interact with your short- and long-term goals.',
    overview: 'Cash flow planning provides a clearer view of where money comes from and where it goes. That information can help you evaluate everyday choices alongside larger financial goals.',
    topics: ['Income, spending patterns, and savings capacity', 'Debt payments and upcoming expenses', 'Emergency reserves and competing financial goals'],
    approach: 'We work from your actual priorities and financial picture to identify practical questions and possible next steps. A plan should fit your circumstances, not a generic budget formula.',
    note: 'Cash flow estimates are based on information available at the time and may change as income, expenses, and priorities change.'
  },
  'business-planning': {
    title: 'Business Planning',
    sectionHeading: 'Bring business and personal goals together.',
    approachHeading: 'Business decisions, connected to your goals.',
    description: 'Connect business decisions with owner goals, cash flow, employee benefits, and personal financial planning.',
    overview: 'Business planning considers how business and personal finances affect one another. Owners may need to coordinate compensation, business cash flow, employee benefits, taxes, and long-term plans.',
    topics: ['Business cash flow and owner compensation', 'Employee benefits and planning considerations', 'Coordination with tax, legal, and business professionals'],
    approach: 'We can help identify financial planning questions and coordinate with your other professional advisers. Scope depends on your situation and the services agreed to.',
    note: 'Business, tax, and legal matters may require separate specialists. No business or financial result is guaranteed.'
  },
  'financial-literacy': {
    title: 'Financial Literacy',
    sectionHeading: 'Understand your choices with confidence.',
    approachHeading: 'Clear explanations for more confident decisions.',
    description: 'Build practical understanding of financial topics to support informed conversations and decisions.',
    overview: 'Financial literacy is about understanding common money concepts and knowing which questions to ask. Clear information can help individuals and families participate more confidently in financial decisions.',
    topics: ['Everyday money, saving, and spending concepts', 'Understanding financial planning terms and tradeoffs', 'Age-appropriate financial education for families'],
    approach: 'We aim to explain planning topics in plain language and make room for questions. Educational materials are general in nature and are not a substitute for advice tailored to your situation.',
    note: 'The educational information on this page is general and does not constitute investment, tax, legal, or accounting advice.'
  }
};

const servicePricing = {
  'financial-planning': 'planning-options',
  'investment-management': 'asset-based',
  'cash-flow-planning': 'hourly',
  'business-planning': 'hourly'
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
  heading.append(create('h2', '', service.sectionHeading));
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

  if (pricingType === 'planning-options') {
    pricingHeading.append(create('h2', '', 'Three ways to get a plan that fits your life.'));
    pricingHeading.append(create('p', '', 'Choose a one-time plan, an ongoing planning membership, or planning included with investment management once you have $300,000 or more in managed assets.'));
    const options = [
      { label: 'One-time comprehensive plan', title: 'Planning Engagement', description: 'A written plan with retirement, cash-flow, tax, insurance, and estate-planning considerations.', prefix: 'Starting at ', amount: '$2,500 one-time' },
      { label: 'Ongoing relationship', title: 'Planning Membership', description: 'An ongoing financial plan updated as your goals and circumstances change.', prefix: 'Starting at ', amount: '$300/month', detail: '12-month minimum, then month-to-month' },
      { label: '$300,000+ managed assets', title: 'Included With Management', description: 'Financial planning coordinated with your investment management.', amount: 'Planning included', detail: 'at no additional cost' },
      { label: 'À la carte advice', title: 'Focused Guidance', description: 'Targeted advice for a specific question or decision.', prefix: 'Starting at ', amount: '$250/hour', detail: 'Two-hour minimum' }
    ];

    const pricingOptions = create('div', 'pricing-options');

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
    pricingHeading.append(create('h2', '', 'One flat advisory fee.'));
    pricingHeading.append(create('p', '', 'Investment management is billed at 1.00% of managed assets per year, monthly in arrears. There are no tiers or asset minimums. Financial planning is included at no additional cost once managed assets reach $300,000.'));

    const tableWrap = create('div', 'fee-table-wrap');
    const table = create('table', 'fee-table');
    const tableHead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Managed assets', 'Annual advisory fee', 'Financial planning'].forEach((label) => {
      headerRow.append(create('th', '', label));
    });
    tableHead.append(headerRow);
    const tableBody = document.createElement('tbody');
    [
      ['Any amount', '1.00%', 'Available separately'],
      ['$300,000 and above', '1.00%', 'Included at no additional cost']
    ].forEach(([assets, fee, planning]) => {
      const row = document.createElement('tr');
      row.append(create('th', '', assets), create('td', '', fee), create('td', '', planning));
      tableBody.append(row);
    });
    table.append(tableHead, tableBody);
    tableWrap.append(table);
    pricingContainer.append(pricingHeading, tableWrap);
  } else {
    pricingHeading.append(create('h2', '', 'Part of your comprehensive financial plan.'));
    pricingHeading.append(create('p', '', `${service.title} can be addressed as part of financial planning. Review the available planning relationships and investment management fees.`));
    const pricingLink = create('a', 'external-arrow', 'View planning and investment pricing');
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
