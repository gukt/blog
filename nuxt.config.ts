// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content', // https://content.nuxt.com/get-started/configuration
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/tailwind/config
    '@nuxt/eslint', // https://eslint.nuxt.com/packages/module
    "@nuxt/icon", // https://nuxt.com/modules/icon
    "@nuxt/image", // https://nuxt.com/modules/image
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org/
  ],

  eslint: {
    // options here
  },
  // https://color-mode.nuxtjs.org/#configuration
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-25'
})