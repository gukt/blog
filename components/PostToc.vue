<script setup lang="ts">
const { toc } = useContent()
const emit = defineEmits(['close'])
const isClosed = ref(false)

// 展开/收起图标名称，根据 isClosed 的值来决定。
const icon = computed(() => {
  return `lucide:chevrons-${isClosed.value ? 'up-down' : 'down-up'}`
})

const selector = '#content'
const { activeHeadings, updateHeadings } = useScroll(selector)

if (process.client) {
  const headings = [
    ...document.querySelectorAll('.prose h2, .prose h3, .prose h4'),
  ]
  setTimeout(() => {
    updateHeadings(headings)
  }, 300)
}
</script>

<!-- TODO 使用索引作为锚点？不然太长的中文转义后的链接地址会很难读。 -->
<template>
  <aside class="text-sm space-y-2">
    <p class="font-medium">On This Page</p>
    <PostTocLinks
      :links="toc.links"
      :active-headings="activeHeadings"
      class="mt-4"
      :class="{ hidden: isClosed }"
    />
  </aside>
</template>
