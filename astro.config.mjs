import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ionyx-framework.dev',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
