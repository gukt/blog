<script setup lang="ts">
import { useDateFormat } from '#imports'

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
                <!-- NOTE：这里的 max-w-none 很重要，因为 prose 默认限定了最大宽度为 650 px，而在我们的 grid 布局中，当 toc 不显示时，我们希望左侧占满剩宽度，所以要去掉 prose 上预定的最大宽度限制。 -->
                <ContentRenderer
                  :value="doc"
                  tag="main"
                  class="my-8 prose prose-slate dark:prose-invert max-w-none prose-img:rounded-xl xxprose-headings:text-green-500 prose-a:text-blue-300 prose-a:no-underline prose-a:font-bold prose-code:text-blue-500 prose-blockquote:text-muted-foreground"
                />
                <PostNavigationLinks />
              </template>
            </ContentDoc>
          </div>
          <!-- NOTE: 这里需要将 PostToc 组件作为子元素放到一个 div 里面，不能将 TOC 作为 grid 的单独一列，否则会导致 sticky 不生效，我想象的可能原因是作为 grid 的列不能一会按文档流排列，一会又脱离文档流，这样会导致 grid 无法布局或引起后续列的抖动，解决的办法很简单，就是将 sticky 元素（这里是 TOC）放到一个父元素即可。-->
          <!-- 这里的 lg:block 虽然不是精确到宽度缩小到正好和 TOC 有边界重合时就立即隐藏（参考的 https://tx.shadcn.com/guides/build-blog-using-contentlayer-mdx 也和我的效果一样，它也没有做到），所以不用纠结这里那么精确，如果真要精确，自定义一个 break point 专门用以 toc 的显示和隐藏控制更精确点的像素，不过没那个必要 -->
          <div class="hidden text-sm lg:block">
            <!-- 因为正文内容距离 header 是 pt-10, 而 header 的高度又为 h-16(64px) ,因此，这里的 sticky 定位的 top 偏移应该设置为 10 + 26，添加 border 我们可以看出，TOC 的高度是内容高度，而我们想要将其高度设置为屏幕高度减去顶部边框距离屏幕顶部的高度（26/4=6.5rem）,注意：calc里面的表达式算术运算符左右不能有空格，否则不能计算，CSS 中的 calc 是允许运算符前后有空格的，但是 tailwind 中不可以，因为 tailwind class 中会以空格作为类的分隔符 -->
            <!-- In Tailwind CSS, when using the calc() function within class names, spaces are not allowed between operators or within the calculation. This is due to how CSS classes are parsed by the browser. The browser treats spaces as class delimiters, which means it will split the class name at any space, leading to invalid or unintended class names. 在 Tailwind CSS 中，当在类名中使用 calc() 函数时，运算符之间或计算中的空格是不允许的。这是因为浏览器解析 CSS 类时，会将空格视为类分隔符，这意味着浏览器会在空格处将类名分开，导致类名无效或产生意外的类名。​⬤
            -->
            <PostToc
              id="toc"
              class="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10 border"
            />
          </div>
        </main>
      </div>
    </article>
    <BackToTop />
  </NuxtLayout>
</template>
