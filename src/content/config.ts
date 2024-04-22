/* eslint-disable perfectionist/sort-objects */
import { defineCollection, z } from 'astro:content'

const recipesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    name: z.string(),
    method: z.string(),
    properties: z.object({
      coffeeWeight: z.number(),
      water: z.number(),
      time: z.string().optional(),
      temperature: z.union([z.string(), z.number()]).optional(),
      ice: z.number().optional()
    }),
    steps: z.array(z.object({
      description: z.string().optional(),
      time: z.string(),
      water: z.number()
    })).optional(),
    author: z.string(),
    authorImg: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).or(z.string())
  }),
  type: 'content'
})

export const collections = {
  recipes: recipesCollection
}
