<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <!-- 这里 Icon 可以只定义一次吗？ -->
  <a v-if="href" :href="href" v-bind="$attrs">
    <Icon name="simple-icons:openai" />
  </a>
  <Icon
    v-else
    v-bind="$attrs"
    name="simple-icons:openai"
  />
</template>
