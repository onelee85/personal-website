import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    order: z.number(),
    period: z.string(),
    role: z.string(),
    domain: z.string(),
    status: z.string(),
    theme: z.enum(['live', 'anonymous', 'delivery', 'social']),
    stack: z.array(z.string()),
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

export const collections = { projects };
