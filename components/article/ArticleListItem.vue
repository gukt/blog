<script setup lang="ts">
import { PropType } from '#imports'
import type { Article } from '~~/types/types'

// 第一种方式定义 props，类型在方法体中定义。
// const props = defineProps({
//   article: {
//     type: Object,
//     default: {},
//     required: true,
//   }
// })

// 第二种方式定义 props，类型在泛型中定义。
// const props = defineProps<{ article: Object }>()

defineProps({
  article: {
    type: Object as PropType<Article>,
    default: {},
    required: true,
  },
})
</script>

<template>
  <div class="flex gap-4 border border-red-500">
    <!-- 缩略图 -->
    <div class="h-36 w-36 flex-shrink-0">
      <img
        :src="article.cover || 'https://picsum.photos/300'"
        alt="cover"
        class="h-32 w-32 object-cover"
      />
    </div>
    <!-- 基本信息 -->
    <div>
      <!-- Title -->
      <h1 class="text-xl font-bold">{{ article.title }}</h1>
      <!-- Date、Tags、Categories -->
      <div class="text-gray-500">
        <span>{{ article.date }}</span>
        <span v-if="article.tags">
          | Tags:
          <!-- 标签列表，链接类型 -->
          <ul class="inline-flex flex-nowrap gap-2">
            <li v-for="tag in article.tags">
              <a :href="`/tags/${tag}`"> {{ tag }} </a>
            </li>
          </ul>
        </span>
        <span v-if="article.categories">
          | Categories: {{ article?.categories }}</span
        >
      </div>
      <div>
        <!-- TODO 这里要如何处理 markdown 格式的 Excerpt？ -->
        <!-- <ContentRenderer :value="article.excerpt">
          <ContentRendererMarkdown :value="article.excerpt" />
        </ContentRenderer> -->
        {{ article.excerpt }}
      </div>
      <a :href="article.path" class="text-blue-500">Continue reading</a>
    </div>
  </div>
</template>
