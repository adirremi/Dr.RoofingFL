import { Link } from 'react-router-dom';
import { Phone, Shield, Award, Users, Wrench, MapPin, Star, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { locationList } from '../data/locations';
import { services } from '../data/services';

const SITE = 'https://drroofingflorida.com';

const values = [
  { icon: Shield, title: 'Licensed & Insured', text: 'Florida Certified Roofing Contractor, fully bonded, $2M general liability, workers\' comp.' },
  { icon: Award, title: 'Factory Certified', text: 'GAF Master Elite, Owens Corning Platinum, Eagle, Boral, US Tile — top 3% of Florida roofers.' },
  { icon: Users, title: 'Locally Owned', text: 'South Florida born-and-bred. Our crews live here, our families went to school here.' },
  { icon: Wrench, title: 'Hurricane Experts', text: 'Every install meets or exceeds 2023 FBC HVHZ — Miami-Dade NOA-approved systems.' },
  { icon: Star, title: '4.9★ · 312+ Reviews', text: 'Google, Yelp, Facebook, BBB, Home Advisor, Angi — the reviews speak for themselves.' },
  { icon: Heart, title: 'Customer First', text: 'No pressure quotes, no surprise charges, no junk contracts. Ever.' },
];

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE}/about#aboutpage`,
    url: `${SITE}/about`,
    mainEntity: { '@type': 'RoofingContractor', '@id': `${SITE}/#localbusiness` },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE}/about` },
    ],
  };

  return (
    <>
      <SEO
        title="About Dr. Roofing FL | Licensed Hollywood & Miami Roofing Contractor"
        description="About Dr. Roofing FL — family-owned, licensed Florida roofing contractor serving Hollywood, Miami, Fort Lauderdale & all of South Florida since 2011."
        keywords="about Dr Roofing FL, Hollywood roofing company, licensed Florida roofer, South Florida roofing contractor"
        canonical="/about"
        schema={[aboutSchema, breadcrumbSchema]}
      />

      <section className="relative py-20 md:py-28 bg-slate-900 text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url(/tile_roofing.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="container mx-auto px-4 relative max-w-5xl">
          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">About Us</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">South Florida's Most Trusted Roofing Contractor</h1>
          <p className="text-xl text-slate-200 max-w-3xl leading-relaxed">
            Dr. Roofing FL is a family-owned, Florida-licensed roofing contractor serving Hollywood, Miami,
            Fort Lauderdale and all of South Florida since 2011. Licensed · Bonded · Insured · HVHZ-certified.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6 font-serif">Built by Roofers, For Florida Homeowners</h2>
          <div className="prose prose-lg text-gray-700">
            <p>
              Dr. Roofing FL was founded in 2011 by roofers who grew up on South Florida rooftops. We started because
              we saw too many local homeowners getting ripped off by out-of-state storm chasers who would show up
              after a hurricane, collect the insurance check, and leave town. We believed South Florida deserved better.
            </p>
            <p>
              Fifteen years and thousands of roofs later, we still operate with the same core principles: be honest with
              every quote, use the best materials we can source, stand behind our work, and treat every home like our own.
              Today we are one of South Florida's few GAF Master Elite AND Owens Corning Platinum Preferred contractors — a
              distinction held by fewer than 3% of Florida roofers.
            </p>
            <p>
              We specialize in HVHZ-compliant tile, metal, shingle, and flat-roof installations across Broward and Miami-Dade
              counties. Every job is permitted, every product is Miami-Dade NOA-approved, and every install is backed by
              a manufacturer warranty plus our own 10-year workmanship warranty.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="uppercase tracking-widest text-xs font-bold text-orange-600">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 font-serif">Our Values & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 border-l-4 border-orange-500 shadow-sm hover:shadow-md transition">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <v.icon size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <span className="uppercase tracking-widest text-xs font-bold text-orange-600">Where We Work</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5 font-serif">Service Areas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {locationList.map((l) => (
                  <Link key={l.citySlug} to={l.slug} className="inline-flex items-center gap-2 bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 rounded-lg px-4 py-2 text-sm transition">
                    <MapPin size={14} className="text-orange-600" /> {l.city}, FL
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="uppercase tracking-widest text-xs font-bold text-orange-600">What We Do</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5 font-serif">Our Services</h2>
              <div className="space-y-2">
                {services.map((s) => (
                  <Link key={s.slug} to={s.path} className="flex items-center justify-between gap-2 bg-slate-50 hover:bg-orange-50 border border-slate-200 hover:border-orange-300 rounded-lg px-4 py-3 text-sm font-semibold transition">
                    {s.title}
                    <span className="text-orange-600">→</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Work With Dr. Roofing FL</h2>
          <p className="mb-6 text-orange-50">Free inspection · written quote · no obligation · $0-down financing.</p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> (754) 310-5557
          </a>
        </div>
      </section>
    </>
  );
}
