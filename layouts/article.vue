<script setup lang="ts">
const { page, toc } = useContent()

const tocVisible = ref(true)
const colorMode = useColorMode()

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

// TODO sharing and networks variables does not work currently
const sharing = {
  url: 'https://news.vuejs.org/issues/180',
  title:
    'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
  description:
    'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
  quote: "The hot reload is so fast it's near instant. - Evan You",
  hashtags: 'vuejs,vite,javascript',
  twitterUser: 'youyuxi',
}

// TODO 移到配置文件中
const networks = [
  {
    network: 'baidu',
    name: 'Baidu',
    icon: 'fas fah fa-lg fa-paw',
    color: '#2529d8',
  },
  {
    network: 'buffer',
    name: 'Buffer',
    icon: 'fab fah fa-lg fa-buffer',
    color: '#323b43',
  },
  {
    network: 'email',
    name: 'Email',
    icon: 'far fah fa-lg fa-envelope',
    color: '#333333',
  },
  {
    network: 'evernote',
    name: 'Evernote',
    icon: 'fab fah fa-lg fa-evernote',
    color: '#2dbe60',
  },
  {
    network: 'facebook',
    name: 'Facebook',
    icon: 'fab fah fa-lg fa-facebook-f',
    color: '#1877f2',
  },
  {
    network: 'flipboard',
    name: 'Flipboard',
    icon: 'fab fah fa-lg fa-flipboard',
    color: '#e12828',
  },
  {
    network: 'hackernews',
    name: 'HackerNews',
    icon: 'fab fah fa-lg fa-hacker-news',
    color: '#ff4000',
  },
  {
    network: 'instapaper',
    name: 'Instapaper',
    icon: 'fas fah fa-lg fa-italic',
    color: '#428bca',
  },
  {
    network: 'line',
    name: 'Line',
    icon: 'fab fah fa-lg fa-line',
    color: '#00c300',
  },
  {
    network: 'linkedin',
    name: 'LinkedIn',
    icon: 'fab fah fa-lg fa-linkedin',
    color: '#007bb5',
  },
  {
    network: 'messenger',
    name: 'Messenger',
    icon: 'fab fah fa-lg fa-facebook-messenger',
    color: '#0084ff',
  },
  {
    network: 'odnoklassniki',
    name: 'Odnoklassniki',
    icon: 'fab fah fa-lg fa-odnoklassniki',
    color: '#ed812b',
  },
  {
    network: 'pinterest',
    name: 'Pinterest',
    icon: 'fab fah fa-lg fa-pinterest',
    color: '#bd081c',
  },
  {
    network: 'pocket',
    name: 'Pocket',
    icon: 'fab fah fa-lg fa-get-pocket',
    color: '#ef4056',
  },
  {
    network: 'quora',
    name: 'Quora',
    icon: 'fab fah fa-lg fa-quora',
    color: '#a82400',
  },
  {
    network: 'reddit',
    name: 'Reddit',
    icon: 'fab fah fa-lg fa-reddit-alien',
    color: '#ff4500',
  },
  {
    network: 'skype',
    name: 'Skype',
    icon: 'fab fah fa-lg fa-skype',
    color: '#00aff0',
  },
  {
    network: 'sms',
    name: 'SMS',
    icon: 'far fah fa-lg fa-comment-dots',
    color: '#333333',
  },
  {
    network: 'stumbleupon',
    name: 'StumbleUpon',
    icon: 'fab fah fa-lg fa-stumbleupon',
    color: '#eb4924',
  },
  {
    network: 'telegram',
    name: 'Telegram',
    icon: 'fab fah fa-lg fa-telegram-plane',
    color: '#0088cc',
  },
  {
    network: 'tumblr',
    name: 'Tumblr',
    icon: 'fab fah fa-lg fa-tumblr',
    color: '#35465c',
  },
  {
    network: 'twitter',
    name: 'Twitter',
    icon: 'fab fah fa-lg fa-twitter',
    color: '#1da1f2',
  },
  {
    network: 'viber',
    name: 'Viber',
    icon: 'fab fah fa-lg fa-viber',
    color: '#59267c',
  },
  { network: 'vk', name: 'Vk', icon: 'fab fah fa-lg fa-vk', color: '#4a76a8' },
  {
    network: 'weibo',
    name: 'Weibo',
    icon: 'fab fah fa-lg fa-weibo',
    color: '#e9152d',
  },
  {
    network: 'whatsapp',
    name: 'Whatsapp',
    icon: 'fab fah fa-lg fa-whatsapp',
    color: '#25d366',
  },
  {
    network: 'wordpress',
    name: 'Wordpress',
    icon: 'fab fah fa-lg fa-wordpress',
    color: '#21759b',
  },
  {
    network: 'xing',
    name: 'Xing',
    icon: 'fab fah fa-lg fa-xing',
    color: '#026466',
  },
  {
    network: 'yammer',
    name: 'Yammer',
    icon: 'fab fah fa-lg fa-yammer',
    color: '#0072c6',
  },
  {
    network: 'fakeblock',
    name: 'Custom Network',
    icon: 'fab fah fa-lg fa-vuejs',
    color: '#41b883',
  },
]

