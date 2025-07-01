"use client";

import Link from "next/link";
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <nav className="mb-8">
        <ul className="flex gap-6 text-lg">
          <li>
            <Link
              href="/blog"
              className="hover:text-blue-600 transition-colors"
            >
              博客
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-blue-600 transition-colors"
            >
              项目
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
            >
              关于
            </Link>
          </li>
          <li>
            <Link
              href="/friends"
              className="hover:text-blue-600 transition-colors"
            >
              友链
            </Link>
          </li>
        </ul>
      </nav>
      <p>来了？坐！</p>
      <p>我是拥有 20 年开发经验的一名软件工程师。</p>
      <p>目前住在上海，从事 AI 开发工作，正在做一些有意思的项目。</p>
      <p>创建这个博客是为了方便和大家共同探讨，并记录和分享我的知识和经验。</p>
      <section className="mt-8 mb-10">
        <h2 className="sr-only">社交链接</h2>
        <p>
          <a
            href="https://github.com/gukaitong"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/gukaitong"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Twitter
          </a>
          <a
            href="mailto:gukaitong@gmail.com"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </p>
      </section>
      {/* Ideas */}
      <section id="ideas" className="mt-10 mb-20">
        <h2 className="sr-only">老司机撰写的文章列表</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th id="title" scope="col" colSpan={2}>
                想法
              </th>
              <th id="date" scope="col">
                发布
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td headers="title" />
              <td headers="title">
                <a href="/blog/website-must-be-accessible">网站必须可访问</a>
              </td>
              <td headers="date">
                <time dateTime="2018-09-09">2018 年 9 月 9 日</time>
              </td>
            </tr>
            <tr>
              <td headers="title" />
              <td headers="title">
                <a href="/blog/nothing-special">没什么特别的</a>
              </td>
              <td headers="date">
                <time dateTime="2018-08-02">2018 年 8 月 2 日</time>
              </td>
            </tr>
            <tr>
              <td headers="title" />
              <td headers="title">
                <a href="/blog/every-webpage-emits-carbon">
                  每个网页都会排放二氧化碳
                </a>
              </td>
              <td headers="date">
                <time dateTime="2018-01-02T20:29">2018 年 1 月 2 日 20:29</time>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* Portfolio */}
      <section id="portfolio">
        <h2>项目 / 作品集</h2>
        <p>
          自 2018
          年以来，诺玛一直通过平面设​​计、网页开发、编辑设计和企业品牌推广尝试激进的想法，她相信一张用
          Times New Roman 字体快速打印的 A4
          纸比任何装饰或神秘化都能更好地、更有效地进行沟通。
        </p>
        <div id="portfolio-desc" className="sr-only">
          以下是老司机的作品列表
        </div>
        <a
          href="/en/projects/torino-design-info/"
          aria-label="TorinoDesign.info 出版物“意大利：新的集体景观”。2023"
        >
          <figure>
            <img
              className="regular"
              alt="书籍设计"
              src="https://images.prismic.io/normadesign/b2f18ca5-bba9-4d97-93de-4209ab9f0012_homepage-torinodesign.png"
            />
            <figcaption>
              <h3>都灵设计信息</h3>
              <p>《意大利：新的集体景观》出版物。2023 年</p>
            </figcaption>
          </figure>
        </a>
      </section>
      <Footer />
    </div>
  );
}
