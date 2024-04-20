import { t } from '../../utils'

export function methodsMessages (locale?: string) {
  return t<Record<string, string>>(locale, 'methods', {
    aeropressDescription: 'Recipes AeroPress - direct and inverted brewing methods.',
    aeropressTitle: 'Recipes AeroPress',
    cezveDescription: 'Recipes cezve - classic and unusual recipes.',
    cezveTitle: 'Recipes cezve',
    chemexDescription: 'Recipes Chemex - direct and inverted brewing methods.',
    chemexTitle: 'Recipes Chemex',
    coldbrewDescription: 'Recipes Cold Brew - classic and unusual recipes.',
    coldbrewTitle: 'Recipes Cold Brew',
    pouroverDescription: 'Recipes filter coffee V60 - from roasters all over the world.',
    pouroverTitle: 'Recipes filter coffee V60',
    summerDescription: 'Summer coffee recipes from roasters around the world.',
    summerTitle: 'Summer coffee recipes'
  })
}
