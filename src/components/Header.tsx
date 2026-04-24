import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { services } from '../data/services';
import { locationsByCounty, flagshipCities } from '../data/locationsByCounty';

/* WhatsApp brand icon (Lucide doesn't include it) */
const WhatsAppIcon = ({ size = 14 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const WHATSAPP_HREF =
  'https://wa.me/19543105136?text=' +
  encodeURIComponent("Hi Dr. Roofing FL — I'd like a free roof inspection.");

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [mobileCounties, setMobileCounties] = useState<Record<string, boolean>>({});

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition ${
      isActive ? 'text-orange-600' : 'text-slate-800 hover:text-orange-600'
    }`;

  const closeAll = () => {
    setMobileOpen(false);
    setAreasOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-slate-900 text-gray-200 text-[11px] uppercase tracking-[0.2em]">
        <div className="container mx-auto px-4 flex items-center justify-between py-2.5">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <MapPin size={12} className="text-orange-400" />
              3951 SW 41st St, Hollywood, FL 33023
            </span>
            <span className="hidden lg:inline text-gray-500">Licensed &amp; Insured · HVHZ Certified</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-gray-400 hidden xl:inline">Mon–Sat · 7AM – 7PM</span>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#1ebd5b] font-bold tracking-[0.15em] transition"
              aria-label="Send us a WhatsApp message"
            >
              <WhatsAppIcon size={12} /> WhatsApp
            </a>
            <span className="text-slate-700">·</span>
            <a href="tel:+17543105557" className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center gap-1.5 tracking-[0.15em]">
              <Phone size={12} /> (754) 310-5557
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white sticky top-0 z-40 shadow-md border-b-2 border-orange-500">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">
            <Link to="/" className="flex items-center -my-2" aria-label="Dr. Roofing FL Home">
              <img
                src="/logo_sm.webp"
                srcSet="/logo_sm.webp 256w, /logo_without_backround.webp 512w"
                sizes="(max-width: 768px) 80px, (max-width: 1024px) 112px, 128px"
                alt="Dr. Roofing FL — Hollywood, Florida roofing contractor"
                className="h-20 md:h-28 lg:h-32 w-auto"
                width="320"
                height="320"
                fetchPriority="high"
                decoding="async"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              <NavLink to="/" className={linkCls} end>Home</NavLink>

              {/* Services dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-800 hover:text-orange-600 transition inline-flex items-center gap-1">
                  Services <ChevronDown size={13} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-0 pt-1 w-72 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={s.path}
                          onClick={closeAll}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          <div className="font-semibold">{s.shortTitle}</div>
                          <div className="text-xs text-gray-500">{s.tagline}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Service Areas mega-menu */}
              <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
                <button className="px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-800 hover:text-orange-600 transition inline-flex items-center gap-1">
                  Service Areas <ChevronDown size={13} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-1 w-[880px] max-w-[95vw] z-50">
                    <div className="bg-white rounded-lg shadow-2xl border border-slate-200 p-5">
                      <div className="grid grid-cols-3 gap-6">
                        {locationsByCounty.map((group) => (
                          <div key={group.county}>
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-200">
                              <MapPin size={14} className="text-orange-600" />
                              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                {group.county}
                              </h3>
                              <span className="ml-auto text-xs text-gray-400">
                                {group.cities.length}
                              </span>
                            </div>
                            <ul className="grid grid-cols-2 gap-x-3 gap-y-1 max-h-[360px] overflow-y-auto pr-1">
                              {group.cities.map((l) => (
                                <li key={l.citySlug}>
                                  <Link
                                    to={l.slug}
                                    onClick={closeAll}
                                    className="block py-1 text-xs text-gray-700 hover:text-orange-600 hover:underline"
                                  >
                                    {l.city}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-slate-200 mt-4 pt-3 text-xs text-gray-500 text-center">
                        Serving <strong className="text-orange-600">{locationsByCounty.reduce((n, g) => n + g.cities.length, 0)} cities</strong> across
                        South Florida — Broward, Miami-Dade & Palm Beach Counties.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/financing" className={linkCls}>Financing</NavLink>
              <NavLink to="/projects" className={linkCls}>Projects</NavLink>
              <NavLink to="/gallery" className={linkCls}>Gallery</NavLink>
              <NavLink to="/blog" className={linkCls}>Blog</NavLink>
              <NavLink to="/about" className={linkCls}>About</NavLink>
              <NavLink to="/faq" className={linkCls}>FAQ</NavLink>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] px-4 py-3 rounded-sm font-bold text-white text-[13px] uppercase tracking-[0.12em] transition shadow-lg shadow-emerald-200/60"
                aria-label="Send us a WhatsApp message"
              >
                <WhatsAppIcon size={14} /> WhatsApp
              </a>
              <a
                href="tel:+17543105557"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 px-5 py-3 rounded-sm font-bold text-white text-[13px] uppercase tracking-[0.12em] transition shadow-lg shadow-orange-200"
              >
                <Phone size={14} /> (754) 310-5557
              </a>
            </nav>

            {/* Mobile toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1ebd5b] w-10 h-10 rounded-lg text-white transition shadow"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
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
            <nav className="lg:hidden pb-4 border-t border-slate-200 pt-2 max-h-[80vh] overflow-y-auto" aria-label="Mobile navigation">
              <Link onClick={closeAll} to="/" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Home</Link>

              <div className="py-1">
                <div className="px-2 text-xs uppercase tracking-widest text-gray-500 font-bold mt-2 mb-1">Services</div>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    onClick={closeAll}
                    to={s.path}
                    className="block py-2 pl-4 text-gray-700 hover:text-orange-600 text-sm"
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>

              {/* Mobile Service Areas — collapsible by county */}
              <div className="py-1">
                <button
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                  className="w-full flex items-center justify-between px-2 text-xs uppercase tracking-widest text-gray-500 font-bold mt-2 mb-1"
                >
                  <span>Service Areas</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileAreasOpen && (
                  <>
                    {/* Featured flagships shortcut */}
                    <div className="pb-2 mb-2 border-b border-slate-200">
                      <div className="px-4 text-[10px] uppercase tracking-widest text-orange-600 font-bold mb-1">
                        Most Searched
                      </div>
                      <div className="grid grid-cols-2 gap-x-2">
                        {flagshipCities.slice(0, 8).map((l) => (
                          <Link
                            key={l.citySlug}
                            onClick={closeAll}
                            to={l.slug}
                            className="block py-1 pl-4 text-gray-700 hover:text-orange-600 text-sm"
                          >
                            {l.city}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {locationsByCounty.map((group) => (
                      <div key={group.county} className="mb-1">
                        <button
                          onClick={() =>
                            setMobileCounties((prev) => ({
                              ...prev,
                              [group.county]: !prev[group.county],
                            }))
                          }
                          className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-slate-800 bg-slate-50 hover:bg-orange-50 rounded"
                        >
                          <span className="flex items-center gap-2">
                            <MapPin size={12} className="text-orange-600" />
                            {group.county}
                            <span className="text-xs text-gray-400 font-normal">
                              ({group.cities.length})
                            </span>
                          </span>
                          <ChevronRight
                            size={14}
                            className={`transition-transform ${mobileCounties[group.county] ? 'rotate-90' : ''}`}
                          />
                        </button>
                        {mobileCounties[group.county] && (
                          <div className="grid grid-cols-2 gap-x-2 pl-3 pr-1 py-1">
                            {group.cities.map((l) => (
                              <Link
                                key={l.citySlug}
                                onClick={closeAll}
                                to={l.slug}
                                className="block py-1 pl-4 text-gray-700 hover:text-orange-600 text-xs"
                              >
                                {l.city}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>

              <Link onClick={closeAll} to="/financing" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Financing</Link>
              <Link onClick={closeAll} to="/projects" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Projects</Link>
              <Link onClick={closeAll} to="/gallery" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Gallery</Link>
              <Link onClick={closeAll} to="/blog" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Blog</Link>
              <Link onClick={closeAll} to="/about" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">About</Link>
              <Link onClick={closeAll} to="/faq" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">FAQ</Link>
              <a onClick={closeAll} href="/#quote" className="block py-2 px-2 text-gray-800 font-medium hover:text-orange-600">Free Estimate</a>
              <a
                onClick={closeAll}
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5b] text-white font-bold py-3 rounded-lg transition shadow"
              >
                <WhatsAppIcon size={16} /> Chat on WhatsApp · (954) 310-5136
              </a>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
