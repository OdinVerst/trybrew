/* eslint-disable perfectionist/sort-objects */
import { defineCollection, z } from 'astro:content'

const recipesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    name: z.string(),
    method: z.string(),
    properties: z.object({
      coffeeWeight: z.string(),
      water: z.string(),
      time: z.string().optional(),
      temperature: z.string().optional()
    }),
    tags: z.array(z.string()).or(z.string()),
    link: z.string().optional(),
    steps: z.array(z.any()).optional(),
    author: z.string(),
    authorImg: z.string().optional()
  }),
  type: 'content'
})

export const collections = {
  recipes: recipesCollection
}
