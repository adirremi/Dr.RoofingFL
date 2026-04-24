import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sun } from 'lucide-react';

type Brand = {
  name: string;
  category?: string;
  /** optional logo path — when set, the image is rendered in greyscale by default */
  src?: string;
  /** tailwind height class for the logo image */
  height?: string;
};

/* ─── Manufacturer grid (18 cards · all real logos) ─── */
const MANUFACTURERS: Brand[] = [
  // Shingle systems
  { name: 'GAF',             category: 'Shingles · TPO',       src: '/brands/gaf.svg',           height: 'h-10 md:h-12' },
  { name: 'Owens Corning',   category: 'Shingles',             src: '/brands/owens-corning.svg', height: 'h-10 md:h-12' },
  { name: 'CertainTeed',     category: 'Shingles · Metal',     src: '/brands/certainteed.svg',   height: 'h-7 md:h-9'   },
  { name: 'TAMKO',           category: 'Shingles',             src: '/brands/tamko.svg',         height: 'h-10 md:h-12' },
  { name: 'IKO',             category: 'Shingles · Modified',  src: '/brands/iko.svg',           height: 'h-8 md:h-10'  },
  { name: 'Atlas',           category: 'Shingles',             src: '/brands/atlas.webp',        height: 'h-10 md:h-12' },
  { name: 'Malarkey',        category: 'Cool Shingles',        src: '/brands/malarkey.webp',     height: 'h-9 md:h-11'  },
  // Tile systems (Florida specialty)
  { name: 'Eagle Roofing',   category: 'Concrete Tile',        src: '/brands/eagle.webp',        height: 'h-10 md:h-12' },
  { name: 'Boral',           category: 'Clay · Concrete Tile', src: '/brands/boral.webp',        height: 'h-9 md:h-11'  },
  // Standing-seam & metal
  { name: 'Englert',         category: 'Standing-Seam Metal',  src: '/brands/englert.webp',      height: 'h-8 md:h-10'  },
  { name: 'Drexel Metals',   category: 'Standing-Seam Metal',  src: '/brands/drexel-metals.webp',height: 'h-7 md:h-9'   },
  { name: 'McElroy Metal',   category: 'Metal Panels',         src: '/brands/mcelroy-metal.webp',height: 'h-10 md:h-12' },
  { name: 'Metal Sales',     category: 'Metal Panels',         src: '/brands/metal-sales.webp',  height: 'h-7 md:h-9'   },
  // Flat / Commercial / Waterproofing
  { name: 'Carlisle SynTec', category: 'TPO · PVC · EPDM',     src: '/brands/carlisle.svg',      height: 'h-9 md:h-10'  },
  { name: 'Polyglass',       category: 'Modified Bitumen',     src: '/brands/polyglass.webp',    height: 'h-8 md:h-10'  },
  { name: 'Johns Manville',  category: 'Commercial · BUR',     src: '/brands/johns-manville.webp',height: 'h-10 md:h-12'},
  { name: 'Firestone',       category: 'TPO · EPDM',           src: '/brands/firestone.webp',    height: 'h-9 md:h-11'  },
  { name: 'Henry',           category: 'Waterproofing',        src: '/brands/henry.webp',        height: 'h-12 md:h-14' },
];

/* ─── Financing badges (real logos + wordmarks for PACE) ─── */
const FINANCING: Brand[] = [
  { name: 'GreenSky',        category: 'Home Improvement',     src: '/brands/greensky.webp',     height: 'h-6 md:h-7'  },
  { name: 'Renew Financial', category: 'PACE Financing',       src: '/brands/renew-financial.webp', height: 'h-10 md:h-12' },
  { name: 'Home Run',        category: 'Home Improvement',     src: '/brands/home-run.webp',     height: 'h-8 md:h-10' },
  { name: 'Ygrene',          category: 'PACE Financing' },
  { name: 'PACE Program',    category: 'Property Assessed' },
  { name: 'HERO Program',    category: 'PACE Financing' },
];

