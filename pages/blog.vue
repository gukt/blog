<script setup lang="ts">
const articles = await queryContent('/blog').without(['body']).find()
</script>

<template>
  <div class="p-8">
    <h1 class="text-5xl font-semibold">Welcome to my blog 👏</h1>
    <section>
      <h1>Article List</h1>

      <ul>
        <li v-for="article in articles" class="list-disc">
          <a :href="article._path">{{ article.title }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>
