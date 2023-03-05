<script setup>
// 社交网站名称列表（这里需填写社交网站的域名，默认会和 .com 拼接）
const socials = [
  'twitter',
  'facebook',
  'instagram',
  'youtube',
  'github',
  'medium',
  'weibo',
]
const { config } = useBlog()
const icons = computed(() => {
  return Object.entries(config.value.socials || {})
    .map(([key, value]) => {
      if (typeof value === 'object') {
        return value
      } else if (typeof value === 'string' && value && socials.includes(key)) {
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
  <span class="inline-flex gap-x-3">
    <NuxtLink
      v-for="icon in icons"
      :key="icon.label"
      rel="noopener noreferrer"
      :title="icon.label"
      class="p-4"
      :aria-label="icon.label"
      :href="icon.href"
      target="_blank"
    >
      <Icon v-if="icon.icon" :name="icon.icon" class="w-4 h-4" />
    </NuxtLink>
  </span>
</template>
