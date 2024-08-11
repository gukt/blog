<script setup lang="ts">
const { toc } = useContent()
const emit = defineEmits(['close'])
const isClosed = ref(false)

const toggle = () => {
  isClosed.value = !isClosed.value
}
</script>

<!-- TODO 使用索引作为锚点？不然太长的中文转义后的链接地址会很难读。 -->
<template>
  <!-- TODO OLD: lg:-left-64
  :class="[
      'toc-container static lg:absolute h-full opacity-30 hover:opacity-100 transition-opacity duration-500 ',
      { 'lg:-left-16': isClosed },
    ]" 
  -->
  <aside id="toc-container" class="toc-container static lg:absolute h-full">
    <div
      v-if="isClosed"
      class="border border-border bg-gray-900 lg:sticky lg:top-28 w-8 cursor-pointer px-1 py-3 rounded-md text-lg toc-vertical"
      @click="toggle"
    >
      内容目录 2
    </div>
    <div v-else class="p-6 w-56 not-prose bg-gray-900 lg:sticky lg:top-28">
      <div class="mb-4 flex justify-between font-medium">
        <div class="flex items-center gap-2">
          <Icon
            name="lucide:book-open"
            class="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400"
          />
          内容目录
        </div>
        <Icon
          name="lucide:chevrons-down-up"
          class="h-5 w-5 cursor-pointer text-gray-500 dark:hover:text-gray-300"
          @click="toggle"
        />
      </div>
      <PostTocLinks :links="toc.links" />
    </div>
  </aside>
</template>

<style scoped>
.toc-container {
  /* border: 1px solid red; */
  /* left: calc((100vw - 960px) / -2); */
  /* 屏幕总宽度 -  */
  /* left: calc(960px + (100vw - 960px) / 2 - 14rem - 2rem); */
  left: calc(960px - 1.5rem);
}
.toc-vertical {
  writing-mode: vertical-lr;
  letter-spacing: 0.3rem;
}
</style>
