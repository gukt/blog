
import AppHeader2 from './AppHeader2.vue';

<template>
  <!-- 这里的样式是为了控制垂直方向上当 main 数据很少时撑满整个屏幕剩余空间 -->
  <div class="flex min-h-screen flex-col">
    <!-- Loading bar -->
    <AppLoadingBar />
    <AppHeader2 />
    <!-- Main -->
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
