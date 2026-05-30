import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tech_stack: z.array(z.object({
      name: z.string(),
      color: z.string(),
    })),
    description: z.string(),
    links: z.array(z.object({
      label: z.string(),
      url: z.url(),
    })).optional().default([]),
    created_at: z.string(),
    progress: z.number().min(0).max(100),
    script: z.string().optional(),
  }),
});

export const collections = { projects };
