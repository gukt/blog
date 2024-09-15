<script setup lang="ts">
const navLinks = [
  { name: '首页', url: '/' },
  { name: '博客', url: '/blog' },
  { name: '项目', url: '/projects' },
  { name: '关于', url: '/about' },
]

// 这两个链接将在模板中使用
const socialLinks = {
  twitter: {
    name: 'Twitter',
    url: 'https://twitter.com/@gukt',
    icon: 'i-simple-icons-twitter',
  },
  github: {
    name: 'GitHub',
    url: 'https://github.com/gukt',
    icon: 'i-simple-icons-github',
  },
}
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50"
  >
    <!--  
      Header 的宽度应该由全局的 container 限制，container 是 tailwind 默认提供的类，可以在 tailwind.config.ts 文件中进行全局定义。此处的样式定义参考的是 Shadcn UI 官网：https://ui.shadcn.com。
    -->
    <div class="container flex items-center justify-between h-16 py-4">
      <!-- 社交链接 -->
      <nav>
        <ul class="flex">
          <li
            v-for="(link, index) in navLinks"
            :key="link.name"
            class="flex items-center"
          >
            <a :href="link.url">{{ link.name }}</a>
            <span v-if="index !== navLinks.length - 1" class="mx-2">/</span>
          </li>
        </ul>
      </nav>
      <div class="flex items-center">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0"
          >
            <Icon :name="link.icon" class="w-4 h-4 text-foreground" />
          </div>
        </a>
        <!-- 这里的样式和上面是一样的，看起来应该封装到 Button 中 -->
        <div
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0 hover:cursor-pointer select-none"
        >
          <ColorModeSwitcher class="w-4 h-4" />
        </div>
      </div>
    </div>
  </header>
</template>
