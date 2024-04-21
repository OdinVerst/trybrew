import type { Formatter, Messages, Translations } from '@nanostores/i18n'
import type { ReadableAtom, StoreValue } from 'nanostores'

import { createI18n, formatter } from '@nanostores/i18n'
import { atom } from 'nanostores'

import aboutRu from './locales/about/ru.json'
import commonRu from './locales/common/ru.json'
import notFoundRu from './locales/not-found/ru.json'
import settingsRu from './locales/settings/ru.json'

export function t<BaseTranslation extends Translations> (
  locale: string = 'en',
  componentName: string,
  baseTranslation: BaseTranslation
): StoreValue<Messages<BaseTranslation>> {
  const i18n = createI18n(atom(locale), {
    cache: {
      ru: {
        about: aboutRu,
        common: commonRu,
        'not-found': notFoundRu,
        settings: settingsRu
      }
    },
    async get () {
      return {}
    }
  })

  return i18n(componentName, baseTranslation).get()
}

interface PropertyFormatters {
  temperature: (value: number | string) => string
  time: (value: string) => string
  volume: (value: number) => string
  weight: (value: number) => string
}

export function createPropertyFormatters (locale: string = 'en'): PropertyFormatters {
  const formatters = formatter(atom(locale)).get()
  return {
    temperature: (value: number | string) => {
      if (typeof value === 'number') {
        return formatters.number(value, {
          style: 'unit',
          unit: 'celsius'
        })
      }
      if (typeof value === 'string' && value.startsWith('~')) {
        return (
          '~' +
          formatters.number(Number(value.slice(1)), {
            style: 'unit',
            unit: 'celsius'
          })
        )
      }
      return value
    },
    time: (value: string) => {
      const parts = value.split(':')
      if (parts.length === 3) {
        const [hours, minutes] = parts.map(Number)
        let duration = ''
        if (hours) {
          duration += formatters.number(hours, {
            style: 'unit',
            unit: 'hour'
          })
        }
        if (minutes) {
          duration +=
            ' ' +
            formatters.number(minutes, {
              style: 'unit',
              unit: 'minute'
            })
        }
        return duration
      }
      return value
    },
    volume: (value: number) => {
      const isLiters = value >= 1000
      const opts: Intl.NumberFormatOptions = {
        style: 'unit',
        unit: isLiters ? 'liter' : 'milliliter'
      }
      value = isLiters ? value / 1000 : value
      return formatters.number(value, opts)
    },
    weight: (value: number) => {
      const isKilograms = value >= 1000
      const opts: Intl.NumberFormatOptions = {
        style: 'unit',
        unit: isKilograms ? 'kilogram' : 'gram'
      }
      value = isKilograms ? value / 1000 : value
      return formatters.number(value, opts)
    }
  }
}
