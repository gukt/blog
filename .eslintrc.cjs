// https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
  ],
}
