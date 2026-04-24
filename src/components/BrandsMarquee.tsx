import { Sun } from 'lucide-react';

type Brand = {
  name: string;
  category?: string;
  /** optional SVG path — when provided, the logo is rendered instead of the wordmark */
  src?: string;
  /** tailwind height class for logo images */
  height?: string;
};

const MANUFACTURERS: Brand[] = [
  { name: 'GAF',               category: 'Shingles · TPO',         src: '/brands/gaf.svg',           height: 'h-9 md:h-10' },
  { name: 'Owens Corning',     category: 'Shingles',               src: '/brands/owens-corning.svg', height: 'h-9 md:h-10' },
  { name: 'CertainTeed',       category: 'Shingles · Metal',       src: '/brands/certainteed.svg',   height: 'h-7 md:h-8'  },
  { name: 'TAMKO',             category: 'Shingles',               src: '/brands/tamko.svg',         height: 'h-9 md:h-10' },
  { name: 'IKO',               category: 'Shingles · Modified',    src: '/brands/iko.svg',           height: 'h-8 md:h-9'  },
  { name: 'Atlas Roofing',     category: 'Shingles' },
  { name: 'Malarkey',          category: 'Cool Shingles' },
  { name: 'Westlake Royal',    category: 'Concrete Tile' },
  { name: 'Eagle Roofing',     category: 'Concrete Tile' },
  { name: 'Boral Roofing',     category: 'Clay · Concrete Tile' },
  { name: 'Drexel Metals',     category: 'Standing-Seam' },
  { name: 'Englert',           category: 'Standing-Seam' },
  { name: 'McElroy Metal',     category: 'Metal Panels' },
  { name: 'Metal Sales',       category: 'Metal Panels' },
  { name: 'Carlisle SynTec',   category: 'TPO · PVC · EPDM',       src: '/brands/carlisle.svg',      height: 'h-8 md:h-9'  },
  { name: 'Versico',           category: 'TPO · PVC' },
  { name: 'Johns Manville',    category: 'Commercial · BUR' },
  { name: 'Polyglass',         category: 'Modified Bitumen' },
  { name: 'Soprema',           category: 'Modified · SBS' },
  { name: 'Sika Sarnafil',     category: 'PVC Membranes' },
  { name: 'Henry Company',     category: 'Waterproofing' },
  { name: 'Gaco',              category: 'Silicone Coatings' },
  { name: 'Mule-Hide',         category: 'TPO · Coatings' },
  { name: 'Firestone',         category: 'TPO · EPDM' },
];

const FINANCING: Brand[] = [
  { name: 'Ygrene',              category: 'PACE Financing' },
  { name: 'Renew Financial',     category: 'PACE Financing' },
  { name: 'PACE Program',        category: 'Property Assessed' },
  { name: 'HERO Program',        category: 'PACE Financing' },
  { name: 'Home Run Financing',  category: 'Home Improvement' },
  { name: 'GreenSky',            category: 'Home Improvement' },
  { name: 'Synchrony',           category: 'Home Improvement' },
  { name: 'Acorn Finance',       category: 'Home Improvement' },
];

const Card = ({ b }: { b: Brand }) => (
  <div
    className="group/card flex-shrink-0 mx-2 md:mx-3"
    title={b.category ? `${b.name} — ${b.category}` : b.name}
  >
    <div className="bg-white rounded-xl border border-slate-200/70 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)] hover:shadow-[0_14px_32px_-10px_rgba(234,88,12,0.22)] hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 px-6 py-5 min-w-[180px] md:min-w-[210px] h-[100px] md:h-[110px] flex flex-col items-center justify-center">
      {b.src ? (
        <img
          src={b.src}
          alt={`${b.name} logo`}
          loading="lazy"
          decoding="async"
          className={`${b.height ?? 'h-8 md:h-9'} w-auto max-w-[160px] object-contain mb-1 group-hover/card:scale-[1.04] transition-transform duration-300`}
        />
      ) : (
        <div className="font-serif font-bold text-slate-900 text-[17px] md:text-[19px] leading-tight text-center mb-1 tracking-tight group-hover/card:text-orange-700 transition">
          {b.name}
        </div>
      )}
      {b.category && (
        <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 group-hover/card:text-orange-600 transition">
          {b.category}
        </div>
      )}
    </div>
  </div>
);

const Row = ({
  items,
  speed,
  label,
}: {
  items: Brand[];
  speed: 'animate-marquee' | 'animate-marquee-slow';
  label: string;
}) => (
  <div className="mb-10 md:mb-12">
    {/* section label */}
    <div className="flex items-center gap-3 mb-4 px-4 max-w-3xl mx-auto">
      <span className="h-px flex-grow bg-slate-200" />
      <span className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-[0.25em] whitespace-nowrap">
        {label}
      </span>
      <span className="h-px flex-grow bg-slate-200" />
    </div>

    {/* marquee */}
    <div className="relative group overflow-hidden py-3">
      {/* edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10"
        aria-hidden="true"
      />

      <div
        className={`flex w-max ${speed} group-hover:[animation-play-state:paused]`}
        style={{ willChange: 'transform' }}
      >
        {/* render the list twice for a seamless loop */}
        {[...items, ...items].map((b, i) => (
          <Card key={`${b.name}-${i}`} b={b} />
        ))}
      </div>
    </div>
  </div>
);

export default function BrandsMarquee() {
  return (
    <section
      className="relative bg-white py-20 md:py-28 overflow-hidden"
      aria-label="Roofing manufacturers and financing programs"
    >
      {/* soft radial backdrop */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.05),transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative">
        {/* ─── Header ─── */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-flex items-center gap-3 text-[11px] font-bold text-orange-600 uppercase tracking-[0.3em] mb-5">
            <span className="w-8 h-px bg-orange-600" />
            Trusted Brands
            <span className="w-8 h-px bg-orange-600" />
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-6">
            Florida Roofing Manufacturers
            <br />
            <span className="italic text-orange-600">&amp; Financing Programs</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            We work with leading roofing material manufacturers and financing programs commonly
            used across South Florida residential and commercial roofing projects — including
            shingle, tile, metal, flat roofing, and waterproof systems.
          </p>
        </div>

        {/* ─── Row 1: Manufacturers ─── */}
        <Row items={MANUFACTURERS} speed="animate-marquee-slow" label="Roofing Material Manufacturers" />

        {/* ─── Row 2: Financing ─── */}
        <Row items={FINANCING} speed="animate-marquee" label="Financing &amp; PACE Programs" />

        {/* ─── Florida microtext ─── */}
        <div className="text-center mt-6 mb-6">
          <p className="inline-flex items-center gap-2 text-[13px] md:text-sm text-slate-700 bg-orange-50 border border-orange-100 px-5 py-2.5 rounded-full">
            <Sun size={16} className="text-orange-500 shrink-0" />
            <span className="font-medium">
              Built for Florida weather — hurricanes, heat, humidity &amp; coastal roofing conditions.
            </span>
          </p>
        </div>

        {/* ─── Legal disclaimer ─── */}
        <p className="text-[11px] md:text-[12px] text-slate-400 text-center max-w-4xl mx-auto leading-relaxed mt-6">
          All trademarks, logos, and brand names are the property of their respective owners.
          Use of these names does not imply endorsement, sponsorship, certification, or partnership
          unless expressly stated.
        </p>
      </div>
    </section>
  );
}
