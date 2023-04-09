<script setup lang="ts">
import { Article } from '~/types/global'

const articles = await queryContent<Article>('/blog').without(['body']).find()

const keyword = ref('')

// 遍历 articles，统计每个 tag 出现的次数，
// 并记录每篇文章的 title 和 path 和日期，最后返回一个数组
async function getTags() {
  const tags = {}
  const articles = await queryContent<Article>('/blog').without(['body']).find()
  // 遍历所有文章
  articles?.forEach((article: any) => {
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
  <NuxtLayout>
    <div class="grid grid-cols-12 gap-8">
      <section class="col-span-9">
        <!-- Grouped tag list -->
        <template v-for="[tag, details] in Object.entries(tags)">
          <section v-if="tag.indexOf(keyword) !== -1">
            <h2 class="first my-8 text-2xl font-semibold" :id="tag">
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
          </section>
        </template>
      </section>
      <aside class="col-span-3 border-x p-4">
        <h1>All Tags:</h1>

        <input
          type="text"
          placeholder="输入标签进行搜索"
          class="my-4 outline-dashed"
          v-model="keyword"
        />
        <!-- Tag names -->
        <ul class="flex flex-wrap gap-2 text-sm text-blue-500">
          <li v-for="[tag, details] in Object.entries(tags)" class="pr-0.5">
            <a :href="`#${tag}`"> {{ `#${tag}` }} ({{ details.count }}) </a>
          </li>
        </ul>
      </aside>
    </div>
  </NuxtLayout>
</template>
