<script setup lang="ts">
// 获取所有文章并按日期排序
const { data: posts } = await useAsyncData('posts', () => queryContent('posts').sort({ date: -1 }).find())
</script>

<template>
  <NuxtLayout>
    <div>
      <div class="mt-8 gap-8 sm:gap-y-16 grid lg:grid-cols-2 lg:items-center">
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">我的博客</h1>
          <div class="max-w-2xl mt-4 text-md text-foreground/80">
            写博客是为了整理思路，同时也是一种分享。写博客是为了整理思路，同时也是一种分享。
            <RssButton />
          </div>
          <SubscribeForm class="mt-8" />
        </div>
      </div>

      <!-- 全部文章列表，按日期倒序排列 -->
      <PostList :posts="posts" class="my-16" />
    </div>
  </NuxtLayout>
</template>
