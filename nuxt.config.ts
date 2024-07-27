// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // https://content.nuxt.com/get-started/configuration
    '@nuxt/content',
    // https://tailwindcss.nuxtjs.org/tailwind/config
    '@nuxtjs/tailwindcss',
    // https://eslint.nuxt.com/packages/module
    '@nuxt/eslint',
  ],

  eslint: {
    // options here
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-25'
})