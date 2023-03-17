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
  <ul v-if="tags && tags.length > 0" class="flex gap-2">
    <li v-for="tag in tags">
      <NuxtLink :to="`/tags/${tag}`" class="hover:text-primary-500 font-medium"
        >#{{ tag }}</NuxtLink
      >
    </li>
  </ul>
</template>
