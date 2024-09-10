<script setup lang="ts">
const nuxtApp = useNuxtApp()

/**
 * 定义链接对象的接口
 * @interface Link
 * @property {string} id - 链接的唯一标识符
 * @property {string} text - 链接显示的文本
 * @property {Link[]} [children] - 可选的子链接数组
 */
interface Link {
  id: string
  text: string
  children?: Link[]
}

/**
 * 定义组件的属性接口
 * @interface PostTocLinksProps
 * @property {Link[]} links - 只读的链接数组
 * @property {number} [depth] - 可选的深度参数，用于递归渲染
 */
interface PostTocLinksProps {
  readonly links: Link[]
  readonly depth?: number
  readonly activeHeadings: string[]
}

const props = withDefaults(defineProps<PostTocLinksProps>(), {
  depth: 0,
})

// 添加一个计算属性来检查 id 是否在 activeHeadings 中
const isActive = (id: string) =>
  computed(() => props.activeHeadings.includes(id))
</script>

<template>
  <ul class="m-0 list-none" :class="`depth-${depth}`">
    <li v-for="(item, index) in links" :key="index" class="mt-0 pt-2">
      <a
        :href="`#${item.id}`"
        class="inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        {{ item.text }}
      </a>
      <PostTocLinks
        v-if="item.children"
        :links="item.children"
        :depth="depth + 1"
        :active-headings="activeHeadings"
      />
    </li>
  </ul>
</template>

<style scoped>
/* 这里我们自定义了一组 indent-* 类，用于控制列表项的缩进。之所以在这里定义，是因为我们无法在 DOM 中动态地提供如 ml-{depth} 这样的类，Tailwind 不能发现这些类。 */

.depth-0 {
  @apply ml-0;
}
.depth-1 {
  @apply ml-4;
}
.depth-2 {
  @apply ml-8;
}
/* 根据需要添加更多层级 */
</style>
