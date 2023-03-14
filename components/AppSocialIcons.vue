<script setup lang="ts">
// 社交网站名称列表（这里需填写社交网站的域名，默认会和 .com 拼接）
const socialNames = [
  'email',
  'github',
  'codepen',
  // {
  //   href: `https://${key}.io/gukt`,
  //   icon: `fa-brands:${key}`,
  //   label: 'codepen',
  // },
  'twitter',
  'youtube',
  'medium',
  'facebook',
  'instagram',
  'weibo',
]
const { config } = useBlog()
const icons = computed(() => {
  return Object.entries(config.value.socials || {})
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return value
      } else if (
        typeof value === 'string' &&
        value &&
        socialNames.includes(key)
      ) {
        return {
          href: `https://${key}.com/${value}`,
          icon: `fa-brands:${key}`,
          label: value,
        }
      } else {
        return null
      }
    })
    .filter(Boolean)
})
</script>

<template>
  <span class="inline-flex gap-4">
    <NuxtLink
      v-for="icon in icons"
      :key="icon.label"
      rel="noopener noreferrer"
      :title="icon.label"
      class="inline-block"
      :aria-label="icon.label"
      :href="icon.href"
      target="_blank"
    >
      <Icon v-if="icon.icon" :name="icon.icon" class="icon" />
    </NuxtLink>
  </span>
</template>

<style scoped>
.icon {
  @apply h-5 w-5 text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300;
}
</style>
