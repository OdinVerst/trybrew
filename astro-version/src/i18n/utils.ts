import type { Messages, Translations } from '@nanostores/i18n'
import type { StoreValue } from 'nanostores'

import { createI18n } from '@nanostores/i18n'
import { atom } from 'nanostores'

import aboutRu from './locales/about/ru.json'
import commonRu from './locales/common/ru.json'
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
        settings: settingsRu
      }
    },
    async get () {
      return {}
    }
  })

  return i18n(componentName, baseTranslation).get()
}
