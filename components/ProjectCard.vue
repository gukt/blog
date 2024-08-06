<script setup lang="ts">
import type { Project } from '~/types/global'

// 通过泛型类型参数来定义组件属性往往更直接，如果属性比较多，也可以单独先定义一个类型，然后在 defineProps 里面引用这个类型，具体可以参考下面的代码，参考文档：https://cn.vuejs.org/guide/typescript/composition-api.html#using-script-setup
// interface Props {
//   foo: string
//   bar?: number
// }
// defineProps<Props>()
defineProps<{ project: Project }>()
</script>

<template>
  <div
    class="px-4 py-5 bg-secondary/85 dark:bg-secondary/50 rounded-xl hover:ring-1 hover:ring-offset-1 hover:ring-offset-transparent hover:ring-ring"
  >
    <img :src="project.img" class="mb-2 pointer-events-none w-10 h-10 shadow-md flex-shrink-0 rounded-md" />
    <h3 class="text-base font-bold truncate">
      {{ project.title }}
    </h3>
    <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
      {{ project.subtitle }}
    </p>
  </div>
</template>
