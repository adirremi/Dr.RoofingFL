import { Phone, MapPin, Mail, Facebook, Instagram, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { geoArticles } from '../data/geoArticles';
import { locationsByCounty } from '../data/locationsByCounty';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const totalCities = locationsByCounty.reduce((n, g) => n + g.cities.length, 0);

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Top block: brand + services + contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img
              src="/logo_without_backround.webp"
              alt="Dr. Roofing FL"
              className="h-28 w-auto mb-4 bg-white p-3 rounded-lg"
              width="320"
              height="320"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm leading-relaxed mb-4">
              South Florida's trusted roofing contractor — serving <strong className="text-white">{totalCities}+ cities</strong> across Broward, Miami-Dade &amp; Palm Beach Counties. HVHZ-certified, factory-authorized, licensed and insured.
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
              <span>Licensed &amp; Insured Florida Roofing Contractor</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={s.path} className="hover:text-orange-400 transition">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/financing" className="hover:text-orange-400 transition">Financing / $0 Down</Link></li>
            </ul>

            <h4 className="text-white font-bold text-base mt-6 mb-3">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><Link to="/about" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-orange-400 transition">Projects</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400 transition">Photo Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-orange-400 transition">Blog &amp; Guides</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Featured city guides (geo articles) */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Local Guides</h4>
            <ul className="space-y-2 text-sm">
              {geoArticles.map((a) => (
                <li key={a.slug}>
                  <Link to={a.path} className="hover:text-orange-400 transition">
                    {a.city}, FL Guide
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

        {/* Service Areas grouped by county — full "everything we cover" block */}
        <div className="border-t border-slate-800 pt-10 pb-2 mb-6">
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="text-white font-bold text-lg uppercase tracking-wider">
              Service Areas
            </h3>
            <span className="text-xs text-gray-400">
              {totalCities} cities · 3 counties
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locationsByCounty.map((group) => (
              <div key={group.county}>
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
                  <MapPin size={14} className="text-orange-400" />
                  <h4 className="text-white font-bold text-sm uppercase tracking-wider">
                    {group.county}
                  </h4>
                  <span className="ml-auto text-xs text-gray-500">
                    {group.cities.length}
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1 text-[13px]">
                  {group.cities.map((l) => (
                    <li key={l.citySlug}>
                      <Link
                        to={l.slug}
                        className="text-gray-400 hover:text-orange-400 transition"
                      >
                        {l.city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <span>© {currentYear} Dr. Roofing FL. All Rights Reserved. · Florida Certified Roofing Contractor.</span>
          <span>
            <Link to="/about" className="hover:text-orange-400">About</Link>
            {' · '}
            <Link to="/faq" className="hover:text-orange-400">FAQ</Link>
            {' · '}
            <Link to="/financing" className="hover:text-orange-400">Financing</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
