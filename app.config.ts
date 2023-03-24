// 应用程序全局设置
export default defineAppConfig({
  // https://github.com/nuxt-modules/icon
  nuxtIcon: {
    size: '1.5rem', // Default size: 1em
    class: 'icon1', // Default: 'icon'
    aliases: {
      'dark-mode': 'uil:moon',
      'light-mode': 'uil:sun',
      'system-mode': 'uil:desktop',
      'sepia-mode': 'uil:coffee',
      github: 'fa-brands:github',
      twitter: 'fa-brands:twitter',
      facebook: 'fa-brands:facebook',
      instagram: 'fa-brands:instagram',
      youtube: 'fa-brands:youtube',
      medium: 'logos:medium-icon',
      weibo: 'fa-brands:weibo',
      rss: 'mdi:rss',
      edit: 'mdi:pencil',
      home: 'mdi:home',
      search: 'mdi:magnify',
      menu: 'mdi:menu',
      close: 'mdi:close',
      'arrow-left': 'mdi:arrow-left',
      'arrow-right': 'mdi:arrow-right',
      'arrow-up': 'mdi:arrow-up',
      'arrow-down': 'mdi:arrow-down',
    },
  },
  prose: {
    // Default icon for all headings on hover
    headings: {
      icon: 'ph:anchor',
    },
    // Icon used for h1 headings
    h1: {
      icon: 'ph:link',
    },
    // Remove icon on h2 headings
    h2: {
      icon: false,
    },
    // Icon used for the copy button on code blocks
    copyButton: {
      iconCopy: 'ph:copy',
      iconCopied: 'ph:check',
    },
  },
  blog: {
    // 标题
    title: 'Simplest and Powerful Blog',
    // 描述
    description: 'The best template to start your blog.',

    image:
      'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    // 社交媒体账号配置
    socials: {
      twitter: 'gukaitong',
      github: 'gukt',
      facebook: '',
      instagram: '',
      youtube: '',
      medium: '',
      weibo: 'ktgu',
    },
    // 布局
    layout: 'xxx',
    header: {
      title: '',
      logo: false,
      showLinkIcon: false,
      fluid: false,
      exclude: [],
    },

    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },

    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Nuxt',
        href: 'https://docus.dev',
      },
      textLinks: [],
      iconLinks: [],
      fluid: false,
    },

    github: {
      dir: undefined,
      branch: undefined,
      repo: undefined,
      owner: undefined,
      edit: false,
    },
  },
})
