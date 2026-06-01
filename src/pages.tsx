import Link from 'next/link';
import Image from 'next/image';
import {
  CtaBand,
  HomeHero,
  ContactPanel,
  PortfolioGrid,
  PricingGrid,
  SectionHeader,
  ServicePreview,
  ServicesGrid,
  TrustAndProcess,
} from './components';
import {
  portfolioItems,
  pricingTiers,
  services,
  trustPoints,
} from './content';
import { OrganizationSchema, ServiceSchema } from './seo';
import { PortfolioItem, ServiceOffer } from './types';

export function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <HomeHero />
      <ServicePreview services={services} />
      <TrustAndProcess trustPoints={trustPoints} />
      <section className="section services-showcase-section">
        <div className="container services-showcase-container">
          <SectionHeader
            title="Featured Work"
            description="A selection of product concepts and delivery directions across healthcare, ecommerce, analytics and business systems."
          />
          <PortfolioGrid items={portfolioItems.slice(0, 3)} />
        </div>
      </section>
      <section className="section muted-section">
        <div className="container">
          <SectionHeader
            title="Project Packages"
            description="Starting points to help you compare engagement size before moving into a tailored scope discussion."
          />
          <PricingGrid tiers={pricingTiers} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function ServicesPage() {
  return (
    <>
      <section className="section services-page-hero">
        <div className="container services-hero-layout">
          <div className="services-hero-copy">
            <span className="services-kicker">Software delivery services</span>
            <h1>Modern software services with a cleaner path from scope to launch.</h1>
            <p>
              We design and deliver business websites, internal systems, dashboards, mobile apps and AI-assisted workflows with practical structure and polished execution.
            </p>
            <div className="services-hero-actions">
              <Link href="/contact" className="button primary">
                Start Your Project
              </Link>
              <Link href="/portfolio" className="button secondary">
                View Portfolio
              </Link>
            </div>
            <div className="services-hero-trust">
              <article className="services-hero-trust-card">
                <strong>6 focused tracks</strong>
                <span>Web, mobile, systems, dashboards, AI and launch support.</span>
              </article>
              <article className="services-hero-trust-card">
                <strong>Business-first delivery</strong>
                <span>Clear scope, clean interfaces and reliable technical structure.</span>
              </article>
              <article className="services-hero-trust-card">
                <strong>Built to ship</strong>
                <span>Every service is shaped around a practical outcome, not filler.</span>
              </article>
            </div>
          </div>
          <div className="services-hero-visual">
            <article className="services-hero-panel">
              <span className="services-hero-panel-label">Featured capabilities</span>
              <div className="services-hero-panel-grid">
                {services.slice(0, 3).map((service) => (
                  <article key={service.slug} className="services-hero-mini-card">
                    <div className="services-hero-mini-media">
                      <Image src={service.image} alt={service.title} width={420} height={320} />
                    </div>
                    <div className="services-hero-mini-copy">
                      <span>{service.shortTitle}</span>
                      <strong>{service.technologies[0]}</strong>
                    </div>
                  </article>
                ))}
              </div>
              <div className="services-hero-summary">
                <strong>Designed for business systems, customer products and launch-ready platforms.</strong>
                <p>Choose the delivery path that fits your product stage, workflow complexity and growth goals.</p>
              </div>
              <div className="services-hero-support">
                <article>
                  <strong>Scope</strong>
                  <span>Clear feature plan before development starts.</span>
                </article>
                <article>
                  <strong>Build</strong>
                  <span>Frontend, backend and data structure shaped together.</span>
                </article>
                <article>
                  <strong>Launch</strong>
                  <span>QA, deployment support and practical handoff.</span>
                </article>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section services-summary-band">
        <div className="container services-summary-grid">
          <article className="services-summary-card">
            <strong>Sharper scoping</strong>
            <p>We define the right product surface early so the build stays lean and useful.</p>
          </article>
          <article className="services-summary-card">
            <strong>Professional execution</strong>
            <p>Interfaces, workflows and backend structure are shaped together instead of in isolation.</p>
          </article>
          <article className="services-summary-card">
            <strong>Launch-minded delivery</strong>
            <p>Every service includes practical thinking around QA, deployment and handoff readiness.</p>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeader
            title="Service paths built around real product needs"
            description="A more focused way to choose the right delivery lane, whether you need a public-facing product, an internal system or support getting software live."
          />
          <ServicesGrid services={services} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function ServiceDetailPage({ service }: { service: ServiceOffer }) {
  return (
    <>
      <ServiceSchema service={service} />
      <section className="section page-hero">
        <div className="container page-hero-inner">
          <h1>{service.title}</h1>
          <p>{service.seoDescription}</p>
        </div>
      </section>
      <section className="section">
        <div className="container service-detail-page">
          <div className="soft-card service-focus-card">
            <h2>What this service covers</h2>
            <p>{service.summary}</p>
            <h3>Who it is for</h3>
            <p>{service.audience}</p>
          </div>
          <div className="service-detail-columns">
            <article className="soft-card">
              <h3>Problems we solve</h3>
              <ul className="plain-list">
                {service.problems.map((problem) => (
                  <li key={problem}>{problem}</li>
                ))}
              </ul>
            </article>
            <article className="soft-card">
              <h3>Typical deliverables</h3>
              <ul className="plain-list">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="service-detail-columns">
            <article className="soft-card">
              <h3>Technology range</h3>
              <div className="chip-row">
                {service.technologies.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
            <article className="soft-card">
              <h3>Engagement process</h3>
              <ul className="plain-list">
                {service.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </article>
          </div>
          <div className="inline-cta-row">
            <Link href="/contact" className="button primary">
              {service.ctaLabel}
            </Link>
            <Link href="/pricing" className="button secondary">
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function PortfolioPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-hero-inner">
          <h1>Our Portfolio</h1>
          <p>Examples of product direction, business system design and digital execution across multiple software categories.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>
    </>
  );
}

export function PortfolioDetailPage({ item }: { item: PortfolioItem }) {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-hero-inner is-left">
          <span className="eyebrow">{item.category}</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      </section>
      <section className="section">
        <div className="container portfolio-detail-page">
          <div className="portfolio-detail-grid">
            <div className="portfolio-detail-media">
              {item.image ? (
                <Image src={item.image} alt={item.title} width={900} height={600} />
              ) : (
                <div className="portfolio-placeholder">
                  <span>{item.category}</span>
                </div>
              )}
            </div>
            <article className="soft-card portfolio-brief-card">
              <h2>Project Brief</h2>
              <p>{item.businessGoal}</p>
              <h3>Engagement focus</h3>
              <p>{item.engagementSummary}</p>
              <div className="chip-row">
                {item.stack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
          <div className="portfolio-detail-columns">
            <article className="soft-card">
              <h3>Key capabilities</h3>
              <ul className="plain-list">
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
            <article className="soft-card">
              <h3>Typical deliverables</h3>
              <ul className="plain-list">
                {item.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          </div>
          <article className="soft-card portfolio-outcomes-card">
            <h3>Expected outcomes</h3>
            <ul className="plain-list">
              {item.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </article>
          <div className="inline-cta-row">
            <Link href="/contact" className="button primary">
              Discuss a Similar Project
            </Link>
            <Link href="/portfolio" className="button secondary">
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-hero-inner">
          <h1>About WebNexus</h1>
          <p>
            WebNexus helps businesses shape, build and launch modern software products with a practical delivery mindset.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container about-layout">
          <article className="soft-card about-story">
            <h2>Built for practical delivery</h2>
            <p>
              We combine product design, technical planning and business clarity to create software that is useful, scalable and ready for real teams to use.
            </p>
            <p>
              Our strongest work includes business systems, dashboards, web platforms, mobile products and carefully scoped AI-assisted features that improve a workflow instead of complicating it.
            </p>
            <div className="about-focus-grid">
              <article>
                <span>01</span>
                <strong>Scope before speed</strong>
                <p>We clarify the real workflow first so the build solves the right problem.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Interfaces with structure</strong>
                <p>Design, data and technical decisions are shaped together from the start.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Delivery that holds up</strong>
                <p>Each project is built with handoff, maintainability and launch readiness in mind.</p>
              </article>
            </div>
            <div className="about-delivery-note">
              <strong>Built around real use.</strong>
              <span>We prefer focused releases, clear ownership and software that teams can keep improving after launch.</span>
            </div>
          </article>
          <div className="about-side-grid">
            <article className="soft-card about-value-card">
              <h3>Mission</h3>
              <p>Deliver reliable modern software that helps teams work better, move faster and launch with confidence.</p>
            </article>
            <article className="soft-card about-value-card">
              <h3>Vision</h3>
              <p>Be a trusted software partner for businesses that value clarity, quality and thoughtful long-term delivery.</p>
            </article>
            <article className="soft-card about-value-card">
              <h3>Approach</h3>
              <p>Start with the workflow, define the right scope, then build a clean system that can evolve over time.</p>
            </article>
          </div>
        </div>
      </section>
      <TrustAndProcess trustPoints={trustPoints} />
    </>
  );
}

export function PricingPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-hero-inner">
          <h1>Pricing That Starts with Clarity</h1>
          <p>
            Use these starting packages to compare project size, then we refine the actual scope based on features, integrations and delivery goals.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PricingGrid tiers={pricingTiers} />
        </div>
      </section>
      <section className="section muted-section">
        <div className="container mini-card-grid">
          <article className="soft-card mini-card">
            <h3>Starting-at pricing</h3>
            <p>Final scope depends on product depth, integrations, delivery pace and the number of user-facing surfaces involved.</p>
          </article>
          <article className="soft-card mini-card">
            <h3>What is always included</h3>
            <p>Discovery alignment, polished interface work, production-minded implementation and guidance for the next release step.</p>
          </article>
          <article className="soft-card mini-card">
            <h3>Need a tailored quote?</h3>
            <p>Use the project form to explain your goals and we will recommend the right package direction.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export function PrivacyPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-hero-inner is-left">
          <span className="eyebrow">Policy</span>
          <h1>Privacy Policy</h1>
          <p>
            This site is designed to help prospective clients contact WebNexus. We only request the details needed to review project enquiries and respond appropriately.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-page">
          <article className="soft-card legal-card">
            <h2>What we collect</h2>
            <p>
              When you submit the project form, we may collect your name, email address, phone or WhatsApp number, budget range, project type and any details you choose to share about your requirements.
            </p>
          </article>
          <article className="soft-card legal-card">
            <h2>How we use it</h2>
            <p>
              We use submitted information to review project fit, respond to enquiries, prepare follow-up communication and improve how we handle inbound requests.
            </p>
          </article>
          <article className="soft-card legal-card">
            <h2>How long it is kept</h2>
            <p>
              Enquiry details are kept only as long as needed for project discussion, follow-up or reasonable business recordkeeping. If you want your enquiry removed, contact us through the website and we can review that request.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export function TermsPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container page-hero-inner is-left">
          <span className="eyebrow">Terms</span>
          <h1>Terms of Use</h1>
          <p>
            The WebNexus corporate site is provided for general information, service discovery and project enquiries. Use of the site does not create a client relationship by itself.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-page">
          <article className="soft-card legal-card">
            <h2>Informational use</h2>
            <p>
              Portfolio examples, service descriptions and pricing references are indicative and may change as our work evolves. Final proposals, scopes and delivery terms are agreed separately during project discussions.
            </p>
          </article>
          <article className="soft-card legal-card">
            <h2>Project discussions</h2>
            <p>
              Contact form submissions are treated as initial enquiries. Any delivery commitments, timelines, pricing or support expectations are only confirmed through direct agreement after discovery and scope review.
            </p>
          </article>
          <article className="soft-card legal-card">
            <h2>Content and access</h2>
            <p>
              You may browse and reference this site for normal business evaluation. Do not misuse the site, interfere with access or represent WebNexus content as your own without permission.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="section page-hero is-contact">
        <div className="container page-hero-inner">
          <h1>Let&apos;s discuss your next move.</h1>
          <p>
            Share your product direction, software requirements or launch goals and we will help you decide the right technical path.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ContactPanel />
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="section">
      <div className="container not-found">
        <h1>Page not found</h1>
        <p>The page you requested is not available.</p>
        <Link href="/" className="button primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
