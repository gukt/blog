<script setup lang="ts">
import { upperFirst } from 'scule'

const { prev, next, navigation } = useContent()
const { navDirFromPath } = useContentHelpers()

const directory = (link: any) => {
  const nav = navDirFromPath(link._path, navigation.value || [])

  if (nav && nav[0]) {
    return nav[0]._path
  } else {
    const dirs = link.split('/')
    const directory = dirs.length > 1 ? dirs[dirs.length - 2] : ''
    return directory.split('-').map(upperFirst).join(' ')
  }
}
</script>

<template v-if="prev || next">
  <div class="flex flex-col justify-between gap-8 md:flex-row">
    <!-- Prev post -->
    <button v-if="prev" class="app-btn-outlined" title="上一篇">
      <Icon name="arrow-left" class="flex-shrink-0" />
      <NuxtLink :to="prev._path" :title="prev.title" class="truncate">
        {{ prev.title }}
      </NuxtLink>
    </button>
    <!-- Next post -->
    <button
      v-if="next"
      title="下一篇"
      class="app-btn-outlined md:flex-row-reverse"
    >
      <Icon name="arrow-right" class="flex-shrink-0" />
      <NuxtLink :to="next._path" :title="next.title" class="line-clamp-1">
        {{ next.title }}
      </NuxtLink>
    </button>
  </div>
</template>

<style scoped>
.icon {
  @apply h-4 w-4;
}
.nav-button {
  @apply inline-flex gap-2 truncate;
}

/* TODO Move to global css */
.app-btn-outlined {
  @apply inline-flex w-max max-w-[50%] items-center gap-2 border border-gray-300 py-4 dark:border-gray-900 dark:hover:bg-red-900;
}
</style>
