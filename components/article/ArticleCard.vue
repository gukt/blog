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
  <section class="flex flex-col gap-1">
    <h1 class="text-3xl font-medium">
      <a :href="article._path">
        {{ article.title }}
      </a>
    </h1>
    <p class="line-clamp-3 mt-4 text-gray-500">
      {{ article.description }}
    </p>
    <ArticleCaption :article="article" />
    <a href="#" class="app-link mt-4">继续阅读...</a>
  </section>
</template>
