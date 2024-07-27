<script setup lang="ts">
const navItems = ref<string[]>(['首页', '博客', '月亮'])
</script>

<template>
  <header class="sticky left-0 top-0 flex">
    <div>Gu kai tong</div>
    <nav>
      <span>首页</span>
      <span>博客</span>
      <span>月亮</span>
    </nav>
  </header>
</template>
