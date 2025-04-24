import type { AnyEntryMap, CollectionEntry } from 'astro:content'

import { getCollection } from 'astro:content'
import fs, { access } from 'node:fs/promises'
import path from 'node:path'

export async function checkIconExists (id: string) {
  const iconPath = path.resolve(process.cwd(), `src/icons/${id}.svg`)
  return await access(iconPath, fs.constants.R_OK)
    .then(() => true)
    .catch(() => false)
}

export async function getCollectionByLocale<T extends keyof AnyEntryMap> (
  collectionName: T,
  lang: string
): Promise<CollectionEntry<T>[]> {
  const entries = await getCollection(collectionName, entry => {
    return entry.id.startsWith(`${lang}/`)
  })
  return entries
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

const BREWING_METHOD_ORDER = ['pourover', 'aeropress', 'cezve', 'chemex', 'coldbrew', 'summer']

export function sortByBrewingMethod<T> (
  entries: T[],
  methodGetter: (entry: T) => string
) {
  return entries.sort((a, b) => {
    const orderA = BREWING_METHOD_ORDER.indexOf(methodGetter(a))
    const orderB = BREWING_METHOD_ORDER.indexOf(methodGetter(b))
    return orderA - orderB
  })
}
