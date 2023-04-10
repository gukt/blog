<script setup lang="ts">
const props = defineProps({
  elements: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ol class="relative border-l border-gray-200 dark:border-gray-700">
    <li class="mb-10 ml-4">
      <div
        class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >2023 年 2 月</time
      >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        使用 Tailwind 构建应用程序 UI 界面
      </h3>
      <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        获得超过 20
        个页面的访问权，包括仪表盘布局、图表、看板、日历和预购电子商务与营销页面。
      </p>
      <a
        href="#"
        class="inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >Learn more
        <svg
          class="ml-2 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path></svg
      ></a>
    </li>
    <li class="mb-10 ml-4">
      <div
        class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >March 2022</time
      >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Figma 中的营销 UI 设计
      </h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        所有的页面和组件都是首先在 Figma
        中设计的，即使在更新项目时，我们也会在两个版本之间保持一致。
      </p>
    </li>
    <li class="ml-4">
      <div
        class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
      ></div>
      <time
        class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
        >April 2022</time
      >
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        E-Commerce UI code in Tailwind CSS
      </h3>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">
        Get started with dozens of web components and interactive elements built
        on top of Tailwind CSS.
      </p>
    </li>
  </ol>
</template>
