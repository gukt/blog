<script setup lang="ts">
const navItems = ref([
  { name: '首页', path: '/' },
  { name: '博客', path: '/blog' },
])
</script>

<template>
  <header
    class="py-4 flex justify-between sticky left-0 top-0 z-50 border-b border-gray-100 dark:border-gray-900 text-gray-700 dark:text-gray-200"
  >
    <div class="font-medium text-lg">
      <NuxtLink to="/">谷大胡子</NuxtLink>
    </div>
    <!-- 导航菜单 -->
    <nav>
      <ul class="flex gap-6">
        <li v-for="item in navItems" :key="item.path">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </li>
        <li>
          <TheColorModeSwitch />
        </li>
      </ul>
    </nav>
  </header>
</template>
