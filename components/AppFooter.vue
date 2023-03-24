<template>
  <footer
    class="sm:border-t sm:border-gray-200 py-4 text-gray-500 dark:border-gray-800"
  >
    <!-- 因为 app-container 定义了横向约束，我们希望 footer 显示在中间，所以要在 footer 里再套一层 div 并应用 container，同时，内部元素左右分隔，所以用 flex 是比较好的选择 -->
    <div class="app-container flex sm:flex-row items-center justify-between gap-4 flex-col-reverse">
      <div class="app-link text-sm">
        Copyright © 2023
        <NuxtLink href="https://github.com/gukt">Gu kaitong</NuxtLink>.
      </div>
      <AppSocialIcons class="text-gray-500" />
      <span class="sm:hidden">联系我</span>
    </div>
  </footer>
</template>
