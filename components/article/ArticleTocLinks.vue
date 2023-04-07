<script setup lang="ts">
defineProps({
  links: {
    // TODO 指定具体的类型
    type: Array<any>,
    required: true,
  },
})

const { activeHeadings, updateHeadings } = useScrollspy()

if (process.client) {
  // TODO 是否要将这里改为 blog-content 的 class？ docus 是 docus-content 类名
  const headings = [
    ...document.querySelectorAll('.document-driven-page h1, .app-prose h1'),
    ...document.querySelectorAll('.document-driven-page h2, .app-prose h2'),
    ...document.querySelectorAll('.document-driven-page h3, .app-prose h3'),
    ...document.querySelectorAll('.document-driven-page h4, .app-prose h4'),
  ]
  console.log('blog article headings:', headings)
  setTimeout(() => {
    updateHeadings(headings)
  }, 300)
}
</script>

<template>
  <ul class="text-sm">
    <li
      v-for="link in links"
      :key="link.text"
      :class="`my-2 depth-${link.depth}`"
    >
      <a
        :href="`#${link.id}`"
        class="app-text-darken-4 hover:text-primary-500 dark:hover:text-primary-500"
        :class="[activeHeadings.includes(link.id) && '!text-red-500']"
      >
        {{ link.text }}
      </a>
      <ArticleTocLinks v-if="link.children" :links="link.children" />
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
