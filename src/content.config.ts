import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        tags: z.array(z.string()),
        link: z.string().optional(),
        featured: z.boolean().default(false),
        date: z.string()
    })
});

const workplaces = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/workplaces' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        link: z.string().optional(),
        startDate: z.string(),
        endDate: z.string(),
        location: z.string(),
        tools: z.array(z.string())
    })
});

export const collections = { projects, workplaces };
