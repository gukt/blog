<script setup>
const {
  // Global references
  globals,
  navigation,
  surround,
  page,
  // Computed properties from `page` key
  excerpt,
  toc,
  type,
  layout,
  // Computed properties from `surround` key
  next,
  prev,
} = useContent()

const router = useRouter()

console.log('globals', globals)
console.log('navigation', navigation)
console.log('surround', surround)
console.log('page', page)
console.log('excerpt', excerpt)
console.log('toc', toc)
console.log('type', type)
console.log('layout', layout)
console.log('next', next)
console.log('prev', prev)

useHead({
  // 添加 giscus 评论区：https://giscus.app/zh-CN
  script: [
    {
      src: 'https://giscus.app/client.js',
      async: true,
      crossorigin: 'anonymous',
      'data-repo': 'gukt/blog',
      'data-repo-id': 'R_kgDOJIrnKw',
      'data-category': 'Announcements',
      'data-category-id': 'DIC_kwDOJIrnK84CU-fj',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'zh-CN',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <ContentDoc>
      <template v-slot="{ doc }">
        <!-- prose 上默认定义了 max-w, 这里清除掉它 -->
        <article class="prose dark:prose-invert max-w-none py-6 lg:py-8">
          <div class="flex flex-col gap-4">
            <a @click.prevent="router.go(-1)" class="cursor-pointer font-normal text-base opacity-50"> 返回 </a>
            <h1 class="mb-0">{{ doc.title }}</h1>
            <time class="opacity-50">{{ useDateFormat(doc.date, 'YYYY-MM-DD') }}</time>
          </div>

          <!-- <div class="flex">
            <div class="flex-1 py-4 border w-1/2 text-left hover:bg-secondary/50 cursor-pointer">
              <NuxtLink v-if="prev" :to="prev._path" title="上一篇">
                <Icon name="lucide:chevron-left" class="w-4 h-4 opacity-75" />
                {{ prev.title }}
              </NuxtLink>
            </div>
            <div class="flex-1 py-4 border text-right hover:bg-secondary/50 cursor-pointer">
              <NuxtLink v-if="next" :to="next._path" title="下一篇" class="inline-flex items-center">
                {{ next.title }}
                <Icon name="lucide:chevron-right" class="w-5 h-5 opacity-75 block" />
              </NuxtLink>
            </div>
          </div> -->
          <main>
            <ContentRenderer :value="doc" />

            <!-- TODO 移到单独的组件中 -->
            <div class="flex gap-8 mt-16">
              <NuxtLink
                :to="prev._path"
                title="上一篇"
                class="w-1/2 text-left inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
              >
                <Icon name="lucide:move-left" class="w-4 h-4" />
                {{ prev.title }}
              </NuxtLink>
              <NuxtLink
                :to="next._path"
                title="下一篇"
                class="w-1/2 text-right inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
              >
                {{ next.title }}
                <Icon name="lucide:move-right" class="h-4 w-4" />
              </NuxtLink>
            </div>
          </main>

          <!-- Horizontal line -->
          <div class="border-t border-border/50 my-16"></div>

          <!-- 评论区 -->
          <div class="giscus mt-16"></div>
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
    <BackToTop />
  </NuxtLayout>
</template>
