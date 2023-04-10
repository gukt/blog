<script setup lang="ts">
import { withBase } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    return withBase(props.src, useRuntimeConfig().app.baseURL)
  }
  return props.src
})
</script>

<template>
  <!-- <nuxt-img :src="refinedSrc" :alt="alt" :width="width" :height="height" /> -->
  <nuxt-img
    :src="src"
    :alt="alt"
    :width="width"
    :height="height"
    size="sm:100vw md:50vw lg:400px"
  />
  AAA
</template>
