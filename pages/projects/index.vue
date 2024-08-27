<script setup lang="ts">
const projects = [
  {
    path: '/projects/card-this',
    icon: 'tabler:brand-nextjs',
    title: 'CardThis - Make sharing more fancy',
    description:
      'CardThis is a tool that allows you to create colorful cards for sharing. It is free and easy to use.',
  },
  {
    path: '/projects/project-2',
    icon: 'tabler:brand-react',
    title: 'CardThis - 让分享变得更有趣',
    description:
      'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。',
  },
  {
    path: '/projects/project-2',
    icon: 'tabler:brand-prisma',
    title: 'CardThis - 让分享变得更有趣',
    description:
      'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。',
  },
  {
    path: '/projects/project-2',
    icon: 'tabler:brand-tailwind',
    title: 'CardThis - 让分享变得更有趣',
    description: 'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。Cs',
  },
  {
    path: '/projects/project-2',
    icon: 'tabler:brand-angular',
    title: 'CardThis - 让分享变得更有趣',
    description:
      'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。',
  },
  {
    path: '/projects/project-2',
    icon: 'tabler:brand-stripe',
    title: 'CardThis - 让分享变得更有趣',
    description:
      'CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。CardThis 是一个让你可以制作多彩卡片的工具，免费且易用。',
  },
]
</script>

<template>
  <!-- <NuxtLayout>
    <div id="projects" class="container space-y-6 mt-8 mb-16">
      <h1 class="text-3xl md:text-4xl font-bold tracking-tight">我的项目</h1>
      <div class="mt-4 text-md text-foreground/80">
        我写的一些垃圾代码和垃圾项目，如果你有兴趣，可以看看。
      </div>
      <ProjectGrid class="mt-8" />
    </div>
  </NuxtLayout> -->

  <NuxtLayout>
    <div class="container space-y-6 py-8 md:py-12 lg:py-24">
      <div class="max-w-5xl mx-auto space-y-6">
        <!-- Heading -->
        <div class="space-y-4">
          <h1 class="font-heading leading-[1.1] text-3xl md:text-5xl">项目</h1>
          <p
            class="text-muted-foreground sm:text-lg leading-normal sm:leading-7"
          >
            我写的一些垃圾代码和玩具，如果你有兴趣，可以看看。
          </p>
        </div>
        <!-- Grid -->
        <!-- 这里没有封装成组件是因为以下几个原因：1. 比较简单，还没碰到可复用的，如果有则考虑封装，2：考虑页面中 h1, h2 结构 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink
            v-for="(item, index) in projects"
            :key="index"
            :to="item.path"
            class="inline-flex flex-col justify-between gap-2 p-8 rounded-lg border border-border"
          >
            <Icon
              :name="item.icon"
              mode="svg"
              style="stroke-width: 1"
              class="w-12 h-12 fill-black stroke-red-500 stroke-1"
            />
            <h2 class="font-bold">{{ item.title }}</h2>
            <p class="flex-1 text-sm text-muted-foreground line-clamp-3">
              {{ item.description }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
