import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import { defineConfig } from "astro/config";

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
