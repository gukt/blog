<script setup lang="ts">
// 获取所有文章并按日期排序
const { data: posts } = await useAsyncData('posts', () =>
  queryContent('posts').sort({ date: -1 }).find()
)

// 定义一个项目列表，包含三个项目
const projects = [
  {
    slug: 'card-this',
    img: 'https://picsum.photos/200/200?random=2',
    title: 'CardThis - Make sharing more fancy',
    subtitle:
      'CardThis is a tool that allows you to create colorful cards for sharing. It is free and easy to use.',
  },
  {
    slug: 'project-2',
    img: 'https://picsum.photos/200/200?random=3',
    title: 'CardThis - 让分享变得更有趣',
    subtitle: 'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。',
  },
  {
    slug: 'project-3',
    img: 'https://picsum.photos/200/200?random=4',
    title: '个人博客 - Keep It Simple',
    subtitle:
      '一个简约风格的博客，也是我作为以后非前端程序员的练手作品，使用 Nuxt.js 和 Tailwind CSS 构建。',
  },
  {
    slug: 'project-4',
    img: 'https://picsum.photos/200/200?random=1',
    title: '不做事 - 上班是不可能的',
    subtitle: '万物都可以制作成分享卡片，让你的分享更带劲',
  },
  {
    slug: 'project-5',
    img: 'https://picsum.photos/200/200?random=5',
    title: '多彩卡片 - 万物皆可分享',
    subtitle:
      'Composables that run on the server to fetch data for your components and enable you to render content in different ways.',
  },
]
</script>

