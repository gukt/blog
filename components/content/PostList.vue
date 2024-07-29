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
    title: '[原创] 支付宝调用返回 notify_url (异步) 与 return_url (同步)',
    slug: 'vue-3-released',
    date: '2021-09-18',
  },
  {
    id: 3,
    title: '执行 docker pull 从远程私有仓库下载镜像时，抛出 HTTPS 访问错误的解决方案',
    slug: 'vue-3-released',
    date: '2021-09-18',
  },
  {
    id: 4,
    title: '如何使用 Charles 抓取 HTTPS 包',
    slug: 'vue-3-released',
    date: '2021-09-18',
  },
]
</script>

<template>
  <!-- 遍历文章列表，生成文章列表行 -->
  <div v-for="post in posts" :key="post.title">
    <!-- 点击文章标题调转到 /blog/{slug} -->
    <NuxtLink :to="`/blog/${post.slug}`">
      <div class="flex items-center justify-between my-5">
        <span class="line-clamp-1">{{ post.title }}</span>
        <p class="text-gray-400 text-sm hidden sm:block line-clamp-1 dark:text-gray-500">
          {{ post.date }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>
