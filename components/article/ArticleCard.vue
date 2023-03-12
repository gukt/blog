<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <!-- 实现一个 ArticleCard， 左边显示 Cover（如果有的话），右边列从上到下分别显示：标题，发表时间，简要描述 -->
  <div class="flex">
    <div class="w-1/3">
      <img :src="article.cover" alt="cover" />
    </div>
    <div class="w-2/3">
      <h1>{{ article.title }}</h1>
      <p>{{ article.date }}</p>
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>
