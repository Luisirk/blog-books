import { defineCollection, z } from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        date: z.string(),
        img: z.string(),
        pages: z.string(),
        description: z.string(),
        buy: z.object({
            Spain: z.string().url(),
            UK:  z.string().url(),
        })

    })
})

export const collections = {books}