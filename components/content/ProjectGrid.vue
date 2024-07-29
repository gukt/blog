<script setup lang="ts">
// 定义一个项目列表，包含三个项目
const projects = [
  {
    img: 'https://picsum.photos/200/200?random=1',
    title: '多彩卡片 - 万物皆可分享',
    subtitle: '万物都可以制作成分享卡片，让你的分享更带劲',
  },
  {
    img: 'https://picsum.photos/200/200?random=2',
    title: 'CardThis - Everything is shareable',
    subtitle: 'Composables that run on the server to fetch data for your components and enable you to render content in different ways.',
  },
  {
    img: 'https://picsum.photos/200/200?random=3',
    title: '多彩卡片 - 万物皆可分享',
    subtitle: 'Composables that run on the server to fetch data for your components and enable you to render content in different ways.',
  },
  {
    img: 'https://picsum.photos/200/200?random=4',
    title: '多彩卡片 - 万物皆可分享',
    subtitle: 'Composables that run on the server to fetch data for your components and enable you to render content in different ways.',
  },
  {
    img: 'https://picsum.photos/200/200?random=5',
    title: '多彩卡片 - 万物皆可分享',
    subtitle: 'Composables that run on the server to fetch data for your components and enable you to render content in different ways.',
  },
]
</script>

<template>
  <div class="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
    <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
  </div>
</template>
