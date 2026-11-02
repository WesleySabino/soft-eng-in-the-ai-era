// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Deployment settings.
 * - SITE_URL:  public origin, e.g. https://username.github.io (or your custom domain)
 * - BASE_PATH: sub-path where the site is served, e.g. /repository-name (empty or "/" for a root domain)
 * The GitHub Pages workflow fills both automatically.
 */
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH && process.env.BASE_PATH !== '' ? process.env.BASE_PATH : '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  vite: {
    plugins: [tailwindcss()],
  },
});
