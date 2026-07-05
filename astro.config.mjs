import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable for GitHub Pages deployment
  site: 'https://genevajug.github.com',
  base: '/',
  outDir: './dist',
  integrations: [],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    server: {
      allowedHosts: [
        "4321--main--python-dev-env--mateo.coder.loimkube.biz.lodh.com",
      ],
    },
  },
});
