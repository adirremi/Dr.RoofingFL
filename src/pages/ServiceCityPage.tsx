import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import type { ServiceCityCombo } from '../data/serviceCity';
import {
  Phone,
  CheckCircle,
  Star,
  MapPin,
  ExternalLink,
  Plus,
  Shield,
  Clock,
  DollarSign,
  Hammer,
  Wind,
} from 'lucide-react';
import SEO from '../components/SEO';
import NotFoundPage from './NotFoundPage';
import { serviceCityBySlug, combosByCity, combosByService } from '../data/serviceCity';
import { geoArticlesByCity } from '../data/geoArticles';

const SITE = 'https://drroofingflorida.com';

const ICON_MAP: Record<string, typeof Shield> = {
  shield: Shield,
  clock: Clock,
  dollar: DollarSign,
  hammer: Hammer,
  wind: Wind,
  star: Star,
};

interface Props {
  combo?: ServiceCityCombo;
}

export default function ServiceCityPage({ combo: comboProp }: Props = {}) {
  const { slug } = useParams<{ slug: string }>();
  const [openFaq, setOpenFaq] = useState<number>(0);

  const combo = comboProp ?? (slug ? serviceCityBySlug[slug] : undefined);
  if (!combo) return <NotFoundPage />;

  const { service, location } = combo;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}${combo.path}#service`,
    serviceType: service.title,
    name: `${service.title} in ${location.city}, FL`,
    description: combo.metaDescription,
    url: `${SITE}${combo.path}`,
    image: `${SITE}${service.image}`,
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${SITE}/#localbusiness`,
      name: 'Dr. Roofing FL',
      url: SITE,
      telephone: '+1-754-310-5557',
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: { '@type': 'State', name: 'Florida' },
      sameAs: location.wikipediaUrl,
    },
    offers: {
      '@type': 'Offer',
      priceRange: service.priceRange,
      priceCurrency: 'USD',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}${service.path}` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE}${service.path}` },
      { '@type': 'ListItem', position: 4, name: location.city, item: `${SITE}${combo.path}` },
    ],
  };

  // Blend global service FAQs with city-specific FAQs for a richer FAQ schema
  const localizedFaqs = service.faqs.slice(0, 4).map((f) => ({
    question: f.question.replace(/South Florida/g, location.city).replace(/Florida/g, `${location.city}, FL`),
    answer: f.answer.replace(/South Florida/g, `${location.city}, Florida`),
  }));
  const faqs = [
    ...localizedFaqs,
    ...location.faqs.slice(0, 2),
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const otherServicesInCity = combosByCity(location.citySlug).filter((c) => c.service.slug !== service.slug);
  const sameServiceOtherCities = combosByService(service.slug).filter((c) => c.location.citySlug !== location.citySlug);
  const cityGuide = geoArticlesByCity[location.citySlug];

  return (
    <>
      <SEO
        title={combo.metaTitle}
        description={combo.metaDescription}
        keywords={combo.metaKeywords}
        canonical={combo.path}
        image={`${SITE}${service.image}`}
        schema={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      {/* ───── HERO ───── */}
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17,24,39,0.88) 0%, rgba(234,88,12,0.55) 100%), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <nav aria-label="Breadcrumb" className="text-sm text-orange-100 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to={service.path} className="hover:text-white">{service.shortTitle}</Link>
            <span className="mx-2">/</span>
            <Link to={location.slug} className="hover:text-white">{location.city}</Link>
          </nav>

          <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            <MapPin size={12} /> {location.city}, FL · {service.shortTitle}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight max-w-4xl font-serif">
            {combo.h1}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-orange-100 mb-6 max-w-3xl">
            {combo.h2}
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-3xl leading-relaxed">
            {combo.intro}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+17543105557"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition"
            >
              <Phone size={22} /> Call (754) 310-5557
            </a>
            <a
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition"
            >
              Free Quote in {location.city} →
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-orange-100">
            <span className="inline-flex items-center gap-1"><Star size={14} fill="currentColor" /> 4.9/5 · 312+ reviews</span>
            <span className="inline-flex items-center gap-1"><Shield size={14} /> HVHZ certified</span>
            <span className="inline-flex items-center gap-1"><Clock size={14} /> Mon–Sat · 7am–7pm</span>
          </div>
        </div>
      </section>

      {/* ───── LOCAL INTRO + MAP ───── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Why {location.city}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-5 font-serif">
                {service.shortTitle} Roofing Built for {location.city}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">{combo.localAngle}</p>
              <p className="text-gray-700 leading-relaxed">
                We serve every {location.city} ZIP code — <strong>{location.zipCodes.join(', ')}</strong> — with same-week
                installation and free onsite inspections. Our crews live in South Florida and know every {location.city}
                neighborhood, HOA requirement, and permit pathway.
              </p>
              {cityGuide && (
                <p className="mt-5">
                  <Link
                    to={cityGuide.path}
                    className="inline-flex items-center gap-1 text-orange-600 font-semibold hover:underline"
                  >
                    Read our complete {location.city} guide → <ExternalLink size={14} />
                  </Link>
                </p>
              )}
            </div>

            <aside className="bg-slate-50 rounded-xl p-6 border-t-4 border-orange-500">
              <h3 className="text-lg font-bold mb-4 text-gray-900">{location.city} Service Facts</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <dt className="text-gray-500">Service</dt>
                  <dd className="font-semibold text-gray-900">{service.shortTitle}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <dt className="text-gray-500">Price Range</dt>
                  <dd className="font-semibold text-gray-900">{service.priceRange}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <dt className="text-gray-500">Lifespan</dt>
                  <dd className="font-semibold text-gray-900">{service.lifespan}</dd>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <dt className="text-gray-500">Service Area</dt>
                  <dd className="font-semibold text-gray-900">{location.city}, FL</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Response Time</dt>
                  <dd className="font-semibold text-gray-900">Same-day</dd>
                </div>
              </dl>
              <a
                href="tel:+17543105557"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-bold transition"
              >
                <Phone size={18} /> (754) 310-5557
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ───── EMBEDDED MAP ───── */}
      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.shortTitle} Roofing Service Area — {location.city}, FL</h3>
              <iframe
                title={`${service.title} service area in ${location.city}, FL`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${location.city}, FL`)}&output=embed`}
                className="w-full h-72 rounded-lg border border-slate-200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Dr. Roofing FL</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><Phone size={14} className="text-orange-600 mt-0.5" /> <a href="tel:+17543105557" className="hover:text-orange-600 font-semibold">(754) 310-5557</a></li>
                <li className="flex gap-2"><MapPin size={14} className="text-orange-600 mt-0.5" /> 3951 SW 41st St, Hollywood, FL 33023</li>
                <li className="flex gap-2"><Clock size={14} className="text-orange-600 mt-0.5" /> Mon–Sat · 7:00 AM – 7:00 PM</li>
              </ul>
              <Link to={location.slug} className="mt-4 inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:underline">
                Full {location.city} page → <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───── BENEFITS ───── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Why This System</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Why {service.shortTitle} Is the Right Choice in {location.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.benefits.map((b) => {
              const Icon = ICON_MAP[b.icon] || Shield;
              return (
                <div key={b.title} className="bg-slate-50 rounded-xl p-5 border-l-4 border-orange-500">
                  <div className="bg-orange-600 text-white w-11 h-11 rounded-lg flex items-center justify-center mb-3">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-600">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── LOCAL PROBLEMS WE SOLVE ───── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Local Problems</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Common {location.city} Roof Problems We Fix
            </h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {location.commonProblems.slice(0, 12).map((p) => (
              <li key={p} className="flex items-start gap-2 bg-white border border-slate-200 rounded-lg p-3">
                <CheckCircle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition">
              <Phone size={18} /> (754) 310-5557
            </a>
          </div>
        </div>
      </section>

      {/* ───── REVIEWS ───── */}
      {location.reviews.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Reviews</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
                What {location.city} Homeowners Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {location.reviews.map((r) => (
                <div key={r.name} className="bg-slate-50 rounded-xl p-5 border-t-4 border-orange-500">
                  <div className="flex gap-0.5 text-orange-500 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic mb-3">"{r.text}"</p>
                  <div className="text-xs font-semibold text-gray-900">
                    {r.name} — <span className="text-gray-500">{location.city}, FL</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── FAQ ───── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              {service.shortTitle} in {location.city} — Questions & Answers
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-md divide-y divide-slate-200">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-orange-50 transition"
                  >
                    <span className="font-semibold text-gray-900 text-sm md:text-base">{f.question}</span>
                    <Plus size={20} className={`text-orange-600 flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`} />
                  </button>
                  {open && <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm">{f.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── OTHER SERVICES IN THIS CITY ───── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
            Other Roofing Services in {location.city}
          </h2>
          <p className="text-gray-600 mb-6">Full-service roofing for every {location.city} home and building type.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {otherServicesInCity.map((c) => (
              <Link
                key={c.slug}
                to={c.path}
                className="flex items-center justify-between gap-3 bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 rounded-lg p-4 transition group"
              >
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-orange-700">
                    {c.service.shortTitle} in {location.city}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{c.service.priceRange}</div>
                </div>
                <span className="text-orange-600 font-bold">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SAME SERVICE OTHER CITIES ───── */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif mb-2">
            {service.title} in Other South Florida Cities
          </h2>
          <p className="text-gray-600 mb-6">We install {service.shortTitle.toLowerCase()} roofs across all of South Florida.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {sameServiceOtherCities.map((c) => (
              <Link
                key={c.slug}
                to={c.path}
                className="flex items-start gap-2 bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 rounded-lg p-3 transition group"
              >
                <MapPin size={14} className="text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-orange-700 text-sm">
                    {c.service.shortTitle} {c.location.city}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{c.location.state}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───── FINAL CTA ───── */}
      <section
        className="py-16 text-white text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(234,88,12,0.82) 100%), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Ready for Your New {service.shortTitle} Roof in {location.city}?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Free inspection · written quote · $0-down financing · HVHZ-certified installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17543105557" className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              <Phone size={20} /> (754) 310-5557
            </a>
            <Link to={location.slug} className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              All Services in {location.city}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
