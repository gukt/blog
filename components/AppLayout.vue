<template>
  <!-- 这里的样式是为了控制垂直方向上当 main 数据很少时撑满整个屏幕剩余空间 -->
  <div class="flex min-h-screen flex-col">
    <!-- Loading bar -->
    <!-- TODO: 可以移除 AppLoadingBar，Nuxt 提供了一个 NuxtLoadingIndicator 可实现和 AppLoadingBar 一样的效果 -->
    <AppLoadingBar />
    <!-- --- -->
    <!-- <NuxtLoadingIndicator /> -->
    <!-- Header -->
    <AppHeader />
    <!-- Main -->
    <main class="flex-grow">
      <slot />
    </main>
    <!-- Footer -->
    <AppFooter />
  </div>
</template>
