export default function Footer() {
  return (
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
  );
}
