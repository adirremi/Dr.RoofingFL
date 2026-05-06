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
      `${city} homeowners often choose concrete and clay tile for durability in coastal and inland wind conditions. We install to applicable Florida Building Code and HVHZ rules for your address, with products and underlayment specified per the permit. We work with major tile lines such as Eagle, Boral, US Tile, and Entegra as the job requires.`,
    'shingle-roof':
      `Architectural shingles are a common code-compliant option for ${city} homes. Systems can be specified for wind, impact, and warranty coverage from the manufacturer. We install GAF, Owens Corning, and CertainTeed and other shingle systems per the manufacturer’s instructions and your local requirements — ask for options during the estimate.`,
    'metal-roof':
      `Standing-seam and panel metal can perform well in ${city}, including salt-air environments when materials and coatings are specified correctly. We work with Drexel Metals, McElroy, Englert, and other approved systems, installed per product approvals for your site.`,
    'flat-roof':
      `${city} has residential flat areas and many commercial, condo, and warehouse low-slope roofs. We install TPO, PVC, and modified systems with tapered insulation where design requires it, to improve drainage and reduce long-term leak risk.`,
    'roof-repair':
      `We focus repair work in ${city} on finding the source of leaks, not just covering symptoms. That can include boot and flashing work, small-area replacement, and temporary storm protection when conditions allow.`,
    'storm-damage':
      `${city} sees serious wind and rain events. We can document visible damage, meet with your adjuster when you request it, and discuss replacement or repair. Insurance outcomes and out-of-pocket cost depend on your specific policy, not a contractor website.`,
  };

  const metaTitle = `${service.title} in ${city}, FL | Dr. Roofing FL`;
  const metaDescription = `${service.shortTitle} roofing in ${city}, Florida. Licensed, insured. Estimates in writing. Call (754) 310-5557.`;
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
  const intro = `Dr. Roofing FL is a ${service.shortTitle.toLowerCase()} roofer serving ${city} — Florida State-Certified (License #CCC1337611), fully licensed and insured, with work installed to applicable code for your project. ${service.intro.split('.').slice(0, 2).join('.')}. Workmanship (up to 10 years on qualifying work) and manufacturer terms are in your written agreement for the specific job.`;
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
