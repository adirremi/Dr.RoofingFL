import { Link } from 'react-router-dom';
import { ArrowRight, Palette, CheckCircle } from 'lucide-react';

const HIGHLIGHTS = [
  'Class-4 impact-rated for hail & falling debris',
  '130 mph HVHZ wind warranty (Florida Code 2023)',
  'Algae-resistant StainGuard technology',
  'Lifetime limited manufacturer warranty (GAF / Owens Corning)',
];

const PALETTE = [
  { name: 'Charcoal', hex: '#2d2f31' },
  { name: 'Slate Gray', hex: '#5b6775' },
  { name: 'Ocean Blue', hex: '#2c5d7a' },
  { name: 'Cedar Green', hex: '#4f6a4f' },
  { name: 'Weathered Wood', hex: '#6d5f4a' },
  { name: 'Hickory', hex: '#9b6a3d' },
  { name: 'Terra Cotta', hex: '#a4533b' },
  { name: 'Desert Tan', hex: '#bfa577' },
  { name: 'Onyx Black', hex: '#1a1a1c' },
  { name: 'Storm Cloud', hex: '#7a7e82' },
];

export default function ShingleColors() {
  return (
    <section id="shingle-colors" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="block text-xs font-bold text-orange-600 uppercase tracking-[0.3em] mb-4">
              <Palette size={14} className="inline mr-1.5 -mt-0.5" />
              Explore Our Products
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05] mb-6">
              Choose Your<br />
              <span className="italic text-orange-600">Shingle Color</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every home has a personality. That's why we offer dozens of architectural shingle colors from GAF, Owens Corning, CertainTeed and TAMKO — engineered for Florida's sun, humidity and hurricane winds.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Bring your look to life — from classic Weathered Wood and rich Charcoal Black to bold Ocean Blue and Cedar Green. Our consultants will drop physical sample boards at your house so you can see the color on your roof before you commit.
            </p>

            <ul className="space-y-3 mb-10">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shingle-roofing"
                className="group inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-7 py-4 rounded-sm font-bold uppercase tracking-widest text-xs md:text-sm shadow-lg transition-colors"
              >
                View All Colors
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:text-orange-600 border-2 border-slate-900 hover:border-orange-600 px-7 py-4 rounded-sm font-bold uppercase tracking-widest text-xs md:text-sm transition-colors"
              >
                Request Samples
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative offset frame */}
              <div
                className="absolute -inset-3 md:-inset-5 border-2 border-orange-500/30 rounded-sm translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"
                aria-hidden="true"
              />
              <div className="relative rounded-sm overflow-hidden shadow-2xl ring-1 ring-slate-900/10">
                <img
                  src="/shingle-colors.webp"
                  alt="Architectural shingle color options available at Dr. Roofing FL — GAF, Owens Corning, CertainTeed and TAMKO in charcoal, slate, ocean blue, cedar green, weathered wood, and terra cotta"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                  width="1600"
                  height="900"
                />
                {/* Dark bottom overlay with label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-orange-400 mb-1 font-bold">
                        Architectural Shingles
                      </div>
                      <div className="font-serif text-xl md:text-3xl text-white leading-tight">
                        10+ Colors · Lifetime Warranty
                      </div>
                    </div>
                    <div className="hidden md:block bg-orange-600 text-white px-4 py-2 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold">
                      GAF Master Elite
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color palette swatches */}
            <div className="mt-10">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em] mb-3 text-center lg:text-left">
                Popular Florida Color Picks
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {PALETTE.map((c) => (
                  <div
                    key={c.name}
                    className="group/sw flex items-center gap-2 bg-slate-50 hover:bg-white border border-slate-200 hover:border-orange-500 rounded-sm pl-1 pr-3 py-1 transition-all"
                    title={c.name}
                  >
                    <span
                      className="inline-block w-7 h-7 rounded-sm border border-black/10 shadow-inner"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden="true"
                    />
                    <span className="text-[11px] font-semibold text-slate-700 group-hover/sw:text-orange-700 whitespace-nowrap">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
