import { params } from '@nanostores/i18n'

import { t } from '../../utils'

export function commonMessages (locale?: string) {
  return t(locale, 'common', {
    about: 'About',
    aeropress: 'Aeropress',
    author: 'Author',
    cezve: 'Cezve',
    chemex: 'Chemex',
    coldbrew: 'Cold brew',
    description: 'Recipes for brewing alternatives',
    languageName: 'English',
    menu: 'Menu',
    pause: 'Pause',
    pourover: 'Pourover',
    reset: 'Reset',
    sections: 'Sections',
    settings: 'Settings',
    source: 'Source',
    sourceCode: params('Source code on {link}'),
    start: 'Start',
    summer: 'Summer',
    switchTo: params('Switch to {link}'),
    title: 'Recipes'
  })
}
