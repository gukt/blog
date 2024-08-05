<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'

const q = ref('')
const { data: posts } = await useAsyncData('search', () => queryContent('/posts').where({ _partial: false }).find())

const searchResults = computed(() => {
  if (!posts.value) return []
  console.log('xxxx', q.value)
  return posts.value.filter((post: any) => {
    return post.title.toLowerCase().includes(q.value.toLowerCase())
  })
})
</script>

<template>
  <div class="mt-8 w-full">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">搜索</h1>

    <!-- 搜索框 -->
    <div class="relative my-8">
      <input
        v-model="q"
        class="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none bg-transparent"
        placeholder="所有文章..."
      />

      <span class="absolute flex items-center gap-x-2 border rounded-md">
        <button type="submit" class="">文章</button>
        <button type="submit" class="">标签</button>
      </span>
    </div>

    <p v-if="q" class="mt-4">
      找到 <span class="font-bold text-xl italic">{{ searchResults.length }}</span> 篇文章包含
      <span class="font-bold text-xl italic px-2">{{ q }}</span>
    </p>

    <PostList :posts="searchResults" />

    <!-- 搜索结果 -->

    <pre>
      {{ posts }}
    </pre>
  </div>
</template>
