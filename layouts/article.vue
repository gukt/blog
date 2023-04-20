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

const router = useRouter()
const route = useRoute()

// const routeFrom = ref()

// onMounted(() => {
//   // q: 获取从哪个路由调转到当前页面的？
//   // a: useRoute().path
//   console.log('mounted', 'useRoute().path', useRoute().path)

//   // // 仅记录一下从那个页面导航到 article 页面的，用于 goBack
//   // router.afterEach((to, from) => {
//   //   console.log('to.path', to.path, 'from.path', from.path)
//   //   if (to.path !== from.path) {
//   //     routeFrom.value = from
//   //   }
//   // })
// })

// TODO  类型搞一个下
// const routerAfterEachHook = (to: any, from: any) => {
//   console.log('to.path', to.path, 'from.path', from.path)
//   debugger
//   if (to.path !== from.path) {

//     routeFrom.value = from
//   }
// }
// router.afterEach(routerAfterEachHook)

// onBeforeRouteUpdate(() => {
//   console.log('onBeforeRouteUpdate', 'useRoute().path', useRoute().path)
//   // 仅记录一下从那个页面导航到 article 页面的，用于 goBack
//   router.afterEach(routerAfterEachHook)
// })

// onBeforeMount(() => {
//   console.log('before mount', 'useRoute().path', useRoute().path)
//   // 仅记录一下从那个页面导航到 article 页面的，用于 goBack
//   router.afterEach((to, from) => {
//     console.log('to.path', to.path, 'from.path', from.path)
//     if (to.path !== from.path) {
//       routeFrom.value = from
//     }
//   })
// })

const { navigation } = useContent()

const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers()

function goBack() {
  // console.log('routeFrom', routeFrom.value)
  // 循环后退，如果后退的路由和本页路由地址相同（而只是锚点不同），则继续后退，直到找到和本页路由地址不同的那个；如果没有历史记录，则跳转到首页

  // router.push(routeFrom.value.path)
  router.go(-1)
}

const foo = await $fetch('/api/foo')
console.log('foo', foo)
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

    foo: {{ foo }}
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

    <!-- Article layout -->
    <div id="article-layout" class="app-container">
      <div class="grid grid-cols-8 gap-8 pt-12 xl:gap-16">
        <!-- Article-->
        <div
          id="article-main"
          class="col-span-8 w-full transition-all"
          :class="{ 'lg:col-span-6': tocVisible }"
        >
          <div
            class="inline-flex cursor-pointer items-center gap-2 rounded text-primary-500 selection:mb-4"
            @click.prevent="goBack"
          >
            <Icon name="heroicons:arrow-left" class="h-4 w-4" />
            <span>返回</span>
          </div>

          <pre>
            <!-- {{  navigation }} -->
          </pre>
          navBottomLink: {{ navBottomLink(navigation) }}

          <!-- {{ navDirFromPath() }} -->
          <!-- {{ navPageFromPath() }} -->
          <!-- {{ navKeyFromPath }} -->

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
            <!-- <AppSocialSharing /> -->
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