useHead({
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
    <!-- 顶部固定的 TOC -->
    <HeadlessPopover
      class="app-bg-primary-75 sticky top-16 left-0 z-50 w-full border-b border-gray-100 text-gray-200 backdrop-blur-md dark:border-gray-900 lg:hidden"
    >
      <HeadlessPopoverButton class="flex items-center gap-4 py-3 font-bold">
        <Icon name="menu" class="h-3 w-3" />
        博客 / 文章 / 内容目录
        <Icon name="arrow-right" class="h-3 w-3" />
      </HeadlessPopoverButton>

      <HeadlessPopoverPanel
        class="app-bg-primary absolute z-10 border border-dashed"
      >
        <ArticleTocLinks :links="toc.links" />
      </HeadlessPopoverPanel>
    </HeadlessPopover>

    <!-- Article layout -->
    <div id="article-layout" class="app-container">
      <div class="grid grid-cols-9 gap-8 pt-8">
        <!-- <pre>{{ page }}</pre> -->
        <!-- Article body -->
        <div
          id="article-main"
          class="col-span-9 w-full transition-all"
          :class="{ 'lg:col-span-7': tocVisible }"
        >
          <section>
            <h1
              class="line-clamp-3 mb-2 text-4xl font-bold leading-tight tracking-tight"
            >
              {{ page.title }}
            </h1>
            <!-- 文章作者，发布时间等说明 -->
            <div
              class="flex flex-col gap-2 text-gray-500 sm:flex-row sm:justify-between"
            >
              <!-- 作者信息 -->
              <span class="overflow-hidden">
                Gu kaitong 发表于
                <time :datetime="page.date">
                  {{ dateOnly(page.date) }}
                </time>
              </span>
              <AppTagList :tags="page.tags" />
            </div>
            <!-- 文章内容 -->
            <article class="app-prose">
              <slot />
            </article>

            <div class="my-8 flex justify-between">
              <a
                class="app-link"
                :href="`https://github.com/gukt/blog/tree/main/content/${page._file}`"
                >View on Github</a
              >
              <div>
                TODO 社交分享按钮
                <!-- <ShareNetwork
                v-for="network in networks"
                :network="network.network"
                :key="network.network"
                :style="{ backgroundColor: network.color }"
                :url="sharing.url"
                :title="sharing.title"
                :description="sharing.description"
                :quote="sharing.quote"
                :hashtags="sharing.hashtags"
                :twitterUser="sharing.twitterUser"
              >
                <i :class="network.icon"></i>
                <span>{{ network.name }}</span>
              </ShareNetwork> -->
              </div>
            </div>
          </section>

          <!-- 文章尾部 -->
          <footer>
            <!-- License -->
            <ArticleLicense class="my-12" />
            <!-- Prev/Next -->
            <ArticlePrevNext class="my-12" />

            <!-- 邮件订阅 -->
            <form
              style="border: 1px solid #ccc; padding: 3px; text-align: center"
              action="https://tinyletter.com/gukt"
              method="post"
              target="popupwindow"
              onsubmit="window.open('https://tinyletter.com/gukt', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
            >
              <label for="tlemail"
                >每月一份邮件，分享我对如何构建被动收入的思考、推荐文章及资源，欢迎订阅
              </label>
              <input
                type="text"
                style="width: 140px"
                name="email"
                id="tlemail"
              />
              <input type="hidden" value="1" name="embed" /><input
                type="submit"
                value="Subscribe"
              />
            </form>

            <!-- Giscus container, 带有 giscus 类的元素将自动成为评论区域 -->

            <!-- 此处如果直接使用 Script标签代替 Component，虽然也可以工作，但是弹出警告，而是用  Componnet 就不会 -->
            <!-- TODO 看看 -->
            aaa: {{ colorMode.preference }}

            <!-- TODO 动态切换不起效果 -->
            <!-- <Component
              is="script"
              src="https://giscus.app/client.js"
              data-repo="gukt/blog"
              data-repo-id="R_kgDOJIrnKw"
              data-category="Announcements"
              data-category-id="DIC_kwDOJIrnK84CU-fj"
              data-mapping="pathname"
              data-strict="0"
              data-reactions-enabled="1"
              data-emit-metadata="0"
              data-input-position="top"
              :data-theme="colorMode.preference === 'dark'? 'dark': 'light'"
              data-lang="zh-CN"
              crossorigin="anonymous"
              async
            >
            </Component> -->
            <div class="giscus" />

            <!-- <Giscus
              repo="gukt/blog"
              repo-id="R_kgDOJIrnKw"
              category="Announcements"
              category-id="DIC_kwDOJIrnK84CU-fj"
              mapping="pathname"
              strict="0"
              reactions-enabled="1"
              emit-metadata="0"
              input-position="top"
              theme="dark"
              lang="zh-CN"
              crossorigin="anonymous"
              async
            /> -->
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
    </div>
  </div>
</template>

<style>
.app-prose h1 {
  display: none !important;
}

/* FAB */
.app-fab {
  @apply flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-100 dark:bg-gray-400   dark:text-gray-900;
}

.app-fab .icon {
  @apply h-6 w-6;
}
</style>
