<script setup lang="ts">
const latestArticles = await queryContent('/blog')
  .where({ date: { $exists: true } })
  .without(['body'])
  .limit(5)
  .sort({ date: -1 })
  .find()

const xxx = useBlog()
</script>

<template>
  <div class="app-container mt-12 flex flex-col gap-12 lg:flex-row">
    <aside class="top-28 h-min flex-shrink-0 lg:sticky">
      <AppProfileCard />
    </aside>

    <div class="mb-20 flex flex-col gap-8">
      <!-- Introduction -->
      <section>
        <h2 class="mb-4 text-3xl font-medium">你好，伙计！👋</h2>
        <ContentDoc path="/_introduction" class="dark:text-gray-200" />
      </section>
      <!-- Latest articles -->
      <section>
        <h2 class="mb-8 text-3xl font-medium">最新文章</h2>
        <TheTimeline :items="latestArticles" />
      </section>
    </div>
  </div>
</template>
