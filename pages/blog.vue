<script setup lang="ts">
import dayjs from 'dayjs'

const allArticles = await queryContent('/blog')
  .where({ _path: { $not: '/blog' } })
  .where({ _partial: false })
  .without(['body'])
  .find()

const keyword = ref('')
const tagKeyword = ref('')

// 定义一个计算属性 allArticles，从 articles 中过滤出符合条件的文章
// 过滤时需要忽略关键字的大小写
// 过滤条件：标题、标签、内容中包含关键字
const articles = computed(() => {
  if (!keyword.value && !tagKeyword.value) {
    return allArticles
  }
  return allArticles.filter((article: any) => {
    const q = keyword.value.toLowerCase()
    return (
      article?.title.toLowerCase().includes(q) &&
      article?.tags?.includes(tagKeyword.value)
    )
  })
})

const articlesByYears = computed(() => {
  // 从 articles 中获取所有的年份，并且获取每个年份对应的文章列表
  // 最后返回一个 Map，Map 的 key 是年份，value 是文章列表
  const yearMap = new Map<string, any>()
  articles.value.forEach((article: any) => {
    // console.log('year', article.date)
    // 取出时间字符串的年份部分，时间格式可能有：
    // 2021-08-01 00:00:00
    // 2021/08/01 00:00:00
    // 所以 split 时需要考虑分隔符可能为 - 或者 /，
    // 有些文章可能暂时还没有指定发表时间，所以需要过滤掉。
    const year = article.date?.split(/[-/]/)[0]
    if (year) {
      if (yearMap.has(year)) {
        yearMap.set(year, [...yearMap.get(year), article])
      } else {
        yearMap.set(year, [article])
      }
    }
  })
  // 按时间倒序排列
  return new Map([...yearMap.entries()].sort((a, b) => +b[0] - +a[0]))
})

/**
 * 所有标签
 */
const tags = computed(() => {
  // 从 allArticles 中获取所有的标签，并且获取每个标签对应的文章数量
  // NOTE: 有的文章可能没有 tags，需要过滤掉
  // 最后返回一个 Map，Map 的 key 是标签，value 是文章数量
  const tagMap = new Map()
  allArticles.forEach((article: any) => {
    if (article.tags) {
      article.tags.forEach((tag: string) => {
        if (tagMap.has(tag)) {
          tagMap.set(tag, tagMap.get(tag) + 1)
        } else {
          tagMap.set(tag, 1)
        }
      })
    }
  })
  return tagMap
})

// TODO Rename to List Headings
const title = computed(() => {
  // 文章列表顶部显示的标题
  // 如果有关键字，则显示搜索关键字的结果
  // 如果有 tag 关键字，显示：搜索 "tag" 的结果
  // 如果同时有 tag 和 keyword，显示：搜索 "tag" 和 "keyword" 的结果
  // 否则显示：全部文章
  if (keyword.value && tagKeyword.value) {
    return `搜索 "${tagKeyword.value}" 标签和 "${keyword.value}" 的结果`
  } else if (keyword.value) {
    return `搜索 "${keyword.value}" 的结果`
  } else if (tagKeyword.value) {
    return `搜索 "${tagKeyword.value}" 标签的结果`
  } else {
    return '全部文章'
  }
})

function clearKeywords() {
  keyword.value = ''
  tagKeyword.value = ''
}

const hasKeywords = computed(() => {
  return keyword.value || tagKeyword.value
})

useHead({
  title: '全部文章',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Blog',
    },
  ],
})
</script>

<template>
  <div>
    <!-- 
      👆🏻 在 NuxtLayout 外部要加一个根元素，否则会导致页面无法过渡。
      NOTE：这段注释也不能移到 div 的前面，因为注释也是一个 Node 
    -->
    <NuxtLayout name="default">
      <main class="grid grid-cols-12 pt-12 md:gap-8 2xl:gap-16">
        <div class="border1 col-span-9 border-dashed">
          <!-- Title -->
          <section class="mb-12 flex items-center justify-between">
            <div class="truncate text-4xl font-bold">
              {{ title }}
            </div>
            <a
              v-if="hasKeywords"
              href="#"
              class="app-link flex-shrink-0 text-primary-500"
              @click="clearKeywords"
              >查看全部</a
            >
          </section>

          <!-- 文章列表 -->
          <template v-if="articlesByYears?.size > 0">
            <section
              v-for="[year, articles] in articlesByYears"
              :key="year"
              class="mb-16 text-lg"
            >
              <div class="mb-4 font-serif text-2xl">{{ year }} (12)</div>
              <ul>
                <li
                  v-for="article in articles"
                  :key="article._path"
                  class="my-2 flex items-center gap-4"
                >
                  <span class="flex-shrink-0 font-serif text-gray-500">{{
                    dayjs(article.date).format('MM-DD')
                  }}</span>
                  <NuxtLink
                    :to="article._path"
                    class="app-link inline truncate text-base font-medium tracking-tight text-black dark:text-gray-300"
                  >
                    {{ article._path }} - {{ article.title }}
                  </NuxtLink>
                </li>
              </ul>
            </section>
          </template>
          <div v-else>没有文章</div>
        </div>
        <!-- Aside navigation -->
        <aside
          class="sticky col-span-3 h-max max-h-[calc(100vh-8rem)] lg:block"
        >
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
              v-model="keyword"
            />
            <!-- 这里是不是不需要 flex？ -->
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <Icon
                v-if="keyword"
                name="close"
                class="h-5 w-5 cursor-pointer text-gray-500 group-focus:text-primary-600 dark:text-gray-400 dark:group-focus:text-primary-300"
                @click="keyword = ''"
              />
            </div>
          </div>

          <!-- Tags (Caption + List) -->
          <div class="border-dashed p-0 dark:border-gray-700">
            <h1 class="mb-4 font-medium text-gray-500">所有标签</h1>
            <BlogTagList :tags="tags" @select="(tag) => (tagKeyword = tag)" />
          </div>
        </aside>
      </main>
    </NuxtLayout>
  </div>
</template>
