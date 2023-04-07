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

const years = [2023, 2022, 2021, 2020]
</script>

<template>
  <NuxtLayout name="default">
    <!-- <pre>{{ articles }}</pre> -->
    <main class="grid grid-cols-12 pt-12 md:gap-8 2xl:gap-16">
      <div class="border1 col-span-9 border-dashed">
        <!-- Title -->
        <div class="mb-12 truncate text-4xl font-bold">
          {{ keyword ? `搜索 "${keyword}"` : '全部文章' }}
        </div>

        <!-- 文章列表 -->
        <section v-for="year in years" class="mb-16 text-lg">
          <div class="app-link mb-4 font-serif text-2xl">{{ year }} (12)</div>
          <ul>
            <li
              v-for="article in articles"
              class="my-2 flex items-center gap-4"
            >
              <span class="flex-shrink-0 font-serif text-gray-500">03-15</span>
              <a
                class="app-link inline truncate text-base font-medium tracking-tight text-black dark:text-gray-300"
                :href="article._path"
              >
                {{ article.title }}
              </a>
            </li>
          </ul>
        </section>
      </div>
      <!-- Aside navigation -->
      <aside class="sticky col-span-3 h-max max-h-[calc(100vh-8rem)] lg:block">
        <svg width="100" height="100" class="stroke-black">
          <circle
            cx="50"
            cy="50"
            r="20"
            stroke="orange"
            stroke-width="2"
            fill="cyan"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-16 w-16 fill-red-500 stroke-blue-500 stroke-1 text-green-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>

        
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-16 w-16 fill-gray1-500 stroke-blue-500 stroke-2 text-green-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>


        <Icon
          name="heroicons:archive-box-arrow-down"
          class="h-16 w-16 stroke-cyan-500"
        />
        <Icon name="heroicons:bell-20-solid" class="h-10 w-10 text-cyan-500" />
        <Icon
          name="heroicons-outline:chart-bar"
          class="h-10 w-10 fill-cyan-500 stroke-red-500"
        />
        <!-- Search bar -->
        <div class="group relative mb-8 w-full">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <Icon
              name="search"
              class="h-5 w-5 stroke-white text-gray-500 group-focus:text-primary-600 dark:text-gray-400 dark:group-focus:text-primary-300"
            />
          </div>
          <input
            class="w-full rounded-lg border border-gray-200 bg-transparent p-2.5 pl-10 text-sm focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:placeholder-gray-500 dark:focus:ring-gray-800"
            placeholder="搜索"
          />
        </div>

        <!-- <div class="relative mb-8 w-full">
          <input
            type="text"
            placeholder="搜索"
            class="w-full rounded-lg border border-gray-800 bg-transparent py-2 pl-9 pr-3 placeholder-gray-500 focus:border-primary-500 focus:outline-none"
            v-model="keyword"
          />
          <div class="absolute inset-y-0 left-0">
            <button
              class="rounded-full border focus:text-primary-500 focus:outline-none"
            >
              <Icon name="search" />
            </button>
          </div>
        </div> -->

        <div class="border-dashed p-0 dark:border-gray-700">
          <h1 class="mb-4 font-medium text-gray-500">所有标签</h1>
          <BlogTagList />
        </div>
      </aside>
    </main>
  </NuxtLayout>
</template>
