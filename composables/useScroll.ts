import type { Ref } from 'vue'

/**
 * 用于观察当滚动发生时，指定的 Headings 在当前页面中是否可见。主要用于高亮 TOC 中的当前正在阅读的标题，提供视觉反馈，增强导航用户体验。
 */
export const useScroll = (selector: any) => {
  const observer = ref() as Ref<IntersectionObserver>
  const visibleHeadings = ref([]) as Ref<string[]>
  const activeHeadings = ref([]) as Ref<string[]>

  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    return entries.forEach(entry => {
      const id = entry.target.id

      if (entry.isIntersecting) {
        // 元素进入视口，将其 id 添加到可见标题列表中
        visibleHeadings.value.push(id)
      } else {
        // 元素离开视口，从可见标题列表中移除
        // 这里我们使用 filter 来移除指定的项，filter 每次都生成一个新数组赋值给 visibleHeadings
        // 目的是为了不修改原数组，因为在 watch 块中有特殊处理：
        // 当所有的 headings 都不可见时，使用最近一次的 visibleHeadings
        // 如果使用 splice，它会改变原数组值，而这个值已经被赋值给 activeHeading
        // 这两个变量会指向同一个引用，可能导致意外的行为
        visibleHeadings.value = visibleHeadings.value.filter((t) => t !== id)
      }

      console.log('visibleHeadings', visibleHeadings.value)
    })
  }

  /**
   * 将需要观察的 Headings 元素添加到 Observer 中。一旦它们随着滚动而变为可见，Observer 会检测它们是否可见并触发指定的回调。
   *
   * @param headings watched heading elements
   */
  const updateHeadings = (headings: Element[]) => {
    console.log('updateHeadings', headings)
    return headings.forEach(heading => {
      observer.value.observe(heading)
    })
  }

  /**
   * 当所有的 headings 都不可见时，使用最近一次的 visibleHeadings。
   * 注意：如果使用 splice，它会改变原数组值，而这个值已经被赋值给 activeHeading 了，
   * 这两个变量指向了同一个引用。
   */
  watch(visibleHeadings, (newVal, oldVal) => {
    if (newVal.length === 0) {
      activeHeadings.value = oldVal
    } else {
      activeHeadings.value = newVal
    }
  }, { deep: true })

  /*
   * 创建一个 IntersectionObserver 实例，IntersectionObserver 是一个浏览器 API，
   * 用于异步观察目标元素与其祖先元素或视口的交叉状态。
   * 这里我们用它来检测指定的 Headings 元素是否在视口中可见，
   * 当 Headings 元素进入或离开视口时，IntersectionObserver 会触发回调函数，
   * 这样我们就可以动态更新当前可见的标题列表，用于实现目录高亮等功能。
   */
  onBeforeMount(() => {
    console.log('useScroll#onBeforeMount: selector:', document.querySelector(selector))

    const options = {
      // 指定根元素，用于判断目标元素的可见性
      root: document.querySelector(selector),
      // 设置根元素的边距，顶部减少 64px（可能是为了排除固定头部的影响）
      rootMargin: '-64px 0px 0px 0px',
      // 设置交叉比例阈值，当目标元素可见度超过 50% 时触发回调
      threshold: 0.5,
    }

    // 创建一个新的 IntersectionObserver 实例
    observer.value = new IntersectionObserver(observerCallback, options)
  })

  // 销毁处理：在组件销毁之前，断开 Observer 的连接。
  onBeforeUnmount(() => observer.value?.disconnect())

  return {
    visibleHeadings,
    activeHeadings,
    updateHeadings,
  }
}