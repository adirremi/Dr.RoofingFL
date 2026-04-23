import { Link } from 'react-router-dom';
import { Phone, Calendar, Clock, ExternalLink, ArrowRight, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import type { GeoArticle } from '../data/geoArticles';
import { geoArticles } from '../data/geoArticles';
import { locations } from '../data/locations';
import { services as allServices } from '../data/services';

const SITE = 'https://drroofingflorida.com';

interface Props {
  article: GeoArticle;
}

export default function GeoArticlePage({ article }: Props) {
  const cityData = locations[article.citySlug as keyof typeof locations];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE}${article.path}#article`,
    mainEntityOfPage: `${SITE}${article.path}`,
    headline: article.title,
    description: article.metaDescription,
    image: `${SITE}${article.heroImage}`,
    author: {
      '@type': 'Organization',
      name: 'Dr. Roofing FL',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Roofing FL',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/logo_without_backround.png`,
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    about: {
      '@type': 'Place',
      name: `${article.city}, Florida`,
      sameAs: article.externalLinks.find((l) => l.url.includes('wikipedia'))?.url,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: article.city, item: `${SITE}${article.path}` },
    ],
  };

  const relatedArticles = geoArticles.filter((a) => a.slug !== article.slug).slice(0, 4);

  return (
    <>
      <SEO
        title={article.metaTitle}
        description={article.metaDescription}
        keywords={article.metaKeywords}
        canonical={article.path}
        image={`${SITE}${article.heroImage}`}
        type="article"
        schema={[articleSchema, breadcrumbSchema]}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20 md:py-28"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.80) 0%, rgba(234,88,12,0.55) 100%), url(${article.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-orange-100 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{article.city}</span>
          </nav>

          <div className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold mb-6 uppercase tracking-widest">
            South Florida · City Guide
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight font-serif">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-5 text-sm text-orange-100">
            <span className="inline-flex items-center gap-2"><Calendar size={14} /> {new Date(article.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="inline-flex items-center gap-2"><Clock size={14} /> {article.readingTime} min read</span>
            <span className="inline-flex items-center gap-2"><MapPin size={14} /> {article.city}, FL</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl text-gray-700 leading-relaxed font-serif mb-10 border-l-4 border-orange-500 pl-5 italic">
            {article.intro}
          </p>

          <div className="prose prose-lg max-w-none text-gray-700">
            {article.sections.map((s) => (
              <div key={s.h2} className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-serif">{s.h2}</h2>
                <p className="leading-relaxed whitespace-pre-line">{s.body}</p>
              </div>
            ))}
          </div>

          {/* External Resources */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More About {article.city}</h3>
            <ul className="space-y-2">
              {article.externalLinks.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-700 hover:text-orange-900 hover:underline"
                  >
                    <ExternalLink size={14} /> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Author/Company CTA box */}
          <div className="mt-10 bg-gradient-to-br from-orange-50 to-yellow-50 border-l-4 border-orange-500 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <img src="/logo_without_backround.png" alt="Dr. Roofing FL" className="w-16 h-16 bg-white rounded-lg p-2 flex-shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-1">Published by</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Roofing FL — Local {article.city} Roofing Experts</h3>
                <p className="text-gray-700 text-sm mb-4">
                  We have been installing and repairing roofs in {article.city} and across South Florida since 2011. Licensed Florida Certified Roofing Contractor (CCC#####). HVHZ-certified, fully insured, factory-authorized installer for GAF, Owens Corning, Eagle, and Boral.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {cityData && (
                    <Link
                      to={cityData.slug}
                      className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition"
                    >
                      Roofing in {article.city} <ArrowRight size={14} />
                    </Link>
                  )}
                  <a
                    href="tel:+17543105557"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-orange-700 px-5 py-2.5 rounded-lg font-bold text-sm border border-orange-300 transition"
                  >
                    <Phone size={14} /> (754) 310-5557
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related city + services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 font-serif">Other South Florida City Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={a.path}
                    className="flex items-start gap-3 bg-white border border-slate-200 hover:border-orange-300 hover:shadow-md rounded-lg p-4 transition"
                  >
                    <div className="bg-orange-600 text-white p-2 rounded-lg flex-shrink-0"><MapPin size={14} /></div>
                    <div>
                      <div className="font-semibold text-sm text-gray-900 line-clamp-2">{a.city} City Guide</div>
                      <div className="text-xs text-gray-500 mt-1">{a.readingTime} min read</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5 font-serif">Roofing Services in {article.city}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allServices.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    to={s.path}
                    className="flex items-center justify-between gap-3 bg-white border border-slate-200 hover:border-orange-300 hover:shadow-md rounded-lg p-4 transition"
                  >
                    <div className="font-semibold text-sm text-gray-900">{s.shortTitle}</div>
                    <ArrowRight size={14} className="text-orange-600" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-orange-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Need Roofing in {article.city}?</h2>
          <p className="mb-6 text-orange-50">Licensed · insured · HVHZ certified · free inspection · same-week install.</p>
          <a
            href="tel:+17543105557"
            className="inline-flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition"
          >
            <Phone size={20} /> Call (754) 310-5557
          </a>
        </div>
      </section>
    </>
  );
}
