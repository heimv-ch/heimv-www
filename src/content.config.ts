import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const features = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/features" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      lead: z.string().optional(),
      image: image().optional(),
      homepage: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

export const collections = { features };
