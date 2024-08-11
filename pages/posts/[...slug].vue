<script setup lang="ts">
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
  // next,
  // prev,
} = useContent()

const router = useRouter()

// console.log('globals', globals)
// console.log('navigation', navigation)
// console.log('surround', surround)
// console.log('page', page)
// console.log('excerpt', excerpt)
// console.log('toc', toc)
// console.log('type', type)
// console.log('layout', layout)
// console.log('next', next)
// console.log('prev', prev)

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
        <article
          id="post-content"
          class="prose dark:prose-invert max-w-none py-6 lg:py-8"
        >
          <header class="flex flex-col gap-3">
            <!-- 返回按钮 -->
            <a
              @click.prevent="router.go(-1)"
              class="cursor-pointer font-normal text-base opacity-50"
            >
              返回
            </a>
            <!-- 文章标题 -->
            <h1 class="mb-0">{{ doc.title }}</h1>
            <!-- 发布时间 -->
            <time class="opacity-50">
              {{ useDateFormat(doc.date, 'YYYY-MM-DD') }}
            </time>
          </header>

          <main class="relative">
            <!-- TOC -->
            <PostToc class="" />
            <!-- 文章内容 -->
            <ContentRenderer :value="doc" />
            <PostNavigationLinks />
          </main>

          <footer>
            <!-- Horizontal line -->
            <div class="border-t border-border/50 my-16"></div>
            <!-- 评论区 -->
            <div class="giscus mt-16"></div>
          </footer>
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
    <BackToTop />
  </NuxtLayout>
</template>
