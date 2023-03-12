<script setup>
const activeClass = 'font-bold text-red-500 border-b-2 border-red-500'
const menuVisible = ref(false)
const toggleMenu = () => {
  // TODO 打开 menu 时禁止滚动
  console.log('toggleMenu')
  menuVisible.value = !menuVisible.value
}
</script>

<template>
  <header
    class="app-bg-primary-75 border-b-gray-300 dark:border-b-gray-700 sticky top-0 z-30 border-b py-4 backdrop-blur-md transition-all md:py-6"
  >
    <!-- Header actual content -->
    <div class="app-container grid grid-cols-6 gap-4">
      <!-- Hamburge Icon  -->
      <!-- TODO Deep into: 因为在 Icon 组件上应用 hidden 会不起效果，所以在需要隐藏的 Icon 上 -->
      <span class="block md:hidden">
        <!-- TODO: 使用 alias？ -->
        <Icon class="h-7 w-7" name="mdi:menu" @click="toggleMenu" />
      </span>
      <!-- AppLogo -->
      <AppLogo
        href="/"
        class="col-span-4 justify-self-center md:col-span-1 md:justify-self-auto"
      />
      <!-- Navigation -->
      <nav
        class="bg-primary-50 dark:bg-primary-900 absolute right-0 left-0 top-0 h-screen text-right md:static md:col-span-4 md:block md:h-auto md:bg-transparent dark:md:bg-transparent"
        :class="{
          hidden: !menuVisible,
        }"
      >
        <!-- The 'close menu' icon -->
        <div class="border-b-primary-200 border-b py-4 pr-4 md:hidden">
          <Icon class="h-8 w-8" name="mdi:close" @click="toggleMenu" />
        </div>
        <!-- Navigation items -->
        <ul
          class="md:text-md mt-6 flex flex-col items-center gap-6 text-xl font-medium md:mt-0 md:flex-row md:justify-center md:text-base lg:gap-8 xl:gap-10"
        >
          <li>
            <NuxtLink to="/" :active-class="activeClass"> Home </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" :active-class="activeClass">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" :active-class="activeClass">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tags" :active-class="activeClass">Tags</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/categories" :active-class="activeClass"
              >categories</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" :active-class="activeClass"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- Color mode switcher + Social icons -->
      <div class="flex justify-end gap-4">
        <ColorModeSwitch />
        <AppSocialIcons />
      </div>
    </div>
  </header>
</template>

<style scoped>
/* .link {
  @apply text-sm font-medium lg:text-base;
} */
</style>
