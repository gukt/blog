import colors from 'tailwindcss/colors'

// Tailwind configuration guides:
// - https://tailwindcss.com/docs/configuration
// - https://tailwindcss.nuxtjs.org/getting-started/options
export default {
  darkMode: 'class',
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.gray,
      },
    },
  },
}
