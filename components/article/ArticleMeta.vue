<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true,
  },
})

// TODO 从 app.config 中读取，使用 useBlog composable 函数
const author = 'Gu kaitong'

const { wordCount, chineseCharacterCount, calculateReadingTime } =
  useReadingTime('.app-prose')
</script>

<template>
  <div class="text-sm text-gray-500">
    <span>{{ author }}</span>
    <!-- <time :datetime="time" class="leading-dot"> {{ time }} </time> -->
    <AppTimeLabel :time="article.date" prefix="发布时间" class="leading-dot" />
    <template v-if="article.update">
      (<AppTimeLabel
        relative
        :time="article.update"
        prefix="最后更新于"
      />修改过)
    </template>
    <span v-if="wordCount || chineseCharacterCount" class="leading-dot">
      <!-- {{ wordCount }} + {{ chineseCharacterCount }} -->
      {{ calculateReadingTime() }}阅读
    </span>
  </div>
</template>

<style scoped>
.leading-dot::before {
  padding: 0 0.25rem;
  font-weight: bold;
  content: '·';
}
</style>
