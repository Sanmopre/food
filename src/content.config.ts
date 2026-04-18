import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  recipes,
};