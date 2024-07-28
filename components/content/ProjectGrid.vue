<script setup lang="ts">
// 定义一个项目列表，包含三个项目
const projects = [
  {
    img: 'https://picsum.photos/200/200?random=1',
    title: 'CardThis',
    subtitle: '万物都可以制作成分享卡片，让你的分享更带劲',
  },
  {
    img: 'https://picsum.photos/200/200?random=2',
    title: '项目2',
    subtitle: '项目2的子标题',
  },
  {
    img: 'https://picsum.photos/200/200?random=3',
    title: '项目3',
    subtitle: '项目3的子标题',
  },
  {
    img: 'https://picsum.photos/200/200?random=4',
    title: '项目4',
    subtitle: '项目3的子标题',
  },
  {
    img: 'https://picsum.photos/200/200?random=5',
    title: '项目5',
    subtitle: '项目3的子标题',
  },
]
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <!-- 遍历项目列表，生成项目卡片，卡片为左图右文结构 -->
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="flex gap-4 rounded-lg p-4"
    >
      <img :src="project.img" alt="项目图片" class="w-12 h-12 rounded-md" />
      <div class="flex flex-col justify-between">
        <h3>{{ project.title }}</h3>
        <p class="text-gray-300 text-sm">{{ project.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
