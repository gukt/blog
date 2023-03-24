<script setup lang="ts">
import { upperFirst } from 'scule'

const { prev, next, navigation } = useContent()
const { navDirFromPath } = useContentHelpers()
// console.log('userContent() => ', useContent())

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

<template>
  <div v-if="prev || next" class="flex flex-col justify-between gap-4">
    <!-- Prev post -->
    <button
      v-if="prev"
      class="app-link inline-flex gap-2 truncate"
      title="上一篇"
    >
      <Icon name="arrow-left" class="flex-shrink-0" />
      <a :href="prev._path" :title="prev.title">{{ prev.title }}</a>
    </button>
    <!-- Next post -->
    <button
      v-if="next"
      class="app-link inline-flex gap-2 truncate"
      title="下一篇"
    >
      <Icon name="arrow-right" class="flex-shrink-0" />
      <a :href="next._path" :title="next.title">{{ next.title }}</a>
    </button>
  </div>
</template>
