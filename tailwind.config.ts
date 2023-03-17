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
        // primary: colors.gray,
        primary: {
          50: '#d7faf8',
          100: '#aff4f0',
          200: '#87efe9',
          300: '#5fe9e1',
          400: '#36e4da',
          500: '#1cd1c6',
          600: '#16a79e',
          700: '#117d77',
          800: '#0b544f',
          900: '#062a28',
        },
        secondary: colors.gray,
      },
      // https://www.tailwindcss.cn/docs/transition-duration
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-line-clamp
    require('@tailwindcss/line-clamp'),
  ],
}
