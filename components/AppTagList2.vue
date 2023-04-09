<script setup lang="ts">
defineProps({
  tags: {
    type: Array,
    required: true,
    default: [],
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false,
  },
  total: {
    type: Number,
    required: false,
    default: 1,
  },
})
</script>

<template>
  <ul v-if="tags && tags.length > 0" class="flex flex-wrap gap-3">
    <li v-for="tag in tags">
      <a
        :href="`/tags/${tag}`"
        class="app-link-primary"
        :class="{ 'app-btn-outlined': outlined }"
      >
        <!-- 括号内添加一个随机的数字，1-30 -->
        <span>{{ tag }}</span>
        <span v-if="total > 0" class="font-serif text-sm italic">
          {{ `(${total})` }}
        </span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
/* .tag {
  @apply cursor-pointer;
}

.bordered {
  @apply rounded-md border border-gray-200 px-3 py-1.5   !no-underline   dark:border-gray-800  dark:hover:bg-gray-900;
} */
</style>
