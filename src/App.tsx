import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HollywoodRoofing from './pages/HollywoodRoofing';
import FortLauderdaleRoofing from './pages/FortLauderdaleRoofing';
import PembrokePinesRoofing from './pages/PembrokePinesRoofing';
import MiramarRoofing from './pages/MiramarRoofing';
import HallandaleBeachRoofing from './pages/HallandaleBeachRoofing';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hollywood-roofing" element={<HollywoodRoofing />} />
            <Route path="/fort-lauderdale-roofing" element={<FortLauderdaleRoofing />} />
            <Route path="/pembroke-pines-roofing" element={<PembrokePinesRoofing />} />
            <Route path="/miramar-roofing" element={<MiramarRoofing />} />
            <Route path="/hallandale-beach-roofing" element={<HallandaleBeachRoofing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
