<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

// 使用 relativeTime 插件，使 dayjs 支持相对时间
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const props = defineProps({
  time: {
    type: String,
    required: true,
  },
  relative: {
    type: Boolean,
    default: false,
  },
  togglable: {
    type: Boolean,
    default: true,
  },
})

/** 是否显示为相对时间格式 */
const isRelative = ref(props.relative)

/**
 * 根据 relative 的值，返回不同的时间格式
 */
const timeString = computed(() => {
  return isRelative.value
    ? dayjs(props.time).from(dayjs())
    : dayjs(props.time).format('YYYY-MM-DD')
})

/**
 * 切换显示格式
 */
function toggle() {
  if (props.togglable) {
    isRelative.value = !isRelative.value
  }
}
</script>

<template>
  <time :datetime="time" @click="toggle">
    <slot :timeString="timeString">
      {{ timeString }}
    </slot>
  </time>
</template>
