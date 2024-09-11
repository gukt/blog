<script setup>
// 定义项目列表
const projects = [
  {
    name: '摸鱼达人',
    description:
      '基于先进算法的智能摸鱼助手，为打工人提供各种巧妙的摸鱼技巧和工具，帮助在工作中找到更多自由时间。',
    url: 'https://moyu-master.com',
    status: '悄悄使用中',
  },
  {
    name: '情绪镜像',
    description:
      '结合人工智能和生物反馈技术，实时分析和可视化用户情绪状态。这个工具可用于个人情绪管理、心理健康监测，以及人机交互体验优化。',
    url: 'https://emotion-mirror.app',
    status: '公测阶段',
  },
  {
    name: '声纹锁',
    description:
      '基于深度学习的声音特征提取和身份验证系统，为开发者提供易用的API接口，支持多种应用场景的身份验证需求。',
    url: 'https://voiceprint-lock.dev',
    status: '玩具',
  },
  {
    name: '神经网络可视化器',
    description:
      '专为机器学习工程师设计的工具，能够直观展示和分析复杂神经网络结构，帮助优化模型性能和理解决策过程。',
    url: 'https://neural-viz.ai',
  },
  {
    name: '代码翻译官',
    description:
      '利用先进的自然语言处理技术，将口语化描述转换为可执行代码，降编程门槛，提高开发效率。',
    url: 'https://code-translator.io',
    status: '持续优化中',
  },
]

// 定义社交链接
const socialLinks = [
  { name: 'Gu Kaitong', url: 'https://codemonkey.dev' },
  { name: 'twitter', url: 'https://twitter.com/@gukt' },
  { name: 'github', url: 'https://github.com/gukt' },
]

// 定义最近的文章
const recentPosts = [
  {
    title: '如何提高编程效率：10个实用技巧',
    url: '/posts/how-to-improve-coding-efficiency',
  },
  {
    title: '深入理解JavaScript的异步编程',
    url: '/posts/understanding-asynchronous-javascript',
  },
  {
    title: '从零开始搭建一个Vue.js项目',
    url: '/posts/building-vuejs-project-from-scratch',
  },
  {
    title: 'React Hooks 完全指南',
    url: '/posts/complete-guide-to-react-hooks',
  },
  {
    title: 'TypeScript 高级技巧与最佳实践',
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
    title: 'Docker 容器化应用实战',
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
  {
    title: 'Web 安全最佳实践',
    url: '/posts/web-security-best-practices',
  },
  {
    title: 'Progressive Web Apps (PWA) 开发指南',
    url: '/posts/progressive-web-apps-development-guide',
  },
  {
    title: 'Git 高级技巧与工作流程',
    url: '/posts/advanced-git-techniques-and-workflows',
  },
  {
    title: '深入理解 WebSocket 协议',
    url: '/posts/understanding-websocket-protocol',
  },
  {
    title: 'Serverless 架构实战',
    url: '/posts/serverless-architecture-in-action',
  },
  {
    title: 'Web 性能优化：加载速度与用户体验',
    url: '/posts/web-performance-optimization',
  },
  {
    title: '响应式设计与移动优先策略',
    url: '/posts/responsive-design-and-mobile-first-approach',
  },
  {
    title: '函数式编程在 JavaScript 中的应用',
    url: '/posts/functional-programming-in-javascript',
  },
  {
    title: 'CI/CD 流程自动化实践',
    url: '/posts/ci-cd-automation-practices',
  },
  {
    title: 'WebAssembly 入门与应用',
    url: '/posts/introduction-to-webassembly',
  },
]

// 不需要额外的题状态和切换函数，因为这些应该�� ColorSwitcher 组件中处理
</script>

<template>
  <div class="relative min-h-screen">
    <!-- 背景 mesh 渐变 -->
    <div class="absolute inset-0 bg-mesh-gradient opacity-20 z-0"></div>

    <!-- 原有内容 -->
    <div class="relative z-10 max-w-2xl mx-auto px-4 py-8">
      <!-- 添加顶部导航栏 -->
      <header class="flex justify-between items-center mb-8">
        <!-- 社交链接 -->
        <nav>
          <ul class="flex">
            <li
              v-for="(link, index) in socialLinks"
              :key="link.name"
              class="flex items-center"
            >
              <a
                :href="link.url"
                class="text-[#00e] dark:text-blue-500 underline underline-offset-4 decoration-dotted"
                >{{ link.name }}</a
              >
              <span v-if="index !== socialLinks.length - 1" class="mx-2"
                >/</span
              >
            </li>
          </ul>
        </nav>
        <span
          class="p-1 rounded-md transition-all hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer select-none"
        >
          <ColorModeSwitcher class="w-4 h-4" />
        </span>
      </header>

      <!-- 项目列表 -->
      <main>
        <section class="mt-16">
          <h2 class="text-2xl font-bold mb-4">Projects</h2>
          <ul class="space-y-4">
            <li
              v-for="project in projects"
              :key="project.name"
              class="space-y-1"
            >
              <h3>
                <a :href="project.url">
                  <span
                    class="text-[#00e] dark:text-blue-500 underline underline-offset-4 decoration-dotted"
                  >
                    {{ project.name }}
                  </span>
                  <span
                    v-if="project.status"
                    class="text-xs ml-2 text-muted-foreground"
                  >
                    - {{ project.status }}
                  </span>
                </a>
              </h3>
              <p
                class="text-muted-foreground dark:text-foreground/60 line-clamp-2 text-[0.9rem]"
              >
                {{ project.description }}
              </p>
            </li>
          </ul>
        </section>

        <!-- 最近的文章 -->
        <section class="mt-16">
          <h2 class="text-2xl font-bold mb-4">Recent Posts</h2>
          <ul
            class="space-y-4 list-disc list-inside marker:text-muted-foreground"
          >
            <li v-for="post in recentPosts" :key="post.title">
              <a :href="post.url">
                <span
                  class="text-[#00e] dark:text-blue-500 underline underline-offset-4 decoration-dotted"
                >
                  {{ post.title }}
                </span>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>
