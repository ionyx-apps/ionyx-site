import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the schema for documentation
const docsSchema = z.object({
  title: z.string(),
  description: z.string(),
});

// Define the schema for blog posts
const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.string().optional(), // Make optional as some posts might not have it
  tags: z.array(z.string()).optional(),
  heroImage: z.string().optional(),
});

// Define the collections with loaders for Astro 5
export const collections = {
  documentation: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
    schema: docsSchema,
  }),
  blog: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: blogSchema,
  }),
};
