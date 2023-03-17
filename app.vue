<script setup>
// 这里会覆盖文档中的 title 和 description,暂且注释掉。
// useHead({
//   title: 'My Blog',
//   meta: [
//     {
//       name: 'description',
//       content: 'My blog description',
//     },
//   ],
// })

import { title } from 'process'

// 百度统计脚本
const baiduAnalysisScript = `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?d967f557ef708ed81d720009776dd60d";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
`
// https://nuxt.com/docs/api/configuration/nuxt-config/#head
// userHead 中的定义会覆盖 nuxt.config 中的定义
useHead({
  // base: {
  //   href: '/',
  // },
  // title: 'My Blog',
  titleTemplate: '%s - My Blog',
  // charset: 'utf-8',
  // description: 'My blog description',
  script: [
    // 这是添加百度统计的脚本（推荐）
    // {
    //   innerHTML: baiduAnalysisScript,
    //   type: 'text/javascript',
    //   charset: 'utf-8',
    // },
    // 这是添加百度统计的另一种方式，直接给出地址
    // {
    //   src: 'https://hm.baidu.com/hm.js?d967f557ef708ed81d720009776dd60d',
    //   type: 'text/javascript',
    //   charset: 'utf-8',
    // },
  ],
  // 添加样式表文件链接
  // link: [
  //   // <link rel="stylesheet" href="https://myawesome-lib.css">
  //   { rel: 'stylesheet', href: 'https://awesome-lib.css' },
  // ],
  // please note that this is an area that is likely to change
  // style: [
  //   // <style type="text/css">:root { color: red }</style>
  //   { children: ':root { color: red }', type: 'text/css' },
  // ],
  // 在 body 标签中添加属性
  // bodyAttrs: {
  //   class: 'bg-gray-100',
  //   'data-tooltip': 'Hello, I am the body',
  //   foo: 'foo',
  //   bar: 'bar',
  // },
  noscript: [
    // <noscript>JavaScript is required</noscript>
    { children: 'JavaScript is required' },
  ],
})

useSeoMeta({})

// useServerSeoMeta({
//   title: 'My Amazing Site',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })
</script>
<template>
  <!-- AppLayout -->
  <AppLayout>
    <!-- Route Entry -->
    <NuxtPage />
  </AppLayout>
</template>
