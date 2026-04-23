/**
 * Service × City hyper-local combo data.
 * 6 services × 9 cities = 54 unique high-value SEO pages.
 * URLs:  /<service-citySlug>  →  e.g. /tile-roof-miami
 */

import { services as allServices } from './services';
import type { Service } from './services';
import { locationList, locations } from './locations';
import type { LocationData } from './locations';

export interface ServiceCityCombo {
  slug: string; // e.g. "tile-roof-miami"
  path: string; // e.g. "/tile-roof-miami"
  service: Service;
  location: LocationData;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  h1: string;
  h2: string;
  intro: string;
  localAngle: string;
}

/**
 * Build hyper-local combo from a service + city.
 * The copy is dynamically assembled per pair.
 */
function buildCombo(service: Service, location: LocationData): ServiceCityCombo {
  const city = location.city;
  const slug = `${service.slug}-${location.citySlug}`;

  // Service-specific local angles keyed by service slug
  const localAnglesByService: Record<string, string> = {
    'tile-roof':
      `${city} homeowners choose concrete and clay tile for its 50+ year lifespan and ability to withstand the Atlantic Basin hurricanes that routinely threaten ${city}. Every tile roof we install in ${city} meets the 2023 Florida Building Code HVHZ specifications — Miami-Dade NOA-approved tile, stainless steel fasteners, peel-and-stick underlayment, and engineered hurricane strapping. Eagle, Boral, US Tile and Entegra factory-certified in ${city}.`,
    'shingle-roof':
      `Architectural shingles remain the most affordable Florida Building Code-compliant roofing option for ${city} homeowners. Our GAF Timberline HDZ and Owens Corning Duration installations are rated for 130+ mph winds, qualify for Class-4 impact-rated insurance discounts, and carry lifetime transferable manufacturer warranties. We\u2019re a GAF Master Elite and Owens Corning Platinum Preferred Contractor serving ${city} — a top 3% Florida distinction.`,
    'metal-roof':
      `${city} is an ideal environment for standing-seam metal roofing: extreme salt-air exposure (especially near the Atlantic and Intracoastal), cool-roof energy savings in a hot climate, and 165+ mph wind ratings. We install factory-Kynar 500 aluminum and Galvalume standing-seam systems from Drexel Metals, McElroy Metal, and Englert — all Miami-Dade NOA-approved for ${city} HVHZ requirements.`,
    'flat-roof':
      `${city} has a significant residential flat-roof inventory (Florida rooms, carports, garages) plus commercial buildings, condos, and warehouses. We install GAF EverGuard TPO, Carlisle Sure-Weld PVC, and modified-bitumen systems with engineered tapered insulation for proper drainage — eliminating the ponding water that causes 80% of ${city} flat-roof failures.`,
    'roof-repair':
      `Fast, surgical roof repairs across ${city} — we diagnose the actual leak source using infrared thermal imaging rather than patching the symptom. ${city} residents call us for pipe-boot replacements, valley rebuilds, skylight re-seals, chronic-leak hunting, and 24/7 post-storm emergency tarp. Most repairs are scheduled same-day or next-day.`,
    'storm-damage':
      `${city} is in the direct Atlantic hurricane corridor and has been impacted by Irma (2017), Ian (2022), and numerous unnamed wind events. Our dedicated restoration division handles the entire insurance claim process from free post-storm inspection to adjuster meetings to full re-roof replacement — you pay only your deductible.`,
  };

  const metaTitle = `${service.title} in ${city}, FL | Dr. Roofing FL`;
  const metaDescription = `${service.shortTitle} roofing contractor in ${city}, Florida. Licensed, insured, HVHZ-certified. ${service.priceRange}. Free quote — (754) 310-5557.`;
  const metaKeywords = [
    `${service.shortTitle.toLowerCase()} ${city.toLowerCase()}`,
    `${service.shortTitle.toLowerCase()} roof ${city.toLowerCase()}`,
    `${service.shortTitle.toLowerCase()} roofing ${city.toLowerCase()} fl`,
    `${service.shortTitle.toLowerCase()} contractor ${city.toLowerCase()}`,
    `roofer ${city.toLowerCase()}`,
    `${city.toLowerCase()} ${service.slug.replace(/-/g, ' ')}`,
  ].join(', ');

  const h1 = `${service.title} in ${city}, Florida`;
  const h2 = `${service.shortTitle} Roofing Contractor Near You in ${city}, FL`;
  const intro = `Dr. Roofing FL is ${city}\u2019s trusted ${service.shortTitle.toLowerCase()} roofing specialist \u2014 licensed, insured, HVHZ-certified, and locally operated. ${service.intro.split('.').slice(0, 2).join('.')}. Every ${service.shortTitle.toLowerCase()} roof we install in ${city} carries a manufacturer warranty plus our own 10-year workmanship warranty.`;
  const localAngle = localAnglesByService[service.slug] || service.intro;

  return {
    slug,
    path: `/${slug}`,
    service,
    location,
    metaTitle,
    metaDescription,
    metaKeywords,
    h1,
    h2,
    intro,
    localAngle,
  };
}

export const serviceCityCombos: ServiceCityCombo[] = allServices.flatMap((s) =>
  locationList.map((l) => buildCombo(s, l))
);

export const serviceCityBySlug: Record<string, ServiceCityCombo> = serviceCityCombos.reduce(
  (acc, c) => {
    acc[c.slug] = c;
    return acc;
  },
  {} as Record<string, ServiceCityCombo>
);

/** Grouped combos by city slug — useful for city-page service grids */
export function combosByCity(citySlug: string): ServiceCityCombo[] {
  return serviceCityCombos.filter((c) => c.location.citySlug === citySlug);
}

/** Grouped combos by service slug — useful for service-page city grids */
export function combosByService(serviceSlug: string): ServiceCityCombo[] {
  return serviceCityCombos.filter((c) => c.service.slug === serviceSlug);
}

/** Re-export for convenience */
export { locations };
