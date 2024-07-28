<script setup lang="ts">
// 定义一个类型，表示文章列表中的每一项
type PostItem = {
  id: number
  title: string
  slug: string
  date: string
}

// 定义文章列表，帮我生成的文章标题要看起来很像技术博客文章标题，每篇文章标题要不一样，标题字数从 10 到 30 个字符不等，时间也要由近及远，一共生成十篇。
const posts: PostItem[] = [
  {
    id: 1,
    title: 'Vue 3.0 发布了',
    slug: 'vue-3-released',
    date: '2021-09-18',
  },
  {
    id: 2,
    title: 'Vue 3.0 源码解析',
    slug: 'vue-3-source-code',
    date: '2021-09-15',
  },
  {
    id: 3,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
  {
    id: 4,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
  {
    id: 5,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
  {
    id: 6,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
  {
    id: 7,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
  {
    id: 8,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
  {
    id: 9,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
  {
    id: 10,
    title: 'Vue 3.0 项目实战',
    slug: 'vue-3-released',
    date: '2021-09-10',
  },
]
</script>

<template>
  <div>
    <!-- 遍历文章列表，生成文章列表行 -->
    <div v-for="post in posts" :key="post.title" class="flex justify-between">
      <!-- 点击文章标题调转到 /blog/{slug} -->
      <NuxtLink :to="`/blog/${post.slug}`">
        {{ post.title }}
      </NuxtLink>
      <p class="text-gray-300 text-sm">{{ post.date }}</p>
    </div>
  </div>
</template>
