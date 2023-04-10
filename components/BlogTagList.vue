<script setup lang="ts">
defineProps({
  // 定义一个 tags 属性，类型为 Map, 默认为空 Map。
  // Map 的 key 的类型为 string 表示标签名称；value 的类型为 number 表示文章数量，
  tags: {
    type: Map as PropType<Map<string, number>>,
    default: () => new Map(),
  },
})

defineEmits<{
  /**
   * 选择标签
   * 
   * @param tag 标签名称
   */
  (event: 'select', tag: string): void
}>()
</script>

<template>
  <section
    class="font-1 flex flex-wrap gap-2.5 text-sm font-medium text-primary-700 dark:text-primary-500"
  >
    <!-- 遍历 tags，取出 key 和 value，分别用来表示标签名称和改标签对应的文章数量 -->
    <span
      v-for="[tag, count] in tags"
      :key="tag"
      class="app-link"
      @click="$emit('select', tag)"
    >
      <span>{{ tag }}</span>
      (<span class=" font-serif">{{ count }}</span
      >)
    </span>
  </section>
</template>
 