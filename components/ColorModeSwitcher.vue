<script setup lang="ts">
const colorMode = useColorMode()

const modes = new Map([
  // ['system', 'uil:desktop'],
  ['dark', 'uil:moon'],
  ['light', 'uil:sun'],
  // ['sepia', 'uil:coffee'],
])

const iconName = ref('uil:moon')

// const icon = ref(null)

function onClick() {
  const colors = Array.from(modes.keys())
  const index = colors.indexOf(colorMode.preference)
  const next = (index + 1) % colors.length

  colorMode.preference = colors[next]
  console.log('color mode changed: ', colors[next])
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

    <!-- <ClientOnly>
      <component :is="`icon-${colorMode.preference}`" />
    </ClientOnly> -->

    <!-- <IconDark v-if="colorMode.preference === 'dark'" />
    <IconLight v-if="colorMode.preference === 'light'" />
    <IconSepia v-if="colorMode.preference === 'sepia'" />
    <IconSystem v-if="colorMode.preference === 'system'" /> -->
  </button>
</template>
