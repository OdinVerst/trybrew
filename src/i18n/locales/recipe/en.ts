import { t } from '../../utils'

export const getRecipeMessages = (locale?: string) => {
  return t(locale, 'recipe', {
    infusions: 'Infusions',
    prewetting: 'Pre-wetting',
    startTime: 'Start at',
    totalWeight: 'Total weight'
  })
}
