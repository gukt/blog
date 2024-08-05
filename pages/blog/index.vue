<script setup lang="ts">
import PostList from '~/components/PostList.vue'

// 获取所有文章并按日期排序
const { data: posts } = await useAsyncData('posts', () => queryContent('posts').sort({ date: -1 }).find())
</script>

<template>
  <div>
    <div class="mt-8 gap-8 sm:gap-y-16 grid lg:grid-cols-2 lg:items-center">
      <div>
        <h1 class="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">我的博客</h1>
        <div class="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400">
          写博客是为了整理思路，同时也是一种分享。
          <RssButton />
        </div>
        <SubscribeForm class="mt-8" />
      </div>
    </div>

    <!-- 全部文章列表，按日期倒序排列 -->
    <PostList :posts="posts" class="my-16" />
  </div>
</template>
