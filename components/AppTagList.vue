<script setup lang="ts">
defineProps({
  tags: {
    type: Array,
    required: true,
    default: [],
  },
})
</script>

<template>
  <ul v-if="tags && tags.length > 0" class="flex flex-wrap gap-2">
    <li v-for="tag in tags">
      <NuxtLink
        :to="`/tags/${tag}`"
        class="text-primary-500 hover:text-primary-600 rounded border border-gray-800 py-1 px-2 font-medium hover:bg-gray-900"
      >
        #{{ tag }}
      </NuxtLink>
    </li>
  </ul>
</template>
