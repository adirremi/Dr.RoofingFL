import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sun } from 'lucide-react';

type Brand = {
  name: string;
  category?: string;
  /** optional logo path — rendered in full color */
  src?: string;
  /** tailwind height class for the logo image */
  height?: string;
};

/* ─── Manufacturer rows (split for visual rhythm) ─── */
const ROW_1: Brand[] = [
  { name: 'GAF',             src: '/brands/gaf.svg',             height: 'h-9 md:h-11' },
  { name: 'Owens Corning',   src: '/brands/owens-corning.svg',   height: 'h-9 md:h-11' },
  { name: 'CertainTeed',     src: '/brands/certainteed.svg',     height: 'h-7 md:h-8'  },
  { name: 'TAMKO',           src: '/brands/tamko.svg',           height: 'h-9 md:h-11' },
  { name: 'IKO',             src: '/brands/iko.svg',             height: 'h-7 md:h-9'  },
  { name: 'Atlas',           src: '/brands/atlas.webp',          height: 'h-9 md:h-11' },
  { name: 'Malarkey',        src: '/brands/malarkey.webp',       height: 'h-8 md:h-10' },
  { name: 'Eagle Roofing',   src: '/brands/eagle.webp',          height: 'h-9 md:h-11' },
];

const ROW_2: Brand[] = [
  { name: 'Boral',           src: '/brands/boral.webp',          height: 'h-8 md:h-10' },
  { name: 'Westlake Royal',  src: '/brands/westlake-royal.webp', height: 'h-8 md:h-10' },
  { name: 'Englert',         src: '/brands/englert.webp',        height: 'h-7 md:h-9'  },
  { name: 'Drexel Metals',   src: '/brands/drexel-metals.webp',  height: 'h-7 md:h-8'  },
  { name: 'McElroy Metal',   src: '/brands/mcelroy-metal.webp',  height: 'h-9 md:h-11' },
  { name: 'Metal Sales',     src: '/brands/metal-sales.webp',    height: 'h-7 md:h-9'  },
  { name: 'Carlisle SynTec', src: '/brands/carlisle.svg',        height: 'h-8 md:h-9'  },
  { name: 'Versico',         src: '/brands/versico.webp',        height: 'h-9 md:h-11' },
];

const ROW_3: Brand[] = [
  { name: 'Polyglass',       src: '/brands/polyglass.webp',      height: 'h-8 md:h-9'  },
  { name: 'Soprema',         src: '/brands/soprema.webp',        height: 'h-8 md:h-10' },
  { name: 'Johns Manville',  src: '/brands/johns-manville.webp', height: 'h-9 md:h-11' },
  { name: 'Firestone',       src: '/brands/firestone.webp',      height: 'h-8 md:h-10' },
  { name: 'Mule-Hide',       src: '/brands/mule-hide.webp',      height: 'h-10 md:h-12'},
  { name: 'Gaco',            src: '/brands/gaco.webp',           height: 'h-8 md:h-10' },
  { name: 'Henry',           src: '/brands/henry.webp',          height: 'h-10 md:h-12'},
];

/* ─── Financing badges (real logos + wordmarks for PACE) ─── */
const FINANCING: Brand[] = [
  { name: 'GreenSky',        category: 'Home Improvement',     src: '/brands/greensky.webp',         height: 'h-6 md:h-7'  },
  { name: 'Renew Financial', category: 'PACE Financing',       src: '/brands/renew-financial.webp',  height: 'h-9 md:h-11' },
  { name: 'Home Run',        category: 'Home Improvement',     src: '/brands/home-run.webp',         height: 'h-7 md:h-9'  },
  { name: 'Synchrony',       category: 'Home Improvement',     src: '/brands/synchrony.webp',        height: 'h-6 md:h-7'  },
  { name: 'Ygrene',          category: 'PACE Financing' },
  { name: 'PACE Program',    category: 'Property Assessed' },
  { name: 'HERO Program',    category: 'PACE Financing' },
  { name: 'Acorn Finance',   category: 'Home Improvement' },
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
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

/* ─── Single logo item (no card, full color) ─── */
const LogoItem = ({ b, compact = false }: { b: Brand; compact?: boolean }) => (
  <div
    className={`shrink-0 flex flex-col items-center justify-center
      ${compact ? 'mx-7 md:mx-9 min-w-[140px] md:min-w-[170px] h-14 md:h-16'
                : 'mx-9 md:mx-12 min-w-[160px] md:min-w-[210px] h-16 md:h-20'}`}
    title={b.category ? `${b.name} — ${b.category}` : b.name}
  >
    {b.src ? (
      <img
        src={b.src}
        alt={`${b.name} logo`}
        loading="lazy"
        decoding="async"
        className={`${b.height ?? 'h-9 md:h-11'} w-auto max-w-[180px] object-contain
          opacity-95 hover:opacity-100 transition-opacity`}
      />
    ) : (
      <div
        className={`font-serif font-bold text-slate-700
          ${compact ? 'text-[16px] md:text-[18px]' : 'text-[19px] md:text-[22px]'}
          leading-tight tracking-tight text-center`}
      >
        {b.name}
      </div>
    )}
    {compact && b.category && (
      <div className="font-bold uppercase tracking-[0.18em] text-slate-400 text-[8px] md:text-[9px] mt-1">
        {b.category}
      </div>
    )}
  </div>
);

/* ─── Marquee row ─── */
type MarqueeRowProps = {
  brands: Brand[];
  animation: string; // tailwind animation utility, e.g. 'animate-marquee'
  compact?: boolean;
};

const MarqueeRow = ({ brands, animation, compact = false }: MarqueeRowProps) => {
  // Duplicate so the translate-X(-50%) loop is seamless
  const items = [...brands, ...brands];
  return (
    <div
      className="group relative overflow-hidden py-2 md:py-3"
      style={{
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0, #000 6%, #000 94%, transparent 100%)',
      }}
    >
      <div
        className={`flex w-max ${animation} group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center`}
      >
        {items.map((b, i) => (
          <LogoItem key={`${b.name}-${i}`} b={b} compact={compact} />
        ))}
      </div>
    </div>
  );
};

export default function BrandsMarquee() {
  const header = useInView<HTMLDivElement>();
  const rows   = useInView<HTMLDivElement>();
  const finRow = useInView<HTMLDivElement>();

  return (
    <section
      className="relative bg-gradient-to-b from-white via-slate-50/70 to-white py-20 md:py-28 overflow-hidden"
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
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out
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

        {/* ═════ Three marquee rows ═════ */}
        <div
          ref={rows.ref}
          className={`space-y-4 md:space-y-6 transition-opacity duration-700 ${rows.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <MarqueeRow brands={ROW_1} animation="animate-marquee" />
          <MarqueeRow brands={ROW_2} animation="animate-marquee-reverse-slow" />
          <MarqueeRow brands={ROW_3} animation="animate-marquee-slow" />
        </div>

        {/* ═════ Financing marquee ═════ */}
        <div
          ref={finRow.ref}
          className={`mt-16 md:mt-20 pt-10 border-t border-slate-200/70 transition-opacity duration-700 ${finRow.inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-3 text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em]">
              <span className="w-6 h-px bg-slate-300" />
              Financing Options Available
              <span className="w-6 h-px bg-slate-300" />
            </span>
          </div>
          <MarqueeRow brands={FINANCING} animation="animate-marquee" compact />
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
