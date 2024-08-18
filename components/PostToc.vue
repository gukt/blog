<script setup lang="ts">
const { toc } = useContent()
const emit = defineEmits(['close'])
const isClosed = ref(false)

const toggle = () => {
  isClosed.value = !isClosed.value
}

// 展开/收起图标名称，根据 isClosed 的值来决定。
const icon = computed(() => {
  return `lucide:chevrons-${isClosed.value ? 'up-down' : 'down-up'}`
})
</script>

<!-- TODO 使用索引作为锚点？不然太长的中文转义后的链接地址会很难读。 -->
<template>
  <aside class="not-prose toc-container static 2xl:absolute h-full 2xl:w-56">
    <div class="px-4 py-3 rounded-md bg-gray-500/10 lg:sticky lg:top-28">
      <!-- Title -->
      <div
        class="flex justify-between items-center text-base cursor-pointer group"
        @click="toggle"
      >
        <span class="font-medium text-md">内容目录</span>
        <Icon
          :name="icon"
          class="ml-4 h-4 w-4 cursor-pointer block opacity-50 group-hover:opacity-100"
        />
      </div>
      <!-- Links -->
      <PostTocLinks
        :links="toc.links"
        class="mt-4"
        :class="{ hidden: isClosed }"
      />
    </div>
  </aside>
</template>

<style scoped>
.toc-container {
  /* left: calc((100vw - 960px) / -2); */
  /* 屏幕总宽度 -  */
  /* left: calc(960px + (100vw - 960px) / 2 - 14rem - 2rem); */
  left: calc(var(--page-width) - 2rem);
}
.toc-vertical {
  writing-mode: vertical-lr;
  letter-spacing: 0.3rem;
}
</style>
