const BRANDS: { name: string; tagline: string }[] = [
  { name: 'GAF', tagline: 'Master Elite Contractor' },
  { name: 'Owens Corning', tagline: 'Preferred Contractor' },
  { name: 'CertainTeed', tagline: 'SELECT ShingleMaster' },
  { name: 'TAMKO', tagline: 'Pro Certified' },
  { name: 'Englert', tagline: 'Metal Roofing' },
  { name: 'Drexel Metals', tagline: 'Standing-Seam Specialist' },
  { name: 'Westlake', tagline: 'Royal Building Products' },
  { name: 'Carlisle SynTec', tagline: 'TPO / PVC Certified' },
  { name: 'Ygrene Financing', tagline: 'PACE Approved' },
  { name: 'Renovate America', tagline: 'Hero Financing Partner' },
  { name: 'BBB A+', tagline: 'Accredited Business' },
  { name: 'HVHZ', tagline: 'Florida Code Certified' },
];

const Row = ({ items }: { items: typeof BRANDS }) => (
  <div className="flex items-center gap-4 md:gap-6 pr-4 md:pr-6 shrink-0">
    {items.map((b) => (
      <div
        key={b.name}
        className="flex items-center gap-3 bg-white border border-slate-200 rounded-sm px-5 py-4 min-w-[220px] shadow-sm hover:shadow-md hover:border-orange-400 transition-shadow"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-600/10 text-orange-600 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2l2.39 4.84 5.35.78-3.87 3.77.91 5.31L12 14.25l-4.78 2.45.91-5.31L4.26 7.62l5.35-.78L12 2z" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="font-serif text-base md:text-lg text-slate-900 leading-tight truncate">
            {b.name}
          </div>
          <div className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-gray-500 truncate">
            {b.tagline}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function BrandsMarquee() {
  return (
    <section
      className="relative py-12 md:py-14 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200 overflow-hidden"
      aria-label="Authorized manufacturers, financing partners and certifications"
    >
      <div className="container mx-auto px-4 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3 text-center md:text-left">
        <div>
          <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-2">
            Trusted Partners · Certified Installer
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-slate-900 leading-tight">
            Factory-Authorized &amp; Financing Ready
          </h2>
        </div>
        <p className="text-sm text-gray-500 max-w-md md:text-right">
          We're certified installers for every major roofing manufacturer &mdash;
          and partnered with Florida's top financing programs.
        </p>
      </div>

      {/* Fade masks on both sides */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10" aria-hidden="true" />

        <div
          className="flex w-max animate-marquee"
          style={{ willChange: 'transform' }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = 'running';
          }}
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
