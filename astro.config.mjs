import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.heimv.ch",
  integrations: [mermaid(), pagefind()],
  server: { host: true },
  build: {
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
    // build: {
    //   rollupOptions: {
    //     external: ['mermaid'],
    //   },
    // },
  },
});
