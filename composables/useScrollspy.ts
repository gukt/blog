import type { Ref } from 'vue'

/**
 * Scrollspy allows you to watch visible headings in a specific page.
 * Useful for table of contents live style updates.
 *
 * Q: 将以上注释翻译成中文
 * A: Scrollspy 允许你观察特定页面中可见的标题。
 *   对于表格内容的实时样式更新很有用。
 * See also:
 * - https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
 */
export const useScrollspy = () => {
  const foo = ref<string[]>([])
  const observer = ref() as Ref<IntersectionObserver>
  const visibleHeadings = ref([]) as Ref<string[]>
  const activeHeadings = ref([]) as Ref<string[]>

  const observerCallback = (entries: IntersectionObserverEntry[]) =>
    entries.forEach((entry) => {
      const id = entry.target.id
      // 如果元素和视口相交，则添加 id 到 visibleHeadings 中
      // 反之，从 visibleHeadings 中移除 id
      if (entry.isIntersecting) {
        visibleHeadings.value.push(id)
      } else {
        // Q: 这里为什么要用 filter 方法移除元素？还可以用其他方式吗？
        // A: 因为 visibleHeadings 是一个 Ref，所以不能直接修改它的值。
        visibleHeadings.value = visibleHeadings.value.filter((t) => t !== id)
      }
    })

  /**
   * 将指定的 headings 添加到 Observer 中，Observer 会检测它们是否可见并触发回调。
   *
   * @param headings 需要被观察的 Headings 元素数组。
   */
  const updateHeadings = (headings: Element[]) =>
    headings.forEach((heading) => {
      observer.value.observe(heading)
    })

  // TODO visibleHeadings 和 activeHeadings 有什么区别？ 这里好像也只是监听了 visibleHeadings 的变化，然后赋值给 activeHeadings，并没有什么额外逻辑？
  // Q: 这里为什么要监听 visibleHeadings 的变化？这里的逻辑是什么？
  // A: 这里监听 visibleHeadings 的变化，是为了在 visibleHeadings 变化时，将它的值赋值给 activeHeadings。
  // Q: 直接使用 visibleHeadings 不就行了吗？
  // A: 因为 visibleHeadings 是一个 Ref，所以不能直接修改它的值。
  watch(
    visibleHeadings,
    (val, oldVal) => {
      if (val.length === 0) {
        activeHeadings.value = oldVal
      } else {
        activeHeadings.value = val
      }
    },
    { deep: true }
  )

  // Create intersection observer
  onBeforeMount(
    () => (observer.value = new IntersectionObserver(observerCallback))
  )

  // Destroy it
  onBeforeUnmount(() => observer.value?.disconnect())

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings,
  }
}
