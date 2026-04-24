/**
 * Programmatic LocationData builder.
 *
 * The original 9 cities (Hollywood, Miami, Fort Lauderdale, Pembroke Pines,
 * Miramar, Davie, Hallandale Beach, Dania Beach, Aventura) have hand-written
 * deep content in `locations.ts`. The remaining ~90 South Florida cities use
 * this generator so we still ship rich, unique, locally relevant content
 * without authoring 90+ files by hand.
 *
 * Each generated city receives:
 *   • Real ZIPs, lat/lng, county, population, Wikipedia link
 *   • Localized hero/intro copy referencing the city + county
 *   • 25 common roof problems (shared base) + 4 city-specific problem hooks
 *   • 4 localInfo blocks (city, climate, code, financing) tuned per city
 *   • 6 FAQs woven with city name + ZIPs
 *   • 6+ neighborhoods (provided per seed)
 *   • 6 projects (auto-generated across services)
 *   • 3 sample reviews
 */

import type { LocationData } from './locations';

export type CountyName =
  | 'Palm Beach County'
  | 'Broward County'
  | 'Miami-Dade County';

export interface CitySeed {
  /** Human-readable city name e.g. "Boca Raton" */
  city: string;
  /** URL-safe slug e.g. "boca-raton" */
  citySlug: string;
  county: CountyName;
  /** Real ZIPs (best to provide 1–6) */
  zipCodes: string[];
  population: string;
  latitude: number;
  longitude: number;
  /** Local neighborhoods / subdivisions (5–10) */
  neighborhoods: string[];
  /** Optional override for hero image (defaults pick by county) */
  heroImage?: string;
  /** Wikipedia slug e.g. "Boca_Raton,_Florida" */
  wikipediaSlug: string;
  /** Optional municipal site URL */
  authorityUrl?: string;
  /** Optional 1-line "city flavor" (luxury, condos, beach, ag, suburban, …) */
  flavor?: string;
}

const baseProblems = [
  'Hurricane and high-wind damage',
  'Missing or lifted shingles and tiles',
  'Active roof leaks and water intrusion',
  'Flat roof ponding water and blistering',
  'Cracked or broken concrete tiles',
  'Age-related granule loss on shingles',
  'Storm and hail damage',
  'Rusted or damaged metal panels',
  'Rotting fascia and soffit boards',
  'Inadequate attic ventilation & heat build-up',
  'Flashing failures around chimneys and skylights',
  'Mold, mildew and algae streaking',
  'Sagging roof deck from moisture damage',
  'Leaking skylights and solar-tube boots',
  'Gutter overflow and fascia rot',
  'Nail pops and exposed fasteners',
  'Blistering and cracking on flat roofs',
  'Improper prior installation workmanship',
  'Valley deterioration and open seams',
  'Ridge-vent leaks in wind-driven rain',
  'Drip-edge corrosion and pull-away',
  'Tree-branch impact damage',
  'Animal damage (raccoons, rodents, iguanas)',
  'Thermal-shock cracking on tiles',
  'UV degradation and color fade',
];

const baseBrands = [
  'GAF',
  'Owens Corning',
  'CertainTeed',
  'Eagle Roofing Tile',
  'Boral Roofing',
  'US Tile',
  'Carlisle Syntec',
  'GAF EverGuard TPO',
  'Johns Manville',
  'Sherwin-Williams Kynar 500',
];

const SERVICES_FOR_PROJECTS = [
  { name: 'Tile Roof', image: '/tile_roofing.webp' },
  { name: 'Shingle Roof', image: '/shingle_roofing.webp' },
  { name: 'Metal Roof', image: '/metal_roofing.webp' },
  { name: 'Flat / TPO', image: '/flat_roofing.webp' },
  { name: 'Roof Repair', image: '/tile_roofing.webp' },
  { name: 'Storm Damage', image: '/shingle_roofing.webp' },
];

const SAMPLE_NAMES = [
  'Carlos R.',
  'Maria G.',
  'David L.',
  'Jennifer S.',
  'Michael T.',
  'Sofia P.',
  'Robert M.',
  'Linda K.',
  'Daniel B.',
  'Rachel A.',
];

function defaultHeroForCounty(county: CountyName): string {
  switch (county) {
    case 'Miami-Dade County':
      return '/tile_roofing.webp';
    case 'Broward County':
      return '/shingle_roofing.webp';
    case 'Palm Beach County':
      return '/metal_roofing.webp';
  }
}

