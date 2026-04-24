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
  ArrowRight,
  Wrench,
  Home,
  Building2,
  Sparkles,
  ClipboardCheck,
  FileText,
  Truck,
  BadgeCheck,
  Quote,
} from 'lucide-react';
import SEO from '../components/SEO';
import RealWorkGallery from '../components/RealWorkGallery';
import QuoteForm from '../components/QuoteForm';
import BrandsMarquee from '../components/BrandsMarquee';
import ShingleColors from '../components/ShingleColors';
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
    { num: 'Financing', label: 'Options (ask us)' },
    { num: '24/7', label: 'Storm Response' },
    { num: 'HVHZ', label: 'Code-Focused Work' },
    { num: 'Free', label: 'Written Estimates' },
  ];

  const pillars = [
    {
      icon: Wrench,
      title: 'Roof Repair',
      text: 'Fast, effective repair for leaks, storm damage, missing shingles, flashing failures — any roof, any material, any neighborhood.',
      href: '/roof-repair',
    },
    {
      icon: Shield,
      title: 'Roof Maintenance',
      text: 'Annual inspections and tune-ups extend roof life by 10+ years. We catch small problems before they become insurance claims.',
      href: '/services',
    },
    {
      icon: Home,
      title: 'Roof Replacement',
      text: 'Complete re-roofs with tile, metal, architectural shingle or flat/TPO — engineered for Florida\'s HVHZ wind and rain loads.',
      href: '/services',
    },
    {
      icon: Building2,
      title: 'New Construction',
      text: 'Roofing systems for new-build homes, multifamily and commercial. Designed with the architect, installed by FL-certified crews.',
      href: '/services',
    },
  ];

  const journey = [
    {
      step: '01',
      icon: ClipboardCheck,
      title: 'Free Inspection',
      text: 'Schedule a no-pressure rooftop inspection — drone footage, moisture readings, written report with photos.',
    },
    {
      step: '02',
      icon: FileText,
      title: 'Transparent Quote',
      text: 'Line-item written estimate — materials, labor, permits, tear-off, disposal. No hidden fees, signed same-day if you choose.',
    },
    {
      step: '03',
      icon: Truck,
      title: 'Precision Install',
      text: 'Crews install per manufacturer and code. We protect the work area, respect your property, and keep neighbors in mind during production.',
    },
    {
      step: '04',
      icon: BadgeCheck,
      title: 'Close-Out & Warranty',
      text: 'City inspection, manufacturer warranty registration (where applicable), and up to 10 years of written workmanship on qualifying work per your contract. Details vary by job.',
    },
  ];

  const whyUs = [
    { icon: DollarSign, title: 'Flexible Financing', text: 'We work with several lenders; available plans depend on approval. Ask during your estimate.' },
    { icon: Hammer, title: 'Premium Materials', text: 'We install major manufacturer systems used in South Florida, including GAF, Owens Corning, CertainTeed, TAMKO, IKO, and Carlisle, per project and code.' },
    { icon: Shield, title: 'Licensed & Insured', text: 'Florida Certified Roofing Contractor with full general liability and workers\' comp.' },
    { icon: CheckCircle, title: 'Free Inspections', text: 'Honest, no-pressure, written inspection reports — always free in South Florida.' },
    { icon: Wind, title: 'Hurricane Ready', text: 'Every install meets Florida Building Code 2023 HVHZ wind requirements.' },
    { icon: Star, title: 'Storm Response', text: 'Emergency tarping, leak-stop service and insurance documentation — available 24/7.' },
  ];

  return (
    <>
      <SEO
        title="Dr. Roofing FL | Roofing Contractor in Hollywood, Miami & South Florida"
        description="Licensed, insured Florida roofing contractor. Free inspections, financing options, Hollywood, Miami, Fort Lauderdale, Pembroke Pines, Miramar, Davie, Hallandale Beach, Dania Beach & Aventura. Call (754) 310-5557."
        keywords="roofing contractor Hollywood FL, roofer Miami FL, roof repair Broward, roof replacement Miami-Dade, tile roof Florida, metal roof Hollywood, free roof inspection South Florida, hurricane roof Florida"
        canonical="/"
        image={`${SITE}/tile_roofing.webp`}
        schema={[homeFaqSchema, breadcrumbSchema]}
      />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        className="relative min-h-[88vh] md:min-h-screen flex items-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.72) 0%, rgba(15,23,42,0.85) 60%, rgba(15,23,42,0.95) 100%), url(/hero_lcp.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Decorative orange glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4 relative z-10 py-28 md:py-36">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-600/90 backdrop-blur text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-8 shadow-lg">
              <Sparkles size={14} />
              South Florida's Roofing Specialists
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] mb-6 tracking-tight">
              Do It <span className="text-orange-500 italic">Right</span><br className="hidden md:block" /> The First Time.
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
              Dr. Roofing FL is Hollywood's licensed, insured, HVHZ-certified roofing contractor — serving every neighborhood across Broward, Miami-Dade and Palm Beach Counties.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="tel:+17543105557"
                className="group inline-flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-500 px-8 py-5 rounded-sm text-base md:text-lg font-bold shadow-2xl shadow-orange-900/40 transition-all"
              >
                <Phone size={20} /> Call (754) 310-5557
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 px-8 py-5 rounded-sm text-base md:text-lg font-bold transition-all"
              >
                Get Free Estimate
              </a>
            </div>

            {/* Hero stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pt-8 border-t border-white/15 max-w-3xl">
              {homeStats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl md:text-5xl text-orange-400 mb-1">{s.num}</div>
                  <div className="text-[11px] md:text-xs text-gray-300 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" aria-hidden="true" />
      </section>

      {/* ═══════════════════ TRUST BAR ═══════════════════ */}
      <section className="bg-slate-900 text-white py-6 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 font-semibold">
            <span className="inline-flex items-center gap-2"><Shield size={16} className="text-orange-500" /> Licensed Florida Roofer</span>
            <span className="hidden md:inline w-px h-4 bg-white/20" />
            <span className="inline-flex items-center gap-2"><Award size={16} className="text-orange-500" /> HVHZ Certified</span>
            <span className="hidden md:inline w-px h-4 bg-white/20" />
            <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-orange-500" /> Major brand systems</span>
            <span className="hidden md:inline w-px h-4 bg-white/20" />
            <span className="inline-flex items-center gap-2"><CheckCircle size={16} className="text-orange-500" /> Free Inspections</span>
            <span className="hidden md:inline w-px h-4 bg-white/20" />
            <span className="inline-flex items-center gap-2"><Clock size={16} className="text-orange-500" /> 24/7 Storm Response</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════ BRANDS / CERTIFICATIONS MARQUEE ═══════════════════ */}
      <BrandsMarquee />

      {/* ═══════════════════ INTRO + 4 PILLARS ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-5">
              Everything You Need · Under One Roof
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-6">
              Leading Roofing Company<br />
              <span className="italic text-orange-600">Hollywood, FL</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dr. Roofing FL serves Hollywood, Miami, Fort Lauderdale, and the rest of South Florida for repair, replacement, maintenance, and new construction. We work with common systems built for Florida’s sun, rain, and storms: asphalt shingle, standing-seam metal, clay and concrete tile, and TPO/PVC flat systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {pillars.map((p) => (
              <Link
                key={p.title}
                to={p.href}
                className="group relative bg-white border border-slate-200 hover:border-orange-500 rounded-sm p-8 transition-all hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-orange-600 group-hover:w-full transition-all duration-500" aria-hidden="true" />
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 group-hover:bg-orange-600 text-white mb-6 transition-colors">
                  <p.icon size={28} strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl text-slate-900 mb-3 leading-tight">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{p.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 uppercase tracking-widest">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICES — EDITORIAL ═══════════════════ */}
      <section id="services" className="bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
              Our Roofing Services
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-6">
              Premium Roofing for<br />
              <span className="italic text-orange-600">Every Florida Home</span>
            </h2>
            <p className="text-lg text-gray-600">
              Every system engineered for HVHZ wind ratings, UV-intense sun, afternoon thunderstorms and 90%+ humidity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((s, i) => (
              <article
                key={s.slug}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col"
              >
                <Link to={s.path} className="block relative h-64 overflow-hidden">
                  <img
                    src={s.image}
                    alt={`${s.shortTitle} installation by Dr. Roofing FL in South Florida`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute top-5 left-5 bg-orange-600 text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                    0{i + 1} / 0{services.length}
                  </div>
                  <h3 className="absolute bottom-5 left-5 right-5 font-serif text-2xl md:text-3xl text-white leading-tight">
                    {s.title}
                  </h3>
                </Link>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.description}</p>
                  <ul className="text-sm text-gray-700 space-y-2 mb-6">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link to={s.path} className="text-sm font-bold text-slate-900 hover:text-orange-600 uppercase tracking-widest inline-flex items-center gap-2 group/btn">
                      Details <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <a href="tel:+17543105557" className="text-sm font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1.5">
                      <Phone size={14} /> Free Quote
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SHINGLE COLOR OPTIONS ═══════════════════ */}
      <ShingleColors />

      {/* ═══════════════════ YOUR JOURNEY (4 STEPS) ═══════════════════ */}
      <section className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'url(/tile_roofing.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} aria-hidden="true" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="block text-xs font-bold text-orange-500 uppercase tracking-[0.3em] mb-4">
              Your Journey With Us
            </span>
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-6">
              From First Call to<br />
              <span className="italic text-orange-500">Project Close-Out</span>
            </h2>
            <p className="text-lg text-gray-300">
              A clear, honest process — no pushy salesmen, no hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {journey.map((j, i) => (
              <div key={j.step} className="relative">
                {/* Connecting line (desktop) */}
                {i < journey.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-px bg-gradient-to-r from-orange-500/50 to-transparent" aria-hidden="true" />
                )}
                <div className="relative bg-white/5 border border-white/10 rounded-sm p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="font-serif text-5xl text-orange-500 leading-none">{j.step}</div>
                    <div className="w-10 h-10 rounded-full bg-orange-600/20 border border-orange-500/40 flex items-center justify-center">
                      <j.icon size={18} className="text-orange-400" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl mb-3">{j.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{j.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="#quote"
              className="inline-flex items-center gap-3 bg-orange-600 hover:bg-orange-500 px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm shadow-2xl shadow-orange-900/40 transition-all"
            >
              Start Step 1 — Book My Inspection <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ GALLERY ═══════════════════ */}
      <RealWorkGallery />

      {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
                Why Choose Dr. Roofing FL
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-[1.1] mb-6">
                Six Reasons Florida<br />
                <span className="italic text-orange-600">Homeowners Choose Us</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Honest inspections, written line-item estimates, code-focused installations, and responsive help when a storm rolls in.
              </p>
              <a
                href="tel:+17543105557"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-orange-600 text-white px-6 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-colors"
              >
                <Phone size={18} /> Talk to a Roofer
              </a>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((w, i) => (
                <div
                  key={w.title}
                  className="relative bg-slate-50 border border-slate-200 hover:border-orange-500 rounded-sm p-6 transition-all hover:shadow-xl"
                >
                  <div className="absolute top-5 right-5 font-serif text-3xl text-slate-200 leading-none">
                    0{i + 1}
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-600/10 text-orange-600 mb-4">
                    <w.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TESTIMONIALS (only when reviews exist) ═══════════════════ */}
      {reviews.length > 0 && (
        <section id="reviews" className="py-24 md:py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
                Our Testimonials
              </span>
              <h2 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-6">
                What South Florida<br />
                <span className="italic text-orange-600">Homeowners Say</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {reviews.slice(0, 6).map((r, i) => (
                <figure
                  key={i}
                  className="relative bg-white rounded-sm p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-orange-400 transition-all"
                >
                  <Quote
                    size={40}
                    className="absolute -top-4 left-6 text-orange-600 fill-orange-600"
                    aria-hidden="true"
                  />
                  <div className="flex text-orange-500 mb-4 mt-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed font-light italic">
                    &ldquo;{r.text}&rdquo;
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 text-white font-bold flex items-center justify-center text-sm font-serif">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{r.name}</div>
                      <div className="text-xs text-gray-500">{r.city} · {r.service}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════ MAP + NAP ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
              Visit or Call Us
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1]">
              Find Us in<br />
              <span className="italic text-orange-600">Hollywood, Florida</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="lg:col-span-2 rounded-sm overflow-hidden shadow-xl border border-slate-200">
              <iframe
                src="https://maps.google.com/maps?q=3951+SW+41st+St,+Hollywood,+FL+33023&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Roofing FL · 3951 SW 41st St, Hollywood, FL 33023"
              />
            </div>
            <aside className="bg-slate-900 text-white rounded-sm p-8 shadow-xl flex flex-col justify-between">
              <div>
                <span className="block text-xs font-bold text-orange-400 uppercase tracking-[0.3em] mb-4">
                  Dr. Roofing FL
                </span>
                <h3 className="font-serif text-3xl mb-8">Headquarters</h3>
                <div className="space-y-5 text-sm text-gray-200">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">3951 SW 41st St<br />Hollywood, FL 33023</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <a href="tel:+17543105557" className="hover:text-orange-400 font-semibold">(754) 310-5557</a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Mon–Sat · 7:00 AM – 7:00 PM<br />Sun · Emergency only</span>
                  </div>
                </div>
              </div>
              <a
                href="tel:+17543105557"
                className="mt-8 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 px-5 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-colors"
              >
                <Phone size={18} /> Call Now
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SERVICE AREAS ═══════════════════ */}
      <section id="areas" className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
              Service Areas
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-6">
              Your South Florida<br />
              <span className="italic text-orange-600">Roofer Next Door</span>
            </h2>
            <p className="text-lg text-gray-600">
              Based in Hollywood, proudly serving {locationList.length}+ cities across Broward, Miami-Dade & Palm Beach.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
            {locationList.map((l) => (
              <Link
                key={l.citySlug}
                to={l.slug}
                className="group bg-white border border-slate-200 hover:border-orange-500 hover:bg-orange-50 rounded-sm p-4 transition-all"
              >
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-orange-700 leading-tight truncate">
                      {l.city}
                    </h3>
                    <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider">
                      {l.zipCodes[0]}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ABOUT / CLIMATE ═══════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4 text-center">
            About South Florida Roofing
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 leading-[1.1] mb-10 text-center">
            Why Florida Needs<br />
            <span className="italic text-orange-600">Specialized Roofing</span>
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 prose-headings:font-serif prose-headings:text-slate-900 prose-strong:text-slate-900">
            <p>
              South Florida's climate presents specific challenges for roofing systems. Intense UV, 62 inches of annual rainfall, 90%+ humidity, afternoon thunderstorms from May through October, and High-Velocity Hurricane Zone (HVHZ) wind ratings require specialized knowledge and materials built for these extremes. Every Dr. Roofing FL installation throughout Hollywood, Miami, Fort Lauderdale, and surrounding cities is engineered specifically for Florida conditions.
            </p>
            <h3 className="!mt-10 !text-2xl">Hurricane Preparedness &amp; Roof Maintenance</h3>
            <p>
              A properly installed and maintained roof is your home's first line of defense. We recommend annual inspections before hurricane season begins to identify lifted tiles, cracked flashing, aging underlayment, and ventilation issues before they become emergencies. Our storm-response team is on call 24/7 for emergency tarping, leak-stop service and insurance claim documentation.
            </p>
            <h3 className="!mt-10 !text-2xl">Quality Roofing Materials for Florida's Climate</h3>
            <p>
              Different roofing materials offer varying levels of protection and longevity. <strong>Concrete and clay tile</strong> deliver 50+ year life and exceptional heat resistance. <strong>Standing-seam metal</strong> offers 50–70 year life with outstanding wind and salt-air performance. <strong>Class-4 impact-rated architectural shingles</strong> are the affordable choice, rated for 130 mph winds and algae-resistant. <strong>TPO and PVC flat roofs</strong> reflect heat and deliver 20+ year NDL warranties on commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section id="faq" className="py-24 md:py-32 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
              FAQ
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1]">
              Frequently Asked<br />
              <span className="italic text-orange-600">Questions</span>
            </h2>
            <p className="text-gray-600 mt-5">
              Everything South Florida homeowners need to know before starting a roofing project.
            </p>
          </div>
          <div className="bg-white rounded-sm shadow-md divide-y divide-slate-200">
            {globalFaqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-orange-50 transition-colors"
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-slate-900 pr-4 text-base md:text-lg">{f.question}</span>
                    <Plus
                      size={24}
                      className={`text-orange-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                    />
                  </button>
                  {open && (
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">{f.answer}</div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <a
              href="tel:+17543105557"
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-orange-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-colors"
            >
              <Phone size={18} /> Still have questions? Call us
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════ QUOTE FORM ═══════════════════ */}
      <section id="quote" className="py-24 md:py-32 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
              Get Your Free Quote
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1] mb-4">
              Free Estimate in<br />
              <span className="italic text-orange-600">24 Hours</span>
            </h2>
            <p className="text-lg text-gray-600">
              No obligation, no pressure — just honest advice from a local licensed roofing team.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ═══════════════════ FINAL CTA ═══════════════════ */}
      <section
        className="relative py-24 md:py-32 text-white text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.94) 0%, rgba(194,65,12,0.86) 100%), url(/metal_roofing.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" aria-hidden="true" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <span className="block text-xs font-bold text-orange-300 uppercase tracking-[0.3em] mb-5">
            Ready When You Are
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            Protect Your Home.<br />
            <span className="italic text-orange-400">Do It Right the First Time.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
            Schedule a free, no-obligation inspection today. Our licensed team delivers a written quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17543105557"
              className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 hover:bg-orange-50 px-8 py-5 rounded-sm font-bold text-base md:text-lg uppercase tracking-widest shadow-2xl transition-all"
            >
              <Phone size={20} /> (754) 310-5557
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 px-8 py-5 rounded-sm font-bold text-base md:text-lg uppercase tracking-widest shadow-2xl transition-all"
            >
              Free Estimate
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-200">
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-orange-400" />3951 SW 41st St, Hollywood, FL 33023</span>
            <span className="w-px h-4 bg-white/30 hidden md:inline" />
            <span className="inline-flex items-center gap-2"><Clock size={15} className="text-orange-400" />Mon–Sat · 7AM–7PM</span>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs text-gray-300 uppercase tracking-widest">
            <span className="inline-flex items-center gap-2"><Shield size={13} />Licensed &amp; Insured</span>
            <span className="w-px h-3 bg-white/30 hidden md:inline" />
            <span className="inline-flex items-center gap-2"><Award size={13} />HVHZ Certified</span>
            <span className="w-px h-3 bg-white/30 hidden md:inline" />
            <span className="inline-flex items-center gap-2"><BadgeCheck size={13} />Major brand systems</span>
          </div>
        </div>
      </section>
    </>
  );
}
