#!/usr/bin/env node
/**
 * Auto-generates /public/sitemap.xml from the app's data files:
 *   - Static core pages
 *   - 6 service pages
 *   - 9 location pages
 *   - 54 service×city hyper-local pages
 *   - 9 geo-network blog articles
 *   - N project case studies
 *
 * Run: npm run sitemap  (then commit the file)
 */

import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://drroofingflorida.com';
const TODAY = new Date().toISOString().slice(0, 10);

// Dynamic import via tsx is heavy; keep data duplicated minimally OR parse data files.
// Simplest: read .ts files as JSON data by requiring them via regex extraction.
// Instead we mirror the slugs here, which also serves as a stable contract.
const serviceSlugs = [
  { slug: 'tile-roof-replacement-florida', priority: 0.95 },
  { slug: 'shingle-roof-installation-florida', priority: 0.9 },
  { slug: 'metal-roof-florida', priority: 0.9 },
  { slug: 'flat-roof-tpo-florida', priority: 0.85 },
  { slug: 'roof-repair-florida', priority: 0.85 },
  { slug: 'storm-damage-restoration-florida', priority: 0.85 },
];

const serviceDataSlugs = ['tile-roof', 'shingle-roof', 'metal-roof', 'flat-roof', 'roof-repair', 'storm-damage'];

const citySlugs = [
  'hollywood',
  'miami',
  'fort-lauderdale',
  'pembroke-pines',
  'miramar',
  'davie',
  'hallandale-beach',
  'dania-beach',
  'aventura',
];

const projectSlugs = [
  'hollywood-lakes-tile-roof-replacement',
  'brickell-miami-tpo-commercial-roof',
  'las-olas-fort-lauderdale-standing-seam-metal',
  'pembroke-falls-shingle-insurance-restoration',
  'silver-lakes-miramar-tile-roof-50-year',
  'davie-forest-ridge-metal-roof-equestrian',
  'hallandale-oceanfront-condo-tpo-replacement',
  'dania-beach-lauderdale-isles-repair',
  'aventura-williams-island-tpo-25-year',
];

const geoArticleSlugs = [
  { slug: 'hollywood-florida-guide' },
  { slug: 'miami-florida-guide' },
  { slug: 'fort-lauderdale-florida-guide' },
  { slug: 'pembroke-pines-florida-guide' },
  { slug: 'miramar-florida-guide' },
  { slug: 'davie-florida-guide' },
  { slug: 'hallandale-beach-florida-guide' },
  { slug: 'dania-beach-florida-guide' },
  { slug: 'aventura-florida-guide' },
];

function urlEntry(loc, { changefreq = 'monthly', priority = 0.7 } = {}) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
}

const urls = [];

// Home
urls.push(urlEntry(`${SITE}/`, { changefreq: 'weekly', priority: 1.0 }));

// Core pages
urls.push(urlEntry(`${SITE}/about`, { priority: 0.7 }));
urls.push(urlEntry(`${SITE}/financing`, { priority: 0.8 }));
urls.push(urlEntry(`${SITE}/faq`, { priority: 0.7 }));
urls.push(urlEntry(`${SITE}/blog`, { changefreq: 'weekly', priority: 0.8 }));
urls.push(urlEntry(`${SITE}/projects`, { changefreq: 'weekly', priority: 0.9 }));
urls.push(urlEntry(`${SITE}/gallery`, { changefreq: 'weekly', priority: 0.88 }));

// Services
for (const s of serviceSlugs) {
  urls.push(urlEntry(`${SITE}/${s.slug}`, { priority: s.priority, changefreq: 'monthly' }));
}

// City pages
for (const c of citySlugs) {
  urls.push(urlEntry(`${SITE}/${c}-roofing`, { priority: 0.9, changefreq: 'weekly' }));
}

// Service × City hyper-local combos (54)
for (const svc of serviceDataSlugs) {
  for (const c of citySlugs) {
    urls.push(urlEntry(`${SITE}/${svc}-${c}`, { priority: 0.85, changefreq: 'monthly' }));
  }
}

// Project case studies
for (const p of projectSlugs) {
  urls.push(urlEntry(`${SITE}/projects/${p}`, { priority: 0.75, changefreq: 'yearly' }));
}

// Geo-network blog articles
for (const g of geoArticleSlugs) {
  urls.push(urlEntry(`${SITE}/blog/${g.slug}`, { priority: 0.75, changefreq: 'monthly' }));
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const out = path.resolve(__dirname, '..', 'public', 'sitemap.xml');
await writeFile(out, xml, 'utf8');
console.log(`✓ Wrote sitemap.xml with ${urls.length} URLs`);
