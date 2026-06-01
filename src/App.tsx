import { Route, Routes } from 'react-router-dom';
import { AppShell } from './components';
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  PortfolioDetailPage,
  PortfolioPage,
  PricingPage,
  PrivacyPage,
  ServiceDetailPage,
  ServicesPage,
  TermsPage,
} from './pages';

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  );
}
