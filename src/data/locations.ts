import { buildCities } from './cityBuilder';
import { newCitySeeds } from './newCitySeeds';

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationReview {
  name: string;
  text: string;
  rating: 5;
}

export interface LocationProject {
  title: string;
  neighborhood: string;
  service: string;
  image: string;
}

export interface LocationData {
  slug: string;
  city: string;
  citySlug: string;
  state: string;
  zipCodes: string[];
  population: string;
  mapUrl: string;
  latitude: number;
  longitude: number;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  description: string;
  nearYouHeading: string;
  cityIntro: string;
  neighborhoods: string[];
  cityFacts: { label: string; value: string }[];
  commonProblems: string[];
  brandsWorkedWith: string[];
  localInfo: { title: string; content: string }[];
  faqs: LocationFAQ[];
  projects: LocationProject[];
  reviews: LocationReview[];
  authorityLink: { label: string; url: string };
  wikipediaUrl: string;
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

export const locations: Record<string, LocationData> = {
  hollywood: {
    slug: '/hollywood-roofing',
    city: 'Hollywood',
    citySlug: 'hollywood',
    state: 'FL',
    zipCodes: ['33019', '33020', '33021', '33023', '33024', '33025'],
    population: '155,000',
    latitude: 26.0112014,
    longitude: -80.2088724,
    heroImage: '/tile_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.22083949999999!3d26.0112014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad36f342c89d%3A0x711d0f26f207c6c0!2sHollywood%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    metaTitle:
      'Dr. Roofing FL | We Provide Professional Roofing in Hollywood, FL',
    metaDescription:
      'Top-rated roofing contractor in Hollywood, FL. Tile, metal, shingle & flat roof replacement, repairs & free inspections. Licensed, insured. Call (754) 310-5557.',
    metaKeywords:
      'roofing contractor Hollywood FL, roof repair Hollywood, roof replacement Hollywood, tile roof Hollywood, metal roof Hollywood, shingle roof Hollywood 33023',
    description:
      'Expert roofing services for Hollywood, FL homes and businesses. From Hollywood Beach condos to Hollywood Hills single-families, we protect your property with hurricane-rated tile, metal, shingle, and flat roofing systems — all backed by free inspections and flexible financing.',
    nearYouHeading:
      'Licensed Roofing Contractor Near You in Hollywood, Florida',
    cityIntro:
      'Hollywood, Florida sits between Miami and Fort Lauderdale on the Atlantic Coast and is one of the most demanding roofing environments in the country. Salt-laden air, 200+ sunny days per year, afternoon thunderstorms six months a year, and a High-Velocity Hurricane Zone (HVHZ) designation mean every roof here has to be engineered for extremes. Dr. Roofing FL is headquartered right here at 3951 SW 41st St, Hollywood, FL 33023, and we have been protecting local homes from ZIP codes 33019, 33020, 33021, 33023, 33024, and 33025 for over a decade. Whether you live near Hollywood Beach, in Emerald Hills, or west of I-75, our crews know every subdivision, HOA and city permitting process in town.',
    neighborhoods: [
      'Downtown Hollywood',
      'Hollywood Beach',
      'Hollywood Lakes',
      'Hollywood Hills',
      'Liberia',
      'Emerald Hills',
      'Washington Park',
      'Hollywood Gardens',
      'Oakridge',
      'Park East',
      'Driftwood',
      'West Lake',
    ],
    cityFacts: [
      { label: 'Population', value: '155,000+ residents' },
      { label: 'Area Served', value: '30.8 sq mi' },
      { label: 'Hurricane Zone', value: 'HVHZ (High-Velocity)' },
      { label: 'Avg. Annual Rainfall', value: '62 inches' },
      { label: 'Avg. Roof Lifespan', value: '15–25 yrs (shingle)' },
      { label: 'Our Projects Here', value: '300+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: "Roofing Expertise Built for Hollywood's Coastal Climate",
        content:
          "Hollywood sits directly on the Atlantic and is in a High-Velocity Hurricane Zone, meaning every roof permit requires engineered fastening, secondary water barriers, and Miami-Dade NOA approved products. Our Hollywood crews install HVHZ-compliant tile, metal, shingle, and TPO systems every day. Salt air east of US-1 accelerates corrosion — we use stainless fasteners and Kynar-coated aluminum accessories to match. Inland of I-95, thermal cycling and intense UV are the bigger enemies; here we specify cool-roof rated shingles and reflective flat-roof membranes. Every Hollywood roof we install meets or exceeds the 2023 Florida Building Code 8th Edition."
      },
      {
        title: 'Hurricane-Resistant Roofing for Hollywood Homeowners',
        content:
          "Since Hurricane Wilma (2005), Irma (2017) and Ian (2022), Hollywood homeowners have learned that roof-to-wall connections, underlayment quality and proper nailing patterns decide who keeps their roof. Our installations use 6-nail pattern shingles, peel-and-stick self-adhered underlayment (not felt), hurricane clips and straps where required, and Miami-Dade NOA approved ridge, hip and starter components. Many of our Hollywood customers also qualify for a wind-mitigation insurance discount of 15–45% after we install a new roof — we include the OIR-B1-1802 inspection at no charge."
      },
      {
        title: 'Residential & Commercial Roofing Across Every Hollywood Neighborhood',
        content:
          "From a beachfront condo on Ocean Drive to a single-family home in Hollywood Hills, a duplex in Liberia, a ranch in Emerald Hills, or a commercial building on Hollywood Blvd, we handle every roof type in every Hollywood neighborhood. Our team is fluent with the City of Hollywood permitting portal, Broward County inspections, and the HOA approval processes for Emerald Hills, Hollywood Lakes, and West Lake communities. We also provide 24/7 emergency tarp-ups and leak repairs anywhere in Hollywood — call (754) 310-5557."
      },
      {
        title: 'Financing & Insurance Claims Made Simple in Hollywood',
        content:
          "We can discuss third-party financing and timing after you have a written scope. For storm-damage claims, we can help with documentation; coverage and payment are set by your policy and your carrier."
      },
    ],
    faqs: [
      {
        question: 'How much does a new roof cost in Hollywood, FL?',
        answer:
          'We do not publish public roof pricing. After an inspection and scope you receive a line-item written estimate. Budget goals can be discussed with your estimator.',
      },
      {
        question: 'Do I need a permit for a roof replacement in Hollywood?',
        answer:
          'Yes — most re-roof and significant repair work in Hollywood requires a permit. We help pull permits in your name and schedule inspections; requirements depend on the scope. Ask us or the building department for your project.',
      },
      {
        question: 'How long does a Hollywood roof replacement take?',
        answer:
          'Shingle roofs: 1–2 days. Tile roofs: 3–5 days. Standing-seam metal: 2–4 days. Weather and HOA approvals may extend by a day. We work straight through including Saturdays.',
      },
      {
        question: 'Will my Hollywood home insurance cover my new roof?',
        answer:
          'If your roof has storm damage (wind, hail, named storm), most Florida policies cover it minus your deductible. We document the damage and submit a full Xactimate-compliant claim package. Age-related wear and tear is generally not covered.',
      },
      {
        question: 'Do you handle HOA approvals in Hollywood?',
        answer:
          'Yes. We\'ve worked with every major Hollywood HOA including Emerald Hills, Hollywood Lakes, Driftwood, and Oakridge. We submit color samples, ARB applications, and material specifications at no additional charge.',
      },
      {
        question: 'What\'s the best roof for Hollywood Beach salt air?',
        answer:
          'Within 1,000 feet of the ocean we recommend aluminum standing-seam metal (corrosion-proof) or concrete tile with stainless fasteners. Avoid galvanized accessories — salt will eat them in 7–10 years.',
      },
    ],
    projects: [
      { title: 'Concrete Tile Replacement', neighborhood: 'Emerald Hills', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Standing-Seam Metal Reroof', neighborhood: 'Hollywood Hills', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Architectural Shingle Install', neighborhood: 'Driftwood', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'TPO Flat Roof System', neighborhood: 'Downtown Hollywood', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Hurricane Damage Restoration', neighborhood: 'Hollywood Beach', service: 'Storm Damage', image: '/tile_roofing.webp' },
      { title: 'Clay Tile Replacement', neighborhood: 'Hollywood Lakes', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'GAF Timberline HDZ Install', neighborhood: 'Washington Park', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Aluminum Metal Roof', neighborhood: 'Liberia', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Commercial TPO Roof', neighborhood: 'Park East', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Residential Leak Repair', neighborhood: 'Oakridge', service: 'Roof Repair', image: '/shingle_roofing.webp' },
      { title: 'Full Tile Replacement', neighborhood: 'West Lake', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Storm Tarp-Up Emergency', neighborhood: 'Hollywood Gardens', service: 'Storm Damage', image: '/metal_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Hollywood, FL Official Website',
      url: 'https://www.hollywoodfl.org/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hollywood,_Florida',
  },

  miami: {
    slug: '/miami-roofing',
    city: 'Miami',
    citySlug: 'miami',
    state: 'FL',
    zipCodes: ['33101', '33125', '33127', '33130', '33135', '33142', '33150', '33176', '33186'],
    population: '450,000',
    latitude: 25.7616798,
    longitude: -80.1917902,
    heroImage: '/metal_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229105.26316603337!2d-80.38142344999999!3d25.7823072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890125!5m2!1sen!2sus',
    metaTitle: 'Dr. Roofing FL | Miami, FL Roofing Contractor — Tile, Metal, Flat',
    metaDescription:
      'Licensed Miami, FL roofing contractor. Tile, metal, shingle & flat roof replacement, repair & free inspections. Miami-Dade HVHZ certified. Call (754) 310-5557.',
    metaKeywords:
      'roofing contractor Miami FL, Miami roofer, roof repair Miami, roof replacement Miami, Miami-Dade roofing, tile roof Miami, metal roof Miami Dade',
    description:
      'Miami\'s trusted roofing contractor for residential and commercial re-roofs, repairs, and storm restoration. Every system installed to Miami-Dade HVHZ code with NOA-approved products.',
    nearYouHeading: 'Top-Rated Roofing Contractor Near You in Miami, FL',
    cityIntro:
      'Miami, Florida is the most intense roofing market in the United States. Miami-Dade County enforces the strictest building code in the country — the High-Velocity Hurricane Zone (HVHZ) — and every single roofing product used here must carry a Miami-Dade Notice of Acceptance (NOA). Dr. Roofing FL is fully licensed in Miami-Dade, fluent in the online permitting portal, and we install only NOA-approved tile, metal, shingle, and flat roof systems across Coral Gables, South Beach, Kendall, and every Miami neighborhood — every install engineered to Miami-Dade wind requirements.',
    neighborhoods: [
      'Downtown Miami',
      'Brickell',
      'Coconut Grove',
      'Coral Gables',
      'Little Havana',
      'Little Haiti',
      'Wynwood',
      'Edgewater',
      'Kendall',
      'Pinecrest',
      'Palmetto Bay',
      'Cutler Bay',
    ],
    cityFacts: [
      { label: 'Population', value: '450,000+ (city)' },
      { label: 'Metro Area', value: '6.2 million (3rd largest FL)' },
      { label: 'Hurricane Zone', value: 'HVHZ (strictest in US)' },
      { label: 'Avg. Annual Rainfall', value: '62 inches' },
      { label: 'Building Code', value: 'Miami-Dade NOA required' },
      { label: 'Our Projects Here', value: '250+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'Miami-Dade HVHZ Certified Roofing',
        content:
          'Miami-Dade has the strictest roofing code in America. Every shingle, tile, underlayment, accessory, and fastener must carry a current Miami-Dade Notice of Acceptance. We stock only NOA-approved products and file every permit with the correct NOA numbers attached. This protects your warranty, your insurance, and your home.',
      },
      {
        title: 'Coastal and Urban Miami Roofing Challenges',
        content:
          'Miami roofs deal with salt air from Biscayne Bay and the Atlantic, intense UV, and the frequent heavy rain that ponds on low-slope and flat roofs. We specify corrosion-resistant aluminum and stainless accessories, reflective white TPO for flat roofs, and self-adhered modified bitumen underlayment — not felt — for every tile and shingle install.',
      },
      {
        title: 'Residential and Commercial Roofing Services in Miami',
        content:
          'From a historic Brickell condo to a Coral Gables tile roof, from a Wynwood warehouse TPO system to a Kendall single-family re-roof, our Miami team handles residential and commercial projects of every size. We also partner with Miami-Dade property managers and condo associations for specification, bidding and multi-year maintenance contracts.',
      },
      {
        title: 'Miami Storm & Hurricane Damage Restoration',
        content:
          'When hurricanes threaten South Florida, Miami is always in the line of fire. We offer 24/7 emergency tarp, board-up and leak-stop services, and we handle the entire insurance claim process from adjuster meeting to full re-roof. Call (754) 310-5557 any time.',
      },
    ],
    faqs: [
      {
        question: 'Do you pull permits through the Miami-Dade portal?',
        answer:
          'Yes — every Miami and Miami-Dade roof we install is permitted through the official Miami-Dade online portal. You never have to visit a building department.',
      },
      {
        question: 'What is a Miami-Dade NOA?',
        answer:
          'A Notice of Acceptance is a product-specific approval issued by Miami-Dade County. Every roofing material used in Miami must have a current NOA number on file. We use only NOA-approved systems.',
      },
      {
        question: 'How much does a roof cost in Miami?',
        answer:
          'We do not list roof prices online. Miami-Dade (HVHZ) work may include different product and labor details than other regions; you receive a line-item quote after we measure and specify the system.',
      },
      {
        question: 'Can I install asphalt shingles in Miami?',
        answer:
          'Yes — as long as they carry a Miami-Dade NOA (GAF Timberline HDZ, Owens Corning Duration StormGuard, CertainTeed Landmark ClimateFlex all qualify). We install these 130 mph warranty shingles regularly in Kendall, Palmetto Bay and Cutler Bay.',
      },
      {
        question: 'Do you service condos in Miami?',
        answer:
          'Absolutely. We handle high-rise and low-rise condo flat-roof replacements, spec writing for boards, and scheduled maintenance. References from Brickell, Edgewater and Aventura available on request.',
      },
      {
        question: 'Do you offer emergency service in Miami?',
        answer:
          'Yes. 24/7 emergency tarp and leak response anywhere in Miami-Dade. Call (754) 310-5557.',
      },
    ],
    projects: [
      { title: 'Clay Tile Replacement', neighborhood: 'Coral Gables', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Standing-Seam Aluminum Roof', neighborhood: 'Coconut Grove', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'GAF Timberline HDZ Install', neighborhood: 'Kendall', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'TPO Flat Roof — Commercial', neighborhood: 'Wynwood', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Condo Flat Roof Replacement', neighborhood: 'Brickell', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Concrete Tile Roof', neighborhood: 'Pinecrest', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Hurricane Damage Restoration', neighborhood: 'Palmetto Bay', service: 'Storm Damage', image: '/metal_roofing.webp' },
      { title: 'Metal Mansard Replacement', neighborhood: 'Little Havana', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Emergency Leak Repair', neighborhood: 'Edgewater', service: 'Roof Repair', image: '/shingle_roofing.webp' },
      { title: 'Modified Bitumen Flat Roof', neighborhood: 'Little Haiti', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Spanish Tile Re-Roof', neighborhood: 'Cutler Bay', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Multifamily Shingle Install', neighborhood: 'Downtown Miami', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Miami Official Website',
      url: 'https://www.miami.gov/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Miami',
  },

  fortLauderdale: {
    slug: '/fort-lauderdale-roofing',
    city: 'Fort Lauderdale',
    citySlug: 'fort-lauderdale',
    state: 'FL',
    zipCodes: ['33301', '33304', '33305', '33308', '33309', '33311', '33312', '33316'],
    population: '182,000',
    latitude: 26.1224385,
    longitude: -80.1373174,
    heroImage: '/tile_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.13796989999999!3d26.1223084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9015a0d3a7a45%3A0x59c19b6a85d84ad7!2sFort%20Lauderdale%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    metaTitle:
      'Dr. Roofing FL | Fort Lauderdale Roofing Contractor — Tile, Metal, Shingle',
    metaDescription:
      'Licensed Fort Lauderdale roofing contractor. Free inspections, financing, tile/metal/shingle/flat. Broward HVHZ certified. Call (754) 310-5557.',
    metaKeywords:
      'roofing contractor Fort Lauderdale, Fort Lauderdale roofer, roof repair Fort Lauderdale, roof replacement Fort Lauderdale, tile roof Fort Lauderdale, Broward roofing',
    description:
      'Fort Lauderdale\'s go-to roofing contractor for waterfront, downtown and suburban properties. Tile, metal, shingle and flat roofing done to Broward HVHZ code.',
    nearYouHeading:
      'Trusted Roofing Contractor Near You in Fort Lauderdale, FL',
    cityIntro:
      'Fort Lauderdale is nicknamed the "Venice of America" for its 165 miles of canals and waterways — which also means salt air, humidity, and marine corrosion on every roof east of Federal Highway. Dr. Roofing FL works throughout Fort Lauderdale from Lauderdale-by-the-Sea down to the New River, specifying stainless and aluminum accessories for coastal homes and full HVHZ tile or standing-seam systems for high-end waterfront estates in Las Olas Isles and Rio Vista.',
    neighborhoods: [
      'Las Olas',
      'Victoria Park',
      'Colee Hammock',
      'Tarpon River',
      'Sailboat Bend',
      'Rio Vista',
      'Coral Ridge',
      'Imperial Point',
      'Lauderdale Harbours',
      'Lauderdale-by-the-Sea',
      'Poinsettia Heights',
      'Harbor Beach',
    ],
    cityFacts: [
      { label: 'Population', value: '182,000+ residents' },
      { label: 'Waterways', value: '165 miles of canals' },
      { label: 'Hurricane Zone', value: 'HVHZ (Broward County)' },
      { label: 'Avg. Annual Rainfall', value: '64 inches' },
      { label: 'Our Projects Here', value: '220+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'Waterfront and Coastal Roofing Specialists',
        content:
          'Fort Lauderdale\'s canal network exposes most properties to salt-laden air. We exclusively use stainless-steel fasteners, aluminum flashings, and Kynar-coated metal accessories on coastal homes — galvanized hardware fails within 7–10 years in this environment. For Harbor Beach and Lauderdale-by-the-Sea properties, we also offer full aluminum standing-seam installs rated for 165+ mph winds.',
      },
      {
        title: 'Commercial Roofing for Fort Lauderdale Businesses',
        content:
          'Our commercial division serves downtown Fort Lauderdale office buildings, Las Olas retail, and warehouse districts with TPO, PVC, and modified-bitumen flat-roof systems. Tapered insulation packages, reinforced white reflective membranes, and 15–25 year NDL warranties are standard.',
      },
      {
        title: 'Broward HVHZ Code Compliance',
        content:
          'Fort Lauderdale is in the Broward High-Velocity Hurricane Zone. Every permit we pull includes Miami-Dade NOA-approved products, engineered fastening, secondary water barrier (peel-and-stick), and the OIR-B1-1802 wind-mitigation inspection that qualifies you for insurance discounts of 15–45%.',
      },
      {
        title: 'Financing and Fast Turnaround',
        content:
          'We can discuss third-party financing after you have a written scope. Many single-family re-roofs take a few days once scheduled; free inspections can include photos or drone where appropriate.',
      },
    ],
    faqs: [
      {
        question: 'Are you licensed in Broward County / Fort Lauderdale?',
        answer:
          'Yes. Dr. Roofing FL is a Florida Certified Roofing Contractor in good standing with the City of Fort Lauderdale and Broward County Building Departments.',
      },
      {
        question: 'Best roof for a Fort Lauderdale waterfront home?',
        answer:
          'Aluminum standing-seam metal or concrete tile with 100% stainless fasteners. Both resist salt corrosion and 165+ mph wind loads.',
      },
      {
        question: 'Cost of a Fort Lauderdale re-roof?',
        answer:
          'We do not publish city-specific price tables. Your written estimate is based on field measurements, products, and code work for your home.',
      },
      {
        question: 'Do you work with historic district homes in Fort Lauderdale?',
        answer:
          'Yes — Sailboat Bend and Victoria Park have historic review boards. We prepare submittals with color samples and material specs for approval.',
      },
      {
        question: 'Do you offer emergency storm service in Fort Lauderdale?',
        answer:
          '24/7 emergency tarp and leak response across all of Fort Lauderdale. Call (754) 310-5557.',
      },
      {
        question: 'Will my insurance cover my Fort Lauderdale roof?',
        answer:
          'If there\'s storm or hail damage, typically yes. We document, meet the adjuster, and file the Xactimate scope. Age-related failure is not covered.',
      },
    ],
    projects: [
      { title: 'Concrete Tile Replacement', neighborhood: 'Coral Ridge', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Aluminum Standing-Seam', neighborhood: 'Harbor Beach', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Shingle Re-Roof', neighborhood: 'Poinsettia Heights', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Commercial TPO Roof', neighborhood: 'Downtown', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Historic Tile Restoration', neighborhood: 'Sailboat Bend', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Storm Damage Claim', neighborhood: 'Imperial Point', service: 'Storm Damage', image: '/shingle_roofing.webp' },
      { title: 'Flat Roof TPO', neighborhood: 'Victoria Park', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Tile Roof — Waterfront', neighborhood: 'Las Olas Isles', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Emergency Tarp-Up', neighborhood: 'Rio Vista', service: 'Storm Damage', image: '/metal_roofing.webp' },
      { title: 'Metal Roof Replacement', neighborhood: 'Lauderdale Harbours', service: 'Metal Roof', image: '/metal_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Fort Lauderdale Official Website',
      url: 'https://www.fortlauderdale.gov/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida',
  },

  pembrokePines: {
    slug: '/pembroke-pines-roofing',
    city: 'Pembroke Pines',
    citySlug: 'pembroke-pines',
    state: 'FL',
    zipCodes: ['33023', '33024', '33025', '33026', '33027', '33028', '33029'],
    population: '171,000',
    latitude: 26.0033364,
    longitude: -80.2238876,
    heroImage: '/shingle_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.29388679999999!3d26.0033364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ad48c3bef5f3%3A0x4c8b07088a8c1a0c!2sPembroke%20Pines%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    metaTitle:
      'Dr. Roofing FL | Pembroke Pines Roofing Contractor — HOA Approved',
    metaDescription:
      'Pembroke Pines roofing contractor serving every HOA community. Tile, shingle, metal & flat roofs. Financing may be available through third-party lenders. Call (754) 310-5557.',
    metaKeywords:
      'roofing Pembroke Pines, Pembroke Pines roofer, roof replacement Pembroke Pines, HOA roof Pembroke Pines, tile roof Pembroke Pines',
    description:
      'Pembroke Pines\' trusted roofing contractor for every planned community and HOA. From Pembroke Falls to Silver Lakes to Pembroke Isles, we handle ARB approvals, permits and installation.',
    nearYouHeading:
      'Licensed Roofing Contractor Near You in Pembroke Pines, FL',
    cityIntro:
      'Pembroke Pines is Broward County\'s second-largest city and one of the largest planned-community markets in Florida. Nearly every home sits inside an HOA — Pembroke Falls, Silver Lakes, Pembroke Isles, Chapel Trail, Pembroke Shores, Grand Palms — each with its own architectural review board, approved color palettes, and tile or shingle specifications. Dr. Roofing FL handles the full ARB application process in Pembroke Pines and knows which tile profiles, shingle colors, and metal panel systems each community approves.',
    neighborhoods: [
      'Century Village',
      'Silver Lakes',
      'Chapel Trail',
      'Pembroke Falls',
      'Pembroke Isles',
      'Grand Palms',
      'Sunset Lakes',
      'Towngate',
      'Pembroke Shores',
      'Walnut Creek',
    ],
    cityFacts: [
      { label: 'Population', value: '171,000+ residents' },
      { label: 'HOA Communities', value: '40+ planned communities' },
      { label: 'Hurricane Zone', value: 'HVHZ (Broward)' },
      { label: 'Avg. Home Age', value: '1985–2005' },
      { label: 'Our Projects Here', value: '180+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'HOA-Experienced Roofing in Pembroke Pines',
        content:
          'We know the ARB process for every major Pembroke Pines HOA. Whether you\'re in Pembroke Falls requiring a specific concrete tile profile, or Silver Lakes approving GAF Timberline HDZ in specific colors, we handle the application, submit material specs, and ensure you pass the final HOA inspection.',
      },
      {
        title: 'Family-Home Roof Replacements',
        content:
          'Most Pembroke Pines homes were built in the 1980s–2000s and many are now on their second or third roof. We specialize in same-day estimates, quick permit turnaround (usually 48 hours), and 1–2 day shingle installations with the minimum disruption to your family.',
      },
      {
        title: 'Hurricane & Storm Damage in Pembroke Pines',
        content:
          'Pembroke Pines took heavy damage during Hurricanes Wilma (2005) and Irma (2017). Our storm-response crews handle emergency tarp-ups, insurance claim documentation, and full re-roofs. We\'ll meet your adjuster on site and ensure nothing is left off the scope.',
      },
      {
        title: 'Financing options',
        content:
          'We work with home-improvement lenders; approval, rate, and payment are set by the lender. We provide documentation after you have a project scope in writing.',
      },
    ],
    faqs: [
      {
        question: 'Do you handle Pembroke Falls HOA approvals?',
        answer:
          'Yes — we\'ve done dozens of Pembroke Falls tile replacements. We know the approved tile profiles and handle the full ARB submittal.',
      },
      {
        question: 'Best roof for a Silver Lakes home?',
        answer:
          'Silver Lakes approves both concrete tile and architectural shingles. Most homeowners choose GAF Timberline HDZ for value or Eagle Malibu Concrete Tile for long-term durability.',
      },
      {
        question: 'Cost of a Pembroke Pines shingle re-roof?',
        answer:
          'We do not list typical roof prices. After inspection you receive a free written estimate for your specific home and HOA or city requirements.',
      },
      {
        question: 'How long does a Pembroke Pines roof take?',
        answer:
          'Shingle: 1–2 days. Tile: 3–5 days. Metal: 2–4 days. HOA-approval adds 7–10 business days before start.',
      },
      {
        question: 'Do you offer emergency service in Pembroke Pines?',
        answer:
          'Yes, 24/7 emergency tarp and leak-stop service across all Pembroke Pines ZIP codes. Call (754) 310-5557.',
      },
      {
        question: 'Will my insurance cover my Pembroke Pines roof?',
        answer:
          'If damage is storm-related, typically yes. We document with photos and Xactimate, meet your adjuster, and handle the claim end-to-end.',
      },
    ],
    projects: [
      { title: 'Concrete Tile Replacement', neighborhood: 'Pembroke Falls', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'GAF Timberline Shingles', neighborhood: 'Silver Lakes', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Owens Corning Duration', neighborhood: 'Chapel Trail', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Metal Mansard Replacement', neighborhood: 'Pembroke Isles', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Hurricane Damage Restore', neighborhood: 'Grand Palms', service: 'Storm Damage', image: '/tile_roofing.webp' },
      { title: 'Shingle Re-Roof', neighborhood: 'Sunset Lakes', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Concrete Tile Re-Roof', neighborhood: 'Walnut Creek', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Flat Roof TPO', neighborhood: 'Century Village', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Emergency Leak Repair', neighborhood: 'Towngate', service: 'Roof Repair', image: '/shingle_roofing.webp' },
      { title: 'Shingle Install', neighborhood: 'Pembroke Shores', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Pembroke Pines Official Website',
      url: 'https://www.ppines.com/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Pembroke_Pines,_Florida',
  },

  miramar: {
    slug: '/miramar-roofing',
    city: 'Miramar',
    citySlug: 'miramar',
    state: 'FL',
    zipCodes: ['33023', '33025', '33027', '33029'],
    population: '135,000',
    latitude: 25.9772470,
    longitude: -80.2322706,
    heroImage: '/metal_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.30352519999999!3d25.9772470!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a82d99e8f2a9%3A0x16b62b56e0e6b5b1!2sMiramar%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    metaTitle: 'Dr. Roofing FL | Miramar, FL Roofing Contractor — Licensed & Insured',
    metaDescription:
      'Miramar roofing contractor. Energy-efficient tile, shingle, metal & flat roofs. Free inspections, financing, 24/7 storm response. Call (754) 310-5557.',
    metaKeywords:
      'roofing Miramar FL, Miramar roofer, roof repair Miramar, roof replacement Miramar, Miramar tile roof, Miramar metal roof',
    description:
      'Miramar, FL\'s trusted roofing contractor for residential and commercial properties. Energy-efficient systems engineered for Miramar\'s demanding climate.',
    nearYouHeading: 'Certified Roofing Contractor Near You in Miramar, FL',
    cityIntro:
      'Miramar has grown faster than almost any city in South Florida over the last 20 years. From the master-planned communities of Monarch Lakes and Riviera Isles to the commercial corridor along Miramar Parkway, roofs here range from 2000s-era concrete tile to modern TPO systems on warehouses. Dr. Roofing FL serves every ZIP code in Miramar (33023, 33025, 33027, 33029) with free inspections, HOA-approved material matching, and Broward HVHZ-compliant installations.',
    neighborhoods: [
      'Miramar Town Center',
      'Monarch Lakes',
      'Riviera Isles',
      'Bella Vita',
      'Silver Shores',
      'Huntington',
      'Sunset Falls',
      'Vizcaya',
      'Embassy Lakes',
      'Parkland Isles',
    ],
    cityFacts: [
      { label: 'Population', value: '135,000+ residents' },
      { label: 'Growth Rate', value: '28% past 20 years' },
      { label: 'Hurricane Zone', value: 'HVHZ (Broward)' },
      { label: 'Our Projects Here', value: '140+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'Energy-Efficient Roofing for Miramar\'s Climate',
        content:
          'Miramar summers regularly hit 93°F+ with brutal UV. We specify reflective "cool roof" architectural shingles, reflective white TPO membranes, and radiant-barrier roof decks that can lower attic temperatures by 20–30°F and cut cooling bills 10–20%.',
      },
      {
        title: 'New-Construction & Established Communities',
        content:
          'From the newer Monarch Lakes tile roofs to the original Vizcaya shingles now aging out, we serve every era of Miramar housing stock. Our same-day inspection team gives you an honest assessment — repair, partial replace, or full re-roof.',
      },
      {
        title: 'Commercial & Industrial Roofing in Miramar',
        content:
          'Miramar\'s industrial district along Miramar Parkway and the I-75 corridor has dozens of warehouse and logistics facilities. We handle flat-roof TPO, modified bitumen and PVC systems from 5,000 to 200,000 sq ft.',
      },
      {
        title: 'Financing, Warranty and Service',
        content:
          'Manufacturer coverage and workmanship (up to 10 years on qualifying work, per your written contract) are set out in your agreement. Financing may be available from third parties; ask during estimating. We can discuss a maintenance plan after install if you like.',
      },
    ],
    faqs: [
      {
        question: 'What\'s the best roof for Miramar summer heat?',
        answer:
          'Reflective architectural shingles (GAF Timberline UHDZ Cool Series) or standing-seam metal with Kynar 500 finish. Both can cut attic heat by 20–30°F.',
      },
      {
        question: 'Do you handle HOA approvals in Miramar?',
        answer:
          'Yes — Monarch Lakes, Riviera Isles, Silver Shores, and Embassy Lakes all have ARB boards we work with regularly.',
      },
      {
        question: 'Cost to re-roof in Miramar?',
        answer:
          'We do not publish re-roof price lists. A written, itemized estimate is provided after inspection.',
      },
      {
        question: 'Do you offer 24/7 emergency service in Miramar?',
        answer:
          'Yes. Call (754) 310-5557 any time for storm damage, leaks, or fallen-limb incidents.',
      },
      {
        question: 'Warranty length for a Miramar roof?',
        answer:
          'Manufacturer warranty per the product; workmanship warranty is up to 10 years and may be transferable, per your written Dr. Roofing FL contract.',
      },
      {
        question: 'Financing for Miramar homeowners?',
        answer:
          'Financing is through outside lenders, subject to approval. Terms and availability change; we review options when you have an estimate in hand.',
      },
    ],
    projects: [
      { title: 'Concrete Tile Replacement', neighborhood: 'Monarch Lakes', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'GAF Shingle Install', neighborhood: 'Riviera Isles', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Standing-Seam Metal', neighborhood: 'Silver Shores', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Commercial TPO Roof', neighborhood: 'Miramar Parkway', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Storm Damage Restoration', neighborhood: 'Embassy Lakes', service: 'Storm Damage', image: '/tile_roofing.webp' },
      { title: 'Owens Corning Duration', neighborhood: 'Sunset Falls', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Emergency Leak Repair', neighborhood: 'Vizcaya', service: 'Roof Repair', image: '/shingle_roofing.webp' },
      { title: 'Warehouse Flat Roof', neighborhood: 'Huntington', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Tile Re-Roof', neighborhood: 'Bella Vita', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Metal Roof', neighborhood: 'Parkland Isles', service: 'Metal Roof', image: '/metal_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Miramar Official Website',
      url: 'https://www.miramarfl.gov/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Miramar,_Florida',
  },

  davie: {
    slug: '/davie-roofing',
    city: 'Davie',
    citySlug: 'davie',
    state: 'FL',
    zipCodes: ['33314', '33317', '33324', '33325', '33328', '33329', '33330', '33331'],
    population: '110,000',
    latitude: 26.0628,
    longitude: -80.2331,
    heroImage: '/shingle_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229432.0!2d-80.2995!3d26.0628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90058!2sDavie%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890126',
    metaTitle: 'Dr. Roofing FL | Davie, FL Roofing Contractor — Free Inspections',
    metaDescription:
      'Davie, FL roofing contractor. Shingle, tile, metal & flat roof installation and repair. Licensed, insured, HVHZ certified. Call (754) 310-5557.',
    metaKeywords:
      'roofing Davie FL, Davie roofer, roof repair Davie, roof replacement Davie, Davie tile roof, Davie shingle roof',
    description:
      'Davie, FL\'s trusted roofing contractor serving every neighborhood from Forest Ridge to Long Lake Ranches. Tile, shingle, metal and flat roofing.',
    nearYouHeading: 'Licensed Roofing Contractor Near You in Davie, FL',
    cityIntro:
      'Davie is Broward County\'s western suburban heart — ranch-style single-families, equestrian estates, and the growing University Park area near Nova Southeastern. Roofs range from 1970s asphalt in older Forest Ridge to brand-new tile in Long Lake Ranches. Dr. Roofing FL serves all Davie ZIPs (33314, 33317, 33324, 33325, 33328, 33329, 33330, 33331) with same-day inspections and HVHZ-certified installations.',
    neighborhoods: [
      'Forest Ridge',
      'Long Lake Ranches',
      'Ivanhoe',
      'Pine Island Ridge',
      'Shenandoah',
      'Rolling Oaks',
      'Westridge',
      'Stirling Lakes',
      'Orange Drive',
      'Nova Southeastern area',
    ],
    cityFacts: [
      { label: 'Population', value: '110,000+ residents' },
      { label: 'Area Served', value: '35.7 sq mi' },
      { label: 'Hurricane Zone', value: 'HVHZ (Broward)' },
      { label: 'Our Projects Here', value: '90+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'Davie\'s Diverse Property Stock',
        content:
          'From Forest Ridge ranches from the 1970s to Long Lake Ranches estate homes, Davie has every kind of roof. We inspect, repair and re-roof them all — asphalt, concrete tile, clay tile, standing-seam metal, and flat TPO/BUR commercial systems.',
      },
      {
        title: 'Equestrian & Estate Property Roofing',
        content:
          'Davie is famous for its equestrian estates. We install standing-seam metal and architectural shingle on barns, guest houses, main residences and outbuildings — all permitted as a single Broward package.',
      },
      {
        title: 'Storm Response in Davie',
        content:
          'Davie\'s large tree canopy means lots of limb-impact damage after storms. Our 24/7 emergency crew tarps your roof within hours and documents every limb strike for your insurance claim.',
      },
      {
        title: 'Financing and HOA Approvals',
        content:
          'We can review financing through partner lenders when you have a scope. We help with ARB submittals for many Davie communities — ask about yours.',
      },
    ],
    faqs: [
      {
        question: 'Do you do equestrian estate roofs in Davie?',
        answer:
          'Yes — we\'ve installed metal and shingle roofs on main houses, barns and outbuildings across Davie\'s estate communities.',
      },
      {
        question: 'Cost to re-roof in Davie?',
        answer:
          'We do not publish re-roof price ranges. Your home is estimated individually after a site visit.',
      },
      {
        question: 'Do you handle HOA approvals in Davie?',
        answer:
          'Yes, for Long Lake Ranches, Rolling Oaks, Shenandoah, Westridge and more.',
      },
      {
        question: 'How long does a Davie shingle roof take?',
        answer:
          '1–2 days for most homes. Larger estates 2–4 days.',
      },
      {
        question: 'Do you offer emergency service in Davie?',
        answer:
          '24/7 emergency tarp and leak response. Call (754) 310-5557.',
      },
      {
        question: 'Best roof material for Davie homes?',
        answer:
          'Architectural shingle for value, concrete tile for longevity, standing-seam metal for the absolute best performance in wind and heat.',
      },
    ],
    projects: [
      { title: 'Concrete Tile Replacement', neighborhood: 'Long Lake Ranches', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Standing-Seam Metal Roof', neighborhood: 'Forest Ridge', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'GAF Shingle Re-Roof', neighborhood: 'Shenandoah', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Equestrian Barn Metal Roof', neighborhood: 'Rolling Oaks', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Storm Tarp & Claim', neighborhood: 'Ivanhoe', service: 'Storm Damage', image: '/tile_roofing.webp' },
      { title: 'Shingle Replacement', neighborhood: 'Westridge', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Commercial Flat Roof', neighborhood: 'Orange Drive', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Tile Roof Replacement', neighborhood: 'Stirling Lakes', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Leak Diagnosis & Repair', neighborhood: 'Pine Island Ridge', service: 'Roof Repair', image: '/shingle_roofing.webp' },
      { title: 'Full Re-Roof', neighborhood: 'Nova area', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'Town of Davie Official Website',
      url: 'https://www.davie-fl.gov/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Davie,_Florida',
  },

  hallandaleBeach: {
    slug: '/hallandale-beach-roofing',
    city: 'Hallandale Beach',
    citySlug: 'hallandale-beach',
    state: 'FL',
    zipCodes: ['33008', '33009'],
    population: '42,000',
    latitude: 25.9812024,
    longitude: -80.1483959,
    heroImage: '/metal_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114714.74842569899!2d-80.14839589999999!3d25.9812024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acecbaf72de1%3A0xf7a3c43a5e83f14f!2sHallandale%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    metaTitle: 'Dr. Roofing FL | Hallandale Beach Roofing — Coastal & High-Rise',
    metaDescription:
      'Hallandale Beach roofing contractor. Coastal tile, aluminum metal, condo flat roofs. Licensed & insured. Call (754) 310-5557.',
    metaKeywords:
      'roofing Hallandale Beach, Hallandale roofer, coastal roofing Florida, condo roof Hallandale Beach, metal roof Hallandale Beach',
    description:
      'Coastal and high-rise roofing specialist in Hallandale Beach, FL. Aluminum, stainless and HVHZ-certified systems engineered for oceanfront environments.',
    nearYouHeading: 'Coastal Roofing Contractor Near You in Hallandale Beach, FL',
    cityIntro:
      'Hallandale Beach sits directly on the Atlantic between Hollywood and Aventura — which means salt air, wind, and some of the toughest roofing conditions in North America. Oceanfront condos, mid-rise buildings, and single-family homes in Golden Isles and Three Islands all face accelerated corrosion and extreme wind loads. Dr. Roofing FL specializes in marine-grade materials: aluminum standing-seam metal, stainless fasteners, and HVHZ-certified tile and flat roofing for beachfront properties.',
    neighborhoods: [
      'Golden Isles',
      'Three Islands',
      'Hallandale Beach Boulevard',
      'Diplomat Landing',
      'The Hemisphere',
      'Parker Dorado',
      'Oceanview',
      'West Park',
      'Beach Walk',
      'Hallandale Gardens',
    ],
    cityFacts: [
      { label: 'Population', value: '42,000+ residents' },
      { label: 'Ocean Frontage', value: '3.5 miles of coast' },
      { label: 'Hurricane Zone', value: 'HVHZ + salt corrosion' },
      { label: 'Our Projects Here', value: '70+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'Oceanfront Roofing Expertise',
        content:
          'Salt air eats galvanized steel in 7–10 years. On every Hallandale Beach installation we specify 100% stainless fasteners, aluminum drip edge, aluminum ridge and hip closures, and either aluminum standing-seam panels or concrete tile with stainless attachments. This keeps your roof corrosion-free for its full 30–50 year lifespan.',
      },
      {
        title: 'High-Rise & Condominium Roofing',
        content:
          'Hallandale\'s mid-rise and high-rise market demands specialized equipment and experience. We handle TPO, PVC, and modified bitumen flat roofs up to 20 stories, coordinating with property managers, HOAs, and parking arrangements for zero-disruption installations.',
      },
      {
        title: 'Hurricane Engineering for the Coast',
        content:
          'Every beachfront install uses Miami-Dade NOA-approved products rated for 175+ mph. We upsize fastening patterns, apply secondary water barriers, and document everything for your insurance company to maximize wind-mitigation discounts.',
      },
      {
        title: 'Emergency Storm Response',
        content:
          'The first 24 hours after a storm are critical in Hallandale Beach. Our emergency crew tarps, documents and begins insurance claim prep within hours of dispatch.',
      },
    ],
    faqs: [
      {
        question: 'What\'s the best roof for a Hallandale Beach oceanfront home?',
        answer:
          'Aluminum standing-seam metal. 100% corrosion-proof, 50+ year life, and rated for 165+ mph wind loads.',
      },
      {
        question: 'Do you service high-rise condos in Hallandale Beach?',
        answer:
          'Yes — we regularly handle flat-roof replacements and maintenance on Hallandale high-rises.',
      },
      {
        question: 'Cost of a coastal Hallandale Beach re-roof?',
        answer:
          'We do not publish public price tables. Coastal and inland projects differ; you receive a line-item quote after we inspect and specify materials.',
      },
      {
        question: 'Why avoid galvanized fasteners near the ocean?',
        answer:
          'Salt air corrodes galvanized steel in 7–10 years, causing nail pops and leaks. We use 100% stainless or aluminum on every Hallandale beachfront roof.',
      },
      {
        question: 'How do you protect condo residents during roof work?',
        answer:
          'Phased scheduling, protected walkways, dust containment and coordinated parking. Zero resident disruption is our standard.',
      },
      {
        question: 'Do you offer 24/7 emergency service?',
        answer:
          'Yes. Call (754) 310-5557 any time for emergency tarps, leaks or storm damage.',
      },
    ],
    projects: [
      { title: 'Aluminum Standing-Seam', neighborhood: 'Golden Isles', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Clay Tile Coastal Re-Roof', neighborhood: 'Three Islands', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Condo TPO Flat Roof', neighborhood: 'The Hemisphere', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'High-Rise Roof Maintenance', neighborhood: 'Parker Dorado', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Oceanfront Metal Roof', neighborhood: 'Beach Walk', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Storm Damage Repair', neighborhood: 'Oceanview', service: 'Storm Damage', image: '/tile_roofing.webp' },
      { title: 'Tile Roof Replacement', neighborhood: 'Hallandale Gardens', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Commercial Flat Roof', neighborhood: 'Hallandale Blvd', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Shingle Re-Roof (inland)', neighborhood: 'West Park', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Emergency Tarp-Up', neighborhood: 'Diplomat Landing', service: 'Storm Damage', image: '/metal_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Hallandale Beach Official Website',
      url: 'https://www.hallandalebeachfl.gov/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Hallandale_Beach,_Florida',
  },

  daniaBeach: {
    slug: '/dania-beach-roofing',
    city: 'Dania Beach',
    citySlug: 'dania-beach',
    state: 'FL',
    zipCodes: ['33004', '33312', '33316'],
    population: '32,000',
    latitude: 26.0512,
    longitude: -80.1439,
    heroImage: '/tile_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229432.0!2d-80.1439!3d26.0512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90058!2sDania%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890127',
    metaTitle: 'Dr. Roofing FL | Dania Beach Roofing Contractor — Licensed & Insured',
    metaDescription:
      'Dania Beach, FL roofing contractor. Coastal tile, metal, shingle & flat roofs. Free inspections, financing. Call (754) 310-5557.',
    metaKeywords:
      'roofing Dania Beach, Dania Beach roofer, roof repair Dania Beach, coastal roofing Florida',
    description:
      'Dania Beach\'s local roofing contractor. Coastal-grade tile, aluminum, and TPO systems for residential and commercial properties.',
    nearYouHeading: 'Trusted Roofing Contractor Near You in Dania Beach, FL',
    cityIntro:
      'Dania Beach sits between Hollywood and Fort Lauderdale Airport — a mix of historic cottages, newer townhouses, marinas, and light industrial. Salt air, proximity to the airport, and Broward HVHZ rules mean every roof needs marine-grade materials and proper fastening. Dr. Roofing FL serves all Dania Beach ZIPs (33004, 33312, 33316) with same-day inspections and permit filing.',
    neighborhoods: [
      'Dania Pointe',
      'Ravenswood',
      'Melaleuca Gardens',
      'Heritage Pointe',
      'Dania Beach Boulevard',
      'Dania Cove',
      'Sheridan Lakes',
      'Jamaica Beach',
      'Griffin Road corridor',
      'Port 95',
    ],
    cityFacts: [
      { label: 'Population', value: '32,000+ residents' },
      { label: 'Marinas', value: '3 major marinas' },
      { label: 'Hurricane Zone', value: 'HVHZ (Broward)' },
      { label: 'Our Projects Here', value: '55+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'Dania Beach Coastal Roofing',
        content:
          'East of US-1 salt air is aggressive. We install stainless hardware, aluminum flashings, and corrosion-resistant metal or tile systems engineered for ocean-proximity Florida homes.',
      },
      {
        title: 'Historic District & Mixed-Use Properties',
        content:
          'Dania Beach has a historic downtown and newer Dania Pointe commercial district. We handle both — from Spanish-tile restoration on a cottage to commercial TPO on a Dania Pointe retail building.',
      },
      {
        title: 'Storm Damage Response',
        content:
          'Our emergency crew is 15 minutes from Dania Beach — 24/7 tarp, dry-in and insurance claim service.',
      },
      {
        title: 'Financing Available',
        content:
          'Financing may be available through third-party programs; ask when you have a written project scope.',
      },
    ],
    faqs: [
      {
        question: 'Do you service homes near the Port / Griffin Rd area?',
        answer:
          'Yes — we cover every Dania Beach ZIP and neighborhood, from Jamaica Beach to the Ravenswood area.',
      },
      {
        question: 'Cost to re-roof in Dania Beach?',
        answer:
          'We do not list neighborhood price charts. A written quote follows inspection.',
      },
      {
        question: 'Do you handle historic district homes?',
        answer:
          'Yes — we prepare Historic Preservation Board submittals as needed.',
      },
      {
        question: 'Can you install shingles that resist airport debris?',
        answer:
          'We recommend Class-4 impact-rated shingles (GAF UHDZ, Owens Corning Duration StormGuard) which also qualify for insurance discounts.',
      },
      {
        question: 'Licensed and insured?',
        answer:
          'Yes — Florida Certified Roofing Contractor, fully insured.',
      },
      {
        question: 'Emergency service after a storm?',
        answer:
          '24/7 response. Call (754) 310-5557.',
      },
    ],
    projects: [
      { title: 'Concrete Tile Re-Roof', neighborhood: 'Heritage Pointe', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Aluminum Standing-Seam', neighborhood: 'Jamaica Beach', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'GAF Shingle Install', neighborhood: 'Ravenswood', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Commercial TPO', neighborhood: 'Dania Pointe', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Historic Tile Restoration', neighborhood: 'Downtown Dania', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Storm Claim Re-Roof', neighborhood: 'Dania Cove', service: 'Storm Damage', image: '/shingle_roofing.webp' },
      { title: 'Metal Roof Replacement', neighborhood: 'Sheridan Lakes', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Shingle Re-Roof', neighborhood: 'Melaleuca Gardens', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Emergency Leak Repair', neighborhood: 'Port 95', service: 'Roof Repair', image: '/shingle_roofing.webp' },
      { title: 'Flat Roof TPO', neighborhood: 'Griffin corridor', service: 'Flat / TPO', image: '/flat_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Dania Beach Official Website',
      url: 'https://www.daniabeachfl.gov/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Dania_Beach,_Florida',
  },

  aventura: {
    slug: '/aventura-roofing',
    city: 'Aventura',
    citySlug: 'aventura',
    state: 'FL',
    zipCodes: ['33160', '33180'],
    population: '40,000',
    latitude: 25.9564794,
    longitude: -80.1392163,
    heroImage: '/flat_roofing.webp',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229432.0!2d-80.1392!3d25.9564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ace!2sAventura%2C%20FL!5e0!3m2!1sen!2sus!4v1234567890128',
    metaTitle: 'Dr. Roofing FL | Aventura Roofing — High-Rise & Residential',
    metaDescription:
      'Aventura roofing contractor. Condo flat roofs, residential tile/metal/shingle, Miami-Dade HVHZ certified. Call (754) 310-5557.',
    metaKeywords:
      'roofing Aventura FL, Aventura roofer, condo roof Aventura, roof replacement Aventura, commercial flat roof Aventura',
    description:
      'Aventura, FL\'s go-to roofing contractor for luxury residential, condominium, and commercial flat roofs. Miami-Dade NOA certified.',
    nearYouHeading: 'Licensed Roofing Contractor Near You in Aventura, FL',
    cityIntro:
      'Aventura is Miami-Dade\'s high-end, high-rise corner — Turnberry Isle estates, Williams Island condos, Aventura Mall commercial properties, and luxury townhomes throughout. Every roof here falls under Miami-Dade\'s strict HVHZ + NOA approval process. Dr. Roofing FL handles condo board specifications, permitting through the Miami-Dade portal, and installations coordinated around resident parking, valet operations, and mall hours.',
    neighborhoods: [
      'Turnberry Isle',
      'Williams Island',
      'Aventura Marina',
      'The Waterways',
      'Point East',
      'Biscaya Island',
      'Country Club Aventura',
      'NE 29th Ave corridor',
      'Aventura Mall area',
      'Admirals Port',
    ],
    cityFacts: [
      { label: 'Population', value: '40,000+ residents' },
      { label: 'High-Rises', value: '60+ condo towers' },
      { label: 'Hurricane Zone', value: 'HVHZ + NOA required' },
      { label: 'Our Projects Here', value: '45+ completed' },
    ],
    commonProblems: baseProblems,
    brandsWorkedWith: baseBrands,
    localInfo: [
      {
        title: 'High-Rise and Condominium Roofing',
        content:
          'Aventura\'s skyline is dominated by high-rise condominiums. We handle flat-roof TPO, PVC, and modified bitumen systems on buildings up to 30+ stories, coordinating with property managers and boards for phased, zero-disruption installations.',
      },
      {
        title: 'Luxury Residential Roofing',
        content:
          'Turnberry Isle and Williams Island luxury homes demand perfection. We install clay barrel tile, concrete S-tile, and custom standing-seam metal with architectural detailing, factory color-matched accessories and full HOA approval support.',
      },
      {
        title: 'Miami-Dade NOA Compliance',
        content:
          'Every Aventura roof product we install carries a current Miami-Dade Notice of Acceptance. We verify each NOA number on every permit — required to legally install any roof in Miami-Dade.',
      },
      {
        title: 'Commercial Flat Roofs',
        content:
          'Office buildings, retail, and mixed-use Aventura commercial properties trust us for TPO replacements, leak audits, and multi-year maintenance contracts.',
      },
    ],
    faqs: [
      {
        question: 'Do you work with Aventura condo associations?',
        answer:
          'Yes. We specialize in condo board specification writing, competitive bidding, and phased roof replacements with zero disruption to residents.',
      },
      {
        question: 'Miami-Dade NOA — what is it?',
        answer:
          'A Notice of Acceptance is Miami-Dade\'s mandatory product approval. We use only NOA-approved materials on every Aventura install.',
      },
      {
        question: 'Cost to re-roof in Aventura?',
        answer:
          'We do not list city-wide roof prices on the site. Commercial flat work is bid per contract after walk-through. Residential quotes are per job after inspection.',
      },
      {
        question: 'Can you work around high-rise parking limitations?',
        answer:
          'Yes — we coordinate with property managers for staging, crane permits, and resident parking plans.',
      },
      {
        question: 'Do you pull Miami-Dade permits?',
        answer:
          'Yes, via the Miami-Dade online portal. Permit typically issued in 3–5 business days.',
      },
      {
        question: 'Emergency service in Aventura?',
        answer:
          '24/7 response. Call (754) 310-5557.',
      },
    ],
    projects: [
      { title: 'Clay Tile Luxury Home', neighborhood: 'Turnberry Isle', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'High-Rise TPO Roof', neighborhood: 'Williams Island', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Condo Flat Roof', neighborhood: 'Point East', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Custom Standing-Seam', neighborhood: 'Country Club', service: 'Metal Roof', image: '/metal_roofing.webp' },
      { title: 'Concrete Tile Re-Roof', neighborhood: 'The Waterways', service: 'Tile Roof', image: '/tile_roofing.webp' },
      { title: 'Commercial Flat Roof', neighborhood: 'Aventura Mall area', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Tile Roof Repair', neighborhood: 'Admirals Port', service: 'Roof Repair', image: '/tile_roofing.webp' },
      { title: 'Condo Tower TPO', neighborhood: 'Biscaya Island', service: 'Flat / TPO', image: '/flat_roofing.webp' },
      { title: 'Townhome Shingle Re-Roof', neighborhood: 'NE 29th Ave', service: 'Shingle Roof', image: '/shingle_roofing.webp' },
      { title: 'Metal Mansard', neighborhood: 'Aventura Marina', service: 'Metal Roof', image: '/metal_roofing.webp' },
    ],
    reviews: [],
    authorityLink: {
      label: 'City of Aventura Official Website',
      url: 'https://www.cityofaventura.com/',
    },
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Aventura,_Florida',
  },
};

// ───── Merge in the ~95 generated cities (Palm Beach, Broward, Miami-Dade) ─────
// (`buildCities` + `newCitySeeds` are imported at the top of this module.)
const generatedCities = buildCities(newCitySeeds);
for (const slug of Object.keys(generatedCities)) {
  if (!locations[slug]) {
    locations[slug] = generatedCities[slug];
  }
}

export const locationList = Object.values(locations);

/** All city slugs — handy for sitemap / dynamic routes. */
export const allCitySlugs = locationList.map((l) => l.citySlug);

