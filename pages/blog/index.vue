<script setup lang="ts">
// 获取所有文章并按日期排序
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('blog').sort({ date: -1 }).find()
)

// 定义一个项目列表，包含三个项目
const projects = [
  {
    slug: 'card-this',
    img: '/images/blog-post-1.webp',
    title: '2024，新的希望、新的征程',
    // 帮我生成 50 字以内的中文描述，要求简介精炼
    subtitle:
      'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用, 让你的分享更有趣, 同时也是我作为前端程序员的练手作是一个让你可以制作多彩卡片的工具',

    // subtitle:
    //   'CardThis is a tool that allows you to create colorful cards for sharing. It is free and easy to use.',
  },
  {
    slug: 'project-2',
    img: '/images/blog-post-2.webp',
    title: '2023 年终总结, 2024 年展望',
    subtitle:
      'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用, 让你的分享更有趣是一个让你可以制作多彩卡片的工具，免费且易用, 让你的分享更有趣',
  },
  {
    slug: 'project-3',
    img: '/images/blog-post-3.webp',
    title: '我为什么写博客',
    subtitle:
      '一个简约风格的博客，也是我作为以后非前端程序员的练手作品，使用 Nuxt.js 和 Tailwind CSS 构建。是一个让你可以制作多彩卡片的工具，免更有趣',
  },
  {
    slug: 'project-4',
    img: '/images/blog-post-4.webp',
    title: '又去打工出卖时间和自由了!',
    subtitle:
      '万物都可以制作成分享卡片，是一个让你可以制作多彩卡片的工具，免费且易用, 让你的分享更有趣是一个让你可以制作多彩卡片的工具， 分享更带劲',
  },
]
</script>

<template>
  <NuxtLayout>
    <div class="container max-w-4xl py-6 lg:py-10">
      <!-- Heading -->
      <div
        class="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8"
      >
        <div class="flex-1 space-y-4">
          <!-- 参考的样式用的是 md:6xl，显示英文比较好看，但中文似乎更大一些，所以这里缩小一点，使用 md:5xl -->
          <h1 class="font-heading leading-[1.1] text-3xl md:text-5xl">博客</h1>
          <p class="text-lg text-muted-foreground">
            写代码之余，做点小玩具和个人项目，偶尔也聊聊生活感悟。
          </p>
        </div>
      </div>
      <hr class="my-8" />
      <!-- Projects -->
      <div class="grid gap-10 sm:grid-cols-2">
        <article
          v-for="(project, index) in projects"
          :key="index"
          class="group relative flex flex-col space-y-2"
        >
          <img
            alt="Preview Mode for Headless CMS"
            fetchpriority="high"
            width="804"
            height="452"
            decoding="async"
            data-nimg="1"
            class="rounded-md border bg-muted transition-colors"
            :src="project.img"
            style="color: transparent"
          />
          <h2 class="text-2xl font-extrabold">{{ project.title }}</h2>
          <p class="text-muted-foreground">
            <!-- How to implement preview mode in your headless CMS. -->
            {{ project.subtitle }}
          </p>
          <p class="text-sm text-muted-foreground">April 9, 2023</p>
          <a class="absolute inset-0" href="/blog/preview-mode-headless-cms"
            ><span class="sr-only">View Article</span></a
          >
        </article>
      </div>

      <hr class="my-16" />
      <div
        class="lg:hidden mt-8 gap-8 sm:gap-y-16 grid lg:grid-cols-2 lg:items-center"
      >
        <div class="space-y-4">
          <h1 class="font-heading leading-[1.1] text-3xl sm:text-5xl">
            我的博客
          </h1>
          <p
            class="max-w-2xl mt-4 text-md text-foreground/80 flex items-center"
          >
            记录的一些心得和经验，希望能对你有帮助。
            <RssButton />
          </p>
          <!-- 邮件订阅 -->
          <SubscribeForm class="mt-8" />
          <!-- 搜索框 -->
          <!-- <UiSearchInput></UiSearchInput> -->
        </div>
      </div>

      <!-- 全部文章列表，按日期倒序排列 -->
      <PostList :posts="posts" class="my-16" />
    </div>
  </NuxtLayout>
</template>
