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
        <article class="container relative max-w-3xl py-6 lg:py-8">
          <!-- <header class="flex flex-col gap-3">
            <a
              @click.prevent="router.go(-1)"
              class="cursor-pointer font-normal text-base opacity-50"
            >
              返回
            </a>
            <h1 class="mb-0">{{ doc.title }}</h1>
            <time class="opacity-50">
              {{ useDateFormat(doc.date, 'YYYY-MM-DD') }}
            </time>
          </header> -->

          <!-- 发布时间 + 标题 + 作者 -->
          <div>
            <!-- Date: publish (and update date) -->
            <time
              :datetime="useDateFormat(doc.date, 'YYYY-MM-DD')"
              class="block text-sm text-muted-foreground"
            >
              {{ useDateFormat(doc.date, 'YYYY 年 M 月 DD 日') }} 发布
            </time>
            <!-- Title -->
            <h1
              class="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl font-thin"
            >
              {{ doc.title }}
            </h1>
            <!-- Author -->
            <div class="mt-4 flex space-x-4">
              <a
                class="flex items-center space-x-2 text-sm"
                href="https://twitter.com/shadcn"
              >
                <img
                  alt="谷大胡子"
                  loading="lazy"
                  width="42"
                  height="42"
                  decoding="async"
                  class="rounded-full bg-white"
                  style="color: transparent"
                  srcset="
                    /images/avatar/shadcn.webp 1x,
                    /images/avatar/shadcn.webp 2x
                  "
                  src="/images/avatar/shadcn.webp"
                />
                <div class="flex-1 text-left leading-tight">
                  <p class="font-medium">shadcn</p>
                  <p class="text-[12px] text-muted-foreground">
                    @<!-- -->shadcn
                  </p>
                </div>
              </a>
            </div>
          </div>

          <main class="relative prose dark:prose-invert">
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
