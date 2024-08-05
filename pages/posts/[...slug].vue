<script setup></script>

<template>
  <!-- 这里渲染文章 -->
  <ContentDoc>
    <template v-slot="{ doc }">
      <article class="prose dark:prose-invert max-w-none">
        <h1>{{ doc.title }}</h1>
        <div class="items-start md:grid md:grid-cols-[minmax(0,1fr)_220px] md:gap-6">
          <ContentRenderer :value="doc" />
          <div class="bg-gray-500">TOC</div>
        </div>
      </article>
    </template>
    <template #not-found>
      <h1>Document not found</h1>
    </template>
  </ContentDoc>
  <BackToTop />
</template>
