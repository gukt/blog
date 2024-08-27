<script setup lang="ts">
const { toc } = useContent()
const emit = defineEmits(['close'])
const isClosed = ref(false)

// 展开/收起图标名称，根据 isClosed 的值来决定。
const icon = computed(() => {
  return `lucide:chevrons-${isClosed.value ? 'up-down' : 'down-up'}`
})
</script>

<!-- TODO 使用索引作为锚点？不然太长的中文转义后的链接地址会很难读。 -->
<template>
  <aside class="text-sm space-y-2">
    <p class="font-medium">On This Page</p>
    <PostTocLinks
      :links="toc.links"
      class="mt-4"
      :class="{ hidden: isClosed }"
    />
  </aside>
</template>

<!-- <style scoped>
.toc-container {
  /* left: calc((100vw - 960px) / -2); */
  /* 屏幕总宽度 -  */
  /* left: calc(960px + (100vw - 960px) / 2 - 14rem - 2rem); */
  left: calc(var(--article-width) - 3rem);
}
.toc-vertical {
  writing-mode: vertical-lr;
  letter-spacing: 0.3rem;
}
</style> -->
