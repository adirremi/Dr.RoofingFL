/**
 * Project case-study data. Each project becomes its own SEO page
 * with 300+ word description, geotagged image, and structured data.
 */

export interface Project {
  slug: string;
  path: string;
  title: string;
  serviceSlug: string;
  serviceLabel: string;
  citySlug: string;
  city: string;
  state: string;
  neighborhood: string;
  zip: string;
  completedDate: string; // ISO yyyy-mm-dd
  image: string;
  images?: string[];
  squares: number; // roof squares (100 sq ft)
  duration: string;
  priceRange: string;
  material: string;
  colorChoice: string;
  warranty: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  summary: string;
  fullDescription: string; // 300+ words
  challenges: string[];
  solution: string[];
  outcome: string;
  youtubeId?: string;
  clientQuote?: string;
  clientName?: string;
  latitude: number;
  longitude: number;
}

export const projects: Project[] = [
  {
    slug: 'hollywood-lakes-tile-roof-replacement',
    path: '/projects/hollywood-lakes-tile-roof-replacement',
    title: 'Full Concrete Tile Roof Replacement — Hollywood Lakes',
    serviceSlug: 'tile-roof',
    serviceLabel: 'Tile Roof Replacement',
    citySlug: 'hollywood',
    city: 'Hollywood',
    state: 'FL',
    neighborhood: 'Hollywood Lakes',
    zip: '33020',
    completedDate: '2026-03-12',
    image: '/gallery/dr-rf-01.webp',
    images: ['/gallery/dr-rf-01.webp', '/gallery/dr-rf-02.webp', '/gallery/dr-rf-03.webp'],
    squares: 32,
    duration: '7 days',
    priceRange: '$28,000',
    material: 'Eagle Roofing Concrete Tile, Malibu Profile',
    colorChoice: 'Sedona Sunset Blend',
    warranty: '50-year Eagle + 10-year workmanship',
    metaTitle: 'Case Study: Tile Roof Replacement in Hollywood Lakes | Dr. Roofing FL',
    metaDescription:
      'Full concrete tile roof replacement in Hollywood Lakes (33020) — 32-square Eagle Sedona Sunset install, HVHZ-certified. 7 days. Dr. Roofing FL case study.',
    metaKeywords:
      'tile roof Hollywood Lakes, Hollywood 33020 roof replacement, Eagle tile Hollywood FL, HVHZ tile roof project',
    summary:
      '32-square concrete tile replacement on a 1923 Spanish Colonial home in the Hollywood Lakes historic district. Full tear-off, plywood replacement, Eagle Sedona Sunset Blend tile, HVHZ-certified installation.',
    fullDescription:
      "This 1923 Spanish Colonial home in Hollywood Lakes had an aging barrel tile roof that was well past its useful life — multiple broken tiles, granulated underlayment, and active leaks in the kitchen and master bedroom. The homeowner wanted to maintain the historic look but upgrade to a modern HVHZ-compliant system. Our team performed a complete tear-off to the deck, discovered and replaced 180 sq ft of rotted plywood, and installed a self-adhered Polyglass Elastoflex SP FR peel-and-stick underlayment as the secondary water barrier. We then installed Eagle Roofing Malibu-profile concrete tile in the Sedona Sunset Blend color — a terra-cotta-to-charcoal gradient that matches the neighborhood's Mediterranean character. All tile was attached with Miami-Dade NOA-approved stainless hurricane fasteners and factory batten strips, delivering a 150+ mph wind rating. The project took 7 days from tear-off to final city inspection and included HOA Architectural Review Board approval, permit pull, all flashings replaced, new copper pipe boots, and ridge-vent installation. The homeowner received a 50-year Eagle manufacturer warranty and our 10-year workmanship warranty. The final installation also qualifies the home for a 35% wind-mitigation insurance discount via the OIR-B1-1802 form we filed on the homeowner's behalf.",
    challenges: [
      'Historic HOA Architectural Review Board approval required',
      'Original 1923 decking needed partial plywood replacement (180 sq ft)',
      'Tight driveway access required small-scale material staging',
      'Matching original Spanish Colonial tile profile',
    ],
    solution: [
      'Prepared ARB submission with color samples and photo renderings',
      'Used Eagle Malibu barrel profile — matches original',
      'Replaced decking during tear-off at no extra charge',
      'Staged materials on adjacent lot with neighbor permission',
    ],
    outcome:
      '7-day turnaround, passed Broward County inspection first try, homeowner received 35% wind-mitigation insurance discount immediately.',
    clientQuote:
      'Dr. Roofing FL preserved the historic look of our home while giving us a hurricane-rated roof. Worth every penny.',
    clientName: 'The Martinez Family, Hollywood Lakes',
    latitude: 26.0128,
    longitude: -80.1518,
  },

  {
    slug: 'brickell-miami-tpo-commercial-roof',
    path: '/projects/brickell-miami-tpo-commercial-roof',
    title: 'Commercial TPO Flat Roof — Brickell Office Building',
    serviceSlug: 'flat-roof',
    serviceLabel: 'Flat Roof / TPO',
    citySlug: 'miami',
    city: 'Miami',
    state: 'FL',
    neighborhood: 'Brickell',
    zip: '33131',
    completedDate: '2026-02-28',
    image: '/gallery/dr-rf-04.webp',
    images: ['/gallery/dr-rf-04.webp', '/gallery/dr-rf-05.webp', '/gallery/dr-rf-06.webp'],
    squares: 220,
    duration: '12 days',
    priceRange: '$184,000',
    material: 'GAF EverGuard 60-mil TPO, white',
    colorChoice: 'Reflective White',
    warranty: '25-year NDL GAF Diamond Pledge + 10-year workmanship',
    metaTitle: 'Case Study: Commercial TPO Roof in Brickell Miami | Dr. Roofing FL',
    metaDescription:
      '22,000 sq ft GAF EverGuard TPO flat-roof replacement on a Brickell Miami office building. Tapered insulation, 25-year NDL warranty. Case study.',
    metaKeywords:
      'Brickell commercial roof, Miami TPO roof, office building roof Miami 33131, GAF EverGuard Miami, commercial flat roof Miami',
    summary:
      '22,000 sq ft commercial TPO replacement on a 12-story Brickell office building. Full tapered ISO insulation, 60-mil GAF EverGuard, executed with zero business-hour disruption.',
    fullDescription:
      "Our commercial division tackled a 22,000 sq ft flat-roof replacement on a 12-story Class-A office tower in the heart of Miami's Brickell financial district. The existing 23-year-old modified bitumen roof had chronic ponding issues and three major leaks active at the time of our assessment. The property manager needed the roof replaced with zero disruption to the 180+ tenants working in the building. Our team designed a phased installation plan that worked nights and weekends, with materials craned up to the roof during after-hours only. We installed 2-inch tapered polyisocyanurate insulation on a custom slope pattern engineered to direct all water to three existing roof drains — eliminating the ponding water that had caused the previous roof's failure. On top of the tapered ISO we mechanically fastened 60-mil GAF EverGuard TPO in the reflective white color, which alone reduced the building's cooling load by 18% (measured post-install via the BMS system). All roof-top HVAC, conduit, and parapet flashings were reworked with heat-welded seams and custom-fabricated aluminum termination bars. The project was completed in 12 working days without a single tenant complaint and passed City of Miami inspection on the first attempt. The building owner received a 25-year No-Dollar-Limit GAF Diamond Pledge warranty — the highest commercial warranty GAF offers — plus our 10-year workmanship warranty.",
    challenges: [
      '180+ office tenants — zero disruption required',
      'Existing ponding water from 2-degree slope issues',
      'Rooftop crane access on a busy Brickell street',
      'Tight 12-day window before next leasing cycle',
    ],
    solution: [
      'Phased night/weekend installation with after-hours crane',
      'Custom tapered ISO engineered to existing drains',
      'Coordinated street permit with City of Miami',
      'Dedicated project manager on-site daily',
    ],
    outcome:
      '18% cooling-load reduction, zero tenant complaints, passed inspection first try, 25-year NDL warranty issued.',
    clientQuote:
      'Dr. Roofing FL delivered a complex commercial project on time with zero impact to our tenants. The new roof is flawless.',
    clientName: 'Property Manager, Brickell Office Tower',
    latitude: 25.7663,
    longitude: -80.194,
  },

  {
    slug: 'las-olas-fort-lauderdale-standing-seam-metal',
    path: '/projects/las-olas-fort-lauderdale-standing-seam-metal',
    title: 'Standing-Seam Aluminum Metal Roof — Las Olas Isles Waterfront',
    serviceSlug: 'metal-roof',
    serviceLabel: 'Standing-Seam Metal',
    citySlug: 'fort-lauderdale',
    city: 'Fort Lauderdale',
    state: 'FL',
    neighborhood: 'Las Olas Isles',
    zip: '33301',
    completedDate: '2026-01-18',
    image: '/gallery/dr-rf-07.webp',
    images: ['/gallery/dr-rf-07.webp', '/gallery/dr-rf-08.webp', '/gallery/dr-rf-09.webp'],
    squares: 45,
    duration: '10 days',
    priceRange: '$62,500',
    material: 'Drexel Metals 0.040" Aluminum, 1.75" standing seam',
    colorChoice: 'Matte Black Kynar 500',
    warranty: '35-year finish + 50-year material + 10-year workmanship',
    metaTitle: 'Case Study: Standing-Seam Metal Roof in Las Olas Isles | Dr. Roofing FL',
    metaDescription:
      '45-square Drexel Metals standing-seam aluminum roof on a $4.2M Las Olas Isles waterfront. 35-year Kynar warranty. Full Fort Lauderdale case study.',
    metaKeywords:
      'Las Olas Isles metal roof, Fort Lauderdale standing seam, Drexel Metals Las Olas, aluminum roof Fort Lauderdale 33301',
    summary:
      '45-square standing-seam aluminum metal roof replacement on a $4.2M Las Olas Isles waterfront estate. Matte Black Kynar 500, 35-year finish warranty.',
    fullDescription:
      "This $4.2M Las Olas Isles waterfront estate sits directly on the New River with constant salt-air exposure from the nearby Atlantic. The homeowner's previous architectural shingle roof had failed at year 14 due to the corrosive salt environment — far short of the 25-year warranty. After a thorough consultation, the homeowner chose 0.040\" aluminum standing-seam metal for its complete corrosion immunity, 50+ year lifespan, and distinctive matte black architectural statement. We sourced Drexel Metals 1.75\" standing-seam panels in their Matte Black Kynar 500 PVDF finish — a cool-roof-rated finish backed by a 35-year color warranty. The project required complete tear-off of the existing shingles and 1x4 purlin furring, followed by installation of 15 lb self-adhered Grip-Rite high-temperature underlayment specifically rated for metal roofs. Panels were custom-cut on-site to match the estate's complex dual-pitch architecture, with no lap seams anywhere on the 45-square roof. All penetrations (5 chimneys, 8 skylights, 12 plumbing vents) received custom-fabricated Kynar-finished flashings color-matched to the panels. Ridge vents and gable flashings were also custom-fabricated. The project took 10 working days including HOA approval and final City of Fort Lauderdale inspection. Post-install, the homeowner reported an immediate 28% reduction in air-conditioning costs due to the cool-roof reflective properties. The metal roof carries a 35-year finish warranty, 50-year material warranty, 165+ mph wind rating, and our 10-year workmanship warranty.",
    challenges: [
      'Direct Atlantic salt-air exposure requiring aluminum (not Galvalume)',
      'Complex dual-pitch architecture with 8 skylights and 5 chimneys',
      'HOA Architectural Review Board approval for bold color',
      'Homeowner relocation during 10-day install',
    ],
    solution: [
      'Specified 0.040" marine-grade aluminum for 100% corrosion immunity',
      'Custom-cut panels on-site to eliminate lap seams',
      'Created 3D rendering for ARB approval',
      'Scheduled around homeowner travel',
    ],
    outcome:
      '28% A/C cost reduction, 35-year finish warranty, architectural statement achieved, zero post-install issues.',
    clientQuote:
      'The matte black metal roof is exactly what we envisioned. A real architectural upgrade that also cut our electric bill by nearly 30%.',
    clientName: 'Las Olas Isles Homeowner',
    latitude: 26.1185,
    longitude: -80.1236,
  },

  {
    slug: 'pembroke-falls-shingle-insurance-restoration',
    path: '/projects/pembroke-falls-shingle-insurance-restoration',
    title: 'Hurricane Ian Insurance Roof Restoration — Pembroke Falls',
    serviceSlug: 'storm-damage',
    serviceLabel: 'Storm Damage Restoration',
    citySlug: 'pembroke-pines',
    city: 'Pembroke Pines',
    state: 'FL',
    neighborhood: 'Pembroke Falls',
    zip: '33029',
    completedDate: '2026-02-05',
    image: '/gallery/dr-rf-10.webp',
    images: ['/gallery/dr-rf-10.webp', '/gallery/dr-rf-11.webp', '/gallery/dr-rf-12.webp'],
    squares: 28,
    duration: '2 days install + 45 days claim',
    priceRange: 'Insurance covered ($16,400 scope)',
    material: 'GAF Timberline HDZ UHDZ — Class 4 Impact Rated',
    colorChoice: 'Charcoal',
    warranty: 'GAF Golden Pledge 50-year + 10-year workmanship',
    metaTitle: 'Case Study: Insurance Roof Restoration in Pembroke Falls | Dr. Roofing FL',
    metaDescription:
      'Hurricane Ian insurance roof claim in Pembroke Falls — Class 4 GAF Timberline UHDZ upgrade. Full claim handling. 28 squares. Dr. Roofing FL case study.',
    metaKeywords:
      'hurricane Ian roof Pembroke Pines, insurance roof claim Pembroke Falls 33029, GAF Timberline UHDZ, storm damage roof Florida',
    summary:
      'Full insurance-covered roof replacement in Pembroke Falls after Hurricane Ian damage. Upgraded to Class-4 impact-rated GAF UHDZ, $0 out of pocket beyond deductible.',
    fullDescription:
      "This 28-square home in the Pembroke Falls master-planned community suffered significant wind damage during Hurricane Ian (2022), with over 60 missing or lifted shingles, damaged pipe boots, and visible water intrusion in the attic. The homeowner filed an insurance claim that was initially denied as 'age-related wear.' We performed a free post-storm inspection with drone photography, moisture-meter readings, and a Xactimate-compliant scope of work documenting the storm-related damage separately from any pre-existing condition. When the insurance adjuster came out, our project manager met them on-site and walked them through the damage item-by-item. The claim was approved with a $16,400 scope covering a full roof replacement. We then guided the homeowner through a supplemental upgrade to Class-4 impact-rated GAF Timberline UHDZ shingles (for only $420 additional out of pocket beyond the deductible), which qualifies them for a 12% wind-and-hail insurance discount — a savings of approximately $350/year that pays back the upgrade in under 15 months. The installation itself took 2 days — complete tear-off, synthetic underlayment throughout with ice-and-water shield at eaves/valleys/penetrations, GAF Timberline UHDZ shingles in Charcoal installed with 6-nail pattern, all flashings and pipe boots replaced, and a ridge vent system for proper attic ventilation. The homeowner received a GAF Golden Pledge 50-year warranty (GAF's highest residential warranty) plus our 10-year workmanship warranty. Total out-of-pocket for the homeowner: $2,000 deductible + $420 upgrade = $2,420 for a new 50-year Class-4 impact-rated roof.",
    challenges: [
      'Initial insurance claim denied as age-related wear',
      'Homeowner uncertain whether to pursue claim or replace out-of-pocket',
      'Needed documentation to differentiate storm damage from pre-existing condition',
      'Coordinated upgrade to Class-4 with insurance',
    ],
    solution: [
      'Free drone + moisture inspection with written Xactimate scope',
      'Adjuster meeting on-site with project manager',
      'Class-4 upgrade with ROI analysis shown to homeowner',
      'Handled entire claim process end-to-end',
    ],
    outcome:
      '$16,400 scope approved, $2,420 total out-of-pocket, 12% ongoing insurance discount, 50-year warranty.',
    clientQuote:
      "Our claim was denied. Dr. Roofing FL got it reversed and we ended up with a brand new impact-rated roof for just our deductible plus $420. They handled everything.",
    clientName: 'The Johnson Family, Pembroke Falls',
    latitude: 26.0082,
    longitude: -80.3373,
  },

  {
    slug: 'silver-lakes-miramar-tile-roof-50-year',
    path: '/projects/silver-lakes-miramar-tile-roof-50-year',
    title: '50-Year Concrete Tile Roof — Silver Lakes, Miramar',
    serviceSlug: 'tile-roof',
    serviceLabel: 'Tile Roof',
    citySlug: 'miramar',
    city: 'Miramar',
    state: 'FL',
    neighborhood: 'Silver Lakes',
    zip: '33027',
    completedDate: '2026-03-30',
    image: '/gallery/dr-rf-13.webp',
    images: ['/gallery/dr-rf-13.webp', '/gallery/dr-rf-14.webp', '/gallery/dr-rf-15.webp'],
    squares: 30,
    duration: '6 days',
    priceRange: '$26,500',
    material: 'Boral Concrete Tile, Villa 900 profile',
    colorChoice: 'Cordova Blend',
    warranty: '50-year Boral + 10-year workmanship',
    metaTitle: 'Case Study: Concrete Tile Roof in Silver Lakes, Miramar | Dr. Roofing FL',
    metaDescription:
      '30-square Boral concrete tile installation in Silver Lakes, Miramar. HVHZ certified, 50-year warranty, Cordova Blend. Dr. Roofing FL case study.',
    metaKeywords:
      'Silver Lakes Miramar tile roof, Boral Miramar, Miramar 33027 roof, concrete tile Miramar FL, HOA tile roof Miramar',
    summary:
      '30-square Boral concrete tile roof replacement in Silver Lakes master-planned community, Miramar. Villa 900 profile, Cordova Blend, HOA-approved, 50-year warranty.',
    fullDescription:
      "Silver Lakes is one of Miramar's premier master-planned communities with strict HOA Architectural Review Board standards requiring specific tile profiles and approved color palettes. This 30-square home needed a full tile roof replacement after 22 years of service — the original underlayment had completely degraded despite the tile itself being in good cosmetic condition. Our team obtained HOA ARB approval for Boral Villa 900 concrete tile in Cordova Blend (one of the three pre-approved palettes). The existing tiles were cataloged and 40% were salvaged for use on the back slope of the home where the homeowner wanted to match existing. The remaining 60% were replaced with new Boral Villa 900 tiles. All tiles — old and new — were re-set on a brand new self-adhered Polyglass peel-and-stick underlayment, with every single tile attached using Miami-Dade NOA-approved foam adhesive in compliance with the Florida Building Code 2023 HVHZ protocol. The project took 6 days from tear-off to final inspection. We handled all permit paperwork with the City of Miramar, the HOA ARB submission, and post-install provided the OIR-B1-1802 wind-mitigation form for the homeowner to submit to their insurance carrier (resulting in a 42% wind-mitigation discount). The homeowner received a 50-year Boral manufacturer warranty on both new and salvaged tiles and our 10-year workmanship warranty on the entire assembly.",
    challenges: [
      'HOA restricted to 3 pre-approved colors and profiles',
      '22-year-old tile — homeowner wanted to salvage what possible',
      'Matching salvaged tile with new production',
      'Strict Miramar permit process',
    ],
    solution: [
      'ARB approval obtained for Boral Villa 900 Cordova Blend',
      'Salvaged 40% of original tiles for back slope',
      'Special order matching production run for blend consistency',
      'Permit pulled pre-start; inspection scheduled day of completion',
    ],
    outcome:
      '6-day install, 42% wind-mitigation discount, matching results, 50-year warranty.',
    latitude: 25.9873,
    longitude: -80.3394,
  },

  {
    slug: 'davie-forest-ridge-metal-roof-equestrian',
    path: '/projects/davie-forest-ridge-metal-roof-equestrian',
    title: 'Aluminum Metal Roof on Equestrian Estate — Forest Ridge, Davie',
    serviceSlug: 'metal-roof',
    serviceLabel: 'Metal Roof',
    citySlug: 'davie',
    city: 'Davie',
    state: 'FL',
    neighborhood: 'Forest Ridge',
    zip: '33328',
    completedDate: '2026-01-28',
    image: '/gallery/dr-rf-16.webp',
    images: ['/gallery/dr-rf-16.webp', '/gallery/dr-rf-17.webp', '/gallery/dr-rf-18.webp'],
    squares: 65,
    duration: '14 days',
    priceRange: '$88,000',
    material: 'Englert 1300 Standing Seam 24-gauge',
    colorChoice: 'Colonial Red Kynar 500',
    warranty: '35-year finish + 50-year material + 10-year workmanship',
    metaTitle: 'Case Study: Metal Roof on Davie Equestrian Estate | Dr. Roofing FL',
    metaDescription:
      '65-square Englert 1300 standing-seam aluminum metal roof on a Forest Ridge Davie equestrian estate. Colonial Red Kynar 500. Case study.',
    metaKeywords:
      'Forest Ridge Davie metal roof, equestrian estate roof Davie, Englert 1300 Davie FL, Davie 33328 metal roof',
    summary:
      'Large 65-square standing-seam metal roof on a 3-building equestrian estate in Forest Ridge, Davie. Main house, guest cottage, and horse barn all covered.',
    fullDescription:
      "This 4.5-acre equestrian estate in Davie's Forest Ridge neighborhood required a coordinated metal roof installation across three separate structures: a 4,800 sq ft main residence, a 1,200 sq ft guest cottage, and a 600 sq ft horse barn. The homeowner specifically wanted a traditional Colonial Red metal roof to complement the estate's ranch-and-western aesthetic while also providing the hurricane-grade protection Florida requires. We specified Englert 1300 Series 24-gauge standing-seam metal in the Colonial Red Kynar 500 PVDF finish for all three structures, ensuring perfect color and profile consistency across the estate. Total coverage was 65 squares (6,500 sq ft). The main residence received 1.5\" standing seam with concealed clips for the highest wind rating; the cottage used the same system. The horse barn utilized 1.5\" standing seam with slightly longer panels. All three structures had existing shingle or exposed-fastener metal roofs that were completely torn off to the deck. Rotted 3/4\" plywood on the barn (approximately 60 sq ft) was replaced. Self-adhered high-temperature underlayment was installed throughout. We custom-fabricated 37 pieces of trim on-site including valleys, ridges, rakes, soffit returns, gable ends, barn cupola flashings, and chimney surrounds. The project took 14 working days with crews working all three structures in parallel to minimize disruption to the horses. Post-install, the homeowner reported the barn interior temperature dropped 8°F due to the Kynar 500 cool-roof reflectivity — a significant improvement for horse welfare during Florida summers. All three roofs carry a 35-year finish warranty, 50-year material warranty, 165+ mph wind rating, and 10-year workmanship warranty.",
    challenges: [
      '3 separate structures — color and profile consistency',
      'Horse-welfare considerations during install',
      '4.5-acre site with long material-staging paths',
      'Barn cupola and custom trim fabrication',
    ],
    solution: [
      'All 3 structures sourced from same production run',
      'Parallel crews minimizing total install time',
      'Onsite mobile staging trailer',
      '37 custom trim pieces fabricated onsite',
    ],
    outcome:
      '8°F barn temperature reduction, unified estate aesthetic, 35-year color warranty.',
    clientQuote:
      'The coordinated install across all three buildings was seamless. Our horses barely noticed, and the new metal roofs look stunning.',
    clientName: 'Forest Ridge Equestrian Estate Owner',
    latitude: 26.0756,
    longitude: -80.2755,
  },

  {
    slug: 'hallandale-oceanfront-condo-tpo-replacement',
    path: '/projects/hallandale-oceanfront-condo-tpo-replacement',
    title: 'Oceanfront Condo TPO Roof Replacement — Hallandale Beach',
    serviceSlug: 'flat-roof',
    serviceLabel: 'Flat / TPO',
    citySlug: 'hallandale-beach',
    city: 'Hallandale Beach',
    state: 'FL',
    neighborhood: 'Hallandale Beach',
    zip: '33009',
    completedDate: '2025-12-15',
    image: '/gallery/dr-rf-19.webp',
    images: ['/gallery/dr-rf-19.webp', '/gallery/dr-rf-20.webp', '/gallery/dr-rf-21.webp'],
    squares: 320,
    duration: '21 days',
    priceRange: '$298,000',
    material: 'Carlisle Sure-Weld 80-mil TPO',
    colorChoice: 'Reflective White',
    warranty: '25-year NDL Carlisle Platinum + 10-year workmanship',
    metaTitle: 'Case Study: Oceanfront Condo TPO Roof in Hallandale Beach | Dr. Roofing FL',
    metaDescription:
      '32,000 sq ft Carlisle Sure-Weld 80-mil TPO on an oceanfront Hallandale Beach condo. 25-year NDL warranty, tapered insulation. Case study.',
    metaKeywords:
      'Hallandale Beach oceanfront condo roof, Carlisle TPO Hallandale, 33009 commercial roof, condo roof Broward',
    summary:
      '32,000 sq ft Carlisle Sure-Weld 80-mil TPO replacement on an oceanfront 14-story condominium in Hallandale Beach. Tapered ISO, 25-year NDL warranty.',
    fullDescription:
      "This 14-story oceanfront condominium association on Hallandale Beach needed a complete flat-roof replacement after years of chronic leaking into the top-floor units. The 32,000 sq ft roof included the main building, mechanical penthouse, and pool-deck areas. The salt-air environment (directly on the Atlantic) and the previous 22-year-old modified bitumen roof's failure had resulted in water damage to 11 top-floor units. The condo board selected Dr. Roofing FL after a competitive bid process that specifically required Carlisle Authorized Contractor certification (which we hold). We designed a complete tapered polyisocyanurate insulation system (averaging R-25) to eliminate the ponding water that had caused the previous failure. The new roof assembly consists of: 2\" mechanically fastened polyisocyanurate insulation base layer, tapered polyiso creating 1/4\" per foot slope to four existing drains, 1/2\" high-density cover board, and 80-mil Carlisle Sure-Weld reinforced TPO mechanically fastened and heat-welded. All 47 rooftop penetrations (HVAC units, plumbing vents, antennas, satellite dishes) received custom-fabricated pre-molded boots with heat-welded seams. The project took 21 working days with daily safety protocols for the active condominium. Crews were badged and backgrounded. All materials were craned up during scheduled hours only. The association received a 25-year Carlisle Platinum No-Dollar-Limit warranty (the highest Carlisle offers) plus our 10-year workmanship warranty. Post-install leak inspection was performed with a Tramex electronic moisture scanner confirming zero water infiltration.",
    challenges: [
      'Active 14-story residential condominium — resident relations critical',
      'Extensive roof-top equipment (47 penetrations) all requiring rework',
      'Oceanfront salt-air corrosion resistance required',
      'Condo board approval process with documentation',
    ],
    solution: [
      'Badged/backgrounded crews, daily resident communication',
      'Custom pre-molded boots for every penetration',
      'Carlisle system rated for direct coastal exposure',
      'Weekly progress reports with photos to board',
    ],
    outcome:
      'Zero leaks confirmed via moisture scan, 25-year NDL warranty, happy residents, passed all inspections.',
    latitude: 25.9831,
    longitude: -80.1353,
  },

  {
    slug: 'dania-beach-lauderdale-isles-repair',
    path: '/projects/dania-beach-lauderdale-isles-repair',
    title: 'Chronic Leak Detection & Repair — Lauderdale Isles, Dania Beach',
    serviceSlug: 'roof-repair',
    serviceLabel: 'Roof Repair',
    citySlug: 'dania-beach',
    city: 'Dania Beach',
    state: 'FL',
    neighborhood: 'Lauderdale Isles',
    zip: '33312',
    completedDate: '2026-03-05',
    image: '/gallery/dr-rf-22.webp',
    images: ['/gallery/dr-rf-22.webp', '/gallery/dr-rf-23.webp', '/gallery/dr-rf-24.webp'],
    squares: 0,
    duration: '1 day',
    priceRange: '$1,450',
    material: 'Various repair materials',
    colorChoice: 'Color-matched to existing',
    warranty: '2-year workmanship',
    metaTitle: 'Case Study: Chronic Leak Repair in Lauderdale Isles | Dr. Roofing FL',
    metaDescription:
      'Infrared thermal imaging solved a 3-year chronic leak in Lauderdale Isles, Dania Beach. Same-day repair, 2-year warranty. Dr. Roofing FL case study.',
    metaKeywords:
      'Dania Beach roof repair, Lauderdale Isles leak Dania, infrared leak detection Broward, 33312 roof repair',
    summary:
      'Lauderdale Isles homeowner had chronic 3-year leak no other roofer could find. Infrared thermal imaging diagnosed a hidden skylight perimeter failure in 15 minutes.',
    fullDescription:
      "The owner of this Lauderdale Isles canal-front home had been chasing a chronic leak for 3 years through three different roofers. Each roofer had done surface repairs (new pipe boots, new flashing, new sealant) but the leak kept returning every rainy season. By the time the homeowner called Dr. Roofing FL, there was visible water staining on 4 areas of the living-room ceiling and active drips during any substantial rain event. Our repair specialist arrived with a FLIR thermal imaging camera, a Tramex moisture meter, and 15 years of leak-diagnostic experience. The thermal scan of the attic revealed the real source: the leak was NOT at the obvious ceiling stain location, but at a skylight curb perimeter approximately 14 feet uphill. Water was entering the skylight curb-to-flashing joint, traveling down the metal deck underneath the shingles, and finally dripping through a nail hole 14 feet away in the ceiling. None of the previous roofers had found this because they were inspecting the ceiling-stain area, not the actual water source. Our team removed the shingles around the skylight, removed the failed metal flashing (which had a hairline crack at the corner), installed new 16-gauge aluminum step flashing, applied a bead of 40-year Geocel sealant along the perimeter, and re-integrated the new shingles. We also rebuilt the 6 pipe boots on the roof (all original and cracking). Total repair time: 4 hours. The homeowner received our 2-year workmanship warranty. A follow-up inspection 60 days later (after multiple heavy rain events) confirmed zero water intrusion.",
    challenges: [
      '3-year chronic leak defeated 3 previous roofers',
      'Ceiling-stain location not the actual leak source',
      'Elderly homeowner stressed by repeated failures',
      'Hidden leak path 14 feet from visible stain',
    ],
    solution: [
      'FLIR thermal imaging found real source in 15 minutes',
      'Full skylight flashing replacement (not just sealant)',
      'Bonus pipe-boot rebuild to prevent future leaks',
      'Follow-up inspection after 60 days to confirm',
    ],
    outcome:
      '3-year leak solved in one 4-hour visit, confirmed dry after 60-day follow-up, 2-year warranty.',
    clientQuote:
      'Three different roofers, three years, and Dr. Roofing FL fixed it in 4 hours. Infrared imaging was the difference.',
    clientName: 'Lauderdale Isles Homeowner, Dania Beach',
    latitude: 26.0464,
    longitude: -80.1683,
  },

  {
    slug: 'aventura-williams-island-tpo-25-year',
    path: '/projects/aventura-williams-island-tpo-25-year',
    title: 'Williams Island Tower Roof Replacement — Aventura',
    serviceSlug: 'flat-roof',
    serviceLabel: 'Flat / TPO',
    citySlug: 'aventura',
    city: 'Aventura',
    state: 'FL',
    neighborhood: 'Williams Island',
    zip: '33180',
    completedDate: '2026-02-14',
    image: '/gallery/dr-rf-25.webp',
    images: ['/gallery/dr-rf-25.webp', '/gallery/dr-rf-26.webp', '/gallery/dr-rf-27.webp'],
    squares: 180,
    duration: '16 days',
    priceRange: '$172,000',
    material: 'Johns Manville JM TPO 80-mil',
    colorChoice: 'Reflective White',
    warranty: '20-year NDL Johns Manville + 10-year workmanship',
    metaTitle: 'Case Study: Williams Island Condo TPO Roof | Dr. Roofing FL Aventura',
    metaDescription:
      '18,000 sq ft Johns Manville 80-mil TPO roof on a Williams Island Aventura luxury condo tower. Tapered insulation, 20-year NDL. Case study.',
    metaKeywords:
      'Williams Island Aventura roof, luxury condo roof Aventura 33180, Johns Manville TPO Aventura, Aventura flat roof',
    summary:
      '18,000 sq ft Johns Manville 80-mil TPO replacement on a 22-story Williams Island luxury condo tower with full tapered ISO drainage redesign.',
    fullDescription:
      "Williams Island is one of Aventura's premier luxury condominium communities — private island resort-living with 80 acres of waterfront amenities. This 22-story tower's existing 19-year-old modified bitumen roof had failed at year 14 and received three separate overlay repairs before the condo board finally approved a complete replacement. Dr. Roofing FL was selected after a competitive bid process as one of the few Johns Manville-certified contractors in Miami-Dade serving the luxury condo market. The 18,000 sq ft roof assembly was completely torn off including the 3 overlay layers. We discovered extensive wet insulation (approximately 22% of the roof area) and replaced all compromised material. A new tapered polyisocyanurate insulation system was engineered to redirect water flow from the failed 2-degree slope pattern to four new primary drains and two secondary overflow scuppers we installed on the perimeter parapet. Above the tapered ISO we installed a ½\" Dens-Deck Prime cover board for superior wind-uplift performance and 80-mil Johns Manville JM TPO in reflective white, heat-welded at all seams and around all 52 roof-top penetrations. The mechanical penthouse, elevator overrun, and crown-parapet termination bars all received custom-fabricated 22-gauge Kynar-finished aluminum trim. The project took 16 working days with a dedicated crane operator on-site. Residents and unit owners received weekly email updates with photos. The condo association received a 20-year Johns Manville No-Dollar-Limit warranty plus our 10-year workmanship warranty. Post-install the building manager reported a 14% reduction in rooftop temperature (measured on the penthouse deck) translating to measurable HVAC savings.",
    challenges: [
      '22-story luxury tower with extremely discerning residents',
      '22% wet insulation required aggressive tear-out',
      '2 new secondary overflow scuppers required permit amendment',
      'Limited staging area on Williams Island',
    ],
    solution: [
      'Weekly resident email updates with photos',
      'Full wet-insulation removal verified via moisture survey',
      'Permit amendment pulled in 3 days via expediter',
      'Onsite materials barge coordinated',
    ],
    outcome:
      '14% rooftop temperature reduction, 20-year NDL warranty, zero resident complaints, passed Aventura inspection first try.',
    latitude: 25.9561,
    longitude: -80.1439,
  },
];

export const projectsBySlug: Record<string, Project> = projects.reduce((acc, p) => {
  acc[p.slug] = p;
  return acc;
}, {} as Record<string, Project>);

export const projectsByCity: Record<string, Project[]> = projects.reduce((acc, p) => {
  acc[p.citySlug] = acc[p.citySlug] || [];
  acc[p.citySlug].push(p);
  return acc;
}, {} as Record<string, Project[]>);
