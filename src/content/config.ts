import { defineCollection, z } from "astro:content";
const reviews = defineCollection({
    schema: z.object({
        user: z.string(),
        img: z.string(),
        rating: z.number(),
        comment: z.string(),
        date: z.string(),
        link: z.string(),
        services: z.string(),
    }),
});

export const collections = { reviews };