#!/usr/bin/env node
/**
 * One-shot image optimizer.
 *   - Resizes og-image.jpg to exactly 1200x630 (strict, quality 85)
 *   - Generates .webp next to every .jpg/.jpeg/.png in /public (except PNGs with transparency)
 *   - Caps any input image to 1920px on the longer side
 */

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.resolve(__dirname, '..', 'public');

const RASTER = /\.(jpe?g|png)$/i;

async function main() {
  // 1. OG image — exact 1200x630, quality 85
  const ogSrc = path.join(PUBLIC, 'og-image.jpg');
  try {
    await sharp(ogSrc)
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'center' })
      .jpeg({ quality: 85, progressive: true, mozjpeg: true })
      .toBuffer()
      .then(async (buf) => {
        // overwrite file
        const { promises: fs } = await import('node:fs');
        await fs.writeFile(ogSrc, buf);
        console.log(`  ✓ og-image.jpg — 1200x630 (${(buf.length / 1024).toFixed(0)} KB)`);
      });

    // also create og-image.webp
    const webpBuf = await sharp(ogSrc)
      .resize({ width: 1200, height: 630, fit: 'cover' })
      .webp({ quality: 82 })
      .toBuffer();
    const { promises: fs } = await import('node:fs');
    await fs.writeFile(path.join(PUBLIC, 'og-image.webp'), webpBuf);
    console.log(`  ✓ og-image.webp — 1200x630 (${(webpBuf.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.warn('OG image not processed:', err.message);
  }

  // 2. Convert every raster in public/ to .webp (skip if webp already newer)
  const entries = await readdir(PUBLIC);
  for (const name of entries) {
    if (!RASTER.test(name)) continue;
    if (/^og-image\./.test(name)) continue; // handled above
    const abs = path.join(PUBLIC, name);
    const webpPath = abs.replace(RASTER, '.webp');
    try {
      const srcMeta = await sharp(abs).metadata();
      const hasAlpha = srcMeta.hasAlpha;
      // cap to 1600 px on the longer side for web; anything larger is wasted
      const MAX = 1600;
      const longest = Math.max(srcMeta.width || 0, srcMeta.height || 0);
      let img = sharp(abs);
      if (longest > MAX) {
        img = img.resize({
          width: srcMeta.width >= srcMeta.height ? MAX : null,
          height: srcMeta.height > srcMeta.width ? MAX : null,
        });
      }
      if (hasAlpha) {
        await img.webp({ quality: 80, alphaQuality: 85, effort: 6 }).toFile(webpPath);
      } else {
        await img.webp({ quality: 75, effort: 6 }).toFile(webpPath);
      }
      const s = await stat(webpPath);
      const origSize = (await stat(abs)).size;
      const saved = Math.round((1 - s.size / origSize) * 100);
      console.log(`  ✓ ${name} → ${path.basename(webpPath)} (${(s.size / 1024).toFixed(0)} KB, -${saved}%)`);
    } catch (err) {
      console.warn(`  ✗ ${name}: ${err.message}`);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
