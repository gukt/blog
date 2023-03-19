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
</script>

<!-- https://content.nuxtjs.org/guide/writing/document-driven#layout-binding -->
<template>
  <!-- Article layout -->
  <div id="article-layout" class="app-container pt-8">
    <div class="grid grid-cols-8 gap-8">
      <!-- <pre>{{ page }}</pre> -->
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

          <!-- Giscus container-->
          <div class=".giscus">
            <!-- Add giscus script
      @see https://giscus.app/ 
    -->
            <Script
              src="https://giscus.app/client.js"
              data-repo="gukt/blog"
              data-repo-id="R_kgDOJIrnKw"
              data-category="Announcements"
              data-category-id="DIC_kwDOJIrnK84CU-fj"
              data-mapping="title"
              data-strict="0"
              data-reactions-enabled="1"
              data-emit-metadata="0"
              data-input-position="bottom"
              data-theme="preferred_color_scheme"
              data-lang="zh-CN"
              crossorigin="anonymous"
              async
            >
            </Script>
          </div>
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
