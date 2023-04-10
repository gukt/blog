<script setup lang="ts">
// TODO 使用外部传参好，还是这里读取好？
const { toc } = useContent()
const emit = defineEmits(['close'])
</script>

<!-- TODO 使用索引作为锚点？不然太长的中文转义后的链接地址会很难读。 -->
<template>
  <aside class="app-text-darken-2 p-4">
    <div class="mb-4 flex justify-between font-medium">
      <span>内容目录</span>
      <Icon
        name="close"
        class="h-5 w-5 cursor-pointer text-gray-500 dark:hover:text-gray-300"
        @click="emit('close')"
      />
    </div>
    <ArticleTocLinks :links="toc.links" />
  </aside>
</template>
