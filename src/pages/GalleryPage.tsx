import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Home, Camera } from 'lucide-react';
import SEO from '../components/SEO';
import { galleryItems } from '../data/galleryManifest';
import GalleryPicture from '../components/GalleryPicture';
import GalleryLightbox from '../components/GalleryLightbox';

const SITE = 'https://drroofingflorida.com';

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const pageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE}/gallery#webpage`,
    name: 'Dr. Roofing FL — Real Project Photo Gallery',
    description:
      'On-site roofing job photos from Dr. Roofing FL across Broward and Miami-Dade — shingle, tile, metal, and flat/TPO.',
    url: `${SITE}/gallery`,
    isPartOf: { '@type': 'WebSite', name: 'Dr. Roofing FL', url: SITE },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Gallery', item: `${SITE}/gallery` },
    ],
  };

  return (
    <>
      <SEO
        title="Roofing Photo Gallery — Real South Florida Jobs | Dr. Roofing FL"
        description="Browse 32+ real on-site roofing photos from Dr. Roofing FL — Hollywood, Miami, Fort Lauderdale, and all of South Florida. No stock imagery."
        keywords="roofing photos Florida, roof installation pictures Miami, shingle roof gallery Broward, Dr. Roofing FL projects"
        canonical="/gallery"
        image={`${SITE}${galleryItems[0].webp}`}
        schema={[pageSchema, breadcrumbSchema]}
      />

      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(194,65,12,0.75) 100%), url(${galleryItems[1].webp})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <span className="inline-flex items-center gap-2 text-orange-200 text-xs font-bold tracking-widest uppercase mb-4">
            <Camera size={14} /> Real Work
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-serif mb-4">Photo Gallery</h1>
          <p className="text-lg text-orange-50 max-w-2xl mx-auto">
            Every frame is from our own crews — not stock. Shingle, flat, metal, and low-slope work across South Florida.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 px-5 py-2.5 rounded-lg font-semibold"
            >
              <Home size={16} /> Home
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 px-5 py-2.5 rounded-lg font-bold"
            >
              Case studies
            </Link>
            <a
              href="tel:+17543105557"
              className="inline-flex items-center gap-2 bg-white text-orange-800 hover:bg-orange-50 px-5 py-2.5 rounded-lg font-bold"
            >
              <Phone size={16} /> (754) 310-5557
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-slate-600 mb-8 text-sm">
            AVIF + WebP optimized for speed — tap any image to view full size.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {galleryItems.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setIdx(i);
                  setOpen(true);
                }}
                className="group relative rounded-xl overflow-hidden ring-1 ring-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 text-left"
              >
                <GalleryPicture
                  webp={g.webp}
                  avif={g.avif}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  className="w-full"
                  imgClassName="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  priority={i < 6}
                />
                <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-8">
                  <span className="text-[10px] text-white/90 font-medium line-clamp-2">{g.alt}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GalleryLightbox
        items={galleryItems}
        index={idx}
        isOpen={open}
        onClose={() => setOpen(false)}
        onPrev={() => setIdx((n) => (n <= 0 ? galleryItems.length - 1 : n - 1))}
        onNext={() => setIdx((n) => (n >= galleryItems.length - 1 ? 0 : n + 1))}
      />

      <section className="py-14 bg-slate-900 text-white text-center">
        <h2 className="text-2xl font-bold font-serif mb-3">Want this quality on your roof?</h2>
        <p className="text-slate-300 mb-6">Free inspection and same-week quotes in most areas.</p>
        <a
          href="tel:+17543105557"
          className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 px-8 py-3 rounded-lg font-bold"
        >
          <Phone size={20} /> (754) 310-5557
        </a>
      </section>
    </>
  );
}
