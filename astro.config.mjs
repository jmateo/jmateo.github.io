import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable for GitHub Pages deployment with custom domain
  site: 'https://jmateo.github.io',
  base: '/',
  outDir: './dist',
  integrations: [],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  }
});
