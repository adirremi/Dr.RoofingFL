export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  path: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  bullets: string[];

  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;

  heroH1: string;
  heroH2: string;
  intro: string;
  longContent: { h3: string; body: string }[];
  benefits: { icon: 'shield' | 'clock' | 'dollar' | 'hammer' | 'wind' | 'star'; title: string; text: string }[];
  process: ServiceProcessStep[];
  priceRange: string;
  lifespan: string;
  bestFor: string[];
  brandsOffered: string[];
  faqs: ServiceFAQ[];
}

export const services: Service[] = [
  {
    slug: 'tile-roof',
    path: '/tile-roof-replacement-florida',
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
    metaTitle: 'Tile Roof Replacement in South Florida | Dr. Roofing FL',
    metaDescription:
      'Expert tile roof installation in Hollywood, Miami & all of South Florida. Concrete & clay tile, 50+ year life, HVHZ certified. Free quote — (754) 310-5557.',
    metaKeywords:
      'tile roof replacement Florida, concrete tile roof Miami, clay tile roof Hollywood, tile roofer South Florida, Eagle tile roof, Boral tile roof',
    heroH1: 'Tile Roof Replacement in Hollywood, Miami & South Florida',
    heroH2:
      'Concrete & Clay Tile Roofing Contractor Near You — 50+ Year Life, HVHZ Certified',
    intro:
      "Tile is the gold standard for Florida roofing — elegant, hurricane-rated, and engineered to last 50+ years in South Florida's brutal climate. Dr. Roofing FL is a factory-certified installer for Eagle, Boral, and US Tile concrete and clay systems. Every tile roof we install meets or exceeds the 2023 Florida Building Code HVHZ requirements with peel-and-stick secondary water barrier, stainless hurricane fasteners, and Miami-Dade NOA-approved components.",
    longContent: [
      {
        h3: 'Why Choose a Tile Roof in South Florida?',
        body:
          'Tile roofs are the single best investment for a Florida home. Concrete and clay tile resist 150+ mph winds, reflect solar heat (cutting cooling costs 15–25%), are fireproof, and carry 50-year manufacturer warranties. Unlike asphalt shingles that need replacing every 15–20 years, a properly installed tile roof is truly the last roof most homeowners will ever buy. Tile also increases home resale value by an average of 8–12% versus comparable shingle roofs.',
      },
      {
        h3: 'Concrete Tile vs. Clay Tile — Which Is Right for You?',
        body:
          'Concrete tile (Eagle, Boral, Entegra) is the workhorse of Florida roofing — more affordable, extremely durable, and available in every color and profile from flat to Spanish S-tile. Clay tile (US Tile, Ludowici) is the premium choice — natural terra-cotta color that never fades, slightly longer life, and the classic Mediterranean look. Both are HVHZ-certified and both carry lifetime warranties.',
      },
      {
        h3: 'HVHZ-Compliant Installation Process',
        body:
          'Every Dr. Roofing FL tile installation follows Florida Building Code Chapter 15 and Miami-Dade TAS protocols. We tear off to the deck, replace any rotted plywood, install a self-adhered peel-and-stick underlayment (not felt), apply Miami-Dade NOA-approved batten and hot-mop or foam-adhesive attachment, and secure every tile with stainless hurricane fasteners. The result: a roof rated for 150+ mph winds with a 50-year manufacturer warranty and our 10-year workmanship warranty.',
      },
      {
        h3: 'Tile Roof Maintenance and Longevity',
        body:
          "A tile roof isn't maintenance-free, but it's the closest thing. Every 3–5 years we recommend a professional inspection for cracked tiles, ridge cap deterioration, and flashing check. Minor tile replacements cost $200–$500 and keep your roof performing for its full 50+ year life. We offer free inspection for every tile roof we install for the first 5 years.",
      },
    ],
    benefits: [
      { icon: 'shield', title: 'Hurricane-Rated', text: '150+ mph wind rating, Miami-Dade NOA approved, HVHZ compliant.' },
      { icon: 'clock', title: '50+ Year Lifespan', text: 'The last roof you\'ll ever buy. Transferable 50-year warranty.' },
      { icon: 'dollar', title: 'Energy Savings', text: 'Reflects solar heat; typical homeowners save 15–25% on cooling.' },
      { icon: 'hammer', title: 'Factory-Certified', text: 'Eagle, Boral, US Tile, and Entegra certified installer.' },
      { icon: 'wind', title: 'Fire Resistant', text: 'Class A fire rating — the highest available.' },
      { icon: 'star', title: 'Boosts Home Value', text: '8–12% resale value increase vs. shingle roofs.' },
    ],
    process: [
      { title: '1. Free Inspection', text: 'Drone + walk-through inspection with written photo report — always free.' },
      { title: '2. Written Quote', text: 'Itemized quote with NOA numbers, color samples, and written timeline.' },
      { title: '3. HOA + Permit', text: 'We handle HOA ARB approval and pull the city permit in your name.' },
      { title: '4. Tear-Off + Deck', text: 'Full tear-off to the deck. Rotted plywood replaced at no extra charge.' },
      { title: '5. Underlayment', text: 'Self-adhered peel-and-stick secondary water barrier installed.' },
      { title: '6. Tile Install', text: 'Stainless fasteners, NOA-approved attachment, all flashings replaced.' },
      { title: '7. Inspection + Warranty', text: 'City inspection passed, manufacturer warranty registered, workmanship warranty issued.' },
    ],
    priceRange: '$18,000 – $38,000',
    lifespan: '50+ years',
    bestFor: ['Long-term homeowners', 'Coastal properties', 'Historic homes', 'High-value homes'],
    brandsOffered: ['Eagle Roofing Tile', 'Boral Roofing', 'US Tile', 'Entegra Roofing Tile', 'Ludowici Clay'],
    faqs: [
      {
        question: 'How long does a tile roof last in Florida?',
        answer:
          'A properly installed concrete or clay tile roof lasts 50+ years in Florida. Many tile roofs installed in the 1970s are still in excellent condition. Underlayment typically needs replacement at 25–30 years, but the tile itself can be re-used.',
      },
      {
        question: 'How much does a tile roof cost in South Florida?',
        answer:
          'Concrete tile runs $18,000–$30,000 for a typical 20-square home. Clay tile runs $24,000–$38,000. Complex pitches, decorative features, and tear-off of 2+ existing layers add 10–20%. We provide a free itemized written quote.',
      },
      {
        question: 'Is a tile roof hurricane-proof?',
        answer:
          'Properly installed tile roofs are rated for 150+ mph winds and have survived Hurricane Irma (Cat 4) and Ian (Cat 5) with minimal damage. The key is proper attachment — every tile we install is fastened per Miami-Dade NOA specifications with stainless hardware.',
      },
      {
        question: 'Can I install a tile roof over my existing shingles?',
        answer:
          'No. Florida code requires complete tear-off before tile installation. The underlying deck must also be inspected and any rotted plywood replaced.',
      },
      {
        question: 'What colors are available for tile roofs?',
        answer:
          'Eagle, Boral, and US Tile offer 50+ color options including Mediterranean terra-cotta, charcoal black, coastal whites, and blended color ranges. We provide physical color samples at your free consultation.',
      },
      {
        question: 'Will a tile roof lower my home insurance?',
        answer:
          'Yes — Florida insurance carriers typically offer 15–45% wind-mitigation discounts for a new HVHZ-compliant tile roof. We include the OIR-B1-1802 wind-mitigation inspection form at no charge.',
      },
    ],
  },
  {
    slug: 'shingle-roof',
    path: '/shingle-roof-installation-florida',
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
    metaTitle: 'Shingle Roof Installation in South Florida | Dr. Roofing FL',
    metaDescription:
      'Architectural shingle roofing in Hollywood, Miami, Broward & Miami-Dade. GAF & Owens Corning certified, 130 mph wind rating, lifetime warranty. (754) 310-5557.',
    metaKeywords:
      'shingle roof installation Florida, architectural shingles Miami, GAF Timberline Hollywood, Owens Corning Duration Broward, shingle roofer South Florida',
    heroH1: 'Architectural Shingle Roof Installation in South Florida',
    heroH2:
      'GAF & Owens Corning Certified Shingle Roofing Contractor Near You',
    intro:
      "Architectural shingles are the most popular roofing choice in Florida — and for good reason. Modern Class-4 impact-rated shingles are engineered for 130+ mph winds, shed Florida's heavy rain effortlessly, and carry lifetime transferable warranties. Dr. Roofing FL is a GAF Master Elite and Owens Corning Platinum Preferred Contractor — a distinction held by fewer than 3% of Florida roofers.",
    longContent: [
      {
        h3: 'Why Architectural Shingles Work So Well in Florida',
        body:
          'Modern architectural shingles bear almost no resemblance to the flat 3-tab shingles of 20 years ago. Today\'s GAF Timberline HDZ, Owens Corning Duration StormGuard, and CertainTeed Landmark ClimateFlex are multi-layer laminated shingles with algae-resistant granules, sealant that activates at 140°F, and Class-4 impact ratings that qualify for insurance discounts. They\'re rated for 130 mph base-wind with upgrades to 150 mph available.',
      },
      {
        h3: 'The Complete Roofing System — Not Just Shingles',
        body:
          'A shingle roof is only as good as its underlayment, flashing, and ventilation. Every Dr. Roofing FL shingle installation includes: peel-and-stick ice & water shield at all eaves and valleys, synthetic underlayment, aluminum drip edge, starter strip with factory adhesive, 6-nail pattern on every shingle, ridge vent for proper ventilation, and all pipe boots and flashings replaced.',
      },
      {
        h3: 'Class-4 Impact Rating = Insurance Discount',
        body:
          'Class-4 impact-rated shingles (GAF UHDZ, Owens Corning Duration StormGuard) qualify most Florida homeowners for a 5–20% discount on the wind-and-hail portion of their insurance policy. The upgrade costs $300–$800 but typically pays for itself in 3–4 years through insurance savings alone.',
      },
      {
        h3: 'Algae Resistance is Critical in South Florida',
        body:
          "Florida's humidity causes black algae streaks on roofs within 3–5 years. Every shingle we install carries StainGuard algae-resistant granules with a 10–25 year stain-resistance warranty, keeping your roof looking new for decades.",
      },
    ],
    benefits: [
      { icon: 'dollar', title: 'Best Value', text: 'Lowest cost per year of service — starting under $10k for typical homes.' },
      { icon: 'shield', title: 'Class-4 Impact', text: 'Impact-rated shingles available; qualify for insurance discounts.' },
      { icon: 'wind', title: '130 mph Wind', text: 'Rated for 130 mph base-wind; upgradeable to 150 mph.' },
      { icon: 'star', title: 'Algae Resistant', text: 'StainGuard granules keep your roof clean for decades.' },
      { icon: 'clock', title: '25–30 Year Life', text: 'Lifetime transferable manufacturer warranty.' },
      { icon: 'hammer', title: 'Master Elite', text: 'Top 3% of Florida shingle installers (GAF Master Elite).' },
    ],
    process: [
      { title: '1. Free Inspection', text: 'Complete roof inspection with photo documentation.' },
      { title: '2. Color Samples', text: 'We bring physical shingle samples so you pick in-person.' },
      { title: '3. HOA + Permit', text: 'We handle HOA ARB approval and pull the city permit.' },
      { title: '4. Tear-Off', text: 'Complete tear-off to the deck, rotted plywood replaced.' },
      { title: '5. Underlayment', text: 'Ice & water shield at eaves/valleys, synthetic everywhere else.' },
      { title: '6. Shingle Install', text: '6-nail pattern, starter strip, ridge vent, all flashings replaced.' },
      { title: '7. Final Inspection', text: 'City inspection + manufacturer + workmanship warranty issued.' },
    ],
    priceRange: '$9,500 – $17,000',
    lifespan: '25–30 years',
    bestFor: ['Budget-conscious homeowners', 'HOA-restricted neighborhoods', 'Quick-turnaround projects'],
    brandsOffered: ['GAF Timberline HDZ', 'GAF UHDZ', 'Owens Corning Duration', 'CertainTeed Landmark', 'Atlas Pinnacle Pristine'],
    faqs: [
      {
        question: 'How long does a shingle roof last in Florida?',
        answer:
          'Modern architectural shingles installed to manufacturer specifications last 25–30 years in Florida. Impact-rated shingles and properly ventilated roofs tend toward the upper end of that range.',
      },
      {
        question: 'How much does a shingle roof cost in South Florida?',
        answer:
          'A typical 20-square shingle re-roof in South Florida runs $9,500–$14,000. Impact-rated shingles add $300–$800. Larger or more complex roofs $14,000–$17,000. Free itemized quotes always.',
      },
      {
        question: 'How fast can you install a shingle roof?',
        answer:
          'Most shingle roofs are torn off, underlaid, installed, and cleaned up in 1–2 days. Larger homes 2–3 days. We work straight through, weather permitting.',
      },
      {
        question: 'What is GAF Master Elite?',
        answer:
          'GAF Master Elite is GAF\'s highest contractor certification — held by fewer than 3% of roofing contractors nationwide. It unlocks the Golden Pledge warranty, GAF\'s most comprehensive coverage.',
      },
      {
        question: 'Do you offer financing on shingle roofs?',
        answer:
          'Yes. $0 down, no minimum credit, up to 16 months no payments. Monthly payments from $99.',
      },
      {
        question: 'Do I need to upgrade to impact-rated shingles?',
        answer:
          'Not required, but strongly recommended in Florida. The 5–20% wind-and-hail insurance discount usually pays back the upgrade in 3–4 years.',
      },
    ],
  },
  {
    slug: 'metal-roof',
    path: '/metal-roof-florida',
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
    metaTitle: 'Metal Roof Installation in South Florida | Dr. Roofing FL',
    metaDescription:
      'Standing-seam & exposed-fastener metal roofing in Hollywood, Miami, Broward, Miami-Dade. Aluminum, Galvalume, Kynar 500. 50-70 year life. (754) 310-5557.',
    metaKeywords:
      'metal roof Florida, standing seam metal roof Miami, aluminum roof Hollywood, Galvalume roof South Florida, Kynar 500 roof Broward',
    heroH1: 'Standing-Seam & Exposed-Fastener Metal Roofing in South Florida',
    heroH2:
      'Aluminum & Galvalume Metal Roof Contractor Near You — 50-70 Year Life',
    intro:
      "Metal roofs are the absolute best performer in South Florida's climate — rated for 165+ mph winds, 50–70 year lifespan, cool-roof certified, and 100% corrosion-resistant when specified in aluminum. Dr. Roofing FL installs Kynar 500-finished standing-seam and exposed-fastener systems from Drexel Metals, McElroy Metal, and Englert — all Miami-Dade NOA approved for HVHZ.",
    longContent: [
      {
        h3: 'Why Metal Wins in Florida',
        body:
          "If money is no object, metal is the best roof you can put on a Florida home — especially coastal homes. Standing-seam aluminum resists salt corrosion forever (galvanized steel rusts in 7–10 years on the beach), deflects solar radiation with Kynar 500 cool-roof finishes (cutting A/C costs 25–30%), sheds wind-driven rain cleanly, and lasts 50–70+ years. It's also the only roofing system where the color is guaranteed for 35 years under a PVDF/Kynar finish warranty.",
      },
      {
        h3: 'Standing Seam vs. Exposed Fastener',
        body:
          'Standing-seam metal is the premium system — concealed fasteners, watertight interlocking seams, clean architectural look. Typical cost $13–$18/sq ft installed. Exposed-fastener panels (5V crimp, R-panel) are the budget metal option — screws penetrate the panel face, visible fastener heads, $8–$12/sq ft installed. Both work in Florida; standing seam is strongly preferred for residential.',
      },
      {
        h3: 'Aluminum vs. Galvalume — Material Selection',
        body:
          'Aluminum (0.032" or 0.040") is 100% corrosion-proof and the only metal to use within 1,500 feet of the Atlantic. Galvalume (26-gauge steel with aluminum-zinc coating) is cheaper and great for inland Florida homes. Both get the same Kynar 500 finish in 30+ colors. We always recommend aluminum for Hallandale, Hollywood Beach, Dania Beach, Fort Lauderdale Beach, and Aventura.',
      },
      {
        h3: 'Cool Roof Energy Savings',
        body:
          "A Kynar 500-finished metal roof reflects 40–70% of solar heat versus asphalt shingles which absorb 85%+. ENERGY STAR certified metal roofs can cut cooling costs $500–$1,200/year in a typical Florida home — meaning the roof can pay for itself over 15–20 years in energy savings alone.",
      },
    ],
    benefits: [
      { icon: 'clock', title: '50-70 Year Life', text: 'The longest-lasting residential roof material.' },
      { icon: 'wind', title: '165+ mph Wind', text: 'The highest wind rating of any common Florida roof.' },
      { icon: 'dollar', title: '25-30% A/C Savings', text: 'Kynar 500 cool-roof finish reflects solar heat.' },
      { icon: 'shield', title: 'Salt Air Proof', text: 'Aluminum is 100% corrosion-resistant forever.' },
      { icon: 'star', title: '35-Year Color Warranty', text: 'PVDF/Kynar finish guaranteed not to fade.' },
      { icon: 'hammer', title: 'Class 4 Impact', text: 'Insurance discount + hail resistance.' },
    ],
    process: [
      { title: '1. Free Inspection', text: 'Roof measure, pitch analysis, color consultation.' },
      { title: '2. Custom Quote', text: 'Aluminum or Galvalume, profile, fastening, accessories.' },
      { title: '3. HOA + Permit', text: 'We handle HOA approval and pull the permit.' },
      { title: '4. Tear-Off', text: 'Complete tear-off, deck inspection, rot repair.' },
      { title: '5. Underlayment', text: 'High-temp peel-and-stick under metal — mandatory.' },
      { title: '6. Custom-Cut Panels', text: 'Panels cut on-site to exact length, no lap seams.' },
      { title: '7. Final Inspection', text: 'Seam pressure-test, all flashings sealed, warranty issued.' },
    ],
    priceRange: '$22,000 – $48,000',
    lifespan: '50–70 years',
    bestFor: ['Coastal homes', 'Premium/custom homes', 'Energy-conscious homeowners', 'Hurricane-country'],
    brandsOffered: ['Drexel Metals', 'McElroy Metal', 'Englert', 'Petersen Aluminum', 'ATAS International'],
    faqs: [
      {
        question: 'How long does a metal roof last?',
        answer:
          'A properly installed standing-seam aluminum or Galvalume metal roof lasts 50–70+ years. Finish warranties are 35 years. It\'s the longest-lasting residential roofing system available.',
      },
      {
        question: 'How much does a metal roof cost in South Florida?',
        answer:
          'Standing-seam aluminum: $24,000–$42,000 for a typical home. Galvalume: $22,000–$38,000. Exposed-fastener 5V crimp: $18,000–$28,000. We provide free itemized quotes.',
      },
      {
        question: 'Is a metal roof noisy in the rain?',
        answer:
          'No. With proper underlayment and attic insulation a metal roof is no noisier than shingles or tile. The "tin roof in rain" sound only happens on bare-deck agricultural buildings without underlayment.',
      },
      {
        question: 'Does a metal roof attract lightning?',
        answer:
          'No — this is a persistent myth. Metal roofs are no more likely to be struck than any other roof, and if struck they actually dissipate the energy safely because metal is a good conductor.',
      },
      {
        question: 'Will a metal roof dent in a hailstorm?',
        answer:
          'Class-4 impact-rated metal roofs resist 2" hail with minimal marking. Aluminum shows minor cosmetic dings less than steel.',
      },
      {
        question: 'Can I walk on a metal roof?',
        answer:
          'Yes, carefully — we train our crews and we walk most metal roofs for maintenance. Soft-soled shoes, and always walk on the fastened flats not the ribs.',
      },
    ],
  },
  {
    slug: 'flat-roof',
    path: '/flat-roof-tpo-florida',
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
    metaTitle: 'Flat Roof & TPO Installation in South Florida | Dr. Roofing FL',
    metaDescription:
      'Commercial & residential flat roof TPO, PVC, modified bitumen in Hollywood, Miami, Broward, Miami-Dade. 15-25 year warranties. (754) 310-5557.',
    metaKeywords:
      'flat roof Miami, TPO roof Hollywood, commercial roof Broward, modified bitumen Florida, PVC roof South Florida, warehouse roof Miami',
    heroH1: 'Flat Roof, TPO & Commercial Roofing in South Florida',
    heroH2:
      'Licensed Flat-Roof Contractor Near You — TPO, PVC, Modified Bitumen',
    intro:
      'Flat roofs require a specialist — and Dr. Roofing FL is that specialist. We install reinforced TPO, PVC, EPDM, and self-adhered modified bitumen systems on residential flat roofs, condominiums, warehouses, office buildings, and retail centers throughout South Florida. Every flat roof gets tapered insulation for positive drainage, reinforced white reflective membrane for cool-roof performance, and 15–25 year No-Dollar-Limit (NDL) manufacturer warranties.',
    longContent: [
      {
        h3: 'TPO vs. PVC vs. Modified Bitumen vs. EPDM',
        body:
          "The four modern flat-roof systems each have strengths. TPO (thermoplastic polyolefin) is the most popular — white reflective, heat-welded seams, 20–25 year life, affordable. PVC is TPO's premium cousin — superior chemical resistance, best for restaurants and kitchens. Modified bitumen (mod-bit) is the 2-ply torch-down or self-adhered system — traditional, extremely durable, still widely used on Florida homes. EPDM (rubber) is black, highly flexible, long life — less common in sunny Florida because it absorbs heat.",
      },
      {
        h3: 'The Critical Role of Tapered Insulation',
        body:
          "Most flat-roof leaks are actually caused by ponding water, not material failure. A proper flat roof has tapered polyiso insulation creating a minimum 1/4\" per foot slope toward drains or gutters. Every Dr. Roofing FL flat-roof install includes custom tapered insulation design — not just flat insulation board with a membrane on top. Tapered ISO also boosts R-value to R-20+ for significant A/C savings.",
      },
      {
        h3: 'Commercial Roofing Services',
        body:
          "For commercial clients we provide: scheduled maintenance programs, annual inspection with photo reports, 24/7 emergency leak service, insurance claim documentation, and capital planning for multi-year roof replacement. Our commercial division serves property managers, condo boards, school districts, and industrial facilities across Broward and Miami-Dade.",
      },
      {
        h3: 'Residential Flat Roofs',
        body:
          'Many Florida homes have partial flat roofs over Florida rooms, garages, or carports. These smaller flat sections are actually more leak-prone than commercial flat roofs because they\'re usually attached poorly to the main roof. We specialize in residential flat-roof installations under 2,000 sq ft and handle the transitions to your main tile or shingle roof properly.',
      },
    ],
    benefits: [
      { icon: 'shield', title: '15-25 Yr Warranty', text: 'No-Dollar-Limit manufacturer warranties.' },
      { icon: 'dollar', title: 'Cool Roof', text: 'White TPO reflects heat; R-20+ insulation cuts A/C cost.' },
      { icon: 'clock', title: 'Tapered Drainage', text: 'Engineered slope ends ponding water forever.' },
      { icon: 'hammer', title: 'GAF & Carlisle Certified', text: 'Authorized installer for top commercial brands.' },
      { icon: 'wind', title: 'Wind-Rated', text: 'Mechanically-fastened or fully-adhered for HVHZ.' },
      { icon: 'star', title: 'Commercial Expertise', text: 'Condos, warehouses, retail — up to 500,000 sq ft.' },
    ],
    process: [
      { title: '1. Leak Audit + Inspection', text: 'Moisture-meter survey, core samples, drainage analysis.' },
      { title: '2. Engineered Quote', text: 'System specification, tapered design, manufacturer NOA.' },
      { title: '3. Permit + Coordination', text: 'Permit pull, staging plan, tenant/business coordination.' },
      { title: '4. Tear-Off', text: 'Complete tear-off to deck OR overlay where code permits.' },
      { title: '5. Tapered ISO', text: 'Custom-cut tapered insulation installed for drainage.' },
      { title: '6. Membrane Install', text: 'TPO/PVC heat-welded or mod-bit self-adhered.' },
      { title: '7. Final Inspection', text: 'Seam probe test, drain flow test, NDL warranty issued.' },
    ],
    priceRange: '$6 – $14 / sq ft',
    lifespan: '20–25 years',
    bestFor: ['Commercial buildings', 'Condos & HOAs', 'Residential flat sections', 'Warehouses'],
    brandsOffered: ['GAF EverGuard TPO', 'Carlisle Sure-Weld', 'Johns Manville', 'Firestone UltraPly', 'CertainTeed Flintlastic'],
    faqs: [
      {
        question: 'How long does a TPO roof last?',
        answer:
          'A properly installed TPO roof lasts 20–25 years. Premium 80-mil thickness TPO can push 25–30 years. PVC typically lasts slightly longer than TPO.',
      },
      {
        question: 'What causes most flat roof leaks?',
        answer:
          'Ponding water is the #1 cause. When water sits on a roof longer than 48 hours it accelerates membrane breakdown. Proper tapered insulation fixes this permanently.',
      },
      {
        question: 'Can you repair my flat roof or do I need a replacement?',
        answer:
          'Depends on age, condition, and leak pattern. We do a moisture survey and core sample — if wet insulation is more than 25% of the roof, replace. Otherwise repair.',
      },
      {
        question: 'How much does a commercial TPO roof cost?',
        answer:
          '$6–$10/sq ft for standard 60-mil TPO with basic insulation. $10–$14/sq ft for premium 80-mil TPO with full tapered insulation package.',
      },
      {
        question: 'Do you provide maintenance contracts?',
        answer:
          'Yes. Annual inspection, photo report, minor repairs, and full documentation. Pricing based on sq ft — typically $0.05–$0.15/sq ft/year.',
      },
      {
        question: 'What brand TPO do you install?',
        answer:
          'GAF EverGuard, Carlisle Sure-Weld, Johns Manville, and Firestone UltraPly — all Miami-Dade NOA-approved for HVHZ installation.',
      },
    ],
  },
  {
    slug: 'roof-repair',
    path: '/roof-repair-florida',
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
    metaTitle: 'Roof Repair & Leak Fix in South Florida | Dr. Roofing FL',
    metaDescription:
      '24/7 roof repair and leak detection in Hollywood, Miami, Broward, Miami-Dade. Tile, shingle, metal, flat. Same-day service. Call (754) 310-5557.',
    metaKeywords:
      'roof repair Miami, roof leak Hollywood, emergency roof repair Broward, tile roof repair Florida, flashing repair Miami-Dade',
    heroH1: 'Roof Repair, Leak Detection & Emergency Service in South Florida',
    heroH2: 'Same-Day Roof Repair Contractor Near You — Licensed, Insured, 24/7',
    intro:
      "When your roof is leaking you don't have time for a salesman — you need a roofer. Dr. Roofing FL runs a dedicated repair division that does one thing: diagnose and fix roof leaks the first time. We don't upsell full replacements unless the roof actually needs one. Infrared moisture detection, tile/shingle replacement, flashing rebuilds, pipe-boot replacement, skylight re-seal, and chronic-leak hunting across tile, shingle, metal, and flat roofs.",
    longContent: [
      {
        h3: 'Why Most Roofers Fail at Leak Repair',
        body:
          "Leak repair is a diagnostic art. Water enters your roof in one place and shows up 15 feet away on your ceiling — so surface-level patches rarely work. Our repair specialists use infrared thermal imaging (to find wet insulation under the membrane), moisture meters (to map the actual water path), and 15+ years of pattern-recognition experience to find the real source. We fix it once. No callbacks.",
      },
      {
        h3: 'Common Leak Sources We Fix',
        body:
          'In order of frequency: (1) cracked pipe-boot collars around plumbing vents; (2) failed flashing at chimneys and skylights; (3) cracked or missing tiles/shingles from wind or impact; (4) nail pops — rusted or lifted nails; (5) valley failure where two roof planes meet; (6) ridge-cap failure; (7) wind-driven rain through compromised soffit; (8) faulty skylight seals. Each has a specific repair protocol.',
      },
      {
        h3: '24/7 Emergency Tarp and Dry-In',
        body:
          "After a storm or active leak we dispatch within hours for emergency tarp, dry-in, and temporary leak-stop. This buys you 30–90 days to handle an insurance claim or schedule a permanent repair. Emergency service available 24/7 throughout Broward and Miami-Dade. Call (754) 310-5557.",
      },
      {
        h3: 'Insurance Claim Documentation',
        body:
          "Many repair scenarios are insurance-covered — impact damage, named-storm damage, sudden-and-accidental water events. We photograph damage, take moisture readings, create a written scope of work using Xactimate pricing, and meet your adjuster on-site to ensure everything is properly documented. You focus on your family; we handle the claim paperwork.",
      },
    ],
    benefits: [
      { icon: 'clock', title: 'Same-Day Service', text: 'Most repairs scheduled within 24 hours.' },
      { icon: 'shield', title: 'Infrared Detection', text: 'Thermal imaging finds the real leak source.' },
      { icon: 'hammer', title: 'All Roof Types', text: 'Tile, shingle, metal, flat — one call fixes it.' },
      { icon: 'dollar', title: 'Honest Pricing', text: 'Flat-rate repairs, no surprises, no upsells.' },
      { icon: 'star', title: '2-Year Warranty', text: 'Every repair backed by 2-year workmanship warranty.' },
      { icon: 'wind', title: '24/7 Emergency', text: 'Storm tarps, dry-in, and leak-stop anywhere.' },
    ],
    process: [
      { title: '1. Emergency Call', text: 'We call back within 30 minutes, 24/7.' },
      { title: '2. Dispatch', text: 'Crew dispatched same-day or next-day.' },
      { title: '3. Diagnosis', text: 'Infrared + visual inspection; root-cause identified.' },
      { title: '4. Written Quote', text: 'Flat-rate repair quote — approve on site or later.' },
      { title: '5. Repair', text: 'Performed on-site; most repairs completed same day.' },
      { title: '6. Leak Test', text: 'Water test verifies repair performed; photo documentation.' },
      { title: '7. Warranty', text: '2-year workmanship warranty on every repair.' },
    ],
    priceRange: '$250 – $1,800 typical',
    lifespan: 'Varies by repair',
    bestFor: ['Active leaks', 'Post-storm damage', 'Pre-sale home inspections', 'Insurance claims'],
    brandsOffered: ['All major brands repaired', 'GAF', 'Owens Corning', 'CertainTeed', 'Eagle Tile', 'Boral Tile'],
    faqs: [
      {
        question: 'How much does a roof repair cost?',
        answer:
          'Small repairs (pipe boot, a few shingles, minor flashing): $250–$500. Medium repairs (valley rebuild, chimney flashing, skylight re-seal): $500–$1,200. Complex chronic-leak hunting: $1,200–$1,800. Flat-rate, no surprises.',
      },
      {
        question: 'Do you do emergency repairs at night or on weekends?',
        answer:
          'Yes. 24/7 emergency tarp and leak-stop service. Call (754) 310-5557 any time; we dispatch within hours.',
      },
      {
        question: 'How do you find a leak I can\'t trace myself?',
        answer:
          'Infrared thermal imaging scans the roof for wet insulation, then a moisture meter confirms. We also use water-hose testing in sections to isolate the entry point. 95% of chronic leaks are diagnosed within 30 minutes.',
      },
      {
        question: 'Do you warranty your repairs?',
        answer:
          '2-year workmanship warranty on every repair, whether it\'s a $250 pipe boot or a $1,800 chimney rebuild.',
      },
      {
        question: 'Should I repair or replace my roof?',
        answer:
          'Rule of thumb: if your roof is under 15 years old and the damage is localized, repair. If it\'s over 20 years old or has widespread granule loss/tile crack pattern, full replacement is usually the better investment. We\'ll give you an honest recommendation.',
      },
      {
        question: 'Do you work with insurance for storm repairs?',
        answer:
          'Absolutely. Photo documentation, moisture readings, Xactimate-compliant scope, and adjuster meetings included at no charge.',
      },
    ],
  },
  {
    slug: 'storm-damage',
    path: '/storm-damage-restoration-florida',
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
    metaTitle: 'Storm & Hurricane Damage Roof Restoration | Dr. Roofing FL',
    metaDescription:
      'Hurricane & storm damage roof restoration in Hollywood, Miami, Broward, Miami-Dade. Full insurance claim handling, emergency tarp, free inspection. (754) 310-5557.',
    metaKeywords:
      'hurricane roof damage Florida, storm roof repair Miami, insurance roof claim Hollywood, roof restoration Broward, emergency roof tarp Miami-Dade',
    heroH1: 'Storm & Hurricane Roof Damage Restoration in South Florida',
    heroH2:
      'Licensed Insurance Restoration Contractor Near You — Free Inspection',
    intro:
      "When a storm hits, Dr. Roofing FL is who you call. Our dedicated restoration division handles the entire insurance claim process from free post-storm inspection to emergency tarp, to adjuster meeting, to full roof replacement — you pay only your deductible. We document every piece of damage with photos, moisture readings, and Xactimate-compliant estimates so nothing is missed on your claim.",
    longContent: [
      {
        h3: 'The Full Insurance Restoration Process',
        body:
          "Step 1: We come out free for a post-storm inspection (drone + walk-through + moisture reading). Step 2: If damage is present we emergency tarp within hours to prevent further loss. Step 3: We prepare a Xactimate-compliant scope of work with photos — this is the document your insurance company will evaluate. Step 4: We meet your adjuster on-site to walk through every piece of damage, ensuring nothing is missed. Step 5: Once the claim is approved we install your new roof. You pay your deductible; insurance pays us directly.",
      },
      {
        h3: 'What Qualifies as Storm Damage?',
        body:
          'Wind damage (lifted shingles/tiles from named or unnamed wind events), impact damage (hail, flying debris, tree branches), wind-driven rain intrusion, sudden-and-accidental water events, and named-hurricane damage are all typically covered by Florida homeowners insurance policies. Age-related wear, poor prior installation, and gradual deterioration are NOT covered — this is the #1 reason claims get denied.',
      },
      {
        h3: 'Common Claim Mistakes Homeowners Make',
        body:
          "Mistake #1: Calling insurance before calling a roofer. Always get a professional inspection first — you don't file a claim unless there's actual storm damage. Mistake #2: Accepting the adjuster's first estimate. Adjusters miss damage routinely — we meet them on-site to ensure everything is documented. Mistake #3: Signing a contract that lets insurance reduce your payout. We don't use those contracts. Mistake #4: Waiting too long — most Florida policies have a 1-year window to file.",
      },
      {
        h3: 'Emergency Tarp and Dry-In',
        body:
          "The first 24 hours after a storm are critical. Rainwater entering through damaged roofing causes interior drywall, flooring, and possession damage worth $20,000–$100,000+. Emergency tarping seals your roof for 30–90 days while the claim is processed. We dispatch 24/7 across all of South Florida. Call (754) 310-5557.",
      },
    ],
    benefits: [
      { icon: 'shield', title: 'Full Claim Handling', text: 'Adjuster meetings, photos, Xactimate, direct billing.' },
      { icon: 'clock', title: '24/7 Emergency Tarp', text: 'On-site within hours of dispatch.' },
      { icon: 'dollar', title: 'You Only Pay Deductible', text: 'Insurance pays us direct — no out-of-pocket surprises.' },
      { icon: 'hammer', title: 'Xactimate Expertise', text: 'We speak the same language as your adjuster.' },
      { icon: 'star', title: 'Licensed & Bonded', text: 'Florida Certified Roofing Contractor, fully insured.' },
      { icon: 'wind', title: 'Hurricane Specialists', text: 'Irma, Ian, Nicole — hundreds of restored roofs.' },
    ],
    process: [
      { title: '1. Free Inspection', text: 'Drone + moisture reading within 24–48 hours.' },
      { title: '2. Emergency Tarp', text: 'If damage present — tarp within hours.' },
      { title: '3. Claim Filing', text: 'We help you file the claim correctly.' },
      { title: '4. Xactimate Scope', text: 'Written estimate matching insurance software.' },
      { title: '5. Adjuster Meeting', text: 'We meet your adjuster on-site.' },
      { title: '6. Full Re-Roof', text: 'New roof installed once claim approved.' },
      { title: '7. Final Payment', text: 'Insurance pays us direct; you pay only deductible.' },
    ],
    priceRange: 'Insurance covered (deductible only)',
    lifespan: 'New roof — 25-70+ years depending on material',
    bestFor: ['Post-hurricane damage', 'Wind damage', 'Impact/hail damage', 'Sudden water events'],
    brandsOffered: ['All major brands', 'Working with all Florida insurers'],
    faqs: [
      {
        question: 'Is my storm damage covered by insurance?',
        answer:
          'Most Florida homeowners policies cover wind damage, impact damage (hail, debris), sudden-and-accidental water events, and named-hurricane damage. Age-related wear is not covered. Free inspection tells you definitively.',
      },
      {
        question: 'How soon after a storm should I call?',
        answer:
          'Immediately. Most Florida policies have a 1-year filing window, but hidden water damage gets worse by the day. Call (754) 310-5557 for a free same-day inspection.',
      },
      {
        question: 'What if my claim is denied?',
        answer:
          'We can refer you to a licensed Florida public adjuster who specializes in denied claims and underpaid claims. Many denied claims are successfully re-opened with proper documentation.',
      },
      {
        question: 'Will filing a claim increase my premium?',
        answer:
          'Florida law prohibits insurers from raising your rate or non-renewing you solely for filing a single storm-damage claim. Multiple claims within 3 years may be a different story.',
      },
      {
        question: 'How much is my deductible going to be?',
        answer:
          'Most Florida policies have a 2% hurricane deductible for named storms (e.g. $6,000 on a $300k home) and a flat $500–$2,500 deductible for unnamed wind/hail. Check your declarations page.',
      },
      {
        question: 'Do you work directly with my insurance company?',
        answer:
          'Yes. We bill the insurance company directly once the claim is approved. You pay only your deductible.',
      },
    ],
  },
];

export const servicesBySlug: Record<string, Service> = services.reduce((acc, s) => {
  acc[s.slug] = s;
  return acc;
}, {} as Record<string, Service>);
