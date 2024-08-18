<!-- AppLayout 用于封装整站通用的布局，比如 Header 和 Footer。要注意和 NuxtLayout 的概念和作用进行区分，它仅仅只是一个普通组件，用于封装整站通用的布局结构而已，目的是封装 layouts 目录中提供的不同布局文件的通用结构。 -->
<template>
  <!-- 
    这是包含从 Header 到 Footer 的整站布局结构。
    注意：最外层的 div 或者下面的 main 标签都不要设置 container，而是让页面中的每个 block 自行决定添加 container，这样做的好处是，如果有一些需要跨整个屏幕宽度的内容可以有更大的自由度，同时每个 block 自行设置 container 也是很轻松的一件事。
  -->
  <div class="relative flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
