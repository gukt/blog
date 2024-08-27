<script setup>
const isVisible = ref(false)
const scrollThreshold = 200

const checkScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <!-- left-[calc(960px + (100vw - 960px) / 2)]  -->
  <span
    v-show="isVisible"
    class="fixed bottom-8 right-8 p-3 rounded-full bg-gray-500/5 hover:bg-gray-500/30 text-foreground/50 cursor-pointer ease-in-out inline-flex"
    @click="scrollToTop"
  >
    <Icon name="mdi:arrow-up" class="w-6 h-6 stroke-1" />
  </span>
</template>

<!-- <script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 200

const checkScroll = () => {
  isVisible.value = window.pageYOffset > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-16 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      aria-label="返回顶部"
    >
      <Icon name="mdi:arrow-up" class="w-6 h-6" />
    </button>
  </transition>
</template> -->

<!-- <template>
  <div
    v-show="isVisible"
    class="fixed bottom-16 right-8 p-2 bg-gray-600/50 text-white rounded-full cursor-pointer transition-opacity duration-300 ease-in-out opacity-70 hover:opacity-100 flex items-center"
    @click="scrollToTop"
  >
    <Icon name="uil:arrow-up" class="w-12 h-12 text-white stroke-1" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 200
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script> -->
