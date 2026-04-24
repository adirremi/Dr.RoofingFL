import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/galleryManifest';
import GalleryPicture from './GalleryPicture';
import GalleryLightbox from './GalleryLightbox';

/** Featured subset on homepage — bento + link to full gallery */
const PREVIEW = 8;

export default function RealWorkGallery() {
  const [lbOpen, setLbOpen] = useState(false);
  const [lbIndex, setLbIndex] = useState(0);
  const preview = galleryItems.slice(0, PREVIEW);

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">
              <Camera size={16} />
              On-site Drone & Crew Photos
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-white max-w-2xl leading-tight">
              Real Roofs. Real Yards. <span className="text-orange-500">No Stock Photos.</span>
            </h2>
            <p className="text-slate-300 mt-4 max-w-xl text-lg">
              32+ actual job-site shots from our crews across South Florida — architectural shingle, flat, and
              every detail Florida&apos;s code demands.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-2 self-start lg:self-auto bg-orange-600 hover:bg-orange-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition whitespace-nowrap"
          >
            Full photo gallery
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[minmax(120px,1fr)] md:auto-rows-[minmax(160px,1fr)] max-w-6xl mx-auto">
          {preview.map((g, i) => {
            const isHero = i === 0;
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setLbIndex(i);
                  setLbOpen(true);
                }}
                className={`
                  group relative rounded-xl overflow-hidden ring-1 ring-white/10
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                  ${isHero ? 'md:col-span-2 md:row-span-2' : 'col-span-1'}
                `}
              >
                <GalleryPicture
                  webp={g.webp}
                  avif={g.avif}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover min-h-[140px] md:min-h-0 group-hover:scale-105 transition duration-700"
                  sizes={isHero ? '(min-width: 768px) 50vw, 50vw' : '(min-width: 768px) 25vw, 50vw'}
                  priority={i < 4}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-2 left-2 right-2 text-left text-xs font-semibold text-white drop-shadow opacity-0 group-hover:opacity-100 transition line-clamp-2">
                  Tap to enlarge
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <GalleryLightbox
        items={preview}
        index={lbIndex}
        isOpen={lbOpen}
        onClose={() => setLbOpen(false)}
        onPrev={() => setLbIndex((n) => (n <= 0 ? preview.length - 1 : n - 1))}
        onNext={() => setLbIndex((n) => (n >= preview.length - 1 ? 0 : n + 1))}
      />
    </section>
  );
}
