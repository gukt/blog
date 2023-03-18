import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Configures the layers to extend from
  // - typography Layer - 提供了很好看的排版布局，非常适合博客文章等展示
  // - elements Layer - 定义了很多开箱即用的组件，非常适合快速搭建页面
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
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    },
  },
  // // https://nuxt.com/docs/getting-started/seo-meta#app-head
  // // https://nuxt.com/docs/api/configuration/nuxt-config/#head
  // // https://unhead.harlanzw.com/
  // app: {
  //   head: {
  //     // charset: 'utf-16',
  //     // viewport: 'width=500, initial-scale=1',
  //     title: 'My App',
  //     // charset: 'utf-8',
  //     // viewport: 'width=500, initial-scale=1',
  //     meta: [
  //       // {
  //       //   name: 'viewport',
  //       //   content: 'width=device-width, initial-scale=1',
  //       // },
  //       // {
  //       //   charset: 'utf-8',
  //       // },
  //       // <meta name="description" content="My amazing site">
  //       { name: 'description', content: 'My amazing site.' },
  //     ],
  //   },
  // },
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

    // https://nuxt.com/modules/simple-sitemap
    'nuxt-simple-sitemap',

    // https://github.com/nicolasbeauvais/vue-social-sharing#nuxt
    // ['vue-social-sharing/nuxt', {}],

    // https://algolia.nuxtjs.org/getting-started/quick-start/
    // ['@nuxtjs/algolia', {}]

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
