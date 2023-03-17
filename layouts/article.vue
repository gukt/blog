<script setup lang="ts">
const { page, toc } = useContent()

const tocVisible = ref(true)

// const hasToc = ref(false)

// watch(toc, (toc) => {
//   console.log('toc changed.', 'tocVisible', tocVisible, 'toc.links.length', toc?.links?.length)

//   hasToc.value = tocVisible.value && toc?.links?.length
// })
// const hasToc = computed(() => tocVisible && toc?.links?.length)

console.log('toc', toc)

// const hasToc = computed(() => page.value?.toc !== false && page.value?.body?.toc?.links?.length >= 2)

// 只有大于等于 2 个链接才显示目录
const hasToc = computed(() => toc.value?.links?.length >= 2)

function toggleToc() {
  tocVisible.value = !tocVisible.value
}
</script>

<!-- https://content.nuxtjs.org/guide/writing/document-driven#layout-binding -->
<template>
  <!-- Article layout -->
  <div id="article-layout" class="app-container pt-8">
    <div class="grid grid-cols-8 gap-8">
      <!-- Article body -->
      <div
        class="col-span-8 w-full transition-all"
        :class="{ 'lg:col-span-6': tocVisible }"
      >
        <section>
          <h1
            class="line-clamp-3 mb-2 text-5xl font-bold leading-tight tracking-tight"
          >
            {{ page.title }}
          </h1>
          <!-- 文章作者，发布时间等说明 -->
          <ArticleCaption :article="page" />
          <!-- 文章内容 -->
          <article class="app-prose">
            <slot />
          </article>
        </section>

        <!-- 文章尾部 -->
        <footer>
          <!-- License -->
          <ArticleLicense class="my-12" />
          <!-- Prev/Next -->
          <ArticlePrevNext class="my-12" />
        </footer>
      </div>
      <!-- TOC -->
      <ArticleToc
        v-if="tocVisible && hasToc"
        class="sticky top-24 col-span-2 h-max max-h-[calc(100vh-8rem)] rounded-lg border border-dashed opacity-0 transition-all dark:border-gray-700 lg:block"
        :class="{ '!opacity-100': tocVisible }"
        @close="toggleToc"
      />
    </div>
    <!-- Float action buttons -->
    <!-- TODO 如何添加淡入淡出效果？ -->
    <!-- TODO 判断滚动条到一定的高度才显示 ‘Top’按钮 -->
    <!-- TODO 这里的图标不够圆，高度宽度不一致 -->
    <div class="fixed bottom-16 right-8 flex flex-col items-center gap-4">
      <!-- 返回顶部 -->
      <a href="#" class="app-fab" title="分享到 Twitter">
        <Icon name="twitter" class="icon" />
      </a>
      <!-- 显示目录 -->
      <a
        href="#"
        title="显示目录"
        @click="toggleToc"
        class="app-fab block opacity-0 transition-all duration-1000"
        :class="{
          // 显示按钮
          '!opacity-100': !tocVisible,
          // 隐藏按钮
          'absolute -translate-x-1/2': tocVisible,
        }"
      >
        <Icon name="menu" class="icon" />
      </a>

      <!-- 返回顶部 -->
      <a href="#" class="app-fab" title="返回顶部">
        <Icon name="arrow-up" class="icon" />
      </a>
    </div>
  </div>
</template>

<style>
.app-prose h1 {
  display: none !important;
}

/* Float action buttons */
.app-fab {
  @apply bg-primary-800 hover:bg-primary-400 rounded-full p-2 text-white;
}

.app-fab .icon {
  @apply h-6 w-6;
}
</style>
