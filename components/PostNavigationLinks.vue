<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
  <div class="flex gap-8 mt-16">
    <div v-if="prev">
      <NuxtLink
        :to="prev._path"
        title="上一篇"
        class="w-1/2 text-left inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
      >
        <Icon name="lucide:move-left" class="w-4 h-4" />
        {{ prev.title }}
      </NuxtLink>
    </div>

    <div v-if="next">
      <NuxtLink
        :to="next._path"
        title="下一篇"
        class="w-1/2 text-right inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
      >
        {{ next.title }}
        <Icon name="lucide:move-right" class="h-4 w-4" />
      </NuxtLink>
    </div>
  </div>
</template>