<template>
  <NuxtLayout>
    <div class="container max-w-6xl py-6 lg:py-10">
      <div
        class="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8"
      >
        <div class="flex-1 space-y-4">
          <h1
            class="inline-block font-heading text-3xl tracking-tight lg:text-4xl"
          >
            我的博客
          </h1>
          <!-- 英文字符视觉上显得小一点，换成中文就感觉偏大了一点，所以这里是否要降低文字大小？ -->
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
            src="/images/blog-post-1.webp"
            style="color: transparent"
          />
          <h2 class="text-2xl font-extrabold">{{ project.title }}</h2>
          <p class="text-muted-foreground">
            How to implement preview mode in your headless CMS.
          </p>
          <p class="text-sm text-muted-foreground">April 9, 2023</p>
          <a class="absolute inset-0" href="/blog/preview-mode-headless-cms"
            ><span class="sr-only">View Article</span></a
          >
        </article>
      </div>

      <div class="grid gap-10 sm:grid-cols-2">
        <article class="group relative flex flex-col space-y-2">
          <img
            alt="Preview Mode for Headless CMS"
            fetchpriority="high"
            width="804"
            height="452"
            decoding="async"
            data-nimg="1"
            class="rounded-md border bg-muted transition-colors"
            src="/images/blog-post-1.webp"
            style="color: transparent"
          />
          <h2 class="text-2xl font-extrabold">Preview Mode for Headless CMS</h2>
          <p class="text-muted-foreground">
            How to implement preview mode in your headless CMS.
          </p>
          <p class="text-sm text-muted-foreground">April 9, 2023</p>
          <a class="absolute inset-0" href="/blog/preview-mode-headless-cms"
            ><span class="sr-only">View Article</span></a
          >
        </article>
        <article class="group relative flex flex-col space-y-2">
          <img
            alt="Dynamic Routing and Static Regeneration"
            fetchpriority="high"
            width="804"
            height="452"
            decoding="async"
            data-nimg="1"
            class="rounded-md border bg-muted transition-colors"
            src="/images/blog-post-2.webp"
            style="color: transparent"
          />
          <h2 class="text-2xl font-extrabold">
            Dynamic Routing and Static Regeneration
          </h2>
          <p class="text-muted-foreground">
            How to use incremental static regeneration using dynamic routes.
          </p>
          <p class="text-sm text-muted-foreground">March 4, 2023</p>
          <a
            class="absolute inset-0"
            href="/blog/dynamic-routing-static-regeneration"
            ><span class="sr-only">View Article</span></a
          >
        </article>
        <article class="group relative flex flex-col space-y-2">
          <img
            alt="Server and Client Components"
            loading="lazy"
            width="804"
            height="452"
            decoding="async"
            data-nimg="1"
            class="rounded-md border bg-muted transition-colors"
            src="/images/blog-post-3.webp"
            style="color: transparent"
          />
          <h2 class="text-2xl font-extrabold">Server and Client Components</h2>
          <p class="text-muted-foreground">
            React Server Components allow developers to build applications that
            span the server and client.
          </p>
          <p class="text-sm text-muted-foreground">January 8, 2023</p>
          <a class="absolute inset-0" href="/blog/server-client-components"
            ><span class="sr-only">View Article</span></a
          >
        </article>
        <article class="group relative flex flex-col space-y-2">
          <img
            alt="Deploying Next.js Apps"
            loading="lazy"
            width="804"
            height="452"
            decoding="async"
            data-nimg="1"
            class="rounded-md border bg-muted transition-colors"
            src="/images/blog-post-4.webp"
            style="color: transparent"
          />
          <h2 class="text-2xl font-extrabold">Deploying Next.js Apps</h2>
          <p class="text-muted-foreground">
            How to deploy your Next.js apps on Vercel.
          </p>
          <p class="text-sm text-muted-foreground">January 2, 2023</p>
          <a class="absolute inset-0" href="/blog/deploying-next-apps"
            ><span class="sr-only">View Article</span></a
          >
        </article>
      </div>
    </div>

    <div>
      <div class="mt-8 gap-8 sm:gap-y-16 grid lg:grid-cols-2 lg:items-center">
        <div>
          <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
            我的博客
          </h1>
          <div
            class="max-w-2xl mt-4 text-md text-foreground/80 flex items-center"
          >
            记录的一些心得和经验，希望能对你有帮助。
            <RssButton />
          </div>
          <!-- 邮件订阅 -->
          <SubscribeForm class="mt-8" />
          <!-- 搜索框 -->
          <!-- <UiSearchInput></UiSearchInput> -->
        </div>
      </div>

      <!-- 全部文章列表，按日期倒序排列 -->
      <PostList :posts="posts" class="my-16" />

      <div
        class="pointer-events-auto flex w-12 flex-col items-center justify-center gap-8 rounded-3xl bg-gradient-to-b from-zinc-100/80 to-white/90 px-1 pb-8 pt-4 ring-1 ring-zinc-400/10 backdrop-blur-lg dark:from-zinc-800/80 dark:to-zinc-950/80 dark:ring-zinc-500/10"
        style="opacity: 1; transform: none"
      >
        <button
          type="button"
          class="relative aspect-square h-8"
          tabindex="0"
          style="height: 24px"
        >
          <img
            alt=""
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="inline-block"
            src="/reactions/claps.png"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              inset: 0px;
              color: transparent;
            "
          /><span
            class="absolute -bottom-6 left-0 flex w-full items-center justify-center whitespace-nowrap text-[12px] font-semibold text-zinc-700/30 dark:text-zinc-200/25"
            >534</span
          ></button
        ><button
          type="button"
          class="relative aspect-square h-8"
          tabindex="0"
          style="height: 24px"
        >
          <img
            alt=""
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="inline-block"
            src="/reactions/heart.png"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              inset: 0px;
              color: transparent;
            "
          /><span
            class="absolute -bottom-6 left-0 flex w-full items-center justify-center whitespace-nowrap text-[12px] font-semibold text-zinc-700/30 dark:text-zinc-200/25"
            >377</span
          ></button
        ><button
          type="button"
          class="relative aspect-square h-8"
          tabindex="0"
          style="height: 24px"
        >
          <img
            alt=""
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="inline-block"
            src="/reactions/thumbs-up.png"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              inset: 0px;
              color: transparent;
            "
          /><span
            class="absolute -bottom-6 left-0 flex w-full items-center justify-center whitespace-nowrap text-[12px] font-semibold text-zinc-700/30 dark:text-zinc-200/25"
            >252</span
          ></button
        ><button
          type="button"
          class="relative aspect-square h-8"
          tabindex="0"
          style="height: 24px"
        >
          <img
            alt=""
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="inline-block"
            src="/reactions/fire.png"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              inset: 0px;
              color: transparent;
            "
          /><span
            class="absolute -bottom-6 left-0 flex w-full items-center justify-center whitespace-nowrap text-[12px] font-semibold text-zinc-700/30 dark:text-zinc-200/25"
            >109</span
          >
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>
