import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FinancingPage from './pages/FinancingPage';
import FAQPage from './pages/FAQPage';
import BlogIndexPage from './pages/BlogIndexPage';
import NotFoundPage from './pages/NotFoundPage';
import ServiceCityPage from './pages/ServiceCityPage';
import ProjectsIndexPage from './pages/ProjectsIndexPage';
import ProjectPage from './pages/ProjectPage';

// City (location) pages
import HollywoodRoofing from './pages/HollywoodRoofing';
import MiamiRoofing from './pages/MiamiRoofing';
import FortLauderdaleRoofing from './pages/FortLauderdaleRoofing';
import PembrokePinesRoofing from './pages/PembrokePinesRoofing';
import MiramarRoofing from './pages/MiramarRoofing';
import DavieRoofing from './pages/DavieRoofing';
import HallandaleBeachRoofing from './pages/HallandaleBeachRoofing';
import DaniaBeachRoofing from './pages/DaniaBeachRoofing';
import AventuraRoofing from './pages/AventuraRoofing';

// Service pages
import TileRoofPage from './pages/services/TileRoofPage';
import ShingleRoofPage from './pages/services/ShingleRoofPage';
import MetalRoofPage from './pages/services/MetalRoofPage';
import FlatRoofPage from './pages/services/FlatRoofPage';
import RoofRepairPage from './pages/services/RoofRepairPage';
import StormDamagePage from './pages/services/StormDamagePage';

// Blog / geo articles
import HollywoodGuidePage from './pages/blog/HollywoodGuidePage';
import MiamiGuidePage from './pages/blog/MiamiGuidePage';
import FortLauderdaleGuidePage from './pages/blog/FortLauderdaleGuidePage';
import PembrokePinesGuidePage from './pages/blog/PembrokePinesGuidePage';
import MiramarGuidePage from './pages/blog/MiramarGuidePage';
import DavieGuidePage from './pages/blog/DavieGuidePage';
import HallandaleBeachGuidePage from './pages/blog/HallandaleBeachGuidePage';
import DaniaBeachGuidePage from './pages/blog/DaniaBeachGuidePage';
import AventuraGuidePage from './pages/blog/AventuraGuidePage';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow pb-14 md:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Core pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/financing" element={<FinancingPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/projects" element={<ProjectsIndexPage />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />

            {/* Services */}
            <Route path="/tile-roof-replacement-florida" element={<TileRoofPage />} />
            <Route path="/shingle-roof-installation-florida" element={<ShingleRoofPage />} />
            <Route path="/metal-roof-florida" element={<MetalRoofPage />} />
            <Route path="/flat-roof-tpo-florida" element={<FlatRoofPage />} />
            <Route path="/roof-repair-florida" element={<RoofRepairPage />} />
            <Route path="/storm-damage-restoration-florida" element={<StormDamagePage />} />

            {/* Location pages */}
            <Route path="/hollywood-roofing" element={<HollywoodRoofing />} />
            <Route path="/miami-roofing" element={<MiamiRoofing />} />
            <Route path="/fort-lauderdale-roofing" element={<FortLauderdaleRoofing />} />
            <Route path="/pembroke-pines-roofing" element={<PembrokePinesRoofing />} />
            <Route path="/miramar-roofing" element={<MiramarRoofing />} />
            <Route path="/davie-roofing" element={<DavieRoofing />} />
            <Route path="/hallandale-beach-roofing" element={<HallandaleBeachRoofing />} />
            <Route path="/dania-beach-roofing" element={<DaniaBeachRoofing />} />
            <Route path="/aventura-roofing" element={<AventuraRoofing />} />

            {/* Service × City hyper-local pages (54 combos) */}
            <Route path="/:slug" element={<ServiceCityPage />} />

            {/* Geo Network / Blog Articles */}
            <Route path="/blog/hollywood-florida-guide" element={<HollywoodGuidePage />} />
            <Route path="/blog/miami-florida-guide" element={<MiamiGuidePage />} />
            <Route path="/blog/fort-lauderdale-florida-guide" element={<FortLauderdaleGuidePage />} />
            <Route path="/blog/pembroke-pines-florida-guide" element={<PembrokePinesGuidePage />} />
            <Route path="/blog/miramar-florida-guide" element={<MiramarGuidePage />} />
            <Route path="/blog/davie-florida-guide" element={<DavieGuidePage />} />
            <Route path="/blog/hallandale-beach-florida-guide" element={<HallandaleBeachGuidePage />} />
            <Route path="/blog/dania-beach-florida-guide" element={<DaniaBeachGuidePage />} />
            <Route path="/blog/aventura-florida-guide" element={<AventuraGuidePage />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </Router>
  );
}

export default App;
