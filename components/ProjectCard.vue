<script setup lang="ts">
import type { Project } from '~/types/global'

// 通过泛型类型参数来定义组件属性往往更直接：
// 如果属性比较多，也可以单独先定义一个类型，然后在 defineProps 里面引用这个类型。
// interface Props {
//   foo: string
//   bar?: number
// }
// defineProps<Props>()
// https://cn.vuejs.org/guide/typescript/composition-api.html#using-script-setup
defineProps<{ project: Project }>()
</script>

<template>
  <div
    class="gap-x-8 gap-y-4 rounded-xl flex flex-col flex-1 px-4 py-5 sm:p-6 bg-gray-100/50 dark:bg-gray-800/50 outline-1 outline-red-500"
  >
    <div>
      <img :src="project.img" class="mb-2 pointer-events-none w-10 h-10 shadow-md flex-shrink-0 rounded-md text-gray-900 dark:text-white" />
      <h3 class="text-gray-900 dark:text-white text-base font-bold truncate">
        {{ project.title }}
      </h3>
      <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
        {{ project.subtitle }}
      </p>
    </div>
  </div>
</template>
