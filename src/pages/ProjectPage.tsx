import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, MapPin, Calendar, Ruler, Clock, DollarSign, Shield, Award, CheckCircle, ExternalLink, Camera } from 'lucide-react';
import SEO from '../components/SEO';
import NotFoundPage from './NotFoundPage';
import { projectsBySlug } from '../data/projects';
import { locations } from '../data/locations';
import { servicesBySlug } from '../data/services';
import { galleryItems } from '../data/galleryManifest';
import GalleryPicture from '../components/GalleryPicture';
import GalleryLightbox from '../components/GalleryLightbox';

const SITE = 'https://drroofingflorida.com';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsBySlug[slug] : undefined;

  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);

  const sitePhotos = useMemo(() => {
    if (!project) return [];
    const paths = project.images && project.images.length > 0 ? project.images : [project.image];
    return paths
      .map((p) => galleryItems.find((g) => g.webp === p))
      .filter((g): g is (typeof galleryItems)[number] => g != null);
  }, [project]);

  if (!project) return <NotFoundPage />;

  const location = locations[project.citySlug];
  const service = servicesBySlug[project.serviceSlug];

  const schemaImages = [...new Set([project.image, ...(project.images || [])])].map((src) => `${SITE}${src}`);

  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${SITE}${project.path}#project`,
    name: project.title,
    description: project.metaDescription,
    url: `${SITE}${project.path}`,
    image: schemaImages,
    datePublished: project.completedDate,
    dateCreated: project.completedDate,
    author: { '@type': 'Organization', name: 'Dr. Roofing FL', url: SITE },
    creator: { '@type': 'RoofingContractor', '@id': `${SITE}/#localbusiness` },
    contentLocation: {
      '@type': 'Place',
      name: `${project.neighborhood}, ${project.city}, FL`,
      geo: { '@type': 'GeoCoordinates', latitude: project.latitude, longitude: project.longitude },
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.city,
        addressRegion: project.state,
        postalCode: project.zip,
        addressCountry: 'US',
      },
    },
    keywords: project.metaKeywords,
    about: {
      '@type': 'Service',
      name: project.serviceLabel,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: `${SITE}/projects` },
      { '@type': 'ListItem', position: 3, name: project.title, item: `${SITE}${project.path}` },
    ],
  };

  const reviewSchema = project.clientQuote
    ? {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
          '@type': 'LocalBusiness',
          '@id': `${SITE}/#localbusiness`,
          name: 'Dr. Roofing FL',
        },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: project.clientName || 'Verified Customer' },
        reviewBody: project.clientQuote,
        datePublished: project.completedDate,
      }
    : null;

  const schemas = reviewSchema ? [projectSchema, breadcrumbSchema, reviewSchema] : [projectSchema, breadcrumbSchema];

  return (
    <>
      <SEO
        title={project.metaTitle}
        description={project.metaDescription}
        keywords={project.metaKeywords}
        canonical={project.path}
        image={`${SITE}${project.image}`}
        schema={schemas}
      />

      {/* Hero */}
      <section
        className="relative text-white py-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17,24,39,0.86) 0%, rgba(234,88,12,0.55) 100%), url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <nav className="text-sm text-orange-100 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-white">Projects</Link>
            <span className="mx-2">/</span>
            <span>{project.title}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-orange-600 px-4 py-2 rounded-full text-xs font-bold mb-5 uppercase tracking-widest">
            <MapPin size={12} /> {project.neighborhood} · {project.city}, FL {project.zip}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 font-serif leading-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="text-lg text-gray-100 max-w-3xl leading-relaxed">{project.summary}</p>
        </div>
      </section>

      {/* Project Facts */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1 text-gray-500 text-xs mb-1"><Calendar size={12} /> Completed</div>
              <div className="font-bold text-gray-900">{new Date(project.completedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1 text-gray-500 text-xs mb-1"><MapPin size={12} /> Location</div>
              <div className="font-bold text-gray-900">{project.city}, FL</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1 text-gray-500 text-xs mb-1"><Ruler size={12} /> Size</div>
              <div className="font-bold text-gray-900">{project.squares > 0 ? `${project.squares} squares` : 'Repair'}</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1 text-gray-500 text-xs mb-1"><Clock size={12} /> Duration</div>
              <div className="font-bold text-gray-900">{project.duration}</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1 text-gray-500 text-xs mb-1"><DollarSign size={12} /> Investment</div>
              <div className="font-bold text-gray-900">{project.priceRange}</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-1 text-gray-500 text-xs mb-1"><Shield size={12} /> Warranty</div>
              <div className="font-bold text-gray-900 text-xs">{project.warranty}</div>
            </div>
          </div>
        </div>
      </section>

      {sitePhotos.length > 0 && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex items-center gap-2 text-orange-600 text-xs font-bold tracking-widest uppercase mb-3">
              <Camera size={14} /> On-site photos
            </div>
            <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">Real job-site photography</h2>
            <p className="text-slate-600 text-sm mb-6 max-w-2xl">
              Full-resolution images (AVIF + WebP) from this project area — tap to enlarge.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {sitePhotos.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => {
                    setLbIndex(i);
                    setLbOpen(true);
                  }}
                  className="rounded-xl overflow-hidden ring-1 ring-slate-200 hover:ring-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <GalleryPicture
                    webp={g.webp}
                    avif={g.avif}
                    alt={g.alt}
                    width={g.width}
                    height={g.height}
                    className="w-full"
                    imgClassName="w-full h-56 object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                    priority={i === 0}
                  />
                </button>
              ))}
            </div>
            <p className="text-center mt-6">
              <Link to="/gallery" className="text-orange-600 font-semibold text-sm hover:underline">
                View full company gallery →
              </Link>
            </p>
            <GalleryLightbox
              items={sitePhotos}
              index={lbIndex}
              isOpen={lbOpen}
              onClose={() => setLbOpen(false)}
              onPrev={() => setLbIndex((n) => (n <= 0 ? sitePhotos.length - 1 : n - 1))}
              onNext={() => setLbIndex((n) => (n >= sitePhotos.length - 1 ? 0 : n + 1))}
            />
          </div>
        </section>
      )}

      {/* Full Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 font-serif mb-6">The Full Project Story</h2>
          <article className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
            {project.fullDescription.split('\n').map((para, i) => (
              <p key={i} className="mb-4">{para}</p>
            ))}
          </article>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">Challenges</h2>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700 bg-white rounded-lg p-3 border-l-4 border-red-500">
                    <span className="text-red-500 font-bold">⚠</span> {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-4">Our Solution</h2>
              <ul className="space-y-2">
                {project.solution.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700 bg-white rounded-lg p-3 border-l-4 border-orange-500">
                    <CheckCircle size={16} className="text-orange-600 flex-shrink-0 mt-0.5" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Award size={32} className="flex-shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Outcome</h3>
                <p className="text-orange-50">{project.outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 font-serif mb-6">Materials & Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Primary Material</div>
              <div className="font-semibold text-gray-900">{project.material}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Color / Profile</div>
              <div className="font-semibold text-gray-900">{project.colorChoice}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Service Type</div>
              <div className="font-semibold text-gray-900">{project.serviceLabel}</div>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">ZIP Code Served</div>
              <div className="font-semibold text-gray-900">{project.zip}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      {project.clientQuote && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <blockquote className="bg-white rounded-xl p-8 border-t-4 border-orange-500 shadow-md">
              <p className="text-xl italic text-gray-700 leading-relaxed mb-4">"{project.clientQuote}"</p>
              <footer className="text-sm font-semibold text-gray-900">— {project.clientName}</footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* Geo map */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Location: {project.neighborhood}, {project.city}, FL {project.zip}</h3>
          <iframe
            title={`Project location ${project.neighborhood} ${project.city} FL`}
            src={`https://www.google.com/maps?q=${project.latitude},${project.longitude}&z=14&output=embed`}
            className="w-full h-80 rounded-lg border border-slate-200"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location && (
              <Link to={location.slug} className="bg-white rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition">
                <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-1">Related city</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">All Roofing in {project.city}, FL</h3>
                <p className="text-sm text-gray-600">Meta, services, projects and reviews for {project.city}.</p>
                <span className="inline-flex items-center gap-1 text-orange-600 font-bold text-sm mt-3">
                  Visit {project.city} page <ExternalLink size={12} />
                </span>
              </Link>
            )}
            {service && (
              <Link to={`/${service.slug}-${project.citySlug}`} className="bg-white rounded-xl p-6 border-l-4 border-orange-500 hover:shadow-lg transition">
                <div className="text-xs uppercase tracking-widest text-orange-600 font-bold mb-1">Service in {project.city}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.shortTitle} in {project.city}</h3>
                <p className="text-sm text-gray-600">{service.metaDescription}</p>
                <span className="inline-flex items-center gap-1 text-orange-600 font-bold text-sm mt-3">
                  {service.shortTitle} in {project.city} <ExternalLink size={12} />
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-orange-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Want results like this at your home?</h2>
          <p className="text-lg text-orange-100 mb-6">Free inspection and written quote within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+17543105557" className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-lg font-bold shadow-xl transition">
              <Phone size={20} /> (754) 310-5557
            </a>
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-800 px-8 py-4 rounded-lg font-bold shadow-xl transition">
              See more projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
