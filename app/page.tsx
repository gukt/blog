export default function Home() {
  return (
    <div>
      <h1 className="text-5xl leading-[140px] font-bold">↗︎ 老司机的新赛道</h1>
      <p>来了？坐！</p>
      <p>我是拥有 20 年开发经验的一名软件工程师。</p>
      <p>目前住在上海，正在做一些有意思的项目。</p>
      <p>目前正在研究如何使用 AI 来提高开发效率，公司也是做 AI 相关的项目。</p>
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
      <footer>
        <div className="flex justify-between max-w-5xl">
          {/* Left */}
          <div>
            <p>老司机的新赛道</p>
            <p>每个网页都会排放二氧化碳，所以本站尽量极简。</p>
            <p>
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                沪ICP备2024012345号-1
              </a>
            </p>
            <div className="flex gap-2">
              <a href="mailto:gukaitong@gmail.com">Email</a>
              <a
                href="https://github.com/gukaitong"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/gukaitong"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <p>Copyright © 2024 - 2025</p>
          </div>
          {/* Right */}
          <div>
            <ul>
              <li>
                <a href="/en/projects/" title="项目列表">
                  项目列表
                </a>
              </li>
              <li>
                <a href="/en/log/" title="文章列表">
                  文章列表
                </a>
              </li>
              <li></li>
              <li>
                <a href="/en/graphic-design-torino/" title="都灵的平面设计">
                  平面设计
                </a>
              </li>
              <li>
                <a href="/en/web-development-torino/" title="网页设计和开发">
                  Web 开发
                </a>
              </li>
              <li>
                <a href="/en/books-editorial-design/" title="书籍和编辑设计">
                  图书
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
