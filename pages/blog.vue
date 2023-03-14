<script setup lang="ts">
const articles = await queryContent('/blog').without(['body']).find()
</script>

<template>
  <div>
    <main class="flex gap-8">
      <aside class="border p-8">
        <ul class="sticky top-[100px] max-h-screen">
          <li><a href="/projects">Projects</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/tags">Tags</a></li>
          <li><a href="/archives">Archives</a></li>
        </ul>
      </aside>
      <!-- 文章列表 -->
      <div class="flex flex-col divide-y divide-gray-100">
        <ArticleCard
          v-for="article in articles"
          :article="article"
          class="py-6"
        />
      </div>
    </main>
  </div>
</template>
