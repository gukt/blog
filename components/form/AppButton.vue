<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
    default: 'Submit',
  },
})
</script>

<template>
  <button class="px-4 py-2 outline bg-blue-500">
    {{ text }}
  </button>
</template>
