<script setup lang="ts">
// https://nicolasbeauvais.github.io/vue-social-sharing/?path=/story/vuesocialsharing--multiple-share-networks
const networks = [
  {
    network: 'email',
    name: 'Email',
    icon: 'ic:outline-email',
    color: '#333333',
  },
  {
    network: 'facebook',
    name: 'Facebook',
    icon: 'ic:outline-facebook',
    color: '#1877f2',
  },
  {
    network: 'telegram',
    name: 'Telegram',
    icon: 'fa:telegram',
    color: '#0088cc',
  },
  {
    network: 'twitter',
    name: 'Twitter',
    icon: 'mdi:twitter',
    color: '#1da1f2',
  },
  {
    network: 'weibo',
    name: 'Weibo',
    icon: 'fa:weibo',
    color: '#e9152d',
  },
]

const sharing = {
  url: 'https://news.vuejs.org/issues/180',
  title:
    'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
  description:
    'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
  quote: "The hot reload is so fast it's near instant. - Evan You",
  hashtags: 'vuejs,vite,javascript',
  twitterUser: 'gukaitong',
}
</script>

<template>
  <div class="text-xs text-gray-500">
    <!--       
      :style="{ backgroundColor: network.color }"
    -->
    分享：复制链接
    <ShareNetwork
      v-for="network in networks"
      :key="network.network"
      :network="network.network"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :quote="sharing.quote"
      :hashtags="sharing.hashtags"
      :twitter-user="sharing.twitterUser"
      class="m-1 inline-flex items-center gap-2 rounded px-2 py-1"
    >
      <Icon :name="network.icon" class="inline h-4 w-4"></Icon>
      <span>{{ network.name }}</span>
    </ShareNetwork>
  </div>
</template>

<style scoped></style>
