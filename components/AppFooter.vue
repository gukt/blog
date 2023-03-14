<template>
  <footer class="border-t border-gray-200 py-4 dark:border-gray-800">
    <!-- 因为 app-container 定义了横向约束，我们希望 footer 显示在中间，所以要在 footer 里再套一层 div 并应用 container，同时，内部元素左右分隔，所以用 flex 是比较好的选择 -->
    <div class="app-container flex justify-between">
      <div class="text-primary-500 text-sm">
        Copyright © 2023
        <NuxtLink to="https://github.com/gukt">Gu kaitong</NuxtLink>.
      </div>
      <AppSocialIcons />
    </div>
  </footer>
</template>
