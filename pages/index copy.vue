<script setup lang="ts">
// 查询出最近的 5 篇文章, 按时间倒序排序。
const { data: latestPosts } = await useAsyncData('latestPosts', () =>
  queryContent('/posts').sort({ date: -1 }).limit(5).find()
)
</script>
<template>
  <!-- 开始我将 NuxtLayout 放到 app.vue 中，但是启动时会提示警告：[@nuxt/content 7:06:46 PM]  WARN  Using <NuxtLayout> inside app.vue will cause unwanted layout shifting in your application. Consider removing <NuxtLayout> from app.vue and using it in your pages. 所以，我将 NuxtLayout 应用于每个 pages。 -->
  <NuxtLayout>
    <!-- BIO -->
    <section class="mt-8">
      <BioBlock />
    </section>

    <!-- Projects -->
    <section class="mt-16">
      <h2 class="text-3xl font-bold opacity-90 hover:opacity-100">
        <NuxtLink to="/projects">项目</NuxtLink>
      </h2>
      <ProjectGrid class="mt-8" />
    </section>

    <!-- Latest articles -->
    <section class="mt-16 mb-16">
      <h2 class="text-3xl font-bold opacity-90 hover:opacity-100">
        <NuxtLink to="/posts">最近文章</NuxtLink>
      </h2>
      <PostList :posts="latestPosts" class="mt-8" />
    </section>
  </NuxtLayout>
</template>
