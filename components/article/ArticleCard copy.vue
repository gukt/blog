<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <!-- 左边显示 Cover（如果有的话），右边列从上到下分别显示：标题，发表时间，简要描述 -->
  <section class="grid grid-cols-12 gap-8">
    <!-- <img
      :src="
        article.cover ||
        'https://images.unsplash.com/photo-1678648113407-913545723db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
      "
      alt="cover"
      class="col-span-3 h-36 w-36"
    /> -->
    <div class="col-span-12">
      <h1 class="text-2xl font-medium text-gray-700">{{ article.title }}</h1>
      <p class="mt-2 text-gray-300">
        <span>
          {{ article.date }}
        </span>
        <template v-if="article.tags">
          in
          <a
            :href="`/tags/${tag}`"
            v-for="tag in article.tags"
            class="mr-2 hover:underline"
          >
            {{ tag }}
          </a>
        </template>
      </p>
      <p class="mt-4 text-gray-500">{{ article.description }}</p>
      <a href="#" class="mt-4 text-blue-500">Continue Reading</a>
    </div>
  </section>
</template>
