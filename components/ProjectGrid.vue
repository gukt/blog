<script setup lang="ts">
// 定义一个项目列表，包含三个项目
const projects = [
  {
    img: 'https://picsum.photos/200/200?random=2',
    title: 'CardThis - Make sharing more fancy',
    subtitle: 'CardThis is a tool that allows you to create colorful cards for sharing. It is free and easy to use.',
  },
  {
    img: 'https://picsum.photos/200/200?random=3',
    title: 'CardThis - 让分享变得更有趣',
    subtitle: 'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。',
  },
  {
    img: 'https://picsum.photos/200/200?random=4',
    title: '个人博客 - Keep It Simple',
    subtitle: '一个简约风格的博客，也是我作为以后非前端程序员的练手作品，使用 Nuxt.js 和 Tailwind CSS 构建。',
  },
  {
    img: 'https://picsum.photos/200/200?random=1',
    title: '不做事 - 上班是不可能的',
    subtitle: '万物都可以制作成分享卡片，让你的分享更带劲',
  },
  {
    img: 'https://picsum.photos/200/200?random=5',
    title: '多彩卡片 - 万物皆可分享',
    subtitle: 'Composables that run on the server to fetch data for your components and enable you to render content in different ways.',
  },
]
</script>

<template>
  <div class="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
  </div>
</template>
