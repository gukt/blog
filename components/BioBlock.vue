<template>
  <!-- 
  如果等间距，使用 flex 加 gap 的方式控制三个部分的间距更优雅；但如果需要在不同部分之间设置不同的间距，那么使用 margin top 更灵活。目前这样设置我觉得还是比较合适的。
  -->
  <div class="flex flex-col gap-y-6">
    <h3 class="font-bold text-3xl md:text-4xl tracking-tight">
      你好，伙计！👋
    </h3>
    <!-- 
      希望每行间距宽松一点，所以这里使用的是 leading-loose (等效于 leading-8)；
      关于字体大小的更改：最终还是选择了自定义的 text-md + font-normal，个人感觉对于中文的显示更好看点。没有按 shadcn 官网效果中的将标题下的文本变细一点(text-lg + font-light)，我感觉那个更适合英文排版效果。
    -->
    <div class="text-md text-foreground/80 leading-loose">
      <p>嘿！我是 Gu Kai tong，一名软件工程师。</p>
      <p>目前住在上海。我正在做一些有意思的项目。</p>
      <p>创建这个博客是为了方便和大家共同探讨，并记录和分享我的知识和经验。</p>
    </div>
    <SocialLinks class="gap-6 sm:gap-5" />
  </div>
</template>
