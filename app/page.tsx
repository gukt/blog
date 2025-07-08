"use client";

import SocialLinks from "@/app/ui/social-links";
import Ideas from "@/app/ui/ideas";
import Portfolio from "@/app/ui/portfolio";
import {
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section id="about" className="mt-8">
        <h2 className="sr-only">作者的简短介绍</h2>
        <p>我是一名拥有 20 年开发经验的软件工程师。</p>
        <p>目前住在上海，从事 AI 相关工作，正在做一些有意思的项目。</p>
        <p>
          创建这个博客是为了方便和大家共同探讨，并记录和分享我的知识和经验。
        </p>
      </section>
      <section id="social-links" className="mt-2 mb-10">
        <h2 className="sr-only">社交链接</h2>
        <SocialLinks />
      </section>
      <section id="ideas" className="mt-10">
        <h2 className="sr-only">想法列表</h2>
        <Ideas
          id="ideas"
          icon={<FileTextIcon className="w-7 h-7 stroke-1" />}
        />
      </section>
      {/* Portfolio */}
      <section id="portfolio" className="mt-13">
        <h2 className="my-8 text-4xl font-bold">项目与作品集</h2>
        <Portfolio />
      </section>
      <section id="events" className="mt-13">
        <h2 className="my-8 text-4xl font-bold">活动、事件</h2>
        <p>
          Norma
          完成了各种非商业项目，包括尝试抖动滤镜和增强现实技术、整理雅马哈乐器
          档案，以及参与创建都灵设计师名录torinodesign.info。此外，她还利用一些活动，在现实空间中进行视觉和概念探索：
        </p>
        <Ideas
          id="events"
          className="mt-10"
          icon={<CalendarIcon className="w-7 h-7 stroke-1" />}
        />
      </section>
    </>
  );
}
