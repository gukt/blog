<script setup lang="ts">
const { toc } = useContent()

// const links = computed(() => {
//   return toc.value.map((item) => {
//     return {
//       text: item.text,
//       depth: item.depth,
//       children: item.children.map((child) => {
//         return {
//           text: child.text,
//           depth: child.depth,
//         }
//       }),
//     }
//   })
// })
</script>

<template>
  <aside class="p-8">
    <template v-if="toc?.links?.length">
      <div class="text-md mb-4 font-medium">Table of Contents</div>
      <ArticleTocLinks :links="toc.links" />
    </template>
  </aside>
</template>
