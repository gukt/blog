<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

interface Props {
  /**
   * 文章列表
   */
  posts: ParsedContent[]
  /**
   * 是否是精简模式
   */
  isCompact?: boolean
}

const props = defineProps<Props>()

// 根据 isCompact 属性，动态设置不同的 CSS 类, 当 isCompact 为 true 时，时间显示在标题前面；否则显示在 trailing 位置，且中间内容间隔为 justify-between。
const classes = computed(() => {
  return {
    'gap-6': props.isCompact,
    'justify-between': !props.isCompact,
  }
})
</script>

<template>
  <!-- 遍历文章列表，生成文章列表行 -->
  <ul class="flex flex-col gap-4 text-base sm:text-lg">
    <li v-for="(post, index) in posts" :key="index" class="transition-opacity opacity-75 hover:opacity-100">
      <NuxtLink :to="`${post._path}`">
        <div class="flex items-center" :class="classes">
          <span class="line-clamp-1" :class="{ 'order-last': isCompact }">
            {{ post.title }}
          </span>
          <time class="line-clamp-1 flex-shrink-0 font-mono font-medium text-sm hidden sm:block opacity-60">
            {{ useDateFormat(post.date, 'YYYY-MM-DD') }}
          </time>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
