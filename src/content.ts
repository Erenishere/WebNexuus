import {
  NavItem,
  PortfolioItem,
  PricingTier,
  ProcessStep,
  SeoEntry,
  ServiceOffer,
  TrustPoint,
} from './types';

export const siteConfig = {
  name: 'WebNexus',
  tagline: 'Custom web, mobile and AI-assisted software for ambitious teams',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://www.webnexus.dev',
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const seoMap: Record<string, SeoEntry> = {
  '/': {
    title: 'WebNexus | Software Development Company for Web, Mobile and AI Solutions',
    description:
      'WebNexus builds custom web applications, mobile apps, business dashboards and AI-assisted software for startups, service firms and growing businesses.',
    canonicalPath: '/',
  },
  '/services': {
    title: 'Software Development Services | Web Development, Mobile Apps, Dashboards and AI',
    description:
      'Explore WebNexus software development services, including custom web development, mobile app development, dashboard engineering, AI-assisted software and cloud deployment support.',
    canonicalPath: '/services',
  },
  '/portfolio': {
    title: 'WebNexus Portfolio | Business Systems, Mobile Apps and AI Project Work',
    description:
      'See selected WebNexus portfolio projects across healthcare apps, business systems, ecommerce platforms, predictive dashboards and digital product design.',
    canonicalPath: '/portfolio',
  },
  '/about': {
    title: 'About WebNexus | Small Studio for Web, Mobile and Custom Software Delivery',
    description:
      'Learn how WebNexus helps companies plan, design and deliver modern web platforms, mobile products, dashboards and AI-assisted systems with practical execution.',
    canonicalPath: '/about',
  },
  '/pricing': {
    title: 'WebNexus Pricing | Starting Packages for Web, Mobile and Software Projects',
    description:
      'Review WebNexus starting packages for websites, software systems, dashboards and mobile app development before booking a project consultation.',
    canonicalPath: '/pricing',
  },
  '/contact': {
    title: 'Contact WebNexus | Book a Software Project Consultation',
    description:
      'Contact WebNexus to discuss a web development, mobile app, dashboard or AI-assisted software project and receive a tailored scope recommendation.',
    canonicalPath: '/contact',
  },
  '/privacy': {
    title: 'Privacy Policy | WebNexus',
    description:
      'Review how WebNexus handles project enquiries, contact information and website communication details submitted through the corporate site.',
    canonicalPath: '/privacy',
  },
  '/terms': {
    title: 'Terms of Use | WebNexus',
    description:
      'Read the WebNexus website terms covering enquiries, content usage, project discussions and general use of the corporate site.',
    canonicalPath: '/terms',
  },
};

export const services: ServiceOffer[] = [
  {
    slug: 'web-development',
    title: 'Custom Web Development Services',
    shortTitle: 'Web Development',
    image: '/service-web-development-generated.png',
    seoTitle: 'Custom Web Development Services for Business Websites and Web Apps',
    seoDescription:
      'WebNexus designs and builds custom business websites, portals and web applications with modern frontend development, backend architecture and scalable database support.',
    summary:
      'We build custom websites and web applications that are fast, maintainable and designed to support real business workflows.',
    audience:
      'Best for startups, service companies, internal operations teams and founders who need a website or web application that can grow with the business.',
    problems: [
      'Outdated sites that no longer convert or reflect your brand',
      'Manual business processes that need secure online workflows',
      'Disconnected frontend, backend and database systems',
    ],
    deliverables: [
      'Responsive marketing sites and corporate websites',
      'Custom web applications and secure client portals',
      'Admin areas, APIs and database-backed features',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'ASP.NET Core', 'PostgreSQL', 'SQL Server'],
    process: [
      'Discovery and scope alignment',
      'Wireframe and UI direction',
      'Frontend and backend implementation',
      'QA, deployment and launch support',
    ],
    ctaLabel: 'Discuss Your Web Project',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development Services',
    shortTitle: 'Mobile App Development',
    image: '/service-mobile-app-development-generated.png',
    seoTitle: 'Mobile App Development Services for Customer and Internal Products',
    seoDescription:
      'WebNexus delivers mobile app development for product teams and growing businesses, covering app UX, API integration, data sync and scalable mobile architecture.',
    summary:
      'We create mobile apps with clean UX, reliable API integration and product-ready architecture for both customer-facing and internal teams.',
    audience:
      'Ideal for teams launching a new product, extending an existing platform to mobile or replacing spreadsheet-led field operations.',
    problems: [
      'No mobile experience for customers or staff',
      'Weak app usability and fragmented backend connections',
      'Need for secure, synchronized mobile workflows',
    ],
    deliverables: [
      'Cross-platform app interfaces and flows',
      'Authentication, API and data integration',
      'Release-ready builds with deployment guidance',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST APIs', 'SQLite'],
    process: [
      'Feature prioritization and app flow mapping',
      'Interface design and screen architecture',
      'API integration and QA testing',
      'Deployment preparation and handoff',
    ],
    ctaLabel: 'Plan a Mobile App Build',
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development for Business Systems',
    shortTitle: 'Custom Software',
    image: '/service-custom-software-generated.png',
    seoTitle: 'Custom Software Development for Operations, Portals and Management Systems',
    seoDescription:
      'WebNexus builds custom software systems for operations, records, reporting and internal process management with practical business-focused implementation.',
    summary:
      'We develop software tailored to the way a business actually operates, from management systems and workflow tools to internal portals and reporting modules.',
    audience:
      'Designed for companies that have outgrown spreadsheets, disconnected tools or generic templates and need software built around their process.',
    problems: [
      'Manual operational bottlenecks and duplicate data entry',
      'No central system for records, reporting or approvals',
      'Tools that do not match internal workflows',
    ],
    deliverables: [
      'Business management systems and internal workflow tools',
      'Role-based access, records modules and reporting views',
      'Custom forms, approval flows and structured data handling',
    ],
    technologies: ['ASP.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'React', 'REST APIs'],
    process: [
      'Business workflow discovery',
      'Module planning and data structure design',
      'Iterative implementation with review checkpoints',
      'UAT support and deployment readiness',
    ],
    ctaLabel: 'Scope a Custom System',
  },
  {
    slug: 'dashboard-development',
    title: 'Dashboard and Admin Panel Development',
    shortTitle: 'Dashboard Development',
    image: '/service-dashboard-development-generated.png',
    seoTitle: 'Dashboard Development and Admin Panel Design for Operational Visibility',
    seoDescription:
      'WebNexus creates dashboards and admin panels that help teams manage data, monitor activity, review reports and streamline internal decision-making.',
    summary:
      'We design and build dashboards that make data easier to act on, whether the goal is internal reporting, admin operations or decision support.',
    audience:
      'Best for businesses that need a central workspace for operations, analytics, permissions, reporting and day-to-day team management.',
    problems: [
      'No clear operational visibility across teams',
      'Slow reporting workflows and scattered admin tasks',
      'Admin interfaces that feel difficult or outdated',
    ],
    deliverables: [
      'Admin dashboards and reporting interfaces',
      'Role-based navigation and workflow controls',
      'Tables, filters, summaries and action views',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Chart-ready data models', 'SQL', 'REST APIs'],
    process: [
      'Data and action mapping',
      'Dashboard layout planning',
      'Build, QA and responsive review',
      'Rollout and feedback iteration',
    ],
    ctaLabel: 'Request a Dashboard Review',
  },
  {
    slug: 'ai-software-solutions',
    title: 'AI-Assisted Software Solutions',
    shortTitle: 'AI Software Solutions',
    image: '/service-ai-software-generated.png',
    seoTitle: 'AI Software Solutions for Automation, Assistants and Product Workflows',
    seoDescription:
      'WebNexus builds AI-assisted software features such as chat workflows, recommendation tools, OCR pipelines and automation experiences grounded in real product needs.',
    summary:
      'We integrate AI where it improves usability or efficiency, from assistants and OCR features to prediction flows and task automation.',
    audience:
      'A fit for teams that want AI to support a workflow, improve response speed or automate repetitive tasks without turning the product into hype.',
    problems: [
      'Repetitive manual tasks and slow response cycles',
      'Need for OCR, chatbot or prediction-supported workflows',
      'Unclear path for using AI in a practical product way',
    ],
    deliverables: [
      'AI-assisted workflows and chat experiences',
      'OCR, recommendation or automation integrations',
      'Practical UX around AI inputs and outputs',
    ],
    technologies: ['Python', 'OpenAI APIs', 'Gemini APIs', 'OCR pipelines', 'Flask', 'FastAPI'],
    process: [
      'Use-case validation and workflow definition',
      'Prototype logic and UX planning',
      'Integration into product flows',
      'Testing, tuning and delivery guidance',
    ],
    ctaLabel: 'Talk Through an AI Workflow',
  },
  {
    slug: 'cloud-deployment',
    title: 'Cloud Deployment and Launch Support',
    shortTitle: 'Cloud Deployment',
    image: '/service-cloud-deployment-generated.png',
    seoTitle: 'Cloud Deployment Support for Web Apps, APIs and Product Launches',
    seoDescription:
      'WebNexus supports cloud deployment, environment setup, hosting configuration and launch readiness for web applications, APIs and internal software tools.',
    summary:
      'We help teams move from completed code to a reliable live release with hosting setup, environment configuration and deployment support.',
    audience:
      'Useful for teams that need help preparing a product for launch, improving deployment reliability or configuring modern hosting workflows.',
    problems: [
      'Projects that work locally but are not launch-ready',
      'Confusing environment, hosting or release setup',
      'No clear path from development to live delivery',
    ],
    deliverables: [
      'Deployment setup and release support',
      'Environment variable and hosting configuration',
      'Launch checklists and post-deployment review',
    ],
    technologies: ['Vercel', 'Render', 'Railway', 'Supabase', 'Docker', 'GitHub'],
    process: [
      'Launch readiness review',
      'Hosting and environment setup',
      'Deployment validation and fixes',
      'Release support and post-launch checks',
    ],
    ctaLabel: 'Book Launch Support',
  },
];

export const serviceSeoPaths = services.reduce<Record<string, SeoEntry>>((acc, service) => {
  acc[`/services/${service.slug}`] = {
    title: `${service.seoTitle} | WebNexus`,
    description: service.seoDescription,
    canonicalPath: `/services/${service.slug}`,
  };
  return acc;
}, {});

export const trustPoints: TrustPoint[] = [
  {
    title: 'Clear project structure',
    description: 'We plan the scope, clarify delivery milestones and keep implementation focused on useful product outcomes.',
  },
  {
    title: 'Business-ready systems',
    description: 'Our strongest work centers on portals, dashboards, management systems and practical workflow software.',
  },
  {
    title: 'Design that stays usable',
    description: 'We pair clean interfaces with architecture choices that support long-term product updates.',
  },
  {
    title: 'Launch support included',
    description: 'Deployment, QA and go-live readiness are treated as part of the work, not an afterthought.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: 'Consultation',
    description: 'We define the business goal, users and success criteria before implementation starts.',
  },
  {
    title: 'Requirement Analysis',
    description: 'We map the workflow, decide the right technical approach and align the delivery scope.',
  },
  {
    title: 'UI and System Design',
    description: 'We shape the interface and the product structure so development moves with clarity.',
  },
  {
    title: 'Development',
    description: 'We build the product with attention to maintainability, responsiveness and production readiness.',
  },
  {
    title: 'Testing and Deployment',
    description: 'We verify flows, polish the release and support a stable handoff or launch.',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'visionmate',
    title: 'VisionMate',
    category: 'AI and Mobile',
    image: '/service-ai-software-generated.png',
    description:
      'An assistive mobile product concept combining object detection, OCR and voice guidance for real-time accessibility support.',
    businessGoal:
      'Create a more independent mobile experience for visually impaired users who need fast environmental awareness and readable text support on the move.',
    engagementSummary:
      'The concept focused on blending accessibility-first UX with practical AI capabilities that could be delivered through a mobile-first product surface.',
    stack: ['Flutter', 'YOLOv8', 'Python'],
    features: ['Object detection pipeline', 'Voice-guided assistance'],
    deliverables: [
      'Mobile accessibility flow mapping',
      'OCR and detection workflow concept',
      'Voice response and feedback model',
    ],
    outcomes: [
      'Showed how AI could support a real accessibility use case without overloading the interface',
      'Framed a product direction that could move from prototype to pilot with a clear feature roadmap',
    ],
  },
  {
    slug: 'smart-healthcare',
    title: 'Smart Healthcare App',
    category: 'Mobile Product',
    image: '/service-mobile-app-development-generated.png',
    description:
      'A connected healthcare experience focused on patient-provider workflows, secure records and smoother telehealth support.',
    businessGoal:
      'Improve how patients and providers coordinate appointments, medical records and ongoing communication through one connected product experience.',
    engagementSummary:
      'This direction emphasized trusted healthcare UX, protected data handling and cross-role workflow clarity for both patient and staff users.',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    features: ['Secure telehealth flows', 'Data-driven patient experience'],
    deliverables: [
      'Patient and provider journey mapping',
      'Mobile scheduling and telehealth flow concepts',
      'Backend-ready records and communication model',
    ],
    outcomes: [
      'Clarified how a mobile product could reduce handoff friction between healthcare teams and patients',
      'Established a scalable architecture direction for future records, alerts and support modules',
    ],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Commerce',
    image: '/service-web-development-generated.png',
    description:
      'A conversion-focused storefront concept with product discovery, transaction flows and admin visibility.',
    businessGoal:
      'Give the business a storefront that strengthens conversion, simplifies catalog operations and creates better reporting visibility after launch.',
    engagementSummary:
      'The work centered on balancing a polished public shopping experience with the back-office controls needed for order, catalog and campaign management.',
    stack: ['Next.js', 'Stripe', 'PostgreSQL'],
    features: ['Checkout flow design', 'Catalog and operations view'],
    deliverables: [
      'Commerce UX and conversion flow planning',
      'Checkout and payment integration direction',
      'Operations dashboard and reporting structure',
    ],
    outcomes: [
      'Mapped a clearer separation between customer-facing discovery and admin-side operations',
      'Created a product direction ready for phased release planning across catalog, checkout and reporting',
    ],
  },
  {
    slug: 'student-management',
    title: 'Student Management',
    category: 'Operations System',
    image: '/service-custom-software-generated.png',
    description:
      'A records and workflow system concept for education teams managing administrative tasks, grading and communication.',
    businessGoal:
      'Replace fragmented administrative work with one structured platform for records, grading, communication and daily coordination.',
    engagementSummary:
      'This concept leaned into practical internal software design with role-aware modules, better record visibility and routine workflow coverage.',
    stack: ['Vue.js', 'Express', 'PostgreSQL'],
    features: ['Structured record modules', 'Institution-ready admin flows'],
    deliverables: [
      'Administrative workflow mapping',
      'Role-based records module planning',
      'Communication and grading interface concepts',
    ],
    outcomes: [
      'Showed a clearer system-of-record direction for education operations',
      'Reduced the risk of duplicated work by grouping records, grading and communication in one toolset',
    ],
  },
  {
    slug: 'ml-dashboard',
    title: 'ML Prediction Dashboard',
    category: 'Analytics Platform',
    image: '/service-dashboard-development-generated.png',
    description:
      'A predictive analytics interface focused on data visibility, anomaly review and model-supported operational decisions.',
    businessGoal:
      'Help operational teams review predictive signals, investigate anomalies and act on model-supported insights with more confidence.',
    engagementSummary:
      'The dashboard direction prioritized readable summaries, exception handling and trust-building around model outputs rather than opaque chart overload.',
    stack: ['Python', 'FastAPI', 'D3.js'],
    features: ['Predictive reporting views', 'Decision-support visualization'],
    deliverables: [
      'Analytics dashboard information architecture',
      'Prediction and anomaly review flow design',
      'API-backed reporting surface direction',
    ],
    outcomes: [
      'Made model outputs easier to interpret for operational users',
      'Defined a cleaner path for turning raw predictions into reviewable business actions',
    ],
  },
  {
    slug: 'business-portfolio',
    title: 'Business Portfolio Website',
    category: 'Brand Experience',
    image: '/service-cloud-deployment-generated.png',
    description:
      'A premium corporate site concept built to improve online presence, lead flow and service presentation for a growing brand.',
    businessGoal:
      'Present the company with more authority online, improve lead quality and make service conversations easier to start.',
    engagementSummary:
      'The focus here was a stronger narrative, clearer navigation and more polished page structure for a service-led digital brand.',
    stack: ['React', 'CSS', 'CMS-ready architecture'],
    features: ['Corporate content structure', 'Conversion-focused layout'],
    deliverables: [
      'Corporate information architecture',
      'Service-led landing page direction',
      'Lead generation and contact flow planning',
    ],
    outcomes: [
      'Improved how the brand could present expertise without relying on dense technical copy',
      'Created a cleaner structure for future portfolio, service and lead-generation updates',
    ],
  },
];

export const portfolioSeoPaths = portfolioItems.reduce<Record<string, SeoEntry>>((acc, item) => {
  acc[`/portfolio/${item.slug}`] = {
    title: `${item.title} Case Study | WebNexus`,
    description: item.description,
    canonicalPath: `/portfolio/${item.slug}`,
  };
  return acc;
}, {});

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    startingAt: '$900',
    description: 'A focused starting package for smaller websites, landing pages or early-stage product needs.',
    includes: ['Up to 5 key sections or screens', 'Responsive UI', 'Basic contact flow', 'Launch guidance'],
  },
  {
    name: 'Professional',
    startingAt: '$2,500',
    description: 'A stronger fit for business websites, admin panels, dashboards or database-backed applications.',
    includes: ['Custom UI system', 'Authentication and data modules', 'Admin or dashboard views', 'Deployment support'],
  },
  {
    name: 'Premium',
    startingAt: '$5,000',
    description: 'For more advanced software products that combine multiple surfaces, integrations or AI-supported features.',
    includes: ['End-to-end product scope', 'Web and mobile coordination', 'Advanced integrations or AI workflows', 'Structured handoff support'],
  },
];

export const projectTypes = [
  'Website Development',
  'Mobile App Development',
  'Custom Software Development',
  'Dashboard Development',
  'AI-Assisted Solution',
  'Cloud Deployment',
];

export const budgetRanges = [
  'Custom - $80+',
  '$1,000 - $3,000',
  '$3,000 - $7,000',
  '$7,000 - $15,000',
  '$15,000+',
];
