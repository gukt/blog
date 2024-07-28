import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

// https://tailwindcss.nuxtjs.org/tailwind/config#tailwindconfig
export default <Partial<Config>>{
  // The selector strategy replaced the class strategy in Tailwind CSS v3.4.1. 
  // See: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    }
  }
}
