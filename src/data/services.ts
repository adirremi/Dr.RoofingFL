export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  bullets: string[];
}

export const services: Service[] = [
  {
    slug: 'tile-roof',
    title: 'Tile Roof Replacement',
    shortTitle: 'Tile Roof',
    tagline: 'Classic Florida elegance built to last 50+ years.',
    description:
      "Our concrete and clay tile roof installations are engineered for South Florida's high-wind zones. Tile offers superior hurricane protection, heat reflection, and timeless curb appeal. Every installation uses a factory-backed waterproof underlayment and stainless hurricane fasteners.",
    image: '/tile_roofing.jpeg',
    bullets: [
      '50+ year service life',
      'Concrete & clay tile — Eagle, US Tile, Boral',
      'Hurricane-rated attachment (HVHZ compliant)',
      'Self-adhered peel-and-stick underlayment',
      'Cool-roof energy savings',
    ],
  },
  {
    slug: 'shingle-roof',
    title: 'Architectural Shingle Roof Installation',
    shortTitle: 'Shingle Roof',
    tagline: 'Cost-effective Class-4 impact-rated shingles for Florida homes.',
    description:
      "We install premium architectural shingles (GAF Timberline HDZ, Owens Corning Duration, CertainTeed Landmark) rated for 130+ mph winds. Algae-resistant granules fight Florida's humidity, and lifetime transferable warranties protect your investment.",
    image: '/shingle_roofing.jpeg',
    bullets: [
      'GAF Master Elite & Owens Corning Platinum certified',
      '130 mph wind warranty available',
      'StainGuard algae-resistant granules',
      'Ice & water shield, starter strip, ridge vent',
      'Lifetime transferable warranty',
    ],
  },
  {
    slug: 'metal-roof',
    title: 'Standing Seam & Exposed Fastener Metal Roof',
    shortTitle: 'Metal Roof',
    tagline: 'The gold standard in durability and energy efficiency.',
    description:
      'Galvalume and aluminum metal roofing installed with concealed standing-seam or economical exposed-fastener systems. Reflective Kynar finishes cut cooling costs 25%+. Metal roofs can last 50–70 years and shed Florida storms effortlessly.',
    image: '/metal_roofing.jpg',
    bullets: [
      'Standing seam 1.5"/1.75" profiles',
      '26-gauge Galvalume & 0.032" aluminum',
      'Kynar 500 / PVDF finishes (35-year color warranty)',
      'Cool-roof rated, Class A fire, Class 4 impact',
      'Ideal for coastal salt-air environments',
    ],
  },
  {
    slug: 'flat-roof',
    title: 'Flat Roof & TPO / Modified Bitumen Systems',
    shortTitle: 'Flat / TPO',
    tagline: 'Commercial-grade waterproofing for flat and low-slope roofs.',
    description:
      'Single-ply TPO, PVC, EPDM, and self-adhered modified bitumen systems for residential flat roofs, condos, warehouses, and commercial buildings. Fully-adhered and mechanically-fastened options with tapered insulation for proper drainage.',
    image: '/flat_roofing.jpeg',
    bullets: [
      'GAF EverGuard TPO, Carlisle Sure-Weld, Johns Manville',
      'Tapered ISO insulation for positive drainage',
      'Reinforced reflective white membrane (cool roof)',
      '15–25 year NDL warranties',
      'Residential & commercial flat roofs',
    ],
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repairs & Leak Fix',
    shortTitle: 'Repairs',
    tagline: 'Fast, surgical repairs diagnosed and fixed the first time.',
    description:
      'From a single missing shingle to chronic leak hunting, our repair division resolves the root cause — not just the symptom. Infrared leak detection, tile and shingle replacement, flashing, valley, ridge, and skylight repairs all covered.',
    image: '/shingle_roofing.jpeg',
    bullets: [
      'Infrared and moisture-meter leak detection',
      'Tile, shingle, metal, and flat-roof repair',
      'Flashing, valley, pipe-boot, skylight',
      'Insurance-claim documentation',
      '24/7 emergency response',
    ],
  },
  {
    slug: 'storm-damage',
    title: 'Storm & Hurricane Damage Restoration',
    shortTitle: 'Storm Damage',
    tagline: 'Full-service insurance roof restoration after the storm.',
    description:
      "We are Florida's storm response specialists. From free post-storm inspection to insurance adjuster meetings to full re-roof, we handle every step. No out-of-pocket surprises — just a new roof and peace of mind.",
    image: '/tile_roofing.jpeg',
    bullets: [
      'Free post-storm inspection with photo report',
      'Adjuster meetings and Xactimate expertise',
      'Emergency tarp and board-up',
      'Work directly with your insurance company',
      'Licensed public-adjuster partnerships',
    ],
  },
];
