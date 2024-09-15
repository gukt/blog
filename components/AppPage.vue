<template>
  <!-- 
    Nuxt 提供 <Title>，<Base> ，<NoScript> 、 <Style> 、 <Meta> 、 <Link> 、 <Body> 、 <Html> 和 <Head> 组件，您可以直接与组件模板中的元数据交互：https://nuxt.com/docs/getting-started/seo-meta#components。
    这里设置了全局的页面高度为至少屏幕高度，然后设置全局的背景颜色为 bg-background，这里不用设置 dark 模式下的背景色，因为 bg-background 是通过变量来设置的，这样可以简化 HTML 代码。antialiased 设置了会让字体更平滑，就是看起来更细一点。
  -->
  <Body class="min-h-screen bg-background antialiased">
    <!-- 
      这是包含从 Header 到 Footer 的整站布局结构。
      注意：作为整站布局，这里不应该设置宽度，而是让内部的内容自行设置宽度，
      这样可以让整站布局更加灵活，同时也可以让内部的内容更容易控制。
    -->
    <div class="relative flex flex-col min-h-screen">
      <AppHeader />
      <main class="flex-1">
        <slot />
      </main>
      <AppFooter />
    </div>
  </Body>
</template>
