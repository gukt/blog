<script setup lang="ts">
const navItems = ref([
  { name: '博客', path: '/blog' },
  { name: '项目', path: '/projects' },
])
</script>

<template>
  <!-- 
  关于这里的样式定义的一些说明： 
  - header 标签上的 sticky 是为了让 Header 固定在页面顶部，top-0 是为了让 Header 固定在页面顶部，z-50 是为了让 Header 在 z 轴上处于最上层，w-full 是为了让 Header 宽度占满整个屏幕，bg-background/95 是为了让 Header 的背景色透明度为 95%，backdrop-blur 是为了让 Header 的背景模糊，supports-[backdrop-filter]:bg-background/60 是为了让 Header 的在浏览器支持 backdrop-filter 的情况下设置背景色透明度为 60%，border-b border-border/30 是为了给 Header 底部添加一条边框。
  - container 是为了让 header 的内容居中，它是一个自定义的容器组件，它的样式定义在 global.css 以及 tailwind.config.js 里，结合这两处的定义实现的。container 不应该写在 header 上，因为 header 我们希望保持和屏幕等宽，虽然最终表现上 header 看起来是居中的，但实际上应该设置 header 的内容居中，而不是 header 标签居中。
  - 开始我是通过在 header 上设置 padding 来控制内容的内边距的，实际上这样不妥，因为 header 是一个全局组件，它的内边距应该由它的子组件来控制，而不是由它自己来控制。另外，最好不要用 padding 来控制 header 内容的垂直方向上的间距，因为这样的设置随着字体大小或 line-height 的变化会让 header 的高度发生变化，我们一般希望 header 的高度是固定的，所以是在 header 的内容上直接设置高度，此处设置为 w-14。
  - 让 header 和内容分开设置样式，这样可以让 header 容器的样式更加通用，而 header 内容的样式更加专注于内容本身。比如：当我们想设置下边框时，有些场景可能要求全屏幕宽度，有些场景可能要求内容宽度，这时候我们就可以根据情况将 border-b border-border/30 设置在不同的标签上。
  - 此处的样式定义参考的是 Shadcn UI 官网：https://ui.shadcn.com
  -->
  <header
    class="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/30"
  >
    <div class="container flex items-center justify-between h-14">
      <!-- Leading: avatar -->
      <NuxtLink to="/">
        <img src="/favicon.ico" alt="logo" class="w-8 h-8 inline-block rounded-full" />
      </NuxtLink>
      <!-- Trailing: navigation -->
      <nav class="flex items-center gap-6 md:gap-8 cursor-pointer">
        <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" class="text-md opacity-80 hover:opacity-100">
          {{ item.name }}
        </NuxtLink>
        <!-- Search -->
        <NuxtLink to="/search">
          <!-- NOTE：对于 line 子元素，尽管设置了高度，但在父元素中显示时，浏览器仍然会默认加上一些额外的 line-height, 解决方法有两个：1- 将子元素设置为 block；2-在父元素上设置 flex 或 inline-flex -->
          <Icon name="uil:search" class="w-5 h-5 stroke-2 block opacity-80 hover:opacity-100" />
        </NuxtLink>
        <!-- Color mode switch -->
        <ColorModeSwitch />
      </nav>
    </div>
  </header>
</template>
