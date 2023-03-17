<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true,
  },
  hasAuthor: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="flex items-center gap-2 text-gray-500">
    <!-- 作者信息 -->
    <template v-if="hasAuthor">
      <AppAvatar v-if="hasAuthor" />
      <span>Gu kaitong</span>
    </template>
    <!-- 时间信息 -->
    <span>
      发表于
      <time :datetime="article.date">
        {{ dateOnly(article.date) }}
      </time>
    </span>
    <span class="font-bold">·</span>
    <AppTagList :tags="article.tags" />
  </div>
</template>
