import { defineCollection, z } from 'astro:content';

// Define the schema for documentation
const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
});

// Define the schema for blog posts
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  author: z.string(),
  tags: z.array(z.string()).optional(),
});

// Define the collections
export const collections = {
  docs: defineCollection({
    schema: docsSchema,
  }),
  blog: defineCollection({
    schema: blogSchema,
  }),
};
