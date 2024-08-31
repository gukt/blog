<!-- 默认的 inline code 样式带有 `` 的，我想搞成 github 那样的，所以只用在这里自定义 ProseCodeInline 即可 -->
<template>
  <span
    class="relative bg-muted rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm"
  >
    <slot />
  </span>
</template>
