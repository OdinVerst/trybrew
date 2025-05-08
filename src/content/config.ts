/* eslint-disable perfectionist/sort-objects */
import { defineCollection, reference, z } from 'astro:content'
import { file, glob } from 'astro/loaders'

const recipeStep = z.object({
  description: z.string().optional(),
  time: z.string(),
  water: z.number(),
  group: z.string().optional()
})

const recipesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
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
    steps: z.array(recipeStep).optional(),
    author: reference('authors'),
    authorName: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).or(z.string())
  })
})

const authorsCollection = defineCollection({
  loader: file('src/content/authors.json'),
  schema: z.object({
    name: z.string()
  })
})

export const collections = {
  recipes: recipesCollection,
  authors: authorsCollection
}
