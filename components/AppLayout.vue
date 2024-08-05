<!-- AppLayout 用于封装整站通用的布局，比如 Header 和 Footer。要注意和 NuxtLayout 的概念和作用进行区分，它仅仅只是一个普通组件，用于封装整站通用的布局结构而已，目的是封装 layouts 目录中提供的不同布局文件的通用结构。 -->
<template>
  <!-- 
    这是包含从 Header 到 Footer 的整站布局结构。
    使用了 flex 布局，min-h-screen 是希望布局至少占满整个屏幕高度，m-auto 是希望布局在水平方向上居中，max-w-[960px] 是希望布局的最大宽度不超过 960px。
  -->
  <div class="relative flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-1 container">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
