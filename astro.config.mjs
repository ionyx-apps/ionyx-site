import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
  ],
  site: 'https://ionyx-framework.dev',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory'
  },
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    }
  }
});
