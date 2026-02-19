import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subTitle: z.string(),

    role: z.string().optional(),
    duration: z.string().optional(),
    stack: z.array(z.string()).optional(),

    cover: z.string().optional(),

    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string()
  })
});

export const collections = {
  work,
  pages
};
