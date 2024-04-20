import { t } from '../../utils'

export const settingsMessages = (locale?: string) => {
  return t(locale, 'settings', {
    description: 'Personalize your experience. Customize preferences, language, and more.',
    header: 'Settings',
    language: 'Language',
    theme: 'Theme',
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'theme.system': 'System',
    title: 'Settings'
  })
}
