import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { geoArticles } from '../data/geoArticles';

const SITE = 'https://drroofingflorida.com';

export default function BlogIndexPage() {
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE}/blog#blog`,
    url: `${SITE}/blog`,
    name: 'Dr. Roofing FL — South Florida Roofing & City Guides',
    description:
      'Guides to South Florida cities, roofing decisions, and everything a Hollywood, Miami, or Fort Lauderdale homeowner needs to know.',
    publisher: { '@type': 'Organization', name: 'Dr. Roofing FL', '@id': `${SITE}/#organization` },
    blogPost: geoArticles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${SITE}${a.path}`,
      datePublished: a.publishedDate,
      dateModified: a.modifiedDate,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
    ],
  };

  return (
    <>
      <SEO
        title="Blog & City Guides | Dr. Roofing FL"
        description="In-depth South Florida city guides, roofing buyer guides, hurricane preparation, insurance tips & more from Dr. Roofing FL."
        keywords="South Florida roofing blog, Hollywood FL guide, Miami FL guide, Broward city guides, roofing buyer guide"
        canonical="/blog"
        schema={[blogSchema, breadcrumbSchema]}
      />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            Blog · City Guides · Buyer Guides
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">The Dr. Roofing FL Blog</h1>
          <p className="text-lg text-slate-300">
            In-depth South Florida city guides and roofing knowledge from a licensed local contractor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 font-serif mb-2">South Florida City Guides</h2>
            <p className="text-gray-600">
              Complete local guides to every city we serve — history, neighborhoods, climate, schools, housing, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geoArticles.map((a) => (
              <Link
                key={a.slug}
                to={a.path}
                className="bg-white rounded-xl shadow-md hover:shadow-xl border border-slate-200 overflow-hidden group transition"
              >
                <div
                  className="aspect-video bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.45), rgba(234,88,12,0.35)), url(${a.heroImage})` }}
                >
                  <div className="p-4 text-white">
                    <div className="inline-flex items-center gap-1 bg-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      <MapPin size={12} /> {a.city}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition leading-snug">
                    {a.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1"><Calendar size={12} /> {new Date(a.publishedDate).toLocaleDateString()}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={12} /> {a.readingTime} min</span>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1 text-orange-600 font-bold text-sm">
                    Read Guide <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Need a Roofer in South Florida?</h2>
          <p className="mb-6 text-orange-50">Free inspection. Written quote. HVHZ-certified install. $0-down financing.</p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> (754) 310-5557
          </a>
        </div>
      </section>
    </>
  );
}
