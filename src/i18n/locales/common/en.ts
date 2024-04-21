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
    pourover: 'Pourover',
    sections: 'Sections',
    settings: 'Settings',
    source: 'Source',
    sourceCode: params('Source code on {link}'),
    summer: 'Summer',
    switchTo: params('Switch to {link}'),
    title: 'Recipes'
  })
}
