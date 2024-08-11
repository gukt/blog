import type { Ref } from 'vue'

/**
 * 用于观察当滚动发生时，指定的 Headings 在当前页面中是否可见。主要用于高亮 TOC 中的当前正在阅读的标题，提供视觉反馈，增强导航用户体验。
 */
export const useScroll = (selector: any) => {
  const observer = ref() as Ref<IntersectionObserver>
  // 可见的 Headings
  const visibleHeadings = ref([]) as Ref<string[]>
  // 当前高亮的 Headings
  const activeHeadings = ref([]) as Ref<string[]>

  const observerCallback = (entries: IntersectionObserverEntry[]) =>
    entries.forEach((entry) => {
      const id = entry.target.id
      // 如果当前元素可见，将其添加到 visibleHeadings 中，否则移除。
      // isIntersecting 表示目标元素（或根元素）是否与交叉区域交叉，交叉意味着目标元素的可见部分至少有一个像素可见。
      if (entry.isIntersecting) {
        visibleHeadings.value.push(id)
      } else {
        // 这里我们使用 filter 来移除指定的项，filter 每次都生成一个新数组赋值给 visibleHeadings，目的就是为了不要修改原数组，这是因为在 watch 块中有一段特殊处理场景：当所有的 headings 都不可见时，使用最近一次的 visibleHeadings，如果使用 splice，它会改变原数组值，而这个值已经被赋值给 activeHeading 了，这两个变量指向了同一个引用。
        visibleHeadings.value = visibleHeadings.value.filter((t) => t !== id)
      }
    })

  /**
   * 将需要观察的 Headings 元素添加到 Observer 中。一旦它们随着滚动而变为可见，Observer 会检测它们是否可见并触发指定的回调。
   *
   * @param headings watched heading elements
   */
  const updateHeadings = (headings: Element[]) =>
    headings.forEach((heading) => {
      observer.value.observe(heading)
    })

  // 当所有的 headings 都不可见时，使用最近一次的 visibleHeadings。 如果使用 splice，它会改变原数组值，而这个值已经被赋值给 activeHeading 了，这两个变量指向了同一个引用。
  watch(
    visibleHeadings,
    (newVal, oldVal) => {
      if (newVal.length === 0) {
        activeHeadings.value = oldVal
      } else {
        activeHeadings.value = newVal
      }
    },
    { deep: true }
  )

  // 创建一个 IntersectionObserver 实例，用于观察指定的 Headings 元素是否可见。
  onBeforeMount(() => {
    console.log('useScroll', document.querySelector('#article-layout'))
    return (observer.value = new IntersectionObserver(observerCallback, {
      root: document.querySelector(selector),
      // header height margin
      rootMargin: '-64px 0px 0px 0px',
      threshold: 0.5,
    }))
  })

  // 销毁处理：在组件销毁之前，断开 Observer 的连接。
  onBeforeUnmount(() => observer.value?.disconnect())

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings,
  }
}