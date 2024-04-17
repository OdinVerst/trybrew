import { t } from '../../utils'

export function notFoundMessages (locale?: string) {
  return t<Record<string, string>>(locale, 'not-found', {
    link: 'Go to Home',
    subtitle: "Perhaps this recipe hasn't been created yet or something has happened...",
    title: 'Page not found'
  })
}
