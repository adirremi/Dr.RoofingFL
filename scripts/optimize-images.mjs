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
  // 0. Logo — create optimized WebP @ display sizes used by the Header
  //    Header desktop renders at h-32 (128px tall). We ship 256px for 2x DPR,
  //    plus a smaller "logo-sm" for mobile (h-20 = 80px → 160px for 2x).
  const logoSrc = path.join(PUBLIC, 'logo_without_backround.png');
  try {
    const { promises: fs } = await import('node:fs');

    // Full-size replacement (for og/schema contexts that still load the png URL)
    // Also keep a reasonably-sized PNG since some structured-data fields demand png.
    await sharp(logoSrc)
      .resize({ width: 512, height: 512, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 85 })
      .toFile(path.join(PUBLIC, 'logo_512.png'));

    // Main WebP used in header/footer (retina-ready 512px)
    const mainWebp = await sharp(logoSrc)
      .resize({ width: 512, height: 512, fit: 'inside' })
      .webp({ quality: 88, effort: 6, alphaQuality: 90 })
      .toBuffer();
    await fs.writeFile(path.join(PUBLIC, 'logo_without_backround.webp'), mainWebp);
    console.log(`  ✓ logo → logo_without_backround.webp (${(mainWebp.length / 1024).toFixed(0)} KB)`);

    // Small WebP for mobile header (256px)
    const smWebp = await sharp(logoSrc)
      .resize({ width: 256, height: 256, fit: 'inside' })
      .webp({ quality: 88, effort: 6, alphaQuality: 90 })
      .toBuffer();
    await fs.writeFile(path.join(PUBLIC, 'logo_sm.webp'), smWebp);
    console.log(`  ✓ logo → logo_sm.webp (${(smWebp.length / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.warn('Logo not processed:', err.message);
  }

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

  // 2. Convert every raster in public/ to .webp (skip logo — handled above)
  const entries = await readdir(PUBLIC);
  for (const name of entries) {
    if (!RASTER.test(name)) continue;
    if (/^og-image\./.test(name)) continue;
    if (/^logo_without_backround\.png$/.test(name)) continue;
    if (/^logo_512\.png$/.test(name)) continue;
    const abs = path.join(PUBLIC, name);
    const webpPath = abs.replace(RASTER, '.webp');
    try {
      const srcMeta = await sharp(abs).metadata();
      const hasAlpha = srcMeta.hasAlpha;
      // Hero/background images: cap to 1600 × aggressive quality.
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
        await img.webp({ quality: 78, alphaQuality: 85, effort: 6 }).toFile(webpPath);
      } else {
        // Hero-grade images behind gradient overlays — quality 65 is indistinguishable.
        await img.webp({ quality: 68, effort: 6 }).toFile(webpPath);
      }
      const s = await stat(webpPath);
      const origSize = (await stat(abs)).size;
      const saved = Math.round((1 - s.size / origSize) * 100);
      console.log(`  ✓ ${name} → ${path.basename(webpPath)} (${(s.size / 1024).toFixed(0)} KB, -${saved}%)`);
    } catch (err) {
      console.warn(`  ✗ ${name}: ${err.message}`);
    }
  }

  // 3. Create a small hero-grade WebP specifically used as the LCP background
  //    so mobile devices don't pull the full 1600px image.
  try {
    const heroSrc = path.join(PUBLIC, 'tile_roofing.jpeg');
    await sharp(heroSrc)
      .resize({ width: 1280, height: 720, fit: 'cover', position: 'center' })
      .webp({ quality: 65, effort: 6 })
      .toFile(path.join(PUBLIC, 'hero_lcp.webp'));
    const s = await stat(path.join(PUBLIC, 'hero_lcp.webp'));
    console.log(`  ✓ hero_lcp.webp — 1280x720 (${(s.size / 1024).toFixed(0)} KB)`);
  } catch (err) {
    console.warn('Hero LCP image not created:', err.message);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
