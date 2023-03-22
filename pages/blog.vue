<script setup lang="ts">
const allArticles = await queryContent('/blog')
  .where({ _path: { $not: '/blog' } })
  .where({ _partial: false })
  .without(['body'])
  .find()

const keyword = ref('')

// 定义一个计算属性 allArticles，从 articles 中过滤出符合条件的文章
// 过滤时需要忽略关键字的大小写
// 过滤条件：标题、标签、内容中包含关键字
const articles = computed(() => {
  if (!keyword.value) {
    return allArticles
  }
  console.log('keyword.value', keyword.value)
  return allArticles.filter((article: any) => {
    const q = keyword.value.toLowerCase()
    return article?.title.toLowerCase().includes(q)
  })
})

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
  'Mac',
  'Windows',
  'Android',
  'iOS',
  'Flutter',
  'dart',
  'Kotlin',
  'Swift',
  'Rust',
  '生产力工具',
  '编程语言',
  '编程范式',
  '故障解决',
  'iOS',
  'Flutter',
  'dart',
  'Kotlin',
  'Swift',
  'Rust',
  '生产力工具',
  '编程语言',
  '编程范式',
  '故障解决',
  '软件工程',
  '软件设计',
  '软件架构',
  '软件测试',
  '软件开发',
  '软件工具',
  '软件工程师',
])
</script>

<template>
  <NuxtLayout name="default">
    <!-- <pre>{{ articles }}</pre> -->
    <main class="grid grid-cols-8 gap-8">
      <div class="col-span-6">
        <!-- Title -->
        <div class="truncate py-8 text-5xl font-semibold">
          {{ keyword ? `搜索 "${keyword}"` : '所有文章' }}
        </div>

        <!-- 文章列表 -->
        <div class="">
          <ArticleCard v-for="article in articles" :article="article" />
        </div>
      </div>
      <!-- Aside navigation -->
      <aside
        class="sticky top-28 col-span-2 h-max max-h-[calc(100vh-8rem)] rounded-lg lg:block"
      >
        <!-- 搜索栏 -->
        <div class="relative mb-8">
          <input
            type="text"
            placeholder="Search"
            class="rounded-full border border-gray-400 bg-transparent py-2 pl-8 pr-3 placeholder-gray-500 focus:border-green-500 focus:outline-none"
            v-model="keyword"
          />
          <div class="absolute inset-y-0">
            <button
              class="focus:text-primary-500 rounded-full p-2 focus:outline-none"
            >
              <Icon name="search" />
            </button>
          </div>
        </div>

        <div class="border-dashed p-0 dark:border-gray-700">
          <h1 class="mb-4 font-medium">所有标签</h1>
          <AppTagList :tags="tags" class="flex-wrap text-sm text-gray-500" />
        </div>
      </aside>
    </main>
  </NuxtLayout>
</template>
