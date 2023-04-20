<script setup lang="ts">
const navVisible = ref(false)
const navActiveIndex = ref(0)

const navItems = [
  ['/', '首页'],
  ['/blog', '文章'],
  ['/about', '关于'],
]

const toggleNav = () => {
  // TODO 打开 menu 时禁止滚动
  console.log('toggleNav')
  navVisible.value = !navVisible.value
}

function handleNavItemClicked(index: number) {
  console.log('handleNavItemClicked', index)
  navActiveIndex.value = index
}
</script>

<template>
  <header
    class="app-bg-primary-75 sticky left-0 top-0 z-50 border-b border-gray-100 py-4 text-gray-700 backdrop-blur-md dark:border-gray-900 dark:text-gray-200"
  >
    <!-- Header content -->
    <div class="app-container flex h-8 items-center justify-between">
      <!-- Logo -->
      <div class="inline-flex items-center gap-4">
        <AppLogo href="/" />
        <a href="/" class="font-medium">Gu's blog</a>
      </div>

      <!-- Navigation + Color mode switcher -->
      <nav
        class="app-bg-primary absolute inset-x-0 top-16 flex min-h-[calc(100vh-4rem)] flex-col items-center gap-6 text-lg sm:static sm:min-h-min sm:flex-row sm:text-base lg:gap-8"
        :class="navVisible ? 'block' : 'hidden sm:flex'"
      >
        <NuxtLink
          v-for="([href, label], index) in navItems"
          :to="href"
          class="nav-link"
          :class="{ active: navActiveIndex === index }"
          @click="handleNavItemClicked(index)"
        >
          <span class="link-underline" />
          {{ label }}
        </NuxtLink>
        <!-- Color model -->
        <ColorModeSwitcher />
      </nav>
      <!-- Humburge icon-->
      <Icon
        name="menu"
        class="!block cursor-pointer sm:!hidden"
        @click="toggleNav"
      />
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply relative font-medium tracking-wider text-gray-900 hover:text-primary-700 dark:text-gray-100;
}

.nav-link.active {
  @apply text-primary-600 dark:text-primary-300;
}

.link-underline {
  @apply absolute -bottom-1.5 h-[2px] w-0 bg-primary-500 transition-all duration-300 ease-in-out;
}
.nav-link:hover .link-underline {
  @apply w-full;
}
</style>
