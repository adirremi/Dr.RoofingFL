import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HollywoodRoofing from './pages/HollywoodRoofing';
import MiamiRoofing from './pages/MiamiRoofing';
import FortLauderdaleRoofing from './pages/FortLauderdaleRoofing';
import PembrokePinesRoofing from './pages/PembrokePinesRoofing';
import MiramarRoofing from './pages/MiramarRoofing';
import DavieRoofing from './pages/DavieRoofing';
import HallandaleBeachRoofing from './pages/HallandaleBeachRoofing';
import DaniaBeachRoofing from './pages/DaniaBeachRoofing';
import AventuraRoofing from './pages/AventuraRoofing';

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
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hollywood-roofing" element={<HollywoodRoofing />} />
            <Route path="/miami-roofing" element={<MiamiRoofing />} />
            <Route path="/fort-lauderdale-roofing" element={<FortLauderdaleRoofing />} />
            <Route path="/pembroke-pines-roofing" element={<PembrokePinesRoofing />} />
            <Route path="/miramar-roofing" element={<MiramarRoofing />} />
            <Route path="/davie-roofing" element={<DavieRoofing />} />
            <Route path="/hallandale-beach-roofing" element={<HallandaleBeachRoofing />} />
            <Route path="/dania-beach-roofing" element={<DaniaBeachRoofing />} />
            <Route path="/aventura-roofing" element={<AventuraRoofing />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
