<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array<any>,
    required: true,
  },
})
</script>

<template>
  <ol class="relative border-l border-gray-200 dark:border-gray-700">
    <li class="mb-10 ml-4" v-for="item in items">
      <div
        class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >2023 年 2 月</time
      >
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
        <NuxtLink :to="item._path" class="app-link">{{ item.title }}</NuxtLink>
      </h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {{ item.excerpt || item.description }}
      </p>
      <!-- <a
        href="#"
        class="app-link inline-flex items-center py-2 font-medium text-gray-500 focus:z-10"
        >阅读全文
        <Icon name="heroicons-solid:arrow-narrow-right" class="ml-2 h-3 w-3" />
      </a> -->
    </li>
  </ol>
</template>
