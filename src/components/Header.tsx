import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Menu, X, ChevronDown } from 'lucide-react';
import { locationList } from '../data/locations';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
    }`;

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-slate-900 text-gray-200 text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-orange-400" />
            <span>3951 SW 41st St, Hollywood, FL 33023</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Mon–Sat · 7:00 AM – 7:00 PM</span>
            <a href="tel:+17543105557" className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1">
              <Phone size={12} /> (754) 310-5557
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white sticky top-0 z-50 shadow-md border-b-4 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            <Link to="/" className="flex items-center" aria-label="Dr. Roofing FL Home">
              <img
                src="/logo_without_backround.png"
                alt="Dr. Roofing FL — Hollywood, Florida roofing contractor"
                className="h-16 md:h-20 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              <NavLink to="/" className={linkCls} end>Home</NavLink>
              <a href="/#services" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 transition">
                Services
              </a>

              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 transition inline-flex items-center gap-1">
                  Service Areas <ChevronDown size={14} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-1 w-64 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                      {locationList.map((l) => (
                        <Link
                          key={l.citySlug}
                          to={l.slug}
                          onClick={() => setAreasOpen(false)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          <MapPin size={14} className="text-orange-600" />
                          {l.city} Roofing
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="/#reviews" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 transition">
                Reviews
              </a>
              <a href="/#faq" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 transition">
                FAQ
              </a>
              <a href="/#quote" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-600 transition">
                Free Estimate
              </a>

              <a
                href="tel:+17543105557"
                className="ml-2 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-lg font-bold text-white transition shadow-md"
              >
                <Phone size={16} /> (754) 310-5557
              </a>
            </nav>

            {/* Mobile toggle */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="tel:+17543105557"
                className="inline-flex items-center gap-1 bg-orange-600 hover:bg-orange-700 px-3 py-2 rounded-lg font-bold text-white text-sm transition"
              >
                <Phone size={14} /> Call
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-gray-700 hover:text-orange-600"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <nav className="lg:hidden pb-4 border-t border-slate-200 pt-2" aria-label="Mobile navigation">
              <Link onClick={() => setMobileOpen(false)} to="/" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Home</Link>
              <a onClick={() => setMobileOpen(false)} href="/#services" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Services</a>
              <div className="py-1">
                <div className="px-2 text-xs uppercase tracking-widest text-gray-500 font-bold mt-2 mb-1">Service Areas</div>
                {locationList.map((l) => (
                  <Link
                    key={l.citySlug}
                    onClick={() => setMobileOpen(false)}
                    to={l.slug}
                    className="block py-2 pl-4 text-gray-700 hover:text-orange-600 text-sm"
                  >
                    {l.city} Roofing
                  </Link>
                ))}
              </div>
              <a onClick={() => setMobileOpen(false)} href="/#reviews" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Reviews</a>
              <a onClick={() => setMobileOpen(false)} href="/#faq" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">FAQ</a>
              <a onClick={() => setMobileOpen(false)} href="/#quote" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Free Estimate</a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
