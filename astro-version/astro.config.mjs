import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true
    }
  },
  site: 'https://trybrew.app',
  integrations: [
    icon(),
    mdx()
  ],
  output: 'static'
})