/* ─── Scroll-in reveal hook ─── */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── Brand card ─── */
const BrandCard = ({
  b,
  delay,
  inView,
  compact = false,
}: {
  b: Brand;
  delay: number;
  inView: boolean;
  compact?: boolean;
}) => (
  <div
    className={`group/card bg-white border border-slate-200/60 transition-all duration-500 ease-out
      ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      ${compact ? 'px-4 py-4 min-h-[92px]' : 'p-6 min-h-[140px]'}
      flex flex-col items-center justify-center text-center
      shadow-[0_4px_18px_-8px_rgba(15,23,42,0.10)]
      hover:shadow-[0_18px_36px_-12px_rgba(15,23,42,0.22)]
      hover:border-orange-200 hover:-translate-y-1.5`}
    style={{
      borderRadius: '18px',
      transitionDelay: `${delay}ms`,
    }}
    title={b.category ? `${b.name} — ${b.category}` : b.name}
  >
    {b.src ? (
      <img
        src={b.src}
        alt={`${b.name} logo`}
        loading="lazy"
        decoding="async"
        className={`${b.height ?? 'h-10'} w-auto max-w-[160px] object-contain mb-2
          filter grayscale opacity-70
          group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-[1.04]
          transition-all duration-300`}
      />
    ) : (
      <div
        className={`font-serif font-bold text-slate-500
          ${compact ? 'text-[15px] md:text-[17px]' : 'text-[18px] md:text-[20px]'}
          leading-tight tracking-tight mb-2
          group-hover/card:text-slate-900 group-hover/card:scale-[1.04]
          transition-all duration-300`}
      >
        {b.name}
      </div>
    )}
    {b.category && (
      <div
        className={`font-bold uppercase tracking-[0.2em] text-slate-400 group-hover/card:text-orange-600 transition
          ${compact ? 'text-[8px] md:text-[8.5px]' : 'text-[8.5px] md:text-[10px]'}`}
      >
        {b.category}
      </div>
    )}
  </div>
);

export default function BrandsMarquee() {
  const header = useInView<HTMLDivElement>();
  const grid = useInView<HTMLDivElement>();
  const finRow = useInView<HTMLDivElement>();

  return (
    <section
      className="relative bg-gradient-to-b from-white via-slate-50/60 to-white py-20 md:py-28 overflow-hidden"
      aria-label="Roofing manufacturers we install"
    >
      {/* subtle radial accent */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.05),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* ═════ Header ═════ */}
        <div
          ref={header.ref}
          className={`text-center mb-14 md:mb-16 transition-all duration-700 ease-out
            ${header.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="inline-flex items-center gap-3 text-[11px] font-bold text-orange-600 uppercase tracking-[0.3em] mb-5">
            <span className="w-8 h-px bg-orange-600" />
            Trusted Manufacturers
            <span className="w-8 h-px bg-orange-600" />
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-6 max-w-4xl mx-auto">
            We Work With Leading Roofing Systems
            <br />
            <span className="italic text-orange-600">Built For Florida Homes</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Premium roofing materials selected for Florida heat, storms, humidity, coastal exposure,
            and hurricane conditions.
          </p>
        </div>

        {/* ═════ Manufacturer grid ═════ */}
        <div
          ref={grid.ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5"
        >
          {MANUFACTURERS.map((b, i) => (
            <BrandCard key={b.name} b={b} delay={i * 50} inView={grid.inView} />
          ))}
        </div>

        {/* ═════ Financing row ═════ */}
        <div
          ref={finRow.ref}
          className="mt-20 md:mt-24 pt-12 border-t border-slate-200/70"
        >
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em]">
              <span className="w-6 h-px bg-slate-300" />
              Financing Options Available
              <span className="w-6 h-px bg-slate-300" />
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
            {FINANCING.map((b, i) => (
              <BrandCard key={b.name} b={b} delay={i * 50} inView={finRow.inView} compact />
            ))}
          </div>
        </div>

        {/* ═════ Micro trust strip ═════ */}
        <div className="text-center mt-12">
          <p className="inline-flex items-center gap-2 text-[13px] md:text-sm text-slate-700 bg-orange-50 border border-orange-100 px-5 py-2.5 rounded-full">
            <Sun size={16} className="text-orange-500 shrink-0" />
            <span className="font-medium">
              Serving Miami, Fort Lauderdale, Broward, Palm Beach &amp; all of South Florida.
            </span>
          </p>
        </div>

        {/* ═════ CTA ═════ */}
        <div className="text-center mt-8">
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-orange-600 text-white px-8 md:px-10 py-4 rounded-full font-bold text-[13px] md:text-sm uppercase tracking-[0.18em] transition-all duration-300 shadow-[0_10px_26px_-10px_rgba(15,23,42,0.45)] hover:shadow-[0_14px_30px_-10px_rgba(234,88,12,0.45)] hover:-translate-y-0.5"
          >
            Get Free Roof Inspection
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* ═════ Disclaimer ═════ */}
        <p className="text-[11px] md:text-[12px] text-slate-400 text-center max-w-4xl mx-auto leading-relaxed mt-12">
          All trademarks, logos, and brand names are the property of their respective owners. Use of
          these names does not imply endorsement, sponsorship, certification, or partnership unless
          expressly stated. Dr. Roofing FL installs roofing systems and materials from these
          manufacturers upon customer request, subject to product availability, local code
          compliance, and manufacturer specifications.
        </p>
      </div>
    </section>
  );
}
