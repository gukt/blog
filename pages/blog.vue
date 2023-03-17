<script setup lang="ts">
const articles = await queryContent('/blog').without(['body']).find()

function handleSerachArticles() {
  console.log('handleSerachArticles')
}
</script>

<template>
  <NuxtLayout name="default">
    <main class="grid grid-cols-8 gap-8">
      <!-- 文章列表 -->
      <div
        class="col-span-6 flex-col divide-y divide-gray-100 file:flex dark:divide-gray-900"
      >
        <!-- <ArticleCard
          v-for="article in articles"
          :article="article"
          class="py-6"
        /> -->

        <!-- 搜索栏 -->
        <input
          type="text"
          placeholder="请输入关键字或标签进行搜索..."
          @click="() => handleSerachArticles"
          class="mt-8 w-full rounded-lg border px-4 py-3"
        />

        <div class="py-8 text-5xl font-semibold">Latest 30 Articles</div>

        <section
          v-for="article in articles"
          :key="article._id"
          class="flex flex-col gap-2 py-4"
        >
          <h1 class="text-2xl font-semibold">
            <a :href="article._path" class="app-link">{{ article.title }}</a>
          </h1>
          <h2 class="text-md text-gray-500">
            {{ article.excerpt || article.description }}
          </h2>
          <p>{{ article.date }}</p>
          <a href="#" class="app-link text-primary-700">阅读全文</a>
        </section>
      </div>
      <!-- Aside navigation -->
      <aside
        class="sticky top-24 col-span-2 h-max max-h-[calc(100vh-8rem)] rounded-lg border border-dashed dark:border-gray-700 lg:block"
      >
        <section>
          <h1 class="p-4">分类</h1>
          <ul class="p-4">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/tags">Tags</a></li>
            <li><a href="/archives">Archives</a></li>
          </ul>
        </section>

        <section>
          <h1 class="p-4">标签</h1>
          <ul class="p-4">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/tags">Tags</a></li>
            <li><a href="/archives">Archives</a></li>
          </ul>
        </section>
      </aside>
    </main>
  </NuxtLayout>
</template>
