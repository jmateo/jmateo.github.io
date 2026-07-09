import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    speaker: z.union([z.string(), z.array(z.string())]).optional().nullable(),
    img: z.string().optional().nullable(),
    slideshare: z.union([z.number(), z.array(z.number())]).optional().nullable(),
    date: z.string().optional().nullable(),
    locale: z.enum(['en', 'fr']),
    layout: z.string().optional().nullable(),
    eventstartat: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    locationlink: z.string().optional().nullable(),
    address: z.string().optional().nullable(),
    transport: z.string().optional().nullable(),
    parking: z.string().optional().nullable(),
    eventbrite: z.string().optional().nullable(),
    eventbriteid: z.union([z.string(), z.number()]).optional().nullable(),
    picasa: z.union([z.string(), z.number()]).optional().nullable(),
  }).passthrough(),
});

const speakers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().nullable(),
    locale: z.enum(['en', 'fr']),
    layout: z.string().optional().nullable(),
  }).passthrough(),
});

export const collections = { posts, speakers };
