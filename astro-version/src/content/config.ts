import { defineCollection, z } from 'astro:content'

const recipesCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    authorImg: z.string().optional(),
    coffeeWeight: z.string(),
    description: z.string(),
    method: z.string(),
    name: z.string(),
    recipeLink: z.string().optional(),
    steps: z.array(z.any()).optional(),
    tags: z.array(z.string()).or(z.string()),
    temperature: z.string().optional(),
    time: z.string().optional(),
    title: z.string(),
    water: z.string()
  }),
  type: 'content'
})

export const collections = {
  recipes: recipesCollection
}
