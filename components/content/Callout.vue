<template>
  <div class="my-6 flex items-start rounded-md border border-l-4 p-4">
    <div class="[&>p:first-child]:mt-0 [&>p:last-child]:mb-0">
      <slot />
    </div>
  </div>
</template>

<!--
  这些样式已被注释掉，因为我们现在使用 Tailwind CSS 来实现相同的效果。
  使用 Tailwind CSS 可以减少额外的 CSS 代码，并保持样式的一致性。
  新的实现方式在 template 中的 div 元素上使用了以下类：
  [&>p:first-child]:mt-0 [&>p:last-child]:mb-0
-->
<!-- <style scoped>
.callout-content :deep(> p:first-child) {
  margin-top: 0;
}

.callout-content :deep(> p:last-child) {
  margin-bottom: 0;
}
</style> -->
