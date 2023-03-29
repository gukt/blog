<script setup lang="ts">
defineProps({
  links: {
    // TODO 指定具体的类型
    type: Array<any>,
    required: true,
  },
})
</script>

<template>
  <ul class="text-sm">
    <li
      v-for="link in links"
      :key="link.text"
      :class="`my-2 depth-${link.depth}`"
    >
      <a
        :href="`#${link.id}`"
        class="app-text-darken-4 hover:text-primary-500 dark:hover:text-primary-500"
      >
        {{ link.text }}
      </a>
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
