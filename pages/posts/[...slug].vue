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
          <a @click.prevent="router.go(-1)" class="pt-8 cursor-pointer">返回</a>
          <h1 class="mb-2 mt-4">{{ doc.title }}</h1>
          <time class="opacity-50">{{ useDateFormat(doc.date, 'YYYY-MM-DD') }}</time>
          <main>
            <ContentRenderer :value="doc" />

            <!-- TODO 移到外层区，因为它需要占满屏幕宽度 -->
            <!-- TODO 移到单独的组件中 -->
            <div class="flex justify-between my-16">
              <NuxtLink v-if="prev" :to="prev._path" title="上一篇" class="flex items-center gap-2">
                <Icon name="lucide:chevron-left" class="w-4 h-4 stroke-2 opacity-75" />
                {{ prev.title }}</NuxtLink
              >
              <NuxtLink v-if="next" :to="next._path" title="下一篇" class="flex items-center gap-2">
                {{ next.title }}
                <Icon name="lucide:chevron-right" class="w-5 h-5 stroke-2 opacity-75" />
              </NuxtLink>
            </div>
          </main>
          <!-- Horizontal line -->
          <div class="border-t border-border/50 my-16"></div>

          <!-- 评论区 -->
          <div class="giscus"></div>
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
    <BackToTop />
  </NuxtLayout>
</template>
