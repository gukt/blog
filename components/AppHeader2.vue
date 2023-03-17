<script setup lang="ts">
const menuVisible = ref(false)
const toggleMenu = () => {
  // TODO 打开 menu 时禁止滚动
  console.log('toggleMenu')
  menuVisible.value = !menuVisible.value
}
const navItems = new Map([
  ['/', '首页'],
  ['/blog', '文章'],
  // ['/tags', 'Tags'],
  // ['/categories', 'Categories'],
  // ['/archives', 'Archives'],
  ['/about', '关于'],
])

navItems.entries()
</script>

<template>
  <header
    class="app-bg-primary-75 sticky top-0 z-30 flex h-14 border-b border-b-gray-100 backdrop-blur-md transition-all dark:border-b-gray-900 md:h-16"
  >
    <div class="app-container flex items-center justify-between">
      <!-- AppLogo -->
      <AppLogo
        href="/"
        class="col-span-4 justify-self-center md:col-span-1 md:justify-self-start"
      />
      <!-- Navigation -->
      <div class="flex items-center gap-6 md:gap-8 lg:gap-10">
        <nav>
          <ul
            class="md:text-md mt-6 flex flex-col items-center gap-6 text-xl font-bold md:mt-0 md:flex-row md:justify-center md:text-base lg:gap-8 xl:gap-10"
          >
            <li v-for="[href, label] in navItems.entries()">
              <NuxtLink :to="href" class="nav-link" active-class="active">
                <span class="link-underline" />
                {{ label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <ColorModeSwitch />
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  @apply hover:text-primary-700 relative text-base font-medium tracking-wider text-gray-900 dark:text-gray-100;
}

.nav-link.active {
  @apply dark:text-primary-300 text-primary-600;
}

.link-underline {
  @apply bg-primary-500 absolute -bottom-1.5 h-[2px] w-0 transition-all duration-300 ease-in-out;
}
.nav-link:hover .link-underline {
  @apply w-full;
}
</style>
