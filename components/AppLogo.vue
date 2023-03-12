<script setup>
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
    <Icon class="h-7 w-7 font-bold"  name="simple-icons:openai" />
  </a>
  <Icon
    v-else
    class="h-7 w-7 font-bold"
    v-bind="$attrs"
    name="simple-icons:openai"
  />
</template>
