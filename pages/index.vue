<script setup lang="ts">
import AboutMe from '~/components/AboutMe.vue'

// 查询出最近的 5 篇文章, 按时间倒序排序。
const { data: latestPosts } = await useAsyncData('latestPosts', () => queryContent('/posts').sort({ date: -1 }).limit(5).find())
</script>
<template>
  <div>
    <!-- About me -->
    <section class="mt-8">
      <AboutMe />
    </section>

    <!-- Projects -->
    <section class="mt-16">
      <h2 class="text-3xl font-bold hover:opacity-75">
        <NuxtLink to="/projects">Projects</NuxtLink>
      </h2>
      <ProjectGrid class="mt-8" />
    </section>

    <!-- Latest posts -->
    <section class="mt-16 mb-16">
      <h2 class="text-3xl font-bold hover:opacity-75">
        <NuxtLink to="/posts">Latest Articles</NuxtLink>
      </h2>
      <PostList :posts="latestPosts" class="mt-8" />
    </section>
  </div>
</template>
