<template>
  <!-- 
  如果等间距，使用 flex 加 gap 的方式控制三个部分的间距更优雅；但如果需要在不同部分之间设置不同的间距，那么使用 margin top 更灵活。目前这样设置我觉得还是比较合适的。
  -->
  <div class="flex flex-col gap-y-6">
    <h3 class="font-bold text-3xl md:text-4xl tracking-tight">你好，伙计！👋</h3>
    <div class="flex flex-col gap-y-2 text-md text-foreground/80">
      <p>嘿！我是 Gu Kai tong，一名软件工程师。</p>
      <p>目前住在上海。我正在做一些有意思的项目。</p>
      <p>创建这个博客是为了方便和大家共同探讨，并记录和分享我的知识和经验。</p>
    </div>
    <SocialLinks />
  </div>
</template>
