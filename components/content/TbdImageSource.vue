<script setup lang="ts">
// 定义一些常见的图片来源站点名称及地址
const sources = new Map([
  ['unsplash', 'unsplash.com'],
  ['pexels', 'pexels.com'],
])

// 定义一些属性：source, sourceUrl, author, authorUrl
const props = defineProps({
  source: {
    type: String,
    default: 'unsplash',
  },
  sourceUrl: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    default: '',
  },
  authorUrl: {
    type: String,
    default: '',
  },
})

const resolvedSourceUrl = computed(() => {
  const url = props.sourceUrl || sources.get(props.source)
  return url?.startsWith('https') ? url : `https://${url}`
})
</script>

<template>
  <cite class="text-sm italic text-gray-500">
    图片来源xx：
    <a :href="resolvedSourceUrl" target="_blank">{{ source }}</a>
    <template v-if="author || authorUrl">
      <span> By </span>
      <a v-if="authorUrl" :href="authorUrl" target="_blank">
        {{ author }}
      </a>
      <span v-else>{{ author }}</span>
    </template>
  </cite>
</template>
