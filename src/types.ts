export type RouteKey =
  | 'home'
  | 'services'
  | 'portfolio'
  | 'portfolio-detail'
  | 'about'
  | 'pricing'
  | 'contact'
  | 'privacy'
  | 'terms';

export interface SeoEntry {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceOffer {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  audience: string;
  problems: string[];
  deliverables: string[];
  technologies: string[];
  process: string[];
  ctaLabel: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  image: string;
  description: string;
  businessGoal: string;
  engagementSummary: string;
  stack: string[];
  features: string[];
  deliverables: string[];
  outcomes: string[];
}

export interface PricingTier {
  name: string;
  startingAt: string;
  description: string;
  includes: string[];
}

export interface TrustPoint {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface LeadFormInput {
  fullName: string;
  email: string;
  phoneOrWhatsApp: string;
  projectType: string;
  budgetRange: string;
  projectDescription: string;
}
