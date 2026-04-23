import { Phone, MapPin, Mail, Facebook, Instagram, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { locationList } from '../data/locations';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const extraCities = [
    'Pompano Beach', 'Coral Springs', 'Plantation', 'Sunrise', 'Deerfield Beach',
    'Boca Raton', 'Delray Beach', 'Weston', 'Coconut Creek', 'Sunny Isles',
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/logo_without_backround.png" alt="Dr. Roofing FL" className="h-20 w-auto mb-4 bg-white p-2 rounded-lg" />
            <p className="text-sm leading-relaxed mb-4 max-w-md">
              Hollywood, Florida's trusted roofing contractor delivering premium residential and commercial roofing solutions across Broward and Miami-Dade Counties. Honest pricing, expert craftsmanship, exceptional service.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a href="https://www.facebook.com/Drroofingfl" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/drroofingfl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-slate-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition">
                <Instagram size={18} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Shield size={14} className="text-orange-400" />
              <span>Licensed & Insured Florida Roofing Contractor</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#services" className="hover:text-orange-400 transition">Tile Roof Replacement</a></li>
              <li><a href="/#services" className="hover:text-orange-400 transition">Shingle Roof Installation</a></li>
              <li><a href="/#services" className="hover:text-orange-400 transition">Metal Roofing</a></li>
              <li><a href="/#services" className="hover:text-orange-400 transition">Flat / TPO Roofing</a></li>
              <li><a href="/#services" className="hover:text-orange-400 transition">Roof Repairs</a></li>
              <li><a href="/#services" className="hover:text-orange-400 transition">Storm Damage Restoration</a></li>
              <li><a href="/#quote" className="hover:text-orange-400 transition">Free Roof Inspection</a></li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {locationList.map((l) => (
                <li key={l.citySlug}>
                  <Link to={l.slug} className="hover:text-orange-400 transition">
                    {l.city} Roofing
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span>3951 SW 41st St<br />Hollywood, FL 33023</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+17543105557" className="hover:text-orange-400 transition font-semibold">(754) 310-5557</a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@drroofingflorida.com" className="hover:text-orange-400 transition break-all">info@drroofingflorida.com</a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-orange-400 flex-shrink-0 mt-0.5" />
                <span>Mon–Sat · 7AM–7PM<br />Sun · Emergency only</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Extra cities strip */}
        <div className="border-t border-slate-800 pt-6 pb-2">
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Also serving:</p>
          <p className="text-sm text-gray-400">
            {extraCities.join(' · ')} · and all of Broward & Miami-Dade Counties.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <span>© {currentYear} Dr. Roofing FL. All Rights Reserved. · Florida Certified Roofing Contractor.</span>
          <span>
            <a href="/#" className="hover:text-orange-400">Privacy Policy</a>
            {' · '}
            <a href="/#" className="hover:text-orange-400">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
