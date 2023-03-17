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
  <div v-if="prev || next" class="flex flex-col justify-between gap-2">
    <div class="flex gap-2">
      <Icon name="arrow-left" />
      上一篇
      <a href="#" class="app-link">{{ prev.title }}</a>
    </div>
    <div class="flex gap-2">
      <Icon name="arrow-right" />
      下一篇
      <a href="#" class="app-link">{{ next.title }}</a>
    </div>

    <!-- <NuxtLink v-if="prev" :to="prev._path" class="prev">
      <Icon name="arrow-left" />
      <div class="wrapper">
        <span v-if="directory(prev._path)" class="directory">
          {{ directory(prev._path) }}
        </span>
        <span class="title">{{ prev.title }}</span>
      </div>
    </NuxtLink>

    <NuxtLink v-if="next" :to="next._path" class="next">
      <div class="wrapper">
        <span v-if="directory(next._path)" class="directory">
          {{ directory(next._path) }}
        </span>
        <span class="title">{{ next.title }}</span>
      </div>
      <Icon name="arrow-right" class="icon" />
    </NuxtLink> -->
  </div>
</template>
