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
  <div class="flex flex-col justify-between gap-4 md:flex-row">
    <!-- Prev post -->
    <button
      v-if="prev"
      class="app-link inline-flex w-full items-center gap-2"
      title="上一篇"
    >
      <Icon name="arrow-left" class="flex-shrink-0" />
      <a :href="prev._path" :title="prev.title" class="truncate">
        {{ prev.title }}
      </a>
    </button>
    <!-- Next post -->
    <button
      v-if="next"
      title="下一篇"
      class="app-link inline-flex w-full items-center gap-2 border-dashed md:flex-row-reverse"
    >
      <Icon name="arrow-right" class="flex-shrink-0" />
      <a :href="next._path" :title="next.title" class="line-clamp-1">
        {{ next.title }}
      </a>
    </button>
  </div>
</template>

<style scoped>
.nav-button {
  @apply inline-flex gap-2 truncate;
}
</style>
