import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.heimv.ch",
  integrations: [pagefind()],
  server: { host: true },
  build: {
    format: "file",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
