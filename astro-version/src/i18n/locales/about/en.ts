import { params } from '@nanostores/i18n'

import { t } from '../../utils'

export const aboutMessages = (locale?: string) => {
  return t(locale, 'about', {
    about: params(
      `Try brew - open source project created by coffee lovers to get new taste emotions. Works on {platform}.
    <br/><br/> Source code is on {source}.
    <br/><br/> Wishes and suggestions can be sent to: {suggestions}`
    ),
    contributors: 'Contributors',
    description: 'Information about the Try Brew project',
    header: 'About',
    support: 'Support'
  })
}
