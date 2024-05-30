import { defineCollection, z } from 'astro:content';

const highlights = defineCollection({
	type: 'content',
	schema: ({ image }) => z.object({
		title: z.string(),
		lead: z.string().optional(),
		image: image().optional(),
		tags: z.array(z.string()).optional()
	}),
});

export const collections = { highlights };
