import { t } from '../../utils'

export const settingsMessages = (locale?: string) => {
  return t(locale, 'settings', {
    header: 'Settings',
    language: 'Language',
    theme: 'Theme',
    'theme.dark': 'Dark',
    'theme.light': 'Light',
    'theme.system': 'System',
    title: 'Settings - Try brew'
  })
}
