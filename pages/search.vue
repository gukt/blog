<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'

const q = ref('')
const { data: posts } = await useAsyncData('search', () =>
  queryContent('/blog').where({ _partial: false }).find()
)

const searchResults = computed(() => {
  if (!posts.value) return []
  console.log('xxxx', q.value)
  return posts.value.filter((post: any) => {
    return post.title.toLowerCase().includes(q.value.toLowerCase())
  })
})
</script>

<template>
  <NuxtLayout>
    <div class="container max-w-4xl mt-8 w-full">
      <!-- TODO 当关键字非常长时，让中间的关键字显示 ... 前后的文本变，且只能显示在一行 -->
      <h1 class="font-bold text-3xl sm:text-4xl tracking-tight">
        {{ q ? `搜索 "${q}" 的结果` : '搜索' }}
      </h1>

      <!-- <div class="mt-8 text-base text-gray-500 dark:text-gray-400 flex gap-4">
      <span>文章</span>
      <span>标签</span>
    </div> -->

      <!-- 搜索框 -->
      <div class="relative my-6">
        <Icon
          name="uil:search"
          class="absolute left-2.5 top-2.5 h-5 w-5 stroke-2 text-muted-foreground"
        />

        <input
          type="search"
          placeholder="所有文章"
          v-model="q"
          class="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-5 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />

        <button
          v-if="q"
          @click="q = ''"
          class="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground hover:text-primary-foreground focus:text-primary-foreground"
        >
          <Icon name="uil:times" class="h-6 w-6 stroke-2" />
        </button>
      </div>

      <!-- 暂且去掉，以后放开看看到底哪个更极简 -->
      <!-- <p v-if="q" class="mb-8 opacity-75">👇🏻 找到 {{ searchResults.length }} 条记录</p> -->

      <PostList :posts="searchResults" class="mt-4" />

      <!-- 搜索结果 -->
      <!-- <pre>
      {{ posts }}
    </pre> -->
    </div>
  </NuxtLayout>
</template>
