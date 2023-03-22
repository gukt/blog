<script setup lang="ts">
const colorMode = useColorMode()

const modes = new Map([
  ['system', 'uil:desktop'],
  ['dark', 'uil:moon'],
  ['light', 'uil:sun'],
  ['sepia', 'uil:coffee'],
])

const iconName = ref('uil:moon')

function onClick() {
  const colors = Array.from(modes.keys())
  const index = colors.indexOf(colorMode.preference)
  const next = (index + 1) % colors.length

  colorMode.preference = colors[next]
  iconName.value = modes.get(colors[next])!
}

// const iconName = computed(() => modes.get(colorMode.preference))
</script>

<template>
  <button aria-label="Color Mode" class="inline-block" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon :name="iconName" :class="'h-5 w-5'" />
      <span class="sr-only">System mode</span>
    </ColorScheme>
  </button>
</template>
