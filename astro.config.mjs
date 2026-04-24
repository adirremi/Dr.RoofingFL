import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://drroofingflorida.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
    inlineStylesheets: 'auto',
  },
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    resolve: {
      alias: {
        // Shim react-router-dom + react-helmet-async so legacy React page
        // components render correctly under Astro SSR (static).
        'react-router-dom': path.resolve(__dirname, 'src/lib/router-shim.tsx'),
        'react-helmet-async': path.resolve(__dirname, 'src/lib/helmet-shim.tsx'),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    ssr: {
      noExternal: ['lucide-react'],
    },
  },
});
