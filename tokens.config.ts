import { defineTheme } from 'pinceau'

// https://typography.nuxt.space/#configuration-example
export default defineTheme({
  prose: {
    // h1: {
    //   fontSize: '{typography.4xl.fontSize}',
    // },
    // h2: {
    //   fontSize: '{typography.2xl.fontSize}',
    // },
    // h3: {
    //   fontSize: '{typography.xl.fontSize}',
    // },
    // h1: {
    //   margin: '0 0 2rem',
    //   fontSize: '{typography.fontSize.5xl}',
    //   lineHeight: '{typography.lead.tight}',
    //   fontWeight: '{typography.fontWeight.bold}',
    //   letterSpacing: '{typography.letterSpacing.tight}',
    //   iconSize: '{typography.fontSize.3xl}',
    // },
    h1: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.4xl}',
      lineHeight: '{typography.lead.tight}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.2xl}',
    },
    h2: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.3xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.xl}',
    },
    h3: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.2xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      letterSpacing: '{typography.letterSpacing.tight}',
      iconSize: '{typography.fontSize.lg}',
    },
    h4: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.xl}',
      lineHeight: '{typography.lead.snug}',
      fontWeight: '{typography.fontWeight.semibold}',
      iconSize: '{typography.fontSize.lg}',
    },
    h5: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.lg}',
      lineHeight: '{typography.lead.normal}',
      fontWeight: '{typography.fontWeight.semibold}',
      iconSize: '{typography.fontSize.base}',
    },
    h6: {
      margin: '3rem 0 2rem',
      fontSize: '{typography.fontSize.base}',
      lineHeight: '{typography.lead.normal}',
      fontWeight: '{typography.fontWeight.semibold}',
      iconSize: '{typography.fontSize.base}',
    },
  },
})
