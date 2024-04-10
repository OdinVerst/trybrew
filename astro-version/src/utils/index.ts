import type { CollectionEntry } from 'astro:content'

import { getCollection } from 'astro:content'

type RecipesByMethod = Record<string, CollectionEntry<'recipes'>[]>

export type GetRecipesByMethodReturn = [string, CollectionEntry<'recipes'>[]][]

export function extractMethod (slug: string) {
  // Folders inside “recipes” folder mean method
  return slug.split('/')[0]
}

export async function getRecipesByMethod (): Promise<GetRecipesByMethodReturn> {
  const recipes = await getCollection('recipes')
  const recipesByMethod = recipes.reduce<RecipesByMethod>((methods, recipe) => {
    const method = extractMethod(recipe.slug)
    if (method) {
      methods[method] = methods[method] || []
      methods[method].push(recipe)
    }
    return methods
  }, {})

  return Object.entries(recipesByMethod)
}
