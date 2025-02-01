import { defineCollection,z } from "astro:content";

const project = defineCollection({
    type:"content",
    schema:z.object({
        thumb:z.string(),
        heroImage:z.string(),
        imgOne:z.string(),
        imgTwo:z.string(),
        title:z.string(),
        subTitle:z.string(),
        typeProject:z.string(),
        pubDate:z.coerce.date(),
        tags:z.string().array()
    })
})


export const collections = {project}