<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)

// 用数组存储颜色模式和对应的图标，比使用对象或 Map 更方便切换。
const colorModes = [
  { name: 'light', icon: 'uil-sun' },
  { name: 'dark', icon: 'uil-moon' },
  // { name: 'sepia', icon: 'uil-coffee' },
]

const index = ref(0)

const iconName = computed(() => {
  return colorModes[index.value].icon
})

function toggle() {
  index.value = (index.value + 1) % colorModes.length
  colorMode.preference = colorModes[index.value].name
}
</script>

<template>
  <Icon :name="iconName" class="w-5 h-5" @click="toggle" />
</template>

<!-- 临时注释掉，这是 demo 里拷贝过来的 -->
<!-- <style>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}
</style> -->
