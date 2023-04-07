<script setup lang="ts">
defineProps({
  article: {
    type: Object,
    required: true,
  },
})

// TODO 从 app.config 中读取，使用 useBlog composable 函数
const author = 'Gu kaitong'

// const time = computed(() => {
//   return '2023-03-15 (2 周前修改过)'
// })

const readingTime = computed(() => {
  return '3 分钟'
})
</script>

<template>
  <div class="text-sm text-gray-500">
    <span>{{ author }}</span>
    <!-- <time :datetime="time" class="leading-dot"> {{ time }} </time> -->
    <AppTime :time="article.date" class="leading-dot" />
    <template v-if="article.update">
      (<AppTime relative :time="article.update" />修改过)
    </template>
    <span class="leading-dot">{{ readingTime }}阅读 </span>
  </div>
</template>

<style scoped>
.leading-dot::before {
  padding: 0 0.25rem;
  font-weight: bold;
  content: '·';
}
</style>
