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
    name: 'Github',
    icon: 'tabler:brand-github',
    link: 'https://github.com/gukt',
  },
  {
    name: 'Twitter',
    icon: 'tabler:brand-twitter',
    link: 'https://x.com/gukaitong',
  },
  // {
  //   name: 'Youtube',
  //   icon: 'tabler:brand-youtube',
  //   link: 'https://youtube.com',
  //   color: 'blue',
  // },
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
  // {
  //   name: 'Discord',
  //   icon: 'tabler:brand-discord',
  //   link: 'https://discord.com',
  // },
  // {
  //   name: 'Instagram',
  //   icon: 'tabler:brand-instagram',
  //   link: 'https://instagram.com',
  // },
  // {
  //   name: 'Telegram',
  //   icon: 'tabler:brand-telegram',
  //   link: 'https://t.me/gukaitong',
  // },
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
  <!-- 允许外部传递 class 到 ul -->
  <ul v-bind="$attrs" class="inline-flex items-center gap-4">
    <li v-for="item in socialLinks" :key="item.link">
      <!-- 为了解决 inline 子元素的 line-height 比内容要高一点的问题，可以在容器上加上 flex 也可以将子元素设置为 block，这里使用了第二种方式。 -->
      <a :href="item.link" :title="item.name" target="_blank">
        <!-- 访问父组件透传的 $attrs 中的 iconClass -->
        <Icon
          :name="item.icon"
          :class="[
            'block w-5 h-5 stroke-1 transition-colors text-muted-foreground hover:text-foreground/80',
            $attrs.iconClass,
          ]"
        />
      </a>
    </li>
  </ul>
</template>
