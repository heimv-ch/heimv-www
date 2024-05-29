import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.heimv.ch',
  integrations: [tailwind()],
  server: { host: true}
});
