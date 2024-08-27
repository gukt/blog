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
</template>
