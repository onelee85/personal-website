import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const explanation = z.object({ label: z.string(), detail: z.string() });
const capabilityId = z.enum([
  'business',
  'product',
  'experience',
  'architecture',
  'fullstack',
  'quality',
  'devops',
  'growth',
  'ai-application',
  'ai-collaboration',
]);
const roadmap = z.object({
  headline: z.tuple([z.string(), z.string(), z.string()]),
  figureCaption: z.string(),
  layers: z.array(z.object({
    title: z.string(),
    english: z.string(),
    summary: z.string(),
    path: z.string(),
    components: z.array(explanation).min(1),
  })).min(1),
  flows: z.array(z.object({
    label: z.string(),
    title: z.string(),
    summary: z.string(),
    steps: z.array(explanation).min(1),
  })).min(1),
  eras: z.array(z.object({
    label: z.string(),
    firstYear: z.number().int(),
    lastYear: z.number().int(),
    title: z.string(),
    detail: z.string(),
  })).min(1),
});

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
    roadmap: roadmap.optional(),
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
    capabilities: z.array(z.object({
      id: capabilityId,
      evidence: z.string(),
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
