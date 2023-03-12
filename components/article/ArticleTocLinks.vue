<script setup>
defineProps({
  links: {
    // TODO 指定具体的类型
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul>
    <li v-for="link in links" :key="link.text" :class="`depth-${link.depth}`">
      <a :href="`#${link.id}`" class="text-blue-500">{{ link.text }}</a>
      <ArticleTocLinks v-if="link.children" :links="link.children" />
    </li>
  </ul>
</template>

<style scoped>
.depth-2 {
  margin-left: 0.5 rem;
}
.depth-3 {
  margin-left: 1rem;
}
</style>
