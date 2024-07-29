<template>
  <!-- 在最外层不能设置内边距，否则内部组件要设置背景就有问题了，比如 Header 或 Footer 的背景图的左右两边应该是没有边距的 -->
  <!-- NOTE: 一开始在这里设置 prose，这样不妥，这相当于在全局模板, 也不用在这里设置 dark 模式下的背景颜色和文本颜色，在 main.css 里全局设置就可以了 -->
  <div class="m-auto flex flex-col min-h-screen max-w-[960px]">
    <AppHeader />
    <main class="flex-grow p-4 min-w-full">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
