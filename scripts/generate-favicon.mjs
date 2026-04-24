/**
 * Builds favicon.ico + PNGs from public/logo_512.png for search engines & tab icons.
 * Google recommends at least 48×48; browsers use 16/32; Apple uses 180.
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import toIco from 'to-ico';

const SRC = path.resolve('public/logo_512.png');
const OUT = path.resolve('public');

async function pngBuffer(size) {
  return sharp(SRC)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 9, effort: 7 })
    .toBuffer();
}

async function main() {
  const b16 = await pngBuffer(16);
  const b32 = await pngBuffer(32);
  const b48 = await pngBuffer(48);
  const b192 = await pngBuffer(192);
  const b180 = await pngBuffer(180);

  writeFileSync(path.join(OUT, 'favicon-16x16.png'), b16);
  writeFileSync(path.join(OUT, 'favicon-32x32.png'), b32);
  writeFileSync(path.join(OUT, 'favicon-48x48.png'), b48);
  writeFileSync(path.join(OUT, 'icon-192.png'), b192);
  writeFileSync(path.join(OUT, 'apple-touch-icon.png'), b180);

  const ico = await toIco([b16, b32, b48]);
  writeFileSync(path.join(OUT, 'favicon.ico'), ico);
  console.log('✓ Wrote public/favicon.ico, favicon-*.png, icon-192.png, apple-touch-icon.png');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
