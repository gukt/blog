<script setup lang="ts">
const tags = ref([
  'JavaScript',
  'Vue',
  'Nuxt',
  'TypeScript',
  'CSS',
  'HTML',
  'AI',
  'Computer',
  'Life',
  'Other',
  'Technology',
  'Web',
  'React',
  'Tailwindcss',
  'Game',
  'Docker',
  'Spring',
  'Container',
  'Kubernetes',
  'Java',
  'Python',
  'Go',
  'Node',
  'Linux',
  'Windows',
  'Android',
  'Flutter',
  'Dart',
  'Kotlin',
  'Swift',
  'Rust',
  '生产力工具',
  '编程语言',
  '编程范式',
  '故障解决',
  'iOS',
  'MAC',
  'CI',
  'Github',
  'OpenAI',
  'GPT',
  '生产力工具',
  '教育',
  '方法论',
  '话说八道',
  '区块链',
  '开源',
  '实用工具',
])
</script>

<template>
  <!-- <AppTagList :tags="tags" class="flex-wrap text-sm text-gray-500" /> -->
  <section
    class="font-1 flex flex-wrap gap-2.5 text-sm font-medium text-primary-700 dark:text-primary-500"
  >
    <span v-for="tag in tags" class="app-link">
      <a href="" class="font-medium1">{{ tag }}</a>
      (<span class="text-sm1 font-serif">13</span>)
    </span>
  </section>
</template>
