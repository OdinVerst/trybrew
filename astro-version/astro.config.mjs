import mdx from '@astrojs/mdx'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';

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
  integrations: [
    icon(),
    mdx(),
    sitemap()
  ],
  site: 'https://trybrew.app',
  output: 'static'
})
