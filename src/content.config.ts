import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/docs" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lead: z.string().optional(),
      image: image().optional(),
      homepage: z.boolean().optional(),
      featured: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const releases = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/releases" }),
  schema: () =>
    z.object({
      version: z.string(),
      released_at: z.date().optional(),
    }),
});

export const collections = { docs, releases };
