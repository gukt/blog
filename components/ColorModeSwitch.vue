<script setup>
const colorMode = useColorMode()

const colorModes = new Map([
  ['system', 'uil:desktop'],
  ['dark', 'uil:moon'],
  ['light', 'uil:sun'],
  ['sepia', 'uil:coffee'],
])

function onClick() {
  const colors = Array.from(colorModes.keys())
  const index = colors.indexOf(colorMode.preference)
  const next = (index + 1) % colors.length
  colorMode.preference = colors[next]
  console.log('iconName', iconName.value)
}

const iconName = computed(() => colorModes.get(colorMode.preference))
</script>

<template>
  <button aria-label="Color Mode" class="inline-block" @click="onClick">
    <!-- ColorScheme 是 @nuxtjs/color-mode 提供的组件。组件的默认名称可以配置：https://color-mode.nuxtjs.org/#configuration -->
    <ColorScheme placeholder="...">
      <Icon :name="iconName" class="h-4 w-4" />
    </ColorScheme>
    <a href="https://www.baidu.com" target="_blank" rel="noreferer">百度</a>
  </button>
</template>
