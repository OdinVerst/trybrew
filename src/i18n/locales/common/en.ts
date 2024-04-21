import { t } from '../../utils'

export function commonMessages (locale?: string) {
  return t<Record<string, string>>(locale, 'common', {
    about: 'About',
    aeropress: 'Aeropress',
    author: 'Author',
    cezve: 'Cezve',
    chemex: 'Chemex',
    coldbrew: 'Cold brew',
    description: 'Recipes for brewing alternatives',
    menu: 'Menu',
    pourover: 'Pourover',
    sections: 'Sections',
    settings: 'Settings',
    source: 'Source',
    summer: 'Summer',
    title: 'Recipes'
  })
}
