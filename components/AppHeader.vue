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
  ['/about', '关于'],
])

navItems.entries()
</script>

<template>
  <header
    class="app-bg-primary-75 sticky top-0 left-0 z-50 border-b border-gray-100 py-4 text-gray-700 backdrop-blur-md dark:border-gray-900 dark:text-gray-200"
  >
    <!-- Header content -->
    <div class="app-container flex h-8 items-center justify-between">
      <!-- Logo -->
      <div class="inline-flex items-center gap-4">
        <AppLogo href="/" />
        <span class="font-medium">Bill Gates</span>
      </div>

      <!-- Navigation + Color model -->
      <!-- <div
        class="absolute inset-x-0 top-14 h-screen gap-6 bg-white dark:bg-black sm:static sm:flex sm:h-auto sm:items-center md:gap-8 lg:gap-10"
      >
        <nav>
          <ul class="flex gap-6 md:flex-row lg:gap-8 xl:gap-10">
            <li v-for="[href, label] in navItems.entries()">
              <a :href="href" class="nav-link" active-class="active">
                <span class="link-underline" />
                {{ label }}
              </a>
            </li>
          </ul>
        </nav>
        <ColorModeSwitch />
      </div> -->

      <nav class="flex items-center gap-6">
        <a
          v-for="[href, label] in navItems.entries()"
          :href="href"
          class="nav-link"
          active-class="active"
        >
          <span class="link-underline" />
          {{ label }}
        </a>
        <!-- Color model -->
        <ColorModeSwitcher />
      </nav>
      <!-- Humburge icon-->
      <Icon
        name="menu"
        class="block cursor-pointer sm:hidden"
        @click="toggleMenu"
      />
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
