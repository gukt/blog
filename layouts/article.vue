<!-- By default, Content uses this `default` layout if none is specified. Please see the documentation for more information: https://content.nuxtjs.org/guide/writing/document-driven#layout-binding
-->
<template>
  <!-- Article layout -->
  <div class="app-container">
    <div class="relative grid grid-cols-8 gap-8">
      <!-- Article body -->
      <article class="col-span-6">
        <slot />
        <!-- License -->
        <ArticleLicense class="my-16" />

        <!-- Prev/Next -->
        <ArticlePrevNext class="my-16" />
      </article>
      <!-- Article TOC -->
      <ArticleToc
        class="sticky top-28 right-0 z-40 col-span-2 mt-12 h-min max-h-[calc(100vh-200px)] rounded-xl border"
      />
    </div>
  </div>
</template>
