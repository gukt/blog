<script setup lang="ts">
import type { Article } from '~~/types/types'
const articles = await queryContent('/blog').without(['body']).find()

const tagName = useRoute().params.name

// TODO 如果 name 为空，则抛出异常

const filtedArticles: Article[] = articles
  // 将含有指定标签的文章返回
  .filter((article: any) => {
    return article?.tags?.includes(tagName)
  })
  // 将所有元素映射成 Article 类型元素
  .map<Article>((article: any) => {
    return <Article>{
      title: article.title,
      date: article.date,
      updated: article.updated,
      cover: article.cover,
      tags: article.tags,
      slug: article.slug,
      excerpt: article.excerpt || article.description,
      path: article._path,
    }
  })
console.log('filtedArticles:', filtedArticles)
</script>

<template>
  <div>
    <!-- <pre>{{ articles }}</pre> -->
    <!-- <pre>XXXXX:{{ filtedArticles }}</pre> -->
    <ArticleList :articles="filtedArticles" />
  </div>
</template>
