import { Header } from './components/Header';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Results } from './pages/Results';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { About } from './pages/About';
import { Automations } from './pages/Automations';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { ShowcaseGallery } from './pages/ShowcaseGallery';
import { SaltLily } from './pages/showcase/SaltLily';
import { FranksAustralia } from './pages/showcase/FranksAustralia';
import { QuintaDoPinto } from './pages/showcase/QuintaDoPinto';
import { OPalmeiral } from './pages/showcase/OPalmeiral';
import { Onboarding } from './pages/Onboarding';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-bg text-text selection:bg-red-600 selection:text-white">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pt" element={<Home />} />
              <Route path="/results" element={<Results />} />
              <Route path="/pt/results" element={<Results />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pt/services" element={<Services />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/pt/industries" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/pt/about" element={<About />} />
              <Route path="/automation" element={<Automations />} />
              <Route path="/pt/automation" element={<Automations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pt/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pt/blog" element={<Blog />} />
              <Route path="/showcase" element={<ShowcaseGallery />} />
              <Route path="/pt/showcase" element={<ShowcaseGallery />} />
              <Route path="/showcase/salt-lily" element={<SaltLily />} />
              <Route path="/pt/showcase/salt-lily" element={<SaltLily />} />
              <Route path="/showcase/franks-australia" element={<FranksAustralia />} />
              <Route path="/pt/showcase/franks-australia" element={<FranksAustralia />} />
              <Route path="/showcase/quinta-do-pinto" element={<QuintaDoPinto />} />
              <Route path="/pt/showcase/quinta-do-pinto" element={<QuintaDoPinto />} />
              <Route path="/showcase/o-palmeiral" element={<OPalmeiral />} />
              <Route path="/pt/showcase/o-palmeiral" element={<OPalmeiral />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/pt/onboarding" element={<Onboarding />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}
