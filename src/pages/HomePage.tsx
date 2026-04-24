import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Shield,
  Award,
  Clock,
  CheckCircle,
  MapPin,
  Star,
  Plus,
  DollarSign,
  Hammer,
  Wind,
  Users,
} from 'lucide-react';
import SEO from '../components/SEO';
import RealWorkGallery from '../components/RealWorkGallery';
import QuoteForm from '../components/QuoteForm';
import { locationList } from '../data/locations';
import { services } from '../data/services';
import { reviews } from '../data/reviews';
import { globalFaqs } from '../data/faqs';

const SITE = 'https://drroofingflorida.com';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const homeFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: globalFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    ],
  };

  const homeStats = [
    { num: '500+', label: 'Roofs Completed' },
    { num: '4.9★', label: '312+ 5-star reviews' },
    { num: '15+', label: 'Years Experience' },
    { num: '$0', label: 'Down Financing' },
  ];

  const whyUs = [
    { icon: DollarSign, title: 'No Money Down Financing', text: 'Get a new roof with $0 down, no minimum credit required, and up to 16 months with no payments.' },
    { icon: Hammer, title: 'Best Metal Roof Prices in FL', text: 'Competitive pricing on premium standing-seam and exposed-fastener metal — the top pick for Florida homes.' },
    { icon: Shield, title: 'Licensed & Insured', text: 'Florida Certified Roofing Contractor with full liability and workers\' compensation insurance.' },
    { icon: CheckCircle, title: 'Free Roof Inspections', text: 'Honest, no-pressure inspections across Hollywood, Miami and all of South Florida.' },
    { icon: Wind, title: 'Hurricane-Ready Systems', text: 'Every installation meets Florida Building Code HVHZ requirements for wind, fastening & water barrier.' },
    { icon: Star, title: '4.9★ Rated Service', text: '312+ five-star reviews from homeowners in Broward and Miami-Dade counties.' },
  ];

  return (
    <>
      <SEO
        title="Dr. Roofing FL | #1 Roofing Contractor in Hollywood, Miami & South Florida"
        description="South Florida's top-rated roofing contractor. Free inspections, $0-down financing, licensed & insured. Hollywood, Miami, Fort Lauderdale, Pembroke Pines, Miramar, Davie, Hallandale Beach, Dania Beach & Aventura. Call (754) 310-5557."
        keywords="roofing contractor Hollywood FL, roofer Miami FL, roof repair Broward, roof replacement Miami-Dade, tile roof Florida, metal roof Hollywood, free roof inspection South Florida, hurricane roof Florida"
        canonical="/"
        image={`${SITE}/tile_roofing.jpeg`}
        schema={[homeFaqSchema, breadcrumbSchema]}
      />

      {/* ───────── HERO ───────── */}
      <section
        className="relative text-white py-24 md:py-36"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17,24,39,0.88) 0%, rgba(234,88,12,0.55) 100%), url(/tile_roofing.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-600/90 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            <Star size={14} fill="currentColor" /> Hollywood's Trusted Roofing Experts
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 max-w-4xl">
            Dr. Roofing FL — #1 Roofing Contractor in Hollywood, Miami & All of South Florida
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-orange-100 mb-8 max-w-3xl">
            Licensed Roof Replacement, Repair, Tile, Metal & Flat Roofing Contractor Near You
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mb-10 leading-relaxed">
            From full hurricane-rated roof replacements to 24/7 emergency leak repairs, Dr. Roofing FL delivers unmatched craftsmanship, honest pricing, and peace of mind to homeowners and businesses across Broward and Miami-Dade counties.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a href="tel:+17543105557" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              <Phone size={22} /> Call (754) 310-5557
            </a>
            <a href="#quote" className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              Get Free Estimate →
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {homeStats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-orange-300 font-serif">{s.num}</div>
                <div className="text-xs md:text-sm text-gray-200 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SERVICE CITIES GRID ───────── */}
      <section id="areas" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Roofing Contractor Near You — All of South Florida
            </h2>
            <p className="text-gray-600 mt-4">
              Based in Hollywood, we proudly serve every neighborhood in Broward and Miami-Dade Counties.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {locationList.map((l) => (
              <Link
                key={l.citySlug}
                to={l.slug}
                className="bg-white border-2 border-slate-200 hover:border-orange-500 hover:shadow-xl rounded-xl p-6 transition group"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-orange-600 text-white p-2 rounded-lg flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-700">
                      {l.city} Roofing
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      ZIP: {l.zipCodes.slice(0, 3).join(', ')}
                    </p>
                    <p className="text-xs font-semibold text-orange-600 mt-2">
                      View {l.city} service →
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Also serving: Pompano Beach, Coral Springs, Plantation, Sunrise, Deerfield Beach, Boca Raton, Delray Beach, Coconut Creek, Weston & Sunny Isles.
          </p>
        </div>
      </section>

      {/* ───────── SERVICES ───────── */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Full-Service Roofing Systems Built for South Florida
            </h2>
            <p className="text-gray-600 mt-4">
              Tile, metal, shingle, flat/TPO, repairs and storm restoration — every roof we install meets the Florida Building Code 2023 HVHZ requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s) => (
              <article key={s.slug} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
                <Link to={s.path} className="block h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.shortTitle} installation by Dr. Roofing FL in South Florida`}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <Link to={s.path} className="hover:text-orange-600">{s.title}</Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{s.description}</p>
                  <ul className="text-xs text-gray-700 space-y-1 mb-5">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <Link to={s.path} className="text-sm font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1">
                      Learn More →
                    </Link>
                    <a href="tel:+17543105557" className="text-sm font-bold text-gray-600 hover:text-orange-600 inline-flex items-center gap-1">
                      <Phone size={14} /> Free quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RealWorkGallery />

      {/* ───────── WHY CHOOSE US ───────── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-400">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif">
              Why Homeowners Trust Dr. Roofing FL
            </h2>
            <p className="text-gray-300 mt-4">
              Expert craftsmanship, transparent pricing, and flexible financing — making your roofing project stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-slate-800/60 border border-slate-700 hover:border-orange-500 rounded-xl p-7 transition">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <w.icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2">{w.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── GMB MAP + NAP ───────── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Visit or Call Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Find Dr. Roofing FL in Hollywood, Florida
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=3951+SW+41st+St,+Hollywood,+FL+33023&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Roofing FL · 3951 SW 41st St, Hollywood, FL 33023"
              />
            </div>
            <aside className="bg-slate-900 text-white rounded-xl p-7 shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">Dr. Roofing FL</h3>
                <div className="space-y-4 text-sm text-gray-200">
                  <div className="flex gap-3"><MapPin size={18} className="text-orange-400 flex-shrink-0 mt-0.5" /><span>3951 SW 41st St<br />Hollywood, FL 33023</span></div>
                  <div className="flex gap-3"><Phone size={18} className="text-orange-400 flex-shrink-0 mt-0.5" /><a href="tel:+17543105557" className="hover:text-orange-400">(754) 310-5557</a></div>
                  <div className="flex gap-3"><Clock size={18} className="text-orange-400 flex-shrink-0 mt-0.5" /><span>Mon–Sat · 7:00 AM – 7:00 PM<br />Sun · Emergency only</span></div>
                </div>
              </div>
              <a href="tel:+17543105557" className="mt-6 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-5 py-3 rounded-lg font-bold transition">
                <Phone size={18} /> Call Now
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ───────── REVIEWS ───────── */}
      <section id="reviews" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              What Our South Florida Customers Say
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3 text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <span className="ml-2 text-gray-700 font-semibold">4.9 · 312+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex text-orange-500 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed text-sm">"{r.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.city} · {r.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── ABOUT / CLIMATE ───────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none text-gray-700">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">About South Florida Roofing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 font-serif">
              Why South Florida Needs Specialized Roofing
            </h2>
            <p>
              South Florida's climate presents specific challenges for roofing systems. Intense UV, 62 inches of annual rainfall, 90%+ humidity, afternoon thunderstorms from May through October, and High-Velocity Hurricane Zone (HVHZ) wind ratings require specialized knowledge and materials built for these extremes. Dr. Roofing FL has installed 500+ roofs throughout Hollywood, Miami, Fort Lauderdale, and surrounding cities — every single one engineered for Florida.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Hurricane Preparedness & Roof Maintenance</h3>
            <p>
              A properly installed and maintained roof is your home's first line of defense. We recommend annual inspections before hurricane season begins to identify lifted tiles, cracked flashing, aging underlayment, and ventilation issues before they become emergencies. Our storm-response team is on call 24/7 for emergency tarping, leak-stop service and insurance claim documentation.
            </p>
            <h3 className="text-2xl font-semibold mt-8 mb-3">Quality Roofing Materials for Florida's Climate</h3>
            <p>
              Different roofing materials offer varying levels of protection and longevity. <strong>Concrete and clay tile</strong> deliver 50+ year life and exceptional heat resistance. <strong>Standing-seam metal</strong> offers 50–70 year life with outstanding wind and salt-air performance. <strong>Class-4 impact-rated architectural shingles</strong> are the affordable choice, rated for 130 mph winds and algae-resistant. <strong>TPO and PVC flat roofs</strong> reflect heat and deliver 20+ year NDL warranties on commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section id="faq" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mt-4">
              Everything South Florida homeowners need to know before starting a roofing project.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md divide-y divide-slate-200">
            {globalFaqs.map((f, i) => {
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
          <div className="text-center mt-10">
            <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition">
              <Phone size={20} /> Speak to a roofer — (754) 310-5557
            </a>
          </div>
        </div>
      </section>

      {/* ───────── QUOTE FORM ───────── */}
      <section id="quote" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Get Your Free Roof Estimate
            </h2>
            <p className="text-lg text-gray-700">
              No-obligation quote for your South Florida roofing project.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ───────── FINAL CTA ───────── */}
      <section
        className="py-20 text-white text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(234,88,12,0.82) 100%), url(/metal_roofing.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Ready to Protect Your South Florida Home?
          </h2>
          <p className="text-lg text-gray-100 mb-8">
            Schedule your free roof inspection today. No obligation, no pressure — just honest advice from Hollywood's top-rated roofing experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17543105557" className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              <Phone size={20} /> (754) 310-5557
            </a>
            <a href="mailto:info@drroofingflorida.com" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
              Email a Roofer
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-orange-100 text-sm">
            <MapPin size={16} />
            <span>3951 SW 41st St, Hollywood, FL 33023 · Mon–Sat 7AM–7PM</span>
          </div>
          <div className="mt-3 flex items-center justify-center gap-4 text-xs text-gray-300">
            <span className="inline-flex items-center gap-1"><Users size={14}/>Licensed & Insured</span>
            <span className="inline-flex items-center gap-1"><Award size={14}/>HVHZ Certified</span>
          </div>
        </div>
      </section>
    </>
  );
}
