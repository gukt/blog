// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content', // https://content.nuxt.com/get-started/configuration
    '@nuxt/eslint', // https://eslint.nuxt.com/packages/module
    "@nuxt/icon", // https://nuxt.com/modules/icon
    "@nuxt/image", // https://nuxt.com/modules/image
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/tailwind/config
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org/
  ],
  // 您可以定义要全局设置的 CSS 文件 / 模块 / 库（包含在每个页面中）。
  // Nuxt 将通过其扩展名自动猜测文件类型，并使用适当的预处理器。
  // NOTE: 如果需要使用它们，您仍然需要安装所需的加载器。
  // https://nuxt.com/docs/api/nuxt-config#css
  css: [
    '~/assets/css/main.css',
  ],
  eslint: {
    // options here
  },
  // https://color-mode.nuxtjs.org/#configuration
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '', // 默认值是 '-mode', 和 tailwind 不匹配，去掉就匹配了。
  },
  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-07-25'
})