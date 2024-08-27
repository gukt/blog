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
    <article class="container">
      <div class="mx-auto max-w-5xl">
        <main
          class="relative lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 xl:gap-20 py-6 lg:py-10"
        >
          <!-- Content -->
          <div id="content">
            <!-- 文章内容 -->
            <ContentDoc>
              <template v-slot="{ doc }">
                <!-- 发布时间 + 标题 + 作者 -->
                <header class="space-y-4">
                  <!-- Title -->
                  <h1 class="inline-block font-heading text-4xl lg:text-5xl">
                    {{ doc.title }}
                  </h1>
                  <!-- Date -->
                  <time
                    :datetime="useDateFormat(doc.date, 'YYYY-MM-DD')"
                    class="block text-sm text-muted-foreground"
                  >
                    {{ useDateFormat(doc.date, 'YYYY 年 M 月 DD 日') }} 发布
                  </time>
                  <!-- Summaries -->
                  <p class="text-xl text-muted-foreground">
                    Learn how to use ContentLayer to build a blog with Next.js
                  </p>
                </header>
                <hr class="my-4" />
                <!-- Article main content -->
                <!-- 我们可以全局修改 a, code, blockquote 等样式：https://github.com/tailwindlabs/tailwindcss-typography?tab=readme-ov-file#element-modifiers -->
                <ContentRenderer
                  :value="doc"
                  tag="main"
                  class="my-8 prose prose-slate dark:prose-invert prose-img:rounded-xl xxprose-headings:text-green-500 prose-a:text-blue-300 prose-a:no-underline prose-a:font-bold prose-code:text-blue-500 prose-blockquote:text-muted-foreground"
                />
                <PostNavigationLinks />
              </template>
            </ContentDoc>
          </div>
          <!-- NOTE: 这里需要将 PostToc 组件作为子元素放到一个 div 里面，不能将 TOC 作为 grid 的单独一列，否则会导致 sticky 不生效，我想象的可能原因是作为 grid 的列不能一会按文档流排列，一会又脱离文档流，这样会导致 grid 无法布局或引起后续列的抖动，解决的办法很简单，就是将 sticky 元素（这里是 TOC）放到一个父元素即可。-->
          <div>
            <!-- 因为正文内容距离 header 是 pt-10, 而 header 的高度又为 h-16(64px) ,因此，这里的 sticky 定位的 top 偏移应该设置为 10 + 26，添加 border 我们可以看出，TOC 的高度是内容高度，而我们想要将其高度设置为屏幕高度减去顶部边框距离屏幕顶部的高度（26/4=6.5rem）,注意：calc里面的表达式算术运算符左右不能有空格，否则不能计算-->
            <!-- In Tailwind CSS, when using the calc() function within class names, spaces are not allowed between operators or within the calculation. This is due to how CSS classes are parsed by the browser. The browser treats spaces as class delimiters, which means it will split the class name at any space, leading to invalid or unintended class names. 在 Tailwind CSS 中，当在类名中使用 calc() 函数时，运算符之间或计算中的空格是不允许的。这是因为浏览器解析 CSS 类时，会将空格视为类分隔符，这意味着浏览器会在空格处将类名分开，导致类名无效或产生意外的类名。​⬤
            -->
            <PostToc id="toc" class="sticky top-26 border" />
          </div>
        </main>
      </div>
    </article>

    <article class="container hidden relative max-w-3xl py-8 lg:py-12">
      <div class="absolute -left-[200px] hidden xl:block h-full">
        <button
          class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent h-10 py-2 px-4 xl:inline-flex sticky top-24"
        >
          <Icon name="uil:angle-left-b" class="w-4 h-4 mr-2" />
          See all posts
        </button>
      </div>
      <!-- NOTE: 这里一定要设置高度，否则内部的 sticky 不生效 -->
      <div class="absolute -right-60 top-16 hidden xl:block h-full border-none">
        <PostToc class="w-56 sticky top-24" />
      </div>

      <!-- 文章内容 -->
      <ContentDoc>
        <template v-slot="{ doc }">
          <!-- 发布时间 + 标题 + 作者 -->
          <header>
            <!-- Date -->
            <time
              :datetime="useDateFormat(doc.date, 'YYYY-MM-DD')"
              class="block text-sm text-muted-foreground"
            >
              {{ useDateFormat(doc.date, 'YYYY 年 M 月 DD 日') }} 发布
            </time>
            <!-- Title -->
            <h1
              class="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl"
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
                  <p class="font-medium">谷大胡子</p>
                  <p class="text-[12px] text-muted-foreground">@gukaitong</p>
                </div>
              </a>
            </div>
          </header>
          <ContentRenderer
            :value="doc"
            tag="main1"
            excerpt="false"
            class="my-8 prose dark:prose-invert"
          />
          <PostNavigationLinks />
        </template>
      </ContentDoc>
    </article>

    <BackToTop />
  </NuxtLayout>
</template>
