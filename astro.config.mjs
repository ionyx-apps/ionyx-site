import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    tailwind(),
    starlight({
      title: 'Ionyx Documentation',
      description: 'Ultra-minimalist desktop application framework',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      customCss: [
        './src/styles/starlight.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/docs/introduction' },
            { label: 'Installation', link: '/docs/installation' },
            { label: 'Quick Start', link: '/docs/quick-start' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Architecture', link: '/docs/architecture' },
            { label: 'Frontend Integration', link: '/docs/frontend' },
            { label: 'Backend API', link: '/docs/backend' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Building Apps', link: '/docs/building' },
            { label: 'Deployment', link: '/docs/deployment' },
            { label: 'Performance', link: '/docs/performance' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'CLI Commands', link: '/docs/cli' },
            { label: 'Configuration', link: '/docs/configuration' },
            { label: 'API Reference', link: '/docs/api' },
          ],
        },
      ],
      social: [
        { label: 'GitHub', href: 'https://github.com/ionyx-apps/ionyx', icon: 'github' },
        { label: 'Discord', href: 'https://discord.gg/ionyx', icon: 'discord' },
      ],
    }),
  ],
  site: 'https://ionyx-framework.dev',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
