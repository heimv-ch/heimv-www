import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

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

export const collections = { docs };
