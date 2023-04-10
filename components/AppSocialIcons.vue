<script setup lang="ts">
/**
 * - 如果是 string 类型，会自动拼接成 https://xxx.com/gukt；
 *
 * - 如果是数组类型，第一个元素是 name，第二个元素是 href，第三个元素是 icon，如果 icon 为空，则会自动拼接成 fa-brands:{name}。
 */
type SocialItem = string | [string, string, string?]

const socials = [
  // ['email', 'mailto:gukaitong@gmail.com', 'fa-solid:envelope'],
  'github',
  // ['codepen', 'https://codepen.io/gukt'],
  ['twitter', 'https://twitter.com/gukaitong'],
  // 'facebook',
  // 'youtube',
  // 'instagram',
  // 'medium',
  // 'weibo',
] as SocialItem[]

const resolvedSocials = computed(() => {
  return socials.map((social) => {
    if (Array.isArray(social)) {
      return {
        href: social[1],
        icon: social[2] || `fa-brands:${social[0]}`,
        label: social[0],
      }
    }
    return {
      href: `https://${social}.com/gukt`,
      icon: `fa-brands:${social}`,
      label: social,
    }
  })
})
</script>

<template>
  <span class="inline-flex gap-4">
    <!-- need to add rel="noopener noreferrer"? -->
    <NuxtLink
      v-for="icon in resolvedSocials"
      :key="icon.label"
      :title="icon.label"
      :href="icon.href"
      class="inline-block"
      :aria-label="icon.label"
      target="_blank"
    >
      <Icon :name="icon.icon" />
    </NuxtLink>
  </span>
</template>

<style scoped>
.icon {
  @apply h-6 w-6 text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300;
}
</style>
