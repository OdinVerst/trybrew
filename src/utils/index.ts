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

export function humanTimeToSeconds (time: string) {
  const coefficients = [1, 60, 24 * 60]
  return time.split(':').map(Number).reverse().reduce((acc, cur, index) => acc + cur * coefficients[index], 0)
}

export function secondsTimeToHuman (time: number) {
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = Math.floor((time % 60))

  return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0')
}
