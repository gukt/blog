import type { Ref } from 'vue'

/**
 * 用于观察指定的 Headings 在页面中是否可见 ，从而控制 TOC 样式的更新。
 *
 * See also:
 * - https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
 */
export const useScroll = (selector: any) => {
  console.log('useScroll', selector)
  const observer = ref() as Ref<IntersectionObserver>
  const visibleHeadings = ref([]) as Ref<string[]>
  const activeHeadings = ref([]) as Ref<string[]>

  const observerCallback = (entries: IntersectionObserverEntry[]) =>
    entries.forEach((entry) => {
      const id = entry.target.id
      // 如果元素和视口相交，则添加 id 到 visibleHeadings 中，反之，从 visibleHeadings 中移除 id
      if (entry.isIntersecting) {
        visibleHeadings.value.push(id)
      } else {
        // NOTE: 这里我们使用 filter 来移除指定的项，filter 每次都生成一个新数组赋值给 visibleHeadings，目的就是为了不要修改原数组，这是因为在 watch 块中有一段特殊处理场景：当所有的 headings 都不可见时，使用最近一次的 visibleHeadings，如果使用 splice，它会改变原数组值，而这个值已经被赋值给 activeHeading 了，这两个变量指向了同一个引用。
        visibleHeadings.value = visibleHeadings.value.filter((t) => t !== id)
      }
    })

  /**
   * 将需要观察的 Headings 元素添加到 Observer 中。一旦它们随着滚动而变为可见，Observer 会检测它们是否可见并触发指定的回调。
   *
   * @param headings Watched heading elements
   */
  const updateHeadings = (headings: Element[]) =>
    headings.forEach((heading) => {
      observer.value.observe(heading)
    })

  // When all headings are not visible, use the latest visibleHeadings. If you use splice, it will change the original array value, and this value has already been assigned to activeHeading. These two variables point to the same reference.
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

  // Create intersection observer
  onBeforeMount(() => {
    console.log('xxx', document.querySelector('#article-layout'))
    return (observer.value = new IntersectionObserver(observerCallback, {
      // root: document.querySelector('#article-layout'),
      // header height margin
      rootMargin: '-64px 0px 0px 0px',
      // threshold: 0.5,
    }))
  })

  // Destroy it
  onBeforeUnmount(() => observer.value?.disconnect())

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings,
  }
}
