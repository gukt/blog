<script setup lang="ts">
// 生成 50 个左右的技术标签，要求是真实的技术标签，不要乱写。
// #java #leetcode #linux #mysql #redis #spring #springcloud #三亚 #个人成长 #事件 #位运算 #内存结构 #分布式 #动态代理 #单元测试 #同步 #周志明的软件架构课 #垃圾回收算法 #垃圾收集器 #字节码 #实战 #对象创建 #工具 #并发编程 #异步编程 #技术方案设计 #操作系统 #架构 #游玩 #源码分析 #类加载 #系统设计 #线程 #线程模型 #线程池 #虚拟机内存 #观察者模式 #设计模式 #设计模式-创建型 #设计模式-结构型 #设计模式-行为型 #设计模式之美 #读书笔记 #转载 #锁 #集合
const tags = [
  'Java',
  'Linux',
  'Spring',
  '个人成长',
  '事件',
  '位运算',
  '内存结构',
  '分布式',
  '动态代理',
  '单元测试',
  '同步',
  '字节码',
  '实战',
  '对象创建',
  '工具',
  '并发编程',
  '异步编程',
  '技术方案设计',
  '操作系统',
  '架构',
  '游玩',
  '源码分析',
  '类加载',
  '系统设计',
  '线程',
  '线程模型',
  '线程池',
  '虚拟机内存',
  '观察者模式',
  '设计模式',
  '读书笔记',
  '转载',
  '锁',
  '集合',
]
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">标签</h1>

    <div class="mt-8 flex flex-wrap gap-x-4 gap-y-4">
      <span v-for="tag in tags" :key="tag"> #{{ tag }} </span>
    </div>
  </div>
</template>
