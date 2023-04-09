<script setup lang="ts">
import { PropType } from '#imports'
import type { Article } from '~/types/global'

const props = defineProps({
  articles: {
    // TODO 为什么要这么写？ PropType<Article[]>
    type: Array as PropType<Article[]>,
    default: [],
    required: true,
  },
})
</script>

<template>
  <!-- TODO 添加分隔先 -->
  <ul class="w-1/2 divide-y divide-yellow-500">
    <li v-for="article in articles" class="border py-4">
      <ArticleListItem :article="article" />
    </li>
  </ul>
</template>
