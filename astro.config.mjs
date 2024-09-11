import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.heimv.ch',
  integrations: [tailwind(), pagefind()],
  server: { host: true },
  build: {
    format: "file",
  },
});
