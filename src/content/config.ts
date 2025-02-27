import { defineCollection,z } from "astro:content";

const work = defineCollection({
    type:"content",
    schema:z.object({
        thumb:z.string().optional(),
        heroImage:z.string().optional(),
        imgOne:z.string().optional(),
        imgTwo:z.string().optional(),
        title:z.string(),
        subTitle:z.string().optional(),
        typeProject:z.string().optional(),
        pubDate:z.coerce.date().optional(),
        tags:z.string().array().optional(),
    })
})


export const collections = {work}