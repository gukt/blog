<template>
  <!-- 在页面导航之间显示进度条，在 app.vue 或 layouts/ 中添加 NuxtLoadingIndicator， 我们将其添加到 app.vue 中: https://nuxt.com/docs/api/components/nuxt-loading-indicator -->
  <NuxtLoadingIndicator />
  <!-- 路由入口，用以显示 pages 目录及其子目录中的页面，它是 Nuxt 内置组件，是 Vue Router 中 <RouterView> 组件的包装器：https://nuxt.com/docs/api/components/nuxt-page。NOTE: 应使用 <NuxtPage> 而不是 <RouterView>，因为前者对内部状态格外关注。否则，useRoute（） 可能会返回不正确的路径。
  -->
  <NuxtPage />
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
