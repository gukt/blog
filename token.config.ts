import { defineTheme } from 'pinceau'

// https://typography.nuxt.space/#configuration-example
export default defineTheme({
  prose: {
    h1: {
      fontSize: '{typography.4xl.fontSize}',
    },
    h2: {
      fontSize: '{typography.2xl.fontSize}',
    },
    h3: {
      fontSize: '{typography.xl.fontSize}',
    },
  },
})
