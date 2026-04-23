import { Link } from 'react-router-dom';
import { Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { projects } from '../data/projects';

const SITE = 'https://drroofingflorida.com';

export default function ProjectsIndexPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE}/projects#collection`,
    name: 'Dr. Roofing FL Project Portfolio',
    description:
      'Real roofing projects completed by Dr. Roofing FL across South Florida — Hollywood, Miami, Fort Lauderdale, Pembroke Pines and more. Tile, metal, shingle, flat/TPO, repair and storm restoration.',
    url: `${SITE}/projects`,
    hasPart: projects.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      url: `${SITE}${p.path}`,
      datePublished: p.completedDate,
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE}/projects` },
    ],
  };

  return (
    <>
      <SEO
        title="Roofing Project Portfolio — Real Work Across South Florida | Dr. Roofing FL"
        description="Real roofing projects by Dr. Roofing FL — tile, metal, shingle, flat/TPO and storm restoration across Hollywood, Miami, Fort Lauderdale, Pembroke Pines and more."
        keywords="roofing projects Florida, roofing portfolio Hollywood FL, roofing case studies South Florida, Dr. Roofing FL projects"
        canonical="/projects"
        schema={[collectionSchema, breadcrumbSchema]}
      />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif">Project Portfolio</h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto">
            Every project below was completed by our in-house crews in South Florida — no subcontractors. Real addresses, real materials, real warranties.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.slug} className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                <Link to={p.path} className="block h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.title} — Dr. Roofing FL project in ${p.city}, FL`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </Link>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <MapPin size={12} className="text-orange-600" />
                    <span>{p.neighborhood}, {p.city}</span>
                    <span>·</span>
                    <Calendar size={12} />
                    <span>{new Date(p.completedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    <Link to={p.path} className="hover:text-orange-600">{p.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">{p.summary}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded font-semibold">{p.serviceLabel}</span>
                    {p.squares > 0 && <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded">{p.squares} sq</span>}
                    <span className="bg-slate-200 text-slate-700 px-2 py-1 rounded">{p.zip}</span>
                  </div>
                  <Link to={p.path} className="mt-4 inline-flex items-center gap-1 text-orange-600 font-bold text-sm hover:underline">
                    Read case study <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6">Every project starts with a free inspection and written quote.</p>
          <a href="tel:+17543105557" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition">
            <Phone size={20} /> (754) 310-5557
          </a>
        </div>
      </section>
    </>
  );
}
