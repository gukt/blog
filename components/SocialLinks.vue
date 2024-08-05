<!-- 添加一个社交媒体列表，每个社交媒体都有一个图标和一个链接，包含：X.com, youtube, bilibili, weibo, twitter, facebook, linkedin, github, gitlab, instagram, telegram, rss， email, 图标均使用 tabler 图标库中的 brand 图标 -->
<script setup lang="ts">
// 定义元素类型
interface SocialLink {
  name: string
  icon: string
  link: string
  color?: string
}

const socialLinks = ref<SocialLink[]>([
  {
    name: 'Twitter',
    icon: 'tabler:brand-twitter',
    link: 'https://x.com/gukaitong',
  },
  {
    name: 'Youtube',
    icon: 'tabler:brand-youtube',
    link: 'https://youtube.com',
    color: 'blue',
  },
  // {
  //   name: 'Bilibili',
  //   icon: 'tabler:brand-bilibili',
  //   link: 'https://bilibili.com',
  // },
  // {
  //   name: 'Weibo',
  //   icon: 'tabler:brand-weibo',
  //   link: 'https://weibo.com',
  // },
  // {
  //   name: 'Facebook',
  //   icon: 'tabler:brand-facebook',
  //   link: 'https://facebook.com',
  // },
  {
    name: 'Linkedin',
    icon: 'tabler:brand-linkedin',
    link: 'https://linkedin.com',
  },
  {
    name: 'Github',
    icon: 'tabler:brand-github',
    link: 'https://github.com/gukt',
  },
  {
    name: 'Discord',
    icon: 'tabler:brand-discord',
    link: 'https://discord.com',
  },
  // {
  //   name: 'Instagram',
  //   icon: 'tabler:brand-instagram',
  //   link: 'https://instagram.com',
  // },
  {
    name: 'Telegram',
    icon: 'tabler:brand-telegram',
    link: 'https://t.me/gukaitong',
  },
  // {
  //   name: 'RSS',
  //   icon: 'tabler:rss',
  //   link: '/feed.xml',
  // },
  {
    name: 'Email',
    icon: 'tabler:mail',
    link: 'mailto: gukaitong@gmail.com',
  },
])
</script>

<template>
  <ul class="inline-flex items-center gap-4">
    <li v-for="item in socialLinks" :key="item.link">
      <!-- 添加 flex 类是为了解决 inline 子元素的 line-height 问题 -->
      <a :href="item.link" :title="item.name" target="_blank" class="flex">
        <Icon :name="item.icon" class="w-5 h-5 stroke-1 opacity-75 hover:opacity-100" />
      </a>
    </li>
  </ul>
</template>
