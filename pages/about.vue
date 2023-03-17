<script setup lang="ts">
// const contnet = queryContent('/about')
</script>

<template>
  <div class="app-container mt-8 flex flex-row gap-8">
    <!-- <pre>{{ contnet }}</pre> -->

    <aside class="flex-shrink-0">
      <div class="flex flex-row items-center gap-3 md:flex-col">
        <img
          src="https://nuxt-tailwind-blog.netlify.app/_nuxt/image/f10964.png"
          alt="Avatar"
          class="h-20 w-20 rounded-full border border-gray-100 md:h-60 md:w-60"
        />
        <div>
          <div class="text-bold text-2xl">Gu kaitong</div>
          <div class="text-gray-500">Full Stack Developer</div>
          <AppSocialIcons />
        </div>
      </div>
    </aside>
    <div>
      <ContentDoc path="/_about" />
    </div>
  </div>
</template>
