import type { CollectionEntry } from 'astro:content'

import { getCollection } from 'astro:content'

type RecipesByMethod = Record<string, CollectionEntry<'recipes'>[]>

export type GetRecipesByMethodReturn = [string, CollectionEntry<'recipes'>[]][]

const methodsOrder = new Map([
  ['aeropress', { order: 1 }],
  ['cezve', { order: 3 }],
  ['chemex', { order: 2 }],
  ['coldbrew', { order: 4 }],
  ['pourover', { order: 0 }],
  ['summer', { order: 5 }]
])

const sortMethods = (methons: GetRecipesByMethodReturn) => {
  return methons.sort((a, b) => {
    const orderA = methodsOrder.get(a[0])?.order ?? methons.length - 1
    const orderB = methodsOrder.get(b[0])?.order ?? methons.length - 1
    return orderA - orderB
  })
}

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

  return sortMethods(Object.entries(recipesByMethod))
}
