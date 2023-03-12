<script setup>
const articles = await queryContent('/blog').without(['body']).find()

const keyword = ref('')

// 遍历 articles，统计每个 tag 出现的次数，
// 并记录每篇文章的 title 和 path 和日期，最后返回一个数组
async function getTags() {
  const tags = {}
  const articles = await queryContent('/blog').without(['body']).find()
  // 遍历所有文章
  articles?.forEach((article) => {
    // 遍历每篇文章上的所有标签
    article.tags?.forEach((tag) => {
      // 每篇文章包含以下信息，用于显示链接
      const doc = {
        title: article.title,
        path: article._path,
        slug: article.slug,
        date: article.date,
      }
      if (tags[tag]) {
        tags[tag].count++
        tags[tag].docs.push(doc)
      } else {
        tags[tag] = {
          count: 1,
          name: tag,
          docs: [doc],
        }
      }
    })
  })
  return tags
}
const tags = await getTags(articles)
</script>

<template>
  <section class="xxx">
    <!-- <pre>
      {{ tags }}
    </pre>

    <pre>
      {{ query }}
    </pre> -->

    <h1>All Tags:</h1>

    <input
      type="text"
      placeholder="输入标签进行搜索"
      class="my-4 outline-dashed"
      v-model="keyword"
    />
    <!-- Tag names -->
    <ul class="flex flex-wrap gap-2">
      <li
        v-for="[tag, details] in Object.entries(tags)"
        class="rounded px-2 outline"
      >
        <a :href="`#${tag}`"> {{ tag }} ({{ details.count }}) </a>
      </li>
    </ul>
    <!-- Grouped tag list -->
    <template v-for="[tag, details] in Object.entries(tags)">
      <template v-if="tag.indexOf(keyword) !== -1">
        <h2 class="my-8 text-blue-500 first"  :id="tag">
          <a :href="`/tags/${tag}`"> {{ tag }} ({{ details.count }}) </a>
        </h2>
        <ul class="ml-8">
          <li v-for="doc in details.docs">
            <a :href="doc.path">
              {{ doc.title }}
            </a>
            <span class="text-gray-500"> ({{ doc.date }})</span>
          </li>
        </ul>
      </template>
    </template>

    <!-- {{ typeof query }} -->
    <!-- 遍历 query 结果中的所有文档，输出成列表 -->
    <!-- <ul>
      <li v-for="doc in articles" :key="doc.id">
        <NuxtLink :to="`/blog/${doc.slug}`">
          {{ doc.title }}
        </NuxtLink>
      </li>
    </ul> -->
  </section>
</template>

<style>
.adjust-anchor  {    
  padding-top: 80px; 
  margin-top: -80px; 
}
</style>
