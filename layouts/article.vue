<script setup lang="ts">
// import { foo } from '~/types/global'
// console.log('foo from global', foo)
import { ref } from 'vue'

import { Gender, Article } from '~/types/global'

const { page, toc } = useContent()

const tocVisible = ref(true)
const colorMode = useColorMode()

// const foo = ref()
// const bar = ref(1)
// const foo1 = ref(true)
// const foo2 = ref('foo2')

// const hasToc = ref(false)

// watch(toc, (toc) => {
//   console.log('toc changed.', 'tocVisible', tocVisible, 'toc.links.length', toc?.links?.length)

//   hasToc.value = tocVisible.value && toc?.links?.length
// })
// const hasToc = computed(() => tocVisible && toc?.links?.length)
// const hasToc = computed(() => page.value?.toc !== false && page.value?.body?.toc?.links?.length >= 2)

// 如果这是一个本地自定义元素，请确保通过编译器选项将其排除在组件解析之外。是自定义元素。

// 只有大于等于 2 个链接才显示目录
const hasToc = computed(() => toc.value?.links?.length >= 2)

function toggleToc() {
  tocVisible.value = !tocVisible.value
}

function scrollToTop() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}



// onMounted(() => {
//   readingTime = calculateReadingTime(textLength.value, 200)
// }),

useHead({
  // link: [
  //   {
  //     rel: 'stylesheet',
  //     href: 'https://giscus.app/client.css',
  //   }
  // ],
  style: [
    `.app-prose h1 { 
      display: none !important; 
    }`,
  ],
  script: [
    // 这是添加脚本的另一种方式，直接给出地址和各种属性
    {
      src: 'https://giscus.app/client.js',
      'data-repo': 'gukt/blog',
      'data-repo-id': 'R_kgDOJIrnKw',
      'data-category': 'Announcements',
      'data-category-id': 'DIC_kwDOJIrnK84CU-fj',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': colorMode.preference,
      'data-loading': 'lazy',
      'data-lang': 'zh-CN',
      crossorigin: 'anonymous',
      defer: true,
    },
  ],
})

watch(
  () => colorMode.preference,
  (val) => {
    console.log('color mode', colorMode.preference)
  }
)
</script>

<!-- https://content.nuxtjs.org/guide/writing/document-driven#layout-binding -->
<template>
  <div>
    <!-- <p class="app-text-darken-0">远程私有仓库下载镜像时</p>
      <p class="app-text-darken-1">远程私有仓库下载镜像时</p>
      <p class="app-text-darken-2">远程私有仓库下载镜像时</p>
      <p class="app-text-darken-3">远程私有仓库下载镜像时</p>
      <p class="app-text-darken-4">远程私有仓库下载镜像时</p>
      <p class="app-text-darken-5">远程私有仓库下载镜像时</p>
      <p class="app-text-darken-6">远程私有仓库下载镜像时</p> -->

    <!-- 顶部固定的 TOC -->
    <HeadlessPopover
      class="app-bg-primary-75 sticky left-0 top-16 z-50 w-full border-y border-gray-100 pl-4 text-gray-200 backdrop-blur-md dark:border-gray-900 dark:text-gray-500 lg:hidden"
    >
      <HeadlessPopoverButton class="flex items-center gap-4 py-3 font-bold">
        <!-- <AppBreadcrumbs /> -->
        <Icon name="heroicons:list-bullet" class="h-6 w-6" />
        内容目录
        <!-- <Icon name="arrow-right" class="h-6 w-6" /> -->
      </HeadlessPopoverButton>

      <HeadlessPopoverPanel
        class="app-bg-primary absolute z-10 border border-dashed"
      >
        <ArticleTocLinks :links="toc.links" />
      </HeadlessPopoverPanel>
    </HeadlessPopover>

    <!-- 添加一个回退的 Link 按钮 -->
    <div class="sticky top-16 z-50">
      <NuxtLink @click.native.prevent="$router.go(-1)">返回</NuxtLink>
    </div>

    <!-- Article layout -->
    <div id="article-layout" class="app-container">
      <div class="grid grid-cols-8 gap-8 pt-12 xl:gap-16">
        <!-- Article-->
        <div
          id="article-main"
          class="col-span-8 w-full transition-all"
          :class="{ 'lg:col-span-6': tocVisible }"
        >
          <!-- Article title -->
          <h1
            class="mb-2 line-clamp-3 text-4xl font-bold leading-tight tracking-tight"
          >
            {{ page.title }}
          </h1>
          <!-- Article meta -->
          <ArticleMeta :article="page" class="mb-4" />

          <!-- Article cover -->
          <!-- <img v-if="page.cover" :src="page.cover" class="mb-8" />
          [图片来源：https://images.unsplash.com/photo-1661956602868-6ae368943878 by [Mailchimp](https://unsplash.com/@mailchimp)]{class="text-sm text-gray-500"} -->

          <!-- Article body -->
          <article class="app-prose">
            <slot />
          </article>

          <!-- 邮件订阅 -->
          <!-- <TheSubscribeForm /> -->

          <!-- License -->
          <ArticleLicense class="my-12" />

          <!-- Tag list -->
          <AppTagList2
            outlined
            :tags="page.tags"
            class="mb-8 text-sm font-medium"
          />

          <!-- View on github + Social sharing -->
          <div class="flex justify-between border-b border-gray-900 pb-4">
            <a
              class="app-link"
              :href="`https://github.com/gukt/blog/tree/main/content/${page._file}`"
              >在 Github 上查看</a
            >
            <!-- <div>
              <AppSocialSharing />
            </div> -->
          </div>
          <!-- Prev/Next -->
          <ArticlePrevNext class="my-12" />

          <!-- Discus -->
          <div class="giscus" />
        </div>
        <!-- TOC -->
        <ArticleToc
          v-if="tocVisible && hasToc"
          class="sticky top-24 col-span-2 h-max max-h-[calc(100vh-8rem)] rounded-lg border border-dashed opacity-0 transition-all dark:border-gray-700 lg:block"
          :class="{ '!opacity-100': tocVisible }"
          @close="toggleToc"
        />
      </div>
    </div>
  </div>
</template>
