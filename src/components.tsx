import { ArrowRight, Check, ChevronRight, Cpu, Globe, Layers3, Menu, Smartphone, X } from 'lucide-react';
import { FormEvent, ReactNode, useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  budgetRanges,
  navItems,
  processSteps,
  projectTypes,
  siteConfig,
} from './content';
import { submitLead } from './leadService';
import { LeadFormInput, PortfolioItem, PricingTier, ServiceOffer, TrustPoint } from './types';

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="page-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand-mark" onClick={closeMenu}>
          <span className="brand-logo">W</span>
          <span>WebNexus</span>
        </Link>
        <nav className="nav-desktop" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <Link to="/contact#project-form" className="button primary small">
            Get Quote
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          <div className="container mobile-nav-panel">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMenu}
                className={`mobile-nav-link ${location.pathname === item.href ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact#project-form" className="button primary block" onClick={closeMenu}>
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-mark footer-brand">
            <span className="brand-logo">W</span>
            <span>WebNexus</span>
          </div>
          <p className="footer-copy">
            The studio building custom software, mobile products, dashboards and AI-assisted experiences for growing teams.
          </p>
        </div>
        <div>
          <h3 className="footer-title">Navigation</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="footer-title">Core Services</h3>
          <div className="footer-links">
            <Link to="/services/web-development">Web Development</Link>
            <Link to="/services/mobile-app-development">Mobile Apps</Link>
            <Link to="/services/custom-software-development">Custom Software</Link>
            <Link to="/services/dashboard-development">Dashboards</Link>
          </div>
        </div>
        <div>
          <h3 className="footer-title">Legal</h3>
          <div className="footer-links">
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}

export function SectionHeader({
  title,
  description,
  align = 'center',
}: {
  title: string;
  description: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`section-heading ${align === 'left' ? 'is-left' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Custom software studio for modern product teams</span>
          <h1>Build Powerful Web, Mobile &amp; AI Solutions with WebNexus</h1>
          <p>
            We design and develop custom websites, mobile apps, business systems, dashboards and AI-assisted software that help teams launch, operate and scale with more confidence.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="button primary">
              Get Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="button secondary">
              View Our Services
            </Link>
          </div>
        </div>
        <div className="hero-media-card">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqK0jSSIo4KmFWTxfiklAQHzXKqTWx9SataCW7L6o6v3ibO1wL_NV2cHGzkFggUHdPtEq5RdD0OWWM7dE3az18wYObDxeqnSSH5T_jKG_5VUFGzzCwUDTo2IrldRxKd8saQccgpNM3NSbR01bzTkE3J69e-mEXs8gnjrqmPGJauk_0m2xo6zM9BpLBk5ppuK4bgli7904idwiGqe5rsYJNkY3TsYRJCO5lmoUJvwkq2hhSeWfZIT399wh4VnojkoWl_VIAdWJUcKQ"
            alt="WebNexus software development workspace"
          />
        </div>
      </div>
    </section>
  );
}

