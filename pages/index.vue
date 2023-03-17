<script setup lang="ts">
const allArticles = await queryContent('/blog')
  .where({ _path: { $not: '/blog' } })
  .where({ _partial: false })
  .without(['body'])
  .find()
</script>

<template>
  <div class="app-container mt-16 flex flex-row gap-16">
    <div class="flex flex-shrink-0 flex-row items-center gap-3 md:flex-col">
      <img
        src="https://nuxt-tailwind-blog.netlify.app/_nuxt/image/f10964.png"
        alt="Avatar"
        class="h-20 w-20 rounded-full border border-gray-200 dark:border-gray-800 md:h-48 md:w-48"
      />
      <div>
        <div class="text-bold text-2xl">Gu kaitong</div>
        <div class="text-gray-500">Full Stack Developer</div>
        <AppSocialIcons />
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <section>
        <h1 class="mb-4 text-4xl font-medium">你好，伙计！👋</h1>
        <ContentDoc path="/_introduction" class="dark:text-gray-300" />
      </section>
      <TheTimeline></TheTimeline>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        dolorum dignissimos voluptates delectus, debitis quia laborum sunt rem
        illo perferendis nam laudantium quos! Illum molestiae accusamus magni
        id, inventore sapiente.
      </div>

      <div class="mt-10 text-4xl font-medium">Latest Articles</div>

      <!-- 文章列表 -->
      <div class="">
        <ArticleCard
          v-for="article in allArticles"
          :article="article"
          class="py-6"
        />
      </div>
    </div>
  </div>
</template>
