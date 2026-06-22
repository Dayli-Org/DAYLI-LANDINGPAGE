import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://dayli.co.il',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'ar', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