export function ServicePreview({ services }: { services: ServiceOffer[] }) {
  const icons = [Layers3, Smartphone, Cpu, Globe];
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          title="Engineering Excellence"
          description="Commercially focused software services designed for scale, performance and modern product delivery."
        />
        <div className="service-preview-grid">
          {services.slice(0, 4).map((service, index) => {
            const Icon = icons[index] || Layers3;
            return (
              <article key={service.slug} className="soft-card service-preview-card">
                <span className="icon-badge">
                  <Icon size={16} />
                </span>
                <h3>{service.shortTitle}</h3>
                <p>{service.summary}</p>
                <Link to={`/services/${service.slug}`} className="inline-link">
                  Explore <ChevronRight size={14} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TrustAndProcess({ trustPoints }: { trustPoints: TrustPoint[] }) {
  return (
    <section className="section muted-section">
      <div className="container">
        <SectionHeader
          align="left"
          title="Why teams choose WebNexus"
          description="We combine practical product thinking, clear delivery structure and polished execution to help digital projects move with less friction."
        />
      </div>
      <div className="container split-layout trust-process-layout">
        <div className="trust-column">
          <div className="mini-card-grid">
            {trustPoints.map((point, index) => (
              <article key={point.title} className={`soft-card mini-card trust-mini-card variant-${index + 1}`}>
                <span className="trust-mini-index">{String(index + 1).padStart(2, '0')}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
          <div className="soft-card trust-visual-card" aria-hidden="true">
            <div className="trust-visual-copy">
              <span className="trust-visual-label">Delivery rhythm</span>
              <strong>Structured delivery without the usual project noise.</strong>
              <p>Clear milestones, review checkpoints and launch support keep momentum visible from start to finish.</p>
            </div>
            <div className="trust-visual-stage compact-stage">
              <div className="trust-metric-card">
                <span>Scope alignment</span>
                <strong>01</strong>
              </div>
              <div className="trust-metric-card">
                <span>Working reviews</span>
                <strong>02</strong>
              </div>
              <div className="trust-metric-card">
                <span>Launch support</span>
                <strong>03</strong>
              </div>
              <div className="trust-progress-rail">
                <span className="trust-progress-fill" />
              </div>
              <div className="trust-pill-row">
                <span className="trust-stage-pill">Scope</span>
                <span className="trust-stage-pill">Build</span>
                <span className="trust-stage-pill">Launch</span>
              </div>
            </div>
          </div>
        </div>
        <div className="process-panel soft-card">
          <h3>How we deliver</h3>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <div key={step.title} className="process-row">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="process-followup">
            <span className="process-followup-label">What you get</span>
            <div className="process-followup-grid">
              <article>
                <strong>Clear handoff notes</strong>
                <p>Documented scope, release decisions and next-step guidance.</p>
              </article>
              <article>
                <strong>Launch-ready review</strong>
                <p>Final checks for usability, responsiveness and deployment basics.</p>
              </article>
              <article>
                <strong>Practical support window</strong>
                <p>Post-launch adjustments for small fixes, polish and confidence.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <span className="cta-mark">&loz;</span>
          <h2>Have an idea? Let&apos;s build it together.</h2>
          <p>Share your goals and we will map the right next step for your product, platform or internal system.</p>
          <Link to="/contact" className="button text-link">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesGrid({ services }: { services: ServiceOffer[] }) {
  return (
    <div className="services-layout">
      {services.map((service, index) => (
        <article
          key={service.slug}
          className={`soft-card service-feature-card tone-${(index % 4) + 1}`}
        >
          <div className="service-feature-media-wrap">
            <div className="service-feature-media">
              <img src={service.image} alt={service.title} />
            </div>
            <span className="service-feature-media-badge">{service.shortTitle}</span>
            </div>
            <div className="service-feature-body">
              <div className="service-feature-intro">
                <span className="service-feature-index">{String(index + 1).padStart(2, '0')}</span>
              </div>
            <div className="service-detail-head">
              <h3>{service.title}</h3>
              <p className="service-lead">{service.summary}</p>
            </div>
            <div className="service-feature-footer">
              <div className="chip-row">
                {service.technologies.slice(0, 2).map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              <Link to={`/services/${service.slug}`} className="inline-link service-feature-link">
                View details
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="portfolio-grid">
      {items.map((item) => (
        <article key={item.slug} className="portfolio-card">
          <div className="portfolio-media">
            {item.image ? (
              <img src={item.image} alt={item.title} />
            ) : (
              <div className="portfolio-placeholder">
                <span>{item.category}</span>
              </div>
            )}
          </div>
          <div className="portfolio-body">
            <span className="category-tag">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="chip-row">
              {item.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="feature-list">
              {item.features.map((feature) => (
                <li key={feature}>
                  <Check size={14} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={`/portfolio/${item.slug}`} className="button tertiary block">
              View Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PricingGrid({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="pricing-grid">
      {tiers.map((tier, index) => (
        <article key={tier.name} className={`pricing-card ${index === 1 ? 'is-featured' : ''}`}>
          <div className="pricing-head">
            <span>{tier.name}</span>
            <strong>{tier.startingAt}</strong>
          </div>
          <p>{tier.description}</p>
          <ul className="feature-list">
            {tier.includes.map((item) => (
              <li key={item}>
                <Check size={14} />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contact" className={`button ${index === 1 ? 'primary' : 'secondary'} block`}>
            Choose {tier.name}
          </Link>
        </article>
      ))}
    </div>
  );
}

export function ContactPanel() {
  return (
    <div className="contact-layout">
      <ContactForm />
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState<LeadFormInput>({
    fullName: '',
    email: '',
    phoneOrWhatsApp: '',
    projectType: projectTypes[0],
    budgetRange: budgetRanges[0],
    projectDescription: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const canSubmit = useMemo(() => {
    return (
      formData.fullName.trim() &&
      formData.email.trim() &&
      formData.projectDescription.trim()
    );
  }, [formData]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!canSubmit) {
      setStatus('error');
      setMessage('Please complete your name, email and project description before sending.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const result = await submitLead(formData);
      setStatus('success');
      setMessage(
        result === 'email-client'
          ? 'Your email app is opening with the project details prepared. Send the email there to complete your request.'
          : 'Your request has been sent. We will review it and follow up with the right next step.'
      );
      setFormData({
        fullName: '',
        email: '',
        phoneOrWhatsApp: '',
        projectType: projectTypes[0],
        budgetRange: budgetRanges[0],
        projectDescription: '',
      });
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'We could not send your request right now.');
    }
  };

  return (
    <form className="contact-form-card" id="project-form" onSubmit={onSubmit}>
      <div className="form-header">
        <h3>Project Details</h3>
        <p>Tell us what you are building, your rough budget, and the type of support you need.</p>
      </div>
      <div className="form-grid">
        <label>
          <span>Full Name</span>
          <input
            value={formData.fullName}
            onChange={(event) => setFormData((current) => ({ ...current, fullName: event.target.value }))}
            placeholder="Jane Doe"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={formData.email}
            onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
            placeholder="jane@company.com"
          />
        </label>
        <label>
          <span>Phone / WhatsApp</span>
          <input
            value={formData.phoneOrWhatsApp}
            onChange={(event) => setFormData((current) => ({ ...current, phoneOrWhatsApp: event.target.value }))}
            placeholder="+1 000 000 0000"
          />
        </label>
        <label>
          <span>Project Type</span>
          <select
            value={formData.projectType}
            onChange={(event) => setFormData((current) => ({ ...current, projectType: event.target.value }))}
          >
            {projectTypes.map((projectType) => (
              <option key={projectType} value={projectType}>
                {projectType}
              </option>
            ))}
          </select>
        </label>
        <label className="full-span">
          <span>Budget Range</span>
          <select
            value={formData.budgetRange}
            onChange={(event) => setFormData((current) => ({ ...current, budgetRange: event.target.value }))}
          >
            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>
        <label className="full-span">
          <span>Project Description</span>
          <textarea
            rows={6}
            value={formData.projectDescription}
            onChange={(event) => setFormData((current) => ({ ...current, projectDescription: event.target.value }))}
            placeholder="Share the product goal, expected features, users and timeline."
          />
        </label>
      </div>
      {message && (
        <div className={`form-message ${status === 'success' ? 'is-success' : 'is-error'}`}>
          {message}
        </div>
      )}
      <button type="submit" className="button primary form-submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending Request...' : 'Initiate Request'}
      </button>
    </form>
  );
}

