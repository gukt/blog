<script setup lang="ts">
const navItems = ref([
  { name: '博客', path: '/blog' },
  { name: '标签', path: '/blog/tags' },
  { name: '项目', path: '/projects' },
])
</script>

<template>
  <!-- bg-background/75 backdrop-blur -mb-px lg:mb-0 lg:border-0 -->
  <header class="bg-background/75 backdrop-blur p-4 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
    <div class="mx-auto flex items-center justify-between">
      <!-- Leading: Avatar -->
      <NuxtLink to="/">
        <img src="/favicon.ico" alt="logo" class="w-8 h-8 inline-block rounded-full" />
      </NuxtLink>
      <!-- Trailing: Navigation -->
      <nav class="flex items-center gap-8">
        <div v-for="item in navItems" :key="item.path">
          <NuxtLink :to="item.path">{{ item.name }}</NuxtLink>
        </div>
        <ColorModeSwitch />
      </nav>
    </div>
  </header>
</template>
