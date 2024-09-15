<script setup>
// 定义项目列表
const projects = [
  {
    name: '个人博客',
    description: '我的第一个学习前端的项目，使用 Nuxt.js 构建的极简博客系统。',
    url: 'https://my-blog-project.com',
    status: '持续更新中',
  },
  {
    name: '摸鱼达人',
    description:
      '基于微信小程序开发的天气预报应用，集成多个天气 API，提供实时天气和未来预报。',
    url: 'https://weather-miniapp.com',
    status: '已上线',
  },
  {
    name: '像素艺术生成器',
    description:
      '一个简单的 Web 应用，允许用户创建和分享像素艺术作品，使用 HTML5 Canvas 实现。',
    url: 'https://pixel-art-maker.netlify.app',
    status: '玩具',
  },
]

// 定义最近的文章
const recentPosts = [
  {
    title: '提高编程效率：10 个实用技巧',
    url: '/blog/guides/using-next-auth-next-13',
  },
  {
    title: '深入浅出 JavaScript 异步编程',
    url: '/blog/guides/build-blog-using-contentlayer-mdx',
  },
  {
    title: '从零开始构建 Vue.js 项目',
    url: '/posts/building-vuejs-project-from-scratch',
  },
  {
    title: 'React Hooks 完全指南',
    url: '/posts/complete-guide-to-react-hooks',
  },
  {
    title: '高级 TypeScript 技巧和最佳实践',
    url: '/posts/advanced-typescript-tips-and-best-practices',
  },
  {
    title: 'Node.js 性能优化策略',
    url: '/posts/nodejs-performance-optimization-strategies',
  },
  {
    title: 'GraphQL vs REST API：何时使用哪个？',
    url: '/posts/graphql-vs-rest-api-when-to-use-which',
  },
  {
    title: 'Docker 容器化实践',
    url: '/posts/docker-containerization-in-practice',
  },
  {
    title: '前端测试策略：单元测试、集成测试和端到端测试',
    url: '/posts/frontend-testing-strategies',
  },
  {
    title: 'CSS Grid 布局详解',
    url: '/posts/css-grid-layout-explained',
  },
]
</script>

<template>
  <AppPage>
    <div class="container">
      <!-- 项目列表 -->
      <main class="max-w-2xl mx-auto py-6 lg:py-10">
        <section class="space-y-6">
          <h2 class="text-2xl md:text-3xl font-bold">项目</h2>
          <ul class="space-y-6 text-foreground/90">
            <li v-for="project in projects" :key="project.name">
              <h3>
                <a :href="project.url" class="font-bold">
                  {{ project.name }}
                </a>
                <span v-if="project.status" class="text-xs ml-2">
                  - {{ project.status }}
                </span>
              </h3>
              <p class="line-clamp-2 text-foreground/70 text-[0.9rem]">
                {{ project.description }}
              </p>
            </li>
          </ul>
        </section>

        <!-- 最近的文章 -->
        <section class="py-6 lg:py-10 space-y-6 mt-8">
          <h2 class="text-2xl md:text-3xl font-bold">最近的文章</h2>
          <ul
            class="space-y-4 list-disc list-inside marker:text-muted-foreground"
          >
            <li
              v-for="post in recentPosts"
              :key="post.title"
              class="truncate text-link underline hover:text-link/80"
            >
              <a :href="post.url">
                {{ post.title }}
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </AppPage>
</template>