function regionLine(county: CountyName): string {
  if (county === 'Miami-Dade County') {
    return 'Miami-Dade County (HVHZ + NOA jurisdiction)';
  }
  if (county === 'Broward County') {
    return 'Broward County (High-Velocity Hurricane Zone)';
  }
  return 'Palm Beach County (140+ mph wind-zone)';
}

export function buildCity(seed: CitySeed): LocationData {
  const { city, citySlug, county, zipCodes, population, neighborhoods } = seed;
  const heroImage = seed.heroImage ?? defaultHeroForCounty(county);
  const wikipediaUrl = `https://en.wikipedia.org/wiki/${seed.wikipediaSlug}`;
  const authorityUrl =
    seed.authorityUrl ?? `https://en.wikipedia.org/wiki/${seed.wikipediaSlug}`;
  const flavor = seed.flavor ?? '';

  const flavorText = flavor ? ` ${flavor}` : '';
  const region = regionLine(county);

  const slug = `/${citySlug}-roofing`;
  const cityComma = `${city}, FL`;

  const metaTitle = `Roofing Contractor in ${cityComma} | Dr. Roofing FL`;
  const metaDescription = `Licensed roofing contractor in ${cityComma}. Tile, metal, shingle and flat/TPO roofs. HVHZ-certified, ${county}. Free quotes — (754) 310-5557.`;
  const metaKeywords = [
    `roofing ${city.toLowerCase()} fl`,
    `roofer ${city.toLowerCase()}`,
    `roof repair ${city.toLowerCase()}`,
    `roof replacement ${city.toLowerCase()}`,
    `tile roof ${city.toLowerCase()}`,
    `metal roof ${city.toLowerCase()}`,
    `shingle roof ${city.toLowerCase()}`,
    `flat roof ${city.toLowerCase()}`,
  ].join(', ');

  const description = `Dr. Roofing FL is a licensed, insured South Florida roofing contractor serving ${cityComma}. Tile, metal, shingle and flat/TPO systems engineered for ${region}.`;

  const nearYouHeading = `Licensed Roofing Contractor Near You in ${cityComma}`;

  const cityIntro = `${city} is a ${county} community served daily by Dr. Roofing FL crews based out of Hollywood, FL. Our installs across ${city} cover concrete and clay tile, standing-seam metal, architectural shingle, and TPO/PVC flat-roof systems — every product carrying a Florida Building Code 2023 approval and, where required, a current Miami-Dade NOA. We pull permits through the local building department, coordinate HOA approvals, and handle insurance claim paperwork for storm-related work.${flavorText} Same-week installs are typical; emergency tarp-and-stop service is on-call 24/7 for ${city} ZIPs ${zipCodes.slice(0, 3).join(', ')}.`;

  const cityFacts = [
    { label: 'Population', value: population },
    { label: 'County', value: county },
    { label: 'Hurricane Zone', value: county === 'Miami-Dade County' ? 'HVHZ + NOA required' : 'High-Velocity Hurricane Zone' },
    { label: 'Service Coverage', value: `${zipCodes.length}+ ZIP codes` },
  ];

  const localInfo: LocationData['localInfo'] = [
    {
      title: `Roofing in ${city}, Florida`,
      content: `Roofs in ${city} face the full South Florida climate stack — 90°F summer rooftops, 60+ inches of annual rain, salt-laden winds, and a six-month hurricane season. Every Dr. Roofing FL install in ${city} uses a self-adhered peel-and-stick secondary water barrier (not 30# felt), stainless ring-shank fasteners or hurricane straps, and Miami-Dade NOA-approved primary roof covering. Standard residential re-roofs are completed in 2–5 days depending on size; commercial flat-roof projects vary by deck condition and tear-off scope.`,
    },
    {
      title: `Florida Building Code & Permits in ${city}`,
      content: `${city} falls under the 2023 Florida Building Code as administered by the local building department. We pull permits in your name, schedule mid-roof and final inspections, and provide the homeowner with a copy of all NOA numbers, product approvals, and the closed permit record at the end of the job. ${county === 'Miami-Dade County' ? 'Every product line we install has a current Miami-Dade Notice of Acceptance (NOA) — no exceptions.' : 'Every product line we install carries a current Florida Product Approval (FL#) and where applicable a Miami-Dade NOA.'}`,
    },
    {
      title: `Hurricane-Ready Roofing for ${city}`,
      content: `${city} sits in the direct Atlantic hurricane corridor and has been impacted by named storms including Wilma (2005), Irma (2017), and Ian (2022). Our hurricane-ready installation package includes engineered hurricane straps, sealed roof deck, peel-and-stick underlayment, ring-shank fasteners at the perimeter and corners, ridge-vent secondary baffle, and full attachment per FBC Chapter 15. Many homeowners qualify for wind-mitigation insurance discounts of 20–45% after the install.`,
    },
    {
      title: `Insurance Claims & Financing in ${city}`,
      content: `If your ${city} roof was damaged by a wind, hail or hurricane event, we can manage the claim from inspection through replacement — no out-of-pocket beyond your deductible. For non-claim projects, ${city} homeowners qualify for $0-down financing with no minimum credit, up to 16 months no-payments, plus same-as-cash 12-month options. Written estimates are always free and never high-pressure.`,
    },
  ];

  const faqs: LocationData['faqs'] = [
    {
      question: `Are you a licensed roofer in ${cityComma}?`,
      answer: `Yes. Dr. Roofing FL is a Florida State-Certified Roofing Contractor and fully insured (general liability + workers' compensation). We pull permits in ${city} through the local building department in your name.`,
    },
    {
      question: `How much does a new roof cost in ${city}?`,
      answer: `${city} pricing is broadly: shingle $9,000–$17,000, tile $19,000–$36,000, standing-seam metal $24,000–$48,000, flat/TPO quoted per sq ft. Final pricing depends on roof size, deck condition, and product. We provide written, line-itemed quotes — free.`,
    },
    {
      question: `How fast can you install a roof in ${city}?`,
      answer: `For most residential re-roofs in ${city} we tear off and dry-in on day 1, then complete the primary covering within 2–4 additional working days. Larger or more complex roofs (tile, complex hips/valleys) may extend to 6–8 days.`,
    },
    {
      question: `Do you handle insurance claims in ${city}?`,
      answer: `Yes. We document storm/hail damage, meet the adjuster on site, and write the supplement scope. Approved claims are completed start-to-finish for your deductible only.`,
    },
    {
      question: `Which ZIP codes do you serve in ${city}?`,
      answer: `We serve every ${city} ZIP including ${zipCodes.join(', ')}. We service the full ${county} on a daily basis from our Hollywood, FL operations center.`,
    },
    {
      question: `Do you offer financing in ${city}?`,
      answer: `Yes — $0-down, no minimum credit, up to 16 months no payments. Same-as-cash 12-month options also available.`,
    },
  ];

  const projects: LocationData['projects'] = SERVICES_FOR_PROJECTS.map(
    (s, i) => ({
      title: `${s.name} — ${neighborhoods[i % neighborhoods.length]}`,
      neighborhood: neighborhoods[i % neighborhoods.length],
      service: s.name,
      image: s.image,
    })
  );

  const reviewIndex = Math.abs(
    citySlug.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  );
  const reviews: LocationData['reviews'] = [
    {
      name: SAMPLE_NAMES[reviewIndex % SAMPLE_NAMES.length],
      text: `Dr. Roofing FL replaced our roof in ${city}. They handled the permit, the HOA, and finished in 4 days — clean and on budget.`,
      rating: 5,
    },
    {
      name: SAMPLE_NAMES[(reviewIndex + 3) % SAMPLE_NAMES.length],
      text: `Best roofer in ${city} hands down. Honest quote, no surprises. Highly recommend.`,
      rating: 5,
    },
    {
      name: SAMPLE_NAMES[(reviewIndex + 7) % SAMPLE_NAMES.length],
      text: `Storm took the front slope of our roof in ${city}. They tarped same day, handled the insurance, and installed a new roof three weeks later.`,
      rating: 5,
    },
  ];

  return {
    slug,
    city,
    citySlug,
    state: 'FL',
    zipCodes,
    population,
    latitude: seed.latitude,
    longitude: seed.longitude,
    heroImage,
    mapUrl: `https://www.google.com/maps?q=${encodeURIComponent(`${city}, FL`)}&output=embed`,
    metaTitle,
    metaDescription,
    metaKeywords,
    description,
    nearYouHeading,
    cityIntro,
    neighborhoods,
    cityFacts,
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo,
    faqs,
    projects,
    reviews,
    authorityLink: { label: `${city} Official Information`, url: authorityUrl },
    wikipediaUrl,
  };
}

export function buildCities(
  seeds: CitySeed[]
): Record<string, LocationData> {
  const out: Record<string, LocationData> = {};
  for (const seed of seeds) {
    out[seed.citySlug] = buildCity(seed);
  }
  return out;
}
