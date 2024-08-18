// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // 启用页面过渡以对所有页面应用自动过渡效果。
    // https://nuxt.com/docs/getting-started/transitions
    // TODO 这里两个设置都不行，不知道为什么，有空再研究。
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  modules: [
    '@nuxt/content', // https://content.nuxt.com/get-started/configuration
    '@nuxt/eslint', // https://eslint.nuxt.com/packages/module
    "@nuxt/icon", // https://nuxt.com/modules/icon
    "@nuxt/image", // https://nuxt.com/modules/image
    '@nuxtjs/tailwindcss', // https://tailwindcss.nuxtjs.org/tailwind/config
    "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org/
    '@vueuse/nuxt', // https://vueuse.org/guide/#nuxt
    '@nuxt/fonts', // https://fonts.nuxt.com
  ],
  // 您可以定义要全局设置的 CSS 文件 / 模块 / 库（包含在每个页面中）。
  // Nuxt 将通过其扩展名自动猜测文件类型，并使用适当的预处理器。
  // NOTE: 如果需要使用它们，您仍然需要安装所需的加载器。
  // https://nuxt.com/docs/api/nuxt-config#css
  css: [
    '~/assets/css/global.css',
  ],
  eslint: {
    // options here
  },
  content: {
    // 启用文档驱动模式，该模式为基于 Markdown 的文档提供了更多功能。
    // https://content.nuxt.com/document-driven/introduction#enable-the-mode
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      // theme: 'github-light'
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      },
      langs: [
        'c',
        'cpp',
        'java'
      ]
    }
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