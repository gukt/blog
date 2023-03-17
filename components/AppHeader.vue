<script setup lang="ts">
const activeClass = 'underline text-primary-500'
const menuVisible = ref(false)
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
}
const navItems = new Map([
  ['/', 'Home'],
  ['/blog', 'Article'],
  // ['/tags', 'Tags'],
  // ['/categories', 'Categories'],
  // ['/archives', 'Archives'],
  ['/about', 'About'],
])
</script>

<template>
  <header
    class="app-bg-primary-75 sticky top-0 z-30 flex h-14 border-b border-b-gray-100 backdrop-blur-md transition-all dark:border-b-gray-900 md:h-16"
  >
    <div class="app-container grid grid-cols-6 items-center gap-4">
      <!-- Hamburge Icon (Mobile only)  -->
      <Icon class="block h-7 w-7 md:hidden" name="menu" @click="toggleMenu" />
      <!-- AppLogo -->
      <AppLogo
        href="/"
        class="col-span-4 justify-self-center md:col-span-1 md:justify-self-start"
      />
      <!-- Navigation -->
      <nav
        class="absolute right-0 left-0 top-0 h-screen bg-white text-right dark:bg-black md:static md:col-span-4 md:block md:h-auto md:bg-transparent dark:md:bg-transparent"
        :class="{
          hidden: !menuVisible,
        }"
      >
        <!-- Close icon (Mobile) -->
        <div class="h-12 md:hidden" :class="{ hidden: !menuVisible }">
          <Icon
            class="absolute top-2 left-4 h-7 w-7"
            name="mdi:close"
            @click="toggleMenu"
          />
        </div>
        <!-- Navigation items -->
        <ul
          class="md:text-md mt-6 flex flex-col items-center gap-6 text-xl font-medium md:mt-0 md:flex-row md:justify-center md:text-base lg:gap-8 xl:gap-10"
        >
          <li v-for="[href, label] in navItems.entries()">
            <NuxtLink
              :to="href"
              class="hover:text-primary-500 font-medium tracking-widest"
              :active-class="activeClass"
            >
              {{ label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- Color mode switcher + Social icons -->
      <div class="flex justify-end gap-4">
        <!-- <AppSocialIcons /> -->
        <ColorModeSwitch />
      </div>
    </div>
  </header>
</template>