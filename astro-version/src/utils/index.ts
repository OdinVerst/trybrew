import type { AnyEntryMap, CollectionEntry } from 'astro:content'

import { getCollection } from 'astro:content'

export async function getCollectionByLocale (
  collectionName: keyof AnyEntryMap,
  lang: string
): Promise<CollectionEntry<'recipes'>[]> {
  const recipes = await getCollection(collectionName, entry => {
    return entry.slug.startsWith(`${lang}/`)
  })
  return recipes
}
