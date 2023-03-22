<script setup lang="ts">
const allArticles = await queryContent('/blog')
  .where({ _path: { $not: '/blog' } })
  .where({ _partial: false })
  .without(['body'])
  .find()

const xxx = useBlog()
</script>

<template>
  <div class="app-container mt-16 flex flex-col gap-16 lg:flex-row">
    <aside class="sticky top-32 h-full flex-shrink-0">
      <AppProfileCard />
    </aside>

    <div class="mb-20 flex flex-col gap-8">
      <section>
        <h2 class="mb-4 text-4xl font-medium">你好，伙计！👋</h2>
        <ContentDoc path="/_introduction" class="dark:text-gray-200" />
      </section>
    </div>
  </div>
</template>
