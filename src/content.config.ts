import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    order: z.number(),
    featured: z.boolean().default(true),
    period: z.string().optional(),
    role: z.string().optional(),
    domain: z.string(),
    status: z.string(),
    theme: z.enum(['live', 'anonymous', 'delivery', 'social']).optional(),
    stack: z.array(z.string()).default([]),
    facts: z.array(z.object({
      value: z.string(),
      label: z.string(),
      note: z.string().optional(),
    })).default([]),
    decisions: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/),
    tags: z.array(z.string().trim()),
    categories: z.array(z.string()),
  }),
});

export const collections = { projects, blog };
