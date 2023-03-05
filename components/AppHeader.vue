<script setup>
const activeClass = 'font-bold text-red-500'
</script>
<template>
  <header class="h-16 border border-red-500 flex justify-between items-center">
    <!-- TODO 去掉这里的自动添加父文件夹名称到子目录 -->
    <AppLogo />
    <div class="flex gap-x-2">
      <NuxtLink to="/" :active-class="activeClass">首页</NuxtLink>
      <NuxtLink to="/blog" :active-class="activeClass">博客</NuxtLink>
      <NuxtLink to="/projects" :active-class="activeClass">项目</NuxtLink>
      <NuxtLink to="/about" :active-class="activeClass">关于我</NuxtLink>
      <NuxtLink to="/contact" :active-class="activeClass">联系我</NuxtLink>
      <NuxtLink to="/messages" :active-class="activeClass">Messages</NuxtLink>
    </div>
    <div>
      <ColorModeSwitch />
      <AppSocialIcons />
    </div>
  </header>
</template>
