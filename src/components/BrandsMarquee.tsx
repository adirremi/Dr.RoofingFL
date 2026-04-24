type Brand = {
  name: string;
  tagline: string;
  src: string;
  /** tailwind h-class for logo height inside the tile */
  height?: string;
};

const BRANDS: Brand[] = [
  { name: 'GAF',            tagline: 'Master Elite Contractor',     src: '/brands/gaf.svg',            height: 'h-10 md:h-12' },
  { name: 'Owens Corning',  tagline: 'Preferred Contractor',        src: '/brands/owens-corning.svg',  height: 'h-10 md:h-12' },
  { name: 'CertainTeed',    tagline: 'SELECT ShingleMaster',        src: '/brands/certainteed.svg',    height: 'h-8 md:h-10' },
  { name: 'TAMKO',          tagline: 'Pro Certified Installer',     src: '/brands/tamko.svg',          height: 'h-10 md:h-12' },
  { name: 'IKO',            tagline: 'Shield Pro Plus',             src: '/brands/iko.svg',            height: 'h-8 md:h-10' },
  { name: 'Carlisle SynTec',tagline: 'TPO · PVC · EPDM Certified',  src: '/brands/carlisle.svg',       height: 'h-8 md:h-10' },
  { name: 'BBB Accredited', tagline: 'A+ Rating',                   src: '/brands/bbb.svg',            height: 'h-10 md:h-12' },
  { name: 'Google Reviews', tagline: '4.9 · 312+ Reviews',          src: '/brands/google-rating.svg',  height: 'h-14 md:h-16' },
  { name: 'Florida Licensed', tagline: 'CCC#1331964 · Insured',     src: '/brands/florida-licensed.svg', height: 'h-14 md:h-16' },
  { name: 'HVHZ Certified', tagline: 'Miami-Dade NOA · FBC 2023',   src: '/brands/hvhz-approved.svg',  height: 'h-14 md:h-16' },
];

const Tile = ({ b }: { b: Brand }) => (
  <div
    className="group flex items-center justify-center bg-white border border-slate-200 rounded-sm px-8 py-5 min-w-[220px] md:min-w-[240px] h-[110px] md:h-[120px] shrink-0 shadow-sm hover:shadow-md hover:border-orange-400 transition-all"
    title={`${b.name} — ${b.tagline}`}
  >
    <img
      src={b.src}
      alt={`${b.name} — ${b.tagline}`}
      loading="lazy"
      decoding="async"
      className={`${b.height ?? 'h-10'} w-auto max-w-[180px] object-contain group-hover:scale-105 transition-transform duration-300`}
    />
  </div>
);

const Row = ({ items }: { items: Brand[] }) => (
  <div className="flex items-center gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
    {items.map((b, i) => (
      <Tile key={`${b.name}-${i}`} b={b} />
    ))}
  </div>
);

export default function BrandsMarquee() {
  return (
    <section
      className="relative py-14 md:py-16 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200 overflow-hidden"
      aria-label="Authorized manufacturers, financing partners and certifications"
    >
      <div className="container mx-auto px-4 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3 text-center md:text-left">
        <div>
          <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-2">
            Trusted Partners · Certified Installer
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-slate-900 leading-tight">
            Factory-Authorized &amp; Florida Certified
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-md md:text-right">
          Certified installer for every major manufacturer &mdash; licensed,
          insured and HVHZ approved to install in South Florida.
        </p>
      </div>

      <div className="relative group">
        {/* Fade masks on both sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10" aria-hidden="true" />

        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
          style={{ willChange: 'transform' }}
        >
          <Row items={BRANDS} />
          <Row items={BRANDS} />
        </div>
      </div>

      <div className="mt-6 text-center text-[11px] text-gray-400 px-4">
        All trademarks and brand names are the property of their respective owners. Used for identification purposes only.
      </div>
    </section>
  );
}
