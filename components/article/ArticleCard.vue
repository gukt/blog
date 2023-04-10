<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <!-- 左边显示 Cover（如果有的话），右边列从上到下分别显示：标题，发表时间，简要描述 -->
  <section :key="article._id" class="mb-10">
    <div class="flex gap-8 text-gray-500">
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >2022 年 3 月</time
      >
      <!-- <AppTagList :tags="article.tags" /> -->
    </div>
    <h1 class="text-lg font-semibold text-gray-900 dark:text-white">
      <NuxtLink :to="article._path" class="app-link">{{
        article.title
      }}</NuxtLink>
    </h1>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
      {{ article.excerpt || article.description }}
    </p>
  </section>
</template>
