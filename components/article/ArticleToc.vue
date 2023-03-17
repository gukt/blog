<script setup lang="ts">
// TODO 使用外部传参好，还是这里读取好？
const { toc } = useContent()
const emit = defineEmits(['close'])
</script>

<!-- TODO 使用索引作为锚点？不然太长的中文转义后的链接地址会很难读。 -->
<template>
  <aside class="p-4 text-gray-700 dark:text-gray-300">
    <div class="mb-2 flex justify-between pb-2 font-medium">
      <span>内容目录</span>
      <a href="#" class="app-link">
        <!-- TODO 如何控制图标的粗细 -->
        <Icon name="close" class="h-5 w-5" @click="($event) => emit('close')" />
      </a>
    </div>
    <ArticleTocLinks :links="toc.links" />
  </aside>
</template>
