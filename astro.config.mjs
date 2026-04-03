import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: "https://www.heimv.ch",
  integrations: [
    mermaid(),
    pagefind(),
  ],
  server: { host: true },
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ['mermaid'],
      },
    },
  },
});
