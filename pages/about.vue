<script setup lang="ts">
// const contnet = queryContent('/about')
const foo = ref(false)
</script>

<template>
  <div class="app-container flex flex-col gap-12 lg:flex-row">
    <aside class="top-28 h-min flex-shrink-0 lg:sticky">
      <AppProfileCard />
    </aside>

    <div class="mb-20 flex flex-col gap-8">
      <!-- Introduction -->
      <section>
        <h2 class="mb-4 text-3xl font-medium">你好，伙计！👋</h2>
        <ContentDoc path="/_introduction" class="app-text-darken-4" />
      </section>
    </div>
  </div>
</template>
