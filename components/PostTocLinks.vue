<script setup lang="ts">
defineProps({
  links: {
    // TODO 指定具体的类型
    type: Array<any>,
    required: true,
  },
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
  <ul class="text-base">
    <li
      v-for="link in links"
      :key="link.text"
      :class="`my-2 depth-${link.depth}`"
    >
      <a :href="`#${link.id}`" class="opacity-50 hover:opacity-100">
        {{ link.text }}
      </a>
      <PostTocLinks v-if="link.children" :links="link.children" />
    </li>
  </ul>
</template>

<style scoped>
.depth-2 {
  margin-left: 0.5 rem;
}
.depth-3 {
  margin-left: 1rem;
}
</style>
