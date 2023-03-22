<script setup lang="ts">
// const contnet = queryContent('/about')
const foo = ref(false)
</script>

<template>
  <div class="app-container mt-8 flex flex-row gap-8">
    <!-- <pre>{{ contnet }}</pre> -->

    <aside class="flex-shrink-0">
      <AppProfileCard  />
    </aside>
    <div>
      <ContentDoc path="/_about" />
    </div>
  </div>
</template>
