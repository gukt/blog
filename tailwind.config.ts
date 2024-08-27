import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
// 从 tailwindcss 导入 fontFamily 变量
import { fontFamily } from 'tailwindcss/defaultTheme'

// https://tailwindcss.nuxtjs.org/tailwind/config#tailwindconfig
export default <Partial<Config>>{
  // The selector strategy replaced the class strategy in Tailwind CSS v3.4.1. 
  // See: https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: 'selector',
  theme: {
    // container 类是 tailwind 原生提供的一个布局工具类，用于设置容器的最大宽度、内边距、是否居中等。关于 container 布局组件，请参考：https://www.tailwindcss.cn/docs/container。如果要实现响应式布局，还必须配合在 global.css 中提供其他屏幕尺寸的 container 边距大小，请参考：global.css。
    // 下面的配置参考自 Shadcn 官网源代码：https://github.com/shadcn-ui/ui/blob/59f2d558b6ea6b28b2b273e12b47c92831900e9f/tailwind.config.cjs#L8，后来我参考了 taxonomy 的很多样式，所以也结合参考 taxonomy 的 tailwind 配置：https://github.com/shadcn-ui/taxonomy/blob/main/tailwind.config.js
    container: {
      // 设置 container 类默认居中：https://www.tailwindcss.cn/docs/container#centering-by-default
      center: true,
      // 添加水平填充（内边距）：https://www.tailwindcss.cn/docs/container
      padding: '2rem',
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 由于 tailwind 默认只提供了 text-base(16px), text-lg(18px) ，而我想使用介于两者之间的 fontSize，所以这里自定义了字体大小以及行高，参考文档：https://www.tailwindcss.cn/docs/font-size#providing-a-default-line-height
      fontSize: {
        'md': ['1.0625rem', '1.625rem'],
        // 'md': ['1rem', '1.5rem'],
      },
      // 向 Tailwind CSS 的默认调色板中添加自定义颜色，这些颜色将在项目中全局使用。关于如何添加扩展的自定义颜色，请参加 Tailwind CSS 文档：https://www.tailwindcss.cn/docs/customizing-colors#adding-additional-colors
      // 此处的扩展颜色是从 Shadcn UI 中提取的，可以在这里找到更多颜色配置：https://www.tailwindcss.cn/docs/customizing-colors#color-object-syntax，这里使用到的 CSS 变量也是从 Shadcn UI 官方网站的开源代码中提取的：https://github.com/shadcn-ui/ui/blob/main/templates/next-template/styles/globals.css，另外还参考了 taxonomy 的样式配置：https://github.com/shadcn-ui/taxonomy/blob/main/tailwind.config.js
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      // https://github.com/shadcn-ui/taxonomy/blob/main/tailwind.config.js
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      // 这两个变量我在 global.css 中进行了全局设定：
      // - font- sans 设定为使用 Inter 字体，
      // - font-heading 设定使用 CalSans 字体
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      // typography: (theme: any) => ({
      //   DEFAULT: {
      //     css: {
      //       h2: {
      //         scrollMargin: theme('scroll-m-20'),
      //         marginTop: theme('mt-10'), // mt-10
      //         scrollMarginTop: theme('scroll-m-20'), // scroll-m-20
      //         borderBottomWidth: '1px', // border-b
      //         paddingBottom: theme('spacing.1'), // pb-1
      //         fontSize: theme('fontSize.3xl'), // text-3xl
      //         fontWeight: theme('fontWeight.semibold'), // font-semibold
      //         letterSpacing: theme('letterSpacing.tight'), // tracking-tight
      //         '&:first-of-type': {
      //           marginTop: 0, // first:mt-0
      //         },
      //       },
      //     },
      //   },
      // }),
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
