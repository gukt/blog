import SocialLinks from "./social-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between max-w-xl text-base">
      {/* Left */}
      <div>
        <p>老司机的新赛道</p>
        <p>每个网页都会排放二氧化碳，所以本站尽量极简。</p>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 block"
        >
          沪ICP备2024012345号-1
        </a>
        <p className="mt-2">Copyright © 2024 - 2025</p>
      </div>
      {/* Right */}
      <div>
        <ul>
          <li>
            <Link href="/projects/">项目列表</Link>
          </li>
          <li>
            <Link href="/blog/" title="文章列表">
              文章列表
            </Link>
          </li>
          <li>
            <a href="/sitemap.xml" title="站点地图">
              站点地图
            </a>
          </li>
          <li>
            <SocialLinks />
          </li>
        </ul>
      </div>
    </footer>
  );
}
