import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  CheckCircle,
  Shield,
  Clock,
  Award,
  ExternalLink,
  Star,
  Plus,
  Wrench,
  DollarSign,
  Hammer,
} from 'lucide-react';
import SEO from '../components/SEO';
import type { LocationData } from '../data/locations';
import { locationList } from '../data/locations';
import { services } from '../data/services';
import { geoArticlesByCity } from '../data/geoArticles';

interface Props {
  location: LocationData;
}

const SITE = 'https://drroofingflorida.com';

export default function LocationPage({ location }: Props) {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const canonical = location.slug;
  const cityPhrase = `${location.city}, ${location.state}`;

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE}${location.slug}#localbusiness`,
    name: `Dr. Roofing FL — ${cityPhrase}`,
    url: `${SITE}${location.slug}`,
    telephone: '+1-754-310-5557',
    image: `${SITE}${location.heroImage}`,
    logo: `${SITE}/logo_without_backround.png`,
    priceRange: '$$',
    description: location.metaDescription,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dr. Roofing FL',
      addressLocality: 'Hollywood',
      addressRegion: 'FL',
      postalCode: '33023',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.latitude,
      longitude: location.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedInPlace: { '@type': 'State', name: 'Florida' },
      sameAs: location.wikipediaUrl,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/Drroofingfl',
      'https://www.instagram.com/drroofingfl',
      'https://www.yelp.com/biz/dr-roofing-fl-hollywood',
      'https://www.bbb.org/us/fl/hollywood/profile/roofing-contractors/dr-roofing-fl',
      'https://www.houzz.com/pro/drroofingfl',
      location.wikipediaUrl,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '312',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${SITE}/#areas` },
      { '@type': 'ListItem', position: 3, name: `${location.city} Roofing`, item: `${SITE}${location.slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: location.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const otherLocations = locationList.filter((l) => l.citySlug !== location.citySlug);

  return (
    <>
      <SEO
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={location.metaKeywords}
        canonical={canonical}
        image={`${SITE}${location.heroImage}`}
        schema={[localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      {/* ───────── COVER / HERO ───────── */}
      <section
        className="relative text-white py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17,24,39,0.85) 0%, rgba(234,88,12,0.55) 100%), url(${location.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm text-orange-100 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span>Service Areas</span>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{location.city} Roofing</span>
          </nav>

          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            Roofing Contractor · {cityPhrase}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight max-w-4xl">
            Dr. Roofing FL — We Provide Professional Roofing in {cityPhrase}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-orange-100 mb-6 max-w-3xl">
            {location.nearYouHeading} · Tile, Metal, Shingle & Flat Roofing Near You
          </h2>

          <p className="text-lg text-gray-100 mb-8 max-w-3xl leading-relaxed">
            {location.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+17543105557"
              className="inline-flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition"
            >
              <Phone size={22} />
              <span>Call (754) 310-5557</span>
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center space-x-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition"
            >
              <span>Free Estimate in {location.city}</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2"><Shield size={20} className="text-orange-300" /><span>Licensed & Insured</span></div>
            <div className="flex items-center gap-2"><Award size={20} className="text-orange-300" /><span>HVHZ Certified</span></div>
            <div className="flex items-center gap-2"><Star size={20} className="text-orange-300" /><span>4.9★ · 312+ Reviews</span></div>
            <div className="flex items-center gap-2"><Clock size={20} className="text-orange-300" /><span>24/7 Emergency Service</span></div>
          </div>
        </div>
      </section>

      {/* ───────── MAP + HOURS + NAP ───────── */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={location.mapUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Dr. Roofing FL — serving ${location.city}, Florida`}
              />
            </div>
            <aside className="bg-slate-900 text-white rounded-xl p-7 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">Our Office Serving {location.city}</h3>
                <div className="space-y-3 text-sm text-gray-200">
                  <div className="flex gap-3"><MapPin size={18} className="text-orange-400 flex-shrink-0 mt-0.5" /><span>3951 SW 41st St<br />Hollywood, FL 33023</span></div>
                  <div className="flex gap-3"><Phone size={18} className="text-orange-400 flex-shrink-0 mt-0.5" /><a href="tel:+17543105557" className="hover:text-orange-400">(754) 310-5557</a></div>
                  <div className="flex gap-3"><Clock size={18} className="text-orange-400 flex-shrink-0 mt-0.5" /><span>Mon–Sat · 7:00 AM – 7:00 PM<br />Sun · Emergency only</span></div>
                </div>
              </div>
              <a
                href="tel:+17543105557"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-lg font-bold transition"
              >
                <Phone size={18} /> (754) 310-5557
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────── CITY INTRO + CITY FACTS ───────── */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 prose prose-lg max-w-none text-gray-700">
              <span className="uppercase tracking-widest text-xs font-bold text-orange-600">About our service area</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 font-serif">
                Roofing in {cityPhrase} — Built for Your Neighborhood
              </h2>
              <p className="leading-relaxed">{location.cityIntro}</p>
              <p className="leading-relaxed">
                For authoritative local information visit the{' '}
                <a href={location.authorityLink.url} target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:underline inline-flex items-center gap-1">
                  {location.authorityLink.label} <ExternalLink size={14} />
                </a>{' '}
                or read the{' '}
                <a href={location.wikipediaUrl} target="_blank" rel="noopener noreferrer" className="text-orange-600 font-semibold hover:underline inline-flex items-center gap-1">
                  Wikipedia entry for {location.city} <ExternalLink size={14} />
                </a>.
              </p>
              <p className="leading-relaxed">
                Serving ZIP codes:{' '}
                <strong>{location.zipCodes.join(', ')}</strong>
              </p>
              {geoArticlesByCity[location.citySlug] && (
                <p className="leading-relaxed mt-3">
                  Learn more in our{' '}
                  <Link
                    to={geoArticlesByCity[location.citySlug].path}
                    className="text-orange-600 font-semibold hover:underline"
                  >
                    complete {location.city} guide →
                  </Link>
                </p>
              )}
            </div>

            <aside className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
              <h3 className="text-lg font-bold mb-4 text-gray-900">
                {location.city} Company Facts & Data
              </h3>
              <dl className="space-y-3 text-sm">
                {location.cityFacts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-4 border-b border-gray-100 pb-2">
                    <dt className="text-gray-500">{f.label}</dt>
                    <dd className="font-semibold text-gray-900 text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <a
                href="tel:+17543105557"
                className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-bold transition"
              >
                <Phone size={18} /> Call Now
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────── WHY CHOOSE US ───────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Why Homeowners Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Why {location.city} Chooses Dr. Roofing FL
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: DollarSign, title: '$0-Down Financing', text: 'No money down, no minimum credit required, up to 16 months with no payments.' },
              { icon: Shield, title: 'Licensed & Insured', text: 'Florida-Certified Roofing Contractor with full liability and workers\' comp.' },
              { icon: Award, title: 'HVHZ Certified', text: 'Every install meets Florida Building Code 2023 High-Velocity Hurricane Zone requirements.' },
              { icon: Hammer, title: 'Expert Craftsmanship', text: 'Factory-certified installers for GAF, Owens Corning, Eagle, and Boral.' },
              { icon: Clock, title: '24/7 Emergency Service', text: 'Tarp, board-up, and leak-stop service anywhere in ' + location.city + '.' },
              { icon: Star, title: '4.9★ · 312+ Reviews', text: 'Real reviews from real ' + location.city + ' homeowners. Ask for local references.' },
            ].map((b) => (
              <div key={b.title} className="bg-slate-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <b.icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone size={20} /> Call (754) 310-5557
            </a>
          </div>
        </div>
      </section>

      {/* ───────── SERVICES IN CITY ───────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Services We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Roofing Services in {cityPhrase}
            </h2>
            <p className="text-gray-600 mt-4">
              Full-service residential and commercial roofing — tile, metal, shingle, flat/TPO — built for {cityPhrase}'s climate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <article key={s.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.shortTitle} installation in ${location.city} FL by Dr. Roofing FL`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    <Link to={`/${s.slug}-${location.citySlug}`} className="hover:text-orange-600">
                      {s.shortTitle} in {location.city}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{s.description}</p>
                  <ul className="text-xs text-gray-700 space-y-1 mb-4">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <Link to={`/${s.slug}-${location.citySlug}`} className="text-sm font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1">
                      {s.shortTitle} {location.city} →
                    </Link>
                    <a href="tel:+17543105557" className="text-sm font-bold text-gray-600 hover:text-orange-600 inline-flex items-center gap-1">
                      <Phone size={14} /> Quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── COMMON ROOF PROBLEMS ───────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Problems We Solve</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Common Roof Problems We Fix in {location.city}
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              South Florida's climate is brutal on roofs. Here are the 25 most frequent issues we address for {location.city} property owners every month:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {location.commonProblems.map((p) => (
              <div key={p} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 border border-slate-200">
                <Wrench size={16} className="text-orange-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── BRANDS WE WORK WITH ───────── */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Certified Installer for Leading Brands</h2>
            <p className="text-gray-400 mt-2">The materials we trust on every {location.city} roof.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            {location.brandsWorkedWith.map((b) => (
              <div key={b} className="bg-slate-800 border border-slate-700 rounded-lg py-4 text-sm font-semibold text-gray-200">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── LOCAL INFO CONTENT ───────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Local Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8 font-serif">
              Professional Roofing Services in {cityPhrase}
            </h2>
            {location.localInfo.map((info) => (
              <div key={info.title}>
                <h3 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">{info.title}</h3>
                <p className="leading-relaxed">{info.content}</p>
              </div>
            ))}

            <h3 className="text-2xl font-semibold mt-10 mb-3 text-gray-900">Neighborhoods We Serve in {location.city}</h3>
            <p>Dr. Roofing FL proudly serves every {location.city} neighborhood and subdivision, including:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4 not-prose">
              {location.neighborhoods.map((n) => (
                <li key={n} className="flex items-center gap-2 text-gray-700">
                  <MapPin size={14} className="text-orange-600" />
                  <span className="text-sm">{n}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Your Free Roof Inspection in {location.city}</h3>
              <p className="mb-4">No obligation · no high-pressure sales · honest written recommendation.</p>
              <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition">
                <Phone size={18} /> (754) 310-5557
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── PROJECTS GALLERY ───────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Project Gallery</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Recent Roofing Projects in {location.city}
            </h2>
            <p className="text-gray-600 mt-4">
              Browse {location.projects.length}+ recently completed roofs across {location.city} neighborhoods.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {location.projects.map((p, i) => (
              <figure key={i} className="relative rounded-xl overflow-hidden shadow-md group h-56">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.neighborhood}, ${location.city}, FL by Dr. Roofing FL`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <figcaption className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <p className="text-white font-bold text-sm">{p.title}</p>
                    <p className="text-orange-200 text-xs">{p.neighborhood} · {p.service}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── REVIEWS ───────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              What {location.city} Homeowners Say About Us
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3 text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              <span className="ml-2 text-gray-700 font-semibold text-sm">4.9 out of 5 · based on 312+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {location.reviews.map((r, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex text-orange-500 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed text-sm">"{r.text}"</p>
                <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                <p className="text-xs text-gray-500">Verified customer · {location.city}, FL</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              {location.city} Roofing — Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-md divide-y divide-slate-200">
            {location.faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-orange-50 transition"
                  >
                    <span className="font-semibold text-gray-900">{f.question}</span>
                    <Plus
                      size={22}
                      className={`text-orange-600 flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}
                    />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm">
                      {f.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone size={20} /> Speak to a roofer — (754) 310-5557
            </a>
          </div>
        </div>
      </section>

      {/* ───────── OTHER CITIES (INTERNAL LINKING) ───────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
              Nearby Cities We Serve
            </h2>
            <p className="text-gray-600 mt-2 text-sm">
              Dr. Roofing FL serves all of Broward and Miami-Dade.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {otherLocations.map((l) => (
              <Link
                key={l.citySlug}
                to={l.slug}
                className="flex items-center gap-2 bg-slate-50 hover:bg-orange-50 border border-slate-200 rounded-lg p-4 transition group"
              >
                <MapPin size={16} className="text-orange-600" />
                <span className="font-semibold text-gray-800 group-hover:text-orange-700 text-sm">
                  {l.city} Roofing
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section
        id="quote"
        className="py-20 text-white text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(234,88,12,0.82) 100%), url(${location.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Ready for a New Roof in {location.city}?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Free inspection · honest written estimate · $0-down financing · no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17543105557" className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              <Phone size={20} /> (754) 310-5557
            </a>
            <a href="mailto:info@drroofingflorida.com" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              Email a Roofer
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
