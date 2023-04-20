<script setup lang="ts">
defineProps({
  href: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <NuxtLink v-if="href" :to="href">
    <!-- <img
                      src="avatar.svg"
                      alt="user avatar"
                      class="h-10 w-10 rounded-full border border-gray-800 p-0.5"
                    /> -->
    <!-- 这里临时的用 github icon 代替，其他图标需要套上一个圆圈不然看起来感觉上好像不对齐 -->
    <Icon name="github" class="h-8 w-8" />
  </NuxtLink>
</template>
