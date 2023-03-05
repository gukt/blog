import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Configures the layers to extend from
  // - typography 层提供了很好看的排版布局，非常适合博客文章等展示
  // - elements 层定义了很多开箱即用的组件，非常适合快速搭建页面
  // See also:
  // - https://nuxt.com/docs/guide/going-further/layers
  // - https://nuxt.com/docs/getting-started/layers
  extends: [
    process.env.THEME_ELEMENTS || '@nuxt-themes/elements',
    process.env.THEME_TYPOGRAPHY || '@nuxt-themes/typography',
  ],
  // Defines the runtime configurations
  // https://nuxt.com/docs/api/composables/use-runtime-config#define-runtime-config
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
    },
  },

  css: [
    // Resolve the virtual path to the real path.
    resolve('./assets/css/main.css'),
  ],
  components: [{ path: '~/components', global: true, pathPrefix: false }],
  modules: [
    // https://content.nuxtjs.org/
    '@nuxt/content',

    // https://nuxt.com/modules/color-mode
    '@nuxtjs/color-mode',

    // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/tailwindcss',

    // https://nuxt.com/modules/icon
    // Icon Search: https://icones.js.org/collection/all
    'nuxt-icon',

    // Local modules
    // '~/modules/version-check.ts',
  ],
  // https://content.nuxtjs.org/api/configuration
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light',
      },
    },
  },
  // https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
  },
})
