import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
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
  integrations: [icon(), mdx(), sitemap()],
  output: 'static',
  site: 'https://trybrew.app'
})
