<script setup lang="ts">
const latestArticles = await queryContent('/blog')
  .where({ date: { $exists: true } })
  .without(['body'])
  .limit(5)
  .sort({ date: -1 })
  .find()

const xxx = useBlog()

onMounted(() => {
  // 要写在 onMounted 中，否则会被引用的 ContentDoc 中的文档标题覆盖
  useHead({
    title: '首页',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Blog',
      },
    ],
  })
})
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
        <ContentDoc path="/_welcome" class="app-text-darken-4" />
      </section>
      <!-- Latest articles -->
      <section>
        <h2 class="mb-8 text-3xl font-medium">最新文章</h2>
        <TheTimeline :items="latestArticles" />
      </section>

      <section>
        <h2 class="mb-8 text-3xl font-medium">推荐文章</h2>
        <TheTimeline :items="latestArticles" />
      </section>
    </div>
  </div>
</template>
