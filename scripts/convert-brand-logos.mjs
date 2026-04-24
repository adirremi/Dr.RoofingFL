import sharp from 'sharp';
import { mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const SRC = '/Users/adirremi/.cursor/projects/Users-adirremi-Downloads-Dr-RoofingFL/assets';
const DST = path.resolve('public/brands');

if (!existsSync(DST)) mkdirSync(DST, { recursive: true });

const MAP = [
  ['atlas',           'Atalas-be051c9d-2199-4b2d-a35e-5a71e9f29494.png'],
  ['boral',           'Boral_Roofing_logo-569479f1-9248-4b46-80cd-8047335991a4.png'],
  ['drexel-metals',   'Drexel_Metals_Logo-9e09e1ee-78b8-43d5-9199-c1ec2b09b3a5.png'],
  ['eagle',           'Eagle_Roofing_Products_logo-3cb0e952-87c3-4b5c-9e59-b54bda1555d7.png'],
  ['firestone',       'Firestone_Building_Products_logo-e79a7974-9244-4f4d-8851-540605acb309.png'],
  ['gaco',            'Gaco_logo-22f228e5-2d10-4f10-8cc8-fd50e0e567c4.png'],
  ['greensky',        'GreenSky-Logo-5fa8d49b-8999-42e4-ac46-66a6373dd33d.png'],
  ['home-run',        'HomeRunLogo-a7d67724-8c83-418a-9be6-7a8ef6624d44.png'],
  ['johns-manville',  'Johns_Manville_logo-166bed74-222c-4b08-9435-0277e9026aaa.png'],
  ['malarkey',        'Malarkey_Roofing_Products_logo-cfac9774-bb5d-4021-8f51-b790d7d3f688.png'],
  ['mcelroy-metal',   'McElroy_Metal_logo-c3ac72d3-4245-42b4-b656-34401fc87fd5.png'],
  ['metal-sales',     'metal-sales-logo-fcdc8eb7-f3a8-4f51-82b9-1816b3f0a7d0.png'],
  ['mule-hide',       'MuleHide-Logo-501fbee3-871c-462a-88d3-bf6afbcc8cc2.png'],
  ['polyglass',       'polyglass_logo-6d9a7e3b-a20c-4753-94b7-0a79652a50ed.png'],
  ['renew-financial', 'Renew_Financial_logo-4082fa11-77b8-4373-aa40-b57801502b9c.png'],
  ['henry',           'henry-aea-logo-1f6fb20e-96c5-46bf-a42b-e99a1f8644df.png'],
  ['englert',         'englert-logo-425c506b-64eb-4045-8a68-8c063a96b6da.png'],
  ['soprema',         'soprema-full-logo-1a68545e-745b-4953-9e3c-fa0931f0e31f.png'],
  ['westlake-royal',  'Westlake_Royal_Roofing_logo-629bc8b0-df1f-4c5f-a05c-812c90821404.png'],
  ['versico',         'Versico_Logo-93923d8e-75b7-4261-9642-48aa918d9d90.png'],
  ['synchrony',       'Synchrony_Logo_RGB_Pos-72b28a53-41a9-4121-889a-87234afe58d4.png'],
];

for (const [slug, filename] of MAP) {
  const srcPath = path.join(SRC, filename);
  const outPath = path.join(DST, `${slug}.webp`);
  const meta = await sharp(srcPath).metadata();
  await sharp(srcPath)
    .resize({ width: Math.min(400, meta.width ?? 400), withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile(outPath);
  const out = await sharp(outPath).metadata();
  console.log(`✓ ${slug.padEnd(18)} → ${out.width}px (${(out.size ?? 0) / 1024 | 0} KB)`);
}

console.log('\nDone.');
