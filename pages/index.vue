<script setup>
// 查询出最近的 5 篇文章, 按时间倒序排序。
const { data: latestPosts } = await useAsyncData('latestPosts', () =>
  queryContent('/blog').sort({ date: -1 }).limit(5).find()
)

// 定义一个项目列表，包含三个项目
const projects = [
  {
    name: 'CardThis',
    description:
      'Make sharing more fancy, Make sharing more fancy, Make sharing more fancyMake sharing more fancy, ',
    icon: 'https://picsum.photos/200/200?random=2',
  },
  {
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
  <!-- 开始我将 NuxtLayout 放到 app.vue 中，但是启动时会提示警告：[@nuxt/content 7:06:46 PM]  WARN  Using <NuxtLayout> inside app.vue will cause unwanted layout shifting in your application. Consider removing <NuxtLayout> from app.vue and using it in your pages. 所以，我将 NuxtLayout 应用于每个 pages。 -->
  <NuxtLayout>
    <!-- BIO -->
    <!-- 将 container 设置到这里而不是在父元素 main 上设置是想提供更高的自由度，如果一旦在 main 上设置了 container，那么 main 内部的 section 设置的样式就只能局限在 container 设置的左右 margin 以内了。 -->
    <section id="bio" class="container pt-8 md:pt-12 lg:pt-24 pb-4">
      <!-- NOTE: 应该存在一个 H1 标题，然后按 H1, H2 依次，Google 搜索引擎会比较喜欢这样的页面（我记不清了，好像是这样的，待考证） -->
      <!-- 
        如果等间距，使用 flex 加 gap 的方式控制三个部分的间距更优雅；但如果需要在不同部分之间设置不同的间距，那么使用 margin top 更灵活。目前这样设置我觉得还是比较合适的。
        -->
      <!-- OLD: flex flex-col gap-y-6 -->
      <div class="max-w-[64rem] mx-auto space-y-6">
        <!-- 这里我将 -->
        <h1 class="font-bold text-3xl md:text-4xl tracking-tight">
          你好，伙计！👋
        </h1>
        <!-- 
            希望每行间距宽松一点，所以这里使用的是 leading-loose (等效于 leading-8)；
            关于字体大小的更改：最终还是选择了自定义的 text-md + font-normal，个人感觉对于中文的显示更好看点。没有按 shadcn 官网效果中的将标题下的文本变细一点(text-lg + font-light)，我感觉那个更适合英文排版效果。
            注意：leading-loose 是 line-height: 2，并不是 line-height: 2rem; 这两个还是有区别的。因为这里设置的字体大小为 17 px, 所以 line-height: 
          -->
        <!-- 如果觉得这个样式太暗，可以使用 text-primary -->
        <div class="text-md text-primary/80 leading-[2rem]">
          <p>嘿！我是 Gu Kai tong，一名软件工程师。</p>
          <p>目前住在上海。我正在做一些有意思的项目。</p>
          <p>
            创建这个博客是为了方便和大家共同探讨，并记录和分享我的知识和经验。
          </p>
        </div>
        <SocialLinks class="gap-6 sm:gap-5" />
      </div>
    </section>

    <!-- Projects -->
    <!-- 这里设置了 light 模式下显示一个灰色的背景，将整个 Projects Grid 显示在这个灰色区域内 -->
    <section
      id="projects"
      class="container space-y-6 bg-slate-50/0 py-8 dark:bg-transparent md:py-12 lg:py-24"
    >
      <div class="mx-auto max-w-5xl space-y-6">
        <!-- Heading -->
        <div class="space-y-4">
          <h1 class="font-heading leading-[1.1] text-3xl md:text-5xl">项目</h1>
          <p
            class="text-muted-foreground sm:text-lg leading-normal sm:leading-7"
          >
            我写的一些垃圾代码和玩具，如果你有兴趣，可以看看。
          </p>
        </div>
        <ProjectGrid />
      </div>
    </section>

    <!-- Latest articles -->
    <section class="container my-8">
      <div class="mx-auto max-w-4xl space-y-6">
        <h2 class="text-3xl font-bold opacity-90 hover:opacity-100">
          <NuxtLink to="/blog">最近文章</NuxtLink>
        </h2>
        <PostList :posts="latestPosts" class="mt-8" />
      </div>
    </section>
  </NuxtLayout>
</template>
