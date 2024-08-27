<script setup lang="ts">
// 定义组件属性
interface Props {
  links: Array<any>
  depth: Number
}

const props = withDefaults(defineProps<Props>(), {
  depth: 0,
})

const { activeHeadings, updateHeadings } = useScroll('#article-content')
console.warn('activeHeadings:', activeHeadings.value)

if (process.client) {
  // TODO 是否要将这里改为 blog-content 的 class？ docus 是 docus-content 类名
  // TODO Simplify？
  const headings = [
    ...document.querySelectorAll('.prose h2, .prose h3, .prose h4'),
  ]
  // console.log('blog article headings:', headings)
  setTimeout(() => {
    updateHeadings(headings)
  }, 300)
}
</script>

<template>
  <ul :class="['m-0 list-none', `ml-${depth}`]">
    <li v-for="(item, index) in links" :key="index" class="mt-0 pt-2">
      <a
        :href="`#${item.id}`"
        class="inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        {{ item.text }}
      </a>
      <PostTocLinks
        v-if="item.children"
        :links="item.children"
        :depth="depth + 1"
      />
    </li>
  </ul>
</template>
