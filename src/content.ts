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
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://application-tawny-two.vercel.app',
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
    title: 'WebNexus | Software Development Company in Karachi for Web, Mobile and AI Solutions',
    description:
      'WebNexus is a Karachi-based software development company building custom websites, mobile apps, dashboards, business systems and AI-assisted software for startups, service businesses and growing teams in Pakistan and worldwide.',
    canonicalPath: '/',
  },
  '/services': {
    title: 'Software Development Services in Karachi | Web, Mobile Apps, Dashboards and AI',
    description:
      'Explore WebNexus software development services in Karachi, including custom web development, mobile app development, dashboard engineering, AI-assisted software and cloud deployment support for businesses in Pakistan and worldwide.',
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
    seoTitle: 'Custom Web Development Services in Karachi for Business Websites and Web Apps',
    seoDescription:
      'WebNexus is a Karachi-based web development company that designs and builds custom business websites, portals and web applications with modern frontend development, backend architecture and scalable database support.',
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
    seoTitle: 'Mobile App Development Services in Karachi for Customer and Internal Products',
    seoDescription:
      'WebNexus delivers mobile app development in Karachi for product teams and growing businesses, covering app UX, API integration, data sync and scalable mobile architecture.',
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
    seoTitle: 'Custom Software Development in Karachi for Operations, Portals and Management Systems',
    seoDescription:
      'WebNexus builds custom software systems in Karachi for operations, records, reporting and internal process management with practical business-focused implementation.',
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
      'An assistive mobile app built with Flutter, Python, YOLOv8 and OCR to help visually impaired users detect objects, read text and receive voice-guided feedback in real time.',
    businessGoal:
      'Built a mobile accessibility tool that gives visually impaired users fast environmental awareness and readable text support through AI-powered detection and voice guidance.',
    engagementSummary:
      'We developed the full detection pipeline, integrated OCR for text recognition and implemented voice feedback to create a working accessibility product on mobile.',
    stack: ['Flutter', 'YOLOv8', 'Python'],
    features: ['Object detection pipeline', 'Voice-guided assistance'],
    deliverables: [
      'Working mobile app with accessibility-first UX',
      'Integrated OCR and object detection workflow',
      'Voice response and real-time feedback system',
    ],
    outcomes: [
      'Delivered a functional accessibility app that processes camera input and returns voice guidance in under 2 seconds',
      'Validated the AI pipeline for real-world use and established a roadmap for pilot deployment',
    ],
  },
  {
    slug: 'smart-healthcare',
    title: 'Smart Healthcare App',
    category: 'Mobile Product',
    image: '/service-mobile-app-development-generated.png',
    description:
      'A healthcare mobile app developed with React Native and Node.js featuring secure telehealth flows, appointment scheduling, medical records and patient-provider communication.',
    businessGoal:
      'Developed a connected healthcare platform that streamlines how patients and providers coordinate appointments, access medical records and communicate through one secure mobile experience.',
    engagementSummary:
      'We built the full patient and provider workflows with secure data handling, role-based access and telehealth integration from scheduling through to follow-up communication.',
    stack: ['React Native', 'Node.js', 'MongoDB'],
    features: ['Secure telehealth flows', 'Data-driven patient experience'],
    deliverables: [
      'Working mobile app with patient and provider portals',
      'Telehealth scheduling and video call integration',
      'Secure records system with role-based access',
    ],
    outcomes: [
      'Reduced appointment coordination friction between healthcare teams and patients by centralizing workflows in one app',
      'Delivered a scalable architecture supporting records, alerts and future module expansion',
    ],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Web Commerce',
    image: '/service-web-development-generated.png',
    description:
      'A full-stack e-commerce platform built with Next.js, Stripe and PostgreSQL featuring product discovery, checkout flows, order management and admin reporting.',
    businessGoal:
      'Built a storefront that improved conversion rates, simplified catalog operations and gave the business real-time reporting visibility from day one.',
    engagementSummary:
      'We implemented the complete shopping experience with Stripe payment integration, product catalog management and an admin dashboard for order tracking and campaign oversight.',
    stack: ['Next.js', 'Stripe', 'PostgreSQL'],
    features: ['Checkout flow design', 'Catalog and operations view'],
    deliverables: [
      'Responsive storefront with search and product discovery',
      'Stripe checkout and payment processing integration',
      'Admin dashboard with order tracking and reporting',
    ],
    outcomes: [
      'Delivered a production-ready storefront with clear separation between customer-facing discovery and admin operations',
      'Enabled phased feature expansion across catalog, promotions and analytics reporting',
    ],
  },
  {
    slug: 'student-management',
    title: 'Student Management System',
    category: 'Operations System',
    image: '/service-custom-software-generated.png',
    description:
      'A student management system built with Vue.js, Express and PostgreSQL for education teams to handle records, grading, attendance and internal communication.',
    businessGoal:
      'Replaced fragmented spreadsheet-based administrative work with one structured platform for student records, grading, communication and daily coordination.',
    engagementSummary:
      'We built role-aware modules for teachers, administrators and staff with structured record management, grading workflows and integrated communication tools.',
    stack: ['Vue.js', 'Express', 'PostgreSQL'],
    features: ['Structured record modules', 'Institution-ready admin flows'],
    deliverables: [
      'Role-based admin dashboard with student records',
      'Grading and attendance tracking modules',
      'Internal communication and notification system',
    ],
    outcomes: [
      'Eliminated duplicated data entry by centralizing records, grading and communication in one system',
      'Reduced administrative overhead for education staff with structured workflow automation',
    ],
  },
  {
    slug: 'ml-dashboard',
    title: 'ML Prediction Dashboard',
    category: 'Analytics Platform',
    image: '/service-dashboard-development-generated.png',
    description:
      'A predictive analytics dashboard built with Python, FastAPI and D3.js for real-time data visibility, anomaly detection and model-supported operational decisions.',
    businessGoal:
      'Built a dashboard that helps operational teams review predictive signals, investigate anomalies and act on model-supported insights with clear visual summaries.',
    engagementSummary:
      'We developed the full analytics pipeline from FastAPI backend to D3.js visualizations, with readable summaries, exception handling and trust-building around model outputs.',
    stack: ['Python', 'FastAPI', 'D3.js'],
    features: ['Predictive reporting views', 'Decision-support visualization'],
    deliverables: [
      'Interactive analytics dashboard with real-time data feeds',
      'Anomaly detection and prediction review interface',
      'API-backed reporting with filterable views and exports',
    ],
    outcomes: [
      'Made model outputs actionable for non-technical operational users through clear visual summaries',
      'Enabled faster decision-making by turning raw predictions into structured, reviewable business actions',
    ],
  },
  {
    slug: 'business-portfolio',
    title: 'Business Portfolio Website',
    category: 'Brand Experience',
    image: '/service-cloud-deployment-generated.png',
    description:
      'A premium corporate website built with React to improve online presence, generate qualified leads and present services with authority for a growing brand.',
    businessGoal:
      'Built a corporate website that presents the company with authority online, improves lead quality and makes service conversations easier to start.',
    engagementSummary:
      'We designed and developed the full site with service-led page structure, compelling narrative, clear navigation and integrated lead generation forms.',
    stack: ['React', 'CSS', 'CMS-ready architecture'],
    features: ['Corporate content structure', 'Conversion-focused layout'],
    deliverables: [
      'Multi-page corporate website with responsive design',
      'Service-led landing pages with clear CTAs',
      'Lead generation forms and contact flow integration',
    ],
    outcomes: [
      'Improved lead quality by presenting expertise through structured service pages instead of dense technical copy',
      'Delivered a maintainable site structure ready for ongoing portfolio, service and content updates',
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

export const homeFaqItems = [
  {
    question: 'Is WebNexus a software development company in Karachi?',
    answer:
      'Yes. WebNexus is a software development company based in Karachi, Pakistan. We build custom websites, mobile apps, dashboards, business systems and AI-assisted software for clients in Karachi, across Pakistan and worldwide.',
  },
  {
    question: 'What services does WebNexus provide?',
    answer:
      'WebNexus provides custom web development, mobile app development, business software systems, dashboard and admin panel development, AI-assisted software solutions and cloud deployment support.',
  },
  {
    question: 'Does WebNexus build MERN stack applications?',
    answer:
      'Yes. WebNexus builds full-stack applications using the MERN stack (MongoDB, Express, React, Node.js) as well as other modern stacks including Next.js, TypeScript, ASP.NET Core, PostgreSQL, Flutter and Python.',
  },
  {
    question: 'Can WebNexus build mobile apps?',
    answer:
      'Yes. WebNexus develops cross-platform mobile apps using Flutter, React Native and related technologies. We handle UX design, API integration, authentication, data sync and app store deployment preparation.',
  },
  {
    question: 'Can WebNexus build AI-assisted software?',
    answer:
      'Yes. WebNexus integrates AI capabilities such as chatbots, OCR pipelines, recommendation engines and automation workflows into production software using OpenAI APIs, Gemini APIs, Python and FastAPI.',
  },
  {
    question: 'How much does a WebNexus project cost?',
    answer:
      'WebNexus projects start from $900 for focused websites and landing pages, $2,500 for business applications with dashboards and authentication, and $5,000 for advanced multi-surface products with AI features. Final pricing depends on scope, integrations and delivery timeline.',
  },
];

