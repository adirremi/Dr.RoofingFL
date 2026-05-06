import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Shield,
  Clock,
  DollarSign,
  Hammer,
  Wind,
  Star,
  Plus,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import SEO from '../components/SEO';
import type { Service } from '../data/services';
import { services as allServices } from '../data/services';
import { locationList } from '../data/locations';

const SITE = 'https://drroofingflorida.com';

const ICON_MAP = {
  shield: Shield,
  clock: Clock,
  dollar: DollarSign,
  hammer: Hammer,
  wind: Wind,
  star: Star,
};

interface Props {
  service: Service;
}

export default function ServicePage({ service }: Props) {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}${service.path}#service`,
    serviceType: service.title,
    name: service.title,
    description: service.metaDescription,
    url: `${SITE}${service.path}`,
    image: `${SITE}${service.image}`,
    provider: {
      '@type': 'RoofingContractor',
      '@id': `${SITE}/#localbusiness`,
      name: 'Dr. Roofing FL',
      url: SITE,
      telephone: '+1-754-310-5557',
    },
    areaServed: locationList.map((l) => ({
      '@type': 'City',
      name: l.city,
      containedInPlace: { '@type': 'State', name: 'Florida' },
      sameAs: l.wikipediaUrl,
    })),
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
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/#services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE}${service.path}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.metaKeywords}
        canonical={service.path}
        image={`${SITE}${service.image}`}
        schema={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Hero */}
      <section
        className="relative text-white py-24 md:py-32"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17,24,39,0.88) 0%, rgba(234,88,12,0.55) 100%), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm text-orange-100 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/#services" className="hover:text-white">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{service.shortTitle}</span>
          </nav>

          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            Roofing Service · South Florida
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight max-w-4xl">
            {service.heroH1}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-orange-100 mb-6 max-w-3xl">
            {service.heroH2}
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-3xl leading-relaxed">
            {service.tagline}
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
              Get Free Quote →
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl text-sm">
            <div><div className="text-orange-200 text-xs">Estimates</div><div className="font-bold text-sm leading-snug max-w-xs">{service.priceRange}</div></div>
            <div><div className="text-orange-200 text-xs">Lifespan</div><div className="font-bold text-lg">{service.lifespan}</div></div>
            <div><div className="text-orange-200 text-xs">Warranty</div><div className="font-bold text-lg text-sm leading-snug">Up to 10 years (workmanship)</div></div>
            <div><div className="text-orange-200 text-xs">Inspection</div><div className="font-bold text-lg">Free</div></div>
          </div>

          <div className="mt-8 inline-flex flex-wrap items-center gap-3 bg-white/10 border border-orange-400/40 backdrop-blur px-4 py-2 rounded-full text-xs text-orange-100 uppercase tracking-[0.2em]">
            <Shield size={14} className="text-orange-300" />
            <span>Licensed &amp; Insured · FL State Lic.</span>
            <span className="text-white font-bold tracking-wider">CCC1337611</span>
          </div>
        </div>
      </section>

      {/* Intro + quick spec */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start max-w-7xl mx-auto">
            <div className="lg:col-span-2">
              <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Overview</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 font-serif">
                About {service.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{service.intro}</p>
            </div>

            <aside className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2"><dt className="text-gray-500">Estimates</dt><dd className="font-semibold text-gray-900 text-sm text-right max-w-[60%]">{service.priceRange}</dd></div>
                <div className="flex justify-between border-b border-gray-100 pb-2"><dt className="text-gray-500">Lifespan</dt><dd className="font-semibold text-gray-900">{service.lifespan}</dd></div>
                <div className="border-b border-gray-100 pb-2">
                  <dt className="text-gray-500 mb-1">Best For</dt>
                  <dd className="font-semibold text-gray-900 text-xs">{service.bestFor.join(' · ')}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 mb-1">Brands Installed</dt>
                  <dd className="font-semibold text-gray-900 text-xs">{service.brandsOffered.slice(0, 4).join(', ')}</dd>
                </div>
              </dl>
              <a href="tel:+17543105557" className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-bold transition">
                <Phone size={18} /> Free Quote
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Why Choose This System</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Benefits of {service.shortTitle} Roofing in South Florida
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b) => {
              const Icon = ICON_MAP[b.icon];
              return (
                <div key={b.title} className="bg-slate-50 rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition">
                  <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Long content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Deep Dive</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-8 font-serif">
              Everything You Need to Know About {service.title}
            </h2>
            {service.longContent.map((c) => (
              <div key={c.h3} className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">{c.h3}</h3>
                <p className="leading-relaxed">{c.body}</p>
              </div>
            ))}
            <div className="mt-10 bg-orange-50 border-l-4 border-orange-500 rounded-lg p-6 not-prose">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Start Your {service.shortTitle} Project?</h3>
              <p className="mb-4 text-gray-700">Free inspection · written quote · no obligation.</p>
              <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-bold transition">
                <Phone size={18} /> (754) 310-5557
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Our Proven 7-Step {service.shortTitle} Process
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.process.map((step, i) => (
              <li key={step.title} className="bg-white rounded-xl shadow-md border-t-4 border-orange-500 p-6 relative">
                <div className="absolute -top-4 -left-2 bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg mt-3 mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Brands */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Brands We Install</h2>
            <p className="text-gray-400 mt-2">Factory-certified for every {service.shortTitle} brand we offer.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
            {service.brandsOffered.map((b) => (
              <div key={b} className="bg-slate-800 border border-slate-700 rounded-lg py-4 text-sm font-semibold text-gray-200">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              {service.shortTitle} Installation Across South Florida
            </h2>
            <p className="text-gray-600 mt-4">
              We install {service.shortTitle.toLowerCase()} roofs in every South Florida city we serve.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {locationList.map((l) => (
              <Link
                key={l.citySlug}
                to={`/${service.slug}-${l.citySlug}`}
                className="flex items-start gap-3 bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 rounded-lg p-5 transition group"
              >
                <div className="bg-orange-600 text-white p-2 rounded-lg flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-orange-700">
                    {service.shortTitle} in {l.city}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{l.zipCodes.slice(0, 3).join(', ')}</div>
                  <div className="text-xs font-semibold text-orange-600 mt-1">{service.shortTitle} {l.city} →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              {service.shortTitle} — Frequently Asked Questions
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-md divide-y divide-slate-200">
            {service.faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-orange-50 transition"
                  >
                    <span className="font-semibold text-gray-900">{f.question}</span>
                    <Plus size={22} className={`text-orange-600 flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`} />
                  </button>
                  {open && <div className="px-5 pb-5 text-gray-700 leading-relaxed text-sm">{f.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
              Explore Our Other Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={s.path}
                className="flex items-center justify-between gap-3 bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 rounded-lg p-5 transition group"
              >
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-orange-700">{s.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{s.priceRange}</div>
                </div>
                <ArrowRight size={18} className="text-orange-600 flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 text-white text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(234,88,12,0.82) 100%), url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Ready for Your New {service.shortTitle} Roof?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Free inspection · honest written estimate · ask about third-party financing · no obligation.
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
