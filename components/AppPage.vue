<!-- AppLayout 用于封装整站通用的布局，比如 Header 和 Footer。要注意和 NuxtLayout 的概念和作用进行区分，它仅仅只是一个普通组件，用于封装整站通用的布局结构而已，目的是封装 layouts 目录中提供的不同布局文件的通用结构。 -->
<template>
  <!-- Nuxt 提供 <Title> 、 <Base> 、 <NoScript> 、 <Style> 、 <Meta> 、 <Link> 、 <Body> 、 <Html> 和 <Head> 组件，以便您可以直接与组件模板中的元数据交互：https://nuxt.com/docs/getting-started/seo-meta#components，这里设置了全局的页面高度为至少屏幕高度，然后设置全局的背景颜色为 bg-background，这里不用设置 dark 模式下的背景色，因为 bg-background 是通过变量来设置的，这样可以简化 HTML 代码。antialiased 设置了会让字体更平滑，就是看起来更细一点。
  -->
  <Body class="min-h-screen bg-background antialiased">
    <!-- 
    这是包含从 Header 到 Footer 的整站布局结构。
    注意：最外层的 div 或者下面的 main 标签都不要设置 container，而是让页面中的每个 block 自行决定添加 container，这样做的好处是，如果有一些需要跨整个屏幕宽度的内容可以有更大的自由度，同时每个 block 自行设置 container 也是很轻松的一件事。
  -->
    <div class="relative flex flex-col min-h-screen">
      <!-- Page Header -->
      <AppHeader />
      <!-- Main content -->
      <main class="flex-1">
        <slot />
      </main>
      <!-- Page Footer -->
      <AppFooter />
    </div>
  </Body>
</template>
